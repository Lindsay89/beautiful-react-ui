import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Size, Color } from '../../../shared';

import './icon.scss';

// adding fa dependencies
library.add(fas, fab);

/**
 * Icon component shows a glyph used to represent something.
 * Built on top of [font-awesome](https://fontawesome.com/);
 */
const Icon = ({ name, color, size, className, ...rest }) => {
  const classList = classNames('bi bi-icon', `${color ? `icon-${color}` : ''}`, className);
  let faSize;

  if (size === 'small') {
    faSize = 'sm';
  }
  if (size === 'large') {
    faSize = 'lg';
  }

  return (<FontAwesomeIcon icon={name} size={faSize} className={classList} {...rest} />);
};

Icon.propTypes = {
  /**
   * The [font-awesome](https://fontawesome.com/) icon name
   */
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  /**
   * The icon color, if not defined get the color of its parent.
   */
  color: Color,
  /**
   * The icon size, if not defined get the size of its parent text
   */
  size: Size,
};

Icon.defaultProps = {
  color: undefined,
  size: undefined,
};

export default React.memo(Icon);
