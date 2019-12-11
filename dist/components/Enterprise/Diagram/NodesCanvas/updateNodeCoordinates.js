"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var updateNodeCoordinates = function updateNodeCoordinates(nodeId, coordinates, nodes) {
  var index = (0, _findIndex["default"])(nodes, ['id', nodeId]);

  if (index > -1) {
    var nextNodes = (0, _cloneDeep["default"])(nodes);
    nextNodes[index].coordinates = coordinates;
    return nextNodes;
  }

  return nodes;
};

var _default = updateNodeCoordinates;
exports["default"] = _default;
//# sourceMappingURL=updateNodeCoordinates.js.map
