"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CustomDiagramRender = function CustomDiagramRender(props) {
  var renderer = props.renderer,
      rest = _objectWithoutProperties(props, ["renderer"]);

  return renderer(rest);
};

CustomDiagramRender.propTypes = {
  renderer: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].oneOfType([_propTypes["default"].string]).isRequired,
  content: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].node]),
  inputs: _propTypes["default"].arrayOf(_propTypes["default"].node),
  outputs: _propTypes["default"].arrayOf(_propTypes["default"].node)
};

var _default = _react["default"].memo(CustomDiagramRender);

exports["default"] = _default;
//# sourceMappingURL=CustomRender.js.map
