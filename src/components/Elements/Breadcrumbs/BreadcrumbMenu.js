import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbsHiddenList from './BreadcrumbsHiddenList';
import { IconProp } from '../../../shared';

/**
 * BreadcrumbMenu is a sub-component of Breadcrumbs.
 * It handle the business-logic of the breadcrumbs menu.
 */
const BreadcrumbMenu = (props) => {
  const { items, maxDisplayedItems } = props;
  const hidingItemsNum = items.length - maxDisplayedItems;
  const hidingItems = items.slice(0, hidingItemsNum);
  const displayingItems = items.slice(hidingItemsNum);

  return (
    <>
      <BreadcrumbsHiddenList hiddenItems={hidingItems} className="bi-breadcrumbs-hiding-menu" />
      {(displayingItems.map((item) => (
        item.render
          ? item.render(item)
          : <BreadcrumbItem path={item.path} label={item.label} icon={item.icon} key={item.path || item.label} />
      )))}
    </>
  );
};


BreadcrumbMenu.propTypes = {
  /**
   * Defines the items type, it must be an array of object, with label required.
   * The breadcrumb component accept an array of values, in order to show the path of pages.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    icon: IconProp,
    render: PropTypes.func,
  })).isRequired,
  /*
   * Defines the item numbers to display
   */
  maxDisplayedItems: PropTypes.number.isRequired,
};


export default React.memo(BreadcrumbMenu);
