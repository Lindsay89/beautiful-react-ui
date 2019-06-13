import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';
import PropTypes from 'prop-types';
import { Color, Size, makeCallback, BaseProps, BaseFormProps } from '../../../shared';
import Label from '../_Label';
import HelpText from '../_HelpText';

import './toggle.scss';

/**
 * Toggle is an controlled component to be used as a glorified checkbox
 */
const Toggle = (props) => {
  const { color, size, value, onChange, className, label, helpText, name, style, id } = props;
  const uid = id || uniqueId('bi-toggle-');

  const classes = classNames('bi bi-toggle', `toggle-${color}`, {
    toggled: value,
    'toggle-sm': size === 'small',
    'toggle-lg': size === 'large',
    block: !!(label || helpText),
  }, className);

  const onChangeCb = makeCallback(onChange, !value);

  return (
    <span className={classes} style={style} id={uid}>
      {label && (
        <Label text={label} htmlFor={`${uid}-input`}>
          <input type="checkbox" defaultChecked={value} name={name} id={`${uid}-input`} />
        </Label>
      )}
      {!label && (
        <input type="checkbox" defaultChecked={value} name={name} id={`${uid}-input`} />
      )}
      <span className="toggle-switch" onClick={onChangeCb} onKeyDown={onChangeCb} role="button" tabIndex={0}>
        <small className="switchery" />
      </span>
      {helpText && <HelpText text={helpText} />}
    </span>
  );
};


Toggle.propTypes = {
  ...BaseProps,
  ...BaseFormProps,
  /**
   * defines the toggle background color when toggled
   * @default default
   */
  color: Color,
  /**
   * defines the toggle size
   * @default default
   */
  size: Size,
  /**
   * the value of the toggle
   */
  value: PropTypes.bool.isRequired,
  /**
   * on toggle change callback
   */
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  color: 'default',
  size: 'default',
};

export default Toggle;
