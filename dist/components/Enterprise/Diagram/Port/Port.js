"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../../shared");

var _useCanvas = _interopRequireDefault(require("../utils/useCanvas"));

var _getRelativePoint = _interopRequireDefault(require("../utils/getRelativePoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Port = function Port(props) {
  var id = props.id,
      canLink = props.canLink,
      alignment = props.alignment,
      onDragNewSegment = props.onDragNewSegment,
      onSegmentFail = props.onSegmentFail,
      onSegmentConnect = props.onSegmentConnect,
      onMount = props.onMount,
      rest = _objectWithoutProperties(props, ["id", "canLink", "alignment", "onDragNewSegment", "onSegmentFail", "onSegmentConnect", "onMount"]);

  var canvas = (0, _useCanvas["default"])();

  var _useDrag = (0, _shared.useDrag)(),
      ref = _useDrag.ref,
      onDrag = _useDrag.onDrag,
      onDragEnd = _useDrag.onDragEnd;

  onDrag(function (event, info) {
    if (onDragNewSegment) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      var from = (0, _getRelativePoint["default"])(info.start, [canvas.x, canvas.y]);
      var to = (0, _getRelativePoint["default"])([event.clientX, event.clientY], [canvas.x, canvas.y]);
      onDragNewSegment(id, from, to, alignment);
    }
  });
  onDragEnd(function (event) {
    var targetPort = event.target.getAttribute('data-port-id');

    if (targetPort && canLink(id, targetPort)) {
      onSegmentConnect && onSegmentConnect(id, targetPort);
    } else {
      onSegmentConnect && onSegmentFail(id);
    }
  });
  (0, _react.useEffect)(function () {
    if (ref.current && onMount) {
      onMount(id, ref.current);
    }
  }, [ref.current]);
  return _react["default"].createElement("div", _extends({
    className: "bi bi-diagram-port",
    "data-port-id": id,
    ref: ref
  }, rest));
};

Port.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].symbol]).isRequired,
  onDragNewSegment: _propTypes["default"].func,
  onSegmentFail: _propTypes["default"].func,
  onSegmentConnect: _propTypes["default"].func,
  canLink: _propTypes["default"].func,
  onMount: _propTypes["default"].func,
  alignment: _propTypes["default"].oneOf(['right', 'left', 'top', 'bottom'])
};
Port.defaultProps = {
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined,
  canLink: function canLink() {
    return true;
  },
  onMount: undefined,
  alignment: undefined
};

var _default = _react["default"].memo(Port);

exports["default"] = _default;
//# sourceMappingURL=Port.js.map
