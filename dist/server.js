/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/pupRouter/index.ts":
/*!***************************************!*\
  !*** ./src/server/pupRouter/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar puppeteer = __webpack_require__(/*! puppeteer */ \"puppeteer\");\r\nvar router = express.Router();\r\nrouter.get(\"/\", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\r\n    var browser, pageStartNums, page, data, price, comment, time, i, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 13, , 14]);\r\n                return [4 /*yield*/, puppeteer.launch({\r\n                        args: ['--no-sandbox', '--disable-setuid-sandbox'],\r\n                        headless: false\r\n                    })];\r\n            case 1:\r\n                browser = _a.sent();\r\n                pageStartNums = 0;\r\n                return [4 /*yield*/, browser.newPage()];\r\n            case 2:\r\n                page = _a.sent();\r\n                return [4 /*yield*/, page.goto(\"https://forum.median-xl.com/ucp.php?mode=login\", {\r\n                        waitUntil: \"domcontentloaded\"\r\n                    })];\r\n            case 3:\r\n                _a.sent();\r\n                //LOGS IN with username/password\r\n                return [4 /*yield*/, page.type(\"#username\", req.query.username, { delay: 10 })];\r\n            case 4:\r\n                //LOGS IN with username/password\r\n                _a.sent();\r\n                return [4 /*yield*/, page.type(\"#password\", req.query.password, { delay: 10 })];\r\n            case 5:\r\n                _a.sent();\r\n                page.click(\"input.button1\");\r\n                return [4 /*yield*/, page.waitForNavigation({ waitUntil: \"domcontentloaded\" })];\r\n            case 6:\r\n                _a.sent();\r\n                data = {\r\n                    price: [],\r\n                    comment: [],\r\n                    time: [],\r\n                    index: []\r\n                };\r\n                _a.label = 7;\r\n            case 7:\r\n                if (!(pageStartNums < parseInt(req.query.pages))) return [3 /*break*/, 12];\r\n                //navigates to page and waits for DOMContent\r\n                return [4 /*yield*/, page.goto(\"https://forum.median-xl.com/tradegold.php?sort_id=0&start=\" + pageStartNums *\r\n                        25, {\r\n                        waitUntil: \"domcontentloaded\"\r\n                    })];\r\n            case 8:\r\n                //navigates to page and waits for DOMContent\r\n                _a.sent();\r\n                return [4 /*yield*/, page.$$eval(\"div.coins.coins-embed\", function (el) {\r\n                        return el.map(function (i) { return i.innerText; });\r\n                    })];\r\n            case 9:\r\n                price = _a.sent();\r\n                return [4 /*yield*/, page.$$eval(\"tr > td:nth-last-of-type(2)\", function (el) {\r\n                        return el.map(function (i) { return i.innerText; });\r\n                    })];\r\n            case 10:\r\n                comment = _a.sent();\r\n                return [4 /*yield*/, page.$$eval(\"td:nth-child(5)\", function (el) {\r\n                        return el.map(function (i) { return i.innerText; });\r\n                    })];\r\n            case 11:\r\n                time = _a.sent();\r\n                //Will cycle through arrays of data and store in stringData\r\n                for (i = 0; i < price.length; i++) {\r\n                    data.index.push([i]);\r\n                    data.comment.push(comment[i]);\r\n                    data.price.push(price[i]);\r\n                    data.time.push(time[i]);\r\n                }\r\n                pageStartNums++;\r\n                return [3 /*break*/, 7];\r\n            case 12:\r\n                //closes page; change page to 'browser' if you want it to close browser when done\r\n                browser.close();\r\n                res.send(JSON.stringify(data));\r\n                return [3 /*break*/, 14];\r\n            case 13:\r\n                e_1 = _a.sent();\r\n                res.status(500).send(e_1);\r\n                return [3 /*break*/, 14];\r\n            case 14: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/pupRouter/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar pupRouter_1 = __webpack_require__(/*! ../pupRouter */ \"./src/server/pupRouter/index.ts\");\r\nvar router = express.Router();\r\nrouter.use(\"/pupRouter\", pupRouter_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\nvar p = path.join(__dirname, \"../public\");\r\napp.use(express.static(p));\r\napp.use(express.json());\r\napp.use(routes_1.default);\r\napp.use(\"*\", function (req, res, next) {\r\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () {\r\n    console.log(\"Server listening on port: \" + port);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ })

/******/ });