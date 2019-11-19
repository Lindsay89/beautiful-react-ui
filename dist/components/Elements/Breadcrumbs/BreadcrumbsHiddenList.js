"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FloatingContent = _interopRequireDefault(require("../FloatingContent"));

var _List = _interopRequireDefault(require("../List"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BreadcrumbsHiddenList = function BreadcrumbsHiddenList(props) {
  var hiddenItems = props.hiddenItems;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var toggleHandler = (0, _react.useCallback)(function () {
    setIsShown(!isShown);
  }, [isShown]);

  var Trigger = _react["default"].createElement(_Button["default"], {
    icon: "ellipsis-v",
    color: "transparent",
    outline: true,
    size: "small",
    className: "bi-breadcrumbs-menu-button"
  });

  return _react["default"].createElement("li", {
    className: "bi breadcrumb-item breadcrumb-item-button"
  }, _react["default"].createElement(_FloatingContent["default"], {
    onToggle: toggleHandler,
    isShown: isShown,
    trigger: Trigger,
    placement: "bottom-left"
  }, _react["default"].createElement(_List["default"], {
    condensed: true,
    className: "bi-anim-fade-in"
  }, hiddenItems.map(function (item) {
    return _react["default"].createElement(_List["default"].Item, {
      style: {
        paddingLeft: '.25rem',
        paddingRight: '1rem'
      },
      key: item.path || item.label
    }, !!item.path && _react["default"].createElement("a", {
      href: item.path
    }, !!item.icon && (0, _shared.makeIconFromProp)(item.icon), item.label), !item.path && _react["default"].createElement(_react["default"].Fragment, null, !!item.icon && (0, _shared.makeIconFromProp)(item.icon), item.label));
  }))));
};

BreadcrumbsHiddenList.propTypes = {
  hiddenItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    path: _propTypes["default"].string,
    label: _propTypes["default"].string,
    icon: _shared.IconProp,
    render: _propTypes["default"].func
  })).isRequired
};
var _default = BreadcrumbsHiddenList;
exports["default"] = _default;
//# sourceMappingURL=BreadcrumbsHiddenList.js.map