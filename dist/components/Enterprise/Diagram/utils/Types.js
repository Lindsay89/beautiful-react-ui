"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = exports.PortType = exports.PortAlignment = exports.LinkType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinkType = _propTypes["default"].shape({
  input: _propTypes["default"].string.isRequired,
  output: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].node,
  readonly: _propTypes["default"].bool
});

exports.LinkType = LinkType;

var PortAlignment = _propTypes["default"].oneOf(['right', 'left', 'top', 'bottom']);

exports.PortAlignment = PortAlignment;

var PortType = _propTypes["default"].shape({
  id: _propTypes["default"].string.isRequired,
  canLink: _propTypes["default"].func,
  alignment: PortAlignment
});

exports.PortType = PortType;

var NodeType = _propTypes["default"].shape({
  id: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].node]),
  coordinates: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  inputs: _propTypes["default"].arrayOf(PortType),
  outputs: _propTypes["default"].arrayOf(PortType),
  type: _propTypes["default"].oneOf(['default']),
  renderer: _propTypes["default"].func,
  className: _propTypes["default"].string
});

exports.NodeType = NodeType;
//# sourceMappingURL=Types.js.map
