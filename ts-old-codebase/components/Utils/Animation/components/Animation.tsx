import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import animejs from 'animejs';

// components
import FadeIn from './FadeIn';
import FadeOut from './FadeOut';
import FadeInDown from './FadeInDown';
import FadeInUp from './FadeInUp';
import FadeInLeft from './FadeInLeft';
import FadeInRight from './FadeInRight';
import FadeOutDown from './FadeOutDown';
import FadeOutUp from './FadeOutUp';
import FadeOutLeft from './FadeOutLeft';
import FadeOutRight from './FadeOutRight';

export type AnimationEasing = anime.EasingOptions;

type AnimationProps = {
  duration?: number,
  delay?: number,
  loop?: boolean,
  easing?: AnimationEasing | number[],
  onStart?: () => void,
  onComplete?: () => void,
  properties: {
    [CSSAnimableProperty: string]: any,
  },
};

export default class Animation extends PureComponent<AnimationProps> {

  public static defaultProps = {
    duration: 1500,
    loop: false,
    delay: 0,
    easing: 'easeInOutQuad',
    properties: {},
  };

  // Simple animations shortcuts
  public static FadeIn = FadeIn;
  public static FadeOut = FadeOut;
  public static FadeInDown = FadeInDown;
  public static FadeOutDown = FadeOutDown;
  public static FadeInUp = FadeInUp;
  public static FadeOutUp = FadeOutUp;
  public static FadeInLeft = FadeInLeft;
  public static FadeOutLeft = FadeOutLeft;
  public static FadeInRight = FadeInRight;
  public static FadeOutRight = FadeOutRight;

  private performAnimation() {
    const { duration, delay, loop, easing, properties, onStart, onComplete } = this.props;

    const options: anime.AnimeParams = {
      duration,
      delay,
      loop,
      easing,
      ...properties,
      begin: onStart,
      complete: onComplete,
      targets: findDOMNode(this),
    };

    animejs(options);
  }

  componentDidMount() {
    this.performAnimation();
  }

  componentDidUpdate() {
    this.performAnimation();
  }

  render() {
    const { children } = this.props;

    return (
      children
    );
  }
}
