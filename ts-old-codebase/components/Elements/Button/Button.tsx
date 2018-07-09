import classNames from 'classnames';
import React, { ReactElement, FC } from 'react';

// style
import './styles/button.scss';

// utils
import { createIconFromProps, createSpinnerFromProps, makeCallback } from '../../../shared/utils';

// types
import { Color, Size, Callback, BaseProps } from '../../../shared';
import { IconName } from '../Icon/iconNames';
import { IconProps } from '../Icon/components/Icon';
import { SpinnerProps } from '../Spinner/components/Spinner';

type HoverEffect = 'round' | 'zoom' | 'shrink' | 'float' | 'reflection';

export type ButtonProps = BaseProps & {
  /**
   * makes the button rounded
   * @default false
   */
  rounded?: boolean,
  /**
   * shows the outlines only
   * @default false
   */
  outline?: boolean,
  /**
   * makes the button completely fluid (full width)
   * @default false
   */
  fluid?: boolean,
  /**
   * define the button's color, can be 'default', 'primary', 'secondary', 'info', 'warning', 'success', 'error'
   * or 'transparent'
   * @default "default"
   */
  color?: Color,

  /**
   * define the button's size, can be 'small', 'default', 'large'
   * @default "default"
   */
  size?: Size,

  /**
   * defines the button's type
   * @default undefined
   */
  type?: 'submit' | 'button'

  /**
   * defines the hover effect, can be 'round', 'zoom',  'shrink',  'float', 'reflection'
   * @default undefined
   */
  hoverEffect?: boolean | HoverEffect,

  /**
   * disables the button
   * @default false
   */
  disabled?: boolean,

  /**
   * button's action
   * @default undefined
   */
  onClick?: Callback<Event>

  /**
   * shows an icon, you can pass both the icon name or the instance of an <Icon /> component
   */
  icon?: IconName | ReactElement<IconProps>,

  /**
   * define the icon's position
   */
  iconPosition?: 'left' | 'right',

  /**
   * shows the spinning wheel, you can pass "true" to show a standard <Spinner /> or you can pass an instance of
   * a <Spinner /> component
   * @default false
   */
  spinner?: boolean | ReactElement<SpinnerProps>,

  /**
   * define the spinner's position
   * @default 'left'
   */
  spinnerPosition?: 'left' | 'right',
};

/**
 * A Button component is used to indicates a user's action
 */
const Button: FC<ButtonProps> = (props) => {
  const {
    children, type, fluid, color, rounded, outline, disabled, size, icon, iconPosition,
    spinner, spinnerPosition, hoverEffect, onClick, className, id, style,
  } = props;

  const buttonClasses = classNames('bi bi-btn', `btn-${color}`, {
    'btn-fluid': fluid,
    'btn-outline': outline,
    'btn-rounded': rounded,
    'btn-he-zoom': hoverEffect === 'zoom',
    'btn-he-float': hoverEffect === 'float' || hoverEffect === true,
    'btn-he-shrink': hoverEffect === 'shrink',
    'btn-he-refl': hoverEffect === 'reflection',
    'btn-he-rnd': hoverEffect === 'round',
    'btn-spinner': !!spinner,
    'btn-sm': size === 'small',
    'btn-lg': size === 'large',
    'btn-icon': !!icon,
    'n-c': !children,
  }, className);

  const buttonProps = { id, style, type, disabled, className: buttonClasses };

  return (
    <button {...buttonProps} onClick={makeCallback(onClick)}>
      {/* Generate spinner if exists */}
      {!!spinner && createSpinnerFromProps(spinner, outline ? color : 'white', classNames('btn-spnr-icon', {
        'spnr-right': spinnerPosition === 'right',
      }))}

      {/* Generate icon if exists */}
      {!!icon && createIconFromProps(icon, undefined, size, classNames('btn-icon-item', {
        'btn-icon-right': iconPosition === 'right',
      }))}

      {children}
    </button>
  );
};

Button.propTypes = {

};

Button.defaultProps = {
  color: 'default',
  type: 'button',
};

export default Button;
