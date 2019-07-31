"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = require("react-dom");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getPortalWrapper = _interopRequireDefault(require("./getPortalWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Portal = function Portal(_ref) {
  var id = _ref.id,
      children = _ref.children;
  var wrapper = (0, _getPortalWrapper["default"])(id);
  (0, _react.useEffect)(function () {
    return function () {
      if (wrapper && wrapper.innerHTML === '') {
        wrapper.remove();
      }
    };
  }, []);
  return (0, _reactDom.createPortal)(children, wrapper);
};

Portal.propTypes = {
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node
};
var _default = Portal;
exports["default"] = _default;
//# sourceMappingURL=Portal.js.map