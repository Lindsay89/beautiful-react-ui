import React, { PureComponent, ReactElement, ReactNode } from 'react';

// components
import SidebarItem from './SidebarItem';

// types
import { IconName } from '../../../Elements/Icon/iconNames';
import { IconProps } from '../../../Elements/Icon/components/Icon';
import { TagProps } from '../../../Elements/Tag/components/Tag';

type SidebarNavigatorProps = {
  id?: string,
  onClick?: (...args: any[]) => any,
  title: string,
  icon?: IconName | ReactElement<IconProps>,
  parentTo?: string,
  children?: ReactNode,
  hasChild?: boolean,
  /**
   * @ignore
   */
  className?: string,
  tag?: number | ReactElement<TagProps>,
};

class SidebarNavigator extends PureComponent<SidebarNavigatorProps> {

  static defaultProps: Partial<SidebarNavigatorProps> = {
    className: '',
  };

  render() {
    const { title, className, onClick, icon, tag } = this.props;

    return (
      <SidebarItem
        className={className}
        title={title}
        onClick={onClick}
        icon={icon}
        tag={tag}
        {...this.props} />
    );
  }
}

export default SidebarNavigator;
