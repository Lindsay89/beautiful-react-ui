import React, { PureComponent, ReactElement, Children, ReactChild } from 'react';
import classNames from 'classnames';

import { ButtonProps } from '../Button/Button';
import { Size, Color } from '../../../shared';

import './button.group.scss';

export type ButtonGroupProps = {
  rounded?: boolean,
  outline?: boolean,
  fluid?: boolean,
  color?: Color,
  size?: Size
  className?: string,
  children?: ReactElement<ButtonProps> | ReactElement<ButtonProps>[],
};

class ButtonGroup extends PureComponent<ButtonGroupProps> {

  static defaultProps: Partial<ButtonGroupProps> = {
    color: 'default',
    size: 'default',
    fluid: false,
    outline: false,
    rounded: false,
  };

  cloneButton(child: ReactChild) {
    const button = child as ReactElement<ButtonProps>;
    const { rounded, outline, size, color } = this.props;
    const buttonProps: any = {
      color,
    };

    // overrides the rounded prop
    if (rounded && !button.props.rounded) {
      buttonProps.rounded = rounded;
    }

    // overrides the outline prop
    if (outline && !button.props.outline) {
      buttonProps.outline = outline;
    }

    // overrides the size prop
    if (size && !button.props.size) {
      buttonProps.size = size;
    }

    return React.cloneElement(button, buttonProps);
  }

  render() {
    const { children, className, fluid } = this.props;

    return (
      <div className={classNames('bi bi-btn-group', { fluid }, className)}>
        {Children.map(children, (button: ReactChild) => (this.cloneButton(button)))}
      </div>
    );
  }
}

export default ButtonGroup;
