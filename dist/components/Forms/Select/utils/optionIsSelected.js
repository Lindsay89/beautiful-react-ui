"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var optionIsSelected = function optionIsSelected(option, values) {
  if (Array.isArray(values)) {
    return values.includes(option.value);
  }

  return option.value === values;
};

var _default = optionIsSelected;
exports["default"] = _default;
//# sourceMappingURL=optionIsSelected.js.map
