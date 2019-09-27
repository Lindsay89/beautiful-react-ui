import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Portal from '../_Portal/Portal';
import getElementAbsolutePosition from './getElementAbsolutePosition';
import { Placement, useWindowResize } from '../../../shared';

import './floating-content.scss';

/**
 * A FloatingContent shows its own children components floating on a given trigger (possibly another React component).
 */
const FloatingContent = (props) => {
  const {
    trigger, isShown, onToggle, action, placement, offset, clickOutsideToToggle, widthAsTrigger,
    children, className, ...rest
  } = props;
  const triggerWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [elementStyle, setElementStyle] = useState(null);
  const [mouseIsHovering, setMouseHover] = useState(false);

  const classList = classNames('bi bi-floater', {
    'float-top-left': placement === 'top-left',
    'float-top-center': placement === 'top-center',
    'float-top-right': placement === 'top-right',
    'float-left-center': placement === 'left-center',
    'float-right-center': placement === 'right-center',
    'float-bottom-left': placement === 'bottom-left',
    'float-bottom-center': placement === 'bottom-center',
    'float-bottom-right': placement === 'bottom-right',
  }, className);

  // Derives the component's position from the trigger's wrapper element then set it as elementStyle state.
  const calcPopupPosition = () => {
    if (isShown && triggerWrapperRef.current) {
      const nextStyle = getElementAbsolutePosition(triggerWrapperRef.current, placement, offset, widthAsTrigger);

      setElementStyle(nextStyle);
    }
  };

  // handles the clicks outside the floating content (and outside the current trigger)
  const clickOutsideHandler = ({ target }) => {
    if (isShown
      && (triggerWrapperRef.current && !triggerWrapperRef.current.contains(target))
      && (contentWrapperRef.current && !contentWrapperRef.current.contains(target))) {
      onToggle();
    }
  };

  // recalculates the component's position when one of the following props change
  useEffect(calcPopupPosition, [isShown, offset, placement, children]);

  // recalculates the component's position on window resize
  useWindowResize(calcPopupPosition);

  // adds the click event listener when clickOutsideToToggle is true and when action is click
  useEffect(() => {
    if (triggerWrapperRef.current && contentWrapperRef.current && clickOutsideToToggle && action === 'click') {
      document.addEventListener('click', clickOutsideHandler);
    }

    return () => {
      document.removeEventListener('click', clickOutsideHandler);
    };
  }, [triggerWrapperRef.current, contentWrapperRef.current]);

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
      <span className="bi bi-float-trigger" ref={triggerWrapperRef} role="complementary" {...actions}>
        {trigger}
      </span>
      {!isShown ? null : (
        <Portal id="bi-floats">
          {/* The floating content is shown within a Portal to avoid layout glitches */}
          <div {...rest} className={classList} style={elementStyle} ref={contentWrapperRef}>
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

FloatingContent.propTypes = {
  /**
   * Defines the React node to apply the floating content to
   */
  trigger: PropTypes.node.isRequired,
  /**
   * Defines the callback to be performed each time the event defined by the `action` prop fires,
   * by default a `click` event
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Defines whether the floating content is shown or not
   */
  isShown: PropTypes.bool,
  /**
   * Defines when to fire the onToggle callback, it can be `click` or `hover`
   */
  action: PropTypes.oneOf(['click', 'hover']),
  /**
   * If the `action` prop is set to `click`, it's possible to define if the `onToggle` callback should be performed
   * when clicking outside of the trigger
   */
  clickOutsideToToggle: PropTypes.bool,
  /**
   * Defines the popup placement
   */
  placement: Placement,
  /**
   * Defines a number in pixel to possibly separate the popup from the trigger
   */
  offset: PropTypes.number,
  /**
   * Defines if the floating content should have the same width of its trigger
   */
  widthAsTrigger: PropTypes.bool,
};

FloatingContent.defaultProps = {
  isShown: false,
  action: 'click',
  clickOutsideToToggle: true,
  placement: 'top-center',
  offset: 0,
  widthAsTrigger: false,
};

export default React.memo(FloatingContent);
