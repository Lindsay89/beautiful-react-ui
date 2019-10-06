"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var makeCallback = function makeCallback(callbackProp, overrideValue) {
  return function (event) {
    if (typeof callbackProp === 'function') {
      event.persist();
      var nativeEvent = event.nativeEvent,
          currentTarget = event.currentTarget;
      var value = currentTarget.value;
      return callbackProp(nativeEvent, overrideValue === undefined ? value : overrideValue);
    }

    return undefined;
  };
};

var _default = makeCallback;
exports["default"] = _default;
//# sourceMappingURL=makeCallback.js.map