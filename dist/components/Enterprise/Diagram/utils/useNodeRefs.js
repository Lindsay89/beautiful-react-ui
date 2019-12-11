"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _DiagramContext = _interopRequireDefault(require("./DiagramContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePortRefs = function usePortRefs() {
  var _useContext = (0, _react.useContext)(_DiagramContext["default"]),
      nodes = _useContext.nodes;

  return nodes;
};

var _default = usePortRefs;
exports["default"] = _default;
//# sourceMappingURL=useNodeRefs.js.map
