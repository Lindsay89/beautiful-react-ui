import React from 'react';
import classNames from 'classnames';

// styles
import '../styles/label.scss';

// types
import { Color } from '../../../../shared';

type LabelProps = {
  text: string,
  required?: boolean,
  color?: Color,
  className?: string,
};

const Label = ({ text, required, color, className }: LabelProps) => (
  <label className={classNames('bi bi-label', `label-${color || 'default'}`, { required }, className)}>
    {text}{required && <span>*</span>}
  </label>
);

export default Label;
