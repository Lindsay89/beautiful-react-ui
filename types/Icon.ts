import { FunctionComponent } from 'react';
import { Color, Size } from './shared';

export type IconProp = {
  name: string | string[],
  color?: Color,
  size?: Size,
};

declare const Icon: FunctionComponent<IconProp>;

export default Icon;
