import { FunctionComponent } from 'react';
import { Color } from './shared';

export type TitleProp = {
  color?: Color,
  size?: 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl',
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  textAlign?: 'center' | 'left' | 'right' | 'justify',
};

declare const Title: FunctionComponent<TitleProp>;

export default Title;
