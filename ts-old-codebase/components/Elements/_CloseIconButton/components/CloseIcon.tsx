import React from 'react';
import classNames from 'classnames';

import '../styles/close-icon.scss';

import { Callback, Color, makeCallback } from '../../../../shared';

export type CloseIconProps = {
  color?: Color,
  onClick?: Callback<Event>,
};

const CloseIcon = ({ color, onClick }: CloseIconProps) => (
  <button className={classNames('bi bi-close-icon', `close-icon-${color}`)} onClick={makeCallback(onClick)}>
    <svg version="1.1" viewBox="0 0 212.982 212.982">
      <path d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312c-6.99-6.99-18.322-6.99-25.312,0l-75.937,
	    75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312l75.937,75.936L5.242,
	    182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937c6.989,
	    6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" />
    </svg>
  </button>
);

CloseIcon.defaultProps = {
  color: 'default',
};

export default CloseIcon;
