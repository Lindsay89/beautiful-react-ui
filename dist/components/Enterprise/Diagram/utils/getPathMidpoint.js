"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getPathMidpoint = function getPathMidpoint(pathElement) {
  if (pathElement.getTotalLength && pathElement.getPointAtLength) {
    var midpoint = pathElement.getTotalLength() / 2;

    var _pathElement$getPoint = pathElement.getPointAtLength(midpoint),
        x = _pathElement$getPoint.x,
        y = _pathElement$getPoint.y;

    return [x, y];
  }

  return [0, 0];
};

var _default = getPathMidpoint;
exports["default"] = _default;
//# sourceMappingURL=getPathMidpoint.js.map
