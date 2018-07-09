import React, { PureComponent, ReactElement } from 'react';
import classNames from 'classnames';

// containers
import Condition from '../../../Utils/Condition';
import Icon from '../../../Elements/Icon';
import SidebarNavigator from './SidebarNavigator';

// style
import '../styles/sidebar.scroller.scss';

// types
import { IconName } from '../../../Elements/Icon/iconNames';

type SidebarScrollerProps = {
  children: ReactElement<SidebarNavigator>[],
  onChange?: (value: Item | null) => void,
};

interface Item {
  id: string;
  parentTo?: string;
  title: string;
  icon: IconName;
  hasChild: boolean;
  onClick: (() => void);
}

class SidebarScroller extends PureComponent<SidebarScrollerProps> {

  state = {
    selectedItems: [],
    classEnter: null,
  };

  componentDidUpdate() {
    const { selectedItems, classEnter } = this.state;
    const { onChange } = this.props;

    if (onChange) {
      const currentItem = selectedItems.length ? selectedItems[selectedItems.length - 1] : null;
      onChange(currentItem);
    }

    if (!!classEnter) {
      setTimeout(() => { this.setState({ classEnter: null }); }, 500);
    }
  }

  addItem(item: Item) {
    if (item.onClick) {
      item.onClick();
    }

    if (item.hasChild) {
      this.setState({ selectedItems: [...this.state.selectedItems, item], classEnter: 'enter-left' });
    }
  }

  goRoot() {
    this.setState({ selectedItems: [], classEnter: 'enter-right' });
  }

  goBack(id?: string | null) {
    const selectedItems: Item[] = [...this.state.selectedItems];
    let updatedItems;

    if (!!id) {
      // remove all elements after a item with a specific id
      let index: number | null = -1;

      for (let i = 0; i <= selectedItems.length; i += 1) {
        if (selectedItems[i].id === id) {
          index = i;
          break;
        }
      }

      updatedItems = selectedItems.slice(0, index + 1);

    } else {
      updatedItems = selectedItems.slice(0, -1);
    }

    this.setState({ selectedItems: updatedItems, classEnter: 'enter-right' });
  }

  getMenu(currentItem: Item | null) {
    const { selectedItems } = this.state;
    const { children } = this.props;
    const menu: ReactElement<SidebarNavigator>[] = [];

    React.Children.forEach(children, (child: ReactElement<any>) => {
      if (child) {

        if ((!currentItem && !child.props.parentTo) ||
          (currentItem && currentItem.id === child.props.parentTo)) {

          const el = <SidebarNavigator
            {...child.props}
            key={child.props.id}
            className={child.props.hasChild ? 'hasChild' : null}
            onClick={() => this.addItem(child.props)}
          />;

          menu.push(el);
        }
      }
    });

    // menu with a current Item
    if (currentItem) {
      const classDeep = `bi-submenu-deep-${selectedItems.length}`;

      return (
        <ul>
          <SidebarNavigator {...currentItem} className="current-item" />
          <ul className={classNames('bi-submenu-scroller', classDeep)}>
            {menu}
          </ul>
        </ul>
      );
    }

    // menu at root level
    return <ul>{menu}</ul>;
  }

  getBack(): ReactElement<any> {
    return (
      <span className="sidebar-item-back" onClick={() => this.goBack()}>
        <Icon name="arrow_triangle-left_alt2" className="icon-back" />
      </span>
    );
  }

  getNavigation(): ReactElement<any>[] {
    const { selectedItems } = this.state;
    const navigation: ReactElement<any>[] = [];
    // remove the current one
    const navItems = selectedItems.slice(0, -1);

    navItems.map((item: Item) => {
      navigation.push(
        <span key={item.id} className="sidebar-icon-navigation" onClick={() => this.goBack(item.id)}>
          <Icon name={item.icon} className="icon-navigation" />
        </span>,
      );
    });

    // add button to go back to root level
    navigation.unshift(
      <span key="root" className="sidebar-icon-navigation" onClick={() => this.goRoot()}>
        <Icon name="icon_house_alt" className="icon-navigation" />
      </span>,
    );

    return navigation;
  }

  render() {
    const { selectedItems, classEnter } = this.state;
    const currentItem = selectedItems.length ? selectedItems[selectedItems.length - 1] : null;
    const prevItem = selectedItems.length >= 2 ? selectedItems[selectedItems.length - 2] : null;

    return (
      <div className="bi-sidebar-menu-wrapper">
        <div className={classNames('bi-sidebar-menu', classEnter)}>
          <Condition test={!!classEnter}>
            <div className="bi-sidebar-menu-disappear">{this.getMenu(prevItem)}</div>
          </Condition>
          <div className="bi-sidebar-menu-active">
            {this.getMenu(currentItem)}
            <Condition test={!!selectedItems.length}>
              <div className="navigation">
                {this.getBack()}
                {this.getNavigation()}
              </div>
            </Condition>
          </div>
        </div>
      </div>

    );
  }
}

export default SidebarScroller;
