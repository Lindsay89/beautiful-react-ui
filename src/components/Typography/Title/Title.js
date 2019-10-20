import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color } from '../../../shared';

import './title.scss';

/**
 * As Beautiful-ui does not impose a general styles by creating and applying extra css classes,
 * a set of typography components as been created to possibly have the same style both for UI components and texts.
 * The Typography components are used within the library itself.
 *
 * Here's the Title component
 */
const Title = (props) => {
  const { children, color, size, tagName, textAlign, className, ...rest } = props;
  const TitleTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName) ? tagName : 'h1';
  const classList = classNames('bi-title', `bi-title-${color}`, {
    'title-base': size === 'base',
    'title-lg': size === 'lg',
    'title-xl': size === 'xl',
    'title-2xl': size === '2xl',
    'title-3xl': size === '3xl',
    'title-4xl': size === '4xl',
    [`bi-title-${textAlign}`]: !!textAlign,
  }, className);

  return (
    <TitleTag className={classList} {...rest}>
      {children}
    </TitleTag>
  );
};

Title.propTypes = {
  /*
   * Defines the title color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /*
   * Defines the title size, can be one of the following:
   * `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.
   */
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '3xl', '4xl']),
  /**
   * Defines which tag should be used to render the title
   */
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Defines the title text align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};

Title.defaultProps = {
  color: 'default',
  tagName: 'h1',
  size: undefined,
  textAlign: undefined,
};

export default React.memo(Title);
