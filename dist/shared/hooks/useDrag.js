"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _throttle = _interopRequireDefault(require("lodash/fp/throttle"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  ref: undefined,
  throttleBy: 0
};

var getEventCoordinates = function getEventCoordinates(event) {
  return [event.clientX, event.clientY];
};

var createCallbackRef = function createCallbackRef(ref) {
  return (0, _react.useCallback)(function (callback) {
    if (!ref.current || callback !== ref.current) {
      ref.current = callback;
    }
  }, [ref.current]);
};

var useDrag = function useDrag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  var targetRef = options.ref || (0, _react.useRef)();
  var dragStartHandlerRef = (0, _react.useRef)();
  var dragHandlerRef = (0, _react.useRef)();
  var dragEndHandlerRef = (0, _react.useRef)();

  var _useRef = (0, _react.useRef)({
    isDragging: false,
    start: null,
    end: null,
    offset: null
  }),
      info = _useRef.current;

  var throttle = (0, _throttle["default"])(options.throttleBy);
  var onDragStart = (0, _react.useCallback)(function (event) {
    if (!info.isDragging && targetRef.current.contains(event.target)) {
      info.isDragging = true;
      info.end = null;
      info.offset = null;
      info.start = getEventCoordinates(event);

      if (dragStartHandlerRef.current) {
        dragStartHandlerRef.current(event, _objectSpread({}, info));
      }
    }
  }, [targetRef.current, info, dragStartHandlerRef.current]);
  var onDrag = (0, _react.useCallback)(throttle(function (event) {
    if (info.isDragging) {
      info.offset = [info.start[0] - event.clientX, info.start[1] - event.clientY];

      if (dragHandlerRef.current) {
        dragHandlerRef.current(event, _objectSpread({}, info));
      }
    }
  }), [targetRef.current, info, dragHandlerRef.current]);
  var onDragEnd = (0, _react.useCallback)(function (event) {
    if (info.isDragging) {
      info.isDragging = false;
      info.end = getEventCoordinates(event);

      if (dragEndHandlerRef.current) {
        dragEndHandlerRef.current(event, _objectSpread({}, info));
      }
    }
  }, [targetRef.current, info, dragEndHandlerRef.current]);
  (0, _react.useEffect)(function () {
    var _onDragStart = function _onDragStart(e) {
      return onDragStart(e);
    };

    var _onDrag = function _onDrag(e) {
      return onDrag(e);
    };

    var _onDragEnd = function _onDragEnd(e) {
      return onDragEnd(e);
    };

    if (targetRef.current) {
      targetRef.current.addEventListener('mousedown', _onDragStart);
      document.addEventListener('mousemove', _onDrag);
      document.addEventListener('mouseup', _onDragEnd);
    }

    return function () {
      if (targetRef.current) {
        targetRef.current.removeEventListener('mousedown', _onDragStart);
        document.removeEventListener('mousemove', _onDrag);
        document.removeEventListener('mouseup', _onDragEnd);
      }
    };
  }, [targetRef.current]);
  return {
    ref: targetRef,
    onDragStart: createCallbackRef(dragStartHandlerRef),
    onDrag: createCallbackRef(dragHandlerRef),
    onDragEnd: createCallbackRef(dragEndHandlerRef)
  };
};

var _default = useDrag;
exports["default"] = _default;
//# sourceMappingURL=useDrag.js.map
