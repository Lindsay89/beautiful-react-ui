import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from '../../Forms/Checkbox';
import { IconProp, Color, makeCallback, makeKeyboardCallback, makeIconFromProp } from '../../../shared';


/**
 * Single List item
 */
const ListItem = (props) => {
  const { checkbox, onChange, color, value, icon, children, className, ...rest } = props;

  const classList = classNames('bi-list-item', `bi-list-item-${color}`, {
    'bi-list-checkable': checkbox,
    'bi-list-item-checked': value,
  }, className);

  const checkboxProps = {
    onClick: checkbox ? makeCallback(onChange, !value) : undefined,
    onKeyUp: checkbox ? makeKeyboardCallback(onChange, !value) : undefined,
    role: checkbox ? 'button' : undefined,
    tabIndex: checkbox ? 0 : undefined,
  };

  return (
    <li className={classList} {...checkboxProps} {...rest}>
      {icon && makeIconFromProp(icon, { className: 'bi-list-item-icon' })}
      <span className="bi-list-item-content">
        {children}
      </span>
      {checkbox && <Checkbox onChange={onChange} value={value} color={color} className="bi-item-checkbox" />}
    </li>
  );
};

ListItem.propTypes = {
  icon: IconProp,
  checkbox: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  color: Color,
};

ListItem.defaultProps = {
  icon: undefined,
  checkbox: false,
  onChange: undefined,
  value: undefined,
  color: 'default',
};

export default React.memo(ListItem);
