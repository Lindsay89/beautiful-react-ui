"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var removeLinkFromArray = function removeLinkFromArray(link, links) {
  return links.filter(function (item) {
    return !(0, _isEqual["default"])(item, link);
  });
};

var _default = removeLinkFromArray;
exports["default"] = _default;
//# sourceMappingURL=removeLinkFromArray.js.map
