"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = function Label(_ref) {
  var children = _ref.children,
      type = _ref.type,
      size = _ref.size,
      color = _ref.color;
  var classes = (0, _classnames["default"])('bi bi-label', "label-".concat(color), {
    'label-sm': size === 'small',
    'label-lg': size === 'large',
    'label-sans': type === 'sans',
    'label-serif': type === 'serif',
    'label-mono': type === 'mono'
  });
  return _react["default"].createElement("span", {
    className: classes
  }, children);
};

Label.propTypes = {
  children: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(['sans', 'serif', 'mono']),
  size: _shared.Size,
  color: _shared.Color
};
Label.defaultProps = {
  type: 'sans',
  size: 'default',
  color: 'default'
};
var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=Label.js.map