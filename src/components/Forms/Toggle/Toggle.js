import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, makeCallback, makeKeyboardCallback } from '../../../shared';

import './toggle.scss';

/**
 * A Toggle switch is a boolean input field mostly used to get a boolean-like response from the user:
 * *yes/no*, *true/false*.<br />
 * Similar to Checkbox a toggle switch is commonly used as checkbox replacements in modern user interfaces.
 */
const Toggle = (props) => {
  const { value, onChange, color, className, SwitchRender, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-toggle', `bi-toggle-${color}`, {
    toggled: value,
  }, className), [value, color, className]);

  const onClick = useCallback(makeCallback(onChange, !value), [onChange, value]);
  const onKeyUp = useCallback(makeKeyboardCallback(onChange, !value), [onChange, value]);

  return (
    <div className={classList} role="button" tabIndex={0} onClick={onClick} onKeyUp={onKeyUp} {...rest}>
      <SwitchRender className="bi-toggle-switch" />
    </div>
  );
};

Toggle.propTypes = {
  /**
   * The toggle value, boolean
   */
  value: PropTypes.bool.isRequired,
  /**
   * The toggle on change handler
   */
  onChange: PropTypes.func,
  /**
   * The toggle color
   */
  color: Color,
  /**
   * Define the toggle switch component
   */
  SwitchRender: PropTypes.elementType,
};

Toggle.defaultProps = {
  onChange: undefined,
  color: 'success',
  SwitchRender: 'div',
};

export default Toggle;
