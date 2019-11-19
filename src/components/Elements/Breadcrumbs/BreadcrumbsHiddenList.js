import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import FloatingContent from '../FloatingContent';
import List from '../List';
import Button from '../Button/Button';
import { IconProp, makeIconFromProp } from '../../../shared';

/**
 * BreadcrumbHiddenItems is a sub-component of Breadcrumbs.
 * It handle the business-logic of the hidden breadcrumbs list.
 */
const BreadcrumbsHiddenList = (props) => {
  const { hiddenItems } = props;
  const [isShown, setIsShown] = useState(false);

  const toggleHandler = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  const Trigger = (
    <Button icon="ellipsis-v" color="transparent" outline size="small" className="bi-breadcrumbs-menu-button" />
  );

  return (
    <li className="bi breadcrumb-item breadcrumb-item-button">
      <FloatingContent
        onToggle={toggleHandler}
        isShown={isShown}
        trigger={Trigger}
        placement="bottom-left"
      >
        <List condensed className="bi-anim-fade-in">
          {hiddenItems.map((item) => (
            <List.Item style={{ paddingLeft: '.25rem', paddingRight: '1rem' }} key={item.path || item.label}>
              {!!item.path && (
                <a href={item.path}>
                  {!!item.icon && makeIconFromProp(item.icon)}
                  {item.label}
                </a>
              )}
              {!item.path && (
                <>
                  {!!item.icon && makeIconFromProp(item.icon)}
                  {item.label}
                </>
              )}
            </List.Item>
          ))}
        </List>
      </FloatingContent>
    </li>
  );
};


BreadcrumbsHiddenList.propTypes = {
  /**
   * Defines the items type, it must be an array of object, with label required.
   * The breadcrumb component accept an array of values, in order to show the path of pages.
   */
  hiddenItems: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    icon: IconProp,
    render: PropTypes.func,
  })).isRequired,
};


export default BreadcrumbsHiddenList;
