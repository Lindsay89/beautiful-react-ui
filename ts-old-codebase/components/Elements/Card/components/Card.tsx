import React, { PureComponent } from 'react';
import classNames from 'classnames';

// styles
import '../styles/card.scss';

type CardProps = {
  /**
   * @ignore
   */
  className?: string,
  /**
   * fluid width
   */
  fluid?: boolean,
  /**
   * show shadow
   */
  shadow?: boolean,
};

export default class Card extends PureComponent<CardProps> {

  static defaultProps: Partial<CardProps> = {
    fluid: false,
    shadow: false,
  };

  render() {
    const { children, shadow, className, fluid } = this.props;

    const classes = classNames('bi bi-card', {
      'card-fluid': fluid,
      'card-shadow': shadow,
    }, className);

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
