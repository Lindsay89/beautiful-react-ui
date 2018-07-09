import React, { PureComponent } from 'react';
import classNames from 'classnames';

// styles
import '../styles/chevron.scss';

// types
import { Color } from '../../../../shared';

export type ChevronProps = {
  color?: Color,
  direction?: 'left' | 'right' | 'up' | 'down',
  animated?: boolean,
};

class ChevronIcon extends PureComponent<ChevronProps> {

  static defaultProps: Partial<ChevronProps> = {
    color: 'default',
    direction: 'down',
    animated: false,
  };

  render() {
    const { color, direction, animated } = this.props;

    return (
      <span className={classNames('bi bi-chevron', `chevron-${color}`, `chevron-dir-${direction}`, { animated })}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
    );
  }
}

export default ChevronIcon;
