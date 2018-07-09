import React, { PureComponent } from 'react';
import classNames from 'classnames';

// components
import CircleSpinner from './CircleSpinner';
import BarsSpinner from './BarsSpinner';
import PuffSpinner from './PuffSpinner';
import DotsSpinner from './DotsSpinner';

// types
import { Color, Size } from '../../../../shared';

// styles
import '../styles/spinner.scss';

export type SpinnerType = 'circle' | 'bars' | 'puff' | 'dots';

export type SpinnerProps = {
  /**
   * the color used to draw the component
   * @default 'default'
   */
  color?: Color,
  /**
   * the type of the glyph, can be 'circle', 'bars', 'puff' or 'dots'.
   * Each one shows a different icon.
   * @default 'circle'
   */
  type?: SpinnerType,
  /**
   * the size of the spinner icon, can be 'small', 'default', 'large' or a custom pixel number
   * @default 'default'
   */
  size?: Size | number | string,
  /**
   * @ignore
   */
  className?: string,
};

class Spinner extends PureComponent<SpinnerProps> {
  static defaultProps: Partial<SpinnerProps> = {
    color: 'default',
    type: 'circle',
    size: 'default',
  };

  private static getSpinnerSize(size?: Size | number | string): number {
    if (size === 'default') return 32;
    if (size === 'small') return 16;
    if (size === 'large') return 48;

    if (typeof size === 'string' || typeof size === 'number') return parseInt(size as string, 10);

    return Spinner.getSpinnerSize('default');
  }

  render() {
    const { color, type, size, className, children } = this.props;
    const svgSize = Spinner.getSpinnerSize(size);
    const svgProps = { width: svgSize, height: svgSize };
    const classes = classNames('bi', 'bi-spinner', `spinner-${color}`, className);

    return (
      <span className={classes}>
        {type === 'circle' && <CircleSpinner {...svgProps} />}
        {type === 'bars' && <BarsSpinner {...svgProps} />}
        {type === 'puff' && <PuffSpinner {...svgProps} />}
        {type === 'dots' && <DotsSpinner {...svgProps} />}
        {!!children && <span>{children}</span>}
      </span>
    );
  }
}

export default Spinner;
