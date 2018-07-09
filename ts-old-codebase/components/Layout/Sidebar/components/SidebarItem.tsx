import React, { Attributes, PureComponent, ReactElement, SyntheticEvent } from 'react';
import classNames from 'classnames';

// components
import Icon from '../../../Elements/Icon';
import Tag from '../../../Elements/Tag';

// style
import '../styles/sidebar.item.scss';

// types
import { IconProps } from '../../../Elements/Icon/components/Icon';
import { TagProps } from '../../../Elements/Tag/components/Tag';
import { IconName } from '../../../Elements/Icon/iconNames';

type SidebarItemProps = {
  onClick?: (...args: any[]) => any,
  link?: string,
  icon?: IconName | ReactElement<IconProps>,
  title: string,
  ripple?: boolean,
  active?: boolean,
  tag?: number | ReactElement<TagProps>
  /**
   * @ignore
   */
  submenu?: ReactElement<any> | null,
  /**
   * @ignore
   */
  className?: string,
};

class SidebarItem extends PureComponent<SidebarItemProps> {

  static defaultProps: Partial<SidebarItemProps> = {
    className: '',
    submenu: null,
    ripple: true,
    active: false,
  };

  getIcon(): ReactElement<IconProps> | null {
    const { icon } = this.props;

    if (!icon) return null;

    if (typeof icon === 'string') {
      return <Icon name={icon} className="sidebar-item-icon"/>;
    }

    return React.cloneElement(icon as ReactElement<IconProps>, { className: 'sidebar-item-icon' }) || null;
  }

  getTag(): ReactElement<TagProps> | null {
    const { tag } = this.props;

    if (!tag) return null;

    if (typeof tag === 'number') {
      return <Tag color="primary" size="small" className="sidebar-tag">{tag}</Tag>;
    }

    return React.cloneElement(tag as ReactElement<TagProps>, { className: 'sidebar-tag' }) || null;
  }

  handleClick(event: SyntheticEvent<HTMLAnchorElement>) {
    const { link, onClick } = this.props;

    if (!link && onClick) {
      event.preventDefault();

      onClick();
    }
  }

  render() {
    const { link, title, submenu, className, ripple, active } = this.props;
    const classes = classNames('bi bi-sidebar-item', className, {
      'item-active': active,
      'sidebar-ripple': ripple,
    });

    return (
      <li className={classes}>
        <a href={link} onClick={(e: SyntheticEvent<HTMLAnchorElement>) => this.handleClick(e)} className="item-content">
          {this.getIcon()}
          <span className="item-title">{title}</span>
          {this.getTag()}
        </a>
        {!!submenu && submenu}
      </li>
    );
  }
}

export default SidebarItem;
