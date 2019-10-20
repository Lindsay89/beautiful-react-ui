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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(props) {
  var color = props.color,
      text = props.text,
      required = props.required,
      className = props.className,
      htmlFor = props.htmlFor,
      children = props.children,
      rest = _objectWithoutProperties(props, ["color", "text", "required", "className", "htmlFor", "children"]);

  var classes = (0, _classnames["default"])('bi bi-label', "label-".concat(color), {
    required: required
  }, className);
  return _react["default"].createElement("label", _extends({
    htmlFor: htmlFor,
    className: classes
  }, rest), text, children, required && _react["default"].createElement("span", null, "*"));
};

Label.propTypes = {
  text: _propTypes["default"].string,
  htmlFor: _propTypes["default"].string.isRequired,
  color: _shared.Color,
  required: _propTypes["default"].bool
};
Label.defaultProps = {
  text: undefined,
  color: 'default',
  required: false
};

var _default = _react["default"].memo(Label);

exports["default"] = _default;
//# sourceMappingURL=Label.js.map