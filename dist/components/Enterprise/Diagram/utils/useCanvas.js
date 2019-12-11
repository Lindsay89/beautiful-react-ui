"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _DiagramContext = _interopRequireDefault(require("./DiagramContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useCanvas = function useCanvas() {
  var _useContext = (0, _react.useContext)(_DiagramContext["default"]),
      canvas = _useContext.canvas;

  return canvas;
};

var _default = useCanvas;
exports["default"] = _default;
//# sourceMappingURL=useCanvas.js.map
