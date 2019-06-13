import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BaseProps, Color } from '../../../shared';

import './help-text.scss';

/**
 * The HelpText component is used within this very same library to render input related help texts
 */
const HelpText = ({ text, color, className, id, style }) => (
  <p className={classNames('bi bi-helptext', `helptext-${color}`, className)} id={id} style={style}>{text}</p>
);

HelpText.propTypes = {
  ...BaseProps,
  /**
   * The text to show
   */
  text: PropTypes.string.isRequired,
  /**
   * The text of the color
   */
  color: Color,
};

HelpText.defaultProps = {
  color: 'default',
};

export default HelpText;
