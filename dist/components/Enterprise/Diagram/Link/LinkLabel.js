"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinkLabel = function LinkLabel(_ref) {
  var label = _ref.label,
      position = _ref.position;
  return _react["default"].createElement("foreignObject", {
    x: position[0],
    y: position[1]
  }, _react["default"].createElement("div", {
    className: "bi-diagram-link-label"
  }, label));
};

LinkLabel.propTypes = {
  label: _propTypes["default"].string.isRequired,
  position: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired
};

var _default = _react["default"].memo(LinkLabel);

exports["default"] = _default;
//# sourceMappingURL=LinkLabel.js.map
