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

var _AccordionContent = _interopRequireDefault(require("./AccordionContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var cloneAccordionContents = function cloneAccordionContents(child, index, props) {
  if (child.type !== _AccordionContent["default"]) {
    (0, _shared.warn)('Accordion allows only Accordion.Content children, other kind of elements will be wiped out');
    return null;
  }

  return _react["default"].cloneElement(child, {
    internalId: index,
    active: props.active === index,
    onChange: props.onChange,
    iconOpen: props.iconOpen,
    iconClose: props.iconClose
  });
};

var Accordion = _react["default"].memo(function (props) {
  var children = props.children,
      color = props.color,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "color", "className"]);

  var classList = (0, _classnames["default"])('bi bi-accordion', "acc-color-".concat(color), className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react.Children.map(children, function (child, index) {
    return cloneAccordionContents(child, index, props);
  }));
});

Accordion.propTypes = {
  color: _shared.Color,
  onChange: _propTypes["default"].func.isRequired,
  active: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  iconOpen: _shared.IconProp,
  iconClose: _shared.IconProp,
  children: _propTypes["default"].node
};
Accordion.defaultProps = {
  children: undefined,
  color: 'default',
  iconOpen: 'minus',
  iconClose: 'plus'
};
Accordion.Content = _AccordionContent["default"];
var _default = Accordion;
exports["default"] = _default;
//# sourceMappingURL=Accordion.js.map