"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getRelativePoint = _interopRequireDefault(require("../utils/getRelativePoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getEntityCoordinates = function getEntityCoordinates(entity, portRefs, nodeRefs, canvas) {
  if (entity && entity.type === 'node' && nodeRefs[entity.entity.id]) {
    var nodeEl = nodeRefs[entity.entity.id];
    var bbox = nodeEl.getBoundingClientRect();
    return [entity.entity.coordinates[0] + bbox.width / 2, entity.entity.coordinates[1] + bbox.height / 2];
  }

  if (portRefs && portRefs[entity.entity.id]) {
    var portEl = portRefs[entity.entity.id];

    var _bbox = portEl.getBoundingClientRect();

    return (0, _getRelativePoint["default"])([_bbox.x + _bbox.width / 2, _bbox.y + _bbox.height / 2], [canvas.x, canvas.y]);
  }

  return undefined;
};

var _default = getEntityCoordinates;
exports["default"] = _default;
//# sourceMappingURL=getEntityCoordinates.js.map
