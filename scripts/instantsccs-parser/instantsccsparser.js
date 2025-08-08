/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  main: () => (/* binding */ main)
});

;// external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// ./node_modules/libram/dist/since.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/**
 * Provides functions for checking KoLmafia's version and revision.
 *
 * @packageDocumentation
 */

/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */
var KolmafiaVersionError = /*#__PURE__*/function (_Error) {
  function KolmafiaVersionError(message) {
    var _this;
    _classCallCheck(this, KolmafiaVersionError);
    _this = _callSuper(this, KolmafiaVersionError, [message]);
    // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.
    Object.setPrototypeOf(_this, KolmafiaVersionError.prototype);
    return _this;
  }
  _inherits(KolmafiaVersionError, _Error);
  return _createClass(KolmafiaVersionError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
// Manually set class name, so that the stack trace shows proper name in Rhino
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 *
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */
function getScriptName() {
  var _require$main;
  // In Rhino, the current script name is available in require.main.id
  var scriptName = (_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 *
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 * @example
 * ```ts
 * // Throws if KoLmafia revision is less than r20500
 * sinceKolmafiaRevision(20500);
 * ```
 */
function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  }
  // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()
  var currentRevision = (0,external_kolmafia_namespaceObject.getRevision)();
  if (currentRevision > 0 && currentRevision < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0,external_kolmafia_namespaceObject.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
/**
 * If KoLmafia's version is less than `majorVersion.minorVersion`, throws an
 * exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since X.Y;` statement in ASH.
 *
 * @param majorVersion Major version number
 * @param minorVersion Minor version number
 * @deprecated Point versions are no longer released by KoLmafia
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's major version is less than `majorVersion`, or if the major
 *    versions are equal but the minor version is less than `minorVersion`
 * @throws {TypeError}
 *    If either `majorVersion` or `minorVersion` are not integers
 * @example
 * ```ts
 * // Throws if KoLmafia version is less than 20.7
 * sinceKolmafiaVersion(20, 7);
 * ```
 */
function sinceKolmafiaVersion(majorVersion, minorVersion) {
  if (getRevision() >= 25720) {
    return;
  }
  if (!Number.isInteger(majorVersion)) {
    throw new TypeError("Invalid major version number ".concat(majorVersion, " (must be an integer)"));
  }
  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number ".concat(minorVersion, " (must be an integer)"));
  }
  if (majorVersion > 21 || majorVersion === 20 && minorVersion > 9) {
    throw new Error("There were no versions released after 21.09. This command will always fail");
  }
  var versionStr = getVersion();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);
  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"".concat(versionStr, "\". You may need to update the script."));
  }
  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]);
  // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()
  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires version ").concat(majorVersion, ".").concat(minorVersion, " of kolmafia or higher (current: ").concat(currentMajorVersion, ".").concat(currentMinorVersion, "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
;// ./node_modules/libram/dist/utils.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Type guard against null value
 *
 * @param value Value that could be null
 * @returns Confirmation that the value is not null
 */
function notNull(value) {
  return value !== null;
}
/**
 * Type guard against nullish value
 *
 * @param value Value that could be null or undefined
 * @returns Confirmation that the value is not null nor undefined
 */
function notNullish(value) {
  return notNull(value) && value !== undefined;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */
function chunk(array, chunkSize) {
  var result = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
      item = _ref3[0],
      quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
      item = _ref5[0],
      quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */
function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */
function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */
function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 *
 * @param map Map to invert
 * @returns Inverted map
 */
function invertMap(map) {
  var returnValue = new Map();
  var _iterator = _createForOfIteratorHelper(map),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");
  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
        item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value,
        item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Let Typescript see that you're working with tuples!
 *
 * @param args A spread array to interpret as a tuple
 * @returns The given arg, its type now interpreted as a tuple
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T, S> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T, S> that represents either a value of type T or a function returning a value of type T.
 * @param args The arguments to pass to the delay function
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */
function makeByXFunction(source) {
  return function (options, alternateSource) {
    var _options$val;
    var val = undelay(alternateSource !== null && alternateSource !== void 0 ? alternateSource : source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 * @deprecated KoLMafia now supports the `flat` and `flatMap` methods
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];
  var _iterator3 = _createForOfIteratorHelper(arr),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      if (Array.isArray(item) && depth > 0) {
        var child = flat(item, depth - 1);
        flatArray = flatArray.concat(child);
      } else {
        flatArray.push(item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}
/**
 * @param array Array to select from
 * @returns Random item from array
 */
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * Title cases a single word
 *
 * @param word Word to transform
 * @returns Word in title case
 */
var tc = word => word.charAt(0).toUpperCase() + word.slice(1);
;// ./node_modules/libram/dist/template-string.js


var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    (0,external_kolmafia_namespaceObject.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0,external_kolmafia_namespaceObject.print)(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = name => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
var $bounties = createPluralConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
var $class = createSingleConstant(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
var $classes = createPluralConstant(external_kolmafia_namespaceObject.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
var $coinmasters = createPluralConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var $effect = createSingleConstant(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
var $effects = createPluralConstant(external_kolmafia_namespaceObject.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
var $elements = createPluralConstant(external_kolmafia_namespaceObject.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var $familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
var $familiars = createPluralConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var $item = createSingleConstant(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var $items = createPluralConstant(external_kolmafia_namespaceObject.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
var $locations = createPluralConstant(external_kolmafia_namespaceObject.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */
var $modifier = createSingleConstant(external_kolmafia_namespaceObject.Modifier, external_kolmafia_namespaceObject.toModifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */
var $modifiers = createPluralConstant(external_kolmafia_namespaceObject.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
var $path = createSingleConstant(external_kolmafia_namespaceObject.Path, external_kolmafia_namespaceObject.toPath);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
var $phyla = createPluralConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
var $servants = createPluralConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var $skill = createSingleConstant(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
var $skills = createPluralConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
var $slots = createPluralConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
var $stats = createPluralConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
;// ./src/main.ts
var _templateObject, _templateObject2;
function main_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = main_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function main_slicedToArray(r, e) { return main_arrayWithHoles(r) || main_iterableToArrayLimit(r, e) || main_unsupportedIterableToArray(r, e) || main_nonIterableRest(); }
function main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function main_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return main_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? main_arrayLikeToArray(r, a) : void 0; } }
function main_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function main_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function main_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


function main() {
  sinceKolmafiaRevision(27822);
  var logs = (0,external_kolmafia_namespaceObject.sessionLogs)(1);
  if (logs.length === 0) {
    throw "No session logs found.";
  }
  var logText = logs[0];
  var lines = logText.split(/[\r\n]+/);
  var relevantTests = ["Booze Drop", "Spell Damage", "Weapon Damage", "Familiar Weight", "Combat Rate", "Hot Resistance", "Moxie", "Muscle", "Mysticality", "HP"];
  var results = {};
  for (var i = 0; i < lines.length; i++) {
    var totalMetricMatch = lines[i].match(/^> Total (.+?): ([-\d.]+)$/);
    if (totalMetricMatch) {
      var testName = totalMetricMatch[1];
      var finalMetric = parseFloat(totalMetricMatch[2]);
      if (relevantTests.includes(testName)) {
        extractTest(lines, i, testName, finalMetric, /^> .+? Test takes (\d+) adventure(?:s)? \(predicted: ([-\d.]+)\)\.$/, results);
      }
    }
    var hpMatch = lines[i].match(/^> Buffed Mus: \d+; HP: (\d+);$/);
    if (hpMatch) {
      var _finalMetric = parseFloat(hpMatch[1]);
      extractTest(lines, i, "HP", _finalMetric, /^> HP Test takes (\d+) adventure(?:s)? \(predicted: ([-\d.]+)\)\.$/, results);
    }
  }
  var freeEffects = $effects(_templateObject || (_templateObject = _taggedTemplateLiteral(["In the Depths, The Sonata of Sneakiness, Empathy, Leash of Linguini, Smooth Movements, Silent Running, Nearly All-Natural, Apriling Band Celebration Bop, Bow-Legged Swagger, Jackasses' Symphony of Destruction, Rage of the Reindeer, Amazing, Antiantifrozen, Elemental Saucesphere, Misty Form, Feeling Peaceful, Astral Shell, Feeling Excited, The Moxious Madrigal, Penne Fedora, Blubbered Up, Disco State of Mind, Mariachi Mood, Gummiheart, Bastille Budgeteer, Disco over Matter, Strength of the Tortoise, Macaroni Coating, Power Ballad of the Arrowsmith, Disdain of the War Snapper, Seal Clubbing Frenzy, Patience of the Tortoise, The Magical Mojomuscular Melody, Disdain of She-Who-Was, Pasta Oneness, Saucemastery, Scowl of the Auk, Ready to Survive, Tenacity of the Snapper, Blessing of the Bird"])));
  var cuts = suggestCuts(results);
  var _loop = function _loop() {
    var test = _relevantTests[_i];
    var cut = cuts[test];
    if (cut !== undefined && cut > 0) {
      (0,external_kolmafia_namespaceObject.print)("You can probably cut ".concat(cut.toFixed(1), " ").concat(test, "."));

      // Only run for effect-based stats like Familiar Weight or Combat Rate
      var effectContribLines = lines.filter(line => line.includes("[".concat(test, "]")));
      suggestEffectCuts(effectContribLines, test, cut, freeEffects);
    }
  };
  for (var _i = 0, _relevantTests = relevantTests; _i < _relevantTests.length; _i++) {
    _loop();
  }
}
function suggestCuts(results) {
  var savingsRate = {
    HP: 30,
    Muscle: 30,
    Mysticality: 30,
    Moxie: 30,
    "Familiar Weight": 5,
    "Weapon Damage": 50,
    "Spell Damage": 50,
    "Booze Drop": 15,
    "Item Drop": 30,
    "Hot Resistance": 1,
    "Combat Rate": 5 // treated separately
  };
  var output = {};
  for (var _i2 = 0, _Object$entries = Object.entries(results); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = main_slicedToArray(_Object$entries[_i2], 2),
      test = _Object$entries$_i[0],
      result = _Object$entries$_i[1];
    var predicted = result.predicted;
    if (predicted >= 0) {
      output[test] = 0;
      continue;
    }
    var rate = savingsRate[test];
    if (!rate) {
      output[test] = NaN;
      continue;
    }
    if (test === "Combat Rate") {
      // 5% saves 3 turns ⇒ 1 turn saved per 5/3% noncombat
      output[test] = -predicted * 5 / 3;
    } else {
      output[test] = -predicted * rate;
    }
  }
  return output;
}
function extractTest(lines, i, testName, finalMetric, pattern, results) {
  for (var j = 1; j <= 5 && i + j < lines.length; j++) {
    var match = lines[i + j].match(pattern);
    if (match) {
      results[testName] = {
        finalMetric,
        turns: parseInt(match[1]),
        predicted: parseFloat(match[2])
      };
      return true;
    }
  }
  return false;
}
function parseEffectContributions(lines, statName) {
  var contributions = {};
  var linePattern = new RegExp("^> \\[".concat(statName, "\\] (.+?) \\(([-\\d.]+)\\)$"));
  var _iterator = main_createForOfIteratorHelper(lines),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;
      var match = line.match(linePattern);
      if (!match) continue;
      var sourceName = match[1].trim();
      var value = parseFloat(match[2]);
      contributions[sourceName] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return contributions;
}
function suggestEffectCuts(lines, statName, cutTarget, freeEffects) {
  var contributions = parseEffectContributions(lines, statName);
  var cuttable = [];
  for (var _i3 = 0, _Object$entries2 = Object.entries(contributions); _i3 < _Object$entries2.length; _i3++) {
    var _Object$entries2$_i = main_slicedToArray(_Object$entries2[_i3], 2),
      name = _Object$entries2$_i[0],
      value = _Object$entries2$_i[1];
    var effect = (0,external_kolmafia_namespaceObject.toEffect)(name.trim());
    if (effect === $effect(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["none"])))) continue;
    if (freeEffects.includes(effect)) continue;
    cuttable.push([name.trim(), value]);
  }
  cuttable.sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  var remainingCut = cutTarget;
  var selected = [];
  function isContributionCuttable(stat, val) {
    if (stat === "Combat Rate") return val < 0;
    // Add any other exceptions here if needed
    return val > 0;
  }
  for (var _i4 = 0, _cuttable = cuttable; _i4 < _cuttable.length; _i4++) {
    var _cuttable$_i = main_slicedToArray(_cuttable[_i4], 2),
      _name = _cuttable$_i[0],
      _value = _cuttable$_i[1];
    if (remainingCut <= 0) break;
    if (!isContributionCuttable(statName, _value)) continue;
    var contributionMagnitude = Math.abs(_value);
    if (contributionMagnitude <= remainingCut) {
      selected.push([_name, _value]);
      remainingCut -= contributionMagnitude;
    } else {
      // Skip effects that are too big to fit
      continue;
    }
  }
  if (selected.length === 0) {
    (0,external_kolmafia_namespaceObject.print)("No non-free effects found to cut for ".concat(statName, "."));
  } else {
    var _iterator2 = main_createForOfIteratorHelper(selected),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = main_slicedToArray(_step2.value, 2),
          _name2 = _step2$value[0],
          _value2 = _step2$value[1];
        (0,external_kolmafia_namespaceObject.print)("Suggest cutting effect \"".concat(_name2, "\" (").concat(Math.abs(_value2), ") for ").concat(statName, "."));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;