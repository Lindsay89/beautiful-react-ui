import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BreadcrumbItems from './BreadcrumbItems';
import Icon from '../Icon';
import './breadcrumb.scss';
import { BaseProps, Color } from '../../../shared';

/**
 * Breadcrumb components are used to show page hierarchy.
 */
const Breadcrumb = (props) => {
  const { items, color, style, id, className } = props;
  const classList = classNames(`bi bi-breadcrumb breadcrumb-${color}`, className);

  return (
    <nav className={classList} style={style} id={id}>
      <ol>
        {
          items.map(item => (
            item.renderer
              ? item.renderer(item)
              : <BreadcrumbItems path={item.path} label={item.label} icon={item.icon} />
          ))
        }
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  ...BaseProps,
  /**
   * Defines the color of links in breadcrumb, can be `default`, `primary`, `secondary`,
   * `info`, `warning`, `success`, `error`.
   * @default "default"
   */
  color: Color,
  /**
   *  Defines the items type, it must be an array of object, with label required.
   * The breadcrumb component accept an array of values, in order to show the path of pages.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.instanceOf(Icon),
    ]),
    renderer: PropTypes.func,
  })).isRequired,
};

Breadcrumb.defaultProps = {
  color: 'primary',
};
export default Breadcrumb;
