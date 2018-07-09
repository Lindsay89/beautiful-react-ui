import React from 'react';
import classNames from 'classnames';

// components
import Icon from '../../Icon/index';
import { IconName } from '../../Icon/iconNames';

// styles
import '../styles/tab-button.scss';

// types
import { Color } from '../../../../shared/models/Color';

type Props = {
  isActive?: boolean,
  title: string,
  icon?: IconName,
  colorActive?: Color,
  color?: Color,
  clickHandler(event: any): void,
};

const defaultProps: Partial<Props> = {
  isActive: false,
  colorActive: 'primary',
  color: 'default',
};

const tabButton: React.SFC<Props> = (props: Props) => {
  const { isActive, colorActive, title, icon, color, clickHandler } = props;

  const classesBtn = ['tab-button'];

  if (isActive) {
    classesBtn.push('active');
  }

  const borderColor = colorActive ? `border-${colorActive}` : null;

  return (
    <li className={classNames(classesBtn, borderColor)} onClick={clickHandler}>
      {icon && <Icon name={icon} color={color}/>}
      <span>{title}</span>
    </li>
  );
};

tabButton.defaultProps = defaultProps;

export default tabButton;
