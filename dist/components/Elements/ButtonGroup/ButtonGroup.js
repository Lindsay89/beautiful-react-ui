"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../shared");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var cloneButton = function cloneButton(buttonInstance, props) {
  if (buttonInstance.type !== _Button["default"]) {
    (0, _shared.warn)('ButtonGroup\'s children can only be instances of the Button component, any other has been wiped out.');
    return null;
  }

  return _react["default"].cloneElement(buttonInstance, props);
};

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fluid = _ref.fluid,
      id = _ref.id,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["children", "className", "fluid", "id", "style"]);

  var classList = (0, _classnames["default"])('bi bi-btn-group', "btn-group-".concat(props.color), {
    'group-fluid': fluid,
    'group-outline': props.outline,
    'group-rounded': props.rounded
  }, className);
  return _react["default"].createElement("span", {
    className: classList,
    id: id,
    style: style
  }, _react.Children.map(children, function (child) {
    return cloneButton(child, props);
  }));
};

ButtonGroup.propTypes = {
  color: _shared.Color,
  size: _shared.Size,
  outline: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
ButtonGroup.defaultProps = {
  color: 'default',
  size: 'default',
  outline: false,
  rounded: false,
  fluid: false,
  children: null
};

var _default = _react["default"].memo(ButtonGroup);

exports["default"] = _default;
//# sourceMappingURL=ButtonGroup.js.map
