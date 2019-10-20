import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color } from '../../../shared';

import './label.scss';

/**
 * The Label component is used within this very same library to render forms' related labels
 */
const Label = (props) => {
  const { color, text, required, className, htmlFor, children, ...rest } = props;

  const classes = classNames('bi bi-label', `label-${color}`, { required }, className);

  return (
    /* eslint-disable-next-line jsx-a11y/label-has-for */
    <label htmlFor={htmlFor} className={classes} {...rest}>
      {text}
      {children}
      {required && <span>*</span>}
    </label>
  );
};

Label.propTypes = {
  /**
   * The label text
   */
  text: PropTypes.string,
  /**
   * The label `for` attribute
   */
  htmlFor: PropTypes.string.isRequired,
  /**
   * The label color
   */
  color: Color,
  /**
   * Defines whether the label is referring to a required input or not
   */
  required: PropTypes.bool,
};


Label.defaultProps = {
  text: undefined,
  color: 'default',
  required: false,
};

export default React.memo(Label);
