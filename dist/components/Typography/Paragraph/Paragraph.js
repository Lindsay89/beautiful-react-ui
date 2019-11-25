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
  var _classNames;

  var children = props.children,
      color = props.color,
      fontFamily = props.fontFamily,
      textAlign = props.textAlign,
      wordBreak = props.wordBreak,
      tiny = props.tiny,
      light = props.light,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "color", "fontFamily", "textAlign", "wordBreak", "tiny", "light", "className"]);

  var classList = (0, _classnames["default"])('bi bi-p', "bi-p-".concat(color), "bi-ff-".concat(fontFamily), (_classNames = {}, _defineProperty(_classNames, "bi-p-".concat(textAlign), !!textAlign), _defineProperty(_classNames, "bi-p-break-".concat(wordBreak), !!wordBreak), _defineProperty(_classNames, 'bi-p-tiny', tiny), _defineProperty(_classNames, 'bi-p-light', light), _classNames), className);
  return _react["default"].createElement("p", _extends({
    className: classList
  }, rest), children);
};

Paragraph.propTypes = {
  color: _shared.Color,
  fontFamily: _propTypes["default"].oneOf(['sans', 'serif', 'mono']),
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify']),
  wordBreak: _propTypes["default"].oneOf(['normal', 'words', 'all', 'truncate']),
  tiny: _propTypes["default"].bool,
  light: _propTypes["default"].bool
};
Paragraph.defaultProps = {
  color: 'default',
  fontFamily: 'sans',
  textAlign: undefined,
  wordBreak: 'normal',
  tiny: false,
  light: false
};

var _default = _react["default"].memo(Paragraph);

exports["default"] = _default;
//# sourceMappingURL=Paragraph.js.map
