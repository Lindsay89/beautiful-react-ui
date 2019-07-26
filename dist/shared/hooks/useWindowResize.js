"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useWindowResize = function useWindowResize(resizeHandler) {
  (0, _react.useEffect)(function () {
    var debouncedHandler = (0, _debounce["default"])(resizeHandler, 150);
    window.addEventListener('resize', debouncedHandler);
    return function () {
      window.removeEventListener('resize', debouncedHandler);
    };
  });
};

var _default = useWindowResize;
exports["default"] = _default;
//# sourceMappingURL=useWindowResize.js.map