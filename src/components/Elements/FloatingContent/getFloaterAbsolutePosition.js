const getCenterPosition = (coordinates, bodyWidth) => bodyWidth - coordinates.x - (coordinates.width / 2);

const getRightPosition = (coordinates, bodyWidth) => bodyWidth - coordinates.x - coordinates.width;

const getLeftPosition = (coordinates) => coordinates.x;

const getTopPosition = (bodyHeight, coord, scrollY, offset) => bodyHeight - coord.top - scrollY + offset;

const getBottomPosition = (bodyHeight, coord, scrollY, offset) => (
  bodyHeight - coord.height - coord.top - scrollY - offset);

/**
 * Returns the absolute position of a given HTML element to the document.
 */
const getFloaterAbsolutePosition = (el, placement = 'top-center', offset = 0, setWidth = false) => {
  const { clientHeight, clientWidth } = document.body;
  let bottom;
  let right;
  let left;
  let transform;
  const { scrollY } = window;

  /**
   * As we assume the span is wrapping a React component, we try to get its bounding client rect by accessing the span's
   * children from the `element.children` property, if it is not available or is empty we then use the span itself to
   * get the bounding client rect.
   */
  const boundingRect = el.children.length !== 0 ? el.children[0].getBoundingClientRect() : el.getBoundingClientRect();

  switch (placement) {
    case 'top-left':
      bottom = getTopPosition(clientHeight, boundingRect, scrollY, offset);
      left = getLeftPosition(boundingRect);
      break;
    case 'top-center':
    default:
      bottom = getTopPosition(clientHeight, boundingRect, scrollY, offset);
      right = getCenterPosition(boundingRect, clientWidth);
      transform = 'translateX(50%)';
      break;
    case 'top-right':
      bottom = getTopPosition(clientHeight, boundingRect, scrollY, offset);
      right = getRightPosition(boundingRect, clientWidth);
      transform = 'translate(0%,0%)';
      break;
    case 'bottom-left':
      bottom = getBottomPosition(clientHeight, boundingRect, scrollY, offset);
      left = getLeftPosition(boundingRect);
      transform = 'translateY(100%)';
      break;
    case 'bottom-center':
      bottom = getBottomPosition(clientHeight, boundingRect, scrollY, offset);
      right = getCenterPosition(boundingRect, clientWidth);
      transform = 'translate(50%,100%)';
      break;
    case 'bottom-right':
      bottom = getBottomPosition(clientHeight, boundingRect, scrollY, offset);
      right = getRightPosition(boundingRect, clientWidth);
      transform = 'translateY(100%)';
      break;
    case 'left-center':
      right = getRightPosition(boundingRect, clientWidth) + boundingRect.width + offset;
      // Disabling to avoid using more than one line for a mathematical operation
      // eslint-disable-next-line max-len
      bottom = getTopPosition(clientHeight, boundingRect, scrollY, offset) - offset - (boundingRect.height / 2);
      transform = 'translateY(50%)';
      break;
    case 'right-center':
      left = getLeftPosition(boundingRect) + boundingRect.width + offset;
      // Disabling to avoid using more than one line for a mathematical operation
      // eslint-disable-next-line max-len
      bottom = getTopPosition(clientHeight, boundingRect, scrollY, offset) - offset - (boundingRect.height / 2);
      transform = 'translateY(50%)';
      break;
  }

  return ({ bottom, right, left, transform, ...setWidth && { width: boundingRect.width } });
};

export default getFloaterAbsolutePosition;
