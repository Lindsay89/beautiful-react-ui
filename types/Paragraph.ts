import { FunctionComponent } from 'react';
import { Color, DefaultProps } from './_shared';

export type ParagraphProps = DefaultProps & {
  /*
   * Defines the paragraph color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color?: Color,
  /*
   * Defines the paragraph font-family, can be one of the following:
   * `sans`, `serif`, `mono`.
   */
  fontFamily?: 'serif' | 'mono' | 'sans',
  /**
   * Defines the paragraph text align
   */
 textAlign?: 'center' | 'left' | 'right' | 'justify',
};

declare const Title: FunctionComponent<ParagraphProps>;

export default Title;
