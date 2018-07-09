"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var makeCallback = function makeCallback(callbackProp, override) {
  return function (event) {
    var nativeEvent = event.nativeEvent,
        currentTarget = event.currentTarget;
    var value = currentTarget.value;

    if (typeof callbackProp === 'function') {
      return callbackProp(nativeEvent, override === undefined ? value : override);
    }
  };
};

var _default = makeCallback;
exports["default"] = _default;
//# sourceMappingURL=makeCallback.js.map