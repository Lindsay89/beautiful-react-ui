import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Color from '../../../shared/types/Color';

import './title.scss';

/**
 * A library styled title
 */
const Title = ({ children, color, tagName, className }) => {
  const classList = classNames('bi-title', `bi-title-${color}`, className);
  const TitleTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName) ? tagName : 'h1';

  return (
    <TitleTag className={classList}>{children}</TitleTag>
  );
};


Title.propTypes = {
  /*
   * Defines the title's color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * Defines which tag should be used to render the title
   */
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Title.defaultProps = {
  color: 'default',
  tagName: 'h1',
};

export default Title;
