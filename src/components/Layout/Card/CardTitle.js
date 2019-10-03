import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Title from '../../Typography/_Title';
import { Color } from '../../../shared';

/**
 * CardTitle component wraps the card's title.
 */
const CardTitle = ({ children, textAlign, color, className }) => {
  const classList = classNames('card-title', {
    [`text-align-${textAlign}`]: !!textAlign,
  }, className);

  return (
    <Title color={color} className={classList}>{children}</Title>
  );
};


CardTitle.propTypes = {
  /**
   * Defines how the title should be align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  /**
   * Defines the title's color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
};

CardTitle.defaultProps = {
  textAlign: undefined,
  color: 'default',
};

export default CardTitle;
