import { FunctionComponent, ReactElement } from 'react';
import { Color, Size, Callback } from './shared';
import { IconProp } from './Icon';
import { SpinnerProp } from './Spinner';

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
  spinner?: boolean | ReactElement<SpinnerProp>
  pill?: any, // TODO: fix
};

declare const Button: FunctionComponent<ButtonProps>;

export default Button;
