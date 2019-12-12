import React from 'react';
import PropTypes from 'prop-types';

const CustomDiagramRender = (props) => {
  const { renderer, ...rest } = props;
  return renderer(rest);
};

CustomDiagramRender.propTypes = {
  /**
   * The actual renderer
   */
  renderer: PropTypes.func.isRequired,
  /**
   * The diagram node id
   */
  id: PropTypes.oneOfType([PropTypes.string]).isRequired,
  /**
   * The diagram content
   */
  content: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
  /**
   * An array of input ports
   */
  inputs: PropTypes.arrayOf(PropTypes.node),
  /**
   * An array of output ports
   */
  outputs: PropTypes.arrayOf(PropTypes.node),
};

export default React.memo(CustomDiagramRender);
