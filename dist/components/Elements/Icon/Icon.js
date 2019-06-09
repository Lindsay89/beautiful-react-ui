"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas, _freeBrandsSvgIcons.fab);

var Icon = function Icon(_ref) {
  var name = _ref.name;
  return _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: name,
    className: "bi bi-icon"
  });
};

Icon.propTypes = {
  name: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]).isRequired
};

var _default = _react["default"].memo(Icon);

exports["default"] = _default;
//# sourceMappingURL=Icon.js.map