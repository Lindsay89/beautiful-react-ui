"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../shared");

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Breadcrumbs = function Breadcrumbs(props) {
  var items = props.items,
      color = props.color,
      className = props.className,
      rest = _objectWithoutProperties(props, ["items", "color", "className"]);

  var classList = (0, _classnames["default"])("bi bi-breadcrumbs breadcrumbs-".concat(color), className);
  return _react["default"].createElement("nav", _extends({
    className: classList
  }, rest), _react["default"].createElement("ol", null, items.map(function (item) {
    return item.render ? item.render(item) : _react["default"].createElement(_BreadcrumbItem["default"], {
      path: item.path,
      label: item.label,
      icon: item.icon
    });
  })));
};

Breadcrumbs.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    path: _propTypes["default"].string,
    label: _propTypes["default"].string,
    icon: _shared.IconProp,
    render: _propTypes["default"].func
  })).isRequired,
  color: _shared.Color
};
Breadcrumbs.defaultProps = {
  color: 'primary'
};

var _default = _react["default"].memo(Breadcrumbs);

exports["default"] = _default;
//# sourceMappingURL=Breadcrumbs.js.map