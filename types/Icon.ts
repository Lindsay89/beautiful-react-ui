import { ComponentClass } from 'react';
import { Color, Size } from './shared';

export type IconProp = {
  name: string | string[],
  color?: Color,
  size?: Size,
};

declare const Icon: ComponentClass<IconProp>;

export default Icon;
