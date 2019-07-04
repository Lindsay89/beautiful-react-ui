import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import { BaseProps, Color } from '../../../shared';
import './alert.scss';

/**
 * Alert component provides a contextual feedback messages for the user actions.
 */
const Alert = (props) => {
  const { children, id, style, className, color, solid, outline, onClose } = props;

  const classList = classNames(`bi bi-alert alert-${color}`, {
    'alert-solid': solid,
    'alert-outline': outline,
  }, className);

  return (
    <div id={id} style={style} className={classList}>
      {children}
      {onClose && <Button color="transparent" className="alert-button" onClick={onClose}><Icon name="times" /></Button>}
    </div>
  );
};

Alert.propTypes = {
  ...BaseProps,
  /**
   * Defines the color of the alert, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * A solid background style variant with white text and without border.
   */
  solid: PropTypes.string,
  /**
   * Shows the outlines only
   */
  outline: PropTypes.string,
  /**
   * onClose accept a function. If there's any function, it will show a button
   */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  color: 'default',
  solid: false,
  outline: false,
  onClose: undefined,
};

export default React.memo(Alert);
