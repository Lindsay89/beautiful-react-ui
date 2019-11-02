import { FunctionComponent } from 'react';
import { Color, DefaultProps } from './_shared';
import { IconProp } from './Icon';

export type BreadcrumbItem = {
  path?: string,
  label?: string,
  icon?: IconProp,
  render: (item: BreadcrumbItem) => unknown,
}

export type BreadcrumbsProps = DefaultProps & {
  /**
   * Defines the items type, it must be an array of object, with label required.
   * The breadcrumb component accept an array of values, in order to show the path of pages.
   */
  items: BreadcrumbItem[],
  /**
   * Defines the link color of breadcrumbs, can be: `default`, `primary`, `secondary`, `info`, `warning`, `success`,
   * `danger`.
   * @default primary
   */
  color?: Color,
};

declare const Breadcrumbs: FunctionComponent<BreadcrumbsProps>;

export default Breadcrumbs;
