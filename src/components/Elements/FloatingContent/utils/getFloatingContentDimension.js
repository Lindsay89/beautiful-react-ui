/**
 * This function return the floating content element height or width, based on the provided placement
 */
const getFloatingContentDimension = (el, placement) => {
  const position = placement.split('-')[0];
  if (position === 'top' || position === 'bottom') {
    return el.clientHeight;
  }
  return el.clientWidth;
};

export default getFloatingContentDimension;
