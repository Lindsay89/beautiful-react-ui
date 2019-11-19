import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './link.scss';

/**
 * Beautiful-ui does not force the developer to use its own styles nor creates extra global rules that can possibly
 * collide with the application's ones.<br/>
 * For this reason, in order to possibly have the same style between UI components and texts when needed, few
 * typography specialised components has been created.<br/>
 * The typography specialised components are used within the library itself.
 * <br/>
 * Here's the Link component.
 */
const Link = (props) => {
  const { href, color, children, className, ...rest } = props;
  const classList = classNames('bi bi-link', `bi-link-${color}`, className);

  return (
    <a href={href} className={classList} {...rest}>{children}</a>
  );
};

Link.propTypes = {
  /**
   * Defines the link href
   */
  href: PropTypes.string.isRequired,
  /*
   * Defines the link color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
};


Link.defaultProps = {
  color: 'primary',
};

export default React.memo(Link);
