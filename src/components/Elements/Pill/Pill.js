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
  const { id, style, className, children, color, href, render, rounded } = props;
  const El = href ? 'a' : 'span';

  const classList = classNames('bi bi-pill', `pill-${color}`, {
    'pill-rounded': rounded,
    'linkable-pill': href,
  }, className);

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
   * `info`, `warning`, `success`, `danger`.
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
   * rounded indicated the pill shape, by default the shape is rounded
   */
  rounded: PropTypes.string,
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
  rounded: 'pill-rounded',
};


export default React.memo(Pill);
