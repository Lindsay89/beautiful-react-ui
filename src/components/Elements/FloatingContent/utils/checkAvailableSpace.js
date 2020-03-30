import getFloatingContentDimension from './getFloatingContentDimension';

/**
 * This function checks if it has enough space for the FloatingContent to be shown
 */
const checkAvailableSpace = (el, nextStyle, placement) => {
  const floatingContentPosition = placement.split('-')[0];
  const styleProperty = {
    'top-left': 'bottom',
    'top-center': 'bottom',
    'top-right': 'bottom',
    'bottom-left': 'bottom',
    'bottom-center': 'bottom',
    'bottom-right': 'bottom',
    'left-center': 'right',
    'right-center': 'left',
  };
  if (el && nextStyle) {
    const elDimension = getFloatingContentDimension(el, placement);
    /** for left and right placement the calculation is different because the position is calculated respectively using
     * right and left css properties.
     * The window with must be bigger than the sum of the floating content dimension and its left/right css property
     */
    if (styleProperty === 'left' || styleProperty === 'right') {
      return (elDimension + nextStyle[styleProperty[placement]] < document.body.clientWidth);
    }
    if (floatingContentPosition === 'bottom') {
      return elDimension < nextStyle[styleProperty[placement]];
    }

    return elDimension + nextStyle[styleProperty[placement]] < document.body.clientHeight;
  }

  return true;
};

export default checkAvailableSpace;
