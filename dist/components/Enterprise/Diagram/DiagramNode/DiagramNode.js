"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CustomRenderer = _interopRequireDefault(require("./CustomRenderer"));

var _getDiagramNodeStyle = _interopRequireDefault(require("./getDiagramNodeStyle"));

var _useContextRegistration = require("../utils/useContextRegistration");

var _Types = require("../utils/Types");

var _portGenerator = _interopRequireDefault(require("./portGenerator"));

var _shared = require("../../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DiagramNode = function DiagramNode(props) {
  var id = props.id,
      content = props.content,
      coordinates = props.coordinates,
      type = props.type,
      inputs = props.inputs,
      outputs = props.outputs,
      onPositionChange = props.onPositionChange,
      onPortRegister = props.onPortRegister,
      onDragNewSegment = props.onDragNewSegment,
      onMount = props.onMount,
      onSegmentFail = props.onSegmentFail,
      onSegmentConnect = props.onSegmentConnect,
      renderer = props.renderer,
      className = props.className;
  var registerPort = (0, _useContextRegistration.usePortRegistration)(inputs, outputs, onPortRegister);

  var _useDrag = (0, _shared.useDrag)({
    throttleBy: 14
  }),
      ref = _useDrag.ref,
      onDragStart = _useDrag.onDragStart,
      onDrag = _useDrag.onDrag;

  var dragStartPoint = (0, _react.useRef)(coordinates);
  onDragStart(function () {
    dragStartPoint.current = coordinates;
  });
  onDrag(function (event, info) {
    if (onPositionChange) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      var nextCoords = [dragStartPoint.current[0] - info.offset[0], dragStartPoint.current[1] - info.offset[1]];
      onPositionChange(id, nextCoords);
    }
  });
  (0, _useContextRegistration.useNodeRegistration)(ref, onMount, id);
  var classList = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('bi bi-diagram-node', _defineProperty({}, "bi-diagram-node-".concat(type), !!type && !renderer), className);
  }, [type, className]);
  var InputPorts = inputs.map((0, _portGenerator["default"])(registerPort, onDragNewSegment, onSegmentFail, onSegmentConnect));
  var OutputPorts = outputs.map((0, _portGenerator["default"])(registerPort, onDragNewSegment, onSegmentFail, onSegmentConnect));
  var customRendererProps = {
    renderer: renderer,
    id: id,
    content: content,
    type: type,
    inputs: InputPorts,
    outputs: OutputPorts,
    className: className
  };
  return _react["default"].createElement("div", {
    className: classList,
    ref: ref,
    style: (0, _getDiagramNodeStyle["default"])(coordinates)
  }, renderer && typeof renderer === 'function' && _react["default"].createElement(_CustomRenderer["default"], customRendererProps), !renderer && _react["default"].createElement(_react["default"].Fragment, null, content, _react["default"].createElement("div", {
    className: "bi-port-wrapper"
  }, _react["default"].createElement("div", {
    className: "bi-input-ports"
  }, InputPorts), _react["default"].createElement("div", {
    className: "bi-output-ports"
  }, OutputPorts))));
};

DiagramNode.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string]).isRequired,
  coordinates: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  content: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].node]),
  inputs: _propTypes["default"].arrayOf(_Types.PortType),
  outputs: _propTypes["default"].arrayOf(_Types.PortType),
  type: _propTypes["default"].oneOf(['default']),
  renderer: _propTypes["default"].func,
  onPositionChange: _propTypes["default"].func,
  onMount: _propTypes["default"].func,
  onPortRegister: _propTypes["default"].func,
  onDragNewSegment: _propTypes["default"].func,
  onSegmentFail: _propTypes["default"].func,
  onSegmentConnect: _propTypes["default"].func,
  className: _propTypes["default"].string
};
DiagramNode.defaultProps = {
  type: 'default',
  content: '',
  inputs: [],
  outputs: [],
  onPositionChange: undefined,
  renderer: undefined,
  onMount: undefined,
  onPortRegister: undefined,
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined,
  className: ''
};

var _default = _react["default"].memo(DiagramNode);

exports["default"] = _default;
//# sourceMappingURL=DiagramNode.js.map
