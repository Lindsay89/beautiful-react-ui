import {ElementType, FunctionComponent, ReactElement} from 'react';
import {Callback, Color, DefaultProps} from './_shared';
import {IconProps} from "./Icon";

export type SidebarProps = DefaultProps & {
  isOpen: boolean,
  onToggle?: Callback<MouseEvent>,
  accent?: Color,
  title?: string,
  titleColor?: Color,
  headerLogo?: ReactElement | ElementType,
  toggleIcon?: string | string[] | ReactElement<IconProps>,
  showToggle?: boolean,
  HeaderRender?: ElementType,
  orientation?: 'left' | 'right' | 'none',
  type?: 'shrinkable' | 'offcanvas'
};

/**
 * Declares the Sidebar functional component
 */
declare const Sidebar: FunctionComponent<SidebarProps>;


export default Sidebar;
