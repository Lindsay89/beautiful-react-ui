import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Paragraph from '../../Typography/_Paragraph';

/**
 * CardContent component wraps the card's content.
 */

const CardContent = ({ children, textAlign }) => {
  const classList = classNames('card-content', {
    [`text-align-${textAlign}`]: !!textAlign,
  });
  return (
    <Paragraph className={classList}>{children}</Paragraph>
  );
};


CardContent.propTypes = {
  /**
   * Defines how the content should be aligned
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};

CardContent.defaultProps = {
  textAlign: undefined,
};


export default CardContent;
