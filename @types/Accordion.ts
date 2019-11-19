import { FunctionComponent } from 'react';
import { Callback, Color, DefaultProps } from './_shared';

export type AccordionProps = DefaultProps & {
  /**
   * Defines the color of the accordion, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color?: Color,
  /**
   * The callback to be performed on content change
   */
  onChange?: Callback<string>,
  /**
   * Defines the current active tab index
   */
  active?: number | string,
};

declare const Accordion: FunctionComponent<AccordionProps> & { Content: FunctionComponent<{ title?: React.ReactNode }> };

export default Accordion;
