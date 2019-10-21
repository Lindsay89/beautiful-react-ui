import { FunctionComponent } from 'react';
import { Color } from './shared';

export type ParagraphProp = {
  color?: Color,
  fontFamily?: 'serif' | 'mono' | 'sans',
  textAlign?: 'center' | 'left' | 'right' | 'justify',
};

declare const Title: FunctionComponent<ParagraphProp>;

export default Title;
