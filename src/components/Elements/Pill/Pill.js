import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BaseProps, Color } from '../../../shared';

import './pill.scss';

/**
 * A component for labeling/small counting
 * @param props
 * @returns {*}
 * @constructor
 */
const Pill = (props) => {
  const { id, style, className, children, color, href, render } = props;
  const classList = classNames('bi bi-pill pill-rounded', `pill-${color}`, { 'linkable-pill': href }, className);
  const El = href ? 'a' : 'span';

  return (
    <El id={id} style={style} className={classList} href={href}>
      {!render && children}
      {render && render(props)}
    </El>
  );
};

Pill.propTypes = {
  ...BaseProps,
  /**
   * Defines the pill's color, can be `default`, `primary`, `secondary`,
   * `info`, `warning`, `success`, `error`.
   * @default "default"
   */
  color: Color,
  /**
   * Pills can also accept links, the resulting tag is changed from <span> to <a> if href is present.
   */
  href: PropTypes.string,
  /**
   * Accepts a function/component and renders the returning value within the Pill component
   */
  render: PropTypes.func,
  /**
   * @ignore
   */
  children: PropTypes.node,
};


Pill.defaultProps = {
  children: null,
  color: 'default',
  href: undefined,
  render: undefined,
};


export default React.memo(Pill);
