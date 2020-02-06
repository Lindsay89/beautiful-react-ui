import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconProp, makeIconFromProp } from '../../../shared';

import './sidebar-group.scss';

/**
 * SidebarGroup
 */
// eslint-disable-next-line react/prop-types
const SidebarGroup = ({ orientation, ...props }) => {
  const { text, icon, children, className, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-sidebar-nav-item sidebar-group', className), [className]);

  return (
    <li className={classList} {...rest}>
      <span>
        {icon && (<span className="bi-sidebar-icon">{makeIconFromProp(icon)}</span>)}
        <span className="bi-sidebar-item-content">{text}</span>
        <div className="bi-sidebar-item-shrunk">
          {!icon && typeof text === 'string' && (<span className="shrunk-text">{text.charAt(0)}</span>)}
          {icon && makeIconFromProp(icon)}
        </div>
      </span>
      <ul className="sidebar-group-content">
        {children}
      </ul>
    </li>
  );
};

SidebarGroup.propTypes = {
  text: PropTypes.string.isRequired,
  icon: IconProp,
};

SidebarGroup.defaultProps = {
  icon: undefined,
};

export default React.memo(SidebarGroup);
