import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BaseProps, Color, IconProp } from '../../../shared';
import BreadcrumbItems from './BreadcrumbItems';

import './breadcrumb.scss';

/**
 * Breadcrumb components are used to show page hierarchy.
 */
const Breadcrumb = (props) => {
  const { items, color, style, id, className } = props;
  const classList = classNames(`bi bi-breadcrumb breadcrumb-${color}`, className);

  return (
    <nav className={classList} style={style} id={id}>
      <ol>
        {items.map(item => (
          item.render
            ? item.render(item)
            : <BreadcrumbItems path={item.path} label={item.label} icon={item.icon} />
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  ...BaseProps,
  /**
   * Defines the color of links in breadcrumb, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`,
   * `danger`.
   */
  color: Color,
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
};

Breadcrumb.defaultProps = {
  color: 'primary',
};

export default React.memo(Breadcrumb);
