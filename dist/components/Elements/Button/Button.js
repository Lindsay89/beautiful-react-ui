"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _Pill = _interopRequireDefault(require("../Pill"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var type = props.type,
      fluid = props.fluid,
      color = props.color,
      rounded = props.rounded,
      outline = props.outline,
      disabled = props.disabled,
      size = props.size,
      icon = props.icon,
      hover = props.hover,
      spinner = props.spinner,
      onClick = props.onClick,
      pill = props.pill,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["type", "fluid", "color", "rounded", "outline", "disabled", "size", "icon", "hover", "spinner", "onClick", "pill", "className", "children"]);

  var lastChild = (0, _shared.getLastChild)(children);
  var firstChild = (0, _shared.getFirstChild)(children);
  var classList = (0, _classnames["default"])('bi bi-btn', "btn-".concat(color), {
    'btn-fluid': fluid,
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
    'btn-lci': lastChild && typeof lastChild !== 'string',
    'btn-fcp': firstChild && firstChild.type === _Pill["default"]
  }, className);
  return _react["default"].createElement("button", _extends({
    disabled: disabled,
    type: type,
    onClick: (0, _shared.makeCallback)(onClick),
    className: classList
  }, rest), _react["default"].createElement(_react["default"].Fragment, null, !!icon && (0, _shared.makeIconFromProp)(icon), !!spinner && (0, _shared.makeSpinnerFromProp)(spinner, {
    size: size
  }), children, !!pill && (0, _shared.makePillFromProp)(pill)));
};

Button.propTypes = {
  color: _shared.Color,
  size: _shared.Size,
  outline: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['submit', 'button', 'reset']),
  disabled: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  hover: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['round', 'zoom', 'shrink', 'float', 'reflection'])]),
  onClick: _propTypes["default"].func,
  icon: _shared.IconProp,
  spinner: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].instanceOf(_Spinner["default"])]),
  pill: _shared.PillProp,
  children: _propTypes["default"].node
};
Button.defaultProps = {
  color: 'default',
  size: 'default',
  rounded: false,
  outline: false,
  fluid: false,
  type: 'button',
  disabled: false,
  hover: undefined,
  icon: undefined,
  spinner: false,
  onClick: null,
  pill: undefined,
  children: null
};

var _default = _react["default"].memo(Button);

exports["default"] = _default;
//# sourceMappingURL=Button.js.map
