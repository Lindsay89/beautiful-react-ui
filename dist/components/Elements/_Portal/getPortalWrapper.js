"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getPortalWrapper = function getPortalWrapper(id) {
  var element = document.getElementById(id);

  if (!element) {
    element = document.createElement('div');
    element.id = id;
    document.body.appendChild(element);
  }

  return element;
};

var _default = getPortalWrapper;
exports["default"] = _default;
//# sourceMappingURL=getPortalWrapper.js.map