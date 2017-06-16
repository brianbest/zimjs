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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var zon = true;\n\n// SCALING OPTIONS\n// scaling can have values as follows with full being the default\n// \"fit\"\t\tsets canvas and stage to dimensions and scales to fit inside window size\n// \"outside\"\tsets canvas and stage to dimensions and scales to fit outside window size\n// \"full\"\t\tsets stage to window size with no scaling\n// \"tagID\"\t\tadd canvas to HTML tag of ID - set to dimensions if provided - no scaling\n\nvar scaling = \"fit\"; // fit scales to fit the browser window while keeping the aspect ratio\nvar width = 1024; // can go higher...\nvar height = 768;\nvar color = \"#acd241\";\nvar frame = new zim.Frame(scaling, width, height, color); // see docs for more options and info\nframe.on(\"ready\", function() {\n\tzog(\"ready from ZIM Frame\");\n\n\tvar stage = frame.stage;\n\tvar stageW = frame.width;\n\tvar stageH = frame.height;\n\n\t// put your code here (you can delete this code)\n\n\tvar button = new zim.Button(140, 60, \"ZIM\");\n\tbutton.center(stage); // this adds to stage as well otherwise stage.addChild(button);\n\tbutton.on(\"click\", function() { // on() is like addEventListener()\n\t\tzgo(\"http://zimjs.com/code/frame.html\"); // or relative URL, target is available too\n\t});\n\n\tstage.update(); // update the stage to see any changes\n\n}); // end of ready\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/app.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./test/app.js?");

/***/ })
/******/ ]);