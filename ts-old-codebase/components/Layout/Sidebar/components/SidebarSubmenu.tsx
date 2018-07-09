import React, { Component, ReactElement } from 'react';
import classNames from 'classnames';

// components
import SidebarItem from './SidebarItem';
import Condition from '../../../Utils/Condition';

// styles
import '../styles/sidebar.submenu.scss';

// types
import { IconName } from '../../../Elements/Icon/iconNames';
import { TagProps } from '../../../Elements/Tag/components/Tag';
import { IconProps } from '../../../Elements/Icon/components/Icon';

type SidebarSubmenuProps = {
  icon?: IconName | ReactElement<IconProps>,
  title: string,
  tag?: number | ReactElement<TagProps>,
  open?: boolean,
};

type SidebarSubmenuState = {
  open: boolean,
};

export default class SidebarSubmenu extends Component<SidebarSubmenuProps, SidebarSubmenuState> {

  state = { open: this.props.open || false };

  static getDerivedStateFromProps(nextProps: SidebarSubmenuProps, prevState: SidebarSubmenuState) {
    return {
      open: nextProps.open || prevState.open,
    };
  }

  toggle() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    const { icon, title, children, tag } = this.props;

    return (
      <SidebarItem
        className={classNames('bi-sidebar-submenu', { open })}
        title={title}
        icon={icon}
        tag={tag}
        submenu={(
          <Condition test={open}>
            <ul className="bi-sidebar-submenu-container">
              {children}
            </ul>
          </Condition>
        )}
        onClick={() => this.toggle()}
      />
    );
  }
}
