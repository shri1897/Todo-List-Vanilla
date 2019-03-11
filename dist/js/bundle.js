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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Main.js":
/*!************************!*\
  !*** ./src/js/Main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/js/TodoManager.js\");\n\n\nvar todoManager = new _TodoManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntodoManager.init();\n\n\n//# sourceURL=webpack:///./src/js/Main.js?");

/***/ }),

/***/ "./src/js/TodoActionBar.js":
/*!*********************************!*\
  !*** ./src/js/TodoActionBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n\nconst ENTER_KEY = 13;\n\nfunction TodoActionBar() { }\n\nTodoActionBar.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nTodoActionBar.prototype.constructor = TodoActionBar;\n\nTodoActionBar.prototype.init = function () {  //Move this to constructor? init <==> constructor?\n  addEventListeners();\n};\n\nfunction addEventListeners() {\n  document.getElementById(\"btn-add\").onclick = onClickAddItem; //onAddItemClick? //handleAddItemClick?\n  document.getElementById(\"btn-select-all\").onclick = onClickSelectDeselectAll;\n  document.getElementById(\"btn-delete-selected\").onclick = onClickDeleteSelected;\n  document.getElementById(\"btn-delete-completed\").onclick = onClickDeleteCompleted;\n  document.getElementById(\"text-box\").onkeypress = function (event) {\n    if (event.keyCode === ENTER_KEY) {\n      onClickAddItem();\n    }\n  };\n}\n\nfunction onClickAddItem() {\n  var todoText = document.getElementById(\"text-box\").value;\n  document.getElementById(\"text-box\").value = \"\";\n\n  if (todoText) {\n    let addItemEvent = new CustomEvent(\"TodoManager:addItem\", {\n      detail: { todoText: todoText }\n    });\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatchEvent(addItemEvent);\n  }\n};\n\nfunction onClickSelectDeselectAll() {\n  _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatchEvent(new CustomEvent(\"TodoManager:selectDeselectAll\"));\n};\n\nfunction onClickDeleteSelected() {\n  var deleteSelectedEvent = new CustomEvent(\"TodoManager:deleteSelected\");\n  _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatchEvent(deleteSelectedEvent);\n};\n\nfunction onClickDeleteCompleted() {\n  var deleteCompletedEvent = new CustomEvent(\"TodoManager:deleteCompleted\");\n  _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatchEvent(deleteCompletedEvent);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoActionBar);\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n/* harmony import */ var _todo_item_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item-template.js */ \"./src/js/todo-item-template.js\");\n\n\n\n\nfunction TodoListItem(todoText) {\n  this.id = Date.now(); // ID <---- TimeStamp.\n  this.text = todoText;\n  this.status = false;\n  this.checked = false;\n}\n\nTodoListItem.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nTodoListItem.prototype.constructor = TodoListItem;\n\nTodoListItem.prototype.render = function () {   //WRONG? - Render also adds event listener.\n  var newTodoElement = document.createElement(\"div\");\n  newTodoElement.className = \"todo-wrapper\";\n  newTodoElement.innerHTML = Mustache.render(_todo_item_template_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], this);\n\n  newTodoElement.onclick = onClickTodoElement.bind(this); //Click Listener - move to sepeate function?\n  return newTodoElement;\n};\n\nTodoListItem.prototype.setChecked = function (check) {\n  var todoElement = document.querySelector(`[todo-id='${this.id}']`);\n  todoElement.querySelector(`.check-box`).checked = check;\n  this.checked = check;\n};\n\nTodoListItem.prototype.setStatus = function (status) {\n  var todoElement = document.querySelector(`[todo-id='${this.id}']`);\n  status ? todoElement.classList.add(\"done\") : todoElement.classList.remove(\"done\");\n  this.status = status;\n  // if(status) {\n  //     todoElement.classList.add('done');\n  // }else {\n  //     todoElement.classList.remove('done');\n  // }\n};\n\nTodoListItem.prototype.delete = function () {\n  var deleteItemEvent = new CustomEvent(\"TodoManager:deleteMapItem\", {\n    detail: { todoID: this.id }\n  });\n\n  _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatchEvent(deleteItemEvent);\n  document.querySelector(`[todo-id='${this.id}']`).closest(\".todo-wrapper\").remove(); //Split into two/three lines??\n};\n\nfunction onClickTodoElement(event) {\n  switch (event.target.getAttribute(\"todo-action\")) {\n    case \"select-item\":\n      {\n        this.setChecked(event.target.checked);\n        break;\n      }\n    case \"mark-done\":\n      {\n        this.setStatus(!this.status);\n        break;\n      }\n    case \"delete-item\":\n      {\n        this.delete();\n        break;\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoListItem);\n\n// TodoListItem.prototype.createTodoElement = function () {\n//     var templateListItem = document.querySelector('.template'),\n//         newTodoElement = templateListItem.cloneNode(true);\n\n//     newTodoElement.classList.remove(\"template\");\n//     newTodoElement.setAttribute(\"todo-id\", `${this.id}`);\n//     newTodoElement.querySelector(`.todo-text`).textContent = this.text;\n\n//     if (this.status) {\n//         newItem.classList.add('done-class');\n//     }\n//     newTodoElement.querySelector(`[todo-action=\"select-item\"]`).checked = this.checked;\n//     newTodoElement.onclick = todoElementOnClick.bind(this);\n//     return newTodoElement;\n// };\n\n// const render = function (listItem) {\n//     var todoElement = document.querySelector(`[todo-id='${listItem.id}']`);\n//     todoElement.outerHTML = Mustache.render(todoItemTemplate, listItem);\n// };\n\n\n//# sourceURL=webpack:///./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListItem.js */ \"./src/js/TodoListItem.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n //broker for Child-Parent intermodule Communication\n\nconst todoItemMap = window.todoItemMap = {};\n\nfunction TodoManager() {\n}\n\nTodoManager.prototype.init = function () {  //Move this to constructor? init <==> constructor?\n  var todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  todoActionBar.init();\n  addCustomEventListeners();\n};\n\nfunction addCustomEventListeners() {\n  _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEventListener(\"TodoManager:selectDeselectAll\", selectDeselectAll);\n  _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEventListener(\"TodoManager:deleteMapItem\", deleteMapItem);\n  _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEventListener(\"TodoManager:deleteSelected\", deleteSelected);\n  _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEventListener(\"TodoManager:deleteCompleted\", deleteCompleted);\n  _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEventListener(\"TodoManager:addItem\", addItem);\n}\n\nfunction addItem(event) {\n  var newTodoItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](event.detail.todoText);\n  var newTodoElement = newTodoItem.render();\n\n  todoItemMap[newTodoItem.id] = newTodoItem;\n  document.getElementById(\"list-container\").appendChild(newTodoElement);\n};\n\nfunction deleteMapItem(event) {  //Needs a better name\n  var todoID = event.detail.todoID;\n  delete todoItemMap[todoID];\n};\n\nfunction deleteSelected() {\n  for (let todoID in todoItemMap) {\n    if (todoItemMap[todoID].checked) {\n      todoItemMap[todoID].delete();\n    }\n  }\n};\n\nfunction deleteCompleted() {\n  for (let todoID in todoItemMap) {\n    if (todoItemMap[todoID].status) {\n      todoItemMap[todoID].delete();\n    }\n  }\n};\n\nfunction selectDeselectAll() {\n  var check = determineCheckUncheckAction(); // better name for check?\n\n  for (let todoID in todoItemMap) {\n    todoItemMap[todoID].setChecked(check);\n  }\n};\n\nfunction determineCheckUncheckAction() {\n  var check = true;\n  var firstListItem = todoItemMap[Object.keys(todoItemMap)[0]];\n  if (firstListItem && firstListItem.checked) {\n    check = false;\n  }\n  return check;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoManager);\n\n\n// const render = function () {\n//     // Render todoManager ? ( List-Container and TodoAction Bar??)\n//     // var bodyElement = document.querySelector(`body`);\n//     // bodyElement.innerHTML = Mustache.render(todoItemTemplate, listItem);\n// };\n\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction View() { };\n\nView.prototype.init = function () { }\nView.prototype.render = function () { }\nView.prototype.delete = function () { }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./src/js/View.js?");

/***/ }),

/***/ "./src/js/broker.js":
/*!**************************!*\
  !*** ./src/js/broker.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//broker for Child-Parent intermodule Communication\nconst broker = document.createElement('span');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (broker);\n\n//# sourceURL=webpack:///./src/js/broker.js?");

/***/ }),

/***/ "./src/js/todo-item-template.js":
/*!**************************************!*\
  !*** ./src/js/todo-item-template.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todoItemTemplate =\n    `\n        <div class=\"list-item {{#status}}done{{/status}}\" todo-id=\"{{id}}\">\n            <input type=\"checkbox\" class=\"check-box\" todo-action=\"select-item\" {{#checked}}checked{{/checked}}>\n            <p class=\"todo-text\" todo-action=\"todo-text\">{{text}}</p>\n            <button class=\"btn-done\" todo-action=\"mark-done\">Done</button>\n            <button class=\"btn-delete\" todo-action=\"delete-item\">Delete</button>\n        </div>\n    `;\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoItemTemplate);\n\n//# sourceURL=webpack:///./src/js/todo-item-template.js?");

/***/ })

/******/ });