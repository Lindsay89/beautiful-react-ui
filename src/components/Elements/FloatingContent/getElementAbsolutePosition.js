const getCenterPosition = (coordinates, bodyWidth) => bodyWidth - coordinates.x - (coordinates.width / 2);

const getRightPosition = (coordinates, bodyWidth) => bodyWidth - coordinates.x - coordinates.width;

const getLeftPosition = (coordinates) => coordinates.x;

const getTopPosition = (bodyHeight, element, offset) => bodyHeight - element.offsetTop - offset;

const getBottomPosition = (bodyHeight, coord, elem, offset) => bodyHeight - elem.offsetTop - coord.height - offset;

/**
 * Returns the absolute position of a given HTML element to the document.
 */
const getElementAbsolutePosition = (element, placement = 'top-center', offset = 10, setWidth = false) => {
  const { clientHeight, clientWidth } = document.body;
  let bottom;
  let right;
  let left;
  let transform;

  /**
   * As we assume the span is wrapping a React component, we try to get its bounding client rect by accessing the span's
   * children from the `element.children` property, if it is not available or is empty we then use the span itself to
   * get the bounding client rect.
   */
  const boundingClientRect = element.children.length !== 0
    ? element.children[0].getBoundingClientRect()
    : element.getBoundingClientRect();

  switch (placement) {
    case 'top-left':
      bottom = getTopPosition(clientHeight, element, offset);
      left = getLeftPosition(boundingClientRect);
      break;
    case 'top-center':
    default:
      bottom = getTopPosition(clientHeight, element, offset);
      right = getCenterPosition(boundingClientRect, clientWidth);
      transform = 'translateX(50%)';
      break;
    case 'top-right':
      bottom = getTopPosition(clientHeight, element, offset);
      right = getRightPosition(boundingClientRect, clientWidth);
      transform = 'translate(0%,0%)';
      break;
    case 'bottom-left':
      bottom = getBottomPosition(clientHeight, boundingClientRect, element, offset);
      left = getLeftPosition(boundingClientRect);
      transform = 'translateY(100%)';
      break;
    case 'bottom-center':
      bottom = getBottomPosition(clientHeight, boundingClientRect, element, offset);
      right = getCenterPosition(boundingClientRect, clientWidth);
      transform = 'translate(50%,100%)';
      break;
    case 'bottom-right':
      bottom = getBottomPosition(clientHeight, boundingClientRect, element, offset);
      right = getRightPosition(boundingClientRect, clientWidth);
      transform = 'translateY(100%)';
      break;
    case 'left-center':
      right = getRightPosition(boundingClientRect, clientWidth) + boundingClientRect.width + offset;
      bottom = getTopPosition(clientHeight, element, offset) - offset - (boundingClientRect.height / 2);
      transform = 'translateY(50%)';
      break;
    case 'right-center':
      left = getLeftPosition(boundingClientRect) + boundingClientRect.width + offset;
      bottom = getTopPosition(clientHeight, element, offset) - offset - (boundingClientRect.height / 2);
      transform = 'translateY(50%)';
      break;
  }

  return ({ bottom, right, left, transform, ...setWidth && { width: boundingClientRect.width } });
};

export default getElementAbsolutePosition;
