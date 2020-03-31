import getTargetBoundingClientRect from './getTargetBoundingClientRect';

/**
 * This function checks if it has enough space for the FloatingContent to be shown
 */
const checkAvailableSpace = (el) => {
  const bounding = getTargetBoundingClientRect(el);

  return (
    bounding.top >= 0
    && bounding.left >= 0
    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default checkAvailableSpace;
