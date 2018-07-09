import React from 'react';
import classNames from 'classnames';

// styles
import '../styles/helptext.scss';

// types
import { Color } from '../../../../shared';

type HelpText = {
  text: string,
  color?: Color,
};

const HelpText = ({ text, color }: HelpText) => (
  <p className={classNames('bi bi-helptext', `helptext-${color || 'default'}`)}>{text}</p>
);

export default HelpText;
