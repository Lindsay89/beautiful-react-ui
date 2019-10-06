import { Fragment } from 'react';

/**
 * Returns a div and its props if the current card needs to wrap the image
 * @param reversed
 * @param horizontal
 */
const getPossibleImageWrapper = (reversed, horizontal) => {
  const needsTheWrapper = (reversed && horizontal);
  const PossibleImageWrapper = needsTheWrapper ? 'div' : Fragment;
  const possibleImageWrapperProps = needsTheWrapper ? { className: 'icon-img-container' } : {};

  return [PossibleImageWrapper, possibleImageWrapperProps];
};

export default getPossibleImageWrapper;
