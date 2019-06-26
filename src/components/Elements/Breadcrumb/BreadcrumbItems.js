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

  if (!label && !icon) {
    /**
     * Eslint forces the developer to not have any `console` statement, in this case we want to warn the
     * user without throwing an error so it's perfectly safe to disable this rule.
     */
    // eslint-disable-next-line no-console
    console.warn('One of the your breadcrumb items has been wiped out as it has no label nor icon');
    return null;
  }

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
