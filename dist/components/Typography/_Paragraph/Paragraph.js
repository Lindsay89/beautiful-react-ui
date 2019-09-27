"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react["default"].createElement("p", {
    className: (0, _classnames["default"])('bi-p', className)
  }, children);
};

var _default = Paragraph;
exports["default"] = _default;
//# sourceMappingURL=Paragraph.js.map