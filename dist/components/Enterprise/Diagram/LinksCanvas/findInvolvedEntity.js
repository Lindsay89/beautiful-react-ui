"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var findInvolvedEntity = function findInvolvedEntity(nodes, entityId) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'node';
  if (!entityId || !nodes || nodes.length === 0) return undefined;
  var result;
  var index = 0;

  while (index < nodes.length && !result) {
    var node = nodes[index];

    if (node.id === entityId) {
      result = {
        type: type,
        entity: _objectSpread({}, node)
      };
    } else {
      result = findInvolvedEntity(node.inputs, entityId, 'port') || findInvolvedEntity(node.outputs, entityId, 'port');
    }

    index += 1;
  }

  return result;
};

var _default = findInvolvedEntity;
exports["default"] = _default;
//# sourceMappingURL=findInvolvedEntity.js.map
