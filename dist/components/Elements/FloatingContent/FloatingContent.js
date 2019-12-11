"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Portal = _interopRequireDefault(require("../_Portal/Portal"));

var _getFloaterAbsolutePosition = _interopRequireDefault(require("./getFloaterAbsolutePosition"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FloatingContent = function FloatingContent(props) {
  var trigger = props.trigger,
      isShown = props.isShown,
      onToggle = props.onToggle,
      action = props.action,
      placement = props.placement,
      offset = props.offset,
      clickOutsideToToggle = props.clickOutsideToToggle,
      widthAsTrigger = props.widthAsTrigger,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["trigger", "isShown", "onToggle", "action", "placement", "offset", "clickOutsideToToggle", "widthAsTrigger", "children", "className"]);

  var triggerWrapperRef = (0, _react.useRef)(null);
  var contentWrapperRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      elementStyle = _useState2[0],
      setElementStyle = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mouseIsHovering = _useState4[0],
      setMouseHover = _useState4[1];

  var classList = (0, _classnames["default"])('bi bi-floater', {
    'float-top-left': placement === 'top-left',
    'float-top-center': placement === 'top-center',
    'float-top-right': placement === 'top-right',
    'float-left-center': placement === 'left-center',
    'float-right-center': placement === 'right-center',
    'float-bottom-left': placement === 'bottom-left',
    'float-bottom-center': placement === 'bottom-center',
    'float-bottom-right': placement === 'bottom-right'
  }, className);

  var calcPopupPosition = function calcPopupPosition() {
    if (isShown && triggerWrapperRef.current) {
      var nextStyle = (0, _getFloaterAbsolutePosition["default"])(triggerWrapperRef.current, placement, offset, widthAsTrigger);
      setElementStyle(nextStyle);
    }
  };

  var clickOutsideHandler = function clickOutsideHandler(_ref) {
    var target = _ref.target;

    if (isShown && triggerWrapperRef.current && !triggerWrapperRef.current.contains(target) && contentWrapperRef.current && !contentWrapperRef.current.contains(target)) {
      onToggle();
    }
  };

  (0, _react.useEffect)(calcPopupPosition, [isShown, offset, placement, children]);
  (0, _shared.useWindowResize)(calcPopupPosition);
  (0, _react.useEffect)(function () {
    if (triggerWrapperRef.current && contentWrapperRef.current && clickOutsideToToggle && action === 'click') {
      document.addEventListener('click', clickOutsideHandler);
    }

    return function () {
      document.removeEventListener('click', clickOutsideHandler);
    };
  }, [triggerWrapperRef.current, contentWrapperRef.current]);

  var onMouseEnter = function onMouseEnter() {
    if (!mouseIsHovering) {
      setMouseHover(true);
      onToggle();
    }
  };

  var onMouseLeave = function onMouseLeave() {
    if (mouseIsHovering) {
      setMouseHover(false);
      onToggle();
    }
  };

  var actions = {
    onClick: action === 'click' ? onToggle : undefined,
    onMouseEnter: action === 'hover' ? onMouseEnter : undefined,
    onMouseLeave: action === 'hover' ? onMouseLeave : undefined
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", _extends({
    className: "bi bi-float-trigger",
    ref: triggerWrapperRef,
    role: "complementary"
  }, actions), trigger), !isShown ? null : _react["default"].createElement(_Portal["default"], {
    id: "bi-floats"
  }, _react["default"].createElement("div", _extends({}, rest, {
    className: classList,
    style: elementStyle,
    ref: contentWrapperRef
  }), children)));
};

FloatingContent.propTypes = {
  trigger: _propTypes["default"].node.isRequired,
  isShown: _propTypes["default"].bool,
  onToggle: _propTypes["default"].func.isRequired,
  action: _propTypes["default"].oneOf(['click', 'hover']),
  clickOutsideToToggle: _propTypes["default"].bool,
  placement: _shared.Placement,
  offset: _propTypes["default"].number,
  widthAsTrigger: _propTypes["default"].bool
};
FloatingContent.defaultProps = {
  isShown: false,
  action: 'click',
  clickOutsideToToggle: true,
  placement: 'top-center',
  offset: 0,
  widthAsTrigger: false
};

var _default = _react["default"].memo(FloatingContent);

exports["default"] = _default;
//# sourceMappingURL=FloatingContent.js.map
