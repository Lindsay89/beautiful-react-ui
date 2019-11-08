"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("../../Forms/Checkbox"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItem = function ListItem(props) {
  var checkbox = props.checkbox,
      onChange = props.onChange,
      color = props.color,
      value = props.value,
      icon = props.icon,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["checkbox", "onChange", "color", "value", "icon", "children", "className"]);

  var classList = (0, _classnames["default"])('bi-list-item', "bi-list-item-".concat(color), {
    'bi-list-checkable': checkbox,
    'bi-list-item-checked': value
  }, className);
  var checkboxProps = {
    onClick: checkbox ? (0, _shared.makeCallback)(onChange, !value) : undefined,
    onKeyUp: checkbox ? (0, _shared.makeKeyboardCallback)(onChange, !value) : undefined,
    role: checkbox ? 'button' : undefined,
    tabIndex: checkbox ? 0 : undefined
  };
  return _react["default"].createElement("li", _extends({
    className: classList
  }, checkboxProps, rest), icon && (0, _shared.makeIconFromProp)(icon, {
    className: 'bi-list-item-icon'
  }), _react["default"].createElement("span", {
    className: "bi-list-item-content"
  }, children), checkbox && _react["default"].createElement(_Checkbox["default"], {
    onChange: onChange,
    value: value,
    color: color,
    className: "bi-item-checkbox"
  }));
};

ListItem.propTypes = {
  icon: _shared.IconProp,
  checkbox: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].bool,
  color: _shared.Color
};
ListItem.defaultProps = {
  icon: undefined,
  checkbox: false,
  onChange: undefined,
  value: undefined,
  color: 'default'
};

var _default = _react["default"].memo(ListItem);

exports["default"] = _default;
//# sourceMappingURL=ListItem.js.map