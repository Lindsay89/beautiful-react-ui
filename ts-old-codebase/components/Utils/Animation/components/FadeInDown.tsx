import React, { Component } from 'react';
import Animation from './Animation';

// types
import { SimpleAnimationProps } from '../models/SimpleAnimation.props';

type State = {
  setup: boolean,
};

export default class FadeInDown extends Component<SimpleAnimationProps, State> {

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
    const { children, easing, duration, onStart } = this.props;

    return (
      <Animation
        duration={setup ? duration : 0}
        delay={setup ? 50 : 0}
        easing={easing}
        properties={{ opacity: setup ? '1' : '0', translateY: setup ? '0' : '-0.5rem' }}
        onComplete={() => this.setup()}
        onStart={onStart}>
        {children}
      </Animation>
    );
  }
}
