import { FunctionComponent } from 'react';
import { Color, Size } from './shared';

export type SpinnerProp = {
  color?: Color,
  size?: Size,
  type?: 'circle' | 'pulse',
};

declare const Spinner: FunctionComponent<SpinnerProp>;

export default Spinner;
