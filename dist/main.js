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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './KeysObj'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n// import \"./scss/style.scss\";\r\n\r\nconst head = window.document.querySelector(\"head\");\r\n\r\nfunction includeCSS() {\r\n  const style = window.document.createElement(\"link\");\r\n  style.href = \"/dist/style.css\";\r\n  style.rel = \"stylesheet\";\r\n  head.append(style);\r\n}\r\nincludeCSS();\r\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/index.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys),\n/* harmony export */   \"keys2\": () => (/* binding */ keys2)\n/* harmony export */ });\n// import { Keys } from \"./Keys\";\r\nconsole.log(\"Running\");\r\n\r\ndocument.querySelector(\"body\").innerHTML =\r\n  '<h3 class=\"text\"> Переключение раскладки: ctrl+shift </h3> <div class=\"keyboard\" id=\"keyboard\"> </div>';\r\nlet temp = \"\",\r\n  temp1 = \"\",\r\n  temp2 = \"\",\r\n  temp3 = \"\",\r\n  temp4 = \"\",\r\n  tempShift = \"\";\r\nconst keys = [\r\n  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,\r\n  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,\r\n  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91,\r\n  18, 32, 18, 17, 18, 37, 40, 39,\r\n];\r\nconst keys2 = [\r\n  \"`\",\r\n  \"1\",\r\n  \"2\",\r\n  \"3\",\r\n  \"4\",\r\n  \"5\",\r\n  \"6\",\r\n  \"7\",\r\n  \"8\",\r\n  \"9\",\r\n  \"0\",\r\n  \"-\",\r\n  \"=\",\r\n  \"Backspace\",\r\n  \"Tab\",\r\n  \"q\",\r\n  \"w\",\r\n  \"e\",\r\n  \"r\",\r\n  \"t\",\r\n  \"y\",\r\n  \"u\",\r\n  \"i\",\r\n  \"o\",\r\n  \"p\",\r\n  \"[\",\r\n  \"]\",\r\n  \"\\\\\",\r\n  \"CapsLock\",\r\n  \"a\",\r\n  \"s\",\r\n  \"d\",\r\n  \"f\",\r\n  \"g\",\r\n  \"h\",\r\n  \"j\",\r\n  \"k\",\r\n  \"l\",\r\n  \";\",\r\n  \"'\",\r\n  \"Enter\",\r\n  \"Shift\",\r\n  \"z\",\r\n  \"x\",\r\n  \"c\",\r\n  \"v\",\r\n  \"b\",\r\n  \"n\",\r\n  \"m\",\r\n  \",\",\r\n  \".\",\r\n  \"/\",\r\n  \"ArrowUp\",\r\n  \"Shift\",\r\n  \"Control\",\r\n  \"Win\",\r\n  \"Alt\",\r\n  \"Space\",\r\n  \"Alt\",\r\n  \"Control\",\r\n  \"ArrowLeft\",\r\n  \"ArrowDown\",\r\n  \"ArrowRight\",\r\n];\r\nconst keysShift = [\r\n  \"~\",\r\n  \"!\",\r\n  \"@\",\r\n  \"#\",\r\n  \"$\",\r\n  \"%\",\r\n  \"^\",\r\n  \"&\",\r\n  \"*\",\r\n  \"(\",\r\n  \")\",\r\n  \"_\",\r\n  \"+\",\r\n  \"Backspace\",\r\n];\r\nlet capsLock = false;\r\nconst toLowerCaseLetter = () => {\r\n  for (let i = 0; i < keys2.length; i++) {\r\n    if (keys2[i].length < 2) keys2[i] = keys2[i].toLowerCase();\r\n  }\r\n};\r\n\r\nlet count = 0;\r\nconst renderTextArea = () => {\r\n  const textArea = document.createElement(\"div\");\r\n  textArea.classList.add(\"input\");\r\n  textArea.innerHTML =\r\n    '<textarea class=\"input_textarea\" id=\"textarea\" ></textarea>';\r\n  window.document.querySelector(\"body\").append(textArea);\r\n};\r\nrenderTextArea();\r\nconst textArea = document.querySelector(\".input_textarea\");\r\n\r\nconst createLine = () => {\r\n  const line = document.createElement(\"div\");\r\n  line.classList.add(`line`);\r\n  line.id = `line_${count}`;\r\n  document.querySelector(\"#keyboard\").append(line);\r\n};\r\n\r\nconst renderKeys = () => {\r\n  for (let i = 0; i < keys2.length; i++) {\r\n    if (i < 14)\r\n      temp += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[i]}</div>`;\r\n    else if ((i > 13) & (i <= 27))\r\n      temp1 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\r\n        i\r\n      ].toUpperCase()}</div>`;\r\n    else if ((i > 27) & (i < 41))\r\n      temp2 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\r\n        i\r\n      ].toUpperCase()}</div>`;\r\n    else if ((i >= 41) & (i < 54))\r\n      temp3 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\r\n        i\r\n      ].toUpperCase()}</div>`;\r\n    else if (i >= 54)\r\n      temp4 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys2[i]}\">${keys2[\r\n        i\r\n      ].toUpperCase()}</div>`;\r\n  }\r\n  for (let j = 0; j < 5; j++) {\r\n    createLine();\r\n    count++;\r\n  }\r\n\r\n  document.querySelector(\"#line_0\").innerHTML = temp;\r\n  document.querySelector(\"#line_1\").innerHTML = temp1;\r\n  document.querySelector(\"#line_2\").innerHTML = temp2;\r\n  document.querySelector(\"#line_3\").innerHTML = temp3;\r\n  document.querySelector(\"#line_4\").innerHTML = temp4;\r\n};\r\nrenderKeys();\r\nlet space = document.querySelector(\"#Space\");\r\nspace.textContent = \" \";\r\nlet spaceAtt = document.createAttribute(\"data\");\r\nspaceAtt.value = \" \";\r\nspace.setAttributeNode(spaceAtt);\r\nlet control = document.querySelectorAll(\"#Control\");\r\ncontrol.forEach((el) => (el.innerText = \"Ctrl\"));\r\n\r\nlet arrowUp = document.querySelector(\"#ArrowUp\");\r\narrowUp.innerText = \"⇧\";\r\narrowUp.classList.add(\"arrow\");\r\n\r\nlet arrowDown = document.querySelector(\"#ArrowDown\");\r\narrowDown.innerText = \"⇩\";\r\narrowDown.classList.add(\"arrow\");\r\nlet arrowLeft = document.querySelector(\"#ArrowLeft\");\r\narrowLeft.innerText = \"⇦\";\r\narrowLeft.classList.add(\"arrow\");\r\nlet arrowRight = document.querySelector(\"#ArrowRight\");\r\narrowRight.innerText = \"⇨\";\r\narrowRight.classList.add(\"arrow\");\r\n\r\nlet keyButton = document.querySelectorAll(\".key\");\r\nconst lineZero = document.querySelector(\"#line_0\");\r\nconst addClassNameToSpecial = () => {\r\n  for (let spec of keyButton) {\r\n    if (spec.innerText.length > 1) {\r\n      spec.className += \" special\";\r\n    }\r\n  }\r\n};\r\naddClassNameToSpecial();\r\n\r\nconst clicHandler = () => {\r\n  keyButton.forEach((el) => {\r\n    el.onclick = (e) => {\r\n      keyButton.forEach((element) => element.classList.remove(\"active\"));\r\n      let data = el.getAttribute(\"data\");\r\n      document.querySelector(`[data = \"${data}\"]`).classList.add(\"active\");\r\n      console.log(el.textContent);\r\n      if (el.textContent.length < 2) {\r\n        textArea.insertAdjacentHTML(\r\n          \"beforeend\",\r\n          `${el.textContent.toLowerCase()}`\r\n        );\r\n      }\r\n    };\r\n  });\r\n};\r\nclicHandler();\r\ndocument.onkeydown = function (e) {\r\n  console.log(e.key);\r\n\r\n  let key = document.querySelector(`[data=\"${e.key}\"]`);\r\n  key.className += \" active\";\r\n  toLowerCaseLetter();\r\n  if (e.key.length < 2)\r\n    textArea.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `${key.textContent.toLowerCase()}`\r\n    );\r\n};\r\nconst pressShift = () => {\r\n  document.onkeydown = (e) => {\r\n    if (e.key === \"Shift\") {\r\n      lineZero.innerHTML = \"\";\r\n      for (let i = 0; i < keysShift.length; i++) {\r\n        tempShift += `<div id=\"${keysShift[i]}\" class=\"key\" data =\"${keys2[i]}\">${keysShift[i]}</div>`;\r\n      }\r\n      lineZero.innerHTML = tempShift;\r\n      if (e.key != \"Shift\") {\r\n      }\r\n    }\r\n  };\r\n};\r\n\r\ndocument.onkeyup = (e) => {\r\n  document\r\n    .querySelectorAll(\".key\")\r\n    .forEach((el) => el.classList.remove(\"active\"));\r\n};\r\n\r\n// console.log(textArea);\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {});\r\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/keyboard.js?");

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