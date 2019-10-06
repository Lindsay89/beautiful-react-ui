"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Elements/Icon"));

var _Button = _interopRequireDefault(require("../../Elements/Button"));

var _CardTitle = _interopRequireDefault(require("./CardTitle"));

var _CardContent = _interopRequireDefault(require("./CardContent"));

var _CardImage = _interopRequireDefault(require("./CardImage"));

var _CardFooter = _interopRequireDefault(require("./CardFooter"));

var _takeCardImageOutOfChildren = _interopRequireDefault(require("./utils/takeCardImageOutOfChildren"));

var _getPossibleImageWrapper = _interopRequireDefault(require("./utils/getPossibleImageWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Card = _react["default"].memo(function (props) {
  var _classNames;

  var children = props.children,
      textAlign = props.textAlign,
      fluid = props.fluid,
      horizontal = props.horizontal,
      actionButton = props.actionButton,
      actionButtonIcon = props.actionButtonIcon,
      actionButtonRender = props.actionButtonRender,
      onActionButtonClick = props.onActionButtonClick,
      reversed = props.reversed,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "textAlign", "fluid", "horizontal", "actionButton", "actionButtonIcon", "actionButtonRender", "onActionButtonClick", "reversed", "className"]);

  var _takeCardImageOutOfCh = (0, _takeCardImageOutOfChildren["default"])(children),
      _takeCardImageOutOfCh2 = _slicedToArray(_takeCardImageOutOfCh, 2),
      cardImage = _takeCardImageOutOfCh2[0],
      childrenWithoutImg = _takeCardImageOutOfCh2[1];

  var _getPossibleImageWrap = (0, _getPossibleImageWrapper["default"])(reversed, horizontal),
      _getPossibleImageWrap2 = _slicedToArray(_getPossibleImageWrap, 2),
      PossibleImageWrapper = _getPossibleImageWrap2[0],
      possibleImageWrapperProps = _getPossibleImageWrap2[1];

  var classList = (0, _classnames["default"])('bi bi-card', (_classNames = {}, _defineProperty(_classNames, "text-align-".concat(textAlign), !!textAlign), _defineProperty(_classNames, "fluid", !!fluid), _defineProperty(_classNames, "horizontal", !!horizontal), _defineProperty(_classNames, "reversed", reversed), _classNames), className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), (cardImage || actionButton) && _react["default"].createElement(PossibleImageWrapper, possibleImageWrapperProps, actionButton && _react["default"].createElement("div", {
    className: (0, _classnames["default"])({
      'bi-card-actbtn-icn': !!actionButton,
      'no-img': !cardImage
    })
  }, actionButton && actionButtonRender && actionButtonRender(), actionButton && !actionButtonRender && _react["default"].createElement(_Button["default"], {
    color: "transparent",
    icon: _react["default"].createElement(_Icon["default"], {
      name: actionButtonIcon
    }),
    onClick: onActionButtonClick,
    className: "btn-dots",
    rounded: true
  })), cardImage && cardImage), _react["default"].createElement("div", {
    className: "card-content-wrapper"
  }, childrenWithoutImg));
});

Card.propTypes = {
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify']),
  fluid: _propTypes["default"].bool,
  horizontal: _propTypes["default"].bool,
  actionButton: _propTypes["default"].bool,
  actionButtonIcon: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(_Icon["default"]), 'string']),
  actionButtonRender: _propTypes["default"].func,
  onActionButtonClick: _propTypes["default"].func,
  reversed: _propTypes["default"].bool
};
Card.defaultProps = {
  textAlign: undefined,
  fluid: false,
  horizontal: false,
  actionButton: false,
  actionButtonIcon: 'ellipsis-v',
  actionButtonRender: undefined,
  onActionButtonClick: undefined,
  reversed: false
};
Card.Title = _CardTitle["default"];
Card.Content = _CardContent["default"];
Card.Image = _CardImage["default"];
Card.Footer = _CardFooter["default"];
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=Card.js.map