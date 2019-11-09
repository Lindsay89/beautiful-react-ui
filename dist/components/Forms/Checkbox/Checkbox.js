"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shared = require("../../../shared");

var _HelpText = _interopRequireDefault(require("../_HelpText"));

var _Label = _interopRequireDefault(require("../Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(props) {
  var value = props.value,
      onChange = props.onChange,
      label = props.label,
      color = props.color,
      helpText = props.helpText,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, ["value", "onChange", "label", "color", "helpText", "className", "style"]);

  var classList = (0, _classnames["default"])('bi bi-checkbox', "checkbox-".concat(color), {
    checked: !!value,
    disabled: rest.disabled
  }, className);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: classList,
    onClick: !rest.disabled ? (0, _shared.makeCallback)(onChange, !value) : undefined,
    onKeyUp: (0, _shared.makeKeyboardCallback)(onChange, !value),
    tabIndex: 0,
    role: "checkbox",
    "aria-checked": value,
    style: style
  }, _react["default"].createElement("input", _extends({
    type: "checkbox",
    value: value
  }, rest)), _react["default"].createElement("span", {
    className: "check-icon"
  }, _react["default"].createElement("svg", {
    viewBox: "0 0 12 10"
  }, _react["default"].createElement("polyline", {
    points: "1.5 6 4.5 9 10.5 1"
  }))), _react["default"].createElement(_Label["default"], {
    htmlFor: rest.id,
    required: rest.required
  }, label)), helpText && _react["default"].createElement(_HelpText["default"], {
    text: helpText
  }));
};

Checkbox.propTypes = {
  value: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].string.isRequired,
  color: _shared.Color,
  disabled: _propTypes["default"].bool,
  helpText: _propTypes["default"].string,
  style: _propTypes["default"].shape({})
};
Checkbox.defaultProps = {
  style: undefined,
  color: 'default',
  disabled: false,
  helpText: undefined
};

var _default = _react["default"].memo(Checkbox);

exports["default"] = _default;
//# sourceMappingURL=Checkbox.js.map