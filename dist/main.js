/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/KeysObj.js":
/*!************************!*\
  !*** ./src/KeysObj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttons\": () => (/* binding */ buttons)\n/* harmony export */ });\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n\r\nlet buttons = [];\r\nfor (let i = 0; i < _keyboard__WEBPACK_IMPORTED_MODULE_0__.keys.length; i++) {\r\n  let KeysObj = {\r\n    key: _keyboard__WEBPACK_IMPORTED_MODULE_0__.keys2[i],\r\n    keyCode: _keyboard__WEBPACK_IMPORTED_MODULE_0__.keys[i],\r\n  };\r\n  buttons.push(KeysObj);\r\n}\r\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/KeysObj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n/* harmony import */ var _KeysObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeysObj */ \"./src/KeysObj.js\");\n\r\n\r\n// import \"./scss/style.scss\";\r\n\r\nconst head = window.document.querySelector(\"head\");\r\n\r\nfunction includeCSS() {\r\n  const style = window.document.createElement(\"link\");\r\n  style.href = \"/dist/style.css\";\r\n  style.rel = \"stylesheet\";\r\n  head.append(style);\r\n}\r\nincludeCSS();\r\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/index.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys),\n/* harmony export */   \"keys2\": () => (/* binding */ keys2)\n/* harmony export */ });\n// import { Keys } from \"./Keys\";\nconsole.log(\"Running\");\n\ndocument.querySelector(\"body\").innerHTML =\n  '<h3 class=\"text\"> Переключение раскладки: ctrl+shift </h3> <div class=\"keyboard\" id=\"keyboard\"> </div>';\nlet temp = \"\",\n  temp1 = \"\",\n  temp2 = \"\",\n  temp3 = \"\",\n  temp4 = \"\",\n  tempShift = \"\";\nconst keys = [\n  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,\n  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,\n  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91,\n  18, 32, 18, 17, 18, 37, 40, 39,\n];\nconst keys2 = [\n  \"`\",\n  \"1\",\n  \"2\",\n  \"3\",\n  \"4\",\n  \"5\",\n  \"6\",\n  \"7\",\n  \"8\",\n  \"9\",\n  \"0\",\n  \"-\",\n  \"=\",\n  \"Backspace\",\n  \"Tab\",\n  \"q\",\n  \"w\",\n  \"e\",\n  \"r\",\n  \"t\",\n  \"y\",\n  \"u\",\n  \"i\",\n  \"o\",\n  \"p\",\n  \"[\",\n  \"]\",\n  \"\\\\\",\n  \"CapsLock\",\n  \"a\",\n  \"s\",\n  \"d\",\n  \"f\",\n  \"g\",\n  \"h\",\n  \"j\",\n  \"k\",\n  \"l\",\n  \";\",\n  \"'\",\n  \"Enter\",\n  \"Shift\",\n  \"z\",\n  \"x\",\n  \"c\",\n  \"v\",\n  \"b\",\n  \"n\",\n  \"m\",\n  \",\",\n  \".\",\n  \"/\",\n  \"ArrowUp\",\n  \"Shift\",\n  \"Control\",\n  \"Win\",\n  \"Alt\",\n  \"Space\",\n  \"Alt\",\n  \"Control\",\n  \"ArrowLeft\",\n  \"ArrowDown\",\n  \"ArrowRight\",\n];\nconst keysShift = [\n  \"~\",\n  \"!\",\n  \"@\",\n  \"#\",\n  \"$\",\n  \"%\",\n  \"^\",\n  \"&\",\n  \"*\",\n  \"(\",\n  \")\",\n  \"_\",\n  \"+\",\n  \"Backspace\",\n];\nlet capsLock = false;\nconst toLowerCaseLetter = () => {\n  for (let i = 0; i < keys2.length; i++) {\n    if (keys2[i].length < 2) keys2[i] = keys2[i].toLowerCase();\n  }\n};\n\nlet count = 0;\nconst renderTextArea = () => {\n  const textArea = document.createElement(\"div\");\n  textArea.classList.add(\"input\");\n  textArea.innerHTML =\n    '<textarea class=\"input_textarea\" id=\"textarea\" ></textarea>';\n  window.document.querySelector(\"body\").append(textArea);\n};\nrenderTextArea();\nconst textArea = document.querySelector(\".input_textarea\");\n\nconst createLine = () => {\n  const line = document.createElement(\"div\");\n  line.classList.add(`line`);\n  line.id = `line_${count}`;\n  document.querySelector(\"#keyboard\").append(line);\n};\n\nconst renderKeys = () => {\n  for (let i = 0; i < keys2.length; i++) {\n    if (i < 14)\n      temp += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[i]}</div>`;\n    else if ((i > 13) & (i <= 27))\n      temp1 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\n        i\n      ].toUpperCase()}</div>`;\n    else if ((i > 27) & (i < 41))\n      temp2 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\n        i\n      ].toUpperCase()}</div>`;\n    else if ((i >= 41) & (i < 54))\n      temp3 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\n        i\n      ].toUpperCase()}</div>`;\n    else if (i >= 54)\n      temp4 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\n        i\n      ].toUpperCase()}</div>`;\n  }\n  for (let j = 0; j < 5; j++) {\n    createLine();\n    count++;\n  }\n\n  document.querySelector(\"#line_0\").innerHTML = temp;\n  document.querySelector(\"#line_1\").innerHTML = temp1;\n  document.querySelector(\"#line_2\").innerHTML = temp2;\n  document.querySelector(\"#line_3\").innerHTML = temp3;\n  document.querySelector(\"#line_4\").innerHTML = temp4;\n};\nrenderKeys();\nlet space = document.querySelector(\"#Space\");\nspace.textContent = \" \";\nlet spaceAtt = document.createAttribute(\"data\");\nspaceAtt.value = \" \";\nspace.setAttributeNode(spaceAtt);\nlet control = document.querySelectorAll(\"#Control\");\ncontrol.forEach((el) => (el.innerText = \"Ctrl\"));\n\nlet arrowUp = document.querySelector(\"#ArrowUp\");\narrowUp.innerText = \"⇧\";\narrowUp.classList.add(\"arrow\");\n\nlet arrowDown = document.querySelector(\"#ArrowDown\");\narrowDown.innerText = \"⇩\";\narrowDown.classList.add(\"arrow\");\nlet arrowLeft = document.querySelector(\"#ArrowLeft\");\narrowLeft.innerText = \"⇦\";\narrowLeft.classList.add(\"arrow\");\nlet arrowRight = document.querySelector(\"#ArrowRight\");\narrowRight.innerText = \"⇨\";\narrowRight.classList.add(\"arrow\");\n\nlet keyButton = document.querySelectorAll(\".key\");\nconst lineZero = document.querySelector(\"#line_0\");\nconst addClassNameToSpecial = () => {\n  for (let spec of keyButton) {\n    if (spec.innerText.length > 1) {\n      spec.className += \" special\";\n    }\n  }\n};\naddClassNameToSpecial();\n\nconst clicHandler = () => {\n  keyButton.forEach((el) => {\n    el.onclick = (e) => {\n      keyButton.forEach((element) => element.classList.remove(\"active\"));\n      let data = el.getAttribute(\"data\");\n      document.querySelector(`[data = \"${data}\"]`).classList.add(\"active\");\n      console.log(el.textContent);\n      if (el.textContent.length < 2) {\n        textArea.insertAdjacentHTML(\n          \"beforeend\",\n          `${el.textContent.toLowerCase()}`\n        );\n      }\n    };\n  });\n};\nclicHandler();\ndocument.onkeydown = function (e) {\n  console.log(e.key);\n\n  let key = document.querySelector(`[data=\"${e.key}\"]`);\n  key.className += \" active\";\n  toLowerCaseLetter();\n  if (e.key.length < 2)\n    textArea.insertAdjacentHTML(\n      \"beforeend\",\n      `${key.textContent.toLowerCase()}`\n    );\n};\nconst pressShift = () => {\n  document.onkeydown = (e) => {\n    if (e.key === \"Shift\") {\n      lineZero.innerHTML = \"\";\n      for (let i = 0; i < keysShift.length; i++) {\n        tempShift += `<div id=\"${keysShift[i]}\" class=\"key\" data =\"${keys2[i]}\">${keysShift[i]}</div>`;\n      }\n      lineZero.innerHTML = tempShift;\n      if (e.key != \"Shift\") {\n      }\n    }\n  };\n};\n\ndocument.onkeyup = (e) => {\n  document\n    .querySelectorAll(\".key\")\n    .forEach((el) => el.classList.remove(\"active\"));\n};\n\n// console.log(textArea);\nwindow.addEventListener(\"DOMContentLoaded\", function () {});\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/keyboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;