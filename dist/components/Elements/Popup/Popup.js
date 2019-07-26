"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Portal = _interopRequireDefault(require("../_Portal/Portal"));

var _getElementAbsolutePosition = _interopRequireDefault(require("./getElementAbsolutePosition"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Popup = function Popup(props) {
  var trigger = props.trigger,
      isOpen = props.isOpen,
      onToggle = props.onToggle,
      action = props.action,
      title = props.title,
      placement = props.placement,
      hideArrow = props.hideArrow,
      offset = props.offset,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["trigger", "isOpen", "onToggle", "action", "title", "placement", "hideArrow", "offset", "children", "className"]);

  var triggerWrapperRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      elementStyle = _useState2[0],
      setElementStyle = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mouseIsHovering = _useState4[0],
      setMouseHover = _useState4[1];

  var classList = (0, _classnames["default"])('bi bi-popup', {
    'popup-top-left': placement === 'top-left',
    'popup-top-center': placement === 'top-center',
    'popup-top-right': placement === 'top-right',
    'popup-left-center': placement === 'left-center',
    'popup-right-center': placement === 'right-center',
    'popup-bottom-left': placement === 'bottom-left',
    'popup-bottom-center': placement === 'bottom-center',
    'popup-bottom-right': placement === 'bottom-right',
    'popup-hide-arrow': hideArrow === true
  }, className);

  var calcPopupPosition = function calcPopupPosition() {
    if (isOpen && triggerWrapperRef.current) {
      var nextStyle = (0, _getElementAbsolutePosition["default"])(triggerWrapperRef.current, placement, offset);
      setElementStyle(nextStyle);
    }
  };

  (0, _react.useEffect)(calcPopupPosition, [isOpen, offset, title, placement, children, hideArrow]);
  (0, _shared.useWindowResize)(calcPopupPosition);

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
    className: "bi-popup-trigger",
    ref: triggerWrapperRef,
    role: "complementary"
  }, actions), trigger), !isOpen ? null : _react["default"].createElement(_Portal["default"], {
    id: "bi-popups"
  }, _react["default"].createElement("div", _extends({}, rest, {
    className: classList,
    style: elementStyle
  }), title && _react["default"].createElement("h1", {
    className: "popup-title"
  }, title), _react["default"].createElement("div", {
    className: "popup-content"
  }, children))));
};

Popup.propTypes = {
  trigger: _propTypes["default"].node.isRequired,
  onToggle: _propTypes["default"].func.isRequired,
  isOpen: _propTypes["default"].bool,
  action: _propTypes["default"].oneOf(['click', 'hover']),
  title: _propTypes["default"].string,
  placement: _propTypes["default"].string,
  hideArrow: _propTypes["default"].bool,
  offset: _propTypes["default"].number
};
Popup.defaultProps = {
  isOpen: false,
  action: 'click',
  title: null,
  placement: 'top-center',
  hideArrow: false,
  offset: 10
};

var _default = _react["default"].memo(Popup);

exports["default"] = _default;
//# sourceMappingURL=Popup.js.map