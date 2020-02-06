import { FunctionComponent, ReactElement } from 'react';
import { Callback, Color, DefaultProps } from './_shared';

export type ToggleProps = DefaultProps & {
  /**
   * The toggle value, boolean
   */
  value: boolean,
  /**
   * The toggle on change handler
   */
  onChange?: Callback<Event, boolean>,
  /**
   * The toggle color
   */
  color?: Color,
  /**
   * Define the toggle switch component
   */
  SwitchRender?: ReactElement,
};

/**
 * Declares the Toggle functional component
 */
declare const Toggle: FunctionComponent<ToggleProps>;

export default Toggle;
