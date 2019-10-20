"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Caret = function Caret() {
  return _react["default"].createElement("div", {
    className: "bi bi-caret"
  }, _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, _react["default"].createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  })));
};

var _default = _react["default"].memo(Caret);

exports["default"] = _default;
//# sourceMappingURL=Caret.js.map