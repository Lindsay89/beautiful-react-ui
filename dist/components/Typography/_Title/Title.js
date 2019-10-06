"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Color = _interopRequireDefault(require("../../../shared/types/Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = function Title(_ref) {
  var children = _ref.children,
      color = _ref.color,
      tagName = _ref.tagName,
      className = _ref.className;
  var classList = (0, _classnames["default"])('bi-title', "bi-title-".concat(color), className);
  var TitleTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName) ? tagName : 'h1';
  return _react["default"].createElement(TitleTag, {
    className: classList
  }, children);
};

Title.propTypes = {
  color: _Color["default"],
  tagName: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Title.defaultProps = {
  color: 'default',
  tagName: 'h1'
};
var _default = Title;
exports["default"] = _default;
//# sourceMappingURL=Title.js.map