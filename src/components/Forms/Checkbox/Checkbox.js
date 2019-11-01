import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, makeCallback } from '../../../shared';
import HelpText from '../_HelpText';
import Label from '../Label';

import './checkbox.scss';

/**
 * Checkbox component
 */
const Checkbox = (props) => {
  const { value, onChange, label, color, helpText, className, style, ...rest } = props;
  const clickHandler = !rest.disabled ? makeCallback(onChange, !value) : undefined;

  const classList = classNames('bi bi-checkbox', `checkbox-${color}`, {
    checked: !!value,
    disabled: rest.disabled,
  }, className);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className={classList} onClick={clickHandler} tabIndex={0} role="checkbox" aria-checked={value} style={style}>
        <input type="checkbox" value={value} {...rest} />
        <span className="check-icon">
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <Label htmlFor={rest.id} required={rest.required}>{label}</Label>
      </div>
      {helpText && <HelpText text={helpText} />}
    </>
  );
};

Checkbox.propTypes = {
  /**
   * The checkbox value, boolean
   */
  value: PropTypes.bool.isRequired,
  /**
   * The checkbox on change handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Defines the checkbox label
   */
  label: PropTypes.string.isRequired,
  /**
   * Defines the checkbox background color
   */
  color: Color,
  /**
   * Defines input type
   */
  disabled: PropTypes.bool,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.shape({}),
};


Checkbox.defaultProps = {
  style: undefined,
  color: 'default',
  disabled: false,
  helpText: undefined,
};

export default React.memo(Checkbox);
