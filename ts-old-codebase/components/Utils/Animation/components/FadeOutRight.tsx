import React, { Component } from 'react';
import Animation from './Animation';

// types
import { SimpleAnimationProps } from '../models/SimpleAnimation.props';

type State = {
  setup: boolean,
};

export default class FadeOutRight extends Component<SimpleAnimationProps, State> {

  static defaultProps = {
    duration: 1200,
    delay: 25,
    easing: 'easeInSine',
  };

  state = {
    setup: false,
  };

  setup() {
    const { onComplete } = this.props;

    if (!this.state.setup) {
      this.setState({
        setup: true,
      });
    }

    if (onComplete) onComplete();
  }

  render() {
    const { setup } = this.state;
    const { children, duration, easing, onStart } = this.props;

    return (
      <Animation
        duration={setup ? duration : 0}
        delay={setup ? 50 : 0}
        properties={{ opacity: setup ? '0' : '1', translateX: setup ? '0' : '0.5rem' }}
        onComplete={() => this.setup()}
        easing={easing}
        onStart={onStart}>
        {children}
      </Animation>
    );
  }
}
