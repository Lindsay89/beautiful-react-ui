import { FunctionComponent } from 'react';
import { Color } from './shared';

export type DisplayFieldProps = {
  /**
   * Defines the field label
   */
  label: string,
  /**
   * Defines the label color
   */
  value: string | number,
  /**
   * Defines field value
   */
  labelColor?: Color,
  /**
   * Defines the value color
   */
  valueColor?: Color,
  /**
   * Defines the border style
   */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none',
};

/**
 * Declares the DisplayField functional component
 */
declare const DisplayField: FunctionComponent<DisplayFieldProps>;

export default DisplayField;
