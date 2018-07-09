import React, { ReactNode } from 'react';

// components
import Button from '../../../Elements/Button/Button';
import Icon from '../../../Elements/Icon/components/Icon';

// styles
import '../styles/sidebar.header.scss';

// types
type SidebarHeaderProps = {
  children?: ReactNode,
  onButtonToggle: () => void,
};

const SidebarHeader = ({ children, onButtonToggle }: SidebarHeaderProps) => (
  <div className="bi bi-sidebar-header clearfix">
    <div className="bi-sidebar-header-content pull-left">
      {!children && <p className="no-header-logo">Header</p>}
      {!!children && children}
    </div>
    <Button
      icon={<Icon name="icon_menu" size={25} className="menu-icon"/>}
      color="transparent"
      className="pull-right menu-btn"
      onClick={() => onButtonToggle()}
    />
  </div>
);

export default SidebarHeader;
