"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbItem = function BreadcrumbItem(props) {
  var path = props.path,
      label = props.label,
      icon = props.icon;

  if (!label && !icon) {
    (0, _shared.warn)('One of your breadcrumb items has been wiped out as it has no label nor icon');
    return null;
  }

  return _react["default"].createElement("li", {
    className: "bi bi-breadcrumb breadcrumb-item"
  }, !!path && _react["default"].createElement("a", {
    href: path
  }, !!icon && (0, _shared.makeIconFromProp)(icon), label), !path && _react["default"].createElement(_react["default"].Fragment, null, !!icon && (0, _shared.makeIconFromProp)(icon), label));
};

BreadcrumbItem.propTypes = {
  path: _propTypes["default"].string,
  label: _propTypes["default"].string,
  icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].instanceOf(_Icon["default"])])
};
BreadcrumbItem.defaultProps = {
  path: undefined,
  label: undefined,
  icon: undefined
};
var _default = BreadcrumbItem;
exports["default"] = _default;
//# sourceMappingURL=BreadcrumbItem.js.map