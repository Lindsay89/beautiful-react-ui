import { FunctionComponent } from 'react';
import { Color } from './shared';
import { IconProp } from './Icon';

export type BreadcrumbItem = {
  path?: string,
  label?: string,
  icon?: IconProp,
  render: (item: BreadcrumbItem) => unknown,
}

export type BreadcrumbsProps = {
  color?: Color,
  items: BreadcrumbItem[],
};

declare const Breadcrumbs: FunctionComponent<BreadcrumbsProps>;

export default Breadcrumbs;
