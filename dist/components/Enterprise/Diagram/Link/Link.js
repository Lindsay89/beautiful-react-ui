"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Types = require("../utils/Types");

var _usePortRefs = _interopRequireDefault(require("../utils/usePortRefs"));

var _useCanvas = _interopRequireDefault(require("../utils/useCanvas"));

var _getEntityCoordinates = _interopRequireDefault(require("./getEntityCoordinates"));

var _shared = require("../../../../shared");

var _useNodeRefs = _interopRequireDefault(require("../utils/useNodeRefs"));

var _LinkLabel = _interopRequireDefault(require("./LinkLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useContextRefs = function useContextRefs() {
  var canvas = (0, _useCanvas["default"])();
  var portRefs = (0, _usePortRefs["default"])();
  var nodeRefs = (0, _useNodeRefs["default"])();
  return {
    canvas: canvas,
    nodeRefs: nodeRefs,
    portRefs: portRefs
  };
};

var Link = function Link(props) {
  var input = props.input,
      output = props.output,
      link = props.link,
      onDelete = props.onDelete;
  var pathRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      labelPosition = _useState2[0],
      setLabelPosition = _useState2[1];

  var _useContextRefs = useContextRefs(),
      canvas = _useContextRefs.canvas,
      portRefs = _useContextRefs.portRefs,
      nodeRefs = _useContextRefs.nodeRefs;

  var classList = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('bi-diagram-link', {
      'readonly-link': link.readonly
    });
  }, [link.readonly]);
  var inputPoint = (0, _react.useMemo)(function () {
    return (0, _getEntityCoordinates["default"])(input, portRefs, nodeRefs, canvas);
  }, [input, portRefs, nodeRefs, canvas]);
  var outputPoint = (0, _react.useMemo)(function () {
    return (0, _getEntityCoordinates["default"])(output, portRefs, nodeRefs, canvas);
  }, [output, portRefs, nodeRefs, canvas]);
  var pathOptions = {
    type: input.type === 'port' || output.type === 'port' ? 'bezier' : 'curve',
    inputAlignment: input.entity.alignment || null,
    outputAlignment: output.entity.alignment || null
  };
  var path = (0, _react.useMemo)(function () {
    return (0, _shared.makeSvgPath)(inputPoint, outputPoint, pathOptions);
  }, [inputPoint, outputPoint]);
  (0, _react.useEffect)(function () {
    if (link.label && inputPoint && outputPoint && pathRef.current) {
      var pos = (0, _shared.getPathMidpoint)(pathRef.current);
      setLabelPosition(pos);
    }
  }, [pathRef.current, link.label, inputPoint, outputPoint]);
  var onDoubleClick = (0, _react.useCallback)(function () {
    if (onDelete && !link.readonly) {
      onDelete(link);
    }
  }, [link, onDelete]);
  return _react["default"].createElement("g", {
    className: classList
  }, _react["default"].createElement("path", {
    d: path,
    className: "bi-link-ghost",
    onDoubleClick: onDoubleClick
  }), _react["default"].createElement("path", {
    d: path,
    ref: pathRef,
    className: "bi-link-path",
    onDoubleClick: onDoubleClick
  }), link.label && labelPosition && _react["default"].createElement(_LinkLabel["default"], {
    position: labelPosition,
    label: link.label
  }));
};

var InvolvedEntity = _propTypes["default"].exact({
  type: _propTypes["default"].oneOf(['node', 'port']),
  entity: _propTypes["default"].oneOfType([_Types.PortType, _Types.NodeType])
});

Link.propTypes = {
  link: _Types.LinkType.isRequired,
  input: InvolvedEntity.isRequired,
  output: InvolvedEntity.isRequired,
  onDelete: _propTypes["default"].func
};
Link.defaultProps = {
  onDelete: undefined
};

var _default = _react["default"].memo(Link);

exports["default"] = _default;
//# sourceMappingURL=Link.js.map
