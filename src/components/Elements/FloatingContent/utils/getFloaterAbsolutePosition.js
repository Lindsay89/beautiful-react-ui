import getTargetBoundingClientRect from './getTargetBoundingClientRect';
import calculatePositionByPlacementMap from './calculatePositionByPlacementMap';

/**
 * Returns the absolute position of a given HTML element to the document.
 */
const getFloaterAbsolutePosition = (el, placement = 'top-center', offset = 0, setWidth = false) => {
  const { clientHeight, clientWidth } = document.body;
  const { scrollY } = window;
  const boundingRect = getTargetBoundingClientRect(el);
  const calculatePosition = calculatePositionByPlacementMap[placement];
  const position = calculatePosition(boundingRect, clientHeight, clientWidth, scrollY, offset);

  return ({ ...position, ...setWidth && { width: boundingRect.width } });
};

export default getFloaterAbsolutePosition;
