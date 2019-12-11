"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DiagramCanvas = _interopRequireDefault(require("./DiagramCanvas/DiagramCanvas"));

var _NodesCanvas = _interopRequireDefault(require("./NodesCanvas/NodesCanvas"));

var _LinksCanvas = _interopRequireDefault(require("./LinksCanvas/LinksCanvas"));

var _Types = require("./utils/Types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Diagram = function Diagram(props) {
  var schema = props.schema,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ["schema", "onChange"]);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      segment = _useState2[0],
      setSegment = _useState2[1];

  var _useRef = (0, _react.useRef)({}),
      portRefs = _useRef.current;

  var _useRef2 = (0, _react.useRef)({}),
      nodeRefs = _useRef2.current;

  var onNodesChange = (0, _react.useCallback)(function (nextNodes) {
    onChange(_objectSpread({}, schema, {
      nodes: nextNodes
    }));
  }, [schema, onChange]);
  var onPortRegister = (0, _react.useCallback)(function (portId, portEl) {
    portRefs[portId] = portEl;
  }, [portRefs]);
  var onNodeRegister = (0, _react.useCallback)(function (nodeId, nodeEl) {
    nodeRefs[nodeId] = nodeEl;
  }, [nodeRefs]);
  var onDragNewSegment = (0, _react.useCallback)(function (portId, from, to, alignment) {
    setSegment({
      id: "segment-".concat(portId),
      from: from,
      to: to,
      alignment: alignment
    });
  }, []);
  var onSegmentFail = (0, _react.useCallback)(function () {
    setSegment(undefined);
  }, []);
  var onSegmentConnect = (0, _react.useCallback)(function (input, output) {
    var nextLinks = [].concat(_toConsumableArray(schema.links || []), [{
      input: input,
      output: output
    }]);
    onChange(_objectSpread({}, schema, {
      links: nextLinks
    }));
    setSegment(undefined);
  }, [schema, onChange]);
  var onLinkDelete = (0, _react.useCallback)(function (nextLinks) {
    onChange(_objectSpread({}, schema, {
      links: nextLinks
    }));
  }, [schema, onChange]);
  return _react["default"].createElement(_DiagramCanvas["default"], _extends({
    portRefs: portRefs,
    nodeRefs: nodeRefs
  }, rest), _react["default"].createElement(_NodesCanvas["default"], {
    nodes: schema.nodes,
    onChange: onNodesChange,
    onNodeRegister: onNodeRegister,
    onPortRegister: onPortRegister,
    onDragNewSegment: onDragNewSegment,
    onSegmentFail: onSegmentFail,
    onSegmentConnect: onSegmentConnect
  }), _react["default"].createElement(_LinksCanvas["default"], {
    nodes: schema.nodes,
    links: schema.links,
    segment: segment,
    onChange: onLinkDelete
  }));
};

Diagram.propTypes = {
  schema: _propTypes["default"].shape({
    nodes: _propTypes["default"].arrayOf(_Types.NodeType).isRequired,
    links: _propTypes["default"].arrayOf(_Types.LinkType)
  }),
  onChange: _propTypes["default"].func
};
Diagram.defaultProps = {
  schema: {
    nodes: [],
    links: []
  },
  onChange: undefined
};

var _default = _react["default"].memo(Diagram, _isEqual["default"]);

exports["default"] = _default;
//# sourceMappingURL=Diagram.js.map
