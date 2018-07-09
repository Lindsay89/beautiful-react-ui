import { AnimationEasing } from '../components/Animation';

export type SimpleAnimationProps = {
  duration?: number,
  easing?: AnimationEasing | number[],
  onStart?: () => void,
  onComplete?: () => void,
};
