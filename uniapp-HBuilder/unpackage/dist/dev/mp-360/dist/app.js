/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({"pages-index-index":"pages-index-index"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************!*\
  !*** multi G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/main.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\my-company\person-job\mine-xiaocx\uniapp-HBuilder\main.js */1);


/***/ }),
/* 1 */
/*!********************************************************************!*\
  !*** G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ 2);var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ 3));__webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ 81);__webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ 91);__webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ 111);__webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ 113);__webpack_require__(/*! uni-pages */ 114);__webpack_require__(/*! uni-h5 */ 116);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 115));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 118));\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default((0, _objectSpread2.default)({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiaWtCQUFBLDBDQUFtQix1Q0FBZ0I7QUFDbkM7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ3VuaS1oNSc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcblxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuXHQuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj };

}

module.exports = _interopRequireDefault;

/***/ }),
/* 3 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! core-js/modules/es.symbol */ 4);__webpack_require__(/*! core-js/modules/es.array.filter */ 66);__webpack_require__(/*! core-js/modules/es.array.for-each */ 71);__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ 74);__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ 75);__webpack_require__(/*! core-js/modules/es.object.keys */ 77);__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ 78);Object.defineProperty(exports, "__esModule", { value: true });exports.default = _objectSpread2;var _defineProperty = _interopRequireDefault(__webpack_require__(/*! ./defineProperty */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),
/* 4 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 5);
var global = __webpack_require__(/*! ../internals/global */ 6);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 33);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 49);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 50);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var has = __webpack_require__(/*! ../internals/has */ 19);
var isArray = __webpack_require__(/*! ../internals/is-array */ 51);
var isObject = __webpack_require__(/*! ../internals/is-object */ 18);
var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var toObject = __webpack_require__(/*! ../internals/to-object */ 52);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 17);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 12);
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ 53);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 55);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 40);
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ 57);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 47);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 8);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 11);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);
var redefine = __webpack_require__(/*! ../internals/redefine */ 25);
var shared = __webpack_require__(/*! ../internals/shared */ 32);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 31);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 35);
var uid = __webpack_require__(/*! ../internals/uid */ 34);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ 59);
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ 60);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 61);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 29);
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 62).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 5 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 8).f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);
var redefine = __webpack_require__(/*! ../internals/redefine */ 25);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 26);
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ 36);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 48);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 6 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 7)))

/***/ }),
/* 7 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 11);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 12);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 17);
var has = __webpack_require__(/*! ../internals/has */ 19);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 20);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 9 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 10);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 10 */
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 11 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 12 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 14);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 16);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 14 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 10);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 15);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 15 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 17 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 18);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 21);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 21 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var isObject = __webpack_require__(/*! ../internals/is-object */ 18);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 12);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 20);
var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 17);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 24 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 18);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 25 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);
var has = __webpack_require__(/*! ../internals/has */ 19);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 26);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 27);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 29);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 26 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 27 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ 28);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 28 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 26);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 29 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 30);
var global = __webpack_require__(/*! ../internals/global */ 6);
var isObject = __webpack_require__(/*! ../internals/is-object */ 18);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);
var objectHas = __webpack_require__(/*! ../internals/has */ 19);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 31);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 35);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 30 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 27);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 31 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 32);
var uid = __webpack_require__(/*! ../internals/uid */ 34);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 32 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 33);
var store = __webpack_require__(/*! ../internals/shared-store */ 28);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 33 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 34 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 35 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 36 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 19);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 37);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 8);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 37 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 40);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 47);
var anObject = __webpack_require__(/*! ../internals/an-object */ 24);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 38 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 39);
var global = __webpack_require__(/*! ../internals/global */ 6);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 39 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);

module.exports = global;


/***/ }),
/* 40 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 41);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 46);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 41 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 19);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 42).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 35);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var toLength = __webpack_require__(/*! ../internals/to-length */ 43);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 45);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 43 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 44);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 45 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 44);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 46 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 47 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 48 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 10);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 49 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 10);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 50 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 49);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 51 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 15);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 52 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 16);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 53 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 54);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 46);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 35);
var html = __webpack_require__(/*! ../internals/html */ 56);
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ 21);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 31);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 54 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);
var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 55);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 55 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 41);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 46);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 56 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 57 */
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ 40).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 58 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var shared = __webpack_require__(/*! ../internals/shared */ 32);
var has = __webpack_require__(/*! ../internals/has */ 19);
var uid = __webpack_require__(/*! ../internals/uid */ 34);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 49);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 50);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 59 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

exports.f = wellKnownSymbol;


/***/ }),
/* 60 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 39);
var has = __webpack_require__(/*! ../internals/has */ 19);
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ 59);
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 23).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 61 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 23).f;
var has = __webpack_require__(/*! ../internals/has */ 19);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 62 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ 63);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 14);
var toObject = __webpack_require__(/*! ../internals/to-object */ 52);
var toLength = __webpack_require__(/*! ../internals/to-length */ 43);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 65);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 63 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 64);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 64 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 65 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 18);
var isArray = __webpack_require__(/*! ../internals/is-array */ 51);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 66 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 5);
var $filter = __webpack_require__(/*! ../internals/array-iteration */ 62).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 67);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 70);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 67 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 10);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 68);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 68 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 69);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 69 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 70 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var has = __webpack_require__(/*! ../internals/has */ 19);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 71 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 5);
var forEach = __webpack_require__(/*! ../internals/array-for-each */ 72);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 72 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 62).forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 73);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 70);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 73 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ 10);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 74 */
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 5);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 8).f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 75 */
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 5);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 37);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 8);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 76);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 76 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 17);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 12);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 77 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 5);
var toObject = __webpack_require__(/*! ../internals/to-object */ 52);
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ 55);
var fails = __webpack_require__(/*! ../internals/fails */ 10);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 78 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ 79);
var forEach = __webpack_require__(/*! ../internals/array-for-each */ 72);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 79 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 80 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _defineProperty;function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 81 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 13);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 82);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 83);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 29);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 84);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 82 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var create = __webpack_require__(/*! ../internals/object-create */ 53);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 83 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 84 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 5);
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ 85);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 87);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 89);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 61);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);
var redefine = __webpack_require__(/*! ../internals/redefine */ 25);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 33);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 83);
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ 86);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 85 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ 86).IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ 53);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 12);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 61);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 83);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 86 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 87);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 22);
var has = __webpack_require__(/*! ../internals/has */ 19);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 33);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 87 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 19);
var toObject = __webpack_require__(/*! ../internals/to-object */ 52);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 31);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 88);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 88 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 10);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 89 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 90);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 90 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 18);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 91 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 5);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 33);
var global = __webpack_require__(/*! ../internals/global */ 6);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ 92);
var redefine = __webpack_require__(/*! ../internals/redefine */ 25);
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ 93);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 61);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ 94);
var isObject = __webpack_require__(/*! ../internals/is-object */ 18);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 64);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ 95);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 15);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 27);
var iterate = __webpack_require__(/*! ../internals/iterate */ 96);
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ 102);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 103);
var task = __webpack_require__(/*! ../internals/task */ 104).set;
var microtask = __webpack_require__(/*! ../internals/microtask */ 106);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 107);
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ 109);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 108);
var perform = __webpack_require__(/*! ../internals/perform */ 110);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 29);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 48);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 68);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 92 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);

module.exports = global.Promise;


/***/ }),
/* 93 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ 25);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 94 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 23);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 95 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 96 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ 97);
var toLength = __webpack_require__(/*! ../internals/to-length */ 43);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 63);
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ 98);
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ 101);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 97 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 83);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 98 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ 99);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 83);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 99 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 100);
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ 15);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 100 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 101 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 24);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 102 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 103 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 64);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 58);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 104 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 15);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 63);
var html = __webpack_require__(/*! ../internals/html */ 56);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 21);
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ 105);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 105 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 69);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 106 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 8).f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ 15);
var macrotask = __webpack_require__(/*! ../internals/task */ 104).set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ 105);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 107 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 24);
var isObject = __webpack_require__(/*! ../internals/is-object */ 18);
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ 108);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 108 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ 64);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 109 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 6);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 110 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 111 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 5);
var assign = __webpack_require__(/*! ../internals/object-assign */ 112);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 112 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 9);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 55);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 47);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 11);
var toObject = __webpack_require__(/*! ../internals/to-object */ 52);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 14);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 113 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 5);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 33);
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ 92);
var fails = __webpack_require__(/*! ../internals/fails */ 10);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 38);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 103);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 107);
var redefine = __webpack_require__(/*! ../internals/redefine */ 25);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 114 */
/*!***********************************************************************!*\
  !*** G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/pages.json ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ 2);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 115));

global['________'] = true;
delete global['________'];
global.__uniConfig = { "globalStyle": { "navigationBarTextStyle": "white", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#007AFF", "backgroundColor": "#FFFFFF" } };
global.__uniConfig.compilerVersion = '2.8.11';
global.__uniConfig.responsive = { minWidth: 768 };
global.__uniConfig.router = { "mode": "hash", "base": "/" };
global.__uniConfig.publicPath = "/";
global.__uniConfig['async'] = { "loading": "AsyncLoading", "error": "AsyncError", "delay": 200, "timeout": 60000 };
global.__uniConfig.debug = false;
global.__uniConfig.networkTimeout = { "request": 60000, "connectSocket": 60000, "uploadFile": 60000, "downloadFile": 60000 };
global.__uniConfig.sdkConfigs = {};
global.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2";
global.__uniConfig.nvue = { "flex-direction": "column" };
global.__uniConfig.__webpack_chunk_load__ = __webpack_require__.e;
_vue.default.component('pages-index-index', function (resolve) {
  var component = {
    component: __webpack_require__.e(/*! require.ensure | pages-index-index */ "pages-index-index").then((function () {return resolve(__webpack_require__(/*! G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/pages/index/index.vue */ 130));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout };

  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      } };

  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      } };

  }
  return component;
});
global.__uniRoutes = [
{
  path: '/',
  alias: '/pages/index/index',
  component: {
    render: function render(createElement) {
      return createElement(
      'Page',
      {
        props: Object.assign({
          isQuit: true,

          isEntry: true },



        __uniConfig.globalStyle, { "navigationBarTitleText": "uni-ui基础项目" }) },

      [
      createElement('pages-index-index', {
        slot: 'page' })]);



    } },

  meta: {
    id: 1,
    name: 'pages-index-index',
    isNVue: false,
    pagePath: 'pages/index/index',
    isQuit: true,
    isEntry: true,
    windowTop: 44 } },


{
  path: '/preview-image',
  component: {
    render: function render(createElement) {
      return createElement(
      'Page',
      {
        props: {
          navigationStyle: 'custom' } },


      [
      createElement('system-preview-image', {
        slot: 'page' })]);



    } },

  meta: {
    name: 'preview-image',
    pagePath: '/preview-image' } },



{
  path: '/choose-location',
  component: {
    render: function render(createElement) {
      return createElement(
      'Page',
      {
        props: {
          navigationStyle: 'custom' } },


      [
      createElement('system-choose-location', {
        slot: 'page' })]);



    } },

  meta: {
    name: 'choose-location',
    pagePath: '/choose-location' } },



{
  path: '/open-location',
  component: {
    render: function render(createElement) {
      return createElement(
      'Page',
      {
        props: {
          navigationStyle: 'custom' } },


      [
      createElement('system-open-location', {
        slot: 'page' })]);



    } },

  meta: {
    name: 'open-location',
    pagePath: '/open-location' } }];



global.UniApp && new global.UniApp();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ 7)))

/***/ }),
/* 115 */
/*!*******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue/dist/vue.runtime.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('at ') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {
        protoAugment(value, arrayMethods);
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    // fixed by xxxxxx
    callHook(vm, 'onServiceCreated');
    callHook(vm, 'onServiceAttached');
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function findWxsProps(wxsProps, attrs) {
  var ret = {};
  Object.keys(wxsProps).forEach(function (name) {
    if (attrs[name]) {
      ret[wxsProps[name]] = attrs[name];
      delete attrs[name];
    }
  });
  return ret
}

function updateWxsProps(oldVnode, vnode) {
  if (
    isUndef(oldVnode.data.wxsProps) &&
    isUndef(vnode.data.wxsProps)
  ) {
    return
  }

  var oldWxsWatches = oldVnode.$wxsWatches;
  var wxsPropsKey = Object.keys(vnode.data.wxsProps);
  if (!oldWxsWatches && !wxsPropsKey.length) {
    return
  }

  if (!oldWxsWatches) {
    oldWxsWatches = {};
  }

  var wxsProps = findWxsProps(vnode.data.wxsProps, vnode.data.attrs);
  var context = vnode.context;

  vnode.$wxsWatches = {};

  Object.keys(wxsProps).forEach(function (prop) {
    // app-plus view wxs
    var watchProp = prop;
    if (vnode.context.wxsProps) {
      watchProp = 'wxsProps.' + prop;
    }

    vnode.$wxsWatches[prop] = oldWxsWatches[prop] || vnode.context.$watch(watchProp, function(newVal, oldVal) {
      wxsProps[prop](
        newVal,
        oldVal,
        context.$getComponentDescriptor(context, true),
        vnode.elm.__vue__.$getComponentDescriptor(vnode.elm.__vue__, false)
      );
    }, {
      deep: true
    });
  });

  Object.keys(oldWxsWatches).forEach(function (oldName) {
    if (!vnode.$wxsWatches[oldName]) {
      oldWxsWatches[oldName]();
      delete oldWxsWatches[oldName];
    }
  });
}

var wxs = {
  create: updateWxsProps,
  update: updateWxsProps
};

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    ) &&
    isUndef(el.__wxsAddClass) &&
    isUndef(el.__wxsRemoveClass) // fixed by xxxxxx __wxsClass
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // fixed by xxxxxx __wxsClass
  if(Array.isArray(el.__wxsRemoveClass) && el.__wxsRemoveClass.length){
    var clsArr = cls.split(/\s+/);
    el.__wxsRemoveClass.forEach(function (removeCls){
      var clsIndex = clsArr.findIndex(function (cls) { return cls === removeCls; });
      if (clsIndex !== -1) {
        clsArr.splice(clsIndex, 1);
      }
    });
    cls = clsArr.join(' ');
    el.__wxsRemoveClass.length = 0;
  }

  if (el.__wxsAddClass) {
    // 去重
    var clsArr$1 = cls.split(/\s+/).concat(el.__wxsAddClass.split(/\s+/));
    var clsObj = Object.create(null);
    clsArr$1.forEach(function (cls) {
      cls && (clsObj[cls] = 1);
    });
    cls = Object.keys(clsObj).join(' ');
  }
  // fixed by xxxxxx (仅 h5 平台 extenalClasses)
  var context = vnode.context;
  var externalClasses = context.$options.mpOptions &&
    context.$options.mpOptions.externalClasses;
  if (Array.isArray(externalClasses)) {
    externalClasses.forEach(function (externalClass) {
      // 简单替换 externalClass
      var externalClassValue = context[camelize(externalClass)];
      externalClassValue && (cls = cls.replace(externalClass, externalClassValue));
    });
  }
  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

// upx,rpx 正则匹配
var unitRE = /([+-]?\d+(\.\d+)?)[r|u]px/g;

var transformUnit = function (val) {
  if (typeof val === 'string') {
    return val.replace(unitRE, function (a, b) {
      /* eslint-disable no-undef */
      return uni.upx2px(b) + 'px'
    })
  }
  return val
};

var urlRE = /url\(\s*'?"?([a-zA-Z0-9\.\-\_\/]+\.(jpg|gif|png))"?'?\s*\)/;

var transformUrl = function (val, ctx) {
  if (typeof val === 'string' && val.indexOf('url(') !== -1) {
    var matches = val.match(urlRE);
    if (matches && matches.length === 3) {
        val = val.replace(matches[1], ctx._$getRealPath(matches[1]));
    }
  }
  return val
};

var setProp = function (el, name, val, ctx) {
  if(ctx && ctx._$getRealPath && val){
    val = transformUrl(val, ctx);
  }
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = transformUnit(val[i]);
      }
    } else {
      el.style[normalizedName] = transformUnit(val);
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;
  var el = vnode.elm;
  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style) &&
    isUndef(el.__wxsStyle) // fixed by xxxxxx __wxsStyle
  ) {
    return
  }

  var cur, name;

  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  // fixed by xxxxxx __wxsStyle
  if(el.__wxsStyle){
    Object.assign(vnode.data.normalizedStyle, el.__wxsStyle);
    Object.assign(newStyle, el.__wxsStyle);
  }

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur, vnode.context);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  wxs,// fixed by xxxxxx wxs props
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

Vue.prototype.__call_hook = function(hook, args) {
  var vm = this;
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  var ret;
  if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
          ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
  }
  if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
  }
  popTarget();
  return ret
};

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 7)))

/***/ }),
/* 116 */
/*!*****************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-360/dist/index.umd.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e(__webpack_require__(/*! vue-router */ 117),__webpack_require__(/*! vue */ 115)):undefined})("undefined"!==typeof self?self:this,(function(t,e){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fae3")}({"0001":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"loadFontFace",(function(){return o}));var i=n("a118"),r=n("db70");function o(e,n){var i=Object(r["a"])();if(!i)return{errMsg:"loadFontFace:fail not font page"};t.publishHandler("loadFontFace",{options:e,callbackId:n},i)}t.subscribe("onLoadFontFaceCallback",(function(t){var e=t.callbackId,n=t.data;Object(i["a"])(e,n)}))}.call(this,n("0dd1"))},"00b2":function(t,e,n){},"0138":function(t,e,n){"use strict";n.r(e),function(t){var i=n("052f"),r=n("3d1f"),o=n("98be"),a=n("abbf");n.d(e,"getApp",(function(){return a["b"]})),n.d(e,"getCurrentPages",(function(){return a["c"]})),Object(i["a"])(t.on,{getApp:a["b"],getCurrentPages:a["c"]}),Object(r["a"])(t.subscribe,{getApp:a["b"],getCurrentPages:a["c"]}),e["default"]=o["a"]}.call(this,n("0dd1"))},"02c9":function(t,e,n){"use strict";function i(t){if(0===t.indexOf("#")){var e=t.substr(1);return function(t){return!(!t.componentInstance||t.componentInstance.id!==e)||!(!t.data||!t.data.attrs||t.data.attrs.id!==e)}}if(0===t.indexOf(".")){var n=t.substr(1);return function(t){return t.data&&o(n,t.data.staticClass,t.data.class)}}}n.d(e,"a",(function(){return c}));var r=/\s+/;function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e?-1!==e.split(r).indexOf(t):n&&"string"===typeof n?-1!==n.split(r).indexOf(t):void 0}function a(t,e){if(e(t.$vnode||t._vnode))return t;for(var n=t.$children,i=0;i<n.length;i++){var r=a(n[i],e);if(r)return r}}function s(t,e,n){e(t.$vnode||t._vnode)&&n.push(t);for(var i=t.$children,r=0;r<i.length;r++)s(i[r],e,n);return n}function c(t){t.prototype.createIntersectionObserver=function(t){return uni.createIntersectionObserver(this,t)},t.prototype.selectComponent=function(t){return a(this,i(t))},t.prototype.selectAllComponents=function(t){return s(this,i(t),[])}}},"052f":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("a741"),r=n("45db");function o(t,e){var n=t.name,i=t.arg;"postMessage"===n||uni[n](i)}function a(t,e){var n=e.getApp,a=e.getCurrentPages;function s(t){Object(i["a"])(n(),"onError",t)}function c(t){Object(i["a"])(n(),"onPageNotFound",t)}function u(t,e){var n=a().find((function(t){return t.$page.id===e}));n&&Object(i["b"])(n,"onResize",t)}function l(t,e){var n=a().find((function(t){return t.$page.id===e}));n&&(Object(r["a"])(e),Object(i["b"])(n,"onPullDownRefresh"))}function f(t,e){var n=a();n.length&&Object(i["b"])(n[n.length-1],t,e)}function h(t){return function(e){f(t,e)}}function d(){Object(i["a"])(n(),"onHide"),f("onHide")}function p(){Object(i["a"])(n(),"onShow"),f("onShow")}t("onError",s),t("onPageNotFound",c),t("onAppEnterBackground",d),t("onAppEnterForeground",p),t("onResize",u),t("onPullDownRefresh",l),t("onTabItemTap",h("onTabItemTap")),t("onNavigationBarButtonTap",h("onNavigationBarButtonTap")),t("onNavigationBarSearchInputChanged",h("onNavigationBarSearchInputChanged")),t("onNavigationBarSearchInputConfirmed",h("onNavigationBarSearchInputConfirmed")),t("onNavigationBarSearchInputClicked",h("onNavigationBarSearchInputClicked")),t("onNavigationBarSearchInputFocusChanged",h("onNavigationBarSearchInputFocusChanged")),t("onWebInvokeAppService",o)}},"0554":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=n("ffdc");function r(t,e,n){var r=__uniConfig.qqMapKey,o="https://apis.map.qq.com/ws/coord/v1/translate?locations=".concat(t.latitude,",").concat(t.longitude,"&type=1&key=").concat(r,"&output=jsonp");Object(i["a"])(o,{},(function(t){"locations"in t&&t.locations.length?e({longitude:t.locations[0].lng,latitude:t.locations[0].lat}):n(t)}),n)}function o(e,n){var i=e.type,o=e.altitude,a=t,s=a.invokeCallbackHandler;function c(t){s(n,Object.assign(t,{errMsg:"getLocation:ok",verticalAccuracy:t.altitudeAccuracy||0,horizontalAccuracy:t.accuracy}))}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var e=t.coords;"WGS84"===i?c(e):r(e,c,(function(t){s(n,{errMsg:"getLocation:fail "+JSON.stringify(t)})}))}),(function(){s(n,{errMsg:"getLocation:fail"})}),{enableHighAccuracy:o,timeout:3e5}):s(n,{errMsg:"getLocation:fail device nonsupport geolocation"})}}).call(this,n("0dd1"))},"0741":function(t,e,n){"use strict";var i=n("3c79"),r=n.n(i);r.a},"0758":function(t,e,n){"use strict";(function(t){function i(e,n,i,r){var o=n.$page.id;t.publishHandler(o+"-map-"+e,{mapId:e,type:i,data:r},o)}n.d(e,"a",(function(){return i}))}).call(this,n("0dd1"))},"0784":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("f2b3"),r=n("a741");function o(t,e){var n=t.$route;t.route=n.meta.pagePath,t.options||(t.options=e);var r=Object(i["h"])(n.params,"__id__")?n.params.__id__:n.meta.id;t.__page__={id:r,path:n.path,route:n.meta.pagePath,options:e,meta:Object.assign({},n.meta)},t.$vm=t,t.$root=t,t.$holder=t.$parent.$parent,t.$mp={mpType:"page",page:t,query:{},status:""}}function a(){return{created:function(){var t=Object(i["c"])(this.$route.query);o(this,t),Object(r["b"])(this,"onLoad",t),Object(r["b"])(this,"onShow")}}}},"091a":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"createIntersectionObserver",(function(){return f}));var i=n("62b5"),r=n("db70");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var c=Object(i["a"])("requestComponentObserver"),u={thresholds:[0],initialRatio:0,observeAll:!1},l=function(){function e(t,n){o(this,e),this.pageId=t.$page.id,this.component=t._$id||t,this.options=Object.assign({},u,n)}return s(e,[{key:"_makeRootMargin",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options.rootMargin=["top","right","bottom","left"].map((function(e){return"".concat(Number(t[e])||0,"px")})).join(" ")}},{key:"relativeTo",value:function(t,e){return this.options.relativeToSelector=t,this._makeRootMargin(e),this}},{key:"relativeToViewport",value:function(t){return this.options.relativeToSelector=null,this._makeRootMargin(t),this}},{key:"observe",value:function(e,n){"function"===typeof n&&(this.options.selector=e,this.reqId=c.push(n),t.publishHandler("requestComponentObserver",{reqId:this.reqId,component:this.component,options:this.options},this.pageId))}},{key:"disconnect",value:function(){t.publishHandler("destroyComponentObserver",{reqId:this.reqId},this.pageId)}}]),e}();function f(t,e){return t._isVue||(e=t,t=null),new l(t||Object(r["b"])("createIntersectionObserver"),e)}}.call(this,n("0dd1"))},"0998":function(t,e,n){"use strict";var i=n("927d"),r=n.n(i);r.a},"09e5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=n("62b5"),r=Object(i["a"])("requestComponentInfo");function o(e,n,i){t.publishHandler("requestComponentInfo",{reqId:r.push(i),reqs:n},e.$page.id)}}).call(this,n("0dd1"))},"0a32":function(t,e,n){"use strict";var i=n("e4f1"),r=n.n(i);r.a},"0dd1":function(t,e,n){"use strict";n.r(e),n.d(e,"on",(function(){return c})),n.d(e,"off",(function(){return u})),n.d(e,"once",(function(){return l})),n.d(e,"emit",(function(){return f})),n.d(e,"subscribe",(function(){return h})),n.d(e,"unsubscribe",(function(){return d})),n.d(e,"subscribeHandler",(function(){return p}));var i=n("8bbf"),r=n.n(i),o=n("27a7");n.d(e,"invokeCallbackHandler",(function(){return o["a"]}));var a=n("b865");n.d(e,"publishHandler",(function(){return a["b"]}));var s=new r.a,c=s.$on.bind(s),u=s.$off.bind(s),l=s.$once.bind(s),f=s.$emit.bind(s);function h(t,e){return c("view."+t,e)}function d(t,e){return u("view."+t,e)}function p(t,e,n){return f("view."+t,e,n)}},"0f55":function(t,e,n){"use strict";var i=n("2190"),r=n.n(i);r.a},"0f74":function(t,e,n){"use strict";function i(t,e){if(e){if(0===e.indexOf("/"))return e}else{if(e=t,0===e.indexOf("/"))return e;var n=getCurrentPages();t=n.length?n[n.length-1].$page.route:""}if(0===e.indexOf("./"))return i(t,e.substr(2));for(var r=e.split("/"),o=r.length,a=0;a<o&&".."===r[a];a++);r.splice(0,a),e=r.join("/");var s=t.length>0?t.split("/"):[];return s.splice(s.length-a-1,a+1),"/"+s.concat(r).join("/")}n.d(e,"a",(function(){return i}))},1082:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-image",t._g({},t.$listeners),[n("div",{ref:"content",style:t.modeStyle}),n("img",{attrs:{src:t.realImagePath}}),"widthFix"===t.mode?n("v-uni-resize-sensor",{ref:"sensor",on:{resize:t._resize}}):t._e()],1)},r=[];function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var a={name:"Image",props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},lazyLoad:{type:[Boolean,String],default:!1}},data:function(){return{originalWidth:0,originalHeight:0,availHeight:""}},computed:{ratio:function(){return this.originalWidth&&this.originalHeight?this.originalWidth/this.originalHeight:0},realImagePath:function(){return this.$getRealPath(this.src)},modeStyle:function(){var t="auto",e="",n="no-repeat";switch(this.mode){case"aspectFit":t="contain",e="center center";break;case"aspectFill":t="cover",e="center center";break;case"widthFix":t="100% 100%";break;case"top":e="center top";break;case"bottom":e="center bottom";break;case"center":e="center center";break;case"left":e="left center";break;case"right":e="right center";break;case"top left":e="left top";break;case"top right":e="right top";break;case"bottom left":e="left bottom";break;case"bottom right":e="right bottom";break;default:t="100% 100%",e="0% 0%";break}return"background-position:".concat(e,";background-size:").concat(t,";background-repeat:").concat(n,";")}},watch:{src:function(t,e){this._setContentImage(),this._loadImage()},mode:function(t,e){"widthFix"===e&&(this.$el.style.height=this.availHeight),"widthFix"===t&&this.ratio&&this._fixSize()}},mounted:function(){this.availHeight=this.$el.style.height||"",this._setContentImage(),this.realImagePath&&this._loadImage()},methods:{_resize:function(){"widthFix"===this.mode&&this._fixSize()},_fixSize:function(){var t=this._getWidth();if(t){var e=t/this.ratio;("undefined"===typeof navigator||o(navigator))&&"Google Inc."===navigator.vendor&&e>10&&(e=2*Math.round(e/2)),this.$el.style.height=e+"px"}},_setContentImage:function(){this.$refs.content.style.backgroundImage=this.src?'url("'.concat(this.realImagePath,'")'):"none"},_loadImage:function(){var t=this,e=new Image;e.onload=function(e){t.originalWidth=this.width,t.originalHeight=this.height,"widthFix"===t.mode&&t._fixSize(),t.$trigger("load",e,{width:this.width,height:this.height})},e.onerror=function(e){t.$trigger("error",e,{errMsg:"GET ".concat(t.src," 404 (Not Found)")})},e.src=this.realImagePath},_getWidth:function(){var t=window.getComputedStyle(this.$el),e=(parseFloat(t.borderLeftWidth,10)||0)+(parseFloat(t.borderRightWidth,10)||0),n=(parseFloat(t.paddingLeft,10)||0)+(parseFloat(t.paddingRight,10)||0);return this.$el.offsetWidth-e-n}}},s=a,c=(n("db18"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},1164:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s}));var i=n("23e5"),r=!1;function o(){return r}function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=[],r=o();if(!r)return n&&t.error("app is not ready"),[];var a=r.$children[0];if(a&&a.$children.length){var s=a.$children.find((function(t){return"TabBar"===t.$options.name}));a.$children.forEach((function(t){if(s!==t&&t.$children.length&&"Page"===t.$children[0].$options.name&&t.$children[0].$slots.page){var n=t.$children[0].$children.find((function(t){return"PageBody"===t.$options.name})).$children.find((function(t){return!!t.$page}));if(n){var o=!0;!e&&s&&n.$page&&n.$page.meta.isTabBar&&(r.$route.meta&&r.$route.meta.isTabBar?r.$route.path!==n.$page.path&&(o=!1):s.__path__!==n.$page.path&&(o=!1)),o&&i.push(n)}}}))}var c=i.length;if(c>1){var u=i[c-1];u.$page.path!==r.$route.path&&i.splice(c-1,1)}return i}function s(t,e){r=t,r.globalData=r.$options.globalData||{},Object(i["a"])(r,e)}}).call(this,n("3ad9")["default"])},"11fb":function(t,e,n){"use strict";n.r(e),n.d(e,"previewImage",(function(){return r}));var i=n("cb0f"),r={urls:{type:Array,required:!0,validator:function(t,e){var n;if(e.urls=t.map((function(t){if("string"===typeof t)return Object(i["a"])(t);n=!0})),n)return"url is not string"}},current:{type:[String,Number],validator:function(t,e){"number"===typeof t?e.current=t>0&&t<e.urls.length?t:0:"string"===typeof t&&t&&(e.current=Object(i["a"])(t))},default:0}}},1307:function(t,e,n){},1348:function(t,e,n){"use strict";(function(t){var i=n("8af1"),r=["navigate","redirect","switchTab","reLaunch","navigateBack"];e["a"]={name:"Navigator",mixins:[i["c"]],props:{hoverClass:{type:String,default:"navigator-hover"},url:{type:String,default:""},openType:{type:String,default:"navigate",validator:function(t){return~r.indexOf(t)}},delta:{type:Number,default:1},hoverStartTime:{type:[Number,String],default:20},hoverStayTime:{type:[Number,String],default:600}},methods:{_onClick:function(e){if("navigateBack"===this.openType||this.url)switch(this.openType){case"navigate":uni.navigateTo({url:this.url});break;case"redirect":uni.redirectTo({url:this.url});break;case"switchTab":uni.switchTab({url:this.url});break;case"reLaunch":uni.reLaunch({url:this.url});break;case"navigateBack":uni.navigateBack({delta:this.delta});break;default:break}else t.error("<navigator/> should have url attribute when using navigateTo, redirectTo, reLaunch or switchTab")}}}}).call(this,n("3ad9")["default"])},"15bb":function(t,e,n){"use strict";(function(t){var i=n("f2b3");e["a"]={mounted:function(){var e=this;if("transparent"===this.type){for(var n=this.$el.querySelector(".uni-page-head-transparent").style,i=this.$el.querySelector(".uni-page-head__title"),r=this.$el.querySelectorAll(".uni-btn-icon"),o=[],a=this.textColor,s=0;s<r.length;s++)o.push(r[s].style);for(var c=this.$el.querySelectorAll(".uni-page-head-btn"),u=[],l=[],f=0;f<c.length;f++){var h=c[f];u.push(getComputedStyle(h).backgroundColor),l.push(h.style)}this._A=0,t.on("onPageScroll",(function(t){var r=t.scrollTop,s=Math.min(r/e.offset,1);1===s&&1===e._A||(s>.5&&e._A<=.5?o.forEach((function(t){t.color=a})):s<=.5&&e._A>.5&&o.forEach((function(t){t.color="#fff"})),e._A=s,i&&(i.style.opacity=s),n.backgroundColor="rgba(".concat(e._R,",").concat(e._G,",").concat(e._B,",").concat(s,")"),l.forEach((function(t,e){var n=u[e],i=n.match(/[\d+\.]+/g);i[3]=(1-s)*(4===i.length?i[3]:1),t.backgroundColor="rgba(".concat(i,")")})))}))}else if("float"===this.type){for(var d=this.$el.querySelectorAll(".uni-btn-icon"),p=[],g=0;g<d.length;g++)p.push(d[g].style);for(var m=this.$el.querySelectorAll(".uni-page-head-btn"),v=[],b=[],y=0;y<m.length;y++){var _=m[y];v.push(getComputedStyle(_).backgroundColor),b.push(_.style)}}},computed:{color:function(){return"transparent"===this.type?"#fff":this.textColor},offset:function(){return parseInt(this.coverage)},bgColor:function(){if("transparent"===this.type){var t=Object(i["i"])(this.backgroundColor),e=t.r,n=t.g,r=t.b;return this._R=e,this._G=n,this._B=r,"rgba(".concat(e,",").concat(n,",").concat(r,",0)")}return this.backgroundColor}}}}).call(this,n("501c"))},"167a":function(t,e,n){"use strict";var i=n("5d70"),r=n.n(i);r.a},"17fd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hoverClass&&"none"!==t.hoverClass?n("uni-navigator",t._g({class:[t.hovering?t.hoverClass:""],on:{touchstart:t._hoverTouchStart,touchend:t._hoverTouchEnd,touchcancel:t._hoverTouchCancel,click:t._onClick}},t.$listeners),[t._t("default")],2):n("uni-navigator",t._g({on:{click:t._onClick}},t.$listeners),[t._t("default")],2)},r=[],o=n("1348"),a=o["a"],s=(n("f7fd"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},1879:function(t,e,n){"use strict";n.r(e);var i,r,o=n("f2b3"),a={name:"Video",functional:!0,render:function(t,e){var n=e.data;if(n&&n.attrs){var i=n.attrs;Object(o["h"])(i,"id")&&(n.ref=i.id),"undefined"===typeof i.title&&(i.title="")}return t("se-video",n,e.children)}},s=a,c=n("2877"),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"18fd":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,o=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=d("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=d("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),c=d("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=d("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),f=d("script,style");function h(t,e){var n,h,d,p=[],g=t;p.last=function(){return this[this.length-1]};while(t){if(h=!0,p.last()&&f[p.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""})),b("",p.last());else if(0==t.indexOf("\x3c!--")?(n=t.indexOf("--\x3e"),n>=0&&(e.comment&&e.comment(t.substring(4,n)),t=t.substring(n+3),h=!1)):0==t.indexOf("</")?(d=t.match(r),d&&(t=t.substring(d[0].length),d[0].replace(r,b),h=!1)):0==t.indexOf("<")&&(d=t.match(i),d&&(t=t.substring(d[0].length),d[0].replace(i,v),h=!1)),h){n=t.indexOf("<");var m=n<0?t:t.substring(0,n);t=n<0?"":t.substring(n),e.chars&&e.chars(m)}if(t==g)throw"Parse Error: "+t;g=t}function v(t,n,i,r){if(n=n.toLowerCase(),s[n])while(p.last()&&c[p.last()])b("",p.last());if(u[n]&&p.last()==n&&b("",n),r=a[n]||!!r,r||p.push(n),e.start){var f=[];i.replace(o,(function(t,e){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[e]?e:"";f.push({name:e,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(n,f,r)}}function b(t,n){if(n){for(i=p.length-1;i>=0;i--)if(p[i]==n)break}else var i=0;if(i>=0){for(var r=p.length-1;r>=i;r--)e.end&&e.end(p[r]);p.length=i}}b()}function d(t){for(var e={},n=t.split(","),i=0;i<n.length;i++)e[n[i]]=!0;return e}},1934:function(t,e,n){"use strict";n.r(e),n.d(e,"setNavigationBarColor",(function(){return r})),n.d(e,"setNavigationBarTitle",(function(){return o}));var i=["#ffffff","#000000"],r={frontColor:{type:String,required:!0,validator:function(t,e){if(-1===i.indexOf(t))return'invalid frontColor "'.concat(t,'"')}},backgroundColor:{type:String,required:!0},animation:{type:Object,default:function(){return{duration:0,timingFunc:"linear"}},validator:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;e.animation={duration:t.duration||0,timingFunc:t.timingFunc||"linear"}}}},o={title:{type:String,required:!0}}},1955:function(t,e,n){"use strict";n.r(e);var i=n("ba15"),r=n("8aec"),o=n("5363"),a=n("72b3"),s=n("f2b3");function c(t){var e=20,n=0,i=0;t.addEventListener("touchstart",(function(t){var e=t.changedTouches[0];n=e.clientX,i=e.clientY})),t.addEventListener("touchend",(function(t){var r=t.changedTouches[0];if(Math.abs(r.clientX-n)<e&&Math.abs(r.clientY-i)<e){var o=new CustomEvent("click",{bubbles:!0,cancelable:!0,target:t.target,currentTarget:t.currentTarget});["screenX","screenY","clientX","clientY","pageX","pageY"].forEach((function(t){o[t]=r[t]})),t.target.dispatchEvent(o)}}))}var u,l,f={name:"PickerViewColumn",mixins:[i["a"],r["a"]],data:function(){return{scope:"picker-view-column-".concat(Date.now()),inited:!1,indicatorStyle:"",indicatorClass:"",indicatorHeight:34,maskStyle:"",maskClass:"",current:this.$parent.getItemValue(this),length:0}},computed:{height:function(){return this.$parent.height},maskSize:function(){return(this.height-this.indicatorHeight)/2}},watch:{indicatorHeight:function(t){this._setItemHeight(t),this.inited&&this.update()},current:function(t){this.$parent.setItemValue(this,t)},length:function(t){this.inited&&this.update(t)}},created:function(){var t=this.$parent;this.indicatorStyle=t.indicatorStyle,this.indicatorClass=t.indicatorClass,this.maskStyle=t.maskStyle,this.maskClass=t.maskClass,this.deltaY=0},mounted:function(){var t=this;this.touchtrack(this.$refs.main,"_handleTrack",!0),this.setCurrent(this.current),this.$nextTick((function(){t.init(),t.update()})),c(this.$el)},methods:{_setItemHeight:function(t){var e=document.createElement("style");e.innerText=".uni-picker-view-content.".concat(this.scope,">*{height: ").concat(t,"px;overflow: hidden;}"),document.head.appendChild(e)},_handleTrack:function(t){if(this._scroller)switch(t.detail.state){case"start":this._handleTouchStart(t),Object(s["e"])({disable:!0});break;case"move":this._handleTouchMove(t);break;case"end":case"cancel":this._handleTouchEnd(t),Object(s["e"])({disable:!1})}},_handleTap:function(t){var e=t.clientY;if(!this._scroller.isScrolling()){var n=this.$el.getBoundingClientRect(),i=e-n.top-this.height/2,r=this.indicatorHeight/2;if(!(Math.abs(i)<=r)){var o=Math.ceil((Math.abs(i)-r)/this.indicatorHeight),a=i<0?-o:o,s=Math.min(this.current+a,this.length-1);this.current=s=Math.max(s,0),this._scroller.scrollTo(s*this.indicatorHeight)}}},_handleWheel:function(t){var e=this.deltaY+t.deltaY;if(Math.abs(e)>10){this.deltaY=0;var n=Math.min(this.current+(e<0?-1:1),this.length-1);this.current=n=Math.max(n,0),this._scroller.scrollTo(n*this.indicatorHeight)}else this.deltaY=e;t.preventDefault()},setCurrent:function(t){t!==this.current&&(this.current=t,this.inited&&this.update())},init:function(){var t=this;this.initScroller(this.$refs.content,{enableY:!0,enableX:!1,enableSnap:!0,itemSize:this.indicatorHeight,friction:new o["a"](1e-4),spring:new a["a"](2,90,20),onSnap:function(e){isNaN(e)||e===t.current||(t.current=e)}}),this.inited=!0},update:function(){var t=this;this.$nextTick((function(){var e=Math.min(t.current,t.length-1);e=Math.max(e,0),t._scroller.update(e*t.indicatorHeight,void 0,t.indicatorHeight)}))},_resize:function(t){var e=t.height;this.indicatorHeight=e}},render:function(t){return this.length=this.$slots.default&&this.$slots.default.length||0,t("uni-picker-view-column",{on:{on:this.$listeners}},[t("div",{ref:"main",staticClass:"uni-picker-view-group",on:{wheel:this._handleWheel,click:this._handleTap}},[t("div",{ref:"mask",staticClass:"uni-picker-view-mask",class:this.maskClass,style:"background-size: 100% ".concat(this.maskSize,"px;").concat(this.maskStyle)}),t("div",{ref:"indicator",staticClass:"uni-picker-view-indicator",class:this.indicatorClass,style:this.indicatorStyle},[t("v-uni-resize-sensor",{attrs:{initial:!0},on:{resize:this._resize}})]),t("div",{ref:"content",staticClass:"uni-picker-view-content",class:this.scope,style:"padding: ".concat(this.maskSize,"px 0;")},[this.$slots.default])])])}},h=f,d=(n("edfa"),n("2877")),p=Object(d["a"])(h,u,l,!1,null,null,null);e["default"]=p.exports},"19c4":function(t,e,n){var i={"./base/base64.js":"6481","./base/can-i-use.js":"957a","./base/event-bus.js":"b0ef","./base/interceptor.js":"a954","./base/upx2px.js":"2289","./context/canvas.js":"82b9","./context/context.js":"3bfb","./device/make-phone-call.js":"f102","./device/set-clipboard-data.js":"b501","./file/open-document.js":"2604","./location/choose-location.js":"e5bb","./location/get-location.js":"19d9","./location/open-location.js":"70bb","./media/choose-image.js":"f1b2","./media/choose-video.js":"ed9f","./media/get-image-info.js":"b866","./media/preview-image.js":"11fb","./media/save-image-to-photos-album.js":"4f53","./network/download-file.js":"439a","./network/request.js":"a201","./network/socket.js":"abb2","./network/upload-file.js":"9a3e","./plugin/get-provider.js":"4e7c","./plugin/load-sub-package.js":"d013","./route/route.js":"332a","./storage/storage.js":"ec33","./ui/load-font-face.js":"5ff9","./ui/navigation-bar.js":"1934","./ui/page-scroll-to.js":"232e","./ui/popup.js":"2246","./ui/tab-bar.js":"5621"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="19c4"},"19d9":function(t,e,n){"use strict";n.r(e),n.d(e,"getLocation",(function(){return r}));var i={WGS84:"WGS84",GCJ02:"GCJ02"},r={type:{type:String,validator:function(t,e){t=(t||"").toUpperCase(),e.type=Object.values(i).indexOf(t)<0?i.WGS84:t},default:i.WGS84},altitude:{altitude:Boolean,default:!1}}},"1a12":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var i=n("f2b3");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e){r(this,t),s(this,"_xhr",void 0),this._xhr=e}return a(t,[{key:"abort",value:function(){this._xhr&&(this._xhr.abort(),delete this._xhr)}}]),t}();function u(t){var e={},n=t.split("\n");return n.forEach((function(t){var n=t.match(/(\S+\s*):\s*(.*)/);if(n&&3===n.length){var i=n[1],r=n[2];e[i]=r}})),e}function l(e,n){var r,o=e.url,a=e.data,s=e.header,l=e.method,f=e.dataType,h=e.responseType,d=e.withCredentials,p=t,g=p.invokeCallbackHandler,m=null,v=__uniConfig.networkTimeout&&__uniConfig.networkTimeout.request||6e4;for(var b in s)if(Object(i["h"])(s,b)&&"content-type"===b.toLowerCase()){r=s[b],r=0===r.indexOf("application/json")?"json":0===r.indexOf("application/x-www-form-urlencoded")?"urlencoded":"string";break}if("GET"!==l)if("string"===typeof a||a instanceof ArrayBuffer)m=a;else if("json"===r)try{m=JSON.stringify(a)}catch(T){m=a.toString()}else if("urlencoded"===r){var y=[];for(var _ in a)Object(i["h"])(a,_)&&y.push(encodeURIComponent(_)+"="+encodeURIComponent(a[_]));m=y.join("&")}else m=a.toString();var w=new XMLHttpRequest,S=new c(w);for(var k in w.open(l,o),s)Object(i["h"])(s,k)&&w.setRequestHeader(k,s[k]);var C=setTimeout((function(){w.onload=w.onabort=w.onerror=null,S.abort(),g(n,{errMsg:"request:fail timeout"})}),v);return w.responseType=h,w.onload=function(){clearTimeout(C);var t=w.status,e="text"===h?w.responseText:w.response;if("text"===h&&"json"===f)try{e=JSON.parse(e)}catch(T){}g(n,{data:e,statusCode:t,header:u(w.getAllResponseHeaders()),errMsg:"request:ok"})},w.onabort=function(){clearTimeout(C),g(n,{errMsg:"request:fail abort"})},w.onerror=function(){clearTimeout(C),g(n,{errMsg:"request:fail"})},w.withCredentials=d,w.send(m),S}}).call(this,n("0dd1"))},"1a8c":function(t,e,n){"use strict";(function(t){n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"c",(function(){return h}));var i=n("85b6"),r=t,o=r.invokeCallbackHandler;function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.url,r=e.delta,o=e.animationType,a=e.animationDuration,s=e.from,c=void 0===s?"navigateBack":s,u=e.detail,l=getApp().$router;switch(t){case"redirectTo":l.replace({type:t,path:n});break;case"navigateTo":l.push({type:t,path:n,animationType:o,animationDuration:a});break;case"navigateBack":var f=!0,h=getCurrentPages();if(h.length){var d=h[h.length-1];Object(i["a"])(d.$options,"onBackPress")&&!0===d.__call_hook("onBackPress",{from:c})&&(f=!1)}f&&(r>1&&(l._$delta=r),l.go(-r,{animationType:o,animationDuration:a}));break;case"reLaunch":l.replace({type:t,path:n});break;case"switchTab":l.replace({type:t,path:n,params:{detail:u}});break}return{errMsg:t+":ok"}}function s(t){return a("redirectTo",t)}function c(t){return a("navigateTo",t)}function u(t){return a("navigateBack",t)}function l(t){return a("reLaunch",t)}function f(t){return a("switchTab",t)}function h(t,e){var n=t.url,i=n.split("?")[0].replace(/\//g,"-");__uniConfig.__webpack_chunk_load__(i.substr(1)).then((function(){o(e,{url:n,errMsg:"preloadPage:ok"})})).catch((function(t){o(e,{url:n,errMsg:"preloadPage:fail "+t})}))}}).call(this,n("0dd1"))},"1b6f":function(t,e,n){"use strict";(function(t){var i=n("f2b3");e["a"]={mounted:function(){var t=this;this._toggleListeners("subscribe",this.id),this.$watch("id",(function(e,n){t._toggleListeners("unsubscribe",n,!0),t._toggleListeners("subscribe",e,!0)}))},beforeDestroy:function(){this._toggleListeners("unsubscribe",this.id),this._contextId&&this._toggleListeners("unsubscribe",this._contextId)},methods:{_toggleListeners:function(e,n,r){r&&!n||Object(i["j"])(this._handleSubscribe)&&t[e](this.$page.id+"-"+this.$options.name.replace(/VUni([A-Z])/,"$1").toLowerCase()+"-"+n,this._handleSubscribe)},_getContextInfo:function(){var t="context-".concat(this._uid);return this._contextId||(this._toggleListeners("subscribe",t),this._contextId=t),{name:this.$options.name.replace(/VUni([A-Z])/,"$1").toLowerCase(),id:t,page:this.$page.id}}}}}).call(this,n("501c"))},"1c64":function(t,e,n){"use strict";var i=n("60ee"),r=n.n(i);r.a},"1ca3":function(t,e,n){"use strict";n.r(e),n.d(e,"base64ToArrayBuffer",(function(){return r})),n.d(e,"arrayBufferToBase64",(function(){return o}));var i=n("8390");function r(t){return Object(i["decode"])(t)}function o(t){return Object(i["encode"])(t)}},"1e4d":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"createAnimation",(function(){return f}));var a={duration:400,timingFunction:"linear",delay:0,transformOrigin:"50% 50% 0"},s=function(){function t(e){i(this,t),this.actions=[],this.currentTransform={},this.currentStepAnimates=[],this.option=Object.assign({},a,e)}return o(t,[{key:"_getOption",value:function(t){var e={transition:Object.assign({},this.option,t)};return e.transformOrigin=e.transition.transformOrigin,delete e.transition.transformOrigin,e}},{key:"_pushAnimates",value:function(t,e){this.currentStepAnimates.push({type:t,args:e})}},{key:"_converType",value:function(t){return t.replace(/[A-Z]/g,(function(t){return"-".concat(t.toLowerCase())}))}},{key:"_getValue",value:function(t){return"number"===typeof t?"".concat(t,"px"):t}},{key:"export",value:function(){var t=this.actions;return this.actions=[],{actions:t}}},{key:"step",value:function(t){var e=this;return this.currentStepAnimates.forEach((function(t){"style"!==t.type?e.currentTransform[t.type]=t:e.currentTransform["".concat(t.type,".").concat(t.args[0])]=t})),this.actions.push({animates:Object.values(this.currentTransform),option:this._getOption(t)}),this.currentStepAnimates=[],this}}]),t}(),c=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"],u=["opacity","backgroundColor"],l=["width","height","left","right","top","bottom"];function f(t){return new s(t)}c.concat(u,l).forEach((function(t){s.prototype[t]=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return u.concat(l).includes(t)?this._pushAnimates("style",[this._converType(t),l.includes(t)?this._getValue(n[0]):n[0]]):this._pushAnimates(t,n),this}}))},"1efd":function(t,e,n){"use strict";n.r(e);var i=n("8bbf"),r=n.n(i),o=n("cb0f"),a=n("d4b6"),s={methods:{$getRealPath:function(t){return t?Object(o["a"])(t):t},$trigger:function(t,e,n){this.$emit(t,a["b"].call(this,t,e,n,this.$el,this.$el))}}};function c(t){return h(t)||f(t)||l(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function h(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function p(t){return/^-?\d+[ur]px$/i.test(t)?t.replace(/(^-?\d+)[ur]px$/i,(function(t,e){return"".concat(uni.upx2px(parseFloat(e)),"px")})):/^-?[\d\.]+$/.test(t)?"".concat(t,"px"):t||""}function g(t){return t.replace(/[A-Z]/g,(function(t){return"-".concat(t.toLowerCase())})).replace("webkit","-webkit")}function m(t){var e=["matrix","matrix3d","scale","scale3d","rotate3d","skew","translate","translate3d"],n=["scaleX","scaleY","scaleZ","rotate","rotateX","rotateY","rotateZ","skewX","skewY","translateX","translateY","translateZ"],i=["opacity","background-color"],r=["width","height","left","right","top","bottom"],o=t.animates,a=t.option,s=a.transition,u={},l=[];return o.forEach((function(t){var o=t.type,a=c(t.args);if(e.concat(n).includes(o))o.startsWith("rotate")||o.startsWith("skew")?a=a.map((function(t){return parseFloat(t)+"deg"})):o.startsWith("translate")&&(a=a.map(p)),n.indexOf(o)>=0&&(a.length=1),l.push("".concat(o,"(").concat(a.join(","),")"));else if(i.concat(r).includes(a[0])){o=a[0];var s=a[1];u[o]=r.includes(o)?p(s):s}})),u.transform=u.webkitTransform=l.join(" "),u.transition=u.webkitTransition=Object.keys(u).map((function(t){return"".concat(g(t)," ").concat(s.duration,"ms ").concat(s.timingFunction," ").concat(s.delay,"ms")})).join(","),u.transformOrigin=u.webkitTransformOrigin=a.transformOrigin,u}function v(t){var e=t.animation;if(e&&e.actions&&e.actions.length){var n=0,i=e.actions,r=e.actions.length;setTimeout((function(){o()}),0)}function o(){var e=i[n],a=e.option.transition,s=m(e);Object.keys(s).forEach((function(e){t.$el.style[e]=s[e]})),n+=1,n<r&&setTimeout(o,a.duration+a.delay)}}var b={props:["animation"],watch:{animation:function(){v(this)}},mounted:function(){v(this)}};[n("1879").default,n("d3bd").default,n("bacd").default,n("25ce").default,n("7bb3").default,n("27c2").default,n("b34d").default,n("9a8b").default,n("1082").default,n("250d").default,n("70f4").default,n("c61c").default,n("8842").default,n("17fd").default,n("1955").default,n("27ab").default,n("9b1f").default,n("d5ec").default,n("6491").default,n("3e8c").default,n("b705").default,n("f1ef").default,n("9f96").default,n("9213").default,n("5513").default,n("4f1c").default,n("4da7").default,n("5768").default,n("2bbe").default,n("e0b6").default,n("d677").default,n("c41f").default,n("594d").default,n("6fa7").default,n("9980").default].forEach((function(t){t.mixins=t.mixins?[].concat(s,t.mixins):[s],t.mixins.push(b),t.name="VUni"+t.name,t.isReserved=!0,r.a.component(t.name,t)}))},"1ff3":function(t,e,n){"use strict";n.r(e),n.d(e,"uploadFile",(function(){return l}));var i=n("a118"),r=n("db70");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var c=function(){function t(e,n){o(this,t),this.id=e,this._callbackId=n,this._callbacks=[]}return s(t,[{key:"abort",value:function(){Object(r["c"])("operateRequestTask",{uploadTaskId:this.id,operationType:"abort"})}},{key:"onProgressUpdate",value:function(t){"function"===typeof t&&this._callbacks.push(t)}},{key:"onHeadersReceived",value:function(){}},{key:"offProgressUpdate",value:function(t){var e=this._callbacks.indexOf(t);e>=0&&this._callbacks.splice(e,1)}},{key:"offHeadersReceived",value:function(){}}]),t}(),u=Object.create(null);function l(t,e){var n=Object(r["c"])("createUploadTask",t),i=n.uploadTaskId,o=new c(i,e);return u[i]=o,o}Object(r["d"])("onUploadTaskStateChange",(function(t){var e=t.uploadTaskId,n=t.state,r=t.data,o=t.statusCode,a=t.progress,s=t.totalBytesSent,c=t.totalBytesExpectedToSend,l=t.errMsg,f=u[e],h=f._callbackId;switch(n){case"progressUpdate":f._callbacks.forEach((function(t){t({progress:a,totalBytesSent:s,totalBytesExpectedToSend:c})}));break;case"success":Object(i["a"])(h,{data:r,statusCode:o,errMsg:"request:ok"});case"fail":Object(i["a"])(h,{errMsg:"request:fail "+l});default:setTimeout((function(){delete u[e]}),100);break}}))},2190:function(t,e,n){},2246:function(t,e,n){"use strict";n.r(e),n.d(e,"showModal",(function(){return r})),n.d(e,"showToast",(function(){return o})),n.d(e,"showLoading",(function(){return a})),n.d(e,"showActionSheet",(function(){return s}));var i=n("cb0f"),r={title:{type:String,default:""},content:{type:String,default:""},showCancel:{type:Boolean,default:!0},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#000000"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#007aff"},visible:{type:Boolean,default:!0}},o={title:{type:String,default:""},icon:{default:"success",validator:function(t,e){-1===["success","loading","none"].indexOf(t)&&(e.icon="success")}},image:{type:String,default:"",validator:function(t,e){t&&(e.image=Object(i["a"])(t))}},duration:{type:Number,default:1500},mask:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},a={title:{type:String,default:""},icon:{type:String,default:"loading"},duration:{type:Number,default:1e8},mask:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},s={itemList:{type:Array,required:!0,validator:function(t,e){if(!t.length)return"parameter.itemList should have at least 1 item"}},itemColor:{type:String,default:"#000000"},visible:{type:Boolean,default:!0},popover:{type:Object}}},2289:function(t,e,n){"use strict";n.r(e),n.d(e,"upx2px",(function(){return i}));var i=[{name:"upx",type:[Number,String],required:!0}]},"232e":function(t,e,n){"use strict";n.r(e),n.d(e,"pageScrollTo",(function(){return i}));var i={scrollTop:{type:Number,required:!0},duration:{type:Number,default:300,validator:function(t,e){e.duration=Math.max(0,t)}}}},2399:function(t,e,n){},"23e5":function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return g}));var i=n("a741");function r(t){-1===this.keepAliveInclude.indexOf(t)&&this.keepAliveInclude.push(t)}var o=[];function a(t){if("number"===typeof t)o=this.keepAliveInclude.splice(-(t-1)).map((function(t){return parseInt(t.split("-").pop())}));else{var e=this.keepAliveInclude.indexOf(t);-1!==e&&this.keepAliveInclude.splice(e,1)}}var s=Object.create(null);function c(t){return s[t]}function u(t){s[t]={x:window.pageXOffset,y:window.pageYOffset}}function l(t,e,n){e&&n&&e.meta.isTabBar&&n.meta.isTabBar&&u(n.params.__id__);for(var r=getCurrentPages(),o=r.length-1;o>=0;o--){var s=r[o],c=s.$page.meta;c.isTabBar||(a.call(this,c.name+"-"+s.$page.id),Object(i["b"])(s,"onUnload"))}}function f(t){__uniConfig.reLaunch=(__uniConfig.reLaunch||1)+1;for(var e=getCurrentPages(!0),n=e.length-1;n>=0;n--)Object(i["b"])(e[n],"onUnload"),e[n].$destroy();this.keepAliveInclude=[],s=Object.create(null)}var h=[];function d(t,e,n,i){h=getCurrentPages(!0);var o=e.params.__id__,s=t.params.__id__,c=t.meta.name+"-"+s;if(s===o&&"reLaunch"!==t.type)t.fullPath!==e.fullPath?(a.call(this,c),n()):n(!1);else if(t.meta.id&&t.meta.id!==s)n({path:t.path,replace:!0});else{var u=e.meta.name+"-"+o;switch(t.type){case"navigateTo":break;case"redirectTo":a.call(this,u),e.meta&&e.meta.isQuit&&(t.meta.isQuit=!0,t.meta.isEntry=!!e.meta.isEntry);break;case"switchTab":l.call(this,i,t,e);break;case"reLaunch":f.call(this,c),t.meta.isQuit=!0;break;default:o&&o>s&&(a.call(this,u),this.$router._$delta>1&&a.call(this,this.$router._$delta));break}if("reLaunch"!==t.type&&e.meta.id&&r.call(this,u),r.call(this,c),t.meta&&t.meta.name){document.body.className="uni-body "+t.meta.name;var d="nvue-dir-"+__uniConfig.nvue["flex-direction"];t.meta.isNVue?(document.body.setAttribute("nvue",""),document.body.setAttribute(d,"")):(document.body.removeAttribute("nvue"),document.body.removeAttribute(d))}n()}}function p(e,n){var r=n.params.__id__,a=e.params.__id__,s=h.find((function(t){return t.$page.id===r}));switch(e.type){case"navigateTo":s&&Object(i["b"])(s,"onHide");break;case"redirectTo":s&&Object(i["b"])(s,"onUnload");break;case"switchTab":n.meta.isTabBar&&s&&Object(i["b"])(s,"onHide");break;case"reLaunch":break;default:r&&r>a&&(s&&Object(i["b"])(s,"onUnload"),this.$router._$delta>1&&o.reverse().forEach((function(t){var e=h.find((function(e){return e.$page.id===t}));e&&Object(i["b"])(e,"onUnload")})));break}if(delete this.$router._$delta,o.length=0,"reLaunch"!==e.type){var c=getCurrentPages(!0).find((function(t){return t.$page.id===a}));c&&(setTimeout((function(){t.emit("onNavigationBarChange",c.$parent.$parent.navigationBar),Object(i["b"])(c,"onShow")}),0),document.title=c.$parent.$parent.navigationBar.titleText)}}function g(t,e){t.$router.beforeEach((function(n,i,r){d.call(t,n,i,r,e)})),t.$router.afterEach((function(e,n){p.call(t,e,n)}))}}).call(this,n("0dd1"))},"24d9":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var i=n("f2b3");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){return t.mp=Object.assign({"@warning":"mp is deprecated"},t),t._processed=!0,t}function a(t,e){return Object(i["k"])(e)&&(Object(i["h"])(e,"backgroundColor")&&(t.backgroundColor=e.backgroundColor),Object(i["h"])(e,"buttons")&&(t.buttons=e.buttons),Object(i["h"])(e,"titleColor")&&(t.textColor=e.titleColor),Object(i["h"])(e,"titleText")&&(t.titleText=e.titleText),Object(i["h"])(e,"titleSize")&&(t.titleSize=e.titleSize),Object(i["h"])(e,"type")&&(t.type=e.type),Object(i["h"])(e,"searchInput")&&"object"===r(e.searchInput)&&(t.searchInput=Object.assign({autoFocus:!1,align:"center",color:"#000000",backgroundColor:"rgba(255,255,255,0.5)",borderRadius:"0px",placeholder:"",placeholderColor:"#CCCCCC",disabled:!1},e.searchInput))),t}},"250d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-input",t._g({on:{change:function(t){t.stopPropagation()}}},t.$listeners),[n("div",{ref:"wrapper",staticClass:"uni-input-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!(t.composing||t.valueSync.length),expression:"!(composing || valueSync.length)"}],ref:"placeholder",staticClass:"uni-input-placeholder",class:t.placeholderClass,style:t.placeholderStyle,domProps:{textContent:t._s(t.placeholder)}}),"checkbox"===t.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSync,expression:"valueSync"}],ref:"input",staticClass:"uni-input-input",attrs:{disabled:t.disabled,maxlength:t.maxlength,step:t.step,autofocus:t.focus,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.valueSync)?t._i(t.valueSync,null)>-1:t.valueSync},on:{focus:t._onFocus,blur:t._onBlur,input:function(e){return e.stopPropagation(),t._onInput(e)},compositionstart:t._onComposition,compositionend:t._onComposition,keyup:function(e){return e.stopPropagation(),t._onKeyup(e)},change:function(e){var n=t.valueSync,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=null,a=t._i(n,o);i.checked?a<0&&(t.valueSync=n.concat([o])):a>-1&&(t.valueSync=n.slice(0,a).concat(n.slice(a+1)))}else t.valueSync=r}}}):"radio"===t.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSync,expression:"valueSync"}],ref:"input",staticClass:"uni-input-input",attrs:{disabled:t.disabled,maxlength:t.maxlength,step:t.step,autofocus:t.focus,autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.valueSync,null)},on:{focus:t._onFocus,blur:t._onBlur,input:function(e){return e.stopPropagation(),t._onInput(e)},compositionstart:t._onComposition,compositionend:t._onComposition,keyup:function(e){return e.stopPropagation(),t._onKeyup(e)},change:function(e){t.valueSync=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSync,expression:"valueSync"}],ref:"input",staticClass:"uni-input-input",attrs:{disabled:t.disabled,maxlength:t.maxlength,step:t.step,autofocus:t.focus,autocomplete:"off",type:t.inputType},domProps:{value:t.valueSync},on:{focus:t._onFocus,blur:t._onBlur,input:[function(e){e.target.composing||(t.valueSync=e.target.value)},function(e){return e.stopPropagation(),t._onInput(e)}],compositionstart:t._onComposition,compositionend:t._onComposition,keyup:function(e){return e.stopPropagation(),t._onKeyup(e)}}})])])},r=[],o=n("8af1"),a=["text","number","idcard","digit","password"],s=["number","digit"],c={name:"Input",mixins:[o["a"]],props:{name:{type:String,default:""},type:{type:String,default:"text"},password:{type:[Boolean,String],default:!1},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:"input-placeholder"},disabled:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:140},focus:{type:[Boolean,String],default:!1},confirmType:{type:String,default:"done"}},data:function(){return{composing:!1,wrapperHeight:0,cachedValue:""}},computed:{inputType:function(){var t="";switch(this.type){case"text":"search"===this.confirmType&&(t="search");break;case"idcard":t="text";break;case"digit":t="number";break;default:t=~a.indexOf(this.type)?this.type:"text";break}return this.password?"password":t},step:function(){return~s.indexOf(this.type)?"0.000000000000000001":""}},watch:{focus:function(t){this.$refs.input&&this.$refs.input[t?"focus":"blur"]()},maxlength:function(t){var e=this.valueSync.slice(0,parseInt(t,10));e!==this.valueSync&&(this.valueSync=e)}},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},mounted:function(){if("search"===this.confirmType){var t=document.createElement("form");t.action="",t.onsubmit=function(){return!1},t.className="uni-input-form",t.appendChild(this.$refs.input),this.$refs.wrapper.appendChild(t)}var e=this;while(e){var n=e.$options._scopeId;n&&this.$refs.placeholder.setAttribute(n,""),e=e.$parent}this.initKeyboard(this.$refs.input)},beforeDestroy:function(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_onKeyup:function(t){13===t.keyCode&&this.$trigger("confirm",t,{value:t.target.value})},_onInput:function(t){if(!this.composing){if(~s.indexOf(this.type)){if(this.$refs.input.validity&&!this.$refs.input.validity.valid)return t.target.value=this.cachedValue,void(this.valueSync=t.target.value);this.cachedValue=this.valueSync}if("number"===this.inputType){var e=parseInt(this.maxlength,10);if(e>0&&t.target.value.length>e)return t.target.value=t.target.value.slice(0,e),void(this.valueSync=t.target.value)}this.$triggerInput(t,{value:this.valueSync})}},_onFocus:function(t){this.$trigger("focus",t,{value:t.target.value})},_onBlur:function(t){this.$trigger("blur",t,{value:t.target.value})},_onComposition:function(t){"compositionstart"===t.type?this.composing=!0:this.composing=!1},_resetFormData:function(){this.valueSync=""},_getFormData:function(){return this.name?{value:this.valueSync,key:this.name}:{}}}},u=c,l=(n("0f55"),n("2877")),f=Object(l["a"])(u,i,r,!1,null,null,null);e["default"]=f.exports},"25ce":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-checkbox-group",t._g({},t.$listeners),[t._t("default")],2)},r=[],o=n("8af1"),a={name:"CheckboxGroup",mixins:[o["b"],o["e"]],props:{name:{type:String,default:""}},data:function(){return{checkboxList:[]}},listeners:{"@checkbox-change":"_changeHandler","@checkbox-group-update":"_checkboxGroupUpdateHandler"},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},beforeDestroy:function(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_changeHandler:function(t){var e=[];this.checkboxList.forEach((function(t){t.checkboxChecked&&e.push(t.value)})),this.$trigger("change",t,{value:e})},_checkboxGroupUpdateHandler:function(t){if("add"===t.type)this.checkboxList.push(t.vm);else{var e=this.checkboxList.indexOf(t.vm);this.checkboxList.splice(e,1)}},_getFormData:function(){var t={};if(""!==this.name){var e=[];this.checkboxList.forEach((function(t){t.checkboxChecked&&e.push(t.value)})),t.value=e,t.key=this.name}return t}}},s=a,c=(n("0998"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},2604:function(t,e,n){"use strict";n.r(e),n.d(e,"openDocument",(function(){return i}));var i={filePath:{type:String,required:!0},fileType:{type:String}}},2608:function(t,e,n){"use strict";(function(t){function i(e){return function(){try{return e.apply(e,arguments)}catch(n){t.error(n)}}}function r(e){return function(){try{return e.apply(e,arguments)}catch(n){t.error(n)}}}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}))}).call(this,n("3ad9")["default"])},2765:function(t,e,n){"use strict";var i=n("3590"),r=n.n(i);r.a},"27a7":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return _}));var i=n("f2b3"),r=n("2608"),o=n("ed1a"),a=n("cc76"),s=n("de29");function c(t,e,n){var i="".concat(e,":fail ").concat(t);if(-1===n)throw new Error(i);return"number"===typeof n&&v(n,{errMsg:i}),!1}var u=[{name:"callback",type:Function,required:!0}],l=["beforeValidate","beforeAll","beforeSuccess"];function f(t,e,n){var r=a["a"][t];if(!r&&Object(o["a"])(t)&&(r=u),r){if(Array.isArray(r)&&Array.isArray(e)){var f=Object.create(null),h=Object.create(null),d=e.length;r.forEach((function(t,n){f[t.name]=t,d>n&&(h[t.name]=e[n])})),r=f,e=h}if(Object(i["j"])(r.beforeValidate)){var p=r.beforeValidate(e);if(p)return c(p,t,n)}for(var g=Object.keys(r),m=0;m<g.length;m++)if(-1===l.indexOf(g[m])){var v=Object(s["a"])(g[m],r,e);if(v)return c(v,t,n)}}return!0}var h=1,d={};function p(t,e){var n=h++,i="api."+t+"."+n,r=function(t,n){e(t,n)};return d[n]={name:i,keepAlive:!0,callback:r},n}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!Object(i["k"])(e))return{params:e};e=Object.assign({},e);var o={};for(var a in e){var s=e[a];Object(i["j"])(s)&&(o[a]=Object(r["a"])(s),delete e[a])}var c=o.success,u=o.fail,l=o.cancel,f=o.complete,p=Object(i["j"])(c),g=Object(i["j"])(u),m=Object(i["j"])(l),v=Object(i["j"])(f);if(!p&&!g&&!m&&!v)return{params:e};var b={};for(var y in n){var _=n[y];Object(i["j"])(_)&&(b[y]=Object(r["b"])(_))}var w=b.beforeSuccess,S=b.afterSuccess,k=b.beforeFail,C=b.afterFail,T=b.beforeCancel,x=b.afterCancel,O=b.beforeAll,E=b.afterAll,M=h++,j="api."+t+"."+M,A=function(e){if(e.errMsg=e.errMsg||t+":ok",-1!==e.errMsg.indexOf(":ok"))e.errMsg=t+":ok";else if(-1!==e.errMsg.indexOf(":cancel"))e.errMsg=t+":cancel";else if(-1!==e.errMsg.indexOf(":fail")){var n="",r=e.errMsg.indexOf(" ");r>-1&&(n=e.errMsg.substr(r)),e.errMsg=t+":fail"+n}Object(i["j"])(O)&&O(e);var o=e.errMsg;0===o.indexOf(t+":ok")?(Object(i["j"])(w)&&w(e),p&&c(e),Object(i["j"])(S)&&S(e)):0===o.indexOf(t+":cancel")?(e.errMsg=e.errMsg.replace(t+":cancel",t+":fail cancel"),g&&u(e),Object(i["j"])(T)&&T(e),m&&l(e),Object(i["j"])(x)&&x(e)):0===o.indexOf(t+":fail")&&(Object(i["j"])(k)&&k(e),g&&u(e),Object(i["j"])(C)&&C(e)),v&&f(e),Object(i["j"])(E)&&E(e)};return d[M]={name:j,callback:A},{params:e,callbackId:M}}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=g(t,e,n),o=r.params,a=r.callbackId;return Object(i["k"])(o)&&!f(t,o,a)?{params:o,callbackId:!1}:{params:o,callbackId:a}}function v(t,e,n){if("number"===typeof t){var i=d[t];if(i)return i.keepAlive||delete d[t],i.callback(e,n)}return e}function b(e){return function(n){t.error("API `"+e+"` is not yet implemented")}}function y(t,e){var n=a["a"][t];n&&(Object(i["j"])(n.beforeAll)&&(e.beforeAll=n.beforeAll),Object(i["j"])(n.beforeSuccess)&&(e.beforeSuccess=n.beforeSuccess))}function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(i["j"])(e)?(y(t,n),function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];if(Object(o["b"])(t)){if(f(t,a,-1))return e.apply(null,a)}else if(Object(o["a"])(t)){if(f(t,a,-1))return e(p(t,a[0]))}else{var c={};a.length&&(c=a[0]);var u,l=m(t,c,n),h=l.params,d=l.callbackId;if(!1!==d)return u=Object(i["j"])(h)?e(d):e(h,d),u&&!Object(o["c"])(t)&&(u=v(d,u),Object(i["k"])(u)&&(u.errMsg=u.errMsg||t+":ok")),u}}):e}}).call(this,n("3ad9")["default"])},"27ab":function(t,e,n){"use strict";n.r(e);var i=n("f2b3");function r(t){return c(t)||s(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var l,f,h={name:"PickerView",props:{value:{type:Array,default:function(){return[]},validator:function(t){return Array.isArray(t)&&t.filter((function(t){return"number"===typeof t})).length===t.length}},indicatorStyle:{type:String,default:""},indicatorClass:{type:String,default:""},maskStyle:{type:String,default:""},maskClass:{type:String,default:""}},data:function(){return{valueSync:r(this.value),height:34,items:[],changeSource:""}},watch:{value:function(t,e){var n=this;this.valueSync.length=t.length,t.forEach((function(t,e){t!==n.valueSync[e]&&n.$set(n.valueSync,e,t)}))},valueSync:{deep:!0,handler:function(t,e){if(""===this.changeSource)this._valueChanged(t);else{this.changeSource="";var n=t.map((function(t){return t}));this.$emit("update:value",n),this.$trigger("change",{},{value:n})}}}},methods:{getItemIndex:function(t){return this.items.indexOf(t)},getItemValue:function(t){return this.valueSync[this.getItemIndex(t.$vnode)]||0},setItemValue:function(t,e){var n=this.getItemIndex(t.$vnode),i=this.valueSync[n];i!==e&&(this.changeSource="touch",this.$set(this.valueSync,n,e))},_valueChanged:function(t){this.items.forEach((function(e,n){e.componentInstance.setCurrent(t[n]||0)}))},_resize:function(t){var e=t.height;this.height=e}},render:function(t){var e=[];return this.$slots.default&&Object(i["d"])(this.$slots.default,t).forEach((function(t){t.componentOptions&&"v-uni-picker-view-column"===t.componentOptions.tag&&e.push(t)})),this.items=e,t("uni-picker-view",{on:this.$listeners},[t("v-uni-resize-sensor",{attrs:{initial:!0},on:{resize:this._resize}}),t("div",{ref:"wrapper",class:"uni-picker-view-wrapper"},e)])}},d=h,p=(n("6062"),n("2877")),g=Object(p["a"])(d,l,f,!1,null,null,null);e["default"]=g.exports},"27c2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-editor",t._g({staticClass:"ql-container",attrs:{id:t.id}},t.$listeners))},r=[],o=n("8188"),a=o["a"],s=(n("e298"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},"27d0":function(t,e,n){"use strict";(function(t){var i=n("85b6"),r=n("65a8"),o=n("f2b3"),a=n("24d9"),s=n("2d02"),c=n("a402"),u=n("90f7"),l=n("be12"),f=n("d8c8"),h=n.n(f);function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}e["a"]={name:"Page",mpType:"page",components:{PageHead:s["a"],PageBody:c["a"],PageRefresh:u["a"]},mixins:[l["a"]],props:{isQuit:{type:Boolean,default:!1},isEntry:{type:Boolean,default:!1},isTabBar:{type:Boolean,default:!1},tabBarIndex:{type:Number,default:-1},navigationBarBackgroundColor:{type:String,default:"#000"},navigationBarTextStyle:{default:"white",validator:function(t){return-1!==["white","black"].indexOf(t)}},navigationBarTitleText:{type:String,default:""},navigationStyle:{default:"default",validator:function(t){return-1!==["default","custom"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundTextStyle:{default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColorTop:{type:String,default:"#fff"},backgroundColorBottom:{type:String,default:"#fff"},enablePullDownRefresh:{type:Boolean,default:!1},onReachBottomDistance:{type:Number,default:50},disableScroll:{type:Boolean,default:!1},titleNView:{type:[Boolean,Object,String],default:""},pullToRefresh:{type:Object,default:function(){return{}}},titleImage:{type:String,default:""},transparentTitle:{type:String,default:""},titlePenetrate:{type:String,default:"NO"},navigationBarShadow:{type:Object,default:function(){return{}}}},data:function(){var t={none:"default",auto:"transparent",always:"float"},e=this.titleNView;e=!1===e||"false"===e||"custom"===this.navigationStyle&&!Object(o["k"])(e)||"always"===this.transparentTitle&&!Object(o["k"])(e)?{type:"none"}:Object.assign({},{type:"custom"===this.navigationStyle?"none":"default"},this.transparentTitle in t?{type:t[this.transparentTitle]}:null,"object"===d(e)?e:"boolean"===typeof e?{type:e?"default":"none"}:null);var n={YES:!0,NO:!1},s=Object(a["a"])({loading:!1,backButton:!this.isQuit&&!this.$route.meta.isQuit,backgroundColor:this.navigationBarBackgroundColor,textColor:"black"===this.navigationBarTextStyle?"#000":"#fff",titleText:this.navigationBarTitleText,titleImage:this.titleImage,duration:"0",timingFunc:"",titlePenetrate:n[this.titlePenetrate]},e);s.shadow=this.navigationBarShadow;var c=Object.assign({support:!0,color:"#2BD009",style:"circle",height:70,range:150,offset:0},this.pullToRefresh),u=Object(i["d"])(c.offset);return"none"!==e.type&&"transparent"!==e.type&&(u+=r["a"]+h.a.top),c.offset=u,c.height=Object(i["d"])(c.height),c.range=Object(i["d"])(c.range),{navigationBar:s,refreshOptions:c}},created:function(){var e=this.navigationBar;document.title=e.titleText,t.emit("onNavigationBarChange",e)}}}).call(this,n("0dd1"))},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return i}))},2883:function(t,e,n){},"28da":function(t,e,n){},"29a2":function(t,e,n){},"2bbe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hoverClass&&"none"!==t.hoverClass?n("uni-view",t._g({class:[t.hovering?t.hoverClass:""],on:{touchstart:t._hoverTouchStart,touchend:t._hoverTouchEnd,touchcancel:t._hoverTouchCancel}},t.$listeners),[t._t("default")],2):n("uni-view",t._g({},t.$listeners),[t._t("default")],2)},r=[],o=n("83a6"),a={name:"View",mixins:[o["a"]],listeners:{"label-click":"clickHandler"}},s=a,c=(n("e865"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"2c45":function(t,e,n){},"2c67":function(t,e,n){"use strict";n.r(e),n.d(e,"createInnerAudioContext",(function(){return h}));var i=n("db70");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var s=["canplay","play","pause","stop","ended","timeUpdate","error","waiting","seeking","seeked"],c=[{name:"src",cache:!0},{name:"startTime",default:0,cache:!0},{name:"autoplay",default:!1,cache:!0},{name:"loop",default:!1,cache:!0},{name:"obeyMuteSwitch",default:!0,readonly:!0,cache:!0},{name:"duration",readonly:!0},{name:"currentTime",readonly:!0},{name:"paused",readonly:!0},{name:"buffered",readonly:!0},{name:"volume"}],u=function(){function t(e){var n=this;r(this,t),this.id=e,this._callbacks={},this._options={},s.forEach((function(t){n._callbacks[t.toLowerCase()]=[]})),c.forEach((function(t){var e=t.name,r={get:function(){var n=t.cache?this._options:Object(i["c"])("getAudioState",{audioId:this.id}),r=e in n?n[e]:t.default;return"number"===typeof r&&"volume"!==e?r/1e3:r}};t.readonly||(r.set=function(t){this._options[e]=t,Object(i["c"])("setAudioState",Object.assign({},this._options,{audioId:this.id}))}),Object.defineProperty(n,e,r)}))}return a(t,[{key:"play",value:function(){this._operate("play")}},{key:"pause",value:function(){this._operate("pause")}},{key:"stop",value:function(){this._operate("stop")}},{key:"seek",value:function(t){this._operate("seek",{currentTime:1e3*t})}},{key:"destroy",value:function(){clearInterval(this.__timing),Object(i["c"])("destroyAudioInstance",{audioId:this.id}),delete f[this.id]}},{key:"_operate",value:function(t,e){Object(i["c"])("operateAudio",Object.assign({},e,{audioId:this.id,operationType:t}))}}]),t}();function l(t,e,n,i){t._callbacks[e].forEach((function(t){"function"===typeof t&&t("error"===e?{errMsg:n,errCode:i}:{})}))}s.forEach((function(t){var e=t[0].toUpperCase()+t.substr(1);t=t.toLowerCase(),u.prototype["on".concat(e)]=function(e){this._callbacks[t].push(e)},u.prototype["off".concat(e)]=function(e){var n=this._callbacks[t],i=n.indexOf(e);i>=0&&n.splice(i,1)}})),Object(i["d"])("onAudioStateChange",(function(t){var e=t.state,n=t.audioId,i=t.errMsg,r=t.errCode,o=f[n];if(o)if(l(o,e,i,r),"play"===e){var a=o.currentTime;o.__timing=setInterval((function(){var t=o.currentTime;t!==a&&l(o,"timeupdate")}),200)}else"pause"!==e&&"stop"!==e&&"error"!==e||clearInterval(o.__timing)}));var f=Object.create(null);function h(){var t=Object(i["c"])("createAudioInstance"),e=t.audioId,n=new u(e);return f[e]=n,n}},"2d02":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-page-head",{attrs:{"uni-page-head-type":t.type}},[n("div",{staticClass:"uni-page-head",class:t.headClass,style:{transitionDuration:t.duration,transitionTimingFunction:t.timingFunc,backgroundColor:t.bgColor,color:t.textColor}},[n("div",{staticClass:"uni-page-head-hd"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.backButton,expression:"backButton"}],staticClass:"uni-page-head-btn",on:{click:t._back}},[n("i",{staticClass:"uni-btn-icon",style:{color:t.color,fontSize:"27px"}},[t._v("")])]),t._l(t.btns,(function(e,i){return["left"===e.float?n("div",{key:i,staticClass:"uni-page-head-btn",class:{"uni-page-head-btn-red-dot":e.redDot||e.badgeText,"uni-page-head-btn-select":e.select},style:{backgroundColor:"transparent"===t.type?e.background:"transparent",width:e.width},attrs:{"badge-text":e.badgeText}},[n("i",{staticClass:"uni-btn-icon",style:t._formatBtnStyle(e),domProps:{innerHTML:t._s(t._formatBtnFontText(e))},on:{click:function(e){return t._onBtnClick(i)}}})]):t._e()]}))],2),t.searchInput?t._e():n("div",{staticClass:"uni-page-head-bd"},[n("div",{staticClass:"uni-page-head__title",style:{fontSize:t.titleSize,opacity:"transparent"===t.type?0:1}},[t.loading?n("i",{staticClass:"uni-loading"}):t._e(),""!==t.titleImage?n("img",{staticClass:"uni-page-head__title_image",attrs:{src:t.titleImage}}):[t._v(" "+t._s(t.titleText)+" ")]],2)]),t.searchInput?n("div",{staticClass:"uni-page-head-search",style:{"border-radius":t.searchInput.borderRadius,"background-color":t.searchInput.backgroundColor}},[n("div",{staticClass:"uni-page-head-search-placeholder",class:["uni-page-head-search-placeholder-"+(t.focus||t.text?"left":t.searchInput.align)],style:{color:t.searchInput.placeholderColor},domProps:{textContent:t._s(t.text||t.composing?"":t.searchInput.placeholder)}}),n("v-uni-input",{ref:"input",staticClass:"uni-page-head-search-input",style:{color:t.searchInput.color},attrs:{focus:t.searchInput.autoFocus,disabled:t.searchInput.disabled,"placeholder-style":"color:"+t.searchInput.placeholderColor,"confirm-type":"search"},on:{focus:t._focus,blur:t._blur,"update:value":t._input},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e(),n("div",{staticClass:"uni-page-head-ft"},[t._l(t.btns,(function(e,i){return["left"!==e.float?n("div",{key:i,staticClass:"uni-page-head-btn",class:{"uni-page-head-btn-red-dot":e.redDot||e.badgeText,"uni-page-head-btn-select":e.select},style:{backgroundColor:"transparent"===t.type?e.background:"transparent",width:e.width},attrs:{"badge-text":e.badgeText}},[n("i",{staticClass:"uni-btn-icon",style:t._formatBtnStyle(e),domProps:{innerHTML:t._s(t._formatBtnFontText(e))},on:{click:function(e){return t._onBtnClick(i)}}})]):t._e()]}))],2)]),"transparent"!==t.type&&"float"!==t.type?n("div",{staticClass:"uni-placeholder",class:{"uni-placeholder-titlePenetrate":t.titlePenetrate}}):t._e()])},r=[],o=n("dd35"),a=o["a"],s=(n("8e16"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["a"]=c.exports},"2d89":function(t,e,n){"use strict";var i=n("d29c"),r=n.n(i);r.a},"2eae":function(t,e,n){"use strict";n.r(e),n.d(e,"interceptors",(function(){return r}));var i=n("8542");n.d(e,"addInterceptor",(function(){return i["a"]})),n.d(e,"removeInterceptor",(function(){return i["d"]}));var r={promiseInterceptor:i["c"]}},"2ec6":function(t,e,n){"use strict";n.r(e),function(t){function i(e){var n=getCurrentPages();return n.length&&t.publishHandler("setPageMeta",e,n[n.length-1].$page.id),{}}n.d(e,"setPageMeta",(function(){return i}))}.call(this,n("0dd1"))},"2ef3":function(t,e,n){"use strict";(function(t,e,i){var r=n("8bbf"),o=n.n(r),a=n("442e");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=function(){function r(){s(this,r),this._init()}return u(r,[{key:"_init",value:function(){e.UniViewJSBridge={subscribe:t.subscribe,publishHandler:t.publishHandler,subscribeHandler:t.subscribeHandler},e.UniServiceJSBridge={subscribe:i.subscribe,publishHandler:i.publishHandler,subscribeHandler:i.subscribeHandler};var r=n("0138"),s=r.default,c=r.getApp,u=r.getCurrentPages,l=["chooseImage"];l.forEach((function(t){Object.defineProperty(s,t,{writable:!1,configurable:!1})})),e.uni=s,e.wx=e.uni,e.getApp=c,e.getCurrentPages=u,o.a.use(n("4ca9").default,{routes:__uniRoutes}),o.a.use(n("8c15").default,{routes:__uniRoutes}),Object(a["a"])(o.a),n("8f7e"),n("1efd")}}]),r}();e.UniApp=l,e.__uniConfig&&new l}).call(this,n("501c"),n("c8ba"),n("0dd1"))},"303f":function(t,e,n){"use strict";n.r(e),function(t,i){n.d(e,"CanvasContext",(function(){return j})),n.d(e,"createCanvasContext",(function(){return A})),n.d(e,"canvasGetImageData",(function(){return I})),n.d(e,"canvasPutImageData",(function(){return $})),n.d(e,"canvasToTempFilePath",(function(){return P}));var r=n("f2b3"),o=n("62b5"),a=n("db70"),s=n("a118");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t){return d(t)||h(t)||f(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}var b=Object(o["a"])("canvasEvent");function y(e,n,i,r){t.publishHandler(n+"-canvas-"+e,{canvasId:e,type:i,data:r},n)}t.subscribe("onDrawCanvas",(function(t){var e=t.callbackId,n=t.data,i=b.pop(e);i&&i(n)})),t.subscribe("onCanvasMethodCallback",(function(t){var e=t.callbackId,n=t.data,i=b.pop(e);i&&i(n)}));var _={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",transparent:"#00000000"};function w(t){t=t||"#000000";var e=null;if(null!=(e=/^#([0-9|A-F|a-f]{6})$/.exec(t))){var n=parseInt(e[1].slice(0,2),16),o=parseInt(e[1].slice(2,4),16),a=parseInt(e[1].slice(4),16);return[n,o,a,255]}if(null!=(e=/^#([0-9|A-F|a-f]{3})$/.exec(t))){var s=e[1].slice(0,1),c=e[1].slice(1,2),u=e[1].slice(2,3);return s=parseInt(s+s,16),c=parseInt(c+c,16),u=parseInt(u+u,16),[s,c,u,255]}if(null!=(e=/^rgb\((.+)\)$/.exec(t)))return e[1].split(",").map((function(t){return Math.min(255,parseInt(t.trim()))})).concat(255);if(null!=(e=/^rgba\((.+)\)$/.exec(t)))return e[1].split(",").map((function(t,e){return 3===e?Math.floor(255*parseFloat(t.trim())):Math.min(255,parseInt(t.trim()))}));var l=t.toLowerCase();if(Object(r["h"])(_,l)){e=/^#([0-9|A-F|a-f]{6,8})$/.exec(_[l]);var f=parseInt(e[1].slice(0,2),16),h=parseInt(e[1].slice(2,4),16),d=parseInt(e[1].slice(4,6),16),p=parseInt(e[1].slice(6,8),16);return p=p>=0?p:255,[f,h,d,p]}return i.group("非法颜色: "+t),i.error("不支持颜色："+t),i.groupEnd(),[0,0,0,255]}function S(t,e){this.image=t,this.repetition=e}var k,C=function(){function t(e,n){g(this,t),this.type=e,this.data=n,this.colorStop=[]}return v(t,[{key:"addColorStop",value:function(t,e){this.colorStop.push([t,w(e)])}}]),t}(),T=["scale","rotate","translate","setTransform","transform"],x=["drawImage","fillText","fill","stroke","fillRect","strokeRect","clearRect","strokeText"],O=["setFillStyle","setTextAlign","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit","setTextBaseline","setLineDash"];function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return k||(k=document.createElement("canvas")),k.width=t,k.height=e,k}function M(t){this.width=t}var j=function(){function t(e,n){g(this,t),this.id=e,this.pageId=n,this.actions=[],this.path=[],this.subpath=[],this.currentTransform=[],this.currentStepAnimates=[],this.drawingState=[],this.state={lineDash:[0,0],shadowOffsetX:0,shadowOffsetY:0,shadowBlur:0,shadowColor:[0,0,0,0],font:"10px sans-serif",fontSize:10,fontWeight:"normal",fontStyle:"normal",fontFamily:"sans-serif"}}return v(t,[{key:"draw",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,i=u(this.actions);this.actions=[],this.path=[],"function"===typeof n&&(t=b.push(n)),y(this.id,this.pageId,"actionsChanged",{actions:i,reserve:e,callbackId:t})}},{key:"createLinearGradient",value:function(t,e,n,i){return new C("linear",[t,e,n,i])}},{key:"createCircularGradient",value:function(t,e,n){return new C("radial",[t,e,n])}},{key:"createPattern",value:function(t,e){if(void 0===e)i.error("Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present.");else{if(!(["repeat","repeat-x","repeat-y","no-repeat"].indexOf(e)<0))return new S(t,e);i.error("Failed to execute 'createPattern' on 'CanvasContext': The provided type ('"+e+"') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'.")}}},{key:"measureText",value:function(t){if("object"===("undefined"===typeof document?"undefined":c(document))){var e=E().getContext("2d");return e.font=this.state.font,new M(e.measureText(t).width||0)}return new M(0)}},{key:"save",value:function(){this.actions.push({method:"save",data:[]}),this.drawingState.push(this.state)}},{key:"restore",value:function(){this.actions.push({method:"restore",data:[]}),this.state=this.drawingState.pop()||{lineDash:[0,0],shadowOffsetX:0,shadowOffsetY:0,shadowBlur:0,shadowColor:[0,0,0,0],font:"10px sans-serif",fontSize:10,fontWeight:"normal",fontStyle:"normal",fontFamily:"sans-serif"}}},{key:"beginPath",value:function(){this.path=[],this.subpath=[]}},{key:"moveTo",value:function(t,e){this.path.push({method:"moveTo",data:[t,e]}),this.subpath=[[t,e]]}},{key:"lineTo",value:function(t,e){0===this.path.length&&0===this.subpath.length?this.path.push({method:"moveTo",data:[t,e]}):this.path.push({method:"lineTo",data:[t,e]}),this.subpath.push([t,e])}},{key:"quadraticCurveTo",value:function(t,e,n,i){this.path.push({method:"quadraticCurveTo",data:[t,e,n,i]}),this.subpath.push([n,i])}},{key:"bezierCurveTo",value:function(t,e,n,i,r,o){this.path.push({method:"bezierCurveTo",data:[t,e,n,i,r,o]}),this.subpath.push([r,o])}},{key:"arc",value:function(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.path.push({method:"arc",data:[t,e,n,i,r,o]}),this.subpath.push([t,e])}},{key:"rect",value:function(t,e,n,i){this.path.push({method:"rect",data:[t,e,n,i]}),this.subpath=[[t,e]]}},{key:"arcTo",value:function(t,e,n,i,r){this.path.push({method:"arcTo",data:[t,e,n,i,r]}),this.subpath.push([n,i])}},{key:"clip",value:function(){this.actions.push({method:"clip",data:u(this.path)})}},{key:"closePath",value:function(){this.path.push({method:"closePath",data:[]}),this.subpath.length&&(this.subpath=[this.subpath.shift()])}},{key:"clearActions",value:function(){this.actions=[],this.path=[],this.subpath=[]}},{key:"getActions",value:function(){var t=u(this.actions);return this.clearActions(),t}},{key:"lineDashOffset",set:function(t){this.actions.push({method:"setLineDashOffset",data:[t]})}},{key:"globalCompositeOperation",set:function(t){this.actions.push({method:"setGlobalCompositeOperation",data:[t]})}},{key:"shadowBlur",set:function(t){this.actions.push({method:"setShadowBlur",data:[t]})}},{key:"shadowColor",set:function(t){this.actions.push({method:"setShadowColor",data:[t]})}},{key:"shadowOffsetX",set:function(t){this.actions.push({method:"setShadowOffsetX",data:[t]})}},{key:"shadowOffsetY",set:function(t){this.actions.push({method:"setShadowOffsetY",data:[t]})}},{key:"font",set:function(t){var e=this;this.state.font=t;var n=t.match(/^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/);if(n){var r=n[1].trim().split(/\s/),o=parseFloat(n[3]),a=n[7],s=[];r.forEach((function(t,n){["italic","oblique","normal"].indexOf(t)>-1?(s.push({method:"setFontStyle",data:[t]}),e.state.fontStyle=t):["bold","normal"].indexOf(t)>-1?(s.push({method:"setFontWeight",data:[t]}),e.state.fontWeight=t):0===n?(s.push({method:"setFontStyle",data:["normal"]}),e.state.fontStyle="normal"):1===n&&c()})),1===r.length&&c(),r=s.map((function(t){return t.data[0]})).join(" "),this.state.fontSize=o,this.state.fontFamily=a,this.actions.push({method:"setFont",data:["".concat(r," ").concat(o,"px ").concat(a)]})}else i.warn("Failed to set 'font' on 'CanvasContext': invalid format.");function c(){s.push({method:"setFontWeight",data:["normal"]}),e.state.fontWeight="normal"}},get:function(){return this.state.font}},{key:"fillStyle",set:function(t){this.setFillStyle(t)}},{key:"strokeStyle",set:function(t){this.setStrokeStyle(t)}},{key:"globalAlpha",set:function(t){t=Math.floor(255*parseFloat(t)),this.actions.push({method:"setGlobalAlpha",data:[t]})}},{key:"textAlign",set:function(t){this.actions.push({method:"setTextAlign",data:[t]})}},{key:"lineCap",set:function(t){this.actions.push({method:"setLineCap",data:[t]})}},{key:"lineJoin",set:function(t){this.actions.push({method:"setLineJoin",data:[t]})}},{key:"lineWidth",set:function(t){this.actions.push({method:"setLineWidth",data:[t]})}},{key:"miterLimit",set:function(t){this.actions.push({method:"setMiterLimit",data:[t]})}},{key:"textBaseline",set:function(t){this.actions.push({method:"setTextBaseline",data:[t]})}}]),t}();function A(e,n){if(n)return new j(e,n.$page.id);var i=Object(a["a"])();if(i)return new j(e,i);t.emit("onError","createCanvasContext:fail")}function I(t,e){var n=t.canvasId,i=t.x,r=t.y,o=t.width,c=t.height,u=Object(a["a"])();if(u){var l=b.push((function(t){var n=t.data;n&&n.length&&(t.data=new Uint8ClampedArray(n)),Object(s["a"])(e,t)}));y(n,u,"getImageData",{x:i,y:r,width:o,height:c,callbackId:l})}else Object(s["a"])(e,{errMsg:"canvasGetImageData:fail"})}function $(t,e){var n=t.canvasId,i=t.data,r=t.x,o=t.y,c=t.width,u=t.height,l=Object(a["a"])();if(l){var f=b.push((function(t){Object(s["a"])(e,t)}));y(n,l,"putImageData",{data:Array.prototype.slice.call(i),x:r,y:o,width:c,height:u,callbackId:f})}else Object(s["a"])(e,{errMsg:"canvasPutImageData:fail"})}function P(t,e){var n=t.x,i=void 0===n?0:n,r=t.y,o=void 0===r?0:r,c=t.width,u=t.height,l=t.destWidth,f=t.destHeight,h=t.canvasId,d=t.fileType,p=t.qualit,g=Object(a["a"])();if(g){var m=b.push((function(t){var n=t.base64;n&&n.length||Object(s["a"])(e,{errMsg:"canvasToTempFilePath:fail"}),Object(a["c"])("base64ToTempFilePath",{base64Data:n,x:i,y:o,width:c,height:u,destWidth:l,destHeight:f,canvasId:h,fileType:d,qualit:p},e)}));y(h,g,"getDataUrl",{x:i,y:o,width:c,height:u,destWidth:l,destHeight:f,hidpi:!1,fileType:d,qualit:p,callbackId:m})}else Object(s["a"])(e,{errMsg:"canvasToTempFilePath:fail"})}[].concat(T,x).forEach((function(t){function e(t){switch(t){case"fill":case"stroke":return function(){this.actions.push({method:t+"Path",data:u(this.path)})};case"fillRect":return function(t,e,n,i){this.actions.push({method:"fillPath",data:[{method:"rect",data:[t,e,n,i]}]})};case"strokeRect":return function(t,e,n,i){this.actions.push({method:"strokePath",data:[{method:"rect",data:[t,e,n,i]}]})};case"fillText":case"strokeText":return function(e,n,i,r){var o=[e.toString(),n,i];"number"===typeof r&&o.push(r),this.actions.push({method:t,data:o})};case"drawImage":return function(e,n,i,r,o,a,s,c,u){var l;function f(t){return"number"===typeof t}void 0===u&&(a=n,s=i,c=r,u=o,n=void 0,i=void 0,r=void 0,o=void 0),l=f(n)&&f(i)&&f(r)&&f(o)?[e,a,s,c,u,n,i,r,o]:f(c)&&f(u)?[e,a,s,c,u]:[e,a,s],this.actions.push({method:t,data:l})};default:return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.actions.push({method:t,data:n})}}}j.prototype[t]=e(t)})),O.forEach((function(t){function e(t){switch(t){case"setFillStyle":case"setStrokeStyle":return function(e){"object"!==c(e)?this.actions.push({method:t,data:["normal",w(e)]}):this.actions.push({method:t,data:[e.type,e.data,e.colorStop]})};case"setGlobalAlpha":return function(e){e=Math.floor(255*parseFloat(e)),this.actions.push({method:t,data:[e]})};case"setShadow":return function(e,n,i,r){r=w(r),this.actions.push({method:t,data:[e,n,i,r]}),this.state.shadowBlur=i,this.state.shadowColor=r,this.state.shadowOffsetX=e,this.state.shadowOffsetY=n};case"setLineDash":return function(e,n){e=e||[0,0],n=n||0,this.actions.push({method:t,data:[e,n]}),this.state.lineDash=e};case"setFontSize":return function(e){this.state.font=this.state.font.replace(/\d+\.?\d*px/,e+"px"),this.state.fontSize=e,this.actions.push({method:t,data:[e]})};default:return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.actions.push({method:t,data:n})}}}j.prototype[t]=e(t)}))}.call(this,n("0dd1"),n("3ad9")["default"])},"324c":function(t,e,n){},"332a":function(t,e,n){"use strict";n.r(e),n.d(e,"redirectTo",(function(){return u})),n.d(e,"reLaunch",(function(){return l})),n.d(e,"navigateTo",(function(){return f})),n.d(e,"switchTab",(function(){return h})),n.d(e,"navigateBack",(function(){return d})),n.d(e,"preloadPage",(function(){return p})),n.d(e,"unPreloadPage",(function(){return g}));var i,r=n("0f74");function o(t){if("string"!==typeof t)return t;var e=t.indexOf("?");if(-1===e)return t;var n=t.substr(e+1).trim().replace(/^(\?|#|&)/,"");if(!n)return t;t=t.substr(0,e);var i=[];return n.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),n=e.shift(),r=e.length>0?e.join("="):"";i.push(n+"="+encodeURIComponent(r))})),i.length?t+"?"+i.join("&"):t}function a(t){return function(e,n){e=Object(r["a"])(e);var a=e.split("?")[0],s=__uniRoutes.find((function(t){var e=t.path,n=t.alias;return e===a||n===a}));if(!s)return"page `"+e+"` is not found";if("navigateTo"===t||"redirectTo"===t){if(s.meta.isTabBar)return"can not ".concat(t," a tabbar page")}else if("switchTab"===t&&!s.meta.isTabBar)return"can not switch to no-tabBar page";if("switchTab"!==t&&"preloadPage"!==t||!s.meta.isTabBar||"appLaunch"===n.openType||(e=a),s.meta.isEntry&&(e=e.replace(s.alias,"/")),n.url=o(e),"unPreloadPage"!==t)if("preloadPage"!==t){if(i===e)return"".concat(i," locked");__uniConfig.ready&&!1!==__uniConfig.enableNavigatorLock&&(i=e)}else if(s.meta.isTabBar){var c=getCurrentPages(!0),u=(s.alias||s.path).substr(1);if(c.find((function(t){return t.route===u})))return"tabBar page `"+u+"` already exists"}}}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({url:{type:String,required:!0,validator:a(t)},beforeAll:function(){i=""}},e)}function c(t){return{animationType:{type:String,validator:function(e){if(e&&-1===t.indexOf(e))return"`"+e+"` is not supported for `animationType` (supported values are: `"+t.join("`|`")+"`)"}},animationDuration:{type:Number}}}var u=s("redirectTo"),l=s("reLaunch"),f=s("navigateTo",c(["slide-in-right","slide-in-left","slide-in-top","slide-in-bottom","fade-in","zoom-out","zoom-fade-out","pop-in","none"])),h=s("switchTab"),d=Object.assign({delta:{type:Number,validator:function(t,e){t=parseInt(t)||1,e.delta=Math.min(getCurrentPages().length-1,t)}}},c(["slide-out-right","slide-out-left","slide-out-top","slide-out-bottom","fade-out","zoom-in","zoom-fade-in","pop-out","none"])),p={url:{type:String,required:!0,validator:a("preloadPage")}},g={url:{type:String,required:!0,validator:a("unPreloadPage")}}},"33b4":function(t,e,n){},"33ed":function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));var i,r=n("4a59");function o(t){t.preventDefault()}function a(t){var e=t.scrollTop,n=t.duration,i=document.documentElement,r=i.clientHeight,o=i.scrollHeight;function a(t){if(t<=0)window.scrollTo(0,e);else{var n=e-window.scrollY;requestAnimationFrame((function(){window.scrollTo(0,window.scrollY+n/t*10),a(t-10)}))}}e=Math.min(e,o-r),0!==n?window.scrollY!==e&&a(n):i.scrollTop=document.body.scrollTop=e}var s=0;function c(e,n){var o=n.enablePageScroll,a=n.enablePageReachBottom,c=n.onReachBottomDistance,u=n.enableTransparentTitleNView,l=!1,f=!1,h=!0;function d(){var t=document.documentElement.scrollHeight,e=window.innerHeight,n=window.scrollY,i=n>0&&t>e&&n+e+c>=t,r=Math.abs(t-s)>c;return!i||f&&!r?(!i&&f&&(f=!1),!1):(s=t,f=!0,!0)}function p(){var n=getCurrentPages();if(n.length&&n[n.length-1].$page.id===e){var s=window.pageYOffset;o&&Object(r["a"])("onPageScroll",{scrollTop:s},e),u&&t.emit("onPageScroll",{scrollTop:s}),a&&h&&(c()||(i=setTimeout(c,300))),l=!1}function c(){if(d())return Object(r["a"])("onReachBottom",{},e),h=!1,setTimeout((function(){h=!0}),350),!0}}return function(){clearTimeout(i),l||requestAnimationFrame(p),l=!0}}}).call(this,n("501c"))},"34b2":function(t,e,n){"use strict";(function(t){function i(){return window.location.protocol+"//"+window.location.host}function r(e,n){var r=e.src,o=t,a=o.invokeCallbackHandler,s=new Image,c=r;s.onload=function(){a(n,{errMsg:"getImageInfo:ok",width:s.naturalWidth,height:s.naturalHeight,path:0===c.indexOf("/")?i()+c:c})},s.onerror=function(t){a(n,{errMsg:"getImageInfo:fail"})},s.src=r}n.d(e,"a",(function(){return r}))}).call(this,n("0dd1"))},3590:function(t,e,n){},3648:function(t,e,n){"use strict";n.r(e),n.d(e,"canIUse",(function(){return a}));var i=n("f2b3");function r(t){return window.CSS&&window.CSS.supports&&window.CSS.supports(t)}var o={"css.var":r("--a:0"),"css.env":r("top:env(a)"),"css.constant":r("top:constant(a)")};function a(t){return!Object(i["h"])(o,t)||o[t]}},3676:function(t,e,n){"use strict";n.r(e),n.d(e,"getRecorderManager",(function(){return l}));var i=n("db70");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var s,c={pause:null,resume:null,start:null,stop:null,error:null},u=function(){function t(){r(this,t),Object(i["d"])("onRecorderStateChange",(function(t){var e=t.state;delete t.state,delete t.errMsg,"function"===typeof c[e]&&c[e](t)}))}return a(t,[{key:"onError",value:function(t){c.error=t}},{key:"onFrameRecorded",value:function(t){}},{key:"onInterruptionBegin",value:function(t){}},{key:"onInterruptionEnd",value:function(t){}},{key:"onPause",value:function(t){c.pause=t}},{key:"onResume",value:function(t){c.resume=t}},{key:"onStart",value:function(t){c.start=t}},{key:"onStop",value:function(t){c.stop=t}},{key:"pause",value:function(){Object(i["c"])("operateRecorder",{operationType:"pause"})}},{key:"resume",value:function(){Object(i["c"])("operateRecorder",{operationType:"resume"})}},{key:"start",value:function(t){Object(i["c"])("operateRecorder",Object.assign({},t,{operationType:"start"}))}},{key:"stop",value:function(){Object(i["c"])("operateRecorder",{operationType:"stop"})}}]),t}();function l(){return s||(s=new u)}},"3ad9":function(t,e,n){"use strict";n.r(e),function(t){var n=Array.prototype.unshift;function i(t){return n.call(t,"[system]"),t}function r(e){return function(){var n=!0;"debug"!==e||__uniConfig.debug||(n=!1),n&&t.console[e].apply(t.console,i(arguments))}}e["default"]={log:r("log"),info:r("info"),warn:r("warn"),debug:r("debug"),error:r("error")}}.call(this,n("c8ba"))},"3b54":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var i=n("e2e2"),r=t,o=r.invokeCallbackHandler;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.filePath,n=arguments.length>1?arguments[1]:void 0;Object(i["c"])(e).then((function(t){o(n,{errMsg:"getFileInfo:ok",size:t.size})})).catch((function(t){o(n,{errMsg:"getFileInfo:fail 文件["+e+"] getFileInfo 失败:"+t.message})}))}}).call(this,n("0dd1"))},"3bfb":function(t,e,n){"use strict";n.r(e),n.d(e,"createAudioContext",(function(){return r})),n.d(e,"createVideoContext",(function(){return o})),n.d(e,"createMapContext",(function(){return a})),n.d(e,"createCanvasContext",(function(){return s}));var i=[{name:"id",type:String,required:!0}],r=i,o=i,a=i,s=[{name:"canvasId",type:String,required:!0},{name:"componentInstance",type:Object}]},"3c79":function(t,e,n){},"3d1f":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("62b5"),r=n("a741");function o(t,e){e.getApp;var n=e.getCurrentPages;function o(t){return function(e,i){i=parseInt(i);var o=n(),a=o.find((function(t){return t.$page.id===i}));a&&Object(r["b"])(a,t,e)}}var a=Object(i["a"])("requestComponentInfo");function s(t){var e=t.reqId,n=t.res,i=a.pop(e);i&&i(n)}var c=Object(i["a"])("requestComponentObserver");function u(t){var e=t.reqId,n=t.reqEnd,i=t.res,r=c.get(e);if(r){if(n)return void c.pop(e);r(i)}}t("onPageReady",o("onReady")),t("onPageScroll",o("onPageScroll")),t("onReachBottom",o("onReachBottom")),t("onRequestComponentInfo",s),t("onRequestComponentObserver",u)}},"3d64":function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c}));var i=t,r=i.invokeCallbackHandler,o=[];function a(){var t=c(),e=t.networkType;o.forEach((function(t){r(t,{errMsg:"onNetworkStatusChange:ok",isConnected:"none"!==e,networkType:e})}))}function s(t){var e=navigator.connection||navigator.webkitConnection;o.push(t),e?e.addEventListener("change",a):(window.addEventListener("offline",a),window.addEventListener("online",a))}function c(){var t=navigator.connection||navigator.webkitConnection,e="unknown";return t?(e=t.type,"cellular"===e&&t.effectiveType?e=t.effectiveType.replace("slow-",""):["none","wifi"].includes(e)||(e="unknown")):!1===navigator.onLine&&(e="none"),{errMsg:"getNetworkType:ok",networkType:e}}}).call(this,n("0dd1"))},"3da9":function(t,e,n){"use strict";var i=n("bfbd"),r=n.n(i);r.a},"3e8c":function(t,e,n){"use strict";n.r(e);var i,r,o={name:"ResizeSensor",props:{initial:{type:[Boolean,String],default:!1}},data:function(){return{size:{width:-1,height:-1}}},watch:{size:{deep:!0,handler:function(t){this.$emit("resize",Object.assign({},t))}}},mounted:function(){!0===this.initial&&this.$nextTick(this.update),this.$el.offsetParent!==this.$el.parentNode&&(this.$el.parentNode.style.position="relative"),"AnimationEvent"in window||this.reset()},methods:{reset:function(){var t=this.$el.firstChild,e=this.$el.lastChild;t.scrollLeft=1e5,t.scrollTop=1e5,e.scrollLeft=1e5,e.scrollTop=1e5},update:function(){this.size.width=this.$el.offsetWidth,this.size.height=this.$el.offsetHeight,this.reset()}},render:function(t){return t("uni-resize-sensor",{on:{"~animationstart":this.update}},[t("div",{on:{scroll:this.update}},[t("div")]),t("div",{on:{scroll:this.update}},[t("div")])])}},a=o,s=(n("64d0"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},"3f7e":function(t,e,n){"use strict";var i=n("e692"),r=n.n(i);r.a},"439a":function(t,e,n){"use strict";n.r(e),n.d(e,"downloadFile",(function(){return i}));var i={url:{type:String,required:!0},header:{type:Object,validator:function(t,e){e.header=t||{}}}}},"442e":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var i=n("5129"),r=n.n(i),o=n("85b6");function a(e){e.config.errorHandler=function(n,i,r){e.util.warn("Error in ".concat(r,': "').concat(n.toString(),'"'),i);var a="function"===typeof getApp&&getApp();a&&Object(o["a"])(a.$options,"onError")?a.__call_hook("onError",n):t.error(n)};var n=e.config.isReservedTag;e.config.isReservedTag=function(t){return-1!==r.a.indexOf(t)||n(t)},e.config.ignoredElements=r.a;var i=e.config.getTagNamespace,a=["switch","image","text","view"];e.config.getTagNamespace=function(t){return!~a.indexOf(t)&&i(t)}}}).call(this,n("3ad9")["default"])},4486:function(t,e,n){"use strict";var i={};n.r(i),n.d(i,"operateVideoPlayer",(function(){return c["a"]})),n.d(i,"getMenuButtonBoundingClientRect",(function(){return u})),n.d(i,"$on",(function(){return h})),n.d(i,"$off",(function(){return d})),n.d(i,"$once",(function(){return p})),n.d(i,"$emit",(function(){return g})),n.d(i,"createAudioContext",(function(){return m["a"]})),n.d(i,"base64ToTempFilePath",(function(){return v["a"]})),n.d(i,"createInnerAudioContext",(function(){return x})),n.d(i,"operateMapPlayer",(function(){return E["a"]})),n.d(i,"enableAccelerometer",(function(){return j})),n.d(i,"onCompassChange",(function(){return $["a"]})),n.d(i,"startCompass",(function(){return $["b"]})),n.d(i,"stopCompass",(function(){return $["c"]})),n.d(i,"getSystemInfoSync",(function(){return z})),n.d(i,"getSystemInfo",(function(){return F})),n.d(i,"hideKeyboard",(function(){return q})),n.d(i,"makePhoneCall",(function(){return H})),n.d(i,"onNetworkStatusChange",(function(){return V["b"]})),n.d(i,"getNetworkType",(function(){return V["a"]})),n.d(i,"vibrateLong",(function(){return Y})),n.d(i,"vibrateShort",(function(){return X})),n.d(i,"getFileInfo",(function(){return W["a"]})),n.d(i,"openDocument",(function(){return G["a"]})),n.d(i,"chooseLocation",(function(){return K["a"]})),n.d(i,"getLocation",(function(){return Q["a"]})),n.d(i,"openLocation",(function(){return Z["a"]})),n.d(i,"chooseImage",(function(){return J["a"]})),n.d(i,"chooseVideo",(function(){return tt["a"]})),n.d(i,"getImageInfo",(function(){return et["a"]})),n.d(i,"previewImage",(function(){return nt["a"]})),n.d(i,"downloadFile",(function(){return it["a"]})),n.d(i,"request",(function(){return rt["a"]})),n.d(i,"connectSocket",(function(){return ot["b"]})),n.d(i,"sendSocketMessage",(function(){return ot["g"]})),n.d(i,"closeSocket",(function(){return ot["a"]})),n.d(i,"onSocketOpen",(function(){return ot["f"]})),n.d(i,"onSocketError",(function(){return ot["d"]})),n.d(i,"onSocketMessage",(function(){return ot["e"]})),n.d(i,"onSocketClose",(function(){return ot["c"]})),n.d(i,"uploadFile",(function(){return at["a"]})),n.d(i,"getProvider",(function(){return st})),n.d(i,"redirectTo",(function(){return ct["e"]})),n.d(i,"navigateTo",(function(){return ct["b"]})),n.d(i,"navigateBack",(function(){return ct["a"]})),n.d(i,"reLaunch",(function(){return ct["d"]})),n.d(i,"switchTab",(function(){return ct["f"]})),n.d(i,"preloadPage",(function(){return ct["c"]})),n.d(i,"setStorage",(function(){return ht})),n.d(i,"setStorageSync",(function(){return dt})),n.d(i,"getStorage",(function(){return pt})),n.d(i,"getStorageSync",(function(){return gt})),n.d(i,"removeStorage",(function(){return mt})),n.d(i,"removeStorageSync",(function(){return vt})),n.d(i,"clearStorage",(function(){return bt})),n.d(i,"clearStorageSync",(function(){return yt})),n.d(i,"getStorageInfo",(function(){return _t})),n.d(i,"getStorageInfoSync",(function(){return wt})),n.d(i,"setNavigationBarColor",(function(){return St["b"]})),n.d(i,"showNavigationBarLoading",(function(){return St["d"]})),n.d(i,"hideNavigationBarLoading",(function(){return St["a"]})),n.d(i,"setNavigationBarTitle",(function(){return St["c"]})),n.d(i,"showModal",(function(){return kt["e"]})),n.d(i,"showToast",(function(){return kt["f"]})),n.d(i,"hideToast",(function(){return kt["b"]})),n.d(i,"showLoading",(function(){return kt["d"]})),n.d(i,"hideLoading",(function(){return kt["a"]})),n.d(i,"showActionSheet",(function(){return kt["c"]})),n.d(i,"setPullDownRefreshPageId",(function(){return Ct["a"]})),n.d(i,"startPullDownRefresh",(function(){return Ct["b"]})),n.d(i,"stopPullDownRefresh",(function(){return Ct["c"]})),n.d(i,"requestComponentInfo",(function(){return Tt["a"]})),n.d(i,"setTabBarItem",(function(){return At})),n.d(i,"setTabBarStyle",(function(){return It})),n.d(i,"hideTabBar",(function(){return $t})),n.d(i,"showTabBar",(function(){return Pt})),n.d(i,"hideTabBarRedDot",(function(){return Bt})),n.d(i,"showTabBarRedDot",(function(){return Lt})),n.d(i,"removeTabBarBadge",(function(){return Nt})),n.d(i,"setTabBarBadge",(function(){return Dt})),n.d(i,"onWindowResize",(function(){return Rt["b"]})),n.d(i,"offWindowResize",(function(){return Rt["a"]}));var r=n("8bbf"),o=n.n(r),a=o.a.component;if(o.a.component=function(t,e){return 0===t.indexOf("Se")&&e._Ctor&&delete e._Ctor,a.call(this,t,e)},"undefined"!==typeof SEAppComponents&&o.a.use(SEAppComponents.default),"undefined"!==typeof Seapp){var s=Seapp.observable([]);o.a.prototype.$sysComponents=Seapp.prototype.$sysComponents=s,o.a.prototype.$rmSysComponents=Seapp.prototype.$rmSysComponents=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){var e=s.indexOf(t);e>-1&&s.splice(e,1)}))}}var c=n("8af4");function u(){return qh.getMenuButtonBoundingClientRect()}var l=new o.a;function f(t,e,n){return t[e].apply(t,n)}function h(){return f(l,"$on",Array.prototype.slice.call(arguments))}function d(){return f(l,"$off",Array.prototype.slice.call(arguments))}function p(){return f(l,"$once",Array.prototype.slice.call(arguments))}function g(){return f(l,"$emit",Array.prototype.slice.call(arguments))}var m=n("924c"),v=n("e2d4"),b=n("cb0f");function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function w(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=["onCanplay","onPlay","onPause","onStop","onEnded","onTimeUpdate","onError","onWaiting","onSeeking","onSeeked"],C=["offCanplay","offPlay","offPause","offStop","offEnded","offTimeUpdate","offError","offWaiting","offSeeking","offSeeked"],T=function(){function t(){var e=this;y(this,t),S(this,"_audio",void 0),S(this,"_stoping",void 0),S(this,"startTime",void 0),S(this,"_events",void 0),S(this,"_src",void 0);var n=this._audio=new Audio;this._stoping=!1;var i=["src","autoplay","loop","duration","currentTime","paused","volume"];i.forEach((function(t){Object.defineProperty(e,t,{set:"src"===t?function(t){return n.src=Object(b["a"])(t),e._src=t,t}:function(e){return n[t]=e,e},get:"src"===t?function(){return e._src}:function(){return n[t]}})})),this.startTime=0,Object.defineProperty(this,"obeyMuteSwitch",{set:function(t){return!1},get:function(){return!1}}),Object.defineProperty(this,"buffered",{get:function(){var t=n.buffered;return t.length?t.end(t.length-1):0}}),this._events={},k.forEach((function(t){e._events[t]=[]})),n.addEventListener("loadedmetadata",(function(){var t=Number(e.startTime)||0;t>0&&(n.currentTime=t)}));var r=["canplay","play","pause","ended","timeUpdate","error","waiting","seeking","seeked"],o=["pause","seeking","seeked","timeUpdate"];r.forEach((function(t){n.addEventListener(t.toLowerCase(),(function(){e._stoping&&o.indexOf(t)>=0||e._events["on".concat(t.substr(0,1).toUpperCase()).concat(t.substr(1))].forEach((function(t){t()}))}),!1)}))}return w(t,[{key:"play",value:function(){this._stoping=!1,this._audio.play()}},{key:"pause",value:function(){this._audio.pause()}},{key:"stop",value:function(){this._stoping=!0,this._audio.pause(),this._audio.currentTime=0,this._events.onStop.forEach((function(t){t()}))}},{key:"seek",value:function(t){this._stoping=!1,t=Number(t),"number"!==typeof t||isNaN(t)||(this._audio.currentTime=t)}},{key:"destroy",value:function(){this.stop()}}]),t}();function x(){return new T}k.forEach((function(t){T.prototype[t]=function(e){"function"===typeof e&&this._events[t].push(e)}})),C.forEach((function(t){T.prototype[t]=function(e){var n=this._events[t.replace("off","on")],i=n.indexOf(e);i>=0&&n.splice(i,1)}}));var O,E=n("0758"),M=n("b865");function j(t){var e=t.enable;return e?A():I()}function A(){if(window.DeviceMotionEvent)return O=function(t){var e=t.acceleration||t.accelerationIncludingGravity;Object(M["a"])("onAccelerometerChange",{x:e.x||0,y:e.y||0,z:e.z||0,errMsg:"onAccelerometerChange:ok"})},window.addEventListener("devicemotion",O,!1),{};throw new Error("device nonsupport devicemotion")}function I(){return O&&(window.removeEventListener("devicemotion",O,!1),O=null),{}}var $=n("f7b4"),P=n("a470"),B=n("d8c8"),L=n.n(B),N=navigator.userAgent,D=/android/i.test(N),R=/iphone|ipad|ipod/i.test(N);function z(){var t,e,n,i=window.screen,r=window.devicePixelRatio,o=90===Math.abs(window.orientation),a="number"===typeof window.orientation?Math[o?"max":"min"](i.width,i.height):i.width,s="number"===typeof window.orientation?Math[o?"min":"max"](i.height,i.width):i.height,c=Math.min(window.innerWidth,document.documentElement.clientWidth,a),u=window.innerHeight,l=navigator.language,f=L.a.top;if(R){t="iOS";var h=N.match(/OS\s([\w_]+)\slike/);h&&(e=h[1].replace(/_/g,"."));var d=N.match(/\(([a-zA-Z]+);/);d&&(n=d[1])}else if(D){t="Android";var p=N.match(/Android[\s/]([\w\.]+)[;\s]/);p&&(e=p[1]);for(var g=N.match(/\((.+?)\)/),m=g?g[1].split(";"):N.split(" "),v=[/\bAndroid\b/i,/\bLinux\b/i,/\bU\b/i,/^\s?[a-z][a-z]$/i,/^\s?[a-z][a-z]-[a-z][a-z]$/i,/\bwv\b/i,/\/[\d\.,]+$/,/^\s?[\d\.,]+$/,/\bBrowser\b/i,/\bMobile\b/i],b=0;b<m.length;b++){var y=m[b];if(y.indexOf("Build")>0){n=y.split("Build")[0].trim();break}for(var _=void 0,w=0;w<v.length;w++)if(v[w].test(y)){_=!0;break}if(!_){n=y.trim();break}}}else t="Other",e="0";var S="".concat(t," ").concat(e),k=t.toLocaleLowerCase(),C={left:L.a.left,right:c-L.a.right,top:L.a.top,bottom:u-L.a.bottom,width:c-L.a.left-L.a.right,height:u-L.a.top-L.a.bottom},T=Object(P["a"])(),x=T.top,O=T.bottom;return u-=x,u-=O,{windowTop:x,windowBottom:O,windowWidth:c,windowHeight:u,pixelRatio:r,screenWidth:a,screenHeight:s,language:l,statusBarHeight:f,system:S,platform:k,model:n,safeArea:C,safeAreaInsets:{top:L.a.top,right:L.a.right,bottom:L.a.bottom,left:L.a.left}}}function F(){return z()}function q(){var t=document.activeElement;!t||"TEXTAREA"!==t.tagName&&"INPUT"!==t.tagName||t.blur()}function H(t){var e=t.phoneNumber;return window.location.href="tel:".concat(e),{errMsg:"makePhoneCall:ok"}}var V=n("3d64"),U=!!window.navigator.vibrate;function Y(){return U&&window.navigator.vibrate(400)?{errMsg:"vibrateLong:ok"}:{errMsg:"vibrateLong:fail"}}function X(){return U&&window.navigator.vibrate(15)?{errMsg:"vibrateShort:ok"}:{errMsg:"vibrateShort:fail"}}var W=n("3b54"),G=n("e826"),K=n("be14"),Q=n("0554"),Z=n("6575"),J=n("d5be"),tt=n("8ce3"),et=n("34b2"),nt=n("9e56"),it=n("4f43"),rt=n("1a12"),ot=n("893e"),at=n("7d18");function st(t){var e=t.service;return{service:e,provider:[]}}var ct=n("1a8c");function ut(t){return ut="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ut(t)}var lt="uni-storage-keys";function ft(t){var e=["object","string","number","boolean","undefined"];try{var n="string"===typeof t?JSON.parse(t):t,i=n.type;if(e.indexOf(i)>=0){var r=Object.keys(n);if(2===r.length&&"data"in n){if(ut(n.data)===i)return n.data;if("object"===i&&/^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(n.data))return new Date(n.data)}else if(1===r.length)return""}}catch(o){}}function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=t.data,i=ut(n),r="string"===i?n:JSON.stringify({type:i,data:n});try{localStorage.setItem(e,r)}catch(o){return{errMsg:"setStorage:fail ".concat(o)}}return{errMsg:"setStorage:ok"}}function dt(t,e){ht({key:t,data:e})}function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=localStorage&&localStorage.getItem(e);if("string"!==typeof n)return{data:"",errMsg:"getStorage:fail"};var i=n;try{var r=JSON.parse(n),o=ft(r);void 0!==o&&(i=o)}catch(a){}return{data:i,errMsg:"getStorage:ok"}}function gt(t){var e=pt({key:t});return e.data}function mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key;return localStorage&&localStorage.removeItem(e),{errMsg:"removeStorage:ok"}}function vt(t){mt({key:t})}function bt(){return localStorage&&localStorage.clear(),{errMsg:"clearStorage:ok"}}function yt(){bt()}function _t(){for(var t=localStorage&&localStorage.length||0,e=[],n=0,i=0;i<t;i++){var r=localStorage.key(i),o=localStorage.getItem(r);n+=r.length+o.length,r!==lt&&e.push(r)}return{keys:e,currentSize:Math.ceil(2*n/1024),limitSize:Number.MAX_VALUE,errMsg:"getStorageInfo:ok"}}function wt(){var t=_t();return delete t.errMsg,t}var St=n("5964"),kt=n("56e9"),Ct=n("45db"),Tt=n("09e5"),xt=n("f2b3"),Ot=["text","iconPath","selectedIconPath"],Et=["color","selectedColor","backgroundColor","borderStyle"],Mt=["badge","redDot"];function jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=getApp();if(n){var i=!1,r=getCurrentPages();if(r.length?r[r.length-1].$page.meta.isTabBar&&(i=!0):n.$children[0].hasTabBar&&(i=!0),!i)return{errMsg:"".concat(t,":fail not TabBar page")};var o=e.index,a=n.$children[0].tabBar;if(o>=__uniConfig.tabBar.list.length)return{errMsg:"".concat(t,":fail tabbar item not found")};switch(t){case"showTabBar":n.$children[0].hideTabBar=!1;break;case"hideTabBar":n.$children[0].hideTabBar=!0;break;case"setTabBarItem":Object(xt["n"])(a.list[o],Ot,e);break;case"setTabBarStyle":Object(xt["n"])(a,Et,e);break;case"showTabBarRedDot":Object(xt["n"])(a.list[o],Mt,{badge:"",redDot:!0});break;case"setTabBarBadge":Object(xt["n"])(a.list[o],Mt,{badge:e.text,redDot:!0});break;case"hideTabBarRedDot":case"removeTabBarBadge":Object(xt["n"])(a.list[o],Mt,{badge:"",redDot:!1});break}}return{}}function At(t){return jt("setTabBarItem",t)}function It(t){return jt("setTabBarStyle",t)}function $t(t){return jt("hideTabBar",t)}function Pt(t){return jt("showTabBar",t)}function Bt(t){return jt("hideTabBarRedDot",t)}function Lt(t){return jt("showTabBarRedDot",t)}function Nt(t){return jt("removeTabBarBadge",t)}function Dt(t){return jt("setTabBarBadge",t)}var Rt=n("e8b5");e["a"]=i},"454d":function(t,e,n){"use strict";n.r(e),n.d(e,"removeTabBarBadge",(function(){return o})),n.d(e,"showTabBarRedDot",(function(){return a})),n.d(e,"hideTabBarRedDot",(function(){return s})),n.d(e,"onTabBarMidButtonTap",(function(){return u}));var i=n("db70"),r=n("a118");function o(t){var e=t.index;return Object(i["c"])("setTabBarBadge",{index:e,type:"none"})}function a(t){var e=t.index;return Object(i["c"])("setTabBarBadge",{index:e,type:"redDot"})}var s=o,c=[];function u(t){c.push(t)}Object(i["d"])("onTabBarMidButtonTap",(function(t){c.forEach((function(e){Object(r["a"])(e,t)}))}))},"45d2":function(t,e,n){"use strict";n.r(e),n.d(e,"upx2px",(function(){return u}));var i=1e-4,r=750,o=!1,a=0,s=0;function c(){var t=uni.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;a=i,s=n,o="ios"===e}function u(t,e){if(0===a&&c(),t=Number(t),0===t)return 0;var n=t/r*(e||a);return n<0&&(n=-n),n=Math.floor(n+i),0===n&&(n=1!==s&&o?.5:1),t<0?-n:n}},"45db":function(t,e,n){"use strict";(function(t){var i;function r(t){i=t}function o(){i&&t.emit(i+".stopPullDownRefresh",{},i);var e=getCurrentPages();return e.length&&(i=e[e.length-1].$page.id,t.emit(i+".startPullDownRefresh",{},i)),{}}function a(){if(i)t.emit(i+".stopPullDownRefresh",{},i),i=null;else{var e=getCurrentPages();e.length&&(i=e[e.length-1].$page.id,t.emit(i+".stopPullDownRefresh",{},i))}return{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}))}).call(this,n("0dd1"))},"4a59":function(t,e,n){"use strict";(function(t){function i(e,n,i){t.UniServiceJSBridge.subscribeHandler(e,n,i)}n.d(e,"a",(function(){return i}))}).call(this,n("c8ba"))},"4ca9":function(t,e,n){"use strict";n.r(e),function(t){var i=n("6389"),r=n.n(i),o=n("85b6"),a=n("abbf"),s=n("0784"),c=n("aa92"),u=n("02c9"),l=n("23e5");function f(t){var e=0;return t.forEach((function(t){t.meta.id&&e++})),e}function h(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":decodeURI(t.slice(e+1))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}e["default"]={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.routes;e.config.devtools&&"undefined"!==typeof window&&-1!==window.navigator.userAgent.toLowerCase().indexOf("hbuilderx")&&(e.config.devtools=!1),Object(u["a"])(e),Object(c["a"])(e),"undefined"!==typeof __UNI_ROUTER_BASE__&&(__uniConfig.router.base=__UNI_ROUTER_BASE__);var p=f(i),g=new r.a({id:p,mode:__uniConfig.router.mode,base:__uniConfig.router.base,routes:i,scrollBehavior:function(t,e,n){if(n)return n;if(t&&e&&t.meta.isTabBar&&e.meta.isTabBar){var i=Object(l["b"])(t.params.__id__);if(i)return i}return{x:0,y:0}}}),m=[],v=g.match("history"===__uniConfig.router.mode?d(__uniConfig.router.base):h());if(v.meta.name&&(v.meta.id?m.push(v.meta.name+"-"+v.meta.id):m.push(v.meta.name+"-"+(p+1))),v.meta&&v.meta.name&&(document.body.className="uni-body "+v.meta.name,v.meta.isNVue)){var b="nvue-dir-"+__uniConfig.nvue["flex-direction"];document.body.setAttribute("nvue",""),document.body.setAttribute(b,"")}e.mixin({beforeCreate:function(){var e=this.$options;if("app"===e.mpType){e.data=function(){return{keepAliveInclude:m}};var n=Object(a["a"])(i,v);Object.keys(n).forEach((function(t){e[t]=e[t]?[].concat(n[t],e[t]):[n[t]]})),e.router=g,Array.isArray(e.onError)&&0!==e.onError.length||(e.onError=[function(e){t.error(e)}])}else if(Object(o["b"])(this)){var r=Object(s["a"])();Object.keys(r).forEach((function(t){e.mpOptions?e[t]=e[t]?[].concat(e[t],r[t]):[r[t]]:e[t]=e[t]?[].concat(r[t],e[t]):[r[t]]}))}else this.$parent&&this.$parent.__page__&&(this.__page__=this.$parent.__page__)}}),Object.defineProperty(e.prototype,"$page",{get:function(){return this.__page__}}),e.prototype.createSelectorQuery=function(){return uni.createSelectorQuery().in(this)},e.prototype.createIntersectionObserver=function(t){return uni.createIntersectionObserver(this,t)},e.use(r.a)}}}.call(this,n("3ad9")["default"])},"4da7":function(t,e,n){"use strict";n.r(e);var i,r,o=n("5881"),a=o["a"],s=(n("c8ed"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},"4e0b":function(t,e,n){},"4e7c":function(t,e,n){"use strict";n.r(e),n.d(e,"getProvider",(function(){return r}));var i={OAUTH:"OAUTH",SHARE:"SHARE",PAYMENT:"PAYMENT",PUSH:"PUSH"},r={service:{type:String,required:!0,validator:function(t,e){if(t=(t||"").toUpperCase(),t&&Object.values(i).indexOf(t)<0)return"service error"}}}},"4f1c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-switch",t._g({attrs:{disabled:t.disabled},on:{click:t._onClick}},t.$listeners),[n("div",{staticClass:"uni-switch-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"switch"===t.type,expression:"type === 'switch'"}],staticClass:"uni-switch-input",class:[t.switchChecked?"uni-switch-input-checked":""],style:{backgroundColor:t.switchChecked?t.color:"#DFDFDF",borderColor:t.switchChecked?t.color:"#DFDFDF"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:"checkbox"===t.type,expression:"type === 'checkbox'"}],staticClass:"uni-checkbox-input",class:[t.switchChecked?"uni-checkbox-input-checked":""],style:{color:t.color}})])])},r=[],o=n("8af1"),a={name:"Switch",mixins:[o["b"],o["e"]],props:{name:{type:String,default:""},checked:{type:[Boolean,String],default:!1},type:{type:String,default:"switch"},id:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},color:{type:String,default:"#007aff"}},data:function(){return{switchChecked:this.checked}},watch:{checked:function(t){this.switchChecked=t}},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},beforeDestroy:function(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},listeners:{"label-click":"_onClick","@label-click":"_onClick"},methods:{_onClick:function(t){this.disabled||(this.switchChecked=!this.switchChecked,this.$trigger("change",t,{value:this.switchChecked}))},_resetFormData:function(){this.switchChecked=!1},_getFormData:function(){var t={};return""!==this.name&&(t.value=this.switchChecked,t.key=this.name),t}}},s=a,c=(n("a5ec"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"4f43":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var i=n("e2e2");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e){r(this,t),s(this,"_xhr",void 0),s(this,"_callbacks",[]),this._xhr=e}return a(t,[{key:"onProgressUpdate",value:function(t){"function"===typeof t&&this._callbacks.push(t)}},{key:"offProgressUpdate",value:function(t){var e=this._callbacks.indexOf(t);e>=0&&this._callbacks.splice(e,1)}},{key:"abort",value:function(){this._xhr&&(this._xhr.abort(),delete this._xhr)}}]),t}();function u(e,n){var r,o=e.url,a=e.header,s=__uniConfig.networkTimeout&&__uniConfig.networkTimeout.downloadFile||6e4,u=t,l=u.invokeCallbackHandler,f=new XMLHttpRequest,h=new c(f);return f.open("GET",o,!0),Object.keys(a).forEach((function(t){f.setRequestHeader(t,a[t])})),f.responseType="blob",f.onload=function(){clearTimeout(r);var t=f.status,e=this.response;l(n,{errMsg:"downloadFile:ok",statusCode:t,tempFilePath:Object(i["a"])(e)})},f.onabort=function(){clearTimeout(r),l(n,{errMsg:"downloadFile:fail abort"})},f.onerror=function(){clearTimeout(r),l(n,{errMsg:"downloadFile:fail"})},f.onprogress=function(t){h._callbacks.forEach((function(e){var n=t.loaded,i=t.total,r=Math.round(n/i*100);e({progress:r,totalBytesWritten:n,totalBytesExpectedToWrite:i})}))},f.send(),r=setTimeout((function(){f.onprogress=f.onload=f.onabort=f.onerror=null,h.abort(),l(n,{errMsg:"downloadFile:fail timeout"})}),s),h}}).call(this,n("0dd1"))},"4f53":function(t,e,n){"use strict";n.r(e),n.d(e,"saveImageToPhotosAlbum",(function(){return r}));var i=n("cb0f"),r={filePath:{type:String,required:!0,validator:function(t,e){e.filePath=Object(i["a"])(t)}}}},"4fef":function(t,e,n){"use strict";var i=n("7572"),r=n.n(i);r.a},"501c":function(t,e,n){"use strict";n.r(e),n.d(e,"on",(function(){return g})),n.d(e,"off",(function(){return m})),n.d(e,"once",(function(){return v})),n.d(e,"emit",(function(){return b})),n.d(e,"subscribe",(function(){return y})),n.d(e,"unsubscribe",(function(){return _})),n.d(e,"subscribeHandler",(function(){return w})),n.d(e,"publishHandler",(function(){return d["a"]}));var i=n("8bbf"),r=n.n(i);function o(t){var e=t.pageStyle,n=t.rootFontSize,i=document.querySelector("uni-page-body")||document.body;i.setAttribute("style",e),n&&document.documentElement.style.fontSize!==n&&(document.documentElement.style.fontSize=n)}var a=n("6bdf"),s=n("5dc1"),c={setPageMeta:o,requestComponentInfo:a["a"],requestComponentObserver:s["b"],destroyComponentObserver:s["a"]},u=n("33ed"),l=n("7107"),f=n("764a");function h(t){Object.keys(c).forEach((function(e){t(e,c[e])})),t("pageScrollTo",u["c"]),t("loadFontFace",l["a"]),Object(f["a"])(t)}var d=n("4a59"),p=new r.a,g=p.$on.bind(p),m=p.$off.bind(p),v=p.$once.bind(p),b=p.$emit.bind(p);function y(t,e){return g("service."+t,e)}function _(t,e){return m("service."+t,e)}function w(t,e,n){b("service."+t,e,n)}h(y)},"50c5":function(t,e,n){},5129:function(t,e){t.exports=["uni-app","uni-tabbar","uni-page","uni-page-head","uni-page-wrapper","uni-page-body","uni-page-refresh","uni-actionsheet","uni-modal","uni-toast","uni-resize-sensor","uni-shadow-root","uni-ad","uni-audio","uni-button","uni-camera","uni-canvas","uni-checkbox","uni-checkbox-group","uni-cover-image","uni-cover-view","uni-editor","uni-form","uni-functional-page-navigator","uni-icon","uni-image","uni-input","uni-label","uni-live-player","uni-live-pusher","uni-map","uni-movable-area","uni-movable-view","uni-navigator","uni-official-account","uni-open-data","uni-picker","uni-picker-view","uni-picker-view-column","uni-progress","uni-radio","uni-radio-group","uni-rich-text","uni-scroll-view","uni-slider","uni-swiper","uni-swiper-item","uni-switch","uni-text","uni-textarea","uni-video","uni-view","uni-web-view"]},"515d":function(t,e,n){},5222:function(t,e,n){"use strict";(function(t){var i=n("5a56");e["a"]={name:"Toast",mixins:[i["default"]],props:{title:{type:String,default:""},icon:{default:"success",validator:function(t){return-1!==["success","loading","none"].indexOf(t)}},image:{type:String,default:""},duration:{type:Number,default:1500},mask:{type:Boolean,default:!1},visible:{type:Boolean,default:!1}},computed:{iconClass:function(){return"success"===this.icon?"uni-icon-success-no-circle":"loading"===this.icon?"uni-loading":""}},beforeUpdate:function(){this.visible&&(this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.emit("onHideToast")}),this.duration))}}}).call(this,n("0dd1"))},5363:function(t,e,n){"use strict";function i(t){this._drag=t,this._dragLog=Math.log(t),this._x=0,this._v=0,this._startTime=0}n.d(e,"a",(function(){return i})),i.prototype.set=function(t,e){this._x=t,this._v=e,this._startTime=(new Date).getTime()},i.prototype.setVelocityByEnd=function(t){this._v=(t-this._x)*this._dragLog/(Math.pow(this._drag,100)-1)},i.prototype.x=function(t){var e;return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),e=t===this._dt&&this._powDragDt?this._powDragDt:this._powDragDt=Math.pow(this._drag,t),this._dt=t,this._x+this._v*e/this._dragLog-this._v/this._dragLog},i.prototype.dx=function(t){var e;return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),e=t===this._dt&&this._powDragDt?this._powDragDt:this._powDragDt=Math.pow(this._drag,t),this._dt=t,this._v*e},i.prototype.done=function(){return Math.abs(this.dx())<3},i.prototype.reconfigure=function(t){var e=this.x(),n=this.dx();this._drag=t,this._dragLog=Math.log(t),this.set(e,n)},i.prototype.configuration=function(){var t=this;return[{label:"Friction",read:function(){return t._drag},write:function(e){t.reconfigure(e)},min:.001,max:.1,step:.001}]}},"54bc":function(t,e,n){},5513:function(t,e,n){"use strict";n.r(e);var i,r,o=n("ba15"),a=n("f2b3"),s={name:"Swiper",mixins:[o["a"]],props:{indicatorDots:{type:[Boolean,String],default:!1},vertical:{type:[Boolean,String],default:!1},autoplay:{type:[Boolean,String],default:!1},circular:{type:[Boolean,String],default:!1},interval:{type:[Number,String],default:5e3},duration:{type:[Number,String],default:500},current:{type:[Number,String],default:0},indicatorColor:{type:String,default:""},indicatorActiveColor:{type:String,default:""},previousMargin:{type:String,default:""},nextMargin:{type:String,default:""},currentItemId:{type:String,default:""},skipHiddenItemLayout:{type:[Boolean,String],default:!1},displayMultipleItems:{type:[Number,String],default:1},disableTouch:{type:[Boolean,String],default:!1}},data:function(){return{currentSync:Math.round(this.current)||0,currentItemIdSync:this.currentItemId||"",userTracking:!1,currentChangeSource:"",items:[]}},computed:{intervalNumber:function(){var t=Number(this.interval);return isNaN(t)?5e3:t},durationNumber:function(){var t=Number(this.duration);return isNaN(t)?500:t},displayMultipleItemsNumber:function(){var t=Math.round(this.displayMultipleItems);return isNaN(t)?1:t},slidesStyle:function(){var t={};return(this.nextMargin||this.previousMargin)&&(t=this.vertical?{left:0,right:0,top:this._upx2px(this.previousMargin),bottom:this._upx2px(this.nextMargin)}:{top:0,bottom:0,left:this._upx2px(this.previousMargin),right:this._upx2px(this.nextMargin)}),t},slideFrameStyle:function(){var t=Math.abs(100/this.displayMultipleItemsNumber)+"%";return{width:this.vertical?"100%":t,height:this.vertical?t:"100%"}},circularEnabled:function(){return this.circular&&this.items.length>this.displayMultipleItemsNumber}},watch:{vertical:function(){this._resetLayout()},circular:function(){this._resetLayout()},intervalNumber:function(t){this._timer&&(this._cancelSchedule(),this._scheduleAutoplay())},current:function(t){this._currentCheck()},currentSync:function(t,e){this._currentChanged(t,e),this.$emit("update:current",t)},currentItemId:function(t){this._currentCheck()},currentItemIdSync:function(t){this.$emit("update:currentItemId",t)},displayMultipleItemsNumber:function(){this._resetLayout()}},created:function(){this._invalid=!0,this._viewportPosition=0,this._viewportMoveRatio=1,this._animating=null,this._requestedAnimation=!1,this._userDirectionChecked=!1,this._contentTrackViewport=0,this._contentTrackSpeed=0,this._contentTrackT=0},mounted:function(){var t=this;this._currentCheck(),this.touchtrack(this.$refs.slidesWrapper,"_handleContentTrack",!0),this._resetLayout(),this.$watch((function(){return t.autoplay&&!t.userTracking}),this._inintAutoplay),this._inintAutoplay(this.autoplay&&!this.userTracking),this.$watch("items.length",this._resetLayout)},beforeDestroy:function(){this._cancelSchedule(),cancelAnimationFrame(this._animationFrame)},methods:{_inintAutoplay:function(t){t?this._scheduleAutoplay():this._cancelSchedule()},_currentCheck:function(){var t=-1;if(this.currentItemId)for(var e=0,n=this.items;e<n.length;e++){var i=n[e].componentInstance;if(i&&i.itemId===this.currentItemId){t=e;break}}t<0&&(t=Math.round(this.current)||0),t=t<0?0:t,this.currentSync!==t&&(this.currentChangeSource="",this.currentSync=t)},_itemReady:function(t,e){t.componentInstance&&t.componentInstance._isMounted?e():(t._callbacks=t._callbacks||[],t._callbacks.push(e))},_currentChanged:function(t,e){var n=this,i=this.currentChangeSource;if(this.currentChangeSource="",!i){var r=this.items.length;this._animateViewport(t,"",this.circularEnabled&&e+(r-t)%r>r/2?1:0)}var o=this.items[t];o&&this._itemReady(o,(function(){var t=n.currentItemIdSync=o.componentInstance.itemId||"";n.$trigger("change",{},{current:n.currentSync,currentItemId:t,source:i})}))},_scheduleAutoplay:function(){var t=this;function e(){t._timer=null,t.currentChangeSource="autoplay",t.circularEnabled?t.currentSync=t._normalizeCurrentValue(t.currentSync+1):t.currentSync=t.currentSync+t.displayMultipleItemsNumber<t.items.length?t.currentSync+1:0,t._animateViewport(t.currentSync,"autoplay",t.circularEnabled?1:0),t._timer=setTimeout(e,t.intervalNumber)}this._cancelSchedule(),!this._isMounted||this._invalid||this.items.length<=this.displayMultipleItemsNumber||(this._timer=setTimeout(e,this.intervalNumber))},_cancelSchedule:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_normalizeCurrentValue:function(t){var e=this.items.length;if(!e)return-1;var n=(Math.round(t)%e+e)%e;if(this.circularEnabled){if(e<=this.displayMultipleItemsNumber)return 0}else if(n>e-this.displayMultipleItemsNumber)return e-this.displayMultipleItemsNumber;return n},_upx2px:function(t){return/\d+[ur]px$/i.test(t)&&t.replace(/\d+[ur]px$/i,(function(t){return"".concat(uni.upx2px(parseFloat(t)),"px")})),t||""},_resetLayout:function(){if(this._isMounted){this._cancelSchedule(),this._endViewportAnimation();for(var t=this.items,e=0;e<t.length;e++)this._updateItemPos(e,e);if(this._viewportMoveRatio=1,1===this.displayMultipleItemsNumber&&t.length){var n=t[0].componentInstance.$el.getBoundingClientRect(),i=this.$refs.slideFrame.getBoundingClientRect();this._viewportMoveRatio=n.width/i.width,this._viewportMoveRatio>0&&this._viewportMoveRatio<1||(this._viewportMoveRatio=1)}var r=this._viewportPosition;this._viewportPosition=-2;var o=this.currentSync;o>=0?(this._invalid=!1,this.userTracking?(this._updateViewport(r+o-this._contentTrackViewport),this._contentTrackViewport=o):(this._updateViewport(o),this.autoplay&&this._scheduleAutoplay())):(this._invalid=!0,this._updateViewport(-this.displayMultipleItemsNumber-1))}},_checkCircularLayout:function(t){if(!this._invalid)for(var e=this.items,n=e.length,i=t+this.displayMultipleItemsNumber,r=0;r<n;r++){var o=e[r],a=o._position,s=Math.floor(t/n)*n+r,c=s+n,u=s-n,l=Math.max(t-(s+1),s-i,0),f=Math.max(t-(c+1),c-i,0),h=Math.max(t-(u+1),u-i,0),d=Math.min(l,f,h),p=[s,c,u][[l,f,h].indexOf(d)];a!==p&&this._updateItemPos(r,p)}},_updateItemPos:function(t,e){var n=this.vertical?"0":100*e+"%",i=this.vertical?100*e+"%":"0",r="translate("+n+", "+i+") translateZ(0)",o=this.items[t];this._itemReady(o,(function(){var t=o.componentInstance.$el;t.style["-webkit-transform"]=r,t.style.transform=r,t._position=e}))},_updateViewport:function(t){Math.floor(2*this._viewportPosition)===Math.floor(2*t)&&Math.ceil(2*this._viewportPosition)===Math.ceil(2*t)||this.circularEnabled&&this._checkCircularLayout(t);var e=this.vertical?"0":100*-t*this._viewportMoveRatio+"%",n=this.vertical?100*-t*this._viewportMoveRatio+"%":"0",i="translate("+e+", "+n+") translateZ(0)",r=this.$refs.slideFrame;if(r&&(r.style["-webkit-transform"]=i,r.style.transform=i),this._viewportPosition=t,!this._transitionStart){if(t%1===0)return;this._transitionStart=t}t-=Math.floor(this._transitionStart),t<=-(this.items.length-1)?t+=this.items.length:t>=this.items.length&&(t-=this.items.length),t=this._transitionStart%1>.5||this._transitionStart<0?t-1:t,this.$trigger("transition",{},{dx:this.vertical?0:t*r.offsetWidth,dy:this.vertical?t*r.offsetHeight:0})},_animateFrameFuncProto:function(){var t=this;if(this._animating){var e=this._animating,n=e.toPos,i=e.acc,r=e.endTime,o=e.source,a=r-Date.now();if(a<=0){this._updateViewport(n),this._animating=null,this._requestedAnimation=!1,this._transitionStart=null;var s=this.items[this.currentSync];s&&this._itemReady(s,(function(){var e=s.componentInstance.itemId||"";t.$trigger("animationfinish",{},{current:t.currentSync,currentItemId:e,source:o})}))}else{var c=i*a*a/2,u=n+c;this._updateViewport(u),this._animationFrame=requestAnimationFrame(this._animateFrameFuncProto.bind(this))}}else this._requestedAnimation=!1},_animateViewport:function(t,e,n){this._cancelViewportAnimation();var i=this.durationNumber,r=this.items.length,o=this._viewportPosition;if(this.circularEnabled)if(n<0){for(;o<t;)o+=r;for(;o-r>t;)o-=r}else if(n>0){for(;o>t;)o-=r;for(;o+r<t;)o+=r}else{for(;o+r<t;)o+=r;for(;o-r>t;)o-=r;o+r-t<t-o&&(o+=r)}this._animating={toPos:t,acc:2*(o-t)/(i*i),endTime:Date.now()+i,source:e},this._requestedAnimation||(this._requestedAnimation=!0,this._animationFrame=requestAnimationFrame(this._animateFrameFuncProto.bind(this)))},_cancelViewportAnimation:function(){this._animating=null},_endViewportAnimation:function(){this._animating&&(this._updateViewport(this._animating.toPos),this._animating=null)},_handleTrackStart:function(){this._cancelSchedule(),this._contentTrackViewport=this._viewportPosition,this._contentTrackSpeed=0,this._contentTrackT=Date.now(),this._cancelViewportAnimation()},_handleTrackMove:function(t){var e=this,n=this._contentTrackT;this._contentTrackT=Date.now();var i=this.items.length,r=i-this.displayMultipleItemsNumber;function o(t){return.5-.25/(t+.5)}function a(t,n){var i=e._contentTrackViewport+t;e._contentTrackSpeed=.6*e._contentTrackSpeed+.4*n,e.circularEnabled||(i<0||i>r)&&(i<0?i=-o(-i):i>r&&(i=r+o(i-r)),e._contentTrackSpeed=0),e._updateViewport(i)}var s=this._contentTrackT-n||1;this.vertical?a(-t.dy/this.$refs.slideFrame.offsetHeight,-t.ddy/s):a(-t.dx/this.$refs.slideFrame.offsetWidth,-t.ddx/s)},_handleTrackEnd:function(t){this.userTracking=!1;var e=this._contentTrackSpeed/Math.abs(this._contentTrackSpeed),n=0;!t&&Math.abs(this._contentTrackSpeed)>.2&&(n=.5*e);var i=this._normalizeCurrentValue(this._viewportPosition+n);t?this._updateViewport(this._contentTrackViewport):(this.currentChangeSource="touch",this.currentSync=i,this._animateViewport(i,"touch",0!==n?n:0===i&&this.circularEnabled&&this._viewportPosition>=1?1:0))},_handleContentTrack:function(t){if(!this.disableTouch&&!this._invalid){if("start"===t.detail.state)return this.userTracking=!0,this._userDirectionChecked=!1,this._handleTrackStart();if("end"===t.detail.state)return this._handleTrackEnd(!1);if("cancel"===t.detail.state)return this._handleTrackEnd(!0);if(this.userTracking){if(!this._userDirectionChecked){this._userDirectionChecked=!0;var e=Math.abs(t.detail.dx),n=Math.abs(t.detail.dy);if((e>=n&&this.vertical||e<=n&&!this.vertical)&&(this.userTracking=!1),!this.userTracking)return void(this.autoplay&&this._scheduleAutoplay())}return this._handleTrackMove(t.detail),!1}}}},render:function(t){var e=this,n=[],i=[];this.$slots.default&&Object(a["d"])(this.$slots.default,t).forEach((function(t){t.componentOptions&&"v-uni-swiper-item"===t.componentOptions.tag&&i.push(t)}));for(var r=function(i,r){var o=e.currentSync;n.push(t("div",{on:{click:function(){e._animateViewport(e.currentSync=i,e.currentChangeSource="click",e.circularEnabled?1:0)}},class:{"uni-swiper-dot":!0,"uni-swiper-dot-active":i<o+e.displayMultipleItemsNumber&&i>=o||i<o+e.displayMultipleItemsNumber-r},style:{background:i===o?e.indicatorActiveColor:e.indicatorColor}}))},o=0,s=i.length;o<s;o++)r(o,s);this.items=i;var c=[t("div",{ref:"slides",style:this.slidesStyle,class:"uni-swiper-slides"},[t("div",{ref:"slideFrame",class:"uni-swiper-slide-frame",style:this.slideFrameStyle},i)])];return this.indicatorDots&&c.push(t("div",{ref:"slidesDots",class:["uni-swiper-dots",this.vertical?"uni-swiper-dots-vertical":"uni-swiper-dots-horizontal"]},n)),t("uni-swiper",{on:this.$listeners},[t("div",{ref:"slidesWrapper",class:"uni-swiper-wrapper"},c)])}},c=s,u=(n("1c64"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=l.exports},5621:function(t,e,n){"use strict";n.r(e),n.d(e,"setTabBarItem",(function(){return a})),n.d(e,"setTabBarStyle",(function(){return s})),n.d(e,"hideTabBar",(function(){return c})),n.d(e,"showTabBar",(function(){return u})),n.d(e,"hideTabBarRedDot",(function(){return l})),n.d(e,"showTabBarRedDot",(function(){return f})),n.d(e,"removeTabBarBadge",(function(){return h})),n.d(e,"setTabBarBadge",(function(){return d}));var i=n("f2b3"),r=n("cb0f"),o={type:Number,required:!0},a={index:o,text:{type:String},iconPath:{type:String},selectedIconPath:{type:String}},s={color:{type:String},selectedColor:{type:String},backgroundColor:{type:String},backgroundImage:{type:String,validator:function(t,e){t&&!/^(linear|radial)-gradient\(.+?\);?$/.test(t)&&(e.backgroundImage=Object(r["a"])(t))}},backgroundRepeat:{type:String},borderStyle:{type:String,validator:function(t,e){t&&(e.borderStyle="black"===t?"black":"white")}}},c={animation:{type:Boolean,default:!1}},u={animation:{type:Boolean,default:!1}},l={index:o},f={index:o},h={index:o},d={index:o,text:{type:String,required:!0,validator:function(t,e){Object(i["g"])(t)>=4&&(e.text="...")}}}},5676:function(t,e,n){"use strict";var i=n("c33a"),r=n.n(i);r.a},"56e9":function(t,e,n){"use strict";(function(t){function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h}));var r=t,o=r.emit,a=r.invokeCallbackHandler;function s(t,e){o("onShowModal",t,(function(t){a(e,i({},t,!0))}))}function c(t){return o("onShowToast",t),{}}function u(){return o("onHideToast"),{}}function l(t){return o("onShowLoading",t),{}}function f(){return o("onHideLoading"),{}}function h(t,e){o("onShowActionSheet",t,(function(t){a(e,-1===t?{errMsg:"showActionSheet:fail cancel"}:{tapIndex:t})}))}}).call(this,n("0dd1"))},5727:function(t,e,n){"use strict";var i=n("28da"),r=n.n(i);r.a},5768:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-textarea",t._g({on:{change:function(t){t.stopPropagation()}}},t.$listeners),[n("div",{staticClass:"uni-textarea-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!(t.composition||t.valueSync.length),expression:"!(composition||valueSync.length)"}],ref:"placeholder",staticClass:"uni-textarea-placeholder",class:t.placeholderClass,style:t.placeholderStyle,domProps:{textContent:t._s(t.placeholder)}}),n("div",{ref:"line",staticClass:"uni-textarea-line",domProps:{textContent:t._s(" ")}}),n("div",{staticClass:"uni-textarea-compute"},[t._l(t.valueCompute,(function(e,i){return n("div",{key:i,domProps:{textContent:t._s(e.trim()?e:".")}})})),n("v-uni-resize-sensor",{ref:"sensor",on:{resize:t._resize}})],2),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.valueSync,expression:"valueSync"}],ref:"textarea",staticClass:"uni-textarea-textarea",class:{"uni-textarea-textarea-fix-margin":t.fixMargin},style:{"overflow-y":t.autoHeight?"hidden":"auto"},attrs:{disabled:t.disabled,maxlength:t.maxlengthNumber,autofocus:t.autoFocus||t.focus},domProps:{value:t.valueSync},on:{compositionstart:t._compositionstart,compositionend:t._compositionend,input:[function(e){e.target.composing||(t.valueSync=e.target.value)},function(e){return e.stopPropagation(),t._input(e)}],focus:t._focus,blur:t._blur,"&touchstart":function(e){return t._touchstart(e)}}})])])},r=[],o=n("8af1"),a="(prefers-color-scheme: dark)",s={name:"Textarea",mixins:[o["a"]],props:{name:{type:String,default:""},maxlength:{type:[Number,String],default:140},placeholder:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1},autoFocus:{type:[Boolean,String],default:!1},placeholderClass:{type:String,default:"textarea-placeholder"},placeholderStyle:{type:String,default:""},autoHeight:{type:[Boolean,String],default:!1},cursor:{type:[Number,String],default:-1},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1}},data:function(){return{valueComposition:"",composition:!1,focusSync:this.focus,height:0,focusChangeSource:"",fixMargin:0===String(navigator.platform).indexOf("iP")&&0===String(navigator.vendor).indexOf("Apple")&&window.matchMedia(a).media!==a}},computed:{maxlengthNumber:function(){var t=Number(this.maxlength);return isNaN(t)?140:t},cursorNumber:function(){var t=Number(this.cursor);return isNaN(t)?-1:t},selectionStartNumber:function(){var t=Number(this.selectionStart);return isNaN(t)?-1:t},selectionEndNumber:function(){var t=Number(this.selectionEnd);return isNaN(t)?-1:t},valueCompute:function(){return(this.composition?this.valueComposition:this.valueSync).split("\n")}},watch:{focus:function(t){t?(this.focusChangeSource="focus",this.$refs.textarea&&this.$refs.textarea.focus()):this.$refs.textarea&&this.$refs.textarea.blur()},focusSync:function(t){this.$emit("update:focus",t),this._checkSelection(),this._checkCursor()},cursorNumber:function(){this._checkCursor()},selectionStartNumber:function(){this._checkSelection()},selectionEndNumber:function(){this._checkSelection()},height:function(t){var e=parseFloat(getComputedStyle(this.$el).lineHeight);isNaN(e)&&(e=this.$refs.line.offsetHeight);var n=Math.round(t/e);this.$trigger("linechange",{},{height:t,heightRpx:750/window.innerWidth*t,lineCount:n}),this.autoHeight&&(this.$el.style.height=this.height+"px")}},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},mounted:function(){this._resize({height:this.$refs.sensor.$el.offsetHeight});var t=this;while(t){var e=t.$options._scopeId;e&&this.$refs.placeholder.setAttribute(e,""),t=t.$parent}this.initKeyboard(this.$refs.textarea)},beforeDestroy:function(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_focus:function(t){this.focusSync=!0,this.$trigger("focus",t,{value:this.valueSync})},_checkSelection:function(){this.focusSync&&!this.focusChangeSource&&this.selectionStartNumber>-1&&this.selectionEndNumber>-1&&(this.$refs.textarea.selectionStart=this.selectionStartNumber,this.$refs.textarea.selectionEnd=this.selectionEndNumber)},_checkCursor:function(){this.focusSync&&("focus"===this.focusChangeSource||!this.focusChangeSource&&this.selectionStartNumber<0&&this.selectionEndNumber<0)&&this.cursorNumber>-1&&(this.$refs.textarea.selectionEnd=this.$refs.textarea.selectionStart=this.cursorNumber)},_blur:function(t){this.focusSync=!1,this.$trigger("blur",t,{value:this.valueSync,cursor:this.$refs.textarea.selectionEnd})},_compositionstart:function(t){this.composition=!0},_compositionend:function(t){this.composition=!1},_confirm:function(t){this.$trigger("confirm",t,{value:this.valueSync})},_linechange:function(t){this.$trigger("linechange",t,{value:this.valueSync})},_touchstart:function(){this.focusChangeSource="touch"},_resize:function(t){var e=t.height;this.height=e},_input:function(t){this.composition?this.valueComposition=t.target.value:this.$triggerInput(t,{value:this.valueSync,cursor:this.$refs.textarea.selectionEnd})},_getFormData:function(){return{value:this.valueSync,key:this.name}},_resetFormData:function(){this.valueSync=""}}},c=s,u=(n("9400"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=l.exports},5881:function(t,e,n){"use strict";(function(t){var n={ensp:" ",emsp:" ",nbsp:" "};e["a"]={name:"Text",props:{selectable:{type:[Boolean,String],default:!1},space:{type:String,default:""},decode:{type:[Boolean,String],default:!1}},methods:{_decodeHtml:function(t){return this.space&&n[this.space]&&(t=t.replace(/ /g,n[this.space])),this.decode&&(t=t.replace(/&nbsp;/g,n.nbsp).replace(/&ensp;/g,n.ensp).replace(/&emsp;/g,n.emsp).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'")),t}},render:function(e){var n=this,i=[];return this.$slots.default&&this.$slots.default.forEach((function(r){if(r.text){var o=r.text.replace(/\\n/g,"\n"),a=o.split("\n");a.forEach((function(t,r){i.push(n._decodeHtml(t)),r!==a.length-1&&i.push(e("br"))}))}else r.componentOptions&&"v-uni-text"!==r.componentOptions.tag&&t.warn("<text> 组件内只支持嵌套 <text>，不支持其它组件或自定义组件，否则会引发在不同平台的渲染差异。"),i.push(r)})),e("uni-text",{on:this.$listeners,attrs:{selectable:!!this.selectable}},[e("span",{},i)])}}}).call(this,n("3ad9")["default"])},"594d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-map",t._g({attrs:{id:t.id}},t.$listeners),[n("div",{ref:"map",staticStyle:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}}),n("div",{staticStyle:{position:"absolute",top:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}},[t._t("default")],2)])},r=[],o=n("738e"),a=o["a"],s=(n("3f7e"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},5964:function(t,e,n){"use strict";(function(t){function i(e,n){var i=getCurrentPages();if(i.length){var r=i[i.length-1].$holder;switch(e){case"setNavigationBarColor":var o=n.frontColor,a=n.backgroundColor,s=n.animation,c=s.duration,u=s.timingFunc;o&&(r.navigationBar.textColor="#000000"===o?"black":"white"),a&&(r.navigationBar.backgroundColor=a),t.emit("onNavigationBarChange",{textColor:"#000000"===o?"#000":"#fff",backgroundColor:r.navigationBar.backgroundColor}),r.navigationBar.duration=c+"ms",r.navigationBar.timingFunc=u;break;case"showNavigationBarLoading":r.navigationBar.loading=!0;break;case"hideNavigationBarLoading":r.navigationBar.loading=!1;break;case"setNavigationBarTitle":var l=n.title;r.navigationBar.titleText=l,document.title=l,t.emit("onNavigationBarChange",{titleText:l});break}}return{}}function r(t){return i("setNavigationBarColor",t)}function o(){return i("showNavigationBarLoading")}function a(){return i("hideNavigationBarLoading")}function s(t){return i("setNavigationBarTitle",t)}n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s}))}).call(this,n("0dd1"))},"5a23":function(t,e,n){"use strict";(function(t){var i=n("f2b3");function r(){document.activeElement.blur()}function o(){}e["a"]={name:"Keyboard",props:{cursorSpacing:{type:[Number,String],default:0},showConfirmBar:{type:[Boolean,String],default:"auto"},adjustPosition:{type:Boolean,default:!0}},watch:{focus:function(t){0}},mounted:function(){(this.autoFocus||this.focus)&&this.showSoftKeybord()},beforeDestroy:function(){this.onKeyboardHide()},methods:{initKeyboard:function(e){var n=this;e.addEventListener("focus",(function(){n.hideKeyboardTemp=function(){r()},t.subscribe("hideKeyboard",n.hideKeyboardTemp),document.addEventListener("click",o,!1)})),e.addEventListener("blur",this.onKeyboardHide.bind(this))},showSoftKeybord:function(){Object(i["m"])((function(){plus.key.showSoftKeybord()}))},setSoftinputTemporary:function(){var t=this;Object(i["m"])((function(){var e=plus.webview.currentWebview(),n=e.getStyle()||{},i=t.$el.getBoundingClientRect();e.setSoftinputTemporary&&e.setSoftinputTemporary({mode:"adjustResize"===n.softinputMode?"adjustResize":t.adjustPosition?"adjustPan":"nothing",position:{top:i.top,height:i.height+(Number(t.cursorSpacing)||0)}})}))},setSoftinputNavBar:function(){var t=this;"auto"!==this.showConfirmBar?Object(i["m"])((function(){var e=plus.webview.currentWebview(),n=e.getStyle()||{},i=n.softinputNavBar,r="none"!==i;r!==t.showConfirmBar?(t.__softinputNavBar=i||"auto",e.setStyle({softinputNavBar:t.showConfirmBar?"auto":"none"})):delete t.__softinputNavBar})):delete this.__softinputNavBar},resetSoftinputNavBar:function(){var t=this.__softinputNavBar;t&&Object(i["m"])((function(){var e=plus.webview.currentWebview();e.setStyle({softinputNavBar:t})}))},onKeyboardHide:function(){t.unsubscribe("hideKeyboard",this.hideKeyboardTemp),document.removeEventListener("click",o,!1),0===String(navigator.vendor).indexOf("Apple")&&document.documentElement.scrollTo(document.documentElement.scrollLeft,document.documentElement.scrollTop)}}}}).call(this,n("501c"))},"5a56":function(t,e,n){"use strict";n.r(e),e["default"]={methods:{beforeTransition:function(){},afterTransition:function(){}}}},"5ab3":function(t,e,n){"use strict";var i=n("b2bb"),r=n.n(i);r.a},"5abe":function(t,e){(function(){"use strict";if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){var e=this._observationTargets.some((function(e){return e.element==t}));if(!e){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},i.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(a(window,"resize",this._checkForIntersections,!0),a(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(window,"resize",this._checkForIntersections,!0),s(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():l();this._observationTargets.forEach((function(i){var o=i.element,a=u(o),s=this._rootContainsTarget(o),c=i.entry,l=t&&s&&this._computeTargetAndRootIntersection(o,e),f=i.entry=new n({time:r(),target:o,boundingClientRect:a,rootBounds:e,intersectionRect:l});c?t&&s?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){var i=u(e),r=i,o=h(e),a=!1;while(!a){var s=null,l=1==o.nodeType?window.getComputedStyle(o):{};if("none"==l.display)return;if(o==this.root||o==t?(a=!0,s=n):o!=t.body&&o!=t.documentElement&&"visible"!=l.overflow&&(s=u(o)),s&&(r=c(s,r),!r))break;o=h(o)}return r}},i.prototype._getRootRect=function(){var e;if(this.root)e=u(this.root);else{var n=t.documentElement,i=t.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o==n||o==i||o<n!==o<i)return!0}},i.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)},i.prototype._rootContainsTarget=function(e){return f(this.root||t,e)},i.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},i.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=i,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||l(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=o(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function r(){return window.performance&&performance.now&&performance.now()}function o(t,e){var n=null;return function(){n||(n=setTimeout((function(){t(),n=null}),e))}}function a(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),o=Math.min(t.right,e.right),a=o-r,s=i-n;return a>=0&&s>=0&&{top:n,bottom:i,left:r,right:o,width:a,height:s}}function u(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):l()}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(t,e){var n=e;while(n){if(n==t)return!0;n=h(n)}return!1}function h(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}})()},"5d1d":function(t,e,n){"use strict";var i=n("50c5"),r=n.n(i);r.a},"5d70":function(t,e,n){},"5dc1":function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c}));n("5abe");var i=n("85b6"),r=n("db8e");function o(t){return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}var a={};function s(e,n){var s=e.reqId,c=e.component,u=e.options,l=getCurrentPages(),f=l.find((function(t){return t.$page.id===n}));if(!f)throw new Error("Not Found：Page[".concat(n,"]"));var h=f.$vm,d=Object(r["a"])(c,h),p=u.relativeToSelector?d.querySelector(u.relativeToSelector):null,g=a[s]=new IntersectionObserver((function(e,n){e.forEach((function(e){t.publishHandler("onRequestComponentObserver",{reqId:s,res:{intersectionRatio:e.intersectionRatio,intersectionRect:o(e.intersectionRect),boundingClientRect:o(e.boundingClientRect),relativeRect:o(e.rootBounds),time:Date.now(),dataset:Object(i["c"])(e.target.dataset||{}),id:e.target.id}},h.$page.id)}))}),{root:p,rootMargin:u.rootMargin,threshold:u.thresholds});u.observeAll?(g.USE_MUTATION_OBSERVER=!0,Array.prototype.map.call(d.querySelectorAll(u.selector),(function(t){g.observe(t)}))):(g.USE_MUTATION_OBSERVER=!1,g.observe(d.querySelector(u.selector)))}function c(e){var n=e.reqId,i=a[n];i&&(i.disconnect(),delete a[n],t.publishHandler("onRequestComponentObserver",{reqId:n,reqEnd:!0}))}}).call(this,n("501c"))},"5dc4":function(t,e,n){},"5ff9":function(t,e,n){"use strict";n.r(e),n.d(e,"loadFontFace",(function(){return i}));var i={family:{type:String,required:!0},source:{type:String,required:!0},desc:{type:Object,required:!1},success:{type:Function,required:!1},fail:{type:Function,required:!1},complete:{type:Function,required:!1}}},6062:function(t,e,n){"use strict";var i=n("ef36"),r=n.n(i);r.a},"60db":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"EditorContext",(function(){return u}));var i=n("f2b3");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(e,n,i,r){t.publishHandler(n+"-editor-"+e,{componentId:e,type:i,data:r},n)}t.subscribe("onEditorMethodCallback",(function(t){var e=t.callbackId,n=t.data;i["a"].invoke(e,n)}));var c=["insertDivider","insertImage","insertText","setContents","getContents","clear","removeFormat","undo","redo"],u=function(){function t(e,n){r(this,t),this.id=e,this.pageId=n}return a(t,[{key:"format",value:function(t,e){s(this.id,this.pageId,"format",{options:{name:t,value:e}})}}]),t}();c.forEach((function(t){u.prototype[t]=i["a"].warp((function(e,n){s(this.id,this.pageId,t,{options:e,callbackId:n})}))}))}.call(this,n("0dd1"))},"60ee":function(t,e,n){},"61c2":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("f2b3"),r=n("8af1");function o(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})}function a(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})}var s={name:"uni://form-field",init:function(t,e){e.constructor.options.props&&e.constructor.options.props.name&&e.constructor.options.props.value||(e.constructor.options.props||(e.constructor.options.props={}),e.constructor.options.props.name||(e.constructor.options.props.name=t.props.name={type:String}),e.constructor.options.props.value||(e.constructor.options.props.value=t.props.value={type:null})),t.propsData||(t.propsData={});var n=e.$vnode;if(n&&n.data&&n.data.attrs&&(Object(i["h"])(n.data.attrs,"name")&&(t.propsData.name=n.data.attrs.name),Object(i["h"])(n.data.attrs,"value")&&(t.propsData.value=n.data.attrs.value)),!e.constructor.options.methods||!e.constructor.options.methods._getFormData){e.constructor.options.methods||(e.constructor.options.methods={}),t.methods||(t.methods={});var s={_getFormData:function(){return this.name?{key:this.name,value:this.value}:{}},_resetFormData:function(){this.value=""}};Object.assign(e.constructor.options.methods,s),Object.assign(t.methods,s),Object.assign(e.constructor.options.methods,r["b"].methods),Object.assign(t.methods,r["b"].methods);var c=t.created;e.constructor.options.created=t.created=c?[].concat(o,c):[o];var u=t.beforeDestroy;e.constructor.options.beforeDestroy=t.beforeDestroy=u?[].concat(a,u):[a]}}};function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=c({},s.name,s);function l(t,e){t.behaviors.forEach((function(n){var i=u[n];i&&i.init(t,e)}))}},6226:function(t,e,n){"use strict";var i=n("77d5"),r=n.n(i);r.a},"626d":function(t,e,n){"use strict";n.r(e),function(t){var i=n("f2b3");e["default"]={data:function(){return{showActionSheet:{visible:!1}}},created:function(){var e=this;t.on("onShowActionSheet",(function(t,n){e.showActionSheet=t,e.onActionSheetCloseCallback=n})),t.on("onHidePopup",(function(t){e.showActionSheet.visible=!1}))},methods:{_onActionSheetClose:function(t){this.showActionSheet.visible=!1,Object(i["j"])(this.onActionSheetCloseCallback)&&this.onActionSheetCloseCallback(t)}}}}.call(this,n("0dd1"))},"62b5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i={};function r(t){var e=i[t];return e||(e={id:1,callbacks:Object.create(null)},i[t]=e),{get:function(t){return e.callbacks[t]},pop:function(t){var n=e.callbacks[t];return n&&delete e.callbacks[t],n},push:function(t){var n=e.id++;return e.callbacks[n]=t,n}}}},6389:function(e,n){e.exports=t},6428:function(t,e,n){"use strict";var i=n("f756"),r=n.n(i);r.a},6481:function(t,e,n){"use strict";n.r(e),n.d(e,"base64ToArrayBuffer",(function(){return i})),n.d(e,"arrayBufferToBase64",(function(){return r}));var i=[{name:"base64",type:String,required:!0}],r=[{name:"arrayBuffer",type:[ArrayBuffer,Uint8Array],required:!0}]},6491:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-radio",t._g({attrs:{disabled:t.disabled},on:{click:t._onClick}},t.$listeners),[n("div",{staticClass:"uni-radio-wrapper"},[n("div",{staticClass:"uni-radio-input",class:t.radioChecked?"uni-radio-input-checked":"",style:t.radioChecked?t.checkedStyle:""}),t._t("default")],2)])},r=[],o=n("8af1"),a={name:"Radio",mixins:[o["b"],o["e"]],props:{checked:{type:[Boolean,String],default:!1},id:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},color:{type:String,default:"#007AFF"},value:{type:String,default:""}},data:function(){return{radioChecked:this.checked,radioValue:this.value}},computed:{checkedStyle:function(){return"background-color: ".concat(this.color,";border-color: ").concat(this.color,";")}},watch:{checked:function(t){this.radioChecked=t},value:function(t){this.radioValue=t}},listeners:{"label-click":"_onClick","@label-click":"_onClick"},created:function(){this.$dispatch("RadioGroup","uni-radio-group-update",{type:"add",vm:this}),this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},beforeDestroy:function(){this.$dispatch("RadioGroup","uni-radio-group-update",{type:"remove",vm:this}),this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_onClick:function(t){this.disabled||this.radioChecked||(this.radioChecked=!0,this.$dispatch("RadioGroup","uni-radio-change",t,this))},_resetFormData:function(){this.radioChecked=this.min}}},s=a,c=(n("c96e"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"64d0":function(t,e,n){"use strict";var i=n("c0e5"),r=n.n(i);r.a},6575:function(t,e,n){"use strict";(function(t){function i(e,n){var i=e.latitude,r=e.longitude,o=e.scale,a=e.name,s=e.address,c=t,u=c.invokeCallbackHandler;getApp().$router.push({type:"navigateTo",path:"/open-location",query:{latitude:i,longitude:r,scale:o,name:a,address:s}},(function(){u(n,{errMsg:"openLocation:ok"})}),(function(){u(n,{errMsg:"openLocation:fail"})}))}n.d(e,"a",(function(){return i}))}).call(this,n("0dd1"))},"65a8":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=44,r=50},"65f0":function(t,e,n){"use strict";(function(t){e["a"]={name:"SystemHeader",props:{confirm:{type:Boolean,default:!1}},created:function(){document.title=this.$slots.default[0].text,t.emit("onNavigationBarChange",{titleText:document.title,textColor:"#fff",backgroundColor:"#000"})},methods:{_back:function(){this.$emit("back")},_confirm:function(){this.$emit("confirm")}}}}).call(this,n("0dd1"))},6730:function(t,e,n){"use strict";var i=n("00b2"),r=n.n(i);r.a},"69c3":function(t,e,n){},"6bdf":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var i=n("85b6"),r=n("a470"),o=n("db8e");function a(t){var e={};return t.id&&(e.id=""),t.dataset&&(e.dataset={}),t.rect&&(e.left=0,e.right=0,e.top=0,e.bottom=0),t.size&&(e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight),t.scrollOffset&&(e.scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft||0,e.scrollTop=document.documentElement.scrollTop||document.body.scrollTop||0),e}function s(t,e){var n={},o=Object(r["a"])(),a=o.top;if(e.id&&(n.id=t.id),e.dataset&&(n.dataset=Object(i["c"])(t.dataset||{})),e.rect||e.size){var s=t.getBoundingClientRect();e.rect&&(n.left=s.left,n.right=s.right,n.top=s.top-a,n.bottom=s.bottom-a),e.size&&(n.width=s.width,n.height=s.height)}return e.properties&&e.properties.forEach((function(t){t=t.replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()}))})),e.scrollOffset&&("UNI-SCROLL-VIEW"===t.tagName&&t.__vue__&&t.__vue__.getScrollPosition?Object.assign(n,t.__vue__.getScrollPosition()):(n.scrollLeft=0,n.scrollTop=0)),e.context&&t.__vue__&&t.__vue__._getContextInfo&&(n.context=t.__vue__._getContextInfo()),n}function c(t,e,n,i,r){var a=Object(o["a"])(e,t);if(!a||a&&8===a.nodeType)return i?null:[];if(i){var c=a.matches(n)?a:a.querySelector(n);return c?s(c,r):null}var u=[],l=a.querySelectorAll(n);return l&&l.length&&(u=[].map.call(l,(function(t){return s(t,r)}))),a.matches(n)&&u.unshift(s(a,r)),u}function u(e,n){var i=e.reqId,r=e.reqs,o=getCurrentPages(),s=o.find((function(t){return t.$page.id===n}));if(!s)throw new Error("Not Found：Page[".concat(n,"]"));var u=s.$vm,l=[];r.forEach((function(t){var e=t.component,n=t.selector,i=t.single,r=t.fields;0===e?l.push(a(r)):l.push(c(u,e,n,i,r))})),t.publishHandler("onRequestComponentInfo",{reqId:i,res:l},n)}}).call(this,n("501c"))},"6fa7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-picker",t._g({attrs:{disabled:t.disabled},on:{click:t._show}},t.$listeners),[n("div",{ref:"picker",staticClass:"uni-picker-container",on:{touchmove:function(t){t.preventDefault()}}},[n("transition",{attrs:{name:"uni-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"uni-mask",on:{click:t._cancel}})]),n("div",{staticClass:"uni-picker",class:{"uni-picker-toggle":t.visible}},[n("div",{staticClass:"uni-picker-header",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"uni-picker-action uni-picker-action-cancel",on:{click:t._cancel}},[t._v(" 取消 ")]),n("div",{staticClass:"uni-picker-action uni-picker-action-confirm",on:{click:t._change}},[t._v(" 确定 ")])]),t.visible?n("v-uni-picker-view",{staticClass:"uni-picker-content",attrs:{value:t.valueArray},on:{"update:value":function(e){t.valueArray=e}}},t._l(t.rangeArray,(function(e,i){return n("v-uni-picker-view-column",{key:i},t._l(e,(function(e,r){return n("div",{key:r,staticClass:"uni-picker-item"},[t._v(" "+t._s("object"===typeof e?e[t.rangeKey]||"":e)+t._s(t.units[i]||"")+" ")])})),0)})),1):t._e()],1)],1),n("div",[t._t("default")],2)])},r=[],o=n("8af1"),a=n("f2b3");function s(t){return f(t)||l(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(){if(this.mode===g.TIME)return"00:00";if(this.mode===g.DATE){var t=(new Date).getFullYear()-100;switch(this.fields){case m.YEAR:return t;case m.MONTH:return t+"-01";case m.DAY:return t+"-01-01"}}return""}function p(){if(this.mode===g.TIME)return"23:59";if(this.mode===g.DATE){var t=(new Date).getFullYear()+100;switch(this.fields){case m.YEAR:return t;case m.MONTH:return t+"-12";case m.DAY:return t+"-12-31"}}return""}var g={SELECTOR:"selector",MULTISELECTOR:"multiSelector",TIME:"time",DATE:"date"},m={YEAR:"year",MONTH:"month",DAY:"day"},v={name:"Picker",mixins:[o["b"]],props:{name:{type:String,default:""},range:{type:Array,default:function(){return[]}},rangeKey:{type:String,default:""},value:{type:[Number,String,Array],default:0},mode:{type:String,default:g.SELECTOR,validator:function(t){return Object.values(g).indexOf(t)>=0}},fields:{type:String,default:"day",validator:function(t){return Object.values(m).indexOf(t)>=0}},start:{type:String,default:d},end:{type:String,default:p},disabled:{type:[Boolean,String],default:!1}},data:function(){return{valueSync:null,visible:!1,valueChangeSource:"",timeArray:[],dateArray:[],valueArray:[],oldValueArray:[]}},computed:{rangeArray:function(){var t=this.range;switch(this.mode){case g.SELECTOR:return[t];case g.MULTISELECTOR:return t;case g.TIME:return this.timeArray;case g.DATE:var e=this.dateArray;switch(this.fields){case m.YEAR:return[e[0]];case m.MONTH:return[e[0],e[1]];case m.DAY:return[e[0],e[1],e[2]]}}return[]},startArray:function(){return this._getDateValueArray(this.start,d.bind(this)())},endArray:function(){return this._getDateValueArray(this.end,p.bind(this)())},units:function(){switch(this.mode){case g.DATE:return["年","月","日"];case g.TIME:return["时","分"];default:return[]}}},watch:{value:function(){this._setValueSync()},mode:function(){this._setValueSync()},range:function(){this._setValueSync()},valueSync:function(){this._setValueArray()},valueArray:function(t){var e=this;if(this.mode===g.TIME||this.mode===g.DATE){var n=this.mode===g.TIME?this._getTimeValue:this._getDateValue,i=this.valueArray,r=this.startArray,o=this.endArray;if(this.mode===g.DATE){var a=this.dateArray,s=a[2].length,c=Number(a[2][i[2]])||1,u=new Date("".concat(a[0][i[0]],"/").concat(a[1][i[1]],"/").concat(c)).getDate();u<c&&(i[2]-=u+s-c)}n(i)<n(r)?this._cloneArray(i,r):n(i)>n(o)&&this._cloneArray(i,o)}t.forEach((function(t,n){t!==e.oldValueArray[n]&&(e.oldValueArray[n]=t,e.mode===g.MULTISELECTOR&&e.$trigger("columnchange",{},{column:n,value:t}))}))}},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this}),this._createTime(),this._createDate(),this._setValueSync()},beforeDestroy:function(){this.$refs.picker.remove(),this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_show:function(){var t=this;if(!this.disabled){this.valueChangeSource="";var e=this.$refs.picker;e.remove(),(document.querySelector("uni-app")||document.body).appendChild(e),e.style.display="block",setTimeout((function(){t.visible=!0}),20)}},_getFormData:function(){return{value:this.valueSync,key:this.name}},_resetFormData:function(){switch(this.mode){case g.SELECTOR:this.valueSync=-1;break;case g.MULTISELECTOR:this.valueSync=this.value.map((function(t){return 0}));break;case g.DATE:case g.TIME:this.valueSync="";break;default:break}},_createTime:function(){var t=[],e=[];t.splice(0,t.length);for(var n=0;n<24;n++)t.push((n<10?"0":"")+n);e.splice(0,e.length);for(var i=0;i<60;i++)e.push((i<10?"0":"")+i);this.timeArray.push(t,e)},_createDate:function(){for(var t=[],e=(new Date).getFullYear(),n=e-150,i=e+150;n<=i;n++)t.push(String(n));for(var r=[],o=1;o<=12;o++)r.push((o<10?"0":"")+o);for(var a=[],s=1;s<=31;s++)a.push((s<10?"0":"")+s);this.dateArray.push(t,r,a)},_getTimeValue:function(t){return 60*t[0]+t[1]},_getDateValue:function(t){return 366*t[0]+31*(t[1]||0)+(t[2]||0)},_cloneArray:function(t,e){for(var n=0;n<t.length&&n<e.length;n++)t[n]=e[n]},_setValueSync:function(){var t=this.value;switch(this.mode){case g.MULTISELECTOR:Array.isArray(t)||(t=[]),Array.isArray(this.valueSync)||(this.valueSync=[]);for(var e=this.valueSync.length=Math.max(t.length,this.range.length),n=0;n<e;n++){var i=Number(t[n]),r=Number(this.valueSync[n]),o=isNaN(i)?isNaN(r)?0:r:i,a=this.range[n]?this.range[n].length-1:0;this.valueSync.splice(n,1,o>a?0:o)}break;case g.TIME:case g.DATE:this.valueSync=String(t);break;default:this.valueSync=Number(t)||0;break}},_setValueArray:function(){var t,e=this.valueSync;switch(this.mode){case g.MULTISELECTOR:t=s(e);break;case g.TIME:t=this._getDateValueArray(e,Object(a["f"])({mode:g.TIME}));break;case g.DATE:t=this._getDateValueArray(e,Object(a["f"])({mode:g.DATE}));break;default:t=[e];break}this.oldValueArray=s(t),this.valueArray=s(t)},_getValue:function(){var t=this,e=this.valueArray;switch(this.mode){case g.SELECTOR:return e[0];case g.MULTISELECTOR:return e.map((function(t){return t}));case g.TIME:return this.valueArray.map((function(e,n){return t.timeArray[n][e]})).join(":");case g.DATE:return this.valueArray.map((function(e,n){return t.dateArray[n][e]})).join("-")}},_getDateValueArray:function(t,e){var n,i=this.mode===g.DATE?"-":":",r=this.mode===g.DATE?this.dateArray:this.timeArray;if(this.mode===g.TIME)n=2;else switch(this.fields){case m.YEAR:n=1;break;case m.MONTH:n=2;break;default:n=3;break}for(var o=String(t).split(i),a=[],s=0;s<n;s++){var c=o[s];a.push(r[s].indexOf(c))}return a.indexOf(-1)>=0&&(a=e?this._getDateValueArray(e):a.map((function(){return 0}))),a},_change:function(){this._close(),this.valueChangeSource="click";var t=this._getValue();this.valueSync=Array.isArray(t)?t.map((function(t){return t})):t,this.$trigger("change",{},{value:t})},_cancel:function(){this._close(),this.$trigger("cancel",{},{})},_close:function(){var t=this;this.visible=!1,setTimeout((function(){var e=t.$refs.picker;e.remove(),t.$el.prepend(e),e.style.display="none"}),260)}}},b=v,y=(n("2d89"),n("2877")),_=Object(y["a"])(b,i,r,!1,null,null,null);e["default"]=_.exports},"70bb":function(t,e,n){"use strict";n.r(e),n.d(e,"openLocation",(function(){return i}));var i={latitude:{type:Number,required:!0},longitude:{type:Number,required:!0},scale:{type:Number,validator:function(t,e){t=Math.floor(t),e.scale=t>=5&&t<=18?t:18},default:18},name:{type:String},address:{type:String}}},"70f4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-label",t._g({class:{"uni-label-pointer":t.pointer},on:{click:t._onClick}},t.$listeners),[t._t("default")],2)},r=[],o=n("f2ce"),a=o["a"],s=(n("6730"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},7107:function(t,e,n){"use strict";(function(t){function i(e){var n=e.options,i=e.callbackId,r=n.family,o=n.source,a=n.desc,s=void 0===a?{}:a,c=document.fonts;if(c){var u=new FontFace(r,o,s);u.load().then((function(){c.add(u),t.publishHandler("onLoadFontFaceCallback",{callbackId:i,data:{errMsg:"loadFontFace:ok"}})})).catch((function(e){t.publishHandler("onLoadFontFaceCallback",{callbackId:i,data:{errMsg:"loadFontFace:fail ".concat(e)}})}))}else{var l=document.createElement("style");l.innerText='@font-face{font-family:"'.concat(r,'";src:').concat(o,";font-style:").concat(s.style,";font-weight:").concat(s.weight,";font-stretch:").concat(s.stretch,";unicode-range:").concat(s.unicodeRange,";font-variant:").concat(s.variant,";font-feature-settings:").concat(s.featureSettings,";}"),document.head.appendChild(l),t.publishHandler("onLoadFontFaceCallback",{callbackId:i,data:{errMsg:"loadFontFace:ok"}})}}n.d(e,"a",(function(){return i}))}).call(this,n("501c"))},"72ad":function(t,e,n){},"72b3":function(t,e,n){"use strict";function i(t,e,n){return t>e-n&&t<e+n}function r(t,e){return i(t,0,e)}function o(t,e,n){this._m=t,this._k=e,this._c=n,this._solution=null,this._endPosition=0,this._startTime=0}n.d(e,"a",(function(){return o})),o.prototype._solve=function(t,e){var n=this._c,i=this._m,r=this._k,o=n*n-4*i*r;if(0===o){var a=-n/(2*i),s=t,c=e/(a*t);return{x:function(t){return(s+c*t)*Math.pow(Math.E,a*t)},dx:function(t){var e=Math.pow(Math.E,a*t);return a*(s+c*t)*e+c*e}}}if(o>0){var u=(-n-Math.sqrt(o))/(2*i),l=(-n+Math.sqrt(o))/(2*i),f=(e-u*t)/(l-u),h=t-f;return{x:function(t){var e,n;return t===this._t&&(e=this._powER1T,n=this._powER2T),this._t=t,e||(e=this._powER1T=Math.pow(Math.E,u*t)),n||(n=this._powER2T=Math.pow(Math.E,l*t)),h*e+f*n},dx:function(t){var e,n;return t===this._t&&(e=this._powER1T,n=this._powER2T),this._t=t,e||(e=this._powER1T=Math.pow(Math.E,u*t)),n||(n=this._powER2T=Math.pow(Math.E,l*t)),h*u*e+f*l*n}}}var d=Math.sqrt(4*i*r-n*n)/(2*i),p=-n/2*i,g=t,m=(e-p*t)/d;return{x:function(t){return Math.pow(Math.E,p*t)*(g*Math.cos(d*t)+m*Math.sin(d*t))},dx:function(t){var e=Math.pow(Math.E,p*t),n=Math.cos(d*t),i=Math.sin(d*t);return e*(m*d*n-g*d*i)+p*e*(m*i+g*n)}}},o.prototype.x=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._endPosition+this._solution.x(t):0},o.prototype.dx=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._solution.dx(t):0},o.prototype.setEnd=function(t,e,n){if(n||(n=(new Date).getTime()),t!==this._endPosition||!r(e,.4)){e=e||0;var i=this._endPosition;this._solution&&(r(e,.4)&&(e=this._solution.dx((n-this._startTime)/1e3)),i=this._solution.x((n-this._startTime)/1e3),r(e,.4)&&(e=0),r(i,.4)&&(i=0),i+=this._endPosition),this._solution&&r(i-t,.4)&&r(e,.4)||(this._endPosition=t,this._solution=this._solve(i-this._endPosition,e),this._startTime=n)}},o.prototype.snap=function(t){this._startTime=(new Date).getTime(),this._endPosition=t,this._solution={x:function(){return 0},dx:function(){return 0}}},o.prototype.done=function(t){return t||(t=(new Date).getTime()),i(this.x(),this._endPosition,.4)&&r(this.dx(),.4)},o.prototype.reconfigure=function(t,e,n){this._m=t,this._k=e,this._c=n,this.done()||(this._solution=this._solve(this.x()-this._endPosition,this.dx()),this._startTime=(new Date).getTime())},o.prototype.springConstant=function(){return this._k},o.prototype.damping=function(){return this._c},o.prototype.configuration=function(){function t(t,e){t.reconfigure(1,e,t.damping())}function e(t,e){t.reconfigure(1,t.springConstant(),e)}return[{label:"Spring Constant",read:this.springConstant.bind(this),write:t.bind(this,this),min:100,max:1e3},{label:"Damping",read:this.damping.bind(this),write:e.bind(this,this),min:1,max:500}]}},"738e":function(t,e,n){"use strict";(function(t){var i,r,o=n("8af1"),a=n("f2b3");function s(t){if(i)t();else if(window.qq&&window.qq.maps)i=window.qq.maps,t();else if(r)r.push(t);else{r=[t];var e=__uniConfig.qqMapKey,n="_callback"+Date.now();window[n]=function(){delete window[n],i=window.qq.maps;var t=i.Callout=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.option=t;var e=t.map;this.position=t.position,this.index=1,this.visible=this.alwaysVisible="ALWAYS"===t.display,this.init(),Object.defineProperty(this,"onclick",{setter:function(t){this.div.onclick=t},getter:function(){return this.div.onclick}}),e&&this.setMap(e)};t.prototype=new i.Overlay,t.prototype.init=function(){var t=this.option,e=this.div=document.createElement("div"),n=e.style;n.position="absolute",n.whiteSpace="nowrap",n.transform="translateX(-50%) translateY(-100%)",n.zIndex=1,n.boxShadow=t.boxShadow||"none",n.display=this.visible?"block":"none";var i=this.triangle=document.createElement("div");i.setAttribute("style","position: absolute;white-space: nowrap;border-width: 4px;border-style: solid;border-color: #fff transparent transparent;border-image: initial;font-size: 12px;padding: 0px;background-color: transparent;width: 0px;height: 0px;transform: translate(-50%, 100%);left: 50%;bottom: 0;"),this.setStyle(t),this.changed=function(t){n.display=this.visible?"block":"none"},e.appendChild(i)},t.prototype.construct=function(){var t=this.div,e=this.getPanes();e.floatPane.appendChild(t)},t.prototype.draw=function(){var t=this.getProjection();if(this.position&&this.div&&t){var e=t.fromLatLngToDivPixel(this.position),n=this.div.style;n.left=e.x+"px",n.top=e.y+"px"}},t.prototype.destroy=function(){this.div.parentNode.removeChild(this.div),this.div=null,this.triangle=null},t.prototype.setOption=function(t){this.option=t,this.setPosition(t.position),"ALWAYS"===t.display?this.alwaysVisible=this.visible=!0:this.alwaysVisible=!1,this.setStyle(t)},t.prototype.setStyle=function(t){var e=this.div,n=e.style;e.innerText=t.content,n.lineHeight=(t.fontSize||14)+"px",n.fontSize=(t.fontSize||14)+"px",n.padding=(t.padding||8)+"px",n.color=t.color||"#000",n.borderRadius=(t.borderRadius||0)+"px",n.backgroundColor=t.bgColor||"#fff",n.marginTop="-"+(t.top+5)+"px",this.triangle.style.borderColor="".concat(t.bgColor||"#fff"," transparent transparent")},t.prototype.setPosition=function(t){this.position=t,this.draw()},r.forEach((function(t){return t()})),r=null};var o=document.createElement("script");o.src="https://map.qq.com/api/js?v=2.exp&key=".concat(e,"&callback=").concat(n,"&libraries=geometry"),document.body.appendChild(o)}}e["a"]={name:"Map",mixins:[o["f"]],props:{id:{type:String,default:""},latitude:{type:[String,Number],default:39.92},longitude:{type:[String,Number],default:116.46},scale:{type:[String,Number],default:16},markers:{type:Array,default:function(){return[]}},covers:{type:Array,default:function(){return[]}},includePoints:{type:Array,default:function(){return[]}},polyline:{type:Array,default:function(){return[]}},circles:{type:Array,default:function(){return[]}},controls:{type:Array,default:function(){return[]}},showLocation:{type:[Boolean,String],default:!1}},data:function(){return{center:{latitude:116.46,longitude:116.46},isMapReady:!1,isBoundsReady:!1,markersSync:[],polylineSync:[],circlesSync:[],controlsSync:[]}},watch:{latitude:function(){this.centerChange()},longitude:function(){this.centerChange()},scale:function(t){var e=this;this.mapReady((function(){e._map.setZoom(Number(t)||16)}))},markers:function(t,e){var n=this;this.mapReady((function(){var i=[],r=[],o=[],a=[],s=[];t.forEach((function(t){if("id"in t){for(var n=!1,s=0;s<e.length;s++){var c=e[s];"id"in c?c.id===t.id&&(n=!0,r.push(c.id),JSON.stringify(c)!==JSON.stringify(t)&&(o.push(c.id),a.push(t)),e.splice(s--,1)):e.splice(s--,1)}n||i.push(t)}else i.push(t)}));var c=n.markersSync;c.forEach((function(t){var e,i=t.id;r.indexOf(i)>=0?(e=o.indexOf(i))>=0&&n.changeMarker(t,a[e]):s.push(t)})),n.removeMarkers(s),n.createMarkers(i)}))},polyline:function(t){var e=this;this.mapReady((function(){e.createPolyline()}))},circles:function(){var t=this;this.mapReady((function(){t.createCircles()}))},controls:function(){var t=this;this.mapReady((function(){t.createControls()}))},includePoints:function(){var t=this;this.mapReady((function(){t.fitBounds(t.includePoints)}))},showLocation:function(t){var e=this;this.mapReady((function(){e[t?"createLocation":"removeLocation"]()}))}},created:function(){var t=this.latitude,e=this.longitude;t&&e&&(this.center.latitude=t,this.center.longitude=e)},mounted:function(){var t=this;s((function(){t.init()}))},beforeDestroy:function(){this.removeMarkers(this.markersSync),this.removePolyline(),this.removeCircles(),this.removeControls(),this.removeLocation()},methods:{_handleSubscribe:function(t){var e=this,n=t.type,r=t.data,o=void 0===r?{}:r;function a(t,e){t=t||{},t.errMsg="".concat(n,":").concat(e?"fail"+e:"ok");var i=e?o.fail:o.success;"function"===typeof i&&i(t),"function"===typeof o.complete&&o.complete(t)}switch(n){case"getCenterLocation":this.mapReady((function(){var t,n,i=e._map.getCenter();t=i.getLat(),n=i.getLng(),a({latitude:t,longitude:n})}));break;case"moveToLocation":var s=o.latitude,c=o.longitude,u=s&&c?new i.LatLng(s,c):this._locationPosition;u&&(this._map.setCenter(u),a({}));break;case"translateMarker":this.mapReady((function(){try{var t=e.getMarker(o.markerId),n=o.destination,r=o.duration,s=!!o.autoRotate,c=Number(o.rotate)?o.rotate:0,u=t.getRotation(),l=t.getPosition(),f=new i.LatLng(n.latitude,n.longitude),h=i.geometry.spherical.computeDistanceBetween(l,f)/1e3,d=("number"===typeof r?r:1e3)/36e5,p=h/d,g=i.event.addListener(t,"moving",(function(e){var n=e.latLng,i=t.label;i&&i.setPosition(n);var r=t.callout;r&&r.setPosition(n)})),m=i.event.addListener(t,"moveend",(function(e){m.remove(),g.remove(),t.lastPosition=l,t.setPosition(f);var n=t.label;n&&n.setPosition(f);var i=t.callout;i&&i.setPosition(f);var r=o.animationEnd;"function"===typeof r&&r()})),v=0;s&&(t.lastPosition&&(v=i.geometry.spherical.computeHeading(t.lastPosition,l)),c=i.geometry.spherical.computeHeading(l,f)-v),t.setRotation(u+c),t.moveTo(f,p)}catch(b){a(null,b)}}));break;case"includePoints":this.fitBounds(o.points);break;case"getRegion":this.boundsReady((function(){var t=e._map.getBounds(),n=t.getSouthWest(),i=t.getNorthEast();a({southwest:{latitude:n.getLat(),longitude:n.getLng()},northeast:{latitude:i.getLat(),longitude:i.getLng()}})}));break;case"getScale":this.mapReady((function(){a({scale:Number(e.scale)})}));break}},init:function(){var t=this,e=new i.LatLng(this.center.latitude,this.center.longitude),n=this._map=new i.Map(this.$refs.map,{center:e,zoom:Number(this.scale),scrollwheel:!1,disableDoubleClickZoom:!0,mapTypeControl:!1,zoomControl:!1,scaleControl:!1,minZoom:5,maxZoom:18,draggable:!0}),r=i.event.addListener(n,"bounds_changed",(function(e){r.remove(),t.isBoundsReady=!0,t.$emit("boundsready")}));i.event.addListener(n,"click",(function(){t.$trigger("click",{},{})})),i.event.addListener(n,"dragstart",(function(){t.$trigger("regionchange",{},{type:"begin"})})),i.event.addListener(n,"dragend",(function(){t.$trigger("regionchange",{},{type:"end"})})),i.event.addListener(n,"zoom_changed",(function(){t.$emit("update:scale",n.getZoom())})),i.event.addListener(n,"center_changed",(function(){var e,i,r=n.getCenter();e=r.getLat(),i=r.getLng(),t.$emit("update:latitude",e),t.$emit("update:longitude",i)})),this.markers&&Array.isArray(this.markers)&&this.markers.length&&this.createMarkers(this.markers),this.polyline&&Array.isArray(this.polyline)&&this.polyline.length&&this.createPolyline(),this.circles&&Array.isArray(this.circles)&&this.circles.length&&this.createCircles(),this.controls&&Array.isArray(this.controls)&&this.controls.length&&this.createControls(),this.showLocation&&this.createLocation(),this.includePoints&&Array.isArray(this.includePoints)&&this.includePoints.length&&this.fitBounds(this.includePoints,(function(){n.setCenter(e)})),this.isMapReady=!0,this.$emit("mapready")},centerChange:function(){var t=this,e=Number(this.latitude),n=Number(this.longitude);e===this.center.latitude&&n===this.center.longitude||(this.center.latitude=e,this.center.longitude=n,this._map&&this.mapReady((function(){t._map.setCenter(new i.LatLng(e,n))})))},createMarkers:function(t){var e=this,n=this._map,r=this.markersSync;t.forEach((function(t){var o=new i.Marker({map:n,flat:!0,autoRotation:!1});o.id=t.id,e.changeMarker(o,t),i.event.addListener(o,"click",(function(n){var i=o.callout;if(i){var r=i.div,s=r.parentNode;i.alwaysVisible||i.set("visible",!i.visible),i.visible&&(s.removeChild(r),s.appendChild(r))}Object(a["h"])(t,"id")&&e.$trigger("markertap",{},{markerId:t.id})})),r.push(o)}))},changeMarker:function(t,e){var n=this,r=this._map,o=e.title||e.name,s=new i.LatLng(e.latitude,e.longitude),c=new Image;c.onload=function(){var u,l,f,h,d=e.anchor||{},p=d.x,g=d.y;e.iconPath&&(e.width||e.height)?(l=e.width||c.width/c.height*e.height,f=e.height||c.height/c.width*e.width):(l=c.width/2,f=c.height/2),p=("number"===typeof p?p:.5)*l,g=("number"===typeof g?g:1)*f,h=f-(f-g),u=new i.MarkerImage(c.src,null,null,new i.Point(p,g),new i.Size(l,f)),t.setPosition(s),t.setIcon(u),t.setRotation(e.rotate||0);var m,v=e.label||{};t.label&&(t.label.setMap(null),delete t.label),v.content&&(m=new i.Label({position:s,map:r,clickable:!1,content:v.content,style:{border:"none",padding:"8px",background:"none",color:v.color,fontSize:(v.fontSize||14)+"px",lineHeight:(v.fontSize||14)+"px",marginLeft:v.x,marginTop:v.y}}),t.label=m);var b,y=e.callout||{},_=t.callout;y.content?b={id:e.id,position:s,map:r,top:h,content:y.content,color:y.color,fontSize:y.fontSize,borderRadius:y.borderRadius,bgColor:y.bgColor,padding:y.padding,boxShadow:y.boxShadow,display:y.display}:o&&(b={id:e.id,position:s,map:r,top:h,content:o,boxShadow:"0px 0px 3px 1px rgba(0,0,0,0.5)"}),b?_?_.setOption(b):(_=t.callout=new i.Callout(b),_.div.onclick=function(t){Object(a["h"])(e,"id")&&n.$trigger("callouttap",t,{markerId:e.id}),t.stopPropagation(),t.preventDefault()}):_&&(_.setMap(null),delete t.callout)},c.src=e.iconPath?this.$getRealPath(e.iconPath):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABQCAYAAABFyhZTAAANDElEQVR4nNWce4hc133Hv+fc92MeuytpV5ZXll2XuvTlUBTSP1IREsdNiKGEEAgE3EBLaBtK/2hNoQTStISUosiGOqVpQ+qkIdAax1FiG+oYIxyD4xi3uKlEXSFFke3d1e5od+a+H+ec/nHvmbkzs6ud2bmjTX7wY3b3zr3nfM7vd37n8Tt3CW6DiDP3EABSd/0KAEEuXBHzrsteFTiwVOBo+amUP9PK34ZuAcD30NoboTZgceYeCaQAUEvVAKiZ0lpiiv0Lgmi/imFLF5YV2SWFR1e0fGcDQF5qVn4y1Ag/E3DFmhJSB2Dk1D2Squ0HBdT3C0JPE6oco6oKqmm7PodnGXieQ3DWIYL/iCB/UWO95zTW2wCQlpqhgJ8J/MDApUUVFFY0AFiRdvwMJ8bvCaKcUW3bUE0DimGAKMpkz2QMLEnBkhhZEHICfoHy+AkrW3seQAwgQQHPyIUr/CD1nhq4tCpFAWoCsGNt5X2MWo9Qw/p1zXGgWiZAZu8teRQhCwLwOLpEefKolb3zDIAQBXyGAnwqa09Vq4pVDQBOqrTuTmn7c9S0H9QdB6ptT/O4iSWPY2S+DxYHFzTW+5zBti8BCFBYfCprTwxcwmoALABupK48lFPri0az1dSbjWkZDiSp5yPpdn2Vh39m5evPAPABRACySaH3Ba64sA7ABtD0tdXPUqvxKd1xoJrmDAjTSx7HCDsdroj0nJO99TiAHgprZwD4fi5+S+AKrAHA5UQ7EijH/05rND9sNJsglNaEMZ3wPEfq+8i97vdstv4IFdkWBi5+S2h1n2dL2IYAXQqU449pjdYHzFaruDr3edEelVJUmK02YpCPBD454uRrf0BFtlleTlAMX7vfu9eFSp91ALR95cRfq27zA2ariXK+cOhqtprQnOZ7AmXlLIA2ABeAXtZ9cuDSlVUUfbYVKCsPq27zo1arddiMY2q2WlCd5gd95fhnALTKOmslw/7A5RcVFGNsI6ILpzNi/rnu2IdPt4caDRc5Mf4opEu/DaBR1l3dDXo3CxMUEdkRoO2UuJ+3Wy1VUbXD5tpTKVVgt9s0I85fcahLKLqhvhvf0B/KFpFjbdOnRz+pOY17f5atK1W3LWiue8KnR38fQLNkGLPyaAvI8dZl0Jcz6J82bPuwWSZW03GRQ3s4JdYqigBmoOie48CVQGUBcAO68AnTbTQUVQWE+LlQSimsRsOKSPthFG49ZmU6Aq8DsAWomwnt4+bPgSuPqunYyIX6uwzqIoqIPdSXacW6clFgB6T9Xs0wFylVDrv+UyshFIZlOSFpP1ACG1Ury5mWdGcTgJkJ/UO2ZZVPqU+EqiL9xV8GWzoGAFC2t6C/eQkkS2stR7cs+KH2OwDOo2AKUcy1hQTur28FiJVDOa0bRm283HHhPfQxhL91BsIYXmyQLIX1yktofvdJ0N5OLeVpug4G5TcY1IaCvIuCLQHAq8A6ACOCe5+qag1CSBEMZpT01L3Y/vSfgi0e2fW60HSE730/4vtPY/Erj0J/8+LMZRIAmq7rUeLe75KdTRTACoCcVvqvBsBIhXG/qumoo0Plx5Zx80/+Yk/YqvBGE53PPILsxGotZWuahkxov4bCkDoARZy5h1S3UjUAKhf0pKrWE6x2Hv5DcMedwCaFCMPEzqf+GCB05rIVVQUHOVlySQuPAzNB7lAUBbOOickv/QrSe++bGFZKtnoK0f2nZy5foRRc0Dsw2C5WANDRvWRFAIv9/juDxr/5nqlhpcTvevfM5VNKwYHFijEVAEStWFgBQIWASQkKv5hBstVTM947W/mEABDCxMCgFBXgfkpECGgAmbW8seFnqntNc+byiSDggqgYSfPIKVc/2SUgcsH57C7V3T5wZWmvO3P5QnAAPMdwnotU59KkaBkR1AGs/fTqgYG1n16dHZhzQCAea8zKz4UTEdFl/EBZjCGxXn354Pe+8tLM5TPGAPAxN5PAQioR7CdZls1u4auXYf3wB1NX1Pjv/4Rx8Y2Zy8/zHAR8reTiko9W/sAAcIWwt+oAhhBofeMrUDfWJoZVtjtof/Xvayk7TTMo4D/BSL55FJiZNPvfNE1rKZT2ulj64mehX/m/fWG169ew9IW/hHJzqx7gLIVO00slWy6B1QpsBoC5SnR1O7K3GecLSg2ZBaWziSOffwTB+x5E8MGHkB8/MXx9cwPuf3wX9gvPgeT5zOUBgBACcZKmR63of1CwycS6UFFYeCjjrhD2WhTHD7iWVUsFwBic7z8L5/vPgh1dBneL5BsJg6lcflKJ4hgKYT8iENXTBAzl8lBgYOEMALOV9IUgDB9w55AoU26sQ7mxXvtzq+KHISyavogBV4oCXNAy8cSrF9pa+EaSJmtpWk/wup2a5zmiONle0MMflpD94xLkwhUhOykrL8TlJzNo9lQvDHHYe1TTai8MYSjZd0p3zjA4LcCB4XFYXowB5EeM4HkvDDpxmh4+xYSa5hm6fuAt6cH3Sp5kV+Aye55XvpAqRCSOmv5LLwgO3U0n1V4QwFLSf9UoD0tPjSrAomphoHDrBINDI/kxM3wxTMIf7/j+ocPsp90ggBcFV5bN8LnSeHHJIs+BjAFLt45QZNNjAOyIET3a8XwvTNLD9tg9NU4zbPa8dEmPzxIipKeGpabSnYeAyxbIS2BfftnVsrWmnjzWDQPkLD98uhHlgqMbBnC19PGmnl4rAUMMDrzk1SMQo1MpXt4QAPDKG7OjZvwKy4Ov3/R/9vrzVs9DmgZPrljRCyg8NCzr7o9adwx4xMpeqTEAdqcT/nuY+M9v9rxDh5S62fMQxP7Lq27wBIoYFJd17mFwnElUGXc71CLKlgowvONnrbrhl6/2sEoJuW/JcXa59fbJzTDATuRfu7sRfgmDgCthpXXF6H1jq4OyRWRr+QC65WeiEJEet+O/7fj+thfHOKx+6ycxtjy/u2Ilf6NSISdLsq59r9zt+NKuy6EKdFS2WBeFxVNHY5sLRnr27Z0dzhi77W7MGMNb2zu8ZaTnGnq+hoE37mDgynuewdxz/VdORuTDuqUWQcxO/8tU+ZObfnDbDbzpBzBV9m/LdvraCGzfKLc6hnjLBW8F2q88NATATjaib3pxcLFzG2dim74PLw5eP9mIv4U9PHC/M5eTrPCrQ5XszzElyFac9OwN3/P8NMG8TeslMbZCf/tEIzlHSX8m5VXqlGBkCDoQ8C5BrH+Ys6GzjZaRP3YzDCHmaFnOOW6GERaM/Jyt8u0SLijrcssgNTXwLtAy9AcAsjvc7JWMxc9seP7cDHzDD8B49NSKk72OwUyqV+rEsBMDl9DVICZbNgLATjXTf96OgiudMKzdup0wxHYcvHlXM/sGxvttiCnOSk8FXIrsz8PjMxXpspOffcfz8rTG+XbCcqx5Xrri5OcUKuQGRbXssaljrcC36M/posWuuTr/+lYY1ebKnTCCq/MnFkx2HYPAKWdSQ8u+uQCPQEvX6qFwrfyuVvadnTi4uFmDa28GAXbi4Men2tl5FPN7uSiYKkjNDFxCy/4sg0d/qLqjwR5b9/04Znue0d5X4jzHehDEJxrsUYwHy6n7bVVm2WnnKNxqyLXbJn/b1fkTswSwrSiCq/OvtUy+juHl6sTjbe3AFdeW0DJqZ3e182d3kujNThxh2o7biSJ0k+ji3Qv5sxj2Ig8H7LdVmSmXUhY8VilKkB1z2Jev9zzOuZiYl3GB656XL7vsHzC85Os35qzvH9bxWorAsNsFANKjDr9saeL82hRz7fUggKWJp4/Y/CoGw1//mWVZM8nMwLdw7fxUm31zKwo7vXT/s5S9NMVWFK7ds8C+heG9NR8zROVRqeXFoxHXlhZJDBXBoi0e34yi/YehKMKiLf5JU/p7yUONV9d7xHW+aSWhhzYAV1v81SBPLm7FY8ct+rIVxwjz5I3VFn8V4w1XiytLqQ24sgEoXbvviiuu+Me9rCyEwDXP48uu+CqGZ3G1urKUWt+l28W1QwDpMVdcZsgvrIXh2D0bUQRDxUvHXHEZw8GvVleWMo+XB6sbBnIznJ1s8a+9EwQ5rxyJ4pzjbd/P72xyuc1aTQLMNMHYS2oHrri2dM0QQNI0sWnrOL8eRf3vrkcRbB3n2xY2MEiP9NM88/ivD/N6PbTq2rIv5qtt8dRaGKaccwgh8E4Y5ne2xNMYb6B+tq9umQvwyDIyKDVxddw0VfH8jTjGZhzDVMWLDQNbGGzZzNW6wPwsXM05V7OR+fEmvn09CPiNKMKyi29jYN0Ag0BVe9+Vst/7w7OKnIEFKF6pMRdtrL3VxctMMOOoi2q2r5/LnWeF5vqK90gAGyTaXTy5ZAtpXRms5jIMjcq8LQwMnywIAVgrDVwuD+9K68oZ1dxcWcrcX+IfScHKwBRWfu9H8Xn2XSm3w8LAYHfEQ5F6TVGYWM6qYsy570q5Lf+mYSRH1QFwA8AGgJsooOXe7tzl/wGchYFKtBMCwAAAAABJRU5ErkJggg=="},removeMarkers:function(t){for(var e=0;e<t.length;e++){var n=t[e];n.label&&n.label.setMap(null),n.callout&&n.callout.setMap(null),n.setMap(null),t.splice(e--,1)}},createPolyline:function(){var t=this._map,e=this.polylineSync;this.removePolyline(),this.polyline.forEach((function(n){var r=[];if(n.points.forEach((function(t){r.push(new i.LatLng(t.latitude,t.longitude))})),n.borderWidth){var o=new i.Polyline({map:t,clickable:!1,path:r,strokeWeight:n.width+n.borderWidth,strokeColor:n.borderColor,strokeDashStyle:n.dottedLine?"dash":"solid"});e.push(o)}var a=new i.Polyline({map:t,clickable:!1,path:r,strokeWeight:n.width,strokeColor:n.color,strokeDashStyle:n.dottedLine?"dash":"solid"});e.push(a)}))},removePolyline:function(){var t=this.polylineSync;t.forEach((function(t){t.setMap(null)})),t.splice(0,t.length)},createCircles:function(){var t=this._map,e=this.circlesSync;this.removeCircles(),this.circles.forEach((function(n){var r=new i.LatLng(n.latitude,n.longitude);function o(t){var e=t.match(/#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?/);return e&&e.length?i.Color.fromHex(e[0],Number("0x"+e[1]||false)/255):void 0}var a=new i.Circle({map:t,center:r,clickable:!1,radius:n.radius,strokeWeight:n.strokeWidth,fillColor:o(n.fillColor),strokeColor:o(n.color),strokeDashStyle:"solid"});e.push(a)}))},removeCircles:function(){var t=this.circlesSync;t.forEach((function(t){t.setMap(null)})),t.splice(0,t.length)},createControls:function(){var t=this,e=this,n=this._map,r=this.controlsSync;this.removeControls(),this.controls.forEach((function(o){var a=o.position||{},s=document.createElement("div"),c=new Image;s.appendChild(c);var u=s.style;u.position="absolute",u.width=0,u.height=0,c.onload=function(){o.position.width&&(c.width=o.position.width),o.position.height&&(c.height=o.position.height);var t=c.style;t.position="absolute",t.left=(a.left||0)+"px",t.top=(a.top||0)+"px",t.maxWidth="initial"},c.src=t.$getRealPath(o.iconPath),c.onclick=function(t){o.clickable&&e.$trigger("controltap",t,{controlId:o.id})},n.controls[i.ControlPosition.TOP_LEFT].push(s),r.push(s)}))},removeControls:function(){var t=this.controlsSync;t.forEach((function(t){t.remove()})),t.splice(0,t.length)},createLocation:function(){var e=this,n=this._map,r=this._location;r&&this.removeLocation(),uni.getLocation({type:"gcj02",success:function(t){if(r===e._location){var o=new i.LatLng(t.latitude,t.longitude);r=new i.Marker({position:o,map:n,icon:new i.MarkerImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAC01BMVEUAAAAAef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef96quGStdqStdpbnujMzMzCyM7Gyc7Ky83MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwAef8GfP0yjfNWnOp0qOKKsdyYt9mju9aZt9mMstx1qeJYnekyjvIIfP0qivVmouaWttnMzMyat9lppOUujPQKffxhoOfNzc3Y2Njh4eHp6enu7u7y8vL19fXv7+/i4uLZ2dnOzs6auNgOf/sKff15quHR0dHx8fH9/f3////j4+N6quFdn+iywdPb29vw8PD+/v7c3NyywtLa2tr29vbS0tLd3d38/Pzf39/o6Ojc7f+q0v+HwP9rsf9dqv9Hnv9Vpv/q6urj8P+Vx/9Am/8Pgf8Iff/z8/OAvP95uf/n5+c5l//V6f+52v+y1//7+/vt7e0rkP/09PTQ0NDq9P8Whf+cy//W1tbe3t7A3v/m5ubs7OxOov/r6+vk5OQiaPjKAAAAknRSTlMACBZ9oB71/jiqywJBZATT6hBukRXv+zDCAVrkDIf4JbQsTb7eVeJLbwfa8Rh4G/OlPS/6/kxQ9/xdmZudoJxNVhng7B6wtWdzAtQOipcF1329wS44doK/BAkyP1pvgZOsrbnGXArAg34G2IsD1eMRe7bi7k5YnqFT9V0csyPedQyYD3p/Fje+hDpskq/MwpRBC6yKp2MAAAQdSURBVHja7Zn1exMxGIAPHbrhDsPdneHuNtzd3d3dIbjLh93o2o4i7TpgG1Jk0g0mMNwd/gTa5rq129reHnK5e/bk/TFNk/dJ7r5894XjGAwGg8GgTZasCpDIll1+hxw5vXLJLpEboTx5ZXbIhyzkl9fB28cqUaCgrBKFkI3CcjoUKYolihWXUSI7EihRUjaHXF52CVRKLoe8eZIdUOkyMknkRw6UlcehYAFHiXK+skgURk6Ul8OhQjFnCVRRBolKqRxQ5SzUHaqgNGSj7VCmalqJnDkoS5RF6ZCbroNvufQkUD6qEuXTdUA+3hQdqiEXVKfnUKOmK4latalJ1EEuoZZ6162HJ9x/4OChw0eOHj12/MTJU6dxG7XUu751tjNnz4ET5y9ctLZTSr0beKFLl89bpuUDrqgC1RqNWqsKuqqzNFw7e51S6u3tc+OmZUJ9kCHY6ECwOkRvab51iUrqXej2HYDQsHBjWgx3Ae7dppB6N2wEcF9jdMGDUIDGTaR2aNoM9FqjG7QmaN5CWgc/gIePjG559BigpZQOrYB/4jBfRGRUtDkmJjY6KjLCofkpD62lc2gDfMpWPIuLdwyV8XEpHgaddBZ+wBuSFcwJqSN2ovmZ/dfnOvCTxqGtwzq8SEjv4EhISn48eWgnhUP7DvDSvgzxrs6vV6+FLiro2EkCic4QKkzwJsH1KYreCp0eQhfyDl1B/w4P/xa5JVJ4U03QjbRD9x7wXlgH5IE3wmMBHXoSlugFAcI6f/AkkSi8q6HQm6xDn77wEQ8djTwSj3tqAMguRTe4ikeOQyJ4YV+KfkQl+oNW5GbY4gWOWgbwJ+kwAD6Fi90MK2ZsrIeBBCUGwRXbqJ+/iJMQliIEBhOU6AJhtlG/IpHE2bqrYQg5h6HA4yQiRqwEfkGCdTCMmMRw+IbPDCQaHCsCYAQxiZHw3TbmD/ESOHgHwShiEqPhp/gggYkSztIxxCRawy/bmEniJaJtfwiEscQkxkFgRqJESqQwwHhiEuMBp3Vm8RK/cZoHEzKXhCK2QxEPpiJe0YlKCFaKCNv/cYBNUsBRPlkJSc0U+dM7E9H0ThGJbgZT/iR7yj+VqMS06Qr4+OFm2JdCxIa8lugzkJs5K6MfxAaYPUcBpYG5khZJEkUUSb7DPCnKRfPBXj6M8FwuegoLpCgXcQszVjhbJFUJUee2hBhLoYTIcYtB57KY+opSMdVqwatSlZVj05aV//CwJLMX2DluaUcwhXm4ali2XOoLjxUrPV26zFtF4f5p0Gp310+z13BUWNvbehEXona6iAtX/zVZmtfN4WixfsNky4S6gCCVVq3RPLdfSfpv3MRRZfPoLc6Xs/5bt3EyMGzE9h07/Xft2t15z6i9+zgGg8FgMBgMBoPBYDAYDAYj8/APG67Rie8pUDsAAAAASUVORK5CYII=",null,null,new i.Point(22,22),new i.Size(44,44)),flat:!0,rotation:0}),e._location=r,a(),uni.onCompassChange((function(t){r.setRotation(t.direction)}))}},fail:function(e){t.error(e)}});var o=this;function a(){r===o._location&&setTimeout((function(){uni.getLocation({type:"gcj02",success:function(t){var e=o._locationPosition=new i.LatLng(t.latitude,t.longitude);r.setPosition(e)},fail:function(e){t.error(e)},complete:function(){a()}})}),1e3)}},removeLocation:function(){var t=this._location;t&&(t.setMap(null),this._location=null,this._locationPosition=null,uni.stopCompass())},fitBounds:function(t,e){var n=this;this.boundsReady((function(){var r=n._map,o=new i.LatLngBounds;t.forEach((function(t){var e=t.longitude,n=t.latitude,r=new i.LatLng(n,e);o.extend(r)})),r.fitBounds(o),"function"===typeof e&&e()}))},mapReady:function(t){this.isMapReady?t():this.$once("mapready",(function(){t()}))},boundsReady:function(t){this.isBoundsReady?t():this.$once("boundsready",(function(){t()}))},getMarker:function(t){for(var e=this.markersSync,n=0;n<e.length;n++){var i=e[n];if(i.id===t)return i}}}}}).call(this,n("3ad9")["default"])},7572:function(t,e,n){},"764a":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var i=n("f2b3"),r=n("85b6"),o=n("65a8"),a=n("33ed"),s=!!i["o"]&&{passive:!1};function c(e){if(uni.canIUse("css.var")){var n=e.$parent.$parent,i=n.navigationBar.type,r="default"===i||"float"===i?o["a"]:0,a=getApp().$children[0].showTabBar?o["b"]:0,s=uni.canIUse("css.env")?"env":uni.canIUse("css.constant")?"constant":"",c=r&&s?"calc(".concat(r,"px + ").concat(s,"(safe-area-inset-top))"):"".concat(r,"px"),u=a&&s?"calc(".concat(a,"px + ").concat(s,"(safe-area-inset-bottom))"):"".concat(a,"px"),l=document.documentElement.style;l.setProperty("--window-top",c),l.setProperty("--window-bottom",u),t.debug("".concat(e.$page.route,"[").concat(e.$page.id,"]：--window-top=").concat(c)),t.debug("".concat(e.$page.route,"[").concat(e.$page.id,"]：--window-bottom=").concat(u))}}function u(t){var e=!1,n=!1;t("onPageLoad",(function(t){c(t)})),t("onPageShow",(function(t){var o=t.$parent.$parent;t._isMounted&&c(t),n&&document.removeEventListener("touchmove",n,s),o.disableScroll&&(n=a["b"],document.addEventListener("touchmove",n,s));var u=Object(r["a"])(t.$options,"onPageScroll"),l=Object(r["a"])(t.$options,"onReachBottom"),f=o.onReachBottomDistance,h=Object(i["k"])(o.titleNView)&&"transparent"===o.titleNView.type||Object(i["k"])(o.navigationBar)&&"transparent"===o.navigationBar.type;e&&document.removeEventListener("scroll",e),(h||u||l)&&(e=Object(a["a"])(t.$page.id,{enablePageScroll:u,enablePageReachBottom:l,onReachBottomDistance:f,enableTransparentTitleNView:h}),requestAnimationFrame((function(){document.addEventListener("scroll",e)})))}))}}).call(this,n("3ad9")["default"])},"77d5":function(t,e,n){},"77e0":function(t,e,n){"use strict";n.r(e),function(t,n){e["default"]={data:function(){return{showToast:{visible:!1}}},created:function(){var e=this,i="",r=function(t){return function(n){i=t,setTimeout((function(){e.showToast=n}),10)}};t.on("onShowToast",r("onShowToast")),t.on("onShowLoading",r("onShowLoading"));var o=function(t){return function(){if(i){var r="";if("onHideToast"===t&&"onShowToast"!==i?r="请注意 showToast 与 hideToast 必须配对使用":"onHideLoading"===t&&"onShowLoading"!==i&&(r="请注意 showLoading 与 hideLoading 必须配对使用"),r)return n.warn(r);i="",setTimeout((function(){e.showToast.visible=!1}),10)}}};t.on("onHidePopup",o("onHidePopup")),t.on("onHideToast",o("onHideToast")),t.on("onHideLoading",o("onHideLoading"))}}}.call(this,n("0dd1"),n("3ad9")["default"])},"78a1":function(t,e,n){"use strict";n.r(e),n.d(e,"onKeyboardHeightChange",(function(){return a}));var i,r=n("a118"),o=n("db70");function a(t){i=t}Object(o["d"])("onKeyboardHeightChange",(function(t){i&&Object(r["a"])(i,t)}))},"7bb3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-checkbox",t._g({attrs:{disabled:t.disabled},on:{click:t._onClick}},t.$listeners),[n("div",{staticClass:"uni-checkbox-wrapper"},[n("div",{staticClass:"uni-checkbox-input",class:[t.checkboxChecked?"uni-checkbox-input-checked":""],style:{color:t.color}}),t._t("default")],2)])},r=[],o=n("8af1"),a={name:"Checkbox",mixins:[o["b"],o["e"]],props:{checked:{type:[Boolean,String],default:!1},id:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},color:{type:String,default:"#007aff"},value:{type:String,default:""}},data:function(){return{checkboxChecked:this.checked,checkboxValue:this.value}},watch:{checked:function(t){this.checkboxChecked=t},value:function(t){this.checkboxValue=t}},listeners:{"label-click":"_onClick","@label-click":"_onClick"},created:function(){this.$dispatch("CheckboxGroup","uni-checkbox-group-update",{type:"add",vm:this}),this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},beforeDestroy:function(){this.$dispatch("CheckboxGroup","uni-checkbox-group-update",{type:"remove",vm:this}),this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_onClick:function(t){this.disabled||(this.checkboxChecked=!this.checkboxChecked,this.$dispatch("CheckboxGroup","uni-checkbox-change",t))},_resetFormData:function(){this.checkboxChecked=!1}}},s=a,c=(n("f53a"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"7c2b":function(t,e,n){"use strict";var i=n("2c45"),r=n.n(i);r.a},"7d13":function(t,e,n){"use strict";n.r(e),n.d(e,"onAccelerometerChange",(function(){return s})),n.d(e,"startAccelerometer",(function(){return c})),n.d(e,"stopAccelerometer",(function(){return u}));var i=n("a118"),r=n("db70"),o=[];Object(r["d"])("onAccelerometerChange",(function(t){o.forEach((function(e){Object(i["a"])(e,t)}))}));var a=!1;function s(t){o.push(t),a||c()}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interval;if(!a)return a=!0,Object(r["c"])("enableAccelerometer",{enable:!0})}function u(){return a=!1,Object(r["c"])("enableAccelerometer",{enable:!1})}},"7d18":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var i=n("e2e2");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e,n){r(this,t),s(this,"_xhr",void 0),s(this,"_isAbort",void 0),s(this,"_callbacks",[]),this._xhr=e,this._callbackId=n}return a(t,[{key:"onProgressUpdate",value:function(t){"function"===typeof t&&this._callbacks.push(t)}},{key:"offProgressUpdate",value:function(t){var e=this._callbacks.indexOf(t);e>=0&&this._callbacks.splice(e,1)}},{key:"abort",value:function(){this._isAbort=!0,this._xhr&&(this._xhr.abort(),delete this._xhr)}}]),t}();function u(e,n){var r=e.url,o=e.file,a=e.filePath,s=e.name,u=e.files,l=e.header,f=e.formData,h=__uniConfig.networkTimeout&&__uniConfig.networkTimeout.uploadFile||6e4,d=t,p=d.invokeCallbackHandler,g=new c(null,n);function m(t){var e,i=new XMLHttpRequest,o=new FormData;Object.keys(f).forEach((function(t){o.append(t,f[t])})),Object.values(u).forEach((function(e,n){var i=e.name,r=t[n];o.append(i||"file",r,r.name||"file-".concat(Date.now()))})),i.open("POST",r),Object.keys(l).forEach((function(t){i.setRequestHeader(t,l[t])})),i.upload.onprogress=function(t){g._callbacks.forEach((function(e){var n=t.loaded,i=t.total,r=Math.round(n/i*100);e({progress:r,totalBytesSent:n,totalBytesExpectedToSend:i})}))},i.onerror=function(){clearTimeout(e),p(n,{errMsg:"uploadFile:fail"})},i.onabort=function(){clearTimeout(e),p(n,{errMsg:"uploadFile:fail abort"})},i.onload=function(){clearTimeout(e);var t=i.status;p(n,{errMsg:"uploadFile:ok",statusCode:t,data:i.responseText||i.response})},g._isAbort?p(n,{errMsg:"uploadFile:fail abort"}):(e=setTimeout((function(){i.upload.onprogress=i.onload=i.onabort=i.onerror=null,g.abort(),p(n,{errMsg:"uploadFile:fail timeout"})}),h),i.send(o),g._xhr=i)}return Array.isArray(u)&&u.length||(u=[{name:s,file:o,uri:a}]),Promise.all(u.map((function(t){var e=t.file,n=t.uri;return e instanceof File?Promise.resolve(e):Object(i["c"])(n)}))).then(m).catch((function(){setTimeout((function(){p(n,{errMsg:"uploadFile:fail file error"})}),0)})),g}}).call(this,n("0dd1"))},"7df2":function(t,e,n){},"7e6a":function(t,e,n){"use strict";var i=n("515d"),r=n.n(i);r.a},"811a":function(t,e,n){"use strict";n.r(e),n.d(e,"connectSocket",(function(){return h})),n.d(e,"sendSocketMessage",(function(){return d})),n.d(e,"closeSocket",(function(){return p})),n.d(e,"onSocketOpen",(function(){return g})),n.d(e,"onSocketError",(function(){return m})),n.d(e,"onSocketMessage",(function(){return v})),n.d(e,"onSocketClose",(function(){return b}));var i=n("a118"),r=n("db70");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var c=function(){function t(e){o(this,t),this.id=e,this._callbacks={open:[],close:[],error:[],message:[]},this.CLOSED=3,this.CLOSING=2,this.CONNECTING=0,this.OPEN=1,this.readyState=this.CLOSED}return s(t,[{key:"send",value:function(t){this.readyState!==this.OPEN&&this._callback(t,"sendSocketMessage:fail WebSocket is not connected");var e=Object(r["c"])("operateSocketTask",Object.assign({},t,{operationType:"send",socketTaskId:this.id})),n=e.errMsg;this._callback(t,n.replace("operateSocketTask","sendSocketMessage"))}},{key:"close",value:function(t){this.readyState=this.CLOSING;var e=Object(r["c"])("operateSocketTask",Object.assign({},t,{operationType:"close",socketTaskId:this.id})),n=e.errMsg;this._callback(t,n.replace("operateSocketTask","closeSocket"))}},{key:"onOpen",value:function(t){this._callbacks.open.push(t)}},{key:"onClose",value:function(t){this._callbacks.close.push(t)}},{key:"onError",value:function(t){this._callbacks.error.push(t)}},{key:"onMessage",value:function(t){this._callbacks.message.push(t)}},{key:"_callback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.success,n=t.fail,i=t.complete,r=arguments.length>1?arguments[1]:void 0,o={errMsg:r};/:ok$/.test(r)?"function"===typeof e&&e(o):"function"===typeof n&&n(o),"function"===typeof i&&i(o)}}]),t}(),u=Object.create(null),l=[],f=Object.create(null);function h(t,e){var n=Object(r["c"])("createSocketTask",t),o=n.socketTaskId,a=new c(o);return u[o]=a,l.push(a),setTimeout((function(){Object(i["a"])(e,{errMsg:"connectSocket:ok"})}),0),a}function d(t,e){var n=l[0];if(n&&n.readyState===n.OPEN)return Object(r["c"])("operateSocketTask",Object.assign({},t,{operationType:"send",socketTaskId:n.id}));Object(i["a"])(e,{errMsg:"sendSocketMessage:fail WebSocket is not connected"})}function p(t,e){var n=l[0];if(n)return n.readyState=n.CLOSING,Object(r["c"])("operateSocketTask",Object.assign({},t,{operationType:"close",socketTaskId:n.id}));Object(i["a"])(e,{errMsg:"closeSocket:fail WebSocket is not connected"})}function g(t){f.open=t}function m(t){f.error=t}function v(t){f.message=t}function b(t){f.close=t}Object(r["d"])("onSocketTaskStateChange",(function(t){var e=t.socketTaskId,n=t.state,r=t.data,o=(t.errMsg,u[e]);if(o){if("open"===n&&(o.readyState=o.OPEN),o===l[0]&&f[n]&&Object(i["a"])(f[n],"message"===n?{data:r}:{}),"error"===n||"close"===n){o.readyState=o.CLOSED,delete u[e];var a=l.indexOf(o);a>=0&&l.splice(a,1)}o._callbacks[n].forEach((function(t){"function"===typeof t&&t("message"===n?{data:r}:{})}))}}))},8188:function(t,e,n){"use strict";(function(t){var i=n("8af1"),r=n("18fd"),o=n("b253");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}e["a"]={name:"Editor",mixins:[i["f"],i["b"],i["d"]],props:{id:{type:String,default:""},readOnly:{type:[Boolean,String],default:!1},placeholder:{type:String,default:""},showImgSize:{type:[Boolean,String],default:!1},showImgToolbar:{type:[Boolean,String],default:!1},showImgResize:{type:[Boolean,String],default:!1}},data:function(){return{quillReady:!1}},computed:{},watch:{readOnly:function(t){if(this.quillReady){var e=this.quill;e.enable(!t),t||e.blur()}},placeholder:function(t){this.quillReady&&this.quill.root.setAttribute("data-placeholder",t)}},mounted:function(){var t=this,e=[];this.showImgSize&&e.push("DisplaySize"),this.showImgToolbar&&e.push("Toolbar"),this.showImgResize&&e.push("Resize"),this.loadQuill((function(){e.length?t.loadImageResizeModule((function(){t.initQuill(e)})):t.initQuill(e)}))},methods:{_handleSubscribe:function(e){var n,i,r,o=e.type,s=e.data,c=s.options,u=s.callbackId,l=this.quill,f=window.Quill;if(this.quillReady){switch(o){case"format":var h=c.name,d=void 0===h?"":h,p=c.value,g=void 0!==p&&p;i=l.getSelection(!0);var m=l.getFormat(i)[d]||!1;if(["bold","italic","underline","strike","ins"].includes(d))g=!m;else if("direction"===d){g=("rtl"!==g||!m)&&g;var v=l.getFormat(i).align;"rtl"!==g||v?g||"right"!==v||l.format("align",!1,f.sources.USER):l.format("align","right",f.sources.USER)}else if("indent"===d){var b="rtl"===l.getFormat(i).direction;g="+1"===g,b&&(g=!g),g=g?"+1":"-1"}else"list"===d&&(g="check"===g?"unchecked":g,m="checked"===m?"unchecked":m),g=m&&m!==(g||!1)||!m&&g?g:!m;l.format(d,g,f.sources.USER);break;case"insertDivider":i=l.getSelection(!0),l.insertText(i.index,"\n",f.sources.USER),l.insertEmbed(i.index+1,"divider",!0,f.sources.USER),l.setSelection(i.index+2,f.sources.SILENT);break;case"insertImage":i=l.getSelection(!0);var y=c.src,_=void 0===y?"":y,w=c.alt,S=void 0===w?"":w,k=c.width,C=void 0===k?"":k,T=c.height,x=void 0===T?"":T,O=c.extClass,E=void 0===O?"":O,M=c.data,j=void 0===M?{}:M,A=this.$getRealPath(_);l.insertEmbed(i.index,"image",A,f.sources.USER);var I=!!/^(file|blob):/.test(A)&&A;l.formatText(i.index,1,"data-local",I),l.formatText(i.index,1,"alt",S),l.formatText(i.index,1,"width",C),l.formatText(i.index,1,"height",x),l.formatText(i.index,1,"class",E),l.formatText(i.index,1,"data-custom",Object.keys(j).map((function(t){return"".concat(t,"=").concat(j[t])})).join("&")),l.setSelection(i.index+1,f.sources.SILENT);break;case"insertText":i=l.getSelection(!0);var $=c.text,P=void 0===$?"":$;l.insertText(i.index,P,f.sources.USER),l.setSelection(i.index+P.length,0,f.sources.SILENT);break;case"setContents":var B=c.delta,L=c.html;"object"===a(B)?l.setContents(B,f.sources.SILENT):"string"===typeof L?l.setContents(this.html2delta(L),f.sources.SILENT):r="contents is missing";break;case"getContents":n=this.getContents();break;case"clear":l.setContents([]);break;case"removeFormat":i=l.getSelection(!0);var N=f.import("parchment");i.length?l.removeFormat(i,f.sources.USER):Object.keys(l.getFormat(i)).forEach((function(t){N.query(t,N.Scope.INLINE)&&l.format(t,!1)}));break;case"undo":l.history.undo();break;case"redo":l.history.redo();break;default:break}this.updateStatus(i)}else r="not ready";u&&t.publishHandler("onEditorMethodCallback",{callbackId:u,data:Object.assign({},n,{errMsg:"".concat(o,":").concat(r?"fail "+r:"ok")})},this.$page.id)},loadQuill:function(t){if("function"!==typeof window.Quill){var e=document.createElement("script");e.src=window.plus?"./__uniappquill.js":"https://unpkg.com/quill@1.3.7/dist/quill.min.js",document.body.appendChild(e),e.onload=t}else"function"===typeof t&&t()},loadImageResizeModule:function(t){if("function"!==typeof window.ImageResize){var e=document.createElement("script");e.src=window.plus?"./__uniappquillimageresize.js":"https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js",document.body.appendChild(e),e.onload=t}else"function"===typeof t&&t()},initQuill:function(t){var e=this,n=window.Quill;o["a"](n);var i={toolbar:!1,readOnly:this.readOnly,placeholder:this.placeholder,modules:{}};t.length&&(n.register("modules/ImageResize",window.ImageResize.default),i.modules.ImageResize={modules:t});var r=this.quill=new n(this.$el,i),a=r.root,s=["focus","blur","input"];s.forEach((function(t){a.addEventListener(t,(function(n){"input"===t?n.stopPropagation():e.$trigger(t,n,e.getContents())}))})),r.on(n.events.TEXT_CHANGE,(function(){e.$trigger("input",{},e.getContents())})),r.on(n.events.SELECTION_CHANGE,this.updateStatus.bind(this)),r.on(n.events.SCROLL_OPTIMIZE,(function(){var t=r.selection.getRange()[0];e.updateStatus(t)})),r.clipboard.addMatcher(Node.ELEMENT_NODE,(function(t,n){return e.skipMatcher?n:{ops:n.ops.filter((function(t){var e=t.insert;return"string"===typeof e})).map((function(t){var e=t.insert;return{insert:e}}))}})),this.initKeyboard(a),this.quillReady=!0,this.$trigger("ready",event,{})},getContents:function(){var t=this.quill,e=t.root.innerHTML,n=t.getText(),i=t.getContents();return{html:e,text:n,delta:i}},html2delta:function(t){var e,n=["span","strong","b","ins","em","i","u","a","del","s","sub","sup","img","div","p","h1","h2","h3","h4","h5","h6","hr","ol","ul","li","br"],i="";Object(r["a"])(t,{start:function(t,r,o){if(n.includes(t)){e=!1;var a=r.map((function(t){var e=t.name,n=t.value;return"".concat(e,'="').concat(n,'"')})).join(" "),s="<".concat(t," ").concat(a," ").concat(o?"/":"",">");i+=s}else e=!o},end:function(t){e||(i+="</".concat(t,">"))},chars:function(t){e||(i+=t)}}),this.skipMatcher=!0;var o=this.quill.clipboard.convert(i);return this.skipMatcher=!1,o},updateStatus:function(t){var e=this,n=t?this.quill.getFormat(t):{},i=Object.keys(n);(i.length!==Object.keys(this.__status||{}).length||i.find((function(t){return n[t]!==e.__status[t]})))&&(this.__status=n,this.$trigger("statuschange",{},n))}}}}).call(this,n("501c"))},"81ea":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-tabbar",[n("div",{staticClass:"uni-tabbar",style:{backgroundColor:t.backgroundColor}},[n("div",{staticClass:"uni-tabbar-border",style:{backgroundColor:t.borderColor}}),t._l(t.list,(function(e,i){return n("div",{key:e.pagePath,staticClass:"uni-tabbar__item",on:{click:function(n){return t._switchTab(e,i)}}},[n("div",{staticClass:"uni-tabbar__bd"},[e.iconPath?n("div",{staticClass:"uni-tabbar__icon",class:{"uni-tabbar__icon__diff":!e.text}},[n("img",{attrs:{src:t._getRealPath(t.$route.meta.pagePath===e.pagePath?e.selectedIconPath:e.iconPath)}}),e.redDot?n("div",{staticClass:"uni-tabbar__reddot",class:{"uni-tabbar__badge":!!e.badge}},[t._v(" "+t._s(e.badge)+" ")]):t._e()]):t._e(),e.text?n("div",{staticClass:"uni-tabbar__label",style:{color:t.$route.meta.pagePath===e.pagePath?t.selectedColor:t.color,fontSize:e.iconPath?"10px":"14px"}},[t._v(" "+t._s(e.text)+" "),e.redDot&&!e.iconPath?n("div",{staticClass:"uni-tabbar__reddot",class:{"uni-tabbar__badge":!!e.badge}},[t._v(" "+t._s(e.badge)+" ")]):t._e()]):t._e()])])}))],2),n("div",{staticClass:"uni-placeholder"})])},r=[],o=n("a919"),a=o["a"],s=(n("f4e0"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null),u=c.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"uni-fade"}},[t.visible?n("uni-toast",{attrs:{"data-duration":t.duration}},[t.mask?n("div",{staticClass:"uni-mask",staticStyle:{background:"transparent"},on:{touchmove:function(t){t.preventDefault()}}}):t._e(),t.image||t.iconClass?n("div",{staticClass:"uni-toast"},[t.image?n("img",{staticClass:"uni-toast__icon",attrs:{src:t.image}}):n("i",{staticClass:"uni-icon_toast",class:t.iconClass}),n("p",{staticClass:"uni-toast__content"},[t._v(" "+t._s(t.title)+" ")])]):n("div",{staticClass:"uni-sample-toast"},[n("p",{staticClass:"uni-simple-toast__text"},[t._v(" "+t._s(t.title)+" ")])])]):t._e()],1)},f=[],h=n("5222"),d=h["a"],p=(n("ff28"),Object(s["a"])(d,l,f,!1,null,null,null)),g=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"uni-fade"}},[n("uni-modal",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"uni-mask"}),n("div",{staticClass:"uni-modal"},[t.title?n("div",{staticClass:"uni-modal__hd"},[n("strong",{staticClass:"uni-modal__title",domProps:{textContent:t._s(t.title)}})]):t._e(),n("div",{staticClass:"uni-modal__bd",domProps:{textContent:t._s(t.content)},on:{touchmove:function(t){t.stopPropagation()}}}),n("div",{staticClass:"uni-modal__ft"},[t.showCancel?n("div",{staticClass:"uni-modal__btn uni-modal__btn_default",style:{color:t.cancelColor},on:{click:function(e){return t._close("cancel")}}},[t._v(" "+t._s(t.cancelText)+" ")]):t._e(),n("div",{staticClass:"uni-modal__btn uni-modal__btn_primary",style:{color:t.confirmColor},on:{click:function(e){return t._close("confirm")}}},[t._v(" "+t._s(t.confirmText)+" ")])])])])],1)},v=[],b=n("5a56"),y={name:"Modal",mixins:[b["default"]],props:{title:{type:String,default:""},content:{type:String,default:""},showCancel:{type:Boolean,default:!0},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#000000"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#007aff"},visible:{type:Boolean,default:!1}},methods:{_close:function(t){this.$emit("close",t)}}},_=y,w=(n("2765"),Object(s["a"])(_,m,v,!1,null,null,null)),S=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-actionsheet",{on:{touchmove:function(t){t.preventDefault()}}},[n("transition",{attrs:{name:"uni-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"uni-mask",on:{click:function(e){return t._close(-1)}}})]),n("div",{staticClass:"uni-actionsheet",class:{"uni-actionsheet_toggle":t.visible}},[n("div",{staticClass:"uni-actionsheet__menu"},[t.title?n("div",{staticClass:"uni-actionsheet__title"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._l(t.itemList,(function(e,i){return n("div",{key:i,staticClass:"uni-actionsheet__cell",style:{color:t.itemColor},on:{click:function(e){return t._close(i)}}},[t._v(" "+t._s(e)+" ")])}))],2),n("div",{staticClass:"uni-actionsheet__action"},[n("div",{staticClass:"uni-actionsheet__cell",style:{color:t.itemColor},on:{click:function(e){return t._close(-1)}}},[t._v(" 取消 ")])])])],1)},C=[],T={name:"ActionSheet",props:{title:{type:String,default:""},itemList:{type:Array,default:function(){return[]}},itemColor:{type:String,default:"#000000"},visible:{type:Boolean,default:!1}},methods:{_close:function(t){this.$emit("close",t)}}},x=T,O=(n("4fef"),Object(s["a"])(x,k,C,!1,null,null,null)),E=O.exports,M={Toast:g,Modal:S,ActionSheet:E};function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e["a"]=A({TabBar:u},M)},"82b9":function(t,e,n){"use strict";function i(t){return function(e,n){e&&(n[t]=Math.round(e))}}n.r(e),n.d(e,"canvasGetImageData",(function(){return r})),n.d(e,"canvasPutImageData",(function(){return o})),n.d(e,"canvasToTempFilePath",(function(){return s})),n.d(e,"drawCanvas",(function(){return c}));var r={canvasId:{type:String,required:!0},x:{type:Number,required:!0,validator:i("x")},y:{type:Number,required:!0,validator:i("y")},width:{type:Number,required:!0,validator:i("width")},height:{type:Number,required:!0,validator:i("height")}},o={canvasId:{type:String,required:!0},data:{type:Uint8ClampedArray,required:!0},x:{type:Number,required:!0,validator:i("x")},y:{type:Number,required:!0,validator:i("y")},width:{type:Number,required:!0,validator:i("width")},height:{type:Number,validator:i("height")}},a={PNG:"png",JPG:"jpg",JPEG:"jpg"},s={x:{type:Number,default:0,validator:i("x")},y:{type:Number,default:0,validator:i("y")},width:{type:Number,validator:i("width")},height:{type:Number,validator:i("height")},destWidth:{type:Number,validator:i("destWidth")},destHeight:{type:Number,validator:i("destHeight")},canvasId:{type:String,require:!0},fileType:{type:String,validator:function(t,e){t=(t||"").toUpperCase(),e.fileType=t in a?a[t]:a.PNG}},quality:{type:Number,validator:function(t,e){t=Math.floor(t),e.quality=t>0&&t<1?t:1}}},c={canvasId:{type:String,require:!0},actions:{type:Array,require:!0},reserve:{type:Boolean,default:!1}}},"82c2":function(t,e,n){"use strict";n.r(e),n.d(e,"request",(function(){return h}));var i=n("f2b3"),r=n("a118"),o=n("db70");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var u=Object.create(null);function l(t,e){if("string"===typeof t.data&&65279===t.data.charCodeAt(0)&&(t.data=t.data.substr(1)),t.statusCode=parseInt(t.statusCode,10),Object(i["k"])(t.header)&&(t.header=Object.keys(t.header).reduce((function(e,n){var i=t.header[n];return Array.isArray(i)?e[n]=i.join(","):"string"===typeof i&&(e[n]=i),e}),{})),e.dataType&&"json"===e.dataType.toLowerCase())try{t.data=JSON.parse(t.data)}catch(n){}return t}Object(o["d"])("onRequestTaskStateChange",(function(t){var e=t.requestTaskId,n=t.state,i=t.data,o=t.statusCode,a=t.header,s=t.errMsg,c=u[e]||{},f=c.args,h=c.callbackId;if(h)switch(delete u[e],n){case"success":Object(r["a"])(h,l({data:i,statusCode:o,header:a,errMsg:"request:ok"},f));break;case"fail":Object(r["a"])(h,{errMsg:"request:fail "+s});break}}));var f=function(){function t(e){a(this,t),this.id=e}return c(t,[{key:"abort",value:function(){Object(o["c"])("operateRequestTask",{requestTaskId:this.id,operationType:"abort"})}},{key:"offHeadersReceived",value:function(){}},{key:"onHeadersReceived",value:function(){}}]),t}();function h(t,e){var n;for(var r in t.header)if("content-type"===r.toLowerCase()){n=t.header[r];break}"GET"!==t.method&&0===n.indexOf("application/json")&&Object(i["k"])(t.data)&&(t.data=JSON.stringify(t.data));var a=Object(o["c"])("createRequestTask",t),s=a.requestTaskId;return u[s]={args:t,callbackId:e},new f(s)}},8390:function(t,e){(function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),i=0;i<t.length;i++)n[t.charCodeAt(i)]=i;e.encode=function(e){var n,i=new Uint8Array(e),r=i.length,o="";for(n=0;n<r;n+=3)o+=t[i[n]>>2],o+=t[(3&i[n])<<4|i[n+1]>>4],o+=t[(15&i[n+1])<<2|i[n+2]>>6],o+=t[63&i[n+2]];return r%3===2?o=o.substring(0,o.length-1)+"=":r%3===1&&(o=o.substring(0,o.length-2)+"=="),o},e.decode=function(t){var e,i,r,o,a,s=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(s--,"="===t[t.length-2]&&s--);var l=new ArrayBuffer(s),f=new Uint8Array(l);for(e=0;e<c;e+=4)i=n[t.charCodeAt(e)],r=n[t.charCodeAt(e+1)],o=n[t.charCodeAt(e+2)],a=n[t.charCodeAt(e+3)],f[u++]=i<<2|r>>4,f[u++]=(15&r)<<4|o>>2,f[u++]=(3&o)<<6|63&a;return l}})()},"83a6":function(t,e,n){"use strict";e["a"]={data:function(){return{hovering:!1}},props:{hoverClass:{type:String,default:"none"},hoverStopPropagation:{type:Boolean,default:!1},hoverStartTime:{type:[Number,String],default:50},hoverStayTime:{type:[Number,String],default:400}},methods:{_hoverTouchStart:function(t){var e=this;t._hoverPropagationStopped||this.hoverClass&&"none"!==this.hoverClass&&!this.disabled&&(t.touches.length>1||(this.hoverStopPropagation&&(t._hoverPropagationStopped=!0),this._hoverTouch=!0,this._hoverStartTimer=setTimeout((function(){e.hovering=!0,e._hoverTouch||e._hoverReset()}),this.hoverStartTime)))},_hoverTouchEnd:function(t){this._hoverTouch=!1,this.hovering&&this._hoverReset()},_hoverReset:function(){var t=this;requestAnimationFrame((function(){clearTimeout(t._hoverStayTimer),t._hoverStayTimer=setTimeout((function(){t.hovering=!1}),t.hoverStayTime)}))},_hoverTouchCancel:function(t){this._hoverTouch=!1,this.hovering=!1,clearTimeout(this._hoverStartTimer)}}}},"84e0":function(t,e,n){"use strict";n.r(e),function(t){function i(e){var n=getCurrentPages();return n.length&&t.publishHandler("pageScrollTo",e,n[n.length-1].$page.id),{}}n.d(e,"pageScrollTo",(function(){return i}))}.call(this,n("0dd1"))},8542:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return T})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return E}));var i=n("f2b3");function r(t){return c(t)||s(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}var f=["invoke","success","fail","complete","returnValue"],h={},d={};function p(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?g(n):n}function g(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function m(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function v(t,e){Object.keys(e).forEach((function(n){-1!==f.indexOf(n)&&Object(i["j"])(e[n])&&(t[n]=p(t[n],e[n]))}))}function b(t,e){t&&e&&Object.keys(e).forEach((function(n){-1!==f.indexOf(n)&&Object(i["j"])(e[n])&&m(t[n],e[n])}))}function y(t,e){"string"===typeof t&&Object(i["k"])(e)?v(d[t]||(d[t]={}),e):Object(i["k"])(t)&&v(h,t)}function _(t,e){"string"===typeof t?Object(i["k"])(e)?b(d[t],e):delete d[t]:Object(i["k"])(t)&&b(h,t)}function w(t){return function(e){return t(e)||e}}function S(t){return!!t&&("object"===l(t)||"function"===typeof t)&&"function"===typeof t.then}function k(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(w(r));else{var o=r(e);if(S(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach((function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){k(t[n],e).then((function(t){return Object(i["j"])(r)&&r(t)||t}))}}})),e}function T(t,e){var n=[];Array.isArray(h.returnValue)&&n.push.apply(n,r(h.returnValue));var i=d[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,r(i.returnValue)),n.forEach((function(t){e=t(e)||e})),e}function x(t){var e=Object.create(null);Object.keys(h).forEach((function(t){"returnValue"!==t&&(e[t]=h[t].slice())}));var n=d[t];return n&&Object.keys(n).forEach((function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))})),e}function O(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=x(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=k(a.invoke,n);return s.then((function(t){return e.apply(void 0,[C(a,t)].concat(r))}))}return e.apply(void 0,[C(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var E={returnValue:function(t){return S(t)?t.then((function(t){return t[1]})).catch((function(t){return t[0]})):t}}},"854d":function(t,e,n){"use strict";var i=n("2883"),r=n.n(i);r.a},"85b6":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s}));var i=["SystemAsyncLoading","SystemAsyncError"];function r(t){return!(!t.$parent||"PageBody"!==t.$parent.$options.name)&&-1===i.indexOf(t.$options.name)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return Array.isArray(t[e])&&t[e].length}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=JSON.parse(JSON.stringify(t)),n=Object.keys(e),i=n.length;if(i)for(var r=0;r<i;r++){var o=n[r],a=o.length;if("v"===o.substr(0,1)&&(9===a||10===a)){delete e[o];break}}return e}function s(t){return t+="",-1!==t.indexOf("upx")?uni.upx2px(parseInt(t)||0):parseInt(t)||0}},8793:function(t,e,n){var i={"./action-sheet.js":"626d","./index.js":"f1ea","./modal.js":"ee4f","./toast.js":"77e0","./transition.js":"5a56"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="8793"},8842:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-movable-view",t._g({},t.$listeners),[n("v-uni-resize-sensor",{on:{resize:t.setParent}}),t._t("default")],2)},r=[],o=n("ba15");function a(t,e,n){return t>e-n&&t<e+n}function s(t,e){return a(t,0,e)}function c(){}function u(t,e){this._m=t,this._f=1e3*e,this._startTime=0,this._v=0}function l(t,e,n){this._m=t,this._k=e,this._c=n,this._solution=null,this._endPosition=0,this._startTime=0}function f(t,e,n){this._springX=new l(t,e,n),this._springY=new l(t,e,n),this._springScale=new l(t,e,n),this._startTime=0}c.prototype.x=function(t){return Math.sqrt(t)},u.prototype.setV=function(t,e){var n=Math.pow(Math.pow(t,2)+Math.pow(e,2),.5);this._x_v=t,this._y_v=e,this._x_a=-this._f*this._x_v/n,this._y_a=-this._f*this._y_v/n,this._t=Math.abs(t/this._x_a)||Math.abs(e/this._y_a),this._lastDt=null,this._startTime=(new Date).getTime()},u.prototype.setS=function(t,e){this._x_s=t,this._y_s=e},u.prototype.s=function(t){void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),t>this._t&&(t=this._t,this._lastDt=t);var e=this._x_v*t+.5*this._x_a*Math.pow(t,2)+this._x_s,n=this._y_v*t+.5*this._y_a*Math.pow(t,2)+this._y_s;return(this._x_a>0&&e<this._endPositionX||this._x_a<0&&e>this._endPositionX)&&(e=this._endPositionX),(this._y_a>0&&n<this._endPositionY||this._y_a<0&&n>this._endPositionY)&&(n=this._endPositionY),{x:e,y:n}},u.prototype.ds=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),t>this._t&&(t=this._t),{dx:this._x_v+this._x_a*t,dy:this._y_v+this._y_a*t}},u.prototype.delta=function(){return{x:-1.5*Math.pow(this._x_v,2)/this._x_a||0,y:-1.5*Math.pow(this._y_v,2)/this._y_a||0}},u.prototype.dt=function(){return-this._x_v/this._x_a},u.prototype.done=function(){var t=a(this.s().x,this._endPositionX)||a(this.s().y,this._endPositionY)||this._lastDt===this._t;return this._lastDt=null,t},u.prototype.setEnd=function(t,e){this._endPositionX=t,this._endPositionY=e},u.prototype.reconfigure=function(t,e){this._m=t,this._f=1e3*e},l.prototype._solve=function(t,e){var n=this._c,i=this._m,r=this._k,o=n*n-4*i*r;if(0===o){var a=-n/(2*i),s=t,c=e/(a*t);return{x:function(t){return(s+c*t)*Math.pow(Math.E,a*t)},dx:function(t){var e=Math.pow(Math.E,a*t);return a*(s+c*t)*e+c*e}}}if(o>0){var u=(-n-Math.sqrt(o))/(2*i),l=(-n+Math.sqrt(o))/(2*i),f=(e-u*t)/(l-u),h=t-f;return{x:function(t){var e,n;return t===this._t&&(e=this._powER1T,n=this._powER2T),this._t=t,e||(e=this._powER1T=Math.pow(Math.E,u*t)),n||(n=this._powER2T=Math.pow(Math.E,l*t)),h*e+f*n},dx:function(t){var e,n;return t===this._t&&(e=this._powER1T,n=this._powER2T),this._t=t,e||(e=this._powER1T=Math.pow(Math.E,u*t)),n||(n=this._powER2T=Math.pow(Math.E,l*t)),h*u*e+f*l*n}}}var d=Math.sqrt(4*i*r-n*n)/(2*i),p=-n/2*i,g=t,m=(e-p*t)/d;return{x:function(t){return Math.pow(Math.E,p*t)*(g*Math.cos(d*t)+m*Math.sin(d*t))},dx:function(t){var e=Math.pow(Math.E,p*t),n=Math.cos(d*t),i=Math.sin(d*t);return e*(m*d*n-g*d*i)+p*e*(m*i+g*n)}}},l.prototype.x=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._endPosition+this._solution.x(t):0},l.prototype.dx=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._solution.dx(t):0},l.prototype.setEnd=function(t,e,n){if(n||(n=(new Date).getTime()),t!==this._endPosition||!s(e,.1)){e=e||0;var i=this._endPosition;this._solution&&(s(e,.1)&&(e=this._solution.dx((n-this._startTime)/1e3)),i=this._solution.x((n-this._startTime)/1e3),s(e,.1)&&(e=0),s(i,.1)&&(i=0),i+=this._endPosition),this._solution&&s(i-t,.1)&&s(e,.1)||(this._endPosition=t,this._solution=this._solve(i-this._endPosition,e),this._startTime=n)}},l.prototype.snap=function(t){this._startTime=(new Date).getTime(),this._endPosition=t,this._solution={x:function(){return 0},dx:function(){return 0}}},l.prototype.done=function(t){return t||(t=(new Date).getTime()),a(this.x(),this._endPosition,.1)&&s(this.dx(),.1)},l.prototype.reconfigure=function(t,e,n){this._m=t,this._k=e,this._c=n,this.done()||(this._solution=this._solve(this.x()-this._endPosition,this.dx()),this._startTime=(new Date).getTime())},l.prototype.springConstant=function(){return this._k},l.prototype.damping=function(){return this._c},l.prototype.configuration=function(){function t(t,e){t.reconfigure(1,e,t.damping())}function e(t,e){t.reconfigure(1,t.springConstant(),e)}return[{label:"Spring Constant",read:this.springConstant.bind(this),write:t.bind(this,this),min:100,max:1e3},{label:"Damping",read:this.damping.bind(this),write:e.bind(this,this),min:1,max:500}]},f.prototype.setEnd=function(t,e,n,i){var r=(new Date).getTime();this._springX.setEnd(t,i,r),this._springY.setEnd(e,i,r),this._springScale.setEnd(n,i,r),this._startTime=r},f.prototype.x=function(){var t=((new Date).getTime()-this._startTime)/1e3;return{x:this._springX.x(t),y:this._springY.x(t),scale:this._springScale.x(t)}},f.prototype.done=function(){var t=(new Date).getTime();return this._springX.done(t)&&this._springY.done(t)&&this._springScale.done(t)},f.prototype.reconfigure=function(t,e,n){this._springX.reconfigure(t,e,n),this._springY.reconfigure(t,e,n),this._springScale.reconfigure(t,e,n)};var h=n("f2b3"),d=!1;function p(t){d||(d=!0,requestAnimationFrame((function(){t(),d=!1})))}function g(t,e){if(t===e)return 0;var n=t.offsetLeft;return t.offsetParent?n+=g(t.offsetParent,e):0}function m(t,e){if(t===e)return 0;var n=t.offsetTop;return t.offsetParent?n+=m(t.offsetParent,e):0}function v(t,e){return+((1e3*t-1e3*e)/1e3).toFixed(1)}function b(t,e,n){var i=function(t){t&&t.id&&cancelAnimationFrame(t.id),t&&(t.cancelled=!0)},r={id:0,cancelled:!1};function o(e,n,i,r){if(!e||!e.cancelled){i(n);var a=t.done();a||e.cancelled||(e.id=requestAnimationFrame(o.bind(null,e,n,i,r))),a&&r&&r(n)}}return o(r,t,e,n),{cancel:i.bind(null,r),model:t}}var y={name:"MovableView",mixins:[o["a"]],props:{direction:{type:String,default:"none"},inertia:{type:[Boolean,String],default:!1},outOfBounds:{type:[Boolean,String],default:!1},x:{type:[Number,String],default:0},y:{type:[Number,String],default:0},damping:{type:[Number,String],default:20},friction:{type:[Number,String],default:2},disabled:{type:[Boolean,String],default:!1},scale:{type:[Boolean,String],default:!1},scaleMin:{type:[Number,String],default:.5},scaleMax:{type:[Number,String],default:10},scaleValue:{type:[Number,String],default:1},animation:{type:[Boolean,String],default:!0}},data:function(){return{xSync:this._getPx(this.x),ySync:this._getPx(this.y),scaleValueSync:Number(this.scaleValue)||1,width:0,height:0,minX:0,minY:0,maxX:0,maxY:0}},computed:{dampingNumber:function(){var t=Number(this.damping);return isNaN(t)?20:t},frictionNumber:function(){var t=Number(this.friction);return isNaN(t)||t<=0?2:t},scaleMinNumber:function(){var t=Number(this.scaleMin);return isNaN(t)?.5:t},scaleMaxNumber:function(){var t=Number(this.scaleMax);return isNaN(t)?10:t},xMove:function(){return"all"===this.direction||"horizontal"===this.direction},yMove:function(){return"all"===this.direction||"vertical"===this.direction}},watch:{x:function(t){this.xSync=this._getPx(t)},xSync:function(t){this._setX(t)},y:function(t){this.ySync=this._getPx(t)},ySync:function(t){this._setY(t)},scaleValue:function(t){this.scaleValueSync=Number(t)||0},scaleValueSync:function(t){this._setScaleValue(t)},scaleMinNumber:function(){this._setScaleMinOrMax()},scaleMaxNumber:function(){this._setScaleMinOrMax()}},created:function(){this._offset={x:0,y:0},this._scaleOffset={x:0,y:0},this._translateX=0,this._translateY=0,this._scale=1,this._oldScale=1,this._STD=new f(1,9*Math.pow(this.dampingNumber,2)/40,this.dampingNumber),this._friction=new u(1,this.frictionNumber),this._declineX=new c,this._declineY=new c,this.__touchInfo={historyX:[0,0],historyY:[0,0],historyT:[0,0]}},mounted:function(){this.touchtrack(this.$el,"_onTrack"),this.setParent(),this._friction.reconfigure(1,this.frictionNumber),this._STD.reconfigure(1,9*Math.pow(this.dampingNumber,2)/40,this.dampingNumber),this.$el.style.transformOrigin="center"},methods:{_getPx:function(t){return/\d+[ur]px$/i.test(t)?uni.upx2px(parseFloat(t)):Number(t)||0},_setX:function(t){if(this.xMove){if(t+this._scaleOffset.x===this._translateX)return this._translateX;this._SFA&&this._SFA.cancel(),this._animationTo(t+this._scaleOffset.x,this.ySync+this._scaleOffset.y,this._scale)}return t},_setY:function(t){if(this.yMove){if(t+this._scaleOffset.y===this._translateY)return this._translateY;this._SFA&&this._SFA.cancel(),this._animationTo(this.xSync+this._scaleOffset.x,t+this._scaleOffset.y,this._scale)}return t},_setScaleMinOrMax:function(){if(!this.scale)return!1;this._updateScale(this._scale,!0),this._updateOldScale(this._scale)},_setScaleValue:function(t){return!!this.scale&&(t=this._adjustScale(t),this._updateScale(t,!0),this._updateOldScale(t),t)},__handleTouchStart:function(){this._isScaling||this.disabled||(Object(h["e"])({disable:!0}),this._FA&&this._FA.cancel(),this._SFA&&this._SFA.cancel(),this.__touchInfo.historyX=[0,0],this.__touchInfo.historyY=[0,0],this.__touchInfo.historyT=[0,0],this.xMove&&(this.__baseX=this._translateX),this.yMove&&(this.__baseY=this._translateY),this.$el.style.willChange="transform",this._checkCanMove=null,this._firstMoveDirection=null,this._isTouching=!0)},__handleTouchMove:function(t){var e=this;if(!this._isScaling&&!this.disabled&&this._isTouching){var n=this._translateX,i=this._translateY;if(null===this._firstMoveDirection&&(this._firstMoveDirection=Math.abs(t.detail.dx/t.detail.dy)>1?"htouchmove":"vtouchmove"),this.xMove&&(n=t.detail.dx+this.__baseX,this.__touchInfo.historyX.shift(),this.__touchInfo.historyX.push(n),this.yMove||null!==this._checkCanMove||(this._checkCanMove=Math.abs(t.detail.dx/t.detail.dy)<1)),this.yMove&&(i=t.detail.dy+this.__baseY,this.__touchInfo.historyY.shift(),this.__touchInfo.historyY.push(i),this.xMove||null!==this._checkCanMove||(this._checkCanMove=Math.abs(t.detail.dy/t.detail.dx)<1)),this.__touchInfo.historyT.shift(),this.__touchInfo.historyT.push(t.detail.timeStamp),!this._checkCanMove){t.preventDefault();var r="touch";n<this.minX?this.outOfBounds?(r="touch-out-of-bounds",n=this.minX-this._declineX.x(this.minX-n)):n=this.minX:n>this.maxX&&(this.outOfBounds?(r="touch-out-of-bounds",n=this.maxX+this._declineX.x(n-this.maxX)):n=this.maxX),i<this.minY?this.outOfBounds?(r="touch-out-of-bounds",i=this.minY-this._declineY.x(this.minY-i)):i=this.minY:i>this.maxY&&(this.outOfBounds?(r="touch-out-of-bounds",i=this.maxY+this._declineY.x(i-this.maxY)):i=this.maxY),p((function(){e._setTransform(n,i,e._scale,r)}))}}},__handleTouchEnd:function(){var t=this;if(!this._isScaling&&!this.disabled&&this._isTouching&&(Object(h["e"])({disable:!1}),this.$el.style.willChange="auto",this._isTouching=!1,!this._checkCanMove&&!this._revise("out-of-bounds")&&this.inertia)){var e=1e3*(this.__touchInfo.historyX[1]-this.__touchInfo.historyX[0])/(this.__touchInfo.historyT[1]-this.__touchInfo.historyT[0]),n=1e3*(this.__touchInfo.historyY[1]-this.__touchInfo.historyY[0])/(this.__touchInfo.historyT[1]-this.__touchInfo.historyT[0]);this._friction.setV(e,n),this._friction.setS(this._translateX,this._translateY);var i=this._friction.delta().x,r=this._friction.delta().y,o=i+this._translateX,a=r+this._translateY;o<this.minX?(o=this.minX,a=this._translateY+(this.minX-this._translateX)*r/i):o>this.maxX&&(o=this.maxX,a=this._translateY+(this.maxX-this._translateX)*r/i),a<this.minY?(a=this.minY,o=this._translateX+(this.minY-this._translateY)*i/r):a>this.maxY&&(a=this.maxY,o=this._translateX+(this.maxY-this._translateY)*i/r),this._friction.setEnd(o,a),this._FA=b(this._friction,(function(){var e=t._friction.s(),n=e.x,i=e.y;t._setTransform(n,i,t._scale,"friction")}),(function(){t._FA.cancel()}))}},_onTrack:function(t){switch(t.detail.state){case"start":this.__handleTouchStart();break;case"move":this.__handleTouchMove(t);break;case"end":this.__handleTouchEnd()}},_getLimitXY:function(t,e){var n=!1;return t>this.maxX?(t=this.maxX,n=!0):t<this.minX&&(t=this.minX,n=!0),e>this.maxY?(e=this.maxY,n=!0):e<this.minY&&(e=this.minY,n=!0),{x:t,y:e,outOfBounds:n}},setParent:function(){if(this.$parent._isMounted){this._FA&&this._FA.cancel(),this._SFA&&this._SFA.cancel();var t=this.scale?this.scaleValueSync:1;this._updateOffset(),this._updateWH(t),this._updateBoundary(),this._translateX=this.xSync+this._scaleOffset.x,this._translateY=this.ySync+this._scaleOffset.y;var e=this._getLimitXY(this._translateX,this._translateY),n=e.x,i=e.y;this._setTransform(n,i,t,"",!0),this._updateOldScale(t)}},_updateOffset:function(){this._offset.x=g(this.$el,this.$parent.$el),this._offset.y=m(this.$el,this.$parent.$el)},_updateWH:function(t){t=t||this._scale,t=this._adjustScale(t);var e=this.$el.getBoundingClientRect();this.height=e.height/this._scale,this.width=e.width/this._scale;var n=this.height*t,i=this.width*t;this._scaleOffset.x=(i-this.width)/2,this._scaleOffset.y=(n-this.height)/2},_updateBoundary:function(){var t=0-this._offset.x+this._scaleOffset.x,e=this.$parent.width-this.width-this._offset.x-this._scaleOffset.x;this.minX=Math.min(t,e),this.maxX=Math.max(t,e);var n=0-this._offset.y+this._scaleOffset.y,i=this.$parent.height-this.height-this._offset.y-this._scaleOffset.y;this.minY=Math.min(n,i),this.maxY=Math.max(n,i)},_beginScale:function(){this._isScaling=!0},_endScale:function(){this._isScaling=!1,this._updateOldScale(this._scale)},_setScale:function(t){this.scale&&(t=this._adjustScale(t),t=this._oldScale*t,this._beginScale(),this._updateScale(t))},_updateScale:function(t,e){var n=this;if(this.scale){t=this._adjustScale(t),this._updateWH(t),this._updateBoundary();var i=this._getLimitXY(this._translateX,this._translateY),r=i.x,o=i.y;e?this._animationTo(r,o,t,"",!0,!0):p((function(){n._setTransform(r,o,t,"",!0,!0)}))}},_updateOldScale:function(t){this._oldScale=t},_adjustScale:function(t){return t=Math.max(.5,this.scaleMinNumber,t),t=Math.min(10,this.scaleMaxNumber,t),t},_animationTo:function(t,e,n,i,r,o){var a=this;this._FA&&this._FA.cancel(),this._SFA&&this._SFA.cancel(),this.xMove||(t=this._translateX),this.yMove||(e=this._translateY),this.scale||(n=this._scale);var s=this._getLimitXY(t,e);t=s.x,e=s.y,this.animation?(this._STD._springX._solution=null,this._STD._springY._solution=null,this._STD._springScale._solution=null,this._STD._springX._endPosition=this._translateX,this._STD._springY._endPosition=this._translateY,this._STD._springScale._endPosition=this._scale,this._STD.setEnd(t,e,n,1),this._SFA=b(this._STD,(function(){var t=a._STD.x(),e=t.x,n=t.y,s=t.scale;a._setTransform(e,n,s,i,r,o)}),(function(){a._SFA.cancel()}))):this._setTransform(t,e,n,i,r,o)},_revise:function(t){var e=this._getLimitXY(this._translateX,this._translateY),n=e.x,i=e.y,r=e.outOfBounds;return r&&this._animationTo(n,i,this._scale,t),r},_setTransform:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;null!==t&&"NaN"!==t.toString()&&"number"===typeof t||(t=this._translateX||0),null!==e&&"NaN"!==e.toString()&&"number"===typeof e||(e=this._translateY||0),t=Number(t.toFixed(1)),e=Number(e.toFixed(1)),n=Number(n.toFixed(1)),this._translateX===t&&this._translateY===e||r||this.$trigger("change",{},{x:v(t,this._scaleOffset.x),y:v(e,this._scaleOffset.y),source:i}),this.scale||(n=this._scale),n=this._adjustScale(n),n=+n.toFixed(3),o&&n!==this._scale&&this.$trigger("scale",{},{x:t,y:e,scale:n});var a="translateX("+t+"px) translateY("+e+"px) translateZ(0px) scale("+n+")";this.$el.style.transform=a,this.$el.style.webkitTransform=a,this._translateX=t,this._translateY=e,this._scale=n}}},_=y,w=(n("7c2b"),n("2877")),S=Object(w["a"])(_,i,r,!1,null,null,null);e["default"]=S.exports},8875:function(t,e,n){var i,r,o;(function(n,a){r=[],i=a,o="function"===typeof i?i.apply(e,r):i,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(f){var t,e,n,i=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,r=/@([^@]*):(\d+):(\d+)\s*$/gi,o=i.exec(f.stack)||r.exec(f.stack),a=o&&o[1]||!1,s=o&&o[2]||!1,c=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(s-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var l=0;l<u.length;l++){if("interactive"===u[l].readyState)return u[l];if(u[l].src===a)return u[l];if(a===c&&u[l].innerHTML&&u[l].innerHTML.trim()===n)return u[l]}return null}}return t}))},"893e":function(t,e,n){"use strict";(function(t,i){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"b",(function(){return p})),n.d(e,"g",(function(){return g})),n.d(e,"a",(function(){return m})),n.d(e,"f",(function(){return b})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return _})),n.d(e,"c",(function(){return w}));var c=t,u=c.invokeCallbackHandler,l=["open","close","error","message"],f={},h=[],d=function(){function t(e,n,o){var a,c=this;r(this,t),s(this,"_webSocket",void 0);try{var d=this._webSocket=new WebSocket(e,n);d.binaryType="arraybuffer",this._callbacks={},l.forEach((function(t){c._callbacks[t]=[],d.addEventListener(t,(function(e){var n="message"===t?{data:e.data}:{};if(c._callbacks[t].forEach((function(e){try{e(n)}catch(r){i.error("thirdScriptError\n".concat(r,";at socketTask.on").concat(t[0].toUpperCase()+t.substr(1)," callback function\n"),r)}})),c===h[0]&&f[t]&&u(f[t],n),"error"===t||"close"===t){var r=h.indexOf(c);r>=0&&h.splice(r,1)}}))}));var p=["CLOSED","CLOSING","CONNECTING","OPEN","readyState"];p.forEach((function(t){Object.defineProperty(c,t,{get:function(){return d[t]}})}))}catch(g){a=g}o(a,this)}return a(t,[{key:"send",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.data,n=this._webSocket;try{if(n.readyState!==n.OPEN)throw new Error("SocketTask.readyState is not OPEN");n.send(e),this._callback(t,"sendSocketMessage:ok")}catch(i){this._callback(t,"sendSocketMessage:fail ".concat(i))}}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._webSocket,n=[];n.push(t.code||1e3),"string"===typeof t.reason&&n.push(t.reason);try{e.close.apply(e,n),this._callback(t,"sendSocketMessage:ok")}catch(i){this._callback(t,"sendSocketMessage:fail ".concat(i))}}},{key:"_callback",value:function(t,e){var n=t.success,i=t.fail,r=t.complete,o={errMsg:e};/:ok$/.test(e)?"function"===typeof n&&n(o):"function"===typeof i&&i(o),"function"===typeof r&&r(o)}}]),t}();function p(t,e){var n=t.url,i=t.protocols;return new d(n,i,(function(t,n){t||h.push(n),u(e,{errMsg:"connectSocket:"+(t?"fail ".concat(t):"ok")})}))}function g(t,e){var n=h[0];n&&n.readyState===n.OPEN?n.send(Object.assign({},t,{complete:function(t){u(e,t)}})):u(e,{errMsg:"sendSocketMessage:fail WebSocket is not connected "})}function m(t,e){var n=h[0];n?n.close(Object.assign({},t,{complete:function(t){u(e,t)}})):u(e,{errMsg:"closeSocket:fail WebSocket is not connected"})}function v(t){return function(e){f[t]=e}}l.forEach((function(t){var e=t[0].toUpperCase()+t.substr(1);d.prototype["on".concat(e)]=function(e){this._callbacks[t].push(e)}}));var b=v("open"),y=v("error"),_=v("message"),w=v("close")}).call(this,n("0dd1"),n("3ad9")["default"])},"898f":function(t,e,n){"use strict";n.r(e),n.d(e,"previewImage",(function(){return a}));var i=n("db70"),r="longPressActionsCallback",o={};function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o=t.longPressActions||{},(o.success||o.fail||o.complete)&&(o.callbackId=r),Object(i["c"])("previewImagePlus",t)}Object(i["d"])(r,(function(t){var e=t.errMsg||"";new RegExp("\\:\\s*fail").test(e)?o.fail&&o.fail(t):o.success&&o.success(t),o.complete&&o.complete(t)}))},"8a36":function(t,e,n){"use strict";(function(t){var i=n("f2b3");e["a"]={props:{id:{type:String,default:""}},created:function(){var t=this;this._addListeners(this.id),this.$watch("id",(function(e,n){t._removeListeners(n,!0),t._addListeners(e,!0)}))},beforeDestroy:function(){this._removeListeners(this.id)},methods:{_addListeners:function(e,n){var r=this;if(!n||e){var o=this.$options.listeners;Object(i["k"])(o)&&Object.keys(o).forEach((function(i){n?0!==i.indexOf("@")&&0!==i.indexOf("uni-")&&t.on("uni-".concat(i,"-").concat(r.$page.id,"-").concat(e),r[o[i]]):0===i.indexOf("@")?r.$on("uni-".concat(i.substr(1)),r[o[i]]):0===i.indexOf("uni-")?t.on(i,r[o[i]]):e&&t.on("uni-".concat(i,"-").concat(r.$page.id,"-").concat(e),r[o[i]])}))}},_removeListeners:function(e,n){var r=this;if(!n||e){var o=this.$options.listeners;Object(i["k"])(o)&&Object.keys(o).forEach((function(i){n?0!==i.indexOf("@")&&0!==i.indexOf("uni-")&&t.off("uni-".concat(i,"-").concat(r.$page.id,"-").concat(e),r[o[i]]):0===i.indexOf("@")?r.$off("uni-".concat(i.substr(1)),r[o[i]]):0===i.indexOf("uni-")?t.off(i,r[o[i]]):e&&t.off("uni-".concat(i,"-").concat(r.$page.id,"-").concat(e),r[o[i]])}))}}}}}).call(this,n("501c"))},"8aec":function(t,e,n){"use strict";var i=n("5363"),r=n("72b3");function o(t,e,n){this._extent=t,this._friction=e||new i["a"](.01),this._spring=n||new r["a"](1,90,20),this._startTime=0,this._springing=!1,this._springOffset=0}function a(t,e,n){function i(t,e,n,r){if(!t||!t.cancelled){n(e);var o=e.done();o||t.cancelled||(t.id=requestAnimationFrame(i.bind(null,t,e,n,r))),o&&r&&r(e)}}function r(t){t&&t.id&&cancelAnimationFrame(t.id),t&&(t.cancelled=!0)}var o={id:0,cancelled:!1};return i(o,t,e,n),{cancel:r.bind(null,o),model:t}}function s(t,e){e=e||{},this._element=t,this._options=e,this._enableSnap=e.enableSnap||!1,this._itemSize=e.itemSize||0,this._enableX=e.enableX||!1,this._enableY=e.enableY||!1,this._shouldDispatchScrollEvent=!!e.onScroll,this._enableX?(this._extent=(e.scrollWidth||this._element.offsetWidth)-this._element.parentElement.offsetWidth,this._scrollWidth=e.scrollWidth):(this._extent=(e.scrollHeight||this._element.offsetHeight)-this._element.parentElement.offsetHeight,this._scrollHeight=e.scrollHeight),this._position=0,this._scroll=new o(this._extent,e.friction,e.spring),this._onTransitionEnd=this.onTransitionEnd.bind(this),this.updatePosition()}o.prototype.snap=function(t,e){this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(e)},o.prototype.set=function(t,e){this._friction.set(t,e),t>0&&e>=0?(this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(0)):t<-this._extent&&e<=0?(this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(-this._extent)):this._springing=!1,this._startTime=(new Date).getTime()},o.prototype.x=function(t){if(!this._startTime)return 0;if(t||(t=((new Date).getTime()-this._startTime)/1e3),this._springing)return this._spring.x()+this._springOffset;var e=this._friction.x(t),n=this.dx(t);return(e>0&&n>=0||e<-this._extent&&n<=0)&&(this._springing=!0,this._spring.setEnd(0,n),e<-this._extent?this._springOffset=-this._extent:this._springOffset=0,e=this._spring.x()+this._springOffset),e},o.prototype.dx=function(t){var e=0;return e=this._lastTime===t?this._lastDx:this._springing?this._spring.dx(t):this._friction.dx(t),this._lastTime=t,this._lastDx=e,e},o.prototype.done=function(){return this._springing?this._spring.done():this._friction.done()},o.prototype.setVelocityByEnd=function(t){this._friction.setVelocityByEnd(t)},o.prototype.configuration=function(){var t=this._friction.configuration();return t.push.apply(t,this._spring.configuration()),t},s.prototype.onTouchStart=function(){this._startPosition=this._position,this._lastChangePos=this._startPosition,this._startPosition>0?this._startPosition/=.5:this._startPosition<-this._extent&&(this._startPosition=(this._startPosition+this._extent)/.5-this._extent),this._animation&&(this._animation.cancel(),this._scrolling=!1),this.updatePosition()},s.prototype.onTouchMove=function(t,e){var n=this._startPosition;this._enableX?n+=t:this._enableY&&(n+=e),n>0?n*=.5:n<-this._extent&&(n=.5*(n+this._extent)-this._extent),this._position=n,this.updatePosition(),this.dispatchScroll()},s.prototype.onTouchEnd=function(t,e,n){var i=this;if(this._enableSnap&&this._position>-this._extent&&this._position<0){if(this._enableY&&(Math.abs(e)<this._itemSize&&Math.abs(n.y)<300||Math.abs(n.y)<150))return void this.snap();if(this._enableX&&(Math.abs(t)<this._itemSize&&Math.abs(n.x)<300||Math.abs(n.x)<150))return void this.snap()}if(this._enableX?this._scroll.set(this._position,n.x):this._enableY&&this._scroll.set(this._position,n.y),this._enableSnap){var r=this._scroll._friction.x(100),o=r%this._itemSize,s=Math.abs(o)>this._itemSize/2?r-(this._itemSize-Math.abs(o)):r-o;s<=0&&s>=-this._extent&&this._scroll.setVelocityByEnd(s)}this._lastTime=Date.now(),this._lastDelay=0,this._scrolling=!0,this._lastChangePos=this._position,this._lastIdx=Math.floor(Math.abs(this._position/this._itemSize)),this._animation=a(this._scroll,(function(){var t=Date.now(),e=(t-i._scroll._startTime)/1e3,n=i._scroll.x(e);i._position=n,i.updatePosition();var r=i._scroll.dx(e);i._shouldDispatchScrollEvent&&t-i._lastTime>i._lastDelay&&(i.dispatchScroll(),i._lastDelay=Math.abs(2e3/r),i._lastTime=t)}),(function(){i._enableSnap&&(s<=0&&s>=-i._extent&&(i._position=s,i.updatePosition()),"function"===typeof i._options.onSnap&&i._options.onSnap(Math.floor(Math.abs(i._position)/i._itemSize))),i._shouldDispatchScrollEvent&&i.dispatchScroll(),i._scrolling=!1}))},s.prototype.onTransitionEnd=function(){this._element.style.transition="",this._element.style.webkitTransition="",this._element.removeEventListener("transitionend",this._onTransitionEnd),this._element.removeEventListener("webkitTransitionEnd",this._onTransitionEnd),this._snapping&&(this._snapping=!1),this.dispatchScroll()},s.prototype.snap=function(){var t=this._itemSize,e=this._position%t,n=Math.abs(e)>this._itemSize/2?this._position-(t-Math.abs(e)):this._position-e;this._position!==n&&(this._snapping=!0,this.scrollTo(-n),"function"===typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize)))},s.prototype.scrollTo=function(t,e){this._animation&&(this._animation.cancel(),this._scrolling=!1),"number"===typeof t&&(this._position=-t),this._position<-this._extent?this._position=-this._extent:this._position>0&&(this._position=0),this._element.style.transition="transform "+(e||.2)+"s ease-out",this._element.style.webkitTransition="-webkit-transform "+(e||.2)+"s ease-out",this.updatePosition(),this._element.addEventListener("transitionend",this._onTransitionEnd),this._element.addEventListener("webkitTransitionEnd",this._onTransitionEnd)},s.prototype.dispatchScroll=function(){if("function"===typeof this._options.onScroll&&Math.round(this._lastPos)!==Math.round(this._position)){this._lastPos=this._position;var t={target:{scrollLeft:this._enableX?-this._position:0,scrollTop:this._enableY?-this._position:0,scrollHeight:this._scrollHeight||this._element.offsetHeight,scrollWidth:this._scrollWidth||this._element.offsetWidth,offsetHeight:this._element.parentElement.offsetHeight,offsetWidth:this._element.parentElement.offsetWidth}};this._options.onScroll(t)}},s.prototype.update=function(t,e,n){var i=0,r=this._position;this._enableX?(i=this._element.childNodes.length?(e||this._element.offsetWidth)-this._element.parentElement.offsetWidth:0,this._scrollWidth=e):(i=this._element.childNodes.length?(e||this._element.offsetHeight)-this._element.parentElement.offsetHeight:0,this._scrollHeight=e),"number"===typeof t&&(this._position=-t),this._position<-i?this._position=-i:this._position>0&&(this._position=0),this._itemSize=n||this._itemSize,this.updatePosition(),r!==this._position&&(this.dispatchScroll(),"function"===typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize))),this._extent=i,this._scroll._extent=i},s.prototype.updatePosition=function(){var t="";this._enableX?t="translateX("+this._position+"px) translateZ(0)":this._enableY&&(t="translateY("+this._position+"px) translateZ(0)"),this._element.style.webkitTransform=t,this._element.style.transform=t},s.prototype.isScrolling=function(){return this._scrolling||this._snapping};e["a"]={methods:{initScroller:function(t,e){this._touchInfo={trackingID:-1,maxDy:0,maxDx:0},this._scroller=new s(t,e),this.__handleTouchStart=this._handleTouchStart.bind(this),this.__handleTouchMove=this._handleTouchMove.bind(this),this.__handleTouchEnd=this._handleTouchEnd.bind(this),this._initedScroller=!0},_findDelta:function(t){var e=this._touchInfo;return"move"===t.detail.state||"end"===t.detail.state?{x:t.detail.dx,y:t.detail.dy}:{x:t.screenX-e.x,y:t.screenY-e.y}},_handleTouchStart:function(t){var e=this._touchInfo,n=this._scroller;n&&("start"===t.detail.state?(e.trackingID="touch",e.x=t.detail.x,e.y=t.detail.y):(e.trackingID="mouse",e.x=t.screenX,e.y=t.screenY),e.maxDx=0,e.maxDy=0,e.historyX=[0],e.historyY=[0],e.historyTime=[t.detail.timeStamp],e.listener=n,n.onTouchStart&&n.onTouchStart(),event.preventDefault())},_handleTouchMove:function(t){var e=this._touchInfo;if(-1!==e.trackingID){t.preventDefault();var n=this._findDelta(t);if(n){for(e.maxDy=Math.max(e.maxDy,Math.abs(n.y)),e.maxDx=Math.max(e.maxDx,Math.abs(n.x)),e.historyX.push(n.x),e.historyY.push(n.y),e.historyTime.push(t.detail.timeStamp);e.historyTime.length>10;)e.historyTime.shift(),e.historyX.shift(),e.historyY.shift();e.listener&&e.listener.onTouchMove&&e.listener.onTouchMove(n.x,n.y,t.detail.timeStamp)}}},_handleTouchEnd:function(t){var e=this._touchInfo;if(-1!==e.trackingID){t.preventDefault();var n=this._findDelta(t);if(n){var i=e.listener;e.trackingID=-1,e.listener=null;var r=e.historyTime.length,o={x:0,y:0};if(r>2)for(var a=e.historyTime.length-1,s=e.historyTime[a],c=e.historyX[a],u=e.historyY[a];a>0;){a--;var l=e.historyTime[a],f=s-l;if(f>30&&f<50){o.x=(c-e.historyX[a])/(f/1e3),o.y=(u-e.historyY[a])/(f/1e3);break}}e.historyTime=[],e.historyX=[],e.historyY=[],i&&i.onTouchEnd&&i.onTouchEnd(n.x,n.y,o)}}}}}},"8af1":function(t,e,n){"use strict";function i(t,e){for(var n=this.$children,r=n.length,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];for(var c=0;c<r;c++){var u=n[c],l=u.$options.name&&u.$options.name.substr(4);if(~t.indexOf(l))return u.$emit.apply(u,[e].concat(a)),!1;if(!1===i.apply(u,[t,e].concat([a])))return!1}}n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return o["a"]})),n.d(e,"c",(function(){return a["a"]})),n.d(e,"f",(function(){return s["a"]})),n.d(e,"d",(function(){return c["a"]})),n.d(e,"a",(function(){return l}));var r={methods:{$dispatch:function(t,e){"string"===typeof t&&(t=[t]);var n=this.$parent||this.$root,i=n.$options.name&&n.$options.name.substr(4);while(n&&(!i||!~t.indexOf(i)))n=n.$parent,n&&(i=n.$options.name&&n.$options.name.substr(4));if(n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];n.$emit.apply(n,[e].concat(o))}},$broadcast:function(t,e){"string"===typeof t&&(t=[t]);for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(this,[t,e].concat(r))}}},o=n("8a36"),a=n("83a6"),s=n("1b6f"),c=n("5a23"),u=n("f2b3"),l={name:"BaseInput",mixins:[r,c["a"]],model:{prop:"value",event:"update:value"},props:{value:{type:[String,Number],default:""}},data:function(){return{valueSync:this._getValueString(this.value)}},created:function(){var t=this,e=this.__valueChange=Object(u["b"])((function(e){t.valueSync=t._getValueString(e)}),100);this.$watch("value",e),this.__triggerInput=Object(u["p"])((function(e,n){t.$emit("update:value",n.value),t.$trigger("input",e,n)}),100),this.$triggerInput=function(e,n){t.__valueChange.cancel(),t.__triggerInput(e,n)}},beforeDestroy:function(){this.__valueChange.cancel(),this.__triggerInput.cancel()},methods:{_getValueString:function(t){return null===t?"":String(t)}}};u["o"]},"8af4":function(t,e,n){"use strict";(function(t){function i(e,n,i,r){n.__$qh_videos__||(n.__$qh_videos__={});var o=n.__$qh_videos__[e]||(n.__$qh_videos__[e]=qh.createVideoContext(e,n));if(o)return o[i]?"seek"===i?o.seek(r.position):"playbackRate"===i?o.playbackRate(r.rate):o[i](r):t.error("".concat(i," is not yet implemented"))}n.d(e,"a",(function(){return i}))}).call(this,n("3ad9")["default"])},"8b18":function(t,e,n){},"8b3f":function(t,e,n){"use strict";n.r(e),n.d(e,"onNetworkStatusChange",(function(){return a}));var i=n("a118"),r=n("db70"),o=[];function a(t){o.push(t)}Object(r["d"])("onNetworkStatusChange",(function(t){o.forEach((function(e){Object(i["a"])(e,t)}))}))},"8b61":function(t,e,n){},"8bbf":function(t,n){t.exports=e},"8c15":function(t,e,n){"use strict";n.r(e),function(t){var i=n("85b6"),r=n("d4b6"),o=n("61c2"),a=n("c4c5");function s(){t.publishHandler("onPageReady",{},this.$page.id)}e["default"]={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.routes;Object(r["a"])();var n=function(t,e){for(var n=t.target;n&&n!==e;n=n.parentNode)if(n.tagName&&0===n.tagName.indexOf("UNI-"))break;return n};t.prototype.$handleEvent=function(t){if(t instanceof Event){var e=n(t,this.$el);t=r["b"].call(this,t.type,t,{},e||t.target,t.currentTarget)}return t},t.prototype.$getComponentDescriptor=function(t,e){return Object(a["a"])(t||this,e)},Object.defineProperty(t.prototype,"$ownerInstance",{get:function(){return this.$getComponentDescriptor(this)}}),t.prototype.$handleWxsEvent=function(t){if(t instanceof Event){var e=t.currentTarget,i=e&&e.__vue__&&e.__vue__.$getComponentDescriptor(e.__vue__,!1);t=r["b"].call(this,t.type,t,{},n(t,this.$el)||t.target,t.currentTarget),t.instance=i}return t},t.mixin({beforeCreate:function(){var t=this,e=this.$options,n=e.wxs;n&&Object.keys(n).forEach((function(e){t[e]=n[e]})),e.behaviors&&e.behaviors.length&&Object(o["a"])(e,this),Object(i["b"])(this)&&(e.mounted=e.mounted?[].concat(s,e.mounted):[s])}})}}}.call(this,n("501c"))},"8ce3":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var i=n("e2e2"),r=n("f2b3"),o=t,a=o.invokeCallbackHandler,s=null,c=function(t){var e=document.createElement("input");return e.type="file",Object(r["r"])(e,{position:"absolute",visibility:"hidden","z-index":-999,width:0,height:0,top:0,left:0}),e.accept="video/*",1===t.sourceType.length&&"camera"===t.sourceType[0]&&(e.capture="camera"),e};function u(t,e){var n=t.sourceType;s&&(document.body.removeChild(s),s=null),s=c({sourceType:n}),document.body.appendChild(s),s.addEventListener("change",(function(t){var n,r=t.target.files[0],o={errMsg:"chooseVideo:ok",tempFile:r,size:r.size,duration:0,width:0,height:0,name:r.name};Object.defineProperty(o,"tempFilePath",{get:function(){return n=n||Object(i["a"])(this.tempFile),n}});var s=document.createElement("video");if(void 0!==s.onloadedmetadata){var c=Object(i["a"])(r);s.onloadedmetadata=function(){Object(i["b"])(c),a(e,Object.assign(o,{duration:s.duration||0,width:s.videoWidth||0,height:s.videoHeight||0}))},setTimeout((function(){s.onloadedmetadata=null,Object(i["b"])(c),a(e,o)}),300),s.src=c}else a(e,o)})),s.click()}}).call(this,n("0dd1"))},"8e16":function(t,e,n){"use strict";var i=n("ea49"),r=n.n(i);r.a},"8f7e":function(t,e,n){"use strict";n.r(e);var i=n("8bbf"),r=n.n(i),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-app",{class:{"uni-app--showtabbar":t.showTabBar}},[n("keep-alive",{attrs:{include:t.keepAliveInclude}},[n("router-view",{key:t.key})],1),t.hasTabBar?n("tab-bar",t._b({directives:[{name:"show",rawName:"v-show",value:t.showTabBar,expression:"showTabBar"}]},"tab-bar",t.tabBar,!1)):t._e(),t.$options.components.Toast?n("toast",t._b({},"toast",t.showToast,!1)):t._e(),t.$options.components.ActionSheet?n("action-sheet",t._b({on:{close:t._onActionSheetClose}},"action-sheet",t.showActionSheet,!1)):t._e(),t.$options.components.Modal?n("modal",t._b({on:{close:t._onModalClose}},"modal",t.showModal,!1)):t._e(),t.sysComponents&&t.sysComponents.length?t._l(t.sysComponents,(function(t,e){return n(t,{key:e,tag:"component"})})):t._e()],2)},a=[],s=n("cdc1"),c=s["a"],u=(n("854d"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null),f=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-page",{attrs:{"data-page":t.$route.meta.pagePath}},["none"!==t.navigationBar.type?n("page-head",t._b({},"page-head",t.navigationBar,!1)):t._e(),t.enablePullDownRefresh?n("page-refresh",{ref:"refresh",attrs:{color:t.refreshOptions.color,offset:t.refreshOptions.offset}}):t._e(),t.enablePullDownRefresh?n("page-body",{nativeOn:{touchstart:function(e){return t._touchstart(e)},touchmove:function(e){return t._touchmove(e)},touchend:function(e){return t._touchend(e)},touchcancel:function(e){return t._touchend(e)}}},[t._t("page")],2):n("page-body",[t._t("page")],2)],1)},d=[],p=n("27d0"),g=p["a"],m=(n("6226"),Object(u["a"])(g,h,d,!1,null,null,null)),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uni-async-error",on:{click:t._onClick}},[t._v(" 连接服务器超时，点击屏幕重试 ")])},y=[],_={name:"AsyncError",methods:{_onClick:function(){window.location.reload()}}},w=_,S=(n("b628"),Object(u["a"])(w,b,y,!1,null,null,null)),k=S.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uni-async-loading"},[n("i",{staticClass:"uni-loading"})])}],x={name:"AsyncLoading"},O=x,E=(n("5727"),Object(u["a"])(O,C,T,!1,null,null,null)),M=E.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uni-system-choose-location"},[n("system-header",{attrs:{confirm:!!t.data},on:{back:t._back,confirm:t._choose}},[t._v(" 选择位置 ")]),n("div",{staticClass:"map-content"},[n("iframe",{attrs:{src:t.src,allow:"geolocation",seamless:"",sandbox:"allow-scripts allow-same-origin allow-forms",frameborder:"0"}})])],1)},A=[],I=n("fda5"),$=I["a"],P=(n("9470"),Object(u["a"])($,j,A,!1,null,null,null)),B=P.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uni-system-open-location"},[n("system-header",{on:{back:t._back}},[t._v(" 位置 ")]),n("div",{staticClass:"map-content"},[n("iframe",{ref:"map",attrs:{src:t.src,allow:"geolocation",sandbox:"allow-scripts allow-same-origin allow-forms allow-top-navigation allow-modals allow-popups",frameborder:"0"},on:{load:t._load}}),t.isPoimarkerSrc?n("div",{staticClass:"actTonav",on:{click:t._nav}}):t._e()])],1)},N=[],D=n("bab8"),R=__uniConfig.qqMapKey,z="uniapp",F="https://apis.map.qq.com/tools/poimarker",q={name:"SystemOpenLocation",components:{SystemHeader:D["a"]},data:function(){var t=this.$route.query,e=t.latitude,n=t.longitude,i=t.scale,r=void 0===i?18:i,o=t.name,a=void 0===o?"":o,s=t.address,c=void 0===s?"":s;return{latitude:e,longitude:n,scale:r,name:a,address:c,src:"",isPoimarkerSrc:!1}},mounted:function(){this.latitude&&this.longitude&&(this.src="".concat(F,"?type=0&marker=coord:").concat(this.latitude,",").concat(this.longitude,";title:").concat(this.name,";addr:").concat(this.address,";&key=").concat(R,"&referer=").concat(z))},methods:{_back:function(){0!==this.$refs.map.src.indexOf(F)?this.$refs.map.src=this.src:getApp().$router.back()},_load:function(){0===this.$refs.map.src.indexOf(F)?this.isPoimarkerSrc=!0:this.isPoimarkerSrc=!1},_nav:function(){var t="https://map.qq.com/nav/drive#routes/page?transport=2&epointy=".concat(this.latitude,"&epointx=").concat(this.longitude,"&eword=").concat(encodeURIComponent(this.name||"目的地"),"&referer=").concat(z);this.$refs.map.src=t}}},H=q,V=(n("3da9"),Object(u["a"])(H,L,N,!1,null,null,null)),U=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uni-system-preview-image",on:{click:t._click}},[n("v-uni-swiper",{staticClass:"uni-swiper",attrs:{current:t.index,"indicator-dots":!1,autoplay:!1},on:{"update:current":function(e){t.index=e}}},t._l(t.urls,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("img",{staticClass:"uni-preview-image",attrs:{src:t}})])})),1)],1)},X=[],W={name:"SystemPreviewImage",data:function(){var t=this.$route.params,e=t.urls,n=t.current;return{urls:e||[],current:n,index:0}},created:function(){var t="number"===typeof this.current?this.current:this.urls.indexOf(this.current);this.index=t<0?0:t},mounted:function(){var t=this,e=20,n=0,i=0;this.$el.addEventListener("mousedown",(function(e){t.preventDefault=!1,n=e.clientX,i=e.clientY})),this.$el.addEventListener("mouseup",(function(r){(Math.abs(r.clientX-n)>e||Math.abs(r.clientY-i)>e)&&(t.preventDefault=!0)}))},methods:{_click:function(){this.preventDefault||getApp().$router.back()}}},G=W,K=(n("f10e"),Object(u["a"])(G,Y,X,!1,null,null,null)),Q=K.exports,Z={ChooseLocation:B,OpenLocation:U,PreviewImage:Q};r.a.component(f.name,f),r.a.component(v.name,v),r.a.component(k.name,k),r.a.component(M.name,M),Object.keys(Z).forEach((function(t){var e=Z[t];r.a.component(e.name,e)}))},"8fa5":function(t,e,n){},"90f7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-page-refresh",[n("div",{staticClass:"uni-page-refresh",style:{"margin-top":t.offset+"px"}},[n("div",{staticClass:"uni-page-refresh-inner"},[n("svg",{staticClass:"uni-page-refresh__icon",attrs:{fill:t.color,width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),n("svg",{staticClass:"uni-page-refresh__spinner",attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[n("circle",{staticClass:"uni-page-refresh__path",attrs:{stroke:t.color,cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"4","stroke-miterlimit":"10"}})])])])])},r=[],o={name:"PageRefresh",props:{color:{type:String,default:"#2BD009"},offset:{type:Number,default:0}}},a=o,s=(n("9b5b"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["a"]=c.exports},9213:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-swiper-item",t._g({},t.$listeners),[t._t("default")],2)},r=[],o={name:"SwiperItem",props:{itemId:{type:String,default:""}},mounted:function(){var t=this.$el;t.style.position="absolute",t.style.width="100%",t.style.height="100%";var e=this.$vnode._callbacks;e&&e.forEach((function(t){t()}))}},a=o,s=(n("bfea"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},"924c":function(t,e,n){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(e,n,i,r){t.publishHandler(n+"-audio-"+e,{audioId:e,type:i,data:r},n)}n.d(e,"a",(function(){return c}));var s=function(){function t(e,n){i(this,t),this.id=e,this.pageId=n}return o(t,[{key:"setSrc",value:function(t){a(this.id,this.pageId,"setSrc",{src:t})}},{key:"play",value:function(){a(this.id,this.pageId,"play")}},{key:"pause",value:function(){a(this.id,this.pageId,"pause")}},{key:"stop",value:function(){a(this.id,this.pageId,"stop")}},{key:"seek",value:function(t){a(this.id,this.pageId,"seek",{position:t})}}]),t}();function c(e,n){if(n)return new s(e,n.$page.id);var i=getApp();if(i.$route&&i.$route.params.__id__)return new s(e,i.$route.params.__id__);t.emit("onError","createAudioContext:fail")}}).call(this,n("0dd1"))},9250:function(t,e){var n=["base64ToArrayBuffer","arrayBufferToBase64","addInterceptor","removeInterceptor"],i=["request","uploadFile","downloadFile","connectSocket","onSocketOpen","onSocketError","sendSocketMessage","onSocketMessage","closeSocket","onSocketClose","getUpdateManager"],r=["navigateTo","redirectTo","reLaunch","switchTab","navigateBack"],o=["setStorage","setStorageSync","getStorage","getStorageSync","getStorageInfo","getStorageInfoSync","removeStorage","removeStorageSync","clearStorage","clearStorageSync"],a=["getLocation","chooseLocation","openLocation","createMapContext"],s=["chooseImage","previewImage","getImageInfo","saveImageToPhotosAlbum","compressImage","getRecorderManager","getBackgroundAudioManager","createInnerAudioContext","chooseVideo","saveVideoToPhotosAlbum","createVideoContext","createCameraContext","createLivePlayerContext","createLivePusherContext"],c=["getSystemInfo","getSystemInfoSync","canIUse","onMemoryWarning","getNetworkType","onNetworkStatusChange","onAccelerometerChange","startAccelerometer","stopAccelerometer","onCompassChange","startCompass","stopCompass","onGyroscopeChange","startGyroscope","stopGyroscope","makePhoneCall","scanCode","setClipboardData","getClipboardData","setScreenBrightness","getScreenBrightness","setKeepScreenOn","onUserCaptureScreen","vibrateLong","vibrateShort","addPhoneContact","openBluetoothAdapter","startBluetoothDevicesDiscovery","onBluetoothDeviceFound","stopBluetoothDevicesDiscovery","onBluetoothAdapterStateChange","getConnectedBluetoothDevices","getBluetoothDevices","getBluetoothAdapterState","closeBluetoothAdapter","writeBLECharacteristicValue","readBLECharacteristicValue","onBLEConnectionStateChange","onBLECharacteristicValueChange","notifyBLECharacteristicValueChange","getBLEDeviceServices","getBLEDeviceCharacteristics","createBLEConnection","closeBLEConnection","onBeaconServiceChange","onBeaconUpdate","getBeacons","startBeaconDiscovery","stopBeaconDiscovery","checkIsSupportSoterAuthentication","checkIsSoterEnrolledInDevice","startSoterAuthentication","onUIStyleChange"],u=["hideKeyboard","onKeyboardHeightChange"],l=["showToast","hideToast","showLoading","hideLoading","showModal","showActionSheet","setNavigationBarTitle","setNavigationBarColor","showNavigationBarLoading","hideNavigationBarLoading","setTabBarItem","setTabBarStyle","hideTabBar","showTabBar","setTabBarBadge","removeTabBarBadge","showTabBarRedDot","hideTabBarRedDot","onTabBarMidButtonTap","setBackgroundColor","setBackgroundTextStyle","createAnimation","pageScrollTo","onWindowResize","offWindowResize","loadFontFace","startPullDownRefresh","stopPullDownRefresh","createSelectorQuery","createIntersectionObserver","getMenuButtonBoundingClientRect"],f=["$emit","$on","$once","$off"],h=["saveFile","getSavedFileList","getSavedFileInfo","removeSavedFile","getFileInfo","openDocument","getFileSystemManager"],d=["createOffscreenCanvas","createCanvasContext","canvasToTempFilePath","canvasPutImageData","canvasGetImageData"],p=["getProvider","login","checkSession","getUserInfo","share","shareWithSystem","showShareMenu","hideShareMenu","requestPayment","subscribePush","unsubscribePush","onPush","offPush","requireNativePlugin","upx2px","restoreGlobal","getSubNVueById","getCurrentSubNVue","setPageMeta","onNativeEventReceive","sendNativeEvent","preloadPage","unPreloadPage","loadSubPackage"],g=["createRewardedVideoAd"],m=[].concat(n,i,r,o,a,s,c,u,l,f,h,d,p,g);t.exports=m},"927d":function(t,e,n){},9400:function(t,e,n){"use strict";var i=n("cc89"),r=n.n(i);r.a},"944e":function(t,e,n){"use strict";var i=n("a6bb"),r=n.n(i);r.a},9470:function(t,e,n){"use strict";var i=n("69c3"),r=n.n(i);r.a},9481:function(t,e,n){"use strict";n.r(e),n.d(e,"onBluetoothDeviceFound",(function(){return a})),n.d(e,"onBluetoothAdapterStateChange",(function(){return s})),n.d(e,"onBLEConnectionStateChange",(function(){return c})),n.d(e,"onBLECharacteristicValueChange",(function(){return u}));var i=n("a118"),r=n("db70");function o(t){var e=[];return Object(r["d"])(t,(function(t){e.forEach((function(e){Object(i["a"])(e,t)}))})),function(t){e.push(t)}}var a=o("onBluetoothDeviceFound"),s=o("onBluetoothAdapterStateChange"),c=o("onBLEConnectionStateChange"),u=o("onBLECharacteristicValueChange")},"957a":function(t,e,n){"use strict";n.r(e),n.d(e,"canIUse",(function(){return i}));var i=[{name:"schema",type:String,required:!0}]},"98be":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("9250"),r=n.n(i),o=n("27a7"),a=n("ed1a"),s=Object.create(null),c=n("bdb1");c.keys().forEach((function(t){Object.assign(s,c(t))}));var u=s,l=n("4486"),f=Object.assign(Object.create(null),u,l["a"]),h=Object.create(null);r.a.forEach((function(t){f[t]?h[t]=Object(a["d"])(t,Object(o["b"])(t,f[t])):h[t]=Object(o["c"])(t)}))},9980:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-web-view",t._g({},t.$listeners),[n("v-uni-resize-sensor",{ref:"sensor",on:{resize:t._resize}})],1)},r=[],o={name:"WebView",props:{src:{type:String,default:""}},watch:{src:function(t,e){this.iframe&&(this.iframe.src=this.$getRealPath(this.src))}},mounted:function(){var t=this;this.iframe=document.createElement("iframe"),Object.keys(this.$attrs).forEach((function(e){t.iframe[e]=t.$attrs[e]})),this.iframe.src=this.$getRealPath(this.src),document.body.appendChild(this.iframe),this._resize()},activated:function(){this.iframe.style.display="block"},deactivated:function(){this.iframe.style.display="none"},beforeDestroy:function(){document.body.removeChild(this.iframe)},methods:{_resize:function(){var t=this.$el.getBoundingClientRect(),e=t.top,n=t.bottom,i=t.width,r=t.height;this.iframe.style.position="absolute",this.iframe.style.display="block",this.iframe.style.border=0,this.iframe.style.top=e+"px",this.iframe.style.bottom=n+"px",this.iframe.style.width=i+"px",this.iframe.style.height=r+"px"}}},a=o,s=(n("c33f"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},"9a3e":function(t,e,n){"use strict";n.r(e),n.d(e,"uploadFile",(function(){return r}));var i=n("cb0f"),r={url:{type:String,required:!0},files:{type:Array},filePath:{type:String,validator:function(t,e){t&&(e.type=Object(i["a"])(t))}},name:{type:String},header:{type:Object,validator:function(t,e){e.header=t||{}}},formData:{type:Object,validator:function(t,e){e.formData=t||{}}}}},"9a8b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-icon",t._g({},t.$listeners),[n("i",{class:"uni-icon-"+t.type,style:{"font-size":t._converPx(t.size),color:t.color},attrs:{role:"img"}})])},r=[],o={name:"Icon",props:{type:{type:String,required:!0,default:""},size:{type:[String,Number],default:23},color:{type:String,default:""}},methods:{_converPx:function(t){return/^-?\d+[ur]px$/i.test(t)?t.replace(/(^-?\d+)[ur]px$/i,(function(t,e){return"".concat(uni.upx2px(parseFloat(e)),"px")})):/^-?[\d\.]+$/.test(t)?"".concat(t,"px"):t||""}}},a=o,s=(n("7e6a"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},"9b1b":function(t,e,n){"use strict";n.r(e),n.d(e,"onWindowResize",(function(){return a})),n.d(e,"offWindowResize",(function(){return s}));var i=n("a118"),r=n("db70"),o=[];function a(t){o.push(t)}function s(t){o.splice(o.indexOf(t),1)}Object(r["d"])("onViewDidResize",(function(t){o.forEach((function(e){Object(i["a"])(e,t)}))}))},"9b1f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-progress",t._g({staticClass:"uni-progress"},t.$listeners),[n("div",{staticClass:"uni-progress-bar",style:t.outerBarStyle},[n("div",{staticClass:"uni-progress-inner-bar",style:t.innerBarStyle})]),t.showInfo?[n("p",{staticClass:"uni-progress-info"},[t._v(" "+t._s(t.currentPercent)+"% ")])]:t._e()],2)},r=[],o={activeColor:"#007AFF",backgroundColor:"#EBEBEB",activeMode:"backwards"},a={name:"Progress",props:{percent:{type:[Number,String],default:0,validator:function(t){return!isNaN(parseFloat(t,10))}},showInfo:{type:[Boolean,String],default:!1},strokeWidth:{type:[Number,String],default:6,validator:function(t){return!isNaN(parseFloat(t,10))}},color:{type:String,default:o.activeColor},activeColor:{type:String,default:o.activeColor},backgroundColor:{type:String,default:o.backgroundColor},active:{type:[Boolean,String],default:!1},activeMode:{type:String,default:o.activeMode}},data:function(){return{currentPercent:0,strokeTimer:0,lastPercent:0}},computed:{outerBarStyle:function(){return"background-color: ".concat(this.backgroundColor,"; height: ").concat(this.strokeWidth,"px;")},innerBarStyle:function(){var t="";return t=this.color!==o.activeColor&&this.activeColor===o.activeColor?this.color:this.activeColor,"width: ".concat(this.currentPercent,"%;background-color: ").concat(t)},realPercent:function(){var t=parseFloat(this.percent,10);return t<0&&(t=0),t>100&&(t=100),t}},watch:{realPercent:function(t,e){this.strokeTimer&&clearInterval(this.strokeTimer),this.lastPercent=e||0,this._activeAnimation()}},created:function(){this._activeAnimation()},methods:{_activeAnimation:function(){var t=this;this.active?(this.currentPercent=this.activeMode===o.activeMode?0:this.lastPercent,this.strokeTimer=setInterval((function(){t.currentPercent+1>t.realPercent?(t.currentPercent=t.realPercent,t.strokeTimer&&clearInterval(t.strokeTimer)):t.currentPercent+=1}),30)):this.currentPercent=this.realPercent}}},s=a,c=(n("944e"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"9b5b":function(t,e,n){"use strict";var i=n("8b61"),r=n.n(i);r.a},"9e56":function(t,e,n){"use strict";(function(t){function i(e,n){var i=e.urls,r=e.current,o=t,a=o.invokeCallbackHandler;getApp().$router.push({type:"navigateTo",path:"/preview-image",params:{urls:i,current:r}},(function(){a(n,{errMsg:"previewImage:ok"})}),(function(){a(n,{errMsg:"previewImage:fail"})}))}n.d(e,"a",(function(){return i}))}).call(this,n("0dd1"))},"9f96":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-slider",t._g({ref:"uni-slider",on:{click:t._onClick}},t.$listeners),[n("div",{staticClass:"uni-slider-wrapper"},[n("div",{staticClass:"uni-slider-tap-area"},[n("div",{staticClass:"uni-slider-handle-wrapper",style:t.setBgColor},[n("div",{ref:"uni-slider-handle",staticClass:"uni-slider-handle",style:t.setBlockBg}),n("div",{staticClass:"uni-slider-thumb",style:t.setBlockStyle}),n("div",{staticClass:"uni-slider-track",style:t.setActiveColor})])]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showValue,expression:"showValue"}],staticClass:"uni-slider-value"},[t._v(t._s(t.sliderValue))])]),t._t("default")],2)},r=[],o=n("8af1"),a=n("ba15"),s={name:"Slider",mixins:[o["b"],o["e"],a["a"]],props:{name:{type:String,default:""},min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},value:{type:[Number,String],default:0},step:{type:[Number,String],default:1},disabled:{type:[Boolean,String],default:!1},color:{type:String,default:"#e9e9e9"},backgroundColor:{type:String,default:"#e9e9e9"},activeColor:{type:String,default:"#007aff"},selectedColor:{type:String,default:"#007aff"},blockColor:{type:String,default:"#ffffff"},blockSize:{type:[Number,String],default:28},showValue:{type:[Boolean,String],default:!1}},data:function(){return{sliderValue:Number(this.value)}},computed:{setBlockStyle:function(){return{width:this.blockSize+"px",height:this.blockSize+"px",marginLeft:-this.blockSize/2+"px",marginTop:-this.blockSize/2+"px",left:this._getValueWidth(),backgroundColor:this.blockColor}},setBgColor:function(){return{backgroundColor:this._getBgColor()}},setBlockBg:function(){return{left:this._getValueWidth()}},setActiveColor:function(){return{backgroundColor:this._getActiveColor(),width:this._getValueWidth()}}},watch:{value:function(t){this.sliderValue=Number(t)}},mounted:function(){this.touchtrack(this.$refs["uni-slider-handle"],"_onTrack")},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},beforeDestroy:function(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_onUserChangedValue:function(t){var e=this.$refs["uni-slider"],n=e.offsetWidth,i=e.getBoundingClientRect().left,r=(t.x-i)*(this.max-this.min)/n+Number(this.min);this.sliderValue=this._filterValue(r)},_filterValue:function(t){return t<this.min?this.min:t>this.max?this.max:Math.round((t-this.min)/this.step)*this.step+Number(this.min)},_getValueWidth:function(){return 100*(this.sliderValue-this.min)/(this.max-this.min)+"%"},_getBgColor:function(){return"#e9e9e9"!==this.backgroundColor?this.backgroundColor:"#007aff"!==this.color?this.color:"#007aff"},_getActiveColor:function(){return"#007aff"!==this.activeColor?this.activeColor:"#e9e9e9"!==this.selectedColor?this.selectedColor:"#e9e9e9"},_onTrack:function(t){if(!this.disabled)return"move"===t.detail.state?(this._onUserChangedValue({x:t.detail.x0}),this.$trigger("changing",t,{value:this.sliderValue}),!1):"end"===t.detail.state&&this.$trigger("change",t,{value:this.sliderValue})},_onClick:function(t){this.disabled||(this._onUserChangedValue(t),this.$trigger("change",t,{value:this.sliderValue}))},_resetFormData:function(){this.sliderValue=this.min},_getFormData:function(){var t={};return""!==this.name&&(t.value=this.sliderValue,t.key=this.name),t}}},c=s,u=(n("6428"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=l.exports},a118:function(t,e,n){"use strict";(function(t){function i(){var e;return(e=t).invokeCallbackHandler.apply(e,arguments)}n.d(e,"a",(function(){return i}))}).call(this,n("0dd1"))},a201:function(t,e,n){"use strict";n.r(e),n.d(e,"request",(function(){return u}));var i=n("f2b3"),r={OPTIONS:"OPTIONS",GET:"GET",HEAD:"HEAD",POST:"POST",PUT:"PUT",DELETE:"DELETE",TRACE:"TRACE",CONNECT:"CONNECT"},o={JSON:"json"},a={TEXT:"text",ARRAYBUFFER:"arraybuffer"},s=encodeURIComponent;function c(t,e){var n=t.split("#"),r=n[1]||"";n=n[0].split("?");var o=n[1]||"";t=n[0];var a=o.split("&").filter((function(t){return t}));for(var c in o={},a.forEach((function(t){t=t.split("="),o[t[0]]=t[1]})),e)if(Object(i["h"])(e,c)){var u=e[c];"undefined"===typeof u||null===u?u="":Object(i["k"])(u)&&(u=JSON.stringify(u)),o[s(c)]=s(u)}return o=Object.keys(o).map((function(t){return"".concat(t,"=").concat(o[t])})).join("&"),t+(o?"?"+o:"")+(r?"#"+r:"")}var u={method:{type:String,validator:function(t,e){t=(t||"").toUpperCase(),e.method=Object.values(r).indexOf(t)<0?r.GET:t}},data:{type:[Object,String,Array,ArrayBuffer],validator:function(t,e){e.data=t||""}},url:{type:String,required:!0,validator:function(t,e){e.method===r.GET&&Object(i["k"])(e.data)&&Object.keys(e.data).length&&(e.url=c(t,e.data))}},header:{type:Object,validator:function(t,e){var n=e.header=t||{};e.method!==r.GET&&(Object.keys(n).find((function(t){return"content-type"===t.toLowerCase()}))||(n["Content-Type"]="application/json"))}},dataType:{type:String,validator:function(t,e){e.dataType=(t||o.JSON).toLowerCase()}},responseType:{type:String,validator:function(t,e){t=(t||"").toLowerCase(),e.responseType=Object.values(a).indexOf(t)<0?a.TEXT:t}},withCredentials:{type:Boolean}}},a20f:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var i=n("f2b3"),r=function(){var t=document.createElement("canvas");t.height=t.width=0;var e=t.getContext("2d"),n=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/n}(),o=function(t,e){for(var n in t)Object(i["h"])(t,n)&&e(t[n],n)},a={fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all",setTransform:[4,5]},s=CanvasRenderingContext2D.prototype;function c(t){t.width=t.offsetWidth*r,t.height=t.offsetHeight*r,t.getContext("2d").__hidpi__=!0}s.drawImageByCanvas=function(t){return function(e,n,i,o,a,s,c,u,l,f){if(!this.__hidpi__)return t.apply(this,arguments);n*=r,i*=r,o*=r,a*=r,s*=r,c*=r,u=f?u*r:u,l=f?l*r:l,t.call(this,e,n,i,o,a,s,c,u,l)}}(s.drawImage),1!==r&&(o(a,(function(t,e){s[e]=function(e){return function(){if(!this.__hidpi__)return e.apply(this,arguments);var n=Array.prototype.slice.call(arguments);if("all"===t)n=n.map((function(t){return t*r}));else if(Array.isArray(t))for(var i=0;i<t.length;i++)n[t[i]]*=r;return e.apply(this,n)}}(s[e])})),s.stroke=function(t){return function(){if(!this.__hidpi__)return t.apply(this,arguments);this.lineWidth*=r,t.apply(this,arguments),this.lineWidth/=r}}(s.stroke),s.fillText=function(t){return function(){if(!this.__hidpi__)return t.apply(this,arguments);var e=Array.prototype.slice.call(arguments);e[1]*=r,e[2]*=r;var n=this.font;this.font=n.replace(/(\d+\.?\d*)(px|em|rem|pt)/g,(function(t,e,n){return e*r+n})),t.apply(this,e),this.font=n}}(s.fillText),s.strokeText=function(t){return function(){if(!this.__hidpi__)return t.apply(this,arguments);var e=Array.prototype.slice.call(arguments);e[1]*=r,e[2]*=r;var n=this.font;this.font=n.replace(/(\d+\.?\d*)(px|em|rem|pt)/g,(function(t,e,n){return e*r+n})),t.apply(this,e),this.font=n}}(s.strokeText),s.drawImage=function(t){return function(){if(!this.__hidpi__)return t.apply(this,arguments);this.scale(r,r),t.apply(this,arguments),this.scale(1/r,1/r)}}(s.drawImage))},a3e5:function(t,e,n){"use strict";var i=n("df1e"),r=n.n(i);r.a},a402:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-page-wrapper",[n("uni-page-body",[t._t("default")],2)],1)},r=[],o={name:"PageBody"},a=o,s=(n("167a"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["a"]=c.exports},a470:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("65a8"),r=n("d8c8"),o=n.n(r);function a(){if(uni.canIUse("css.var")){var t=document.documentElement.style,e=parseInt((t.getPropertyValue("--window-top").match(/\d+/)||["0"])[0]),n=parseInt((t.getPropertyValue("--window-bottom").match(/\d+/)||["0"])[0]);return{top:e?e+o.a.top:0,bottom:n?n+o.a.bottom:0}}var r=0,a=0,s=getCurrentPages();if(s.length){var c=s[s.length-1].$parent.$parent,u=c.navigationBar.type;r="default"===u||"float"===u?i["a"]:0}var l=getApp();return l&&(a=l.$children[0]&&l.$children[0].showTabBar?i["b"]:0),{top:r,bottom:a}}},a5ec:function(t,e,n){"use strict";var i=n("54bc"),r=n.n(i);r.a},a6bb:function(t,e,n){},a741:function(t,e,n){"use strict";(function(t,i){function r(t,e,n){return t=t.$vm||t,t.__call_hook&&t.__call_hook(e,n)}function o(e,n,i){return"onError"!==n&&t.debug("App：".concat(n," have been invoked")+(i?" ".concat(JSON.stringify(i)):"")),e=e.$vm||e,e.__call_hook&&e.__call_hook(n,i)}function a(e,n,o){return"onLoad"===n&&(e.$mp.query=o,i.publishHandler("onPageLoad",e,e.$page.id)),"onShow"===n&&(e.$route.meta.isTabBar&&e.$route.params.detail&&setTimeout((function(){i.emit("onTabItemTap",e.$route.params.detail)}),0),i.publishHandler("onPageShow",e,e.$page.id)),"onPageScroll"!==n&&t.debug("".concat(e.$page.route,"[").concat(e.$page.id,"]：").concat(n," have been invoked")),r(e,n,o)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}))}).call(this,n("3ad9")["default"],n("0dd1"))},a919:function(t,e,n){"use strict";(function(t){var i=n("cb0f");e["a"]={name:"TabBar",props:{position:{default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}},color:{type:String,default:"#999"},selectedColor:{type:String,default:"#007aff"},backgroundColor:{type:String,default:"#f7f7fa"},borderStyle:{default:"black",validator:function(t){return-1!==["black","white"].indexOf(t)}},list:{type:Array,default:function(){return[]}}},computed:{borderColor:function(){return"white"===this.borderStyle?"rgba(255, 255, 255, 0.33)":"rgba(0, 0, 0, 0.33)"}},watch:{$route:function(t,e){t.meta.isTabBar&&(this.__path__=t.path)}},beforeCreate:function(){this.__path__=this.$route.path},methods:{_getRealPath:function(t){return 0!==t.indexOf("/")&&(t="/"+t),Object(i["a"])(t)},_switchTab:function(e,n){var i=e.text,r=e.pagePath,o="/"+r;o===__uniRoutes[0].alias&&(o="/");var a={index:n,text:i,pagePath:r};this.$route.path!==o?(this.__path__=this.$route.path,uni.switchTab({from:"tabBar",url:o,detail:a})):t.emit("onTabItemTap",a)}}}}).call(this,n("0dd1"))},a954:function(t,e,n){"use strict";n.r(e),n.d(e,"addInterceptor",(function(){return i})),n.d(e,"removeInterceptor",(function(){return r}));var i=[{name:"method",type:[String,Object],required:!0}],r=i},aa92:function(t,e,n){"use strict";function i(t){return s(t)||a(t)||o(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return p}));var u=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onNavigationBarSearchInputFocusChanged","onPageShow","onPageHide","onPageResize","onServiceCreated","onServiceAttached"],l=["data","properties","options","relations"];function f(t,e,n){e[n]&&Object.assign(t[n]||(t[n]={}),e[n])}function h(t,e){t.push.apply(t,i(e))}function d(t,e){l.forEach((function(n){f(t,e,n)})),e.externalClasses&&h(t.externalClasses||(t.externalClasses=[]),e.externalClasses),e.path&&(t.path=e.path)}function p(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach((function(e){-1!==u.indexOf(e)&&(t[e]=n[e],delete n[e])})),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;u.forEach((function(t){n[t]=i})),n.mpOptions=function(t,e){if(!t)return e;var n=Object.create(null);return d(n,t),e&&d(n,e),n}}},abb2:function(t,e,n){"use strict";n.r(e),n.d(e,"connectSocket",(function(){return r})),n.d(e,"sendSocketMessage",(function(){return o})),n.d(e,"closeSocket",(function(){return a}));var i={OPTIONS:"OPTIONS",GET:"GET",HEAD:"HEAD",POST:"POST",PUT:"PUT",DELETE:"DELETE",TRACE:"TRACE",CONNECT:"CONNECT"},r={url:{type:String,required:!0},header:{type:Object,validator:function(t,e){e.header=t||{}}},method:{type:String,validator:function(t,e){t=(t||"").toUpperCase(),e.method=Object.values(i).indexOf(t)<0?i.GET:t}},protocols:{type:[Array,String],validator:function(t,e){"string"===typeof t&&(t=[t]),e.protocols=(t||[]).filter((function(t){return"string"===typeof t}))}}},o={data:{type:[String,ArrayBuffer]}},a={code:{type:Number},reason:{type:String}}},abbf:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=n("a741"),r=n("1164");function o(e,n){return{created:function(){Object(r["a"])(this,e),n.meta.name||t.emit("onPageNotFound",{path:n.path,query:n.query,isEntryPage:!0})},beforeMount:function(){this.$el=document.getElementById("app")},mounted:function(){var t={path:this.$route.meta&&this.$route.meta.pagePath,query:this.$route.query,scene:1001};Object(i["a"])(this,"onLaunch",t),Object(i["a"])(this,"onShow",t)}}}n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]}))}).call(this,n("0dd1"))},add1:function(t,e,n){},af33:function(t,e,n){"use strict";n.r(e),n.d(e,"createSelectorQuery",(function(){return m}));var i=n("f2b3"),r=n("db70"),o=n("303f"),a=n("bfa6"),s=n("ee03"),c=n("60db");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var h={canvas:o["CanvasContext"],map:a["MapContext"],video:s["VideoContext"],editor:c["EditorContext"]};function d(t){if(t&&t.context){var e=t.context,n=e.id,i=e.name,r=e.page,o=h[i];t.context=o&&new o(n,r)}}var p=function(){function t(e,n,i,r){u(this,t),this._selectorQuery=e,this._component=n,this._selector=i,this._single=r}return f(t,[{key:"boundingClientRect",value:function(t){return this._selectorQuery._push(this._selector,this._component,this._single,{id:!0,dataset:!0,rect:!0,size:!0},t),this._selectorQuery}},{key:"fields",value:function(t,e){return this._selectorQuery._push(this._selector,this._component,this._single,t,e),this._selectorQuery}},{key:"scrollOffset",value:function(t){return this._selectorQuery._push(this._selector,this._component,this._single,{id:!0,dataset:!0,scrollOffset:!0},t),this._selectorQuery}},{key:"context",value:function(t){return this._selectorQuery._push(this._selector,this._component,this._single,{context:!0},t),this._selectorQuery}}]),t}(),g=function(){function t(e){u(this,t),this._page=e,this._queue=[],this._queueCb=[]}return f(t,[{key:"exec",value:function(t){var e=this;Object(r["c"])("requestComponentInfo",this._page,this._queue,(function(n){var r=e._queueCb;n.forEach((function(t,n){Array.isArray(t)?t.forEach(d):d(t);var o=r[n];Object(i["j"])(o)&&o.call(e,t)})),Object(i["j"])(t)&&t.call(e,n)}))}},{key:"in",value:function(t){return this._component=t._$id||t,this}},{key:"select",value:function(t){return new p(this,this._component,t,!0)}},{key:"selectAll",value:function(t){return new p(this,this._component,t,!1)}},{key:"selectViewport",value:function(){return new p(this,0,"",!0)}},{key:"_push",value:function(t,e,n,i,r){this._queue.push({component:e,selector:t,single:n,fields:i}),this._queueCb.push(r)}}]),t}();function m(t){return new g(t||Object(r["b"])("createSelectorQuery"))}},b0ef:function(t,e,n){"use strict";n.r(e),n.d(e,"$on",(function(){return i})),n.d(e,"$once",(function(){return r})),n.d(e,"$off",(function(){return o})),n.d(e,"$emit",(function(){return a}));var i=[{name:"event",type:[String,Array],required:!0},{name:"callback",type:Function,required:!0}],r=i,o=[{name:"event",type:[String,Array]},{name:"callback",type:Function}],a=[{name:"event",type:String,required:!0}]},b10a:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var i=n("18fd");function r(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function o(t){return t.reduce((function(t,e){var n=e.value,i=e.name;return n.match(/ /)&&"style"!==i&&(n=n.split(" ")),t[i]?Array.isArray(t[i])?t[i].push(n):t[i]=[t[i],n]:t[i]=n,t}),{})}function a(e){e=r(e);var n=[],a={node:"root",children:[]};return Object(i["a"])(e,{start:function(t,e,i){var r={name:t};if(0!==e.length&&(r.attrs=o(e)),i){var s=n[0]||a;s.children||(s.children=[]),s.children.push(r)}else n.unshift(r)},end:function(e){var i=n.shift();if(i.name!==e&&t.error("invalid state: mismatch end tag"),0===n.length)a.children.push(i);else{var r=n[0];r.children||(r.children=[]),r.children.push(i)}},chars:function(t){var e={type:"text",text:t};if(0===n.length)a.children.push(e);else{var i=n[0];i.children||(i.children=[]),i.children.push(e)}},comment:function(t){var e={node:"comment",text:t},i=n[0];i.children||(i.children=[]),i.children.push(e)}}),a.children}}).call(this,n("3ad9")["default"])},b253:function(t,e,n){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function s(t){return function(){var e,n=f(t);if(l()){var i=f(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return c(this,e)}}function c(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}n.d(e,"a",(function(){return Y}));var h=function(t){var e=t.import("blots/block/embed"),n=function(t){o(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(e);return n.blotName="divider",n.tagName="HR",{"formats/divider":n}};function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){return function(){var e,n=w(t);if(_()){var i=w(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return b(this,e)}}function b(t,e){return!e||"object"!==d(e)&&"function"!==typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var S=function(t){var e=t.import("blots/inline"),n=function(t){g(n,t);var e=v(n);function n(){return p(this,n),e.apply(this,arguments)}return n}(e);return n.blotName="ins",n.tagName="INS",{"formats/ins":n}},k=function(t){var e=t.import("parchment"),n=e.Scope,i=e.Attributor,r={scope:n.BLOCK,whitelist:["left","right","center","justify"]},o=new i.Style("align","text-align",r);return{"formats/align":o}},C=function(t){var e=t.import("parchment"),n=e.Scope,i=e.Attributor,r={scope:n.BLOCK,whitelist:["rtl"]},o=new i.Style("direction","direction",r);return{"formats/direction":o}};function T(t){return T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function M(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}function j(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function I(t){return function(){var e,n=D(t);if(B()){var i=D(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return $(this,e)}}function $(t,e){return!e||"object"!==T(e)&&"function"!==typeof e?P(t):e}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t,e,n){return L="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=N(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}},L(t,e,n||t)}function N(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=D(t),null===t)break;return t}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var R=function(t){var e=t.import("parchment"),n=t.import("blots/container"),i=t.import("formats/list/item"),r=function(t){j(r,t);var n=I(r);function r(t){var i;O(this,r),i=n.call(this,t);var o=function(n){if(n.target.parentNode===t){var r=i.statics.formats(t),o=e.find(n.target);"checked"===r?o.format("list","unchecked"):"unchecked"===r&&o.format("list","checked")}};return t.addEventListener("click",o),i}return M(r,null,[{key:"create",value:function(t){var e="ordered"===t?"OL":"UL",n=L(D(r),"create",this).call(this,e);return"checked"!==t&&"unchecked"!==t||n.setAttribute("data-checked","checked"===t),n}},{key:"formats",value:function(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}}]),M(r,[{key:"format",value:function(t,e){this.children.length>0&&this.children.tail.format(t,e)}},{key:"formats",value:function(){return x({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(t,e){if(t instanceof i)L(D(r.prototype),"insertBefore",this).call(this,t,e);else{var n=null==e?this.length():e.offset(this),o=this.split(n);o.parent.insertBefore(t,o)}}},{key:"optimize",value:function(t){L(D(r.prototype),"optimize",this).call(this,t);var e=this.next;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&e.domNode.tagName===this.domNode.tagName&&e.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(e.moveChildren(this),e.remove())}},{key:"replace",value:function(t){if(t.statics.blotName!==this.statics.blotName){var n=e.create(this.statics.defaultChild);t.moveChildren(n),this.appendChild(n)}L(D(r.prototype),"replace",this).call(this,t)}}]),r}(n);return r.blotName="list",r.scope=e.Scope.BLOCK_BLOT,r.tagName=["OL","UL"],r.defaultChild="list-item",r.allowedChildren=[i],{"formats/list":r}},z=function(t){var e=t.import("parchment"),n=e.Scope,i=t.import("formats/background"),r=new i.constructor("backgroundColor","background-color",{scope:n.INLINE});return{"formats/backgroundColor":r}},F=n("f2b3"),q=function(t){var e=t.import("parchment"),n=e.Scope,i=e.Attributor,r={scope:n.BLOCK},o=["margin","marginTop","marginBottom","marginLeft","marginRight"],a=["padding","paddingTop","paddingBottom","paddingLeft","paddingRight"],s={};return o.concat(a).forEach((function(t){s["formats/".concat(t)]=new i.Style(t,Object(F["l"])(t),r)})),s},H=function(t){var e=t.import("parchment"),n=e.Scope,i=e.Attributor,r={scope:n.INLINE},o=["font","fontSize","fontStyle","fontVariant","fontWeight","fontFamily"],a={};return o.forEach((function(t){a["formats/".concat(t)]=new i.Style(t,Object(F["l"])(t),r)})),a},V=function(t){var e=t.import("parchment"),n=e.Scope,i=e.Attributor,r=[{name:"lineHeight",scope:n.BLOCK},{name:"letterSpacing",scope:n.INLINE},{name:"textDecoration",scope:n.INLINE},{name:"textIndent",scope:n.BLOCK}],o={};return r.forEach((function(t){var e=t.name,n=t.scope;o["formats/".concat(e)]=new i.Style(e,Object(F["l"])(e),{scope:n})})),o},U=function(t){var e=t.import("formats/image"),n=["alt","height","width","data-custom","class","data-local"];e.sanitize=function(t){return t},e.formats=function(t){return n.reduce((function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e}),{})};var i=e.prototype.format;e.prototype.format=function(t,e){n.indexOf(t)>-1?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t):i.call(this,t,e)}};function Y(t){var e={divider:h,ins:S,align:k,direction:C,list:R,background:z,box:q,font:H,text:V,image:U},n={};Object.values(e).forEach((function(e){return Object.assign(n,e(t))})),t.register(n,!0)}},b2bb:function(t,e,n){},b34d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-form",t._g({},t.$listeners),[n("span",[t._t("default")],2)])},r=[],o=n("8af1"),a={name:"Form",mixins:[o["e"]],data:function(){return{childrenList:[]}},listeners:{"@form-submit":"_onSubmit","@form-reset":"_onReset","@form-group-update":"_formGroupUpdateHandler"},methods:{_onSubmit:function(t){var e={};this.childrenList.forEach((function(t){t._getFormData&&t._getFormData().key&&(e[t._getFormData().key]=t._getFormData().value)})),this.$trigger("submit",t,{value:e})},_onReset:function(t){this.$trigger("reset",t,{}),this.childrenList.forEach((function(t){t._resetFormData&&t._resetFormData()}))},_formGroupUpdateHandler:function(t){if("add"===t.type)this.childrenList.push(t.vm);else{var e=this.childrenList.indexOf(t.vm);this.childrenList.splice(e,1)}}}},s=a,c=n("2877"),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},b501:function(t,e,n){"use strict";n.r(e),n.d(e,"setClipboardData",(function(){return i}));var i={beforeSuccess:function(){uni.showToast({title:"内容已复制",icon:"success",mask:!1})}}},b628:function(t,e,n){"use strict";var i=n("8b18"),r=n.n(i);r.a},b705:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-rich-text",t._g({},t.$listeners),[n("div")])},r=[],o=n("b10a"),a=n("f2b3"),s={a:"",abbr:"",b:"",blockquote:"",br:"",code:"",col:["span","width"],colgroup:["span","width"],dd:"",del:"",div:"",dl:"",dt:"",em:"",fieldset:"",h1:"",h2:"",h3:"",h4:"",h5:"",h6:"",hr:"",i:"",img:["alt","src","height","width"],ins:"",label:"",legend:"",li:"",ol:["start","type"],p:"",q:"",span:"",strong:"",sub:"",sup:"",table:["width"],tbody:"",td:["colspan","rowspan","height","width"],tfoot:"",th:["colspan","rowspan","height","width"],thead:"",tr:"",ul:""},c={amp:"&",gt:">",lt:"<",nbsp:" ",quot:'"',apos:"'"};function u(t){return t.replace(/&(([a-zA-Z]+)|(#x{0,1}[\da-zA-Z]+));/gi,(function(t,e){if(Object(a["h"])(c,e)&&c[e])return c[e];if(/^#[0-9]{1,4}$/.test(e))return String.fromCharCode(e.slice(1));if(/^#x[0-9a-f]{1,4}$/i.test(e))return String.fromCharCode("0"+e.slice(1));var n=document.createElement("div");return n.innerHTML=t,n.innerText||n.textContent}))}function l(t,e){return t.forEach((function(t){if(Object(a["k"])(t))if(Object(a["h"])(t,"type")&&"node"!==t.type)"text"===t.type&&"string"===typeof t.text&&""!==t.text&&e.appendChild(document.createTextNode(u(t.text)));else{if("string"!==typeof t.name||!t.name)return;var n=t.name.toLowerCase();if(!Object(a["h"])(s,n))return;var i=document.createElement(n);if(!i)return;var r=t.attrs;if(Object(a["k"])(r)){var o=s[n]||[];Object.keys(r).forEach((function(t){var e=r[t];switch(t){case"class":Array.isArray(e)&&(e=e.join(" "));case"style":i.setAttribute(t,e);break;default:-1!==o.indexOf(t)&&i.setAttribute(t,e)}}))}var c=t.children;Array.isArray(c)&&c.length&&l(t.children,i),e.appendChild(i)}})),e}var f={name:"RichText",props:{nodes:{type:[Array,String],default:function(){return[]}}},watch:{nodes:function(t){this._renderNodes(t)}},mounted:function(){this._renderNodes(this.nodes)},methods:{_renderNodes:function(t){"string"===typeof t&&(t=Object(o["a"])(t));var e=l(t,document.createDocumentFragment());this.$el.firstChild.innerHTML="",this.$el.firstChild.appendChild(e)}}},h=f,d=n("2877"),p=Object(d["a"])(h,i,r,!1,null,null,null);e["default"]=p.exports},b865:function(t,e,n){"use strict";(function(t,i){function r(e,n){return t.emit("api."+e,n)}function o(t,e,n){i.UniViewJSBridge.subscribeHandler(t,e,n)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))}).call(this,n("0dd1"),n("c8ba"))},b866:function(t,e,n){"use strict";n.r(e),n.d(e,"getImageInfo",(function(){return r}));var i=n("cb0f"),r={src:{type:String,required:!0,validator:function(t,e){e.src=Object(i["a"])(t)}}}},ba15:function(t,e,n){"use strict";var i=function(t,e,n,i){t.addEventListener(e,(function(t){"function"===typeof n&&!1===n(t)&&(t.preventDefault(),t.stopPropagation())}),{passive:!1})};e["a"]={beforeDestroy:function(){document.removeEventListener("mousemove",this.__mouseMoveEventListener),document.removeEventListener("mouseup",this.__mouseUpEventListener)},methods:{touchtrack:function(t,e,n){var r,o,a=this,s=0,c=0,u=0,l=0,f=function(t,n,i,r){if(!1===a[e]({target:t.target,currentTarget:t.currentTarget,preventDefault:t.preventDefault.bind(t),stopPropagation:t.stopPropagation.bind(t),touches:t.touches,changedTouches:t.changedTouches,detail:{state:n,x0:i,y0:r,dx:i-s,dy:r-c,ddx:i-u,ddy:r-l,timeStamp:t.timeStamp}}))return!1},h=null;i(t,"touchstart",(function(t){if(r=!0,1===t.touches.length&&!h)return h=t,s=u=t.touches[0].pageX,c=l=t.touches[0].pageY,f(t,"start",s,c)})),i(t,"mousedown",(function(t){if(o=!0,!r&&!h)return h=t,s=u=t.pageX,c=l=t.pageY,f(t,"start",s,c)})),i(t,"touchmove",(function(t){if(1===t.touches.length&&h){var e=f(t,"move",t.touches[0].pageX,t.touches[0].pageY);return u=t.touches[0].pageX,l=t.touches[0].pageY,e}}));var d=this.__mouseMoveEventListener=function(t){if(!r&&o&&h){var e=f(t,"move",t.pageX,t.pageY);return u=t.pageX,l=t.pageY,e}};document.addEventListener("mousemove",d),i(t,"touchend",(function(t){if(0===t.touches.length&&h)return r=!1,h=null,f(t,"end",t.changedTouches[0].pageX,t.changedTouches[0].pageY)}));var p=this.__mouseUpEventListener=function(t){if(o=!1,!r&&h)return h=null,f(t,"end",t.pageX,t.pageY)};document.addEventListener("mouseup",p),i(t,"touchcancel",(function(t){if(h){r=!1;var e=h;return h=null,f(t,n?"cancel":"end",e.touches[0].pageX,e.touches[0].pageY)}}))}}}},bab8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"system-header"},[n("div",{staticClass:"header-text"},[t._t("default")],2),n("div",{staticClass:"header-btn header-back uni-btn-icon header-btn-icon",on:{click:t._back}},[t._v("  ")]),t.confirm?n("div",{staticClass:"header-btn header-confirm",on:{click:t._confirm}},[n("svg",{staticClass:"header-btn-img",attrs:{width:"200px",height:"200.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M939.6960642844446 226.08613831111114c-14.635971697777777-13.725872355555557-37.719236835555556-13.070208568888889-51.445109191111115 1.6029502577777779L402.69993870222225 744.6571451733333 137.46159843555557 483.31364238222227c-14.344349013333334-14.12709944888889-37.392384-13.98030904888889-51.51948344888889 0.3640399644444444-14.12709944888889 14.30911886222222-13.945078897777778 37.392384 0.40122709333333334 51.482296319999996l291.8171704888889 287.48392106666665c0.10960327111111111 0.10960327111111111 0.2544366933333333 0.1448334222222222 0.3640399644444444 0.2544366933333333s0.1448334222222222 0.2544366933333333 0.2544366933333333 0.3640399644444444c2.293843057777778 2.1842397866666667 5.061329351111111 3.4231500799999997 7.719212373333333 4.879309937777777 1.3113264355555554 0.7652670577777777 2.43867648 1.8926159644444445 3.822419057777778 2.43867648 4.2960634311111106 1.6753664 8.846562417777779 2.548279751111111 13.361832391111111 2.548279751111111 4.769706666666666 0 9.539412195555554-0.9472864711111111 13.98030904888889-2.839903573333333 1.4933469866666664-0.6184766577777778 2.6578830222222223-1.8926159644444445 4.0416267377777775-2.6950701511111115 2.7302991644444448-1.6029502577777779 5.5702027377777785-2.9495068444444446 7.901232924444444-5.315766044444445 0.10960327111111111-0.10960327111111111 0.1448334222222222-0.2916238222222222 0.2544366933333333-0.40122709333333334 0.07241614222222222-0.10960327111111111 0.21920654222222222-0.1448334222222222 0.3268528355555555-0.2544366933333333L941.2579134577779 277.5273335466667C955.0953460622222 262.9305059555556 954.3320359822221 239.8844279466666 939.6960642844446 226.08613831111114z"}})])]):t._e()])},r=[],o=n("65f0"),a=o["a"],s=(n("0a32"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["a"]=c.exports},bacd:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-canvas",t._g({attrs:{"canvas-id":t.canvasId,"disable-scroll":t.disableScroll}},t._listeners),[n("canvas",{ref:"canvas",attrs:{width:"300",height:"150"}}),n("div",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}},[t._t("default")],2),n("v-uni-resize-sensor",{ref:"sensor",on:{resize:t._resize}})],1)},r=[],o=n("d8ca"),a=o["a"],s=(n("0741"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},bdb1:function(t,e,n){var i={"./base/base64.js":"1ca3","./base/can-i-use.js":"3648","./base/interceptor.js":"2eae","./base/upx2px.js":"45d2","./context/audio.js":"2c67","./context/background-audio.js":"c3f2","./context/canvas.js":"303f","./context/create-map-context.js":"bfa6","./context/create-video-context.js":"ee03","./context/editor.js":"60db","./device/accelerometer.js":"7d13","./device/bluetooth.js":"9481","./device/compass.js":"e4ee","./device/network.js":"8b3f","./device/theme.js":"d001","./media/preview-image.js":"898f","./media/recorder.js":"3676","./network/download-file.js":"f0c3","./network/request.js":"82c2","./network/socket.js":"811a","./network/update.js":"c7d8","./network/upload-file.js":"1ff3","./ui/create-animation.js":"1e4d","./ui/create-intersection-observer.js":"091a","./ui/create-selector-query.js":"af33","./ui/keyboard.js":"78a1","./ui/load-font-face.js":"0001","./ui/page-scroll-to.js":"84e0","./ui/set-page-meta.js":"2ec6","./ui/tab-bar.js":"454d","./ui/window.js":"9b1b"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="bdb1"},be12:function(t,e,n){"use strict";(function(t){function n(t,e,n){var i=Array.prototype.slice.call(t.changedTouches).filter((function(t){return t.identifier===e}))[0];return!!i&&(t.deltaY=i.pageY-n,!0)}var i="pulling",r="reached",o="aborting",a="refreshing",s="restoring";e["a"]={mounted:function(){var e=this;this.enablePullDownRefresh&&(this.refreshContainerElem=this.$refs.refresh.$el,this.refreshControllerElem=this.refreshContainerElem.querySelector(".uni-page-refresh"),this.refreshInnerElemStyle=this.refreshControllerElem.querySelector(".uni-page-refresh-inner").style,t.on(this.$route.params.__id__+".startPullDownRefresh",(function(){e.state||(e.state=a,e._addClass(),setTimeout((function(){e._refreshing()}),50))})),t.on(this.$route.params.__id__+".stopPullDownRefresh",(function(){e.state===a&&(e._removeClass(),e.state=s,e._addClass(),e._restoring((function(){e._removeClass(),e.state=e.distance=e.offset=null})))})))},methods:{_touchstart:function(t){var e=t.changedTouches[0];this.touchId=e.identifier,this.startY=e.pageY,[o,a,s].indexOf(this.state)>=0?this.canRefresh=!1:this.canRefresh=!0},_touchmove:function(t){if(this.canRefresh&&n(t,this.touchId,this.startY)){var e=t.deltaY;if(0===(document.documentElement.scrollTop||document.body.scrollTop)){if(!(e<0)||this.state){t.preventDefault(),null==this.distance&&(this.offset=e,this.state=i,this._addClass()),e-=this.offset,e<0&&(e=0),this.distance=e;var o=e>=this.refreshOptions.range&&this.state!==r,a=e<this.refreshOptions.range&&this.state!==i;(o||a)&&(this._removeClass(),this.state=this.state===r?i:r,this._addClass()),this._pulling(e)}}else this.touchId=null}},_touchend:function(t){var e=this;n(t,this.touchId,this.startY)&&null!==this.state&&(this.state===i?(this._removeClass(),this.state=o,this._addClass(),this._aborting((function(){e._removeClass(),e.state=e.distance=e.offset=null}))):this.state===r&&(this._removeClass(),this.state=a,this._addClass(),this._refreshing()))},_toggleClass:function(t){if(this.state){var e=this.refreshContainerElem;e&&e.classList[t]("uni-page-refresh--"+this.state)}},_addClass:function(){this._toggleClass("add")},_removeClass:function(){this._toggleClass("remove")},_pulling:function(t){var e=this.refreshControllerElem;if(e){var n=e.style,i=t/this.refreshOptions.range;i>1?i=1:i*=i*i;var r=Math.round(t/(this.refreshOptions.range/this.refreshOptions.height)),o=r?"translate3d(-50%, "+r+"px, 0)":0;n.webkitTransform=o,n.clip="rect("+(45-r)+"px,45px,45px,-5px)",this.refreshInnerElemStyle.webkitTransform="rotate("+360*i+"deg)"}},_aborting:function(t){var e=this.refreshControllerElem;if(e){var n=e.style;if(n.webkitTransform){n.webkitTransition="-webkit-transform 0.3s",n.webkitTransform="translate3d(-50%, 0, 0)";var i=function i(){r&&clearTimeout(r),e.removeEventListener("webkitTransitionEnd",i),n.webkitTransition="",t()};e.addEventListener("webkitTransitionEnd",i);var r=setTimeout(i,350)}else t()}},_refreshing:function(){var e=this.refreshControllerElem;if(e){var n=e.style;n.webkitTransition="-webkit-transform 0.2s",n.webkitTransform="translate3d(-50%, "+this.refreshOptions.height+"px, 0)",t.emit("onPullDownRefresh",{},this.$route.params.__id__)}},_restoring:function(t){var e=this.refreshControllerElem;if(e){var n=e.style;n.webkitTransition="-webkit-transform 0.3s",n.webkitTransform+=" scale(0.01)";var i=function i(){r&&clearTimeout(r),e.removeEventListener("webkitTransitionEnd",i),n.webkitTransition="",n.webkitTransform="translate3d(-50%, 0, 0)",t()};e.addEventListener("webkitTransitionEnd",i);var r=setTimeout(i,350)}}}}}).call(this,n("0dd1"))},be14:function(t,e,n){"use strict";(function(t){function i(e,n){var i=t,r=i.invokeCallbackHandler;getApp().$router.push({type:"navigateTo",path:"/choose-location"},(function(){var e=function e(i){t.unsubscribe("onChooseLocation",e),r(n,i?Object.assign(i,{errMsg:"chooseLocation:ok"}):{errMsg:"chooseLocation:fail"})};t.subscribe("onChooseLocation",e)}),(function(){r(n,{errMsg:"chooseLocation:fail"})}))}n.d(e,"a",(function(){return i}))}).call(this,n("0dd1"))},bfa6:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"MapContext",(function(){return c})),n.d(e,"createMapContext",(function(){return u}));var i=n("db70"),r=n("f2b3");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e,n,r){Object(i["c"])("operateMapPlayer",t,e,n,r)}t.subscribe("onMapMethodCallback",(function(t){var e=t.callbackId,n=t.data;r["a"].invoke(e,n)}));var s=["getCenterLocation","moveToLocation","getScale","getRegion","includePoints","translateMarker"],c=function t(e,n){o(this,t),this.id=e,this.pageVm=n};function u(t,e){return new c(t,e||Object(i["b"])("createMapContext"))}c.prototype.$getAppMap=function(){return plus.maps.getMapById(this.pageVm.$page.id+"-map-"+this.id)},s.forEach((function(t){c.prototype[t]=r["a"].warp((function(e,n){e.callbackId=n,a(this.id,this.pageVm,t,e)}))}))}.call(this,n("0dd1"))},bfbd:function(t,e,n){},bfea:function(t,e,n){"use strict";var i=n("4e0b"),r=n.n(i);r.a},c0e5:function(t,e,n){},c195:function(t,e,n){},c2aa:function(t,e,n){},c33a:function(t,e,n){},c33f:function(t,e,n){"use strict";var i=n("c195"),r=n.n(i);r.a},c3f2:function(t,e,n){"use strict";n.r(e),n.d(e,"getBackgroundAudioManager",(function(){return h}));var i=n("db70");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var s=["canplay","play","pause","stop","ended","timeUpdate","prev","next","error","waiting"],c={};s.forEach((function(t){c[t]=[]}));var u,l=[{name:"duration",readonly:!0},{name:"currentTime",readonly:!0},{name:"paused",readonly:!0},{name:"src",cache:!0},{name:"startTime",default:0,cache:!0},{name:"buffered",readonly:!0},{name:"title",cache:!0},{name:"epname",cache:!0},{name:"singer",cache:!0},{name:"coverImgUrl",cache:!0},{name:"webUrl",cache:!0},{name:"protocol",readonly:!0,default:"http"}],f=function(){function t(){var e=this;r(this,t),this._options={},Object(i["d"])("onBackgroundAudioStateChange",(function(t){var e=t.state,n=t.errMsg,i=t.errCode;c[e].forEach((function(t){"function"===typeof t&&t("error"===e?{errMsg:n,errCode:i}:{})}))})),l.forEach((function(t){var n=t.name,r={get:function(){var e=t.cache?this._options:Object(i["c"])("getBackgroundAudioState");return n in e?e[n]:t.default}};t.readonly||(r.set=function(t){this._options[n]=t,Object(i["c"])("setBackgroundAudioState",Object.assign({},this._options,{audioId:this.id}))}),Object.defineProperty(e,n,r)}))}return a(t,[{key:"play",value:function(){this._operate("play")}},{key:"pause",value:function(){this._operate("pause")}},{key:"stop",value:function(){this._operate("stop")}},{key:"seek",value:function(t){this._operate("seek",{currentTime:t})}},{key:"_operate",value:function(t,e){Object(i["c"])("operateBackgroundAudio",Object.assign({},e,{operationType:t}))}}]),t}();function h(){return u||(u=new f)}s.forEach((function(t){var e=t[0].toUpperCase()+t.substr(1);f.prototype["on".concat(e)]=function(e){c[t].push(e)}}))},c418:function(t,e,n){},c41f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-cover-view",t._g({attrs:{"scroll-top":t.scrollTop}},t.$listeners),[n("div",{ref:"content",staticClass:"uni-cover-view"},[t._t("default")],2)])},r=[],o={name:"CoverView",props:{scrollTop:{type:[String,Number],default:0}},watch:{scrollTop:function(t){this.setScrollTop(t)}},mounted:function(){this.setScrollTop(this.scrollTop)},methods:{setScrollTop:function(t){var e=this.$refs.content;"scroll"===getComputedStyle(e).overflowY&&(e.scrollTop=this._upx2pxNum(t))},_upx2pxNum:function(t){return/\d+[ur]px$/i.test(t)&&t.replace(/\d+[ur]px$/i,(function(t){return uni.upx2px(parseFloat(t))})),parseFloat(t)||0}}},a=o,s=(n("cc5f"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},c4c5:function(t,e,n){"use strict";(function(t,i){n.d(e,"a",(function(){return d}));var r=n("f2b3");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var c=/^\s+|\s+$/g,u=/\s+/;function l(t,e,n){var i=[],r=function(t){return r=n?function(t){return!e.contains(t)}:function(t){return e.contains(t)},r(t)};return t.forEach((function(t){t=t.replace(c,""),r(t)&&i.push(t)})),i}function f(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}var h=function(){function e(t){o(this,e),this.$vm=t,this.$el=t.$el}return s(e,[{key:"selectComponent",value:function(t){if(this.$el&&t){var e=this.$el.querySelector(t);return e&&e.__vue__&&d(e.__vue__,!1)}}},{key:"selectAllComponents",value:function(t){if(!this.$el||!t)return[];for(var e=[],n=this.$el.querySelectorAll(t),i=0;i<n.length;i++){var r=n[i];r.__vue__&&e.push(d(r.__vue__,!1))}return e}},{key:"setStyle",value:function(t){return this.$el&&t?("string"===typeof t&&(t=f(t)),Object(r["k"])(t)&&(this.$el.__wxsStyle=t,this.$vm.$forceUpdate()),this):this}},{key:"addClass",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!this.$el||!e.length)return this;var i=l(e,this.$el.classList,!0);if(i.length){var r=this.$el.__wxsAddClass||"";this.$el.__wxsAddClass=r+(r?" ":"")+i.join(" "),this.$vm.$forceUpdate()}return this}},{key:"removeClass",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!this.$el||!e.length)return this;var i=this.$el.classList,r=this.$el.__wxsAddClass?this.$el.__wxsAddClass.split(u):[],o=l(e,i,!1);if(o.length){var a=[];o.forEach((function(t){var e=r.findIndex((function(e){return e===t}));-1!==e&&r.splice(e,1),a.push(t)})),this.$el.__wxsRemoveClass=a,this.$el.__wxsAddClass=r.join(" "),this.$vm.$forceUpdate()}return this}},{key:"hasClass",value:function(t){return this.$el&&this.$el.classList.contains(t)}},{key:"getDataset",value:function(){return this.$el&&this.$el.dataset}},{key:"callMethod",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$vm[e]?this.$vm[e](JSON.parse(JSON.stringify(n))):this.$vm._$id&&t.publishHandler("onWxsInvokeCallMethod",{cid:this.$vm._$id,method:e,args:n})}},{key:"requestAnimationFrame",value:function(t){return i.requestAnimationFrame(t),this}},{key:"getState",value:function(){return this.$el&&(this.$el.__wxsState||(this.$el.__wxsState={}))}},{key:"triggerEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.$vm.$emit(t,e),this}}]),e}();function d(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e&&t&&t.$options.name&&0===t.$options.name.indexOf("VUni")&&(t=t.$parent),t&&t.$el)return t.$el.__wxsComponentDescriptor||(t.$el.__wxsComponentDescriptor=new h(t)),t.$el.__wxsComponentDescriptor}}).call(this,n("501c"),n("c8ba"))},c61c:function(t,e,n){"use strict";n.r(e);var i=n("f2b3");function r(t){return Math.sqrt(t.x*t.x+t.y*t.y)}var o,a,s={name:"MovableArea",props:{scaleArea:{type:Boolean,default:!1}},data:function(){return{width:0,height:0,items:[]}},created:function(){this.gapV={x:null,y:null},this.pinchStartLen=null},mounted:function(){this._resize()},methods:{_resize:function(){this._getWH(),this.items.forEach((function(t,e){t.componentInstance.setParent()}))},_find:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.items,n=this.$el;function i(t){for(var r=0;r<e.length;r++){var o=e[r];if(t===o.componentInstance.$el)return o}return t===n||t===document.body||t===document?null:i(t.parentNode)}return i(t)},_touchstart:function(t){Object(i["e"])({disable:!0});var e=t.touches;if(e&&e.length>1){var n={x:e[1].pageX-e[0].pageX,y:e[1].pageY-e[0].pageY};if(this.pinchStartLen=r(n),this.gapV=n,!this.scaleArea){var o=this._find(e[0].target),a=this._find(e[1].target);this._scaleMovableView=o&&o===a?o:null}}},_touchmove:function(t){var e=t.touches;if(e&&e.length>1){t.preventDefault();var n={x:e[1].pageX-e[0].pageX,y:e[1].pageY-e[0].pageY};if(null!==this.gapV.x&&this.pinchStartLen>0){var i=r(n)/this.pinchStartLen;this._updateScale(i)}this.gapV=n}},_touchend:function(t){Object(i["e"])({disable:!1});var e=t.touches;e&&e.length||t.changedTouches&&(this.gapV.x=0,this.gapV.y=0,this.pinchStartLen=null,this.scaleArea?this.items.forEach((function(t){t.componentInstance._endScale()})):this._scaleMovableView&&this._scaleMovableView.componentInstance._endScale())},_updateScale:function(t){t&&1!==t&&(this.scaleArea?this.items.forEach((function(e){e.componentInstance._setScale(t)})):this._scaleMovableView&&this._scaleMovableView.componentInstance._setScale(t))},_getWH:function(){var t=window.getComputedStyle(this.$el),e=this.$el.getBoundingClientRect();this.width=e.width-["Left","Right"].reduce((function(e,n){return e+parseFloat(t["border"+n+"Width"])+parseFloat(t["padding"+n])}),0),this.height=e.height-["Top","Bottom"].reduce((function(e,n){return e+parseFloat(t["border"+n+"Width"])+parseFloat(t["padding"+n])}),0)}},render:function(t){var e=this,n=[],r=this.$slots.default&&Object(i["d"])(this.$slots.default,t);r&&r.forEach((function(t){t.componentOptions&&"v-uni-movable-view"===t.componentOptions.tag&&n.push(t)})),this.items=n;var o=Object.assign({},this.$listeners),a=["touchstart","touchmove","touchend"];return a.forEach((function(t){var n=o[t],i=e["_".concat(t)];o[t]=n?[].concat(n,i):i})),t("uni-movable-area",{on:o},[t("v-uni-resize-sensor",{on:{resize:this._resize}}),r])}},c=s,u=(n("a3e5"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null);e["default"]=l.exports},c7d8:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"getUpdateManager",(function(){return c}));var a,s=function(){function t(){i(this,t)}return o(t,[{key:"onCheckForUpdate",value:function(){}},{key:"onUpdateReady",value:function(){}},{key:"onUpdateFailed",value:function(){}},{key:"applyUpdate",value:function(){}}]),t}();function c(){return a||(a=new s)}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},c8ed:function(t,e,n){"use strict";var i=n("72ad"),r=n.n(i);r.a},c96e:function(t,e,n){"use strict";var i=n("1307"),r=n.n(i);r.a},cb0f:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("0f74"),r=/^([a-z-]+:)?\/\//i,o=/^data:.*,.*/;function a(t){var e=__uniConfig.router.base;return e?"/"!==e&&0===("/"+t).indexOf(e)?"/"+t:e+t:t}function s(t){if(0===t.indexOf("/")){if(0!==t.indexOf("//"))return a(t.substr(1));t="https:"+t}if(r.test(t)||o.test(t)||0===t.indexOf("blob:"))return t;var e=getCurrentPages();return e.length?a(Object(i["a"])(e[e.length-1].$page.route,t).substr(1)):t}},cc5f:function(t,e,n){"use strict";var i=n("324c"),r=n.n(i);r.a},cc76:function(t,e,n){"use strict";var i=Object.create(null),r=n("19c4");r.keys().forEach((function(t){Object.assign(i,r(t))})),e["a"]=i},cc89:function(t,e,n){},cdc1:function(t,e,n){"use strict";(function(t,i){var r=n("f2b3"),o=n("65a8"),a=n("81ea"),s=n("f1ea");e["a"]={name:"App",components:a["a"],mixins:s["default"],props:{keepAliveInclude:{type:Array,default:function(){return[]}}},data:function(){return{transitionName:"fade",hideTabBar:!1,tabBar:__uniConfig.tabBar||{},sysComponents:this.$sysComponents}},computed:{key:function(){return this.$route.meta.name+"-"+this.$route.params.__id__+"-"+(__uniConfig.reLaunch||1)},hasTabBar:function(){return __uniConfig.tabBar&&__uniConfig.tabBar.list&&__uniConfig.tabBar.list.length},showTabBar:function(){return this.$route.meta.isTabBar&&!this.hideTabBar}},watch:{$route:function(e,n){t.emit("onHidePopup")},hideTabBar:function(t,e){if(uni.canIUse("css.var")){var n=t?0:o["b"],r=uni.canIUse("css.env")?"env":uni.canIUse("css.constant")?"constant":"",a=n&&r?"calc(".concat(n,"px + ").concat(r,"(safe-area-inset-bottom))"):"".concat(n,"px");document.documentElement.style.setProperty("--window-bottom",a),i.debug("uni.".concat(a?"showTabBar":"hideTabBar","：--window-bottom=").concat(a))}window.dispatchEvent(new CustomEvent("resize"))}},created:function(){uni.canIUse("css.var")&&document.documentElement.style.setProperty("--status-bar-height","0px")},mounted:function(){window.addEventListener("message",(function(e){Object(r["k"])(e.data)&&"WEB_INVOKE_APPSERVICE"===e.data.type&&t.emit("onWebInvokeAppService",e.data.data,e.data.pageId)})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?t.emit("onAppEnterForeground"):t.emit("onAppEnterBackground")}))}}}).call(this,n("0dd1"),n("3ad9")["default"])},d001:function(t,e,n){"use strict";n.r(e),n.d(e,"onUIStyleChange",(function(){return a}));var i=n("a118"),r=n("db70"),o=[];function a(t){o.push(t)}Object(r["d"])("onUIStyleChange",(function(t){o.forEach((function(e){Object(i["a"])(e,t)}))}))},d013:function(t,e,n){"use strict";n.r(e),n.d(e,"loadSubPackage",(function(){return i}));var i={root:{type:String,required:!0,validator:function(t,e){var n=__uniConfig.subPackages;return Array.isArray(n)&&0!==n.length?n.find((function(e){return e.root===t}))?void 0:"root `"+t+"` is not found":"no subPackages"}}}},d29c:function(t,e,n){},d3bd:function(t,e,n){"use strict";n.r(e);var i,r,o=n("8af1"),a={name:"Button",mixins:[o["c"],o["b"],o["e"]],props:{hoverClass:{type:String,default:"button-hover"},disabled:{type:[Boolean,String],default:!1},id:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},hoverStartTime:{type:[Number,String],default:20},hoverStayTime:{type:[Number,String],default:70},formType:{type:String,default:"",validator:function(t){return~["","submit","reset"].indexOf(t)}},openType:{type:String,default:""}},data:function(){return{clickFunction:null}},methods:{_onClick:function(t,e){if(!this.disabled)if(e&&this.$el.click(),this.formType)this.$dispatch("Form","submit"===this.formType?"uni-form-submit":"uni-form-reset",{type:this.formType});else if("feedback"===this.openType){var n=plus.webview.create("https://service.dcloud.net.cn/uniapp/feedback.html","feedback",{titleNView:{titleText:"问题反馈",autoBackButton:!0,backgroundColor:"#F7F7F7",titleColor:"#007aff",buttons:[{text:"发送",color:"#007aff",fontSize:"16px",fontWeight:"bold",onclick:function(t){n.evalJS('mui&&mui.trigger(document.getElementById("submit"),"tap")')}}]}});n.show("slide-in-right")}},_bindObjectListeners:function(t,e){if(e)for(var n in e){var i=t.on[n],r=e[n];t.on[n]=i?[].concat(i,r):r}return t}},render:function(t){var e=this,n=Object.create(null);return this.$listeners&&Object.keys(this.$listeners).forEach((function(t){(!e.disabled||"click"!==t&&"tap"!==t)&&(n[t]=e.$listeners[t])})),this.hoverClass&&"none"!==this.hoverClass?t("uni-button",this._bindObjectListeners({class:[this.hovering?this.hoverClass:""],attrs:{disabled:this.disabled},on:{touchstart:this._hoverTouchStart,touchend:this._hoverTouchEnd,touchcancel:this._hoverTouchCancel,click:this._onClick}},n),this.$slots.default):t("uni-button",this._bindObjectListeners({class:[this.hovering?this.hoverClass:""],attrs:{disabled:this.disabled},on:{click:this._onClick}},n),this.$slots.default)},listeners:{"label-click":"_onClick","@label-click":"_onClick"}},s=a,c=(n("5676"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},d4b6:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return y}));var i=n("f2b3"),r=n("85b6"),o=n("24d9"),a=n("a470");function s(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n={id:t.id,offsetLeft:t.offsetLeft,offsetTop:t.offsetTop,dataset:Object(r["c"])(t.dataset)};return e&&Object.assign(n,e),n}function c(t){if(t){for(var e=[],n=Object(a["a"])(),i=n.top,r=0;r<t.length;r++){var o=t[r];e.push({identifier:o.identifier,pageX:o.pageX,pageY:o.pageY-i,clientX:o.clientX,clientY:o.clientY-i,force:o.force||0})}return e}return[]}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(e._processed)return e.type=n.type||t,e;if("click"===t){var u=Object(a["a"])(),l=u.top;n={x:e.x,y:e.y-l},e.touches=e.changedTouches=[{force:1,identifier:0,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY}]}var f=Object(o["b"])({type:n.type||t,timeStamp:e.timeStamp||0,detail:n,target:s(i,n),currentTarget:s(r,!1,!0),touches:e instanceof Event||e instanceof CustomEvent?c(e.touches):e.touches,changedTouches:e instanceof Event||e instanceof CustomEvent?c(e.changedTouches):e.changedTouches,preventDefault:function(){},stopPropagation:function(){}});return f}var l=350,f=10,h=!!i["o"]&&{passive:!0},d=!1;function p(){d&&(clearTimeout(d),d=!1)}var g=0,m=0;function v(t){if(p(),1===t.touches.length){var e=t.touches[0],n=e.pageX,i=e.pageY;g=n,m=i,d=setTimeout((function(){var e=new CustomEvent("longpress",{bubbles:!0,cancelable:!0,target:t.target,currentTarget:t.currentTarget});e.touches=t.touches,e.changedTouches=t.changedTouches,t.target.dispatchEvent(e)}),l)}}function b(t){if(d){if(1!==t.touches.length)return p();var e=t.touches[0],n=e.pageX,i=e.pageY;return Math.abs(n-g)>f||Math.abs(i-m)>f?p():void 0}}function y(){window.addEventListener("touchstart",v,h),window.addEventListener("touchmove",b,h),window.addEventListener("touchend",p,h),window.addEventListener("touchcancel",p,h)}},d5be:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var i=n("e2e2"),r=n("f2b3"),o=t,a=o.invokeCallbackHandler,s=null,c=function(t){var e=document.createElement("input");return e.type="file",Object(r["r"])(e,{position:"absolute",visibility:"hidden","z-index":-999,width:0,height:0,top:0,left:0}),e.accept="image/*",t.count>1&&(e.multiple="multiple"),1===t.sourceType.length&&"camera"===t.sourceType[0]&&(e.capture="camera"),e};function u(t,e){var n=t.count,r=t.sourceType;s&&(document.body.removeChild(s),s=null),s=c({count:n,sourceType:r}),document.body.appendChild(s),s.addEventListener("change",(function(t){for(var n=[],r=t.target.files.length,o=function(e){var r=t.target.files[e],o=void 0;Object.defineProperty(r,"path",{get:function(){return o=o||Object(i["a"])(r),o}}),n.push(r)},s=0;s<r;s++)o(s);var c={errMsg:"chooseImage:ok",get tempFilePaths(){return n.map((function(t){var e=t.path;return e}))},tempFiles:n};a(e,c)})),s.click()}}).call(this,n("0dd1"))},d5ec:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-radio-group",t._g({},t.$listeners),[t._t("default")],2)},r=[],o=n("8af1"),a={name:"RadioGroup",mixins:[o["b"],o["e"]],props:{name:{type:String,default:""}},data:function(){return{radioList:[]}},listeners:{"@radio-change":"_changeHandler","@radio-group-update":"_radioGroupUpdateHandler"},mounted:function(){this._resetRadioGroupValue(this.radioList.length-1)},created:function(){this.$dispatch("Form","uni-form-group-update",{type:"add",vm:this})},beforeDestroy:function(){this.$dispatch("Form","uni-form-group-update",{type:"remove",vm:this})},methods:{_changeHandler:function(t,e){var n=this.radioList.indexOf(e);this._resetRadioGroupValue(n,!0),this.$trigger("change",t,{value:e.radioValue})},_radioGroupUpdateHandler:function(t){if("add"===t.type)this.radioList.push(t.vm);else{var e=this.radioList.indexOf(t.vm);this.radioList.splice(e,1)}},_resetRadioGroupValue:function(t,e){var n=this;this.radioList.forEach((function(i,r){r!==t&&(e?n.radioList[r].radioChecked=!1:n.radioList.forEach((function(t,e){r>=e||n.radioList[e].radioChecked&&(n.radioList[r].radioChecked=!1)})))}))},_getFormData:function(){var t={};if(""!==this.name){var e="";this.radioList.forEach((function(t){t.radioChecked&&(e=t.value)})),t.value=e,t.key=this.name}return t}}},s=a,c=(n("fb61"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},d677:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-cover-image",t._g({attrs:{src:t.src}},t.$listeners),[n("div",{staticClass:"uni-cover-image"},[t.src?n("img",{attrs:{src:t.$getRealPath(t.src)},on:{load:t._load,error:t._error}}):t._e()])])},r=[],o={name:"CoverImage",props:{src:{type:String,default:""}},methods:{_load:function(t){this.$trigger("load",t)},_error:function(t){this.$trigger("error",t)}}},a=o,s=(n("5d1d"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},d8c8:function(t,e,n){"use strict";var i,r,o=["top","left","right","bottom"],a={};function s(){return r="CSS"in window&&"function"==typeof CSS.supports?CSS.supports("top: env(safe-area-inset-top)")?"env":CSS.supports("top: constant(safe-area-inset-top)")?"constant":"":"",r}function c(){if(r="string"===typeof r?r:s(),r){var t=[],e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e={passive:!0}}});window.addEventListener("test",null,n)}catch(d){}var c=document.createElement("div");u(c,{position:"absolute",left:"0",top:"0",width:"0",height:"0",zIndex:"-1",overflow:"hidden",visibility:"hidden"}),o.forEach((function(t){h(c,t)})),document.body.appendChild(c),l(),i=!0}else o.forEach((function(t){a[t]=0}));function u(t,e){var n=t.style;Object.keys(e).forEach((function(t){var i=e[t];n[t]=i}))}function l(e){e?t.push(e):t.forEach((function(t){t()}))}function h(t,n){var i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),h=100,d=1e4,p={position:"absolute",width:h+"px",height:"200px",boxSizing:"border-box",overflow:"hidden",paddingBottom:r+"(safe-area-inset-"+n+")"};u(i,p),u(o,p),u(s,{transition:"0s",animation:"none",width:"400px",height:"400px"}),u(c,{transition:"0s",animation:"none",width:"250%",height:"250%"}),i.appendChild(s),o.appendChild(c),t.appendChild(i),t.appendChild(o),l((function(){i.scrollTop=o.scrollTop=d;var t=i.scrollTop,r=o.scrollTop;function a(){this.scrollTop!==(this===i?t:r)&&(i.scrollTop=o.scrollTop=d,t=i.scrollTop,r=o.scrollTop,f(n))}i.addEventListener("scroll",a,e),o.addEventListener("scroll",a,e)}));var g=getComputedStyle(i);Object.defineProperty(a,n,{configurable:!0,get:function(){return parseFloat(g.paddingBottom)}})}}function u(t){return i||c(),a[t]}var l=[];function f(t){l.length||setTimeout((function(){var t={};l.forEach((function(e){t[e]=a[e]})),l.length=0,h.forEach((function(e){e(t)}))}),0),l.push(t)}var h=[];function d(t){s()&&(i||c(),"function"===typeof t&&h.push(t))}function p(t){var e=h.indexOf(t);e>=0&&h.splice(e,1)}var g={get support(){return 0!=("string"===typeof r?r:s()).length},get top(){return u("top")},get left(){return u("left")},get right(){return u("right")},get bottom(){return u("bottom")},onChange:d,offChange:p};t.exports=g},d8ca:function(t,e,n){"use strict";(function(t,i){var r,o=n("8af1"),a=n("a20f");function s(t){return f(t)||l(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t){return t=t.slice(0),t[3]=t[3]/255,"rgba("+t.join(",")+")"}function p(t,e){return[].map.call(e,(function(e){var n=t.getBoundingClientRect();return{identifier:e.identifier,x:e.clientX-n.left,y:e.clientY-n.top}}))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r||(r=document.createElement("canvas")),r.width=t,r.height=e,r}e["a"]={name:"Canvas",mixins:[o["f"]],props:{canvasId:{type:String,default:""},disableScroll:{type:[Boolean,String],default:!1}},data:function(){return{actionsWaiting:!1}},computed:{id:function(){return this.canvasId},_listeners:function(){var t=this,e=Object.assign({},this.$listeners),n=["touchstart","touchmove","touchend"];return n.forEach((function(n){var i=e[n],r=[];i&&r.push((function(e){t.$trigger(n,Object.assign({},e,{touches:p(e.currentTarget,e.touches),changedTouches:p(e.currentTarget,e.changedTouches)}))})),t.disableScroll&&"touchmove"===n&&r.push(t._touchmove),e[n]=r})),e}},created:function(){this._actionsDefer=[],this._images={}},mounted:function(){this._resize({width:this.$refs.sensor.$el.offsetWidth,height:this.$refs.sensor.$el.offsetHeight})},beforeDestroy:function(){var t=this.$refs.canvas;t.height=t.width=0},methods:{_handleSubscribe:function(t){var e=t.type,n=t.data,i=void 0===n?{}:n,r=this[e];0!==e.indexOf("_")&&"function"===typeof r&&r(i)},_resize:function(){var t=this.$refs.canvas;if(t.width>0&&t.height>0){var e=t.getContext("2d"),n=e.getImageData(0,0,t.width,t.height);Object(a["b"])(this.$refs.canvas),e.putImageData(n,0,0)}else Object(a["b"])(this.$refs.canvas)},_touchmove:function(t){t.preventDefault()},actionsChanged:function(e){var n=this,i=e.actions,r=e.reserve,o=e.callbackId,a=this;if(i)if(this.actionsWaiting)this._actionsDefer.push([i,r,o]);else{var c=this.$refs.canvas,u=c.getContext("2d");r||(u.fillStyle="#000000",u.strokeStyle="#000000",u.shadowColor="#000000",u.shadowBlur=0,u.shadowOffsetX=0,u.shadowOffsetY=0,u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,c.width,c.height)),this.preloadImage(i);var l=function(t){var e=i[t],r=e.method,c=e.data;if(/^set/.test(r)&&"setTransform"!==r){var l,f=r[3].toLowerCase()+r.slice(4);if("fillStyle"===f||"strokeStyle"===f){if("normal"===c[0])l=d(c[1]);else if("linear"===c[0]){var g=u.createLinearGradient.apply(u,s(c[1]));c[2].forEach((function(t){var e=t[0],n=d(t[1]);g.addColorStop(e,n)})),l=g}else if("radial"===c[0]){var m=c[1][0],v=c[1][1],b=c[1][2],y=u.createRadialGradient(m,v,0,m,v,b);c[2].forEach((function(t){var e=t[0],n=d(t[1]);y.addColorStop(e,n)})),l=y}else if("pattern"===c[0]){var _=n.checkImageLoaded(c[1],i.slice(t+1),o,(function(t){t&&(u[f]=u.createPattern(t,c[2]))}));return _?"continue":"break"}u[f]=l}else"globalAlpha"===f?u[f]=c[0]/255:"shadow"===f?(h=["shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor"],c.forEach((function(t,e){u[h[e]]="shadowColor"===h[e]?d(t):t}))):"fontSize"===f?u.font=u.font.replace(/\d+\.?\d*px/,c[0]+"px"):"lineDash"===f?(u.setLineDash(c[0]),u.lineDashOffset=c[1]||0):"textBaseline"===f?("normal"===c[0]&&(c[0]="alphabetic"),u[f]=c[0]):u[f]=c[0]}else if("fillPath"===r||"strokePath"===r)r=r.replace(/Path/,""),u.beginPath(),c.forEach((function(t){u[t.method].apply(u,t.data)})),u[r]();else if("fillText"===r)u.fillText.apply(u,c);else if("drawImage"===r){if(p=function(){var e=s(c),n=e[0],r=e.slice(1);if(a._images=a._images||{},!a.checkImageLoaded(n,i.slice(t+1),o,(function(t){t&&u.drawImage.apply(u,[t].concat(s(r.slice(4,8)),s(r.slice(0,4))))})))return"break"}(),"break"===p)return"break"}else"clip"===r?(c.forEach((function(t){u[t.method].apply(u,t.data)})),u.clip()):u[r].apply(u,c)};t:for(var f=0;f<i.length;f++){var h,p,g=l(f);switch(g){case"break":break t;case"continue":continue}}!this.actionsWaiting&&o&&t.publishHandler("onDrawCanvas",{callbackId:o,data:{errMsg:"drawCanvas:ok"}},this.$page.id)}},preloadImage:function(t){var e=this;t.forEach((function(t){var n=t.method,r=t.data,o="";function a(){function t(t){e._images[o].src=(window.URL||window.webkitURL).createObjectURL(t)}function n(t){var n=new plus.nativeObj.Bitmap("bitmap"+Date.now());n.load(t,(function(){e._images[o].src=n.toBase64Data(),n.clear()}),(function(){n.clear(),i.error("preloadImage error")}))}function r(i){function r(){plus.downloader.createDownload(i,{filename:"_doc/uniapp_temp/download/"},(function(t,i){200===i?n(t.filename):e._images[o].src=o})).start()}var a=new XMLHttpRequest;a.open("GET",i,!0),a.responseType="blob",a.onload=function(){200===this.status&&t(this.response)},a.onerror=window.plus?r:function(){e._images[o].src=o},a.send()}e._images[o]=new Image,e._images[o].onload=function(){e._images[o].ready=!0},!window.plus||window.webkit&&window.webkit.messageHandlers?window.plus&&0!==o.indexOf("http://")&&0!==o.indexOf("https://")&&!/^data:.*,.*/.test(o)?n(o):/^data:.*,.*/.test(o)?e._images[o].src=o:r(o):e._images[o].src=o}"drawImage"===n?(o=r[0],o=e.$getRealPath(o),r[0]=o):"setFillStyle"===n&&"pattern"===r[0]&&(o=r[1],o=e.$getRealPath(o),r[1]=o),o&&!e._images[o]&&a()}))},checkImageLoaded:function(t,e,n,i){var r=this,o=this._images[t];return o.ready?(i(o),!0):(this._actionsDefer.unshift([e,!0]),this.actionsWaiting=!0,o.onload=function(){o.ready=!0,i(o),r.actionsWaiting=!1;var t=r._actionsDefer.slice(0);r._actionsDefer=[];for(var e=t.shift();e;)r.actionsChanged({actions:e[0],reserve:e[1],callbackId:n}),e=t.shift()},!1)},getImageData:function(e){var n,i=e.x,r=void 0===i?0:i,o=e.y,c=void 0===o?0:o,u=e.width,l=e.height,f=e.destWidth,h=e.destHeight,d=e.hidpi,p=void 0===d||d,m=e.callbackId,v=this.$refs.canvas;u||(u=v.offsetWidth-r),l||(l=v.offsetHeight-c);try{p?(f=u,h=l):f||h?f?h||(h=Math.round(l/u*f)):f=Math.round(u/l*h):(f=Math.round(u*a["a"]),h=Math.round(l*a["a"]));var b=g(f,h),y=b.getContext("2d");y.__hidpi__=!0,y.drawImageByCanvas(v,r,c,u,l,0,0,f,h,!1),n=y.getImageData(0,0,f,h),b.height=b.width=0,y.__hidpi__=!1}catch(_){if(!m)return;return void t.publishHandler("onCanvasMethodCallback",{callbackId:m,data:{errMsg:"canvasGetImageData:fail"}},this.$page.id)}if(!m)return{data:Array.prototype.slice.call(n.data),width:f,height:h};t.publishHandler("onCanvasMethodCallback",{callbackId:m,data:{errMsg:"canvasGetImageData:ok",data:s(n.data),width:f,height:h}},this.$page.id)},putImageData:function(e){var n=e.data,i=e.x,r=e.y,o=e.width,a=e.height,s=e.callbackId;try{a||(a=Math.round(n.length/4/o));var c=g(o,a),u=c.getContext("2d");u.putImageData(new ImageData(new Uint8ClampedArray(n),o,a),0,0),this.$refs.canvas.getContext("2d").drawImage(c,i,r,o,a),c.height=c.width=0}catch(l){return void t.publishHandler("onCanvasMethodCallback",{callbackId:s,data:{errMsg:"canvasPutImageData:fail"}},this.$page.id)}t.publishHandler("onCanvasMethodCallback",{callbackId:s,data:{errMsg:"canvasPutImageData:ok"}},this.$page.id)},getDataUrl:function(e){var n=this,i=e.x,r=void 0===i?0:i,o=e.y,a=void 0===o?0:o,s=e.width,c=e.height,u=e.destWidth,l=e.destHeight,f=e.hidpi,h=void 0===f||f,d=e.fileType,p=e.qualit,m=e.callbackId,v=this.getImageData({x:r,y:a,width:s,height:c,destWidth:u,destHeight:l,hidpi:h});if(v.data&&v.data.length){var b;try{b=new ImageData(new Uint8ClampedArray(v.data),v.width,v.height)}catch(k){return void t.publishHandler("onCanvasMethodCallback",{callbackId:m,data:{errMsg:"canvasGetDataUrl:fail"}},this.$page.id)}u=v.width,l=v.height;var y=g(u,l),_=y.getContext("2d");_.putImageData(b,0,0);var w=y.toDataURL("image/png");y.height=y.width=0;var S=new Image;S.onload=function(){var e=g(u,l);"jpeg"!==d&&"jpg"!==d||(d="jpeg",_.fillStyle="#fff",_.fillRect(0,0,u,l)),_.drawImage(S,0,0),w=e.toDataURL("image/".concat(d),p),e.height=e.width=0,t.publishHandler("onCanvasMethodCallback",{callbackId:m,data:{errMsg:"canvasGetDataUrl:ok",base64:w}},n.$page.id)},S.src=w}else t.publishHandler("onCanvasMethodCallback",{callbackId:m,data:{errMsg:"canvasGetDataUrl:fail"}},this.$page.id)}}}}).call(this,n("501c"),n("3ad9")["default"])},db18:function(t,e,n){"use strict";var i=n("db76"),r=n.n(i);r.a},db70:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var i=n("4486");function r(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return i["a"][t].apply(null,n)}function o(e,n){return t.on("api."+e,n)}function a(e){var n=getCurrentPages(),i=n.length;i||t.emit("onError","".concat(e,":fail"));var r=n[i-1];return r.$vm}function s(){var t=getCurrentPages(),e=t[t.length-1];return e&&e.$page.id}}).call(this,n("0dd1"))},db76:function(t,e,n){},db8e:function(t,e,n){"use strict";(function(t){function i(e,n){return n?e?e.$el:n.$el:t.error("page is not ready")}n.d(e,"a",(function(){return i}))}).call(this,n("3ad9")["default"])},dd35:function(t,e,n){"use strict";(function(t){var i=n("e949"),r=n("cb0f"),o=n("15bb"),a={forward:"&#xe600;",back:"&#xe601;",share:"&#xe602;",favorite:"&#xe604;",home:"&#xe605;",menu:"&#xe606;",close:"&#xe650;"};e["a"]={name:"PageHead",mixins:[o["a"]],props:{backButton:{type:Boolean,default:!0},backgroundColor:{type:String,default:function(){return"transparent"===this.type?"#000":"#F8F8F8"}},textColor:{type:String,default:"#fff"},titleText:{type:String,default:""},duration:{type:String,default:"0"},timingFunc:{type:String,default:""},loading:{type:Boolean,default:!1},titleSize:{type:String,default:"16px"},type:{default:"default",validator:function(t){return-1!==["default","transparent","float"].indexOf(t)}},coverage:{type:String,default:"132px"},buttons:{type:Array,default:function(){return[]}},searchInput:{type:[Object,Boolean],default:function(){return!1}},titleImage:{type:String,default:""},titlePenetrate:{type:Boolean,default:!1},shadow:{type:Object,default:function(){return{}}}},data:function(){return{focus:!1,text:"",composing:!1}},computed:{btns:function(){var t=this,e=[],n={};return this.buttons.length&&this.buttons.forEach((function(o){var a=Object.assign({},o);if(a.fontSrc&&!a.fontFamily){var s,c=a.fontSrc=Object(r["a"])(a.fontSrc);if(c in n)s=n[c];else{s="font".concat(Date.now()),n[c]=s;var u='@font-face{font-family: "'.concat(s,'";src: url("').concat(c,'") format("truetype")}');Object(i["a"])(u,"uni-btn-font-"+s)}a.fontFamily=s}a.color="transparent"===t.type?"#fff":a.color||t.textColor;var l=a.fontSize||("transparent"===t.type||/\\u/.test(a.text)?"22px":"27px");/\d$/.test(l)&&(l+="px"),a.fontSize=l,a.fontWeight=a.fontWeight||"normal",e.push(a)})),e},headClass:function(){var t=this.shadow.colorType,e={"uni-page-head-transparent":"transparent"===this.type,"uni-page-head-titlePenetrate":this.titlePenetrate,"uni-page-head-shadow":t};return t&&(e["uni-page-head-shadow-".concat(t)]=t),e}},mounted:function(){var e=this;if(this.searchInput){var n=this.$refs.input;n.$watch("composing",(function(t){e.composing=t})),this.searchInput.disabled?n.$el.addEventListener("click",(function(){t.emit("onNavigationBarSearchInputClicked","")})):(n.$refs.input.addEventListener("keyup",(function(n){"ENTER"===n.key.toUpperCase()&&t.emit("onNavigationBarSearchInputConfirmed",{text:e.text})})),n.$refs.input.addEventListener("focus",(function(){t.emit("onNavigationBarSearchInputFocusChanged",{focus:!0})})),n.$refs.input.addEventListener("blur",(function(){t.emit("onNavigationBarSearchInputFocusChanged",{focus:!1})})))}},methods:{_back:function(){1===getCurrentPages().length?uni.reLaunch({url:"/"}):uni.navigateBack({from:"backbutton"})},_onBtnClick:function(e){t.emit("onNavigationBarButtonTap",Object.assign({},this.btns[e],{index:e}))},_formatBtnFontText:function(t){return t.fontSrc&&t.fontFamily?t.text.replace("\\u","&#x"):a[t.type]?a[t.type]:t.text||""},_formatBtnStyle:function(t){var e={color:t.color,fontSize:t.fontSize,fontWeight:t.fontWeight};return t.fontFamily&&(e.fontFamily=t.fontFamily),e},_focus:function(){this.focus=!0},_blur:function(){this.focus=!1},_input:function(e){t.emit("onNavigationBarSearchInputChanged",{text:e})}}}}).call(this,n("0dd1"))},de29:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("f2b3");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){var r=e[t],o=!Object(i["h"])(n,t),s=n[t],c=f(Boolean,r.type);if(c>-1&&o&&!Object(i["h"])(r,"default")&&(s=!1),void 0===s&&Object(i["h"])(r,"default")){var u=r.default;s=Object(i["j"])(u)?u():u,n[t]=s}return a(r,t,s,o,n)}function a(t,e,n,i,r){if(t.required&&i)return"Missing required parameter `".concat(e,"`");if(null==n&&!t.required){var o=t.validator;return o?o(n,r):void 0}var a=t.type,s=!a||!0===a,u=[];if(a){Array.isArray(a)||(a=[a]);for(var l=0;l<a.length&&!s;l++){var f=c(n,a[l]);u.push(f.expectedType||""),s=f.valid}}if(!s)return h(e,n,u);var d=t.validator;return d?d(n,r):void 0}var s=/^(String|Number|Boolean|Function|Symbol)$/;function c(t,e){var n,o=u(e);if(s.test(o)){var a=r(t);n=a===o.toLowerCase(),n||"object"!==a||(n=t instanceof e)}else n=t.byteLength>=0||("Object"===o?Object(i["k"])(t):"Array"===o?Array.isArray(t):t instanceof e||Object(i["q"])(t)===u(e));return{valid:n,expectedType:o}}function u(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function l(t,e){return u(t)===u(e)}function f(t,e){if(!Array.isArray(e))return l(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(l(e[n],t))return n;return-1}function h(t,e,n){var r="parameter `".concat(t,"`.")+" Expected ".concat(n.join(", ")),o=n[0],a=Object(i["q"])(e),s=d(e,o),c=d(e,a);return 1===n.length&&g(o)&&!m(o,a)&&(r+=" with value ".concat(s)),r+=", got ".concat(a," "),g(a)&&(r+="with value ".concat(c,".")),r}function d(t,e){return"String"===e?'"'.concat(t,'"'):"".concat("Number"===e?Number(t):t)}var p=["string","number","boolean"];function g(t){return p.some((function(e){return t.toLowerCase()===e}))}function m(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.some((function(t){return"boolean"===t.toLowerCase()}))}},df1e:function(t,e,n){},e0b6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-audio",t._g({attrs:{id:t.id,controls:!!t.controls}},t.$listeners),[n("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{loop:t.loop}}),n("div",{staticClass:"uni-audio-default"},[n("div",{staticClass:"uni-audio-left",style:"background-image: url("+t.$getRealPath(t.poster)+");"},[n("div",{staticClass:"uni-audio-button",class:{play:!t.playing,pause:t.playing},on:{click:t.trigger}})]),n("div",{staticClass:"uni-audio-right"},[n("div",{staticClass:"uni-audio-time"},[t._v(" "+t._s(t.currentTime)+" ")]),n("div",{staticClass:"uni-audio-info"},[n("div",{staticClass:"uni-audio-name"},[t._v(" "+t._s(t.name)+" ")]),n("div",{staticClass:"uni-audio-author"},[t._v(" "+t._s(t.author)+" ")])])])])])},r=[],o=n("8af1"),a={name:"Audio",mixins:[o["f"]],props:{id:{type:String,default:""},src:{type:String,default:""},loop:{type:[Boolean,String],default:!1},controls:{type:[Boolean,String],default:!1},poster:{type:String,default:""},name:{type:String,default:""},author:{type:String,default:""}},data:function(){return{playing:!1,currentTime:this.getTime(0)}},watch:{src:function(t){this.$refs.audio&&(this.$refs.audio.src=this.$getRealPath(t))}},mounted:function(){var t=this,e=this.$refs.audio;e.addEventListener("error",(function(e){t.playing=!1,t.$trigger("error",e,{})})),e.addEventListener("play",(function(e){t.playing=!0,t.$trigger("play",e,{})})),e.addEventListener("pause",(function(e){t.playing=!1,t.$trigger("pause",e,{})})),e.addEventListener("ended",(function(e){t.playing=!1,t.$trigger("ended",e,{})})),e.addEventListener("timeupdate",(function(n){var i=e.currentTime;t.currentTime=t.getTime(i);var r=e.duration;t.$trigger("timeupdate",n,{currentTime:i,duration:r})})),e.src=this.$getRealPath(this.src)},methods:{_handleSubscribe:function(t){var e=t.type,n=t.data,i=void 0===n?{}:n,r=this.$refs.audio;switch(e){case"setSrc":r.src=this.$getRealPath(i.src),this.$emit("update:src",i.src);break;case"play":r.play();break;case"pause":r.pause();break;case"seek":r.currentTime=i.position;break}},trigger:function(){this.playing?this.$refs.audio.pause():this.$refs.audio.play()},getTime:function(t){var e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=Math.floor(t%3600%60);e=(e<10?"0":"")+e,n=(n<10?"0":"")+n,i=(i<10?"0":"")+i;var r=n+":"+i;return"00"!==e&&(r=e+":"+r),r}}},s=a,c=(n("e38a"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},e298:function(t,e,n){"use strict";var i=n("add1"),r=n.n(i);r.a},e2d4:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=t,r=i.invokeCallbackHandler;function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.base64Data,n=(t.x,t.y,t.width,t.height,t.destWidth,t.destHeight,t.canvasId,t.fileType,t.quality,arguments.length>1?arguments[1]:void 0);r(n,{errMsg:"canvasToTempFilePath:ok",tempFilePath:e})}}).call(this,n("0dd1"))},e2e2:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var i=n("f2b3"),r={};function o(t){var e=r[t];return e?Promise.resolve(e):/^data:[a-z-]+\/[a-z-]+;base64,/.test(t)?Promise.resolve(a(t)):new Promise((function(e,n){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="blob",i.onload=function(){e(this.response)},i.onerror=n,i.send()}))}function a(t){t=t.split(",");var e=t[0].match(/:(.*?);/)[1],n=atob(t[1]),i=n.length,r=new Uint8Array(i);while(i--)r[i]=n.charCodeAt(i);var o="".concat(Date.now(),".").concat(e.split("/")[1]);return new File([r],o,{type:e})}function s(t){for(var e in r)if(Object(i["h"])(r,e)){var n=r[e];if(n===t)return e}var o=(window.URL||window.webkitURL).createObjectURL(t);return r[o]=t,o}function c(t){(window.URL||window.webkitURL).revokeObjectURL(t),delete r[t]}},e38a:function(t,e,n){"use strict";var i=n("8fa5"),r=n.n(i);r.a},e4ee:function(t,e,n){"use strict";n.r(e),n.d(e,"onCompassChange",(function(){return s})),n.d(e,"startCompass",(function(){return c})),n.d(e,"stopCompass",(function(){return u}));var i=n("a118"),r=n("db70"),o=[];Object(r["d"])("onCompassChange",(function(t){o.forEach((function(e){Object(i["a"])(e,t)}))}));var a=!1;function s(t){o.push(t),a||c()}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interval;if(!a)return a=!0,Object(r["c"])("enableCompass",{enable:!0})}function u(){return a=!1,Object(r["c"])("enableCompass",{enable:!1})}},e4f1:function(t,e,n){},e5bb:function(t,e,n){"use strict";n.r(e),n.d(e,"chooseLocation",(function(){return i}));var i={keyword:{type:String}}},e692:function(t,e,n){},e826:function(t,e,n){"use strict";(function(t){function i(e,n){var i=e.filePath,r=t,o=r.invokeCallbackHandler;window.open(i),o(n,{errMsg:"openDocument:ok"})}n.d(e,"a",(function(){return i}))}).call(this,n("0dd1"))},e865:function(t,e,n){"use strict";var i=n("5dc4"),r=n.n(i);r.a},e8b5:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var i=[],r=[];function o(){r.push(setTimeout((function(){r.forEach((function(t){return clearTimeout(t)})),r.length=0;var e=t,n=e.invokeCallbackHandler,o=uni.getSystemInfoSync(),a=o.windowWidth,s=o.windowHeight,c=o.screenWidth,u=o.screenHeight,l=90===Math.abs(window.orientation),f=l?"landscape":"portrait";i.forEach((function(t){n(t,{deviceOrientation:f,size:{windowWidth:a,windowHeight:s,screenWidth:c,screenHeight:u}})}))}),20))}function a(t){i.length||window.addEventListener("resize",o),i.push(t)}function s(t){i.splice(i.indexOf(t),1),i.length||window.removeEventListener("resize",o)}}).call(this,n("0dd1"))},e949:function(t,e,n){"use strict";function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=document.getElementById(e);i&&n&&(i.parentNode.removeChild(i),i=null),i||(i=document.createElement("style"),i.type="text/css",e&&(i.id=e),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(t))}n.d(e,"a",(function(){return i}))},ea49:function(t,e,n){},ec33:function(t,e,n){"use strict";n.r(e),n.d(e,"getStorage",(function(){return i})),n.d(e,"getStorageSync",(function(){return r})),n.d(e,"setStorage",(function(){return o})),n.d(e,"setStorageSync",(function(){return a})),n.d(e,"removeStorage",(function(){return s})),n.d(e,"removeStorageSync",(function(){return c}));var i={key:{type:String,required:!0}},r=[{name:"key",type:String,required:!0}],o={key:{type:String,required:!0},data:{required:!0}},a=[{name:"key",type:String,required:!0},{name:"data",required:!0}],s=i,c=r},ed1a:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return v}));var i=n("f2b3"),r=n("8542"),o=/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,a=/^create|Manager$/,s=["createBLEConnection"],c=["request","downloadFile","uploadFile","connectSocket"],u=["createBLEConnection"],l=/^on|^off/;function f(t){return a.test(t)&&-1===s.indexOf(t)}function h(t){return o.test(t)&&-1===u.indexOf(t)}function d(t){return l.test(t)&&"onPush"!==t}function p(t){return-1!==c.indexOf(t)}function g(t){return t.then((function(t){return[null,t]})).catch((function(t){return[t]}))}function m(t){return!(f(t)||h(t)||d(t))}function v(t,e){return m(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return Object(i["j"])(n.success)||Object(i["j"])(n.fail)||Object(i["j"])(n.complete)?Object(r["e"])(t,r["b"].apply(void 0,[t,e,n].concat(a))):Object(r["e"])(t,g(new Promise((function(i,o){r["b"].apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(a))}))))}:e}Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))})},ed78:function(t,e,n){"use strict";(function(t){var i=n("8aec"),r=n("f2b3"),o=!!r["o"]&&{passive:!0};e["a"]={name:"ScrollView",mixins:[i["a"]],props:{scrollX:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},upperThreshold:{type:[Number,String],default:50},lowerThreshold:{type:[Number,String],default:50},scrollTop:{type:[Number,String],default:0},scrollLeft:{type:[Number,String],default:0},scrollIntoView:{type:String,default:""},scrollWithAnimation:{type:[Boolean,String],default:!1},enableBackToTop:{type:[Boolean,String],default:!1},refresherEnabled:{type:[Boolean,String],default:!1},refresherThreshold:{type:Number,default:45},refresherDefaultStyle:{type:String,default:"back"},refresherBackground:{type:String,default:"#fff"},refresherTriggered:{type:[Boolean,String],default:!1}},data:function(){return{lastScrollTop:this.scrollTopNumber,lastScrollLeft:this.scrollLeftNumber,lastScrollToUpperTime:0,lastScrollToLowerTime:0,refresherHeight:0,refreshRotate:0,refreshState:""}},computed:{upperThresholdNumber:function(){var t=Number(this.upperThreshold);return isNaN(t)?50:t},lowerThresholdNumber:function(){var t=Number(this.lowerThreshold);return isNaN(t)?50:t},scrollTopNumber:function(){return Number(this.scrollTop)||0},scrollLeftNumber:function(){return Number(this.scrollLeft)||0}},watch:{scrollTopNumber:function(t){this._scrollTopChanged(t)},scrollLeftNumber:function(t){this._scrollLeftChanged(t)},scrollIntoView:function(t){this._scrollIntoViewChanged(t)},refresherTriggered:function(t){!0===t?this._setRefreshState("refreshing"):!1===t&&this._setRefreshState("restore")}},mounted:function(){var t=this;this._attached=!0,this._scrollTopChanged(this.scrollTopNumber),this._scrollLeftChanged(this.scrollLeftNumber),this._scrollIntoViewChanged(this.scrollIntoView),this.__handleScroll=function(e){event.preventDefault(),event.stopPropagation(),t._handleScroll.bind(t,event)()};var e=null,n=null;this.__handleTouchMove=function(i){var r=i.touches[0].pageX,o=i.touches[0].pageY,a=t.$refs.main;if(null===n)if(Math.abs(r-e.x)>Math.abs(o-e.y))if(t.scrollX){if(0===a.scrollLeft&&r>e.x)return void(n=!1);if(a.scrollWidth===a.offsetWidth+a.scrollLeft&&r<e.x)return void(n=!1);n=!0}else n=!1;else if(t.scrollY){if(0===a.scrollTop&&o>e.y)return void(n=!1);if(a.scrollHeight===a.offsetHeight+a.scrollTop&&o<e.y)return void(n=!1);n=!0}else n=!1;if(n&&i.stopPropagation(),t.refresherEnabled&&"pulling"===t.refreshState){var s=o-e.y;t.refresherHeight=s;var c=s/t.refresherThreshold;c>1?c=1:c*=360,t.refreshRotate=c,t.$trigger("refresherpulling",i,{deltaY:s})}},this.__handleTouchStart=function(i){1===i.touches.length&&(Object(r["e"])({disable:!0}),n=null,e={x:i.touches[0].pageX,y:i.touches[0].pageY},t.refresherEnabled&&"refreshing"!==t.refreshState&&0===t.$refs.main.scrollTop&&(t.refreshState="pulling"))},this.__handleTouchEnd=function(n){e=null,Object(r["e"])({disable:!1}),t.refresherHeight>=t.refresherThreshold?t._setRefreshState("refreshing"):(t.refresherHeight=0,t.$trigger("refresherabort",n,{}))},this.$refs.main.addEventListener("touchstart",this.__handleTouchStart,o),this.$refs.main.addEventListener("touchmove",this.__handleTouchMove,o),this.$refs.main.addEventListener("scroll",this.__handleScroll,!!r["o"]&&{passive:!1}),this.$refs.main.addEventListener("touchend",this.__handleTouchEnd,o)},activated:function(){this.scrollY&&(this.$refs.main.scrollTop=this.lastScrollTop),this.scrollX&&(this.$refs.main.scrollLeft=this.lastScrollLeft)},beforeDestroy:function(){this.$refs.main.removeEventListener("touchstart",this.__handleTouchStart,o),this.$refs.main.removeEventListener("touchmove",this.__handleTouchMove,o),this.$refs.main.removeEventListener("scroll",this.__handleScroll,!!r["o"]&&{passive:!1}),this.$refs.main.removeEventListener("touchend",this.__handleTouchEnd,o)},methods:{scrollTo:function(t,e){var n=this.$refs.main;t<0?t=0:"x"===e&&t>n.scrollWidth-n.offsetWidth?t=n.scrollWidth-n.offsetWidth:"y"===e&&t>n.scrollHeight-n.offsetHeight&&(t=n.scrollHeight-n.offsetHeight);var i=0,r="";"x"===e?i=n.scrollLeft-t:"y"===e&&(i=n.scrollTop-t),0!==i&&(this.$refs.content.style.transition="transform .3s ease-out",this.$refs.content.style.webkitTransition="-webkit-transform .3s ease-out","x"===e?r="translateX("+i+"px) translateZ(0)":"y"===e&&(r="translateY("+i+"px) translateZ(0)"),this.$refs.content.removeEventListener("transitionend",this.__transitionEnd),this.$refs.content.removeEventListener("webkitTransitionEnd",this.__transitionEnd),this.__transitionEnd=this._transitionEnd.bind(this,t,e),this.$refs.content.addEventListener("transitionend",this.__transitionEnd),this.$refs.content.addEventListener("webkitTransitionEnd",this.__transitionEnd),"x"===e?n.style.overflowX="hidden":"y"===e&&(n.style.overflowY="hidden"),this.$refs.content.style.transform=r,this.$refs.content.style.webkitTransform=r)},_handleTrack:function(t){if("start"===t.detail.state)return this._x=t.detail.x,this._y=t.detail.y,void(this._noBubble=null);"end"===t.detail.state&&(this._noBubble=!1),null===this._noBubble&&this.scrollY&&(Math.abs(this._y-t.detail.y)/Math.abs(this._x-t.detail.x)>1?this._noBubble=!0:this._noBubble=!1),null===this._noBubble&&this.scrollX&&(Math.abs(this._x-t.detail.x)/Math.abs(this._y-t.detail.y)>1?this._noBubble=!0:this._noBubble=!1),this._x=t.detail.x,this._y=t.detail.y,this._noBubble&&t.stopPropagation()},_handleScroll:function(t){if(!(t.timeStamp-this._lastScrollTime<20)){this._lastScrollTime=t.timeStamp;var e=t.target;this.$trigger("scroll",t,{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,deltaX:this.lastScrollLeft-e.scrollLeft,deltaY:this.lastScrollTop-e.scrollTop}),this.scrollY&&(e.scrollTop<=this.upperThresholdNumber&&this.lastScrollTop-e.scrollTop>0&&t.timeStamp-this.lastScrollToUpperTime>200&&(this.$trigger("scrolltoupper",t,{direction:"top"}),this.lastScrollToUpperTime=t.timeStamp),e.scrollTop+e.offsetHeight+this.lowerThresholdNumber>=e.scrollHeight&&this.lastScrollTop-e.scrollTop<0&&t.timeStamp-this.lastScrollToLowerTime>200&&(this.$trigger("scrolltolower",t,{direction:"bottom"}),this.lastScrollToLowerTime=t.timeStamp)),this.scrollX&&(e.scrollLeft<=this.upperThresholdNumber&&this.lastScrollLeft-e.scrollLeft>0&&t.timeStamp-this.lastScrollToUpperTime>200&&(this.$trigger("scrolltoupper",t,{direction:"left"}),this.lastScrollToUpperTime=t.timeStamp),e.scrollLeft+e.offsetWidth+this.lowerThresholdNumber>=e.scrollWidth&&this.lastScrollLeft-e.scrollLeft<0&&t.timeStamp-this.lastScrollToLowerTime>200&&(this.$trigger("scrolltolower",t,{direction:"right"}),this.lastScrollToLowerTime=t.timeStamp)),this.lastScrollTop=e.scrollTop,this.lastScrollLeft=e.scrollLeft}},_scrollTopChanged:function(t){this.scrollY&&(this._innerSetScrollTop?this._innerSetScrollTop=!1:this.scrollWithAnimation?this.scrollTo(t,"y"):this.$refs.main.scrollTop=t)},_scrollLeftChanged:function(t){this.scrollX&&(this._innerSetScrollLeft?this._innerSetScrollLeft=!1:this.scrollWithAnimation?this.scrollTo(t,"x"):this.$refs.main.scrollLeft=t)},_scrollIntoViewChanged:function(e){if(e){if(!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(e))return t.group('scroll-into-view="'+e+'" 有误'),t.error("id 属性值格式错误。如不能以数字开头。"),void t.groupEnd();var n=this.$el.querySelector("#"+e);if(n){var i=this.$refs.main.getBoundingClientRect(),r=n.getBoundingClientRect();if(this.scrollX){var o=r.left-i.left,a=this.$refs.main.scrollLeft,s=a+o;this.scrollWithAnimation?this.scrollTo(s,"x"):this.$refs.main.scrollLeft=s}if(this.scrollY){var c=r.top-i.top,u=this.$refs.main.scrollTop,l=u+c;this.scrollWithAnimation?this.scrollTo(l,"y"):this.$refs.main.scrollTop=l}}}},_transitionEnd:function(t,e){this.$refs.content.style.transition="",this.$refs.content.style.webkitTransition="",this.$refs.content.style.transform="",this.$refs.content.style.webkitTransform="";var n=this.$refs.main;"x"===e?(n.style.overflowX=this.scrollX?"auto":"hidden",n.scrollLeft=t):"y"===e&&(n.style.overflowY=this.scrollY?"auto":"hidden",n.scrollTop=t),this.$refs.content.removeEventListener("transitionend",this.__transitionEnd),this.$refs.content.removeEventListener("webkitTransitionEnd",this.__transitionEnd)},_setRefreshState:function(t){switch(t){case"refreshing":this.refresherHeight=this.refresherThreshold,this.$trigger("refresherrefresh",event,{});break;case"restore":this.refresherHeight=0,this.$trigger("refresherrestore",{},{});break}this.refreshState=t},getScrollPosition:function(){var t=this.$refs.main;return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}}}}).call(this,n("3ad9")["default"])},ed9f:function(t,e,n){"use strict";n.r(e),n.d(e,"chooseVideo",(function(){return r}));var i=["album","camera"],r={sourceType:{type:Array,required:!1,default:i,validator:function(t,e){var n=t.length;if(n){for(var r=0;r<n;r++)if("string"!==typeof t[r]||!~i.indexOf(t[r])){e.sourceType=i;break}}else e.sourceType=i}}}},edfa:function(t,e,n){"use strict";var i=n("c418"),r=n.n(i);r.a},ee03:function(t,e,n){"use strict";n.r(e),n.d(e,"VideoContext",(function(){return u})),n.d(e,"createVideoContext",(function(){return l}));var i=n("db70");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var s=[.5,.8,1,1.25,1.5,2];function c(t,e,n,r){Object(i["c"])("operateVideoPlayer",t,e,n,r)}var u=function(){function t(e,n){r(this,t),this.id=e,this.pageVm=n}return a(t,[{key:"play",value:function(){c(this.id,this.pageVm,"play")}},{key:"pause",value:function(){c(this.id,this.pageVm,"pause")}},{key:"stop",value:function(){c(this.id,this.pageVm,"stop")}},{key:"seek",value:function(t){c(this.id,this.pageVm,"seek",{position:t})}},{key:"sendDanmu",value:function(t){c(this.id,this.pageVm,"sendDanmu",t)}},{key:"playbackRate",value:function(t){~s.indexOf(t)||(t=1),c(this.id,this.pageVm,"playbackRate",{rate:t})}},{key:"requestFullScreen",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this.id,this.pageVm,"requestFullScreen",t)}},{key:"exitFullScreen",value:function(){c(this.id,this.pageVm,"exitFullScreen")}},{key:"showStatusBar",value:function(){c(this.id,this.pageVm,"showStatusBar")}},{key:"hideStatusBar",value:function(){c(this.id,this.pageVm,"hideStatusBar")}}]),t}();function l(t,e){return new u(t,e||Object(i["b"])("createVideoContext"))}},ee4f:function(t,e,n){"use strict";n.r(e),function(t){var i=n("f2b3");e["default"]={data:function(){return{showModal:{visible:!1}}},created:function(){var e=this;t.on("onShowModal",(function(t,n){e.showModal=t,e.onModalCloseCallback=n})),t.on("onHidePopup",(function(t){e.showModal.visible=!1}))},methods:{_onModalClose:function(t){this.showModal.visible=!1,Object(i["j"])(this.onModalCloseCallback)&&this.onModalCloseCallback(t)}}}}.call(this,n("0dd1"))},ef36:function(t,e,n){},f0c3:function(t,e,n){"use strict";n.r(e),n.d(e,"downloadFile",(function(){return l}));var i=n("a118"),r=n("db70");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var c=function(){function t(e,n){o(this,t),this.id=e,this._callbackId=n,this._callbacks=[]}return s(t,[{key:"abort",value:function(){Object(r["c"])("operateDownloadTask",{downloadTaskId:this.id,operationType:"abort"})}},{key:"onProgressUpdate",value:function(t){"function"===typeof t&&this._callbacks.push(t)}},{key:"onHeadersReceived",value:function(){}},{key:"offProgressUpdate",value:function(t){var e=this._callbacks.indexOf(t);e>=0&&this._callbacks.splice(e,1)}},{key:"offHeadersReceived",value:function(){}}]),t}(),u=Object.create(null);function l(t,e){var n=Object(r["c"])("createDownloadTask",t),i=n.downloadTaskId,o=new c(i,e);return u[i]=o,o}Object(r["d"])("onDownloadTaskStateChange",(function(t){var e=t.downloadTaskId,n=t.state,r=t.tempFilePath,o=t.statusCode,a=t.progress,s=t.totalBytesWritten,c=t.totalBytesExpectedToWrite,l=t.errMsg,f=u[e],h=f._callbackId;switch(n){case"progressUpdate":f._callbacks.forEach((function(t){t({progress:a,totalBytesWritten:s,totalBytesExpectedToWrite:c})}));break;case"success":Object(i["a"])(h,{tempFilePath:r,statusCode:o,errMsg:"request:ok"});case"fail":Object(i["a"])(h,{errMsg:"request:fail "+l});default:setTimeout((function(){delete u[e]}),100);break}}))},f102:function(t,e,n){"use strict";n.r(e),n.d(e,"makePhoneCall",(function(){return i}));var i={phoneNumber:{type:String,required:!0,validator:function(t){if(!t)return"makePhoneCall:fail parameter error: parameter.phoneNumber should not be empty String;"}}}},f10e:function(t,e,n){"use strict";var i=n("29a2"),r=n.n(i);r.a},f1b2:function(t,e,n){"use strict";n.r(e),n.d(e,"chooseImage",(function(){return o}));var i=["original","compressed"],r=["album","camera"],o={count:{type:Number,required:!1,default:9,validator:function(t,e){t<=0&&(e.count=9)}},sizeType:{type:[Array,String],required:!1,default:i,validator:function(t,e){var n=t.length;if(n){if("string"===typeof t)~i.indexOf(t)||(e.sizeType=i);else for(var r=0;r<n;r++)if("string"!==typeof t[r]||!~i.indexOf(t[r])){e.sizeType=i;break}}else e.sizeType=i}},sourceType:{type:Array,required:!1,default:r,validator:function(t,e){var n=t.length;if(n){for(var i=0;i<n;i++)if("string"!==typeof t[i]||!~r.indexOf(t[i])){e.sourceType=r;break}}else e.sourceType=r}}}},f1ea:function(t,e,n){"use strict";n.r(e);var i=[],r=n("8793");r.keys().forEach((function(t){"./index.js"!==t&&i.push(r(t).default)})),e["default"]=i},f1ef:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-scroll-view",t._g({},t.$listeners),[n("div",{ref:"wrap",staticClass:"uni-scroll-view"},[n("div",{ref:"main",staticClass:"uni-scroll-view",style:{"overflow-x":t.scrollX?"auto":"hidden","overflow-y":t.scrollY?"auto":"hidden"}},[n("div",{ref:"content",staticClass:"uni-scroll-view-content"},[t.refresherEnabled?n("div",{ref:"refresherinner",staticClass:"uni-scroll-view-refresher",style:{"background-color":t.refresherBackground,height:t.refresherHeight+"px"}},["none"!==t.refresherDefaultStyle?n("div",{staticClass:"uni-scroll-view-refresh"},[n("div",{staticClass:"uni-scroll-view-refresh-inner"},["pulling"==t.refreshState?n("svg",{staticClass:"uni-scroll-view-refresh__icon",style:{transform:"rotate("+t.refreshRotate+"deg)"},attrs:{fill:"#2BD009",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]):t._e(),"refreshing"==t.refreshState?n("svg",{staticClass:"uni-scroll-view-refresh__spinner",attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[n("circle",{staticStyle:{color:"#2BD009"},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"3"}})]):t._e()])]):t._e(),"none"==t.refresherDefaultStyle?t._t("refresher"):t._e()],2):t._e(),t._t("default")],2)])])])},r=[],o=n("ed78"),a=o["a"],s=(n("5ab3"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=c.exports},f2b3:function(t,e,n){"use strict";n.d(e,"o",(function(){return i})),n.d(e,"j",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"n",(function(){return p})),n.d(e,"g",(function(){return g})),n.d(e,"f",(function(){return m})),n.d(e,"r",(function(){return v})),n.d(e,"b",(function(){return b})),n.d(e,"p",(function(){return y})),n.d(e,"l",(function(){return _})),n.d(e,"d",(function(){return w})),n.d(e,"i",(function(){return S})),n.d(e,"c",(function(){return O})),n.d(e,"e",(function(){return j})),n.d(e,"m",(function(){return E})),n.d(e,"a",(function(){return B}));var i=!1;try{var r={};Object.defineProperty(r,"passive",{get:function(){i=!0}}),window.addEventListener("test-passive",null,r)}catch(L){}var o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,s=function(t){return t>9?t:"0"+t};function c(t){return"function"===typeof t}function u(t){return"[object Object]"===o.call(t)}function l(t,e){return a.call(t,e)}function f(t){return o.call(t).slice(8,-1)}function h(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var d=/-(\w)/g;h((function(t){return t.replace(d,(function(t,e){return e?e.toUpperCase():""}))}));function p(t,e,n){e.forEach((function(e){l(n,e)&&(t[e]=n[e])}))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(""+t).replace(/[^\x00-\xff]/g,"**").length}function m(t){var e=t.date,n=void 0===e?new Date:e,i=t.mode,r=void 0===i?"date":i;return"time"===r?s(n.getHours())+":"+s(n.getMinutes()):n.getFullYear()+"-"+s(n.getMonth()+1)+"-"+s(n.getDate())}function v(t,e){for(var n in e)t.style[n]=e[n]}function b(t,e){var n,i=function(){var i=arguments,r=this;clearTimeout(n);var o=function(){return t.apply(r,i)};n=setTimeout(o,e)};return i.cancel=function(){clearTimeout(n)},i}function y(t,e){var n,i=0,r=function(){for(var r=this,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];var c=Date.now();clearTimeout(n);var u=function(){i=c,t.apply(r,a)};c-i<e?n=setTimeout(u,e-(c-i)):u()};return r.cancel=function(){clearTimeout(n)},r}function _(t){return t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}))}function w(t,e){function n(t){var i=t.children&&t.children.map(n),r=e(t.tag,t.data,i);return r.text=t.text,r.isComment=t.isComment,r.componentOptions=t.componentOptions,r.elm=t.elm,r.context=t.context,r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r}return t.map(n)}function S(t){var e,n,i;if(t=t.replace("#",""),6===t.length)e=t.substring(0,2),n=t.substring(2,4),i=t.substring(4,6);else{if(3!==t.length)return!1;e=t.substring(0,1),n=t.substring(1,2),i=t.substring(2,3)}return 1===e.length&&(e+=e),1===n.length&&(n+=n),1===i.length&&(i+=i),e=parseInt(e,16),n=parseInt(n,16),i=parseInt(i,16),{r:e,g:n,b:i}}var k,C,T,x=decodeURIComponent;function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};return Object.keys(t).forEach((function(n){try{e[n]=x(t[n])}catch(L){e[n]=t[n]}})),e}function E(t){if("function"===typeof t)return window.plus?t():void document.addEventListener("plusready",t)}var M={};function j(t){var e=t.disable;function n(){k||(k=plus.webview.currentWebview()),T||(C=(k.getStyle()||{}).pullToRefresh||{}),T=e,C.support&&k.setPullToRefresh(Object.assign({},C,{support:!e}))}var i=Date.now();e===M.disable&&i-M.time<20||(M.disable=e,M.time=i,E((function(){"iOS"===plus.os.name?setTimeout(n,20):n()})))}var A=0,I={};function $(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=String(A++);I[n]={success:e.success,fail:e.fail,complete:e.complete};var i=Object.assign({},e),r=t.bind(this)(i,n);r&&P(n,r)}}function P(t,e){var n=I[t]||{};delete I[t];var i=e.errMsg||"";new RegExp("\\:\\s*fail").test(i)?n.fail&&n.fail(e):n.success&&n.success(e),n.complete&&n.complete(e)}var B={warp:$,invoke:P}},f2ce:function(t,e,n){"use strict";(function(t){var i=n("8af1");e["a"]={name:"Label",mixins:[i["b"]],props:{for:{type:String,default:""}},computed:{pointer:function(){return this.for||this.$slots.default&&this.$slots.default.length}},methods:{_onClick:function(e){var n=/^uni-(checkbox|radio|switch)-/.test(e.target.className);n||(n=/^uni-(checkbox|radio|switch|button)$/i.test(e.target.tagName)),n||(this.for?t.emit("uni-label-click-"+this.$page.id+"-"+this.for,e,!0):this.$broadcast(["Checkbox","Radio","Switch","Button"],"uni-label-click",e,!0))}}}}).call(this,n("501c"))},f4e0:function(t,e,n){"use strict";var i=n("c2aa"),r=n.n(i);r.a},f53a:function(t,e,n){"use strict";var i=n("f735"),r=n.n(i);r.a},f735:function(t,e,n){},f756:function(t,e,n){},f7b4:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s}));var i,r=[];function o(t){r.push(t),i||a()}function a(){var e=t,n=e.invokeCallbackHandler;if(window.DeviceOrientationEvent)return i=function(t){var e=360-t.alpha;r.forEach((function(t){n(t,{errMsg:"onCompassChange:ok",direction:e||0})}))},window.addEventListener("deviceorientation",i,!1),{};throw new Error("device nonsupport deviceorientation")}function s(){return i&&(window.removeEventListener("deviceorientation",i,!1),i=null),{}}}).call(this,n("0dd1"))},f7fd:function(t,e,n){"use strict";var i=n("33b4"),r=n.n(i);r.a},fae3:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var i=window.document.currentScript,r=n("8875");i=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var o=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}n("2ef3")},fb61:function(t,e,n){"use strict";var i=n("7df2"),r=n.n(i);r.a},fda5:function(t,e,n){"use strict";(function(t){var i=n("bab8");e["a"]={name:"SystemChooseLocation",components:{SystemHeader:i["a"]},data:function(){return{src:"",data:null}},mounted:function(){var t=this,e=__uniConfig.qqMapKey;this.src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=".concat(e,"&referer=uniapp"),window.addEventListener("message",(function(e){var n=e.data;n&&"locationPicker"===n.module&&(t.data={name:n.poiname,address:n.poiaddress,latitude:n.latlng.lat,longitude:n.latlng.lng})}),!1)},methods:{_choose:function(){this.data&&(t.publishHandler("onChooseLocation",this.data),getApp().$router.back())},_back:function(){t.publishHandler("onChooseLocation",null),getApp().$router.back()}}}}).call(this,n("501c"))},ff28:function(t,e,n){"use strict";var i=n("2399"),r=n.n(i);r.a},ffdc:function(t,e,n){"use strict";function i(t,e,n,i){var r,o=document.createElement("script"),a=e.callback||"callback",s="__callback"+Date.now(),c=e.timeout||3e4;function u(){clearTimeout(r),delete window[s],o.remove()}window[s]=function(t){"function"===typeof n&&n(t),u()},o.onerror=function(){"function"===typeof i&&i(),u()},r=setTimeout((function(){"function"===typeof i&&i(),u()}),c),o.src=t+(t.indexOf("?")>=0?"&":"?")+a+"="+s,document.body.appendChild(o)}n.d(e,"a",(function(){return i}))}})}));

/***/ }),
/* 117 */
/*!*************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-router/dist/vue-router.esm.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.0.1
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom ,
  router 
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    type: location.type,
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref,
_stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
            a.hash === b.hash &&
            isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
            a.hash === b.hash &&
            isObjectEqual(a.query, b.query) &&
            isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
        (!target.hash || current.hash === target.hash) &&
        queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? {
    path: raw
  } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    type: next.type,
    params: next.params || {},
    path: path,
    query: query,
    hash: hash
  }
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute ,
    redirectedFrom 
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = location.params || {}; // fixed by xxxxxx
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = {
        path: redirect
      };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom 
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    // fixed by xxxxxx
    location.params = location.params || {};
    if (record && record.meta && record.meta.id) {
      location.params.__id__ = record.meta.id;
    } else if (!location.params.__id__) {
      location.params.__id__ = router.id;
    }
    if (record && record.meta && record.meta.name) {
      if (record.meta.id) {
        record.components.default.name = record.meta.name + '-' + location.params.__id__;
      } else {
        record = extend({}, record);
        record.components = {
          'default': {
            name: record.meta.name + '-' + location.params.__id__,
            render: record.components['default'].render
          }
        };
      }
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll (router) {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey(), id: router.currentRoute && router.currentRoute.params.__id__ || router.id }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
		ua.indexOf('Mobile Safari') !== -1 &&
		ua.indexOf('Chrome') === -1 &&
		ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url , id , replace ) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({
        id: id,
        key: _key
      }, '', url);
    } else {
      _key = genKey();
      history.pushState({
        id: id,
        key: _key
      }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url , id ) {
  pushState(url, id, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
    this.router = router;
    this.base = normalizeBase(base);
    // start with a route object that stands for "nowhere"
    this.current = START;
    this.pending = null;
    this.ready = false;
    this.readyCbs = [];
    this.readyErrorCbs = [];
    this.errorCbs = [];
  };

  History.prototype.listen = function listen (cb) {
    this.cb = cb;
  };

  History.prototype.onReady = function onReady (cb, errorCb) {
    if (this.ready) {
      cb();
    } else {
      this.readyCbs.push(cb);
      if (errorCb) {
        this.readyErrorCbs.push(errorCb);
      }
    }
  };

  History.prototype.onError = function onError (errorCb) {
    this.errorCbs.push(errorCb);
  };

  History.prototype.transitionTo = function transitionTo (location, onComplete , onAbort ) {
      var this$1 = this;

    var route = this.router.match(location, this.current);
    this.confirmTransition(route, function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    }, function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    });
  };

  History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort ) {
      var this$1 = this;

    var current = this.current;
    var abort = function (err) {
      if (isError(err)) {
        if (this$1.errorCbs.length) {
          this$1.errorCbs.forEach(function (cb) {
            cb(err);
          });
        } else {
          warn(false, 'uncaught error during route navigation:');
          console.error(err);
        }
      }
      onAbort && onAbort(err);
    };
    // fixed by xxxxxx 无需检测路由是否相等
    //   if (
    //     isSameRoute(route, current) &&
    //     // in the case the route map has been dynamically appended to
    //     route.matched.length === current.matched.length
    //   ) {
    //     this.ensureURL()
    //     return abort()
    //   }

    var ref = resolveQueue(this.current.matched, route.matched);
      var updated = ref.updated;
      var deactivated = ref.deactivated;
      var activated = ref.activated;

    var queue = [].concat(
      // in-component leave guards
      extractLeaveGuards(deactivated),
      // global before hooks
      this.router.beforeHooks,
      // in-component update hooks
      extractUpdateHooks(updated),
      // in-config enter guards
      activated.map(function (m) { return m.beforeEnter; }),
      // async components
      resolveAsyncComponents(activated)
    );

    this.pending = route;
    var iterator = function (hook, next) {
      if (this$1.pending !== route) {
        return abort()
      }
      try {
        hook(route, current, function (to) {
          if (to === false || isError(to)) {
            // next(false) -> abort navigation, ensure current URL
            this$1.ensureURL(true);
            abort(to);
          } else if (
            typeof to === 'string' ||
                      (typeof to === 'object' && (
                        typeof to.path === 'string' ||
                          typeof to.name === 'string'
                      ))
          ) {
            // next('/') or next({ path: '/' }) -> redirect
            abort();
            if (typeof to === 'object' && to.replace) {
              this$1.replace(to);
            } else {
              this$1.push(to);
            }
          } else {
            // confirm transition and pass on the value
            next(to);
          }
        });
      } catch (e) {
        abort(e);
      }
    };

    runQueue(queue, iterator, function () {
      var postEnterCbs = [];
      var isValid = function () { return this$1.current === route; };
      // wait until async components are resolved before
      // extracting in-component enter guards
      var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
      var queue = enterGuards.concat(this$1.router.resolveHooks);
      runQueue(queue, iterator, function () {
        if (this$1.pending !== route) {
          return abort()
        }
        this$1.pending = null;
        onComplete(route);
        if (this$1.router.app) {
          this$1.router.app.$nextTick(function () {
            postEnterCbs.forEach(function (cb) {
              cb();
            });
          });
        }
      });
    });
  };

  History.prototype.updateRoute = function updateRoute (route) {
    var prev = this.current;
    this.current = route;
    this.cb && this.cb(route);
    this.router.afterHooks.forEach(function (hook) {
      hook && hook(route, prev);
    });
  };

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse 
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
        !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History () {
    History$$1.apply(this, arguments);
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll(router);
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      // fixed by xxxxxx
      var id = e.state && e.state.id;
      if (!id) {
        // TODO
        id = router.id;
      }

      this$1.transitionTo({ // fixed by xxxxxx
        path: location,
        params: {
          __id__: id
        }
      }, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete , onAbort ) {
    var this$1 = this;

    if (typeof location === 'object') { // fixed by xxxxxx
      switch (location.type) {
        case 'navigateTo':
        case 'redirectTo':
        case 'reLaunch':
          this.router.id++;
          break
        case 'switchTab':
          break
      }
      location.params = location.params || {};
      location.params.__id__ = this.router.id;
    }

    var ref = this;
    var fromRoute = ref.current;

    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath), location.params.__id__); // fixed by xxxxxx
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete , onAbort ) {
    var this$1 = this;

    if (typeof location === 'object') { // fixed by xxxxxx
      switch (location.type) {
        case 'navigateTo':
        case 'redirectTo':
        case 'reLaunch':
          this.router.id++;
          break
        case 'switchTab':
          break
      }
      location.params = location.params || {};
      location.params.__id__ = this.router.id;
    }

    var ref = this;
    var fromRoute = ref.current;

    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath), location.params.__id__); // fixed by xxxxxx
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push ) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      // fixed by xxxxxx
      var id = this.current.params.__id__;
      push ? pushState(current, id) : replaceState(current, id);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return {
      path: getLocation(this.base),
      params: { // fixed by xxxxxx
        __id__: ++this.router.id
      }
    }
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + stringifyQuery(resolveQuery(window.location.search)) + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll(router);
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function (e) {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }

      // fixed by xxxxxx
      var id = e.state && e.state.id;
      if (!id) {
        // TODO
        id = router.id;
      }

      this$1.transitionTo({
        path: getHash(),
        params: {
          __id__: id
        }
      }, function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath, route.params.__id__);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete , onAbort ) {
    var this$1 = this;

    if (typeof location === 'object') { // fixed by xxxxxx
      switch (location.type) {
        case 'navigateTo':
        case 'redirectTo':
        case 'reLaunch':
          this.router.id++;
          break
        case 'switchTab':
          break
      }
      location.params = location.params || {};
      location.params.__id__ = this.router.id;
    }

    var ref = this;
    var fromRoute = ref.current;

    // fixed by xxxxxx
    var key = this.router.id;

    this.transitionTo(location, function (route) {
      pushHash(route.fullPath, key);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete , onAbort ) {
    var this$1 = this;

    if (typeof location === 'object') { // fixed by xxxxxx
      switch (location.type) {
        case 'navigateTo':
        case 'redirectTo':
        case 'reLaunch':
          this.router.id++;
          break
        case 'switchTab':
          break
      }
      location.params = location.params || {};
      location.params.__id__ = this.router.id;
    }

    var ref = this;
    var fromRoute = ref.current;

    // fixed by xxxxxx
    var key = this.router.id;

    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath, key);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push ) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current, this.current.params.__id__) : replaceHash(current, this.current.params.__id__);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return {
      path: getHash(),
      params: {
        __id__: ++this.router.id
      }
    }
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path, key) {
  if (supportsPushState) {
    pushState(getUrl(path), key);
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path, key) {
  if (supportsPushState) {
    replaceState(getUrl(path), key);
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
    if ( options === void 0 ) options = {};

    this.app = null;
    this.apps = [];
    this.options = options;
    this.beforeHooks = [];
    this.resolveHooks = [];
    this.afterHooks = [];
    this.matcher = createMatcher(options.routes || [], this);

    this.id = options.id || 1; // fixed by xxxxxx
    this.minId = options.id || 1; // fixed by xxxxxx

    var mode = options.mode || 'hash';
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
    if (this.fallback) {
      mode = 'hash';
    }
    if (!inBrowser) {
      mode = 'abstract';
    }
    this.mode = mode;

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base);
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback);
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base);
        break
      default:
        if (true) {
          assert(false, ("invalid mode: " + mode));
        }
    }
  };

var prototypeAccessors = { currentRoute: { configurable: true } };

  VueRouter.prototype.match = function match (
    raw,
    current ,
    redirectedFrom 
  ) {
    return this.matcher.match(raw, current, redirectedFrom)
  };

  prototypeAccessors.currentRoute.get = function () {
    return this.history && this.history.current
  };

  VueRouter.prototype.init = function init (app /* Vue component instance */) {
      var this$1 = this;

     true && assert(
      install.installed,
      "not installed. Make sure to call `Vue.use(VueRouter)` " +
          "before creating root instance."
    );

    this.apps.push(app);

    // main app already initialized.
    if (this.app) {
      return
    }

    this.app = app;

    var history = this.history;

    if (history instanceof HTML5History) {
      // fixed by xxxxxx
      var setupHistoryListener = function () {
        history.setupListeners();
      };
      history.transitionTo(
        history.getCurrentLocation(),
        setupHistoryListener,
        setupHistoryListener
      );
      // history.transitionTo(history.getCurrentLocation())
    } else if (history instanceof HashHistory) {
      var setupHashListener = function () {
        history.setupListeners();
      };
      history.transitionTo(
        history.getCurrentLocation(),
        setupHashListener,
        setupHashListener
      );
    }

    history.listen(function (route) {
      this$1.apps.forEach(function (app) {
        app._route = route;
      });
    });
  };

  VueRouter.prototype.beforeEach = function beforeEach (fn) {
    return registerHook(this.beforeHooks, fn)
  };

  VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
    return registerHook(this.resolveHooks, fn)
  };

  VueRouter.prototype.afterEach = function afterEach (fn) {
    return registerHook(this.afterHooks, fn)
  };

  VueRouter.prototype.onReady = function onReady (cb, errorCb ) {
    this.history.onReady(cb, errorCb);
  };

  VueRouter.prototype.onError = function onError (errorCb) {
    this.history.onError(errorCb);
  };

  VueRouter.prototype.push = function push (location, onComplete , onAbort ) {
    this.history.push(location, onComplete, onAbort);
  };

  VueRouter.prototype.replace = function replace (location, onComplete , onAbort ) {
    this.history.replace(location, onComplete, onAbort);
  };

  VueRouter.prototype.go = function go (n) {
    this.history.go(n);
  };

  VueRouter.prototype.back = function back () {
    this.go(-1);
  };

  VueRouter.prototype.forward = function forward () {
    this.go(1);
  };

  VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to ) {
    var route = to
      ? to.matched
        ? to
        : this.resolve(to).route : this.currentRoute;
    if (!route) {
      return []
    }
    return [].concat.apply([], route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    }))
  };

  VueRouter.prototype.resolve = function resolve (
    to,
    current ,
    append 
  ) {
    var location = normalizeLocation(
      to,
      current || this.history.current,
      append,
      this
    );
    var route = this.match(location, current);
    var fullPath = route.redirectedFrom || route.fullPath;
    var base = this.history.base;
    var href = createHref(base, fullPath, this.mode);
    return {
      location: location,
      route: route,
      href: href,
      // for backwards compat
      normalizedTo: location,
      resolved: route
    }
  };

  VueRouter.prototype.addRoutes = function addRoutes (routes) {
    this.matcher.addRoutes(routes);
    if (this.history.current !== START) {
      this.history.transitionTo(this.history.getCurrentLocation());
    }
  };

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

// if (inBrowser && window.Vue) {
//   window.Vue.use(VueRouter)
// }

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 118 */
/*!********************************************************************!*\
  !*** G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=472cff63& */ 119);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 121);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 123);\n/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 129);\n\nvar renderjs\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnSDtBQUNoSDtBQUN1RDtBQUNMO0FBQ2E7OztBQUcvRDtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIxMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyY2ZmNjMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3MmNmZjYzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3MmNmZjYzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3MmNmZjYzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmNmZjYzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3MmNmZjYzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///118\n");

/***/ }),
/* 119 */
/*!***************************************************************************************************!*\
  !*** G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=template&id=472cff63& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!./App.vue?vue&type=template&id=472cff63& */ 120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 120 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=template&id=472cff63& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("App", { attrs: { keepAliveInclude: _vm.keepAliveInclude } })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 121 */
/*!*********************************************************************************************!*\
  !*** G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!./App.vue?vue&type=script&lang=js& */ 122);\n/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTg1QixDQUFnQiw0NUJBQUcsRUFBQyIsImZpbGUiOiIxMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1zY29wZWQtbG9hZGVyXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd3JhcC1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTkhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1zY29wZWQtbG9hZGVyXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd3JhcC1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTkhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///121\n");

/***/ }),
/* 122 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    console.log('App Launch');\n  },\n  onShow: function onShow() {\n    console.log('App Show');\n  },\n  onHide: function onHide() {\n    console.log('App Hide');\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FIQTtBQUlBO0FBQ0E7QUFDQSxHQU5BO0FBT0E7QUFDQTtBQUNBLEdBVEEsRSIsImZpbGUiOiIxMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+PEFwcCA6a2VlcEFsaXZlSW5jbHVkZT1cImtlZXBBbGl2ZUluY2x1ZGVcIi8+PC90ZW1wbGF0ZT48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKTtcclxuXHR9LFxyXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKTtcclxuXHR9LFxyXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKTtcclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4vKiDop6PlhrPlpLTmnaHlsI/nqIvluo/nu4Tku7blhoXlvJXlhaXlrZfkvZPkuI3nlJ/mlYjnmoTpl67popggKi9cclxuLyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdHNyYzogdXJsKCcvc3RhdGljL3VuaS50dGYnKTtcclxufVxyXG4vKiAjZW5kaWYgKi9cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///122\n");

/***/ }),
/* 123 */
/*!*****************************************************************************************************!*\
  !*** G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!./App.vue?vue&type=style&index=0&lang=css& */ 124);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_wrap_loader_index_js_ref_19_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 124 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!./App.vue?vue&type=style&index=0&lang=css& */ 125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js */ 127).default
var update = add("d79ef954", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 125 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader??ref--19!G:/my-company/person-job/mine-xiaocx/uniapp-HBuilder/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 126);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 解决头条小程序组件内引入字体不生效的问题 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 126 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 127 */
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 128);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
	if (!hasDocument) {
		throw new Error(
			'vue-style-loader cannot be used in a non-browser environment. ' +
			"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
		)
	}
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {
	/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/
}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function() {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient(parentId, list, _isProduction, _options) {
	isProduction = _isProduction

	options = _options || {}

	var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
	addStylesToDom(styles)

	return function update(newList) {
		var mayRemove = []
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i]
			var domStyle = stylesInDom[item.id]
			domStyle.refs--
			mayRemove.push(domStyle)
		}
		if (newList) {
			styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
			addStylesToDom(styles)
		} else {
			styles = []
		}
		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i]
			if (domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j]()
				}
				delete stylesInDom[domStyle.id]
			}
		}
	}
}

function addStylesToDom(styles /* Array<StyleObject> */ ) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i]
		var domStyle = stylesInDom[item.id]
		if (domStyle) {
			domStyle.refs++
			for (var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j])
			}
			for (; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j]))
			}
			if (domStyle.parts.length > item.parts.length) {
				domStyle.parts.length = item.parts.length
			}
		} else {
			var parts = []
			for (var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j]))
			}
			stylesInDom[item.id] = {
				id: item.id,
				refs: 1,
				parts: parts
			}
		}
	}
}

function createStyleElement() {
	var styleElement = document.createElement('style')
	styleElement.type = 'text/css'
	head.appendChild(styleElement)
	return styleElement
}

function addStyle(obj /* StyleObjectPart */ ) {
	var update, remove
	var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

	if (styleElement) {
		if (isProduction) {
			// has SSR styles and in production mode.
			// simply do nothing.
			return noop
		} else {
			// has SSR styles but in dev mode.
			// for some reason Chrome can't handle source map in server-rendered
			// style tags - source maps in <style> only works if the style tag is
			// created and inserted dynamically. So we remove the server rendered
			// styles and inject new ones.
			styleElement.parentNode.removeChild(styleElement)
		}
	}

	if (isOldIE) {
		// use singleton mode for IE9.
		var styleIndex = singletonCounter++
		styleElement = singletonElement || (singletonElement = createStyleElement())
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	} else {
		// use multi-style-tag mode in all other cases
		styleElement = createStyleElement()
		update = applyToTag.bind(null, styleElement)
		remove = function() {
			styleElement.parentNode.removeChild(styleElement)
		}
	}

	update(obj)

	return function updateStyle(newObj /* StyleObjectPart */ ) {
		if (newObj) {
			if (newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap) {
				return
			}
			update(obj = newObj)
		} else {
			remove()
		}
	}
}

var replaceText = (function() {
	var textStore = []

	return function(index, replacement) {
		textStore[index] = replacement
		return textStore.filter(Boolean).join('\n')
	}
})()

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? '' : processCss(obj.css)

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css)
	} else {
		var cssNode = document.createTextNode(css)
		var childNodes = styleElement.childNodes
		if (childNodes[index]) styleElement.removeChild(childNodes[index])
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index])
		} else {
			styleElement.appendChild(cssNode)
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = processCss(obj.css)
	var media = obj.media
	var sourceMap = obj.sourceMap

	if (media) {
		styleElement.setAttribute('media', media)
	}
	if (options.ssrId) {
		styleElement.setAttribute(ssrIdKey, obj.id)
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
		// http://stackoverflow.com/a/26603875
		css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(
			sourceMap)))) + ' */'
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css
	} else {
		while (styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild)
		}
		styleElement.appendChild(document.createTextNode(css))
	}
}
//fixed by xxxxxx
var UPX_RE = /%\?([+-]?\d+(\.\d+)?)\?%/g
var BODY_RE = /\.\?%PAGE\?%/g
var BODY_SCOPED_RE = /\?%PAGE\?%\[data-v-[a-z0-9]{8}\]/g
var PAGE_SCOPED_RE = /uni-page-body\[data-v-[a-z0-9]{8}\]/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

function processCss(css) {
	var page = getPage()
	if (typeof uni !== 'undefined' && !uni.canIUse('css.var')) { //不支持 css 变量
		var offset = getWindowOffset()
		css = css.replace(VAR_STATUS_BAR_HEIGHT, '0px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
	return css
		.replace(BODY_SCOPED_RE, page)
		.replace(BODY_RE, '')
		.replace(PAGE_SCOPED_RE, 'body.' + page + ' uni-page-body')
		.replace(/\{[\s\S]+?\}/g, function (css) {
      if(typeof uni === 'undefined'){
        return css
      }
			return css.replace(UPX_RE, function (a, b) {
				return uni.upx2px(b) + 'px'
			})
		})
}

function getPage() {
	var app = typeof getApp === 'function' && getApp()
	return app && app.$route && app.$route.meta && app.$route.meta.name || ''
}

function getWindowOffset() {
	var app = typeof getApp === 'function' && getApp()
	if (app && app.$route && app.$route.meta && app.$route.meta.name) {
		return {
			top: app.$route.meta.windowTop,
			// TODO 可配置 TabBar 高度
			bottom: app.$route.meta.isTabBar ? 50 : 0
		}
	}
	return {
		top: 0,
		bottom: 0
	}
}


/***/ }),
/* 128 */
/*!****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/listToStyles.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 129 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);