"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getRelativePoint = function getRelativePoint(point, relative) {
  return [point[0] - relative[0], point[1] - relative[1]];
};

var _default = getRelativePoint;
exports["default"] = _default;
//# sourceMappingURL=getRelativePoint.js.map
