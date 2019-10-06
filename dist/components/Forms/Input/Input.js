"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _HelpText = _interopRequireDefault(require("../_HelpText"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(props) {
  var value = props.value,
      onChange = props.onChange,
      color = props.color,
      placeholder = props.placeholder,
      disabled = props.disabled,
      size = props.size,
      helpText = props.helpText,
      icon = props.icon,
      iconPosition = props.iconPosition,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, ["value", "onChange", "color", "placeholder", "disabled", "size", "helpText", "icon", "iconPosition", "className", "style"]);

  var classList = (0, _classnames["default"])('bi bi-input', "input-".concat(color), {
    disabled: disabled,
    'has-icon': !!icon,
    'icon-left': iconPosition === 'left',
    'input-sm': size === 'small',
    'input-lg': size === 'large'
  }, className);
  return _react["default"].createElement("div", {
    className: classList,
    style: style
  }, _react["default"].createElement("input", _extends({
    value: value,
    onChange: (0, _shared.makeCallback)(onChange),
    placeholder: placeholder,
    disabled: disabled
  }, rest)), icon && (0, _shared.makeIconFromProp)(icon, {
    size: size
  }), helpText && _react["default"].createElement(_HelpText["default"], {
    text: helpText,
    color: color
  }));
};

Input.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  helpText: _propTypes["default"].string,
  color: _shared.Color,
  size: _shared.Size,
  icon: _shared.IconProp,
  iconPosition: _propTypes["default"].oneOf(['right', 'left']),
  style: _propTypes["default"].shape({})
};
Input.defaultProps = {
  placeholder: 'text...',
  disabled: false,
  helpText: undefined,
  color: 'default',
  size: 'default',
  icon: undefined,
  iconPosition: 'right',
  style: undefined
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=Input.js.map