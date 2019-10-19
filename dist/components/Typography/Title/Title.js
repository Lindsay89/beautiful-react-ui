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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Title = function Title(props) {
  var children = props.children,
      color = props.color,
      tagName = props.tagName,
      textAlign = props.textAlign,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "color", "tagName", "textAlign", "className"]);

  var TitleTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName) ? tagName : 'h1';
  var classList = (0, _classnames["default"])('bi-title', "bi-title-".concat(color), _defineProperty({}, "bi-title-".concat(textAlign), !!textAlign), className);
  return _react["default"].createElement(TitleTag, _extends({
    className: classList
  }, rest), children);
};

Title.propTypes = {
  color: _shared.Color,
  tagName: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify'])
};
Title.defaultProps = {
  color: 'default',
  tagName: 'h1',
  textAlign: undefined
};

var _default = _react["default"].memo(Title);

exports["default"] = _default;
//# sourceMappingURL=Title.js.map