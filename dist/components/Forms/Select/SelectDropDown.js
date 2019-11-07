"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("../Input"));

var _SelectOption = _interopRequireDefault(require("./SelectOption"));

var _SelectOptionGroup = _interopRequireDefault(require("./SelectOptionGroup"));

var _filterOptions = _interopRequireDefault(require("./utils/filterOptions"));

var _optionIsSelected = _interopRequireDefault(require("./utils/optionIsSelected"));

var _OptionsType = _interopRequireDefault(require("./utils/OptionsType"));

var _ValueType = _interopRequireDefault(require("./utils/ValueType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectDropDown = function SelectDropDown(props) {
  var options = props.options,
      value = props.value,
      filtrable = props.filtrable,
      placeholder = props.filterInputPlaceholder,
      filterNoResultLabel = props.filterNoResultLabel,
      hasOptionGroups = props.hasOptionGroups,
      onChange = props.onChange;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var filteredOptions = (0, _react.useMemo)(function () {
    return filtrable ? (0, _filterOptions["default"])(options, filter, hasOptionGroups) : options;
  }, [filter, options, hasOptionGroups]);
  var classList = (0, _classnames["default"])('bi-select-options-dropdown', {
    filtrable: filtrable,
    'grouped-opts': hasOptionGroups
  });
  return _react["default"].createElement("div", {
    className: classList
  }, filtrable && _react["default"].createElement(_Input["default"], {
    value: filter,
    onChange: function onChange(event, nextFilter) {
      return setFilter(nextFilter);
    },
    placeholder: placeholder
  }), filteredOptions.map(function (option) {
    return hasOptionGroups ? _react["default"].createElement(_SelectOptionGroup["default"], {
      group: option,
      onClick: onChange,
      value: value,
      key: option.name
    }) : _react["default"].createElement(_SelectOption["default"], {
      option: option,
      selected: (0, _optionIsSelected["default"])(option, value),
      onClick: onChange,
      key: option.value
    });
  }), filtrable && filteredOptions.length === 0 && _react["default"].createElement("p", {
    className: "no-results"
  }, filterNoResultLabel));
};

SelectDropDown.propTypes = {
  options: _OptionsType["default"].isRequired,
  hasOptionGroups: _propTypes["default"].bool,
  value: _ValueType["default"],
  onChange: _propTypes["default"].func,
  filtrable: _propTypes["default"].bool.isRequired,
  filterInputPlaceholder: _propTypes["default"].string.isRequired,
  filterNoResultLabel: _propTypes["default"].string.isRequired
};
SelectDropDown.defaultProps = {
  hasOptionGroups: false,
  value: undefined,
  onChange: undefined
};

var _default = _react["default"].memo(SelectDropDown);

exports["default"] = _default;
//# sourceMappingURL=SelectDropDown.js.map