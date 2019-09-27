"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getCenterPosition = function getCenterPosition(coordinates, bodyWidth) {
  return bodyWidth - coordinates.x - coordinates.width / 2;
};

var getRightPosition = function getRightPosition(coordinates, bodyWidth) {
  return bodyWidth - coordinates.x - coordinates.width;
};

var getLeftPosition = function getLeftPosition(coordinates) {
  return coordinates.x;
};

var getTopPosition = function getTopPosition(bodyHeight, element, offset) {
  return bodyHeight - element.offsetTop - offset;
};

var getBottomPosition = function getBottomPosition(bodyHeight, coord, elem, offset) {
  return bodyHeight - elem.offsetTop - coord.height - offset;
};

var getElementAbsolutePosition = function getElementAbsolutePosition(element) {
  var placement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top-center';
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var setWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var _document$body = document.body,
      clientHeight = _document$body.clientHeight,
      clientWidth = _document$body.clientWidth;
  var bottom;
  var right;
  var left;
  var transform;
  var boundingClientRect = element.children.length !== 0 ? element.children[0].getBoundingClientRect() : element.getBoundingClientRect();

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
      bottom = getTopPosition(clientHeight, element, offset) - offset - boundingClientRect.height / 2;
      transform = 'translateY(50%)';
      break;

    case 'right-center':
      left = getLeftPosition(boundingClientRect) + boundingClientRect.width + offset;
      bottom = getTopPosition(clientHeight, element, offset) - offset - boundingClientRect.height / 2;
      transform = 'translateY(50%)';
      break;
  }

  return _objectSpread({
    bottom: bottom,
    right: right,
    left: left,
    transform: transform
  }, setWidth && {
    width: boundingClientRect.width
  });
};

var _default = getElementAbsolutePosition;
exports["default"] = _default;
//# sourceMappingURL=getElementAbsolutePosition.js.map