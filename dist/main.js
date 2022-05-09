/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keyboard__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst head = window.document.querySelector(\"head\");\n\nfunction includeCSS() {\n  const style = window.document.createElement(\"link\");\n  style.href = \"/dist/style.css\";\n  style.rel = \"stylesheet\";\n  head.append(style);\n}\n\nwindow.onload = () => {\n  includeCSS();\n};\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/index.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ (() => {

eval("// import { Keys } from \"./Keys\";\nconsole.log(\"Running\");\ndocument.querySelector(\"body\").innerHTML =\n  '<div class=\"keyboard\" id=\"keyboard\"> </div>';\nconst keys = [\n  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,\n  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,\n  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91,\n  18, 32, 18, 17, 18, 37, 40, 39,\n];\nconst keys2 = [\n  \"`\",\n  \"1\",\n  \"2\",\n  \"3\",\n  \"4\",\n  \"5\",\n  \"6\",\n  \"7\",\n  \"8\",\n  \"9\",\n  \"0\",\n  \"-\",\n  \"=\",\n  \"Backspace\",\n  \"Tab\",\n  \"q\",\n  \"w\",\n  \"e\",\n  \"r\",\n  \"t\",\n  \"y\",\n  \"u\",\n  \"i\",\n  \"o\",\n  \"p\",\n  \"[\",\n  \"]\",\n  \"\\\\\",\n  \"CapsLock\",\n  \"a\",\n  \"s\",\n  \"d\",\n  \"f\",\n  \"g\",\n  \"h\",\n  \"j\",\n  \"k\",\n  \"l\",\n  \";\",\n  \"'\",\n  \"Enter\",\n  \"Shift\",\n  \"z\",\n  \"x\",\n  \"c\",\n  \"v\",\n  \"b\",\n  \"n\",\n  \"m\",\n  \",\",\n  \".\",\n  \"/\",\n  \"ArrowUp\",\n  \"Shift\",\n  \"Control\",\n  \"Win\",\n  \"Alt\",\n  \"Space\",\n  \"Alt\",\n  \"Control\",\n  \"ArrowLeft\",\n  \"ArrowDown\",\n  \"ArrowRight\",\n];\nconst keyArr = [];\nlet count = 0;\nconst renderTextArea = () => {\n  const textArea = document.createElement(\"div\");\n  textArea.classList.add(\"input\");\n  textArea.innerHTML =\n    '<textarea class=\"input_textarea\" id=\"textarea\" ></textarea>';\n  // console.log(textArea);\n  window.document.querySelector(\"body\").append(textArea);\n};\nrenderTextArea();\nconst textArea = document.querySelector(\".input_textarea\");\nconsole.log(textArea);\n\nconst createLine = () => {\n  const line = document.createElement(\"div\");\n  line.classList.add(`line`);\n  line.id = `line_${count}`;\n  document.querySelector(\"#keyboard\").append(line);\n};\n\nconst renderKeys = () => {\n  let temp = \"\",\n    temp1 = \"\",\n    temp2 = \"\",\n    temp3 = \"\",\n    temp4 = \"\";\n  for (let i = 0; i < keys2.length; i++) {\n    if (i < 14)\n      temp += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys[i]}\">${keys2[i]}</div>`;\n    else if ((i > 13) & (i <= 27))\n      temp1 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys[i]}\">${keys2[i]}</div>`;\n    else if ((i > 27) & (i < 41))\n      temp2 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys[i]}\">${keys2[i]}</div>`;\n    else if ((i >= 41) & (i < 54))\n      temp3 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys[i]}\">${keys2[i]}</div>`;\n    else if (i >= 54)\n      temp4 += `<div id=\"${keys2[i]}\" class=\"key\" data =\"${keys[i]}\">${keys2[i]}</div>`;\n  }\n  for (let j = 0; j < 5; j++) {\n    createLine();\n    count++;\n  }\n\n  document.querySelector(\"#line_0\").innerHTML = temp;\n  document.querySelector(\"#line_1\").innerHTML = temp1;\n  document.querySelector(\"#line_2\").innerHTML = temp2;\n  document.querySelector(\"#line_3\").innerHTML = temp3;\n  document.querySelector(\"#line_4\").innerHTML = temp4;\n};\nrenderKeys();\nlet keyButton = document.querySelectorAll(\".key\");\nconsole.log(keyButton);\n\ndocument.onkeydown = function (e) {\n  document.querySelector(`[data=\"${e.keyCode}\"]`).classList.add(\"active\");\n  console.log(e.key);\n  textArea.insertAdjacentHTML(\"beforeend\", `${e.key}`);\n};\ndocument.onkeyup = function (e) {\n  keyButton.forEach((el) => el.classList.remove(\"active\"));\n};\n// keyButton.forEach((el) =>\n//   el.addEventListener(\"keydown\", (e) =>\n//     textArea.insertAdjacentHTML(\"beforeend\", `${el.textContent}`)\n//   )\n// );\nkeyButton.forEach((el) => {\n  el.onclick = (e) => {\n    keyButton.forEach((element) => element.classList.remove(\"active\"));\n    let data = el.getAttribute(\"data\");\n    document.querySelector(`[data = \"${data}\"]`).classList.add(\"active\");\n    console.log(el.textContent);\n    textArea.insertAdjacentHTML(\"beforeend\", `${el.textContent}`);\n  };\n});\n// document.addEventListener(\"mouseup\", (e) => {\n//   keyButton.forEach((el) => {\n//     el.classList.remove(\"active\");\n//     console.log(el);\n//   });\n// });\n\nconst printKeys = () => {};\n\nconst addClassNameToSpecial = () => {\n  for (let spec of keyButton) {\n    if (spec.innerText.length > 1) {\n      spec.className += \" special\";\n    }\n  }\n};\naddClassNameToSpecial();\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/keyboard.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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