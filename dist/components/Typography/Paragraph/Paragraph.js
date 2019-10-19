"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Paragraph = function Paragraph(props) {
  var children = props.children,
      color = props.color,
      textAlign = props.textAlign,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "color", "textAlign", "className"]);

  var classList = (0, _classnames["default"])('bi-p', "bi-p-".concat(color), _defineProperty({}, "bi-p-".concat(textAlign), !!textAlign), className);
  return _react["default"].createElement("p", _extends({
    className: classList
  }, rest), children);
};

Paragraph.propTypes = {
  color: _shared.Color,
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify'])
};
Paragraph.defaultProps = {
  color: 'default',
  textAlign: undefined
};

var _default = _react["default"].memo(Paragraph);

exports["default"] = _default;
//# sourceMappingURL=Paragraph.js.map