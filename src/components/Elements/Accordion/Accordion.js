import React, { Children } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BaseProps, Color, IconProp, warn } from '../../../shared';
import AccordionContent from './AccordionContent';

import './accordion.scss';

/**
 * returns only AccordionContent children whilst wipes out the others
 */
const cloneAccordionContents = (child, index, props) => {
  if (child.type !== AccordionContent) {
    warn('Accordion allows only Accordion.Content children, other kind of elements will be wiped out');

    return null;
  }

  return React.cloneElement(child, {
    internalId: index,
    active: props.active === index,
    onChange: props.onChange,
    iconOpen: props.iconOpen,
    iconClose: props.iconClose,
  });
};


/**
 * Accordion is a controlled component used to toggle contents visibility.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Accordion = React.memo((props) => {
  const { id, style, className, children, color } = props;

  const classList = classNames('bi bi-accordion', `acc-color-${color}`, className);

  return (
    <div id={id} style={style} className={classList}>
      {Children.map(children, (child, index) => (
        cloneAccordionContents(child, index, props)
      ))}
    </div>
  );
});

/**
 * It is perfectly safe to disable the following eslint rule as the props it is referring to are actually passed
 * down to the cloneAccordionContents method.
 */
/* eslint-disable react/no-unused-prop-types */
Accordion.propTypes = {
  ...BaseProps,
  /**
   * Defines the color of the accordion, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * The callback to be performed on content change
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Defines the current active tab index
   */
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  /**
   * Overrides the standard open icon
   */
  iconOpen: IconProp,
  /**
   * Overrides the standard close icon
   */
  iconClose: IconProp,
  /**
   * @ignore
   */
  children: PropTypes.node,
};

Accordion.defaultProps = {
  children: undefined,
  color: 'default',
  iconOpen: 'minus',
  iconClose: 'plus',
};
/* eslint-enable react/no-unused-prop-types */

// shortcut to AccordionContent so that we can use it as the following: `Accordion.Content`
Accordion.Content = AccordionContent;

export default Accordion;
