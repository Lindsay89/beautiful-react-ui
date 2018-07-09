import React, { Component, SyntheticEvent } from 'react';
import classNames from 'classnames';

// styles
import '../styles/checkbox.scss';

// utils
import generateCallback from '../../../../common/generateCallback/generateCallback';

// types
import { Color, Callback } from '../../../../shared';

export type CheckboxProps = {
  /**
   * the Id of the input field
   * @default: undefined
   */
  id?: string,
  /**
   * the input field name
   * @default undefined
   */
  name?: string,
  /**
   * The checkbox label
   * @default false
   */
  label: string;
  /**
   * The checkbox color
   * @defualt 'default'
   */
  color?: Color;
  /**
   * Mark the checkbox as checked
   * @default false
   */
  checked?: boolean;
  /**
   * Makes the checkbox disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * on checkbox change callback
   * @param {boolean} checked
   * @returns {any}
   */
  onChange?: Callback<Event, boolean>,
  /**
   * makes the checkbox rounded
   * @default false
   */
  rounded?: boolean,
  /**
   * @ignore
   */
  className?: string,
};

/**
 * The Checkbox component specifies an input of 'checkbox' type.
 */
class Checkbox extends Component<CheckboxProps> {

  static defaultProps: Partial<CheckboxProps> = {
    checked: false,
    disabled: false,
    rounded: false,
    className: '',
    color: 'default',
  };

  toggleCheckbox(event: SyntheticEvent) {
    const { onChange, disabled, checked } = this.props;

    if (!disabled) {
      generateCallback(event, onChange, checked);
    }
  }

  render() {
    const { id, checked, disabled, color, label, name, rounded, className } = this.props;

    const classes = classNames('bi bi-checkbox', `checkbox-${color}`, {
      checked,
      disabled,
      rounded,
    }, className);

    return (
      <div className={classes} onClick={event => this.toggleCheckbox(event)}>
        <input type="checkbox" id={id} name={name} disabled={disabled} defaultChecked={checked}/>
        <span className="check-icon">
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"/>
          </svg>
        </span>
        <label>{label}</label>
      </div>
    );
  }
}

export default Checkbox;
