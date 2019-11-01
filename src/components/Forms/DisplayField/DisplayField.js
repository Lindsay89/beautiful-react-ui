import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../_Label';
import { Color } from '../../../shared';

import './display-field.scss';

/**
 * A display-only text field useful for displaying ead-only values with labels.
 */
const DisplayField = (props) => {
  const { className, value, valueColor, label, labelColor, borderStyle, ...rest } = props;
  const classList = classNames('bi bi-df', `bi-df-${valueColor}`, {
    [`bi-df-border-${borderStyle}`]: !!borderStyle,
  }, className);

  return (
    <div className={classList} {...rest}>
      <Label color={labelColor} tagName="span" className="bi-df-label">{label}</Label>
      <span className="bi-df-value">{value}</span>
    </div>
  );
};


DisplayField.propTypes = {
  /**
   * Defines the field label
   */
  label: PropTypes.string.isRequired,
  /**
   * Defines the label color
   */
  labelColor: Color,
  /**
   * Defines field value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Defines the value color
   */
  valueColor: Color,
  /**
   * Defines the border style
   */
  borderStyle: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double', 'none']),
};


DisplayField.defaultProps = {
  labelColor: 'default',
  valueColor: 'default',
  borderStyle: 'solid',
};

export default DisplayField;
