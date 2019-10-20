import { ComponentClass } from 'react';
import { Color, Size, Callback } from './shared';
import { IconProp } from './Icon';

export type ButtonProps = {
  color?: Color,
  size?: Size,
  outline?: boolean,
  rounded?: boolean,
  type?: 'submit' | 'button' | 'reset',
  disabled?: boolean,
  block?: boolean,
  hover?: boolean | 'round' | 'zoom' | 'shrink' | 'float' | 'reflection',
  onClick?: Callback<Event, undefined>,
  icon?: IconProp,
  spinner?: any, //TODO: fix
  pill?: any, // TODO: fix
};

declare const Button: ComponentClass<ButtonProps>;

export default Button;
