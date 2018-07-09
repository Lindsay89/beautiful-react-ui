import { BaseProps } from './BaseProps';

export type FormBaseProps = BaseProps & {
  /**
   * the name of the input field
   * @default undefined
   */
  name?: string,
    /**
   * shows an helping text right below the component
   * @default undefined
   */
  helpText?: string,
  /**
   * defines the components's label
   * @default undefined
   */
  label?: string,
};
