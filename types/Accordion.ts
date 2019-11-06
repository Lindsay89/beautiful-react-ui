import { FunctionComponent } from 'react';
import { Callback, Color, DefaultProps } from './_shared';
import { IconProps } from './Icon';

export type AccordionProps = DefaultProps & {
  /**
   * Defines the color of the accordion, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color?: Color,
  /**
   * The callback to be performed on content change
   */
  onChange: Callback<string>,
  /**
   * Defines the current active tab index
   */
  active: number | string,
  /**
   * Overrides the standard open icon
   */
  iconOpen: IconProps
  /**
   * Overrides the standard close icon
   */
  iconClose: IconProps,
};

declare const Accordion: FunctionComponent<AccordionProps>;

export default Accordion;
