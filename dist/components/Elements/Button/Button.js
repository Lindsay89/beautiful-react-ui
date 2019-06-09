"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(props) {
  var children = props.children,
      type = props.type,
      block = props.block,
      color = props.color,
      rounded = props.rounded,
      outline = props.outline,
      disabled = props.disabled,
      size = props.size,
      icon = props.icon,
      hover = props.hover,
      spinner = props.spinner,
      onClick = props.onClick,
      className = props.className,
      id = props.id,
      style = props.style;
  var lastChild = (0, _shared.getLastChild)(children);
  var classList = (0, _classnames["default"])('bi bi-btn', "btn-".concat(color), {
    'btn-block': block,
    'btn-outline': outline,
    'btn-rounded': rounded,
    'btn-he-zoom': hover === 'zoom',
    'btn-he-float': hover === 'float' || hover === true,
    'btn-he-shrink': hover === 'shrink',
    'btn-he-refl': hover === 'reflection',
    'btn-he-rnd': hover === 'round',
    'btn-sm': size === 'small',
    'btn-lg': size === 'large',
    'btn-icon-only': (0, _shared.emptyChildren)(children),
    'btn-lci': lastChild && typeof lastChild !== 'string'
  }, className);
  return _react["default"].createElement("button", {
    id: id,
    disabled: disabled,
    type: type,
    onClick: (0, _shared.makeCallback)(onClick),
    className: classList,
    style: style
  }, !!icon && (0, _shared.makeIconFromProp)(icon), !!spinner && (0, _shared.makeSpinnerFromProp)(spinner, {
    size: size
  }), children);
};

Button.propTypes = _objectSpread({}, _shared.BaseProps, {
  color: _shared.Color,
  size: _shared.Size,
  outline: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['submit', 'button', 'reset']),
  disabled: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  hover: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['round', 'zoom', 'shrink', 'float', 'reflection'])]),
  onClick: _propTypes["default"].func,
  icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].instanceOf(_Icon["default"])]),
  spinner: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].instanceOf(_Spinner["default"])]),
  children: _propTypes["default"].node
});
Button.defaultProps = {
  color: 'default',
  size: 'default',
  rounded: false,
  outline: false,
  block: false,
  type: 'button',
  disabled: false,
  hover: undefined,
  icon: undefined,
  spinner: false,
  onClick: null,
  children: null
};

var _default = _react["default"].memo(Button);

exports["default"] = _default;
//# sourceMappingURL=Button.js.map