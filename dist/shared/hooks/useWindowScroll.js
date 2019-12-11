"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useWindowScroll = function useWindowScroll(scrollHandler) {
  var debouncedHandler = (0, _react.useCallback)((0, _debounce["default"])(scrollHandler, 150), [scrollHandler]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', debouncedHandler);
    return function () {
      window.removeEventListener('scroll', debouncedHandler);
    };
  }, [scrollHandler]);
};

var _default = useWindowScroll;
exports["default"] = _default;
//# sourceMappingURL=useWindowScroll.js.map
