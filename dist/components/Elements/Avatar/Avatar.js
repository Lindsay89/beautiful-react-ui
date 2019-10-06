"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Image = _interopRequireDefault(require("../Image"));

var _Paragraph = _interopRequireDefault(require("../../Typography/_Paragraph"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Avatar = function Avatar(props) {
  var src = props.src,
      alt = props.alt,
      shape = props.shape,
      initials = props.initials,
      size = props.size,
      state = props.state,
      pill = props.pill,
      displayName = props.displayName,
      furtherInfo = props.furtherInfo,
      className = props.className,
      rest = _objectWithoutProperties(props, ["src", "alt", "shape", "initials", "size", "state", "pill", "displayName", "furtherInfo", "className"]);

  var classList = (0, _classnames["default"])('bi bi-avatar', {
    'avt-sm': size === 'small',
    'avt-lg': size === 'large',
    'avt-rounded': shape === 'rounded',
    'avt-square': shape === 'square',
    'avt-initials': initials
  }, className);

  if (!initials && !src) {
    (0, _shared.warn)('Avatar component has been used without providing a \'src\' nor an \'initials\' prop');
    return null;
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react["default"].createElement("div", {
    className: "bi-avatar-item"
  }, src && _react["default"].createElement(_Image["default"], {
    src: src,
    alt: alt,
    rounded: shape === 'rounded'
  }), initials && _react["default"].createElement("span", {
    className: "initials"
  }, initials.slice(0, 2))), pill && (0, _shared.makePillFromProp)(pill), state && _react["default"].createElement("span", {
    className: "avt-state state-".concat(state)
  })), (displayName || furtherInfo) && _react["default"].createElement("div", {
    className: "bi-avatar-info"
  }, displayName && _react["default"].createElement(_Paragraph["default"], {
    className: "avtr-disp-name"
  }, displayName), furtherInfo && _react["default"].createElement(_Paragraph["default"], {
    className: "avtr-furth-info"
  }, furtherInfo)));
};

Avatar.propTypes = {
  size: _shared.Size,
  shape: _propTypes["default"].oneOf(['rounded', 'square']),
  src: _propTypes["default"].string,
  initials: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  pill: _shared.PillProp,
  state: _propTypes["default"].oneOf(['offline', 'online', 'danger']),
  displayName: _propTypes["default"].string,
  furtherInfo: _propTypes["default"].string
};
Avatar.defaultProps = {
  size: 'default',
  shape: 'rounded',
  src: undefined,
  initials: undefined,
  alt: 'Avatar image',
  pill: undefined,
  state: undefined,
  displayName: '',
  furtherInfo: ''
};

var _default = _react["default"].memo(Avatar);

exports["default"] = _default;
//# sourceMappingURL=Avatar.js.map