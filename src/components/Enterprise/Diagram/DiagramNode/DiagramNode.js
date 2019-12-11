import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CustomRenderer from './CustomRenderer';
import getDiagramNodeStyle from './getDiagramNodeStyle';
import { usePortRegistration, useNodeRegistration } from '../utils/useContextRegistration';
import { PortType } from '../utils/Types';
import portGenerator from './portGenerator';
import { useDrag } from '../../../../shared';

/**
 * A Diagram Node component displays a single diagram node, handles the drag n drop business logic and fires the
 * related callback. Displays input and output ports if existing and takes care of firing the `onPortRegister` callback
 * when a port is ready (aka rendered),
 */
const DiagramNode = (props) => {
  const {
    id, content, coordinates, type, inputs, outputs, onPositionChange, onPortRegister, onDragNewSegment, onMount,
    onSegmentFail, onSegmentConnect, renderer, className,
  } = props;
  const registerPort = usePortRegistration(inputs, outputs, onPortRegister); // get the port registration method
  const { ref, onDragStart, onDrag } = useDrag({ throttleBy: 14 }); // get the drag n drop methods
  const dragStartPoint = useRef(coordinates); // keeps the drag start point in a persistent reference

  // when drag starts, save the starting coordinates into the `dragStartPoint` ref
  onDragStart(() => {
    dragStartPoint.current = coordinates;
  });

  // whilst dragging calculates the next coordinates and perform the `onPositionChange` callback
  onDrag((event, info) => {
    if (onPositionChange) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      const nextCoords = [dragStartPoint.current[0] - info.offset[0], dragStartPoint.current[1] - info.offset[1]];
      onPositionChange(id, nextCoords);
    }
  });

  // perform the onMount callback when the note is allowed to register
  useNodeRegistration(ref, onMount, id);

  const classList = useMemo(() => classNames('bi bi-diagram-node', {
    [`bi-diagram-node-${type}`]: !!type && !renderer,
  }, className), [type, className]);

  // generate ports
  const InputPorts = inputs.map(portGenerator(registerPort, onDragNewSegment, onSegmentFail, onSegmentConnect));
  const OutputPorts = outputs.map(portGenerator(registerPort, onDragNewSegment, onSegmentFail, onSegmentConnect));
  const customRendererProps = { renderer, id, content, type, inputs: InputPorts, outputs: OutputPorts, className };

  return (
    <div className={classList} ref={ref} style={getDiagramNodeStyle(coordinates)}>
      {renderer && typeof renderer === 'function' && (<CustomRenderer {...customRendererProps} />)}
      {!renderer && (
        <>
          {content}
          <div className="bi-port-wrapper">
            <div className="bi-input-ports">
              {InputPorts}
            </div>
            <div className="bi-output-ports">
              {OutputPorts}
            </div>
          </div>
        </>
      )}
    </div>
  );
};


DiagramNode.propTypes = {
  /**
   * The diagram node id
   */
  id: PropTypes.oneOfType([PropTypes.string]).isRequired,
  /**
   * The diagram current coordinates, relative to the container
   */
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * The diagram content
   */
  content: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
  /**
   * An array of input ports
   */
  inputs: PropTypes.arrayOf(PortType),
  /**
   * An array of output ports
   */
  outputs: PropTypes.arrayOf(PortType),
  /**
   * The node type
   */
  type: PropTypes.oneOf(['default']),
  /**
   * Defines a custom renderer
   */
  renderer: PropTypes.func,
  /**
   * The callback to be fired when position changes
   */
  onPositionChange: PropTypes.func,
  /**
   * The callback to be fired when a new diagram is mounted
   */
  onMount: PropTypes.func,
  /**
   * The callback to be fired when a new port is settled
   */
  onPortRegister: PropTypes.func,
  /**
   * The callback to be fired when dragging a new segment from one of the node's port
   */
  onDragNewSegment: PropTypes.func,
  /**
   * The callback to be fired when a new segment fails to connect
   */
  onSegmentFail: PropTypes.func,
  /**
   * The callback to be fired when a new segment connects to a port
   */
  onSegmentConnect: PropTypes.func,
  /**
   * The possible className
   */
  className: PropTypes.string,
};

DiagramNode.defaultProps = {
  type: 'default',
  content: '',
  inputs: [],
  outputs: [],
  onPositionChange: undefined,
  renderer: undefined,
  onMount: undefined,
  onPortRegister: undefined,
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined,
  className: '',
};

export default React.memo(DiagramNode);
