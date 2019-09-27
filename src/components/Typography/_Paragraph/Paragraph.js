import React from 'react';
import classNames from 'classnames';

import './paragraph.scss';

/**
 * A library styled paragraph
 */
const Paragraph = ({ children, className }) => (
  <p className={classNames('bi-p', className)}>{children}</p>
);

export default Paragraph;
