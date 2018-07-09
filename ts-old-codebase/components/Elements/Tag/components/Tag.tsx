/* tslint:disable:max-line-length */

import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

import '../styles/tag.scss';

// types
import { Color, Size } from '../../../../shared';

export type TagProps = {
  className?: string,
  closable?: boolean,
  children?: ReactNode,
  color?: Color,
  size?: Size,
  onClose?: () => any,
};

class Tag extends PureComponent<TagProps> {

  static defaultProps: Partial<TagProps> = {
    className: '',
    color: 'default',
  };

  handleClick() {
    const { closable, onClose } = this.props;

    if (closable && onClose) {
      onClose();
    }
  }

  render() {
    const { children, className, closable, color, size } = this.props;

    const classes = classNames('bi bi-tag', `tag-${color}`, className, {
      closable,
      'tag-sm': size === 'small',
      'tag-lg': size === 'large',
    });

    return (
      <span className={classes} onClick={() => this.handleClick()}>
        {children}
        {closable &&
        <svg viewBox="0 0 174.239 174.239">
          <path d="M87.12 0C39.082 0 0 39.082 0 87.12s39.082 87.12 87.12 87.12 87.12-39.082 87.12-87.12S135.157 0 87.12 0zm0 159.305c-39.802 0-72.185-32.383-72.185-72.185S47.318 14.935 87.12 14.935s72.185 32.383 72.185 72.185-32.384 72.185-72.185 72.185z" />
          <path d="M120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0L87.12 76.568 63.969 53.414c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154a7.464 7.464 0 0 0 0 10.559 7.445 7.445 0 0 0 5.28 2.188 7.437 7.437 0 0 0 5.28-2.188L87.12 97.686l23.151 23.153a7.445 7.445 0 0 0 5.28 2.188 7.442 7.442 0 0 0 5.28-2.188 7.464 7.464 0 0 0 0-10.559L97.679 87.127l23.151-23.153a7.465 7.465 0 0 0 0-10.56z" />
        </svg>
        }
      </span>
    );
  }
}

export default Tag;
