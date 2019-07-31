import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Portal from '../_Portal/Portal';
import getElementAbsolutePosition from './getElementAbsolutePosition';
import { useWindowResize } from '../../../shared';

import './popup.scss';

/**
 * A Popup is a transient view that shows its content when a user clicks or hovers a defined area.
 * (possibly another component).
 */
const Popup = (props) => {
  const {
    trigger, isOpen, onToggle, action, title, placement, hideArrow, offset, children, className, ...rest
  } = props;
  const triggerWrapperRef = useRef(null);
  const [elementStyle, setElementStyle] = useState(null);
  const [mouseIsHovering, setMouseHover] = useState(false);

  const classList = classNames('bi bi-popup', {
    'popup-top-left': placement === 'top-left',
    'popup-top-center': placement === 'top-center',
    'popup-top-right': placement === 'top-right',
    'popup-left-center': placement === 'left-center',
    'popup-right-center': placement === 'right-center',
    'popup-bottom-left': placement === 'bottom-left',
    'popup-bottom-center': placement === 'bottom-center',
    'popup-bottom-right': placement === 'bottom-right',
    'popup-hide-arrow': hideArrow === true,
  }, className);

  // Derives the component's position from the trigger's wrapper element then set it as elementStyle state.
  const calcPopupPosition = () => {
    if (isOpen && triggerWrapperRef.current) {
      const nextStyle = getElementAbsolutePosition(triggerWrapperRef.current, placement, offset);
      setElementStyle(nextStyle);
    }
  };

  // recalculate the component's position when one of the following props change
  useEffect(calcPopupPosition, [isOpen, offset, title, placement, children, hideArrow]);

  // recalculate the component's position on window resize
  useWindowResize(calcPopupPosition);

  /**
   * onMouseEnter and onMouseLeave functions are both used to handle the hover action by toggling the
   * mouseIsHovering state and firing the onToggle callback
   */
  const onMouseEnter = () => {
    if (!mouseIsHovering) {
      setMouseHover(true);
      onToggle();
    }
  };

  const onMouseLeave = () => {
    if (mouseIsHovering) {
      setMouseHover(false);
      onToggle();
    }
  };

  const actions = {
    onClick: action === 'click' ? onToggle : undefined,
    onMouseEnter: (action === 'hover') ? onMouseEnter : undefined,
    onMouseLeave: action === 'hover' ? onMouseLeave : undefined,
  };

  return (
    <>
      {/* To easily access the trigger's position we wrap it within a referenced span */}
      <span className="bi-popup-trigger" ref={triggerWrapperRef} role="complementary" {...actions}>
        {trigger}
      </span>
      {!isOpen ? null : (
        <Portal id="bi-popups">
          {/* The actual popup is shown within a Portal to avoid layout glitches */}
          <div {...rest} className={classList} style={elementStyle}>
            {title && <h1 className="popup-title">{title}</h1>}
            <div className="popup-content">{children}</div>
          </div>
        </Portal>
      )}
    </>
  );
};


Popup.propTypes = {
  /**
   * Defines the React node to apply the popup to
   */
  trigger: PropTypes.node.isRequired,
  /**
   * Defines the callback to be performed each time the event defined by the `action` prop fires, generally `click`
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Defines whether the popup is shown or not
   */
  isOpen: PropTypes.bool,
  /**
   * Defines when to fire the onToggle callback, can be `click` or `hover`
   */
  action: PropTypes.oneOf(['click', 'hover']),
  /**
   * Define the possible popup title
   */
  title: PropTypes.string,
  /**
   * Defines the popup placement
   */
  placement: PropTypes.string,
  /**
   * Defines whether or not the popup should possibly show the trigger-referencing arrow.
   */
  hideArrow: PropTypes.bool,
  /**
   * Defines a number in pixel to possibly separate the popup from the trigger
   */
  offset: PropTypes.number,
};

Popup.defaultProps = {
  isOpen: false,
  action: 'click',
  title: null,
  placement: 'top-center',
  hideArrow: false,
  offset: 10,
};

export default React.memo(Popup);
