import React, { FC, Fragment } from 'react';
import classNames from 'classnames';

// components
import HelpText from '../_HelpText/components/HelpText';
import Label from '../_Label/components/Label';

// utils
import { makeCallback } from '../../../common';

// styles
import './styles/toggle.scss';

// types
import { Color, Size, Callback, Style } from '../../../shared';

export type ToggleProps = {
  /**
   * defines the background color of the toggle when toggled
   * @default default
   */
  color?: Color,
  /**
   * defines the size of the toggle
   * @default default
   */
  size?: Size,
  /**
   * the value of the toggle
   */
  value?: boolean,
  /**
   * the name of the input field
   * @default: undefined
   */
  name?: string,
  label?: string,
  helpText?: string,
  /**
   * on toggle change callback
   */
  onChange?: Callback<Event, boolean>,
  /**
   * @ignore
   */
  className?: string,
  /**
   * ignore
   */
  id?: string,
  /**
   * @ignore
   */
  style?: Style,
};

const Toggle: FC<ToggleProps> = (props) => {
  const { color, size, value, onChange, className, label, helpText, name, style, id } = props;

  const classes = classNames('bi bi-toggle', `toggle-${color}`, {
    toggled: value,
    'toggle-sm': size === 'small',
    'toggle-lg': size === 'large',
    block: !!(label || helpText),
  }, className);

  return (
    <span className={classes} style={style} id={id}>
      {label && <Label text={label} />}
      <span className="toggle-switch"  onClick={makeCallback(onChange, !value)} tabIndex={0}>
        <small className="switchery" />
        <input type="checkbox" defaultChecked={value} name={name} />
      </span>
      {helpText && <HelpText text={helpText} />}
    </span>
  );
};

Toggle.defaultProps = {
  color: 'default',
  value: false,
};

export default Toggle;
