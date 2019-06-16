import React, { Children } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BaseProps, Color, Size } from '../../../shared';
import Button from '../Button';

import './button.group.scss';

/**
 * overrides the button instance props with the group ones
 * @param buttonInstance
 * @param props
 */
const cloneButton = (buttonInstance, props) => {
  if (buttonInstance.type !== Button) {
    /**
     * Eslint force the developer to not have any `console` statement in the code, in this case we want to warn the
     * user without throwing an error so it's perfectly safe to disable this rule.
     */
    /* eslint-disable-next-line no-console */
    console.warn(
      'ButtonGroup\'s children can only be instances of the Button component, any other instance has been wiped out.',
    );
    return null;
  }

  return React.cloneElement(buttonInstance, props);
};

/**
 * Wraps a number of buttons an makes em group
 */
const ButtonGroup = ({ children, id, className, style, block, ...props }) => {
  // the reason I'm disabling eslint "react/destructuring-assignment" rule is that I want to keep some props within the
  // props constant, as it will then be passed as a parameter to the cloneButton function.
  /* eslint-disable react/destructuring-assignment */
  const classList = classNames('bi bi-btn-group', `btn-group-${props.color}`, {
    'group-block': block,
    'group-outline': props.outline,
    'group-rounded': props.rounded,
  }, className);
  /* eslint-enable react/destructuring-assignment */

  return (
    <span className={classList} id={id} style={style}>
      {Children.map(children, child => cloneButton(child, props))}
    </span>
  );
};


ButtonGroup.propTypes = {
  ...BaseProps,
  /**
   * Defines the buttons color, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `error`
   * or `transparent`
   * @default "default"
   */
  color: Color,
  /**
   * Defines the buttons' size, can be `small`, `default`, `large`
   * @default "default"
   */
  size: Size,
  /**
   * Applies the outline style to the buttons
   * @default false
   */
  outline: PropTypes.bool,
  /**
   * Makes the buttons rounded
   * @default false
   */
  rounded: PropTypes.bool,
  /**
   * Makes the button completely fluid (full width)
   * @default false
   */
  block: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node,
};

ButtonGroup.defaultProps = {
  color: 'default',
  size: 'default',
  outline: false,
  rounded: false,
  block: false,
  children: null,
};

export default React.memo(ButtonGroup);
