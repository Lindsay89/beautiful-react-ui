import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color, IconProp } from '../../../shared';
import BreadcrumbItem from './BreadcrumbItem';

import './breadcrumbs.scss';

/**
 * Breadcrumbs component is used to show a page hierarchy.
 * Defining clickable paths helps the user navigating your app.
 */
const Breadcrumbs = (props) => {
  const { items, color, className, ...rest } = props;
  const classList = classNames(`bi bi-breadcrumbs breadcrumbs-${color}`, className);

  return (
    <nav className={classList} {...rest}>
      <ol>
        {items.map((item) => (
          item.render
            ? item.render(item)
            : <BreadcrumbItem path={item.path} label={item.label} icon={item.icon} key={item.path || item.label} />
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
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
  /**
   * Defines the link color of breadcrumbs, can be: `default`, `primary`, `secondary`, `info`, `warning`, `success`,
   * `danger`.
   * @default primary
   */
  color: Color,
};

Breadcrumbs.defaultProps = {
  color: 'primary',
};

export default React.memo(Breadcrumbs);
