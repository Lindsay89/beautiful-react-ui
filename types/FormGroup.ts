import { FunctionComponent } from 'react';

export type FormGroupProps = {
  /**
   * Defines if children should be vertically or horizontally aligned
   */
  orientation?: 'horizontal' | 'vertical',
};

/**
 * Declares the FormGroup functional component
 */
declare const FormGroup: FunctionComponent<FormGroupProps>;

export default FormGroup;
