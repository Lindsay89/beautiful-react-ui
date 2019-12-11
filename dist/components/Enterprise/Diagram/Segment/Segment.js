"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../../shared");

var _Types = require("../utils/Types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Segment = function Segment(props) {
  var from = props.from,
      to = props.to,
      alignment = props.alignment;
  var pathOptions = {
    type: 'bezier',
    inputAlignment: alignment
  };
  var path = (0, _react.useMemo)(function () {
    return (0, _shared.makeSvgPath)(from, to, pathOptions);
  }, [from, to, alignment]);
  return _react["default"].createElement("g", {
    className: "bi-diagram-segment"
  }, _react["default"].createElement("path", {
    d: path
  }), _react["default"].createElement("circle", {
    r: "6.5",
    cx: to[0],
    cy: to[1]
  }));
};

Segment.propTypes = {
  from: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  to: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  alignment: _Types.PortAlignment
};
Segment.defaultProps = {
  alignment: undefined
};

var _default = _react["default"].memo(Segment);

exports["default"] = _default;
//# sourceMappingURL=Segment.js.map
