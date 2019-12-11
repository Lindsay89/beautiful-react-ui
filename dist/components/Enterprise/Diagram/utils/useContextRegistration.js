"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNodeRegistration = exports.usePortRegistration = void 0;

var _react = require("react");

var _DiagramContext = _interopRequireDefault(require("./DiagramContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePortRegistration = function usePortRegistration(inputs, outputs, onPortRegister) {
  var context = (0, _react.useContext)(_DiagramContext["default"]);
  return (0, _react.useCallback)(function (portId, portElement) {
    var canvas = context.canvas,
        ports = context.ports;

    if (canvas && (inputs || outputs)) {
      if (ports && !ports[portId]) {
        onPortRegister(portId, portElement);
      }
    }
  }, [context, inputs, outputs]);
};

exports.usePortRegistration = usePortRegistration;

var useNodeRegistration = function useNodeRegistration(ref, onNodeRegister, id) {
  var _useContext = (0, _react.useContext)(_DiagramContext["default"]),
      canvas = _useContext.canvas,
      nodes = _useContext.nodes;

  (0, _react.useEffect)(function () {
    if (onNodeRegister && ref.current && canvas && nodes && !nodes[id]) {
      onNodeRegister(id, ref.current);
    }
  }, [ref.current, canvas, nodes, onNodeRegister]);
};

exports.useNodeRegistration = useNodeRegistration;
//# sourceMappingURL=useContextRegistration.js.map
