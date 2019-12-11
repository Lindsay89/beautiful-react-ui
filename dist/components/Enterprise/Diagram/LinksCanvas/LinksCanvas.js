"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireDefault(require("../Link/Link"));

var _Segment = _interopRequireDefault(require("../Segment/Segment"));

var _Types = require("../utils/Types");

var _findInvolvedEntity = _interopRequireDefault(require("./findInvolvedEntity"));

var _removeLinkFromArray = _interopRequireDefault(require("./removeLinkFromArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LinksCanvas = function LinksCanvas(props) {
  var nodes = props.nodes,
      segment = props.segment,
      onChange = props.onChange,
      links = props.links;
  var removeFromLinksArray = (0, _react.useCallback)(function (link) {
    if (links.length > 0 && onChange) {
      var nextLinks = (0, _removeLinkFromArray["default"])(link, links);
      onChange(nextLinks);
    }
  }, [links, onChange]);
  return _react["default"].createElement("svg", {
    className: "bi bi-link-canvas-layer"
  }, links && links.length > 0 && links.map(function (link) {
    return _react["default"].createElement(_Link["default"], {
      link: link,
      input: (0, _findInvolvedEntity["default"])(nodes, link.input),
      output: (0, _findInvolvedEntity["default"])(nodes, link.output),
      onDelete: removeFromLinksArray,
      key: "".concat(link.input, "-").concat(link.output)
    });
  }), segment && _react["default"].createElement(_Segment["default"], segment));
};

LinksCanvas.propTypes = {
  nodes: _propTypes["default"].arrayOf(_Types.NodeType),
  links: _propTypes["default"].arrayOf(_Types.LinkType),
  segment: _propTypes["default"].exact({
    id: _propTypes["default"].string,
    from: _propTypes["default"].arrayOf(_propTypes["default"].number),
    to: _propTypes["default"].arrayOf(_propTypes["default"].number),
    alignment: _Types.PortAlignment
  }),
  onChange: _propTypes["default"].func
};
LinksCanvas.defaultProps = {
  nodes: [],
  links: [],
  segment: undefined,
  onChange: undefined
};

var _default = _react["default"].memo(LinksCanvas);

exports["default"] = _default;
//# sourceMappingURL=LinksCanvas.js.map
