import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.scss';
import Icon from '../Icon';
import { makeIconFromProp } from '../../../shared';

/**
 * BreadcrumbsItems is a sub-component of Breadcrumb.
 * It handle the logic of creating a single item.
 */
const BreadcrumbItems = (props) => {
  const { path, label, icon } = props;
  if (!!label || !!icon) {
    return (
      <li className="bi bi-breadcrumb breadcrumb-item">
        {!!path && (
          <a href={path}>
            {!!icon && makeIconFromProp(icon)}
            {label}
          </a>
        )}
        {!path && (
          <>
            {!!icon && makeIconFromProp(icon)}
            {label}
          </>
        )}
      </li>
    );
  }
  // eslint-disable-next-line no-console, needed to show error message in console when values are missing
  console.warn('WARNING: MISSING BOTH LABEL AND ICON');
  return null;
};


BreadcrumbItems.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.instanceOf(Icon),
  ]),
};

BreadcrumbItems.defaultProps = {
  path: undefined,
  label: undefined,
  icon: undefined,
};

export default BreadcrumbItems;
