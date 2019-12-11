"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DiagramContext = _interopRequireDefault(require("../utils/DiagramContext"));

var _shared = require("../../../../shared");

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

var DiagramCanvas = function DiagramCanvas(props) {
  var children = props.children,
      portRefs = props.portRefs,
      nodeRefs = props.nodeRefs,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "portRefs", "nodeRefs", "className"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      bbox = _useState2[0],
      setBoundingBox = _useState2[1];

  var canvasRef = (0, _react.useRef)();
  var classList = (0, _classnames["default"])('bi bi-diagram', className);
  var calculateBBox = (0, _react.useCallback)(function (el) {
    if (el) {
      var nextBBox = el.getBoundingClientRect();

      if (!(0, _isEqual["default"])(nextBBox, bbox)) {
        setBoundingBox(nextBBox);
      }
    }
  }, [bbox, setBoundingBox]);
  (0, _react.useEffect)(function () {
    return calculateBBox(canvasRef.current);
  }, [canvasRef.current]);
  (0, _shared.useWindowScroll)(function () {
    return calculateBBox(canvasRef.current);
  });
  return _react["default"].createElement("div", _extends({
    className: classList,
    ref: canvasRef
  }, rest), _react["default"].createElement(_DiagramContext["default"].Provider, {
    value: {
      canvas: bbox,
      ports: portRefs,
      nodes: nodeRefs
    }
  }, children));
};

DiagramCanvas.propTypes = {
  portRefs: _propTypes["default"].shape({}),
  nodeRefs: _propTypes["default"].shape({}),
  className: _propTypes["default"].string
};
DiagramCanvas.defaultProps = {
  portRefs: {},
  nodeRefs: {},
  className: ''
};

var _default = _react["default"].memo(DiagramCanvas);

exports["default"] = _default;
//# sourceMappingURL=DiagramCanvas.js.map
