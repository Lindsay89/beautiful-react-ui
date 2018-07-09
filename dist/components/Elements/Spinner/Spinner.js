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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = function Spinner(props) {
  var color = props.color,
      type = props.type,
      size = props.size,
      id = props.id,
      className = props.className,
      style = props.style;
  var classes = (0, _classnames["default"])('bi', 'bi-spinner', "spinner-".concat(color), {
    'spinner-sm': size === 'small',
    'spinner-lg': size === 'large'
  }, className);
  return _react["default"].createElement("span", {
    className: classes,
    id: id,
    style: style
  });
};

Spinner.propTypes = _objectSpread({}, _shared.BaseProps, {
  color: _shared.Color,
  size: _propTypes["default"].oneOfType(_shared.Size),
  type: _propTypes["default"].oneOf(['circle', 'bars', 'puff', 'dots'])
});
Spinner.defaultProps = {
  color: 'default',
  size: 'default',
  type: 'circle'
};
var _default = Spinner;
exports["default"] = _default;
//# sourceMappingURL=Spinner.js.map