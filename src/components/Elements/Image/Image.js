import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BaseProps } from '../../../shared';

import './image.scss';

/**
 * A lightweight image wrapper to show images in style and responsive
 */
const Image = ({ src, alt, thumb, id, className, style, lazy, ...props }) => {
  const classList = classNames('bi bi-image', {
    'bi-img-thumb': thumb,
  }, className);

  return (<img src={src} alt={alt} id={id} style={style} className={classList} {...props} />);
};

Image.propTypes = {
  ...BaseProps,
  /**
   * The image source
   */
  src: PropTypes.string.isRequired,
  /**
   * The image alternative text
   */
  alt: PropTypes.string.isRequired,
  /**
   * Applies the thumbnail style to the image
   */
  thumb: PropTypes.bool,
};

Image.defaultProps = {
  thumb: false,
};

export default Image;
