import React, { Component, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

// containers
import Condition from '../../../Utils/Condition/components/Condition';
import SidebarHeader from './SidebarHeader';
import SidebarSubmenu from './SidebarSubmenu';
import SidebarItem from './SidebarItem';
import SidebarScoller from './SidebarScroller';
import SidebarNavigator from './SidebarNavigator';

// styles
import '../styles/sidebar.scss';

type SidebarProps = {
  id?: string,
  opened?: boolean,
  logo?: ReactNode | null,
  subHeader?: ReactElement<any> | null,
  footer?: ReactElement<any> | null,
  onToggle?: (state?: boolean) => any,
};

type SidebarState = {
  opened: boolean,
};

export default class Sidebar extends Component<SidebarProps, SidebarState> {

  public static Submenu = SidebarSubmenu;
  public static Item = SidebarItem;
  public static Scroller = SidebarScoller;
  public static Navigator = SidebarNavigator;

  static defaultProps: Partial<SidebarProps> = {
    opened: true,
    logo: null,
    footer: null,
    subHeader: null,
  };

  state = { opened: this.props.opened as boolean };

  toggleState() {
    const { onToggle } = this.props;
    const { opened } = this.state;

    this.setState({ opened: !opened }, () => {
      if (onToggle) onToggle(this.state.opened);
    });
  }

  render() {
    const { opened } = this.state;
    const { logo, subHeader, footer, children } = this.props;

    const classesSidebar = ['bi', 'bi-sidebar'];

    if (opened) {
      classesSidebar.push('opened');
    }

    return (
      <aside className={classNames(classesSidebar)}>
        <SidebarHeader onButtonToggle={() => this.toggleState()}>
          {logo}
        </SidebarHeader>
        <Condition test={!!subHeader}>
          <div className="bi bi-sidebar-header">
            {subHeader}
          </div>
        </Condition>
        <nav className="bi-sidebar-content">
          {children}
        </nav>
        <Condition test={!!footer}>
          <div className="bi-sidebar-footer">
            {footer}
          </div>
        </Condition>
      </aside>
    );
  }
}
