import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { IconName } from '../iconNames';

// models
import { Size, Color } from '../../../../shared';

// styles
import '../Elegant-Icon-font/style.css';
import '../styles/icon.scss';

export type IconProps = {
  /**
   * the Elegant Icon glyph's name.
   */
  name: IconName,
  /**
   * the size of the icon, can be one of the following defined size: 'small', 'medium', 'large' or can be 'custom'.
   * By choosing 'custom' the '.custom-size' CSS class will be added to the component so it can subsequently
   * be overwritten for layout purposes.
   * @default 'small'
   */
  size?: Size | number | string,

  /**
   * the color of the icon.
   * @default 'primary'
   */
  color?: Color,

  /**
   * @ignore
   */
  className?: string,
};

class Icon extends PureComponent<IconProps> {
  static defaultProps: Partial<IconProps> = {
    size: 'default',
  };

  render() {
    const { name, size, color, className } = this.props;
    const style: any = {};
    const colorClass = !!color ? `icon-${color}` : null;

    const classes = classNames('bi', 'bi-icon', colorClass, name, {
      'icon-sm': size === 'small',
      'icon-lg': size === 'large',
    }, className);

    if (typeof size === 'number' && size > 0) {
      style.fontSize = `${size}px`;
    }

    if (typeof size === 'string' && (size !== 'default' && size !== 'small' && size !== 'large')) {
      style.fontSize = size;
    }

    return (<i className={classes} style={style} />);
  }
}

export default Icon;
