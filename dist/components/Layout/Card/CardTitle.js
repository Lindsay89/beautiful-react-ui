"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Title = _interopRequireDefault(require("../../Typography/_Title"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardTitle = function CardTitle(_ref) {
  var children = _ref.children,
      textAlign = _ref.textAlign,
      color = _ref.color,
      className = _ref.className;
  var classList = (0, _classnames["default"])('card-title', _defineProperty({}, "text-align-".concat(textAlign), !!textAlign), className);
  return _react["default"].createElement(_Title["default"], {
    color: color,
    className: classList
  }, children);
};

CardTitle.propTypes = {
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify']),
  color: _shared.Color
};
CardTitle.defaultProps = {
  textAlign: undefined,
  color: 'default'
};
var _default = CardTitle;
exports["default"] = _default;
//# sourceMappingURL=CardTitle.js.map