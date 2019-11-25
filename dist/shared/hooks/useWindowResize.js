"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useWindowResize = function useWindowResize(resizeHandler) {
  var debouncedHandler = (0, _react.useCallback)((0, _debounce["default"])(resizeHandler, 150), [resizeHandler]);
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', debouncedHandler);
    return function () {
      window.removeEventListener('resize', debouncedHandler);
    };
  }, [resizeHandler]);
};

var _default = useWindowResize;
exports["default"] = _default;
//# sourceMappingURL=useWindowResize.js.map
