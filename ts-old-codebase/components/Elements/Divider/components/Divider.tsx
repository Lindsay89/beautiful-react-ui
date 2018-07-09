import React, { PureComponent } from 'react';
import classNames from 'classnames';

// styles
import '../styles/divider.scss';

// types
import { Style } from '../../../../shared';

export type DividerProps = {
  /**
   * shows 2 lines instead of just one
   * @default false
   */
  fancy?: boolean,
  /**
   * clear the content left and right
   * @default false
   */
  clear?: boolean,
  /**
   * change the line color from dark (default) to light
   * @default true
   */
  light?: boolean,
  /**
   * change the line style from solid to dashed
   * @default false
   */
  dashed?: boolean,
  /**
   * @ignore
   */
  className?: string,
  /**
   * @ignore
   */
  style?: Style,
};

class Divider extends PureComponent<DividerProps> {
  static defaultProps = {
    fancy: false,
    clear: true,
    light: false,
    dashed: false,
  };

  public render() {
    const { children, fancy, clear, light, dashed, className, style } = this.props;

    const classes = classNames('bi bi-divider', {
      'divider-fancy': fancy,
      'divider-linelong': !children,
      'divider-text': !!children,
      'divider-clearfix': clear,
      'divider-light': light,
      'divider-dashed': dashed,
    }, className);

    return (<div className={classes} style={style}><span>{children}</span></div>);
  }
}

export default Divider;
