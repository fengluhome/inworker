(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("inWorker", [], factory);
	else if(typeof exports === 'object')
		exports["inWorker"] = factory();
	else
		root["inWorker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "00c79b7a3dcfb22761b9.worker.js");
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_worker_loader_worker_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_worker_loader_worker_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_worker_loader_worker_index_js__);

let index = 0,
    prefix = "_id",
    hash = {};
class InWorker {
    constructor() {
        this.worker = new __WEBPACK_IMPORTED_MODULE_0_worker_loader_worker_index_js___default.a();
        this.worker.onmessage = function (event) {
            let {
                id,
                data
            } = event.data;

            let cacheFun = hash[id];
            cacheFun && cacheFun(data);
            hash[id] = null;
        };
    }
    postMessage({
        name,
        argument = {},
        callback
    }) {
        if (!name) {
            throw new TypeError('name must be a String Path. example: a.b');
        }
        if (!callback) {
            throw new TypeError('callback must be a function.');
        }
        //如果有ID
        if (callback.id) {
            let cacheFun = hash[callback.id];
            if (cacheFun == callback) {
                //delete
                hash[callback.id] = null;
            }
        }
        let id = prefix + index++;
        callback.id = id;
        hash[id] = callback;

        this.worker.postMessage({
            id,
            name: name,
            argument: argument
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["InWorker"] = InWorker;


/***/ })
/******/ ]);
});