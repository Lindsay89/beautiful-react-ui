"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Types = require("../utils/Types");

var _DiagramNode = _interopRequireDefault(require("../DiagramNode/DiagramNode"));

var _updateNodeCoordinates = _interopRequireDefault(require("./updateNodeCoordinates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var NodesCanvas = function NodesCanvas(props) {
  var nodes = props.nodes,
      onPortRegister = props.onPortRegister,
      onNodeRegister = props.onNodeRegister,
      onDragNewSegment = props.onDragNewSegment,
      onSegmentFail = props.onSegmentFail,
      onSegmentConnect = props.onSegmentConnect,
      onChange = props.onChange;
  var onNodePositionChange = (0, _react.useCallback)(function (nodeId, newCoordinates) {
    if (onChange) {
      var nextNodes = (0, _updateNodeCoordinates["default"])(nodeId, newCoordinates, nodes);
      onChange(nextNodes);
    }
  }, [nodes, onChange]);
  return nodes && nodes.length > 0 && nodes.map(function (node) {
    return _react["default"].createElement(_DiagramNode["default"], _extends({}, node, {
      onPositionChange: onNodePositionChange,
      onPortRegister: onPortRegister,
      onDragNewSegment: onDragNewSegment,
      onSegmentFail: onSegmentFail,
      onSegmentConnect: onSegmentConnect,
      onMount: onNodeRegister,
      key: node.id
    }));
  });
};

NodesCanvas.propTypes = {
  nodes: _propTypes["default"].arrayOf(_Types.NodeType),
  onChange: _propTypes["default"].func,
  onNodeRegister: _propTypes["default"].func,
  onPortRegister: _propTypes["default"].func,
  onDragNewSegment: _propTypes["default"].func,
  onSegmentFail: _propTypes["default"].func,
  onSegmentConnect: _propTypes["default"].func
};
NodesCanvas.defaultProps = {
  nodes: [],
  onChange: undefined,
  onNodeRegister: undefined,
  onPortRegister: undefined,
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined
};

var _default = _react["default"].memo(NodesCanvas, _isEqual["default"]);

exports["default"] = _default;
//# sourceMappingURL=NodesCanvas.js.map
