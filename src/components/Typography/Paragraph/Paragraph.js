import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './paragraph.scss';

/**
 * Beautiful-ui does not force the developer to use its own styles nor creates extra global rules that can possibly
 * collide with the application's ones.<br/>
 * For this reason, in order to possibly have the same style between UI components and texts when needed, few
 * typography specialised components has been created.<br/>
 * The typography specialised components are used within the library itself.
 * <br/>
 * Here's the Paragraph component.
 */
const Paragraph = (props) => {
  const { children, color, fontFamily, textAlign, className, wordBreak, ...rest } = props;
  const classList = classNames('bi bi-p', `bi-p-${color}`, `bi-ff-${fontFamily}`, {
    [`bi-p-${textAlign}`]: !!textAlign,
    [`bi-p-break-${wordBreak}`]: !!wordBreak,
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
  /*
   * Defines the paragraph font-family, can be one of the following:
   * `sans`, `serif`, `mono`.
   */
  fontFamily: PropTypes.oneOf(['sans', 'serif', 'mono']),
  /**
   * Defines the paragraph text align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  /**
   * Defines the paragraph breaks
   */
  wordBreak: PropTypes.oneOf(['normal', 'words', 'all', 'truncate']),
};


Paragraph.defaultProps = {
  color: 'default',
  fontFamily: 'sans',
  textAlign: undefined,
  wordBreak: 'normal',
};

export default React.memo(Paragraph);
