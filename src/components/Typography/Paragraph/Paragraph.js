import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './paragraph.scss';


/**
 * As Beautiful-ui does not impose a general styles by creating and applying extra css classes,
 * a set of typography components as been created to possibly have the same style both for UI components and texts.
 * The Typography components are used within the library itself.
 *
 * Here's the Paragraph component
 */
const Paragraph = (props) => {
  const { children, color, textAlign, className, ...rest } = props;
  const classList = classNames('bi-p', `bi-p-${color}`, {
    [`bi-p-${textAlign}`]: !!textAlign,
  }, className);

  return (
    <p className={classList} {...rest}>{children}</p>
  );
};

Paragraph.propTypes = {
  /*
   * Defines the paragraph color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * Defines the paragraph text align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};


Paragraph.defaultProps = {
  color: 'default',
  textAlign: undefined,
};

export default React.memo(Paragraph);
