/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1046,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1001);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(109)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, ".dashboard{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:15px 15px 0}.dashboard,.dashboard .flex-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.dashboard .flex-row{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.dashboard .form-group{margin-bottom:15px}.dashboard .toolbox{display:-webkit-box;display:-ms-flexbox;display:flex}.dashboard .toolbox .record-ops{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right}.dashboard .toolbox .play-ops{margin-left:15px}.dashboard .ant-table-pagination{display:none}.dashboard .ant-table-header{overflow:hidden!important;margin-bottom:0!important;padding-bottom:0!important}.dashboard .ant-table-header .ant-table-thead>tr>th{padding:13px 8px}.dashboard .ant-table-body .ant-table-thead>tr>th{padding:10px 8px}.dashboard .ant-table-tbody>tr>td{padding:8px}.dashboard tr.selected-command>td{background-color:#fdffd1!important}.dashboard tr.error-command>td{background-color:#f7c1c1!important}.dashboard tr.running-command>td{background-color:#d5d6f9!important}.dashboard tr.done-command>td{background-color:#d1ffd8!important}.dashboard .ant-btn-group>.ant-btn-group{float:none}.dashboard .ant-form-item{margin-bottom:15px}.dashboard .editor-wrapper{-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:2;-ms-flex:2;flex:2}.dashboard .editor-wrapper,.dashboard .editor-wrapper .tabs-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal}.dashboard .editor-wrapper .tabs-wrapper{position:relative;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .editor-wrapper .tabs-wrapper .vision-type{position:absolute;right:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.dashboard .editor-wrapper .tabs-wrapper .vision-type img{display:block;margin-right:10px;width:20px;height:20px}.dashboard .editor-wrapper .tabs-wrapper .vision-type span{text-decoration:underline;color:#108ee9;font-size:16px}.dashboard .commands-view{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:2;-ms-flex:2;flex:2}.dashboard .commands-view .ant-tabs-bar{margin-bottom:0}.dashboard .commands-view .ant-tabs-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px;border:1px solid #d9d9d9;border-width:0 1px 1px}.dashboard .commands-view .ant-tabs-content .ant-tabs-tabpane{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-negative:unset!important;flex-shrink:unset!important;position:relative}.dashboard .commands-view .ant-tabs-content .table-wrapper{position:absolute;top:0;bottom:140px;left:0;right:0;overflow-y:auto}.dashboard .commands-view .ant-tabs-content .fields-wrapper{position:absolute;left:0;right:0;bottom:0;height:130px}.dashboard .commands-view .ant-tabs-content .react-codemirror2{position:relative}.dashboard .commands-view .ant-tabs-content .react-codemirror2.has-error{height:calc(100% - 70px)}.dashboard .commands-view .ant-tabs-content .react-codemirror2.no-error{height:calc(100% - 0px)}.dashboard .commands-view .ant-tabs-content .react-codemirror2 .CodeMirror{position:absolute;top:0;bottom:0;left:0;right:0;height:auto;font-size:13px}.dashboard .commands-view .ant-tabs-content .ant-spin-container,.dashboard .commands-view .ant-tabs-content .ant-spin-nested-loading,.dashboard .commands-view .ant-tabs-content .ant-table,.dashboard .commands-view .ant-tabs-content .ant-table-content,.dashboard .commands-view .ant-tabs-content .ant-table-scroll,.dashboard .commands-view .ant-tabs-content .ant-table-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .commands-view .ant-tabs-content .ant-table-scroll{overflow-y:auto}.dashboard .commands-view .command-row{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-left:5px;border-bottom:1px solid #e9e9e9;line-height:45px;font-size:13px}.dashboard .commands-view .command-row:hover{background:#ecf6fd}.dashboard .commands-view .command-row.footer-row,.dashboard .commands-view .command-row.header-row{background-color:#f7f7f7;font-weight:700}.dashboard .commands-view .command-row.footer-row{display:block;text-align:center;cursor:pointer}.dashboard .commands-view .command-row.breakpoint-command:before{content:\"\";position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:0;height:0;border:8px solid transparent;border-left-color:green}.dashboard .commands-view .command-row.selected-command{background-color:#fdffd1}.dashboard .commands-view .command-row.error-command{background-color:#f7c1c1}.dashboard .commands-view .command-row.running-command{background-color:#d5d6f9}.dashboard .commands-view .command-row.done-command{background-color:#d1ffd8}.dashboard .commands-view .command-row.comment-command{background-color:transparent;color:#ccc;font-style:italic}.dashboard .commands-view .command-row.comment-command.selected-command{background-color:#fdffd1}.dashboard .commands-view .command-row .row-col{padding:0 8px}.dashboard .commands-view .command-row .row-col.command-col{width:130px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dashboard .commands-view .command-row .row-col.target-col{width:30%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dashboard .commands-view .command-row .row-col.value-col{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dashboard .commands-view .command-row .row-col.op-col{width:80px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dashboard .table-footer{position:absolute;left:0;right:0;top:0;bottom:0;line-height:32px;text-align:center;font-weight:700;background:#f7f7f7;cursor:pointer}.dashboard .table-footer:hover{background:#e0e0e0}.dashboard .logs-screenshots{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;margin-top:15px}.dashboard .logs-screenshots .resize-handler{position:absolute;top:-10px;left:0;width:100%;height:6px;background:transparent;cursor:row-resize}.dashboard .logs-screenshots .resize-handler.focused,.dashboard .logs-screenshots .resize-handler:hover{height:6px;background:#ccc}.dashboard .logs-screenshots .ant-tabs.ant-tabs-card>.ant-tabs-bar .ant-tabs-tab{padding:5px 12px 4px}.dashboard .logs-screenshots .ant-tabs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .logs-screenshots .ant-tabs-bar{margin-bottom:0}.dashboard .logs-screenshots .ant-tabs-content{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto;min-height:70px;border:1px solid #d9d9d9;border-width:0 1px 1px}.dashboard .logs-screenshots .ls-toolbox{position:absolute;right:0;top:0}.dashboard .logs-screenshots .log-content,.dashboard .logs-screenshots .screenshot-content{padding:10px 0}.dashboard .logs-screenshots .screenshot-content li{padding:0 20px 20px}.dashboard .logs-screenshots .screenshot-content li .timestamp{display:block;margin-bottom:10px;font-size:14px}.dashboard .logs-screenshots .screenshot-content li .filename{font-weight:700}.dashboard .logs-screenshots .screenshot-content li a{display:inline-block;margin-left:20px}.dashboard .logs-screenshots .screenshot-content li a img{max-width:250px;border:1px solid #ccc}.dashboard .logs-screenshots .log-content{list-style:none;margin:0;padding:0 10px;height:calc(100% - 38px);overflow-y:auto}.dashboard .logs-screenshots .log-content li{padding:5px 0;font-size:12px;border-bottom:1px solid #f3f3f3}.dashboard .logs-screenshots .log-content li:after{content:\"\";display:table;clear:both}.dashboard .logs-screenshots .log-content li.error{color:red;font-weight:700}.dashboard .logs-screenshots .log-content li.warning{color:orange}.dashboard .logs-screenshots .log-content li .log-type{float:left;margin-right:10px}.dashboard .logs-screenshots .log-content li .log-detail{white-space:pre-wrap}.dashboard .logs-screenshots .csv-content{padding:10px}.dashboard .logs-screenshots .csv-content button{margin-right:5px}.dashboard .logs-screenshots .variable-content{padding:10px}.dashboard .logs-screenshots .variable-content .variable-options{margin-bottom:10px}.dashboard .logs-screenshots .variable-content .ant-checkbox-wrapper{margin-left:0!important;margin-right:10px}.dashboard .logs-screenshots .variable-content .read-only{color:#ccc}.dashboard .logs-screenshots .vision-content{padding:10px}.dashboard .logs-screenshots .vision-content .vision-top-actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-right:15px}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .main-actions-left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .main-actions-left>*{margin-right:15px}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .main-actions-left>:last-child{margin-right:0}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .load-image-button{padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .load-image-button label{padding:0 15px;cursor:pointer}.dashboard .logs-screenshots .vision-content .vision-top-actions .more-info{font-size:14px}.dashboard .logs-screenshots .vision-content .vision-image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;overflow:hidden;width:100px;height:100px;border:1px solid #ccc}.dashboard .logs-screenshots .vision-content .vision-image img{max-height:100px}.dashboard .logs-screenshots .vision-content .vision-name{font-size:14px;word-break:break-all}.dashboard .logs-screenshots .vision-content .vision-actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.dashboard .logs-screenshots .vision-content .vision-actions button{margin-right:5px}.dashboard .logs-screenshots .vision-content .vision-actions button:last-child{margin-right:0}.dashboard .online-help{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding:0 10px;height:25px;line-height:25px;font-size:14px;text-align:right}.dashboard #context_menu{z-index:10}.dashboard #context_menu .ant-menu{border:\"1px solid #ccc\";border-radius:4px;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2)}.dashboard #context_menu .ant-menu .ant-menu-item{height:36px;line-height:36px}.dashboard #context_menu .ant-menu .ant-menu-item:hover{background:#ecf6fd}.source-error{color:red;white-space:pre-wrap;font-size:12px}.ant-dropdown .ant-dropdown-menu{max-height:none}@media (max-width:768px){.duplicate-modal,.play-loop-modal,.rename-modal,.save-modal{width:400px!important;margin:0 auto}}", ""]);

// exports


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1024);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(109)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, "body{margin:0;padding:0;font-size:16px}*{-webkit-box-sizing:border-box;box-sizing:border-box}.app{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.app,.app .app-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.app .app-inner{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.app.with-alert .backup-alert{display:block}.app .backup-alert{display:none;padding:5px 0;text-align:center;font-size:14px;background:#fdfdc2}.app .backup-alert .backup-actions{margin-left:20px}.app .backup-alert .backup-actions button{margin-right:10px}.app .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:3;-ms-flex:3;flex:3;background:#fff;overflow-y:auto}", ""]);

// exports


/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "findSameNameMacro", function() { return findSameNameMacro; });
__webpack_require__.d(actions_namespaceObject, "findSameNameTestSuite", function() { return findSameNameTestSuite; });
__webpack_require__.d(actions_namespaceObject, "setRoute", function() { return setRoute; });
__webpack_require__.d(actions_namespaceObject, "startRecording", function() { return startRecording; });
__webpack_require__.d(actions_namespaceObject, "stopRecording", function() { return stopRecording; });
__webpack_require__.d(actions_namespaceObject, "startInspecting", function() { return startInspecting; });
__webpack_require__.d(actions_namespaceObject, "stopInspecting", function() { return stopInspecting; });
__webpack_require__.d(actions_namespaceObject, "startPlaying", function() { return startPlaying; });
__webpack_require__.d(actions_namespaceObject, "stopPlaying", function() { return stopPlaying; });
__webpack_require__.d(actions_namespaceObject, "doneInspecting", function() { return doneInspecting; });
__webpack_require__.d(actions_namespaceObject, "appendCommand", function() { return appendCommand; });
__webpack_require__.d(actions_namespaceObject, "duplicateCommand", function() { return duplicateCommand; });
__webpack_require__.d(actions_namespaceObject, "insertCommand", function() { return insertCommand; });
__webpack_require__.d(actions_namespaceObject, "updateCommand", function() { return updateCommand; });
__webpack_require__.d(actions_namespaceObject, "removeCommand", function() { return removeCommand; });
__webpack_require__.d(actions_namespaceObject, "selectCommand", function() { return selectCommand; });
__webpack_require__.d(actions_namespaceObject, "cutCommand", function() { return cutCommand; });
__webpack_require__.d(actions_namespaceObject, "copyCommand", function() { return copyCommand; });
__webpack_require__.d(actions_namespaceObject, "pasteCommand", function() { return pasteCommand; });
__webpack_require__.d(actions_namespaceObject, "normalizeCommands", function() { return normalizeCommands; });
__webpack_require__.d(actions_namespaceObject, "updateSelectedCommand", function() { return updateSelectedCommand; });
__webpack_require__.d(actions_namespaceObject, "toggleCommentOnSelectedCommand", function() { return toggleCommentOnSelectedCommand; });
__webpack_require__.d(actions_namespaceObject, "setSourceError", function() { return setSourceError; });
__webpack_require__.d(actions_namespaceObject, "setSourceCurrent", function() { return setSourceCurrent; });
__webpack_require__.d(actions_namespaceObject, "saveSourceCodeToEditing", function() { return saveSourceCodeToEditing; });
__webpack_require__.d(actions_namespaceObject, "saveEditingAsExisted", function() { return saveEditingAsExisted; });
__webpack_require__.d(actions_namespaceObject, "saveEditingAsNew", function() { return saveEditingAsNew; });
__webpack_require__.d(actions_namespaceObject, "setTestCases", function() { return setTestCases; });
__webpack_require__.d(actions_namespaceObject, "resetEditing", function() { return resetEditing; });
__webpack_require__.d(actions_namespaceObject, "resetEditingIfNeeded", function() { return resetEditingIfNeeded; });
__webpack_require__.d(actions_namespaceObject, "setEditing", function() { return setEditing; });
__webpack_require__.d(actions_namespaceObject, "editTestCase", function() { return editTestCase; });
__webpack_require__.d(actions_namespaceObject, "editNewTestCase", function() { return editNewTestCase; });
__webpack_require__.d(actions_namespaceObject, "upsertTestCase", function() { return upsertTestCase; });
__webpack_require__.d(actions_namespaceObject, "addTestCases", function() { return addTestCases; });
__webpack_require__.d(actions_namespaceObject, "renameTestCase", function() { return renameTestCase; });
__webpack_require__.d(actions_namespaceObject, "removeTestCase", function() { return removeTestCase; });
__webpack_require__.d(actions_namespaceObject, "removeCurrentTestCase", function() { return removeCurrentTestCase; });
__webpack_require__.d(actions_namespaceObject, "duplicateTestCase", function() { return duplicateTestCase; });
__webpack_require__.d(actions_namespaceObject, "setPlayerState", function() { return setPlayerState; });
__webpack_require__.d(actions_namespaceObject, "setTimeoutStatus", function() { return setTimeoutStatus; });
__webpack_require__.d(actions_namespaceObject, "addPlayerErrorCommandIndex", function() { return addPlayerErrorCommandIndex; });
__webpack_require__.d(actions_namespaceObject, "addLog", function() { return addLog; });
__webpack_require__.d(actions_namespaceObject, "clearLogs", function() { return clearLogs; });
__webpack_require__.d(actions_namespaceObject, "addScreenshot", function() { return addScreenshot; });
__webpack_require__.d(actions_namespaceObject, "clearScreenshots", function() { return clearScreenshots; });
__webpack_require__.d(actions_namespaceObject, "addVision", function() { return addVision; });
__webpack_require__.d(actions_namespaceObject, "clearVisions", function() { return clearVisions; });
__webpack_require__.d(actions_namespaceObject, "updateConfig", function() { return updateConfig; });
__webpack_require__.d(actions_namespaceObject, "setMacrosExtra", function() { return setMacrosExtra; });
__webpack_require__.d(actions_namespaceObject, "setTestSuitesExtra", function() { return setTestSuitesExtra; });
__webpack_require__.d(actions_namespaceObject, "updateMacroExtra", function() { return updateMacroExtra; });
__webpack_require__.d(actions_namespaceObject, "updateMacroPlayStatus", function() { return updateMacroPlayStatus; });
__webpack_require__.d(actions_namespaceObject, "updateMacroBreakpoints", function() { return updateMacroBreakpoints; });
__webpack_require__.d(actions_namespaceObject, "updateMacroDoneCommandsIndices", function() { return updateMacroDoneCommandsIndices; });
__webpack_require__.d(actions_namespaceObject, "updateMacroErrorCommandsIndices", function() { return updateMacroErrorCommandsIndices; });
__webpack_require__.d(actions_namespaceObject, "commonPlayerState", function() { return commonPlayerState; });
__webpack_require__.d(actions_namespaceObject, "playerPlay", function() { return playerPlay; });
__webpack_require__.d(actions_namespaceObject, "listCSV", function() { return listCSV; });
__webpack_require__.d(actions_namespaceObject, "listScreenshots", function() { return listScreenshots; });
__webpack_require__.d(actions_namespaceObject, "listVisions", function() { return listVisions; });
__webpack_require__.d(actions_namespaceObject, "renameVisionImage", function() { return renameVisionImage; });
__webpack_require__.d(actions_namespaceObject, "setTestSuites", function() { return setTestSuites; });
__webpack_require__.d(actions_namespaceObject, "addTestSuite", function() { return addTestSuite; });
__webpack_require__.d(actions_namespaceObject, "addTestSuites", function() { return addTestSuites; });
__webpack_require__.d(actions_namespaceObject, "updateTestSuite", function() { return updateTestSuite; });
__webpack_require__.d(actions_namespaceObject, "removeTestSuite", function() { return removeTestSuite; });
__webpack_require__.d(actions_namespaceObject, "setPlayerMode", function() { return setPlayerMode; });
__webpack_require__.d(actions_namespaceObject, "runBackup", function() { return runBackup; });
__webpack_require__.d(actions_namespaceObject, "setVariables", function() { return setVariables; });
__webpack_require__.d(actions_namespaceObject, "updateUI", function() { return updateUI; });
__webpack_require__.d(actions_namespaceObject, "addBreakpoint", function() { return addBreakpoint; });
__webpack_require__.d(actions_namespaceObject, "removeBreakpoint", function() { return removeBreakpoint; });
__webpack_require__.d(actions_namespaceObject, "setEditorActiveTab", function() { return setEditorActiveTab; });
__webpack_require__.d(actions_namespaceObject, "preinstall", function() { return preinstall; });

// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(14);
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// EXTERNAL MODULE: ./node_modules/antd/lib/locale-provider/index.js
var locale_provider = __webpack_require__(584);
var locale_provider_default = /*#__PURE__*/__webpack_require__.n(locale_provider);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(16);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/index.js + 30 modules
var es = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/antd/lib/locale-provider/en_US.js
var en_US = __webpack_require__(351);
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US);

// EXTERNAL MODULE: ./src/config/index.ts
var src_config = __webpack_require__(33);
var config_default = /*#__PURE__*/__webpack_require__.n(src_config);

// EXTERNAL MODULE: ./src/common/lib/file_saver.js
var file_saver = __webpack_require__(56);
var file_saver_default = /*#__PURE__*/__webpack_require__.n(file_saver);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(19);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(44);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var react_redux_es = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/redux/es/index.js + 15 modules
var redux_es = __webpack_require__(60);

// CONCATENATED MODULE: ./src/actions/action_types.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Generate three action types, used in actions that return promises
var make3 = function make3(name) {
  return [name + '_REQUEST', name + '_SUCCESS', name + '_FAIL'];
};

var type3 = function type3(name) {
  return make3(name).map(function (key) {
    return types[key];
  });
};

var promiseTypes = ['START_RECORDING', 'STOP_RECORDING', 'START_INSPECTING', 'STOP_INSPECTING'].reduce(function (prev, cur) {
  make3(cur).forEach(function (key) {
    prev[key] = key;
  });

  return prev;
}, {});

var simpleTypes = ['SET_ROUTE', 'SET_EDITOR_ACTIVE_TAB', 'DONE_INSPECTING', 'UPDATE_BASE_URL', 'APPEND_COMMAND', 'DUPLICATE_COMMAND', 'INSERT_COMMAND', 'UPDATE_COMMAND', 'REMOVE_COMMAND', 'SELECT_COMMAND', 'CUT_COMMAND', 'COPY_COMMAND', 'PASTE_COMMAND', 'NORMALIZE_COMMANDS', 'UPDATE_SELECTED_COMMAND', 'SAVE_EDITING_AS_EXISTED', 'SAVE_EDITING_AS_NEW', 'SET_TEST_CASES', 'SET_EDITING', 'EDIT_TEST_CASE', 'EDIT_NEW_TEST_CASE', 'ADD_TEST_CASES', 'RENAME_TEST_CASE', 'REMOVE_TEST_CASE', 'UPDATE_TEST_SUITE_STATUS', 'UPDATE_ONE_MACRO_EXTRA', 'SET_ONE_MACRO_EXTRA', 'SET_MACROS_EXTRA', 'SET_TEST_SUITES_EXTRA', 'SET_PLAYER_STATE', 'SET_PLAYER_MODE', 'SET_TEST_SUITES', 'UPDATE_TEST_SUITE', 'ADD_LOGS', 'CLEAR_LOGS', 'ADD_SCREENSHOT', 'CLEAR_SCREENSHOTS', 'ADD_VISION', 'CLEAR_VISIONS', 'START_PLAYING', 'STOP_PLAYING', 'SET_CSV_LIST', 'SET_SCREENSHOT_LIST', 'SET_VISION_LIST', 'SET_VARIABLE_LIST', 'SET_SOURCE_ERROR', 'SET_SOURCE_CURRENT', 'UPDATE_CONFIG', 'UPDATE_UI'].reduce(function (prev, cur) {
  prev[cur] = cur;
  return prev;
}, {});

var types = _extends({}, simpleTypes, promiseTypes);
// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__(4);

// EXTERNAL MODULE: ./src/common/ipc/ipc_cs.js
var ipc_cs = __webpack_require__(20);

// EXTERNAL MODULE: ./src/common/storage/index.js + 1 modules
var common_storage = __webpack_require__(36);

// EXTERNAL MODULE: ./src/services/storage/index.ts
var services_storage = __webpack_require__(13);

// EXTERNAL MODULE: ./src/common/ts_utils.ts
var ts_utils = __webpack_require__(18);

// EXTERNAL MODULE: ./src/models/db.js
var db = __webpack_require__(67);

// CONCATENATED MODULE: ./src/models/test_case_model.js
var test_case_model_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var model = {
  table: db["default"].testCases,
  list: function list() {
    return db["default"].testCases.toArray();
  },
  insert: function insert(data) {
    if (!data.name) {
      throw new Error('Model TestCase - insert: missing name');
    }

    if (!data.data) {
      throw new Error('Model TestCase - insert: missing data');
    }

    data.updateTime = new Date() * 1;
    data.id = Object(utils["uid"])();
    return db["default"].testCases.add(test_case_model_normalizeTestCase(data));
  },
  bulkInsert: function bulkInsert(tcs) {
    var list = tcs.map(function (data) {
      if (!data.name) {
        throw new Error('Model TestCase - insert: missing name');
      }

      if (!data.data) {
        throw new Error('Model TestCase - insert: missing data');
      }

      data.updateTime = new Date() * 1;
      data.id = Object(utils["uid"])();

      return test_case_model_normalizeTestCase(data);
    });

    return db["default"].testCases.bulkAdd(list);
  },
  update: function update(id, data) {
    return db["default"].testCases.update(id, test_case_model_normalizeTestCase(data));
  },
  remove: function remove(id) {
    return db["default"].testCases.delete(id);
  }
};

/* harmony default export */ var test_case_model = (model);

var test_case_model_normalizeCommand = function normalizeCommand(command) {
  return Object(utils["pick"])(['cmd', 'target', 'value'], command);
};

var test_case_model_normalizeTestCase = function normalizeTestCase(testCase) {
  var intermediate = Object(utils["compose"])(Object(utils["on"])('data'), Object(utils["on"])('commands'), utils["map"])(test_case_model_normalizeCommand)(testCase);

  return Object(ts_utils["pickIfExist"])(['id', 'data', 'name'], intermediate);
};

var commandWithoutBaseUrl = function commandWithoutBaseUrl(baseUrl) {
  return function (command) {
    if (command.cmd !== 'open') return command;

    return test_case_model_extends({}, command, {
      target: (baseUrl + '/' + command.target).replace(/\/+/g, '/')
    });
  };
};

var test_case_model_eliminateBaseUrl = function eliminateBaseUrl(testCase) {
  if (!testCase.baseUrl) return testCase;
  return Object(utils["compose"])(Object(utils["on"])('data'), Object(utils["on"])('commands'), utils["map"])(commandWithoutBaseUrl(testCase.baseUrl))(testCase);
};
// EXTERNAL MODULE: ./node_modules/event-emitter/index.js
var event_emitter = __webpack_require__(592);
var event_emitter_default = /*#__PURE__*/__webpack_require__.n(event_emitter);

// CONCATENATED MODULE: ./src/common/player.js
var player_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MODE = {
  STRAIGHT: 'STRAIGHT',
  SINGLE: 'SINGLE',
  LOOP: 'LOOP'
};

var STATUS = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED',
  ERROR: 'ERROR'
};

var END_REASON = {
  COMPLETE: 'COMPLETE',
  ERROR: 'ERROR',
  MANUAL: 'MANUAL'
};

var isEmpty = function isEmpty(x) {
  return x === undefined || x === null;
};

var initialState = {
  startUrl: null,

  startIndex: null,
  endIndex: null,
  nextIndex: null,
  errorIndex: null,
  doneIndices: [],

  mode: MODE.STRAIGHT,
  resources: [],

  // preDelay: 0,
  // postDelay: 0,

  status: STATUS.STOPPED

  // Note: A generic player for consuming some kind of resources
  // It supports 3 modes: single, straight, loop.
  // Also for straight and loop, it can start or end at any valid index you want
  //
  // The main API of a player is
  // 1. constructor({ run: Function,  prepare: Function })
  // 2. play(config)
  // 3. pause()
  // 4. resume()
  // 5. stop()
  //
  // Events it emits
  // 1. START
  // 2. PREPARED
  // 3. TO_PLAY
  // 4. PLAYED_LIST
  // 5. PAUSED
  // 6. RESUMED
  // 7. END
  // 8. ERROR

};var player_Player = function () {
  function Player(opts, state) {
    _classCallCheck(this, Player);

    this.state = player_extends({}, initialState);
    this.toResumePromises = {};

    if (!opts) {
      throw new Error('Player - constructor: must provide opts as 1st argument');
    }

    if (typeof opts.run !== 'function') {
      throw new Error('Player - constructor: must provide a run function');
    }

    if (typeof opts.prepare !== 'function') {
      throw new Error('Player - constructor: must provide a prepare function');
    }

    if (typeof opts.handleResult !== 'function') {
      throw new Error('Player - constructor: must provide a handleResult function');
    }

    this.__run = opts.run;
    this.__prepare = opts.prepare;
    this.__handle = opts.handleResult;

    this.__setState(state || {});
  }

  _createClass(Player, [{
    key: 'play',
    value: function play(config) {
      var _this = this;

      if (!config) {
        throw new Error('Player - play: config should not be empty');
      }

      if (!config.mode || Object.keys(MODE).indexOf(config.mode) === -1) {
        throw new Error('Player - play: must provide a valid mode, now it is ' + config.mode);
      }

      if (config.mode === MODE.LOOP && (!config.loopsStart || config.loopsStart < 0 || Math.floor(config.loopsStart) !== config.loopsStart || !config.loopsEnd || config.loopsEnd < config.loopsStart || Math.floor(config.loopsEnd) !== config.loopsEnd)) {
        throw new Error('Player - play: must provide a valid tuple of "loopsStart" and "loopsEnd" in loop mode, now it is ' + config.loopsStart + ', ' + config.loopsEnd);
      }

      if (!config.resources || !config.resources.length) {
        throw new Error('Player - play: resources should not be empty');
      }

      if (isEmpty(config.startIndex) || config.startIndex < 0 || config.startIndex >= config.resources.length) {
        throw new Error('Player - play: startIndex out of range, now it is ' + config.startIndex + ', len: ' + config.resources.length);
      }

      // Note: endIndex could be omitted
      if (!isEmpty(config.endIndex) && (config.endIndex < 0 || config.endIndex >= config.resources.length)) {
        throw new Error('Player - play: endIndex out of range, now it is ' + config.endIndex + ', len: ' + config.resources.length);
      }

      var nextIndex = config.nextIndex,
          startIndex = config.startIndex,
          startUrl = config.startUrl,
          resources = config.resources,
          title = config.title,
          extra = config.extra,
          doneIndices = config.doneIndices,
          noEndEvent = config.noEndEvent,
          token = config.token,
          isStep = config.isStep,
          loopsCursor = config.loopsCursor,
          loopsStart = config.loopsStart,
          loopsEnd = config.loopsEnd,
          isBackFromCalling = config.isBackFromCalling;

      var endIndex = config.endIndex || resources.length - 1;
      var basicState = {
        token: token,
        title: title,
        extra: extra,
        isBackFromCalling: isBackFromCalling,
        startUrl: startUrl,
        startIndex: startIndex,
        endIndex: endIndex,
        nextIndex: nextIndex !== undefined ? nextIndex : startIndex,
        errorIndex: null,
        doneIndices: doneIndices || [],
        mode: config.mode,
        loopsCursor: 1,
        loopsStart: 1,
        loopsEnd: 1,
        isStep: isStep || false,
        noEndEvent: noEndEvent || false,
        resources: config.resources,
        breakpoints: config.breakpoints || [],
        status: STATUS.PLAYING,
        public: config.public || {},
        callback: config.callback || function () {},
        lastPlayConfig: config,
        playUID: Math.random()
      };['preDelay', 'postDelay'].forEach(function (key) {
        if (isEmpty(config[key])) return;
        basicState[key] = config[key];
      });

      switch (config.mode) {
        case MODE.STRAIGHT:
          this.__setState(player_extends({}, basicState));
          break;

        case MODE.SINGLE:
          this.__setState(player_extends({}, basicState, {
            endIndex: startIndex
          }));
          break;

        case MODE.LOOP:
          this.__setState(player_extends({}, basicState, {
            loopsStart: loopsStart,
            loopsEnd: loopsEnd,
            loopsCursor: loopsCursor !== undefined ? loopsCursor : loopsStart
          }));
          break;

        default:
          break;
      }

      this.emit('START', {
        title: title,
        loopsCursor: this.state.loopsCursor,
        doneIndices: this.state.doneIndices,
        extra: this.state.extra,
        isBackFromCalling: this.state.isBackFromCalling
      });

      return Promise.resolve().then(function () {
        return _this.__prepare(_this.state);
      }).then(function () {
        _this.emit('PREPARED', {
          title: title,
          loopsCursor: _this.state.loopsCursor,
          doneIndices: _this.state.doneIndices,
          extra: _this.state.extra,
          isBackFromCalling: _this.state.isBackFromCalling
        });
      }).then(function () {
        return _this.__go(_this.state.token || null);
      }, function (e) {
        return _this.__errLog(e, e.errorIndex);
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      var _this2 = this;

      this.__setState({
        status: STATUS.PAUSED
      });

      setTimeout(function () {
        _this2.emit('PAUSED', { extra: _this2.state.extra });
      }, 0);

      return this.__createPromiseWaitForResume(this.state.token);
    }
  }, {
    key: 'resume',
    value: function resume(isStep) {
      this.__setState({
        status: STATUS.PLAYING,
        isStep: !!isStep
      });

      this.emit('RESUMED', { extra: this.state.extra });
      // this.__go(null)

      var item = this.toResumePromises[this.state.token];

      if (item && item.resolve) {
        item.resolve();
      }
    }
  }, {
    key: 'stop',
    value: function stop(opts) {
      this.__end(END_REASON.MANUAL, opts);
    }
  }, {
    key: 'stopWithError',
    value: function stopWithError(error) {
      this.__errLog(error);
    }
  }, {
    key: 'jumpTo',
    value: function jumpTo(nextIndex) {
      var resources = this.state.resources;

      // Note: validate nextIndex by resources.length instead of startIndex and endIndex,
      // to make it possible for 'run from here' to jump to commands ahead of the start point

      if (nextIndex < 0 || nextIndex >= resources.length) {
        throw new Error('jumpTo: nextIndex out of range');
      }

      this.__setState({
        nextIndex: nextIndex
      });
    }
  }, {
    key: 'setPostDelay',
    value: function setPostDelay(n) {
      this.__setState({
        postDelay: n
      });
    }
  }, {
    key: 'getStatus',
    value: function getStatus() {
      return this.state.status;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return player_extends({}, this.state);
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      return this.__setState(state);
    }
  }, {
    key: 'replayLastConfig',
    value: function replayLastConfig() {
      var config = this.state.lastPlayConfig;
      if (!config) throw new Error('No last play config available');
      return this.play(config);
    }

    // Note: playUID changes on every `play` call
    // it's useful for features with timer to tell if it should continue to run

  }, {
    key: 'getPlayUID',
    value: function getPlayUID() {
      return this.state.playUID;
    }
  }, {
    key: 'checkPlayUID',
    value: function checkPlayUID(uid) {
      return this.state.playUID === uid;
    }
  }, {
    key: '__go',
    value: function __go(token) {
      var _this3 = this;

      // Note: in case it is returned from previous call

      if (token === undefined || token === null) {
        this.state.token = token = Math.random();
      } else if (token !== this.state.token) {
        return;
      }

      var guardToken = function guardToken(fn) {
        return function () {
          if (token !== _this3.state.token) {
            throw new Error('token expired');
          }
          return fn.apply(undefined, arguments);
        };
      };

      var _state = this.state,
          resources = _state.resources,
          nextIndex = _state.nextIndex,
          preDelay = _state.preDelay;

      var pre = preDelay > 0 ? this.__delay(function () {
        return undefined;
      }, preDelay) : Promise.resolve();

      // Note: the flow of this process:
      // 1. delay if `preDelay` set
      // 2. check `__shouldContinue`
      // 3. stop if the player is stopped or paused
      // 4. otherwise call `__run` to actually consume the current resource
      // 5. set the state to next by calling `__setNext`
      // 6. delay if `postDelay` set
      return pre.then(function () {
        return _this3.__shouldContinue();
      }).then(function (_ref) {
        var paused = _ref.paused,
            complete = _ref.complete;

        if (paused) {
          throw new Error('player: paused or stopped');
        }

        if (complete) {
          return;
        }

        var _state2 = _this3.state,
            resources = _state2.resources,
            nextIndex = _state2.nextIndex,
            startIndex = _state2.startIndex,
            loopsCursor = _state2.loopsCursor,
            loopsStart = _state2.loopsStart,
            loopsEnd = _state2.loopsEnd;

        // Note: when we're running loops

        if (nextIndex === startIndex) {
          var obj = {
            loopsCursor: loopsCursor,
            index: nextIndex,
            currentLoop: loopsCursor - loopsStart + 1,
            loops: loopsEnd - loopsStart + 1,
            resource: resources[nextIndex],
            extra: _this3.state.extra
          };

          _this3.emit('LOOP_START', obj);

          if (loopsCursor !== loopsStart) {
            _this3.emit('LOOP_RESTART', obj);
          }
        }

        _this3.emit('TO_PLAY', {
          index: nextIndex,
          currentLoop: loopsCursor - loopsStart + 1,
          loops: loopsEnd - loopsStart + 1,
          resource: resources[nextIndex],
          extra: _this3.state.extra
        });

        var possibleBreakpointPromise = function () {
          // Note: there will never be two breakpoints in straight. Use `lastBreakpoint` to tell whether we just hit a breakpoint
          // Also note that, 'TO_PLAY' events need to be fired before we pause.
          if (_this3.state.lastBreakpoint === undefined && _this3.state.breakpoints.indexOf(nextIndex) !== -1) {
            _this3.__setState({ lastBreakpoint: nextIndex });
            _this3.emit('BREAKPOINT', {
              index: nextIndex,
              currentLoop: loopsCursor - loopsStart + 1,
              loops: loopsEnd - loopsStart + 1,
              resource: resources[nextIndex],
              extra: _this3.state.extra
            });
            return _this3.pause();
          } else {
            _this3.__setState({ lastBreakpoint: undefined });
            return Promise.resolve();
          }
        }();

        // Note: Check whether token expired or not after each async operations
        // Also also in the final catch to prevent unnecessary invoke of __errLog
        return possibleBreakpointPromise.then(function () {
          return _this3.__run(resources[nextIndex], _this3.state);
        }).then(guardToken(function (res) {
          // Note: allow users to handle the result
          return _this3.__handle(res, resources[nextIndex], _this3.state).then(guardToken(function (nextIndex) {
            // Note: __handle has the chance to return a `nextIndex`, mostly when it's
            // from a flow logic. But still, it could be undefined for normal commands
            var oldLoopsCursor = _this3.state.loopsCursor;

            _this3.__setNext(nextIndex);
            _this3.emit('PLAYED_LIST', {
              indices: _this3.state.doneIndices,
              extra: _this3.state.extra
            });

            return oldLoopsCursor !== _this3.state.loopsCursor;
          })).then(function (isLoopsCursorChanged) {
            // __handle may change postDelay
            var postDelay = _this3.state.postDelay;

            var delay = Math.max(postDelay, isLoopsCursorChanged ? 10 : 0);
            return delay > 0 ? _this3.__delay(function () {
              return undefined;
            }, delay) : Promise.resolve();
          }).then(function () {
            if (_this3.state.isStep) return _this3.pause().then(function () {
              return _this3.__go(token);
            });
            return _this3.__go(token);
          });
        })).catch(guardToken(function (err) {
          return _this3.__errLog(err);
        }));
      });
    }
  }, {
    key: '__shouldContinue',
    value: function __shouldContinue() {
      var _state3 = this.state,
          status = _state3.status,
          mode = _state3.mode,
          nextIndex = _state3.nextIndex,
          startIndex = _state3.startIndex,
          endIndex = _state3.endIndex,
          token = _state3.token;

      var ret = void 0;

      if (status === STATUS.PAUSED || status === STATUS.STOPPED) {
        // Note: when it's paused, use a pending promise to holde the execution
        // so we can continue running after resume and resolve the promise
        var promiseItem = this.toResumePromises[this.state.token];
        return promiseItem ? promiseItem.promise.then(function () {
          return {};
        }) : { paused: true };
      }

      if (status === STATUS.PLAYING && nextIndex >= startIndex && nextIndex <= endIndex) {
        return Promise.resolve({ paused: false, complete: false });
      }

      // Note: make this function return promise, just in case
      // an async check is needed in future

      this.__end(END_REASON.COMPLETE);
      return Promise.resolve({ complete: true });
    }
  }, {
    key: '__createPromiseWaitForResume',
    value: function __createPromiseWaitForResume(token) {
      var _this4 = this;

      var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          _this4.toResumePromises[token] = {
            resolve: resolve,
            reject: reject,
            promise: p
          };
        }, 10);
      });

      return p;
    }
  }, {
    key: '__createPromiseForStop',
    value: function __createPromiseForStop(token, stopReason) {
      var _this5 = this;

      var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          _this5.toResumePromises[token] = {
            resolve: resolve,
            reject: reject,
            promise: p
          };

          reject(new Error('Stop reason: ' + stopReason));
        }, 10);
      });

      return p;
    }
  }, {
    key: '__end',
    value: function __end(reason, opts) {
      // Note: CANNOT end the player twice
      if (this.state.status === STATUS.STOPPED) return;

      if (Object.keys(END_REASON).indexOf(reason) === -1) {
        throw new Error('Player - __end: invalid reason, ' + reason);
      }

      var silent = opts && opts.silent;
      var noEndEvent = this.state.noEndEvent && reason === END_REASON.COMPLETE;

      if (!noEndEvent && !silent) {
        this.emit('END', { opts: opts, reason: reason, extra: this.state.extra });

        if (reason !== END_REASON.ERROR) {
          this.state.callback(null, reason);
        }
      }

      if (reason !== END_REASON.COMPLETE) {
        this.__createPromiseForStop(this.state.token, reason);
      }

      this.__setState({
        status: STATUS.STOPPED
      });
    }
  }, {
    key: '__errLog',
    value: function __errLog(err, errorIndex) {
      // Note: CANNOT log error if player is already stopped
      if (this.state.status === STATUS.STOPPED) {
        throw new Error(err);
      }

      this.emit('ERROR', {
        errorIndex: errorIndex !== undefined ? errorIndex : this.state.nextIndex,
        msg: err && err.message,
        extra: this.state.extra,
        restart: !!err.restart
      });
      this.state.callback(err, null);
      this.__end(END_REASON.ERROR);

      throw new Error(err);
    }
  }, {
    key: '__setNext',
    value: function __setNext(nextIndexPassed) {
      if (nextIndexPassed !== undefined && (nextIndexPassed < 0 || nextIndexPassed > this.state.resources.length)) {
        // Note: nextIndexPassed is allowed to be equal to resources.length
        // That means we run out of commands
        throw new Error('invalid nextIndexPassed ' + nextIndexPassed);
      }

      var _state4 = this.state,
          mode = _state4.mode,
          doneIndices = _state4.doneIndices,
          nextIndex = _state4.nextIndex,
          endIndex = _state4.endIndex,
          startIndex = _state4.startIndex,
          loopsCursor = _state4.loopsCursor,
          loopsEnd = _state4.loopsEnd;


      var nextIndexToSet = nextIndexPassed !== undefined ? nextIndexPassed : nextIndex + 1;

      var done = doneIndices.indexOf(nextIndex) === -1 ? [].concat(_toConsumableArray(doneIndices), [nextIndex]) : doneIndices;
      var lcur = loopsCursor;
      var next = null;

      if (mode === MODE.LOOP) {
        if (nextIndexToSet <= endIndex) {
          next = nextIndexToSet;
        } else if (loopsCursor >= loopsEnd) {
          next = nextIndexToSet;
        } else {
          lcur += 1;
          next = startIndex;
          done = [];
        }
      } else {
        next = nextIndexToSet;
      }

      this.__setState({
        loopsCursor: lcur,
        nextIndex: next,
        doneIndices: done
      });
    }
  }, {
    key: '__setState',
    value: function __setState(obj) {
      this.state = player_extends({}, this.state, obj);
    }
  }, {
    key: '__delay',
    value: function __delay(fn, timeout) {
      var _this6 = this;

      var past = 0;
      var timer = setInterval(function () {
        past += 1000;
        _this6.emit('DELAY', {
          extra: _this6.state.extra,
          total: timeout,
          past: past
        });
      }, 1000);

      return Object(utils["delay"])(fn, timeout).then(function (res) {
        if (timer) clearInterval(timer);
        return res;
      });
    }
  }]);

  return Player;
}();

event_emitter_default()(player_Player.prototype);

player_Player.C = player_Player.prototype.C = {
  MODE: MODE,
  STATUS: STATUS,
  END_REASON: END_REASON
};

var playerPool = {};

// factory function to return a player singleton
var getPlayer = function getPlayer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var state = arguments[1];

  var name = opts.name || 'testCase';
  delete opts.name;

  if (Object.keys(opts).length > 0) {
    playerPool[name] = new player_Player(opts, state);
  }

  if (!playerPool[name]) {
    throw new Error('player not initialized');
  }

  return playerPool[name];
};
// EXTERNAL MODULE: ./src/common/backup.js
var backup = __webpack_require__(321);

// EXTERNAL MODULE: ./src/common/log.ts
var common_log = __webpack_require__(11);
var log_default = /*#__PURE__*/__webpack_require__.n(common_log);

// EXTERNAL MODULE: ./src/common/convert_utils.js
var convert_utils = __webpack_require__(52);

// EXTERNAL MODULE: ./src/common/convert_suite_utils.js
var convert_suite_utils = __webpack_require__(64);

// CONCATENATED MODULE: ./src/config/preinstall_macros.js
/* harmony default export */ var preinstall_macros = ({
  DemoAutofill: {
    "CreationDate": "2019-01-28",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "store",
      "Target": "15",
      "Value": "!TIMEOUT_WAIT"
    }, {
      "Command": "store",
      "Target": "60",
      "Value": "!TIMEOUT_PAGELOAD"
    }, {
      "Command": "open",
      "Target": "https://docs.google.com/forms/d/e/1FAIpQLScPXRMtYI_KYL8J6fivHUV0hQKB7j1RtqTrBBUtEr8VMmyCqw/viewform",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"Kantu IDE\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[text()[contains(.,'Web Testing')]]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"Form Autofilling\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[text()[contains(.,\"General Web Automation\")]]",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "This would only work with English as browser language: //content[contains(text(),\"Choose\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"mG61Hd\"]/div/div[2]/div[2]/div[3]/div/div[2]/div[1]/div[1]/div[1]/content",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"mG61Hd\"]/div/div[2]/div[2]/div[3]/div/div[2]/div[2]/div[4]/content",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Pause for user to see filled out page",
      "Value": ""
    }, {
      "Command": "pause",
      "Target": "500",
      "Value": ""
    }, {
      "Command": "captureScreenshot",
      "Target": "AutoFill1stPage${!LOOP}",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "css=span.quantumWizButtonPaperbuttonLabel.exportLabel",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=entry.1572386418",
      "Value": "This is a single line test..."
    }, {
      "Command": "type",
      "Target": "name=entry.1569542411",
      "Value": "...and this a multiline test:\nLine2\nLine3"
    }, {
      "Command": "captureScreenshot",
      "Target": "AutoFill2ndPage${!LOOP}",
      "Value": ""
    }, {
      "Command": "pause",
      "Target": "1000",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "//*[@id=\"mG61Hd\"]/div/div[2]/div[3]/div[1]/div[1]/div[2]/div[2]",
      "Value": ""
    }, {
      "Command": "captureScreenshot",
      "Target": "AutoFill3rdPage${!LOOP}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "DemoAutofill macro completed (shown as notifcation because of #shownotification in the 3rd column)",
      "Value": "#shownotification"
    }]
  },
  DemoCanvas: {
    "CreationDate": "2019-1-26",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "resize",
      "Target": "800@700",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/canvas",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "link=LiterallyCanvas",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "First a simple clickAt demo (3 dots)",
      "Value": ""
    }, {
      "Command": "clickAt",
      "Target": "//*[@id=\"literally-canvas\"]/div[1]/div[1]/canvas[2]",
      "Value": "28,28"
    }, {
      "Command": "clickAt",
      "Target": "//*[@id=\"literally-canvas\"]/div[1]/div[1]/canvas[2]",
      "Value": "58,28"
    }, {
      "Command": "clickAt",
      "Target": "//*[@id=\"literally-canvas\"]/div[1]/div[1]/canvas[2]",
      "Value": "88,28"
    }, {
      "Command": "comment",
      "Target": "Just image search the canvas!",
      "Value": "88,28"
    }, {
      "Command": "visionLimitSearchArea",
      "Target": "element://*[@id=\"literally-canvas\"]/div[1]/div[1]/canvas[2]",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "canvas_3dots_verify_dpi_96.png",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/canvas",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "link=Mapbox",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Test: Embedded map (Mapbox)",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "id=demo",
      "Value": ""
    }, {
      "Command": "visionLimitSearchArea",
      "Target": "viewport",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "canvas_wyoming_dpi_96.png@0.60",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "#efp is short for \"#ElementFromPoint (${imageX},(${imageY})",
      "Value": ""
    }, {
      "Command": "clickAt",
      "Target": "#efp",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Now verify that the click (= the map) works as expected",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "canvas_wyoming_verify_dpi_96.png@0.5",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Test Google Maps: Find & click Hyde park, and check that its info bubble shows.",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/canvas#maps",
      "Value": ""
    }, {
      "Command": "visionLimitSearchArea",
      "Target": "viewport",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "canvas_hydepark_dpi_96.png@0.60",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=0",
      "Value": ""
    }, {
      "Command": "clickAt",
      "Target": "#efp",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "VISUAL VERIFICATION - we use 3 different options for demo purposes",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "(1) Image comparison",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "canvas_hydepark_verify_dpi_96.png@0.70",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "(2) OCR: Find text in page screenshot (not to be confused with sourceSearch)",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "ENG",
      "Value": "!ocrlanguage"
    }, {
      "Command": "OCRSearch",
      "Target": "hyde park london",
      "Value": "matches"
    }, {
      "Command": "if",
      "Target": "\"${matches}\" == \"0\"",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "The words \"hyde park london\" are not found on the canvas or website",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "(3) Extract text from a certain area (here: the map info box), and then search it for the text",
      "Value": ""
    }, {
      "Command": "OCRExtractRelative",
      "Target": "canvas_hydepark_extract_dpi_96_relative.png@0.70",
      "Value": "text"
    }, {
      "Command": "echo",
      "Target": "Text inside the pink box area is ${text}",
      "Value": "pink"
    }, {
      "Command": "storeEval",
      "Target": "a = storedVars['text']; a = a.replace(/( |\\n|\\r)/gm, \"\"); a",
      "Value": "text"
    }, {
      "Command": "echo",
      "Target": "After we removed space(s) and line break(s): Text = >${text}<",
      "Value": "green"
    }, {
      "Command": "storeEval",
      "Target": "var t = \"hydepark\", s = \"${text}\";  s = s.toLowerCase();  b= s.includes(t); b;",
      "Value": "textfound"
    }, {
      "Command": "if",
      "Target": "\"${textfound}\" == \"false\"",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Text not found on the map. What I found instead is ${text}",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }]
  },
  DemoComputerVision: {
    "CreationDate": "2019-1-31",
    "Commands": [{
      "Command": "open",
      "Target": "https://ocr.space/",
      "Value": ""
    }, {
      "Command": "resize",
      "Target": "1000@800",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "OCR.space is our own OCR API service, this demo is a test that our QA uses internally, too :-)",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Verify the 3rd party \"Share\" banner shows",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "true",
      "Value": "!errorignore"
    }, {
      "Command": "visualSearch",
      "Target": "democv_share.png@0.50",
      "Value": "matches"
    }, {
      "Command": "if",
      "Target": "${matches} == 0",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Browser width too small for \"share\" banner to show",
      "Value": "blue"
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "false",
      "Value": "!errorignore"
    }, {
      "Command": "type",
      "Target": "id=imageUrl",
      "Value": "https://a9t9.com/Content/Images/kantu-chrome-loop.png"
    }, {
      "Command": "select",
      "Target": "id=ocrLanguage",
      "Value": "label=English"
    }, {
      "Command": "comment",
      "Target": "viewport is default, but we add it here for test. Try \"full\" to see the differenc",
      "Value": "label=English"
    }, {
      "Command": "visionLimitSearchArea",
      "Target": "viewport",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "scroll start button into viewport",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "id=NoSearchable",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "we could use \"click link=Start OCR!\" but we use the image of the button instead",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "democv_startocr.png@0.60",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "#efp is short for \"#ElementFromPoint (${imageX},(${imageY})",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "#efp",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Wait for OCR to be completed",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "30",
      "Value": "!timeout_wait"
    }, {
      "Command": "visualAssert",
      "Target": "democv_ocrdone.png",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "10",
      "Value": "!timeout_wait"
    }, {
      "Command": "click",
      "Target": "link=Show Overlay",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Visually verify that the overlay is correct",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "democv_checkoverlay.png@0.60",
      "Value": ""
    }]
  },
  DemoDialogboxes: {
    "CreationDate": "2018-02-15",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/storeeval",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "Start..."
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/p[3]/button[1]",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Kantu IDE closes dialog boxes automatially. You need assertAlert (etc) only to verify expected texts.",
      "Value": ""
    }, {
      "Command": "assertAlert",
      "Target": "Hello\\nHow are you?",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/p[3]/button[2]",
      "Value": ""
    }, {
      "Command": "assertConfirmation",
      "Target": "Press a button!",
      "Value": ""
    }, {
      "Command": "answerOnNextPrompt",
      "Target": "I am Kantu for Chrome...",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/p[3]/button[3]",
      "Value": ""
    }, {
      "Command": "assertPrompt",
      "Target": "Please enter your name",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "Done!"
    }]
  },
  DemoDragDrop: {
    "CreationDate": "2017-10-18",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/demo/webtest/dragdrop/",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Reduce replay speed so we can better see what is going on...",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "medium",
      "Value": "!replayspeed"
    }, {
      "Command": "dragAndDropToObject",
      "Target": "id=one",
      "Value": "id=bin"
    }, {
      "Command": "dragAndDropToObject",
      "Target": "id=two",
      "Value": "id=bin"
    }, {
      "Command": "dragAndDropToObject",
      "Target": "id=three",
      "Value": "id=bin"
    }, {
      "Command": "dragAndDropToObject",
      "Target": "id=four",
      "Value": "id=bin"
    }, {
      "Command": "dragAndDropToObject",
      "Target": "id=five",
      "Value": "id=bin"
    }]
  },
  DemoDownload: {
    "CreationDate": "2018-11-23",
    "Commands": [{
      "Command": "store",
      "Target": "60",
      "Value": "!timeout_download"
    }, {
      "Command": "store",
      "Target": "10",
      "Value": "!timeout_wait"
    }, {
      "Command": "storeEval",
      "Target": "var d=new Date(); d.getFullYear() + '-' +((d.getMonth()+1))+'-' +d.getDate();",
      "Value": "todaydate"
    }, {
      "Command": "echo",
      "Target": "Today is ${todaydate}",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/filedownload",
      "Value": ""
    }, {
      "Command": "onDownload",
      "Target": "KantuTest1_${todaydate}.exe",
      "Value": "true"
    }, {
      "Command": "store",
      "Target": "${!runtime}",
      "Value": "starttime"
    }, {
      "Command": "click",
      "Target": "link=Kantu XModules for Windows",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "parseFloat(\"${!runtime}\")-parseFloat(\"${starttime}\")",
      "Value": "downloadtime"
    }, {
      "Command": "echo",
      "Target": "Download1 (Windows version) took ${downloadtime} seconds",
      "Value": "blue"
    }, {
      "Command": "onDownload",
      "Target": "KantuTest2_${todaydate}.exe",
      "Value": "true"
    }, {
      "Command": "store",
      "Target": "${!runtime}",
      "Value": "starttime"
    }, {
      "Command": "click",
      "Target": "link=*for macOS",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "parseFloat(\"${!runtime}\")-parseFloat(\"${starttime}\")",
      "Value": "downloadtime"
    }, {
      "Command": "echo",
      "Target": "Download2 (Mac) took ${downloadtime} seconds",
      "Value": "green"
    }, {
      "Command": "echo",
      "Target": "All done...",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "link=OnDownload command",
      "Value": ""
    }]
  },
  DemoExtract: {
    "CreationDate": "2018-05-28",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/storeeval",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Current page URL = ${!URL}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Current loop value = ${!LOOP}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "This macro shows various methods to extract and save data from a website",
      "Value": ""
    }, {
      "Command": "storeAttribute",
      "Target": "css=img.responsive-img@src",
      "Value": "mylink"
    }, {
      "Command": "echo",
      "Target": "href=${mylink}",
      "Value": ""
    }, {
      "Command": "storeAttribute",
      "Target": "css=img.responsive-img@alt",
      "Value": "myalttext"
    }, {
      "Command": "echo",
      "Target": "alt text = ${myalttext}",
      "Value": ""
    }, {
      "Command": "storeAttribute",
      "Target": "//input[@id='sometext']@size",
      "Value": "boxsize"
    }, {
      "Command": "echo",
      "Target": "input box size =${boxsize}",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "This box is ${boxsize} chars wide"
    }, {
      "Command": "storeEval",
      "Target": "document.title = ${boxsize};",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "70",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/h2[3]",
      "Value": ""
    }, {
      "Command": "storeText",
      "Target": "//*[@id=\"content\"]/div[2]/div/h2[3]",
      "Value": "myheader"
    }, {
      "Command": "echo",
      "Target": "header = ${myheader}",
      "Value": ""
    }, {
      "Command": "storeTitle",
      "Target": "",
      "Value": "mytitle"
    }, {
      "Command": "echo",
      "Target": "page title = ${mytitle}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "page title = ${mytitle}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "page title = ${mytitle}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "page title = ${mytitle}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Now test some extraction with storeValue",
      "Value": ""
    }, {
      "Command": "storeValue",
      "Target": "id=sometext",
      "Value": "mytext"
    }, {
      "Command": "select",
      "Target": "id=tesla",
      "Value": "label=Model Y"
    }, {
      "Command": "storeValue",
      "Target": "id=tesla",
      "Value": "mytesla"
    }, {
      "Command": "echo",
      "Target": "The text box contains [${mytext}] and the select box has the value [${mytesla}] selected",
      "Value": ""
    }, {
      "Command": "verifyValue",
      "Target": "id=tesla",
      "Value": "y"
    }, {
      "Command": "storeChecked",
      "Target": "name=vehicle",
      "Value": "hasbike"
    }, {
      "Command": "storeChecked",
      "Target": "xpath=(//input[@name='vehicle'])[2]",
      "Value": "hascar"
    }, {
      "Command": "storeChecked",
      "Target": "xpath=(//input[@name='vehicle'])[3]",
      "Value": "hasboat"
    }, {
      "Command": "echo",
      "Target": "User has bike:${hasbike}, car:${hascar}, boat:${hasboat}",
      "Value": "green"
    }, {
      "Command": "comment",
      "Target": "Search and extract directly from the page SOURCE",
      "Value": "y"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=[\\$\\£\\€](\\d+(?:\\.\\d{1,2})?)",
      "Value": "match1"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=[\\$\\£\\€](\\d+(?:\\.\\d{1,2})?)@2",
      "Value": "match2"
    }, {
      "Command": "comment",
      "Target": "You can also extract without regex with the * symbol",
      "Value": "match2b"
    }, {
      "Command": "sourceExtract",
      "Target": "$*<",
      "Value": "match2b"
    }, {
      "Command": "echo",
      "Target": "Coffee costs ${match1} and tea ${match2}",
      "Value": "blue"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=_width: (\\d+)",
      "Value": "match1"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=_width: (\\d+)@1,1",
      "Value": "match1group1"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=_width: (\\d+)@2",
      "Value": "match2"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=_width: (\\d+)@2,1",
      "Value": "match2group1"
    }, {
      "Command": "echo",
      "Target": "match1 = [${MATCH1}] (group1 = [${match1group1}]) match2 =  [${MATCH2}]  (group1 = [${MATCH2GROUP1}])",
      "Value": "blue"
    }, {
      "Command": "comment",
      "Target": "Extract Google Analytics ID",
      "Value": ""
    }, {
      "Command": "sourceExtract",
      "Target": "UA-*,",
      "Value": "ga_option1"
    }, {
      "Command": "sourceExtract",
      "Target": "regex=UA-[0-9]+-[0-9]+",
      "Value": "ga_option2"
    }, {
      "Command": "echo",
      "Target": "Google Analytics ID = ${ga_option2}",
      "Value": "pink"
    }, {
      "Command": "comment",
      "Target": "Some assertion test for QA",
      "Value": ""
    }, {
      "Command": "if",
      "Target": "${match2group1} != 22",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Regex Extraction failed for Match2(1):  ${match2group1}",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Last but not least, taking a screenshot is another way to extract data",
      "Value": ""
    }, {
      "Command": "captureScreenshot",
      "Target": "myscreenshot_${mytitle}",
      "Value": ""
    }, {
      "Command": "storeImage",
      "Target": "//*[@id=\"page-header\"]/div/div/h1",
      "Value": "pagetitle.png"
    }, {
      "Command": "comment",
      "Target": "Export images to download folder",
      "Value": ""
    }, {
      "Command": "localStorageExport",
      "Target": "myscreenshot_${mytitle}.png",
      "Value": ""
    }, {
      "Command": "localStorageExport",
      "Target": "pagetitle.png",
      "Value": ""
    }]
  },
  DemoFrames: {
    "CreationDate": "2019-01-28",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/demo/webtest/frames/",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Reduce replay speed so we can better see what is going on...",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "medium",
      "Value": "!replayspeed"
    }, {
      "Command": "selectFrame",
      "Target": "index=0",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "name=mytext1",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext1",
      "Value": "Frame1 (index=0)"
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=1",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "name=mytext2",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext2",
      "Value": "Frame2 (index=1)"
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=2",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "name=mytext3",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext3",
      "Value": "Frame3 (index=2)"
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=3",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "name=mytext4",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext4",
      "Value": "Frame4 (index=3)"
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=4",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "name=mytext5",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext5",
      "Value": "Frame5 (index=4)"
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=2",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext3",
      "Value": "now testing iframe inside this frame"
    }, {
      "Command": "selectFrame",
      "Target": "index=0",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"Kantu IDE\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "css=input.quantumWizTextinputSimpleinputInput.exportInput",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "css=input.quantumWizTextinputSimpleinputInput.exportInput",
      "Value": "iframe in frame: works!"
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=2",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=mytext3",
      "Value": "Test completed!"
    }]
  },

  DemoTakeScreenshots: {
    "CreationDate": "2018-1-25",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/blog/",
      "Value": ""
    }, {
      "Command": "captureEntirePageScreenshot",
      "Target": "a9t9blog",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "link=read more@POS=1",
      "Value": ""
    }, {
      "Command": "captureEntirePageScreenshot",
      "Target": "article1",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/blog/",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "link=read more@POS=2",
      "Value": ""
    }, {
      "Command": "captureEntirePageScreenshot",
      "Target": "article2",
      "Value": ""
    }, {
      "Command": "captureScreenshot",
      "Target": "article2_just_viewport",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "take screenshot of an _element_ with storeImage",
      "Value": ""
    }, {
      "Command": "storeImage",
      "Target": "link=The Autonomous Technology (A9T9) Blog",
      "Value": "blogtitle"
    }]
  },
  DemoIfElse: {
    "CreationDate": "2018-4-28",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/storeeval",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "How to use gotoIf and label(s) for flow control. For a while/endWhile demo, see the DemoSaveCSV macro.",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "(new Date().getHours())",
      "Value": "mytime"
    }, {
      "Command": "echo",
      "Target": "mytime = ${mytime}",
      "Value": ""
    }, {
      "Command": "if",
      "Target": "${mytime}  > 16",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Good afternoon!",
      "Value": ""
    }, {
      "Command": "else",
      "Target": "",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Good morning!",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "true",
      "Value": "!errorignore"
    }, {
      "Command": "storeAttribute",
      "Target": "//input[@id='sometext-WRONG-ID-TEST']@size",
      "Value": "boxsize"
    }, {
      "Command": "if",
      "Target": "${!LastCommandOK}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Boxsize is ${boxsize}",
      "Value": ""
    }, {
      "Command": "else",
      "Target": "",
      "Value": ""
    }, {
      "Command": "storeAttribute",
      "Target": "//input[@id='sometext']@size",
      "Value": "boxsize"
    }, {
      "Command": "echo",
      "Target": "Old ID not found, with new ID we have: Boxsize = ${boxsize}",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "false",
      "Value": "!errorignore"
    }, {
      "Command": "echo",
      "Target": "input box size =${boxsize}",
      "Value": ""
    }, {
      "Command": "gotoIf",
      "Target": "${boxsize} > 70",
      "Value": "BOX-TOO-BIG"
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "This box is ${boxsize} chars wide"
    }, {
      "Command": "storeEval",
      "Target": "document.title = ${boxsize};",
      "Value": ""
    }, {
      "Command": "gotoLabel",
      "Target": "END",
      "Value": ""
    }, {
      "Command": "label",
      "Target": "BOX-TOO-BIG",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Input box too big. This is just a test of gotoIf",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "document.title = \"Just a gotoIf test. This line should not be reached unless you edit the macro\"",
      "Value": ""
    }, {
      "Command": "label",
      "Target": "END",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "test case completed",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "",
      "Value": ""
    }, {
      "Command": "onError",
      "Target": "#goto",
      "Value": "fixerror"
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "this line works"
    }, {
      "Command": "type",
      "Target": "id=sometextXXXXX",
      "Value": "this line has the wrong ID..."
    }, {
      "Command": "echo",
      "Target": "this line is never reached, because of the error above",
      "Value": "blue"
    }, {
      "Command": "gotoLabel",
      "Target": "end-part2",
      "Value": ""
    }, {
      "Command": "label",
      "Target": "fixerror",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "here we can have code that handles the error..",
      "Value": "green"
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "Fix Error Section: This command works."
    }, {
      "Command": "label",
      "Target": "end-part2",
      "Value": ""
    }]
  },
  DemoIframe: {
    "CreationDate": "2019-1-28",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/iframes",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/p[1]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/h2[1]",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "First iframe: Embedded Google Doc",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "index=0",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"Kantu IDE\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"Web Testing\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"Form Autofilling\")]",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//span[contains(text(),\"General Web Automation\")]",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Back to main page (top frame)",
      "Value": ""
    }, {
      "Command": "selectFrame",
      "Target": "relative=top",
      "Value": ""
    }]
  },
  DemoIframe_with_XClick: {
    "CreationDate": "2018-12-20",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/iframes",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Scroll iframe with youtube video into view",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Alternatively: Use visionLimitSearchArea | FULL <= this searches whole page",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "//*[@id=\"content\"]/div[2]/div/p[5]",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Click Play button",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "youtube_play_button.png",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Check video plays and has right content",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "youtube_video_content_verify.png",
      "Value": ""
    }]
  },
  DemoImplicitWaiting: {
    "CreationDate": "2018-4-28",
    "Commands": [{
      "Command": "comment",
      "Target": "WaitForVisible is not part of implicit waiting",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/waitforvisible",
      "Value": ""
    }, {
      "Command": "waitForVisible",
      "Target": "css=#div1 > h1",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "css=#div1 > h1",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "20",
      "Value": "!timeout_wait"
    }, {
      "Command": "waitForVisible",
      "Target": "css=#div2 > h1",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "css=#div2 > h1",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Implicit waiting: Wait for elements to be loaded  or <timeout_wait> is reached",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/demo/webtest/implicitwaiting/",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "15",
      "Value": "!TIMEOUT_WAIT"
    }, {
      "Command": "assertText",
      "Target": "/html/body/header/center/p[2]",
      "Value": "Use the select box to start the timer..."
    }, {
      "Command": "select",
      "Target": "id=minutesSelect",
      "Value": "label=5 Seconds"
    }, {
      "Command": "echo",
      "Target": "The next element (target) is not available yet... Kantu waits for it up to ${!TIMEOUT_WAIT} seconds to appear.",
      "Value": "blue"
    }, {
      "Command": "click",
      "Target": "/html/body/header/center/img",
      "Value": ""
    }]
  },
  DemoCsvReadWithLoop: {
    "CreationDate": "2019-03-23",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "comment",
      "Target": "The file ReadCSVTestData.csv is pre-installed with Kantu.",
      "Value": ""
    }, {
      "Command": "csvRead",
      "Target": "ReadCSVTestData.csv",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Call subroutine for the actual form filling",
      "Value": ""
    }, {
      "Command": "run",
      "Target": "Sub_DemoCsvRead_FillForm",
      "Value": ""
    }]
  },
  DemoCsvReadWithWhile: {
    "CreationDate": "2018-1-25",
    "Commands": [{
      "Command": "store",
      "Target": "180",
      "Value": "!timeout_macro"
    }, {
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "comment",
      "Target": "The file ReadCSVTestData.csv is pre-installed with Kantu.",
      "Value": ""
    }, {
      "Command": "csvRead",
      "Target": "ReadCSVTestData.csv",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Status = ${!csvReadStatus}, line = ${!csvReadLineNumber}",
      "Value": ""
    }, {
      "Command": "while",
      "Target": "\"${!csvReadStatus}\" == \"OK\"",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "status = ${!csvReadStatus}, line = ${!csvReadLineNumber}",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Call subroutine for the actual form filling",
      "Value": ""
    }, {
      "Command": "run",
      "Target": "Sub_DemoCsvRead_FillForm",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "${!csvReadLineNumber}+1",
      "Value": "!csvReadLineNumber"
    }, {
      "Command": "store",
      "Target": "true",
      "Value": "!errorIgnore"
    }, {
      "Command": "echo",
      "Target": "Reading CSV line No.  ${!csvReadLineNumber} ",
      "Value": "!errorIgnore"
    }, {
      "Command": "csvRead",
      "Target": "ReadCSVTestData.csv",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "false",
      "Value": "!errorIgnore"
    }, {
      "Command": "endWhile",
      "Target": "",
      "Value": ""
    }]
  },
  DemoCsvSave: {
    "CreationDate": "2018-06-01",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/csvsave",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "new Date().getFullYear()+\"-\"+(new Date().getMonth()+1)+\"-\"+new Date().getDate()+\" \"+ new Date().getHours()+\":\" + new Date().getMinutes() + \":\" + new Date().getSeconds()",
      "Value": "timestamp"
    }, {
      "Command": "store",
      "Target": "${timestamp}",
      "Value": "!csvLine"
    }, {
      "Command": "echo",
      "Target": "First column in the CSV is time (${timestamp})",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Set i = 1 as we start the extraction with the 2nd table cell.",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "1",
      "Value": "i"
    }, {
      "Command": "while",
      "Target": "(${i} < 8)",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "${i}+1",
      "Value": "i"
    }, {
      "Command": "echo",
      "Target": "Current value of i = ${i}",
      "Value": "i"
    }, {
      "Command": "storeText",
      "Target": "//*[@id=\"gcw_mainFNGP5XSu6\"]/div[2]/table/tbody/tr[2]/td[${i}]/a",
      "Value": "c2"
    }, {
      "Command": "store",
      "Target": "${c2}",
      "Value": "!csvLine"
    }, {
      "Command": "echo",
      "Target": "Extracted Value for i=${i} is exchange rate = ${c2}",
      "Value": ""
    }, {
      "Command": "endWhile",
      "Target": "",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "${!csvLine}",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Append content of !csvLine to CSV file (or create file if none exists)",
      "Value": ""
    }, {
      "Command": "csvSave",
      "Target": "CurrencyConverterData",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "If needed, you can download (save) the CSV data from the CSV tab to the the download folder",
      "Value": ""
    }, {
      "Command": "localStorageExport",
      "Target": "currencyconverterdata.csv",
      "Value": ""
    }]
  },
  DemoPDFTest_with_OCR: {
    "CreationDate": "2019-01-18",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "if",
      "Target": "\"${!browser}\"!=\"chrome\"",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "This macro works only in Chrome - Firefox does not support automating PDF documents yet.",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "http://dl.a9t9.com/kantu/pdf-test.pdf",
      "Value": ""
    }, {
      "Command": "resize",
      "Target": "800@700",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Check that PDF is loaded OK",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Option 1: Check with image search",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "pdftest_salesquote.png@0.35",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Option 2: Check with text search  search",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "ENG",
      "Value": "!ocrlanguage"
    }, {
      "Command": "OCRSearch",
      "Target": "sales quote",
      "Value": "matches"
    }, {
      "Command": "echo",
      "Target": "Number of matches: ${matches}",
      "Value": "green"
    }, {
      "Command": "if",
      "Target": "\"${matches}\" == \"0\"",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Something wrong, I can not find the text <sales quote>",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Now extract the quote number and check that it is the correct one",
      "Value": ""
    }, {
      "Command": "OCRExtractRelative",
      "Target": "getquotenumber_dpi_96_relative.png@0.30",
      "Value": "q"
    }, {
      "Command": "echo",
      "Target": "Extracted text in pink area: >${q}<",
      "Value": "blue"
    }, {
      "Command": "storeEval",
      "Target": "a = storedVars['q']; a = a.replace(/( |\\n|\\r)/gm, \"\"); a",
      "Value": "q"
    }, {
      "Command": "echo",
      "Target": "Remove space(s) and line break(s): Quote Number: >${q}<",
      "Value": "green"
    }, {
      "Command": "storeEval",
      "Target": "var string = \"${q}\", substring = \"135\";  b= string.includes(substring); b;",
      "Value": "textfound"
    }, {
      "Command": "if",
      "Target": "\"${textfound}\" == \"true\"",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Quote number OK",
      "Value": "green"
    }, {
      "Command": "else",
      "Target": "",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Wrong quote number",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "The X... commands require the RealUser XModule to be installed",
      "Value": ""
    }, {
      "Command": "pause",
      "Target": "500",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Click on the document to give it the focus. For this, we click on the word \"SALES QUOTE\".",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "ocr=sales quote",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Scroll down to next page",
      "Value": ""
    }, {
      "Command": "if",
      "Target": "\"${!os}\"==\"mac\"",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Page scroll in macOS is CMD key + Down",
      "Value": ""
    }, {
      "Command": "XType",
      "Target": "${KEY_CMD+KEY_DOWN}",
      "Value": ""
    }, {
      "Command": "else",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Page scroll in Windows and Linux is PAGE DOWN key",
      "Value": ""
    }, {
      "Command": "XType",
      "Target": "${KEY_PAGE_DOWN}${KEY_PAGE_DOWN}",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Find link image and click it",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Wait 0.5 seconds for the PDF to complete scrolling. Otherwise if the Xclick image is found while the PDF still scrolls, the click goes to the wrong location.",
      "Value": ""
    }, {
      "Command": "pause",
      "Target": "500",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "ocr=website",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Check the right page is loaded (here: check a9t9 logo is there)",
      "Value": ""
    }, {
      "Command": "assertElementPresent",
      "Target": "//*[@id=\"logo\"]/img",
      "Value": ""
    }]
  },
  DemoStoreEval: {
    "CreationDate": "2018-4-28",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/storeeval",
      "Value": ""
    }, {
      "Command": "assertText",
      "Target": "//*[@id=\"content\"]/div[2]/div/h2[1]",
      "Value": "Input box to display some results"
    }, {
      "Command": "verifyText",
      "Target": "//*[@id=\"content\"]/div[2]/div/h2[1]",
      "Value": "Input box to display some results"
    }, {
      "Command": "verifyTitle",
      "Target": "Selenium IDE store, storeEval, Demo Page",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "Selenium IDE store, storeEval, Demo Page",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "storeEVAL can run Javascript... and store the result in a variable (optional)",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "document.title = \"123\";",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "123",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Use sourceSearch to assert we have the right Google Analytics Code",
      "Value": ""
    }, {
      "Command": "sourceSearch",
      "Target": "UA-86195842-1",
      "Value": "matches"
    }, {
      "Command": "if",
      "Target": "${matches} == 0",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Google Analytics ID is wrong!",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "First some basic calculations with STORE",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "15",
      "Value": "AAA"
    }, {
      "Command": "store",
      "Target": "10",
      "Value": "BBB"
    }, {
      "Command": "storeEval",
      "Target": "storedVars['AAA']-storedVars['BBB']",
      "Value": "CCC"
    }, {
      "Command": "echo",
      "Target": "${CCC}",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "document.title = \"${CCC}\";",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "5",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "storedVars gives access to VARIABLE, ${...} to VALUE",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "SELenium IDe",
      "Value": "AAA"
    }, {
      "Command": "storeEval",
      "Target": "storedVars['AAA'].toUpperCase()",
      "Value": "CCC"
    }, {
      "Command": "echo",
      "Target": "${CCC}",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "${CCC}"
    }, {
      "Command": "echo",
      "Target": "Generate TODAYs date in in YYYY-MM-DD format ",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "var d= new Date(); var m=((d.getMonth()+1)<10)?'0'+(d.getMonth()+1):(d.getMonth()+1); d.getFullYear()+\"-\"+m+\"-\"+d.getDate();",
      "Value": "mydate"
    }, {
      "Command": "echo",
      "Target": "Today is ${mydate}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Pick a random item from a list, useful for data-driven testing",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "new Array ('cat','dog','fish','dog','??','frog','?','dog','??','horse','??elephant')",
      "Value": "names"
    }, {
      "Command": "storeEval",
      "Target": "storedVars['names'].length",
      "Value": "length"
    }, {
      "Command": "echo",
      "Target": "array length = ${length}",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "Math.floor(Math.random()*storedVars['length'])",
      "Value": "num"
    }, {
      "Command": "echo",
      "Target": "num=${num}",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "The next command picks the random item",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "storedVars['names'][${num}]",
      "Value": "myrandomname"
    }, {
      "Command": "store",
      "Target": "Today is ${mydate}, and we draw a ${myrandomname}",
      "Value": "output"
    }, {
      "Command": "echo",
      "Target": "To is ${mydate}, and we draw a ${myrandomname}",
      "Value": "${output}"
    }, {
      "Command": "type",
      "Target": "id=sometext",
      "Value": "${output}"
    }, {
      "Command": "if",
      "Target": "parseFloat(\"${!runtime}\") > 20",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Runtime too slow (${!runtime} seconds), test failed",
      "Value": ""
    }, {
      "Command": "else",
      "Target": "",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Runtime Ok, test passed!",
      "Value": "green"
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "With @POS you click on the (in this case) 3rd link with the same name. Great for looping over a list of links with the same name.",
      "Value": "green"
    }, {
      "Command": "clickAndWait",
      "Target": "link=This link@POS=3",
      "Value": ""
    }]
  },
  DemoTabs: {
    "CreationDate": "2017-10-15",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/tabs",
      "Value": ""
    }, {
      "Command": "click",
      "Target": "link=Open new web page in new browser tab",
      "Value": ""
    }, {
      "Command": "selectWindow",
      "Target": "tab=1",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "*1* TAB1",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext1",
      "Value": "this is tab 1"
    }, {
      "Command": "click",
      "Target": "link=Open yet another web page in a new browser tab",
      "Value": ""
    }, {
      "Command": "selectWindow",
      "Target": "tab=2",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "*2* TAB2",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext2",
      "Value": "And this is tab 2!"
    }, {
      "Command": "selectWindow",
      "Target": "tab=1",
      "Value": ""
    }, {
      "Command": "assertTitle",
      "Target": "*1* TAB1",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "id=sometext1",
      "Value": "Now back in tab 1 - test done!"
    }, {
      "Command": "comment",
      "Target": "We can also open new tabs",
      "Value": ""
    }, {
      "Command": "selectWindow",
      "Target": "tab=open",
      "Value": "https://a9t9.com"
    }, {
      "Command": "selectWindow",
      "Target": "tab=open",
      "Value": "https://ocr.space"
    }, {
      "Command": "type",
      "Target": "id=imageUrl",
      "Value": "Kantu Tab Test done"
    }]
  },
  DemoVisualUITest: {
    "CreationDate": "2018-6-26",
    "Commands": [{
      "Command": "open",
      "Target": "https://a9t9.com/",
      "Value": ""
    }, {
      "Command": "resize",
      "Target": "1024@768",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "uitest_logo_wide_dpi_96.png@0.70",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "uitest_download_dpi_96.png@0.70",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "uitest_share_dpi_96.png@0.70",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Resize to iPhone6 screen size",
      "Value": ""
    }, {
      "Command": "resize",
      "Target": "375@768",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "uitest_logo_mobile_dpi_96.png",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Missing menu is critical, so we use ASSERT (instead of just VERIFY)",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "uitest_hamburger_dpi_96.png",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Check that Share buttons do not show",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "At this point, page is surely loaded => reduce wait for (normally missing) image",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "2",
      "Value": "!timeout_wait"
    }, {
      "Command": "visualSearch",
      "Target": "uitest_share_dpi_96.png@0.70",
      "Value": "count"
    }, {
      "Command": "if",
      "Target": "${count} > 0",
      "Value": ""
    }, {
      "Command": "throwError",
      "Target": "Share buttons should NOT show on mobile phones",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Restore default wait (not really needed here, since macro stops now anyway)",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "10",
      "Value": "!timeout_wait"
    }, {
      "Command": "comment",
      "Target": "Done, enlarge browser again",
      "Value": ""
    }, {
      "Command": "resize",
      "Target": "1024@768",
      "Value": ""
    }]
  },
  DemoXType: {
    "CreationDate": "2019-01-28",
    "Commands": [{
      "Command": "store",
      "Target": "medium",
      "Value": "!replayspeed"
    }, {
      "Command": "comment",
      "Target": "Make sure the browser is in the foreground, so it receives the XTYPE keystrokes",
      "Value": ""
    }, {
      "Command": "bringBrowserToForeground",
      "Target": "",
      "Value": ""
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/xtype",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "To save the page, open the browser save dialog with a shortcut",
      "Value": ""
    }, {
      "Command": "if",
      "Target": "\"${!os}\"==\"mac\"",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Save web page in macOS is CMD+S",
      "Value": ""
    }, {
      "Command": "XType",
      "Target": "${KEY_CMD+KEY_S}",
      "Value": ""
    }, {
      "Command": "else",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Save web page in Windows and Linux is CTRL+S",
      "Value": ""
    }, {
      "Command": "XType",
      "Target": "${KEY_CTRL+KEY_S}",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Generate today's date and time ",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "var d= new Date(); var m=((d.getMonth()+1)<10)?'0'+(d.getMonth()+1):(d.getMonth()+1); d.getFullYear()+\"-\"+m+\"-\"+d.getDate();",
      "Value": "mydate"
    }, {
      "Command": "storeEval",
      "Target": "new Date().getHours()+\"-\" + new Date().getMinutes() + \"-\" + new Date().getSeconds()",
      "Value": "mytime"
    }, {
      "Command": "echo",
      "Target": "Today is ${mydate}, and the time is ${mytime}",
      "Value": "blue"
    }, {
      "Command": "comment",
      "Target": "Wait for the dialog to appear before sending the next keystrokes",
      "Value": ""
    }, {
      "Command": "pause",
      "Target": "2000",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Send the new file name to the dialog and press ENTER",
      "Value": "blue"
    }, {
      "Command": "XType",
      "Target": "Page_saved_by_Kantu_${mydate}_${mytime}",
      "Value": ""
    }, {
      "Command": "XType",
      "Target": "${KEY_ENTER}",
      "Value": ""
    }]
  },
  DemoXClick: {
    "CreationDate": "2018-10-24",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/demo/draw",
      "Value": ""
    }, {
      "Command": "clickAndWait",
      "Target": "link=Kantu will click this link",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Kantu controls the mouse cursor now",
      "Value": "#shownotification"
    }, {
      "Command": "comment",
      "Target": "Use image search to find the drawing applet",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "draw_box_dpi_96.png",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "x=${!imagex} y=${!imagey}",
      "Value": "green"
    }, {
      "Command": "XClick",
      "Target": "${!imagex},${!imagey}",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "${!imagex}",
      "Value": "x"
    }, {
      "Command": "store",
      "Target": "${!imagey}",
      "Value": "y"
    }, {
      "Command": "comment",
      "Target": "Draw top line --->",
      "Value": ""
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#down"
    }, {
      "Command": "storeEval",
      "Target": "${x}+50",
      "Value": "x"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#move"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#up"
    }, {
      "Command": "comment",
      "Target": "Draw right line down",
      "Value": ""
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#down"
    }, {
      "Command": "storeEval",
      "Target": "${y}+50",
      "Value": "y"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#move"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#up"
    }, {
      "Command": "comment",
      "Target": "Draw bottom line <---",
      "Value": ""
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#down"
    }, {
      "Command": "storeEval",
      "Target": "${x}-50",
      "Value": "x"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#move"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#up"
    }, {
      "Command": "comment",
      "Target": "Draw left line up",
      "Value": ""
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#down"
    }, {
      "Command": "storeEval",
      "Target": "${y}-50",
      "Value": "y"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#move"
    }, {
      "Command": "XMove",
      "Target": "${x},${y}",
      "Value": "#up"
    }, {
      "Command": "comment",
      "Target": "Check that the square was drawn ok",
      "Value": ""
    }, {
      "Command": "visualVerify",
      "Target": "draw_square_dpi_96.png",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Now type some text. First click the TEXT icon",
      "Value": ""
    }, {
      "Command": "XClickRelative",
      "Target": "draw_aa_dpi_96_relative.png",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Now click the place where the text should start (80px below the square)",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "${y}+80",
      "Value": "y"
    }, {
      "Command": "echo",
      "Target": "x=${x}, y=${y}",
      "Value": "blue"
    }, {
      "Command": "XClick",
      "Target": "${x},${y}",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Send keystrokes, and demo the use of the BACKSPACE special key.",
      "Value": ""
    }, {
      "Command": "XType",
      "Target": "Kantuuu${KEY_BACKSPACE}${KEY_BACKSPACE} can draw and write.",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "DemoXClick completed",
      "Value": "#shownotification"
    }]
  },
  DemoXDesktopAutomation: {
    "CreationDate": "2019-02-13",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/x/desktop-automation#demo",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Running DESKTOP image search now",
      "Value": "#shownotification"
    }, {
      "Command": "XDesktopAutomation",
      "Target": "true",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Limit the search area for better performance",
      "Value": ""
    }, {
      "Command": "run",
      "Target": "Sub_XDesktopAutomation_Area",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Log button can be greyed out - try both options",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "true",
      "Value": "!errorignore"
    }, {
      "Command": "comment",
      "Target": "Log button can have white or grey background",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "desktop_logstab_white_dpi_96.png@0.5",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "false",
      "Value": "!errorignore"
    }, {
      "Command": "if",
      "Target": "\"${!statusOK}\" == \"false\"",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "desktop_logstab_grey_dpi_96.png@0.5",
      "Value": ""
    }, {
      "Command": "endif",
      "Target": "",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Press Clear button",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "desktop_clearbutton_dpi_96.png@0.5",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Log cleared by macro (clear button pressed)",
      "Value": "blue"
    }, {
      "Command": "comment",
      "Target": "Now search and open other tabs",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "desktop_vartab_dpi_96.png@0.5",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "desktop_scrtab_dpi_96.png@0.4",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "desktop_vitab_dpi_96.png@0.4",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Check that the correct tab is selected",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "desktop_checktab_dpi_96.png@0.65",
      "Value": ""
    }]
  },
  DemoXDesktopAutomation_OCR: {
    "CreationDate": "2019-02-15",
    "Commands": [{
      "Command": "store",
      "Target": "fast",
      "Value": "!replayspeed"
    }, {
      "Command": "open",
      "Target": "https://a9t9.com/kantu/x/desktop-automation#ocr",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Running DESKTOP image search now",
      "Value": "#shownotification"
    }, {
      "Command": "XDesktopAutomation",
      "Target": "true",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Limit the search area for better performance",
      "Value": ""
    }, {
      "Command": "run",
      "Target": "Sub_XDesktopAutomation_Area",
      "Value": ""
    }, {
      "Command": "store",
      "Target": "eng",
      "Value": "!ocrlanguage"
    }, {
      "Command": "comment",
      "Target": "Log button can be greyed out - try both options",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "ocr=Logs@pos=1",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "ocr=Clear@pos=1",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "\"Clear\" button pressed by macro. The button was found at ${!OCRX}, ${!OCRY})",
      "Value": "blue"
    }, {
      "Command": "XClick",
      "Target": "ocr=Screenshots@pos=1",
      "Value": ""
    }, {
      "Command": "XClick",
      "Target": "ocr=Visual@pos=1",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Check the right tab is selected",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "desktop_checktab_dpi_96.png@0.65",
      "Value": ""
    }]
  },
  Sub_XDesktopAutomation_Area: {
    "CreationDate": "2019-03-25",
    "Commands": [{
      "Command": "comment",
      "Target": "SUBROUTINE used by DemoXDesktopAutomation and DemoXDesktopAutomation_OCR",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "It uses two anchor images to define the new search area",
      "Value": ""
    }, {
      "Command": "visualAssert",
      "Target": "desktop_area_topleft_dpi_96.png@0.6",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Area top left corner = bottom left corner of found image ",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "${!imagex}-${!imagewidth}/2",
      "Value": "x1"
    }, {
      "Command": "storeEval",
      "Target": "${!imagey}+${!imageheight}/2",
      "Value": "y1"
    }, {
      "Command": "visualAssert",
      "Target": "desktop_area_bottomright_dpi_96.png@0.4",
      "Value": ""
    }, {
      "Command": "comment",
      "Target": "Area bottom right corner = top right corner of found image ",
      "Value": ""
    }, {
      "Command": "storeEval",
      "Target": "${!imagex}+${!imagewidth}/2",
      "Value": "x2"
    }, {
      "Command": "storeEval",
      "Target": "${!imagey}-${!imageheight}/2",
      "Value": "y2"
    }, {
      "Command": "echo",
      "Target": "x1=${x1}, y1=${y1}, x2=${x2}, y2=${y2}",
      "Value": "blue"
    }, {
      "Command": "visionLimitSearchArea",
      "Target": "area=${x1},${y1},${x2},${y2}",
      "Value": ""
    }]
  },
  Sub_DemoCsvRead_FillForm: {
    "CreationDate": "2019-03-29",
    "Commands": [{
      "Command": "comment",
      "Target": "Subroutine used by DemoCsvReadWithLoop and DemoCsvReadWithWhile",
      "Value": ""
    }, {
      "Command": "echo",
      "Target": "Inside subroutine: Status = ${!csvReadStatus}, Line = ${!csvReadLineNumber}",
      "Value": "green"
    }, {
      "Command": "open",
      "Target": "https://docs.google.com/forms/d/e/1FAIpQLScGWVjexH2FNzJqPACzuzBLlTWMJHgLUHjxehtU-2cJxtu6VQ/viewform",
      "Value": ""
    }, {
      "Command": "type",
      "Target": "name=entry.933434489",
      "Value": "${!COL1}_${!csvReadLineNumber}"
    }, {
      "Command": "type",
      "Target": "name=entry.2004105717",
      "Value": "${!COL2}"
    }, {
      "Command": "type",
      "Target": "name=entry.1382578664",
      "Value": "${!COL3}"
    }, {
      "Command": "clickAndWait",
      "Target": "//*[@id=\"mG61Hd\"]/div/div[2]/div[3]/div[1]/div/div/content/span",
      "Value": ""
    }]
  }
});
// CONCATENATED MODULE: ./src/config/preinstall_suites.js
/* harmony default export */ var preinstall_suites = ([{
  "creationDate": "2018-05-12",
  "name": "DemoLoopsInsideTestSuite",
  "fold": true,
  "macros": [{
    "macro": "DemoDragDrop",
    "loops": 3
  }, {
    "macro": "DemoIfElse",
    "loops": 3
  }, {
    "macro": "DemoStoreEval",
    "loops": 3
  }]
}, {
  "creationDate": "2018-05-31",
  "name": "KantuCoreTest",
  "fold": true,
  "macros": [{
    "macro": "DemoAutofill",
    "loops": 1
  }, {
    "macro": "DemoCanvas",
    "loops": 1
  }, {
    "macro": "DemoComputerVision",
    "loops": 1
  }, {
    "macro": "DemoCsvReadWithLoop",
    "loops": 3
  }, {
    "macro": "DemoCsvReadWithWhile",
    "loops": 1
  }, {
    "macro": "DemoCsvSave",
    "loops": 1
  }, {
    "macro": "DemoDialogboxes",
    "loops": 1
  }, {
    "macro": "DemoDownload",
    "loops": 1
  }, {
    "macro": "DemoDragDrop",
    "loops": 1
  }, {
    "macro": "DemoExtract",
    "loops": 1
  }, {
    "macro": "DemoFrames",
    "loops": 1
  }, {
    "macro": "DemoTakeScreenshots",
    "loops": 1
  }, {
    "macro": "DemoIfElse",
    "loops": 1
  }, {
    "macro": "DemoIframe",
    "loops": 1
  }, {
    "macro": "DemoImplicitWaiting",
    "loops": 1
  }, {
    "macro": "DemoStoreEval",
    "loops": 1
  }, {
    "macro": "DemoTabs",
    "loops": 1
  }, {
    "macro": "DemoVisualUITest",
    "loops": 1
  }]
}, {
  "creationDate": "2019-01-25",
  "name": "XModulesTest",
  "fold": true,
  "macros": [{
    "macro": "DemoIframe_with_XClick",
    "loops": 1
  }, {
    "macro": "DemoPDFTest_with_OCR",
    "loops": 1
  }, {
    "macro": "DemoXClick",
    "loops": 1
  }, {
    "macro": "DemoXType",
    "loops": 1
  }]
}, {
  "creationDate": "2019-03-15",
  "name": "DesktopAutomationTest",
  "fold": true,
  "macros": [{
    "macro": "DemoXDesktopAutomation",
    "loops": 1
  }, {
    "macro": "DemoXDesktopAutomation_OCR",
    "loops": 1
  }]
}]);
// EXTERNAL MODULE: ./src/services/filesystem/kantu-file-access.ts
var kantu_file_access = __webpack_require__(719);

// EXTERNAL MODULE: ./src/services/storage/native_filesystem_storage.ts
var native_filesystem_storage = __webpack_require__(85);

// EXTERNAL MODULE: ./src/services/kv_data/macro_extra_data.ts
var macro_extra_data = __webpack_require__(144);

// EXTERNAL MODULE: ./src/services/kv_data/test_suite_extra_data.ts
var test_suite_extra_data = __webpack_require__(328);

// CONCATENATED MODULE: ./src/models/test_suite_model.js




var test_suite_model_model = {
  table: db["default"].testSuites,
  list: function list() {
    return db["default"].testSuites.toArray();
  },
  insert: function insert(data) {
    if (!data.name) {
      throw new Error('Model TestSuite - insert: missing name');
    }

    if (!Array.isArray(data.cases)) {
      throw new Error('Model TestSuite - insert: cases should an array');
    }

    data.updateTime = new Date() * 1;
    data.id = Object(utils["uid"])();
    return db["default"].testSuites.add(data);
  },
  bulkInsert: function bulkInsert(tcs) {
    var list = tcs.map(function (data) {
      if (!data.name) {
        throw new Error('Model TestSuite - insert: missing name');
      }

      if (!Array.isArray(data.cases)) {
        throw new Error('Model TestSuite - insert: cases should an array');
      }

      data.updateTime = new Date() * 1;
      data.id = Object(utils["uid"])();

      return data;
    });

    return db["default"].testSuites.bulkAdd(list);
  },
  update: function update(id, data) {
    return db["default"].testSuites.update(id, data);
  },
  remove: function remove(id) {
    return db["default"].testSuites.delete(id);
  }
};

/* harmony default export */ var test_suite_model = (test_suite_model_model);

function normalizeTestSuite(ts) {
  return Object(ts_utils["pickIfExist"])(['id', 'name', 'cases'], ts);
}
// EXTERNAL MODULE: ./node_modules/reselect/es/index.js
var reselect_es = __webpack_require__(154);

// EXTERNAL MODULE: ./src/common/constant.js
var constant = __webpack_require__(15);

// CONCATENATED MODULE: ./src/recomputed/index.js
var recomputed_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var getMacrosWithAllInfo = Object(reselect_es["a" /* createSelector */])([function (state) {
  return state.editor.testCases;
}, function (state) {
  return state.editor.macrosExtra;
}], function (macros, macrosExtra) {
  var getMacroKey = function getMacroKey(macro) {
    return macro.id;
  };

  return macros.map(function (macro) {
    var key = getMacroKey(macro);
    var extra = macrosExtra[key];

    return recomputed_extends({}, macro, extra || {});
  });
});

var getTestSuitesWithAllInfo = Object(reselect_es["a" /* createSelector */])([function (state) {
  return state.editor.testSuites;
}, function (state) {
  return state.editor.testSuitesExtra;
}], function (testSuites, testSuitesExtra) {
  var getKey = function getKey(ts) {
    return ts.id;
  };

  return testSuites.map(function (ts) {
    var key = getKey(ts);
    var extra = testSuitesExtra[key];

    return recomputed_extends({}, ts, extra || {});
  });
});

var getCurrentMacroId = Object(reselect_es["a" /* createSelector */])([function (state) {
  return state.editor.editing.meta.src;
}], function (src) {
  return src ? src.id : constant["j" /* UNTITLED_ID */];
});

var getBreakpoints = Object(reselect_es["a" /* createSelector */])([function (state) {
  return state.editor.macrosExtra;
}, getCurrentMacroId], function (macrosExtra, macroId) {
  var extra = macrosExtra[macroId] || {};
  return extra.breakpointIndices || [];
});

function getBreakpointsByMacroId(state, macroId) {
  var macrosExtra = state.editor.macrosExtra;
  var extra = macrosExtra[macroId] || {};

  return extra.breakpointIndices || [];
}

var getDoneCommandIndices = Object(reselect_es["a" /* createSelector */])([function (state) {
  return state.editor.macrosExtra;
}, getCurrentMacroId], function (macrosExtra, macroId) {
  var extra = macrosExtra[macroId] || {};
  return extra.doneCommandIndices || [];
});

var getErrorCommandIndices = Object(reselect_es["a" /* createSelector */])([function (state) {
  return state.editor.macrosExtra;
}, getCurrentMacroId], function (macrosExtra, macroId) {
  var extra = macrosExtra[macroId] || {};
  return extra.errorCommandIndices || [];
});

function hasUnsavedMacro(state) {
  var editor = state.editor;
  var editing = editor.editing,
      editingSource = editor.editingSource,
      activeTab = editor.activeTab;


  if (!editing.meta.src) return true;

  switch (activeTab) {
    case 'table_view':
      {
        var _ref = editing.meta || {},
            hasUnsaved = _ref.hasUnsaved;

        return hasUnsaved;
      }

    case 'source_view':
      {
        return editingSource.original !== editingSource.current;
      }

    default:
      throw new Error('Unknown activeTab');
  }
}

function editorSelectedCommand(state) {
  var _state$editor$editing = state.editor.editing,
      meta = _state$editor$editing.meta,
      commands = _state$editor$editing.commands;


  if (!meta || meta.selectedIndex === -1) return null;
  return commands[meta.selectedIndex] || null;
}
// EXTERNAL MODULE: ./src/components/prompt.tsx
var components_prompt = __webpack_require__(323);

// EXTERNAL MODULE: ./src/common/command.ts
var common_command = __webpack_require__(362);

// EXTERNAL MODULE: ./src/services/player/call_stack/call_stack.ts
var call_stack = __webpack_require__(112);

// EXTERNAL MODULE: ./src/services/player/macro.ts
var player_macro = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(25);
var input_default = /*#__PURE__*/__webpack_require__.n(input);

// CONCATENATED MODULE: ./src/components/save_test_case.js






var save_test_case_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var save_test_case_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function save_test_case_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var save_test_case_SaveAsModal = function (_React$Component) {
  _inherits(SaveAsModal, _React$Component);

  function SaveAsModal() {
    var _ref;

    var _temp, _this, _ret;

    save_test_case_classCallCheck(this, SaveAsModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SaveAsModal.__proto__ || Object.getPrototypeOf(SaveAsModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  save_test_case_createClass(SaveAsModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.name) {
        this.setState({ name: this.props.name });
      }

      setTimeout(function () {
        var input = _this2.inputSaveTestCase.refs.input;
        input.focus();
        input.selectionStart = input.selectionEnd = input.value.length;
      }, 100);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'Save macro as..',
          okText: 'Save',
          cancelText: 'Cancel',
          visible: true,
          onOk: function onOk() {
            return _this3.props.onOk(_this3.state.name);
          },
          onCancel: this.props.onCancel,
          className: 'save-modal'
        },
        react_default.a.createElement(input_default.a, {
          style: { width: '100%' },
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 13) _this3.props.onOk(_this3.state.name);
          },
          onChange: function onChange(e) {
            return _this3.setState({ name: e.target.value });
          },
          value: this.state.name || '',
          placeholder: 'macro name',
          ref: function ref(el) {
            _this3.inputSaveTestCase = el;
          }
        })
      );
    }
  }]);

  return SaveAsModal;
}(react_default.a.Component);

var getContainer = function getContainer() {
  var id = 'save_test_case_container';
  var $el = document.getElementById(id);

  if ($el) return $el;

  var $new = document.createElement('div');
  $new.id = id;
  document.body.appendChild($new);
  return $new;
};

var getTestCaseName = function getTestCaseName(state) {
  var src = state.editor.editing.meta.src;

  return src && src.name && src.name.length ? src.name : 'Untitled';
};

var save_test_case_tryToSave = function tryToSave(store, testCaseName) {
  var $container = getContainer();
  var state = store.getState();
  var existed = !!state.editor.editing.meta.src;

  if (existed) {
    return store.dispatch(saveEditingAsExisted()).then(function () {
      return true;
    });
  }

  return new Promise(function (resolve, reject) {
    var onSave = function onSave(name) {
      return store.dispatch(saveEditingAsNew(name)).then(function () {
        message_default.a.success('successfully saved!', 1.5);
        resolve(true);
      }, function (e) {
        message_default.a.error(e.message, 1.5);
        reject(e);
      });
    };

    react_dom_default.a.render(react_default.a.createElement(save_test_case_SaveAsModal, {
      name: testCaseName,
      onOk: onSave,
      onCancel: function onCancel() {
        return resolve(false);
      }
    }), $container);
    // TODO
  }).then(function (saved) {
    react_dom_default.a.unmountComponentAtNode($container);
    return saved;
  }).catch(function (e) {
    console.error(e.message);
    throw e;
  });
};

var save_test_case_factory = function factory(store) {
  return {
    saveOrNot: function saveOrNot(options) {
      var state = store.getState();
      var hasUnsaved = hasUnsavedMacro(state);
      var opts = save_test_case_extends({
        getTitle: function getTitle(data) {
          return 'Unsaved changes in macro "' + data.macroName + '"';
        },
        getContent: function getContent(data) {
          return 'Do you want to discard or save these changes?';
        },
        okText: 'Save',
        cancelText: 'Discard'
      }, options || {});

      if (!hasUnsaved) return Promise.resolve(true);

      return new Promise(function (resolve, reject) {
        var macroName = getTestCaseName(state);

        modal_default.a.confirm({
          title: opts.getTitle({ macroName: macroName }),
          content: opts.getContent({ macroName: macroName }),
          okText: opts.okText,
          cancelText: opts.cancelText,
          onOk: function onOk() {
            save_test_case_tryToSave(store).then(resolve, reject);
            return Promise.resolve(true);
          },
          onCancel: function onCancel() {
            resolve(false);
            return Promise.resolve(true);
          }
        });
      });
    },
    save: function save(defaultName) {
      var state = store.getState();
      var hasUnsaved = hasUnsavedMacro(state);

      if (!hasUnsaved) return Promise.resolve(true);
      return save_test_case_tryToSave(store, defaultName);
    }
  };
};

var save_test_case_api = void 0;

function getSaveTestCase(store) {
  if (save_test_case_api) return save_test_case_api;
  if (!store) throw new Error('must provide store');

  save_test_case_api = save_test_case_factory(store);
  return save_test_case_api;
}
// CONCATENATED MODULE: ./src/actions/index.js






var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var actions_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function actions_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

 /* global PREINSTALL_CSV_LIST PREINSTALL_VISION_LIST */


























var recordedCount = 0;

var actions_saveEditing = function saveEditing(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;

  var _getState = getState(),
      editor = _getState.editor;

  var editing = editor.editing,
      macrosExtra = editor.macrosExtra,
      testSuitesExtra = editor.testSuitesExtra;


  common_storage["default"].set('editing', editing);
};

var actions_saveMacroExtra = function saveMacroExtra(id) {
  return function (_ref2) {
    var dispatch = _ref2.dispatch,
        getState = _ref2.getState;

    var state = getState();
    var macroId = id || getCurrentMacroId(state);
    var updated = state.editor.macrosExtra[macroId] || {};

    return Object(macro_extra_data["getMacroExtraKeyValueData"])().update(macroId, function (data) {
      return actions_extends({}, data, updated);
    });
  };
};

var saveConfig = function () {
  var lastSize = {};

  return function (_ref3) {
    var dispatch = _ref3.dispatch,
        getState = _ref3.getState;

    var _getState2 = getState(),
        config = _getState2.config;

    config = config || {};

    var savedSize = config.size ? config.size[config.showSidebar ? 'with_sidebar' : 'standard'] : null;
    var finalSize = savedSize || (config.showSidebar ? {
      width: 850,
      height: 775
    } : {
      width: 520,
      height: 775
    });

    if (finalSize.width !== lastSize.width || finalSize.height !== lastSize.height) {
      common_storage["default"].get('config').then(function (oldConfig) {
        if ((oldConfig && oldConfig.showSidebar) === config.showSidebar) return;

        if (finalSize.width !== window.outerWidth || finalSize.height !== window.outerHeight) {
          ipc_cs["a" /* default */].ask('PANEL_RESIZE_WINDOW', { size: finalSize });
        }
      });
    }

    common_storage["default"].set('config', config);
    lastSize = finalSize;
  };
}();

var toLower = function toLower(str) {
  return (str || '').toLowerCase();
};

function findSameNameMacro(name, macros) {
  return macros.find(function (tc) {
    return toLower(tc.name) === toLower(name);
  });
}

function findSameNameTestSuite(name, testSuites) {
  return testSuites.find(function (ts) {
    return toLower(ts.name) === toLower(name);
  });
}

function setRoute(data) {
  return {
    type: types.SET_ROUTE,
    data: data
  };
}

function startRecording() {
  recordedCount = 0;

  return {
    types: type3('START_RECORDING'),
    promise: function promise() {
      setTimeout(function () {
        ipc_cs["a" /* default */].ask('PANEL_TRY_TO_RECORD_OPEN_COMMAND');
      });

      return ipc_cs["a" /* default */].ask('PANEL_START_RECORDING', {});
    }
  };
}

function stopRecording() {
  return {
    types: type3('STOP_RECORDING'),
    promise: function promise() {
      return ipc_cs["a" /* default */].ask('PANEL_STOP_RECORDING', {});
    }
  };
}

function startInspecting() {
  return {
    types: type3('START_INSPECTING'),
    promise: function promise() {
      return ipc_cs["a" /* default */].ask('PANEL_START_INSPECTING', {});
    }
  };
}

function stopInspecting() {
  return {
    types: type3('STOP_INSPECTING'),
    promise: function promise() {
      return ipc_cs["a" /* default */].ask('PANEL_STOP_INSPECTING', {});
    }
  };
}

function startPlaying() {
  return {
    type: types.START_PLAYING,
    data: null
  };
}

function stopPlaying() {
  return {
    type: types.STOP_PLAYING,
    data: null
  };
}

function doneInspecting() {
  return {
    type: types.DONE_INSPECTING,
    data: {}
  };
}

function appendCommand(cmdObj) {
  var fromRecord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (fromRecord) {
    recordedCount += 1;
    // Note: show in badge the recorded count
    ipc_cs["a" /* default */].ask('PANEL_UPDATE_BADGE', {
      type: 'record',
      text: '' + recordedCount
    });
  }

  return {
    type: types.APPEND_COMMAND,
    data: { command: cmdObj },
    post: [actions_saveEditing, actions_saveMacroExtra()]
  };
}

function duplicateCommand(index) {
  return {
    type: types.DUPLICATE_COMMAND,
    data: { index: index },
    post: [actions_saveEditing, actions_saveMacroExtra()]
  };
}

function insertCommand(cmdObj, index) {
  return {
    type: types.INSERT_COMMAND,
    data: {
      index: index,
      command: cmdObj
    },
    post: [actions_saveEditing, actions_saveMacroExtra()]
  };
}

function updateCommand(cmdObj, index) {
  return {
    type: types.UPDATE_COMMAND,
    data: {
      command: cmdObj,
      index: index
    },
    post: actions_saveEditing
  };
}

function removeCommand(index) {
  return {
    type: types.REMOVE_COMMAND,
    data: { index: index },
    post: [actions_saveEditing, actions_saveMacroExtra()]
  };
}

function selectCommand(index, forceClick) {
  return {
    type: types.SELECT_COMMAND,
    data: { index: index, forceClick: forceClick },
    post: actions_saveEditing
  };
}

function cutCommand(index) {
  return {
    type: types.CUT_COMMAND,
    data: { indices: [index] },
    post: [actions_saveEditing, actions_saveMacroExtra()]
  };
}

function copyCommand(index) {
  return {
    type: types.COPY_COMMAND,
    data: { indices: [index] }
  };
}

function pasteCommand(index) {
  return {
    type: types.PASTE_COMMAND,
    data: { index: index },
    post: [actions_saveEditing, actions_saveMacroExtra()]
  };
}

function normalizeCommands() {
  return {
    type: types.NORMALIZE_COMMANDS,
    data: {},
    post: actions_saveEditing
  };
}

function updateSelectedCommand(obj) {
  return {
    type: types.UPDATE_SELECTED_COMMAND,
    data: obj,
    post: actions_saveEditing
  };
}

function toggleCommentOnSelectedCommand() {
  return function (dispatch, getState) {
    var state = getState();
    var commands = state.editor.editing.commands;
    var index = state.editor.editing.meta.selectedIndex;
    var command = commands[index];

    if (!command) {
      return;
    }

    // Note: for commented out command, its data looks like:
    // {
    //   cmd:     'comment',
    //   target:  'originalCmd // originalTarget
    //   value:   not touched
    // }
    if (command.cmd === 'comment') {
      var separator = ' // ';
      var _index = command.target.indexOf(separator);
      if (_index === -1) return;

      var cmd = command.target.substr(0, _index);
      if (!Object(common_command["isValidCmd"])(cmd)) return;

      var target = command.target.substr(_index + separator.length);

      return dispatch(updateSelectedCommand(actions_extends({}, command, {
        cmd: cmd,
        target: target
      })));
    } else {
      return dispatch(updateSelectedCommand(actions_extends({}, command, {
        cmd: 'comment',
        target: command.cmd + ' // ' + (command.target || '')
      })));
    }
  };
}

function setSourceError(error) {
  return {
    type: types.SET_SOURCE_ERROR,
    data: error
  };
}

function setSourceCurrent(str) {
  return {
    type: types.SET_SOURCE_CURRENT,
    data: str
  };
}

function saveSourceCodeToEditing(str) {
  return function (dispatch, getState) {
    var _getState$editor = getState().editor,
        editing = _getState$editor.editing,
        editingSource = _getState$editor.editingSource;

    if (editingSource.pure === editing.current) return;

    log_default()('ACTION, saveSourceCodeToEditing', str);

    try {
      var obj = Object(convert_utils["fromJSONString"])(str, 'untitled');

      dispatch(setEditing(actions_extends({}, obj.data, {
        meta: editing.meta
      })));

      dispatch(setSourceError(null));
    } catch (e) {
      message_default.a.error('There are errors in the source');
      dispatch(setSourceError(e.message));
    }
  };
}

// In the form of redux-thunnk, it saves current editing test case to local storage
function saveEditingAsExisted() {
  return function (dispatch, getState) {
    var state = getState();
    var src = state.editor.editing.meta.src;
    var tc = state.editor.testCases.find(function (tc) {
      return tc.id === src.id;
    });
    var data = Object(utils["pick"])(['commands'], state.editor.editing);

    // Make sure, only 'cmd', 'value', 'target' are saved in storage
    data.commands = data.commands.map(test_case_model_normalizeCommand);

    return Object(services_storage["getStorageManager"])().getMacroStorage().write(tc.name, actions_extends({}, tc, { data: data })).then(function () {
      dispatch({
        type: types.SAVE_EDITING_AS_EXISTED,
        data: null,
        post: actions_saveEditing
      });
    });
  };
}

// In the form of redux-thunnk, it saves the current editing test case as a new named test case
function saveEditingAsNew(name) {
  return function (dispatch, getState) {
    var state = getState();
    var data = Object(utils["pick"])(['commands'], state.editor.editing);
    var sameName = findSameNameMacro(name, state.editor.testCases);

    if (sameName) {
      return Promise.reject(new Error('The macro name already exists!'));
    }

    var id = Object(utils["uid"])();

    return Object(services_storage["getStorageManager"])().getMacroStorage().write(name, { name: name, data: data, id: id }).then(function () {
      return dispatch({
        type: types.SAVE_EDITING_AS_NEW,
        data: {
          id: id,
          name: name
        },
        post: actions_saveEditing
      });
    });
  };
}

function setTestCases(testCases) {
  var tcs = testCases.slice();

  tcs.sort(function (a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA === nameB) return 0;
    return 1;
  });

  return {
    type: types.SET_TEST_CASES,
    data: tcs,
    post: function post(_ref4) {
      var dispatch = _ref4.dispatch,
          getState = _ref4.getState;

      var state = getState();
      var shouldSelectDefault = state.editor.testCases.length > 0 && !state.editor.editing.meta.src && state.editor.editing.commands.length === 0;

      if (shouldSelectDefault) {
        dispatch(editTestCase(state.editor.testCases[0].id));
      }
    }
  };
}

function resetEditing() {
  return function (dispatch, getState) {
    var state = getState();
    var _state$editor = state.editor,
        editing = _state$editor.editing,
        testCases = _state$editor.testCases;

    // Leave it if it's a new macro

    if (editing.meta && !editing.meta.src) return;
    if (testCases.length === 0) {
      dispatch(editNewTestCase());
    } else {
      dispatch(editTestCase(testCases[0].id));
    }
  };
}

function resetEditingIfNeeded() {
  return function (dispatch, getState) {
    var state = getState();
    var _state$editor2 = state.editor,
        editing = _state$editor2.editing,
        testCases = _state$editor2.testCases;

    var lastTcId = editing.meta.src && editing.meta.src.id;
    var newIndex = !lastTcId ? -1 : testCases.findIndex(function (tc) {
      return tc.id === lastTcId;
    });

    if (newIndex === -1) return resetEditing()(dispatch, getState);
    dispatch(editTestCase(lastTcId));
  };
}

function setEditing(editing) {
  return {
    type: types.SET_EDITING,
    data: editing
  };
}

function editTestCase(id) {
  return {
    type: types.EDIT_TEST_CASE,
    data: id,
    post: actions_saveEditing
  };
}

function editNewTestCase() {
  return {
    type: types.EDIT_NEW_TEST_CASE,
    data: null,
    post: actions_saveEditing
  };
}

function upsertTestCase(tc) {
  return function (dispatch, getState) {
    var state = getState();
    var testCases = state.editor.testCases;

    log_default()('upsertTestCase', tc);

    return Object(services_storage["getStorageManager"])().getMacroStorage().write(tc.name, actions_extends({
      id: Object(utils["uid"])()
    }, tc));
  };
}

function addTestCases(tcs) {
  var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var storageStrategyType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  return function (dispatch, getState) {
    var state = getState();
    var testCases = state.editor.testCases;
    var validTcs = overwrite ? tcs : tcs.filter(function (tc) {
      return !testCases.find(function (tcc) {
        return tcc.name === tc.name;
      });
    });
    var failTcs = overwrite ? [] : tcs.filter(function (tc) {
      return testCases.find(function (tcc) {
        return tcc.name === tc.name;
      });
    });

    var passCount = validTcs.length;
    var failCount = tcs.length - passCount;

    if (passCount === 0) {
      return Promise.resolve({ passCount: passCount, failCount: failCount, failTcs: failTcs });
    }

    var storage = Object(services_storage["getStorageManager"])().getStorageForTarget(services_storage["StorageTarget"].Macro, storageStrategyType || Object(services_storage["getStorageManager"])().getCurrentStrategyType());

    return storage.ensureDir().then(function () {
      return storage.bulkWrite(validTcs.map(function (tc) {
        return {
          fileName: tc.name,
          content: actions_extends({}, tc, {
            id: Object(utils["uid"])(),
            udpateTime: new Date() * 1
          })
        };
      }));
    }).then(function () {
      return { passCount: passCount, failCount: failCount, failTcs: failTcs };
    });
  };
}

function renameTestCase(name, tcId) {
  return function (dispatch, getState) {
    var state = getState();
    var editingId = state.editor.editing.meta.src.id;
    var tc = state.editor.testCases.find(function (tc) {
      return tc.id === tcId;
    });
    var sameName = findSameNameMacro(name, state.editor.testCases);

    if (!tc) {
      return Promise.reject(new Error('No macro found with id \'' + tcId + '\'!'));
    }

    if (sameName) {
      return Promise.reject(new Error('The macro name already exists!'));
    }

    if (Object(services_storage["getStorageManager"])().isXFileMode()) {
      // Reset test case status
      dispatch(updateMacroPlayStatus(tcId, null));
    }

    return Object(services_storage["getStorageManager"])().getMacroStorage().rename(tc.name, name).then(function () {
      if (editingId === tcId) {
        dispatch({
          type: types.RENAME_TEST_CASE,
          data: name,
          post: actions_saveEditing
        });
      }
    });
  };
}

function removeTestCase(tcId) {
  return function (dispatch, getState) {
    var state = getState();
    var tc = state.editor.testCases.find(function (tc) {
      return tc.id === tcId;
    });
    var curId = state.editor.editing.meta.src.id;
    var tss = state.editor.testSuites.filter(function (ts) {
      return ts.cases.find(function (m) {
        return m.testCaseId === tcId;
      });
    });

    if (tss.length > 0) {
      return Promise.reject(new Error('Can\'t delete this macro for now, it\'s currently used in following test suites: ' + tss.map(function (item) {
        return item.name;
      })));
    }

    // Reset test case status
    dispatch(updateMacroPlayStatus(tcId, null));

    return Object(services_storage["getStorageManager"])().getMacroStorage().remove(tc.name).then(function () {
      dispatch({
        type: types.REMOVE_TEST_CASE,
        data: {
          isCurrent: curId === tcId
        },
        post: actions_saveEditing
      });
    }).catch(function (e) {
      return log_default.a.error(e.stack);
    });
  };
}

function removeCurrentTestCase() {
  return function (dispatch, getState) {
    var state = getState();
    var id = state.editor.editing.meta.src.id;

    return removeTestCase(id)(dispatch, getState);
  };
}

// Note: duplicate current editing and save to another
function duplicateTestCase(newTestCaseName, tcId) {
  return function (dispatch, getState) {
    var state = getState();
    var tc = state.editor.testCases.find(function (tc) {
      return tc.id === tcId;
    });
    var sameName = findSameNameMacro(newTestCaseName, state.editor.testCases);

    if (!tc) {
      return Promise.reject(new Error('No macro found with id \'' + tcId + '\'!'));
    }

    if (sameName) {
      return Promise.reject(new Error('The macro name already exists!'));
    }

    return Object(services_storage["getStorageManager"])().getMacroStorage().write(newTestCaseName, actions_extends({}, tc, {
      id: Object(utils["uid"])(),
      name: newTestCaseName
    }));
  };
}

function setPlayerState(obj) {
  return {
    type: types.SET_PLAYER_STATE,
    data: obj
  };
}

function setTimeoutStatus(args) {
  return function (dispatch) {
    dispatch(setPlayerState({
      timeoutStatus: args
    }));

    // Note: show in badge the timeout left
    ipc_cs["a" /* default */].ask('PANEL_UPDATE_BADGE', {
      type: 'play',
      text: (args.total - args.past) / 1000 + 's'
    });
  };
}

function addPlayerErrorCommandIndex(index) {
  return function (dispatch, getState) {
    var state = getState();
    var macroId = getCurrentMacroId(state);
    var indices = getErrorCommandIndices(state);
    var errorCommandIndices = indices.indexOf(index) === -1 ? [].concat(actions_toConsumableArray(indices), [index]) : indices;
    dispatch(updateMacroExtra(macroId, { errorCommandIndices: errorCommandIndices }));
  };
}

function addLog(type, text) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return {
    type: types.ADD_LOGS,
    data: [{
      type: type,
      text: text,
      options: options,
      id: Object(utils["uid"])(),
      createTime: new Date()
    }]
  };
}

function clearLogs() {
  return {
    type: types.CLEAR_LOGS,
    data: null
  };
}

function addScreenshot(screenshot) {
  return {
    type: types.ADD_SCREENSHOT,
    data: actions_extends({}, screenshot, {
      createTime: new Date()
    })
  };
}

function clearScreenshots() {
  return {
    type: types.CLEAR_SCREENSHOTS,
    data: null,
    post: function post() {
      return Object(services_storage["getStorageManager"])().getScreenshotStorage().clear();
    }
  };
}

function addVision(vision) {
  return {
    type: types.ADD_VISION,
    data: actions_extends({}, vision, {
      createTime: new Date()
    })
  };
}

function clearVisions() {
  return {
    type: types.CLEAR_VISIONS,
    data: null,
    post: function post() {
      return Object(services_storage["getStorageManager"])().getVisionStorage().clear();
    }
  };
}

function updateConfig(data) {
  return {
    type: types.UPDATE_CONFIG,
    data: data,
    post: saveConfig
  };
}

function setMacrosExtra(data) {
  return {
    type: types.SET_MACROS_EXTRA,
    data: data || {}
  };
}

function setTestSuitesExtra(data) {
  return {
    type: types.SET_TEST_SUITES_EXTRA,
    data: data || {}
  };
}

function updateMacroExtra(id, extra) {
  // TODO: the key for extra info should be different,
  // something like storage mode + storage path + file name
  return {
    type: types.UPDATE_ONE_MACRO_EXTRA,
    data: { id: id, extra: extra },
    post: actions_saveMacroExtra(id)
  };
}

function updateMacroPlayStatus(id, status) {
  return function (dispatch, getState) {
    dispatch(updateMacroExtra(id, { status: status }));
  };
}

function updateMacroBreakpoints(id, breakpointIndices) {
  return function (dispatch, getState) {
    dispatch(updateMacroExtra(id, { breakpointIndices: breakpointIndices }));
  };
}

function updateMacroDoneCommandsIndices(id, doneCommandIndices) {
  return function (dispatch, getState) {
    dispatch(updateMacroExtra(id, { doneCommandIndices: doneCommandIndices }));
  };
}

function updateMacroErrorCommandsIndices(id, errorCommandIndices) {
  return function (dispatch, getState) {
    dispatch(updateMacroExtra(id, { errorCommandIndices: errorCommandIndices }));
  };
}

function commonPlayerState(state, options, macroId) {
  var config = state.config;

  var cfg = Object(utils["pick"])(['playHighlightElements', 'playScrollElementsIntoView'], config);
  var macroName = function () {
    if (!macroId) {
      return state.editor.editing.meta.src ? state.editor.editing.meta.src.name : 'Untitled';
    }

    var macro = state.editor.testCases.find(function (tc) {
      return tc.id === macroId;
    });

    if (!macro) {
      throw new Error('can\'t find macro with id \'' + macroId + '\'');
    }

    return macro.name;
  }();
  var scope = actions_extends({
    '!MACRONAME': macroName,
    '!TIMEOUT_PAGELOAD': parseInt(config.timeoutPageLoad, 10),
    '!TIMEOUT_WAIT': parseInt(config.timeoutElement, 10),
    '!TIMEOUT_MACRO': parseInt(config.timeoutMacro, 10),
    '!TIMEOUT_DOWNLOAD': parseInt(config.timeoutDownload, 10),
    '!OCRLANGUAGE': config.ocrLanguage,
    '!CVSCOPE': config.cvScope,
    '!REPLAYSPEED': {
      '0': 'FAST',
      '0.3': 'MEDIUM',
      '2': 'SLOW'
    }[options.postDelay / 1000] || 'MEDIUM'
  }, options.overrideScope || {});

  var breakpoints = macroId ? getBreakpointsByMacroId(state, macroId) : getBreakpoints(state);

  var opts = Object(utils["compose"])(Object(utils["on"])('resources'), utils["map"], Object(utils["on"])('extra'))(function () {
    var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return actions_extends({}, extra, cfg, options.commandExtra || {});
  })(options);

  var playerState = actions_extends({
    breakpoints: breakpoints,
    title: macroName
  }, opts, {
    public: actions_extends({}, opts.public || {}, {
      scope: scope
    })
  });

  return playerState;
}

function playerPlay(options) {
  return function (dispatch, getState) {
    return getSaveTestCase().saveOrNot({
      getContent: function getContent(data) {
        return 'You must save macro before replay';
      },
      okText: 'Save',
      cancelText: 'Cancel'
    }).then(function (saved) {
      if (!saved) return;

      var state = getState();
      var playerState = commonPlayerState(state, options);

      Object(call_stack["getMacroCallStack"])().clear();

      return Object(call_stack["getMacroCallStack"])().call({
        id: options.macroId,
        name: playerState.title,
        commands: options.resources
      }, {
        playerState: playerState,
        status: player_macro["MacroStatus"].Running,
        nextIndex: options.startIndex,
        commandResults: []
      });
    });
  };
}

function listCSV() {
  return function (dispatch, getState) {
    var csvStorage = Object(services_storage["getStorageManager"])().getCSVStorage();

    csvStorage.list().then(function (list) {
      return Promise.all(list.map(function (item) {
        return csvStorage.getLink(item.fileName).catch(function (e) {
          log_default.a.error('failed to read csv for ' + item.fileName, e);
          return e;
        }).then(function (url) {
          return {
            url: url,
            name: item.fileName,
            size: item.size,
            createTime: new Date(item.lastModified)
          };
        });
      }));
    }).then(function (list) {
      dispatch({
        type: types.SET_CSV_LIST,
        data: list
      });
    });
  };
}

function listScreenshots() {
  return function (dispatch, getState) {
    var man = Object(services_storage["getStorageManager"])().getScreenshotStorage();

    man.list().then(function (list) {
      log_default()('listScreenshots', list);

      return Promise.all(list.map(function (item) {
        return man.getLink(item.fileName).catch(function (e) {
          log_default.a.error('failed to read screenshot for ' + item.fileName, e);
          return e;
        }).then(function (url) {
          return {
            url: url,
            name: item.fileName,
            createTime: new Date(item.lastModified)
          };
        });
      }));
    }).then(function (list) {
      dispatch({
        type: types.SET_SCREENSHOT_LIST,
        data: list
      });
    });
  };
}

function listVisions() {
  return function (dispatch, getState) {
    var visionStorage = Object(services_storage["getStorageManager"])().getVisionStorage();

    visionStorage.list().then(function (list) {
      log_default()('listVisions', list);

      return Promise.all(list.map(function (item) {
        return visionStorage.getLink(item.fileName).catch(function (e) {
          log_default.a.error('failed to read vision image for ' + item.fileName, e);
          return e;
        }).then(function (url) {
          return {
            url: url,
            name: item.fileName,
            createTime: new Date(item.lastModified)
          };
        });
      }));
    }).then(function (list) {
      dispatch({
        type: types.SET_VISION_LIST,
        data: list
      });
    });
  };
}

function renameVisionImage(fileName) {
  var shouldUpdateCommand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return function (dispatch, getState) {
    return Object(utils["withFileExtension"])(fileName, function (baseName, addExtName) {
      return Object(components_prompt["prompt"])({
        title: 'Image Name',
        message: 'Note: Please keep the \'_dpi_xx\' postfix',
        value: baseName,
        selectionEnd: function () {
          var m = baseName.match(/_dpi_\d+/i);
          if (!m) return undefined;
          return m.index;
        }(),
        onOk: function onOk(finalBaseName) {
          // Note: a small timeout to prevent "select" button from accepting "enter" keypress
          var timeout = Object(utils["delay"])(function () {
            return true;
          }, 100);
          if (finalBaseName === baseName) return timeout;

          try {
            Object(utils["validateStandardName"])(finalBaseName, true);
          } catch (e) {
            message_default.a.error(e.message);
            throw e;
          }

          return Object(services_storage["getStorageManager"])().getVisionStorage().exists(addExtName(finalBaseName)).then(function (result) {
            if (result) {
              var msg = '\'' + addExtName(finalBaseName) + '\' already exists';
              message_default.a.error(msg);
              throw new Error(msg);
            }

            return Object(services_storage["getStorageManager"])().getVisionStorage().rename(fileName, addExtName(finalBaseName)).then(function () {
              return timeout;
            }).catch(function (e) {
              // Note: If there is error in renaming like duplicate names,
              // it should show error message and let users try again
              message_default.a.error(e.message);
              throw e;
            });
          });
        }
      }).then(function (finalFullName) {
        // If users click "Cancel" button, we should delete it #479
        // Have to give it private name, since withFileExtenion will try to add '.png'
        if (!finalFullName) {
          return Object(services_storage["getStorageManager"])().getVisionStorage().remove(addExtName(baseName)).then(function () {
            return dispatch(listVisions());
          }).then(function () {
            return '__kantu_deleted__';
          });
        }

        return finalFullName;
      });
    }).then(function (finalFullName) {
      // It means it's deleted (user clicks "cancel")
      if (/__kantu_deleted__/.test(finalFullName)) return;

      if (shouldUpdateCommand) {
        dispatch(updateSelectedCommand({ target: finalFullName }));
      }
      dispatch(listVisions());
      message_default.a.success('Saved vision as ' + finalFullName);
      return finalFullName;
    });
  };
}

function setTestSuites(tss) {
  return {
    type: types.SET_TEST_SUITES,
    data: tss
  };
}

function addTestSuite(ts) {
  return function (dispatch, getState) {
    var state = getState();
    var existingtestSuites = getTestSuitesWithAllInfo(state);
    var hasDuplicateName = !!existingtestSuites.find(function (item) {
      return ts.name === item.name;
    });

    if (hasDuplicateName) {
      return Promise.reject(new Error('The test suite name \'' + ts.name + '\' already exists!'));
    }

    return Object(services_storage["getStorageManager"])().getTestSuiteStorage().write(ts.name, actions_extends({}, ts, {
      id: Object(utils["uid"])(),
      updateTime: new Date() * 1
    }));
  };
}

function addTestSuites(tss) {
  var storageStrategyType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return function (dispatch, getState) {
    var state = getState();
    var existingtestSuites = getTestSuitesWithAllInfo(state);

    var validTss = tss.filter(function (ts) {
      return !existingtestSuites.find(function (item) {
        return item.name === ts.name;
      });
    });
    var passCount = validTss.length;
    var failCount = tss.length - passCount;

    if (passCount === 0) {
      return Promise.resolve({ passCount: passCount, failCount: failCount, failTss: [] });
    }

    var storage = Object(services_storage["getStorageManager"])().getStorageForTarget(services_storage["StorageTarget"].TestSuite, storageStrategyType || Object(services_storage["getStorageManager"])().getCurrentStrategyType());

    return storage.ensureDir().then(function () {
      return storage.bulkWrite(validTss.map(function (ts) {
        return {
          fileName: ts.name,
          content: actions_extends({}, ts, {
            id: Object(utils["uid"])(),
            updateTime: new Date() * 1
          })
        };
      }));
    }).then(function () {
      return { passCount: passCount, failCount: failCount, failTss: [] };
    });
  };
}

function updateTestSuite(id, data) {
  return function (dispatch, getState) {
    var state = getState();
    var testSuites = getTestSuitesWithAllInfo(state);
    var ts = testSuites.find(function (ts) {
      return ts.id === id;
    });
    var realData = typeof data === 'function' ? data(ts) : data;
    var hasRename = realData.name && ts.name !== realData.name;

    if (hasRename) {
      var hasDuplciateName = !!testSuites.find(function (ts) {
        return ts.id !== id && ts.name === realData.name;
      });

      if (hasDuplciateName) {
        return Promise.reject(new Error('The test suite name \'' + realData.name + '\' already exists!'));
      }
    }

    // Note: revised may contain `playStatus`
    var revised = actions_extends({}, ts, realData);

    var suiteStorage = Object(services_storage["getStorageManager"])().getTestSuiteStorage();
    var suiteName = hasRename ? realData.name : ts.name;
    var pRename = hasRename ? suiteStorage.rename(ts.name, realData.name) : Promise.resolve();
    var pStoreExtra = hasRename && Object(services_storage["getStorageManager"])().isXFileMode() ? Object(test_suite_extra_data["getTestSuiteExtraKeyValueData"])().set(id, {
      fold: false,
      playStatus: {}
    }) : Object(test_suite_extra_data["getTestSuiteExtraKeyValueData"])().set(id, {
      fold: revised.fold,
      playStatus: revised.playStatus || {}
    });

    dispatch({
      type: types.UPDATE_TEST_SUITE,
      data: {
        id: id,
        updated: normalizeTestSuite(revised)
      }
    });

    if (hasRename && Object(services_storage["getStorageManager"])().isXFileMode()) {
      // Reset test suite status
      dispatch({
        type: types.UPDATE_TEST_SUITE_STATUS,
        data: {
          id: id,
          extra: {
            fold: false,
            playStatus: {}
          }
        }
      });
    } else {
      dispatch({
        type: types.UPDATE_TEST_SUITE_STATUS,
        data: {
          id: id,
          extra: {
            fold: revised.fold,
            playStatus: revised.playStatus || {}
          }
        }
      });
    }

    return Promise.all([pRename, pStoreExtra]).then(function () {
      return suiteStorage.write(suiteName, revised);
    });
  };
}

function removeTestSuite(id) {
  return function (dispatch, getState) {
    var state = getState();
    var ts = state.editor.testSuites.find(function (ts) {
      return ts.id === id;
    });

    if (!ts) throw new Error('can\'t find test suite with id \'' + id + '\'');

    // Reset test suite status
    dispatch({
      type: types.UPDATE_TEST_SUITE_STATUS,
      data: {
        id: id,
        extra: {
          fold: false,
          playStatus: {}
        }
      }
    });

    return Object(services_storage["getStorageManager"])().getTestSuiteStorage().remove(ts.name);
  };
}

function setPlayerMode(mode) {
  return {
    type: types.SET_PLAYER_STATE,
    data: { mode: mode }
  };
}

function runBackup() {
  return function (dispatch, getState) {
    var _getState3 = getState(),
        config = _getState3.config,
        editor = _getState3.editor;

    var autoBackupTestCases = config.autoBackupTestCases,
        autoBackupTestSuites = config.autoBackupTestSuites,
        autoBackupScreenshots = config.autoBackupScreenshots,
        autoBackupCSVFiles = config.autoBackupCSVFiles,
        autoBackupVisionImages = config.autoBackupVisionImages;


    var sm = Object(services_storage["getStorageManager"])();

    return Promise.all([sm.getCSVStorage().list(), sm.getScreenshotStorage().list(), sm.getVisionStorage().list()]).then(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 3),
          csvs = _ref6[0],
          screenshots = _ref6[1],
          visions = _ref6[2];

      return Object(backup["default"])({
        csvs: csvs,
        screenshots: screenshots,
        visions: visions,
        testCases: editor.testCases,
        testSuites: editor.testSuites,
        backup: {
          testCase: autoBackupTestCases,
          testSuite: autoBackupTestSuites,
          screenshot: autoBackupScreenshots,
          csv: autoBackupCSVFiles,
          vision: autoBackupVisionImages
        }
      });
    }).catch(function (e) {
      log_default.a.error(e.stack);
    });
  };
}

function setVariables(variables) {
  variables.sort(function (a, b) {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  });

  return {
    type: types.SET_VARIABLE_LIST,
    data: variables
  };
}

function updateUI(data) {
  return {
    type: types.UPDATE_UI,
    data: data
  };
}

function addBreakpoint(macroId, commandIndex) {
  return function (dispatch, getState) {
    var state = getState();
    var extra = state.editor.macrosExtra[macroId] || {};
    var indices = extra.breakpointIndices || [];
    var newIndices = indices.indexOf(commandIndex) === -1 ? [].concat(actions_toConsumableArray(indices), [commandIndex]) : indices;

    dispatch(updateMacroBreakpoints(macroId, newIndices));
  };
}

function removeBreakpoint(macroId, commandIndex) {
  return function (dispatch, getState) {
    var state = getState();
    var extra = state.editor.macrosExtra[macroId] || {};
    var indices = extra.breakpointIndices || [];
    var newIndices = indices.filter(function (index) {
      return index !== commandIndex;
    });

    dispatch(updateMacroBreakpoints(macroId, newIndices));
  };
}

function setEditorActiveTab(tab) {
  return {
    type: types.SET_EDITOR_ACTIVE_TAB,
    data: tab
  };
}

function preinstall() {
  var yesInstall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return function (dispatch, getState) {
    var markThisVersion = function markThisVersion() {
      return common_storage["default"].get('preinstall_info').then(function () {
        var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var prevVersions = info.askedVersions || [];
        var thisVersion = config_default.a.preinstallVersion;
        var hasThisOne = prevVersions.indexOf(thisVersion) !== -1;

        if (hasThisOne) return true;

        return common_storage["default"].set('preinstall_info', actions_extends({}, info, {
          askedVersions: [].concat(actions_toConsumableArray(prevVersions), [thisVersion])
        }));
      });
    };

    if (!yesInstall) return markThisVersion();

    log_default()('PREINSTALL_CSV_LIST', ["preinstall/csv/readcsvtestdata.csv"]);
    log_default()('PREINSTALL_VISION_LIST', ["preinstall/vision/canvas_3dots_verify_dpi_96.png","preinstall/vision/canvas_hydepark_dpi_96.png","preinstall/vision/canvas_hydepark_extract_dpi_96_relative.png","preinstall/vision/canvas_hydepark_verify_dpi_96.png","preinstall/vision/canvas_wyoming_dpi_96.png","preinstall/vision/canvas_wyoming_verify_dpi_96.png","preinstall/vision/democv_checkoverlay.png","preinstall/vision/democv_ocrdone.png","preinstall/vision/democv_share.png","preinstall/vision/democv_startocr.png","preinstall/vision/desktop_area_bottomright_dpi_96.png","preinstall/vision/desktop_area_topleft_dpi_96.png","preinstall/vision/desktop_checktab_dpi_96.png","preinstall/vision/desktop_clearbutton_dpi_96.png","preinstall/vision/desktop_logstab_grey_dpi_96.png","preinstall/vision/desktop_logstab_white_dpi_96.png","preinstall/vision/desktop_scrtab_dpi_96.png","preinstall/vision/desktop_searcharea_dpi_96_relative.png","preinstall/vision/desktop_vartab_dpi_96.png","preinstall/vision/desktop_vitab_dpi_96.png","preinstall/vision/draw_aa_dpi_96_relative.png","preinstall/vision/draw_box_dpi_96.png","preinstall/vision/draw_square_dpi_96.png","preinstall/vision/getquotenumber_dpi_96_relative.png","preinstall/vision/pdftest_salesquote.png","preinstall/vision/uitest_download_dpi_96.png","preinstall/vision/uitest_hamburger_dpi_96.png","preinstall/vision/uitest_logo_mobile_dpi_96.png","preinstall/vision/uitest_logo_wide_dpi_96.png","preinstall/vision/uitest_share_dpi_96.png","preinstall/vision/youtube_play_button.png","preinstall/vision/youtube_video_content_verify.png"]);

    var installMacrosAndSuites = function installMacrosAndSuites() {
      if (!preinstall_macros || !Object.keys(preinstall_macros).length) return Promise.resolve();

      var tcs = Object.keys(preinstall_macros).map(function (key) {
        var str = JSON.stringify(preinstall_macros[key]);
        return Object(convert_utils["fromJSONString"])(str, key);
      });

      dispatch(addTestCases(tcs, true, services_storage["StorageStrategyType"].Browser));

      // Note: test cases need to be save to indexed db before it reflects in store
      // so it may take some time before we can preinstall test suites
      return Object(utils["until"])('testCases', function () {
        var testCases = getState().editor.testCases;


        return {
          pass: testCases.length > 0,
          result: testCases
        };
      }).then(function (testCases) {
        var tss = preinstall_suites.map(function (ts) {
          return Object(convert_suite_utils["parseTestSuite"])(JSON.stringify(ts), testCases);
        });
        dispatch(addTestSuites(tss, services_storage["StorageStrategyType"].Browser));
      });
    };

    // Preinstall csv
    var installCsvs = function installCsvs() {
      var list = ["preinstall/csv/readcsvtestdata.csv"];
      if (list.length === 0) return Promise.resolve();

      // Note: preinstalled resources all go into browser mode
      var csvStorage = Object(services_storage["getStorageManager"])().getStorageForTarget(services_storage["StorageTarget"].CSV, services_storage["StorageStrategyType"].Browser);

      return csvStorage.ensureDir().then(function () {
        var ps = list.map(function (url) {
          var parts = url.split('/');
          var fileName = parts[parts.length - 1];

          return Object(utils["loadCsv"])(url).then(function (text) {
            return csvStorage.write(fileName, new Blob([text]));
          });
        });

        return Promise.resolve(ps)
        // Note: delay needed for Firefox and slow Chrome
        .then(function () {
          return Object(utils["delay"])(function () {}, 3000);
        }).then(function () {
          dispatch(listCSV());
        });
      });
    };

    // Preinstall vision images
    var installVisionImages = function installVisionImages() {
      var list = ["preinstall/vision/canvas_3dots_verify_dpi_96.png","preinstall/vision/canvas_hydepark_dpi_96.png","preinstall/vision/canvas_hydepark_extract_dpi_96_relative.png","preinstall/vision/canvas_hydepark_verify_dpi_96.png","preinstall/vision/canvas_wyoming_dpi_96.png","preinstall/vision/canvas_wyoming_verify_dpi_96.png","preinstall/vision/democv_checkoverlay.png","preinstall/vision/democv_ocrdone.png","preinstall/vision/democv_share.png","preinstall/vision/democv_startocr.png","preinstall/vision/desktop_area_bottomright_dpi_96.png","preinstall/vision/desktop_area_topleft_dpi_96.png","preinstall/vision/desktop_checktab_dpi_96.png","preinstall/vision/desktop_clearbutton_dpi_96.png","preinstall/vision/desktop_logstab_grey_dpi_96.png","preinstall/vision/desktop_logstab_white_dpi_96.png","preinstall/vision/desktop_scrtab_dpi_96.png","preinstall/vision/desktop_searcharea_dpi_96_relative.png","preinstall/vision/desktop_vartab_dpi_96.png","preinstall/vision/desktop_vitab_dpi_96.png","preinstall/vision/draw_aa_dpi_96_relative.png","preinstall/vision/draw_box_dpi_96.png","preinstall/vision/draw_square_dpi_96.png","preinstall/vision/getquotenumber_dpi_96_relative.png","preinstall/vision/pdftest_salesquote.png","preinstall/vision/uitest_download_dpi_96.png","preinstall/vision/uitest_hamburger_dpi_96.png","preinstall/vision/uitest_logo_mobile_dpi_96.png","preinstall/vision/uitest_logo_wide_dpi_96.png","preinstall/vision/uitest_share_dpi_96.png","preinstall/vision/youtube_play_button.png","preinstall/vision/youtube_video_content_verify.png"];
      if (list.length === 0) return Promise.resolve();

      // Note: preinstalled resources all go into browser mode
      var visionStorage = Object(services_storage["getStorageManager"])().getStorageForTarget(services_storage["StorageTarget"].Vision, services_storage["StorageStrategyType"].Browser);

      return visionStorage.ensureDir().then(function () {
        var ps = list.map(function (url) {
          var parts = url.split('/');
          var fileName = parts[parts.length - 1];

          return Object(utils["loadImage"])(url).then(function (blob) {
            return visionStorage.write(fileName, blob);
          });
        });

        return Promise.resolve(ps)
        // Note: delay needed for Firefox and slow Chrome
        .then(function () {
          return Object(utils["delay"])(function () {}, 3000);
        }).then(function () {
          dispatch(listVisions());
        });
      });
    };

    return Promise.all([installMacrosAndSuites(), installCsvs(), installVisionImages()]).then(markThisVersion);
  };
}
// EXTERNAL MODULE: ./node_modules/antd/lib/icon/index.js
var icon = __webpack_require__(23);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/index.js
var dropdown = __webpack_require__(101);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/index.js
var menu = __webpack_require__(17);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// EXTERNAL MODULE: ./node_modules/antd/lib/tabs/index.js
var tabs = __webpack_require__(27);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs);

// EXTERNAL MODULE: ./node_modules/antd/lib/select/index.js
var lib_select = __webpack_require__(26);
var select_default = /*#__PURE__*/__webpack_require__.n(lib_select);

// EXTERNAL MODULE: ./node_modules/antd/lib/radio/index.js
var lib_radio = __webpack_require__(35);
var radio_default = /*#__PURE__*/__webpack_require__.n(lib_radio);

// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(42);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(lib_checkbox);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(31);
var form_default = /*#__PURE__*/__webpack_require__.n(lib_form);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/index.js
var row = __webpack_require__(600);
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/index.js
var col = __webpack_require__(364);
var col_default = /*#__PURE__*/__webpack_require__.n(col);

// EXTERNAL MODULE: ./src/components/header.scss
var header = __webpack_require__(984);

// EXTERNAL MODULE: ./src/services/xmodules/xfile.ts
var xfile = __webpack_require__(29);

// EXTERNAL MODULE: ./src/services/xmodules/x_user_io.ts
var x_user_io = __webpack_require__(68);

// EXTERNAL MODULE: ./src/services/xmodules/xdesktop.ts
var xdesktop = __webpack_require__(58);

// EXTERNAL MODULE: ./src/services/xmodules/common.ts
var xmodules_common = __webpack_require__(132);

// EXTERNAL MODULE: ./src/common/web_extension.js
var web_extension = __webpack_require__(10);
var web_extension_default = /*#__PURE__*/__webpack_require__.n(web_extension);

// EXTERNAL MODULE: ./src/services/ocr/languages.ts
var languages = __webpack_require__(290);

// EXTERNAL MODULE: ./src/common/registry.ts
var registry = __webpack_require__(322);

// CONCATENATED MODULE: ./src/common/variables.js
var variables_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function variables_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var standardKeyConstants = ['KEY_LEFT', 'KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_PGUP', 'KEY_PAGE_UP', 'KEY_PGDN', 'KEY_PAGE_DOWN', 'KEY_BKSP', 'KEY_BACKSPACE', 'KEY_DEL', 'KEY_DELETE', 'KEY_ENTER', 'KEY_TAB', 'KEY_ESC'];

var metaKeyConstants = ['KEY_CTRL', 'KEY_ALT', 'KEY_SHIFT', 'KEY_WIN', 'KEY_CMD', 'KEY_META'];

var fnKeyConstants = ['KEY_F1', 'KEY_F2', 'KEY_F3', 'KEY_F4', 'KEY_F5', 'KEY_F6', 'KEY_F7', 'KEY_F8', 'KEY_F9', 'KEY_F10', 'KEY_F11', 'KEY_F12', 'KEY_F13', 'KEY_F14', 'KEY_F15'];

var numericKeyConstants = ['KEY_Num0', 'KEY_Num1', 'KEY_Num2', 'KEY_Num3', 'KEY_Num4', 'KEY_Num5', 'KEY_Num6', 'KEY_Num7', 'KEY_Num8', 'KEY_Num9'];

var numberKeyConstants = ['KEY_0', 'KEY_1', 'KEY_2', 'KEY_3', 'KEY_4', 'KEY_5', 'KEY_6', 'KEY_7', 'KEY_8', 'KEY_9'];

var letterKeyConstants = ['KEY_A', 'KEY_B', 'KEY_C', 'KEY_D', 'KEY_E', 'KEY_F', 'KEY_G', 'KEY_H', 'KEY_I', 'KEY_J', 'KEY_K', 'KEY_L', 'KEY_M', 'KEY_N', 'KEY_O', 'KEY_P', 'KEY_Q', 'KEY_R', 'KEY_S', 'KEY_T', 'KEY_U', 'KEY_V', 'KEY_W', 'KEY_X', 'KEY_Y', 'KEY_Z'];

var keyConstants = [].concat(standardKeyConstants, metaKeyConstants, fnKeyConstants, numberKeyConstants, numericKeyConstants, letterKeyConstants).map(function (key) {
  return key.toUpperCase();
});

var variables_isValidKeyConstant = function isValidKeyConstant(pattern) {
  var str = pattern && pattern.toUpperCase();

  if (keyConstants.indexOf(str) !== -1) return true;
  if (/^KEY_\w+(\+KEY_\w+)*$/.test(str)) {
    var keys = str.split('+');
    return utils["and"].apply(undefined, variables_toConsumableArray(keys.map(function (s) {
      return keyConstants.indexOf(s) !== -1;
    })));
  }
  return false;
};

var DEFAULT_KEY = 'main';
var cache = {};

var variables_validateVariableName = function validateVariableName(name) {
  if (name.charAt(0) === '!') {
    name = name.substr(1);
  }

  try {
    Object(utils["validateStandardName"])(name);
  } catch (e) {
    throw new Error('Invalid variable name \'' + name + '\'. A variable name ' + e.message);
  }

  return true;
};

function varsFactory() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_KEY;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var opts = variables_extends({
    isInvalidInternalVar: function isInvalidInternalVar(key) {
      return key.indexOf('!') === 0 && key !== '!TIMEOUT_PAGELOAD' && key !== '!TIMEOUT_WAIT' && key !== '!TIMEOUT_MACRO' && key !== '!TIMEOUT_DOWNLOAD' && key !== '!REPLAYSPEED' && key !== '!LOOP' && key !== '!URL' && key !== '!MACRONAME' && key !== '!RUNTIME' && key !== '!CSVLINE' && key !== '!CSVLINE' && key !== '!LASTCOMMANDOK' && key !== '!ERRORIGNORE' && key !== '!CSVREADLINENUMBER' && key !== '!CSVREADSTATUS' && key !== '!CSVREADMAXROW' && key !== '!CLIPBOARD' && key !== '!STATUSOK' && key !== '!WAITFORVISIBLE' && key !== '!IMAGEX' && key !== '!IMAGEY' && key !== '!IMAGEWIDTH' && key !== '!IMAGEHEIGHT' && key !== '!VISUALSEARCHAREA' && key !== '!STOREDIMAGERECT' && key !== '!CMD_VAR1' && key !== '!CMD_VAR2' && key !== '!CMD_VAR3' && key !== '!OCRLANGUAGE' && key !== '!OCRX' && key !== '!OCRY' && key !== '!BROWSER' && key !== '!OS' && key !== '!CVSCOPE' && !/^!COL\d+$/i.test(key);
    },
    readonly: ['!LOOP', '!URL', '!MACRONAME', '!RUNTIME', '!LASTCOMMANDOK', '!CSVREADSTATUS', '!CSVREADMAXROW', '!VISUALSEARCHAREA', '!BROWSER', '!OS', '!CVSCOPE'].concat(variables_toConsumableArray(keyConstants)),
    typeCheck: {
      '!REPLAYSPEED': function REPLAYSPEED(val) {
        return ['SLOW', 'MEDIUM', 'FAST'].indexOf((val || '').toUpperCase()) !== -1;
      },
      '!TIMEOUT_PAGELOAD': function TIMEOUT_PAGELOAD(val) {
        return parseInt(val, 10) >= 0;
      },
      '!TIMEOUT_WAIT': function TIMEOUT_WAIT(val) {
        return parseInt(val, 10) >= 0;
      },
      '!TIMEOUT_MACRO': function TIMEOUT_MACRO(val) {
        return parseInt(val, 10) >= 0;
      },
      '!TIMEOUT_DOWNLOAD': function TIMEOUT_DOWNLOAD(val) {
        return parseInt(val, 10) >= 0;
      },
      '!CSVREADLINENUMBER': function CSVREADLINENUMBER(val) {
        return parseInt(val, 10) >= 0;
      },
      '!OCRLANGUAGE': function OCRLANGUAGE(val) {
        return Object(languages["isValidOCRLanguage"])(val);
      },
      '!OCRX': function OCRX(val) {
        return parseInt(val, 10) >= 0;
      },
      '!OCRY': function OCRY(val) {
        return parseInt(val, 10) >= 0;
      },
      '!CVSCOPE': function CVSCOPE(val) {
        return ['desktop', 'browser'].indexOf(val) !== -1;
      }
    },
    normalize: function normalize(key, val) {
      var upperKey = key.toUpperCase();
      var acceptStringTrueFalse = function acceptStringTrueFalse(val) {
        if (val === 'true') return true;
        if (val === 'false') return false;
        return val;
      };
      var num = function num(s) {
        return parseFloat(s);
      };

      switch (upperKey) {
        case '!ERRORIGNORE':
        case '!WAITFORVISIBLE':
          return acceptStringTrueFalse(val);

        case '!TIMEOUT_PAGELOAD':
        case '!TIMEOUT_WAIT':
        case '!TIMEOUT_MACRO':
        case '!TIMEOUT_DOWNLOAD':
          return num(val);

        default:
          return val;
      }
    }
  }, options);
  var vars = initial;

  var listeners = new registry["Registry"]({ process: function process(fn, data, eventName) {
      return fn(data);
    } });
  var fireOnChange = function fireOnChange() {
    return listeners.fire('change', { vars: variables_extends({}, vars) });
  };
  var self = {
    reset: function reset() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.keepGlobal) {
        var globals = Object.keys(vars).reduce(function (prev, key) {
          if (/^global/i.test(key)) prev[key] = vars[key];
          return prev;
        }, {});

        vars = globals;
      } else {
        vars = {};
      }

      fireOnChange();
    },
    render: function render(str, options) {
      var getVar = function getVar(key) {
        var upperKey = (key || '').toUpperCase();

        if (upperKey in vars) {
          return vars[upperKey];
        } else {
          if (/^!cmd_var(1|2|3)$/i.test(upperKey)) return 'NOT_SET';

          if (/^!/.test(upperKey)) {
            throw new Error('Internal variable "' + upperKey + '" not supported');
          } else {
            throw new Error('variable "' + upperKey + '" is not defined');
          }
        }
      };
      var replaceAllVars = function replaceAllVars(str, reg) {
        var getKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (args) {
          return args[1];
        };
        var decorate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (x) {
          return x;
        };

        return str.replace(reg, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var variable = (getKey(args) || '').toUpperCase();
          // Note: keep as it is if it's a KEY_XXX variable, which should be handled by command runner
          if (variables_isValidKeyConstant(variable)) return args[0];
          return decorate(getVar(variable));
        });
      };
      var regDollar = new RegExp('\\$\\{(!?\\w+)\\}', 'gi');
      var regStoredVars = new RegExp('storedVars\\[(\'|")(!?\\w+)\\1\\]', 'gi');

      var result = replaceAllVars(str, regDollar);

      if (options && options.withHashNotation) {
        result = replaceAllVars(result, regStoredVars, function (args) {
          return args[2];
        }, function (x) {
          return JSON.stringify(x);
        });
      }

      return result;
    },
    get: function get(field) {
      return vars[field.toUpperCase()];
    },
    set: function set(obj, isAdmin) {
      Object.keys(obj).forEach(function (key) {
        var trimmedKey = key.trim();
        if (trimmedKey.length === 0) return;

        variables_validateVariableName(trimmedKey);

        var targetKey = trimmedKey.toUpperCase();

        // Note: prevent variable with empty name
        if (targetKey.length === 0) return;

        // Note: special treatment for !CSVLINE
        if (/^!CSVLINE$/i.test(targetKey)) {
          var csvLine = self.get('!CSVLINE');

          if (csvLine === undefined) {
            csvLine = [];
          } else if (!Array.isArray(csvLine)) {
            csvLine = [csvLine];
          }

          csvLine.push(obj[key]);
          vars['!CSVLINE'] = csvLine;

          return;
        }

        if (!isAdmin && opts.readonly.indexOf(targetKey) !== -1) {
          throw new Error('Cannot write to readony variable \'' + key + '\'');
        }

        if (opts.isInvalidInternalVar(targetKey)) {
          throw new Error('Not allowed to write to \'' + key + '\'');
        }

        if (opts.typeCheck[targetKey] && !opts.typeCheck[targetKey](obj[key])) {
          throw new Error('Value \'' + obj[key] + '\' not supported for variable "' + targetKey + '"');
        }

        vars[targetKey] = opts.normalize(key, obj[key]);
      });

      fireOnChange();
    },
    clear: function clear(reg) {
      Object.keys(vars).forEach(function (key) {
        if (reg.test(key)) {
          delete vars[key];
        }
      });

      fireOnChange();
    },
    isReadOnly: function isReadOnly(variable) {
      var str = variable && variable.toUpperCase ? variable.toUpperCase() : '';
      return opts.readonly.indexOf(str) !== -1;
    },
    dump: function dump() {
      return variables_extends({}, vars);
    },
    onChange: function onChange(fn) {
      listeners.add('change', fn);
      return function () {
        return listeners.remove('change', fn);
      };
    }
  };

  cache[name] = self;
  return self;
}

var getVarsInstance = function getVarsInstance() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_KEY;

  return cache[name];
};

var createVarsFilter = function createVarsFilter(_ref) {
  var _ref$withUserDefined = _ref.withUserDefined,
      withUserDefined = _ref$withUserDefined === undefined ? true : _ref$withUserDefined,
      withCommonInternal = _ref.withCommonInternal,
      withAdvancedInternal = _ref.withAdvancedInternal;

  var checkUserDefined = function checkUserDefined(name) {
    return !/^!/.test(name);
  };
  var checkCommonInternal = function checkCommonInternal(name) {
    var list = ['!url', '!clipboard', '!runtime', '!statusok', '!errorignore'].map(function (x) {
      return x.toUpperCase();
    });
    return list.indexOf(name.toUpperCase()) !== -1;
  };
  var checkAdvancedInternal = function checkAdvancedInternal(name) {
    return (/^!/.test(name) && !checkCommonInternal(name)
    );
  };
  var orCheck = function orCheck(fns) {
    return function () {
      for (var i = 0, len = fns.length; i < len; i++) {
        if (fns[i].apply(fns, arguments)) return true;
      }
      return false;
    };
  };
  var list = [withUserDefined ? checkUserDefined : null, withCommonInternal ? checkCommonInternal : null, withAdvancedInternal ? checkAdvancedInternal : null].filter(function (x) {
    return !!x;
  });

  return orCheck(list);
};
// CONCATENATED MODULE: ./src/common/interpreter.js
var interpreter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var interpreter_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function interpreter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalizeLabelName = function normalizeLabelName(label) {
  return label.toUpperCase();
};

var Interpreter = function () {
  function Interpreter() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    interpreter_classCallCheck(this, Interpreter);

    this.state = {
      labels: {},
      tags: [],
      commands: []
    };

    if (opts.pre) {
      this.__customPre = opts.pre;
    }

    if (opts.run) {
      this.__customRun = opts.run;
    }

    if (opts.post) {
      this.__customPost = opts.post;
    }
  }

  interpreter_createClass(Interpreter, [{
    key: 'reset',
    value: function reset() {
      this.__setState({
        labels: {},
        tags: [],
        commands: []
      });
    }
  }, {
    key: 'preprocess',
    value: function preprocess(commands) {
      var _this = this;

      var nextState = { commands: commands, tags: [] };
      var halfTags = [];
      var errorAtIndex = function errorAtIndex(i, msg) {
        var e = new Error(msg);
        e.errorIndex = i;
        return e;
      };

      commands.forEach(function (c, i) {
        if (_this.__customPre && _this.__customPre(c, i)) return;

        var topHalfTag = halfTags[halfTags.length - 1];

        switch (c.cmd) {
          // Commands for WHILE statements
          case 'while':
            {
              if (halfTags.find(function (tag) {
                return tag.type === 'while';
              })) {
                throw errorAtIndex(i, 'No nested while allowed (at command #' + (i + 1) + ')');
              }

              halfTags.push({
                type: 'while',
                start: { index: i, command: c }
              });

              break;
            }

          case 'endWhile':
            {
              if (!topHalfTag || topHalfTag.type !== 'while') {
                throw errorAtIndex(i, 'No matching while for this endWhile (at command #' + (i + 1) + ')');
              }

              nextState.tags.push(interpreter_extends({}, topHalfTag, {
                end: { index: i, command: c }
              }));

              halfTags.pop();
              break;
            }
          // -----------------------------

          // Commands for IF statements
          case 'if':
            {
              if (halfTags.find(function (tag) {
                return tag.type === 'if';
              })) {
                throw errorAtIndex(i, 'No nested if allowed (at command #' + (i + 1) + ')');
              }

              halfTags.push({
                type: 'if',
                start: { index: i, command: c }
              });

              break;
            }

          case 'else':
            {
              if (!topHalfTag || topHalfTag.type !== 'if') {
                throw errorAtIndex(i, 'No matching if for this else (at command #' + (i + 1) + ')');
              }

              interpreter_extends(topHalfTag, {
                fork: { index: i, command: c }
              });

              break;
            }

          case 'endif':
            {
              if (!topHalfTag || topHalfTag.type !== 'if') {
                throw errorAtIndex(i, 'No matching if for this endif (at command #' + (i + 1) + ')');
              }

              nextState.tags.push(interpreter_extends({}, topHalfTag, {
                end: { index: i, command: c }
              }));

              halfTags.pop();
              break;
            }
          // -----------------------------

          case 'label':
            {
              if (!c.target || !c.target.length) {
                throw new Error('invalid target for label command');
              }

              _this.__setState({
                labels: interpreter_extends({}, _this.state.labels, _defineProperty({}, normalizeLabelName(c.target), { index: i }))
              });

              break;
            }
        }
      });

      if (halfTags.length > 0) {
        var topHalfTag = halfTags[halfTags.length - 1];
        throw errorAtIndex(topHalfTag.start.index, 'Unclosed \'' + topHalfTag.type + '\' (at command #' + (topHalfTag.start.index + 1) + ')');
      }

      this.__setState(nextState);
    }
  }, {
    key: 'run',
    value: function run(command, index) {
      var cmd = command.cmd,
          target = command.target,
          value = command.value;


      if (this.__customRun) {
        var p = this.__customRun(command, index);
        if (p) return Promise.resolve(p);
      }

      // label
      switch (cmd) {
        case 'onError':
          {
            var _value = command.value && command.value.trim();
            var _target = command.target && command.target.trim();
            var isValidTarget = _target && (/^#restart$/i.test(_target) || /^#goto$/i.test(_target));

            if (!isValidTarget) {
              throw new Error('invalid target for onError command');
            }

            if (/^#goto$/i.test(_target)) {
              var labelName = normalizeLabelName(_value);

              if (!this.state.labels[labelName]) {
                throw new Error('label ' + _value + ' doesn\'t exist');
              }
            }

            return Promise.resolve({ isFlowLogic: true });
          }

        case 'gotoLabel':
          {
            if (!target || !target.length) {
              throw new Error('invalid target for gotoLabel command');
            }

            var _labelName = normalizeLabelName(target);

            if (!this.state.labels[_labelName]) {
              throw new Error('label ' + target + ' doesn\'t exist');
            }

            return Promise.resolve({
              isFlowLogic: true,
              nextIndex: this.state.labels[_labelName].index
            });
          }

        case 'else':
          {
            // Note: 'else' command itself will be skipped if condition is false,
            // But it will be run as the ending command of 'if-else' when condition is true
            var tag = this.state.tags.find(function (tag) {
              return tag.type === 'if' && tag.fork && tag.fork.index === index;
            });

            if (!tag) {
              throw new Error('tag not found for this else (at command #' + (index + 1) + ')');
            }

            return Promise.resolve({
              isFlowLogic: true,
              nextIndex: tag.end.index + 1
            });
          }

        case 'endif':
          {
            return Promise.resolve({ isFlowLogic: true });
          }

        case 'endWhile':
          {
            var _tag = this.state.tags.find(function (tag) {
              return tag.type === 'while' && tag.end.index === index;
            });

            if (!_tag) {
              throw new Error('tag not found for this endWhile (at command #' + (index + 1) + ')');
            }

            return Promise.resolve({
              isFlowLogic: true,
              nextIndex: _tag.start.index
            });
          }

        case 'comment':
          return Promise.resolve({ isFlowLogic: true });

        // As of 'label', it doesn't do anything, so we just kind of skip it
        case 'label':
          return Promise.resolve({ isFlowLogic: true });

        // Note: gotoIf, if and while need to run eval, which is not allowed in extension scope,
        // so we have to run eval in content script
        case 'gotoIf':
        case 'if':
        case 'while':
        default:
          return Promise.resolve({ isFlowLogic: false });
      }
    }
  }, {
    key: 'postRun',
    value: function postRun(command, index, result) {
      var cmd = command.cmd,
          target = command.target,
          value = command.value;


      if (this.__customPost) {
        var p = this.__customPost(command, index, result);
        if (p) return Promise.resolve(p);
      }

      switch (cmd) {
        case 'gotoIf':
          {
            // short-circuit the check on value
            if (!result.condition) return Promise.resolve();

            if (!value || !value.length) {
              throw new Error('invalid value for value command');
            }

            var labelName = normalizeLabelName(value);

            if (!this.state.labels[labelName]) {
              throw new Error('label ' + value + ' doesn\'t exist');
            }

            return Promise.resolve({
              nextIndex: this.state.labels[labelName].index
            });
          }

        case 'if':
          {
            var cond = result.condition;
            var tag = this.state.tags.find(function (tag) {
              return tag.type === 'if' && tag.start.index === index;
            });

            if (!tag) {
              throw new Error('tag not found for this if (at command #' + (index + 1) + ')');
            }

            var forkIndex = tag.fork && tag.fork.index + 1;
            var endIndex = tag.end && tag.end.index + 1;

            return Promise.resolve({
              nextIndex: cond ? index + 1 : forkIndex || endIndex
            });
          }

        case 'while':
          {
            var _cond = result.condition;
            var _tag2 = this.state.tags.find(function (tag) {
              return tag.type === 'while' && tag.start.index === index;
            });

            if (!_tag2) {
              throw new Error('tag not found for this while (at command #' + (index + 1) + ')');
            }

            if (!_tag2.end || _tag2.end.index === undefined || _tag2.end.index === null) {
              throw new Error('tag doesn\'t have a valid end index');
            }

            return Promise.resolve(_cond ? {} : { nextIndex: _tag2.end.index + 1 });
          }

        default:
          return Promise.resolve();
      }
    }
  }, {
    key: 'commandIndexByLabel',
    value: function commandIndexByLabel(labelName) {
      var label = this.state.labels[normalizeLabelName(labelName)];

      if (!label) {
        throw new Error('label \'' + labelName + '\' doesn\'t exist');
      }

      return label.index;
    }
  }, {
    key: '__setState',
    value: function __setState(st) {
      this.state = interpreter_extends({}, this.state, st);
    }
  }]);

  return Interpreter;
}();

/* harmony default export */ var common_interpreter = (Interpreter);
// EXTERNAL MODULE: ./node_modules/csv/lib/index.js
var lib = __webpack_require__(483);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/common/csv.js


var csvDataURI = function csvDataURI(csvStr) {
  return 'data:text/csv;base64,' + window.btoa(unescape(encodeURIComponent(csvStr)));
};

function parseFromCSV(text) {
  return new Promise(function (resolve, reject) {
    lib_default.a.parse(text, function (err, data) {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

function stringifyToCSV(list) {
  return new Promise(function (resolve, reject) {
    lib_default.a.stringify(list, function (err, data) {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

function toCsvDataURI(list) {
  return stringifyToCSV(list).then(csvDataURI);
}
// CONCATENATED MODULE: ./src/common/macro_log.js

var renderLogType = function renderLogType(log) {
  switch (log.type) {
    case 'reflect':
      return '[info]';

    case 'error':
      return log.options && log.options.ignored ? '[error][ignored]' : '[error]';

    default:
      return '[' + log.type + ']';
  }
};

var renderLog = function renderLog(log) {
  return renderLogType(log) + ' ' + log.text;
};
// EXTERNAL MODULE: ./src/common/command_runner.js + 2 modules
var command_runner = __webpack_require__(93);

// EXTERNAL MODULE: ./src/services/xy/index.ts
var xy = __webpack_require__(50);

// EXTERNAL MODULE: ./src/services/desktop/index.ts
var desktop = __webpack_require__(72);

// EXTERNAL MODULE: ./src/services/ocr/index.ts
var ocr = __webpack_require__(81);

// EXTERNAL MODULE: ./src/services/storage/storage.ts
var storage_storage = __webpack_require__(80);

// EXTERNAL MODULE: ./src/services/ocr/types.ts
var ocr_types = __webpack_require__(83);

// EXTERNAL MODULE: ./src/common/counter/counter.ts
var counter = __webpack_require__(474);

// EXTERNAL MODULE: ./src/services/ocr/command_counter.ts
var command_counter = __webpack_require__(291);

// EXTERNAL MODULE: ./src/services/ocr/endpoint_picker.ts
var endpoint_picker = __webpack_require__(293);

// EXTERNAL MODULE: ./src/desktop_screenshot_editor/types.ts
var desktop_screenshot_editor_types = __webpack_require__(74);

// EXTERNAL MODULE: ./src/services/player/call_stack/types.ts
var call_stack_types = __webpack_require__(363);

// EXTERNAL MODULE: ./src/services/player/monitor/macro_monitor.ts
var macro_monitor = __webpack_require__(70);

// EXTERNAL MODULE: ./src/services/player/monitor/types.ts
var monitor_types = __webpack_require__(69);

// CONCATENATED MODULE: ./src/init_player.js



var init_player_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var init_player_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var init_player_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function init_player_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function init_player_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function init_player_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



































var TimeTracker = function () {
  function TimeTracker() {
    init_player_classCallCheck(this, TimeTracker);

    this.reset();
  }

  init_player_createClass(TimeTracker, [{
    key: 'reset',
    value: function reset() {
      this.startTime = new Date();
    }
  }, {
    key: 'elapsed',
    value: function elapsed() {
      return new Date() - this.startTime;
    }
  }, {
    key: 'elapsedInSeconds',
    value: function elapsedInSeconds() {
      var diff = this.elapsed();
      return (diff / 1000).toFixed(2) + 's';
    }
  }]);

  return TimeTracker;
}();

var Timeout = function () {
  function Timeout(callback) {
    init_player_classCallCheck(this, Timeout);

    this.callback = callback;
  }

  init_player_createClass(Timeout, [{
    key: 'reset',
    value: function reset(callback) {
      this.cancel();

      if (callback) {
        this.callback = callback;
      }

      this.timer = null;
      this.timeout = null;
      this.startTime = null;
    }
  }, {
    key: 'restart',
    value: function restart(newTimeout) {
      if (!this.timeout) {
        this.timeout = newTimeout;
        this.startTime = new Date();
        this.timer = setTimeout(this.callback, this.timeout);
      } else {
        var past = new Date() * 1 - this.startTime * 1;
        var rest = newTimeout - past;

        clearTimeout(this.timer);

        if (rest < 0) return this.callback();

        this.timeout = newTimeout;
        this.timer = setTimeout(this.callback, rest);
      }
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      clearTimeout(this.timer);
    }
  }]);

  return Timeout;
}();

var replaceEscapedChar = function replaceEscapedChar(str, command, field) {
  if (['storeEval', 'gotoIf', 'if', 'while'].indexOf(command.cmd) !== -1 && field === 'target') {
    return str;
  }

  return [[/\\n/g, '\n'], [/\\t/g, '\t']].reduce(function (prev, _ref) {
    var _ref2 = init_player_slicedToArray(_ref, 2),
        reg = _ref2[0],
        c = _ref2[1];

    return prev.replace(reg, c);
  }, str);
};

var init_player_retryIfHeartBeatExpired = function retryIfHeartBeatExpired(mainFunc) {
  var runWithHeartBeat = function runWithHeartBeat() {
    var stop = false;

    var infiniteCheckHeartBeat = function () {
      var startTime = new Date().getTime();
      var stop = false;
      var lastSecret = null;

      var fn = function fn() {
        log_default()('start to send heart beat to background');
        if (stop) return Promise.resolve();

        return ipc_cs["a" /* default */].ask('PANEL_HEART_BEAT', {}, 300).then(function (secret) {
          // Note: secret === -1 means no heart beat available
          if (secret === -1) return new Promise(function () {});

          if (secret === lastSecret) {
            throw new Error('lost background heart beat when running command');
          } else {
            lastSecret = secret;
          }

          return Object(utils["delay"])(function () {}, 3000).then(fn);
        }, function (e) {
          log_default.a.error('lost background heart beart!!', e.stack);
          throw new Error('lost background heart beat when running command');
        });
      };
      fn.stop = function () {
        log_default()('stopping background heart beat');
        stop = true;
      };

      return fn;
    }();

    return Promise.race([mainFunc().then(function (data) {
      infiniteCheckHeartBeat.stop();
      return data;
    }).catch(function (e) {
      infiniteCheckHeartBeat.stop();
      throw e;
    }), infiniteCheckHeartBeat()]);
  };

  var retryFn = Object(utils["retry"])(runWithHeartBeat, {
    timeout: 999999,
    shouldRetry: function shouldRetry(e, retryCount) {
      return e && e.message && e.message.indexOf('lost background heart beat when running command') !== -1 && retryCount < 10;
    },
    retryInterval: function retryInterval(retryCount, lastRetryInterval) {
      return Math.max(5 * 1000, Math.min(20 * 1000, lastRetryInterval * 1.2));
    }
  });

  return retryFn();
};

var init_player_getOcrResponse = function getOcrResponse(_ref3) {
  var searchArea = _ref3.searchArea,
      storedImageRect = _ref3.storedImageRect,
      ocrApiTimeout = _ref3.ocrApiTimeout,
      store = _ref3.store,
      lang = _ref3.lang,
      isDesktop = _ref3.isDesktop;

  return new Promise(function (resolve, reject) {
    // Note: must make sure `getOcrCommandCounter` is called with args before this (currently it's in `initPlayer`)
    var ocrCmdCounter = Object(command_counter["getOcrCommandCounter"])();
    var getApiAndKey = function getApiAndKey() {
      var _store$getState$confi = store.getState().config,
          ocrMode = _store$getState$confi.ocrMode,
          ocrOfflineURL = _store$getState$confi.ocrOfflineURL,
          ocrOfflineAPIKey = _store$getState$confi.ocrOfflineAPIKey;


      switch (ocrMode) {
        case 'enabled':
          {
            return Object(endpoint_picker["getOcrEndpointPicker"])().bestPick();
          }

        case 'offline_enabled':
          {
            if (!/^https?:\/\//.test(ocrOfflineURL)) {
              throw new Error('Please set local OCR API first');
            }

            if (!ocrOfflineAPIKey || !ocrOfflineAPIKey.length) {
              throw new Error('Please set local OCR API key first');
            }

            return Promise.resolve({
              url: ocrOfflineURL,
              key: ocrOfflineAPIKey
            });
          }

        default:
          {
            throw new Error('Please enable OCR first');
          }
      }
    };
    var prepare = isDesktop ? Promise.resolve() : ipc_cs["a" /* default */].ask('PANEL_CLEAR_OCR_MATCHES_ON_PLAYING_PAGE');

    return prepare
    // Note: add 1s delay here to make sure old OCR overlayed are cleared before taking new screenshot
    .then(function () {
      return Object(utils["delay"])(function () {}, 1000);
    }).then(function () {
      return ipc_cs["a" /* default */].ask('PANEL_CAPTURE_IMAGE', {
        isDesktop: isDesktop,
        storedImageRect: storedImageRect,
        searchArea: /\.png/i.test(searchArea) ? 'rect' : searchArea,
        scaleDpi: true
      });
    }).then(function (_ref4) {
      var dataUrl = _ref4.dataUrl,
          offset = _ref4.offset,
          viewportOffset = _ref4.viewportOffset,
          _ref4$scale = _ref4.scale,
          scale = _ref4$scale === undefined ? 1 : _ref4$scale;

      var blob = Object(utils["dataURItoBlob"])(dataUrl);
      var fileSize = Object(storage_storage["readableSize"])(blob.size);
      var startTime = new Date() * 1;
      var getDuration = function getDuration(startTime, endTime) {
        return ((endTime - startTime) / 1000).toFixed(1) + 's';
      };
      var cancelCountDown = Object(ts_utils["countDown"])({
        interval: 1000,
        timeout: ocrApiTimeout,
        onTick: function onTick(_ref5) {
          var past = _ref5.past,
              total = _ref5.total;

          store.dispatch(setTimeoutStatus({
            past: past,
            total: total,
            type: 'OCR in progress'
          }));
        }
      });

      // Note: check in advance so that it throws error before making OCR requests
      ocrCmdCounter.check();
      store.dispatch(addLog('info', 'OCR (' + lang + ') started (' + fileSize + ')'));

      return Object(ocr["runOCR"])({
        image: dataUrl,
        language: lang,
        totalTimeout: ocrApiTimeout,
        singleApiTimeout: config_default.a.ocr.singleApiTimeout,
        isOverlayRequired: true,
        getApiUrlAndApiKey: function getApiUrlAndApiKey() {
          return getApiAndKey().then(function (data) {
            //  store.dispatch(act.addLog('info', `OCR request is sent to ${data.url}`))
            return data;
          });
        },
        shouldRetry: function shouldRetry() {
          return Object(endpoint_picker["getOcrEndpointPicker"])().isAllDown().then(function (down) {
            return !down;
          });
        },
        didGetResponse: function didGetResponse(data) {
          var server = data.server,
              startTime = data.startTime,
              endTime = data.endTime,
              response = data.response,
              error = data.error;

          var id = server.id;

          if (response) {
            store.dispatch(addLog('info', 'OCR result received (' + getDuration(startTime, endTime) + ')'));
          } else if (error) {
            store.dispatch(addLog('warning', 'OCR error received (' + getDuration(startTime, endTime) + ') - ' + error.message));
          }

          if (id && response) {
            Object(endpoint_picker["getOcrEndpointPicker"])().use(id);
          }

          if (!id) return Promise.resolve();
          // Note: only mark server as error if browser is online
          if (!window.navigator.onLine) return Promise.resolve();

          return Object(endpoint_picker["getOcrEndpointPicker"])().report(id, {
            lastError: error,
            lastOcrExitCode: response ? response.OCRExitCode : undefined,
            lastRequestTimestamp: startTime,
            lastResponseTimestamp: endTime,
            lastTotalMilliseconds: endTime - startTime
          }).then(function () {});
        }
      }).then(function (data) {
        cancelCountDown();
        ocrCmdCounter.inc();

        return {
          offset: offset,
          viewportOffset: viewportOffset,
          response: Object(ocr["scaleOcrResponseCoordinates"])(data, scale)
        };
      }, function (e) {
        cancelCountDown();

        if (/All OCR servers are down/i.test(e.message)) {
          Object(endpoint_picker["getOcrEndpointPicker"])().reset();
        }

        throw e;
      });
    }).then(resolve, reject);
  });
};

var init_player_ocrViewport = function ocrViewport(_ref6) {
  var store = _ref6.store,
      isDesktop = _ref6.isDesktop;

  var clearBadge = function clearBadge() {
    return ipc_cs["a" /* default */].ask('PANEL_UPDATE_BADGE', { type: 'play', clear: true });
  };

  return init_player_getOcrResponse({
    store: store,
    isDesktop: isDesktop,
    lang: store.getState().config.ocrLanguage,
    searchArea: 'viewport',
    storedImageRect: null,
    ocrApiTimeout: config_default.a.ocr.apiTimeout
  }).then(function (_ref7) {
    var response = _ref7.response,
        offset = _ref7.offset,
        viewportOffset = _ref7.viewportOffset;

    var documentBasedParseResults = Object(ts_utils["safeUpdateIn"])(['[]', 'TextOverlay', 'Lines', '[]', 'Words', '[]'], function (word) {
      return init_player_extends({}, word, {
        Top: word.Top + offset.y,
        Left: word.Left + offset.x
      });
    }, response.ParsedResults);

    var ocrMatches = [
    // All words identified by OCR into one group
    {
      similarity: 1,
      highlight: ocr_types["OcrHighlightType"].Matched,
      words: Object(ocr["allWordsWithPosition"])(documentBasedParseResults, [])
    }];

    // show overlay on website
    return ipc_cs["a" /* default */].ask('PANEL_HIGHLIGHT_OCR_MATCHES', { ocrMatches: ocrMatches, isDesktop: isDesktop });
  }).then(function () {
    clearBadge();
  }, function (e) {
    clearBadge();
    throw e;
  });
};

var init_player_withVisualHighlightHidden = function withVisualHighlightHidden(fn) {
  var hide = function hide() {
    return ipc_cs["a" /* default */].ask('PANEL_HIDE_VISION_HIGHLIGHT');
  };
  var show = function show() {
    return ipc_cs["a" /* default */].ask('PANEL_SHOW_VISION_HIGHLIGHT');
  };

  return hide().then(function () {
    return fn();
  }).then(function (data) {
    show();
    return data;
  }, function (e) {
    show();
    throw e;
  });
};

var interpretSpecialCommands = function interpretSpecialCommands(_ref8) {
  var store = _ref8.store,
      vars = _ref8.vars,
      getTcPlayer = _ref8.getTcPlayer;

  var commandRunners = [init_player_interpretCSVCommands({ store: store, vars: vars, getTcPlayer: getTcPlayer }), init_player_interpretCsFreeCommands({ store: store, vars: vars, getTcPlayer: getTcPlayer })];

  return function (command, index) {
    return commandRunners.reduce(function (prev, cur) {
      if (prev !== undefined) return prev;
      return cur(command, index);
    }, undefined);
  };
};

var init_player_interpretCsFreeCommands = function interpretCsFreeCommands(_ref9) {
  var store = _ref9.store,
      vars = _ref9.vars,
      getTcPlayer = _ref9.getTcPlayer;

  var runCsFreeCommands = function runCsFreeCommands(command, index) {
    var csvStorage = Object(services_storage["getStorageManager"])().getCSVStorage();
    var ssStorage = Object(services_storage["getStorageManager"])().getScreenshotStorage();
    var cmd = command.cmd,
        target = command.target,
        value = command.value,
        extra = command.extra;

    var result = {
      isFlowLogic: true
    };
    var runCommand = function runCommand(command) {
      return init_player_askBackgroundToRunCommand({
        vars: vars,
        store: store,
        command: command,
        state: getTcPlayer().getState(),
        preRun: function preRun(command, state, askBgToRun) {
          return askBgToRun(command);
        }
      });
    };
    var guardOcrSettings = function guardOcrSettings() {
      if (store.getState().config.ocrMode === 'disabled') {
        throw new Error('OCR feature disabled.');
      }
    };

    log_default()('interpretCsFreeCommands', command);

    switch (cmd) {
      case 'run':
        {
          var macroName = target;
          var state = store.getState();
          var tc = findSameNameMacro(macroName, state.editor.testCases);

          if (!tc) {
            throw new Error('Can\'t find macro with name \'' + target + '\'');
          }

          var macro = {
            id: tc.id,
            name: tc.name,
            commands: tc.data.commands
          };
          var openCmd = macro.commands.find(function (command) {
            return command.cmd.toLowerCase() === 'open';
          });
          var playerState = commonPlayerState(store.getState(), {
            extra: {
              id: macro.id
            },
            mode: getPlayer().C.MODE.STRAIGHT,
            startIndex: 0,
            startUrl: openCmd ? openCmd.target : null,
            resources: macro.commands,
            postDelay: state.config.playCommandInterval * 1000,
            isStep: getPlayer().getState().isStep,
            loopsCursor: 1,
            loopsStart: 1,
            loopsEnd: 1
          }, tc.id);

          return Object(utils["delay"])(function () {}, 500).then(function () {
            return Object(call_stack["getMacroCallStack"])().call(macro, {
              playerState: playerState,
              status: player_macro["MacroStatus"].Running,
              nextIndex: 0,
              commandResults: []
            });
          }).then(function () {
            store.dispatch(updateMacroPlayStatus(tc.id, constant["i" /* TEST_CASE_STATUS */].SUCCESS));

            return {
              byPass: true
            };
          });
        }

      case 'store':
        {
          return {
            byPass: true,
            vars: init_player_defineProperty({}, value, target)
          };
        }

      case 'echo':
        {
          var _extra = function () {
            if (value === '#shownotification') return { options: { notification: true } };
            if (value) return { options: { color: value } };
            return {};
          }();

          return {
            byPass: true,
            log: init_player_extends({
              info: target
            }, _extra)
          };
        }

      case 'prompt':
        {
          var _target$match = target.match(/^([^@]+)(?:@(.+))?$/),
              _target$match2 = init_player_slicedToArray(_target$match, 3),
              _ = _target$match2[0],
              _message = _target$match2[1],
              defaultAnswer = _target$match2[2];

          return ipc_cs["a" /* default */].ask('PANEL_BRING_PANEL_TO_FOREGROUND').then(function () {
            return Object(components_prompt["prompt"])({ message: _message, value: defaultAnswer || '' });
          }).then(function (text) {
            return {
              byPass: true,
              vars: init_player_defineProperty({}, value, text)
            };
          });
        }

      case 'throwError':
        {
          throw new Error(target);
        }

      case 'pause':
        {
          var n = parseInt(target);

          if (!target || !target.length || n === 0) {
            return {
              byPass: true,
              control: {
                type: 'pause'
              }
            };
          }

          if (isNaN(n) || n < 0) {
            throw new Error('target of pause command must be a positive integer');
          }

          var currentPlayUID = getTcPlayer().getPlayUID();

          return Object(utils["withCountDown"])({
            timeout: n,
            interval: 1000,
            onTick: function onTick(_ref10) {
              var total = _ref10.total,
                  past = _ref10.past,
                  cancel = _ref10.cancel;

              if (store.getState().player.status !== constant["g" /* PLAYER_STATUS */].PLAYING) {
                return cancel();
              }

              if (!getTcPlayer().checkPlayUID(currentPlayUID)) {
                return cancel();
              }

              store.dispatch(setTimeoutStatus({
                past: past,
                total: total,
                type: 'pause'
              }));
            }
          }).then(function () {
            return { byPass: true };
          });
        }

      case 'localStorageExport':
        {
          var deleteAfterExport = /\s*#DeleteAfterExport\s*/i.test(value);

          if (/^\s*log\s*$/i.test(target)) {
            var text = store.getState().logs.map(renderLog).join('\n');
            file_saver_default.a.saveAs(new Blob([text]), 'kantu_log.txt');

            if (deleteAfterExport) {
              store.dispatch(clearLogs());
            }

            return result;
          }

          if (/\.csv$/i.test(target)) {
            return csvStorage.exists(target).then(function (existed) {
              if (!existed) throw new Error(target + ' doesn\'t exist');

              return csvStorage.read(target, 'Text').then(function (text) {
                file_saver_default.a.saveAs(new Blob([text]), target);

                if (deleteAfterExport) {
                  csvStorage.remove(target).then(function () {
                    return store.dispatch(listCSV());
                  });
                }

                return result;
              });
            });
          }

          if (/\.png$/i.test(target)) {
            return ssStorage.exists(target).then(function (existed) {
              if (!existed) throw new Error(target + ' doesn\'t exist');

              return ssStorage.read(target, 'ArrayBuffer').then(function (buffer) {
                file_saver_default.a.saveAs(new Blob([new Uint8Array(buffer)]), target);

                if (deleteAfterExport) {
                  ssStorage.remove(target).then(function () {
                    return store.dispatch(listScreenshots());
                  });
                }

                return result;
              });
            });
          }

          throw new Error(target + ' doesn\'t exist');
        }

      case 'OCRSearch':
        {
          guardOcrSettings();

          if (!value || !value.length) {
            throw new Error('value is required');
          }

          var lang = vars.get('!ocrLanguage').toLowerCase();
          var searchArea = vars.get('!visualSearchArea');
          var storedImageRect = vars.get('!storedImageRect');
          var ocrApiTimeout = config_default.a.ocr.apiTimeout;

          var _ref11 = function () {
            var match = target.match(/^(.+)@POS=(\d+)$/i);
            if (!match) return [target, 0, false];
            return [match[1], parseInt(match[2]) - 1, true];
          }(),
              _ref12 = init_player_slicedToArray(_ref11, 3),
              str = _ref12[0],
              _index = _ref12[1],
              hasPos = _ref12[2];

          var run = function run() {
            return init_player_getOcrResponse({
              store: store,
              lang: lang,
              searchArea: searchArea,
              storedImageRect: storedImageRect,
              ocrApiTimeout: ocrApiTimeout,
              isDesktop: vars.get('!CVSCOPE') === 'desktop'
            }).then(function (_ref13) {
              var response = _ref13.response,
                  offset = _ref13.offset,
                  viewportOffset = _ref13.viewportOffset;

              var viewportBasedParseResults = Object(ts_utils["safeUpdateIn"])(['[]', 'TextOverlay', 'Lines', '[]', 'Words', '[]'], function (word) {
                return init_player_extends({}, word, {
                  Top: word.Top + viewportOffset.y,
                  Left: word.Left + viewportOffset.x
                });
              }, response.ParsedResults);
              var documentBasedParseResults = Object(ts_utils["safeUpdateIn"])(['[]', 'TextOverlay', 'Lines', '[]', 'Words', '[]'], function (word) {
                return init_player_extends({}, word, {
                  Top: word.Top + offset.y,
                  Left: word.Left + offset.x
                });
              }, response.ParsedResults);
              var searchResult = Object(ocr["searchTextInOCRResponse"])({
                text: str,
                index: _index,
                exhaust: true,
                parsedResults: viewportBasedParseResults
              });
              var hit = searchResult.hit,
                  all = searchResult.all;

              var newVars = function () {
                if (!hit) {
                  return init_player_defineProperty({}, value, 0);
                } else {
                  var _ref15;

                  var center = Object(ocr["ocrMatchCenter"])(hit);

                  // Note: when '@POS=xx' is used, the possible values are only 0 and 1
                  return _ref15 = {}, init_player_defineProperty(_ref15, value, hasPos ? 1 : all.length), init_player_defineProperty(_ref15, '!ocrx', center.x), init_player_defineProperty(_ref15, '!ocry', center.y), _ref15;
                }
              }();

              var ocrMatches = [
              // All words identified by OCR into one group
              {
                similarity: 1,
                highlight: ocr_types["OcrHighlightType"].Identified,
                words: Object(ocr["allWordsWithPosition"])(documentBasedParseResults, Object(ts_utils["flatten"])(all.map(function (item) {
                  return item.words.map(function (word) {
                    return word.position;
                  });
                })))
              }].concat(init_player_toConsumableArray(Object(ts_utils["compose"])(all[_index] ? Object(utils["setIn"])([_index, 'highlight'], ocr_types["OcrHighlightType"].TopMatched) : function (x) {
                return x;
              }, Object(utils["setIn"])(['[]', 'highlight'], ocr_types["OcrHighlightType"].Matched), Object(utils["updateIn"])(['[]', 'words', '[]', 'word'], function (word) {
                return init_player_extends({}, word, {
                  Top: word.Top + offset.y - viewportOffset.y,
                  Left: word.Left + offset.x + viewportOffset.x
                });
              }))(all)));

              if (extra && extra.debugVisual) {
                // show overlay on website
                ipc_cs["a" /* default */].ask('PANEL_HIGHLIGHT_OCR_MATCHES', {
                  ocrMatches: ocrMatches,
                  isDesktop: vars.get('!CVSCOPE') === 'desktop'
                });
              }

              var pScaleFactor = vars.get('!CVSCOPE') !== 'desktop' ? Promise.resolve(1) : Object(xy["getNativeXYAPI"])().getScalingFactor();

              // Note: In desktop mode, `!ocrx`, `!ocry` and `best` should be desktop coordinates
              return pScaleFactor.then(function (factor) {
                return Object(ts_utils["compose"])(Object(ts_utils["safeUpdateIn"])(['vars', '!ocrx'], function (n) {
                  return n * factor;
                }), Object(ts_utils["safeUpdateIn"])(['vars', '!ocry'], function (n) {
                  return n * factor;
                }), Object(ts_utils["safeUpdateIn"])(['best'], function (match) {
                  return match && match.similarity ? Object(ocr["scaleOcrTextSearchMatch"])(match, factor) : null;
                }))({
                  vars: newVars,
                  byPass: true,
                  best: hit
                });
              });
            });
          };

          return run();
        }

      case 'OCRExtract':
      case 'OCRExtractRelative':
        {
          guardOcrSettings();

          if (!value || !value.length) {
            throw new Error('value is required');
          }

          var _lang = vars.get('!ocrLanguage').toLowerCase();
          var _ocrApiTimeout = config_default.a.ocr.apiTimeout;
          var isRelative = /relative/i.test(cmd);

          return ipc_cs["a" /* default */].ask('PANEL_CLEAR_OCR_MATCHES_ON_PLAYING_PAGE').then(function () {
            return Object(utils["delay"])(function () {}, 1000);
          }).then(function () {
            return Promise.all([runCsFreeCommands(init_player_extends({}, command, {
              cmd: 'visualAssert',
              target: target,
              value: '',
              extra: init_player_extends({}, command.extra || {}, {
                // Note: `relativeVisual` is used in bg.js, for call of `visualAssert` that doesn't specify relativeVisual,
                // it still uses file name postfix "_relative" to tell whether it's relative (green/pink boxes) or not
                relativeVisual: isRelative,
                debugVisual: false
              })
            })), Object(xy["getNativeXYAPI"])().getScalingFactor()]);
          }).then(function (_ref16) {
            var _ref17 = init_player_slicedToArray(_ref16, 2),
                result = _ref17[0],
                scalingFactor = _ref17[1];

            var best = result.best;

            if (!best) throw new Error('no matched vision found for \'' + target + '\'');

            return init_player_withVisualHighlightHidden(function () {
              return init_player_getOcrResponse({
                store: store,
                lang: _lang,
                ocrApiTimeout: _ocrApiTimeout,
                searchArea: 'rect',
                storedImageRect: {
                  // Note: In desktop mode, coordinates returned by `visualXXX` is already desktop mouse coordinates
                  // must convert it back to css coordinates (for later use in image cropping or preview highlight)
                  x: best.offsetLeft / scalingFactor,
                  y: best.offsetTop / scalingFactor,
                  width: best.width / scalingFactor,
                  height: best.height / scalingFactor
                },
                isDesktop: vars.get('!CVSCOPE') === 'desktop'
              }).then(function (_ref18) {
                var response = _ref18.response,
                    offset = _ref18.offset,
                    viewportOffset = _ref18.viewportOffset;

                var documentBasedParseResults = Object(ts_utils["safeUpdateIn"])(['[]', 'TextOverlay', 'Lines', '[]', 'Words', '[]'], function (word) {
                  return init_player_extends({}, word, {
                    Top: word.Top + offset.y,
                    Left: word.Left + offset.x
                  });
                }, response.ParsedResults);

                var ocrMatches = [
                // All words identified by OCR into one group
                {
                  similarity: 1,
                  highlight: ocr_types["OcrHighlightType"].Matched,
                  words: Object(ocr["allWordsWithPosition"])(documentBasedParseResults, [])
                }];

                if (extra && extra.debugVisual) {
                  // show overlay on website
                  ipc_cs["a" /* default */].ask('PANEL_HIGHLIGHT_OCR_MATCHES', {
                    ocrMatches: ocrMatches,
                    isDesktop: vars.get('!CVSCOPE') === 'desktop'
                  });
                }

                return {
                  byPass: true,
                  vars: init_player_defineProperty({}, value, response.ParsedResults && response.ParsedResults[0] ? response.ParsedResults[0].ParsedText : '')
                };
              });
            });
          });
        }

      case 'visualVerify':
      case 'visualAssert':
      case 'visualSearch':
      case 'visionFind':
        {
          if (cmd === 'visualSearch') {
            if (!value || !value.length) {
              throw new Error(cmd + ': Must specify a variable to save the result');
            }
          }

          var verifyPatternImage = function verifyPatternImage(fileName, command) {
            return Object(services_storage["getStorageManager"])().getVisionStorage().exists(fileName).then(function (existed) {
              if (!existed) throw new Error(command + ': No input image found for file name \'' + fileName + '\'');
            });
          };

          var parseTarget = function parseTarget(target) {
            if (!target || !target.length) throw new Error('target is required');

            var reg = /^([^@#]+?)(?:@([\d.]+))?(?:#(\d+))?$/;
            var m = target.match(reg);

            if (!m) throw new Error('Target should be like \'abc.png@0.8#1\'');

            var visionFileName = m[1];
            var confidence = m[2] ? parseFloat(m[2]) : store.getState().config.defaultVisionSearchConfidence;
            var index = m[3] ? parseInt(m[3]) - 1 : null;

            return [visionFileName, confidence, index];
          };

          var _parseTarget = parseTarget(target),
              _parseTarget2 = init_player_slicedToArray(_parseTarget, 3),
              visionFileName = _parseTarget2[0],
              minSimilarity = _parseTarget2[1],
              rawIndex = _parseTarget2[2];

          var resultIndex = typeof rawIndex !== 'number' || isNaN(rawIndex) ? 0 : rawIndex;
          var isNotVerifyOrAssert = ['visualVerify', 'visualAssert'].indexOf(cmd) === -1;
          var _searchArea = vars.get('!visualSearchArea');
          var timeout = vars.get('!TIMEOUT_WAIT') * 1000;
          var cvScope = vars.get('!CVSCOPE');

          var _run = function _run() {
            var prepare = cvScope === 'desktop' ? Promise.resolve() : ipc_cs["a" /* default */].ask('PANEL_CLEAR_VISION_RECTS_ON_PLAYING_PAGE');
            // #324 .then(() => delay(() => {}, 500))

            return prepare.then(function () {
              return ipc_cs["a" /* default */].ask('PANEL_SEARCH_VISION_ON_PLAYING_PAGE', {
                visionFileName: visionFileName,
                minSimilarity: minSimilarity,
                searchArea: _searchArea,
                cvScope: cvScope,
                command: command,
                storedImageRect: vars.get('!storedImageRect')
              });
            }).then(function (_ref19) {
              var regions = _ref19.regions,
                  imageInfo = _ref19.imageInfo;

              log_default()('regions', regions, imageInfo);

              if (regions.length === 0) {
                throw new Error('Image \'' + visionFileName + '\' (conf. = ' + minSimilarity + ') not found');
              }

              if (regions.length <= resultIndex) {
                throw new Error('Found ' + regions.length + ' ' + (regions.length > 1 ? 'matches' : 'match') + ', but you are looking for #' + (resultIndex + 1));
              }

              // Note: if rawIndex is set, sort by top > left
              // otherwise, by score > top > left
              if (resultIndex === rawIndex) {
                regions.sort(function (a, b) {
                  var vSign = Math.sign(a.matched.offsetTop - b.matched.offsetTop);
                  var hSign = Math.sign(a.matched.offsetLeft - b.matched.offsetLeft);

                  return vSign || hSign;
                });
              } else {
                regions.sort(function (a, b) {
                  var scoreSign = Math.sign(b.matched.score - a.matched.score);
                  var vSign = Math.sign(a.matched.offsetTop - b.matched.offsetTop);
                  var hSign = Math.sign(a.matched.offsetLeft - b.matched.offsetLeft);

                  return scoreSign || vSign || hSign;
                });
              }

              var best = regions[resultIndex].matched;

              if (cvScope === 'browser') {
                var shouldHighlightElements = store.getState().config.playHighlightElements || extra && extra.debugVisual;

                if (shouldHighlightElements) {
                  ipc_cs["a" /* default */].ask('PANEL_HIGHLIGHT_RECTS', {
                    selectedIndex: resultIndex,
                    scoredRects: regions.map(function (r) {
                      return r.matched;
                    })
                  });
                }
              } else if (extra && extra.debugVisual) {
                var convert = function convert(rect, index, type) {
                  if (!rect) return null;

                  return {
                    type: type,
                    index: index,
                    x: rect.left,
                    y: rect.top,
                    width: rect.width,
                    height: rect.height,
                    score: rect.score
                  };
                };

                ipc_cs["a" /* default */].ask('PANEL_HIGHLIGHT_DESKTOP_RECTS', {
                  imageInfo: imageInfo,
                  selectedIndex: resultIndex,
                  scoredRects: Object(ts_utils["flatten"])(regions.map(function (r, i) {
                    return [convert(r.reference, i, i === resultIndex ? desktop_screenshot_editor_types["DesktopScreenshot"].RectType.ReferenceOfBestMatch : desktop_screenshot_editor_types["DesktopScreenshot"].RectType.Reference), convert(r.matched, i, i === resultIndex ? desktop_screenshot_editor_types["DesktopScreenshot"].RectType.BestMatch : desktop_screenshot_editor_types["DesktopScreenshot"].RectType.Match)].filter(function (x) {
                      return x;
                    });
                  }))
                });
              }

              var pScaleFactor = cvScope !== 'desktop' ? Promise.resolve(1) : Object(xy["getNativeXYAPI"])().getScalingFactor();

              // Note: Make sure `best`, `!imageX` and `!imageY` are all desktop coordinates (for later use in XClick)
              // While in PANEL_HIGHLIGHT_DESKTOP_RECTS, it uses css coordinates
              return pScaleFactor.then(function (factor) {
                return {
                  byPass: true,
                  vars: init_player_extends({
                    '!imageX': factor * (best.left + best.width / 2),
                    '!imageY': factor * (best.top + best.height / 2),
                    '!imageWidth': factor * best.width,
                    '!imageHeight': factor * best.height
                  }, isNotVerifyOrAssert && value && value.length ? init_player_defineProperty({}, value, regions.length) : {}),
                  best: Object(utils["objMap"])(function (n) {
                    return n * factor;
                  }, best)
                };
              }).then(function (res) {
                return Object(utils["delay"])(function () {
                  return res;
                }, 100);
              });
            });
          };
          var runWithRetry = Object(utils["retry"])(_run, {
            timeout: timeout,
            shouldRetry: function shouldRetry(e) {
              return store.getState().status === constant["a" /* APP_STATUS */].PLAYER && /Image.*\(conf\. =.*\) not found/.test(e.message);
            },
            retryInterval: function retryInterval(retryCount, lastRetryInterval) {
              return 0.5 + 0.25 * retryCount;
            },
            onFirstFail: function onFirstFail() {
              ipc_cs["a" /* default */].ask('PANEL_TIMEOUT_STATUS', { timeout: timeout, type: 'Vision waiting' });
            },
            onFinal: function onFinal() {
              ipc_cs["a" /* default */].ask('PANEL_CLEAR_TIMEOUT_STATUS');
            }
          });

          return verifyPatternImage(visionFileName, cmd).then(function () {
            return runWithRetry().catch(function (e) {
              // Note: extra.throwError === true, when "Find" button is used
              if (cmd === 'visualAssert' || extra && extra.throwError) {
                throw e;
              }

              return init_player_extends({
                byPass: true
              }, isNotVerifyOrAssert && value && value.length ? {
                vars: init_player_defineProperty({}, value, 0)
              } : {}, cmd === 'visualVerify' ? {
                log: {
                  error: e.message
                }
              } : {});
            });
          });
        }

      case 'visionLimitSearchArea':
      case 'visionLimitSearchAreaRelative':
        {
          var _isRelative = /relative/i.test(cmd);
          var area = target.trim();
          var p = Promise.resolve({ byPass: true });

          // This method is helping you to debug visionLimitSearchArea
          // It takes screenshot according to coordinates to be set
          //
          // Overall, visionLimitSearchArea takes screenshot on the search area if its value is not viewport or full
          // `element: xxx` achieve that by sharing same logic as storeImage (you can find it in command_runner.js)
          var setImageRectVarAndTakeScreenshot = function setImageRectVarAndTakeScreenshot(_ref21) {
            var rect = _ref21.rect,
                isDesktop = _ref21.isDesktop,
                searchArea = _ref21.searchArea;

            vars.set({ '!storedImageRect': rect }, true);

            return ipc_cs["a" /* default */].ask('PANEL_CAPTURE_IMAGE', {
              isDesktop: isDesktop,
              storedImageRect: rect,
              searchArea: /\.png/i.test(searchArea) ? 'rect' : searchArea,
              scaleDpi: true
            });
          };

          // Note: In desktop mode, we assume coordinates users provide in 'area=...' are returned by `visualXXX`,
          // which is already desktop mouse coordinates, we must convert it back to css coordinates (for later use in image cropping or preview highlight)
          var scale = function scale(rect) {
            switch (vars.get('!CVSCOPE')) {
              case 'browser':
                return Promise.resolve(rect);

              case 'desktop':
                return Object(xy["getNativeXYAPI"])().getScalingFactor().then(function (factor) {
                  return {
                    x: rect.x / factor,
                    y: rect.y / factor,
                    width: rect.width / factor,
                    height: rect.height / factor
                  };
                });
            }
          };

          if (_isRelative && !/\.png/i.test(area)) {
            throw new Error(cmd + ' only accepts a vision image as target');
          }

          if (/^viewport$/.test(area)) {
            vars.set({ '!visualSearchArea': 'viewport' }, true);
            return p;
          }

          if (/^full$/.test(area)) {
            vars.set({ '!visualSearchArea': 'full' }, true);
            return p;
          }

          if (/^area=/i.test(area)) {
            var coordinates = area.replace(/^area=/i, '').split(/\s*,\s*/g).map(function (str) {
              return parseFloat(str.trim());
            });

            var isValid = coordinates.length === 4 && utils["and"].apply(undefined, init_player_toConsumableArray(coordinates.map(function (n) {
              return typeof n === 'number' && !isNaN(n);
            })));

            if (!isValid) {
              throw new Error('area should be in format of "area=x1,y1,x2,y2"');
            }

            var rect = {
              x: coordinates[0],
              y: coordinates[1],
              width: coordinates[2] - coordinates[0],
              height: coordinates[3] - coordinates[1]
            };

            vars.set({ '!visualSearchArea': 'rect' }, true);

            return scale(rect).then(function (finalRect) {
              return setImageRectVarAndTakeScreenshot({
                isDesktop: vars.get('!CVSCOPE') === 'desktop',
                searchArea: 'rect',
                rect: finalRect
              }).then(function () {
                return { byPass: true };
              });
            });
          }

          if (/\.png/.test(area)) {
            return runCsFreeCommands(init_player_extends({}, command, {
              cmd: 'visualAssert',
              target: area,
              value: '',
              extra: init_player_extends({}, command.extra || {}, {
                // Note: `relativeVisual` is used in bg.js, for call of `visualAssert` that doesn't specify relativeVisual,
                // it still uses file name postfix "_relative" to tell whether it's relative (green/pink boxes) or not
                relativeVisual: _isRelative
              })
            })).then(function (result) {
              var best = result.best;

              if (!best) throw new Error('No match found for ' + area + ' in screenshot');

              vars.set({ '!visualSearchArea': area }, true);

              return scale({
                // Note: In desktop mode, coordinates returned by `visualXXX` is already desktop mouse coordinates
                // must convert it back to css coordinates (for later use in image cropping or preview highlight)
                x: best.offsetLeft,
                y: best.offsetTop,
                width: best.width,
                height: best.height
              }).then(function (rect) {
                return setImageRectVarAndTakeScreenshot({
                  rect: rect,
                  searchArea: area,
                  isDesktop: vars.get('!CVSCOPE') === 'desktop'
                });
              }).then(function () {
                return { byPass: true };
              });
            });
          }

          // If it doesn't match patterns above, we assume it's element in browser mode, or an vision image in desktop mode
          switch (vars.get('!CVSCOPE')) {
            case 'browser':
              if (/^element:/.test(area)) {
                vars.set({ '!visualSearchArea': area }, true);
                // Note: let cs page to process this case, it acts almost the same as a `storeImage` command
                return Promise.resolve({ byPass: false });
              } else {
                throw new Error('Target of visionLimitSearchArea could only be either \'viewport\', \'full\' or \'element:...\'');
              }

            case 'desktop':
              throw new Error('In desktop mode, target of visionLimitSearchArea could only be a vision image name or area');
          }

          break;
        }

      case 'XDesktopAutomation':
        {
          var shouldEnableDesktopAutomation = Object(ts_utils["parseBoolLike"])(target, false);
          vars.set({ '!CVSCOPE': shouldEnableDesktopAutomation ? 'desktop' : 'browser' }, true);
          return Promise.resolve({ byPass: true });
        }

      case 'bringBrowserToForeground':
        {
          return ipc_cs["a" /* default */].ask('PANEL_BRING_PLAYING_WINDOW_TO_FOREGROUND').then(function () {
            return { byPass: true };
          });
        }

      case 'resize':
        {
          if (!/\s*\d+@\d+\s*/.test(target)) {
            throw new Error('Syntax for target of resize command is x@y, e.g. 800@600');
          }

          var _target$split = target.split('@'),
              _target$split2 = init_player_slicedToArray(_target$split, 2),
              strWidth = _target$split2[0],
              strHeight = _target$split2[1];

          var width = parseInt(strWidth, 10);
          var height = parseInt(strHeight, 10);

          log_default()('resize', width, height);
          return ipc_cs["a" /* default */].ask('PANEL_RESIZE_PLAY_TAB', { width: width, height: height }).then(function (_ref22) {
            var actual = _ref22.actual,
                desired = _ref22.desired,
                diff = _ref22.diff;

            if (diff.length === 0) return { byPass: true };

            return {
              byPass: true,
              log: {
                warning: 'Only able to resize it to ' + actual.width + '@' + actual.height + ', given ' + desired.width + '@' + desired.height
              }
            };
          });
        }

      case 'XType':
        {
          return Object(x_user_io["getXUserIO"])().sanityCheck()
          // .then(() => csIpc.ask('PANEL_IS_PLAYING_WINDOW_IN_FOREGROUND'))
          // .then(isInForeGround => {
          //   if (isInForeGround) return
          //   return runCsFreeCommands({ cmd: 'bringBrowserToForeground' })
          // })
          .then(function () {
            return Object(utils["delay"])(function () {}, 300);
          }).then(function () {
            return Object(xy["getNativeXYAPI"])().sendText({ text: target }).then(function (success) {
              if (!success) throw new Error('Failed to XType \'' + target + '\'');
              return { byPass: true };
            });
          });
        }

      case 'XMove':
      case 'XMoveRelative':
      case 'XClickRelative':
      case 'XClick':
        {
          var _parseTarget3 = function _parseTarget3() {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var trimmedTarget = target.trim();
            var isDesktopMode = vars.get('!CVSCOPE') === 'desktop';

            if (/^ocr=/i.test(trimmedTarget)) {
              guardOcrSettings();

              return {
                type: 'ocr',
                value: { query: trimmedTarget.substr(4) }
              };
            }

            if (Object(command_runner["b" /* isLocator */])(trimmedTarget)) {
              if (isDesktopMode) {
                throw new Error('Locator is not support in desktop mode');
              }

              return {
                type: 'locator',
                value: { locator: trimmedTarget }
              };
            }

            if (/^[dD](\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)$/.test(trimmedTarget)) {
              return {
                type: 'desktop_coordinates',
                value: { coordinates: trimmedTarget.substr(1).split(/\s*,\s*/) }
              };
            }

            if (/^(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)$/.test(trimmedTarget)) {
              return {
                type: isDesktopMode ? 'desktop_coordinates' : 'viewport_coordinates',
                value: { coordinates: trimmedTarget.split(/\s*,\s*/) }
              };
            }

            if (/^.*\.png(@\d\.\d+)?(#\d+)?$/.test(trimmedTarget)) {
              return {
                type: 'visual_search',
                value: { query: trimmedTarget }
              };
            }

            throw new Error('XClick: invalid target, \'' + target + '\'');
          };
          var parseValueForXClick = function parseValueForXClick() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var normalValue = value.trim().toLowerCase();

            switch (normalValue) {
              case '':
                return '#left';

              case '#left':
              case '#middle':
              case '#right':
              case '#doubleclick':
              case '#shiftclick':
              case '#ctrlclick':
                return normalValue;

              default:
                throw new Error('XClick: invalid value, \'' + value + '\'');
            }
          };
          var parseValueForXMove = function parseValueForXMove() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var normalValue = value.trim().toLowerCase();

            switch (normalValue) {
              case '':
                return '#move';

              case '#move':
              case '#up':
              case '#down':
                return normalValue;

              default:
                throw new Error('XMove: invalid value, \'' + value + '\'');
            }
          };
          var parseValue = {
            XClick: parseValueForXClick,
            XClickRelative: parseValueForXClick,
            XMove: parseValueForXMove,
            XMoveRelative: parseValueForXMove
          }[cmd];

          var _isRelative2 = /relative/i.test(cmd);

          return Object(x_user_io["getXUserIO"])().sanityCheck().then(function () {
            var realTarget = _parseTarget3(target);
            var realValue = parseValue(value);

            var pNativeXYParams = function () {
              if (_isRelative2 && realTarget.type !== 'visual_search') {
                throw new Error(cmd + ' only accepts a vision image as target');
              }

              switch (realTarget.type) {
                case 'locator':
                  {
                    return runCommand(init_player_extends({}, command, {
                      cmd: 'locate',
                      target: realTarget.value.locator,
                      value: ''
                    })).then(function (result) {
                      var rect = result.rect;

                      if (!rect) throw new Error('no rect data returned');

                      var x = rect.x + rect.width / 2;
                      var y = rect.y + rect.height / 2;

                      if (isNaN(x)) throw new Error('empty x');
                      if (isNaN(y)) throw new Error('empty y');

                      return {
                        type: 'viewport',
                        offset: { x: x, y: y }
                      };
                    });
                  }

                case 'visual_search':
                  {
                    return runCsFreeCommands(init_player_extends({}, command, {
                      cmd: 'visualAssert',
                      target: realTarget.value.query,
                      value: '',
                      extra: init_player_extends({}, command.extra || {}, {
                        // Note: `relativeVisual` is used in bg.js, for call of `visualAssert` that doesn't specify relativeVisual,
                        // it still uses file name postfix "_relative" to tell whether it's relative (green/pink boxes) or not
                        relativeVisual: _isRelative2
                      })
                    })).then(function (result) {
                      var best = result.best;

                      if (!best) throw new Error('no best found from result of verifyAssert triggered by XClick');

                      var x = best.left + best.width / 2;
                      var y = best.top + best.height / 2;

                      if (isNaN(x)) throw new Error('empty x');
                      if (isNaN(y)) throw new Error('empty y');

                      switch (vars.get('!CVSCOPE')) {
                        case 'desktop':
                          {
                            return {
                              type: 'desktop',
                              offset: { x: x, y: y },
                              originalResult: result
                            };
                          }

                        case 'browser':
                          {
                            return {
                              type: 'viewport',
                              offset: { x: x, y: y },
                              originalResult: result
                            };
                          }

                        default:
                          throw new Error('Unknown CVSCOPE value: \'' + vars.get('!CVSCOPE') + '\'');
                      }
                    });
                  }

                case 'ocr':
                  {
                    return runCsFreeCommands(init_player_extends({}, command, {
                      cmd: 'OCRSearch',
                      target: realTarget.value.query,
                      value: '__ocrResult__'
                    })).then(function (result) {
                      var best = result.best;

                      if (!best) throw new Error('no match found for \'' + target + '\'');

                      return {
                        type: vars.get('!CVSCOPE') === 'desktop' ? 'desktop' : 'viewport',
                        offset: Object(ocr["ocrMatchCenter"])(best),
                        originalResult: result
                      };
                    });
                  }

                case 'desktop_coordinates':
                  {
                    var _coordinates = realTarget.value.coordinates;


                    return Promise.resolve({
                      type: 'desktop',
                      offset: {
                        x: parseFloat(_coordinates[0]),
                        y: parseFloat(_coordinates[1])
                      }
                    });
                  }

                case 'viewport_coordinates':
                  {
                    var _coordinates2 = realTarget.value.coordinates;


                    return Promise.resolve({
                      type: 'viewport',
                      offset: {
                        x: parseFloat(_coordinates2[0]),
                        y: parseFloat(_coordinates2[1])
                      }
                    });
                  }
              }
            }();

            return pNativeXYParams.then(function (_ref23) {
              var type = _ref23.type,
                  offset = _ref23.offset,
                  _ref23$originalResult = _ref23.originalResult,
                  originalResult = _ref23$originalResult === undefined ? {} : _ref23$originalResult;

              // Note: should not bring play tab to front if it's in desktop mode
              var prepare = vars.get('!CVSCOPE') === 'desktop' ? Promise.resolve() : runCsFreeCommands({ cmd: 'bringBrowserToForeground' });

              return prepare.then(function () {
                return Object(utils["delay"])(function () {}, 300);
              }).then(function () {
                var api = Object(xy["getNativeXYAPI"])();

                var _ref24 = function () {
                  switch (realValue) {
                    case '#left':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].Click];
                    case '#middle':
                      return [xy["MouseButton"].Middle, xy["MouseEventType"].Click];
                    case '#right':
                      return [xy["MouseButton"].Right, xy["MouseEventType"].Click];
                    case '#doubleclick':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].DoubleClick];
                    case '#shiftclick':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].ShiftClick];
                    case '#ctrlclick':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].CtrlClick];
                    case '#move':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].Move];
                    case '#up':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].Up];
                    case '#down':
                      return [xy["MouseButton"].Left, xy["MouseEventType"].Down];
                    default:
                      throw new Error('Unsupported realValue: ' + realValue);
                  }
                }(),
                    _ref25 = init_player_slicedToArray(_ref24, 2),
                    button = _ref25[0],
                    eventType = _ref25[1];

                var event = {
                  button: button,
                  x: offset.x,
                  y: offset.y,
                  type: eventType
                };

                console.log(cmd + ' - event', type, event);
                var pSendMouseEvent = type === 'desktop' ? api.sendMouseEvent(event) : api.sendViewportMouseEvent(event, {
                  markPage: function markPage() {
                    return ipc_cs["a" /* default */].ask('PANEL_TOGGLE_HIGHLIGHT_VIEWPORT', { on: true }).then(function () {
                      return Object(utils["delay"])(function () {}, 200);
                    });
                  },
                  unmarkPage: function unmarkPage() {
                    return ipc_cs["a" /* default */].ask('PANEL_TOGGLE_HIGHLIGHT_VIEWPORT', { on: false }).then(function () {
                      return Object(utils["delay"])(function () {}, 200);
                    });
                  },
                  needCalibration: function needCalibration() {
                    return ipc_cs["a" /* default */].ask('PANEL_XCLICK_NEED_CALIBRATION', {}).catch(function (e) {
                      return true;
                    });
                  },
                  withDownloadBarHidden: function withDownloadBarHidden(fn) {
                    var hide = function hide() {
                      return ipc_cs["a" /* default */].ask('PANEL_DISABLE_DOWNLOAD_BAR', {}).catch(function (e) {
                        return true;
                      });
                    };
                    var show = function show() {
                      return ipc_cs["a" /* default */].ask('PANEL_ENABLE_DOWNLOAD_BAR', {}).catch(function (e) {
                        return true;
                      });
                    };

                    return hide().then(function () {
                      return fn();
                    }).then(function (data) {
                      return show().then(function () {
                        return data;
                      });
                    }, function (e) {
                      return show().then(function () {
                        throw e;
                      });
                    });
                  }
                });

                return pSendMouseEvent.then(function (success) {
                  if (!success) throw new Error('Failed to ' + cmd + ' ' + type + ' coordiates at [' + offset.x + ', ' + offset.y + ']');

                  // Note: `originalResult` is used by visualAssert to update !imageX and !imageY
                  return init_player_extends({}, originalResult, {
                    byPass: true
                  });
                });
              });
            });
          });
        }

      case 'captureDesktopScreenshot':
        {
          var cvApi = Object(desktop["getNativeCVAPI"])();
          var isJustFileName = function isJustFileName(str) {
            return !/[\\/]/.test(str);
          };
          var path = target && target.trim();
          var filePath = path && path.length > 0 ? path : undefined;
          var next = filePath && isJustFileName(filePath) ? function (actualPath) {
            return cvApi.readFileAsBlob(actualPath).then(function (blob) {
              return Object(services_storage["getStorageManager"])().getScreenshotStorage().overwrite(path, blob).then(function () {
                store.dispatch(listScreenshots());
                store.dispatch(addLog('info', 'desktop screenshot saved to screenshot storage with file name \'' + path + '\''));
              });
            });
          } : function (actualPath) {
            store.dispatch(addLog('info', 'desktop screenshot saved to hard drive at \'' + actualPath + '\''));
          };

          return cvApi.captureDesktop({ path: filePath }).then(next).then(function () {
            return {
              byPass: true
            };
          });
        }

      default:
        return undefined;
    }
  };

  return runCsFreeCommands;
};

var init_player_interpretCSVCommands = function interpretCSVCommands(_ref26) {
  var store = _ref26.store,
      vars = _ref26.vars;
  return function (command, index) {
    var csvStorage = Object(services_storage["getStorageManager"])().getCSVStorage();
    var cmd = command.cmd,
        target = command.target,
        value = command.value;


    switch (cmd) {
      case 'csvRead':
        {
          return csvStorage.exists(target).then(function (isExisted) {
            if (!isExisted) {
              vars.set({ '!CsvReadStatus': 'FILE_NOT_FOUND' }, true);
              throw new Error('csv file \'' + target + '\' does not exist');
            }

            return csvStorage.read(target, 'Text').then(parseFromCSV).then(function (rows) {
              // Note: !CsvReadLineNumber starts from 1
              var index = vars.get('!CsvReadLineNumber') - 1;
              var row = rows[index];

              if (index >= rows.length) {
                vars.set({ '!CsvReadStatus': 'END_OF_FILE' }, true);
                throw new Error('end of csv file reached');
              } else {
                vars.set({
                  '!CsvReadStatus': 'OK',
                  '!CsvReadMaxRow': rows.length
                }, true);
              }

              vars.clear(/^!COL\d+$/i);

              row.forEach(function (data, i) {
                vars.set(init_player_defineProperty({}, '!COL' + (i + 1), data));
              });
            });
          }).then(function () {
            return {
              isFlowLogic: true
            };
          });
        }

      case 'csvSave':
        {
          var csvLine = vars.get('!CSVLINE');

          if (!csvLine || !csvLine.length) {
            throw new Error('No data to save to csv');
          }

          return stringifyToCSV([csvLine]).then(function (newLineText) {
            var fileName = /\.csv$/i.test(target) ? target : target + '.csv';

            return csvStorage.exists(fileName).then(function (isExisted) {
              if (!isExisted) {
                return csvStorage.write(fileName, new Blob([newLineText]));
              }

              return csvStorage.read(fileName, 'Text').then(function (originalText) {
                var text = (originalText + '\n' + newLineText).replace(/\n+/g, '\n');
                return csvStorage.overwrite(fileName, new Blob([text]));
              });
            });
          }).then(function () {
            vars.clear(/^!CSVLINE$/);
            store.dispatch(listCSV());
          }).then(function () {
            return {
              isFlowLogic: true
            };
          });
        }

      default:
        return undefined;
    }
  };
};

// Note: initialize the player, and listen to all events it emits
var init_player_initPlayer = function initPlayer(store) {
  var vars = varsFactory();
  var macroCallStack = Object(call_stack["createMacroCallStack"])({
    getCurrentMacroRunningStatus: function getCurrentMacroRunningStatus() {
      var playerState = tcPlayer.getState();
      var reducerState = store.getState();
      var commandResults = Object(player_macro["getCommandResults"])({
        count: playerState.resources.length,
        doneIndices: getDoneCommandIndices(reducerState),
        errorIndices: getErrorCommandIndices(reducerState)
      });

      return {
        playerState: playerState,
        commandResults: commandResults,
        status: player_macro["MacroStatus"].Running,
        nextIndex: playerState.nextIndex
      };
    },
    updateSelectedMacro: function updateSelectedMacro(macro, runningStatus) {
      store.dispatch(editTestCase(macro.id));
    },
    restorePlayerState: function restorePlayerState(macro, runningStatus) {
      // Steps:
      // 1. Restore macro player state
      // 2. Restore player state in reducer
      var playerState = runningStatus.playerState;


      tcPlayer.setState(playerState);

      store.dispatch(setPlayerState({
        // Note: since we don't show loop info for subroutines,
        // `currentLoop` and `loops` in reducer state is always for initial call frame,
        // so no neep to restore that info from call stack before playing any frame
        //
        // currentLoop:         playerState.loopsCursor - playerState.loopsStart + 1,
        // loops:               playerState.loopsEnd - playerState.loopsStart + 1,
        nextCommandIndex: playerState.nextIndex
      }));
    },
    playMacro: function playMacro(macro, runningStatus, _ref27) {
      var isBottom = _ref27.isBottom,
          isResume = _ref27.isResume,
          frameId = _ref27.frameId;

      // Note: do not use clone here, otherwise will lose `callback` in playerState
      var playerState = init_player_extends({}, runningStatus.playerState);

      playerState.noEndEvent = !isBottom;

      // Note: frameId in extra will be available in all kinds of player events,
      // frameId is used as id for monitor, so that we can control monitors in player events
      playerState.extra = init_player_extends({}, playerState.extra || {}, {
        frameId: frameId,
        isBottomFrame: isBottom,
        isBackFromCalling: isResume
      });

      if (isResume) {
        tcPlayer.setState(playerState);
        // Note: already increase `nextIndex` by one
        tcPlayer.__setNext(runningStatus.nextIndex);

        return tcPlayer.play(tcPlayer.getState());
      } else {
        return tcPlayer.play(playerState);
      }
    }
  });

  var interpreter = new common_interpreter({
    run: interpretSpecialCommands({
      vars: vars,
      store: store,
      getTcPlayer: function getTcPlayer() {
        return tcPlayer;
      }
    })
  });
  var ocrCmdCounter = Object(command_counter["getOcrCommandCounter"])({
    initial: 0,
    getMax: function getMax() {
      var xmodulesStatus = store.getState().config.xmodulesStatus;


      switch (xmodulesStatus) {
        case 'unregistered':
          return config_default.a.xmodulesLimit.unregistered.ocrCommandCount;
        case 'free':
          return config_default.a.xmodulesLimit.free.ocrCommandCount;
        case 'pro':
          return config_default.a.xmodulesLimit.pro.ocrCommandCount;
        default:
          throw new Error('Unsupported xmodulesStatus \'' + xmodulesStatus + '\'');
      }
    },
    onMax: function onMax(cur, max, initial) {
      throw new Error('OCR conversion limit reached');
    }
  });
  var xCmdCounter = new counter["Counter"]({
    initial: 0,
    getMax: function getMax() {
      var xmodulesStatus = store.getState().config.xmodulesStatus;


      switch (xmodulesStatus) {
        case 'unregistered':
          return config_default.a.xmodulesLimit.unregistered.xCommandCount;
        case 'free':
          return config_default.a.xmodulesLimit.free.xCommandCount;
        case 'pro':
          return config_default.a.xmodulesLimit.pro.xCommandCount;
        default:
          throw new Error('Unsupported xmodulesStatus \'' + xmodulesStatus + '\'');
      }
    },
    onMax: function onMax(cur, max, initial) {
      throw new Error('XClick/XMove/XType ' + max + ' commands limit reached');
    }
  });
  var tcPlayer = init_player_initTestCasePlayer({ store: store, vars: vars, interpreter: interpreter, xCmdCounter: xCmdCounter, ocrCmdCounter: ocrCmdCounter });
  var tsPlayer = init_player_initTestSuitPlayer({ store: store, vars: vars, tcPlayer: tcPlayer, xCmdCounter: xCmdCounter, ocrCmdCounter: ocrCmdCounter });

  initMacroMonitor({ vars: vars, store: store });

  macroCallStack.on(call_stack_types["CallStackEvent"].BeforeRun, function (macroInfoList) {
    var lastMacroInfo = macroInfoList[macroInfoList.length - 1];
    var lastName = lastMacroInfo.name;
    var prevNames = macroInfoList.slice(0, -1).map(function (item) {
      return '\'' + item.name + '\'';
    });

    if (prevNames.length > 0) {
      store.dispatch(addLog('status', 'Running \'' + lastName + '\', called by ' + prevNames.join(' > ')));
    }
  });

  macroCallStack.on(call_stack_types["CallStackEvent"].AfterReturn, function (macroInfoList) {
    var lastMacroInfo = macroInfoList[macroInfoList.length - 1];
    var lastName = lastMacroInfo.name;
    var lastFrameId = lastMacroInfo.frameId;
    var prevNames = macroInfoList.slice(0, -1).map(function (item) {
      return '\'' + item.name + '\'';
    });

    Object(macro_monitor["getMacroMonitor"])().removeTarget(lastFrameId);

    if (prevNames.length > 0) {
      store.dispatch(addLog('status', 'Finished running \'' + lastName + '\', returning to ' + prevNames.join(' > ')));
    }
  });

  // Note: No need to return anything in this method.
  // Because both test case player and test suite player are cached in player.js
  // All later usage of player utilize `getPlayer` method
};

// Note: Standalone function to ask background to run a command
var init_player_askBackgroundToRunCommand = function askBackgroundToRunCommand(_ref28) {
  var command = _ref28.command,
      state = _ref28.state,
      store = _ref28.store,
      vars = _ref28.vars,
      preRun = _ref28.preRun;

  var useClipboard = /!clipboard/i.test(command.target + ';' + command.value);
  var prepare = !useClipboard ? Promise.resolve({ useClipboard: false }) : ipc_cs["a" /* default */].ask('GET_CLIPBOARD').then(function (clipboard) {
    return { useClipboard: true, clipboard: clipboard };
  });

  if (web_extension_default.a.isFirefox()) {
    switch (command.cmd) {
      case 'onDownload':
        store.dispatch(addLog('warning', 'onDownload - changing file names not supported by Firefox extension api yet'));
        break;
    }
  }

  return prepare.then(function (_ref29) {
    var useClipboard = _ref29.useClipboard,
        _ref29$clipboard = _ref29.clipboard,
        clipboard = _ref29$clipboard === undefined ? '' : _ref29$clipboard;

    // Set clipboard variable if it is used
    if (useClipboard) {
      vars.set({ '!CLIPBOARD': clipboard });
    }

    if (state.extra.isBottomFrame) {
      vars.set({
        '!LOOP': state.loopsCursor
      }, true);
    }

    vars.set({
      '!RUNTIME': Object(ts_utils["milliSecondsToStringInSecond"])(Object(macro_monitor["getMacroMonitor"])().getDataFromInspector(Object(call_stack["getMacroCallStack"])().bottom().id, monitor_types["MacroInspector"].LoopTimer))
    }, true);

    if (command.cmd === 'open') {
      command = init_player_extends({}, command, { href: state.startUrl });
    }

    // Note: translate shorthand '#efp'
    if (command.target && /^#efp$/i.test(command.target.trim())) {
      // eslint-disable-next-line no-template-curly-in-string
      command.target = '#elementfrompoint (${!imageX}, ${!imageY})';
    }

    if (command.cmd !== 'comment') {
      // Replace variables in 'target' and 'value' of commands
      ;['target', 'value'].forEach(function (field) {
        if (command[field] === undefined) return;

        var opts = command.cmd === 'storeEval' && field === 'target' || command.cmd === 'gotoIf' && field === 'target' || command.cmd === 'if' && field === 'target' || command.cmd === 'while' && field === 'target' ? { withHashNotation: true } : {};

        command = init_player_extends({}, command, init_player_defineProperty({}, field, vars.render(replaceEscapedChar(command.cmd === 'type' ? command[field] : command[field].trim(), command, field), opts)));
      });
    }

    // add timeout info to each command's extra
    // Please note that we must set the timeout info at runtime for each command,
    // so that timeout could be modified by some 'store' commands and affect
    // the rest of commands
    command = Object(utils["updateIn"])(['extra'], function (extra) {
      return init_player_extends({}, extra || {}, {
        timeoutPageLoad: vars.get('!TIMEOUT_PAGELOAD'),
        timeoutElement: vars.get('!TIMEOUT_WAIT'),
        timeoutDownload: vars.get('!TIMEOUT_DOWNLOAD'),
        lastCommandOk: vars.get('!LASTCOMMANDOK'),
        errorIgnore: !!vars.get('!ERRORIGNORE'),
        waitForVisible: !!vars.get('!WAITFORVISIBLE')
      });
    }, command);

    return preRun(command, state, function (command) {
      // Note: -1 will disable ipc timeout for 'pause' command
      var timeout = command.cmd === 'pause' ? -1 : null;

      return init_player_retryIfHeartBeatExpired(function () {
        return ipc_cs["a" /* default */].ask('PANEL_RUN_COMMAND', { command: command }, timeout);
      });
    });
  });
};

function initMacroMonitor(_ref30) {
  var store = _ref30.store,
      vars = _ref30.vars;

  Object(macro_monitor["getMacroMonitor"])(function (actionType, name, id, notBatch) {
    switch (actionType) {
      case macro_monitor["MacroParamsProviderType"].Constructor:
        {
          switch (name) {
            case monitor_types["MacroInspector"].Countdown:
              return [function () {
                getPlayer().stopWithError(new Error('macro \'' + Object(call_stack["getMacroCallStack"])().peek().resource.name + '\' timeout ' + vars.get('!TIMEOUT_MACRO') + 's (change the value in the settings if needed)'));
              }];

            case monitor_types["MacroInspector"].Timer:
            case monitor_types["MacroInspector"].LoopTimer:
            default:
              return [];
          }
        }

      case macro_monitor["MacroParamsProviderType"].Restart:
        {
          switch (name) {
            case monitor_types["MacroInspector"].Countdown:
              return [vars.get('!TIMEOUT_MACRO') * 1000, true];

            case monitor_types["MacroInspector"].Timer:
            case monitor_types["MacroInspector"].LoopTimer:
            default:
              return [];
          }
        }
    }
  });
}

var init_player_initTestCasePlayer = function initTestCasePlayer(_ref31) {
  var store = _ref31.store,
      vars = _ref31.vars,
      interpreter = _ref31.interpreter,
      xCmdCounter = _ref31.xCmdCounter,
      ocrCmdCounter = _ref31.ocrCmdCounter;

  // Note: use this to track `onError` command
  // `onError` works like a global try catch, it takes effects on any commands coming after `onError`
  // Multilple `onError` are allowed, latter one overwrites previous one.
  // The scope of `onError` is current loop
  var onErrorCommand = null;
  var player = getPlayer({
    prepare: function prepare(state) {
      // Each 'replay' has an independent variable scope,
      // with global variables as initial scope

      if (state.extra.isBottomFrame && !state.extra.isBackFromCalling) {
        vars.reset({ keepGlobal: true });
        vars.set(state.public.scope || {}, true);
        vars.set({
          '!StatusOK': true,
          '!WaitForVisible': false,
          '!IMAGEX': 0,
          '!IMAGEY': 0,
          '!BROWSER': web_extension_default.a.isFirefox() ? 'firefox' : 'chrome',
          '!OS': function () {
            var ua = window.navigator.userAgent;
            if (/windows/i.test(ua)) return 'windows';
            if (/mac/i.test(ua)) return 'mac';
            return 'linux';
          }()
        }, true);
      }

      interpreter.reset();
      interpreter.preprocess(state.resources);

      return ipc_cs["a" /* default */].ask('PANEL_START_PLAYING', {
        url: state.startUrl,
        shouldNotActivateTab: true
      });
    },
    run: function run(command, state) {
      return init_player_askBackgroundToRunCommand({
        command: command,
        state: state,
        store: store,
        vars: vars,
        preRun: function preRun(command, state, askBgToRun) {
          // Note: all commands need to be run by interpreter before it is sent to bg
          // so that interpreter could pick those flow logic commands and do its job

          return new Promise(function (resolve, reject) {
            // Note: inc() has a chance to throw xCommand limit reached error,
            // so it's easier to keep it in the Promise constructor
            if (/^(XType|XClick|XMove|XClickRelative|XMoveRelative)$/i.test(command.cmd)) {
              xCmdCounter.inc();
            }

            interpreter.run(command, state.nextIndex).then(function (result) {
              var byPass = result.byPass,
                  isFlowLogic = result.isFlowLogic,
                  nextIndex = result.nextIndex,
                  resetVars = result.resetVars;

              // Record onError command

              if (command.cmd === 'onError') {
                onErrorCommand = command;
              }

              if (byPass) return Promise.resolve(result);
              if (isFlowLogic) return Promise.resolve({ nextIndex: nextIndex });

              return askBgToRun(command);
            }).then(resolve, reject);
          });
        }
      }).catch(function (e) {
        // Note: it will just log errors instead of a stop of whole macro, in following situations
        // 1. variable !ERRORIGNORE is set to true
        // 2. There is an `onError` command ahead in current loop.
        // 3. it's in loop mode, and it's not the last loop, and onErrorInLoop is continue_next_loop,
        if (vars.get('!ERRORIGNORE')) {
          return {
            log: {
              error: e.message
            }
          };
        }

        if (onErrorCommand) {
          var value = onErrorCommand.value && onErrorCommand.value.trim();
          var target = onErrorCommand.target && onErrorCommand.target.trim();

          if (/^#restart$/i.test(target)) {
            store.dispatch(addLog('status', 'onError - about to restart'));

            e.restart = true;
            throw e;
          } else if (/^#goto$/i.test(target)) {
            store.dispatch(addLog('status', 'onError - about to goto label \'' + value + '\''));

            return Promise.resolve({
              log: {
                error: e.message
              },
              nextIndex: interpreter.commandIndexByLabel(value)
            });
          }
        }

        var continueNextLoop = state.mode === player_Player.C.MODE.LOOP && state.loopsCursor < state.loopsEnd && store.getState().config.onErrorInLoop === 'continue_next_loop';

        if (continueNextLoop) {
          if (/player: paused or stopped/.test(e.message)) {
            return {
              // Note: simply set nextIndex to command count, it will enter next loop
              nextIndex: state.resources.length
            };
          }

          return {
            log: {
              error: e.message
            },
            // Note: simply set nextIndex to command count, it will enter next loop
            nextIndex: state.resources.length
          };
        }

        // Note: set these status values to false
        // status of those logs above will be taken care of by `handleResult`
        vars.set({
          '!LastCommandOK': false,
          '!StatusOK': false
        }, true);

        throw e;
      });
    },
    handleResult: function handleResult(result, command, state) {
      var prepares = [];
      var getCurrentPlayer = function getCurrentPlayer() {
        var state = store.getState();

        switch (state.player.mode) {
          case constant["f" /* PLAYER_MODE */].TEST_CASE:
            return getPlayer({ name: 'testCase' });

          case constant["f" /* PLAYER_MODE */].TEST_SUITE:
            return getPlayer({ name: 'testSuite' });
        }
      };

      // Every command should return its window.url
      if (result && result.pageUrl) {
        vars.set({ '!URL': result.pageUrl }, true);
      }

      if (result && result.vars) {
        var newVars = Object(utils["objMap"])(function (val) {
          if (val && val.__undefined__) return undefined;
          return val;
        }, result.vars);

        log_default()('set vars', newVars);

        try {
          vars.set(newVars);

          // Note: if set value to !Clipboard, there is an async job we must get done before handleResult could return
          var clipBoardKey = Object.keys(result.vars).find(function (key) {
            return (/!clipboard/i.test(key)
            );
          });
          if (clipBoardKey) {
            prepares.push(ipc_cs["a" /* default */].ask('SET_CLIPBOARD', { value: result.vars[clipBoardKey] }));
          }

          // Note: if user sets !timeout_macro to some other value, re-calculate the time left
          var timeoutMacroKey = Object.keys(result.vars).find(function (key) {
            return (/!timeout_macro/i.test(key)
            );
          });

          if (timeoutMacroKey) {
            var frameId = Object(call_stack["getMacroCallStack"])().peek().id;
            Object(macro_monitor["getMacroMonitor"])().restartInspector(frameId, monitor_types["MacroInspector"].Countdown);
          }
        } catch (e) {
          return Promise.reject(e);
        }
      }

      var hasError = false;

      if (result && result.log) {
        if (result.log.info) {
          store.dispatch(addLog('echo', result.log.info, result.log.options));

          if (result.log.options && result.log.options.notification) {
            ipc_cs["a" /* default */].ask('PANEL_NOTIFY_ECHO', { text: result.log.info });
          }
        }

        if (result.log.warning) {
          store.dispatch(addLog('warning', result.log.warning, result.log.options));
        }

        if (result.log.error) {
          store.dispatch(addPlayerErrorCommandIndex(state.nextIndex));
          store.dispatch(addLog('error', result.log.error, { ignored: true }));
          hasError = true;
        }
      }

      // From spec: !StatusOK, very similar to !LastCommandOK but it does not get reset by a “good” command.
      // If set to error, it remains like this. But a user can use store | true | !StatusOK to manually reset it.
      if (command.cmd !== 'echo') {
        vars.set({ '!LastCommandOK': !hasError }, true);
      }

      if (hasError) {
        vars.set({ '!StatusOK': false }, true);
      }

      if (result && result.screenshot) {
        store.dispatch(addLog('info', 'a new screenshot captured'));

        Object(services_storage["getStorageManager"])().getScreenshotStorage().getLink(result.screenshot.name).then(function (link) {
          return init_player_extends({}, result.screenshot, {
            url: link
          });
        }).then(function (ss) {
          store.dispatch(listScreenshots());
        }).catch(function (e) {
          log_default.a.error('screenshot obj error 1', e);
          log_default.a.error('screenshot obj error stack', e.stack);
        });
      }

      if (result && result.control) {
        switch (result.control.type) {
          case 'pause':
            // Important: should only pause test case player, not test suite player
            // Because once test suite player is paused, it is supposed to run the test case from start again
            ipc_cs["a" /* default */].ask('PANEL_NOTIFY_AUTO_PAUSE', {});

            // pause() returns a promise that doesn't resolve,
            // must return that promise here to pause any further execution
            return getPlayer({ name: 'testCase' }).pause();

          default:
            throw new Error('Control type \'' + result.control.type + '\' not supported yet');
        }
      }

      if (/^(fast|medium|slow)$/i.test(vars.get('!REPLAYSPEED'))) {
        var val = vars.get('!REPLAYSPEED').toUpperCase();
        player.setPostDelay({
          FAST: 0,
          MEDIUM: 300,
          SLOW: 2000
        }[val]);
      }

      // For those flow logic that set nextIndex directly in Interpreter.run method
      if (result && result.nextIndex !== undefined) {
        return Promise.all(prepares).then(function () {
          return result.nextIndex;
        });
      }

      // For those flow logic that has to get result from bg
      // and return nextIndex in Interpreter.postRun
      return Promise.all(prepares).then(function () {
        return interpreter.postRun(command, state.nextIndex, result);
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return data.nextIndex;
      });
    }
  }, {
    preDelay: 0
  });

  player.on('BREAKPOINT', function () {
    ipc_cs["a" /* default */].ask('PANEL_NOTIFY_BREAKPOINT', {});
  });

  player.on('LOOP_START', function (_ref32) {
    var loopsCursor = _ref32.loopsCursor,
        extra = _ref32.extra;

    if (extra.isBottomFrame) {
      // Note: set 'csv read line number' to loops whenever a new loop starts
      vars.set({
        '!CsvReadLineNumber': loopsCursor,
        '!visualSearchArea': 'viewport'
      }, true);
    }

    var frameId = extra.frameId;

    // Note: reset macro timeout, and loop timer on each loop

    Object(macro_monitor["getMacroMonitor"])().restartInspector(frameId, monitor_types["MacroInspector"].LoopTimer);
    Object(macro_monitor["getMacroMonitor"])().restartInspector(frameId, monitor_types["MacroInspector"].Countdown);

    // Note: reset onErrorCommand on each loop
    onErrorCommand = null;
  });

  player.on('LOOP_RESTART', function (_ref33) {
    var currentLoop = _ref33.currentLoop,
        loopsCursor = _ref33.loopsCursor;

    ipc_cs["a" /* default */].ask('PANEL_STOP_PLAYING', {});
    ipc_cs["a" /* default */].ask('PANEL_START_PLAYING', { shouldNotActivateTab: true });
    store.dispatch(addLog('status', 'Current loop: ' + currentLoop));
  });

  player.on('START', function (_ref34) {
    var title = _ref34.title,
        extra = _ref34.extra,
        loopsCursor = _ref34.loopsCursor;

    log_default()('START');

    if (store.getState().player.mode === constant["f" /* PLAYER_MODE */].TEST_CASE && extra.isBottomFrame && !extra.isBackFromCalling) {
      xCmdCounter.reset();
    }

    store.dispatch(startPlaying());

    store.dispatch(setPlayerState({
      status: constant["g" /* PLAYER_STATUS */].PLAYING,
      nextCommandIndex: null
    }));

    if (!extra.isBackFromCalling) {
      store.dispatch(updateMacroExtra(getCurrentMacroId(store.getState()), {
        doneCommandIndices: [],
        errorCommandIndices: []
      }));
    }

    store.dispatch(addLog('status', 'Playing macro ' + title));
  });

  player.on('PREPARED', function (_ref35) {
    var extra = _ref35.extra;

    if (!extra.isBackFromCalling) {
      // PREPARED event means all variables are already set
      var frameId = extra.frameId;

      Object(macro_monitor["getMacroMonitor"])().addTarget(frameId);
    }
  });

  player.on('PAUSED', function () {
    log_default()('PAUSED');
    store.dispatch(setPlayerState({
      status: constant["g" /* PLAYER_STATUS */].PAUSED
    }));

    store.dispatch(addLog('status', 'Macro paused'));

    // Pause all monitors (timers, coundown)
    Object(macro_monitor["getMacroMonitor"])().pause();
  });

  player.on('RESUMED', function () {
    log_default()('RESUMED');
    store.dispatch(setPlayerState({
      status: constant["g" /* PLAYER_STATUS */].PLAYING
    }));

    store.dispatch(addLog('status', 'Macro resumed'));

    // Resume all monitors (timers, coundown)
    Object(macro_monitor["getMacroMonitor"])().resume();
  });

  player.on('END', function (obj) {
    var _logMsg;

    log_default()('END', obj);

    ipc_cs["a" /* default */].ask('PANEL_STOP_PLAYING', {});

    store.dispatch(stopPlaying());

    store.dispatch(setPlayerState({
      status: constant["g" /* PLAYER_STATUS */].STOPPED,
      stopReason: obj.reason,
      nextCommandIndex: null,
      timeoutStatus: null
    }));

    var tcId = obj.extra && obj.extra.id;

    switch (obj.reason) {
      case player.C.END_REASON.COMPLETE:
        if (tcId) store.dispatch(updateMacroPlayStatus(tcId, constant["i" /* TEST_CASE_STATUS */].SUCCESS));
        message_default.a.success('Macro completed running', 1.5);
        break;

      case player.C.END_REASON.ERROR:
        if (tcId) store.dispatch(updateMacroPlayStatus(tcId, constant["i" /* TEST_CASE_STATUS */].ERROR));
        message_default.a.error('Macro encountered some error', 1.5);
        break;
    }

    var logMsg = (_logMsg = {}, init_player_defineProperty(_logMsg, player.C.END_REASON.COMPLETE, 'Macro completed'), init_player_defineProperty(_logMsg, player.C.END_REASON.ERROR, 'Macro failed'), init_player_defineProperty(_logMsg, player.C.END_REASON.MANUAL, 'Macro was stopped manually'), _logMsg);

    var frameId = obj.extra.frameId;

    var ms = Object(macro_monitor["getMacroMonitor"])().getDataFromInspector(frameId, monitor_types["MacroInspector"].Timer);

    store.dispatch(addLog('info', logMsg[obj.reason] + (' (Runtime ' + Object(ts_utils["milliSecondsToStringInSecond"])(ms) + ')')));

    Object(macro_monitor["getMacroMonitor"])().stopInspector(frameId, monitor_types["MacroInspector"].Timer);
    Object(macro_monitor["getMacroMonitor"])().stopInspector(frameId, monitor_types["MacroInspector"].LoopTimer);
    Object(macro_monitor["getMacroMonitor"])().stopInspector(frameId, monitor_types["MacroInspector"].Countdown);

    // Note: show in badage the play result
    if (obj.reason === player.C.END_REASON.COMPLETE || obj.reason === player.C.END_REASON.ERROR) {
      ipc_cs["a" /* default */].ask('PANEL_UPDATE_BADGE', init_player_extends({
        type: 'play',
        blink: 5000,
        text: obj.reason === player.C.END_REASON.COMPLETE ? 'done' : 'err'
      }, obj.reason === player.C.END_REASON.COMPLETE ? {} : { color: 'orange' }));
    }
  });

  player.on('TO_PLAY', function (_ref36) {
    var index = _ref36.index,
        currentLoop = _ref36.currentLoop,
        loops = _ref36.loops,
        resource = _ref36.resource,
        extra = _ref36.extra;

    log_default()('TO_PLAY', index, resource, 'currentLoop', currentLoop);

    store.dispatch(setPlayerState(init_player_extends({
      timeoutStatus: null,
      nextCommandIndex: index
    }, extra.isBottomFrame ? {
      currentLoop: currentLoop,
      loops: loops
    } : {})));

    var triple = [resource.cmd, resource.target, resource.value];
    var str = [''].concat(triple, ['']).join(' | ');
    store.dispatch(addLog('reflect', 'Executing: ' + str));

    // Note: show in badage the current command index (start from 1)
    ipc_cs["a" /* default */].ask('PANEL_UPDATE_BADGE', {
      type: 'play',
      text: '' + (index + 1)
    });
  });

  player.on('PLAYED_LIST', function (_ref37) {
    var indices = _ref37.indices;

    log_default()('PLAYED_LIST', indices);

    store.dispatch(updateMacroDoneCommandsIndices(getCurrentMacroId(store.getState()), indices));
  });

  player.on('ERROR', function (_ref38) {
    var errorIndex = _ref38.errorIndex,
        msg = _ref38.msg,
        restart = _ref38.restart;

    log_default.a.error('command index: ' + errorIndex + ', Error: ' + msg);
    store.dispatch(addPlayerErrorCommandIndex(errorIndex));
    store.dispatch(addLog('error', msg));

    // Note: restart this player if restart is set to true in error, and it's not in test suite mode
    // Delay the execution so that 'END' event is emitted, and player is in stopped state
    if (restart && store.getState().player.mode === constant["f" /* PLAYER_MODE */].TEST_CASE) {
      setTimeout(function () {
        return player.replayLastConfig();
      }, 50);
    }
  });

  player.on('DELAY', function (_ref39) {
    var total = _ref39.total,
        past = _ref39.past;

    store.dispatch(setPlayerState({
      timeoutStatus: {
        type: 'delay',
        total: total,
        past: past
      }
    }));
  });

  return player;
};

var init_player_initTestSuitPlayer = function initTestSuitPlayer(_ref40) {
  var store = _ref40.store,
      vars = _ref40.vars,
      tcPlayer = _ref40.tcPlayer,
      xCmdCounter = _ref40.xCmdCounter,
      ocrCmdCounter = _ref40.ocrCmdCounter;

  var tsTracker = new TimeTracker();
  var tcTracker = new TimeTracker();
  var state = {
    isPlaying: false,
    tsId: null,
    lastErrMsg: '',
    testCasePromiseHandlers: null,
    reports: [],
    stopReason: null

  };
  var setState = function setState(st) {
    state = init_player_extends({}, state, st);
  };
  var addReport = function addReport(report) {
    setState({
      reports: state.reports.concat(report)
    });
  };
  var tsPlayer = getPlayer({
    name: 'testSuite',
    prepare: function prepare() {
      setState({
        isPlaying: true,
        reports: []
      });
    },
    run: function run(testCase, playerState) {
      var tcId = testCase.id;
      var tcLoops = testCase.loops > 1 ? parseInt(testCase.loops, 10) : 1;
      var state = store.getState();
      var tcs = state.editor.testCases;
      var tc = tcs.find(function (tc) {
        return tc.id === tcId;
      });
      var openTc = tc && tc.data.commands.find(function (c) {
        return c.cmd.toLowerCase() === 'open';
      });

      if (!tc) {
        throw new Error('macro does not exist');
      }

      // update editing && start to play tcPlayer
      store.dispatch(editTestCase(tc.id));
      store.dispatch(playerPlay({
        macroId: tc.id,
        title: tc.name,
        extra: {
          id: tc.id,
          name: tc.name,
          shouldNotActivateTab: true
        },
        mode: tcLoops === 1 ? player_Player.C.MODE.STRAIGHT : player_Player.C.MODE.LOOP,
        loopsStart: 1,
        loopsEnd: tcLoops,
        startIndex: 0,
        startUrl: openTc ? openTc.target : null,
        resources: tc.data.commands,
        postDelay: state.config.playCommandInterval * 1000,
        // Note: This logic is to make sure !CMD_VAR${n} only take effect on first macro in a test suite
        overrideScope: playerState.nextIndex !== 0 ? {} : playerState.public.scope
      }));

      return new Promise(function (resolve, reject) {
        setState({
          testCasePromiseHandlers: { resolve: resolve, reject: reject }
        });
      });
    },
    handleResult: function handleResult(result, testCase, state) {
      // return undefined, so that player will play the next one
      return Promise.resolve(undefined);
    }
  }, { preDelay: 0 });

  tsPlayer.on('START', function (_ref41) {
    var title = _ref41.title,
        extra = _ref41.extra;

    log_default()('START SUITE');
    tsTracker.reset();
    xCmdCounter.reset();

    setState({
      tsId: extra.id,
      isPlaying: true,
      stopReason: null
    });

    store.dispatch(addLog('status', 'Playing test suite ' + title));
    store.dispatch(setPlayerMode(constant["f" /* PLAYER_MODE */].TEST_SUITE));
    store.dispatch(updateTestSuite(extra.id, function (ts) {
      return init_player_extends({}, ts, {
        playStatus: {
          isPlaying: true,
          currentIndex: -1,
          errorIndices: [],
          doneIndices: []
        }
      });
    }));
  });

  tsPlayer.on('PAUSED', function (_ref42) {
    var extra = _ref42.extra;

    log_default()('PAUSED SUITE');
    store.dispatch(addLog('status', 'Test suite paused'));
    tcPlayer.pause();
  });

  tsPlayer.on('RESUMED', function (_ref43) {
    var extra = _ref43.extra;

    log_default()('RESUMED SUIITE');
    store.dispatch(addLog('status', 'Test suite resumed'));
    tcPlayer.resume();
  });

  tsPlayer.on('TO_PLAY', function (_ref44) {
    var index = _ref44.index,
        extra = _ref44.extra;

    tcTracker.reset();

    setState({
      lastErrMsg: '',
      tcIndex: index
    });

    store.dispatch(updateTestSuite(extra.id, function (ts) {
      return init_player_extends({}, ts, {
        playStatus: init_player_extends({}, ts.playStatus, {
          currentIndex: index
        })
      });
    }));
  });

  tsPlayer.on('PLAYED_LIST', function (_ref45) {
    var indices = _ref45.indices,
        extra = _ref45.extra;

    store.dispatch(updateTestSuite(extra.id, function (ts) {
      return init_player_extends({}, ts, {
        playStatus: init_player_extends({}, ts.playStatus, {
          doneIndices: indices
        })
      });
    }));
  });

  tsPlayer.on('END', function (_ref46) {
    var reason = _ref46.reason,
        extra = _ref46.extra,
        opts = _ref46.opts;

    if (!state.isPlaying) return;

    setState({
      isPlaying: false
    });

    // Note: reset player mode to 'test case', it will only be 'test suite'
    // during replays of test suites
    store.dispatch(setPlayerMode(constant["f" /* PLAYER_MODE */].TEST_CASE));
    store.dispatch(updateTestSuite(extra.id, function (ts) {
      return init_player_extends({}, ts, {
        playStatus: init_player_extends({}, ts.playStatus, {
          isPlaying: false,
          currentIndex: -1
        })
      });
    }));

    if (reason === player_Player.C.END_REASON.MANUAL && (!opts || !opts.tcPlayerStopped)) {
      tcPlayer.stop();
    }

    // Note: give it some time, in case we're stopping tc player above
    setTimeout(function () {
      var _statusMap;

      var totalCount = state.reports.length;
      var failureCount = state.reports.filter(function (r) {
        return r.stopReason === player_Player.C.END_REASON.ERROR;
      }).length;
      var successCount = totalCount - failureCount;

      var statusMap = (_statusMap = {}, init_player_defineProperty(_statusMap, player_Player.C.END_REASON.MANUAL, 'Manually stopped'), init_player_defineProperty(_statusMap, player_Player.C.END_REASON.COMPLETE, 'OK'), init_player_defineProperty(_statusMap, player_Player.C.END_REASON.ERROR, 'Error'), _statusMap);
      var tsStatus = statusMap[state.stopReason || reason];
      var lines = ['Test Suite name: ' + extra.name, 'Start Time: ' + tsTracker.startTime.toString(), 'Overall status: ' + tsStatus + ', Runtime: ' + tsTracker.elapsedInSeconds(), 'Macro run: ' + totalCount, 'Success: ' + successCount, 'Failure: ' + failureCount, 'Macro executed:'];

      state.reports.forEach(function (r) {
        var tcStatus = statusMap[r.stopReason] + (r.stopReason === player_Player.C.END_REASON.ERROR ? ': ' + r.errMsg : '');
        lines.push(r.name + ' (' + tcStatus + ', Runtime: ' + r.usedTime + ')');
      });

      store.dispatch(addLog('info', lines.join('\n')));
    }, 200);
  });

  // Test Case Player: we should handle cases when test case player stops automatically
  tcPlayer.on('END', function (_ref47) {
    var reason = _ref47.reason,
        extra = _ref47.extra;

    if (store.getState().player.mode !== constant["f" /* PLAYER_MODE */].TEST_SUITE) return;

    addReport({
      id: extra.id,
      name: extra.name,
      errMsg: state.lastErrMsg,
      stopReason: reason,
      usedTime: tcTracker.elapsedInSeconds()
    });

    // Avoid a 'stop' loop between tsPlayer and tcPlayer
    switch (reason) {
      case player_Player.C.END_REASON.MANUAL:
        break;

      case player_Player.C.END_REASON.COMPLETE:
        // Note: delay the next macro run of test suite for a little bit,
        // so call stack has time to take care of itself first (like pop current frame)
        setTimeout(function () {
          state.testCasePromiseHandlers.resolve(true);
        }, 10);
        break;

      case player_Player.C.END_REASON.ERROR:
        store.dispatch(updateTestSuite(state.tsId, function (ts) {
          return init_player_extends({}, ts, {
            playStatus: init_player_extends({}, ts.playStatus, {
              errorIndices: ts.playStatus.errorIndices.concat([tsPlayer.state.nextIndex])
            })
          });
        }));

        setState({
          stopReason: player_Player.C.END_REASON.ERROR
        });

        // Updated on 2017-12-15, Even if there is error, test suite should move on to next macro
        // Note: tell tsPlayer not to trigger tcPlayer stop again
        // tsPlayer.stop({ tcPlayerStopped: true })
        state.testCasePromiseHandlers.resolve(true);
        break;
    }
  });

  tcPlayer.on('ERROR', function (_ref48) {
    var msg = _ref48.msg,
        restart = _ref48.restart;

    setState({
      lastErrMsg: msg
    });

    // Note: restart this player if restart is set to true in error, and it's not in test suite mode
    // Delay the execution so that 'END' event is emitted, and player is in stopped state
    //
    // Note that a couple moments after tcPlayer encounters an error and enter stopped state, it tries to set player mode
    // back to test case mode  (in tsPlayer 'END' event)
    if (restart && store.getState().player.mode === constant["f" /* PLAYER_MODE */].TEST_SUITE) {
      setTimeout(function () {
        return tsPlayer.replayLastConfig();
      }, 50);
    }
  });

  return tsPlayer;
};
// CONCATENATED MODULE: ./src/components/header.js




















































































































var header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var header_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function header_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function header_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























var ocrLanguageOptions = function () {
  var list = Object.keys(languages["languages"]).map(function (key) {
    return {
      text: languages["languages"][key].name,
      value: languages["languages"][key].lang
    };
  });

  list.sort(function (a, b) {
    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  });

  return list;
}();

var header_Header = function (_React$Component) {
  header_inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    header_classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = header_possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showPlayLoops: false,
      loopsStart: 1,
      loopsEnd: 3,
      xModules: [Object(xfile["getXFile"])(), Object(x_user_io["getXUserIO"])(), Object(xdesktop["getXDesktop"])()],
      xModuleData: {},
      xFileRootDirChanged: false,
      registerKey: '',
      websiteWhiteListText: ''
    }, _this.getPlayer = function (name) {
      if (name) return getPlayer({ name: name });

      switch (_this.props.player.mode) {
        case constant["f" /* PLAYER_MODE */].TEST_CASE:
          return getPlayer({ name: 'testCase' });

        case constant["f" /* PLAYER_MODE */].TEST_SUITE:
          return getPlayer({ name: 'testSuite' });
      }
    }, _this.getTestCaseName = function () {
      var src = _this.props.editing.meta.src;

      return src && src.name && src.name.length ? src.name : 'Untitled';
    }, _this.togglePlayLoopsModal = function (toShow) {
      _this.setState({
        showPlayLoops: toShow
      });
    }, _this.onToggleRecord = function () {
      if (_this.props.config.cvScope === 'desktop') {
        var msg = 'Recording is only available for browser automation. Desktop automation macros are created by adding XClick and other visual commands step by step.';

        _this.props.addLog('warning', msg);
        return message_default.a.warn(msg, 2.5);
      }

      if (_this.props.status === constant["a" /* APP_STATUS */].RECORDER) {
        _this.props.stopRecording();
        // Note: remove targetOptions from all commands
        _this.props.normalizeCommands();
      } else {
        _this.props.startRecording();
      }

      _this.setState({ lastOperation: 'record' });
    }, _this.onClickPlayLoops = function () {
      var _this$state = _this.state,
          loopsStart = _this$state.loopsStart,
          loopsEnd = _this$state.loopsEnd;


      if (loopsStart < 0) {
        return message_default.a.error('Start value must be no less than zero', 1.5);
      }

      if (loopsEnd < loopsStart) {
        return message_default.a.error('Max value must be greater than start value', 1.5);
      }

      var player = _this.getPlayer();
      var commands = _this.props.editing.commands;
      var src = _this.props.editing.meta.src;

      var openTc = commands.find(function (tc) {
        return tc.cmd.toLowerCase() === 'open';
      });

      _this.props.playerPlay({
        macroId: src && src.id,
        loopsEnd: loopsEnd,
        loopsStart: loopsStart,
        title: _this.getTestCaseName(),
        extra: {
          id: src && src.id
        },
        mode: player.C.MODE.LOOP,
        startIndex: 0,
        startUrl: openTc ? openTc.target : null,
        resources: _this.props.editing.commands,
        postDelay: _this.props.config.playCommandInterval * 1000
      });

      _this.setState({ lastOperation: 'play' });
      _this.togglePlayLoopsModal(false);
    }, _this.onCancelPlayLoops = function () {
      _this.togglePlayLoopsModal(false);
      _this.setState({
        loopsToPlay: 2
      });
    }, _this.onChangePlayLoops = function (field, value) {
      _this.setState(header_defineProperty({}, field, parseInt(value, 10)));
    }, _this.onClickSave = function () {
      return getSaveTestCase().save();
    }, _this.playCurrentMacro = function (isStep) {
      var commands = _this.props.editing.commands;
      var src = _this.props.editing.meta.src;

      var openTc = commands.find(function (tc) {
        return tc.cmd.toLowerCase() === 'open';
      });

      _this.setState({ lastOperation: 'play' });

      _this.props.playerPlay({
        macroId: src && src.id,
        title: _this.getTestCaseName(),
        extra: {
          id: src && src.id
        },
        mode: getPlayer().C.MODE.STRAIGHT,
        startIndex: 0,
        startUrl: openTc ? openTc.target : null,
        resources: commands,
        postDelay: _this.props.config.playCommandInterval * 1000,
        isStep: isStep
      });
    }, _this.playCurrentLine = function () {
      var commands = _this.props.editing.commands;
      var _this$props$editing$m = _this.props.editing.meta,
          src = _this$props$editing$m.src,
          selectedIndex = _this$props$editing$m.selectedIndex;

      var commandIndex = selectedIndex === -1 ? 0 : selectedIndex || 0;

      return _this.props.playerPlay({
        macroId: src && src.id,
        title: _this.getTestCaseName(),
        extra: {
          id: src && src.id
        },
        mode: player_Player.C.MODE.SINGLE,
        startIndex: commandIndex,
        startUrl: null,
        resources: commands,
        postDelay: _this.props.config.playCommandInterval * 1000,
        callback: function callback(err, res) {
          if (err) return;

          // Note: auto select next command
          if (commandIndex + 1 < commands.length) {
            _this.props.selectCommand(commandIndex + 1, true);
          }
        }
      });
    }, _this.checkRegisterKey = function () {
      var registerKey = _this.state.registerKey;

      var checkProAccount = function checkProAccount(str) {
        if (str.length !== 15) return false;
        if (str.charAt(2) !== 'P') return false;
        return true;
      };
      var checkFreeAccount = function checkFreeAccount(str) {
        if (str.length !== 15) return false;
        if (str.charAt(2) !== 'F') return false;
        return true;
      };

      var checkUnregistered = function checkUnregistered(str) {
        return str === 'freeman';
      };

      if (checkProAccount(registerKey)) {
        _this.props.updateConfig({ xmodulesStatus: 'pro' });
        message_default.a.success('XModules Pro Plan verified');
        Object(services_storage["getStorageManager"])().emit(services_storage["StorageManagerEvent"].RootDirChanged);
        _this.resetRegisterKey();
        return;
      }

      if (checkFreeAccount(registerKey)) {
        _this.props.updateConfig({ xmodulesStatus: 'free' });
        message_default.a.success('XModules Free Plan verified');
        Object(services_storage["getStorageManager"])().emit(services_storage["StorageManagerEvent"].RootDirChanged);
        _this.resetRegisterKey();
        return;
      }

      if (checkUnregistered(registerKey)) {
        _this.props.updateConfig({ xmodulesStatus: 'unregistered' });
        message_default.a.success('Unregistered');
        Object(services_storage["getStorageManager"])().emit(services_storage["StorageManagerEvent"].RootDirChanged);
        _this.resetRegisterKey();
        return;
      }

      message_default.a.error('Invalid license key');
    }, _temp), header_possibleConstructorReturn(_this, _ret);
  }

  // Play loops relative


  header_createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var history = this.props.history;


      this.props.setRoute(history.location.pathname);
      this.props.history.listen(function (location, action) {
        _this2.props.setRoute(history.location.pathname);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.ui.showSettings && !this.props.ui.showSettings) {
        this.onShowSettings();
      }

      if (nextProps.ui.showWebsiteWhiteList && !this.props.ui.showWebsiteWhiteList) {
        this.setState({
          websiteWhiteListText: (this.props.config.websiteWhiteList || []).join('\n')
        });
      }
    }
  }, {
    key: 'initXModules',
    value: function initXModules() {
      var _this3 = this;

      var xModules = this.state.xModules;

      // versionInfo: {
      //  installed: boolean
      //  version: string
      // },
      // checkResult: {
      //  error: string | null
      // }
      Promise.all(xModules.map(function (mod) {
        // Note: call init config for each xmodule and discard any error
        return mod.initConfig().catch(function (e) {}).then(function () {
          return mod.getVersion();
        }).then(function (versionInfo) {
          if (versionInfo.installed) {
            return mod.sanityCheck().then(function () {
              return { error: null };
            }, function (e) {
              return { error: e.message };
            }).then(function (checkResult) {
              return {
                versionInfo: versionInfo,
                checkResult: checkResult
              };
            });
          } else {
            return {
              versionInfo: versionInfo,
              checkResult: null
            };
          }
        });
      })).then(function (results) {
        var xModuleData = results.reduce(function (prev, r, i) {
          prev[xModules[i].getName()] = header_extends({}, r.versionInfo, {
            checkResult: r.checkResult,
            config: xModules[i].getCachedConfig()
          });
          return prev;
        }, {});

        _this3.setState({
          xModuleData: xModuleData,
          xFileRootDirChanged: false
        });
      });
    }
  }, {
    key: 'isEitherXModuleInstalled',
    value: function isEitherXModuleInstalled() {
      var xFileData = this.state.xModuleData[Object(xfile["getXFile"])().getName()];
      var xUserIOData = this.state.xModuleData[Object(x_user_io["getXUserIO"])().getName()];

      return xFileData && xFileData.installed || xUserIOData && xUserIOData.installed;
    }
  }, {
    key: 'resetRegisterKey',
    value: function resetRegisterKey() {
      this.setState({
        registerKey: ''
      });
    }
  }, {
    key: 'onShowSettings',
    value: function onShowSettings() {
      this.initXModules();
      this.resetRegisterKey();
    }
  }, {
    key: 'showSettingsModal',
    value: function showSettingsModal() {
      this.props.updateUI({ showSettings: true });
    }
  }, {
    key: 'renderPublicWebsiteWhiteList',
    value: function renderPublicWebsiteWhiteList() {
      var _this4 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'Embedded Macros Website Whitelist',
          className: 'whitelist-modal',
          width: 450,
          okText: 'Save',
          visible: this.props.ui.showWebsiteWhiteList,
          onCancel: function onCancel() {
            return _this4.props.updateUI({ showWebsiteWhiteList: false });
          },
          onOk: function onOk(close) {
            var text = _this4.state.websiteWhiteListText;
            var lines = text.split(/\n/g).map(function (str) {
              return str.trim();
            }).filter(function (str) {
              return str.length > 0;
            });

            _this4.props.updateConfig({ websiteWhiteList: lines });
            _this4.props.updateUI({ showWebsiteWhiteList: false });
            message_default.a.success('Saved');

            return Promise.resolve(true);
          }
        },
        react_default.a.createElement(
          'p',
          {
            style: { marginBottom: '10px' }
          },
          'Allow embedded macros to run ',
          react_default.a.createElement(
            'em',
            null,
            'without warning dialog'
          ),
          ', if started from the following sites:'
        ),
        react_default.a.createElement(input_default.a.TextArea, {
          placeholder: 'One url per line, e. g. https://a9t9.com/kantu',
          autosize: { minRows: 6, maxRows: 12 },
          value: this.state.websiteWhiteListText,
          style: { resize: 'vertical' },
          onChange: function onChange(e) {
            return _this4.setState({ websiteWhiteListText: e.target.value });
          }
        }),
        react_default.a.createElement(
          'p',
          {
            style: { color: 'green', marginTop: '20px' }
          },
          react_default.a.createElement(
            'a',
            {
              style: { float: 'right', marginLeft: '20px' },
              href: 'https://a9t9.com/x/idehelp?help=website_whitelist',
              target: '_blank'
            },
            'More info'
          ),
          'Only run embedded macros from websites you trust'
        )
      );
    }
  }, {
    key: 'renderPlayLoopModal',
    value: function renderPlayLoopModal() {
      var _this5 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'How many loops to play?',
          okText: 'Play',
          cancelText: 'Cancel',
          className: 'play-loop-modal',
          visible: this.state.showPlayLoops,
          onOk: this.onClickPlayLoops,
          onCancel: this.onCancelPlayLoops
        },
        react_default.a.createElement(
          row_default.a,
          null,
          react_default.a.createElement(
            col_default.a,
            { span: 10 },
            react_default.a.createElement(
              form_default.a.Item,
              { label: 'Start value' },
              react_default.a.createElement(input_default.a, {
                type: 'number',
                min: '0',
                value: this.state.loopsStart,
                onKeyDown: function onKeyDown(e) {
                  if (e.keyCode === 13) _this5.onClickPlayLoops();
                },
                onChange: function onChange(e) {
                  return _this5.onChangePlayLoops('loopsStart', e.target.value);
                }
              })
            )
          ),
          react_default.a.createElement(
            col_default.a,
            { span: 10, offset: 2 },
            react_default.a.createElement(
              form_default.a.Item,
              { label: 'Max' },
              react_default.a.createElement(input_default.a, {
                type: 'number',
                min: '0',
                value: this.state.loopsEnd,
                onKeyDown: function onKeyDown(e) {
                  if (e.keyCode === 13) _this5.onClickPlayLoops();
                },
                onChange: function onChange(e) {
                  return _this5.onChangePlayLoops('loopsEnd', e.target.value);
                }
              })
            )
          )
        ),
        react_default.a.createElement(
          'p',
          null,
          'The value of the loop counter is available in $',
          '{',
          '!LOOP',
          '}',
          ' variable'
        )
      );
    }
  }, {
    key: 'renderSettingModal',
    value: function renderSettingModal() {
      var _this6 = this;

      var onConfigChange = function onConfigChange(key, val) {
        _this6.props.updateConfig(header_defineProperty({}, key, val));
      };

      var displayConfig = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
      };

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'Settings',
          className: 'settings-modal',
          width: 650,
          footer: null,
          visible: this.props.ui.showSettings,
          onCancel: function onCancel() {
            return _this6.props.updateUI({ showSettings: false });
          }
        },
        react_default.a.createElement(
          tabs_default.a,
          {
            activeKey: this.props.ui.settingsTab || 'replay',
            onChange: function onChange(activeKey) {
              return _this6.props.updateUI({ settingsTab: activeKey });
            }
          },
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Replay', key: 'replay' },
            react_default.a.createElement(
              form_default.a,
              null,
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({ label: 'Replay Helper' }, displayConfig),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('playScrollElementsIntoView', e.target.checked);
                    },
                    checked: this.props.config.playScrollElementsIntoView
                  },
                  'Scroll elements into view during replay'
                ),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('playHighlightElements', e.target.checked);
                    },
                    checked: this.props.config.playHighlightElements
                  },
                  'Highlight elements during replay'
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({
                  label: react_default.a.createElement(
                    'a',
                    { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=command_interval' },
                    'Command Interval'
                  )
                }, displayConfig),
                react_default.a.createElement(
                  select_default.a,
                  {
                    style: { width: '200px' },
                    placeholder: 'interval',
                    value: '' + this.props.config.playCommandInterval,
                    onChange: function onChange(val) {
                      return onConfigChange('playCommandInterval', val);
                    }
                  },
                  react_default.a.createElement(
                    select_default.a.Option,
                    { value: '0' },
                    'Fast (no delay)'
                  ),
                  react_default.a.createElement(
                    select_default.a.Option,
                    { value: '0.3' },
                    'Medium (0.3s delay)'
                  ),
                  react_default.a.createElement(
                    select_default.a.Option,
                    { value: '2' },
                    'Slow (2s delay)'
                  )
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({
                  label: react_default.a.createElement(
                    'a',
                    { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=timeout_pageload' },
                    '!TIMEOUT_PAGELOAD'
                  )
                }, displayConfig),
                react_default.a.createElement(input_default.a, {
                  type: 'number',
                  min: '0',
                  style: { width: '70px' },
                  value: this.props.config.timeoutPageLoad,
                  onChange: function onChange(e) {
                    return onConfigChange('timeoutPageLoad', e.target.value);
                  },
                  placeholder: 'in seconds'
                }),
                react_default.a.createElement(
                  'span',
                  { className: 'tip' },
                  'Max. time for new page load'
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({
                  label: react_default.a.createElement(
                    'a',
                    { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=timeout_wait' },
                    '!TIMEOUT_WAIT'
                  )
                }, displayConfig),
                react_default.a.createElement(input_default.a, {
                  type: 'number',
                  min: '0',
                  style: { width: '70px' },
                  value: this.props.config.timeoutElement,
                  onChange: function onChange(e) {
                    return onConfigChange('timeoutElement', e.target.value);
                  },
                  placeholder: 'in seconds'
                }),
                react_default.a.createElement(
                  'span',
                  { className: 'tip' },
                  'Max. time per step'
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({
                  label: react_default.a.createElement(
                    'a',
                    { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=timeout_macro' },
                    '!TIMEOUT_MACRO'
                  )
                }, displayConfig),
                react_default.a.createElement(input_default.a, {
                  type: 'number',
                  min: '0',
                  style: { width: '70px' },
                  value: this.props.config.timeoutMacro,
                  onChange: function onChange(e) {
                    return onConfigChange('timeoutMacro', e.target.value);
                  },
                  placeholder: 'in seconds'
                }),
                react_default.a.createElement(
                  'span',
                  { className: 'tip' },
                  'Max. overall macro runtime'
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({
                  label: react_default.a.createElement(
                    'a',
                    { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=timeout_download' },
                    '!TIMEOUT_DOWNLOAD'
                  )
                }, displayConfig),
                react_default.a.createElement(input_default.a, {
                  type: 'number',
                  min: '0',
                  style: { width: '70px' },
                  value: this.props.config.timeoutDownload,
                  onChange: function onChange(e) {
                    return onConfigChange('timeoutDownload', e.target.value);
                  },
                  placeholder: 'in seconds'
                }),
                react_default.a.createElement(
                  'span',
                  { className: 'tip' },
                  'Max. allowed time for file'
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({ label: 'If error happens in loop' }, displayConfig),
                react_default.a.createElement(
                  radio_default.a.Group,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('onErrorInLoop', e.target.value);
                    },
                    value: this.props.config.onErrorInLoop
                  },
                  react_default.a.createElement(
                    radio_default.a,
                    { value: 'continue_next_loop' },
                    'Continue next loop'
                  ),
                  react_default.a.createElement(
                    radio_default.a,
                    { value: 'stop' },
                    'Stop'
                  )
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({ label: react_default.a.createElement(
                    'a',
                    { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=cmdline' },
                    'Allow Command Line'
                  ) }, displayConfig),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('allowRunFromBookmark', e.target.checked);
                    },
                    checked: this.props.config.allowRunFromBookmark
                  },
                  'Run macro and test suite shortcuts from Javascript Bookmarklets'
                ),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('allowRunFromFileSchema', e.target.checked);
                    },
                    checked: this.props.config.allowRunFromFileSchema
                  },
                  'Run embedded macros from local files'
                ),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('allowRunFromHttpSchema', e.target.checked);
                    },
                    checked: this.props.config.allowRunFromHttpSchema
                  },
                  'Run embedded macros from public websites',
                  react_default.a.createElement(
                    'a',
                    {
                      href: '#',
                      style: {
                        position: 'relative',
                        marginLeft: '10px',
                        padding: '15px 0'
                      },
                      onClick: function onClick(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _this6.props.updateUI({ showWebsiteWhiteList: true });
                      }
                    },
                    'Edit Whitelist'
                  )
                )
              )
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Record', key: 'record', className: 'record-pane' },
            react_default.a.createElement(
              form_default.a,
              null,
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({ label: 'Notification' }, displayConfig),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('recordNotification', e.target.checked);
                    },
                    checked: this.props.config.recordNotification
                  },
                  'Show notifications when recording'
                )
              ),
              react_default.a.createElement(
                form_default.a.Item,
                header_extends({ label: 'click / clickAt' }, displayConfig),
                react_default.a.createElement(
                  radio_default.a.Group,
                  {
                    onChange: function onChange(e) {
                      return onConfigChange('recordClickType', e.target.value);
                    },
                    value: this.props.config.recordClickType
                  },
                  react_default.a.createElement(
                    radio_default.a,
                    { value: 'click' },
                    'Record click'
                  ),
                  react_default.a.createElement(
                    radio_default.a,
                    { value: 'clickAt' },
                    'Record clickAt'
                  )
                )
              )
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Backup', key: 'backup', className: 'backup-pane' },
            react_default.a.createElement(
              'h4',
              null,
              'Automatic Backup'
            ),
            react_default.a.createElement(
              'p',
              null,
              'The automatic backup reminder helps to you to regularly export macros and other data as ZIP archive. As browser extension Kantu must store its data ',
              react_default.a.createElement(
                'em',
                null,
                'inside the browser extension'
              ),
              '. This means that when you uninstall the extension, the data is removed, too. Therefore it is good to have backups! Note that if the hard drive storage mode of the File Access XModule is active, then the backup archive contains these files.'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(checkbox_default.a, {
                onChange: function onChange(e) {
                  return onConfigChange('enableAutoBackup', e.target.checked);
                },
                checked: this.props.config.enableAutoBackup
              }),
              react_default.a.createElement(
                'span',
                null,
                'Show backup reminder every'
              ),
              react_default.a.createElement(input_default.a, {
                type: 'number',
                min: 1,
                disabled: !this.props.config.enableAutoBackup,
                value: this.props.config.autoBackupInterval,
                onChange: function onChange(e) {
                  return onConfigChange('autoBackupInterval', e.target.value);
                },
                style: { width: '40px' }
              }),
              react_default.a.createElement(
                'span',
                null,
                ' days'
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(
                'p',
                null,
                'Backup includes'
              ),
              react_default.a.createElement(
                'ul',
                null,
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(checkbox_default.a, {
                    onChange: function onChange(e) {
                      return onConfigChange('autoBackupTestCases', e.target.checked);
                    },
                    checked: this.props.config.autoBackupTestCases
                  }),
                  react_default.a.createElement(
                    'span',
                    null,
                    'Macros'
                  )
                ),
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(checkbox_default.a, {
                    onChange: function onChange(e) {
                      return onConfigChange('autoBackupTestSuites', e.target.checked);
                    },
                    checked: this.props.config.autoBackupTestSuites
                  }),
                  react_default.a.createElement(
                    'span',
                    null,
                    'Test suites'
                  )
                ),
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(checkbox_default.a, {
                    onChange: function onChange(e) {
                      return onConfigChange('autoBackupScreenshots', e.target.checked);
                    },
                    checked: this.props.config.autoBackupScreenshots
                  }),
                  react_default.a.createElement(
                    'span',
                    null,
                    'Screenshots'
                  )
                ),
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(checkbox_default.a, {
                    onChange: function onChange(e) {
                      return onConfigChange('autoBackupCSVFiles', e.target.checked);
                    },
                    checked: this.props.config.autoBackupCSVFiles
                  }),
                  react_default.a.createElement(
                    'span',
                    null,
                    'CSV files'
                  )
                ),
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(checkbox_default.a, {
                    onChange: function onChange(e) {
                      return onConfigChange('autoBackupVisionImages', e.target.checked);
                    },
                    checked: this.props.config.autoBackupVisionImages
                  }),
                  react_default.a.createElement(
                    'span',
                    null,
                    'Visual UI Test images'
                  )
                )
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(
                'span',
                null,
                'And you can also '
              ),
              react_default.a.createElement(
                button_default.a,
                {
                  type: 'primary',
                  onClick: function onClick() {
                    return _this6.props.runBackup();
                  }
                },
                'Run backup now'
              )
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Security', key: 'security', className: 'security-pane' },
            react_default.a.createElement(
              'h4',
              null,
              'Master password for Password Encryption'
            ),
            react_default.a.createElement(
              'p',
              null,
              'A master password is used to encrypt and decrypt all stored website passwords. The websites passwords are encrypted using strong encryption.\xA0\xA0',
              react_default.a.createElement(
                'a',
                { target: '_blank', href: 'https://a9t9.com/x/idehelp?help=encryption' },
                'More info >>'
              )
            ),
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                radio_default.a.Group,
                {
                  onChange: function onChange(e) {
                    return onConfigChange('shouldEncryptPassword', e.target.value);
                  },
                  value: this.props.config.shouldEncryptPassword
                },
                react_default.a.createElement(
                  radio_default.a,
                  { value: 'no' },
                  'Do not encrypt passwords'
                ),
                react_default.a.createElement(
                  radio_default.a,
                  { value: 'master_password' },
                  'Enter master password here to store it'
                )
              ),
              this.props.config.shouldEncryptPassword === 'master_password' ? react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Master password:'
                ),
                react_default.a.createElement(input_default.a, {
                  type: 'password',
                  style: { width: '200px' },
                  value: this.props.config.masterPassword,
                  onChange: function onChange(e) {
                    return onConfigChange('masterPassword', e.target.value);
                  }
                })
              ) : null
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            {
              tab: 'OCR',
              key: 'ocr',
              className: Object(utils["cn"])('ocr-pane', {
                'ocr-disabled': this.props.config.ocrMode === 'disabled',
                'ocr-enabled': this.props.config.ocrMode === 'enabled',
                'ocr-offline': this.props.config.ocrMode === 'offline_enabled'
              })
            },
            react_default.a.createElement(
              'p',
              null,
              'This tab manages the ',
              react_default.a.createElement(
                'a',
                { href: 'https://a9t9.com/x/idehelp?help=ocr', target: '_blank' },
                'OCR commands'
              ),
              '. Please note that the Online OCR option sends screenshots to our Cloud OCR API. All screenshots are deleted after processing. But since this means that data leaves your machine, you must explicitly allow it. By default (after installation) Online OCR is disabled.'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(
                radio_default.a.Group,
                {
                  onChange: function onChange(e) {
                    return onConfigChange('ocrMode', e.target.value);
                  },
                  value: this.props.config.ocrMode
                },
                react_default.a.createElement(
                  radio_default.a,
                  { value: 'disabled' },
                  'OCR feature disabled'
                ),
                react_default.a.createElement(
                  radio_default.a,
                  { value: 'enabled' },
                  'Online OCR enabled (',
                  react_default.a.createElement(
                    'a',
                    { href: 'https://a9t9.com/x/idehelp?help=ocronline', target: '_blank' },
                    'more info'
                  ),
                  ')',
                  react_default.a.createElement('br', null),
                  'Conversion counter: You used ',
                  Object(command_counter["getOcrCommandCounter"])().get(),
                  ' from ',
                  Object(command_counter["getOcrCommandCounter"])().getMaximum(),
                  ' conversions/day (',
                  react_default.a.createElement(
                    'a',
                    { href: 'https://a9t9.com/x/idehelp?help=ocradd', target: '_blank' },
                    'add more'
                  ),
                  ')'
                ),
                react_default.a.createElement(
                  radio_default.a,
                  {
                    value: 'offline_enabled',
                    disabled: this.props.config.xmodulesStatus !== 'pro',
                    'class': Object(utils["cn"])({ 'need-pro': this.props.config.xmodulesStatus !== 'pro' })
                  },
                  'Offline OCR - use ',
                  react_default.a.createElement(
                    'a',
                    { href: 'https://a9t9.com/x/idehelp?help=ocroffline', target: '_blank' },
                    'local OCR engine'
                  ),
                  ' (Requires XModules Enterprise Edition)',
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'span',
                    { className: 'offline-label' },
                    'Local OCR'
                  ),
                  react_default.a.createElement(input_default.a, {
                    type: 'text',
                    style: { width: '200px' },
                    disabled: this.props.config.ocrMode !== 'offline_enabled',
                    value: this.props.config.ocrOfflineURL,
                    onChange: function onChange(e) {
                      return onConfigChange('ocrOfflineURL', e.target.value);
                    }
                  }),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'span',
                    { className: 'offline-label' },
                    'Local API key'
                  ),
                  react_default.a.createElement(input_default.a, {
                    type: 'password',
                    style: { width: '200px' },
                    disabled: this.props.config.ocrMode !== 'offline_enabled',
                    value: this.props.config.ocrOfflineAPIKey,
                    onChange: function onChange(e) {
                      return onConfigChange('ocrOfflineAPIKey', e.target.value);
                    }
                  })
                )
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(
                'p',
                null,
                'Default OCR language',
                react_default.a.createElement(
                  select_default.a,
                  {
                    style: { width: '150px', marginLeft: '15px' },
                    placeholder: 'OCR Language',
                    value: this.props.config.ocrLanguage,
                    disabled: this.props.config.ocrMode === 'disabled',
                    onChange: function onChange(val) {
                      return onConfigChange('ocrLanguage', val);
                    }
                  },
                  ocrLanguageOptions.map(function (item) {
                    return react_default.a.createElement(
                      select_default.a.Option,
                      { value: item.value, key: item.value },
                      item.text
                    );
                  })
                )
              ),
              react_default.a.createElement(
                'div',
                null,
                'You can overwrite the default OCR Language in the macro with ',
                react_default.a.createElement(
                  'a',
                  { href: 'https://a9t9.com/x/idehelp?help=ocrlanguage', target: '_blank' },
                  '!OCRLanguage'
                ),
                '.'
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(
                'p',
                null,
                react_default.a.createElement(
                  button_default.a,
                  {
                    type: 'primary',
                    loading: this.state.testingOcrAPI,
                    disabled: this.props.config.ocrMode === 'disabled',
                    onClick: function onClick() {
                      _this6.setState({
                        testingOcrAPI: true
                      });

                      init_player_ocrViewport({
                        store: window['store'],
                        isDesktop: _this6.props.config.cvScope === 'desktop'
                      }).catch(function (e) {
                        message_default.a.error(e.message);
                      }).then(function () {
                        _this6.setState({
                          testingOcrAPI: false
                        });
                      });
                    }
                  },
                  'Show OCR Overlay'
                )
              ),
              react_default.a.createElement(
                'p',
                null,
                'The test runs OCR on the currently active browser tab and displays the result as overlay.'
              )
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Vision', key: 'vision', className: 'vision-pane' },
            react_default.a.createElement(
              'p',
              null,
              'Kantu\'s eyes can look inside the web browser or search the complete desktop.'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row' },
              react_default.a.createElement(
                radio_default.a.Group,
                {
                  onChange: function onChange(e) {
                    return onConfigChange('cvScope', e.target.value);
                  },
                  value: this.props.config.cvScope
                },
                react_default.a.createElement(
                  radio_default.a,
                  { value: 'browser' },
                  'Browser Automation (Look inside browser)'
                ),
                react_default.a.createElement(
                  radio_default.a,
                  {
                    value: 'desktop',
                    disabled: !(this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()] && this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()].installed)
                  },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Desktop Automation (Search complete desktop)'
                  ),
                  this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()] && this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()].installed ? null : react_default.a.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: Object(xdesktop["getXDesktop"])().downloadLink(),
                      style: {
                        marginLeft: '15px'
                      }
                    },
                    'Please install the DesktopAutomation XModule first.'
                  )
                )
              )
            ),
            react_default.a.createElement(
              'p',
              null,
              'Inside a macro the computer vision scope can be changed with the ',
              react_default.a.createElement(
                'a',
                { href: Object(xdesktop["getXDesktop"])().infoLink(), target: '_blank' },
                'XDesktopAutomation'
              ),
              ' command. In addition, you can restrict the image search  area with the ',
              react_default.a.createElement(
                'a',
                { href: 'https://a9t9.com/x/idehelp?help=limitsearcharea', target: '_blank' },
                'visionLimitSearchArea'
              ),
              ' command.'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row', style: { marginTop: '30px' } },
              react_default.a.createElement(
                'p',
                null,
                'Default Vision Search Confidence'
              ),
              react_default.a.createElement(
                select_default.a,
                {
                  style: { width: '200px' },
                  placeholder: 'interval',
                  value: '' + this.props.config.defaultVisionSearchConfidence,
                  onChange: function onChange(val) {
                    return onConfigChange('defaultVisionSearchConfidence', parseFloat(val));
                  }
                },
                Object(utils["range"])(1, 11, 1).map(function (n) {
                  return react_default.a.createElement(
                    select_default.a.Option,
                    { key: n, value: '' + (0.1 * n).toFixed(1) },
                    (0.1 * n).toFixed(1)
                  );
                })
              )
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'XModules', key: 'xmodules', className: 'xmodules-pane' },
            react_default.a.createElement(
              'div',
              { className: 'xmodule-item' },
              react_default.a.createElement(
                'div',
                { className: 'xmodule-title' },
                react_default.a.createElement(
                  'span',
                  null,
                  react_default.a.createElement(
                    'b',
                    null,
                    'FileAccess XModule'
                  ),
                  ' - Read and write to your hard drive'
                ),
                react_default.a.createElement(
                  'a',
                  { href: Object(xfile["getXFile"])().infoLink(), target: '_blank' },
                  'More Info'
                ),
                react_default.a.createElement(
                  button_default.a,
                  {
                    type: 'primary',
                    onClick: function onClick() {
                      Object(xfile["getXFile"])().getVersion().then(function (data) {
                        var installed = data.installed,
                            version = data.version;

                        var msg = installed ? 'Installed (v' + version + ')' : 'Not Installed';
                        message_default.a.info('status updated: ' + msg);

                        var p = !installed ? Promise.resolve() : Object(xfile["getXFile"])().initConfig();

                        p.catch(function (e) {}).then(function () {
                          _this6.setState(Object(utils["updateIn"])(['xModuleData', Object(xfile["getXFile"])().getName()], function (orig) {
                            return header_extends({}, orig, data, { config: Object(xfile["getXFile"])().getCachedConfig() });
                          }, _this6.state));
                        });
                      });
                    }
                  },
                  'Test it'
                )
              ),
              react_default.a.createElement(
                'div',
                { className: 'xmodule-status' },
                react_default.a.createElement(
                  'label',
                  null,
                  'Status:'
                ),
                this.state.xModuleData[Object(xfile["getXFile"])().getName()] && this.state.xModuleData[Object(xfile["getXFile"])().getName()].installed ? react_default.a.createElement(
                  'div',
                  { className: 'status-box' },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Installed (v',
                    this.state.xModuleData[Object(xfile["getXFile"])().getName()].version,
                    ')'
                  ),
                  react_default.a.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: Object(xfile["getXFile"])().checkUpdateLink(this.state.xModuleData[Object(xfile["getXFile"])().getName()] && this.state.xModuleData[Object(xfile["getXFile"])().getName()].version, web_extension_default.a.runtime.getManifest().version)
                    },
                    'Check for update'
                  )
                ) : react_default.a.createElement(
                  'div',
                  { className: 'status-box' },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Not Installed'
                  ),
                  react_default.a.createElement(
                    'a',
                    { href: Object(xfile["getXFile"])().downloadLink(), target: '_blank' },
                    'Download it'
                  )
                )
              ),
              react_default.a.createElement(
                'div',
                { className: 'xmodule-settings' },
                react_default.a.createElement(
                  'h3',
                  null,
                  'Settings'
                ),
                react_default.a.createElement(
                  'div',
                  { className: 'xmodule-settings-item' },
                  react_default.a.createElement(
                    'div',
                    { className: 'settings-detail' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Home Folder'
                    ),
                    react_default.a.createElement(
                      'div',
                      { className: 'settings-detail-content' },
                      react_default.a.createElement(input_default.a, {
                        type: 'text',
                        value: Object(xfile["getXFile"])().getCachedConfig().rootDir,
                        disabled: !(this.state.xModuleData[Object(xfile["getXFile"])().getName()] && this.state.xModuleData[Object(xfile["getXFile"])().getName()].installed),
                        onChange: function onChange(e) {
                          var rootDir = e.target.value;

                          _this6.setState(Object(utils["compose"])(Object(utils["setIn"])(['xModuleData', Object(xfile["getXFile"])().getName(), 'config', 'rootDir'], rootDir), Object(utils["setIn"])(['xFileRootDirChanged'], true))(_this6.state));

                          Object(xfile["getXFile"])().setConfig({ rootDir: rootDir });
                        },
                        onBlur: function onBlur() {
                          if (_this6.state.xFileRootDirChanged) {
                            _this6.setState({ xFileRootDirChanged: false });

                            Object(xfile["getXFile"])().sanityCheck().then(function () {
                              _this6.setState(Object(utils["setIn"])(['xModuleData', Object(xfile["getXFile"])().getName(), 'checkResult'], { error: null }, _this6.state));

                              Object(services_storage["getStorageManager"])().emit(services_storage["StorageManagerEvent"].RootDirChanged);
                            }, function (e) {
                              _this6.setState(Object(utils["setIn"])(['xModuleData', Object(xfile["getXFile"])().getName(), 'checkResult'], { error: e.message }, _this6.state));

                              _this6.props.updateUI({ showSettings: true, settingsTab: 'xmodules' });
                            });
                          }
                        }
                      }),
                      this.state.xModuleData[Object(xfile["getXFile"])().getName()] && this.state.xModuleData[Object(xfile["getXFile"])().getName()].checkResult && this.state.xModuleData[Object(xfile["getXFile"])().getName()].checkResult.error ? react_default.a.createElement(
                        'div',
                        { className: 'check-result' },
                        this.state.xModuleData[Object(xfile["getXFile"])().getName()].checkResult.error
                      ) : null
                    )
                  ),
                  react_default.a.createElement(
                    'div',
                    { className: 'settings-desc' },
                    'In this folder, Kantu creates /macros, /images, /testsuites, /datasources'
                  )
                )
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'xmodule-item' },
              react_default.a.createElement(
                'div',
                { className: 'xmodule-title' },
                react_default.a.createElement(
                  'span',
                  null,
                  react_default.a.createElement(
                    'b',
                    null,
                    'RealUser XModule'
                  ),
                  ' - Click / Type / Drag with OS native events'
                ),
                react_default.a.createElement(
                  'a',
                  { href: Object(x_user_io["getXUserIO"])().infoLink(), target: '_blank' },
                  'More Info'
                ),
                react_default.a.createElement(
                  button_default.a,
                  {
                    type: 'primary',
                    onClick: function onClick() {
                      Object(x_user_io["getXUserIO"])().getVersion().then(function (data) {
                        var installed = data.installed,
                            version = data.version;

                        var msg = installed ? 'Installed (v' + version + ')' : 'Not Installed';
                        message_default.a.info('status updated: ' + msg);

                        _this6.setState(Object(utils["updateIn"])(['xModuleData', Object(x_user_io["getXUserIO"])().getName()], function (orig) {
                          return header_extends({}, orig, data, { config: Object(x_user_io["getXUserIO"])().getCachedConfig() });
                        }, _this6.state));
                      });
                    }
                  },
                  'Test it'
                )
              ),
              react_default.a.createElement(
                'div',
                { className: 'xmodule-status' },
                react_default.a.createElement(
                  'label',
                  null,
                  'Status:'
                ),
                this.state.xModuleData[Object(x_user_io["getXUserIO"])().getName()] && this.state.xModuleData[Object(x_user_io["getXUserIO"])().getName()].installed ? react_default.a.createElement(
                  'div',
                  { className: 'status-box' },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Installed (v',
                    this.state.xModuleData[Object(x_user_io["getXUserIO"])().getName()].version,
                    ')'
                  ),
                  react_default.a.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: Object(x_user_io["getXUserIO"])().checkUpdateLink(this.state.xModuleData[Object(x_user_io["getXUserIO"])().getName()] && this.state.xModuleData[Object(x_user_io["getXUserIO"])().getName()].version, web_extension_default.a.runtime.getManifest().version)
                    },
                    'Check for update'
                  )
                ) : react_default.a.createElement(
                  'div',
                  { className: 'status-box' },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Not Installed'
                  ),
                  react_default.a.createElement(
                    'a',
                    { href: Object(x_user_io["getXUserIO"])().downloadLink(), target: '_blank' },
                    'Download it'
                  )
                )
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'xmodule-item' },
              react_default.a.createElement(
                'div',
                { className: 'xmodule-title' },
                react_default.a.createElement(
                  'span',
                  null,
                  react_default.a.createElement(
                    'b',
                    null,
                    'DesktopAutomation XModule'
                  ),
                  ' - Visual Desktop Automation'
                ),
                react_default.a.createElement(
                  'a',
                  { href: Object(xdesktop["getXDesktop"])().infoLink(), target: '_blank' },
                  'More Info'
                ),
                react_default.a.createElement(
                  button_default.a,
                  {
                    type: 'primary',
                    onClick: function onClick() {
                      Object(xdesktop["getXDesktop"])().getVersion().then(function (data) {
                        var installed = data.installed,
                            version = data.version;

                        var msg = installed ? 'Installed (v' + version + ')' : 'Not Installed';
                        message_default.a.info('status updated: ' + msg);

                        _this6.setState(Object(utils["updateIn"])(['xModuleData', Object(xdesktop["getXDesktop"])().getName()], function (orig) {
                          return header_extends({}, orig, data, { config: Object(xdesktop["getXDesktop"])().getCachedConfig() });
                        }, _this6.state));
                      });
                    }
                  },
                  'Test it'
                )
              ),
              react_default.a.createElement(
                'div',
                { className: 'xmodule-status' },
                react_default.a.createElement(
                  'label',
                  null,
                  'Status:'
                ),
                this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()] && this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()].installed ? react_default.a.createElement(
                  'div',
                  { className: 'status-box' },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Installed (v',
                    this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()].version,
                    ')'
                  ),
                  react_default.a.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: Object(xdesktop["getXDesktop"])().checkUpdateLink(this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()] && this.state.xModuleData[Object(xdesktop["getXDesktop"])().getName()].version, web_extension_default.a.runtime.getManifest().version)
                    },
                    'Check for update'
                  )
                ) : react_default.a.createElement(
                  'div',
                  { className: 'status-box' },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Not Installed'
                  ),
                  react_default.a.createElement(
                    'a',
                    { href: Object(xdesktop["getXDesktop"])().downloadLink(), target: '_blank' },
                    'Download it'
                  )
                )
              )
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'XModules PRO', key: 'register', className: 'register-pane' },
            react_default.a.createElement(
              'div',
              {
                className: Object(utils["cn"])('register-note', {
                  inactive: this.props.config.xmodulesStatus !== 'unregistered'
                })
              },
              react_default.a.createElement(
                'p',
                null,
                'Thank you for using Kantu and the XModules. For unlimited real user commands (XClick, XMove and XType), unlimited direct file access and priority support, upgrade your XModules to XModules PRO or Enterprise. If you have already purchased a license key, you can enter it here:'
              ),
              react_default.a.createElement(
                'div',
                { className: 'actions' },
                react_default.a.createElement(
                  'a',
                  { href: config_default.a.xmodulesLimit.unregistered.upgradeUrl, target: '_blank' },
                  'Click here to upgrade'
                )
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'register-form' },
              react_default.a.createElement(
                'label',
                null,
                'Enter license key:'
              ),
              react_default.a.createElement(
                'div',
                { className: 'register-row' },
                react_default.a.createElement(input_default.a, {
                  value: this.state.registerKey,
                  type: 'text',
                  onChange: function onChange(e) {
                    _this6.setState({
                      registerKey: e.target.value
                    });
                  }
                }),
                react_default.a.createElement(
                  button_default.a,
                  {
                    type: 'primary',
                    onClick: this.checkRegisterKey
                  },
                  'Check Key'
                )
              )
            ),
            react_default.a.createElement(
              'div',
              { className: 'register-status' },
              this.props.config.xmodulesStatus === 'unregistered' ? react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'span',
                  null,
                  'XModules status: '
                ),
                react_default.a.createElement(
                  'b',
                  null,
                  this.isEitherXModuleInstalled() ? 'Free Edition active' : 'Not installed'
                ),
                '.',
                react_default.a.createElement(
                  'a',
                  {
                    href: config_default.a.xmodulesLimit.unregistered.upgradeUrl,
                    target: '_blank'
                  },
                  'Upgrade to XModules PRO'
                )
              ) : null,
              this.props.config.xmodulesStatus === 'free' ? react_default.a.createElement(
                'div',
                null,
                'XModules status: ',
                react_default.a.createElement(
                  'b',
                  null,
                  'PRO1 Edition active'
                ),
                '.',
                react_default.a.createElement(
                  'a',
                  {
                    href: config_default.a.xmodulesLimit.free.upgradeUrl,
                    target: '_blank'
                  },
                  'Upgrade to PRO2 or Enterprise'
                )
              ) : null,
              this.props.config.xmodulesStatus === 'pro' ? react_default.a.createElement(
                'div',
                null,
                'XModules status: ',
                react_default.a.createElement(
                  'b',
                  null,
                  'PRO2 Edition active'
                ),
                '.',
                react_default.a.createElement(
                  'a',
                  {
                    href: config_default.a.xmodulesLimit.pro.upgradeUrl,
                    target: '_blank'
                  },
                  'Contact Support'
                )
              ) : null
            )
          )
        )
      );
    }
  }, {
    key: 'renderMainMenu',
    value: function renderMainMenu() {
      var _this7 = this;

      var _state = this.state,
          htmlUri = _state.htmlUri,
          jsonUri = _state.jsonUri;
      var _props = this.props,
          status = _props.status,
          editing = _props.editing;
      var commands = editing.commands,
          meta = editing.meta;
      var src = meta.src;

      var canPlay = this.props.player.status === constant["g" /* PLAYER_STATUS */].STOPPED;
      var downloadNamePrefix = src ? src.name : 'Untitled';

      var onClickMenuItem = function onClickMenuItem(_ref2) {
        var key = _ref2.key;

        switch (key) {
          case 'play_settings':
            {
              _this7.showSettingsModal();
              break;
            }
        }
      };

      return react_default.a.createElement(
        menu_default.a,
        { onClick: onClickMenuItem, selectable: false },
        react_default.a.createElement(
          menu_default.a.Item,
          { key: 'play_settings', disabled: !canPlay },
          'Replay settings..'
        )
      );
    }
  }, {
    key: 'renderStatus',
    value: function renderStatus() {
      var _props2 = this.props,
          status = _props2.status,
          player = _props2.player;

      var renderInner = function renderInner() {
        switch (status) {
          case constant["a" /* APP_STATUS */].RECORDER:
            return 'Recording';

          case constant["a" /* APP_STATUS */].PLAYER:
            {
              switch (player.status) {
                case constant["g" /* PLAYER_STATUS */].PLAYING:
                  {
                    var nextCommandIndex = player.nextCommandIndex,
                        loops = player.loops,
                        currentLoop = player.currentLoop,
                        timeoutStatus = player.timeoutStatus;


                    if (nextCommandIndex === null || loops === null || currentLoop === 0) {
                      return '';
                    }

                    var parts = ['Line ' + (nextCommandIndex + 1), 'Round ' + currentLoop + '/' + loops];

                    if (timeoutStatus && timeoutStatus.type && timeoutStatus.total) {
                      var type = timeoutStatus.type,
                          total = timeoutStatus.total,
                          past = timeoutStatus.past;

                      parts.unshift(type + ' ' + past / 1000 + 's (' + total / 1000 + ')');
                    }

                    return parts.join(' | ');
                  }

                case constant["g" /* PLAYER_STATUS */].PAUSED:
                  return 'Player paused';

                default:
                  return '';
              }
            }

          default:
            return '';
        }
      };

      return react_default.a.createElement(
        'div',
        { className: 'status' },
        renderInner()
      );
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var _this8 = this;

      var _props3 = this.props,
          testCases = _props3.testCases,
          editing = _props3.editing,
          player = _props3.player,
          status = _props3.status;


      var onClickMenuItem = function onClickMenuItem(_ref3) {
        var key = _ref3.key;

        switch (key) {
          case 'play_loop':
            {
              _this8.togglePlayLoopsModal(true);
              break;
            }
        }
      };

      var playMenu = react_default.a.createElement(
        menu_default.a,
        { onClick: onClickMenuItem, selectable: false },
        react_default.a.createElement(
          menu_default.a.Item,
          { key: 'play_loop', disabled: false },
          'Play loop..'
        )
      );

      if (status === constant["a" /* APP_STATUS */].RECORDER) {
        return react_default.a.createElement(
          'div',
          { className: 'actions' },
          react_default.a.createElement(
            button_default.a,
            {
              onClick: this.onToggleRecord,
              style: { color: '#ff0000' }
            },
            react_default.a.createElement(
              'span',
              null,
              'Stop Record'
            )
          )
        );
      }

      switch (player.status) {
        case constant["g" /* PLAYER_STATUS */].PLAYING:
          {
            return react_default.a.createElement(
              'div',
              { className: 'actions' },
              react_default.a.createElement(
                button_default.a.Group,
                null,
                react_default.a.createElement(
                  button_default.a,
                  { onClick: function onClick() {
                      return _this8.getPlayer().stop();
                    } },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Stop'
                  )
                ),
                react_default.a.createElement(
                  button_default.a,
                  { onClick: function onClick() {
                      return _this8.getPlayer('testCase').pause();
                    } },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Pause'
                  )
                )
              )
            );
          }

        case constant["g" /* PLAYER_STATUS */].PAUSED:
          {
            return react_default.a.createElement(
              'div',
              { className: 'actions' },
              react_default.a.createElement(
                button_default.a.Group,
                null,
                this.props.player.mode === constant["f" /* PLAYER_MODE */].TEST_CASE ? react_default.a.createElement(
                  button_default.a,
                  { onClick: function onClick() {
                      return _this8.getPlayer('testCase').resume(true);
                    } },
                  'Step'
                ) : null,
                react_default.a.createElement(
                  button_default.a,
                  { onClick: function onClick() {
                      return _this8.getPlayer().stop();
                    } },
                  'Stop'
                ),
                react_default.a.createElement(
                  button_default.a,
                  { onClick: function onClick() {
                      return _this8.getPlayer('testCase').resume();
                    } },
                  'Resume'
                )
              )
            );
          }

        case constant["g" /* PLAYER_STATUS */].STOPPED:
          {
            return react_default.a.createElement(
              'div',
              { className: 'actions' },
              react_default.a.createElement(
                button_default.a,
                {
                  onClick: this.onToggleRecord
                },
                react_default.a.createElement(
                  'span',
                  null,
                  'Record'
                )
              ),
              react_default.a.createElement(
                button_default.a.Group,
                { className: 'play-actions' },
                react_default.a.createElement(
                  button_default.a,
                  { onClick: function onClick() {
                      return _this8.playCurrentMacro(true);
                    } },
                  'Step'
                ),
                react_default.a.createElement(
                  dropdown_default.a.Button,
                  { onClick: function onClick() {
                      return _this8.playCurrentMacro(false);
                    }, overlay: playMenu },
                  react_default.a.createElement(
                    'span',
                    null,
                    'Play Macro'
                  )
                )
              ),
              react_default.a.createElement(
                button_default.a,
                { shape: 'circle', onClick: function onClick() {
                    return _this8.showSettingsModal();
                  } },
                react_default.a.createElement(icon_default.a, { type: 'setting' })
              )
            );
          }
      }
    }
  }, {
    key: 'renderMacro',
    value: function renderMacro() {
      var _props4 = this.props,
          testCases = _props4.testCases,
          editing = _props4.editing,
          player = _props4.player,
          hasUnsaved = _props4.hasUnsaved;
      var src = editing.meta.src;

      var isPlayerStopped = player.status === constant["g" /* PLAYER_STATUS */].STOPPED;
      var klass = hasUnsaved ? 'unsaved' : '';

      var saveBtnState = {
        text: src ? 'Save' : 'Save..',
        disabled: !hasUnsaved
      };

      return react_default.a.createElement(
        'div',
        { className: 'select-case' },
        react_default.a.createElement(
          'span',
          { className: 'test-case-name ' + klass },
          src ? src.name : 'Untitled'
        ),
        !isPlayerStopped ? null : react_default.a.createElement(
          button_default.a,
          { disabled: saveBtnState.disabled, onClick: this.onClickSave },
          react_default.a.createElement(
            'span',
            null,
            saveBtnState.text
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          testCases = _props5.testCases,
          player = _props5.player;

      var isPlayerStopped = player.status === constant["g" /* PLAYER_STATUS */].STOPPED;

      testCases.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA === nameB) return 0;
        return 1;
      });

      return react_default.a.createElement(
        'div',
        { className: 'header ' + this.props.status.toLowerCase() },
        this.renderMacro(),
        this.renderStatus(),
        this.renderActions(),
        this.renderPlayLoopModal(),
        this.renderSettingModal(),
        this.renderPublicWebsiteWhiteList()
      );
    }
  }]);

  return Header;
}(react_default.a.Component);

/* harmony default export */ var components_header = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    hasUnsaved: hasUnsavedMacro(state),
    route: state.route,
    testCases: [].concat(header_toConsumableArray(state.editor.testCases)),
    editing: state.editor.editing,
    player: state.player,
    status: state.status,
    config: state.config,
    ui: state.ui
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(header_extends({}, actions_namespaceObject), dispatch);
})(Object(es["b" /* withRouter */])(header_Header)));
// EXTERNAL MODULE: ./node_modules/react-click-outside/build/index.js
var build = __webpack_require__(287);
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// EXTERNAL MODULE: ./src/containers/sidebar/sidebar.scss
var sidebar = __webpack_require__(997);

// EXTERNAL MODULE: ./node_modules/antd/lib/alert/index.js
var lib_alert = __webpack_require__(601);
var alert_default = /*#__PURE__*/__webpack_require__.n(lib_alert);

// EXTERNAL MODULE: ./node_modules/jszip/lib/index.js
var jszip_lib = __webpack_require__(103);
var jszip_lib_default = /*#__PURE__*/__webpack_require__.n(jszip_lib);

// CONCATENATED MODULE: ./src/common/bookmark.js
var bookmark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// Note: Get ids of bookmarks bar and other bookmarks
var pBookmarksBarId = function getIdsOfOtherBookmarksAndBookmarksBar() {
  var bookmarksBarIndex = web_extension_default.a.isFirefox() ? 1 : 0;

  return web_extension_default.a.bookmarks.getTree().then(function (nodes) {
    var bookmarksBar = nodes[0].children[bookmarksBarIndex];
    return bookmarksBar.id;
  });
}();

var bookmark_createBookmarkOnBar = function createBookmarkOnBar(bookmark) {
  return pBookmarksBarId.then(function (barId) {
    return web_extension_default.a.bookmarks.create(bookmark_extends({}, bookmark, { parentId: barId }));
  });
};
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-codemirror2/index.js
var react_codemirror2 = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.js
var codemirror = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/codemirror/mode/javascript/javascript.js
var javascript = __webpack_require__(457);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/edit/matchbrackets.js
var matchbrackets = __webpack_require__(458);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/edit/closebrackets.js
var closebrackets = __webpack_require__(459);

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.css
var lib_codemirror = __webpack_require__(460);

// CONCATENATED MODULE: ./src/components/edit_test_suite.js


var edit_test_suite_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function edit_test_suite_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function edit_test_suite_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function edit_test_suite_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var edit_test_suite_EditTestSuite = function (_React$Component) {
  edit_test_suite_inherits(EditTestSuite, _React$Component);

  function EditTestSuite() {
    var _ref;

    var _temp, _this, _ret;

    edit_test_suite_classCallCheck(this, EditTestSuite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = edit_test_suite_possibleConstructorReturn(this, (_ref = EditTestSuite.__proto__ || Object.getPrototypeOf(EditTestSuite)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      valueModified: null,
      errMsg: null
    }, _this.onSave = function () {
      var errMsg = null;

      try {
        _this.props.validate(_this.state.valueModified);
        _this.props.onChange(_this.state.valueModified);
      } catch (e) {
        errMsg = e.message;
      } finally {
        _this.setState({ errMsg: errMsg });
      }
    }, _temp), edit_test_suite_possibleConstructorReturn(_this, _ret);
  }

  edit_test_suite_createClass(EditTestSuite, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        value: this.props.value,
        valueModified: this.props.value
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value,
          valueModified: nextProps.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          visible: this.props.visible,
          okText: 'Save',
          onOk: this.onSave,
          onCancel: this.props.onClose,
          width: '80%'
        },
        react_default.a.createElement(
          'pre',
          { style: { color: 'red', lineHeight: '18px', marginBottom: '10px' } },
          this.state.errMsg
        ),
        react_default.a.createElement(react_codemirror2["UnControlled"], {
          className: this.state.sourceErrMsg ? 'has-error' : 'no-error',
          value: this.state.value,
          onChange: function onChange(editor, data, text) {
            return _this2.setState({ valueModified: text });
          },
          options: {
            mode: { name: 'javascript', json: true },
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true
          }
        })
      );
    }
  }]);

  return EditTestSuite;
}(react_default.a.Component);

edit_test_suite_EditTestSuite.propTypes = {
  value: prop_types_default.a.string.isRequired,
  onClose: prop_types_default.a.func.isRequired,
  visible: prop_types_default.a.bool,
  validate: prop_types_default.a.func,
  onChange: prop_types_default.a.func
};
edit_test_suite_EditTestSuite.defaultProps = {
  visible: false,
  validate: function validate() {
    return true;
  },
  onChange: function onChange() {}
};
/* harmony default export */ var edit_test_suite = (edit_test_suite_EditTestSuite);
// CONCATENATED MODULE: ./src/components/editable_text.js



var editable_text_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var editable_text_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function editable_text_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function editable_text_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function editable_text_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var editable_text_EditableText = function (_React$Component) {
  editable_text_inherits(EditableText, _React$Component);

  function EditableText() {
    var _ref;

    var _temp, _this, _ret;

    editable_text_classCallCheck(this, EditableText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = editable_text_possibleConstructorReturn(this, (_ref = EditableText.__proto__ || Object.getPrototypeOf(EditableText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEditing: false
    }, _this.onChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 13) {
        _this.submit();
      } else if (e.keyCode === 27) {
        _this.setState({
          value: _this.props.value
        }, _this.submit);
      }
    }, _this.onBlur = function (e) {
      _this.submit();
    }, _this.onClickText = function () {
      if (_this.props.clickToEdit) {
        _this.setState({ isEditing: true });
      }
    }, _this.submit = function () {
      _this.setState({
        isEditing: false
      });

      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value).catch(function () {
          return false;
        }).then(function (success) {
          if (!success) {
            _this.setState({
              value: _this.props.value
            });
          }
        });
      }
    }, _temp), editable_text_possibleConstructorReturn(_this, _ret);
  }

  editable_text_createClass(EditableText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        isEditing: this.props.isEditing,
        value: this.props.value
      });

      if (this.props.isEditing) {
        this.focusOnInput();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextState = {};

      if (this.props.isEditing !== nextProps.isEditing) {
        nextState.isEditing = nextProps.isEditing;

        if (nextState.isEditing) {
          this.focusOnInput();
        }
      }

      if (this.props.value !== nextProps.value) {
        nextState.value = nextProps.value;
      }

      this.setState(nextState);
    }
  }, {
    key: 'focusOnInput',
    value: function focusOnInput() {
      var _this2 = this;

      setTimeout(function () {
        var $input = _this2.input.refs.input;

        if ($input) {
          $input.focus();
          $input.selectionStart = 0;
          $input.selectionEnd = $input.value.length;
        }
      }, 200);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          isEditing = _state.isEditing,
          value = _state.value;


      return react_default.a.createElement(
        'div',
        { className: this.props.className },
        isEditing ? react_default.a.createElement(input_default.a, editable_text_extends({
          value: value,
          onChange: this.onChange,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          ref: function ref(_ref2) {
            _this3.input = _ref2;
          }
        }, this.props.inputProps || {})) : react_default.a.createElement(
          'span',
          { onClick: this.onClickText },
          react_default.a.createElement(
            'span',
            null,
            value
          ),
          this.props.clickToEdit ? react_default.a.createElement(icon_default.a, { type: 'edit', style: { marginLeft: '10px' } }) : null
        )
      );
    }
  }]);

  return EditableText;
}(react_default.a.Component);

editable_text_EditableText.propTypes = {
  value: prop_types_default.a.string,
  isEditing: prop_types_default.a.bool,
  onChange: prop_types_default.a.func,
  inputProps: prop_types_default.a.object,
  textProps: prop_types_default.a.object,
  className: prop_types_default.a.any,
  clickToEdit: prop_types_default.a.bool
};
/* harmony default export */ var editable_text = (editable_text_EditableText);
// CONCATENATED MODULE: ./src/containers/sidebar/test_suites.js




































var test_suites_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var test_suites_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function test_suites_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test_suites_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function test_suites_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var test_suites_downloadTestSuite = function downloadTestSuite(ts, testCases) {
  var str = Object(convert_suite_utils["stringifyTestSuite"])({
    name: ts.name,
    cases: ts.cases
  }, testCases);
  var blob = new Blob([str], { type: 'text/plain;charset=utf-8' });

  // Note: must add third param as true here to remove BOM for UTF8 files
  // reference: https://github.com/eligrey/FileSaver.js/issues/432
  file_saver_default.a.saveAs(blob, 'suite_' + ts.name + '.json', true);
};

var test_suites_downloadTestSuiteAsHTML = function downloadTestSuiteAsHTML(ts) {
  var str = Object(convert_suite_utils["toHtml"])({ name: ts.name });
  var blob = new Blob([str], { type: 'text/plain;charset=utf-8' });

  file_saver_default.a.saveAs(blob, ts.name + '.html', true);
};

var test_suites_SidebarTestSuites = function (_React$Component) {
  test_suites_inherits(SidebarTestSuites, _React$Component);

  function SidebarTestSuites() {
    var _ref;

    var _temp, _this, _ret;

    test_suites_classCallCheck(this, SidebarTestSuites);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = test_suites_possibleConstructorReturn(this, (_ref = SidebarTestSuites.__proto__ || Object.getPrototypeOf(SidebarTestSuites)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tsContextMenu: {
        x: null,
        y: null,
        isShown: false
      },

      tscContextMenu: {
        x: null,
        y: null,
        isShown: false
      },

      tsEditingNameIndex: -1,

      editTestSuiteSource: {
        ts: null,
        visible: false
      }
    }, _this.addTestSuite = function () {
      return Object(ts_utils["uniqueName"])('__Untitled__', {
        check: function check(fullName) {
          return !_this.props.testSuites.find(function (ts) {
            return ts.name === fullName;
          });
        }
      }).then(function (newTestSuiteName) {
        console.log('newTestSuiteName', newTestSuiteName);

        return _this.props.addTestSuite({
          name: newTestSuiteName,
          cases: []
        });
      }).catch(function (e) {
        message_default.a.error(e.message, 1.5);
      });
    }, _this.addTestCaseToTestSuite = function (ts) {
      _this.props.updateTestSuite(ts.id, {
        cases: ts.cases.concat({
          testCaseId: _this.props.testCases[0] && _this.props.testCases[0].id,
          loops: 1
        })
      });
    }, _this.removeTestCaseFromTestSuite = function (ts, index) {
      ts.cases.splice(index, 1);

      _this.props.updateTestSuite(ts.id, {
        cases: ts.cases,
        playStatus: function () {
          var _ts$playStatus = ts.playStatus,
              playStatus = _ts$playStatus === undefined ? {} : _ts$playStatus;
          var _playStatus$doneIndic = playStatus.doneIndices,
              doneIndices = _playStatus$doneIndic === undefined ? [] : _playStatus$doneIndic,
              _playStatus$errorIndi = playStatus.errorIndices,
              errorIndices = _playStatus$errorIndi === undefined ? [] : _playStatus$errorIndi;

          var updateIndex = function updateIndex(n) {
            if (n === undefined) return -1;
            if (n === index) return -1;
            if (n > index) return n - 1;
            return n;
          };

          return {
            errorIndices: errorIndices.map(updateIndex).filter(function (i) {
              return i !== -1;
            }),
            doneIndices: doneIndices.map(updateIndex).filter(function (i) {
              return i !== -1;
            })
          };
        }()
      });
    }, _this.toggleTestSuiteFold = function (ts) {
      _this.props.updateTestSuite(ts.id, {
        fold: !ts.fold
      });
    }, _this.foldAllTestSuites = function () {
      _this.props.testSuites.forEach(function (ts) {
        _this.props.updateTestSuite(ts.id, {
          fold: true
        });
      });
    }, _this.onClickTestSuiteMore = function (e, ts, tsIndex) {
      e.stopPropagation();
      e.preventDefault();

      var updated = {
        tsContextMenu: {
          x: e.clientX,
          y: e.clientY,
          isShown: true,
          ts: ts,
          tsIndex: tsIndex
        }

        // Note: to make it work in Firefox, have to delay this new state a little bit
        // Because hideTcContextMenu could be executed at the same time via clickOutside
      };setTimeout(function () {
        return _this.setState(updated);
      }, 20);
    }, _this.onClickTsTestCaseMore = function (e, tc, tcIndex, ts, tsIndex) {
      e.stopPropagation();
      e.preventDefault();

      var updated = {
        tscContextMenu: {
          x: e.clientX,
          y: e.clientY,
          isShown: true,
          tc: tc,
          ts: ts,
          tcIndex: tcIndex,
          tsIndex: tsIndex
        }

        // Note: to make it work in Firefox, have to delay this new state a little bit
        // Because hideTcContextMenu could be executed at the same time via clickOutside
      };setTimeout(function () {
        return _this.setState(updated);
      }, 20);
    }, _this.hideTsContextMenu = function () {
      _this.setState({
        tsContextMenu: test_suites_extends({}, _this.state.tsContextMenu, {
          isShown: false
        })
      });
    }, _this.hideTscContextMenu = function () {
      _this.setState({
        tscContextMenu: test_suites_extends({}, _this.state.tscContextMenu, {
          isShown: false
        })
      });
    }, _this.onTsMenuClick = function (_ref2, ts, tsIndex) {
      var key = _ref2.key;

      _this.hideTsContextMenu();

      switch (key) {
        case 'play':
          getPlayer({ name: 'testSuite' }).play({
            title: ts.name,
            extra: {
              id: ts.id,
              name: ts.name
            },
            mode: getPlayer().C.MODE.STRAIGHT,
            startIndex: 0,
            resources: ts.cases.map(function (item) {
              return {
                id: item.testCaseId,
                loops: item.loops
              };
            })
          });
          break;

        case 'edit_source':
          _this.setState({
            editTestSuiteSource: {
              ts: ts,
              visible: true
            }
          });
          break;

        case 'rename':
          _this.setState({
            tsEditingNameIndex: tsIndex
          });
          break;

        case 'export':
          test_suites_downloadTestSuite(ts, _this.props.testCases);
          break;

        case 'create_bookmark':
          {
            var bookmarkTitle = prompt('Title for this bookmark', '#' + ts.name + '.kantu');
            if (bookmarkTitle === null) return;

            return bookmark_createBookmarkOnBar(Object(convert_suite_utils["toBookmarkData"])({
              bookmarkTitle: bookmarkTitle,
              name: ts.name
            })).then(function () {
              message_default.a.success('successfully created bookmark!', 1.5);
            });
          }

        case 'export_html':
          {
            web_extension_default.a.extension.isAllowedFileSchemeAccess().then(function (isAllowed) {
              if (isAllowed) return;
              var msg = 'To run test suite from html file, you need to enable "Allow access to file URLs" in extension details page';
              message_default.a.warn(msg);
              _this.props.addLog('warning', msg);
            });

            return test_suites_downloadTestSuiteAsHTML(ts);
          }

        case 'delete':
          modal_default.a.confirm({
            title: 'Are your sure to delete this test suite?',
            okText: 'Confirm',
            onOk: function onOk() {
              return _this.props.removeTestSuite(ts.id);
            }
          });
          break;
      }
    }, _this.onTscMenuClick = function (_ref3, tc, tcIndex, ts, tsIndex) {
      var key = _ref3.key;

      _this.hideTscContextMenu();

      switch (key) {
        case 'play_from_here':
          getPlayer({ name: 'testSuite' }).play({
            title: ts.name,
            extra: {
              id: ts.id,
              name: ts.name
            },
            mode: getPlayer().C.MODE.STRAIGHT,
            startIndex: tcIndex,
            resources: ts.cases.map(function (item) {
              return {
                id: item.testCaseId,
                loops: item.loops
              };
            })
          });
          break;
      }
    }, _this.onChangeTsName = function (val, ts, tsIndex) {
      _this.setState({
        tsEditingNameIndex: -1
      });

      return _this.props.updateTestSuite(ts.id, {
        name: val
      }).then(function () {
        return true;
      }, function (e) {
        message_default.a.error(e.message, 1.5);
        return false;
      });
    }, _this.onChangeTsCase = function (key, val, tcIndex, ts, tsIndex) {
      _this.props.updateTestSuite(ts.id, {
        cases: Object(utils["setIn"])([tcIndex, key], val, ts.cases)
      });
    }, _this.getTsTestCaseClass = function (tcIndex, tsPlayStatus) {
      if (!tsPlayStatus) return '';
      var _tsPlayStatus$doneInd = tsPlayStatus.doneIndices,
          doneIndices = _tsPlayStatus$doneInd === undefined ? [] : _tsPlayStatus$doneInd,
          _tsPlayStatus$errorIn = tsPlayStatus.errorIndices,
          errorIndices = _tsPlayStatus$errorIn === undefined ? [] : _tsPlayStatus$errorIn,
          currentIndex = tsPlayStatus.currentIndex;


      if (tcIndex === currentIndex) {
        return 'current-tc';
      } else if (errorIndices.indexOf(tcIndex) !== -1) {
        return 'error-tc';
      } else if (doneIndices.indexOf(tcIndex) !== -1) {
        return 'done-tc';
      } else {
        return '';
      }
    }, _this.onJSONFileChange = function (e) {
      setTimeout(function () {
        _this.jsonFileInput.value = null;
      }, 500);
      return _this.onReadFile(function (str) {
        return Object(convert_suite_utils["parseTestSuite"])(str, _this.props.testCases);
      })(e);
    }, _this.onReadFile = function (process) {
      return function (e) {
        var files = [].slice.call(e.target.files);
        if (!files || !files.length) return;

        var read = function read(file) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            reader.onload = function (readerEvent) {
              try {
                var text = readerEvent.target.result;
                var obj = process(text, file.name);
                resolve({ data: obj });
              } catch (e) {
                resolve({ err: e, fileName: file.name });
              }
            };

            reader.readAsText(file);
          });
        };

        Promise.all(files.map(read)).then(function (list) {
          var doneList = list.filter(function (x) {
            return x.data;
          });
          var failList = list.filter(function (x) {
            return x.err;
          });

          _this.props.addTestSuites(doneList.map(function (x) {
            return x.data;
          })).then(function (_ref4) {
            var passCount = _ref4.passCount,
                failCount = _ref4.failCount,
                failTcs = _ref4.failTcs;

            message_default.a.info([passCount + ' test suite' + (passCount > 1 ? 's' : '') + ' imported!', failList.length + failCount + ' test suite' + (failList.length + failCount > 1 ? 's' : '') + ' failed!'].join(', '), 3);

            failList.forEach(function (fail) {
              _this.props.addLog('error', 'in parsing ' + fail.fileName + ': ' + fail.err.message);
            });

            failTcs.forEach(function (fail) {
              _this.props.addLog('error', 'duplicated test suite name: ' + fail.name);
            });
          });
        });
      };
    }, _this.onClosePlayTestSuiteTip = function () {
      _this.props.updateConfig({
        hidePlayTestSuiteTip: true
      });
    }, _temp), test_suites_possibleConstructorReturn(_this, _ret);
  }

  test_suites_createClass(SidebarTestSuites, [{
    key: 'getPortalContainer',
    value: function getPortalContainer() {
      var id = '__context_menu_container__';
      var $el = document.getElementById(id);
      if ($el) return $el;

      var $new = document.createElement('div');
      $new.id = id;
      document.body.appendChild($new);
      return $new;
    }
  }, {
    key: 'renderTestSuiteContextMenu',
    value: function renderTestSuiteContextMenu() {
      var _this2 = this;

      var contextMenu = this.state.tsContextMenu;
      var mw = 230;
      var x = contextMenu.x + window.scrollX;
      var y = contextMenu.y + window.scrollY;

      if (x - mw > 0) x -= mw;

      var style = {
        position: 'absolute',
        top: y,
        left: x,
        display: contextMenu.isShown ? 'block' : 'none'
      };

      var menuStyle = {
        width: mw + 'px'
      };

      var content = react_default.a.createElement(
        'div',
        { style: style, className: 'context-menu' },
        react_default.a.createElement(
          build_default.a,
          { onClickOutside: this.hideTsContextMenu },
          react_default.a.createElement(
            menu_default.a,
            {
              onClick: function onClick(e) {
                return _this2.onTsMenuClick(e, contextMenu.ts, contextMenu.tsIndex);
              },
              style: menuStyle,
              mode: 'vertical',
              selectable: false
            },
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'play' },
              'Play'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'edit_source' },
              'Edit source..'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'rename' },
              'Rename..'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'export' },
              'Export'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'export_html' },
              'Create HTML autorun page'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'create_bookmark' },
              'Add to Bookmarks'
            ),
            react_default.a.createElement(menu_default.a.Divider, null),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'delete' },
              'Delete'
            )
          )
        )
      );

      return react_dom_default.a.createPortal(content, this.getPortalContainer());
    }
  }, {
    key: 'renderTestSuiteCaseContextMenu',
    value: function renderTestSuiteCaseContextMenu() {
      var _this3 = this;

      var contextMenu = this.state.tscContextMenu;
      var mw = 150;
      var x = contextMenu.x + window.scrollX;
      var y = contextMenu.y + window.scrollY;

      if (x - mw > 0) x -= mw;

      var style = {
        position: 'absolute',
        top: y,
        left: x,
        display: contextMenu.isShown ? 'block' : 'none'
      };

      var menuStyle = {
        width: mw + 'px'
      };

      var content = react_default.a.createElement(
        'div',
        { style: style, className: 'context-menu' },
        react_default.a.createElement(
          build_default.a,
          { onClickOutside: this.hideTscContextMenu },
          react_default.a.createElement(
            menu_default.a,
            {
              onClick: function onClick(e) {
                return _this3.onTscMenuClick(e, contextMenu.tc, contextMenu.tcIndex, contextMenu.ts, contextMenu.tsIndex);
              },
              style: menuStyle,
              mode: 'vertical',
              selectable: false
            },
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'play_from_here' },
              'Replay from here'
            )
          )
        )
      );

      return react_dom_default.a.createPortal(content, this.getPortalContainer());
    }
  }, {
    key: 'renderTestSuiteMenu',
    value: function renderTestSuiteMenu() {
      var _this4 = this;

      var onClickMenuItem = function onClickMenuItem(_ref5) {
        var key = _ref5.key;

        switch (key) {
          case 'export_all':
            {
              var zip = new jszip_lib_default.a();

              if (_this4.props.testSuites.length === 0) {
                return message_default.a.error('No saved test suites to export', 1.5);
              }

              var genName = Object(utils["nameFactory"])();

              _this4.props.testSuites.forEach(function (ts) {
                var name = genName(ts.name);
                zip.file(name + '.json', Object(convert_suite_utils["stringifyTestSuite"])(ts, _this4.props.testCases));
              });

              zip.generateAsync({ type: 'blob' }).then(function (blob) {
                file_saver_default.a.saveAs(blob, 'all_suites.zip');
              });

              break;
            }

          case 'import':
            {
              break;
            }
        }
      };

      return react_default.a.createElement(
        menu_default.a,
        { onClick: onClickMenuItem, selectable: false },
        react_default.a.createElement(
          menu_default.a.Item,
          { key: 'export_all' },
          'Export all (JSON)'
        ),
        react_default.a.createElement(
          menu_default.a.Item,
          { key: '4' },
          react_default.a.createElement(
            'label',
            { htmlFor: 'select_json_files_for_ts' },
            'Import JSON'
          ),
          react_default.a.createElement('input', {
            multiple: true,
            type: 'file',
            accept: '.json',
            id: 'select_json_files_for_ts',
            onChange: this.onJSONFileChange,
            style: { display: 'none' },
            ref: function ref(el) {
              _this4.jsonFileInput = el;
            }
          })
        )
      );
    }
  }, {
    key: 'renderEditTestSuiteSource',
    value: function renderEditTestSuiteSource() {
      var _this5 = this;

      if (!this.state.editTestSuiteSource.visible) return null;
      var ts = this.state.editTestSuiteSource.ts;
      var source = Object(convert_suite_utils["stringifyTestSuite"])(ts, this.props.testCases);
      var testCases = this.props.testCases;

      return react_default.a.createElement(edit_test_suite, {
        visible: true,
        value: source,
        validate: function validate(text) {
          return Object(convert_suite_utils["validateTestSuiteText"])(text, testCases);
        },
        onClose: function onClose() {
          return _this5.setState({ editTestSuiteSource: { visible: false } });
        },
        onChange: function onChange(text) {
          var newTestSuite = Object(convert_suite_utils["parseTestSuite"])(text, testCases);

          _this5.props.updateTestSuite(ts.id, newTestSuite);
          _this5.setState({ editTestSuiteSource: { visible: false } });
        }
      });
    }
  }, {
    key: 'renderTestSuites',
    value: function renderTestSuites() {
      var _this6 = this;

      return react_default.a.createElement(
        'div',
        null,
        react_default.a.createElement(
          'div',
          { className: 'test-suite-actions' },
          react_default.a.createElement(
            button_default.a,
            { type: 'primary', onClick: this.addTestSuite },
            '+ Test Suite'
          ),
          react_default.a.createElement(
            button_default.a,
            { type: 'default', onClick: this.foldAllTestSuites },
            'Fold'
          ),
          react_default.a.createElement(
            dropdown_default.a,
            { overlay: this.renderTestSuiteMenu(), trigger: ['click'] },
            react_default.a.createElement(
              button_default.a,
              { shape: 'circle' },
              react_default.a.createElement(icon_default.a, { type: 'setting' })
            )
          )
        ),
        !this.props.config.hidePlayTestSuiteTip && this.props.testSuites.length > 0 ? react_default.a.createElement(alert_default.a, {
          type: 'info',
          message: 'Right click to play test suite',
          onClose: this.onClosePlayTestSuiteTip,
          closable: true,
          showIcon: true,
          style: { margin: '10px', paddingRight: '30px' }
        }) : null,
        this.props.testSuites.length === 0 ? react_default.a.createElement(
          'div',
          { className: 'no-data' },
          'No test suite'
        ) : null,
        react_default.a.createElement(
          'ul',
          { className: 'sidebar-test-suites' },
          this.props.testSuites.map(function (ts, tsIndex) {
            return react_default.a.createElement(
              'li',
              {
                key: ts.id,
                className: Object(utils["cn"])('test-suite-item ', {
                  fold: ts.fold,
                  playing: ts.playStatus && ts.playStatus.isPlaying
                })
              },
              react_default.a.createElement(
                'div',
                { className: 'test-suite-row',
                  onClick: function onClick() {
                    return _this6.toggleTestSuiteFold(ts);
                  },
                  onContextMenu: function onContextMenu(e) {
                    return _this6.onClickTestSuiteMore(e, ts, tsIndex);
                  }
                },
                react_default.a.createElement(icon_default.a, { type: ts.fold ? 'folder' : 'folder-open' }),
                react_default.a.createElement(editable_text, {
                  className: 'test-suite-title',
                  value: ts.name,
                  onChange: function onChange(val) {
                    return _this6.onChangeTsName(val, ts, tsIndex);
                  },
                  isEditing: tsIndex === _this6.state.tsEditingNameIndex,
                  inputProps: {
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    onContextMenu: function onContextMenu(e) {
                      return e.stopPropagation();
                    }
                  }
                }),
                tsIndex === _this6.state.tsEditingNameIndex ? null : react_default.a.createElement(icon_default.a, {
                  type: 'bars',
                  className: 'more-button',
                  onClick: function onClick(e) {
                    return _this6.onClickTestSuiteMore(e, ts, tsIndex);
                  }
                })
              ),
              ts.cases.length > 0 ? react_default.a.createElement(
                'ul',
                { className: 'test-suite-cases' },
                ts.cases.map(function (item, tcIndex) {
                  return react_default.a.createElement(
                    'li',
                    {
                      key: tcIndex,
                      className: _this6.getTsTestCaseClass(tcIndex, ts.playStatus),
                      onContextMenu: function onContextMenu(e) {
                        return _this6.onClickTsTestCaseMore(e, item, tcIndex, ts, tsIndex);
                      }
                    },
                    react_default.a.createElement(icon_default.a, {
                      type: 'file',
                      style: { marginRight: '10px', cursor: 'pointer' },
                      onClick: function onClick() {
                        var src = _this6.props.editing.meta.src;

                        var go = function go() {
                          _this6.props.editTestCase(item.testCaseId);
                          return Promise.resolve();
                        };

                        return getSaveTestCase().saveOrNot().then(go);
                      }
                    }),
                    react_default.a.createElement(
                      select_default.a,
                      {
                        showSearch: true,
                        optionFilterProp: 'children',
                        value: item.testCaseId,
                        onChange: function onChange(val) {
                          return _this6.onChangeTsCase('testCaseId', val, tcIndex, ts, tsIndex);
                        },
                        filterOption: function filterOption(input, data) {
                          return data.props.children.toLowerCase().indexOf(input.toLowerCase()) !== -1;
                        },
                        style: { flex: 1, marginRight: '10px', maxWidth: '50%' }
                      },
                      _this6.props.testCases.map(function (tc) {
                        return react_default.a.createElement(
                          select_default.a.Option,
                          { value: tc.id, key: tc.id },
                          tc.name
                        );
                      })
                    ),
                    react_default.a.createElement(input_default.a, {
                      type: 'number',
                      min: 1,
                      value: item.loops,
                      onChange: function onChange(e) {
                        return _this6.onChangeTsCase('loops', e.target.value.trim().length === 0 ? '1' : e.target.value, tcIndex, ts, tsIndex);
                      },
                      style: { width: '45px', marginRight: '10px' }
                    }),
                    react_default.a.createElement(icon_default.a, {
                      type: 'close',
                      style: { cursor: 'pointer' },
                      onClick: function onClick() {
                        return _this6.removeTestCaseFromTestSuite(ts, tcIndex);
                      }
                    })
                  );
                })
              ) : null,
              react_default.a.createElement(
                'div',
                { className: 'test-suite-more-actions' },
                react_default.a.createElement(
                  button_default.a,
                  {
                    type: 'default',
                    onClick: function onClick() {
                      return _this6.addTestCaseToTestSuite(ts);
                    }
                  },
                  '+ Macro'
                )
              )
            );
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return react_default.a.createElement(
        'div',
        null,
        this.renderTestSuites(),
        this.renderTestSuiteContextMenu(),
        this.renderTestSuiteCaseContextMenu(),
        this.renderEditTestSuiteSource()
      );
    }
  }]);

  return SidebarTestSuites;
}(react_default.a.Component);

/* harmony default export */ var test_suites = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    status: state.status,
    testCases: state.editor.testCases,
    testSuites: getTestSuitesWithAllInfo(state),
    editing: state.editor.editing,
    player: state.player,
    config: state.config
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(test_suites_extends({}, actions_namespaceObject), dispatch);
})(test_suites_SidebarTestSuites));
// CONCATENATED MODULE: ./src/components/search_box.js




var search_box_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var search_box_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function search_box_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function search_box_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function search_box_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var search_box_SearchBox = function (_Input) {
  search_box_inherits(SearchBox, _Input);

  function SearchBox() {
    search_box_classCallCheck(this, SearchBox);

    return search_box_possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).apply(this, arguments));
  }

  search_box_createClass(SearchBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref = this.props.inputProps || {},
          value = _ref.value;

      var canClear = value !== undefined && value.length > 0;

      return react_default.a.createElement(
        'span',
        {
          className: this.props.className,
          style: search_box_extends({}, this.props.style || {}, {
            position: 'relative'
          })
        },
        react_default.a.createElement(input_default.a, this.props.inputProps || {}),
        react_default.a.createElement(icon_default.a, {
          type: canClear ? 'close' : 'search',
          onClick: function onClick(e) {
            if (!canClear) return;
            if (!_this2.props.inputProps || !_this2.props.inputProps.onChange) return;
            _this2.props.inputProps.onChange({ target: { value: '' } });
          },
          style: {
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: canClear ? 'pointer' : 'auto'
          }
        })
      );
    }
  }]);

  return SearchBox;
}(input_default.a);

/* harmony default export */ var search_box = (search_box_SearchBox);
// CONCATENATED MODULE: ./src/containers/sidebar/test_cases.js






































var test_cases_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var test_cases_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function test_cases_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test_cases_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function test_cases_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var test_cases_downloadTestCaseAsJSON = function downloadTestCaseAsJSON(tc) {
  var str = Object(convert_utils["toJSONString"])({ name: tc.name, commands: tc.data.commands });
  var blob = new Blob([str], { type: 'text/plain;charset=utf-8' });

  file_saver_default.a.saveAs(blob, tc.name + '.json', true);
};

var test_cases_downloadTestCaseAsHTML = function downloadTestCaseAsHTML(tc) {
  var str = Object(convert_utils["toHtml"])({ name: tc.name, commands: tc.data.commands });
  var blob = new Blob([str], { type: 'text/plain;charset=utf-8' });

  file_saver_default.a.saveAs(blob, tc.name + '.html', true);
};

var test_cases_SidebarTestCases = function (_React$Component) {
  test_cases_inherits(SidebarTestCases, _React$Component);

  function SidebarTestCases() {
    var _ref;

    var _temp, _this, _ret;

    test_cases_classCallCheck(this, SidebarTestCases);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = test_cases_possibleConstructorReturn(this, (_ref = SidebarTestCases.__proto__ || Object.getPrototypeOf(SidebarTestCases)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchText: '',

      showDuplicate: false,
      duplicateName: '',

      showRename: false,
      rename: '',

      tcContextMenu: {
        x: null,
        y: null,
        isShown: false
      }

      // Rename relative
    }, _this.onClickRename = function () {
      _this.props.renameTestCase(_this.state.rename, _this.state.renameTcId).then(function () {
        message_default.a.success('successfully renamed!', 1.5);
        _this.toggleRenameModal(false);
      }).catch(function (e) {
        message_default.a.error(e.message, 1.5);
      });
    }, _this.onCancelRename = function () {
      _this.toggleRenameModal(false);
      _this.setState({
        rename: null
      });
    }, _this.onChangeRename = function (e) {
      _this.setState({
        rename: e.target.value
      });
    }, _this.onClickDuplicate = function () {
      _this.props.duplicateTestCase(_this.state.duplicateName, _this.state.duplicateTcId).then(function () {
        message_default.a.success('successfully duplicated!', 1.5);
      });
      _this.toggleDuplicateModal(false);
    }, _this.onCancelDuplicate = function () {
      _this.toggleDuplicateModal(false);
    }, _this.onChangeDuplicate = function (e) {
      _this.setState({
        duplicateName: e.target.value
      });
    }, _this.toggleDuplicateModal = function (toShow, tc) {
      var duplicateName = tc ? tc.name + '_new' : '';

      _this.setState({
        showDuplicate: toShow,
        duplicateTcId: tc && tc.id,
        duplicateName: duplicateName
      });

      if (toShow) {
        setTimeout(function () {
          var input = _this.inputDuplicateTestCase.refs.input;
          input.focus();
          input.selectionStart = input.selectionEnd = input.value.length;
        }, 100);
      }
    }, _this.toggleRenameModal = function (toShow, tc) {
      _this.setState({
        showRename: toShow,
        renameTcId: tc && tc.id
      });

      if (toShow) {
        setTimeout(function () {
          var input = _this.inputRenameTestCase.refs.input;
          input.focus();
          input.selectionStart = input.selectionEnd = input.value.length;
        }, 100);
      }
    }, _this.getItemKlass = function (tc) {
      var src = _this.props.editing.meta.src;
      var klasses = [];

      if (src && src.id === tc.id) klasses.push('selected');

      if (tc.status === constant["i" /* TEST_CASE_STATUS */].SUCCESS) klasses.push('success');else if (tc.status === constant["i" /* TEST_CASE_STATUS */].ERROR) klasses.push('error');else klasses.push('normal');

      if (_this.props.status !== constant["a" /* APP_STATUS */].NORMAL) {
        klasses.push('disabled');
      }

      return klasses.join(' ');
    }, _this.changeTestCase = function (id) {
      return new Promise(function (resolve) {
        if (_this.props.status !== constant["a" /* APP_STATUS */].NORMAL) return resolve(false);
        if (_this.props.editing.meta.src && _this.props.editing.meta.src.id === id) return resolve(true);

        var go = function go() {
          _this.props.editTestCase(id);
          resolve(true);
        };

        return getSaveTestCase().saveOrNot().then(go);
      });
    }, _this.playTestCase = function (id) {
      if (_this.props.status !== constant["a" /* APP_STATUS */].NORMAL) return;

      _this.changeTestCase(id).then(function (shouldPlay) {
        if (!shouldPlay) return;

        setTimeout(function () {
          var commands = _this.props.editing.commands;

          var openTc = commands.find(function (tc) {
            return tc.cmd.toLowerCase() === 'open';
          });
          var src = _this.props.editing.meta.src;

          var getMacroName = function getMacroName() {
            return src && src.name && src.name.length ? src.name : 'Untitled';
          };
          var getMacroId = function getMacroId() {
            return src ? src.id : constant["j" /* UNTITLED_ID */];
          };

          _this.props.playerPlay({
            macroId: getMacroId(),
            title: getMacroName(),
            extra: { id: getMacroId() },
            mode: getPlayer().C.MODE.STRAIGHT,
            startIndex: 0,
            startUrl: openTc ? openTc.target : null,
            resources: commands,
            postDelay: _this.props.player.playInterval * 1000
          });
        }, 500);
      });
    }, _this.onReadFile = function (process) {
      return function (e) {
        var files = [].slice.call(e.target.files);
        if (!files || !files.length) return;

        var read = function read(file) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            reader.onload = function (readerEvent) {
              try {
                var text = readerEvent.target.result;
                var obj = process(text, file.name);
                resolve({ data: obj });
              } catch (e) {
                resolve({ err: e, fileName: file.name });
              }
            };

            reader.readAsText(file);
          });
        };

        Promise.all(files.map(read)).then(function (list) {
          var doneList = list.filter(function (x) {
            return x.data;
          });
          var failList = list.filter(function (x) {
            return x.err;
          });

          _this.props.addTestCases(doneList.map(function (x) {
            return x.data;
          })).then(function (_ref2) {
            var passCount = _ref2.passCount,
                failCount = _ref2.failCount,
                failTcs = _ref2.failTcs;

            message_default.a.info([passCount + ' macro' + (passCount > 1 ? 's' : '') + ' imported!', failList.length + failCount + ' macro' + (failList.length + failCount > 1 ? 's' : '') + ' failed!'].join(', '), 3);

            failList.forEach(function (fail) {
              _this.props.addLog('error', 'in parsing ' + fail.fileName + ': ' + fail.err.message);
            });

            failTcs.forEach(function (fail) {
              _this.props.addLog('error', 'duplicated macro name: ' + fail.name);
            });
          });
        });
      };
    }, _this.onHTMLFileChange = function (e) {
      // Note: clear file input, so that we can fire onFileChange when users selects the same file next time
      setTimeout(function () {
        _this.htmlFileInput.value = null;
      }, 500);
      return _this.onReadFile(convert_utils["fromHtml"])(e);
    }, _this.onJSONFileChange = function (e) {
      setTimeout(function () {
        _this.jsonFileInput.value = null;
      }, 500);
      return _this.onReadFile(convert_utils["fromJSONString"])(e);
    }, _this.addTestCase = function () {
      var src = _this.props.editing.meta.src;

      var go = function go() {
        _this.props.editNewTestCase();
        return Promise.resolve();
      };

      return getSaveTestCase().saveOrNot().then(go);
    }, _this.onClickTestCaseMore = function (e, tc, tcIndex) {
      e.stopPropagation();
      e.preventDefault();

      var updated = {
        tcContextMenu: {
          x: e.clientX,
          y: e.clientY,
          isShown: true,
          tc: tc,
          tcIndex: tcIndex
        }

        // Note: to make it work in Firefox, have to delay this new state a little bit
        // Because hideTcContextMenu could be executed at the same time via clickOutside
      };setTimeout(function () {
        return _this.setState(updated);
      }, 20);
    }, _this.hideTcContextMenu = function () {
      _this.setState({
        tcContextMenu: test_cases_extends({}, _this.state.tcContextMenu, {
          isShown: false
        })
      });
    }, _this.onTcMenuClick = function (_ref3, tc, tcIndex) {
      var key = _ref3.key;

      _this.hideTcContextMenu();

      switch (key) {
        case 'play':
          {
            return _this.playTestCase(tc.id);
          }

        case 'rename':
          {
            _this.setState({
              rename: tc.name
            });
            _this.toggleRenameModal(true, tc);
            break;
          }

        case 'delete':
          {
            var go = function go() {
              return _this.props.removeTestCase(tc.id).then(function () {
                message_default.a.success('successfully deleted!', 1.5);
              }).catch(function (e) {
                modal_default.a.warning({
                  title: 'Failed to delete',
                  content: e.message
                });
              });
            };

            return modal_default.a.confirm({
              title: 'Sure to delete?',
              content: 'Do you really want to delete "' + tc.name + '"?',
              okText: 'Delete',
              cancelText: 'Cancel',
              onOk: go,
              onCancel: function onCancel() {}
            });
          }

        case 'duplicate':
          {
            return _this.toggleDuplicateModal(true, tc);
          }

        case 'export_html':
          {
            web_extension_default.a.extension.isAllowedFileSchemeAccess().then(function (isAllowed) {
              if (isAllowed) return;
              var msg = 'To run macro from html file, you need to enable "Allow access to file URLs" in extension details page';
              message_default.a.warn(msg);
              _this.props.addLog('warning', msg);
            });

            return test_cases_downloadTestCaseAsHTML(tc);
          }

        case 'export_json':
          {
            return test_cases_downloadTestCaseAsJSON(tc);
          }

        case 'create_bookmark':
          {
            var bookmarkTitle = prompt('Title for this bookmark', '#' + tc.name + '.kantu');
            if (bookmarkTitle === null) return;

            return bookmark_createBookmarkOnBar(Object(convert_utils["toBookmarkData"])({
              bookmarkTitle: bookmarkTitle,
              name: tc.name
            })).then(function () {
              message_default.a.success('successfully created bookmark!', 1.5);
            });
          }

        case 'copy_to_xfile':
          {
            return Object(services_storage["getStorageManager"])().isStrategyTypeAvailable(services_storage["StorageStrategyType"].XFile).then(function () {
              var macroStorage = Object(services_storage["getStorageManager"])().getStorageForTarget(services_storage["StorageTarget"].Macro, services_storage["StorageStrategyType"].XFile);
              var tcCopy = test_cases_extends({}, tc, { id: Object(utils["uid"])() });

              delete tcCopy.status;
              return macroStorage.write(tcCopy.name, tcCopy).then(function () {
                return message_default.a.success('copied');
              });
            }).catch(function (e) {
              _this.props.updateUI({ showFileNotInstalledDialog: 1 });
            });
          }

        case 'copy_to_browser':
          {
            return Object(services_storage["getStorageManager"])().isStrategyTypeAvailable(services_storage["StorageStrategyType"].Browser).then(function () {
              var macroStorage = Object(services_storage["getStorageManager"])().getStorageForTarget(services_storage["StorageTarget"].Macro, services_storage["StorageStrategyType"].Browser);
              var tcCopy = test_cases_extends({}, tc, { id: Object(utils["uid"])() });

              delete tcCopy.status;
              return macroStorage.write(tcCopy.name, tcCopy).then(function () {
                return message_default.a.success('copied');
              });
            }).catch(function (e) {
              message_default.a.warn(e.message);
            });
          }
      }
    }, _temp), test_cases_possibleConstructorReturn(_this, _ret);
  }

  // Duplicate relative


  test_cases_createClass(SidebarTestCases, [{
    key: 'renderTestCases',
    value: function renderTestCases() {
      var _this2 = this;

      var isEditingUntitled = !this.props.editing.meta.src;
      var testCases = this.props.testCases;
      var searchText = this.state.searchText;

      var trimSearchText = searchText.trim().toLowerCase();
      var matchText = trimSearchText.length === 0 ? function (x) {
        return x;
      } : function (x) {
        return x.name.toLowerCase().indexOf(trimSearchText) !== -1;
      };
      var candidates = testCases.filter(matchText);

      candidates.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA === nameB) return 0;
        return 1;
      });

      return react_default.a.createElement(
        'ul',
        { className: 'sidebar-test-cases' },
        candidates.length === 0 && !isEditingUntitled ? react_default.a.createElement(
          'div',
          { className: 'no-data' },
          'No macros yet'
        ) : null,
        isEditingUntitled ? react_default.a.createElement(
          'li',
          { className: 'selected' },
          'Untitled'
        ) : null,
        candidates.map(function (tc, tcIndex) {
          return react_default.a.createElement(
            'li',
            {
              key: tc.id,
              className: _this2.getItemKlass(tc),
              onClick: function onClick() {
                return _this2.changeTestCase(tc.id);
              },
              onDoubleClick: function onDoubleClick() {
                return _this2.playTestCase(tc.id);
              },
              onContextMenu: function onContextMenu(e) {
                return _this2.onClickTestCaseMore(e, tc, tcIndex);
              }
            },
            react_default.a.createElement(
              'span',
              { className: 'test-case-name' },
              tc.name
            ),
            react_default.a.createElement(icon_default.a, {
              type: 'bars',
              className: 'more-button',
              onClick: function onClick(e) {
                return _this2.onClickTestCaseMore(e, tc, tcIndex);
              }
            })
          );
        })
      );
    }
  }, {
    key: 'getPortalContainer',
    value: function getPortalContainer() {
      var id = '__context_menu_container__';
      var $el = document.getElementById(id);
      if ($el) return $el;

      var $new = document.createElement('div');
      $new.id = id;
      document.body.appendChild($new);
      return $new;
    }
  }, {
    key: 'renderTestCaseContextMenu',
    value: function renderTestCaseContextMenu() {
      var _this3 = this;

      var contextMenu = this.state.tcContextMenu;
      var mw = 230;
      var x = contextMenu.x + window.scrollX;
      var y = contextMenu.y + window.scrollY;
      var $box = document.querySelector('.sidebar-inner');

      if ($box && y + 220 > $box.clientHeight) y -= 220;

      if (x - mw > 0) x -= mw;

      var style = {
        position: 'absolute',
        top: y,
        left: x,
        display: contextMenu.isShown ? 'block' : 'none'
      };

      var menuStyle = {
        width: mw + 'px'
      };

      var content = react_default.a.createElement(
        'div',
        { style: style, className: 'context-menu' },
        react_default.a.createElement(
          build_default.a,
          { onClickOutside: this.hideTcContextMenu },
          react_default.a.createElement(
            menu_default.a,
            {
              onClick: function onClick(e) {
                return _this3.onTcMenuClick(e, contextMenu.tc, contextMenu.tcIndex);
              },
              style: menuStyle,
              mode: 'vertical',
              selectable: false
            },
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'play' },
              'Play'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'rename' },
              'Rename..'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'duplicate' },
              'Duplicate..'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'export_json' },
              'Export as JSON'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'export_html' },
              'Export as HTML (plus autorun)'
            ),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'create_bookmark' },
              'Add shortcut to bookmarks bar'
            ),
            Object(services_storage["getStorageManager"])().isXFileMode() ? react_default.a.createElement(
              menu_default.a.Item,
              { key: 'copy_to_browser' },
              'Copy to Local Storage'
            ) : null,
            Object(services_storage["getStorageManager"])().isBrowserMode() ? react_default.a.createElement(
              menu_default.a.Item,
              { key: 'copy_to_xfile' },
              'Copy to Macro Folder'
            ) : null,
            react_default.a.createElement(menu_default.a.Divider, null),
            react_default.a.createElement(
              menu_default.a.Item,
              { key: 'delete' },
              'Delete'
            )
          )
        )
      );

      return react_dom_default.a.createPortal(content, this.getPortalContainer());
    }
  }, {
    key: 'renderTestCaseMenu',
    value: function renderTestCaseMenu() {
      var _this4 = this;

      var onClickMenuItem = function onClickMenuItem(_ref4) {
        var key = _ref4.key;

        switch (key) {
          case 'export_all_json':
            {
              var zip = new jszip_lib_default.a();

              if (_this4.props.testCases.length === 0) {
                return message_default.a.error('No saved macros to export', 1.5);
              }

              _this4.props.testCases.forEach(function (tc) {
                zip.file(tc.name + '.json', Object(convert_utils["toJSONString"])({
                  name: tc.name,
                  commands: tc.data.commands
                }));
              });

              zip.generateAsync({ type: 'blob' }).then(function (blob) {
                file_saver_default.a.saveAs(blob, 'all_test_cases.zip');
              });

              break;
            }

          case 'import':
            {
              break;
            }
        }
      };

      return react_default.a.createElement(
        menu_default.a,
        { onClick: onClickMenuItem, selectable: false },
        react_default.a.createElement(
          menu_default.a.Item,
          { key: 'export_all_json' },
          'Export All (JSON)'
        ),
        react_default.a.createElement(
          menu_default.a.Item,
          { key: 'import_json' },
          react_default.a.createElement(
            'label',
            { htmlFor: 'select_json_files_for_macros' },
            'Import JSON'
          ),
          react_default.a.createElement('input', {
            multiple: true,
            type: 'file',
            accept: '.json',
            id: 'select_json_files_for_macros',
            onChange: this.onJSONFileChange,
            ref: function ref(_ref5) {
              _this4.jsonFileInput = _ref5;
            },
            style: { display: 'none' }
          })
        ),
        react_default.a.createElement(
          menu_default.a.Item,
          { key: 'import_html' },
          react_default.a.createElement(
            'label',
            { htmlFor: 'select_html_files' },
            'Import HTML'
          ),
          react_default.a.createElement('input', {
            multiple: true,
            type: 'file',
            accept: '.html,.htm',
            id: 'select_html_files',
            onChange: this.onHTMLFileChange,
            ref: function ref(_ref6) {
              _this4.htmlFileInput = _ref6;
            },
            style: { display: 'none' }
          })
        )
      );
    }
  }, {
    key: 'renderDuplicateModal',
    value: function renderDuplicateModal() {
      var _this5 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'Duplicate Macro..',
          okText: 'Save',
          cancelText: 'Cancel',
          visible: this.state.showDuplicate,
          onOk: this.onClickDuplicate,
          onCancel: this.onCancelDuplicate,
          className: 'duplicate-modal'
        },
        react_default.a.createElement(input_default.a, {
          style: { width: '100%' },
          value: this.state.duplicateName,
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 13) _this5.onClickDuplicate();
          },
          onChange: this.onChangeDuplicate,
          placeholder: 'macro name',
          ref: function ref(el) {
            _this5.inputDuplicateTestCase = el;
          }
        })
      );
    }
  }, {
    key: 'renderRenameModal',
    value: function renderRenameModal() {
      var _this6 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'Rename the macro as..',
          okText: 'Save',
          cancelText: 'Cancel',
          visible: this.state.showRename,
          onOk: this.onClickRename,
          onCancel: this.onCancelRename,
          className: 'rename-modal'
        },
        react_default.a.createElement(input_default.a, {
          style: { width: '100%' },
          value: this.state.rename,
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 13) _this6.onClickRename();
          },
          onChange: this.onChangeRename,
          placeholder: 'macro name',
          ref: function ref(el) {
            _this6.inputRenameTestCase = el;
          }
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      return react_default.a.createElement(
        'div',
        null,
        react_default.a.createElement(
          'div',
          { className: 'test-case-actions' },
          react_default.a.createElement(
            button_default.a,
            { type: 'primary', onClick: this.addTestCase },
            '+ Macro'
          ),
          react_default.a.createElement(
            dropdown_default.a,
            { overlay: this.renderTestCaseMenu(), trigger: ['click'] },
            react_default.a.createElement(
              button_default.a,
              { shape: 'circle' },
              react_default.a.createElement(icon_default.a, { type: 'setting' })
            )
          ),
          react_default.a.createElement(search_box, {
            style: { flex: 1 },
            inputProps: {
              placeholder: 'search macro',
              value: this.state.searchText,
              onChange: function onChange(e) {
                return _this7.setState({ searchText: e.target.value });
              }
            }
          })
        ),
        this.renderTestCases(),
        this.renderTestCaseContextMenu(),
        this.renderDuplicateModal(),
        this.renderRenameModal()
      );
    }
  }]);

  return SidebarTestCases;
}(react_default.a.Component);

/* harmony default export */ var test_cases = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    status: state.status,
    testCases: getMacrosWithAllInfo(state),
    testSuites: state.editor.testSuites,
    editing: state.editor.editing,
    player: state.player,
    config: state.config
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(test_cases_extends({}, actions_namespaceObject), dispatch);
})(test_cases_SidebarTestCases));
// CONCATENATED MODULE: ./src/containers/sidebar/index.js











var sidebar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var sidebar_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var sidebar_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function sidebar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sidebar_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function sidebar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var sidebar_Sidebar = function (_React$Component) {
  sidebar_inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    sidebar_classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = sidebar_possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      drag: {
        isDragging: false,
        startX: 0,
        movingX: 0,
        lastWidth: 260,
        currentMinWidth: 260
      }
    }, _this.getSideBarMinWidth = function () {
      var _this$state$drag = _this.state.drag,
          isDragging = _this$state$drag.isDragging,
          lastWidth = _this$state$drag.lastWidth,
          currentMinWidth = _this$state$drag.currentMinWidth;

      return (isDragging ? currentMinWidth : lastWidth) + 'px';
    }, _this.onResizeDragStart = function (e) {
      // Note: Firefox requires us to set something to DataTransfer, otherwise drag and dragEnd won't be triggered
      // refer to https://stackoverflow.com/questions/33434275/firefox-on-drag-end-is-not-called-in-a-react-component
      e.dataTransfer.setData('text', '');

      var style = window.getComputedStyle(_this.$dom);
      var width = parseInt(style.width);

      _this.setState(Object(utils["setIn"])(['drag'], {
        isDragging: true,
        // Check out the note on `screenX` in `onResizeDragEnd` event
        startX: e.screenX,
        lastWidth: width,
        currentWidth: width
      }, _this.state));
    }, _this.onResizeDragEnd = function (e) {
      // Note: use `screenX` instead of `clientX`, because `clientX` of dragEnd events in Firefox
      // is always set to 0, while `screenX` is luckily still available. And since we only make use of
      // difference of X coordinate. `screenX` and `clientX` both work for us.
      //
      // reference:
      // https://bugzilla.mozilla.org/show_bug.cgi?id=505521
      // https://developer.mozilla.org/en-US/docs/Web/Events/dragend
      var diff = e.screenX - _this.state.drag.startX;
      var width = diff + _this.state.drag.lastWidth;

      _this.setState(Object(utils["setIn"])(['drag'], {
        isDragging: false,
        startX: 0,
        lastWidth: width,
        currentMinWidth: width
      }));
    }, _this.onTryToChangeStorageMode = function (storageMode) {
      // Steps:
      // 1. [pseudo code] StorageManager.changeMode()
      // 2. Try to refresh / reload all resources (macros, test suites, csvs, vision images)
      // 3. Be aware of any pending changes in current storage
      //
      // There should be no exception when switching back to browser mode
      // But `[pseudo code] StorageManager.changeMode(xFileMode)` should throw error when xFile is not ready.
      //
      // Once catched that error, should do following:
      // 1. Reset mode back to browser mode
      // 2. Show info dialog to encourage users to download xFile host

      var man = Object(services_storage["getStorageManager"])();

      man.isStrategyTypeAvailable(storageMode).then(function (isOk) {
        if (isOk) {
          // Note: it will emit events, so that `index.js` could handle the rest (refresh / reload resources)
          _this.props.updateConfig({ storageMode: storageMode });
          return man.setCurrentStrategyType(storageMode);
        }

        throw new Error('It should be impossible to get isOk as false');
      }).catch(function (e) {
        message_default.a.warn(e.message);

        if (e.message && /xFile is not installed yet/.test(e.message)) {
          _this.props.updateUI({ showFileNotInstalledDialog: true });
        } else {
          _this.props.updateUI({ showSettings: true, settingsTab: 'xmodules' });
        }
      });
    }, _this.openRegisterSettings = function (e) {
      if (e && e.preventDefault) e.preventDefault();
      _this.props.updateUI({ showSettings: true, settingsTab: 'register' });
    }, _temp), sidebar_possibleConstructorReturn(_this, _ret);
  }

  sidebar_createClass(Sidebar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var type = Object(services_storage["getStorageManager"])().getCurrentStrategyType();
      this.setState({ storageMode: type });
    }
  }, {
    key: 'prefixHardDisk',
    value: function prefixHardDisk(str) {
      var isXFileMode = Object(services_storage["getStorageManager"])().isXFileMode();
      if (!isXFileMode) return str;

      return react_default.a.createElement(
        'div',
        {
          style: {
            display: 'inline-block'
          }
        },
        react_default.a.createElement('img', {
          src: './img/hard-drive.svg',
          style: {
            position: 'relative',
            top: '3px',
            marginRight: '5px',
            height: '15px'
          }
        }),
        react_default.a.createElement(
          'span',
          null,
          str
        )
      );
    }
  }, {
    key: 'renderXFileNotInstalledModal',
    value: function renderXFileNotInstalledModal() {
      var _this2 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: '',
          className: Object(utils["cn"])('xfile-not-installed-modal', { 'left-bottom': this.props.ui.showFileNotInstalledDialog === true }),
          width: 350,
          footer: null,
          visible: this.props.ui.showFileNotInstalledDialog,
          onCancel: function onCancel() {
            _this2.props.updateUI({ showFileNotInstalledDialog: false });
          }
        },
        react_default.a.createElement(
          'p',
          null,
          'XFileAccess Module not installed.'
        ),
        react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            button_default.a,
            {
              type: 'primary',
              onClick: function onClick() {
                _this2.props.updateUI({
                  showFileNotInstalledDialog: false,
                  showSettings: true,
                  settingsTab: 'xmodules'
                });
              }
            },
            'Open Settings'
          )
        )
      );
    }
  }, {
    key: 'shouldRenderMacroNote',
    value: function shouldRenderMacroNote() {
      var _props$config = this.props.config,
          xmodulesStatus = _props$config.xmodulesStatus,
          storageMode = _props$config.storageMode;


      if (storageMode !== services_storage["StorageStrategyType"].XFile) return false;
      if (xmodulesStatus === 'pro') return false;

      var macroStorage = Object(services_storage["getStorageManager"])().getMacroStorage();
      return macroStorage.getDisplayCount() < macroStorage.getTotalCount();
    }
  }, {
    key: 'renderMacroNote',
    value: function renderMacroNote() {
      if (!this.shouldRenderMacroNote()) return null;
      var _props$config2 = this.props.config,
          xmodulesStatus = _props$config2.xmodulesStatus,
          storageMode = _props$config2.storageMode;

      var _ref2 = function () {
        switch (xmodulesStatus) {
          case 'unregistered':
            return [config_default.a.xmodulesLimit.unregistered.xFileMacroCount, config_default.a.xmodulesLimit.unregistered.upgradeUrl];

          case 'free':
            return [config_default.a.xmodulesLimit.free.xFileMacroCount, config_default.a.xmodulesLimit.free.upgradeUrl];

          default:
            throw new Error('Unsupported xmodulesStatus: \'' + xmodulesStatus + '\'');
        }
      }(),
          _ref3 = sidebar_slicedToArray(_ref2, 2),
          max = _ref3[0],
          link = _ref3[1];

      return react_default.a.createElement(
        'div',
        { className: 'note-for-macros' },
        xmodulesStatus === 'unregistered' ? react_default.a.createElement(
          'div',
          null,
          'XModules Free Edition:',
          react_default.a.createElement('br', null),
          'Only the first ',
          max,
          ' files are displayed.',
          react_default.a.createElement('br', null),
          react_default.a.createElement(
            'a',
            { href: link, onClick: this.openRegisterSettings },
            'Upgrade to PRO'
          ),
          ' to add more.'
        ) : null,
        xmodulesStatus === 'free' ? react_default.a.createElement(
          'div',
          null,
          'XModules PRO1 Edition:',
          react_default.a.createElement('br', null),
          'Only the first ',
          max,
          ' files displayed.',
          react_default.a.createElement('br', null),
          react_default.a.createElement(
            'a',
            { href: link, onClick: this.openRegisterSettings },
            'Upgrade to PRO2 or Enterprise'
          ),
          ' for unlimited files'
        ) : null
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return react_default.a.createElement(
        'div',
        {
          className: Object(utils["cn"])('sidebar', { 'with-xmodules-note': this.shouldRenderMacroNote() }),
          ref: function ref(el) {
            _this3.$dom = el;
          },
          style: { minWidth: this.getSideBarMinWidth() }
        },
        react_default.a.createElement(
          'div',
          { className: 'sidebar-inner' },
          react_default.a.createElement(
            tabs_default.a,
            {
              defaultActiveKey: 'macros',
              activeKey: this.props.ui.sidebarTab || 'macros',
              onChange: function onChange(activeKey) {
                return _this3.props.updateUI({ sidebarTab: activeKey });
              }
            },
            react_default.a.createElement(
              tabs_default.a.TabPane,
              { tab: this.prefixHardDisk('Macros'), key: 'macros' },
              react_default.a.createElement(test_cases, null)
            ),
            react_default.a.createElement(
              tabs_default.a.TabPane,
              { tab: this.prefixHardDisk('Test Suites'), key: 'test_suites' },
              react_default.a.createElement(test_suites, null)
            )
          )
        ),
        react_default.a.createElement(
          'div',
          { className: 'sidebar-storage-mode' },
          this.renderMacroNote(),
          react_default.a.createElement(
            'div',
            { className: 'storage-mode-header' },
            react_default.a.createElement(
              'h3',
              null,
              'Storage Mode'
            ),
            Object(services_storage["getStorageManager"])().isXFileMode() ? react_default.a.createElement('img', {
              src: './img/reload.svg',
              title: 'Reload all resources on hard drive',
              style: {
                height: '15px',
                cursor: 'pointer'
              },
              onClick: function onClick() {
                Object(services_storage["getStorageManager"])().emit(services_storage["StorageManagerEvent"].ForceReload);
                message_default.a.info('reloaded from hard drive');
              }
            }) : null,
            react_default.a.createElement(
              'a',
              { href: 'https://a9t9.com/x/idehelp?help=storage_mode', target: '_blank' },
              'More Info'
            )
          ),
          react_default.a.createElement(
            select_default.a,
            {
              style: { width: '100%' },
              placeholder: 'Storage Mode',
              value: this.props.config.storageMode,
              onChange: this.onTryToChangeStorageMode
            },
            react_default.a.createElement(
              select_default.a.Option,
              { value: services_storage["StorageStrategyType"].Browser },
              'Local Storage (in browser)'
            ),
            react_default.a.createElement(
              select_default.a.Option,
              { value: services_storage["StorageStrategyType"].XFile },
              'File system (on hard drive)'
            )
          )
        ),
        react_default.a.createElement('div', {
          className: Object(utils["cn"])('resize-handler', { focused: this.state.drag.isDragging }),
          draggable: 'true',
          onDragStart: this.onResizeDragStart,
          onDragEnd: this.onResizeDragEnd,
          onMouseDown: function onMouseDown() {
            return _this3.setState(Object(utils["setIn"])(['drag', 'isDragging'], true, _this3.state));
          }
        }),
        this.renderXFileNotInstalledModal()
      );
    }
  }]);

  return Sidebar;
}(react_default.a.Component);

/* harmony default export */ var containers_sidebar = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    status: state.status,
    testCases: state.editor.testCases,
    testSuites: state.editor.testSuites,
    editing: state.editor.editing,
    player: state.player,
    config: state.config,
    ui: state.ui
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(sidebar_extends({}, actions_namespaceObject), dispatch);
})(sidebar_Sidebar));
// EXTERNAL MODULE: ./src/containers/dashboard/dashboard.scss
var dashboard = __webpack_require__(1000);

// EXTERNAL MODULE: ./node_modules/antd/lib/table/index.js
var table = __webpack_require__(122);
var table_default = /*#__PURE__*/__webpack_require__.n(table);

// EXTERNAL MODULE: ./node_modules/react-virtual-list/lib/VirtualList.js
var VirtualList = __webpack_require__(602);
var VirtualList_default = /*#__PURE__*/__webpack_require__.n(VirtualList);

// EXTERNAL MODULE: ./src/common/inspector.js
var inspector = __webpack_require__(43);

// CONCATENATED MODULE: ./src/containers/dashboard/editor.js










































var editor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var editor_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function editor_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function editor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function editor_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function editor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























var newCommand = {
  cmd: '',
  target: '',
  value: ''
};

var defaultDataSource = [newCommand];

var editor_DashboardEditor = function (_React$Component) {
  editor_inherits(DashboardEditor, _React$Component);

  function DashboardEditor() {
    var _ref;

    var _temp, _this, _ret;

    editor_classCallCheck(this, DashboardEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = editor_possibleConstructorReturn(this, (_ref = DashboardEditor.__proto__ || Object.getPrototypeOf(DashboardEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cursor: null,

      contextMenu: {
        x: null,
        y: null,
        isShown: false
      },

      visionFindPreview: {
        visible: false,
        url: null,
        timer: null,
        left: -9999,
        top: -9999
      }
    }, _this.resetSourceCodeCursor = function (resetCursor) {
      return editor_extends({}, resetCursor ? { cursor: { line: 0, ch: 0 } } : {});
    }, _this.onDetailChange = function (key, value) {
      _this.props.updateSelectedCommand(editor_defineProperty({}, key, value));
    }, _this.onChangeCommandsView = function (type) {
      switch (type) {
        case 'table_view':
        case 'source_view':
          {
            var forceType = _this.props.sourceErrMsg ? 'source_view' : type;

            _this.props.setEditorActiveTab(forceType);

            if (type === 'source_view' && _this.codeMirror && _this.state.cursor) {
              // Note: must delay a while so that focus will take effect
              setTimeout(function () {
                _this.codeMirror.setCursor(_this.state.cursor, true, true);
              }, 200);
            }

            break;
          }
      }
    }, _this.onSourceBlur = function () {
      var _this$props = _this.props,
          sourceTextModified = _this$props.sourceTextModified,
          sourceText = _this$props.sourceText;

      _this.props.saveSourceCodeToEditing(sourceTextModified);
    }, _this.onChangeEditSource = function (editor, data, text) {
      _this.props.setSourceCurrent(text);
    }, _this.onClickFind = function () {
      var lastOperation = _this.state.lastOperation;
      var selectedCommand = _this.props.selectedCommand;


      var p = new Promise(function (resolve, reject) {
        switch (selectedCommand.cmd) {
          case 'visionFind':
          case 'visualSearch':
          case 'visualAssert':
          case 'visualVerify':
          case 'visionLimitSearchArea':
          case 'visionLimitSearchAreaRelative':
          case 'XClick':
          case 'XClickRelative':
          case 'XMove':
          case 'XMoveRelative':
          case 'OCRExtract':
          case 'OCRExtractRelative':
          case 'OCRSearch':
            {
              var selectedIndex = _this.props.editing.meta.selectedIndex;
              var run = function run() {
                // Note: run visionFind/visualSearch as single line command, but without timeout waiting
                _this.playLine(selectedIndex, {
                  overrideScope: { '!TIMEOUT_WAIT': 0 },
                  commandExtra: {
                    throwError: true,
                    // visualXXX uses this flag in desktop mode to open Desktop Screenshot Editor to preview result
                    debugVisual: true
                  }
                });
                return resolve(true);
              };

              return (_this.props.config.cvScope === 'desktop' ? (message_default.a.info('About to take desktop screenshot in 3 seconds'), Object(ts_utils["delay"])(function () {}, 3000)) : Promise.resolve()).then(run);
            }

          default:
            {
              ipc_cs["a" /* default */].ask('PANEL_HIGHLIGHT_DOM', {
                lastOperation: lastOperation,
                locator: selectedCommand.target
              }).then(resolve, reject);
            }
        }
      });

      p.catch(function (e) {
        message_default.a.error(e.message, 1.5);
      });
    }, _this.onToggleSelect = function () {
      var _this$props2 = _this.props,
          selectedCommand = _this$props2.selectedCommand,
          config = _this$props2.config;

      var p = new Promise(function (resolve, reject) {
        var defaultAction = function defaultAction() {
          if (_this.props.status === constant["a" /* APP_STATUS */].INSPECTOR) {
            _this.props.stopInspecting();
          } else {
            _this.props.startInspecting();
          }

          resolve(true);
        };
        var takeImage = function takeImage() {
          var p = config.cvScope === 'desktop' ? function () {
            message_default.a.info('About to take desktop screenshot in 3 seconds');
            return Object(ts_utils["delay"])(function () {
              return ipc_cs["a" /* default */].ask('PANEL_SELECT_AREA_ON_DESKTOP');
            }, 3000);
          }() : ipc_cs["a" /* default */].ask('PANEL_SELECT_AREA_ON_CURRENT_PAGE');

          return p.then(function (res) {
            return _this.props.renameVisionImage(res.fileName);
          }).then(resolve, reject);
        };

        switch (selectedCommand.cmd) {
          case 'visionFind':
          case 'visualSearch':
          case 'visualAssert':
          case 'visualVerify':
          case 'OCRExtract':
          case 'OCRExtractRelative':
          case 'visionLimitSearchAreaRelative':
          case 'XClickRelative':
          case 'XMoveRelative':
          case 'XMove':
            {
              return takeImage();
            }

          case 'OCRSearch':
            throw new Error('No select possible in OCR mode, just enter the text');

          case 'XClick':
            {
              if (/^ocr=/i.test(selectedCommand.target)) {
                throw new Error('No select possible in OCR mode, just enter the text');
              } else {
                return takeImage();
              }
            }

          case 'visionLimitSearchArea':
            {
              if (config.cvScope === 'desktop') {
                return takeImage();
              } else {
                return defaultAction();
              }
            }

          default:
            {
              return defaultAction();
            }
        }
      });

      p.catch(function (e) {
        message_default.a.error(e.message);
      });
    }, _this.onDoubleClick = function () {
      var lastScreenX = void 0;
      var lastScreenY = void 0;
      var lastTime = void 0;

      return function (e) {
        var go = function go() {
          var $row = inspector["a" /* default */].parentWithClass('real-command', e.target);
          if (!$row) return;

          var index = parseInt($row.getAttribute('data-index'));
          if (isNaN(index)) return;

          _this.playLine(index);
        };

        var now = new Date() * 1;

        if (lastScreenX === e.screenX && lastScreenY === e.screenY && now - lastTime < 300) {
          go();
        }

        lastScreenX = e.screenX;
        lastScreenY = e.screenY;
        lastTime = now;
      };
    }(), _this.scheduleHideVisionFindPreview = function () {
      log_default()('scheduleHideVisionFindPreview');
      var timer = _this.state.visionFindPreview.timer;


      clearTimeout(timer);

      return setTimeout(function () {
        var visible = _this.state.visionFindPreview.visible;


        if (visible) {
          log_default()('to hide preview');

          _this.setState({
            visionFindPreview: {
              visible: false
            }
          });
        }
      }, 3000);
    }, _this.onMouseEnterTarget = function (e, command) {
      log_default()('onMouseOverTarget');
      if (!_this.commandHasVisionImage(command)) return;
      if (_this.state.visionFindPreview.visible) return;

      clearTimeout(_this.state.visionFindPreview.timer);

      var visionStorage = Object(services_storage["getStorageManager"])().getVisionStorage();
      var rect = e.target.getBoundingClientRect();
      var file = command.target.trim().split('@')[0];
      var common = {
        visible: true,
        left: rect.left,
        top: rect.top + rect.height
      };

      visionStorage.exists(file).then(function (existed) {
        if (!existed) {
          return _this.setState({
            visionFindPreview: editor_extends({}, common, {
              url: './img/not_found.png',
              timer: _this.scheduleHideVisionFindPreview()
            })
          });
        }

        return visionStorage.getLink(file).then(function (link) {
          return _this.setState({
            visionFindPreview: editor_extends({}, common, {
              url: link,
              timer: _this.scheduleHideVisionFindPreview()
            })
          });
        });
      });
    }, _this.onMouseLeaveTarget = function (e, command) {
      log_default()('onMouseOutTarget');
      if (!_this.commandHasVisionImage(command)) return;
      if (!_this.state.visionFindPreview.visible) return;

      clearTimeout(_this.state.visionFindPreview.timer);

      _this.setState({
        visionFindPreview: {
          visible: false
        }
      });
    }, _this.jumpToSourceCode = function (commandIndex) {
      _this.props.setEditorActiveTab('source_view');
      setTimeout(function () {
        var instance = _this.state.cmEdtiorInstance;
        var line = 3 + commandIndex * 5;
        var endLine = line + 5;
        var ch = 0;

        var $tab = document.querySelector('.source-view');
        var tabHeight = parseInt(window.getComputedStyle($tab).height, 10);
        var margin = (tabHeight - 60) / 2;

        log_default()('margin', margin, tabHeight);
        instance.scrollIntoView({ line: line, ch: ch }, margin);
        instance.setSelection({ ch: ch, line: line }, { ch: ch, line: endLine }, { scroll: false });
      }, 100);
    }, _this.commandClassName = function (record, index) {
      var _this$props3 = _this.props,
          editing = _this$props3.editing,
          player = _this$props3.player,
          breakpointIndices = _this$props3.breakpointIndices,
          doneCommandIndices = _this$props3.doneCommandIndices,
          errorCommandIndices = _this$props3.errorCommandIndices;
      var nextCommandIndex = player.nextCommandIndex;
      var commands = editing.commands;

      var classNames = [];

      if (breakpointIndices.indexOf(index) !== -1) {
        classNames.push('breakpoint-command');
      }

      if (record.cmd === 'comment') {
        classNames.push('comment-command');
      }

      if (index === editing.meta.selectedIndex) {
        classNames.push('selected-command');
      } else if (index === nextCommandIndex) {
        classNames.push('running-command');
      } else if (errorCommandIndices.indexOf(index) !== -1) {
        classNames.push('error-command');
      } else if (doneCommandIndices.indexOf(index) !== -1) {
        classNames.push('done-command');
      }

      return classNames.join(' ');
    }, _this.needVirtualList = function () {
      var _this$props$editing$c = _this.props.editing.commands,
          commands = _this$props$editing$c === undefined ? [] : _this$props$editing$c;

      var threshold = 0;

      return commands.length >= threshold;
    }, _this.virtualCommmandList = function (_ref2) {
      var virtual = _ref2.virtual,
          itemHeight = _ref2.itemHeight;
      var commands = _this.props.editing.commands;

      var editable = _this.isPlayerStopped();
      var renderItem = function renderItem(item) {
        if (item.header) {
          return react_default.a.createElement(
            'div',
            { className: 'command-row header-row', key: 'header' },
            react_default.a.createElement(
              'div',
              { className: 'row-col command-col' },
              'Command'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row-col target-col' },
              'Target'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row-col value-col' },
              'Value'
            ),
            react_default.a.createElement(
              'div',
              { className: 'row-col op-col' },
              'Ops'
            )
          );
        }

        if (item.footer) {
          return react_default.a.createElement(
            'div',
            { className: 'command-row footer-row', key: 'footer', onClick: function onClick() {
                return _this.props.insertCommand(newCommand, commands.length);
              } },
            'Add'
          );
        }

        return react_default.a.createElement(
          'div',
          {
            key: item.key,
            style: { height: itemHeight + 'px' },
            className: 'command-row real-command ' + _this.commandClassName(item, item.realIndex),
            'data-index': '' + item.realIndex,
            onClick: function onClick() {
              return _this.props.selectCommand(item.realIndex);
            },
            onContextMenu: function onContextMenu(e) {
              return _this.onContextMenu(e, item.realIndex);
            }
          },
          react_default.a.createElement(
            'div',
            { className: 'row-col command-col', title: item.cmd },
            item.cmd
          ),
          react_default.a.createElement(
            'div',
            {
              className: 'row-col target-col',
              title: item.target,
              onMouseEnter: function onMouseEnter(e) {
                return _this.onMouseEnterTarget(e, item);
              },
              onMouseLeave: function onMouseLeave(e) {
                return _this.onMouseLeaveTarget(e, item);
              }
            },
            item.target
          ),
          react_default.a.createElement(
            'div',
            { className: 'row-col value-col', title: item.value },
            item.value
          ),
          react_default.a.createElement(
            'div',
            { className: 'row-col op-col' },
            react_default.a.createElement(
              button_default.a,
              {
                disabled: !editable,
                shape: 'circle',
                onClick: function onClick(e) {
                  _this.props.removeCommand(item.realIndex);e.stopPropagation();
                }
              },
              react_default.a.createElement(icon_default.a, { type: 'minus' })
            ),
            react_default.a.createElement(
              button_default.a,
              {
                disabled: !editable,
                shape: 'circle',
                onClick: function onClick(e) {
                  _this.props.duplicateCommand(item.realIndex);e.stopPropagation();
                }
              },
              react_default.a.createElement(icon_default.a, { type: 'plus' })
            )
          )
        );
      };

      return react_default.a.createElement(
        'div',
        { style: virtual.style },
        virtual.items.map(renderItem)
      );
    }, _this.onContextMenu = function (e, index) {
      log_default()('onContextMenu');

      _this.setState({
        contextMenu: {
          x: e.clientX,
          y: e.clientY,
          isShown: true,
          commandIndex: index
        }
      });

      _this.props.selectCommand(index, true);
      e.preventDefault();
      e.stopPropagation();
    }, _this.onHideMenu = function (e) {
      if (e.button !== 0) return;

      _this.setState({
        contextMenu: editor_extends({}, _this.state.contextMenu, {
          isShown: false
        })
      });
    }, _this.getTestCaseName = function () {
      var src = _this.props.editing.meta.src;

      return src && src.name && src.name.length ? src.name : 'Untitled';
    }, _this.playLine = function (commandIndex) {
      var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var commands = _this.props.editing.commands;
      var src = _this.props.editing.meta.src;


      _this.setState({ lastOperation: 'play' });

      return _this.props.playerPlay(editor_extends({
        macroId: src && src.id,
        title: _this.getTestCaseName(),
        extra: {
          id: src && src.id
        },
        mode: player_Player.C.MODE.SINGLE,
        startIndex: commandIndex,
        startUrl: null,
        resources: commands,
        postDelay: _this.props.config.playCommandInterval * 1000
      }, extraOptions));
    }, _temp), editor_possibleConstructorReturn(_this, _ret);
  }

  // Note: virtual-list eats up double click events. so have to manually track click event instead


  editor_createClass(DashboardEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.onHideMenu);
      document.addEventListener('click', this.onDoubleClick);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Note: update sourceText whenever editing changed
      if (nextProps.editing.meta.src !== this.props.editing.meta.src || nextProps.editing.commands !== this.props.editing.commands) {
        var resetCursor = nextProps.editing.meta.src !== this.props.editing.meta.src;

        this.setState(this.resetSourceCodeCursor(resetCursor));
      }

      if (nextProps.status === constant["a" /* APP_STATUS */].PLAYER && nextProps.player.nextCommandIndex !== this.props.player.nextCommandIndex) {
        var $tableBody = document.querySelector('.table-wrapper');
        var itemHeight = 45;

        if (!$tableBody) return;

        $tableBody.scrollTop = itemHeight * nextProps.player.nextCommandIndex;
      }

      if (nextProps.status === constant["a" /* APP_STATUS */].RECORDER && nextProps.editing.commands.length > this.props.editing.commands.length) {
        var _$tableBody = document.querySelector('.table-wrapper');
        var _itemHeight = 45;

        if (!_$tableBody) return;

        setTimeout(function () {
          _$tableBody.scrollTop = _itemHeight * nextProps.editing.commands.length * 2;
        }, 100);
      }
    }
  }, {
    key: 'isPlayerStopped',
    value: function isPlayerStopped() {
      return this.props.player.status === constant["g" /* PLAYER_STATUS */].STOPPED;
    }
  }, {
    key: 'isSelectedCommandVisualSearch',
    value: function isSelectedCommandVisualSearch(command) {
      var _props = this.props,
          editing = _props.editing,
          config = _props.config;
      var commands = editing.commands,
          meta = editing.meta;
      var selectedIndex = meta.selectedIndex;


      var dataSource = commands && commands.length ? commands : defaultDataSource;
      var selectedCmd = command || dataSource[selectedIndex];

      var selectedCmdIsVisualSearch = function () {
        if (!selectedCmd) return false;
        if (config.cvScope === 'desktop' && selectedCmd.cmd === 'visionLimitSearchArea') return true;

        return ['visionFind', 'visualSearch', 'visualAssert', 'visualVerify', 'XClick', 'XMove', 'XClickRelative', 'XMoveRelative', 'OCRExtract', 'OCRExtractRelative', 'visionLimitSearchAreaRelative'].indexOf(selectedCmd.cmd) !== -1;
      }();

      return selectedCmdIsVisualSearch;
    }
  }, {
    key: 'commandHasVisionImage',
    value: function commandHasVisionImage(command) {
      if (!this.isSelectedCommandVisualSearch(command)) return false;

      var commandsCouldHaveVisionImage = ['XClick', 'XClickRelative', 'XMove', 'XMoveRelative', 'OCRExtract', 'OCRExtractRelative', 'visionLimitSearchArea', 'visionLimitSearchAreaRelative'];

      if (commandsCouldHaveVisionImage.indexOf(command.cmd) !== -1 && !/\.png/i.test(command.target)) return false;
      return true;
    }
  }, {
    key: 'renderVisionFindPreview',
    value: function renderVisionFindPreview() {
      var _state$visionFindPrev = this.state.visionFindPreview,
          visible = _state$visionFindPrev.visible,
          url = _state$visionFindPrev.url,
          left = _state$visionFindPrev.left,
          top = _state$visionFindPrev.top;

      if (!visible) return null;

      return react_default.a.createElement('div', { style: {
          position: 'absolute',
          width: '100px',
          height: '100px',
          border: '1px solid #ccc',
          left: left + 'px',
          top: top + 'px',
          backgroundColor: '#eee',
          backgroundImage: 'url(' + url + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        } });
    }
  }, {
    key: 'renderContextMenu',
    value: function renderContextMenu() {
      var _this2 = this;

      var clipboard = this.props.clipboard;
      var contextMenu = this.state.contextMenu;

      var dw = document.documentElement.clientWidth;
      var dh = document.documentElement.clientHeight;
      var mw = 240;
      var x = contextMenu.x + window.scrollX;
      var y = contextMenu.y + window.scrollY;

      if (x + mw > dw) x -= mw;

      var style = {
        position: 'absolute',
        top: y,
        left: x,
        display: contextMenu.isShown ? 'block' : 'none'
      };

      var menuStyle = {
        width: mw + 'px'
      };

      var commandIndex = contextMenu.commandIndex;

      var isBreakpoint = this.props.breakpointIndices.indexOf(commandIndex) !== -1;

      var handleClick = function handleClick(e) {
        switch (e.key) {
          case 'cut':
            return _this2.props.cutCommand(commandIndex);
          case 'copy':
            return _this2.props.copyCommand(commandIndex);
          case 'paste':
            return _this2.props.pasteCommand(commandIndex);
          case 'insert':
            return _this2.props.insertCommand(newCommand, commandIndex + 1);
          case 'run_line':
            {
              return _this2.playLine(commandIndex);
            }
          case 'run_from_here':
            {
              var commands = _this2.props.editing.commands;
              var src = _this2.props.editing.meta.src;


              _this2.setState({ lastOperation: 'play' });

              return _this2.props.playerPlay({
                macroId: _this2.props.macroId,
                title: _this2.getTestCaseName(),
                extra: { id: _this2.props.macroId },
                mode: player_Player.C.MODE.STRAIGHT,
                startIndex: commandIndex,
                startUrl: null,
                resources: commands,
                postDelay: _this2.props.config.playCommandInterval * 1000
              });
            }
          case 'add_breakpoint':
            {
              return _this2.props.addBreakpoint(_this2.props.macroId, commandIndex);
            }
          case 'remove_breakpoint':
            {
              return _this2.props.removeBreakpoint(_this2.props.macroId, commandIndex);
            }
          case 'jump_to_source_code':
            {
              return _this2.jumpToSourceCode(commandIndex);
            }
        }
      };

      return react_default.a.createElement(
        'div',
        { style: style, id: 'context_menu' },
        react_default.a.createElement(
          menu_default.a,
          { onClick: handleClick, style: menuStyle, mode: 'vertical', selectable: false },
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'cut' },
            'Cut'
          ),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'copy' },
            'Copy'
          ),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'paste', disabled: clipboard.commands.length === 0 },
            'Paste'
          ),
          react_default.a.createElement(menu_default.a.Divider, null),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'insert' },
            'Insert new line'
          ),
          react_default.a.createElement(menu_default.a.Divider, null),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'jump_to_source_code' },
            'Jump to source code'
          ),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: isBreakpoint ? 'remove_breakpoint' : 'add_breakpoint' },
            isBreakpoint ? 'Remove breakpoint' : 'Add breakpoint'
          ),
          react_default.a.createElement(menu_default.a.Divider, null),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'run_line' },
            'Execute this command'
          ),
          react_default.a.createElement(
            menu_default.a.Item,
            { key: 'run_from_here' },
            'Run from here'
          )
        )
      );
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          editing = _props2.editing,
          player = _props2.player;
      var commands = editing.commands;

      var dataSource = (commands && commands.length ? commands : defaultDataSource).map(function (command, i) {
        return editor_extends({}, command, {
          key: Math.random(),
          realIndex: i
        });
      });

      return this.needVirtualList() ? this.renderVirtualTable(dataSource) : this.renderNormalTable(dataSource);
    }
  }, {
    key: 'renderVirtualTable',
    value: function renderVirtualTable(dataSource) {
      var CommandVirtualList = VirtualList_default()({ container: this.listContainer })(this.virtualCommmandList);
      var paddedDataSource = [{ header: true }].concat(editor_toConsumableArray(dataSource), [{ footer: true }]);

      return react_default.a.createElement(
        'div',
        { className: 't-body' },
        !this.listContainer ? null : react_default.a.createElement(CommandVirtualList, { itemHeight: 45, items: paddedDataSource })
      );
    }
  }, {
    key: 'renderNormalTable',
    value: function renderNormalTable(dataSource) {
      var _this3 = this;

      var _props3 = this.props,
          editing = _props3.editing,
          player = _props3.player,
          doneCommandIndices = _props3.doneCommandIndices,
          errorCommandIndices = _props3.errorCommandIndices;
      var nextCommandIndex = player.nextCommandIndex;
      var commands = editing.commands;

      var editable = this.isPlayerStopped();

      var columns = [{ title: 'Command', dataIndex: 'cmd', key: 'cmd', width: 130 }, { title: 'Target', dataIndex: 'target', key: 'target', width: 190 }, { title: 'Value', dataIndex: 'value', key: 'value' }, {
        title: 'Ops',
        key: 'ops',
        width: 80,
        render: function render(text, record, index) {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              button_default.a,
              {
                disabled: !editable,
                shape: 'circle',
                onClick: function onClick(e) {
                  _this3.props.removeCommand(index);e.stopPropagation();
                }
              },
              react_default.a.createElement(icon_default.a, { type: 'minus' })
            ),
            react_default.a.createElement(
              button_default.a,
              {
                disabled: !editable,
                shape: 'circle',
                onClick: function onClick(e) {
                  _this3.props.duplicateCommand(index);e.stopPropagation();
                }
              },
              react_default.a.createElement(icon_default.a, { type: 'plus' })
            )
          );
        }
      }];

      var tableConfig = {
        dataSource: dataSource,
        columns: columns,
        pagination: false,
        footer: function footer() {
          return react_default.a.createElement(
            'div',
            { className: 'table-footer', onClick: function onClick(e) {
                _this3.props.insertCommand(newCommand, commands.length);
              } },
            'Add'
          );
        },
        onRowClick: function onRowClick(record, index, e) {
          _this3.props.selectCommand(index);
        },
        rowClassName: this.commandClassName
      };

      return react_default.a.createElement(table_default.a, tableConfig);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props4 = this.props,
          status = _props4.status,
          editing = _props4.editing,
          config = _props4.config;
      var commands = editing.commands,
          meta = editing.meta;
      var selectedIndex = meta.selectedIndex;


      var isPlayerStopped = this.isPlayerStopped();
      var dataSource = commands && commands.length ? commands : defaultDataSource;
      var selectedCmd = dataSource[selectedIndex];
      var isCmdEditable = isPlayerStopped && !!selectedCmd;
      var isInspecting = status === constant["a" /* APP_STATUS */].INSPECTOR;

      var selectedCmdIsVisualSearch = this.isSelectedCommandVisualSearch();

      return react_default.a.createElement(
        'div',
        { className: 'editor-wrapper' },
        react_default.a.createElement(
          'div',
          { className: 'tabs-wrapper' },
          react_default.a.createElement(
            tabs_default.a,
            {
              type: 'card',
              className: 'commands-view',
              activeKey: this.props.editor.activeTab,
              onChange: this.onChangeCommandsView
            },
            react_default.a.createElement(
              tabs_default.a.TabPane,
              { tab: 'Table View', key: 'table_view' },
              react_default.a.createElement(
                'div',
                { className: 'form-group table-wrapper', style: { marginBottom: 0 }, ref: function ref(_ref3) {
                    _this4.listContainer = _ref3;
                  } },
                this.renderTable()
              ),
              react_default.a.createElement(
                'div',
                { className: 'form-group fields-wrapper', style: { marginBottom: 0 } },
                react_default.a.createElement(
                  form_default.a,
                  null,
                  react_default.a.createElement(
                    form_default.a.Item,
                    { label: 'Command', labelCol: { span: 4 }, wrapperCol: { span: 20 } },
                    react_default.a.createElement(
                      'div',
                      { className: 'flex-row' },
                      react_default.a.createElement(
                        select_default.a,
                        {
                          showSearch: true,
                          optionFilterProp: 'children',
                          placeholder: 'command',
                          disabled: !isCmdEditable,
                          value: selectedCmd && selectedCmd.cmd,
                          onChange: function onChange(value) {
                            return _this4.onDetailChange('cmd', value);
                          },
                          filterOption: function filterOption(input, _ref4) {
                            var key = _ref4.key;
                            return key.toLowerCase().indexOf(input.toLowerCase()) === 0;
                          },
                          style: { flex: 1, maxWidth: '60%', marginRight: '10px' },
                          size: 'default'
                        },
                        common_command["availableCommands"].map(function (cmd) {
                          return react_default.a.createElement(
                            select_default.a.Option,
                            { value: cmd, key: cmd },
                            cmd
                          );
                        })
                      ),
                      react_default.a.createElement(
                        'div',
                        { style: {
                            flex: 0.6,
                            display: 'flex',
                            justifyContent: 'space-between'
                          } },
                        selectedCmd && selectedCmd.cmd ? react_default.a.createElement(
                          'a',
                          {
                            style: { marginRight: '10px', whiteSpace: 'nowrap' },
                            href: 'https://a9t9.com/x/idehelp?cmd=' + selectedCmd.cmd.toLowerCase(),
                            target: '_blank'
                          },
                          'Info for this command'
                        ) : react_default.a.createElement('span', null),
                        react_default.a.createElement(
                          button_default.a,
                          {
                            style: { padding: '0 10px' },
                            title: 'Toggle comment',
                            disabled: !isCmdEditable,
                            onClick: function onClick() {
                              _this4.props.toggleCommentOnSelectedCommand();
                            }
                          },
                          '//'
                        )
                      )
                    )
                  ),
                  react_default.a.createElement(
                    form_default.a.Item,
                    { label: 'Target', labelCol: { span: 4 }, wrapperCol: { span: 20 } },
                    react_default.a.createElement(
                      'div',
                      { className: 'flex-row' },
                      !selectedCmd || !selectedCmd.targetOptions || !selectedCmd.targetOptions.length ? react_default.a.createElement(input_default.a, {
                        style: { flex: 1, maxWidth: '60%', marginRight: '10px' },
                        placeholder: 'target',
                        disabled: !isCmdEditable,
                        value: selectedCmd && selectedCmd.target,
                        onChange: function onChange(e) {
                          return _this4.onDetailChange('target', e.target.value);
                        },
                        size: 'default'
                      }) : react_default.a.createElement(
                        select_default.a,
                        {
                          style: { flex: 1, maxWidth: '60%', marginRight: '10px' },
                          placeholder: 'target',
                          disabled: !isCmdEditable,
                          value: selectedCmd.target,
                          onChange: function onChange(val) {
                            return _this4.onDetailChange('target', val);
                          },
                          size: 'default'
                        },
                        selectedCmd.targetOptions.map(function (option) {
                          return react_default.a.createElement(
                            select_default.a.Option,
                            {
                              key: option,
                              value: option
                            },
                            option
                          );
                        })
                      ),
                      react_default.a.createElement(
                        button_default.a,
                        {
                          style: { marginRight: '10px' },
                          disabled: !isCmdEditable,
                          onClick: this.onToggleSelect
                        },
                        isInspecting ? react_default.a.createElement(
                          'span',
                          null,
                          (selectedCmdIsVisualSearch ? '👁' : '') + 'Cancel'
                        ) : react_default.a.createElement(
                          'span',
                          null,
                          (selectedCmdIsVisualSearch ? '👁' : '') + 'Select'
                        )
                      ),
                      react_default.a.createElement(
                        button_default.a,
                        {
                          disabled: !isCmdEditable,
                          onClick: this.onClickFind
                        },
                        (selectedCmdIsVisualSearch ? '👁' : '') + 'Find'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    form_default.a.Item,
                    { label: 'Value', labelCol: { span: 4 }, wrapperCol: { span: 20 }, style: { marginBottom: 0 } },
                    react_default.a.createElement(input_default.a, {
                      disabled: !isCmdEditable,
                      value: selectedCmd && selectedCmd.value,
                      onChange: function onChange(e) {
                        return _this4.onDetailChange('value', e.target.value);
                      },
                      style: { width: '100%' },
                      placeholder: 'value',
                      size: 'default'
                    })
                  )
                )
              )
            ),
            react_default.a.createElement(
              tabs_default.a.TabPane,
              { tab: 'Source View (JSON)', key: 'source_view', className: 'source-view' },
              react_default.a.createElement(
                'pre',
                { className: 'source-error' },
                this.props.sourceErrMsg
              ),
              react_default.a.createElement(react_codemirror2["UnControlled"], {
                ref: function ref(el) {
                  _this4.codeMirror = el;
                },
                className: this.props.sourceErrMsg ? 'has-error' : 'no-error',
                value: this.props.sourceText,
                onChange: this.onChangeEditSource,
                onBlur: this.onSourceBlur,
                onCursor: function onCursor(editor, data) {
                  _this4.setState({ cmEdtiorInstance: editor });
                  // Note: when value updated, code mirror will automatically emit onCursor with cursor at bottom
                  // It can be tell with `sticky` as null
                  if (data.sticky) {
                    _this4.setState({ cursor: { line: data.line, ch: data.ch } });
                  }
                },
                options: {
                  mode: { name: 'javascript', json: true },
                  lineNumbers: true,
                  matchBrackets: true,
                  autoCloseBrackets: true
                }
              })
            )
          ),
          config.cvScope === 'desktop' ? react_default.a.createElement(
            'div',
            {
              className: 'vision-type',
              onClick: function onClick() {
                _this4.props.updateUI({ showSettings: true, settingsTab: 'vision' });
              }
            },
            react_default.a.createElement('img', { src: './img/computer.svg' }),
            react_default.a.createElement(
              'span',
              null,
              'Desktop mode active'
            )
          ) : null
        ),
        this.renderContextMenu(),
        this.renderVisionFindPreview()
      );
    }
  }]);

  return DashboardEditor;
}(react_default.a.Component);

/* harmony default export */ var dashboard_editor = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    status: state.status,
    editor: state.editor,
    editing: state.editor.editing,
    clipboard: state.editor.clipboard,
    player: state.player,
    config: state.config,
    sourceErrMsg: state.editor.editingSource.error,
    sourceText: state.editor.editingSource.pure,
    sourceTextModified: state.editor.editingSource.current,
    selectedCommand: editorSelectedCommand(state),
    breakpointIndices: getBreakpoints(state),
    doneCommandIndices: getDoneCommandIndices(state),
    errorCommandIndices: getErrorCommandIndices(state),
    macroId: getCurrentMacroId(state)
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(editor_extends({}, actions_namespaceObject), dispatch);
})(editor_DashboardEditor));
// EXTERNAL MODULE: ./node_modules/antd/lib/popconfirm/index.js
var popconfirm = __webpack_require__(603);
var popconfirm_default = /*#__PURE__*/__webpack_require__.n(popconfirm);

// CONCATENATED MODULE: ./src/components/edit_in_place.js



var edit_in_place_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function edit_in_place_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function edit_in_place_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function edit_in_place_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var edit_in_place_EditInPlace = function (_React$Component) {
  edit_in_place_inherits(EditInPlace, _React$Component);

  function EditInPlace() {
    var _ref;

    var _temp, _this, _ret;

    edit_in_place_classCallCheck(this, EditInPlace);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = edit_in_place_possibleConstructorReturn(this, (_ref = EditInPlace.__proto__ || Object.getPrototypeOf(EditInPlace)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEditing: false,
      value: ''
    }, _this.edit = function () {
      _this.setState({ isEditing: true });
      setTimeout(function () {
        var $input = _this.$input && _this.$input.refs && _this.$input.refs.input;

        if ($input) {
          $input.focus();

          var selection = _this.props.getSelection(_this.state.value, $input);
          $input.selectionStart = selection ? selection.start : 0;
          $input.selectionEnd = selection ? selection.end : $input.value.length;
        }
      }, 100);
    }, _this.submit = function () {
      _this.props.checkValue(_this.state.value).then(function (pass) {
        if (pass) {
          _this.setState({ isEditing: false });
          _this.props.onChange(_this.state.value).catch(function (e) {
            return _this.setState({ value: _this.props.value });
          });
        }
      });
    }, _this.reset = function () {
      _this.setState({
        isEditing: false,
        value: _this.props.value
      });
    }, _temp), edit_in_place_possibleConstructorReturn(_this, _ret);
  }

  edit_in_place_createClass(EditInPlace, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.isEditing) {
        return react_default.a.createElement(
          'span',
          null,
          this.props.value,
          react_default.a.createElement(icon_default.a, {
            type: 'edit',
            style: { marginLeft: '10px', cursor: 'pointer' },
            onClick: this.edit
          })
        );
      } else {
        return react_default.a.createElement(input_default.a, {
          ref: function ref(_ref2) {
            _this2.$input = _ref2;
          },
          value: this.state.value,
          onChange: function onChange(e) {
            return _this2.setState({ value: e.target.value });
          },
          onBlur: this.reset,
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 13) return _this2.submit();
            if (e.keyCode === 27) return _this2.reset();
          }
        });
      }
    }
  }]);

  return EditInPlace;
}(react_default.a.Component);

edit_in_place_EditInPlace.propTypes = {
  value: prop_types_default.a.string.isRequired,
  onChange: prop_types_default.a.func.isRequired,
  checkValue: prop_types_default.a.func.isRequired,
  getSelection: prop_types_default.a.func
};
edit_in_place_EditInPlace.defaultProps = {
  getSelection: function getSelection() {
    return null;
  }
};
/* harmony default export */ var edit_in_place = (edit_in_place_EditInPlace);
// CONCATENATED MODULE: ./src/containers/dashboard/bottom.js























































var bottom_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var bottom_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function bottom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bottom_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function bottom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var bottom_DashboardBottom = function (_React$Component) {
  bottom_inherits(DashboardBottom, _React$Component);

  function DashboardBottom() {
    var _ref;

    var _temp, _this, _ret;

    bottom_classCallCheck(this, DashboardBottom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = bottom_possibleConstructorReturn(this, (_ref = DashboardBottom.__proto__ || Object.getPrototypeOf(DashboardBottom)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeTabForLogScreenshot: 'Logs',

      showCSVModal: false,
      csvText: '',
      csvFile: '',

      drag: {
        isDragging: false,
        // Check out the note on `screenX` in `onResizeDragEnd` event
        startY: 0,
        lastHeight: 220,
        currentMinHeight: 220
      },

      searchImageText: ''
    }, _this.getBottomMinHeight = function () {
      var _this$state$drag = _this.state.drag,
          isDragging = _this$state$drag.isDragging,
          lastHeight = _this$state$drag.lastHeight,
          currentMinHeight = _this$state$drag.currentMinHeight;

      return (isDragging ? currentMinHeight : lastHeight) + 'px';
    }, _this.onResizeDragStart = function (e) {
      // Note: Firefox requires us to set something to DataTransfer, otherwise drag and dragEnd won't be triggered
      // refer to https://stackoverflow.com/questions/33434275/firefox-on-drag-end-is-not-called-in-a-react-component
      e.dataTransfer.setData('text', '');

      var style = window.getComputedStyle(_this.$dom);
      var height = parseInt(style.height);

      _this.setState(Object(utils["setIn"])(['drag'], {
        isDragging: true,
        startY: e.screenY,
        lastHeight: height,
        currentHeight: height
      }, _this.state));
    }, _this.onResizeDragEnd = function (e) {
      // Note: use `screenY` instead of `clientY`, because `clientY` of dragEnd events in Firefox
      // is always set to 0, while `screenY` is luckily still available. And since we only make use of
      // difference of X coordinate. `screenY` and `clientY` both work for us.
      //
      // reference:
      // https://bugzilla.mozilla.org/show_bug.cgi?id=505521
      // https://developer.mozilla.org/en-US/docs/Web/Events/dragend
      var diff = e.screenY - _this.state.drag.startY;
      var height = _this.state.drag.lastHeight - diff;

      _this.setState(Object(utils["setIn"])(['drag'], {
        isDragging: false,
        startY: 0,
        lastHeight: height,
        currentMinHeight: height
      }));
    }, _this.onFileChange = function (e) {
      var csvStorage = Object(services_storage["getStorageManager"])().getCSVStorage();
      var files = [].slice.call(e.target.files);
      if (!files || !files.length) return;

      var read = function read(file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onload = function (readerEvent) {
            var text = readerEvent.target.result;
            resolve({
              text: text,
              fileName: file.name
            });
          };

          reader.readAsText(file);
        });
      };

      Promise.all(files.map(read)).then(function (list) {
        var names = list.map(function (item) {
          return item.fileName;
        });
        var ps = list.map(function (fileItem) {
          return csvStorage.write(Object(utils["sanitizeFileName"])(fileItem.fileName), new Blob([fileItem.text]));
        });

        return Promise.all(ps).then(function () {
          return _this.props.listCSV();
        }).then(function () {
          message_default.a.info(list.length + ' csv files imported');
          _this.props.addLog('info', list.length + ' csv files imported: ' + names.join(', '));
        });
      }).catch(function (e) {
        _this.props.addLog('error', e.message);
      });
    }, _this.removeCSV = function (csv) {
      var csvStorage = Object(services_storage["getStorageManager"])().getCSVStorage();

      csvStorage.remove(csv.name).then(function () {
        return _this.props.listCSV();
      }).then(function () {
        message_default.a.success('successfully deleted');
        _this.props.addLog('info', csv.name + ' deleted');
      });
    }, _this.viewCSV = function (csv) {
      window.open('./csv_editor.html?csv=' + csv.name, '', 'width=600,height=500,scrollbars=true');
    }, _this.onImageFileChange = function (e) {
      var files = [].slice.call(e.target.files);
      if (!files || !files.length) return;

      var read = function read(file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onload = function (readerEvent) {
            try {
              var dataUrl = readerEvent.target.result;
              var obj = storeImage({ dataUrl: dataUrl, name: file.name });
              resolve(obj);
            } catch (e) {
              resolve({ err: e, fileName: file.name });
            }
          };

          reader.readAsDataURL(file);
        });
      };

      var storeImage = function storeImage(_ref2) {
        var dataUrl = _ref2.dataUrl,
            name = _ref2.name;

        return Object(utils["uniqueName"])(name, {
          check: function check(name) {
            return Object(services_storage["getStorageManager"])().getVisionStorage().exists(name).then(function (result) {
              return !result;
            });
          }
        }).then(function (fileName) {
          return Object(services_storage["getStorageManager"])().getVisionStorage().write(Object(utils["sanitizeFileName"])(fileName), Object(utils["dataURItoBlob"])(dataUrl)).then(function () {
            return fileName;
          });
        }).catch(function (e) {
          log_default.a.error(e.stack);
        });
      };

      Promise.all(files.map(read)).then(function (fileNames) {
        message_default.a.success(fileNames.length + ' image files imported into Vision tab');
        _this.props.addLog('info', fileNames.length + ' image files imported: ' + fileNames.join(', '));
        _this.props.listVisions();
      }).catch(function (e) {
        log_default.a.error(e.stack);
        _this.props.addLog('error', e.message);
      });
    }, _this.viewVision = function (fileName) {
      window.open('./vision_editor.html?vision=' + fileName, '', 'width=600,height=500,scrollbars=true');
    }, _this.addVisionNameToTargetBox = function (fileName) {
      var _this$props = _this.props,
          config = _this$props.config,
          selectedCmd = _this$props.selectedCommand;

      var selectedCmdIsVisualSearch = function () {
        if (!selectedCmd) return false;
        if (config.cvScope === 'desktop' && selectedCmd.cmd === 'visionLimitSearchArea') return true;

        return ['visionFind', 'visualSearch', 'visualAssert', 'visualVerify', 'XClick', 'XMove', 'XClickRelative', 'XMoveRelative', 'OCRExtract', 'OCRExtractRelative', 'visionLimitSearchAreaRelative'].indexOf(selectedCmd.cmd) !== -1;
      }();

      if (!selectedCmdIsVisualSearch) {
        return message_default.a.error('Image names can only be added to the target box if a vision related command is selected');
      }

      _this.props.updateSelectedCommand({ target: fileName });
    }, _this.exportAllVisions = function () {
      var zip = new jszip_lib_default.a();
      var visionStorage = Object(services_storage["getStorageManager"])().getVisionStorage();

      visionStorage.list().then(function (visions) {
        if (visions.length === 0) {
          return message_default.a.error('No vision to export');
        }

        var ps = visions.map(function (ss) {
          return visionStorage.read(ss.fileName, 'ArrayBuffer').then(function (buffer) {
            zip.file(ss.fileName, buffer, { binary: true });
          });
        });

        return Promise.all(ps).then(function () {
          zip.generateAsync({ type: 'blob' }).then(function (blob) {
            file_saver_default.a.saveAs(blob, 'vision-images-export.zip');
          });
        });
      });
    }, _temp), bottom_possibleConstructorReturn(_this, _ret);
  }

  bottom_createClass(DashboardBottom, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.logs.length !== this.props.logs.length) {
        var $logContent = document.querySelector('.logs-screenshots .ant-tabs-content');
        var itemHeight = 50;

        if (!$logContent) return;

        // Note: set scroll top to a number large enough so that it will scroll to bottom
        // setTimeout 100ms to ensure content has been rendered before scroll
        setTimeout(function () {
          $logContent.scrollTop = itemHeight * nextProps.logs.length * 2;
        }, 100);
      }

      if (nextProps.visions.length > this.props.visions.length) {
        var diff = nextProps.visions.filter(function (item) {
          return !_this2.props.visions.find(function (v) {
            return v.name === item.name;
          });
        });

        if (diff.length > 1) {
          diff.sort(function (a, b) {
            return a.createTime > b.createTime;
          });
        }

        var toFocus = diff[0];

        setTimeout(function () {
          var $dom = document.getElementById(toFocus.name);
          if (!$dom) return;
          $dom.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }, 100);
      }
    }
  }, {
    key: 'logStyle',
    value: function logStyle(log) {
      if (log.options && log.options.color) {
        return { color: log.options.color };
      }

      if (log.options && log.options.ignored) {
        return { color: 'orange' };
      }
    }
  }, {
    key: 'prefixHardDisk',
    value: function prefixHardDisk(str) {
      var isXFileMode = Object(services_storage["getStorageManager"])().isXFileMode();
      if (!isXFileMode) return str;

      return react_default.a.createElement(
        'div',
        {
          style: {
            display: 'inline-block'
          }
        },
        react_default.a.createElement('img', {
          src: './img/hard-drive.svg',
          style: {
            position: 'relative',
            top: '3px',
            marginRight: '5px',
            height: '15px'
          }
        }),
        react_default.a.createElement(
          'span',
          null,
          str
        )
      );
    }
  }, {
    key: 'renderCSVModal',
    value: function renderCSVModal() {
      var _this3 = this;

      return react_default.a.createElement(
        modal_default.a,
        {
          title: 'Preview - ' + this.state.csvFile,
          visible: this.state.showCSVModal,
          onCancel: function onCancel() {
            return _this3.setState({ showCSVModal: false, csvText: '', csvFile: '' });
          },
          className: 'csv-preview-modal',
          footer: null
        },
        react_default.a.createElement(input_default.a.TextArea, {
          style: { width: '100%' },
          value: this.state.csvText,
          readOnly: true,
          rows: 10
        })
      );
    }
  }, {
    key: 'renderCSVTable',
    value: function renderCSVTable() {
      var _this4 = this;

      var columns = [{ title: 'Name', dataIndex: 'name', key: 'name' }, { title: 'Size', dataIndex: 'size', key: 'size' }, {
        title: 'Last Modified',
        dataIndex: 'createTime',
        key: 'createTime',
        render: function render(d) {
          var pad = function pad(n) {
            return n >= 10 ? '' + n : '0' + n;
          };
          return d.getFullYear() + '/' + pad(d.getMonth() + 1) + '/' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
        }
      }, {
        title: 'Action',
        key: 'ops',
        width: 100,
        render: function render(text, csv, index) {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              button_default.a,
              {
                size: 'small',
                type: 'default',
                shape: 'circle',
                onClick: function onClick(ev) {
                  if (csv.url instanceof Error) {
                    var msg = csv.url instanceof native_filesystem_storage["ErrorWithCode"] ? Object(native_filesystem_storage["getErrorMessageForCode"])(csv.url.code) : csv.url.message;

                    message_default.a.error(msg);
                    ev.preventDefault();
                    return;
                  }

                  _this4.viewCSV(csv);
                }
              },
              react_default.a.createElement(icon_default.a, { type: 'eye-o' })
            ),
            react_default.a.createElement(
              'a',
              {
                href: csv.url,
                download: csv.name,
                onClick: function onClick(ev) {
                  if (csv.url instanceof Error) {
                    var msg = csv.url instanceof native_filesystem_storage["ErrorWithCode"] ? Object(native_filesystem_storage["getErrorMessageForCode"])(csv.url.code) : csv.url.message;

                    message_default.a.error(msg);
                    ev.preventDefault();
                  }
                }
              },
              react_default.a.createElement(
                button_default.a,
                {
                  size: 'small',
                  type: 'primary',
                  shape: 'circle'
                },
                react_default.a.createElement(icon_default.a, { type: 'download' })
              )
            ),
            react_default.a.createElement(
              popconfirm_default.a,
              {
                title: 'Sure to delete?',
                okText: 'Delete',
                onConfirm: function onConfirm() {
                  _this4.removeCSV(csv);
                }
              },
              react_default.a.createElement(
                button_default.a,
                {
                  size: 'small',
                  type: 'danger',
                  shape: 'circle'
                },
                react_default.a.createElement(icon_default.a, { type: 'close' })
              )
            )
          );
        }
      }];

      var tableConfig = {
        columns: columns,
        dataSource: this.props.csvs,
        pagination: false,
        bordered: true,
        size: 'middle',
        rowKey: 'fileName',
        onRowClick: function onRowClick(record, index, e) {
          // Do nothing
        },
        rowClassName: function rowClassName(record, index) {
          return '';
        }
      };

      return react_default.a.createElement(table_default.a, tableConfig);
    }
  }, {
    key: 'renderVisionTable',
    value: function renderVisionTable() {
      var _this5 = this;

      var columns = [{
        title: 'Image',
        dataIndex: 'url',
        key: 'url',
        width: 116,
        render: function render(url) {
          if (url instanceof Error) {
            var msg = url instanceof native_filesystem_storage["ErrorWithCode"] ? Object(native_filesystem_storage["getErrorMessageForCode"])(url.code) : url.message;

            return react_default.a.createElement(
              'div',
              {
                className: 'vision-image',
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  wordBreak: 'normal'
                }
              },
              msg
            );
          }

          return react_default.a.createElement('div', {
            className: 'vision-image',
            style: {
              backgroundImage: 'url(' + url + ')',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }
          });
        }
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: function render(name, vision) {
          return react_default.a.createElement(
            'div',
            { className: 'vision-name-1', id: name },
            react_default.a.createElement(edit_in_place, {
              value: vision.name,
              onChange: function onChange(name) {
                return Object(services_storage["getStorageManager"])().getVisionStorage().rename(vision.name, Object(utils["ensureExtName"])('.png', name)).then(function () {
                  message_default.a.success('Successfully renamed');
                  _this5.props.listVisions();
                }).catch(function (e) {
                  message_default.a.error(e.message);
                  throw e;
                });
              },
              checkValue: function checkValue(name) {
                Object(utils["withFileExtension"])(name, function (baseName) {
                  try {
                    Object(utils["validateStandardName"])(baseName, true);
                  } catch (e) {
                    message_default.a.error(e.message);
                    throw e;
                  }
                  return baseName;
                });

                return Object(services_storage["getStorageManager"])().getVisionStorage().exists(name).then(function (result) {
                  if (result) {
                    message_default.a.error('\'' + name + '\' already exists');
                  }
                  return !result;
                });
              },
              getSelection: function getSelection(name, $input) {
                var reg = /(?:_dpi_\d+)?\.png$/i;
                var result = reg.exec(name);
                var endIndex = result.index;

                return {
                  start: 0,
                  end: endIndex
                };
              }
            })
          );
        }
      }, {
        title: 'Action',
        key: 'ops',
        width: 100,
        render: function render(text, vision, index) {
          return react_default.a.createElement(
            'div',
            { className: 'vision-actions' },
            react_default.a.createElement(
              button_default.a,
              {
                size: 'small',
                type: 'default',
                shape: 'circle',
                title: 'View image',
                onClick: function onClick(ev) {
                  if (vision.url instanceof Error) {
                    var msg = vision.url instanceof native_filesystem_storage["ErrorWithCode"] ? Object(native_filesystem_storage["getErrorMessageForCode"])(vision.url.code) : vision.url.message;

                    message_default.a.error(msg);
                    ev.preventDefault();
                    return;
                  }

                  _this5.viewVision(vision.name);
                }
              },
              react_default.a.createElement(icon_default.a, { type: 'eye-o' })
            ),
            react_default.a.createElement(
              dropdown_default.a,
              { overlay: react_default.a.createElement(
                  menu_default.a,
                  { onClick: function onClick(_ref3) {
                      var key = _ref3.key;

                      switch (key) {
                        case 'duplicate':
                          return Object(services_storage["getStorageManager"])().getVisionStorage().copy(vision.name).then(function () {
                            message_default.a.success('Successfully copied');
                            _this5.props.listVisions();
                          }).catch(function (e) {
                            log_default.a.error(e);
                          });

                        case 'name_to_target':
                          return _this5.addVisionNameToTargetBox(vision.name);

                        case 'delete':
                          return modal_default.a.confirm({
                            title: 'Sure to delete?',
                            okText: 'Delete',
                            onOk: function onOk() {
                              return Object(services_storage["getStorageManager"])().getVisionStorage().remove(vision.name).then(function () {
                                message_default.a.success('Successfully deleted');
                                _this5.props.listVisions();
                              }).catch(function (e) {
                                log_default.a.error(e);
                              });
                            },
                            onCancel: function onCancel() {
                              return Promise.resolve(true);
                            }
                          });
                      }
                    } },
                  react_default.a.createElement(
                    menu_default.a.Item,
                    { key: 'duplicate' },
                    'Duplicate'
                  ),
                  react_default.a.createElement(
                    menu_default.a.Item,
                    { key: 'name_to_target' },
                    'Add name to target box'
                  ),
                  react_default.a.createElement(menu_default.a.Divider, null),
                  react_default.a.createElement(
                    menu_default.a.Item,
                    { key: 'delete' },
                    'Delete'
                  )
                ) },
              react_default.a.createElement(
                button_default.a,
                {
                  size: 'small',
                  type: 'default',
                  shape: 'circle',
                  title: 'More actions...'
                },
                react_default.a.createElement(icon_default.a, { type: 'bars' })
              )
            )
          );
        }
      }];

      var search = this.state.searchImageText.toLowerCase().trim();
      var matchedVisions = this.props.visions.filter(function (vision) {
        if (search.length === 0) return true;
        return vision.name.toLowerCase().indexOf(search) !== -1;
      });

      var tableConfig = {
        columns: columns,
        dataSource: matchedVisions,
        pagination: false,
        bordered: true,
        size: 'middle',
        rowKey: 'fileName',
        onRowClick: function onRowClick(record, index, e) {
          // Do nothing
        },
        rowClassName: function rowClassName(record, index) {
          return '';
        }
      };

      return react_default.a.createElement(table_default.a, tableConfig);
    }
  }, {
    key: 'renderVariableTable',
    value: function renderVariableTable() {
      var columns = [{ title: 'Name', dataIndex: 'key', key: 'key', width: '40%' }, { title: 'Value', dataIndex: 'value', key: 'value', render: function render(val) {
          return JSON.stringify(val) || 'undefined';
        } }];
      var _props$config = this.props.config,
          showCommonInternalVariables = _props$config.showCommonInternalVariables,
          showAdvancedInternalVariables = _props$config.showAdvancedInternalVariables;

      var filter = createVarsFilter({
        withCommonInternal: showCommonInternalVariables,
        withAdvancedInternal: showAdvancedInternalVariables
      });
      var variables = this.props.variables.filter(function (variable) {
        return filter(variable.key);
      });

      var tableConfig = {
        columns: columns,
        dataSource: variables,
        pagination: false,
        bordered: true,
        size: 'middle',
        rowKey: 'key',
        onRowClick: function onRowClick(record, index, e) {
          // Do nothing
        },
        rowClassName: function rowClassName(record, index) {
          var vars = getVarsInstance();
          if (!vars) return '';
          return vars.isReadOnly(record.key) ? 'read-only' : '';
        }
      };

      return react_default.a.createElement(table_default.a, tableConfig);
    }
  }, {
    key: 'renderLogText',
    value: function renderLogText(log) {
      var _this6 = this;

      if (log.type !== 'error') return log.text;

      if (/XClick\/XMove\/XType \d+ commands limit reached/.test(log.text) || /OCR conversion limit reached/.test(log.text)) {
        var xmodulesStatus = this.props.config.xmodulesStatus;

        var licenceType = function () {
          switch (xmodulesStatus) {
            case 'unregistered':
              return 'PRO';
            case 'free':
              return 'PRO2 or Enterprise';
            default:
              return null;
          }
        }();

        if (!licenceType) return log.text;

        return react_default.a.createElement(
          'span',
          null,
          react_default.a.createElement(
            'span',
            null,
            log.text
          ),
          react_default.a.createElement(
            'a',
            {
              href: '#',
              style: { marginLeft: '10px' },
              onClick: function onClick(e) {
                e.preventDefault();
                _this6.props.updateUI({ showSettings: true, settingsTab: 'register' });
              }
            },
            'Get a ',
            licenceType,
            ' license key to remove this limit'
          )
        );
      }

      if (/(XModule|xFile) is not installed yet/.test(log.text)) {
        return react_default.a.createElement(
          'span',
          null,
          react_default.a.createElement(
            'span',
            null,
            log.text
          ),
          react_default.a.createElement(
            'a',
            {
              href: '#',
              style: { marginLeft: '10px' },
              onClick: function onClick(e) {
                e.preventDefault();
                _this6.props.updateUI({ showSettings: true, settingsTab: 'xmodules' });
              }
            },
            'Install now'
          )
        );
      }

      if (/OCR feature disabled/.test(log.text)) {
        return react_default.a.createElement(
          'span',
          null,
          react_default.a.createElement(
            'span',
            null,
            'OCR feature disabled. Please enable it in the '
          ),
          react_default.a.createElement(
            'a',
            {
              href: '#',
              onClick: function onClick(e) {
                e.preventDefault();
                _this6.props.updateUI({ showSettings: true, settingsTab: 'ocr' });
              }
            },
            'OCR Settings'
          )
        );
      }

      return log.text;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var activeTabForLogScreenshot = this.state.activeTabForLogScreenshot;

      var filters = {
        'All': function All() {
          return true;
        },
        'Echo': function Echo(item) {
          return item.type === 'echo' || item.type === 'error' || item.type === 'warning' || item.type === 'status';
        },
        // 'Info':   (item) => item.type === 'info' || item.type === 'echo' || item.type === 'reflect' || item.type === 'status',
        'Error': function Error(item) {
          return item.type === 'error';
        },
        'None': function None() {
          return false;
        }
      };
      var logFilter = this.props.config.logFilter || 'All';
      var logs = this.props.logs.filter(filters[logFilter]);

      return react_default.a.createElement(
        'div',
        {
          className: 'logs-screenshots',
          ref: function ref(el) {
            _this7.$dom = el;
          },
          style: { height: this.getBottomMinHeight() }
        },
        this.renderCSVModal(),
        react_default.a.createElement('div', {
          className: Object(utils["cn"])('resize-handler', { focused: this.state.drag.isDragging }),
          draggable: 'true',
          onDragStart: this.onResizeDragStart,
          onDragEnd: this.onResizeDragEnd,
          onMouseDown: function onMouseDown() {
            return _this7.setState(Object(utils["setIn"])(['drag', 'isDragging'], true, _this7.state));
          }
        }),
        react_default.a.createElement(
          tabs_default.a,
          {
            type: 'card',
            onChange: function onChange(key) {
              _this7.setState({ activeTabForLogScreenshot: key });

              if (key === 'Screenshots') {
                _this7.props.listScreenshots();
              }
            }
          },
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Logs', key: 'Logs' },
            react_default.a.createElement(
              'ul',
              { className: 'log-content' },
              logs.map(function (log, i) {
                return react_default.a.createElement(
                  'li',
                  { className: log.type, key: log.id, style: _this7.logStyle(log) },
                  react_default.a.createElement(
                    'span',
                    { className: 'log-type' },
                    renderLogType(log)
                  ),
                  react_default.a.createElement(
                    'pre',
                    { className: 'log-detail' },
                    _this7.renderLogText(log)
                  )
                );
              })
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Variables', key: 'Variables' },
            react_default.a.createElement(
              'div',
              { className: 'variable-content' },
              react_default.a.createElement(
                'div',
                { className: 'variable-options' },
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return _this7.props.updateConfig({ showCommonInternalVariables: e.target.checked });
                    },
                    checked: this.props.config.showCommonInternalVariables
                  },
                  'Show most common ',
                  react_default.a.createElement(
                    'a',
                    { href: 'https://a9t9.com/x/idehelp?help=internalvars', target: '_blank' },
                    'internal variables'
                  )
                ),
                react_default.a.createElement(
                  checkbox_default.a,
                  {
                    onChange: function onChange(e) {
                      return _this7.props.updateConfig({ showAdvancedInternalVariables: e.target.checked });
                    },
                    checked: this.props.config.showAdvancedInternalVariables
                  },
                  'Show advanced ',
                  react_default.a.createElement(
                    'a',
                    { href: 'https://a9t9.com/x/idehelp?help=internalvars', target: '_blank' },
                    'internal variables'
                  )
                )
              ),
              this.renderVariableTable()
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: 'Screenshots', key: 'Screenshots' },
            react_default.a.createElement(
              'ul',
              { className: 'screenshot-content' },
              this.props.screenshots.map(function (ss, i) {
                return react_default.a.createElement(
                  'li',
                  { key: i },
                  react_default.a.createElement(
                    'span',
                    { className: 'timestamp' },
                    ss.createTime && ss.createTime.toLocaleString(),
                    ' - ',
                    react_default.a.createElement(
                      'span',
                      { className: 'filename' },
                      decodeURIComponent(ss.name)
                    )
                  ),
                  react_default.a.createElement(
                    'a',
                    {
                      download: decodeURIComponent(ss.name),
                      href: web_extension_default.a.isFirefox() ? '#' : ss.url,
                      onClick: function onClick(e) {
                        if (!web_extension_default.a.isFirefox()) return;
                        e.preventDefault();

                        // Note: for Firefox, `ss.url` is a data url instead of a `filesystem:` url (as in Chrome)
                        file_saver_default.a.saveAs(Object(utils["dataURItoBlob"])(ss.url), ss.name);
                      }
                    },
                    react_default.a.createElement('img', { src: ss.url })
                  )
                );
              })
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: this.prefixHardDisk('CSV'), key: 'CSV' },
            react_default.a.createElement(
              'div',
              { className: 'csv-content' },
              this.renderCSVTable()
            )
          ),
          react_default.a.createElement(
            tabs_default.a.TabPane,
            { tab: this.prefixHardDisk('👁Visual'), key: 'Vision' },
            react_default.a.createElement(
              'div',
              { className: 'vision-content' },
              react_default.a.createElement(
                'div',
                { className: 'vision-top-actions' },
                react_default.a.createElement(
                  'div',
                  { className: 'main-actions' },
                  react_default.a.createElement(
                    'div',
                    { className: 'main-actions-left' },
                    react_default.a.createElement(
                      'span',
                      {
                        className: 'load-image-button ant-btn ant-btn-primary'
                      },
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'select_image_files' },
                        'Load Image'
                      ),
                      react_default.a.createElement('input', {
                        multiple: true,
                        type: 'file',
                        accept: 'image/*',
                        id: 'select_image_files',
                        onChange: this.onImageFileChange,
                        ref: function ref(_ref4) {
                          _this7.imageFileInput = _ref4;
                        },
                        style: { display: 'none' }
                      })
                    ),
                    react_default.a.createElement(
                      button_default.a,
                      {
                        onClick: this.exportAllVisions
                      },
                      'Export All'
                    )
                  ),
                  react_default.a.createElement(search_box, {
                    style: { flex: 0.8 },
                    inputProps: {
                      placeholder: 'search image',
                      value: this.state.searchImageText,
                      onChange: function onChange(e) {
                        return _this7.setState({ searchImageText: e.target.value });
                      }
                    }
                  })
                ),
                react_default.a.createElement(
                  'a',
                  { className: 'more-info', target: '_blank', href: 'https://a9t9.com/x/idehelp?help=visual' },
                  'More Info'
                )
              ),
              this.renderVisionTable()
            )
          )
        ),
        react_default.a.createElement(
          'div',
          { className: 'ls-toolbox' },
          activeTabForLogScreenshot === 'Logs' ? react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              select_default.a,
              {
                value: this.props.config.logFilter,
                onChange: function onChange(value) {
                  _this7.props.updateConfig({ logFilter: value });
                },
                style: { width: '70px', marginRight: '10px' },
                size: 'small'
              },
              react_default.a.createElement(
                select_default.a.Option,
                { value: 'All' },
                'All'
              ),
              react_default.a.createElement(
                select_default.a.Option,
                { value: 'Echo' },
                'Echo'
              ),
              react_default.a.createElement(
                select_default.a.Option,
                { value: 'Error' },
                'Error'
              ),
              react_default.a.createElement(
                select_default.a.Option,
                { value: 'None' },
                'No log'
              )
            ),
            react_default.a.createElement(
              button_default.a,
              {
                size: 'small',
                onClick: this.props.clearLogs
              },
              'Clear'
            )
          ) : null,
          activeTabForLogScreenshot === 'Screenshots' ? react_default.a.createElement(
            button_default.a,
            {
              size: 'small',
              onClick: this.props.clearScreenshots
            },
            'Clear'
          ) : null,
          activeTabForLogScreenshot === 'CSV' ? react_default.a.createElement(
            button_default.a,
            {
              size: 'small',
              onClick: function onClick() {
                return _this7.fileInput.click();
              }
            },
            'Import CSV',
            react_default.a.createElement('input', {
              multiple: true,
              type: 'file',
              accept: '.csv',
              onChange: this.onFileChange,
              style: { display: 'none' },
              ref: function ref(_ref5) {
                _this7.fileInput = _ref5;
              }
            })
          ) : null
        )
      );
    }
  }]);

  return DashboardBottom;
}(react_default.a.Component);

/* harmony default export */ var bottom = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    hasSelectedCommand: state.editor.editing && state.editor.editing.meta && state.editor.editing.meta.selectedIndex !== -1,
    selectedCommand: editorSelectedCommand(state),
    status: state.status,
    logs: state.logs,
    screenshots: state.screenshots,
    variables: state.variables,
    csvs: state.csvs,
    visions: state.visions,
    config: state.config
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(bottom_extends({}, actions_namespaceObject), dispatch);
})(bottom_DashboardBottom));
// CONCATENATED MODULE: ./src/containers/dashboard/index.js
var dashboard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var dashboard_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function dashboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dashboard_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function dashboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var dashboard_Dashboard = function (_React$Component) {
  dashboard_inherits(Dashboard, _React$Component);

  function Dashboard() {
    dashboard_classCallCheck(this, Dashboard);

    return dashboard_possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  dashboard_createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var isWindows = /windows/i.test(window.navigator.userAgent);

      return react_default.a.createElement(
        'div',
        { className: 'dashboard' },
        react_default.a.createElement(dashboard_editor, null),
        react_default.a.createElement(bottom, null),
        react_default.a.createElement(
          'div',
          { className: 'online-help' },
          react_default.a.createElement(
            'div',
            { style: { visibility: isWindows ? 'visible' : 'hidden' } },
            react_default.a.createElement('a', { href: 'https://a9t9.com/x/idehelp?help=visual', target: '_blank' })
          ),
          react_default.a.createElement(
            'div',
            null,
            'Kantu for Chrome/Firefox:',
            react_default.a.createElement(
              'a',
              { href: 'https://a9t9.com/x/idehelp?help=forum', target: '_blank' },
              ' User Forum'
            ),
            ' -',
            react_default.a.createElement(
              'a',
              { href: 'https://a9t9.com/x/idehelp?help=docs', target: '_blank' },
              ' Online Help'
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(react_default.a.Component);

/* harmony default export */ var containers_dashboard = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {};
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(dashboard_extends({}, actions_namespaceObject), dispatch);
})(dashboard_Dashboard));
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(350);

// EXTERNAL MODULE: ./src/app.scss
var app = __webpack_require__(1023);

// CONCATENATED MODULE: ./src/app.js






var app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var app_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var app_App = function (_Component) {
  app_inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    app_classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = app_possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.hideBackupAlert = function () {
      _this.props.updateConfig({
        lastBackupActionTime: new Date() * 1
      });
      _this.$app.classList.remove('with-alert');
    }, _this.onClickBackup = function () {
      _this.props.runBackup();
      _this.hideBackupAlert();
    }, _this.onClickNoBackup = function () {
      _this.hideBackupAlert();
    }, _temp), app_possibleConstructorReturn(_this, _ret);
  }

  app_createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var run = function run() {
        ipc_cs["a" /* default */].ask('PANEL_TIME_FOR_BACKUP', {}).then(function (isTime) {
          if (!isTime) return;
          _this2.$app.classList.add('with-alert');
        });
      };

      // Note: check whether it's time for backup every 5 minutes
      this.timer = setInterval(run, 5 * 60000);
      run();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'renderPreinstallModal',
    value: function renderPreinstallModal() {
      var _this3 = this;

      if (!this.props.ui.newPreinstallVersion) return null;

      return react_default.a.createElement(
        modal_default.a,
        {
          className: 'preinstall-modal',
          visible: true,
          title: 'New demo macros avaiable',
          okText: 'Yes, overwrite',
          cancelText: 'Skip',
          onOk: function onOk() {
            _this3.props.updateUI({ newPreinstallVersion: false });

            return _this3.props.preinstall(true).then(function () {
              message_default.a.success('demo macros updated');
            }).catch(function (e) {
              message_default.a.error(e.message);
            });
          },
          onCancel: function onCancel() {
            _this3.props.updateUI({ newPreinstallVersion: false });
            _this3.props.preinstall(false);
          }
        },
        react_default.a.createElement(
          'p',
          { style: { fontSize: '14px' } },
          'Do you want to overwrite the demo macros with their latest versions?'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return react_default.a.createElement(
        'div',
        { className: 'app with-sidebar', ref: function ref(el) {
            _this4.$app = el;
          } },
        react_default.a.createElement(
          'div',
          { className: 'backup-alert' },
          react_default.a.createElement(
            'span',
            null,
            'Do you want to run the automated backup?'
          ),
          react_default.a.createElement(
            'span',
            { className: 'backup-actions' },
            react_default.a.createElement(
              button_default.a,
              { type: 'primary', onClick: this.onClickBackup },
              'Yes'
            ),
            react_default.a.createElement(
              button_default.a,
              { onClick: this.onClickNoBackup },
              'No'
            )
          )
        ),
        react_default.a.createElement(
          'div',
          { className: 'app-inner' },
          react_default.a.createElement(containers_sidebar, null),
          react_default.a.createElement(
            'section',
            { className: 'content' },
            react_default.a.createElement(components_header, null),
            react_default.a.createElement(containers_dashboard, null)
          )
        ),
        this.renderPreinstallModal()
      );
    }
  }]);

  return App;
}(react["Component"]);

/* harmony default export */ var src_app = (Object(react_redux_es["b" /* connect */])(function (state) {
  return {
    ui: state.ui
  };
}, function (dispatch) {
  return Object(redux_es["b" /* bindActionCreators */])(app_extends({}, actions_namespaceObject), dispatch);
})(app_App));
// EXTERNAL MODULE: ./node_modules/redux-thunk/lib/index.js
var redux_thunk_lib = __webpack_require__(604);
var redux_thunk_lib_default = /*#__PURE__*/__webpack_require__.n(redux_thunk_lib);

// CONCATENATED MODULE: ./src/redux/promise_middleware.js
var promise_middleware_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var promise_middleware_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Note: if a `promise` field and a `types` provied, this middleware will dispatch
// 3 actions REQUEST, SUCCESS, FAILURE based on the status of the promise it returns
function promiseMiddleWare() {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;

    return function (next) {
      return function (action) {
        var promise = action.promise,
            types = action.types,
            rest = _objectWithoutProperties(action, ["promise", "types"]);

        if (!promise) {
          return next(action);
        }

        var _types = promise_middleware_slicedToArray(types, 3),
            REQUEST = _types[0],
            SUCCESS = _types[1],
            FAILURE = _types[2];

        next(promise_middleware_extends({}, rest, { type: REQUEST }));
        return promise().then(function (data) {
          return next(promise_middleware_extends({}, rest, { data: data, type: SUCCESS }));
        }, function (error) {
          return next(promise_middleware_extends({}, rest, { err: error, type: FAILURE }));
        });
      };
    };
  };
};
// CONCATENATED MODULE: ./src/redux/post_logic_middleware.js
function post_logic_middleware_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Note: if `post` field provided, it will call `post`
// after the action dispatched and state updated
function postLogicMiddleWare(extra) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        var post = action.post,
            rest = post_logic_middleware_objectWithoutProperties(action, ['post']);

        if (post && typeof post === 'function') {
          setTimeout(function () {
            post({ dispatch: dispatch, getState: getState }, action, extra);
          }, 0);
        } else if (Array.isArray(post)) {
          post.forEach(function (fn) {
            setTimeout(function () {
              fn({ dispatch: dispatch, getState: getState }, action, extra);
            }, 0);
          });
        }

        return next(action);
      };
    };
  };
}
// EXTERNAL MODULE: ./node_modules/url-parse/index.js
var url_parse = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(605);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);

// CONCATENATED MODULE: ./src/reducers/index.js
var reducers_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducers_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reducers_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }












var newTestCaseEditing = {
  commands: [],
  meta: {
    src: null,
    hasUnsaved: true,
    selectedIndex: -1
  }

  // * editor
  //    * testCases:          all test cases stored in indexedDB
  //    * editing:            the current test cases being edited
  //    * clipbard            for copy / cut / paste
  //
  // * player                 the state for player
  //    * nextCommandIndex    the current command beging executed
  //    * currentLoop         the current round
  //    * loops               how many rounds to run totally

};var reducers_initialState = {
  status: constant["a" /* APP_STATUS */].NORMAL,
  recorderStatus: constant["h" /* RECORDER_STATUS */].STOPPED,
  inspectorStatus: constant["c" /* INSPECTOR_STATUS */].STOPPED,
  editor: {
    testSuites: [],
    testCases: [],
    // macrosExtra is used to store:
    // * status
    // * breakpoints
    // * doneCommandIndices
    // * errorCommandIndices
    macrosExtra: {},
    testSuitesExtra: {},
    editing: reducers_extends({}, newTestCaseEditing),
    editingSource: {
      // Saved version
      original: null,
      // Version before editing
      pure: null,
      // Version keeping track of any editing
      current: null,
      error: null
    },
    clipboard: {
      commands: []
    },
    activeTab: 'table_view'
  },
  player: {
    mode: constant["f" /* PLAYER_MODE */].TEST_CASE,
    status: constant["g" /* PLAYER_STATUS */].STOPPED,
    stopReason: null,
    currentLoop: 0,
    loops: 0,
    nextCommandIndex: null,
    playInterval: 0,
    timeoutStatus: {
      type: null,
      total: null,
      past: null
    }
  },
  variables: [],
  logs: [],
  screenshots: [],
  csvs: [],
  visions: [],
  config: {},
  ui: {}

  // Note: for update the `hasUnsaved` status in editing.meta
};var reducers_updateHasUnSaved = function updateHasUnSaved(state) {
  var _state$editor$editing = state.editor.editing,
      meta = _state$editor$editing.meta,
      data = reducers_objectWithoutProperties(_state$editor$editing, ['meta']);

  var id = meta.src && meta.src.id;
  if (!id) return state;

  var tc = state.editor.testCases.find(function (tc) {
    return tc.id === id;
  });
  if (!tc) return state;

  var normalizedEditing = test_case_model_normalizeTestCase({ data: data });
  var hasUnsaved = !lodash_isequal_default()(tc.data, normalizedEditing.data);
  return Object(utils["setIn"])(['editor', 'editing', 'meta', 'hasUnsaved'], hasUnsaved, state);
};

var updateBreakpointIndices = function updateBreakpointIndices(indices, action, actionIndex) {
  var handleSingleAction = function handleSingleAction(indices, action, actionIndex) {
    switch (action) {
      case 'add':
        {
          var result = indices.slice();

          for (var i = 0, len = indices.length; i < len; i++) {
            if (result[i] >= actionIndex) {
              result[i] += 1;
            }
          }

          return result;
        }

      case 'delete':
        {
          var _result = indices.slice();

          for (var _i = indices.length - 1; _i >= 0; _i--) {
            if (_result[_i] > actionIndex) {
              _result[_i] -= 1;
            } else if (_result[_i] === actionIndex) {
              _result.splice(_i, 1);
            }
          }

          return _result;
        }

      default:
        throw new Error('updateBreakpointIndices: unknown action, \'' + action + '\'');
    }
  };

  if (typeof actionIndex === 'number') {
    return handleSingleAction(indices, action, actionIndex);
  }

  if (Array.isArray(actionIndex)) {
    // Note: sort action indices as desc.  Bigger indice will be handled earlier, so that it won't affect others
    var actionIndices = actionIndex.slice();
    actionIndices.sort(function (a, b) {
      return b - a;
    });

    return actionIndices.reduce(function (indices, actionIndex) {
      return handleSingleAction(indices, action, actionIndex);
    }, indices);
  }

  throw new Error('updateBreakpointIndices: actionIndex should be either number or an array of number');
};

var resetEditingSource = Object(utils["partial"])(function (macro, state) {
  log_default()('resetEditingSource', macro);
  var str = Object(convert_utils["toJSONString"])(macro);
  return Object(utils["setIn"])(['editor', 'editingSource'], {
    original: str,
    pure: str,
    current: str,
    error: null
  }, state);
});

var reducers_setEditingSourceCurrent = function setEditingSourceCurrent(state) {
  var macro = {
    name: state.editor.editing.meta.src ? state.editor.editing.meta.src.name : 'Untitled',
    commands: state.editor.editing.commands
  };
  log_default()('setEditingSourceCurrent', macro);

  var str = Object(convert_utils["toJSONString"])(macro);
  return Object(utils["updateIn"])(['editor', 'editingSource'], function (editingSource) {
    return reducers_extends({}, editingSource, { pure: str, current: str });
  }, state);
};

var reducers_saveEditingSourceCurrent = function saveEditingSourceCurrent(state) {
  var current = state.editor.editingSource.current;

  return Object(utils["updateIn"])(['editor', 'editingSource'], function (editingSource) {
    return reducers_extends({}, editingSource, { pure: current, original: current });
  }, state);
};

var reducers_setEditingSourceOriginalAndPure = function setEditingSourceOriginalAndPure(macro, state) {
  var str = Object(convert_utils["toJSONString"])(macro);
  return Object(utils["updateIn"])(['editor', 'editingSource'], function (editingSource) {
    return reducers_extends({}, editingSource, { pure: str, original: str });
  }, state);
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducers_initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.START_RECORDING_SUCCESS:
      return reducers_extends({}, state, {
        status: constant["a" /* APP_STATUS */].RECORDER,
        recorderStatus: constant["a" /* APP_STATUS */].PENDING,
        player: reducers_extends({}, state.player, {
          nextCommandIndex: null
        })
      });
    case types.STOP_RECORDING_SUCCESS:
      return reducers_extends({}, state, {
        status: constant["a" /* APP_STATUS */].NORMAL,
        recorderStatus: constant["h" /* RECORDER_STATUS */].STOPPED
      });
    case types.START_INSPECTING_SUCCESS:
      return reducers_extends({}, state, {
        status: constant["a" /* APP_STATUS */].INSPECTOR,
        inspectorStatus: constant["c" /* INSPECTOR_STATUS */].PENDING
      });
    case types.STOP_INSPECTING_SUCCESS:
    case types.DONE_INSPECTING:
      return reducers_extends({}, state, {
        status: constant["a" /* APP_STATUS */].NORMAL,
        recorderStatus: constant["c" /* INSPECTOR_STATUS */].STOPPED
      });

    case types.START_PLAYING:
      return reducers_extends({}, state, {
        status: constant["a" /* APP_STATUS */].PLAYER
      });

    case types.STOP_PLAYING:
      return reducers_extends({}, state, {
        status: constant["a" /* APP_STATUS */].NORMAL
      });

    case types.APPEND_COMMAND:
      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (commands) {
        return [].concat(reducers_toConsumableArray(commands), [action.data.command]);
      }))(state);

    case types.DUPLICATE_COMMAND:
      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["setIn"])(['editor', 'editing', 'meta', 'selectedIndex'], action.data.index + 1), Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (commands) {
        var index = action.data.index;

        var newCommands = commands.slice();
        newCommands.splice(index + 1, 0, commands[index]);
        return newCommands;
      }), Object(ts_utils["safeUpdateIn"])(['editor', 'macrosExtra', getCurrentMacroId(state), 'breakpointIndices'], function (indices) {
        return updateBreakpointIndices(indices || [], 'add', action.data.index + 1);
      }))(state);

    case types.INSERT_COMMAND:
      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["setIn"])(['editor', 'editing', 'meta', 'selectedIndex'], action.data.index), Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (commands) {
        var _action$data = action.data,
            index = _action$data.index,
            command = _action$data.command;

        var newCommands = commands.slice();
        newCommands.splice(index, 0, command);
        return newCommands;
      }), Object(ts_utils["safeUpdateIn"])(['editor', 'macrosExtra', getCurrentMacroId(state), 'breakpointIndices'], function (indices) {
        return updateBreakpointIndices(indices || [], 'add', action.data.index);
      }))(state);

    case types.UPDATE_COMMAND:
      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["setIn"])(['editor', 'editing', 'commands', action.data.index], action.data.command))(state);

    case types.REMOVE_COMMAND:
      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (commands) {
        var index = action.data.index;

        var newCommands = commands.slice();
        newCommands.splice(index, 1);
        return newCommands;
      }), Object(ts_utils["safeUpdateIn"])(['editor', 'macrosExtra', getCurrentMacroId(state), 'breakpointIndices'], function (indices) {
        return updateBreakpointIndices(indices || [], 'delete', action.data.index);
      }))(state);

    case types.SELECT_COMMAND:
      return Object(utils["compose"])(Object(utils["setIn"])(['editor', 'editing', 'meta', 'selectedIndex'], action.data.forceClick || state.editor.editing.meta.selectedIndex !== action.data.index ? action.data.index : -1),
      // Note: normalize commands whenever switching between commands in normal mode
      state.status === constant["a" /* APP_STATUS */].NORMAL ? Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (cmds) {
        return cmds.map(test_case_model_normalizeCommand);
      }) : function (x) {
        return x;
      })(state);

    case types.CUT_COMMAND:
      {
        var commands = action.data.indices.map(function (i) {
          return state.editor.editing.commands[i];
        });

        return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["setIn"])(['editor', 'clipboard', 'commands'], commands), Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (commands) {
          var newCommands = commands.slice();
          return newCommands.filter(function (c, i) {
            return action.data.indices.indexOf(i) === -1;
          });
        }), Object(ts_utils["safeUpdateIn"])(['editor', 'macrosExtra', getCurrentMacroId(state), 'breakpointIndices'], function (indices) {
          return updateBreakpointIndices(indices || [], 'delete', action.data.indices);
        }))(state);
      }

    case types.COPY_COMMAND:
      {
        var _commands = action.data.indices.map(function (i) {
          return state.editor.editing.commands[i];
        });
        return Object(utils["setIn"])(['editor', 'clipboard', 'commands'], _commands, state);
      }

    case types.PASTE_COMMAND:
      {
        var _commands2 = state.editor.clipboard.commands;


        return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (cmds) {
          var newCmds = cmds.slice();
          newCmds.splice.apply(newCmds, [action.data.index + 1, 0].concat(reducers_toConsumableArray(_commands2)));
          return newCmds;
        }), Object(ts_utils["safeUpdateIn"])(['editor', 'macrosExtra', getCurrentMacroId(state), 'breakpointIndices'], function (indices) {
          return updateBreakpointIndices(indices || [], 'add', _commands2.map(function (_) {
            return action.data.index + 1;
          }));
        }))(state);
      }

    case types.NORMALIZE_COMMANDS:
      return Object(utils["updateIn"])(['editor', 'editing', 'commands'], function (cmds) {
        return cmds.map(test_case_model_normalizeCommand);
      }, state);

    case types.UPDATE_SELECTED_COMMAND:
      if (state.editor.editing.meta.selectedIndex === -1) {
        return state;
      }

      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["updateIn"])(['editor', 'editing', 'commands', state.editor.editing.meta.selectedIndex], function (cmdObj) {
        return reducers_extends({}, cmdObj, action.data);
      }))(state);

    case types.SAVE_EDITING_AS_EXISTED:
      return Object(utils["compose"])(Object(utils["setIn"])(['editor', 'editing', 'meta', 'hasUnsaved'], false), reducers_saveEditingSourceCurrent)(state);

    case types.SAVE_EDITING_AS_NEW:
      return Object(utils["compose"])(Object(utils["updateIn"])(['editor', 'editing', 'meta'], function (meta) {
        return reducers_extends({}, meta, {
          hasUnsaved: false,
          src: Object(utils["pick"])(['id', 'name'], action.data)
        });
      }), reducers_saveEditingSourceCurrent)(state);

    case types.SET_TEST_CASES:
      {
        return Object(utils["compose"])(function (state) {
          var src = state.editor.editing.meta.src;

          if (!src) return state;

          var tc = state.editor.testCases.find(function (tc) {
            return tc.id === src.id;
          });
          if (!tc) return state;

          return reducers_setEditingSourceOriginalAndPure({
            name: tc.name,
            commands: tc.data.commands
          }, state);
        }, Object(utils["setIn"])(['editor', 'testCases'], action.data))(state);
      }

    case types.SET_TEST_SUITES:
      return Object(utils["setIn"])(['editor', 'testSuites'], action.data, state);

    case types.UPDATE_TEST_SUITE:
      {
        var _action$data2 = action.data,
            id = _action$data2.id,
            updated = _action$data2.updated;

        var index = state.editor.testSuites.findIndex(function (ts) {
          return ts.id === id;
        });

        if (index === -1) return state;
        return Object(utils["setIn"])(['editor', 'testSuites', index], updated, state);
      }

    case types.UPDATE_TEST_SUITE_STATUS:
      {
        var _action$data3 = action.data,
            _id = _action$data3.id,
            extra = _action$data3.extra;

        if (!_id) return state;

        return Object(utils["updateIn"])(['editor', 'testSuitesExtra'], function (data) {
          return reducers_extends({}, data, reducers_defineProperty({}, _id, extra));
        }, state);
      }

    case types.SET_EDITING:
      log_default()('REDUCER SET_EDITING', action.data);

      if (!action.data) return state;
      return Object(utils["compose"])(reducers_setEditingSourceCurrent, reducers_updateHasUnSaved, Object(utils["setIn"])(['editor', 'editing'], action.data))(state);

    case types.EDIT_TEST_CASE:
      {
        var _ref = state.editor.editing.meta.src || {},
            _id2 = _ref.id;

        if (_id2 === action.data) return state;

        var testCases = state.editor.testCases;

        var tc = testCases.find(function (tc) {
          return tc.id === action.data;
        });

        if (!tc) return state;

        return Object(utils["compose"])(Object(utils["setIn"])(['editor', 'editing'], reducers_extends({}, tc.data, {
          meta: {
            selectedIndex: -1,
            hasUnsaved: false,
            src: Object(utils["pick"])(['id', 'name'], tc)
          }
        })), Object(utils["updateIn"])(['player'], function (player) {
          return reducers_extends({}, player, {
            status: constant["g" /* PLAYER_STATUS */].STOPPED,
            stopReason: null,
            nextCommandIndex: null
          });
        }), resetEditingSource({
          name: tc.name,
          commands: tc.data.commands
        }))(state);
      }

    case types.SET_ONE_MACRO_EXTRA:
      {
        var _action$data4 = action.data,
            _id3 = _action$data4.id,
            _extra = _action$data4.extra;


        if (!_id3) return state;

        return Object(ts_utils["safeSetIn"])(['editor', 'macrosExtra', _id3], _extra, state);
      }

    case types.UPDATE_ONE_MACRO_EXTRA:
      {
        var _action$data5 = action.data,
            _id4 = _action$data5.id,
            _extra2 = _action$data5.extra;


        if (!_id4) return state;

        return Object(ts_utils["safeUpdateIn"])(['editor', 'macrosExtra', _id4], function (data) {
          return reducers_extends({}, data, _extra2);
        }, state);
      }

    case types.RENAME_TEST_CASE:
      return Object(utils["setIn"])(['editor', 'editing', 'meta', 'src', 'name'], action.data, state);

    case types.REMOVE_TEST_CASE:
      {
        if (!action.data.isCurrent) return state;

        var _id5 = state.editor.editing.meta.src.id;
        var selectedIndex = state.editor.editing.meta.selectedIndex;

        var candidates = state.editor.testCases.filter(function (tc) {
          return tc.id !== _id5;
        });
        var lastIndex = state.editor.testCases.findIndex(function (tc) {
          return tc.id === _id5;
        });
        var editing = void 0;

        if (candidates.length === 0) {
          editing = reducers_extends({}, newTestCaseEditing);
        } else {
          var _index = lastIndex === -1 ? 0 : lastIndex < candidates.length ? lastIndex : lastIndex - 1;
          var _tc = candidates[_index];

          editing = reducers_extends({}, _tc.data, {
            meta: {
              src: Object(utils["pick"])(['id', 'name'], _tc),
              hasUnsaved: false,
              selectedIndex: _index
            }
          });
        }

        return Object(utils["setIn"])(['editor', 'editing'], editing, state);
      }

    case types.EDIT_NEW_TEST_CASE:
      {
        return Object(utils["compose"])(Object(utils["setIn"])(['editor', 'editing'], reducers_extends({}, newTestCaseEditing)), Object(utils["updateIn"])(['player'], function (player) {
          return reducers_extends({}, player, {
            nextCommandIndex: null
          });
        }), resetEditingSource({
          name: 'Untitled',
          commands: []
        }))(state);
      }

    case types.SET_MACROS_EXTRA:
      {
        return Object(utils["setIn"])(['editor', 'macrosExtra'], action.data, state);
      }

    case types.SET_TEST_SUITES_EXTRA:
      {
        return Object(utils["setIn"])(['editor', 'testSuitesExtra'], action.data, state);
      }

    case types.SET_PLAYER_STATE:
      return Object(utils["updateIn"])(['player'], function (playerState) {
        return reducers_extends({}, playerState, action.data);
      }, state);

    case types.ADD_LOGS:
      return reducers_extends({}, state, {
        logs: [].concat(reducers_toConsumableArray(state.logs), reducers_toConsumableArray(action.data)).slice(-500)
      });

    case types.CLEAR_LOGS:
      return reducers_extends({}, state, {
        logs: []
      });

    case types.ADD_SCREENSHOT:
      return reducers_extends({}, state, {
        screenshots: [].concat(reducers_toConsumableArray(state.screenshots), [action.data])
      });

    case types.CLEAR_SCREENSHOTS:
      return reducers_extends({}, state, {
        screenshots: []
      });

    case types.UPDATE_CONFIG:
      return Object(utils["updateIn"])(['config'], function (cfg) {
        return reducers_extends({}, cfg, action.data);
      }, state);

    case types.SET_CSV_LIST:
      return reducers_extends({}, state, {
        csvs: action.data
      });

    case types.SET_SCREENSHOT_LIST:
      return reducers_extends({}, state, {
        screenshots: action.data
      });

    case types.SET_VISION_LIST:
      return reducers_extends({}, state, {
        visions: action.data
      });

    case types.SET_VARIABLE_LIST:
      return reducers_extends({}, state, {
        variables: action.data
      });

    case types.UPDATE_UI:
      {
        return Object(utils["updateIn"])(['ui'], function (ui) {
          return reducers_extends({}, ui, action.data);
        }, state);
      }

    case types.SET_EDITOR_ACTIVE_TAB:
      {
        return Object(utils["setIn"])(['editor', 'activeTab'], action.data, state);
      }

    case types.SET_SOURCE_ERROR:
      {
        return Object(utils["setIn"])(['editor', 'editingSource', 'error'], action.data, state);
      }

    case types.SET_SOURCE_CURRENT:
      {
        return Object(utils["setIn"])(['editor', 'editingSource', 'current'], action.data, state);
      }

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/index.js







var createStore = Object(redux_es["a" /* applyMiddleware */])(redux_thunk_lib_default.a, promiseMiddleWare(), postLogicMiddleWare())(redux_es["c" /* createStore */]);


// EXTERNAL MODULE: ./src/common/download_man.js
var download_man = __webpack_require__(105);

// EXTERNAL MODULE: ./src/services/migration/jobs/2019_04_01_macro_suite_storage.ts
var _2019_04_01_macro_suite_storage = __webpack_require__(284);

// EXTERNAL MODULE: ./src/services/migration/index.ts
var migration = __webpack_require__(325);

// EXTERNAL MODULE: ./src/services/migration/types.ts
var migration_types = __webpack_require__(143);

// CONCATENATED MODULE: ./src/index.js












var src_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var src_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function src_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* global PREINSTALL_CSV_LIST PREINSTALL_VISION_LIST */








































var src_store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// FIXME: better not passing store via `window` object
window['store'] = src_store;

var rootEl = document.getElementById('root');
var src_render = function render(Component) {
  return react_dom_default.a.render(react_default.a.createElement(
    locale_provider_default.a,
    { locale: en_US_default.a },
    react_default.a.createElement(
      react_redux_es["a" /* Provider */],
      { store: src_store },
      react_default.a.createElement(
        es["a" /* HashRouter */],
        null,
        react_default.a.createElement(src_app, null)
      )
    )
  ), rootEl);
};

var timestampCache = {};
var DURATION = 2000;
var OPEN_TIME = new Date() * 1;

// Note: listen to any db changes and restore all data from db to redux store
// All test cases are stored in indexeddb (dexie)
var src_bindMacroAndTestSuites = function bindMacroAndTestSuites() {
  var curStorageMode = Object(services_storage["getStorageManager"])().getCurrentStrategyType();
  var macroStorage = Object(services_storage["getStorageManager"])().getMacroStorage();
  var suiteStorage = Object(services_storage["getStorageManager"])().getTestSuiteStorage();
  var onError = function onError(errorList) {
    errorList.filter(function (item) {
      return item.fileName !== '__Untitled__';
    }).forEach(function (errorItem) {
      var key = errorItem.fullFilePath;

      if (!timestampCache[key] || new Date() * 1 - timestampCache[key] > DURATION) {
        timestampCache[key] = new Date() * 1;
        src_store.dispatch(addLog('warning', errorItem.error.message));
      }
    });
  };

  var restoreTestCases = function restoreTestCases() {
    var pMacros = macroStorage.readAll('Text', onError).then(function (items) {
      return items.map(function (item) {
        return test_case_model_normalizeTestCase(item.content);
      });
    }).then(function (tcs) {
      log_default()('restoreTestCases - macroStorage - tcs', tcs);

      src_store.dispatch(setTestCases(tcs.map(test_case_model_eliminateBaseUrl)));
    });

    var pMacrosExtra = Object(macro_extra_data["getMacroExtraKeyValueData"])().getAll().then(function (data) {
      log_default()('restoreMacrosExtra', data);

      src_store.dispatch(setMacrosExtra(data));
    });

    return Promise.all([pMacros, pMacrosExtra]);
  };

  var restoreTestSuites = function restoreTestSuites() {
    return Object(ts_utils["until"])('testCases', function () {
      var testCases = src_store.getState().editor.testCases;


      return {
        pass: testCases.length > 0,
        result: testCases
      };
    }).then(function () {
      var pTestSuites = suiteStorage.readAll('Text', onError).then(function (items) {
        return items.map(function (item) {
          return normalizeTestSuite(item.content);
        });
      }).then(function (tss) {
        tss.sort(function (a, b) {
          var aname = a.name.toLowerCase();
          var bname = b.name.toLowerCase();

          if (aname < bname) return -1;
          if (aname > bname) return 1;
          if (aname === bname) {
            return b.updateTime - a.updateTime;
          }
        });

        log_default()('restoreTestSuites - suiteStorage - tss', tss);

        src_store.dispatch(setTestSuites(tss));
      });

      var pTestSuitesExtra = Object(test_suite_extra_data["getTestSuiteExtraKeyValueData"])().getAll().then(function (data) {
        log_default()('restoreTestSuitesExtra', data);

        src_store.dispatch(setTestSuitesExtra(data));
      });

      return Promise.all([pTestSuites, pTestSuitesExtra]);
    });
  }

  // FIXME: need to unbind previous listeners when bindMacroAndTestSuites is called for more than once
  ;[storage_storage["FlatStorageEvent"].ListChanged, storage_storage["FlatStorageEvent"].FilesChanged].forEach(function (eventName) {
    macroStorage.off(eventName);
    macroStorage.on(eventName, function () {
      if (curStorageMode !== Object(services_storage["getStorageManager"])().getCurrentStrategyType()) return;
      log_default()('macroStorage - eventName', eventName);
      setTimeout(restoreTestCases, 50);
    });
  });[storage_storage["FlatStorageEvent"].ListChanged, storage_storage["FlatStorageEvent"].FilesChanged].forEach(function (eventName) {
    suiteStorage.off(eventName);
    suiteStorage.on(eventName, function () {
      if (curStorageMode !== Object(services_storage["getStorageManager"])().getCurrentStrategyType()) return;
      log_default()('suiteStorage - eventName', eventName);
      setTimeout(restoreTestSuites, 50);
    });
  });

  restoreTestCases();
  restoreTestSuites();
};

// Note: editing is stored in localstorage
var src_restoreEditing = function restoreEditing() {
  return common_storage["default"].get('editing').then(function (editing) {
    if (!editing) return;

    var finalEditing = editing;

    if (editing.baseUrl) {
      finalEditing = src_extends({}, editing);
      finalEditing.commands = finalEditing.commands.map(commandWithoutBaseUrl(editing.baseUrl));
      delete finalEditing.baseUrl;
    }

    src_store.dispatch(setEditing(finalEditing));
  });
};

var src_restoreConfig = function restoreConfig() {
  return common_storage["default"].get('config').then(function (config) {
    var cfg = src_extends({
      showSidebar: true,
      playScrollElementsIntoView: true,
      playHighlightElements: true,
      playCommandInterval: 0.3,
      recordNotification: true,
      recordClickType: 'click',
      logFilter: 'All',
      onErrorInLoop: 'continue_next_loop',
      // Run macros from outside
      allowRunFromBookmark: true,
      allowRunFromFileSchema: true,
      allowRunFromHttpSchema: true,
      // timeout in seconds
      timeoutPageLoad: 60,
      timeoutElement: 10,
      timeoutMacro: 900,
      timeoutDownload: 60,
      // backup relative
      lastBackupActionTime: new Date() * 1,
      enableAutoBackup: true,
      autoBackupInterval: 7,
      autoBackupTestCases: true,
      autoBackupTestSuites: true,
      autoBackupScreenshots: true,
      autoBackupCSVFiles: true,
      autoBackupVisionImages: true,
      // security relative
      shouldEncryptPassword: 'no',
      masterPassword: '',
      // variable relative
      showCommonInternalVariables: true,
      showAdvancedInternalVariables: false,
      // xmodules related
      storageMode: services_storage["StorageStrategyType"].Browser,
      xmodulesStatus: 'unregistered',
      // orc related
      ocrMode: 'disabled',
      ocrLanguage: 'eng',
      ocrOfflineURL: '',
      ocrOfflineAPIKey: '',
      // vision related
      cvScope: 'browser',
      defaultVisionSearchConfidence: 0.8
    }, config);
    src_store.dispatch(updateConfig(cfg));
    return cfg;
  });
};

var src_restoreCSV = function restoreCSV() {
  // Note: just try to init storage. Eg. For browser fs, it will try to create root folder
  Object(services_storage["getStorageManager"])().getCSVStorage();
  src_store.dispatch(listCSV());
};

var src_restoreScreenshots = function restoreScreenshots() {
  Object(services_storage["getStorageManager"])().getScreenshotStorage();
  src_store.dispatch(listScreenshots());
};

var src_restoreVisions = function restoreVisions() {
  Object(services_storage["getStorageManager"])().getVisionStorage();
  src_store.dispatch(listVisions());
};

var src_downloadTextFile = function downloadTextFile(text, fileName) {
  var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  file_saver_default.a.saveAs(blob, fileName);
};

var src_genPlayerPlayCallback = function genPlayerPlayCallback(_ref) {
  var options = _ref.options;

  return function (err, reason) {
    if (options.savelog) {
      var logs = src_store.getState().logs;
      var errorLog = logs.find(function (log) {
        return log.type === 'error' && !(log.options && log.options.ignored);
      });
      var error = err || errorLog && { message: errorLog.text };
      var logTitle = error ? 'Status=Error: ' + error.message : 'Status=OK';
      var logContent = logs.map(renderLog);
      var text = [logTitle, '###'].concat(src_toConsumableArray(logContent)).join('\n');
      src_downloadTextFile(text, decodeURIComponent(options.savelog));
    }

    var closeBrowser = Object(ts_utils["parseBoolLike"])(options.closeBrowser, false);
    var closeKantu = Object(ts_utils["parseBoolLike"])(options.closeKantu, true);

    if (closeBrowser && reason !== player_Player.C.END_REASON.MANUAL) {
      // Note: We have to wait until savelog download completes if there is any
      var prepare = !options.savelog ? Object(utils["delay"])(function () {}, 1000) : Object(download_man["a" /* getDownloadMan */])().prepareDownload(options.savelog);

      // Close all tabs If close option is set
      prepare.then(function () {
        return ipc_cs["a" /* default */].ask('PANEL_CLOSE_ALL_WINDOWS', {});
      });
    }

    // Note: it's better to keep kantu open if it's opened manually before
    if (!err && reason === player_Player.C.END_REASON.COMPLETE && closeKantu) {
      // Close kantu panel
      setTimeout(function () {
        window.close();
      }, 1000);
    }
  };
};

var genOverrideScope = function genOverrideScope(_ref2) {
  var options = _ref2.options;

  return Object.keys(options || {}).reduce(function (prev, key) {
    var m = key.match(/^cmd_var(1|2|3)$/i);
    if (!m) return prev;

    prev['!CMD_VAR' + m[1]] = options[key];
    return prev;
  }, {});
};

var src_bindIpcEvent = function bindIpcEvent() {
  var prepareByOptions = function prepareByOptions() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var lowerCaseOptions = Object.keys(options).reduce(function (prev, key) {
      prev[key.toLowerCase()] = options[key];
      return prev;
    }, {});

    if (Object(ts_utils["parseBoolLike"])(lowerCaseOptions.continueinlastusedtab, false)) {
      return ipc_cs["a" /* default */].ask('PANEL_CLOSE_CURRENT_TAB_AND_SWITCH_TO_LAST_PLAYED');
    } else {
      return Promise.resolve();
    }
  };

  ipc_cs["a" /* default */].onAsk(function (cmd, args) {
    log_default()(cmd, args);

    switch (cmd) {
      case 'INSPECT_RESULT':
        src_store.dispatch(doneInspecting());
        src_store.dispatch(updateSelectedCommand({
          target: args.locatorInfo.target,
          targetOptions: args.locatorInfo.targetOptions
        }));
        return true;

      case 'RECORD_ADD_COMMAND':
        log_default()('got add command', cmd, args);
        src_store.dispatch(appendCommand(args, true));
        return true;

      case 'TIMEOUT_STATUS':
        if (src_store.getState().status !== constant["a" /* APP_STATUS */].PLAYER) return false;

        src_store.dispatch(setTimeoutStatus(args));
        return true;

      case 'RUN_TEST_CASE':
        {
          if (src_store.getState().status !== constant["a" /* APP_STATUS */].NORMAL) {
            message_default.a.error('can only run macros when it is not recording or playing');
            return false;
          }

          var testCase = args.testCase,
              options = args.options;

          var storageMan = Object(services_storage["getStorageManager"])();
          var storageMode = testCase.storageMode || storageMan.getCurrentStrategyType();

          storageMan.isStrategyTypeAvailable(storageMode).catch(function (e) {
            message_default.a.error(e.message);
            throw e;
          }).then(function () {
            var needChange = storageMan.setCurrentStrategyType(storageMode);
            return needChange ? Object(utils["delay"])(function () {}, 1000) : undefined;
          }).then(function () {
            return prepareByOptions(options);
          }).then(function () {
            return Object(ts_utils["until"])('testCases ready', function () {
              var state = src_store.getState();
              var testCases = state.editor.testCases;


              return {
                pass: testCases && testCases.length > 0,
                result: true
              };
            });
          }).then(function () {
            var state = src_store.getState();
            var tc = findSameNameMacro(testCase.name, state.editor.testCases);

            if (!tc) {
              message_default.a.error('no macro found with name \'' + testCase.name + '\'');
              return false;
            }

            var openTc = tc.data.commands.find(function (item) {
              return item.cmd.toLowerCase() === 'open';
            });

            src_store.dispatch(editTestCase(tc.id));
            src_store.dispatch(playerPlay({
              macroId: tc && tc.id,
              title: testCase.name,
              extra: {
                id: tc && tc.id
              },
              mode: player_Player.C.MODE.STRAIGHT,
              startIndex: 0,
              startUrl: openTc ? openTc.target : null,
              resources: tc.data.commands,
              postDelay: state.player.playInterval * 1000,
              overrideScope: genOverrideScope({ options: options }),
              callback: src_genPlayerPlayCallback({ options: options })
            }));

            src_store.dispatch(updateUI({ sidebarTab: 'macros' }));
          });

          return true;
        }

      case 'RUN_TEST_SUITE':
        {
          if (src_store.getState().status !== constant["a" /* APP_STATUS */].NORMAL) {
            message_default.a.error('can only run test suites when it is not recording or playing');
            return false;
          }

          var testSuite = args.testSuite,
              _options = args.options;

          var _storageMode = testSuite.storageMode || services_storage["StorageStrategyType"].Browser;
          var _storageMan = Object(services_storage["getStorageManager"])();

          _storageMan.isStrategyTypeAvailable(_storageMode).catch(function (e) {
            message_default.a.error(e.message);
            throw e;
          }).then(function () {
            var needChange = _storageMan.setCurrentStrategyType(_storageMode);
            return needChange ? Object(utils["delay"])(function () {}, 1000) : undefined;
          }).then(function () {
            return prepareByOptions(_options);
          }).then(function () {
            return Object(ts_utils["until"])('testSuites ready', function () {
              var state = src_store.getState();
              var testSuites = state.editor.testSuites;


              return {
                pass: testSuites && testSuites.length > 0,
                result: true
              };
            });
          }).then(function () {
            var state = src_store.getState();
            var ts = findSameNameTestSuite(testSuite.name, state.editor.testSuites);

            if (!ts) {
              message_default.a.error('no macro found with name \'' + testSuite.name + '\'');
              return false;
            }

            getPlayer({ name: 'testSuite' }).play({
              title: ts.name,
              extra: {
                id: ts.id,
                name: ts.name
              },
              mode: getPlayer().C.MODE.STRAIGHT,
              startIndex: 0,
              resources: ts.cases.map(function (item) {
                return {
                  id: item.testCaseId,
                  loops: item.loops
                };
              }),
              public: {
                scope: genOverrideScope({ options: _options })
              },
              callback: src_genPlayerPlayCallback({ options: _options })
            });

            src_store.dispatch(updateUI({ sidebarTab: 'test_suites' }));
          });

          return true;
        }

      case 'IMPORT_AND_RUN':
        {
          var _options2 = args.options;

          var _testCase = void 0;

          if (args.html) {
            try {
              _testCase = Object(convert_utils["fromHtml"])(args.html);
            } catch (e) {
              message_default.a.error('Failed to parse html', 1.5);
              return false;
            }
          }

          if (args.json) {
            try {
              var jsonStr = typeof args.json === 'string' ? args.json : JSON.stringify(args.json);
              _testCase = Object(convert_utils["fromJSONString"])(jsonStr);
            } catch (e) {
              message_default.a.error('Failed to parse json', 1.5);
              return false;
            }
          }

          if (!_testCase) {
            message_default.a.error('Nothing to import');
            return false;
          }

          var _storageMode2 = args.storageMode || services_storage["StorageStrategyType"].Browser;
          var _storageMan2 = Object(services_storage["getStorageManager"])();

          return _storageMan2.isStrategyTypeAvailable(_storageMode2).catch(function (e) {
            message_default.a.error(e.message);
            throw e;
          }).then(function () {
            var needChange = _storageMan2.setCurrentStrategyType(_storageMode2);
            return needChange ? Object(utils["delay"])(function () {}, 1000) : undefined;
          }).then(function () {
            return prepareByOptions(_options2);
          }).then(function () {
            return Object(ts_utils["until"])('testCases ready', function () {
              var state = src_store.getState();
              var testCases = state.editor.testCases;


              return {
                pass: testCases && testCases.length > 0,
                result: true
              };
            });
          }).then(function () {
            src_store.dispatch(upsertTestCase(_testCase));

            return Object(utils["delay"])(function () {
              var state = src_store.getState();
              var tc = state.editor.testCases.find(function (tc) {
                return tc.name === _testCase.name;
              });
              var openTc = tc.data.commands.find(function (item) {
                return item.cmd.toLowerCase() === 'open';
              });

              src_store.dispatch(editTestCase(tc.id));
              src_store.dispatch(playerPlay({
                macroId: tc && tc.id,
                title: tc.name,
                extra: {
                  id: tc && tc.id
                },
                mode: player_Player.C.MODE.STRAIGHT,
                startIndex: 0,
                startUrl: openTc ? openTc.target : null,
                resources: tc.data.commands,
                postDelay: state.player.playInterval * 1000,
                overrideScope: genOverrideScope({ options: _options2 }),
                callback: src_genPlayerPlayCallback({ options: _options2 })
              }));
              return true;
            }, 1000).catch(function (e) {
              log_default.a.error(e.stack);
              throw e;
            });
          });
        }

      case 'ADD_VISION_IMAGE':
        {
          var dataUrl = args.dataUrl,
              _args$requireRename = args.requireRename,
              requireRename = _args$requireRename === undefined ? false : _args$requireRename;

          var fileName = Object(utils["randomName"])() + '_dpi_' + Object(utils["getScreenDpi"])() + '.png';

          return Object(services_storage["getStorageManager"])().getVisionStorage().write(fileName, Object(utils["dataURItoBlob"])(dataUrl)).then(src_restoreVisions).then(function () {
            if (!requireRename) return { fileName: fileName };

            return src_store.dispatch(renameVisionImage(fileName)).then(function (fileName) {
              src_restoreVisions();
              return { fileName: fileName };
            });
          });
        }

      case 'RESTORE_SCREENSHOTS':
        {
          src_restoreScreenshots();
          return true;
        }

      case 'UPDATE_ACTIVE_TAB':
        {
          src_updatePageTitle(args);
          return true;
        }

      case 'ADD_LOG':
        {
          if (!args) return false;
          if (args.info) src_store.dispatch(addLog('info', args.info, args.options));
          if (args.warning) src_store.dispatch(addLog('warning', args.warning));
          if (args.error) src_store.dispatch(addLog('error', args.error));

          return true;
        }
    }
  });
};

var src_bindWindowEvents = function bindWindowEvents() {
  // reset status to normal when panel closed
  window.addEventListener('beforeunload', function () {
    ipc_cs["a" /* default */].ask('PANEL_STOP_RECORDING', {});
    ipc_cs["a" /* default */].ask('PANEL_STOP_PLAYING', {});
  });

  window.addEventListener('resize', function () {
    var size = {
      width: window.outerWidth,
      height: window.outerHeight
    };
    var state = src_store.getState();
    src_store.dispatch(updateConfig({
      size: src_extends({}, state.config.size, src_defineProperty({}, state.config.showSidebar ? 'with_sidebar' : 'standard', size))
    }));
  });

  window.addEventListener('message', function (e) {
    switch (e.data && e.data.type) {
      case 'RELOAD_VISIONS':
        return src_store.dispatch(listVisions());
    }
  });
};

var src_bindVariableChange = function bindVariableChange() {
  // Note: bind to onChange in next tick, to make sure vars instance is already initialized
  // so that `bindVariableChange` could be executed before `initPlayer`
  setTimeout(function () {
    getVarsInstance().onChange(function (_ref3) {
      var vars = _ref3.vars;

      var variables = Object.keys(vars).map(function (key) {
        return { key: key, value: vars[key] };
      });
      src_store.dispatch(setVariables(variables));
    });
  }, 0);
};

var src_initSaveTestCase = function initSaveTestCase() {
  getSaveTestCase(src_store);
};

var src_updatePageTitle = function updatePageTitle(args) {
  // Note: Firefox includes page url in title, there could be not enough space for tab title
  if (web_extension_default.a.isFirefox()) return true;
  var origTitle = document.title.replace(/ - .*$/, '');
  document.title = origTitle + ' - (Tab: ' + args.title + ')';
};

function tryPreinstall() {
  return common_storage["default"].get('preinstall_info').then(function (info) {
    var status = function () {
      if (!info) return 'fresh';

      var _info$askedVersions = info.askedVersions,
          askedVersions = _info$askedVersions === undefined ? [] : _info$askedVersions;

      if (askedVersions.indexOf(config_default.a.preinstallVersion) === -1) return 'new_version_available';

      return 'up_to_date';
    }();

    switch (status) {
      case 'fresh':
        return src_store.dispatch(preinstall());

      case 'new_version_available':
        return src_store.dispatch(updateUI({ newPreinstallVersion: true }));

      case 'up_to_date':
      default:
        return false;
    }
  });
}

function reloadResources() {
  src_bindMacroAndTestSuites();
  src_restoreCSV();
  src_restoreScreenshots();
  src_restoreVisions();

  setTimeout(function () {
    src_store.dispatch(resetEditingIfNeeded());
  }, 200);
}

function bindStorageModeChanged() {
  Object(services_storage["getStorageManager"])().on(services_storage["StorageManagerEvent"].StrategyTypeChanged, function (type) {
    reloadResources();
  });

  Object(services_storage["getStorageManager"])().on(services_storage["StorageManagerEvent"].RootDirChanged, function (type) {
    reloadResources();
  });

  Object(services_storage["getStorageManager"])().on(services_storage["StorageManagerEvent"].ForceReload, function (type) {
    reloadResources();
  });
}

function remedyMigrationIfNeeded() {
  var todo = [];
  var shouldRemedyMacroFsMigration = Object(_2019_04_01_macro_suite_storage["getMigrateMacroTestSuiteToBrowserFileSystem"])().shouldMigrate() && !Object(migration["getKantuMigrationService"])().isMigrated(migration_types["MigrationJobType"].MigrateMacroTestSuiteToBrowserFileSystem);

  if (shouldRemedyMacroFsMigration || config_default.a.forceMigrationRemedy) {
    alert('Kantu introduced an internal storage migration in this version. It isn\'t supposed to disturb you, but looks like there is some unexpected error: \n\n=> Solution: After you click OK Kantu is going to download your macros and test suites from the old storage into a ZIP file. You can then manually import the macros back into the new Kantu version.\n\nIf you see this dialog, please also inform us at team@a9t9.com or in the user forum about the issue.');
    todo.push(function () {
      return Object(_2019_04_01_macro_suite_storage["getMigrateMacroTestSuiteToBrowserFileSystem"])().remedy();
    });
  }

  return ts_utils["flow"].apply(undefined, todo);
}

function init() {
  src_bindMacroAndTestSuites();
  src_bindIpcEvent();
  src_bindWindowEvents();
  src_bindVariableChange();
  bindStorageModeChanged();
  init_player_initPlayer(src_store);
  src_restoreEditing();
  src_restoreConfig();
  src_initSaveTestCase();

  tryPreinstall().catch(function (e) {
    log_default.a.warn('Error in preinstall', e);
  }).then(function () {
    src_restoreCSV();
    src_restoreScreenshots();
    src_restoreVisions();
  });

  setTimeout(function () {
    remedyMigrationIfNeeded();
  }, 1000);

  ipc_cs["a" /* default */].ask('I_AM_PANEL', {});

  document.title = document.title + ' ' + web_extension_default.a.runtime.getManifest().version;

  ipc_cs["a" /* default */].ask('PANEL_CURRENT_PLAY_TAB_INFO').then(src_updatePageTitle);

  src_render(src_app);
}

Promise.all([src_restoreConfig(), Object(xfile["getXFile"])().getConfig()]).then(function (_ref4) {
  var _ref5 = src_slicedToArray(_ref4, 2),
      config = _ref5[0],
      xFileConfig = _ref5[1];

  // Note: This is the first call of getStorageManager
  // and it must passed in `getMacros` to make test suite work
  Object(services_storage["getStorageManager"])(config.storageMode, {
    getMacros: function getMacros() {
      return src_store.getState().editor.testCases;
    },
    getMaxMacroCount: function getMaxMacroCount(strategyType) {
      var count = function () {
        switch (strategyType) {
          case services_storage["StorageStrategyType"].XFile:
            {
              var _store$getState$confi = src_store.getState().config.xmodulesStatus,
                  xmodulesStatus = _store$getState$confi === undefined ? 'unregistered' : _store$getState$confi;


              switch (xmodulesStatus) {
                case 'unregistered':
                  return config_default.a.xmodulesLimit.unregistered.xFileMacroCount;
                case 'free':
                  return config_default.a.xmodulesLimit.free.xFileMacroCount;
                case 'pro':
                  return config_default.a.xmodulesLimit.pro.xFileMacroCount;
                default:
                  throw new Error('Unknown xmodulesStatus: \'' + xmodulesStatus + '\'');
              }
            }

          case services_storage["StorageStrategyType"].Browser:
          default:
            return Infinity;
        }
      }();

      return Promise.resolve(count);
    }
  });

  init();
}, init);

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DownloadMan */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDownloadMan; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var DownloadMan = function () {
  function DownloadMan() {
    var _this = this;

    _classCallCheck(this, DownloadMan);

    this.activeDownloads = [];
    this.eventsBound = false;

    this.filterActiveDownloads = function (predicate) {
      _this.activeDownloads = _this.activeDownloads.filter(predicate);

      if (_this.activeDownloads.length === 0) {
        _this.unbindEvents();
      }
    };

    this.createdListener = function (downloadItem) {
      if (!_this.isActive()) return;
      _log__WEBPACK_IMPORTED_MODULE_1___default()('download on created', downloadItem);

      var item = _this.activeDownloads.find(function (item) {
        return !item.id;
      });
      if (!item) return;

      // Note: 3 things to do on download created
      // 1. record download id
      // 2. Start timer for timeout
      // 3. Start interval timer for count down message
      _extends(item, _extends({
        id: downloadItem.id
      }, !item.wait && item.timeout > 0 ? {} : {
        timeoutTimer: setTimeout(function () {
          item.reject(new Error('download timeout ' + item.timeout / 1000 + 's'));
          _this.filterActiveDownloads(function (d) {
            return item.uid !== d.uid;
          });
        }, item.timeout),

        countDownTimer: setInterval(function () {
          if (!_this.countDownHandler) return;

          var _item$past = item.past,
              past = _item$past === undefined ? 0 : _item$past;

          var newPast = past + 1000;

          _this.countDownHandler({
            total: item.timeout,
            past: newPast
          });
          _extends(item, { past: newPast });
        }, 1000)
      }));
    };

    this.changedListener = function (downloadDelta) {
      if (!_this.isActive()) return;
      _log__WEBPACK_IMPORTED_MODULE_1___default()('download on changed', downloadDelta);

      var item = _this.findById(downloadDelta.id);
      if (!item) return;

      if (downloadDelta.state) {
        var fn = function fn() {};
        var done = false;

        switch (downloadDelta.state.current) {
          case 'complete':
            fn = function fn() {
              return item.resolve(true);
            };
            done = true;
            break;

          case 'interrupted':
            fn = function fn() {
              return item.reject(new Error('download interrupted'));
            };
            done = true;
            break;
        }

        // Remove this download item from our todo list if it's done
        if (done) {
          clearTimeout(item.timeoutTimer);
          clearInterval(item.countDownTimer);
          _this.filterActiveDownloads(function (item) {
            return item.id !== downloadDelta.id;
          });
        }

        // resolve or reject that promise object
        fn();
      }
    };

    this.determineFileNameListener = function (downloadItem, suggest) {
      if (!_this.isActive()) return;

      _log__WEBPACK_IMPORTED_MODULE_1___default()('download on determine', downloadItem);

      var item = _this.findById(downloadItem.id);
      if (!item) return;

      var tmpName = item.fileName.trim();
      var fileName = tmpName === '' || tmpName === '*' ? null : tmpName;

      if (fileName) {
        return suggest({
          filename: fileName,
          conflictAction: 'uniquify'
        });
      }
    };
  }

  _createClass(DownloadMan, [{
    key: 'isActive',


    /*
     * Private methods
     */

    value: function isActive() {
      return this.activeDownloads.length > 0;
    }
  }, {
    key: 'findById',
    value: function findById(id) {
      return this.activeDownloads.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      if (this.eventsBound) return;

      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onCreated.addListener(this.createdListener);
      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onChanged.addListener(this.changedListener);

      // Note: only chrome supports api `chrome.downloads.onDeterminingFilename`
      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename.addListener(this.determineFileNameListener);
      }

      this.eventsBound = true;
    }
  }, {
    key: 'unbindEvents',
    value: function unbindEvents() {
      if (!this.eventsBound) return;

      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onCreated.removeListener) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onCreated.removeListener(this.createdListener);
      }

      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onChanged.removeListener) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onChanged.removeListener(this.changedListener);
      }

      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename && _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename.removeListener) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename.removeListener(this.determineFileNameListener);
      }

      this.eventsBound = false;
    }

    /*
     * Public methods
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.activeDownloads.forEach(function (item) {
        if (item.timeoutTimer) clearTimeout(item.timeoutTimer);
        if (item.countDownTimer) clearInterval(item.countDownTimer);
      });
      this.activeDownloads = [];
      this.unbindEvents();
    }
  }, {
    key: 'prepareDownload',
    value: function prepareDownload(fileName) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var downloadToCreate = this.activeDownloads.find(function (item) {
        return !item.id;
      });
      if (downloadToCreate) throw new Error('only one not-created download allowed at a time');

      this.bindEvents();

      var opts = _extends({
        timeoutForStart: 10000,
        timeout: 60000,
        wait: false
      }, options);

      var promise = new Promise(function (resolve, reject) {
        var uid = Math.floor(Math.random() * 1000) + new Date() * 1;

        // Note: we need to cache promise object, so have to wait for next tick
        setTimeout(function () {
          _this2.activeDownloads.push({
            uid: uid,
            resolve: resolve,
            reject: reject,
            fileName: fileName,
            promise: promise,
            timeoutForStart: opts.timeoutForStart,
            timeout: opts.timeout,
            wait: opts.wait
          });
        }, 0);
      });

      return promise;
    }
  }, {
    key: 'waitForDownloadIfAny',
    value: function waitForDownloadIfAny() {
      var _this3 = this;

      var downloadToCreate = this.activeDownloads.find(function (item) {
        return !item.id;
      });
      if (downloadToCreate) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["until"])('download start', function () {
          return {
            pass: !!downloadToCreate.id,
            result: true
          };
        }, 50, downloadToCreate.timeoutForStart).then(function () {
          return _this3.waitForDownloadIfAny();
        });
      }

      // Note: check if id exists, because it means this download item is created
      var downloadToComplete = this.activeDownloads.find(function (item) {
        return item.wait && item.id;
      });
      if (!downloadToComplete) return Promise.resolve(true);
      return downloadToComplete.promise.then(function () {
        return _this3.waitForDownloadIfAny();
      });
    }
  }, {
    key: 'onCountDown',
    value: function onCountDown(fn) {
      this.countDownHandler = fn;
    }
  }, {
    key: 'hasPendingDownload',
    value: function hasPendingDownload() {
      var downloadToCreate = this.activeDownloads.find(function (item) {
        return !item.id;
      });
      return !!downloadToCreate;
    }
  }]);

  return DownloadMan;
}();

var getDownloadMan = function () {
  var instance = void 0;

  return function () {
    if (!instance) {
      instance = new DownloadMan();
    }

    return instance;
  };
}();

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(363);
const stack_1 = __webpack_require__(959);
const macro_1 = __webpack_require__(150);
const ts_utils_1 = __webpack_require__(18);
const registry_1 = __webpack_require__(322);
class CallStack extends stack_1.Stack {
    constructor(options) {
        super();
        this.opts = options;
        this.registry = registry_1.createListenerRegistry();
    }
    on(eventName, listener) {
        this.registry.add(eventName, listener);
        return () => this.registry.remove(eventName, listener);
    }
    off() {
        this.registry.destroy();
    }
    call(resource, runningStatus) {
        if (!this.isEmpty()) {
            this.updatePeek((element) => {
                return {
                    id: element.id,
                    resource: element.resource,
                    runningStatus: Object.assign({}, this.opts.updateRunningStatusForCaller(element.runningStatus, element.resource), { status: macro_1.MacroStatus.Calling })
                };
            });
        }
        this.push({
            resource,
            id: ts_utils_1.uid(),
            runningStatus: runningStatus || this.opts.getInitialRunningStatus(resource)
        });
        this.registry.fire(types_1.CallStackEvent.BeforeRun, this.callStackSnapshot());
        return this.runPeek();
    }
    runPeek(isResume = false) {
        return this.opts.prepareContext(this.peek(), this.getFrameStatus(this.peek(), isResume))
            .then(() => this.opts.run(this.peek(), this.getFrameStatus(this.peek(), isResume)))
            .then(() => {
            this.registry.fire(types_1.CallStackEvent.AfterReturn, this.callStackSnapshot());
            this.pop();
            if (this.isEmpty()) {
                return;
            }
            this.updatePeekAfterResume();
            this.registry.fire(types_1.CallStackEvent.BeforeResume, this.callStackSnapshot());
            return this.runPeek(true);
        });
    }
    updatePeek(updater) {
        this.guardNotEmpty();
        const index = this.getCount() - 1;
        this.list[index] = updater(this.list[index]);
    }
    getFrameStatus(element, isResume) {
        return {
            isResume,
            isBottom: this.getCount() === 1,
            frameId: element.id
        };
    }
    updatePeekAfterResume() {
        this.updatePeek((element) => {
            return element;
        });
    }
    callStackSnapshot() {
        return this.list.map((item) => item.resource);
    }
}
exports.CallStack = CallStack;
class MacroCallStack extends CallStack {
    callStackSnapshot() {
        return this.list.map((item) => ({
            id: item.resource.id,
            name: item.resource.name,
            frameId: item.id
        }));
    }
    updatePeekAfterResume() {
        this.updatePeek((element) => {
            const curIndex = element.runningStatus.nextIndex;
            const nextIndex = curIndex + 1;
            const commandResults = [...element.runningStatus.commandResults];
            commandResults[curIndex] = macro_1.CommandRunningStatus.Success;
            return {
                id: element.id,
                resource: element.resource,
                runningStatus: {
                    nextIndex,
                    commandResults,
                    status: macro_1.MacroStatus.Running,
                    playerState: Object.assign({}, element.runningStatus.playerState, { nextIndex, doneIndices: [
                            ...element.runningStatus.playerState.doneIndices,
                            curIndex
                        ] })
                }
            };
        });
    }
}
exports.MacroCallStack = MacroCallStack;
exports.getMacroCallStack = ts_utils_1.singletonGetter((callStackOptions) => {
    if (!callStackOptions) {
        throw new Error('macro call stack options is required');
    }
    return new MacroCallStack(callStackOptions);
});
function createMacroCallStack(options) {
    return exports.getMacroCallStack({
        getInitialRunningStatus: (macro) => ({
            nextIndex: 0,
            status: macro_1.MacroStatus.Running,
            commandResults: [],
            playerState: {}
        }),
        updateRunningStatusForCaller: (runningStatus, macro) => {
            return options.getCurrentMacroRunningStatus();
        },
        prepareContext: (resourceAndStatus, frameStatus) => {
            const macro = resourceAndStatus.resource;
            const status = resourceAndStatus.runningStatus;
            return ts_utils_1.withPromise(() => options.updateSelectedMacro(macro, status, frameStatus))
                .then(() => ts_utils_1.withPromise(() => options.restorePlayerState(macro, status, frameStatus)));
        },
        run: (resourceAndStatus, frameStatus) => {
            // Steps
            // * Update selected macro
            // * Restore commandResults
            // * Restore tcPlayer state
            // * Start to play
            const macro = resourceAndStatus.resource;
            const status = resourceAndStatus.runningStatus;
            return ts_utils_1.withPromise(() => options.playMacro(macro, status, frameStatus));
        }
    });
}
exports.createMacroCallStack = createMacroCallStack;


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(__webpack_require__(36));
const ts_utils_1 = __webpack_require__(18);
function parseKey(key) {
    return key.split('::').filter(s => s.length > 0);
}
exports.parseKey = parseKey;
class KeyValueData {
    constructor() {
        this.withOneLock = ts_utils_1.concurrent(1)((run) => {
            return new Promise((resolve, reject) => {
                try {
                    Promise.resolve(run()).then(resolve, reject);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    get(key) {
        const [mainKey, subKeys] = this.getMainKeyAndSubKeys(key);
        return storage_1.default.get(mainKey)
            .then((data = {}) => {
            const result = ts_utils_1.getIn(subKeys, data);
            return result;
        });
    }
    set(key, value) {
        return this.withOneLock(() => {
            const [mainKey, subKeys] = this.getMainKeyAndSubKeys(key);
            return storage_1.default.get(mainKey)
                .then((data = {}) => {
                const updated = ts_utils_1.safeSetIn(subKeys, value, data);
                return storage_1.default.set(mainKey, updated)
                    .then(() => ts_utils_1.getIn(subKeys, updated));
            });
        });
    }
    update(key, updater) {
        return this.withOneLock(() => {
            const [mainKey, subKeys] = this.getMainKeyAndSubKeys(key);
            return storage_1.default.get(mainKey)
                .then((data = {}) => {
                const updated = ts_utils_1.safeUpdateIn(subKeys, updater, data);
                return storage_1.default.set(mainKey, updated)
                    .then(() => ts_utils_1.getIn(subKeys, updated));
            });
        });
    }
    getMainKeyAndSubKeys(key) {
        const keys = parseKey(key);
        const mainKey = keys[0];
        const subKeys = keys.slice(1);
        return [mainKey, subKeys];
    }
}
exports.KeyValueData = KeyValueData;


/***/ }),

/***/ 141:
/***/ (function(module, exports) {


function removeFromArray(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}

var DataTransfer = function DataTransfer() {
  this.dataByFormat = {};

  this.dropEffect = 'none';
  this.effectAllowed = 'all';
  this.files = [];
  this.types = [];
};

DataTransfer.prototype.clearData = function (dataFormat) {
  if (dataFormat) {
    delete this.dataByFormat[dataFormat];
    removeFromArray(this.types, dataFormat);
  } else {
    this.dataByFormat = {};
    this.types = [];
  }
};

DataTransfer.prototype.getData = function (dataFormat) {
  return this.dataByFormat[dataFormat];
};

DataTransfer.prototype.setData = function (dataFormat, data) {
  this.dataByFormat[dataFormat] = data;

  if (this.types.indexOf(dataFormat) < 0) {
    this.types.push(dataFormat);
  }

  return true;
};

DataTransfer.prototype.setDragImage = function () {
  // don't do anything (the stub just makes sure there is no error thrown if someone tries to call the method)
};

module.exports = function () {
  // Note: in Firefox, window.DataTransfer exists, but it can't be used as constructor
  // In Firefox, `new window.DataTransfer()` throws errors like 'TypeError: Illegal constructor'
  if (window.DataTransfer) {
    try {
      var tmp = new window.DataTransfer();
      return window.DataTransfer;
    } catch (e) {}
  }

  return DataTransfer;
}();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MigrationJobType;
(function (MigrationJobType) {
    MigrationJobType["MigrateMacroTestSuiteToBrowserFileSystem"] = "20190401_macro_test_suite_to_browser_fs";
})(MigrationJobType = exports.MigrationJobType || (exports.MigrationJobType = {}));
var MigrationResult;
(function (MigrationResult) {
    MigrationResult[MigrationResult["AlreadyMigrated"] = 0] = "AlreadyMigrated";
    MigrationResult[MigrationResult["NotQualified"] = 1] = "NotQualified";
    MigrationResult[MigrationResult["Success"] = 2] = "Success";
    MigrationResult[MigrationResult["Error"] = 3] = "Error";
    MigrationResult[MigrationResult["JobUnknown"] = 4] = "JobUnknown";
})(MigrationResult = exports.MigrationResult || (exports.MigrationResult = {}));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(136);
const ts_utils_1 = __webpack_require__(18);
var MacroStatus;
(function (MacroStatus) {
    MacroStatus["Normal"] = "NORMAL";
    MacroStatus["Success"] = "SUCCESS";
    MacroStatus["Error"] = "ERROR";
})(MacroStatus = exports.MacroStatus || (exports.MacroStatus = {}));
class MacroExtraKeyValueData extends common_1.KeyValueData {
    getAll() {
        return super.get("");
    }
    getMainKeyAndSubKeys(key) {
        const [mainKey, subKeys] = super.getMainKeyAndSubKeys(key);
        return [
            MacroExtraKeyValueData.STORAGE_KEY,
            [mainKey].concat(subKeys).filter(x => x && x.length)
        ];
    }
}
MacroExtraKeyValueData.STORAGE_KEY = 'macro_extra';
exports.MacroExtraKeyValueData = MacroExtraKeyValueData;
exports.getMacroExtraKeyValueData = ts_utils_1.singletonGetter(() => new MacroExtraKeyValueData());


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export aesEncrypt */
/* unused harmony export aesDecrypt */
/* unused harmony export encrypt */
/* unused harmony export decrypt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return encryptIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decryptIfNeeded; });
/* harmony import */ var pbkdf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var pbkdf2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pbkdf2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);





var RAW_PREFIX = '@_KANTU_@';
var CIPHER_PREFIX = '__KANTU_ENCRYPTED__';
var RAW_PREFIX_REG = new RegExp('^' + RAW_PREFIX);
var CIPHER_PREFIX_REG = new RegExp('^' + CIPHER_PREFIX);

var getEncryptConfig = function getEncryptConfig() {
  return _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('config').then(function (config) {
    return {
      shouldEncrypt: config.shouldEncryptPassword === 'master_password',
      masterPassword: config.masterPassword
    };
  });
};

var aesEncrypt = function aesEncrypt(text, password) {
  var key = pbkdf2__WEBPACK_IMPORTED_MODULE_0___default.a.pbkdf2Sync(password, 'salt', 1, 256 / 8, 'sha512');
  var engine = new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.ModeOfOperation.ctr(key);

  return aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.hex.fromBytes(engine.encrypt(aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.utf8.toBytes(text)));
};

var aesDecrypt = function aesDecrypt(text, password) {
  var key = pbkdf2__WEBPACK_IMPORTED_MODULE_0___default.a.pbkdf2Sync(password, 'salt', 1, 256 / 8, 'sha512');
  var engine = new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.ModeOfOperation.ctr(key);

  return aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.utf8.fromBytes(engine.decrypt(aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.hex.toBytes(text)));
};

var encrypt = function encrypt(text) {
  return getEncryptConfig().then(function (_ref) {
    var shouldEncrypt = _ref.shouldEncrypt,
        masterPassword = _ref.masterPassword;

    if (!shouldEncrypt) return text;
    return '' + CIPHER_PREFIX + aesEncrypt(RAW_PREFIX + text, masterPassword);
  });
};

var decrypt = function decrypt(text) {
  return getEncryptConfig().then(function (_ref2) {
    var shouldEncrypt = _ref2.shouldEncrypt,
        masterPassword = _ref2.masterPassword;

    if (!shouldEncrypt) return text;
    var raw = aesDecrypt(text.replace(CIPHER_PREFIX_REG, ''), masterPassword);
    if (raw.indexOf(RAW_PREFIX) !== 0) throw new Error('Wrong master password');
    return raw.replace(RAW_PREFIX_REG, '');
  }).catch(function (e) {
    throw new Error('password string invalid');
  });
};

var encryptIfNeeded = function encryptIfNeeded(text, dom) {
  if (dom && dom.tagName.toUpperCase() === 'INPUT' && dom.type === 'password') {
    return encrypt(text);
  }

  return Promise.resolve(text);
};

var decryptIfNeeded = function decryptIfNeeded(text, dom) {
  if (CIPHER_PREFIX_REG.test(text) && dom && dom.tagName.toUpperCase() === 'INPUT' && dom.type === 'password') {
    return decrypt(text);
  }

  return Promise.resolve(text);
};

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INSPECTOR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RECORDER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PLAYER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PLAYER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONTENT_SCRIPT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TEST_CASE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LAST_SCREENSHOT_FILE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LAST_DESKTOP_SCREENSHOT_FILE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UNTITLED_ID; });

var mk = function mk(list) {
  return list.reduce(function (prev, key) {
    prev[key] = key;
    return prev;
  }, {});
};

var APP_STATUS = mk(['NORMAL', 'INSPECTOR', 'RECORDER', 'PLAYER']);

var INSPECTOR_STATUS = mk(['PENDING', 'INSPECTING', 'STOPPED']);

var RECORDER_STATUS = mk(['PENDING', 'RECORDING', 'STOPPED']);

var PLAYER_STATUS = mk(['PLAYING', 'PAUSED', 'STOPPED']);

var PLAYER_MODE = mk(['TEST_CASE', 'TEST_SUITE']);

var CONTENT_SCRIPT_STATUS = mk(['NORMAL', 'RECORDING', 'INSPECTING', 'PLAYING']);

var TEST_CASE_STATUS = mk(['NORMAL', 'SUCCESS', 'ERROR']);

var LAST_SCREENSHOT_FILE_NAME = '__lastscreenshot';

var LAST_DESKTOP_SCREENSHOT_FILE_NAME = '__last_desktop_screenshot';

var UNTITLED_ID = '__untitled__';

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommandRunningStatus;
(function (CommandRunningStatus) {
    CommandRunningStatus[CommandRunningStatus["Pending"] = 0] = "Pending";
    CommandRunningStatus[CommandRunningStatus["Success"] = 1] = "Success";
    CommandRunningStatus[CommandRunningStatus["Failure"] = 2] = "Failure";
})(CommandRunningStatus = exports.CommandRunningStatus || (exports.CommandRunningStatus = {}));
var MacroStatus;
(function (MacroStatus) {
    MacroStatus[MacroStatus["Idle"] = 0] = "Idle";
    MacroStatus[MacroStatus["Running"] = 1] = "Running";
    MacroStatus[MacroStatus["Calling"] = 2] = "Calling";
    MacroStatus[MacroStatus["Finished"] = 3] = "Finished";
    MacroStatus[MacroStatus["Error"] = 4] = "Error";
})(MacroStatus = exports.MacroStatus || (exports.MacroStatus = {}));
function getCommandResults(data) {
    const { doneIndices, errorIndices, count } = data;
    const result = [];
    for (let i = 0; i < count; i++) {
        if (doneIndices.indexOf(i) !== -1) {
            result.push(CommandRunningStatus.Success);
        }
        else if (errorIndices.indexOf(i) !== -1) {
            result.push(CommandRunningStatus.Failure);
        }
        else {
            result.push(CommandRunningStatus.Pending);
        }
    }
    return result;
}
exports.getCommandResults = getCommandResults;
function getDoneErrorIndices(commandResults) {
    const doneIndices = [];
    const errorIndices = [];
    commandResults.forEach((r, i) => {
        switch (r) {
            case CommandRunningStatus.Failure:
                return errorIndices.push(i);
            case CommandRunningStatus.Success:
                return doneIndices.push(i);
        }
    });
    return {
        doneIndices,
        errorIndices,
        count: commandResults.length
    };
}
exports.getDoneErrorIndices = getDoneErrorIndices;


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ipc_bg_cs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);


var throwNotTop = function throwNotTop() {
  throw new Error('You are not a top window, not allowed to initialize/use csIpc');
};

// Note: csIpc is only available to top window
var ipc = window.top === window ? Object(_ipc_bg_cs__WEBPACK_IMPORTED_MODULE_0__["csInit"])() : {
  ask: throwNotTop,
  send: throwNotTop,
  onAsk: throwNotTop,
  destroy: throwNotTop

  // Note: one ipc singleton per content script
};/* harmony default export */ __webpack_exports__["a"] = (ipc);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(4);
exports.getStyle = function (dom) {
    if (!dom)
        throw new Error('getStyle: dom does not exist');
    return getComputedStyle(dom);
};
exports.setStyle = function (dom, style) {
    if (!dom)
        throw new Error('setStyle: dom does not exist');
    for (var i = 0, keys = Object.keys(style), len = keys.length; i < len; i++) {
        dom.style[keys[i]] = style[keys[i]];
    }
    return dom;
};
exports.pixel = function (num) {
    if ((num + '').indexOf('px') !== -1)
        return num;
    return (num || 0) + 'px';
};
exports.bindDrag = (options) => {
    const { onDragStart, onDragEnd, onDrag, $el, preventGlobalClick = true, doc = document } = options;
    let isDragging = false;
    let startPos = { x: 0, y: 0 };
    const onMouseDown = (e) => {
        isDragging = true;
        startPos = { x: e.screenX, y: e.screenY };
        onDragStart(e);
    };
    const onMouseUp = (e) => {
        if (!isDragging)
            return;
        isDragging = false;
        const dx = e.screenX - startPos.x;
        const dy = e.screenY - startPos.y;
        onDragEnd(e, { dx, dy });
    };
    const onMouseMove = (e) => {
        if (!isDragging)
            return;
        const dx = e.screenX - startPos.x;
        const dy = e.screenY - startPos.y;
        onDrag(e, { dx, dy });
        e.preventDefault();
        e.stopPropagation();
    };
    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    if (preventGlobalClick) {
        doc.addEventListener('click', onClick, true);
    }
    doc.addEventListener('mousemove', onMouseMove, true);
    doc.addEventListener('mouseup', onMouseUp, true);
    $el.addEventListener('mousedown', onMouseDown, true);
    return () => {
        doc.removeEventListener('click', onClick, true);
        doc.removeEventListener('mousemove', onMouseMove, true);
        doc.removeEventListener('mouseup', onMouseUp, true);
        $el.removeEventListener('mousedown', onMouseDown, true);
    };
};
exports.bindContentEditableChange = (options) => {
    const { onChange, doc = document } = options;
    let currentCE = null;
    let oldContent = null;
    const onFocus = (e) => {
        if (!e.target || e.target.contentEditable !== 'true')
            return;
        currentCE = e.target;
        oldContent = currentCE.innerHTML;
    };
    const onBlur = (e) => {
        if (e.target !== currentCE) {
            // Do nothing
        }
        else if (currentCE && currentCE.innerHTML !== oldContent) {
            onChange(e);
        }
        currentCE = null;
        oldContent = null;
    };
    doc.addEventListener('focus', onFocus, true);
    doc.addEventListener('blur', onBlur, true);
    return () => {
        doc.removeEventListener('focus', onFocus, true);
        doc.removeEventListener('blur', onBlur, true);
    };
};
exports.scrollLeft = function (document) {
    return document.documentElement.scrollLeft;
};
exports.scrollTop = function (document) {
    return document.documentElement.scrollTop;
};
exports.domText = ($dom) => {
    const it = $dom.innerText && $dom.innerText.trim();
    const tc = $dom.textContent;
    const pos = tc.toUpperCase().indexOf(it.toUpperCase());
    return tc.substr(pos, it.length);
};
exports.isVisible = function (el) {
    if (el === window.document)
        return true;
    if (!el)
        return true;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.opacity === '0' || style.visibility === 'hidden')
        return false;
    return exports.isVisible(el.parentNode);
};
exports.cssSelector = function (dom) {
    if (!dom)
        return '';
    if (dom.nodeType !== 1)
        return '';
    if (dom.tagName === 'BODY')
        return 'body';
    if (dom.id)
        return '#' + dom.id;
    var classes = dom.className.split(/\s+/g)
        .filter(function (item) {
        return item && item.length;
    });
    var children = Array.from(dom.parentNode ? dom.parentNode.childNodes : [])
        .filter(function ($el) {
        return $el.nodeType === 1;
    });
    var sameTag = children.filter(function ($el) {
        return $el.tagName === dom.tagName;
    });
    var sameClass = children.filter(function ($el) {
        var cs = $el.className.split(/\s+/g);
        return utils_1.and(...classes.map(function (c) {
            return cs.indexOf(c) !== -1;
        }));
    });
    var extra = '';
    if (sameTag.length === 1) {
        extra = '';
    }
    else if (classes.length && sameClass.length === 1) {
        extra = '.' + classes.join('.');
    }
    else {
        extra = ':nth-child(' + (1 + children.findIndex(function (item) { return item === dom; })) + ')';
    }
    var me = dom.tagName.toLowerCase() + extra;
    // Note: browser will add an extra 'tbody' when tr directly in table, which will cause an wrong selector,
    // so the hack is to remove all tbody here
    var ret = exports.cssSelector(dom.parentNode) + ' > ' + me;
    return ret;
    // return ret.replace(/\s*>\s*tbody\s*>?/g, ' ')
};
exports.isPositionFixed = ($dom) => {
    if (!$dom || $dom === document.documentElement || $dom === document.body)
        return false;
    return getComputedStyle($dom)['position'] === 'fixed' || exports.isPositionFixed($dom.parentNode);
};
exports.offset = function (dom) {
    if (!dom)
        return { left: 0, top: 0 };
    var rect = dom.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
};
function accurateOffset(dom) {
    if (!dom)
        return { left: 0, top: 0 };
    const doc = dom.ownerDocument;
    if (!doc || dom === doc.documentElement)
        return { left: 0, top: 0 };
    const parentOffset = accurateOffset(dom.offsetParent);
    return {
        left: parentOffset.left + dom.offsetLeft,
        top: parentOffset.top + dom.offsetTop
    };
}
exports.accurateOffset = accurateOffset;
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const $img = new Image();
        $img.onload = () => {
            resolve({
                $img,
                width: $img.width,
                height: $img.height
            });
        };
        $img.onerror = (e) => {
            reject(e);
        };
        $img.src = url;
    });
}
exports.preloadImage = preloadImage;
function isFirefox() {
    return /Firefox/.test(window.navigator.userAgent);
}
exports.isFirefox = isFirefox;
function svgNodetoString(svgNode) {
    return svgNode.outerHTML;
}
exports.svgNodetoString = svgNodetoString;
function svgToBase64(str) {
    return 'data:image/svg+xml;base64,' + window.btoa(str);
}
exports.svgToBase64 = svgToBase64;
function canvasFromSVG(str) {
    return new Promise((resolve, reject) => {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = document.createElement('img');
        const b64 = svgToBase64(str);
        const mw = str.match(/<svg[\s\S]*?width="(.*?)"/m);
        const mh = str.match(/<svg[\s\S]*?height="(.*?)"/m);
        const w = parseInt(mw[1], 10);
        const h = parseInt(mh[1], 10);
        img.src = b64;
        img.onload = function () {
            c.width = w;
            c.height = h;
            ctx.drawImage(img, 0, 0, w, h);
            resolve(c);
        };
        img.onerror = function (e) {
            reject(e);
        };
    });
}
exports.canvasFromSVG = canvasFromSVG;
function imageBlobFromSVG(str, mimeType = 'image/png', quality) {
    return canvasFromSVG(str)
        .then(canvas => {
        const p = new Promise((resolve, reject) => {
            try {
                canvas.toBlob(resolve, mimeType, quality);
            }
            catch (e) {
                reject(e);
            }
        });
        return p;
    });
}
exports.imageBlobFromSVG = imageBlobFromSVG;
function imageDataFromUrl(url) {
    return preloadImage(url)
        .then(({ $img, width, height }) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        context.drawImage($img, 0, 0, width, height);
        return context.getImageData(0, 0, width, height);
    });
}
exports.imageDataFromUrl = imageDataFromUrl;
function subImage(imageUrl, rect) {
    return new Promise((resolve, reject) => {
        const $img = new Image();
        $img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = rect.width;
            canvas.height = rect.height;
            const context = canvas.getContext('2d');
            context.drawImage($img, 0, 0, $img.width, $img.height, -1 * rect.x, -1 * rect.y, $img.width, $img.height);
            resolve(canvas.toDataURL());
        };
        $img.src = imageUrl;
    });
}
exports.subImage = subImage;
function scaleRect(rect, scale) {
    return {
        x: scale * rect.x,
        y: scale * rect.y,
        width: scale * rect.width,
        height: scale * rect.height,
    };
}
exports.scaleRect = scaleRect;


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(143);
const indexeddb_storage_1 = __webpack_require__(461);
const storage_1 = __webpack_require__(13);
const macro_extra_data_1 = __webpack_require__(144);
const filesystem_1 = __importDefault(__webpack_require__(297));
const backup_1 = __importDefault(__webpack_require__(321));
const ts_utils_1 = __webpack_require__(18);
class MigrateMacroTestSuiteToBrowserFileSystem {
    constructor() {
        this.oldMacros = [];
    }
    getMeta() {
        return {
            createdAt: new Date('2019-04-01').getTime(),
            goal: [
                `Migrate macros and test suites from indexedDB storage to Browser File System storage`,
                `In order to prepare for an easy support for deep folder structure`,
                `Note: the old indexedDB storage WILL NOT be cleared, just in case any user loses his data during migration`,
                `The real clean up could be done in future releases, in the form of another migration job`
            ].join('. ')
        };
    }
    getType() {
        return types_1.MigrationJobType.MigrateMacroTestSuiteToBrowserFileSystem;
    }
    previousVersionRange() {
        return '<=4.0.1';
    }
    shouldMigrate() {
        const oldMacroStorage = this.getOldMacroStorage();
        const oldTestSuiteStorage = this.getOldTestSuiteStorage();
        return Promise.all([
            oldMacroStorage.list().then((list) => list.length),
            oldTestSuiteStorage.list().then((list) => list.length)
        ])
            .then(([macroCount, testSuiteCount]) => {
            return macroCount > 0 || testSuiteCount > 0;
        });
    }
    migrate() {
        const migrateMacros = () => {
            return this.getOldMacroStorage().readAll()
                .then((fileObjs) => {
                console.log('this.getOldMacroStorage().readAll()', fileObjs);
                this.oldMacros = fileObjs.map((obj) => obj.content);
                return filesystem_1.default.ensureDirectory('/macros')
                    .then(() => this.getNewMacroStorage().bulkWrite(fileObjs));
            })
                .then(() => true);
        };
        const migrateTestSuites = () => {
            return this.getOldTestSuiteStorage().readAll()
                .then((fileObjs) => {
                console.log('this.getOldTestSuiteStorage().readAll()', fileObjs);
                return filesystem_1.default.ensureDirectory('/testsuites')
                    .then(() => this.getNewTestSuiteStorage().bulkWrite(fileObjs));
            })
                .then(() => true);
        };
        const migrateMacroExtra = () => {
            return macro_extra_data_1.getMacroExtraKeyValueData().getAll()
                .then((allMacroExtra) => {
                this.oldMacros.forEach(macro => {
                    const newId = this.getNewMacroStorage().filePath(macro.name);
                    const oldId = macro.id;
                    if (allMacroExtra[oldId]) {
                        allMacroExtra[newId] = allMacroExtra[oldId];
                    }
                });
                return macro_extra_data_1.getMacroExtraKeyValueData().set('', allMacroExtra);
            });
        };
        return migrateMacros()
            .then(() => migrateTestSuites())
            .then(() => migrateMacroExtra())
            .then(() => true);
    }
    remedy() {
        // Download the old macros and test suites in zip
        const readOldMacros = () => {
            return this.getOldMacroStorage().readAll()
                .then((fileObjs) => {
                this.oldMacros = fileObjs.map((obj) => obj.content);
                return this.oldMacros;
            });
        };
        const readOldTestSuites = () => {
            return this.getOldTestSuiteStorage().readAll()
                .then((fileObjs) => {
                return fileObjs.map((obj) => obj.content);
            });
        };
        return readOldMacros()
            .then(macros => {
            return readOldTestSuites()
                .then(testSuites => {
                return backup_1.default({
                    backup: {
                        testCase: true,
                        testSuite: true
                    },
                    testCases: macros,
                    testSuites: testSuites
                });
            });
        });
    }
    getOldMacroStorage() {
        return indexeddb_storage_1.getIndexeddbFlatStorage({
            table: 'testCases'
        });
    }
    getOldTestSuiteStorage() {
        return indexeddb_storage_1.getIndexeddbFlatStorage({
            table: 'testSuites'
        });
    }
    getNewMacroStorage() {
        return this.getStorageManager().getStorageForTarget(storage_1.StorageTarget.Macro, storage_1.StorageStrategyType.Browser);
    }
    getNewTestSuiteStorage() {
        return this.getStorageManager().getStorageForTarget(storage_1.StorageTarget.TestSuite, storage_1.StorageStrategyType.Browser);
    }
    getStorageManager() {
        return new storage_1.StorageManager(storage_1.StorageStrategyType.Browser, {
            getMacros: () => this.oldMacros,
            getMaxMacroCount: () => Promise.resolve(Infinity)
        });
    }
}
exports.MigrateMacroTestSuiteToBrowserFileSystem = MigrateMacroTestSuiteToBrowserFileSystem;
exports.getMigrateMacroTestSuiteToBrowserFileSystem = ts_utils_1.singletonGetter(() => {
    return new MigrateMacroTestSuiteToBrowserFileSystem();
});


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __languages = {
    ara: {
        "lang": "ara",
        "name": "Arabic",
        "short": "AR"
    },
    chs: {
        "lang": "chs",
        "name": "ChineseSimplified",
        "short": "简"
    },
    cht: {
        "lang": "cht",
        "name": "ChineseTraditional",
        "short": "繁"
    },
    ce: {
        "lang": "ce",
        "name": "Czech",
        "short": "CS"
    },
    dan: {
        "lang": "dan",
        "name": "Danish",
        "short": "DA"
    },
    dut: {
        "lang": "dut",
        "name": "Dutch",
        "short": "NL"
    },
    eng: {
        "lang": "eng",
        "name": "English",
        "short": "EN"
    },
    fin: {
        "lang": "fin",
        "name": "Finnish",
        "short": "FI"
    },
    fre: {
        "lang": "fre",
        "name": "French",
        "short": "FR"
    },
    ger: {
        "lang": "ger",
        "name": "German",
        "short": "DE"
    },
    gre: {
        "lang": "gre",
        "name": "Greek",
        "short": "EL"
    },
    hun: {
        "lang": "hun",
        "name": "Hungarian",
        "short": "HU"
    },
    ita: {
        "lang": "ita",
        "name": "Italian",
        "short": "IT"
    },
    jpn: {
        "lang": "jpn",
        "name": "Japanese",
        "short": "JP"
    },
    kor: {
        "lang": "kor",
        "name": "Korean",
        "short": "KO"
    },
    nor: {
        "lang": "nor",
        "name": "Norwegian",
        "short": "NN"
    },
    pol: {
        "lang": "pol",
        "name": "Polish",
        "short": "PL"
    },
    por: {
        "lang": "por",
        "name": "Portuguese",
        "short": "PT"
    },
    rus: {
        "lang": "rus",
        "name": "Russian",
        "short": "RU"
    },
    spa: {
        "lang": "spa",
        "name": "Spanish",
        "short": "ES"
    },
    swe: {
        "lang": "swe",
        "name": "Swedish",
        "short": "SV"
    },
    tur: {
        "lang": "tur",
        "name": "Turkish",
        "short": "TR"
    }
};
exports.languages = __languages;
function isValidOCRLanguage(lang) {
    return typeof lang === 'string' && !!__languages[lang.toLowerCase()];
}
exports.isValidOCRLanguage = isValidOCRLanguage;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(__webpack_require__(36));
const persistent_counter_1 = __webpack_require__(993);
const ts_utils_1 = __webpack_require__(18);
const log_1 = __importDefault(__webpack_require__(11));
const STORAGE_KEY = 'OCR_CONVERSIONS_PER_DAY';
const today = () => {
    const d = new Date();
    return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        date: d.getDate()
    };
};
const isSameDay = (a, b) => {
    return a.year === b.year &&
        a.month === b.month &&
        a.date === b.date;
};
exports.getOcrCommandCounter = ts_utils_1.singletonGetter((options) => {
    const read = () => {
        log_1.default('getOcrCommandCounter - read');
        return storage_1.default.get(STORAGE_KEY)
            .then((val) => {
            if (!val)
                return options.initial;
            if (!isSameDay(today(), val.day))
                return options.initial;
            return val.count;
        });
    };
    const write = (n) => {
        log_1.default('getOcrCommandCounter - write', n);
        return storage_1.default.set(STORAGE_KEY, {
            day: today(),
            count: n
        })
            .then(() => { });
    };
    return new persistent_counter_1.PersistentCounter(Object.assign({}, options, { read,
        write }));
});


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(136);
const ts_utils_1 = __webpack_require__(18);
const config_1 = __importDefault(__webpack_require__(33));
class OcrServerKeyValueData extends common_1.KeyValueData {
    getAll() {
        return super.get("").then(data => data || {});
    }
    getMainKeyAndSubKeys(key) {
        const [mainKey, subKeys] = super.getMainKeyAndSubKeys(key);
        return [
            OcrServerKeyValueData.STORAGE_KEY,
            [mainKey].concat(subKeys).filter(x => x && x.length)
        ];
    }
}
OcrServerKeyValueData.STORAGE_KEY = 'ocr_server_data';
exports.OcrServerKeyValueData = OcrServerKeyValueData;
exports.getOcrServerKeyValueData = ts_utils_1.singletonGetter(() => new OcrServerKeyValueData());
class OcrEndpointPicker {
    constructor(options) {
        this.servers = options.servers;
        this.resetTime = options.resetTime;
        this.lastId = null;
    }
    all() {
        return Promise.resolve(this.servers);
    }
    isAllDown() {
        return this.validServers()
            .then(({ servers }) => {
            return servers.length === 0;
        });
    }
    randomPick() {
        return this.validServers()
            .then(({ servers, serverInfos }) => {
            return servers[randomIndex(servers.length)];
        });
    }
    bestPick() {
        return this.validServers()
            .then(({ servers, serverInfos }) => {
            const getTime = (server) => {
                return serverInfos[server.id] ? serverInfos[server.id].lastTotalMilliseconds : 0;
            };
            return servers.reduce((prev, server) => {
                if (!prev)
                    return server;
                // Note: These two lines are used to avoid using the same endpoint on two consecutive runs
                // That's not what we want at this comment, so comment it out
                //
                // if (prev.id === this.lastId)    return server
                // if (server.id === this.lastId)  return prev
                const timeA = getTime(prev);
                const timeB = getTime(server);
                switch (Math.sign(timeA - timeB)) {
                    case 0: return Math.random() > 0.5 ? prev : server;
                    case 1: return server;
                    case -1:
                    default: return prev;
                }
            });
        });
    }
    reset() {
        // Note: reset server sanity to null when all servers are down,
        // so that it will check all servers again on next request
        return ts_utils_1.flow(...this.servers.map(server => {
            return () => exports.getOcrServerKeyValueData().set(server.id, null);
        }))
            .then(() => { });
    }
    use(id) {
        const found = this.servers.find(item => item.id === id);
        if (!found)
            throw new Error(`No server found with id '${id}'`);
        this.lastId = id;
    }
    report(id, sanityInfo) {
        return exports.getOcrServerKeyValueData().set(id, sanityInfo)
            .then(() => true);
    }
    validServers() {
        return exports.getOcrServerKeyValueData().getAll()
            .then(serverInfos => {
            const now = new Date().getTime();
            const servers = this.servers.filter(server => {
                const info = serverInfos[server.id];
                if (!info)
                    return true;
                if (now - info.lastResponseTimestamp > this.resetTime)
                    return true;
                if (info.lastError)
                    return false;
                return info.lastTotalMilliseconds <= config_1.default.ocr.apiHealthyResponseTime;
            });
            if (servers.length === 0) {
                throw new Error('All OCR servers are down');
            }
            return {
                servers,
                serverInfos
            };
        });
    }
}
exports.OcrEndpointPicker = OcrEndpointPicker;
function randomIndex(count) {
    return Math.round(Math.random() * count);
}
exports.randomIndex = randomIndex;
exports.getOcrEndpointPicker = ts_utils_1.singletonGetter(() => {
    return new OcrEndpointPicker({
        servers: config_1.default.ocr.apiList,
        resetTime: config_1.default.ocr.resetTime
    });
});


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodTypeInvocationNames = [
    'get_version',
    'get_desktop_dpi',
    'get_image_info',
    'capture_desktop',
    'search_image',
    'search_desktop',
    'get_max_file_range',
    'get_file_size',
    'read_file_range'
];


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const native_host_1 = __webpack_require__(131);
class KantuCVHost extends native_host_1.NativeMessagingHost {
    constructor() {
        super(KantuCVHost.HOST_NAME);
    }
}
KantuCVHost.HOST_NAME = "com.a9t9.kantu.cv";
exports.KantuCVHost = KantuCVHost;


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var base64;
(function (base64) {
    // prettier-ignore
    const encodingTable = new Uint8Array([
        65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
    ]);
    // prettier-ignore
    const decodingTable = new Uint8Array([
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    ]);
    const paddingChar = 61;
    function calculateEncodedLength(length) {
        let result = (length / 3) * 4;
        result += length % 3 != 0 ? 4 : 0;
        return result;
    }
    function readWord(input, i, maxLength) {
        if (maxLength > 4) {
            throw new Error("maxLength should be in range [0, 4].");
        }
        const t = new Uint8Array(4);
        for (let k = 0; k < maxLength; ++k) {
            const c = input.charCodeAt(i + k);
            const b = decodingTable[c];
            if (b === 0xff) {
                return undefined;
            }
            t[k] = b;
        }
        return ((t[0] << (3 * 6)) +
            (t[1] << (2 * 6)) +
            (t[2] << (1 * 6)) +
            (t[3] << (0 * 6)));
    }
    function writeWord(output, i, triple) {
        output[i + 0] = (triple >> 16) & 0xff;
        output[i + 1] = (triple >> 8) & 0xff;
        output[i + 2] = triple & 0xff;
    }
    function encode(input) {
        const inLen = input.length;
        const outLen = calculateEncodedLength(inLen);
        const lengthMod3 = inLen % 3;
        const calcLength = inLen - lengthMod3;
        const output = new Uint8Array(outLen);
        let i;
        let j = 0;
        for (i = 0; i < calcLength; i += 3) {
            output[j + 0] = encodingTable[(input[i] & 0xfc) >> 2];
            output[j + 1] =
                encodingTable[((input[i] & 0x03) << 4) | ((input[i + 1] & 0xf0) >> 4)];
            output[j + 2] =
                encodingTable[((input[i + 1] & 0x0f) << 2) | ((input[i + 2] & 0xc0) >> 6)];
            output[j + 3] = encodingTable[input[i + 2] & 0x3f];
            j += 4;
        }
        i = calcLength;
        switch (lengthMod3) {
            case 2: // One character padding needed
                output[j + 0] = encodingTable[(input[i] & 0xfc) >> 2];
                output[j + 1] =
                    encodingTable[((input[i] & 0x03) << 4) | ((input[i + 1] & 0xf0) >> 4)];
                output[j + 2] = encodingTable[(input[i + 1] & 0x0f) << 2];
                output[j + 3] = paddingChar;
                j += 4;
                break;
            case 1: // Two character padding needed
                output[j + 0] = encodingTable[(input[i] & 0xfc) >> 2];
                output[j + 1] = encodingTable[(input[i] & 0x03) << 4];
                output[j + 2] = paddingChar;
                output[j + 3] = paddingChar;
                j += 4;
                break;
        }
        const decoder = new TextDecoder("ascii");
        return decoder.decode(output);
    }
    base64.encode = encode;
    function decode(input) {
        const inLen = input.length;
        if (inLen % 4 != 0) {
            return undefined;
        }
        let padding = 0;
        if (inLen > 0 && input.charCodeAt(inLen - 1) == paddingChar) {
            ++padding;
            if (inLen > 1 && input.charCodeAt(inLen - 2) == paddingChar) {
                ++padding;
            }
        }
        const encodedLen = inLen - padding;
        const completeLen = encodedLen & ~3;
        const outLen = (6 * inLen) / 8 - padding;
        const output = new Uint8Array(outLen);
        let triple;
        let i = 0;
        let j = 0;
        while (i < completeLen) {
            triple = readWord(input, i, 4);
            if (typeof triple === "undefined") {
                return undefined;
            }
            writeWord(output, j, triple);
            i += 4;
            j += 3;
        }
        if (padding > 0) {
            triple = readWord(input, i, 4 - padding);
            if (typeof triple === "undefined") {
                return undefined;
            }
            switch (padding) {
                case 1:
                    output[j + 0] = (triple >> 16) & 0xff;
                    output[j + 1] = (triple >> 8) & 0xff;
                    break;
                case 2:
                    output[j + 0] = (triple >> 16) & 0xff;
                    break;
            }
        }
        return output;
    }
    base64.decode = decode;
})(base64 = exports.base64 || (exports.base64 = {}));


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var eventFactory = __webpack_require__(314),
    DataTransfer = __webpack_require__(141);

function _noop() {}

function parseParams(targetElement, eventProperties, configCallback) {
  if (typeof eventProperties === 'function') {
    configCallback = eventProperties;
    eventProperties = null;
  }

  if (!targetElement || (typeof targetElement === 'undefined' ? 'undefined' : _typeof(targetElement)) !== 'object') {
    throw new Error('Expected first parameter to be a targetElement. Instead got: ' + targetElement);
  }

  return {
    targetElement: targetElement,
    eventProperties: eventProperties || {},
    configCallback: configCallback || _noop
  };
}

function customizeEvent(event, configCallback, isPrimaryEvent) {
  if (configCallback) {
    // call configCallback only for the primary event if the callback takes less than two arguments
    if (configCallback.length < 2) {
      if (isPrimaryEvent) {
        configCallback(event);
      }
    }
    // call configCallback for each event if the callback takes two arguments
    else {
        configCallback(event, event.type);
      }
  }
}

function createAndDispatchEvents(targetElement, eventNames, primaryEventName, dataTransfer, eventProperties, configCallback) {
  eventNames.forEach(function (eventName) {
    var event = eventFactory.createEvent(eventName, eventProperties, dataTransfer);
    var isPrimaryEvent = eventName === primaryEventName;

    customizeEvent(event, configCallback, isPrimaryEvent);

    targetElement.dispatchEvent(event);
  });
}

var DragDropAction = function DragDropAction() {
  this.lastDragSource = null;
  this.lastDataTransfer = null;
  this.pendingActionsQueue = [];
};

DragDropAction.prototype._queue = function (fn) {
  this.pendingActionsQueue.push(fn);

  if (this.pendingActionsQueue.length === 1) {
    this._queueExecuteNext();
  }
};

DragDropAction.prototype._queueExecuteNext = function () {
  if (this.pendingActionsQueue.length === 0) {
    return;
  }

  var self = this;
  var firstPendingAction = this.pendingActionsQueue[0];

  var doneCallback = function doneCallback() {
    self.pendingActionsQueue.shift();
    self._queueExecuteNext();
  };

  if (firstPendingAction.length === 0) {
    firstPendingAction.call(this);
    doneCallback();
  } else {
    firstPendingAction.call(this, doneCallback);
  }
};

DragDropAction.prototype.dragStart = function (targetElement, eventProperties, configCallback) {
  var params = parseParams(targetElement, eventProperties, configCallback),
      events = ['mousedown', 'dragstart', 'drag'],
      dataTransfer = new DataTransfer();

  this._queue(function () {
    createAndDispatchEvents(params.targetElement, events, 'drag', dataTransfer, params.eventProperties, params.configCallback);

    this.lastDragSource = targetElement;
    this.lastDataTransfer = dataTransfer;
  });

  return this;
};

DragDropAction.prototype.dragEnter = function (overElement, eventProperties, configCallback) {
  var params = parseParams(overElement, eventProperties, configCallback),
      events = ['mousemove', 'mouseover', 'dragenter'];

  this._queue(function () {
    createAndDispatchEvents(params.targetElement, events, 'dragenter', this.lastDataTransfer, params.eventProperties, params.configCallback);
  });

  return this;
};

DragDropAction.prototype.dragOver = function (overElement, eventProperties, configCallback) {
  var params = parseParams(overElement, eventProperties, configCallback),
      events = ['mousemove', 'mouseover', 'dragover'];

  this._queue(function () {
    createAndDispatchEvents(params.targetElement, events, 'drag', this.lastDataTransfer, params.eventProperties, params.configCallback);
  });

  return this;
};

DragDropAction.prototype.dragLeave = function (overElement, eventProperties, configCallback) {
  var params = parseParams(overElement, eventProperties, configCallback),
      events = ['mousemove', 'mouseover', 'dragleave'];

  this._queue(function () {
    createAndDispatchEvents(params.targetElement, events, 'dragleave', this.lastDataTransfer, params.eventProperties, params.configCallback);
  });

  return this;
};

DragDropAction.prototype.drop = function (targetElement, eventProperties, configCallback) {
  var params = parseParams(targetElement, eventProperties, configCallback);
  var eventsOnDropTarget = ['mousemove', 'mouseup', 'drop'];
  var eventsOnDragSource = ['dragend'];

  this._queue(function () {
    createAndDispatchEvents(params.targetElement, eventsOnDropTarget, 'drop', this.lastDataTransfer, params.eventProperties, params.configCallback);

    if (this.lastDragSource) {
      // trigger dragend event on last drag source element
      createAndDispatchEvents(this.lastDragSource, eventsOnDragSource, 'drop', this.lastDataTransfer, params.eventProperties, params.configCallback);
    }
  });

  return this;
};

DragDropAction.prototype.then = function (callback) {
  this._queue(function () {
    callback.call(this);
  }); // make sure _queue() is given a callback with no arguments

  return this;
};

DragDropAction.prototype.delay = function (waitingTimeMs) {
  this._queue(function (done) {
    window.setTimeout(done, waitingTimeMs);
  });

  return this;
};

module.exports = DragDropAction;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {


var DataTransfer = __webpack_require__(141);

var dataTransferEvents = ['drag', 'dragstart', 'dragenter', 'dragover', 'dragend', 'drop', 'dragleave'];

function mergeInto(destObj, srcObj) {
  for (var key in srcObj) {
    if (!srcObj.hasOwnProperty(key)) {
      continue;
    } // ignore inherited properties

    destObj[key] = srcObj[key];
  }

  return destObj;
}

function isFirefox() {
  return (/Firefox/.test(window.navigator.userAgent)
  );
}

function createModernEvent(eventName, eventType, eventProperties) {
  // if (eventType === 'DragEvent') { eventType = 'CustomEvent'; }     // Firefox fix (since FF does not allow us to override dataTransfer)

  var constructor = window[eventType];
  var options = { view: window, bubbles: true, cancelable: true };

  mergeInto(options, eventProperties);

  var event = new constructor(eventName, options);

  mergeInto(event, eventProperties);

  return event;
}

function createLegacyEvent(eventName, eventType, eventProperties) {
  var event;

  switch (eventType) {
    case 'MouseEvent':
      event = document.createEvent('MouseEvent');
      event.initEvent(eventName, true, true);
      break;

    default:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, 0);
  }

  // copy eventProperties into event
  if (eventProperties) {
    mergeInto(event, eventProperties);
  }

  return event;
}

function _createEvent(eventName, eventType, eventProperties) {
  if (isFirefox()) {
    return createLegacyEvent(eventName, eventType, eventProperties);
  }

  try {
    return createModernEvent(eventName, eventType, eventProperties);
  } catch (error) {
    return createLegacyEvent(eventName, eventType, eventProperties);
  }
}

var EventFactory = {
  createEvent: function createEvent(eventName, eventProperties, dataTransfer) {
    var eventType = 'CustomEvent';

    if (eventName.match(/^mouse/)) {
      eventType = 'MouseEvent';
    } else if (eventName.match(/^(drag|drop)/)) {
      eventType = 'DragEvent';
    }

    if (dataTransferEvents.indexOf(eventName) > -1) {
      eventProperties.dataTransfer = dataTransfer || new DataTransfer();
    }

    var event = _createEvent(eventName, eventType, eventProperties);

    return event;
  }
};

module.exports = EventFactory;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return backup; });
/* harmony import */ var _lib_file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _lib_file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _convert_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _convert_suite_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_services_storage__WEBPACK_IMPORTED_MODULE_5__);







function backup(_ref) {
  var backup = _ref.backup,
      testCases = _ref.testCases,
      testSuites = _ref.testSuites,
      screenshots = _ref.screenshots,
      csvs = _ref.csvs,
      visions = _ref.visions;

  var zip = new jszip__WEBPACK_IMPORTED_MODULE_1___default.a();
  var ps = [];

  if (backup.testCase && testCases && testCases.length) {
    var folder = zip.folder('macros');

    testCases.forEach(function (tc) {
      folder.file(tc.name + '.json', Object(_convert_utils__WEBPACK_IMPORTED_MODULE_3__["toJSONString"])({
        name: tc.name,
        commands: tc.data.commands
      }));
    });
  }

  if (backup.testSuite && testCases && testSuites && testSuites.length) {
    var _folder = zip.folder('testsuites');
    var genName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["nameFactory"])();

    testSuites.forEach(function (ts) {
      var name = genName(ts.name);
      _folder.file(name + '.json', Object(_convert_suite_utils__WEBPACK_IMPORTED_MODULE_4__["stringifyTestSuite"])(ts, testCases));
    });
  }

  if (backup.screenshot && screenshots && screenshots.length) {
    var _folder2 = zip.folder('screenshots');
    var ssStorage = Object(_services_storage__WEBPACK_IMPORTED_MODULE_5__["getStorageManager"])().getScreenshotStorage();

    screenshots.forEach(function (ss) {
      ps.push(ssStorage.read(ss.fileName, 'ArrayBuffer').then(function (buffer) {
        _folder2.file(ss.fileName, buffer, { binary: true });
      }));
    });
  }

  if (backup.vision && visions && visions.length) {
    var _folder3 = zip.folder('images');
    var visionStorage = Object(_services_storage__WEBPACK_IMPORTED_MODULE_5__["getStorageManager"])().getVisionStorage();

    visions.forEach(function (vision) {
      ps.push(visionStorage.read(vision.fileName, 'ArrayBuffer').then(function (buffer) {
        _folder3.file(vision.fileName, buffer, { binary: true });
      }));
    });
  }

  if (backup.csv && csvs && csvs.length) {
    var _folder4 = zip.folder('datasources');
    var csvStorage = Object(_services_storage__WEBPACK_IMPORTED_MODULE_5__["getStorageManager"])().getCSVStorage();

    csvs.forEach(function (csv) {
      ps.push(csvStorage.read(csv.fileName, 'Text').then(function (text) {
        return _folder4.file(csv.fileName, text);
      }));
    });
  }

  return Promise.all(ps).then(function () {
    zip.generateAsync({ type: 'blob' }).then(function (blob) {
      _lib_file_saver__WEBPACK_IMPORTED_MODULE_0___default.a.saveAs(blob, 'kantu_backup.zip');
    });
  });
}

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Registry {
    constructor({ process, onZero, onOne }) {
        this.cache = {};
        this.process = process;
        this.onZero = onZero || (() => { });
        this.onOne = onOne || (() => { });
    }
    add(id, obj) {
        this.cache[id] = this.cache[id] || [];
        this.cache[id].push(obj);
        if (this.cache[id].length === 1) {
            try {
                this.onOne(id);
            }
            catch (e) {
                // tslint:disable-next-line
                console.error('in onOne, ' + e.message);
            }
        }
        return true;
    }
    remove(id, obj) {
        if (!this.cache[id]) {
            return false;
        }
        this.cache[id] = this.cache[id].filter((item) => item !== obj);
        if (this.cache[id].length === 0) {
            try {
                this.onZero(id);
            }
            catch (e) {
                // tslint:disable-next-line
                console.error('in onZero, ' + e.message);
            }
        }
        return true;
    }
    removeAllWithData(obj) {
        Object.keys(this.cache).forEach((id) => {
            for (let i = this.cache[id].length - 1; i >= 0; i--) {
                if (this.cache[id][i] === obj) {
                    this.remove(id, this.cache[id][i]);
                }
            }
        });
    }
    fire(id, data) {
        if (!this.cache[id]) {
            return false;
        }
        this.cache[id].forEach((item) => {
            try {
                this.process(item, data, id);
            }
            catch (e) {
                // tslint:disable-next-line
                console.error('in process, ' + e.message);
            }
        });
        return true;
    }
    has(id) {
        return this.cache[id] && this.cache[id].length > 0;
    }
    keys() {
        return Object.keys(this.cache).filter((key) => this.cache[key] && this.cache[key].length > 0);
    }
    destroy() {
        Object.keys(this.cache).forEach((id) => {
            try {
                this.onZero(id);
            }
            catch (e) {
                // tslint:disable-next-line
                console.error('in onZero, ' + e.message);
            }
        });
        this.cache = {};
    }
}
exports.Registry = Registry;
function createListenerRegistry() {
    return new Registry({
        process: (fn, data, id) => {
            fn(data);
        }
    });
}
exports.createListenerRegistry = createListenerRegistry;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(16));
const prop_types_1 = __importDefault(__webpack_require__(1));
const antd_1 = __webpack_require__(465);
class Prompt extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: '',
            visible: true
        };
        this.onOk = () => {
            return this.props.onOk(this.state.value)
                .then(() => this.hide());
        };
        this.onCancel = () => {
            return this.props.onCancel()
                .then(() => this.hide());
        };
    }
    componentDidMount() {
        this.setState({ value: this.props.value });
        setTimeout(() => this.focus(), 100);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({ value: newProps.value });
            setTimeout(() => this.focus(), 100);
        }
    }
    focus() {
        const input = this.input;
        if (input && input.refs && input.refs.input) {
            const $input = input.refs.input;
            $input.focus();
            $input.selectionStart = this.props.selectionStart !== undefined ? this.props.selectionStart : 0;
            $input.selectionEnd = this.props.selectionEnd !== undefined ? this.props.selectionEnd : $input.value.length;
        }
    }
    hide() {
        this.setState({ visible: false });
    }
    render() {
        return (react_1.default.createElement(antd_1.Modal, { ref: ref => { this.modal = ref; }, visible: this.state.visible, align: 'left', title: this.props.title, width: this.props.width, okText: this.props.okText, cancelText: this.props.cancelText, onOk: this.onOk, onCancel: this.onCancel },
            this.props.message && this.props.message.length ? (react_1.default.createElement("pre", { style: {
                    fontFamily: 'inherit',
                    marginBottom: '10px'
                } }, this.props.message)) : null,
            react_1.default.createElement(antd_1.Input, { ref: ref => this.input = ref, type: "text", autosize: false, placeholder: this.props.placeholder, value: this.state.value, onChange: e => this.setState({ value: e.target.value }), onKeyDown: e => {
                    if (e.keyCode === 13)
                        this.onOk();
                } })));
    }
}
Prompt.propTypes = {
    onOk: prop_types_1.default.func.isRequired,
    onCancel: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string,
    width: prop_types_1.default.number,
    message: prop_types_1.default.string,
    value: prop_types_1.default.string,
    selectionStart: prop_types_1.default.number,
    selectionEnd: prop_types_1.default.number,
    placeholder: prop_types_1.default.string,
    okText: prop_types_1.default.string,
    cancelText: prop_types_1.default.string
};
Prompt.defaultProps = {
    width: 350,
    title: 'Please input',
    message: '',
    value: '',
    placeholder: '',
    okText: 'Confirm',
    cancelText: 'Cancel'
};
exports.Prompt = Prompt;
function prompt(props) {
    return new Promise((resolve, reject) => {
        const wrappedProps = Object.assign({}, props, { onOk: (str) => {
                const go = () => {
                    resolve(str);
                    destroy();
                    return Promise.resolve(true);
                };
                return new Promise(resolve => {
                    resolve(props.onOk ? props.onOk(str) : true);
                })
                    .then(go);
            }, onCancel: () => {
                const go = () => {
                    resolve(null);
                    destroy();
                    return Promise.resolve(true);
                };
                return new Promise(resolve => {
                    resolve(props.onCancel ? props.onCancel() : true);
                })
                    .then(go);
            } });
        const $root = document.createElement('div');
        const $el = document.createElement('div');
        const destroy = () => setTimeout(() => {
            $root.remove();
        }, 1000);
        document.body.appendChild($root);
        $root.appendChild($el);
        react_dom_1.default.render(react_1.default.createElement(Prompt, Object.assign({}, wrappedProps)), $el);
    });
}
exports.prompt = prompt;


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {


var DragDropAction = __webpack_require__(313);

function call(instance, methodName, args) {
    return instance[methodName].apply(instance, args);
}

function triggerDragEvent(element, target) {
    var getXpathOfElement = function getXpathOfElement(element) {
        if (element == null) {
            return 'null';
        }
        if (element.parentElement == null) {
            return '/' + element.tagName;
        }

        var siblingElement = element.parentElement.children;
        var tagCount = 0;
        var totalTagCount = 0;
        var isFound = false;

        for (var i = 0; i < siblingElement.length; i++) {
            if (siblingElement[i].tagName == element.tagName && !isFound) {
                tagCount++;
                totalTagCount++;
            } else if (siblingElement[i].tagName == element.tagName) {
                totalTagCount++;
            }
            if (siblingElement[i] == element) {
                isFound = true;
            }
        }

        if (totalTagCount > 1) {
            return getXpathOfElement(element.parentElement) + "/" + element.tagName + "[" + tagCount + "]";
        }

        return getXpathOfElement(element.parentElement) + "/" + element.tagName;
    };
    var script = "                                              \
      function simulateDragDrop(sourceNode, destinationNode){\
      function createCustomEvent(type) {                     \
          var event = new CustomEvent('CustomEvent');        \
          event.initCustomEvent(type, true, true, null);     \
          event.dataTransfer = {                             \
              data: {                                        \
              },                                             \
              setData: function(type, val) {                 \
                  this.data[type] = val;                     \
              },                                             \
              getData: function(type) {                      \
                  return this.data[type];                    \
              }                                              \
          };                                                 \
          return event;                                      \
      }                                                      \
      function dispatchEvent(node, type, event) {            \
          if (node.dispatchEvent) {                          \
              return node.dispatchEvent(event);              \
          }                                                  \
          if (node.fireEvent) {                              \
              return node.fireEvent('on' + type, event);     \
          }                                                  \
      }                                                      \
      var event = createCustomEvent('dragstart');            \
      dispatchEvent(sourceNode, 'dragstart', event);         \
                                                             \
      var dropEvent = createCustomEvent('drop');             \
      dropEvent.dataTransfer = event.dataTransfer;           \
      dispatchEvent(destinationNode, 'drop', dropEvent);     \
                                                             \
      var dragEndEvent = createCustomEvent('dragend');       \
      dragEndEvent.dataTransfer = event.dataTransfer;        \
      dispatchEvent(sourceNode, 'dragend', dragEndEvent);    \
  }                                                          \
  simulateDragDrop(document.evaluate('" + getXpathOfElement(element) + "', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue, document.evaluate('" + getXpathOfElement(target) + "', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);\
  ";
    var win = window;
    var doc = win.document;
    var scriptTag = doc.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.text = script;
    doc.body.appendChild(scriptTag);
}

var dragMock = {
    dragStart: function dragStart(targetElement, eventProperties, configCallback) {
        return call(new DragDropAction(), 'dragStart', arguments);
    },
    dragEnter: function dragEnter(targetElement, eventProperties, configCallback) {
        return call(new DragDropAction(), 'dragEnter', arguments);
    },
    dragOver: function dragOver(targetElement, eventProperties, configCallback) {
        return call(new DragDropAction(), 'dragOver', arguments);
    },
    dragLeave: function dragLeave(targetElement, eventProperties, configCallback) {
        return call(new DragDropAction(), 'dragLeave', arguments);
    },
    drop: function drop(targetElement, eventProperties, configCallback) {
        return call(new DragDropAction(), 'drop', arguments);
    },
    delay: function delay(targetElement, eventProperties, configCallback) {
        return call(new DragDropAction(), 'delay', arguments);
    },

    triggerDragEvent: triggerDragEvent,

    // Just for unit testing:
    DataTransfer: __webpack_require__(141),
    DragDropAction: __webpack_require__(313),
    eventFactory: __webpack_require__(314)
};

module.exports = dragMock;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(462);
const migration_data_1 = __webpack_require__(463);
const _2019_04_01_macro_suite_storage_1 = __webpack_require__(284);
const ts_utils_1 = __webpack_require__(18);
class KantuMigrationService extends common_1.MigrationService {
    constructor() {
        super({
            storage: {
                get(type) {
                    return migration_data_1.getMigrationKeyValueData().get(type);
                },
                set(type, data) {
                    return migration_data_1.getMigrationKeyValueData().set(type, data)
                        .then(() => true);
                },
                getAll() {
                    return migration_data_1.getMigrationKeyValueData().getAll()
                        .then((dict) => {
                        return Object.keys(dict).map((key) => dict[key]);
                    });
                }
            },
            jobs: [
                _2019_04_01_macro_suite_storage_1.getMigrateMacroTestSuiteToBrowserFileSystem()
            ]
        });
    }
}
exports.KantuMigrationService = KantuMigrationService;
exports.getKantuMigrationService = ts_utils_1.singletonGetter(() => {
    return new KantuMigrationService();
});


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(136);
const ts_utils_1 = __webpack_require__(18);
class TestSuiteExtraKeyValueData extends common_1.KeyValueData {
    getAll() {
        return super.get("");
    }
    getMainKeyAndSubKeys(key) {
        const [mainKey, subKeys] = super.getMainKeyAndSubKeys(key);
        return [
            TestSuiteExtraKeyValueData.STORAGE_KEY,
            [mainKey].concat(subKeys).filter(x => x && x.length)
        ];
    }
}
TestSuiteExtraKeyValueData.STORAGE_KEY = 'test_suite_extra';
exports.TestSuiteExtraKeyValueData = TestSuiteExtraKeyValueData;
exports.getTestSuiteExtraKeyValueData = ts_utils_1.singletonGetter(() => new TestSuiteExtraKeyValueData());


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_extension_1 = __importDefault(__webpack_require__(10));
const platform = web_extension_1.default.isFirefox() ? 'firefox' : 'chrome';
exports.default = {
    preinstallVersion: '3.8.21',
    urlAfterUpgrade: 'https://a9t9.com/x/idehelp?help=k_update',
    urlAfterInstall: 'https://a9t9.com/x/idehelp?help=k_welcome',
    urlAfterUninstall: 'https://a9t9.com/x/idehelp?help=k_why',
    xmodulesLimit: {
        unregistered: {
            ocrCommandCount: 100,
            xCommandCount: 25,
            xFileMacroCount: 10,
            upgradeUrl: 'https://a9t9.com/x/idehelp?help=k_xupgrade'
        },
        free: {
            ocrCommandCount: 250,
            xCommandCount: Infinity,
            xFileMacroCount: 20,
            upgradeUrl: 'https://a9t9.com/x/idehelp?help=k_xupgradepro'
        },
        pro: {
            ocrCommandCount: 500,
            xCommandCount: Infinity,
            xFileMacroCount: Infinity
        }
    },
    ocr: {
        apiList: [
            {
                "id": "1",
                "key": "kantu_only_53b8",
                "url": "https://apipro1.ocr.space/parse/image"
            },
            {
                "id": "2",
                "key": "kantu_only_53b8",
                "url": "https://apipro2.ocr.space/parse/image"
            },
            {
                "id": "3",
                "key": "kantu_only_53b8",
                "url": "https://apipro3.ocr.space/parse/image"
            }
        ],
        apiTimeout: 60 * 1000,
        singleApiTimeout: 30 * 1000,
        apiHealthyResponseTime: 20 * 1000,
        resetTime: 24 * 3600 * 1000
    },
    forceMigrationRemedy: false
};


/***/ }),

/***/ 336:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWindow", function() { return resizeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeViewport", function() { return resizeViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeViewportOfTab", function() { return resizeViewportOfTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowSize", function() { return getWindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusedWindowSize", function() { return getFocusedWindowSize; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_2__);




var calcOffset = function calcOffset(screenTotal, screenOffset, oldOffset, oldSize, newSize) {
  var preferStart = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var isCloserToStart = preferStart || oldOffset < screenTotal - oldOffset - oldSize;

  _log__WEBPACK_IMPORTED_MODULE_2___default()('calcOffset', screenTotal, oldOffset, oldSize, newSize, preferStart);

  if (isCloserToStart) {
    return oldOffset;

    // Note: comment out a smarter position for now
    // if (newSize < oldSize) {
    //   return oldOffset
    // }

    // if (newSize < oldSize + oldOffset - screenOffset) {
    //   return oldSize + oldOffset - newSize
    // }

    // return screenOffset
  }

  if (!isCloserToStart) {
    var oldEndOffset = screenOffset + screenTotal - oldOffset - oldSize;

    return oldSize + oldOffset - newSize;

    // Note: comment out a smarter position for now
    // if (newSize < oldSize) {
    //   return oldSize + oldOffset - newSize
    // }

    // if (newSize < oldSize + oldEndOffset) {
    //   return oldOffset
    // }

    // return screenOffset + screenTotal - newSize
  }
};

// winSize.width
// winSize.height
function resizeWindow(winId, winSize) {
  var sw = screen.availWidth;
  var sh = screen.availHeight;
  var sl = screen.availLeft;
  var st = screen.availTop;

  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(winId).then(function (win) {
    var lastLeft = win.left;
    var lastTop = win.top;
    var lastWidth = win.width;
    var lastHeight = win.height;

    return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(winId, winSize).then(function (win) {
      var left = calcOffset(sw, sl, lastLeft, lastWidth, win.width);
      var top = calcOffset(sh, st, lastTop, lastHeight, win.height, true);

      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(winId, { left: left, top: top });

      var actual = {
        width: win.width,
        height: win.height
      };

      return {
        actual: actual,
        desired: winSize,
        diff: ['width', 'height'].filter(function (key) {
          return actual[key] !== winSize[key];
        })
      };
    });
  });
}

// pureViewportSize.width
// pureViewportSize.height
// referenceViewportWindowSize.window.width
// referenceViewportWindowSize.window.height
// referenceViewportWindowSize.viewport.width
// referenceViewportWindowSize.viewport.height
function resizeViewport(winId, pureViewportSize) {
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var maxRetry = 2;
  _log__WEBPACK_IMPORTED_MODULE_2___default()('resizeViewport, ROUND', count);

  return getWindowSize(winId).then(function (currentSize) {
    _log__WEBPACK_IMPORTED_MODULE_2___default()('currentSize!!!!');
    logWindowSize(currentSize);

    var dx = currentSize.window.width - currentSize.viewport.width;
    var dy = currentSize.window.height - currentSize.viewport.height;

    var newWinSize = {
      width: dx + pureViewportSize.width,
      height: dy + pureViewportSize.height
    };

    _log__WEBPACK_IMPORTED_MODULE_2___default()('size set to', newWinSize);
    return resizeWindow(winId, newWinSize).then(function () {
      return getWindowSize(winId);
    }).then(function (newSize) {
      _log__WEBPACK_IMPORTED_MODULE_2___default()('newSize!!!!');
      logWindowSize(newSize);

      var data = {
        actual: newSize.viewport,
        desired: pureViewportSize,
        diff: ['width', 'height'].filter(function (key) {
          return newSize.viewport[key] !== pureViewportSize[key];
        })
      };

      if (data.diff.length === 0 || count >= maxRetry) {
        return data;
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 0).then(function () {
        return resizeViewport(winId, pureViewportSize, count + 1);
      });
    });
  });
}

function resizeViewportOfTab(tabId, pureViewportSize) {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId).then(function (tab) {
    return resizeViewport(tab.windowId, pureViewportSize);
  });
}

// size.window.width
// size.window.height
// size.window.left
// size.window.top
// size.viewport.wdith
// size.viewport.height
function getWindowSize(winId) {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(winId, { populate: true }).then(function (win) {
    var tab = win.tabs.find(function (tab) {
      return tab.active;
    });

    return {
      window: {
        width: win.width,
        height: win.height,
        left: win.left,
        top: win.top
      },
      viewport: {
        width: tab.width,
        height: tab.height
      }
    };
  });
}

function getFocusedWindowSize() {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getLastFocused().then(function (win) {
    return getWindowSize(win.id);
  });
}

function logWindowSize(winSize) {
  _log__WEBPACK_IMPORTED_MODULE_2___default()(winSize.window, winSize.viewport);
  _log__WEBPACK_IMPORTED_MODULE_2___default()('dx = ', winSize.window.width - winSize.viewport.width);
  _log__WEBPACK_IMPORTED_MODULE_2___default()('dy = ', winSize.window.height - winSize.viewport.height);
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.availableCommands = (() => {
    const list = [
        'open',
        'click',
        'clickAndWait',
        'select',
        'selectAndWait',
        'type',
        'pause',
        'waitForPageToLoad',
        'selectFrame',
        'assertAlert',
        'assertConfirmation',
        'assertPrompt',
        'answerOnNextPrompt',
        'store',
        'storeText',
        'storeTitle',
        'storeAttribute',
        'assertText',
        'assertTitle',
        'clickAt',
        'echo',
        'mouseOver',
        'storeEval',
        'verifyText',
        'verifyTitle',
        'sendKeys',
        'dragAndDropToObject',
        'selectWindow',
        'captureScreenshot',
        'captureDesktopScreenshot',
        'refresh',
        'verifyElementPresent',
        'assertElementPresent',
        'deleteAllCookies',
        'label',
        'gotoLabel',
        'gotoIf',
        'while',
        'endWhile',
        'csvRead',
        'csvSave',
        'if',
        'else',
        'endif',
        'storeValue',
        'assertValue',
        'verifyValue',
        'storeChecked',
        'assertChecked',
        'verifyChecked',
        'captureEntirePageScreenshot',
        'onDownload',
        // 'assertError',
        // 'verifyError',
        'throwError',
        'comment',
        'waitForVisible',
        'onError',
        'sourceSearch',
        'sourceExtract',
        'storeImage',
        'localStorageExport',
        // 'visionFind',
        'visionLimitSearchArea',
        'visionLimitSearchAreaRelative',
        'visualSearch',
        'visualVerify',
        'visualAssert',
        'editContent',
        'bringBrowserToForeground',
        'resize',
        'prompt',
        'XClick',
        'XClickRelative',
        'XType',
        'XMove',
        'XMoveRelative',
        'XDesktopAutomation',
        'OCRSearch',
        'OCRExtract',
        'OCRExtractRelative',
        'run'
    ];
    list.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
    return list;
})();
function isValidCmd(str) {
    return exports.availableCommands.indexOf(str) !== -1;
}
exports.isValidCmd = isValidCmd;


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CallStackEvent;
(function (CallStackEvent) {
    CallStackEvent["BeforeRun"] = "before_run";
    CallStackEvent["BeforeResume"] = "before_resume";
    CallStackEvent["AfterReturn"] = "after_return";
})(CallStackEvent = exports.CallStackEvent || (exports.CallStackEvent = {}));


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcCache", function() { return IpcCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIpcCache", function() { return getIpcCache; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _ts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _ts_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consecutive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _consecutive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_consecutive__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var IpcCache = function () {
  function IpcCache() {
    _classCallCheck(this, IpcCache);

    this.cache = {};
  }

  _createClass(IpcCache, [{
    key: 'get',
    value: function get(tabId) {
      var _this = this;

      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["until"])('ipc by tab id', function () {
        var ipcObj = _this.cache[tabId];
        var enabled = ipcObj && ipcObj.status === 1;
        var ipc = ipcObj && ipcObj.ipc;

        return {
          pass: enabled && !!ipc && (before === Infinity || before > ipcObj.timestamp),
          result: ipc
        };
      }, 100, timeout);
    }
  }, {
    key: 'domReadyGet',
    value: function domReadyGet(tabId) {
      var _this2 = this;

      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60 * 1000;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return Object(_ts_utils__WEBPACK_IMPORTED_MODULE_1__["retry"])(function () {
        return _this2.get(tabId).then(function (ipc) {
          // Note: must respond to DOM READY for multiple times in line,
          // before we can be sure that it's ready
          return Object(_consecutive__WEBPACK_IMPORTED_MODULE_2__["withConsecutive"])(c, function () {
            return ipc.ask('DOM_READY', {}, 1000).then(function () {
              return true;
            }, function () {
              return false;
            });
          }).then(function () {
            return ipc;
          });
        });
      }, {
        timeout: timeout,
        retryInterval: 1000,
        shouldRetry: function shouldRetry(e) {
          return true;
        }
      })();
    }
  }, {
    key: 'set',
    value: function set(tabId, ipc, cuid) {
      this.cache[tabId] = {
        ipc: ipc,
        cuid: cuid,
        status: 1,
        timestamp: new Date().getTime()
      };
    }
  }, {
    key: 'setStatus',
    value: function setStatus(tabId, status) {
      var updateTimestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var found = this.cache[tabId];
      if (!found) return false;

      found.status = status;

      if (updateTimestamp) {
        found.timestamp = new Date().getTime();
      }

      return true;
    }
  }, {
    key: 'enable',
    value: function enable(tabId) {
      return this.setStatus(tabId, 1, true);
    }
  }, {
    key: 'disable',
    value: function disable(tabId) {
      return this.setStatus(tabId, 0);
    }
  }, {
    key: 'getCuid',
    value: function getCuid(tabId) {
      var found = this.cache[tabId];
      if (!found) return null;
      return found.cuid;
    }
  }, {
    key: 'del',
    value: function del(tabId) {
      delete this.cache[tabId];
    }
  }]);

  return IpcCache;
}();

var instance = void 0;

function getIpcCache() {
  if (instance) return instance;
  instance = new IpcCache();
  return instance;
}

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 159,
	"./af.js": 159,
	"./ar": 160,
	"./ar-dz": 161,
	"./ar-dz.js": 161,
	"./ar-kw": 162,
	"./ar-kw.js": 162,
	"./ar-ly": 163,
	"./ar-ly.js": 163,
	"./ar-ma": 164,
	"./ar-ma.js": 164,
	"./ar-sa": 165,
	"./ar-sa.js": 165,
	"./ar-tn": 166,
	"./ar-tn.js": 166,
	"./ar.js": 160,
	"./az": 167,
	"./az.js": 167,
	"./be": 168,
	"./be.js": 168,
	"./bg": 169,
	"./bg.js": 169,
	"./bm": 170,
	"./bm.js": 170,
	"./bn": 171,
	"./bn.js": 171,
	"./bo": 172,
	"./bo.js": 172,
	"./br": 173,
	"./br.js": 173,
	"./bs": 174,
	"./bs.js": 174,
	"./ca": 175,
	"./ca.js": 175,
	"./cs": 176,
	"./cs.js": 176,
	"./cv": 177,
	"./cv.js": 177,
	"./cy": 178,
	"./cy.js": 178,
	"./da": 179,
	"./da.js": 179,
	"./de": 180,
	"./de-at": 181,
	"./de-at.js": 181,
	"./de-ch": 182,
	"./de-ch.js": 182,
	"./de.js": 180,
	"./dv": 183,
	"./dv.js": 183,
	"./el": 184,
	"./el.js": 184,
	"./en-au": 185,
	"./en-au.js": 185,
	"./en-ca": 186,
	"./en-ca.js": 186,
	"./en-gb": 187,
	"./en-gb.js": 187,
	"./en-ie": 188,
	"./en-ie.js": 188,
	"./en-nz": 189,
	"./en-nz.js": 189,
	"./eo": 190,
	"./eo.js": 190,
	"./es": 191,
	"./es-do": 192,
	"./es-do.js": 192,
	"./es-us": 193,
	"./es-us.js": 193,
	"./es.js": 191,
	"./et": 194,
	"./et.js": 194,
	"./eu": 195,
	"./eu.js": 195,
	"./fa": 196,
	"./fa.js": 196,
	"./fi": 197,
	"./fi.js": 197,
	"./fo": 198,
	"./fo.js": 198,
	"./fr": 199,
	"./fr-ca": 200,
	"./fr-ca.js": 200,
	"./fr-ch": 201,
	"./fr-ch.js": 201,
	"./fr.js": 199,
	"./fy": 202,
	"./fy.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it.js": 214,
	"./ja": 215,
	"./ja.js": 215,
	"./jv": 216,
	"./jv.js": 216,
	"./ka": 217,
	"./ka.js": 217,
	"./kk": 218,
	"./kk.js": 218,
	"./km": 219,
	"./km.js": 219,
	"./kn": 220,
	"./kn.js": 220,
	"./ko": 221,
	"./ko.js": 221,
	"./ky": 222,
	"./ky.js": 222,
	"./lb": 223,
	"./lb.js": 223,
	"./lo": 224,
	"./lo.js": 224,
	"./lt": 225,
	"./lt.js": 225,
	"./lv": 226,
	"./lv.js": 226,
	"./me": 227,
	"./me.js": 227,
	"./mi": 228,
	"./mi.js": 228,
	"./mk": 229,
	"./mk.js": 229,
	"./ml": 230,
	"./ml.js": 230,
	"./mr": 231,
	"./mr.js": 231,
	"./ms": 232,
	"./ms-my": 233,
	"./ms-my.js": 233,
	"./ms.js": 232,
	"./mt": 234,
	"./mt.js": 234,
	"./my": 235,
	"./my.js": 235,
	"./nb": 236,
	"./nb.js": 236,
	"./ne": 237,
	"./ne.js": 237,
	"./nl": 238,
	"./nl-be": 239,
	"./nl-be.js": 239,
	"./nl.js": 238,
	"./nn": 240,
	"./nn.js": 240,
	"./pa-in": 241,
	"./pa-in.js": 241,
	"./pl": 242,
	"./pl.js": 242,
	"./pt": 243,
	"./pt-br": 244,
	"./pt-br.js": 244,
	"./pt.js": 243,
	"./ro": 245,
	"./ro.js": 245,
	"./ru": 246,
	"./ru.js": 246,
	"./sd": 247,
	"./sd.js": 247,
	"./se": 248,
	"./se.js": 248,
	"./si": 249,
	"./si.js": 249,
	"./sk": 250,
	"./sk.js": 250,
	"./sl": 251,
	"./sl.js": 251,
	"./sq": 252,
	"./sq.js": 252,
	"./sr": 253,
	"./sr-cyrl": 254,
	"./sr-cyrl.js": 254,
	"./sr.js": 253,
	"./ss": 255,
	"./ss.js": 255,
	"./sv": 256,
	"./sv.js": 256,
	"./sw": 257,
	"./sw.js": 257,
	"./ta": 258,
	"./ta.js": 258,
	"./te": 259,
	"./te.js": 259,
	"./tet": 260,
	"./tet.js": 260,
	"./th": 261,
	"./th.js": 261,
	"./tl-ph": 262,
	"./tl-ph.js": 262,
	"./tlh": 263,
	"./tlh.js": 263,
	"./tr": 264,
	"./tr.js": 264,
	"./tzl": 265,
	"./tzl.js": 265,
	"./tzm": 266,
	"./tzm-latn": 267,
	"./tzm-latn.js": 267,
	"./tzm.js": 266,
	"./uk": 268,
	"./uk.js": 268,
	"./ur": 269,
	"./ur.js": 269,
	"./uz": 270,
	"./uz-latn": 271,
	"./uz-latn.js": 271,
	"./uz.js": 270,
	"./vi": 272,
	"./vi.js": 272,
	"./x-pseudo": 273,
	"./x-pseudo.js": 273,
	"./yo": 274,
	"./yo.js": 274,
	"./zh-cn": 130,
	"./zh-cn.js": 130,
	"./zh-hk": 275,
	"./zh-hk.js": 275,
	"./zh-tw": 276,
	"./zh-tw.js": 276
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 387;

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _command_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/*
 * Basic tool function
 */

var extend = function extend() {
  var args = Array.from(arguments);
  var len = args.length;

  if (len <= 0) return {};
  if (len === 1) return args[0];

  var head = args[0];
  var rest = args.slice(1);

  return rest.reduce(function (prev, cur) {
    for (var i = 0, keys = Object.keys(cur), len = keys.length; i < len; i++) {
      prev[keys[i]] = cur[keys[i]];
    }

    return prev;
  }, head);
};

var isArray = Array.isArray;

var id = function id(x) {
  return x;
};

var trim = function trim(str) {
  return str.replace(/^\s*|\s*$/g, '');
};

var flatten = function flatten(list) {
  return [].concat.apply([], list);
};

var sum = function sum() {
  var list = Array.from(arguments);
  return list.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
};

var last = function last(list) {
  return list[list.length - 1];
};

var or = function or(list) {
  return (list || []).reduce(function (prev, cur) {
    return prev || cur;
  }, false);
};

var and = function and(list) {
  return (list || []).reduce(function (prev, cur) {
    return prev && cur;
  }, true);
};

var zipWith = function zipWith(fn) {
  if (arguments.length < 3) return null;

  var list = Array.from(arguments).slice(1);
  var len = list.reduce(function (min, cur) {
    return cur.length < min ? cur.length : min;
  }, Infinity);
  var ret = [];

  for (var i = 0; i < len; i++) {
    ret.push(fn.apply(null, list.map(function (item) {
      return item[i];
    })));
  }

  return ret;
};

var intersect = function intersect() {
  var list = Array.from(arguments);
  var len = Math.max.apply(null, list.map(function (item) {
    return item.length;
  }));
  var result = [];

  for (var i = 0; i < len; i++) {
    var val = list[0][i];
    var no = list.filter(function (item) {
      return item[i] !== val;
    });

    if (no && no.length) break;

    result.push(val);
  }

  return result;
};

var deepEqual = function deepEqual(a, b) {
  if (isArray(a) && isArray(b)) {
    return a.length === b.length && and(zipWith(deepEqual, a, b));
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
    // TODO
    return false;
  }

  return a === b;
};

/*
 * Dom helper function
 */

var pixel = function pixel(num) {
  if ((num + '').indexOf('px') !== -1) return num;
  return (num || 0) + 'px';
};

var getStyle = function getStyle(dom, styleName) {
  if (!dom) throw new Error('getStyle: dom does not exist');
  return getComputedStyle(dom)[styleName];
};

var setStyle = function setStyle(dom, style) {
  if (!dom) throw new Error('setStyle: dom does not exist');

  for (var i = 0, keys = Object.keys(style), len = keys.length; i < len; i++) {
    dom.style[keys[i]] = style[keys[i]];
  }

  return dom;
};

var cssSum = function cssSum(dom, list) {
  var isInline = getStyle(dom, 'display') === 'inline';

  return list.reduce(function (prev, cur) {
    var val = isInline && ['width', 'height'].indexOf(cur) !== -1 ? dom.getClientRects()[0][cur] : getStyle(dom, cur);

    return prev + parseInt(val || '0', 10);
  }, 0);
};

var offset = function offset(dom, noPx) {
  if (!dom) return { left: 0, top: 0 };

  var rect = dom.getBoundingClientRect();
  var fn = noPx ? id : pixel;

  return {
    left: fn(rect.left + window.scrollX),
    top: fn(rect.top + window.scrollY)
  };
};

var rect = function rect(dom, noPx) {
  var pos = offset(dom, noPx);
  var isInline = getStyle(dom, 'display') === 'inline';
  var w = isInline ? dom.getClientRects()[0]['width'] : getStyle(dom, 'width');
  var h = isInline ? dom.getClientRects()[0]['height'] : getStyle(dom, 'height');
  var fn = noPx ? id : pixel;

  return extend({ width: fn(w), height: fn(h) }, pos);
};

// Reference: http://ryanve.com/lab/dimensions/
var clientWidth = function clientWidth(document) {
  return document.documentElement.clientWidth;
};

var clientHeight = function clientHeight(document) {
  return document.documentElement.clientHeight;
};

var removeChildren = function removeChildren(dom, predicate) {
  var pred = predicate || function () {
    return true;
  };
  var children = dom.childNodes;

  for (var i = children.length - 1; i >= 0; i--) {
    if (pred(children[i])) {
      dom.removeChild(children[i]);
    }
  }
};

var inDom = function inDom($outer, $el) {
  if (!$el) return false;
  if ($outer === $el) return true;
  return inDom($outer, $el.parentNode);
};

var inDomList = function inDomList(list, $el) {
  return or(list.map(function ($outer) {
    return inDom($outer, $el);
  }));
};

var parentWithTag = function parentWithTag(tag, $el) {
  var lowerTag = tag.toLowerCase();
  var $dom = $el;

  while ($dom) {
    if ($dom.tagName.toLowerCase() === lowerTag) {
      return $dom;
    }

    $dom = $dom.parentNode;
  }

  return null;
};

var parentWithClass = function parentWithClass(className, $el) {
  var $dom = $el;

  while ($dom) {
    // Note: In Firefox, HTML Document object doesn't have `classList` property
    if ($dom.classList !== undefined && $dom.classList.contains(className)) {
      return $dom;
    }

    $dom = $dom.parentNode;
  }

  return null;
};

var selector = function selector(dom) {
  if (dom.nodeType !== 1) return '';
  if (dom.tagName === 'BODY') return 'body';
  if (dom.id) return '#' + dom.id;

  var classes = (dom.getAttribute('class') || '').split(/\s+/g).filter(function (item) {
    return item && item.length;
  });

  var children = Array.from(dom.parentNode.childNodes).filter(function ($el) {
    return $el.nodeType === 1;
  });

  var sameTag = children.filter(function ($el) {
    return $el.tagName === dom.tagName;
  });

  var sameClass = children.filter(function ($el) {
    var cs = ($el.getAttribute('class') || '').split(/\s+/g);

    return and(classes.map(function (c) {
      return cs.indexOf(c) !== -1;
    }));
  });

  var extra = '';

  if (sameTag.length === 1) {
    extra = '';
  } else if (classes.length && sameClass.length === 1) {
    extra = '.' + classes.join('.');
  } else {
    extra = ':nth-child(' + (1 + children.findIndex(function (item) {
      return item === dom;
    })) + ')';
  }

  var me = dom.tagName.toLowerCase() + extra;

  // Note: browser will add an extra 'tbody' when tr directly in table, which will cause an wrong selector,
  // so the hack is to remove all tbody here
  var ret = selector(dom.parentNode) + ' > ' + me;
  return ret;
  // return ret.replace(/\s*>\s*tbody\s*>?/g, ' ')
};

var xpath = function xpath(dom, cur, list) {
  var getTagIndex = function getTagIndex(dom) {
    return Array.from(dom.parentNode.childNodes).filter(function (item) {
      return item.nodeType === dom.nodeType && item.tagName === dom.tagName;
    }).reduce(function (prev, node, i) {
      if (prev !== null) return prev;
      return node === dom ? i + 1 : prev;
    }, null);
  };

  var name = function name(dom) {
    if (!dom) return null;
    if (dom.nodeType === 3) return '@text';

    var index = getTagIndex(dom);
    var count = Array.from(dom.parentNode.childNodes).filter(function (item) {
      return item.nodeType === dom.nodeType && item.tagName === dom.tagName;
    }).length;
    var tag = dom.tagName.toLowerCase();

    return count > 1 ? tag + '[' + index + ']' : tag;
  };

  var helper = function helper(dom, cur, list) {
    if (!dom) return null;

    if (!cur) {
      if (dom.nodeType === 3) {
        return helper(dom.parentNode);
      } else {
        return helper(dom, dom, []);
      }
    }

    if (!cur.parentNode) {
      return ['html'].concat(list);
    }

    if (cur.tagName === 'BODY') {
      return ['html', 'body'].concat(list);
    }

    if (cur.id) {
      return ['*[@id="' + cur.id + '"]'].concat(list);
    }

    return helper(dom, cur.parentNode, [name(cur)].concat(list));
  };

  var parts = helper(dom, cur, list);
  var prefix = parts[0] === 'html' ? '/' : '//';
  var ret = prefix + parts.join('/');

  return ret;
};

var atXPath = function atXPath(xpath, document) {
  var lower = function lower(str) {
    return str && str.toLowerCase();
  };
  var reg = /^([a-zA-Z0-9]+)(\[(\d+)\])?$/;

  return xpath.reduce(function (prev, cur) {
    if (!prev) return prev;
    if (!prev.childNodes || !prev.childNodes.length) return null;

    var match = cur.match(reg);
    var tag = match[1];
    var index = match[3] ? parseInt(match[3], 10) : 1;
    var list = Array.from(prev.childNodes).filter(function (item) {
      return item.nodeType === 1 && lower(item.tagName) === lower(tag);
    });

    return list[index - 1];
  }, document);
};

var domText = function domText($dom) {
  var it = $dom.innerText && $dom.innerText.trim();
  var tc = $dom.textContent;
  var pos = tc.toUpperCase().indexOf(it.toUpperCase());

  return tc.substr(pos, it.length);
};

var getFirstWorkingLocator = function getFirstWorkingLocator(locators, $el) {
  var _loop = function _loop(i, len) {
    var $match = function () {
      try {
        return Object(_command_runner__WEBPACK_IMPORTED_MODULE_1__[/* getElementByLocator */ "a"])(locators[i]);
      } catch (e) {
        return null;
      }
    }();

    if ($el === $match) {
      return {
        v: locators[i]
      };
    }
  };

  for (var i = 0, len = locators.length; i < len; i++) {
    var _ret = _loop(i, len);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  return null;
};

// Note: get the locator of a DOM
var getLocator = function getLocator($dom, withAllOptions) {
  var id = $dom.getAttribute('id');
  var name = $dom.getAttribute('name');
  var isLink = $dom.tagName.toLowerCase() === 'a';
  var text = function () {
    try {
      return domText($dom);
    } catch (e) {
      return null;
    }
  }();
  var classes = Array.from($dom.classList);
  var candidates = [];

  // link
  if (isLink && text && text.length) {
    var links = [].slice.call(document.getElementsByTagName('a'));
    var matches = links.filter(function ($el) {
      return domText($el) === text;
    });
    var index = matches.findIndex(function ($el) {
      return $el === $dom;
    });

    if (index !== -1) {
      candidates.push(index === 0 ? 'link=' + text : 'link=' + text + '@POS=' + (index + 1));
    }
  }

  // id
  if (id && id.length) {
    candidates.push('id=' + id);
  }

  // name
  if (name && name.length) {
    candidates.push('name=' + name);
  }

  // xpath
  candidates.push('xpath=' + xpath($dom));

  // css
  // Try with simple css selector first. If not unqiue, use full css selector
  /**
   * Below is the old logic with a shorter css selector
   *
    let sel = null
    if (classes.length > 0) {
    sel = $dom.tagName.toLowerCase() + classes.map(c => '.' + c).join('')
      if ($dom !== document.querySelectorAll(sel)[0]) {
      sel = null
    }
  }
    if (!sel) {
    sel = selector($dom)
  }
  */
  candidates.push('css=' + selector($dom));

  // Get the first one working
  var chosen = getFirstWorkingLocator(candidates, $dom);

  if (withAllOptions) {
    return {
      target: chosen,
      targetOptions: candidates
    };
  }

  return chosen;
};

var checkIframe = function checkIframe(iframeWin) {
  var key = new Date() * 1 + '' + Math.random();

  try {
    iframeWin[key] = 'asd';
    return iframeWin[key] === 'asd';
  } catch (e) {
    return false;
  }
};

// Note: get the locator for frame
var getFrameLocator = function getFrameLocator(frameWin, win) {
  if (checkIframe(frameWin)) {
    var frameDom = frameWin.frameElement;
    var locator = getLocator(frameDom);

    if (/^id=/.test(locator) || /^name=/.test(locator)) {
      return locator;
    }
  }

  for (var i = 0, len = win.frames.length; i < len; i++) {
    if (win.frames[i] === frameWin) {
      return 'index=' + i;
    }
  }

  throw new Error('Frame locator not found');
};

/*
 * Mask related
 */

var maskFactory = function maskFactory() {
  var cache = [];
  var prefix = '__mask__' + new Date() * 1 + Math.round(Math.random() * 1000) + '__';
  var uid = 1;
  var defaultStyle = {
    position: 'absolute',
    zIndex: '999',
    display: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'red',
    opacity: 0.5,
    pointerEvents: 'none'
  };

  var genMask = function genMask(style, dom) {
    var mask = document.createElement('div');

    if (dom) {
      style = extend({}, defaultStyle, style || {}, rect(dom));
    } else {
      style = extend({}, defaultStyle, style || {});
    }

    setStyle(mask, style);
    mask.id = prefix + uid++;
    cache.push(mask);

    return mask;
  };

  var clear = function clear() {
    for (var i = 0, len = cache.length; i < len; i++) {
      var mask = cache[i];

      if (mask && mask.parentNode) {
        mask.parentNode.removeChild(mask);
      }
    }
  };

  return {
    gen: genMask,
    clear: clear
  };
};

var showMaskOver = function showMaskOver(mask, el) {
  var pos = offset(el);
  var w = cssSum(el, ['width', 'paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth']);
  var h = cssSum(el, ['height', 'paddingTop', 'paddingBottom', 'borderTopWidth', ' borderBottomWidth']);

  setStyle(mask, extend(pos, {
    width: pixel(w),
    height: pixel(h),
    display: 'block'
  }));
};

var isVisible = function isVisible(el) {
  if (el === window.document) return true;
  if (!el) return true;

  var style = window.getComputedStyle(el);
  if (style.display === 'none' || style.opacity === '0' || style.visibility === 'hidden') return false;

  return isVisible(el.parentNode);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  offset: offset,
  setStyle: setStyle,
  selector: selector,
  xpath: xpath,
  atXPath: atXPath,
  domText: domText,
  getLocator: getLocator,
  getFrameLocator: getFrameLocator,
  maskFactory: maskFactory,
  showMaskOver: showMaskOver,
  inDom: inDom,
  isVisible: isVisible,
  parentWithTag: parentWithTag,
  parentWithClass: parentWithClass
});

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __webpack_require__(80);
const db_1 = __importDefault(__webpack_require__(67));
const utils_1 = __webpack_require__(4);
const ts_utils_1 = __webpack_require__(18);
class IndexeddbFlatStorage extends storage_1.FlatStorage {
    constructor(options) {
        super();
        this.displayedCount = 0;
        this.totalCount = 0;
        const tableName = options.table;
        if (!db_1.default.tables.find(t => t.name === tableName)) {
            throw new Error(`Unknown indexeddb table name '${tableName}'`);
        }
        this.table = db_1.default.table(options.table);
    }
    getDisplayCount() {
        return this.displayedCount;
    }
    getTotalCount() {
        return this.totalCount;
    }
    __list() {
        // Note: must wrap dexie's "Promise", as it's dexie's own thenable Promise
        return Promise.resolve(this.table.toArray())
            .then((xs) => {
            const convert = (x) => ({
                dir: '',
                fileName: (x.name),
                lastModified: new Date(),
                size: 'unknown'
            });
            this.totalCount = xs.length;
            this.displayedCount = xs.length;
            return xs.map(convert);
        });
    }
    exists(fileName) {
        return Promise.resolve(this.table
            .where('name')
            .equals(fileName)
            .toArray())
            .then((xs) => {
            return xs.length > 0;
        });
    }
    read(fileName, type) {
        if (type !== 'Text') {
            throw new Error(`ReadFileType '${type}' is not supported in indexeddb storage`);
        }
        return this.findByName(fileName);
    }
    readAll(readFileType = 'Text', onErrorFiles) {
        return Promise.resolve(this.table.toArray())
            .then(items => {
            return items.map(item => ({
                fileName: item.name,
                content: item
            }));
        });
    }
    __write(fileName, content) {
        return this.findByName(fileName)
            .catch(() => null)
            .then((item) => {
            if (item) {
                const data = this.normalize(Object.assign({}, item, content));
                delete data.id;
                return this.table.update(item.id, data);
            }
            else {
                const data = this.normalize(Object.assign({ id: utils_1.uid() }, content));
                return this.table.add(data);
            }
        })
            .then(() => { });
    }
    __overwrite(fileName, content) {
        return this.write(fileName, content);
    }
    __clear() {
        return Promise.resolve(this.table.clear());
    }
    __remove(fileName) {
        return this.findByName(fileName)
            .then(item => {
            return this.table.delete(item.id);
        });
    }
    __rename(fileName, newName) {
        return this.findByName(fileName)
            .then((item) => {
            return this.table.update(item.id, { name: newName });
        })
            .then(() => { });
    }
    __copy(fileName, newName) {
        return this.findByName(fileName)
            .then((item) => {
            delete item.id;
            item.name = newName;
            return this.__write(newName, item);
        });
    }
    ensureDir() {
        return Promise.resolve();
    }
    findByName(name) {
        return Promise.resolve(this.table
            .where('name')
            .equals(name)
            .first())
            .then((item) => {
            if (!item)
                throw new Error(`indexeddb storage: Item with name '${name}' is not found`);
            return item;
        });
    }
    normalize(data) {
        return data;
    }
    dataToString(data) {
        return JSON.stringify(data);
    }
}
exports.IndexeddbFlatStorage = IndexeddbFlatStorage;
exports.getIndexeddbFlatStorage = ts_utils_1.singletonGetterByKey((opts) => {
    return opts.table;
}, (opts) => {
    return new IndexeddbFlatStorage(opts);
});


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semver_1 = __importDefault(__webpack_require__(583));
const types_1 = __webpack_require__(143);
const ts_utils_1 = __webpack_require__(18);
class MigrationService {
    constructor(options) {
        this.storage = options.storage;
        this.jobs = options.jobs;
    }
    isMigrated(type) {
        return this.storage.get(type)
            .then((record) => !!record);
    }
    getRecords() {
        return this.storage.getAll();
    }
    runType(type) {
        return this.isMigrated(type)
            .then((migrated) => {
            if (migrated) {
                return types_1.MigrationResult.AlreadyMigrated;
            }
            const job = this.findJob(type);
            if (!job) {
                return types_1.MigrationResult.JobUnknown;
            }
            return job.shouldMigrate()
                .then((pass) => {
                if (!pass) {
                    return types_1.MigrationResult.NotQualified;
                }
                return job.migrate()
                    .then(() => types_1.MigrationResult.Success);
            });
        })
            .catch((e) => {
            console.error(e);
            return types_1.MigrationResult.Error;
        })
            .then((result) => {
            if (result !== types_1.MigrationResult.Success) {
                return Promise.resolve(result);
            }
            return this.storage.set(type, {
                result,
                id: ts_utils_1.uid(),
                runAt: new Date().getTime(),
                jobType: type
            })
                .then(() => result);
        });
    }
    runAll(previousVersion, currentVersion) {
        const validJobs = this.jobs.filter((job) => {
            return semver_1.default.satisfies(previousVersion, job.previousVersionRange());
        });
        return ts_utils_1.flow(...validJobs.map((job) => {
            const type = job.getType();
            return () => {
                return this.runType(type)
                    .then((result) => ({ type, result }));
            };
        }))
            .then((list) => {
            const result = list.reduce((prev, cur) => {
                prev[cur.type] = cur.result;
                return prev;
            }, {});
            return result;
        });
    }
    findJob(type) {
        return this.jobs.find((item) => item.getType() === type);
    }
}
exports.MigrationService = MigrationService;


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(136);
const ts_utils_1 = __webpack_require__(18);
class MigrationKeyValueData extends common_1.KeyValueData {
    getAll() {
        return super.get("");
    }
    getMainKeyAndSubKeys(key) {
        const [mainKey, subKeys] = super.getMainKeyAndSubKeys(key);
        return [
            MigrationKeyValueData.STORAGE_KEY,
            [mainKey].concat(subKeys).filter(x => x && x.length)
        ];
    }
}
MigrationKeyValueData.STORAGE_KEY = 'migration_records';
exports.MigrationKeyValueData = MigrationKeyValueData;
exports.getMigrationKeyValueData = ts_utils_1.singletonGetter(() => new MigrationKeyValueData());


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    constructor(options = {}) {
        this.n = 0;
        const { initial, getMax, onMax } = options;
        if (typeof getMax !== 'function')
            throw new Error(`'getMax' function is required`);
        if (typeof onMax !== 'function')
            throw new Error(`onMax callback is required`);
        this.initial = initial || 0;
        this.getMax = getMax;
        this.onMax = onMax;
        this.reset();
    }
    reset() {
        this.n = this.initial;
    }
    get() {
        return this.n;
    }
    getMaximum() {
        return this.getMax();
    }
    check() {
        const max = this.getMax();
        if (this.n + 1 > max) {
            this.onMax(this.n, max, this.initial);
            return false;
        }
        return true;
    }
    inc() {
        const max = this.getMax();
        if (this.n < max) {
            this.n += 1;
            return true;
        }
        else {
            this.onMax(this.n, max, this.initial);
            return false;
        }
    }
}
exports.Counter = Counter;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMessage", function() { return postMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessage", function() { return onMessage; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TYPE = 'SELENIUM_IDE_CS_MSG';

var postMessage = function postMessage(targetWin, myWin, payload) {
  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '*';
  var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 60000;

  return new Promise(function (resolve, reject) {
    if (!targetWin || !targetWin.postMessage) {
      throw new Error('csPostMessage: targetWin is not a window', targetWin);
    }

    if (!myWin || !myWin.addEventListener || !myWin.removeEventListener) {
      throw new Error('csPostMessage: myWin is not a window', myWin);
    }

    var secret = Math.random();
    var type = TYPE;

    // Note: create a listener with a corresponding secret every time
    var onMsg = function onMsg(e) {
      if (e.data && e.data.type === TYPE && !e.data.isRequest && e.data.secret === secret) {
        myWin.removeEventListener('message', onMsg);
        var _e$data = e.data,
            _payload = _e$data.payload,
            error = _e$data.error;


        if (error) return reject(new Error(error));
        if (_payload !== undefined) return resolve(_payload);

        reject(new Error('csPostMessage: No payload nor error found'));
      }
    };

    myWin.addEventListener('message', onMsg);

    // Note:
    // * `type` to make sure we check our own msg only
    // * `secret` is for 1 to 1 relationship between a msg and a listener
    // * `payload` is the real data you want to send
    // * `isRequest` is to mark that it's not an answer to some previous request
    targetWin.postMessage({
      type: type,
      secret: secret,
      payload: payload,
      isRequest: true
    }, target);

    setTimeout(function () {
      reject(new Error('csPostMessage: timeout ' + timeout + ' ms'));
    }, timeout);
  });
};

var onMessage = function onMessage(win, fn) {
  if (!win || !win.addEventListener || !win.removeEventListener) {
    throw new Error('csOnMessage: not a window', win);
  }

  var onMsg = function onMsg(e) {
    // Note: only respond to msg with `isRequest` as true
    if (e && e.data && e.data.type === TYPE && e.data.isRequest && e.data.secret) {
      var tpl = {
        type: TYPE,
        secret: e.data.secret

        // Note: wrapped with a new Promise to catch any exception during the execution of fn
      };new Promise(function (resolve, reject) {
        var ret = void 0;

        try {
          ret = fn(e.data.payload, {
            source: e.source
          });
        } catch (err) {
          reject(err);
        }

        // Note: only resolve if returned value is not undefined. With this, we can have multiple
        // listeners added to onMessage, and each one takes care of what it really cares
        if (ret !== undefined) {
          resolve(ret);
        }
      }).then(function (res) {
        e.source.postMessage(_extends({}, tpl, {
          payload: res
        }), '*');
      }, function (err) {
        e.source.postMessage(_extends({}, tpl, {
          error: err.message
        }), '*');
      });
    }
  };

  win.addEventListener('message', onMsg);
  return function () {
    return win.removeEventListener('message', onMsg);
  };
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(987);
const ts_utils_1 = __webpack_require__(18);
const kantu_xy_host_1 = __webpack_require__(988);
const resize_window_1 = __webpack_require__(354);
const log_1 = __importDefault(__webpack_require__(11));
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Right"] = 1] = "Right";
    MouseButton[MouseButton["Middle"] = 2] = "Middle";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
var MouseEventType;
(function (MouseEventType) {
    MouseEventType[MouseEventType["Move"] = 0] = "Move";
    MouseEventType[MouseEventType["Down"] = 1] = "Down";
    MouseEventType[MouseEventType["Up"] = 2] = "Up";
    MouseEventType[MouseEventType["Click"] = 3] = "Click";
    MouseEventType[MouseEventType["DoubleClick"] = 4] = "DoubleClick";
    MouseEventType[MouseEventType["CtrlClick"] = 5] = "CtrlClick";
    MouseEventType[MouseEventType["ShiftClick"] = 6] = "ShiftClick";
})(MouseEventType = exports.MouseEventType || (exports.MouseEventType = {}));
exports.getNativeXYAPI = ts_utils_1.singletonGetter(() => {
    const nativeHost = new kantu_xy_host_1.KantuXYHost();
    let pReady = nativeHost.connectAsync().catch(e => {
        log_1.default.warn('pReady - error', e);
        throw e;
    });
    const api = constants_1.MethodTypeInvocationNames.reduce((prev, method) => {
        const camel = ts_utils_1.snakeToCamel(method);
        prev[camel] = (() => {
            const fn = (params) => pReady.then(() => {
                return nativeHost.invokeAsync(method, params)
                    .catch(e => {
                    // Note: Looks like for now whenever there is an error, you have to reconnect native host
                    // otherwise, all commands return "Disconnected" afterwards
                    const typeSafeAPI = api;
                    typeSafeAPI.reconnect().catch(() => { });
                    throw e;
                });
            });
            return fn;
        })();
        return prev;
    }, {
        reconnect: () => {
            nativeHost.disconnect();
            pReady = nativeHost.connectAsync();
            return pReady.then(() => api);
        },
        // Note: This factor equals to ScreenMouseCoornidate / CssMouseCoordinate
        getScalingFactor: () => {
            const typeSafeAPI = api;
            return typeSafeAPI.getScreenBackingScaleFactor()
                .then(screenBackingFactor => window.devicePixelRatio / screenBackingFactor);
        },
        sendViewportMouseEvent: (event, options) => {
            const typeSafeAPI = api;
            const hasCache = findRectangleCache !== null;
            const pNeedCalibration = options.needCalibration().then(isNeeded => isNeeded || !hasCache);
            const enhancedGetFocusedWindowSize = () => {
                return options.withDownloadBarHidden(resize_window_1.getFocusedWindowSize);
            };
            return pNeedCalibration.then((isNeeded) => {
                const { markPage, unmarkPage, findViewportRectInWindow } = isNeeded ? {
                    markPage: options.markPage,
                    unmarkPage: options.unmarkPage,
                    findViewportRectInWindow: (hexColor) => typeSafeAPI.findRectangle(hexColor)
                } : {
                    markPage: () => Promise.resolve(),
                    unmarkPage: () => Promise.resolve(),
                    findViewportRectInWindow: (options) => Promise.resolve(findRectangleCache)
                };
                return markPage()
                    .then(() => Promise.all([
                    findViewportRectInWindow({ color: '#00ff00' }),
                    enhancedGetFocusedWindowSize(),
                    typeSafeAPI.getScalingFactor()
                ]))
                    .then(tuple => {
                    const viewportRect = tuple[0];
                    const winSize = tuple[1];
                    const scalingFactor = tuple[2];
                    // Note: cache this value
                    findRectangleCache = viewportRect;
                    // Note: `winSize.window.width - winSize.viewport.width` shall always be no less than real left padding
                    // while `findRectangle` doesn't always return correct value (larger than actual one)
                    // so we try to take the minimun of those two
                    const offsetX = winSize.window.left + Math.min(viewportRect.x, winSize.window.width - winSize.viewport.width);
                    const offsetY = winSize.window.top + Math.min(viewportRect.y, winSize.window.height - winSize.viewport.height);
                    return unmarkPage()
                        .then(() => typeSafeAPI.sendMouseEvent({
                        type: event.type,
                        button: event.button,
                        x: event.x * scalingFactor + offsetX * scalingFactor,
                        y: event.y * scalingFactor + offsetY * scalingFactor
                    }));
                });
            })
                .catch(e => {
                console.error(e);
                return false;
            });
        }
    });
    let findRectangleCache = null;
    return api;
});


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || function (view) {
	"use strict";
	// IE <10 is explicitly unsupported

	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var doc = view.document
	// only get URL when necessary in case Blob.js hasn't overridden it yet
	,
	    get_URL = function get_URL() {
		return view.URL || view.webkitURL || view;
	},
	    is_firefox_extension = window.location.protocol === 'moz-extension:',
	    create_link_for_ff_ext = function create_link_for_ff_ext() {
		// Temporary fix for firefox extension on Mac / Linux
		// reference: https://bugzilla.mozilla.org/show_bug.cgi?format=default&id=1420419
		var iframeId = 'downloadFrame';
		var $iframe = doc.createElementNS("http://www.w3.org/1999/xhtml", "iframe");

		$iframe.id = iframeId;
		$iframe.style.visibility = 'hidden';
		$iframe.style.position = 'absolute';
		$iframe.style.left = '-999px';
		doc.body.appendChild($iframe);

		var link = $iframe.contentDocument.createElement('a');

		// wait for next tick when iframe is already in document,
		// otherwise link won't be add to body of iframe
		setTimeout(function () {
			$iframe.contentDocument.body.appendChild(link);
		});

		return link;
	},
	    save_link = is_firefox_extension ? create_link_for_ff_ext() : doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
	    can_use_save_link = "download" in save_link,
	    click = function click(node) {
		var event = new MouseEvent("click");
		node.dispatchEvent(event);
	},
	    is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
	    is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
	    throw_outside = function throw_outside(ex) {
		(view.setImmediate || view.setTimeout)(function () {
			throw ex;
		}, 0);
	},
	    force_saveable_type = "application/octet-stream"
	// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
	,
	    arbitrary_revoke_timeout = 1000 * 40 // in ms
	,
	    revoke = function revoke(file) {
		var revoker = function revoker() {
			if (typeof file === "string") {
				// file is an object URL
				get_URL().revokeObjectURL(file);
			} else {
				// file is a File
				file.remove();
			}
		};
		setTimeout(revoker, arbitrary_revoke_timeout);
	},
	    dispatch = function dispatch(filesaver, event_types, event) {
		event_types = [].concat(event_types);
		var i = event_types.length;
		while (i--) {
			var listener = filesaver["on" + event_types[i]];
			if (typeof listener === "function") {
				try {
					listener.call(filesaver, event || filesaver);
				} catch (ex) {
					throw_outside(ex);
				}
			}
		}
	},
	    auto_bom = function auto_bom(blob) {
		// prepend BOM for UTF-8 XML and text/* types (including HTML)
		// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
		if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
			return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type });
		}
		return blob;
	},
	    FileSaver = function FileSaver(blob, name, no_auto_bom) {
		if (!no_auto_bom) {
			blob = auto_bom(blob);
		}
		// First try a.download, then web filesystem, then object URLs
		var filesaver = this,
		    type = blob.type,
		    force = type === force_saveable_type,
		    object_url,
		    dispatch_all = function dispatch_all() {
			dispatch(filesaver, "writestart progress write writeend".split(" "));
		}
		// on any filesys errors revert to saving with object URLs
		,
		    fs_error = function fs_error() {
			if ((is_chrome_ios || force && is_safari) && view.FileReader) {
				// Safari doesn't allow downloading of blob urls
				var reader = new FileReader();
				reader.onloadend = function () {
					var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
					var popup = view.open(url, '_blank');
					if (!popup) view.location.href = url;
					url = undefined; // release reference before dispatching
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				};
				reader.readAsDataURL(blob);
				filesaver.readyState = filesaver.INIT;
				return;
			}
			// don't create more object URLs than needed
			if (!object_url) {
				object_url = get_URL().createObjectURL(blob);
			}
			if (force) {
				view.location.href = object_url;
			} else {
				var opened = view.open(object_url, "_blank");
				if (!opened) {
					// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
					view.location.href = object_url;
				}
			}
			filesaver.readyState = filesaver.DONE;
			dispatch_all();
			revoke(object_url);
		};
		filesaver.readyState = filesaver.INIT;

		if (can_use_save_link) {
			object_url = get_URL().createObjectURL(blob);
			setTimeout(function () {
				save_link.href = object_url;
				save_link.download = name;
				click(save_link);
				dispatch_all();
				revoke(object_url);
				filesaver.readyState = filesaver.DONE;
			});
			return;
		}

		fs_error();
	},
	    FS_proto = FileSaver.prototype,
	    saveAs = function saveAs(blob, name, no_auto_bom) {
		return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
	};
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function (blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function () {};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;

	return saveAs;
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content);
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if ( true && module.exports) {
	module.exports.saveAs = saveAs;
} else if ( true && __webpack_require__(500) !== null && __webpack_require__(388) !== null) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
		return saveAs;
	}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(132);
const desktop_1 = __webpack_require__(72);
const ts_utils_1 = __webpack_require__(18);
class XDesktop extends common_1.XModule {
    getName() {
        return common_1.XModuleTypes.XDesktop;
    }
    getAPI() {
        return desktop_1.getNativeCVAPI();
    }
    initConfig() {
        return this.getConfig();
    }
    sanityCheck() {
        return Promise.all([
            this.getConfig(),
            this.getAPI().getVersion()
                .then(() => this.getAPI(), () => this.getAPI().reconnect())
                .catch(e => {
                throw new Error('Error #301: Visual Desktop Automation XModule is not installed yet');
            })
        ])
            .then(() => true);
    }
    checkUpdate() {
        return Promise.reject(new Error('checkUpdate is not implemented yet'));
    }
    checkUpdateLink(modVersion, extVersion) {
        return `https://a9t9.com/x/idehelp?help=xdesktop_updatecheck&xversion=${modVersion}&kantuversion=${extVersion}`;
    }
    downloadLink() {
        return 'https://a9t9.com/x/idehelp?help=xdesktop_download';
    }
    infoLink() {
        return 'https://a9t9.com/x/idehelp?help=xdesktop';
    }
}
exports.XDesktop = XDesktop;
exports.getXDesktop = ts_utils_1.singletonGetter(() => {
    return new XDesktop();
});


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(356);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dexie__WEBPACK_IMPORTED_MODULE_0__);


var db = new dexie__WEBPACK_IMPORTED_MODULE_0___default.a('selenium-ide');

db.version(1).stores({
  testCases: 'id,name,updateTime'
});

db.version(2).stores({
  testCases: 'id,name,updateTime',
  testSuites: 'id,name,updateTime'
});

db.open();

/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(132);
const xy_1 = __webpack_require__(50);
const ts_utils_1 = __webpack_require__(18);
class XUserIO extends common_1.XModule {
    getName() {
        return common_1.XModuleTypes.XUserIO;
    }
    getAPI() {
        return xy_1.getNativeXYAPI();
    }
    initConfig() {
        return this.getConfig();
    }
    sanityCheck() {
        return Promise.all([
            this.getConfig(),
            this.getAPI().getVersion()
                .then(() => this.getAPI(), () => this.getAPI().reconnect())
                .catch(e => {
                throw new Error('Error #301: RealUser Simulation XModule is not installed yet');
            })
        ])
            .then(() => true);
    }
    checkUpdate() {
        return Promise.reject(new Error('checkUpdate is not implemented yet'));
    }
    checkUpdateLink(modVersion, extVersion) {
        return `https://a9t9.com/x/idehelp?help=xclick_updatecheck&xversion=${modVersion}&kantuversion=${extVersion}`;
    }
    downloadLink() {
        return 'https://a9t9.com/x/idehelp?help=xclick_download';
    }
    infoLink() {
        return 'https://a9t9.com/x/idehelp?help=xclick';
    }
}
exports.XUserIO = XUserIO;
exports.getXUserIO = ts_utils_1.singletonGetter(() => {
    return new XUserIO();
});


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MacroInspector;
(function (MacroInspector) {
    MacroInspector["Timer"] = "timer";
    MacroInspector["LoopTimer"] = "loop_timer";
    MacroInspector["Countdown"] = "countdown";
})(MacroInspector = exports.MacroInspector || (exports.MacroInspector = {}));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(69);
const monitor_1 = __webpack_require__(994);
const timer_1 = __webpack_require__(995);
const countdown_1 = __webpack_require__(996);
const ts_utils_1 = __webpack_require__(18);
var MacroParamsProviderType;
(function (MacroParamsProviderType) {
    MacroParamsProviderType[MacroParamsProviderType["Constructor"] = 0] = "Constructor";
    MacroParamsProviderType[MacroParamsProviderType["Restart"] = 1] = "Restart";
})(MacroParamsProviderType = exports.MacroParamsProviderType || (exports.MacroParamsProviderType = {}));
class MacroMonitor extends monitor_1.Monitor {
    constructor(paramsProvider) {
        super({
            [types_1.MacroInspector.Timer]: (id) => {
                return new timer_1.Timer();
            },
            [types_1.MacroInspector.LoopTimer]: (id) => {
                return new timer_1.Timer();
            },
            [types_1.MacroInspector.Countdown]: (id) => {
                const args = paramsProvider(MacroParamsProviderType.Constructor, types_1.MacroInspector.Countdown, id, false);
                const callback = args[0];
                return new countdown_1.Countdown(callback);
            }
        }, (name, id, notBatch) => {
            return paramsProvider(MacroParamsProviderType.Restart, name, id, notBatch);
        });
    }
}
exports.MacroMonitor = MacroMonitor;
exports.getMacroMonitor = ts_utils_1.singletonGetter((paramsProvider) => {
    return new MacroMonitor(paramsProvider);
});


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(310);
const ts_utils_1 = __webpack_require__(18);
const kantu_cv_host_1 = __webpack_require__(311);
const base64_1 = __webpack_require__(312);
const utils_1 = __webpack_require__(4);
const dom_utils_1 = __webpack_require__(21);
const log_1 = __importDefault(__webpack_require__(11));
const path_1 = __importDefault(__webpack_require__(86));
exports.getNativeCVAPI = ts_utils_1.singletonGetter(() => {
    const nativeHost = new kantu_cv_host_1.KantuCVHost();
    let pReady = nativeHost.connectAsync().catch(e => {
        log_1.default.warn('pReady - error', e);
        throw e;
    });
    const api = constants_1.MethodTypeInvocationNames.reduce((prev, method) => {
        const camel = ts_utils_1.snakeToCamel(method);
        prev[camel] = (() => {
            const fn = (params) => pReady.then(() => {
                return nativeHost.invokeAsync(method, params)
                    .catch(e => {
                    // Note: Looks like for now whenever there is an error, you have to reconnect native host
                    // otherwise, all commands return "Disconnected" afterwards
                    const typeSafeAPI = api;
                    typeSafeAPI.reconnect().catch(() => { });
                    // Note: For now, native host doesn't provide any useful error message if captureDesktop fails
                    // but for most cases it's due to directory not exist
                    if (camel === 'captureDesktop') {
                        const filePath = params.path;
                        if (filePath && /[\\/]/.test(filePath)) {
                            throw new Error(`Failed to captureDesktop, please confirm directory exists at '${path_1.default.dirname(filePath)}'`);
                        }
                    }
                    throw e;
                });
            });
            return fn;
        })();
        return prev;
    }, {
        reconnect: () => {
            nativeHost.disconnect();
            pReady = nativeHost.connectAsync();
            return pReady.then(() => api);
        },
        searchDesktopWithGuard: (params) => {
            const typeSafeAPI = api;
            return typeSafeAPI.searchDesktop(params).then(guardSearchResult);
        },
        getImageFromDataUrl: (dataUrl, dpi) => {
            const typeSafeAPI = api;
            const removeBase64Prefix = (str) => {
                const b64 = 'base64,';
                const i = str.indexOf(b64);
                if (i === -1)
                    return str;
                return str.substr(i + b64.length);
            };
            return typeSafeAPI.getImageInfo({ content: removeBase64Prefix(dataUrl) })
                .then(info => {
                const DEFAULT_DPI = 96;
                const dpiX = info.dpiX || dpi || DEFAULT_DPI;
                const dpiY = info.dpiY || dpi || DEFAULT_DPI;
                return serializeDataUrl(dataUrl, dpiX, dpiY);
            });
        },
        readFileAsArrayBuffer: (filePath) => {
            const typeSafeAPI = api;
            const readMore = (filePath, totalSize = Infinity, rangeStart = 0, dataUrls = []) => {
                return typeSafeAPI.readFileRange({
                    rangeStart,
                    path: filePath
                })
                    .then(range => {
                    const result = range.rangeEnd > range.rangeStart ? dataUrls.concat([range.buffer]) : dataUrls;
                    if (range.rangeEnd >= totalSize || range.rangeEnd <= range.rangeStart)
                        return result;
                    return readMore(filePath, totalSize, range.rangeEnd, result);
                });
            };
            return typeSafeAPI.getFileSize({ path: filePath })
                .then(fileSize => readMore(filePath, fileSize, 0, []))
                .then(dataUrls => {
                const arr = ts_utils_1.concatUint8Array(...dataUrls.map(dataUrl => new Uint8Array(utils_1.dataURItoArrayBuffer(dataUrl))));
                return arr.buffer;
            });
        },
        readFileAsBlob: (filePath) => {
            const typeSafeAPI = api;
            return typeSafeAPI.readFileAsArrayBuffer(filePath)
                .then(buffer => new Blob([buffer]));
        },
        readFileAsDataURL: (filePath, withBase64Prefix = true) => {
            const typeSafeAPI = api;
            return typeSafeAPI.readFileAsBlob(filePath)
                .then(blob => utils_1.blobToDataURL(blob, withBase64Prefix));
        },
        readFileAsText: (filePath) => {
            const typeSafeAPI = api;
            return typeSafeAPI.readFileAsBlob(filePath)
                .then(blob => utils_1.blobToText(blob));
        },
        readFileAsBinaryString: (filePath) => {
            const typeSafeAPI = api;
            return typeSafeAPI.readFileAsArrayBuffer(filePath)
                .then(buffer => utils_1.arrayBufferToString(buffer));
        }
    });
    return api;
});
function guardSearchResult(result) {
    switch (result.errorCode) {
        case 0 /* Ok */:
            return result;
        case 2 /* NoGreenPinkBoxes */:
            throw new Error('Cannot find green and/or pink boxes');
        case 3 /* NoPinkBox */:
            throw new Error('Pattern image contains green box but does not contain pink box');
        case 4 /* TooManyGreenBox */:
            throw new Error('Pattern image contains more than one green box');
        case 5 /* TooManyPinkBox */:
            throw new Error('Pattern image contains more than one pink box');
        case 1 /* Fail */:
            throw new Error('Unspecified error has occured');
        default:
            throw new Error(`Unknown error code ${result.errorCode}`);
    }
}
exports.guardSearchResult = guardSearchResult;
function convertImageSearchResult(result, scale = 1) {
    const { errorCode, containsGreenPinkBoxes, regions } = result;
    const convert = (region) => {
        if (!region.relativeRect) {
            return {
                matched: {
                    left: scale * region.matchedRect.x,
                    top: scale * region.matchedRect.y,
                    width: scale * region.matchedRect.width,
                    height: scale * region.matchedRect.height,
                    offsetLeft: scale * region.matchedRect.x,
                    offsetTop: scale * region.matchedRect.y,
                    score: region.score
                },
                reference: null
            };
        }
        else {
            return {
                matched: {
                    left: scale * region.relativeRect.x,
                    top: scale * region.relativeRect.y,
                    width: scale * region.relativeRect.width,
                    height: scale * region.relativeRect.height,
                    offsetLeft: scale * region.relativeRect.x,
                    offsetTop: scale * region.relativeRect.y,
                    score: region.score
                },
                reference: {
                    left: scale * region.matchedRect.x,
                    top: scale * region.matchedRect.y,
                    width: scale * region.matchedRect.width,
                    height: scale * region.matchedRect.height,
                    offsetLeft: scale * region.matchedRect.x,
                    offsetTop: scale * region.matchedRect.y,
                    score: region.score
                }
            };
        }
    };
    return regions.map(r => convert(r));
}
exports.convertImageSearchResult = convertImageSearchResult;
function serializeImageData(imageData, dpiX, dpiY) {
    // Convert RGBA -> RGB -> Base64
    const w = imageData.width;
    const h = imageData.height;
    const src = imageData.data;
    const rgb = new Uint8Array(w * h * 3);
    for (let y = 0; y < h; ++y) {
        for (let x = 0; x < w; ++x) {
            const base = y * w + x;
            const k = 3 * base;
            const j = 4 * base;
            rgb[k + 0] = src[j + 0];
            rgb[k + 1] = src[j + 1];
            rgb[k + 2] = src[j + 2];
        }
    }
    const data = base64_1.base64.encode(rgb);
    return {
        width: w,
        height: h,
        dpiX,
        dpiY,
        data
    };
}
exports.serializeImageData = serializeImageData;
function serializeDataUrl(dataUrl, dpiX, dpiY) {
    return dom_utils_1.imageDataFromUrl(dataUrl)
        .then(imageData => serializeImageData(imageData, dpiX, dpiY));
}
exports.serializeDataUrl = serializeDataUrl;


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(4),
    retry = _require.retry;

var TO_BE_REMOVED = false;

var log = function log(msg) {
  if (console && console.log) console.log(msg);
};

var transformError = function transformError(err) {
  if (err instanceof Error) {
    return {
      isError: true,
      name: err.name,
      message: err.message,
      stack: err.stack
    };
  }

  return err;
};

// Note: The whole idea of ipc promise is about transforming the callback style
// ipc communication API to a Promise style
//
// eg. Orignial:    `chrome.runtime.sendMessage({}, () => {})`
//     ipcPromise:  `ipc.ask({}).then(() => {})`
//
// The benifit is
// 1. You can chain this promise with others
// 2. Create kind of connected channels between two ipc ends
//
// This is a generic interface to define a ipc promise utility
// All you need to declare is 4 functions
//
// e.g.
// ```
// ipcPromise({
//   ask: function (uid, cmd, args) { ... },
//   answer: function (uid, err, data) { ... },
//   onAsk: function (fn) { ... },
//   onAnswer: function (fn) { ... },
// })
// ```
function ipcPromise(options) {
  var ask = options.ask;
  var answer = options.answer;
  var timeout = options.timeout;
  var onAnswer = options.onAnswer;
  var onAsk = options.onAsk;
  var userDestroy = options.destroy;
  var checkReady = options.checkReady || function () {
    return Promise.resolve(true);
  };

  var askCache = {};
  var unhandledAsk = [];
  var markUnhandled = function markUnhandled(uid, cmd, args) {
    unhandledAsk.push({ uid: uid, cmd: cmd, args: args });
  };
  var handler = markUnhandled;

  var runHandlers = function runHandlers(handlers, cmd, args, resolve, reject) {
    for (var i = 0, len = handlers.length; i < len; i++) {
      var res;

      try {
        res = handlers[i](cmd, args);
      } catch (e) {
        return reject(e);
      }

      if (res !== undefined) {
        return resolve(res);
      }
    }
    // Note: DO NOT resolve anything if all handlers return undefined
  };

  // both for ask and unhandledAsk
  timeout = timeout || -1;

  onAnswer(function (uid, err, data) {
    if (uid && askCache[uid] === TO_BE_REMOVED) {
      delete askCache[uid];
      return;
    }

    if (!uid || !askCache[uid]) {
      // log('ipcPromise: response uid invalid: ' + uid);
      return;
    }

    var resolve = askCache[uid][0];
    var reject = askCache[uid][1];

    delete askCache[uid];

    if (err) {
      reject(transformError(err));
    } else {
      resolve(data);
    }
  });

  onAsk(function (uid, cmd, args) {
    if (timeout > 0) {
      setTimeout(function () {
        var found = unhandledAsk && unhandledAsk.find(function (item) {
          return item.uid === uid;
        });

        if (!found) return;

        answer(uid, new Error('ipcPromise: answer timeout ' + timeout + ' for cmd "' + cmd + '", args "' + args + '"'));
      }, timeout);
    }

    if (handler === markUnhandled) {
      markUnhandled(uid, cmd, args);
      return;
    }

    return new Promise(function (resolve, reject) {
      runHandlers(handler, cmd, args, resolve, reject);
    }).then(function (data) {
      // note: handler doens't handle the cmd => return undefined, should wait for timeout
      if (data === undefined) return markUnhandled(uid, cmd, args);
      answer(uid, null, data);
    }, function (err) {
      answer(uid, transformError(err), null);
    });
  });

  var wrapAsk = function wrapAsk(cmd, args, timeoutToOverride) {
    var uid = 'ipcp_' + new Date() * 1 + '_' + Math.round(Math.random() * 1000);
    var finalTimeout = timeoutToOverride || timeout;

    // Note: make it possible to disable timeout
    if (finalTimeout > 0) {
      setTimeout(function () {
        var reject;

        if (askCache && askCache[uid]) {
          reject = askCache[uid][1];
          askCache[uid] = TO_BE_REMOVED;
          reject(new Error('ipcPromise: onAsk timeout ' + finalTimeout + ' for cmd "' + cmd + '", args "' + args + '"'));
        }
      }, finalTimeout);
    }

    ask(uid, cmd, args || []);

    return new Promise(function (resolve, reject) {
      askCache[uid] = [resolve, reject];
    });
  };

  var wrapOnAsk = function wrapOnAsk(fn) {
    if (Array.isArray(handler)) {
      handler.push(fn);
    } else {
      handler = [fn];
    }

    var ps = unhandledAsk.map(function (task) {
      return new Promise(function (resolve, reject) {
        runHandlers(handler, task.cmd, task.args, resolve, reject);
      }).then(function (data) {
        // note: handler doens't handle the cmd => return undefined, should wait for timeout
        if (data === undefined) return;
        answer(task.uid, null, data);
        return task.uid;
      }, function (err) {
        answer(task.uid, err, null);
        return task.uid;
      });
    });

    Promise.all(ps).then(function (uids) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = uids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var uid = _step.value;

          if (uid === undefined) continue;

          var index = unhandledAsk.findIndex(function (item) {
            return item.uid === uid;
          });

          unhandledAsk.splice(index, 1);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  };

  var destroy = function destroy(noReject) {
    userDestroy && userDestroy();

    ask = null;
    answer = null;
    onAnswer = null;
    onAsk = null;
    unhandledAsk = null;

    if (!noReject) {
      Object.keys(askCache).forEach(function (uid) {
        var tuple = askCache[uid];
        var reject = tuple[1];
        reject && reject(new Error('IPC Promise has been Destroyed.'));
        delete askCache[uid];
      });
    }
  };

  var waitForReady = function waitForReady(checkReady, fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var makeSureReady = retry(checkReady, {
        shouldRetry: function shouldRetry() {
          return true;
        },
        retryInterval: 100,
        timeout: 5000
      });

      return makeSureReady().then(function () {
        return fn.apply(undefined, args);
      });
    };
  };

  return {
    ask: waitForReady(checkReady, wrapAsk),
    onAsk: wrapOnAsk,
    destroy: destroy
  };
}

ipcPromise.serialize = function (obj) {
  return {
    ask: function ask(cmd, args, timeout) {
      return obj.ask(cmd, JSON.stringify(args), timeout);
    },

    onAsk: function onAsk(fn) {
      return obj.onAsk(function (cmd, args) {
        return fn(cmd, JSON.parse(args));
      });
    },

    destroy: obj.destroy
  };
};

module.exports = ipcPromise;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DesktopScreenshot;
(function (DesktopScreenshot) {
    let RequestType;
    (function (RequestType) {
        RequestType["DisplayVisualResult"] = "display_visual_result";
        RequestType["DisplayOcrResult"] = "display_ocr_result";
        RequestType["Capture"] = "capture";
    })(RequestType = DesktopScreenshot.RequestType || (DesktopScreenshot.RequestType = {}));
    let ImageSource;
    (function (ImageSource) {
        ImageSource[ImageSource["Storage"] = 0] = "Storage";
        ImageSource[ImageSource["HardDrive"] = 1] = "HardDrive";
        ImageSource[ImageSource["DataUrl"] = 2] = "DataUrl";
    })(ImageSource = DesktopScreenshot.ImageSource || (DesktopScreenshot.ImageSource = {}));
    let RectType;
    (function (RectType) {
        RectType[RectType["Match"] = 0] = "Match";
        RectType[RectType["Reference"] = 1] = "Reference";
        RectType[RectType["BestMatch"] = 2] = "BestMatch";
        RectType[RectType["ReferenceOfBestMatch"] = 3] = "ReferenceOfBestMatch";
    })(RectType = DesktopScreenshot.RectType || (DesktopScreenshot.RectType = {}));
})(DesktopScreenshot = exports.DesktopScreenshot || (exports.DesktopScreenshot = {}));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(__webpack_require__(349));
const types_1 = __webpack_require__(83);
const utils_1 = __webpack_require__(4);
const ts_utils_1 = __webpack_require__(18);
function runOCR(options) {
    const singleRun = () => {
        return options.getApiUrlAndApiKey()
            .then(server => {
            const { url, key } = server;
            const f = new FormData();
            f.append('apikey', key);
            f.append('language', options.language);
            f.append('scale', 'true');
            f.append('isOverlayRequired', '' + options.isOverlayRequired);
            if (typeof options.image === 'string') {
                f.append('file', utils_1.dataURItoBlob(options.image), 'unknown.png');
            }
            else {
                f.append('file', options.image.blob, options.image.name);
            }
            const startTime = new Date().getTime();
            if (options.willSendRequest) {
                options.willSendRequest({ server, startTime });
            }
            return utils_1.withTimeout(options.singleApiTimeout, () => {
                return superagent_1.default.post(url)
                    .send(f);
            })
                .then((res) => {
                if (options.didGetResponse) {
                    return options.didGetResponse({
                        server,
                        startTime,
                        endTime: new Date().getTime(),
                        response: res.body,
                        error: null
                    })
                        .then(() => res, () => res);
                }
                return res;
            }, (e) => {
                const err = getApiError(e);
                if (options.didGetResponse) {
                    return options.didGetResponse({
                        server,
                        startTime,
                        endTime: new Date().getTime(),
                        response: null,
                        error: err
                    })
                        .then(() => { throw err; }, () => { throw err; });
                }
                throw e;
            })
                .then(onApiReturn, onApiError)
                .catch(e => {
                if (/timeout/i.test(e.message)) {
                    throw new Error(`OCR request timeout ${(options.singleApiTimeout / 1000).toFixed(1)}s`);
                }
                else {
                    throw e;
                }
            });
        });
    };
    const run = ts_utils_1.retry(singleRun, {
        // We don't want timeout mechanism from retry, so just make it big enough
        timeout: options.singleApiTimeout * 10,
        retryInterval: 0,
        shouldRetry: options.shouldRetry || (() => false)
    });
    return utils_1.withTimeout(options.totalTimeout, run)
        .catch(e => {
        if (/timeout/i.test(e.message)) {
            throw new Error('OCR timeout');
        }
        else {
            throw e;
        }
    });
}
exports.runOCR = runOCR;
function getApiError(e) {
    if (e.response && typeof e.response.body === 'string') {
        return new Error(e.response.body);
    }
    return e;
}
function onApiError(e) {
    console.error(e);
    throw getApiError(e);
}
function onApiReturn(res) {
    guardOCRResponse(res.body);
    return res.body;
}
function guardOCRResponse(data) {
    switch (data.OCRExitCode) {
        case types_1.OCRExitCode.AllParsed:
            return;
        case types_1.OCRExitCode.PartiallyParsed:
            throw new Error([
                'Parsed Partially (Only few pages out of all the pages parsed successfully)',
                data.ErrorMessage || '',
                data.ErrorDetails || '',
            ]
                .filter(s => s.length > 0)
                .join('; '));
        case types_1.OCRExitCode.Failed:
            throw new Error([
                'OCR engine fails to parse an image',
                data.ErrorMessage || '',
                data.ErrorDetails || '',
            ]
                .filter(s => s.length > 0)
                .join('; '));
        case types_1.OCRExitCode.Fatal:
            throw new Error([
                'Fatal error occurs during parsing',
                data.ErrorMessage || '',
                data.ErrorDetails || '',
            ]
                .filter(s => s.length > 0)
                .join('; '));
    }
}
exports.guardOCRResponse = guardOCRResponse;
function wordIteratorFromParseResults(parseResults) {
    let pageIndex = 0;
    let lineIndex = 0;
    let wordIndex = 0;
    const next = () => {
        const page = parseResults[pageIndex];
        const currentLines = page ? page.TextOverlay.Lines : [];
        const line = page ? page.TextOverlay.Lines[lineIndex] : null;
        const currentWords = line ? line.Words : [];
        const word = line ? line.Words[wordIndex] : null;
        if (!word) {
            return {
                done: true,
                value: null
            };
        }
        const value = {
            word,
            position: {
                pageIndex,
                lineIndex,
                wordIndex
            }
        };
        [pageIndex, lineIndex, wordIndex] = (() => {
            let nextWordIndex = wordIndex + 1;
            let nextLineIndex = lineIndex;
            let nextPageIndex = pageIndex;
            if (nextWordIndex >= currentWords.length) {
                nextWordIndex = 0;
                nextLineIndex += 1;
            }
            if (nextLineIndex >= currentLines.length) {
                nextLineIndex = 0;
                nextPageIndex += 1;
            }
            if (nextPageIndex >= parseResults.length) {
                return [-1, -1, -1];
            }
            return [nextPageIndex, nextLineIndex, nextWordIndex];
        })();
        return {
            value,
            done: false
        };
    };
    return { next };
}
exports.wordIteratorFromParseResults = wordIteratorFromParseResults;
function iterateThroughParseResults(parseResults, fn) {
    const iterator = wordIteratorFromParseResults(parseResults);
    while (true) {
        const { done, value } = iterator.next();
        if (done)
            break;
        const shouldContinue = fn(value);
        if (!shouldContinue)
            break;
    }
}
exports.iterateThroughParseResults = iterateThroughParseResults;
function searchTextInOCRResponse(data) {
    const { text, index, parsedResults, exhaust } = data;
    const isExactMatch = /^\[.*\]$/.test(text);
    const realText = isExactMatch ? text.slice(1, -1) : text;
    const words = realText.split(/\s+/g).map(s => s.trim()).filter(s => s.length > 0);
    if (index < 0 || Math.round(index) !== index) {
        throw new Error('index must be positive integer');
    }
    let found = [];
    let wordIndex = 0;
    let matchIndex = 0;
    iterateThroughParseResults(parsedResults, (wordWithPos) => {
        const matchType = (() => {
            if (isExactMatch)
                return WordMatchType.Full;
            if (words.length === 1)
                return WordMatchType.AnyPart;
            if (wordIndex === 0)
                return WordMatchType.Postfix;
            if (wordIndex === words.length - 1)
                return WordMatchType.Prefix;
            return WordMatchType.Full;
        })();
        if (!hasWordMatch(words[wordIndex], wordWithPos.word.WordText, matchType)) {
            found[matchIndex] = [];
            wordIndex = 0;
            return true;
        }
        found[matchIndex] = found[matchIndex] || [];
        found[matchIndex].push(wordWithPos);
        wordIndex += 1;
        // Whether it's the last word
        if (wordIndex >= words.length) {
            matchIndex += 1;
            wordIndex = 0;
            const shouldContinue = exhaust || matchIndex <= index;
            return shouldContinue;
        }
        return true;
    });
    const all = found.filter(pWords => pWords.length === words.length)
        .map(pWords => ({
        words: pWords,
        // Note: similarity is useless in current implementation
        similarity: 1
    }));
    const hit = all[index] || null;
    return {
        hit,
        all,
        exhaust
    };
}
exports.searchTextInOCRResponse = searchTextInOCRResponse;
function isWordEqual(a, b) {
    if (!a || !b)
        return false;
    return a.trim().toLowerCase() === b.trim().toLowerCase();
}
exports.isWordEqual = isWordEqual;
var WordMatchType;
(function (WordMatchType) {
    WordMatchType[WordMatchType["Full"] = 0] = "Full";
    WordMatchType[WordMatchType["Prefix"] = 1] = "Prefix";
    WordMatchType[WordMatchType["Postfix"] = 2] = "Postfix";
    WordMatchType[WordMatchType["AnyPart"] = 3] = "AnyPart";
})(WordMatchType = exports.WordMatchType || (exports.WordMatchType = {}));
function hasWordMatch(pattern, target, matchType) {
    if (!pattern || !target)
        return false;
    const lowerPattern = pattern.trim().toLowerCase();
    const lowerTarget = target.trim().toLowerCase();
    switch (matchType) {
        case WordMatchType.Full: {
            return lowerPattern === lowerTarget;
        }
        case WordMatchType.Prefix: {
            return lowerTarget.indexOf(lowerPattern) === 0;
        }
        case WordMatchType.Postfix: {
            const index = lowerTarget.indexOf(lowerPattern);
            return index !== -1 && index === lowerTarget.length - lowerPattern.length;
        }
        case WordMatchType.AnyPart: {
            return lowerTarget.indexOf(lowerPattern) !== -1;
        }
    }
}
exports.hasWordMatch = hasWordMatch;
function isWordPositionEqual(a, b) {
    return a.pageIndex === b.pageIndex &&
        a.lineIndex === b.lineIndex &&
        a.wordIndex === b.wordIndex;
}
exports.isWordPositionEqual = isWordPositionEqual;
function allWordsWithPosition(parseResults, excludePositions) {
    const result = [];
    const isAtKnownPosition = (wordWithPos) => {
        return excludePositions.reduce((prev, pos) => {
            if (prev)
                return true;
            return isWordPositionEqual(pos, wordWithPos.position);
        }, false);
    };
    iterateThroughParseResults(parseResults, (wordWithPos) => {
        if (!isAtKnownPosition(wordWithPos)) {
            result.push(wordWithPos);
        }
        return true;
    });
    return result;
}
exports.allWordsWithPosition = allWordsWithPosition;
function ocrMatchRect(match) {
    const rectsByLine = match.words.reduce((prev, cur) => {
        const key = `${cur.position.pageIndex}_${cur.position.lineIndex}`;
        if (!prev[key]) {
            prev[key] = {
                x: cur.word.Left,
                y: cur.word.Top,
                width: cur.word.Width,
                height: cur.word.Height
            };
        }
        else {
            prev[key] = Object.assign({}, prev[key], { width: Math.max(prev[key].width, cur.word.Left + cur.word.Width - prev[key].x), height: Math.max(prev[key].height, cur.word.Top + cur.word.Height - prev[key].y) });
        }
        return prev;
    }, {});
    const widestRect = Object.keys(rectsByLine).reduce((prev, key) => {
        return prev.width < rectsByLine[key].width ? rectsByLine[key] : prev;
    }, { x: 0, y: 0, width: 0, height: 0 });
    return widestRect;
}
exports.ocrMatchRect = ocrMatchRect;
function ocrMatchCenter(match) {
    const rect = ocrMatchRect(match);
    return {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2
    };
}
exports.ocrMatchCenter = ocrMatchCenter;
function scaleOcrParseResultWord(word, scale) {
    return Object.assign({}, word, { Width: scale * word.Width, Height: scale * word.Height, Left: scale * word.Left, Top: scale * word.Top });
}
exports.scaleOcrParseResultWord = scaleOcrParseResultWord;
function scaleOcrResponseCoordinates(res, scale) {
    const data = ts_utils_1.safeUpdateIn(['ParsedResults', '[]', 'TextOverlay', 'Lines', '[]', 'Words', '[]'], (word) => scaleOcrParseResultWord(word, scale), res);
    return data;
}
exports.scaleOcrResponseCoordinates = scaleOcrResponseCoordinates;
function scaleOcrTextSearchMatch(match, scale) {
    const data = ts_utils_1.safeUpdateIn(['words', '[]', 'word'], (word) => scaleOcrParseResultWord(word, scale), match);
    return data;
}
exports.scaleOcrTextSearchMatch = scaleOcrTextSearchMatch;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OCRExitCode;
(function (OCRExitCode) {
    OCRExitCode[OCRExitCode["AllParsed"] = 1] = "AllParsed";
    OCRExitCode[OCRExitCode["PartiallyParsed"] = 2] = "PartiallyParsed";
    OCRExitCode[OCRExitCode["Failed"] = 3] = "Failed";
    OCRExitCode[OCRExitCode["Fatal"] = 4] = "Fatal";
})(OCRExitCode = exports.OCRExitCode || (exports.OCRExitCode = {}));
var FileParseExitCode;
(function (FileParseExitCode) {
    FileParseExitCode[FileParseExitCode["FileNotFound"] = 0] = "FileNotFound";
    FileParseExitCode[FileParseExitCode["Success"] = 1] = "Success";
    FileParseExitCode[FileParseExitCode["ParseError"] = -10] = "ParseError";
    FileParseExitCode[FileParseExitCode["Timeout"] = -20] = "Timeout";
    FileParseExitCode[FileParseExitCode["ValidationError"] = -30] = "ValidationError";
    FileParseExitCode[FileParseExitCode["UnknownError"] = -99] = "UnknownError";
})(FileParseExitCode = exports.FileParseExitCode || (exports.FileParseExitCode = {}));
var OcrHighlightType;
(function (OcrHighlightType) {
    OcrHighlightType[OcrHighlightType["Identified"] = 0] = "Identified";
    OcrHighlightType[OcrHighlightType["Matched"] = 1] = "Matched";
    OcrHighlightType[OcrHighlightType["TopMatched"] = 2] = "TopMatched";
})(OcrHighlightType = exports.OcrHighlightType || (exports.OcrHighlightType = {}));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function consecutive(c) {
    if (typeof c === 'boolean') {
        return {
            interval: 0,
            count: c ? 1 : 0
        };
    }
    return c;
}
exports.consecutive = consecutive;
const timeout = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
};
function withConsecutive(c, fn) {
    const { interval, count } = consecutive(c);
    let counter = count;
    const next = (pass) => {
        if (!pass)
            throw new Error('failed to run consecutive');
        if (counter-- <= 0)
            return Promise.resolve(true);
        return timeout(interval).then(fn).then(next);
    };
    return fn()
        .then(next);
}
exports.withConsecutive = withConsecutive;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/dom-element-is-natively-editable/index.js
var dom_element_is_natively_editable = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/kd-glob-to-regexp/index.js
var kd_glob_to_regexp = __webpack_require__(151);
var kd_glob_to_regexp_default = /*#__PURE__*/__webpack_require__.n(kd_glob_to_regexp);

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__(4);

// EXTERNAL MODULE: ./src/common/dom_utils.ts
var dom_utils = __webpack_require__(21);

// EXTERNAL MODULE: ./src/common/ipc/cs_postmessage.js
var cs_postmessage = __webpack_require__(49);

// EXTERNAL MODULE: ./src/common/web_extension.js
var web_extension = __webpack_require__(10);
var web_extension_default = /*#__PURE__*/__webpack_require__.n(web_extension);

// EXTERNAL MODULE: ./src/common/log.ts
var log = __webpack_require__(11);
var log_default = /*#__PURE__*/__webpack_require__.n(log);

// EXTERNAL MODULE: ./src/common/drag_mock/index.js
var drag_mock = __webpack_require__(324);
var drag_mock_default = /*#__PURE__*/__webpack_require__.n(drag_mock);

// CONCATENATED MODULE: ./src/common/lib/keysim.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CTRL = 1 << 0;
var META = 1 << 1;
var ALT = 1 << 2;
var SHIFT = 1 << 3;

// Key Events
var KeyEvents = {
  DOWN: 1 << 0,
  PRESS: 1 << 1,
  UP: 1 << 2,
  INPUT: 1 << 3
};
KeyEvents.ALL = KeyEvents.DOWN | KeyEvents.PRESS | KeyEvents.UP | KeyEvents.INPUT;

/**
 * Represents a keystroke, or a single key code with a set of active modifiers.
 *
 * @class Keystroke
 */
var Keystroke =
/**
 * @param {number} modifiers A bitmask formed by CTRL, META, ALT, and SHIFT.
 * @param {number} keyCode
 */
function Keystroke(modifiers, keyCode) {
  _classCallCheck(this, Keystroke);

  this.modifiers = modifiers;
  this.ctrlKey = !!(modifiers & CTRL);
  this.metaKey = !!(modifiers & META);
  this.altKey = !!(modifiers & ALT);
  this.shiftKey = !!(modifiers & SHIFT);
  this.keyCode = keyCode;
}

/**
 * Gets the bitmask value for the "control" modifier.
 *
 * @type {number}
 */


/**
 * Gets the bitmask value for the "meta" modifier.
 *
 * @return {number}
 */


/**
 * Gets the bitmask value for the "alt" modifier.
 *
 * @return {number}
 */


/**
 * Gets the bitmask value for the "shift" modifier.
 *
 * @return {number}
 */
;

/**
 * Simulates a keyboard with a particular key-to-character and key-to-action
 * mapping. Use `US_ENGLISH` to get a pre-configured keyboard.
 */
Keystroke.CTRL = CTRL;
Keystroke.META = META;
Keystroke.ALT = ALT;
Keystroke.SHIFT = SHIFT;
var keysim_Keyboard = function () {
  /**
   * @param {Object.<number, Keystroke>} charCodeKeyCodeMap
   * @param {Object.<string, number>} actionKeyCodeMap
   */
  function Keyboard(charCodeKeyCodeMap, actionKeyCodeMap) {
    _classCallCheck(this, Keyboard);

    this._charCodeKeyCodeMap = charCodeKeyCodeMap;
    this._actionKeyCodeMap = actionKeyCodeMap;
  }

  /**
   * Determines the character code generated by pressing the given keystroke.
   *
   * @param {Keystroke} keystroke
   * @return {?number}
   */


  _createClass(Keyboard, [{
    key: 'charCodeForKeystroke',
    value: function charCodeForKeystroke(keystroke) {
      var map = this._charCodeKeyCodeMap;
      for (var charCode in map) {
        if (Object.prototype.hasOwnProperty.call(map, charCode)) {
          var keystrokeForCharCode = map[charCode];
          if (keystroke.keyCode === keystrokeForCharCode.keyCode && keystroke.modifiers === keystrokeForCharCode.modifiers) {
            return parseInt(charCode, 10);
          }
        }
      }
      return null;
    }

    /**
     * Creates an event ready for dispatching onto the given target.
     *
     * @param {string} type One of "keydown", "keypress", "keyup", "textInput" or "input".
     * @param {Keystroke} keystroke
     * @param {HTMLElement} target
     * @return {Event}
     */

  }, {
    key: 'createEventFromKeystroke',
    value: function createEventFromKeystroke(type, keystroke, target) {
      var document = target.ownerDocument;
      var window = document.defaultView;
      var Event = window.Event;

      var event = void 0;

      try {
        event = new Event(type);
      } catch (e) {
        event = document.createEvent('UIEvents');
      }

      event.initEvent(type, true, true);

      switch (type) {
        case 'textInput':
          event.data = String.fromCharCode(this.charCodeForKeystroke(keystroke));
          break;

        case 'keydown':
        case 'keypress':
        case 'keyup':
          event.shiftKey = keystroke.shiftKey;
          event.altKey = keystroke.altKey;
          event.metaKey = keystroke.metaKey;
          event.ctrlKey = keystroke.ctrlKey;
          event.keyCode = type === 'keypress' ? this.charCodeForKeystroke(keystroke) : keystroke.keyCode;
          event.charCode = type === 'keypress' ? event.keyCode : 0;
          event.which = event.keyCode;
          break;
      }

      return event;
    }

    /**
     * Fires the correct sequence of events on the given target as if the given
     * action was undertaken by a human.
     *
     * @param {string} action e.g. "alt+shift+left" or "backspace"
     * @param {HTMLElement} target
     */

  }, {
    key: 'dispatchEventsForAction',
    value: function dispatchEventsForAction(action, target) {
      var keystroke = this.keystrokeForAction(action);
      this.dispatchEventsForKeystroke(keystroke, target);
    }

    /**
     * Fires the correct sequence of events on the given target as if the given
     * input had been typed by a human.
     *
     * @param {string} input
     * @param {HTMLElement} target
     */

  }, {
    key: 'dispatchEventsForInput',
    value: function dispatchEventsForInput(input, target) {
      var currentModifierState = 0;
      for (var i = 0, length = input.length; i < length; i++) {
        var keystroke = this.keystrokeForCharCode(input.charCodeAt(i));
        if (!keystroke) continue;

        this.dispatchModifierStateTransition(target, currentModifierState, keystroke.modifiers);
        this.dispatchEventsForKeystroke(keystroke, target, false);
        currentModifierState = keystroke.modifiers;
      }
      this.dispatchModifierStateTransition(target, currentModifierState, 0);
    }

    /**
     * Fires the correct sequence of events on the given target as if the given
     * keystroke was performed by a human. When simulating, for example, typing
     * the letter "A" (assuming a U.S. English keyboard) then the sequence will
     * look like this:
     *
     *   keydown   keyCode=16 (SHIFT) charCode=0      shiftKey=true
     *   keydown   keyCode=65 (A)     charCode=0      shiftKey=true
     *   keypress  keyCode=65 (A)     charCode=65 (A) shiftKey=true
     *   textInput data=A
     *   input
     *   keyup     keyCode=65 (A)     charCode=0      shiftKey=true
     *   keyup     keyCode=16 (SHIFT) charCode=0      shiftKey=false
     *
     * If the keystroke would not cause a character to be input, such as when
     * pressing alt+shift+left, the sequence looks like this:
     *
     *   keydown   keyCode=16 (SHIFT) charCode=0 altKey=false shiftKey=true
     *   keydown   keyCode=18 (ALT)   charCode=0 altKey=true  shiftKey=true
     *   keydown   keyCode=37 (LEFT)  charCode=0 altKey=true  shiftKey=true
     *   keyup     keyCode=37 (LEFT)  charCode=0 altKey=true  shiftKey=true
     *   keyup     keyCode=18 (ALT)   charCode=0 altKey=false shiftKey=true
     *   keyup     keyCode=16 (SHIFT) charCode=0 altKey=false shiftKey=false
     *
     * To disable handling of modifier keys, call with `transitionModifers` set
     * to false. Doing so will omit the keydown and keyup events associated with
     * shift, ctrl, alt, and meta keys surrounding the actual keystroke.
     *
     * @param {Keystroke} keystroke
     * @param {HTMLElement} target
     * @param {boolean=} transitionModifiers
     * @param {number} events
     */

  }, {
    key: 'dispatchEventsForKeystroke',
    value: function dispatchEventsForKeystroke(keystroke, target) {
      var transitionModifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var events = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : KeyEvents.ALL;

      if (!keystroke) return;

      if (transitionModifiers) {
        this.dispatchModifierStateTransition(target, 0, keystroke.modifiers, events);
      }

      var keydownEvent = void 0;
      if (events & KeyEvents.DOWN) {
        keydownEvent = this.createEventFromKeystroke('keydown', keystroke, target);
      }

      if (keydownEvent && target.dispatchEvent(keydownEvent) && this.targetCanReceiveTextInput(target)) {
        var keypressEvent = void 0;
        if (events & KeyEvents.PRESS) {
          keypressEvent = this.createEventFromKeystroke('keypress', keystroke, target);
        }
        if (keypressEvent && keypressEvent.charCode && target.dispatchEvent(keypressEvent)) {
          if (events & KeyEvents.INPUT) {
            var textinputEvent = this.createEventFromKeystroke('textInput', keystroke, target);
            target.dispatchEvent(textinputEvent);

            var inputEvent = this.createEventFromKeystroke('input', keystroke, target);
            target.dispatchEvent(inputEvent);
          }
        }
      }

      if (events & KeyEvents.UP) {
        var keyupEvent = this.createEventFromKeystroke('keyup', keystroke, target);
        target.dispatchEvent(keyupEvent);
      }

      if (transitionModifiers) {
        this.dispatchModifierStateTransition(target, keystroke.modifiers, 0);
      }
    }

    /**
     * Transitions from one modifier state to another by dispatching key events.
     *
     * @param {EventTarget} target
     * @param {number} fromModifierState
     * @param {number} toModifierState
     * @param {number} events
     * @private
     */

  }, {
    key: 'dispatchModifierStateTransition',
    value: function dispatchModifierStateTransition(target, fromModifierState, toModifierState) {
      var events = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : KeyEvents.ALL;

      var currentModifierState = fromModifierState;
      var didHaveMeta = (fromModifierState & META) === META;
      var willHaveMeta = (toModifierState & META) === META;
      var didHaveCtrl = (fromModifierState & CTRL) === CTRL;
      var willHaveCtrl = (toModifierState & CTRL) === CTRL;
      var didHaveShift = (fromModifierState & SHIFT) === SHIFT;
      var willHaveShift = (toModifierState & SHIFT) === SHIFT;
      var didHaveAlt = (fromModifierState & ALT) === ALT;
      var willHaveAlt = (toModifierState & ALT) === ALT;

      var includeKeyUp = events & KeyEvents.UP;
      var includeKeyDown = events & KeyEvents.DOWN;

      if (includeKeyUp && didHaveMeta === true && willHaveMeta === false) {
        // Release the meta key.
        currentModifierState &= ~META;
        target.dispatchEvent(this.createEventFromKeystroke('keyup', new Keystroke(currentModifierState, this._actionKeyCodeMap.META), target));
      }

      if (includeKeyUp && didHaveCtrl === true && willHaveCtrl === false) {
        // Release the ctrl key.
        currentModifierState &= ~CTRL;
        target.dispatchEvent(this.createEventFromKeystroke('keyup', new Keystroke(currentModifierState, this._actionKeyCodeMap.CTRL), target));
      }

      if (includeKeyUp && didHaveShift === true && willHaveShift === false) {
        // Release the shift key.
        currentModifierState &= ~SHIFT;
        target.dispatchEvent(this.createEventFromKeystroke('keyup', new Keystroke(currentModifierState, this._actionKeyCodeMap.SHIFT), target));
      }

      if (includeKeyUp && didHaveAlt === true && willHaveAlt === false) {
        // Release the alt key.
        currentModifierState &= ~ALT;
        target.dispatchEvent(this.createEventFromKeystroke('keyup', new Keystroke(currentModifierState, this._actionKeyCodeMap.ALT), target));
      }

      if (includeKeyDown && didHaveMeta === false && willHaveMeta === true) {
        // Press the meta key.
        currentModifierState |= META;
        target.dispatchEvent(this.createEventFromKeystroke('keydown', new Keystroke(currentModifierState, this._actionKeyCodeMap.META), target));
      }

      if (includeKeyDown && didHaveCtrl === false && willHaveCtrl === true) {
        // Press the ctrl key.
        currentModifierState |= CTRL;
        target.dispatchEvent(this.createEventFromKeystroke('keydown', new Keystroke(currentModifierState, this._actionKeyCodeMap.CTRL), target));
      }

      if (includeKeyDown && didHaveShift === false && willHaveShift === true) {
        // Press the shift key.
        currentModifierState |= SHIFT;
        target.dispatchEvent(this.createEventFromKeystroke('keydown', new Keystroke(currentModifierState, this._actionKeyCodeMap.SHIFT), target));
      }

      if (includeKeyDown && didHaveAlt === false && willHaveAlt === true) {
        // Press the alt key.
        currentModifierState |= ALT;
        target.dispatchEvent(this.createEventFromKeystroke('keydown', new Keystroke(currentModifierState, this._actionKeyCodeMap.ALT), target));
      }

      if (currentModifierState !== toModifierState) {
        throw new Error('internal error, expected modifier state: ' + toModifierState + (', got: ' + currentModifierState));
      }
    }

    /**
     * Returns the keystroke associated with the given action.
     *
     * @param {string} action
     * @return {?Keystroke}
     */

  }, {
    key: 'keystrokeForAction',
    value: function keystrokeForAction(action) {
      var keyCode = null;
      var modifiers = 0;

      // Note: when it comes to a single character as '+',
      // should not take it as a key combiniation (no action.split)
      var parts = action.length === 1 ? [action] : action.split('+');
      var lastPart = parts.pop();

      parts.forEach(function (part) {
        switch (part.toUpperCase()) {
          case 'CTRL':
            modifiers |= CTRL;
            break;
          case 'META':
            modifiers |= META;
            break;
          case 'ALT':
            modifiers |= ALT;
            break;
          case 'SHIFT':
            modifiers |= SHIFT;
            break;
          default:
            console.error('parts', parts);
            throw new Error('in "' + action + '", invalid modifier: ' + part);
        }
      });

      if (lastPart.toUpperCase() in this._actionKeyCodeMap) {
        keyCode = this._actionKeyCodeMap[lastPart.toUpperCase()];
      } else if (lastPart.length === 1) {
        var lastPartKeystroke = this.keystrokeForCharCode(lastPart.charCodeAt(0));
        if (!lastPartKeystroke) return null;

        modifiers |= lastPartKeystroke.modifiers;
        keyCode = lastPartKeystroke.keyCode;
      } else {
        throw new Error('in "' + action + '", invalid action: ' + lastPart);
      }

      return new Keystroke(modifiers, keyCode);
    }

    /**
     * Gets the keystroke used to generate the given character code.
     *
     * @param {number} charCode
     * @return {?Keystroke}
     */

  }, {
    key: 'keystrokeForCharCode',
    value: function keystrokeForCharCode(charCode) {
      return this._charCodeKeyCodeMap[charCode] || null;
    }

    /**
     * @param {EventTarget} target
     * @private
     */

  }, {
    key: 'targetCanReceiveTextInput',
    value: function targetCanReceiveTextInput(target) {
      if (!target) {
        return false;
      }

      return Object(dom_element_is_natively_editable["a" /* default */])(target);
    }
  }]);

  return Keyboard;
}();

var US_ENGLISH_CHARCODE_KEYCODE_MAP = {
  32: new Keystroke(0, 32), // <space>
  33: new Keystroke(SHIFT, 49), // !
  34: new Keystroke(SHIFT, 222), // "
  35: new Keystroke(SHIFT, 51), // #
  36: new Keystroke(SHIFT, 52), // $
  37: new Keystroke(SHIFT, 53), // %
  38: new Keystroke(SHIFT, 55), // &
  39: new Keystroke(0, 222), // '
  40: new Keystroke(SHIFT, 57), // (
  41: new Keystroke(SHIFT, 48), // )
  42: new Keystroke(SHIFT, 56), // *
  43: new Keystroke(SHIFT, 187), // +
  44: new Keystroke(0, 188), // ,
  45: new Keystroke(0, 189), // -
  46: new Keystroke(0, 190), // .
  47: new Keystroke(0, 191), // /
  48: new Keystroke(0, 48), // 0
  49: new Keystroke(0, 49), // 1
  50: new Keystroke(0, 50), // 2
  51: new Keystroke(0, 51), // 3
  52: new Keystroke(0, 52), // 4
  53: new Keystroke(0, 53), // 5
  54: new Keystroke(0, 54), // 6
  55: new Keystroke(0, 55), // 7
  56: new Keystroke(0, 56), // 8
  57: new Keystroke(0, 57), // 9
  58: new Keystroke(SHIFT, 186), // :
  59: new Keystroke(0, 186), // ;
  60: new Keystroke(SHIFT, 188), // <
  61: new Keystroke(0, 187), // =
  62: new Keystroke(SHIFT, 190), // >
  63: new Keystroke(SHIFT, 191), // ?
  64: new Keystroke(SHIFT, 50), // @
  65: new Keystroke(SHIFT, 65), // A
  66: new Keystroke(SHIFT, 66), // B
  67: new Keystroke(SHIFT, 67), // C
  68: new Keystroke(SHIFT, 68), // D
  69: new Keystroke(SHIFT, 69), // E
  70: new Keystroke(SHIFT, 70), // F
  71: new Keystroke(SHIFT, 71), // G
  72: new Keystroke(SHIFT, 72), // H
  73: new Keystroke(SHIFT, 73), // I
  74: new Keystroke(SHIFT, 74), // J
  75: new Keystroke(SHIFT, 75), // K
  76: new Keystroke(SHIFT, 76), // L
  77: new Keystroke(SHIFT, 77), // M
  78: new Keystroke(SHIFT, 78), // N
  79: new Keystroke(SHIFT, 79), // O
  80: new Keystroke(SHIFT, 80), // P
  81: new Keystroke(SHIFT, 81), // Q
  82: new Keystroke(SHIFT, 82), // R
  83: new Keystroke(SHIFT, 83), // S
  84: new Keystroke(SHIFT, 84), // T
  85: new Keystroke(SHIFT, 85), // U
  86: new Keystroke(SHIFT, 86), // V
  87: new Keystroke(SHIFT, 87), // W
  88: new Keystroke(SHIFT, 88), // X
  89: new Keystroke(SHIFT, 89), // Y
  90: new Keystroke(SHIFT, 90), // Z
  91: new Keystroke(0, 219), // [
  92: new Keystroke(0, 220), // \
  93: new Keystroke(0, 221), // ]
  94: new Keystroke(SHIFT, 54), // ^
  95: new Keystroke(SHIFT, 189), // _
  96: new Keystroke(0, 192), // `
  97: new Keystroke(0, 65), // a
  98: new Keystroke(0, 66), // b
  99: new Keystroke(0, 67), // c
  100: new Keystroke(0, 68), // d
  101: new Keystroke(0, 69), // e
  102: new Keystroke(0, 70), // f
  103: new Keystroke(0, 71), // g
  104: new Keystroke(0, 72), // h
  105: new Keystroke(0, 73), // i
  106: new Keystroke(0, 74), // j
  107: new Keystroke(0, 75), // k
  108: new Keystroke(0, 76), // l
  109: new Keystroke(0, 77), // m
  110: new Keystroke(0, 78), // n
  111: new Keystroke(0, 79), // o
  112: new Keystroke(0, 80), // p
  113: new Keystroke(0, 81), // q
  114: new Keystroke(0, 82), // r
  115: new Keystroke(0, 83), // s
  116: new Keystroke(0, 84), // t
  117: new Keystroke(0, 85), // u
  118: new Keystroke(0, 86), // v
  119: new Keystroke(0, 87), // w
  120: new Keystroke(0, 88), // x
  121: new Keystroke(0, 89), // y
  122: new Keystroke(0, 90), // z
  123: new Keystroke(SHIFT, 219), // {
  124: new Keystroke(SHIFT, 220), // |
  125: new Keystroke(SHIFT, 221), // }
  126: new Keystroke(SHIFT, 192) // ~
};

var US_ENGLISH_ACTION_KEYCODE_MAP = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPSLOCK: 20,
  ESCAPE: 27,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  INSERT: 45,
  DELETE: 46,
  META: 91,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123
};

/**
 * Gets a keyboard instance configured as a U.S. English keyboard would be.
 *
 * @return {Keyboard}
 */
keysim_Keyboard.US_ENGLISH = new keysim_Keyboard(US_ENGLISH_CHARCODE_KEYCODE_MAP, US_ENGLISH_ACTION_KEYCODE_MAP);
// CONCATENATED MODULE: ./src/common/send_keys.js




var keyboard = keysim_Keyboard.US_ENGLISH;

var findParentByTag = function findParentByTag(el, tag) {
  var p = el;

  // eslint-disable-next-line no-cond-assign
  while (p = p.parentNode) {
    if (p.tagName === tag.toUpperCase()) {
      return p;
    }
  }

  return null;
};

var send_keys_splitStringToChars = function splitStringToChars(str) {
  var specialKeys = ['KEY_LEFT', 'KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_PGUP', 'KEY_PAGE_UP', 'KEY_PGDN', 'KEY_PAGE_DOWN', 'KEY_BKSP', 'KEY_BACKSPACE', 'KEY_DEL', 'KEY_DELETE', 'KEY_ENTER', 'KEY_TAB'];
  var reg = new RegExp('\\$\\{(' + specialKeys.join('|') + ')\\}');
  var parts = Object(utils["splitKeep"])(reg, str);

  return parts.reduce(function (prev, cur) {
    if (reg.test(cur)) {
      prev.push(cur);
    } else {
      prev = prev.concat(cur.split(''));
    }

    return prev;
  }, []);
};

var getKeyStrokeAction = function getKeyStrokeAction(str) {
  var reg = /^\$\{([^}]+)\}$/;
  var match = void 0;

  // eslint-disable-next-line no-cond-assign
  if (match = str.match(reg)) {
    switch (match[1]) {
      case 'KEY_LEFT':
        return 'LEFT';

      case 'KEY_UP':
        return 'UP';

      case 'KEY_RIGHT':
        return 'RIGHT';

      case 'KEY_DOWN':
        return 'DOWN';

      case 'KEY_PGUP':
      case 'KEY_PAGE_UP':
        return 'PAGEUP';

      case 'KEY_PGDN':
      case 'KEY_PAGE_DOWN':
        return 'PAGEDOWN';

      case 'KEY_BKSP':
      case 'KEY_BACKSPACE':
        return 'BACKSPACE';

      case 'KEY_DEL':
      case 'KEY_DELETE':
        return 'DELETE';

      case 'KEY_ENTER':
        return 'ENTER';

      case 'KEY_TAB':
        return 'TAB';
    }
  }

  return str;
};

var isEditable = function isEditable(el) {
  if (el.getAttribute('readonly') !== null) return false;
  var tag = el.tagName.toUpperCase();
  var type = (el.type || '').toLowerCase();
  var editableTypes = ['text', 'search', 'tel', 'url', 'email', 'password', 'number'];

  if (tag === 'TEXTAREA') return true;
  if (tag === 'INPUT' && editableTypes.indexOf(type) !== -1) return true;

  return false;
};

var maybeEditText = function maybeEditText(target, c) {
  if (!isEditable(target)) return;
  if (c.length === 1) {
    if (!isNil(target.selectionStart)) {
      var lastStart = target.selectionStart;
      target.value = target.value.substring(0, target.selectionStart) + c + target.value.substring(target.selectionEnd);

      setSelection(target, lastStart + 1);
    } else {
      target.value = target.value + c;
    }
  } else {
    switch (c) {
      case 'ENTER':
        target.value = target.value + '\n';
        setSelection(target, target.value.length);
        break;
      case 'TAB':
        target.value = target.value + '\t';
        setSelection(target, target.value.length);
        break;
      case 'LEFT':
        setSelection(target, target.selectionStart - 1);
        break;
      case 'RIGHT':
        setSelection(target, target.selectionEnd + 1);
        break;
      case 'BACKSPACE':
        {
          var pos = target.selectionStart;
          target.value = target.value.substring(0, target.selectionStart - 1) + target.value.substring(target.selectionEnd);
          setSelection(target, pos - 1);
          break;
        }
      case 'DELETE':
        {
          var _pos = target.selectionEnd;
          target.value = target.value.substring(0, target.selectionStart) + target.value.substring(target.selectionEnd + 1);
          setSelection(target, _pos);
          break;
        }
    }
  }
};

var maybeSubmitForm = function maybeSubmitForm(target, key) {
  if (key !== 'ENTER') return;
  if (!isEditable(target)) return;

  var form = findParentByTag(target, 'FORM');
  if (!form) return;

  form.submit();
};

var isNil = function isNil(val) {
  return val === null || val === undefined;
};

var setSelection = function setSelection($el, start, end) {
  // Note: Inputs like number and email, doesn't support selectionEnd
  // for safety, make sure those values are not null or undefined (infers that it's available)
  if (!isNil($el.selectionStart)) {
    $el.selectionStart = start;
  }

  if (!isNil($el.selectionEnd)) {
    $el.selectionEnd = end !== undefined ? end : start;
  }
};

var replaceActionKey = function () {
  var mapping = {
    0: null, // the NULL character
    8: 'BACKSPACE',
    9: 'TAB',
    10: 'ENTER', // \n  new line
    11: null, // \v  vertical tab
    12: null, // \f  form feed
    13: null // \r  carriage return
  };

  return function (c) {
    // Note: it means it's already key stroke action
    if (c.length > 1) return c;
    return mapping[c.charCodeAt(0)] || c;
  };
}();

function sendKeys(target, str, noSpecialKeys) {
  var rawChars = noSpecialKeys ? str.split('') : send_keys_splitStringToChars(str);
  var chars = rawChars.map(replaceActionKey).filter(function (x) {
    return x && x.length;
  });

  target.focus();
  if (target.value) {
    setSelection(target, target.value.length);
  }

  chars.forEach(function (c) {
    var action = getKeyStrokeAction(c);

    maybeEditText(target, action);
    // Note: This line will take care of KEYDOWN KEYPRESS KEYUP and TEXTINPUT
    keyboard.dispatchEventsForAction(action, target);

    if (!noSpecialKeys) {
      maybeSubmitForm(target, action);
    }
  });
}
// EXTERNAL MODULE: ./src/common/encrypt.js
var encrypt = __webpack_require__(146);

// EXTERNAL MODULE: ./src/common/constant.js
var constant = __webpack_require__(15);

// CONCATENATED MODULE: ./src/common/command_runner.js
/* unused harmony export assertLocator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isLocator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return command_runner_getElementByLocator; });
/* unused harmony export getFrameByLocator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return command_runner_run; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var HIGHLIGHT_TIMEOUT = 500;

var command_runner_globMatch = function globMatch(pattern, text) {
  return kd_glob_to_regexp_default()(pattern).test(text);
};

var getElementByXPath = function getElementByXPath(xpath) {
  var snapshot = document.evaluate(xpath, document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

  return snapshot.snapshotItem(0);
};

// reference: https://github.com/timoxley/offset
var viewportOffset = function viewportOffset(el) {
  var box = el.getBoundingClientRect();

  // Note: simply use bouddingClientRect since elementFromPoint uses
  // the same top/left relative to the current viewport/window instead of whole document
  return {
    top: box.top,
    left: box.left
  };
};

var command_runner_getIframeOffset = function getIframeOffset() {
  if (window === window.top) {
    return Promise.resolve({ x: 0, y: 0 });
  }

  return Object(cs_postmessage["postMessage"])(window.parent, window, {
    action: 'SOURCE_PAGE_OFFSET',
    data: {}
  });
};

var command_runner_untilInjected = function untilInjected() {
  var api = {
    eval: function _eval(code) {
      log_default()('sending INJECT_RUN_EVAL');
      return Object(cs_postmessage["postMessage"])(window, window, { cmd: 'INJECT_RUN_EVAL', args: { code: code } }, '*', 5000).then(function (data) {
        log_default()('eval result', data);
        return data.result;
      });
    }
  };
  var injected = !!document.body.getAttribute('data-injected');
  if (injected) return Promise.resolve(api);

  Object(utils["insertScript"])(web_extension_default.a.extension.getURL('inject.js'));

  return Object(utils["retry"])(function () {
    log_default()('sending INJECT_READY');
    return Object(cs_postmessage["postMessage"])(window, window, { cmd: 'INJECT_READY' }, '*', 500);
  }, {
    shouldRetry: function shouldRetry() {
      return true;
    },
    timeout: 5000,
    retryInterval: 0
  })().then(function () {
    return api;
  }).catch(function (e) {
    log_default()(e.stack);
    throw new Error('fail to inject');
  });
};

var isElementFromPoint = function isElementFromPoint(str) {
  return (/^#elementfrompoint/i.test(str.trim())
  );
};

var pageCoordinateByElementFromPoint = function pageCoordinateByElementFromPoint(str) {
  var reg = /^#elementfrompoint\s*\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\)/i;
  var m = str.trim().match(reg);

  if (!m) {
    throw new Error('Invalid \'#elementfrompoint\' expression');
  }

  var pageX = parseFloat(m[1]);
  var pageY = parseFloat(m[2]);

  if (pageX <= 0 || pageY <= 0) {
    throw new Error('\'#elementfrompoint\' only accepts positive numbers');
  }

  return [pageX, pageY];
};

var command_runner_viewportCoordinateByElementFromPoint = function viewportCoordinateByElementFromPoint(str) {
  var _pageCoordinateByElem = pageCoordinateByElementFromPoint(str),
      _pageCoordinateByElem2 = _slicedToArray(_pageCoordinateByElem, 2),
      pageX = _pageCoordinateByElem2[0],
      pageY = _pageCoordinateByElem2[1];

  var offset = 0;
  var x = offset + pageX - Object(dom_utils["scrollLeft"])(document);
  var y = offset + pageY - Object(dom_utils["scrollTop"])(document);

  return [x, y];
};

var elementByElementFromPoint = function elementByElementFromPoint(str) {
  var _viewportCoordinateBy = command_runner_viewportCoordinateByElementFromPoint(str),
      _viewportCoordinateBy2 = _slicedToArray(_viewportCoordinateBy, 2),
      x = _viewportCoordinateBy2[0],
      y = _viewportCoordinateBy2[1];

  var el = document.elementFromPoint(x, y);

  return el;
};

var command_runner_focusIfEditable = function focusIfEditable($el) {
  if (Object(dom_element_is_natively_editable["a" /* default */])($el) && typeof $el.focus === 'function') {
    $el.focus();
  }
};

var assertLocator = function assertLocator(str) {
  var i = str.indexOf('=');

  // xpath
  if (/^\//.test(str)) return true;
  // efp
  if (/^#elementfrompoint/i.test(str)) return true;
  // Above is all locators that doesn't require '='
  if (i === -1) throw new Error('invalid locator, ' + str);

  var method = str.substr(0, i);
  var value = str.substr(i + 1);

  if (!value || !value.length) throw new Error('invalid locator, ' + str);

  switch (method && method.toLowerCase()) {
    case 'id':
    case 'name':
    case 'identifier':
    case 'link':
    case 'css':
    case 'xpath':
      return true;

    default:
      throw new Error('invalid locator, ' + str);
  }
};

var isLocator = function isLocator(str) {
  try {
    assertLocator(str);
    return true;
  } catch (e) {
    return false;
  }
};

// Note: parse the locator and return the element found accordingly
var command_runner_getElementByLocator = function getElementByLocator(str, shouldWaitForVisible) {
  var i = str.indexOf('=');
  var el = void 0;

  if (/^\//.test(str)) {
    el = getElementByXPath(str);
  } else if (/^#elementfrompoint/i.test(str.trim())) {
    el = elementByElementFromPoint(str);
    log_default()('elementfrompoint', el);
  } else if (i === -1) {
    throw new Error('getElementByLocator: invalid locator, ' + str);
  } else {
    var method = str.substr(0, i);
    var value = str.substr(i + 1);

    switch (method && method.toLowerCase()) {
      case 'id':
        el = document.getElementById(value);
        break;

      case 'name':
        el = document.getElementsByName(value)[0];
        break;

      case 'identifier':
        el = document.getElementById(value) || document.getElementsByName(value)[0];
        break;

      case 'link':
        {
          var links = [].slice.call(document.getElementsByTagName('a'));
          // Note: there are cases such as 'link=exact:xxx'
          var realVal = value.replace(/^exact:/, '');
          // Note: position support. eg. link=Download@POS=3
          var match = realVal.match(/^(.+)@POS=(\d+)$/i);
          var index = 0;

          if (match) {
            realVal = match[1];
            index = parseInt(match[2]) - 1;
          }

          // Note: use textContent instead of innerText to avoid influence from text-transform
          var candidates = links.filter(function (a) {
            return command_runner_globMatch(realVal, Object(dom_utils["domText"])(a));
          });
          el = candidates[index];
          break;
        }

      case 'css':
        el = document.querySelector(value);
        break;

      case 'xpath':
        el = getElementByXPath(value);
        break;

      default:
        throw new Error('getElementByLocator: unsupported locator method, ' + method);
    }
  }

  if (!el) {
    throw new Error('getElementByLocator: fail to find element based on the locator, ' + str);
  }

  if (shouldWaitForVisible && !Object(dom_utils["isVisible"])(el)) {
    throw new Error('getElementByLocator: element is found but not visible yet');
  }

  return el;
};

var command_runner_getFrameByLocator = function getFrameByLocator(str, helpers) {
  var i = str.indexOf('=');

  // Note: try to parse format of 'index=0' and 'relative=top/parent'
  if (i !== -1) {
    var method = str.substr(0, i);
    var value = str.substr(i + 1);

    switch (method) {
      case 'index':
        {
          var index = parseInt(value, 10);
          var frames = window.frames;
          var frame = frames[index];

          if (!frame) {
            throw new Error('Frame index out of range (index ' + value + ' in ' + frames.length + ' frames');
          }

          return { frame: frame };
        }

      case 'relative':
        {
          if (value === 'top') {
            return { frame: window.top };
          }

          if (value === 'parent') {
            return { frame: window.parent };
          }

          throw new Error('Unsupported relative type, ' + value);
        }
    }
  }

  // Note: consider it as name, if no '=' found and it has no xpath pattern
  if (i === -1 && !/^\//.test(str)) {
    str = 'name=' + str;
  }

  var frameDom = command_runner_getElementByLocator(str);

  if (!frameDom || !frameDom.contentWindow) {
    throw new Error('The element found based on ' + str + ' is NOT a frame/iframe');
  }

  // Note: for those iframe/frame that don't have src, they won't load content_script.js
  // so we have to inject the script by ourselves
  if (!frameDom.getAttribute('src')) {
    var file = web_extension_default.a.extension.getURL('content_script.js');
    var doc = frameDom.contentDocument;
    var s = doc.constructor.prototype.createElement.call(doc, 'script');

    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);

    doc.documentElement.appendChild(s);
    s.parentNode.removeChild(s);

    helpers.hackAlertConfirmPrompt(doc);
  }

  // Note: can't return the contentWindow directly, because Promise 'resolve' will
  // try to test its '.then' method, which will cause a cross origin violation
  // so, we wrap it in an object
  return { frame: frameDom.contentWindow };
};

var command_runner_run = function run(command, csIpc, helpers) {
  var cmd = command.cmd,
      target = command.target,
      value = command.value,
      extra = command.extra;

  var wrap = function wrap(fn, genOptions) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var options = genOptions.apply(undefined, args);

      return new Promise(function (resolve, reject) {
        try {
          resolve(fn.apply(undefined, args));
        } catch (e) {
          reject(new Error(options.errorMsg(e.message)));
        }
      });
    };
  };
  var getElementByLocatorWithLogForEfp = function getElementByLocatorWithLogForEfp(locator, shouldWaitForVisible) {
    var el = command_runner_getElementByLocator(locator, shouldWaitForVisible);

    if (isElementFromPoint(locator)) {
      var elXpath = 'unkown';

      try {
        elXpath = helpers.xpath(el);
      } catch (e) {}

      var msg = locator + ' => xpath "' + elXpath + '"';

      console.log(msg, el);
      csIpc.ask('CS_ADD_LOG', { info: msg });
    }

    return el;
  };
  var __getFrameByLocator = wrap(command_runner_getFrameByLocator, function (locator) {
    return {
      errorMsg: function errorMsg(msg) {
        return 'timeout reached when looking for frame \'' + locator + '\'';
      }
    };
  });
  var __getElementByLocator = wrap(getElementByLocatorWithLogForEfp, function (locator) {
    return {
      errorMsg: function errorMsg(msg) {
        if (/element is found but not visible yet/.test(msg)) {
          return 'element is found but not visible yet for \'' + locator + '\' (use !WaitForVisible = false to disable waiting for visible)';
        }

        return 'timeout reached when looking for element \'' + locator + '\'';
      }
    };
  });

  switch (cmd) {
    case 'open':
      if (window.noCommandsYet) {
        return true;
      }

      return Object(utils["until"])('document.body', function () {
        return {
          pass: !!document.body,
          result: document.body
        };
      }).then(function (body) {
        window.location.href = command.target;
        return true;
      });

    case 'refresh':
      setTimeout(function () {
        return window.location.reload();
      }, 0);
      return true;

    case 'mouseOver':
      {
        return __getElementByLocator(target).then(function (el) {
          try {
            if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
            if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);
          } catch (e) {
            log_default.a.error('error in scroll and highlight', e.message);
          }

          el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
          return true;
        });
      }

    // Note: 'locate' command is only for internal use
    case 'locate':
      {
        return __getElementByLocator(target).then(function (el) {
          try {
            if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
            if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);
          } catch (e) {
            log_default.a.error('error in scroll and highlight', e.message);
          }

          var vpOffset = viewportOffset(el);

          return command_runner_getIframeOffset().then(function (windowOffset) {
            return {
              rect: {
                x: vpOffset.left + windowOffset.x,
                y: vpOffset.top + windowOffset.y,
                width: el.offsetWidth,
                height: el.offsetHeight
              }
            };
          });
        });
      }

    case 'dragAndDropToObject':
      {
        return Promise.all([__getElementByLocator(target), __getElementByLocator(value)]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              $src = _ref2[0],
              $tgt = _ref2[1];

          drag_mock_default.a.triggerDragEvent($src, $tgt);
          return true;
        });
      }

    case 'waitForVisible':
      {
        return __getElementByLocator(target, true).then(function () {
          return true;
        });
      }

    case 'clickAt':
      {
        var isEfp = isElementFromPoint(target);
        var pTarget = function () {
          if (!isEfp) return Promise.resolve(target);
          return command_runner_getIframeOffset().then(function (iframeOffset) {
            log_default()('iframeOffset', iframeOffset);

            var _viewportCoordinateBy3 = command_runner_viewportCoordinateByElementFromPoint(target),
                _viewportCoordinateBy4 = _slicedToArray(_viewportCoordinateBy3, 2),
                x = _viewportCoordinateBy4[0],
                y = _viewportCoordinateBy4[1];

            return '#elementfrompoint (' + (x - iframeOffset.x) + ', ' + (y - iframeOffset.y) + ')';
          });
        }();

        return pTarget.then(function (target) {
          return __getElementByLocator(target, extra.waitForVisible).then(function (el) {
            if (!/^\d+\s*,\s*\d+$/.test(value) && !isElementFromPoint(target)) {
              throw new Error('invalid offset for clickAt: ' + value);
            }

            var scrollAndHighlight = function scrollAndHighlight() {
              try {
                if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
                if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);
              } catch (e) {
                log_default.a.error('error in scroll and highlight');
              }
            };

            var _ref3 = function () {
              if (isEfp) {
                return command_runner_viewportCoordinateByElementFromPoint(target);
              } else {
                var _value$split$map = value.split(',').map(function (str) {
                  return parseInt(str.trim(), 10);
                }),
                    _value$split$map2 = _slicedToArray(_value$split$map, 2),
                    x = _value$split$map2[0],
                    y = _value$split$map2[1];

                var _viewportOffset = viewportOffset(el),
                    top = _viewportOffset.top,
                    left = _viewportOffset.left;

                return [left + x, top + y];
              }
            }(),
                _ref4 = _slicedToArray(_ref3, 2),
                origClientX = _ref4[0],
                origClientY = _ref4[1];

            var lastScrollX = window.scrollX;
            var lastScrollY = window.scrollY;

            if (!isEfp) scrollAndHighlight();

            var clientX = origClientX + (lastScrollX - window.scrollX);
            var clientY = origClientY + (lastScrollY - window.scrollY);

            log_default()('clickAt clientX/clientY', clientX, clientY);['mousedown', 'mouseup', 'click'].forEach(function (eventType) {
              el.dispatchEvent(new MouseEvent(eventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: clientX,
                clientY: clientY
              }));
            });

            // Note: delay scroll and highlight for efp,
            // otherwise that scroll could mess up the whole coodirnate calculation
            if (isEfp) scrollAndHighlight();

            command_runner_focusIfEditable(el);
            return true;
          });
        });
      }

    case 'click':
    case 'clickAndWait':
      {
        return __getElementByLocator(target, extra.waitForVisible).then(function (el) {
          try {
            if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
            if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);
          } catch (e) {
            log_default.a.error('error in scroll and highlight');
          }

          if (typeof el.click === 'function') {
            el.click();
          } else {
            el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
          }

          command_runner_focusIfEditable(el);
          return true;
        });
      }

    case 'select':
    case 'selectAndWait':
      {
        return __getElementByLocator(target, extra.waitForVisible).then(function (el) {
          var options = [].slice.call(el.getElementsByTagName('option'));
          var i = value.indexOf('=');
          var optionType = value.substring(0, i);
          var optionValue = value.substring(i + 1);

          var option = function () {
            switch (optionType) {
              case 'label':
                return options.find(function (op) {
                  return command_runner_globMatch(optionValue, Object(dom_utils["domText"])(op).trim());
                });

              case 'index':
                return options.find(function (_, index) {
                  return index === parseInt(optionValue);
                });

              case 'id':
                return options.find(function (op, index) {
                  return op.id === optionValue;
                });

              case 'value':
                return options.find(function (op) {
                  return op.value === optionValue;
                });

              default:
                throw new Error('Option type "' + optionType + '" not supported');
            }
          }();

          if (!option) {
            throw new Error('cannot find option with \'' + value + '\'');
          }

          if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
          if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);

          el.value = option.value;
          el.dispatchEvent(new Event('change'));

          return true;
        });
      }

    case 'type':
      {
        return __getElementByLocator(target, extra.waitForVisible).then(function (el) {
          var tag = el.tagName.toLowerCase();

          if (tag !== 'input' && tag !== 'textarea') {
            throw new Error('run command: element found is neither input nor textarea');
          }

          if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
          if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);

          // Note: need the help of chrome.debugger to set file path to file input
          if (el.type && el.type.toLowerCase() === 'file') {
            if (web_extension_default.a.isFirefox()) {
              throw new Error('Setting file path fo file inputs is not supported by Firefox extension api yet');
            }

            return csIpc.ask('CS_SET_FILE_INPUT_FILES', {
              files: value.split(';'),
              selector: Object(dom_utils["cssSelector"])(el)
            });
          }

          command_runner_focusIfEditable(el);

          return Object(encrypt["a" /* decryptIfNeeded */])(value, el).then(function (realValue) {
            el.value = '';
            sendKeys(el, realValue, true);

            el.value = realValue;
            el.dispatchEvent(new Event('change'));
            return true;
          });
        }).catch(function (e) {
          if (/This input element accepts a filename/i.test(e.message)) {
            throw new Error('Sorry, upload can not be automated Chrome (API limitation).');
          }

          throw e;
        });
      }

    case 'editContent':
      {
        return __getElementByLocator(target, extra.waitForVisible).then(function (el) {
          if (el.contentEditable !== 'true') {
            throw new Error('Target is not contenteditable');
          }

          if (extra.playScrollElementsIntoView) el.scrollIntoView({ block: 'center' });
          if (extra.playHighlightElements) helpers.highlightDom(el, HIGHLIGHT_TIMEOUT);

          el.innerHTML = value;
          return true;
        });
      }

    case 'selectFrame':
      {
        return __getFrameByLocator(target, helpers).then(function (frameWindow) {
          if (!frameWindow) {
            throw new Error('Invalid frame/iframe');
          }

          return frameWindow;
        });
      }

    case 'verifyText':
      {
        return __getElementByLocator(target).then(function (el) {
          var text = Object(dom_utils["domText"])(el);

          if (!command_runner_globMatch(value, text)) {
            return {
              log: {
                error: 'text not matched, \n\texpected: "' + value + '", \n\tactual: "' + text + '"'
              }
            };
          }

          return true;
        });
      }

    case 'verifyTitle':
      {
        if (!command_runner_globMatch(target, document.title)) {
          return {
            log: {
              error: 'title not matched, \n\texpected: "' + target + '", \n\tactual: "' + document.title + '"'
            }
          };
        }

        return true;
      }

    case 'verifyElementPresent':
      {
        var _ref5 = extra || {},
            timeoutElement = _ref5.timeoutElement,
            retryInfo = _ref5.retryInfo;

        return __getElementByLocator(target).then(function () {
          return true;
        }, function (e) {
          var shotsLeft = timeoutElement * 1000 / retryInfo.retryInterval - retryInfo.retryCount;
          var isLastChance = shotsLeft <= 1;

          if (isLastChance) {
            return {
              log: {
                error: '\'' + target + '\' element not present'
              }
            };
          }

          throw e;
        });
      }

    case 'verifyChecked':
      {
        return __getElementByLocator(target).then(function (el) {
          var checked = !!el.checked;

          if (!checked) {
            return {
              log: {
                error: '\'' + target + '\' is not checked'
              }
            };
          }

          return true;
        });
      }

    case 'verifyAttribute':
      {
        var index = target.lastIndexOf('@');

        if (index === -1) {
          throw new Error('invalid target for verifyAttribute - ' + target);
        }

        var locator = target.substr(0, index);
        var attrName = target.substr(index + 1);

        return __getElementByLocator(locator).then(function (el) {
          var attr = el.getAttribute(attrName);

          if (!command_runner_globMatch(value, attr)) {
            return {
              log: {
                error: 'attribute not matched, \n\texpected: "' + value + '", \n\tactual: "' + attr + '"'
              }
            };
          }

          return true;
        });
      }

    case 'verifyError':
      {
        if (extra.lastCommandOk) {
          return {
            log: {
              error: target
            }
          };
        }

        return true;
      }

    case 'assertText':
      {
        return __getElementByLocator(target).then(function (el) {
          var text = Object(dom_utils["domText"])(el);

          if (!command_runner_globMatch(value, text)) {
            throw new Error('text not matched, \n\texpected: "' + value + '", \n\tactual: "' + text + '"');
          }

          return true;
        });
      }

    case 'assertTitle':
      {
        if (!command_runner_globMatch(target, document.title)) {
          throw new Error('title not matched, \n\texpected: "' + target + '", \n\tactual: "' + document.title + '"');
        }

        return true;
      }

    case 'assertElementPresent':
      {
        return __getElementByLocator(target).then(function () {
          return true;
        });
      }

    case 'assertChecked':
      {
        return __getElementByLocator(target).then(function (el) {
          var checked = !!el.checked;

          if (!checked) {
            throw new Error('\'' + target + '\' is not checked');
          }

          return true;
        });
      }

    case 'assertAttribute':
      {
        var _index = target.lastIndexOf('@');

        if (_index === -1) {
          throw new Error('invalid target for assertAttribute - ' + target);
        }

        var _locator = target.substr(0, _index);
        var _attrName = target.substr(_index + 1);

        return __getElementByLocator(_locator).then(function (el) {
          var attr = el.getAttribute(_attrName);

          if (!command_runner_globMatch(value, attr)) {
            throw new Error('attribute not matched, \n\texpected: "' + value + '", \n\tactual: "' + attr + '"');
          }

          return true;
        });
      }

    case 'assertError':
      {
        if (extra.lastCommandOk) {
          throw new Error(target);
        }

        return true;
      }

    case 'assertAlert':
      {
        var msg = document.body.getAttribute('data-alert');

        if (!msg) {
          throw new Error('no alert found!');
        }

        if (!command_runner_globMatch(target, msg)) {
          throw new Error('unmatched alert msg, \n\texpected: "' + target + '", \n\tactual: "' + msg + '"');
        }

        document.body.setAttribute('data-alert', '');
        return true;
      }

    case 'assertConfirmation':
      {
        var _msg = document.body.getAttribute('data-confirm');

        if (!_msg) {
          throw new Error('no confirm found!');
        }

        if (!command_runner_globMatch(target, _msg)) {
          throw new Error('unmatched confirm msg, \n\texpected: "' + target + '", \n\tactual: "' + _msg + '"');
        }

        document.body.setAttribute('data-confirm', '');
        return true;
      }

    case 'assertPrompt':
      {
        var _msg2 = document.body.getAttribute('data-prompt');

        if (!_msg2) {
          throw new Error('no prompt found!');
        }

        if (!command_runner_globMatch(target, _msg2)) {
          throw new Error('unmatched prompt msg, \n\texpected: "' + target + '", \n\tactual: "' + _msg2 + '"');
        }

        document.body.setAttribute('data-prompt', '');
        return true;
      }

    case 'answerOnNextPrompt':
      {
        document.body.setAttribute('data-prompt-answer', target);
        return true;
      }

    case 'waitForPageToLoad':
      return true;

    case 'storeTitle':
      {
        return {
          vars: _defineProperty({}, value, document.title)
        };
      }

    case 'storeText':
      {
        return __getElementByLocator(target).then(function (el) {
          return {
            vars: _defineProperty({}, value, Object(dom_utils["domText"])(el))
          };
        });
      }

    case 'storeAttribute':
      {
        var _index2 = target.lastIndexOf('@');

        if (_index2 === -1) {
          throw new Error('invalid target for storeAttribute - ' + target);
        }

        var _locator2 = target.substr(0, _index2);
        var _attrName2 = target.substr(_index2 + 1);

        return __getElementByLocator(_locator2).then(function (el) {
          var attr = el.getAttribute(_attrName2);

          if (!attr) {
            throw new Error('missing attribute \'' + _attrName2 + '\'');
          }

          return {
            vars: _defineProperty({}, value, attr)
          };
        });
      }

    case 'storeEval':
      {
        return command_runner_untilInjected().then(function (api) {
          return api.eval(target).then(function (result) {
            return {
              vars: _defineProperty({}, value, result)
            };
          }).catch(function (e) {
            throw new Error('Error in runEval code: ' + e.message);
          });
        });
      }

    case 'storeValue':
      {
        return __getElementByLocator(target).then(function (el) {
          var text = el.value || '';

          return {
            vars: _defineProperty({}, value, text)
          };
        });
      }

    case 'storeChecked':
      {
        return __getElementByLocator(target).then(function (el) {
          var checked = !!el.checked;

          return {
            vars: _defineProperty({}, value, checked)
          };
        });
      }

    case 'verifyValue':
      {
        return __getElementByLocator(target).then(function (el) {
          var text = el.value;

          if (!command_runner_globMatch(value, text)) {
            return {
              log: {
                error: 'value not matched, \n\texpected: "' + value + '", \n\tactual: "' + text + '"'
              }
            };
          }

          return true;
        });
      }

    case 'assertValue':
      {
        return __getElementByLocator(target).then(function (el) {
          var text = el.value;

          if (!command_runner_globMatch(value, text)) {
            throw new Error('value not matched, \n\texpected: "' + value + '", \n\tactual: "' + text + '"');
          }

          return true;
        });
      }

    case 'sendKeys':
      {
        return __getElementByLocator(target).then(function (el) {
          command_runner_focusIfEditable(el);
          sendKeys(el, value);
          return true;
        });
      }

    case 'selectWindow':
      {
        var p = function () {
          switch (target && target.toUpperCase()) {
            case 'TAB=CLOSEALLOTHER':
              return csIpc.ask('CS_CLOSE_OTHER_TABS', {});

            case 'TAB=CLOSE':
              return csIpc.ask('CS_CLOSE_CURRENT_TAB', {});

            default:
              return csIpc.ask('CS_SELECT_WINDOW', { target: target, value: value });
          }
        }();

        // Note: let `selectWindow` pass through cs and back to background,
        // to keep the flow more consistent with the other commands
        return p.then(function () {
          return true;
        });
      }

    case 'sourceSearch':
    case 'sourceExtract':
      {
        if (!target) {
          throw new Error('Must provide text / regular expression to search for');
        }

        if (!value) {
          throw new Error('Must specify a variable to save the result');
        }

        var getMatchAndCaptureIndex = function getMatchAndCaptureIndex(str) {
          var nonZeroIndex = function nonZeroIndex(n) {
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (n === undefined) return 0;
            return Math.max(0, parseInt(n, 10) + offset);
          };
          var m = /@\s*(\d+)(?:\s*,\s*(\d+))?\s*$/.exec(str);

          if (!m) {
            return {
              rest: str,
              matchIndex: 0,
              captureIndex: 0
            };
          }

          return {
            rest: str.substring(0, m.index),
            matchIndex: nonZeroIndex(m[1], -1),
            captureIndex: nonZeroIndex(m[2])
          };
        };

        // Note: get matchIndex captureIndex first, no matter it's for regexp or simple text

        var _getMatchAndCaptureIn = getMatchAndCaptureIndex(target),
            rest = _getMatchAndCaptureIn.rest,
            matchIndex = _getMatchAndCaptureIn.matchIndex,
            captureIndex = _getMatchAndCaptureIn.captureIndex;

        if (cmd === 'sourceSearch' && rest !== target) {
          throw new Error('The @ parameter is only supported in sourceExtract');
        }

        var regexp = function () {
          if (!/^regex(=|:)/i.test(rest)) return null;

          var raw = rest.replace(/^regex(=|:)/i, '');
          var regexpText = raw.replace(/^\/|\/g?$/g, '');

          return Object(utils["toRegExp"])(regexpText, { needEncode: false, flag: 'g' });
        }();
        var regexpForText = function () {
          if (regexp) return null;
          var raw = rest.replace(/^text(=|:)/i, '');

          if (cmd === 'sourceExtract' && !/\*/.test(raw)) {
            throw new Error('Missing * or REGEX in sourceExtract. Extracting a plain text doesn\'t make much sense');
          }

          return kd_glob_to_regexp_default()(raw, { capture: true, flags: 'g' });
        }();
        var matches = function () {
          var html = document.documentElement.outerHTML;
          var reg = regexp || regexpForText;
          var result = [];
          var m = void 0;

          // eslint-disable-next-line no-cond-assign
          while (m = reg.exec(html)) {
            result.push(m);

            // Note: save some energy, if it's already enough to get what users want
            if (cmd === 'sourceExtract' && result.length >= matchIndex + 1) {
              break;
            }
          }

          return result;
        }();

        log_default()('matches', matches, regexp, regexpForText);

        if (cmd === 'sourceSearch') {
          return {
            vars: _defineProperty({}, value, matches.length)
          };
        }

        if (cmd === 'sourceExtract') {
          var guard = function guard(str) {
            return str !== undefined ? str : '#nomatchfound';
          };

          return {
            vars: _defineProperty({}, value, guard((matches[matchIndex] || [])[captureIndex]))
          };
        }

        throw new Error('Impossible to reach here');
      }

    case 'visionLimitSearchArea':
    case 'storeImage':
      {
        var _run = function _run(locator, fileName) {
          return __getElementByLocator(locator).then(function (el) {
            if (!fileName || !fileName.length) {
              throw new Error('storeImage: \'value\' is required as image name');
            }

            var clientRect = el.getBoundingClientRect();
            var pSourceOffset = function () {
              if (window.top === window) {
                return Promise.resolve({ x: 0, y: 0 });
              }

              // Note: it's too complicated to take screenshot of element deep in iframe stack
              // if you have to scroll each level of iframe to get the full image of it.
              el.scrollIntoView();

              return Object(cs_postmessage["postMessage"])(window.parent, window, {
                action: 'SOURCE_PAGE_OFFSET',
                data: {}
              });
            }();

            return pSourceOffset.then(function (sourceOffset) {
              var rect = {
                x: sourceOffset.x + clientRect.x + Object(dom_utils["scrollLeft"])(document),
                y: sourceOffset.y + clientRect.y + Object(dom_utils["scrollTop"])(document),
                width: clientRect.width,
                height: clientRect.height
              };

              return csIpc.ask('CS_STORE_SCREENSHOT_IN_SELECTION', {
                rect: rect,
                fileName: Object(utils["ensureExtName"])('.png', fileName),
                devicePixelRatio: window.devicePixelRatio
              }).then(function () {
                return {
                  vars: {
                    '!storedImageRect': rect
                  }
                };
              });
            });
          });
        };

        var _locator3 = void 0,
            fileName = void 0;

        if (cmd === 'storeImage') {
          _locator3 = target;
          fileName = value;
        } else if (cmd === 'visionLimitSearchArea') {
          _locator3 = target.trim().replace(/^element:/i, '').trim();
          fileName = constant["e" /* LAST_SCREENSHOT_FILE_NAME */];
        }

        return _run(_locator3, fileName);
      }

    case 'captureScreenshot':
      {
        if (!target || !target.length) {
          throw new Error('captureScreenshot: \'target\' is required as file name');
        }

        return csIpc.ask('CS_CAPTURE_SCREENSHOT', { fileName: Object(utils["ensureExtName"])('.png', target) }).then(function (_ref6) {
          var fileName = _ref6.fileName,
              url = _ref6.url;
          return {
            screenshot: {
              url: url,
              name: fileName
            }
          };
        });
      }

    case 'captureEntirePageScreenshot':
      {
        if (!target || !target.length) {
          throw new Error('captureEntirePageScreenshot: \'target\' is required as file name');
        }

        return csIpc.ask('CS_CAPTURE_FULL_SCREENSHOT', { fileName: Object(utils["ensureExtName"])('.png', target) }).then(function (_ref7) {
          var fileName = _ref7.fileName,
              url = _ref7.url;
          return {
            screenshot: {
              url: url,
              name: fileName
            }
          };
        });
      }

    case 'onDownload':
      {
        return csIpc.ask('CS_ON_DOWNLOAD', {
          fileName: target,
          wait: (value || '').trim() === 'true',
          timeout: extra.timeoutDownload * 1000,
          timeoutForStart: Math.max(10, extra.timeoutElement) * 1000
        });
      }

    case 'deleteAllCookies':
      {
        return csIpc.ask('CS_DELETE_ALL_COOKIES', {
          url: window.location.origin
        }).then(function () {
          return true;
        });
      }

    case 'if':
    case 'while':
    case 'gotoIf':
      {
        try {
          return {
            // eslint-disable-next-line no-eval
            condition: window.eval(target)
          };
        } catch (e) {
          throw new Error('Error in runEval condition of ' + cmd + ': ' + e.message);
        }
      }

    default:
      throw new Error('Command ' + cmd + ' not supported yet');
  }
};

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StackError extends Error {
}
exports.StackError = StackError;
class Stack {
    constructor(list) {
        this.list = [];
        if (list && list.length) {
            this.list = list;
        }
    }
    clear() {
        this.list = [];
    }
    toArray() {
        return [...this.list];
    }
    getCount() {
        return this.list.length;
    }
    isEmpty() {
        return this.getCount() === 0;
    }
    contains(item) {
        return !!this.list.find((el) => el === item);
    }
    push(item) {
        this.list.push(item);
    }
    peek() {
        this.guardNotEmpty();
        return this.list[this.getCount() - 1];
    }
    bottom() {
        this.guardNotEmpty();
        return this.list[0];
    }
    pop() {
        this.guardNotEmpty();
        return this.list.pop();
    }
    guardNotEmpty() {
        if (this.isEmpty()) {
            throw new StackError('empty stack');
        }
    }
}
exports.Stack = Stack;


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(985);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(109)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, ".header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;padding:0 20px;width:100%;height:44px;border-bottom:2px solid #ccc;background-color:#f9f9f9}.header .status{float:right;line-height:42px;font-size:14px}.header .status h1{margin:0;font-size:20px;line-height:44px}.header .select-case{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:44px;font-size:13px}.header .select-case .test-case-name{margin-right:15px;line-height:35px;max-width:120px;overflow:hidden;display:inline-block;white-space:nowrap;text-overflow:ellipsis}.header .select-case .test-case-name.unsaved{color:orange}.header .select-case .test-case-name.unsaved:after{content:\"*\";margin-left:3px}.header .actions{margin-top:6px}.header .actions .ant-btn-group>.ant-btn-group{float:none}.header .actions .play-actions{margin:0 10px}.ant-dropdown-menu{max-height:300px;overflow-y:auto}.ant-dropdown-menu .editing{color:blue!important}.settings-modal .ant-tabs-nav .ant-tabs-tab{margin-right:12px;padding:8px 6px}.settings-modal .ant-checkbox-wrapper+.ant-checkbox-wrapper{margin-left:0}.settings-modal .tip{margin-left:15px;color:#aaa}.settings-modal .backup-pane{padding:0 20px}.settings-modal .backup-pane h4{font-size:16px;margin-bottom:10px}.settings-modal .backup-pane .row{margin-bottom:10px}.settings-modal .backup-pane p,.settings-modal .backup-pane ul li{margin-bottom:5px}.settings-modal .security-pane{padding:0 20px 20px}.settings-modal .security-pane h4{font-size:16px;margin-bottom:10px}.settings-modal .security-pane p{margin-bottom:10px}.settings-modal .security-pane label{margin-right:10px}.settings-modal .security-pane .ant-radio-wrapper{display:block;height:30px;line-height:30px}.settings-modal .ocr-pane{padding:0 20px 20px}.settings-modal .ocr-pane p{margin-bottom:10px}.settings-modal .ocr-pane .row{margin-bottom:20px}.settings-modal .ocr-pane .ant-radio-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;line-height:30px}.settings-modal .ocr-pane .ant-radio-wrapper.need-pro{color:gray}.settings-modal .ocr-pane .ant-radio-wrapper .ant-radio{margin-top:8px}.settings-modal .ocr-pane .ant-radio-wrapper .offline-label{display:inline-block;width:80px}.settings-modal .vision-pane{padding:0 20px 20px}.settings-modal .vision-pane .row,.settings-modal .vision-pane p{margin-bottom:10px}.settings-modal .vision-pane .ant-radio-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;line-height:30px}.settings-modal .vision-pane .ant-radio-wrapper .ant-radio{margin-top:8px}.settings-modal .vision-pane .ant-form-item label{width:280px;color:rgba(0,0,0,.65)}.settings-modal .xmodules-pane{padding:0 0 20px}.settings-modal .xmodules-pane .xmodule-item{margin-bottom:25px;padding:15px;border:2px solid #333;font-size:14px;-webkit-box-shadow:rgba(0,0,0,.5) 0 2px 5px 0;box-shadow:0 2px 5px 0 rgba(0,0,0,.5)}.settings-modal .xmodules-pane .xmodule-item label{margin-right:15px;width:100px;font-size:14px}.settings-modal .xmodules-pane .xmodule-item .xmodule-title{margin-bottom:10px;font-size:14px}.settings-modal .xmodules-pane .xmodule-item .xmodule-title>*{margin-right:20px}.settings-modal .xmodules-pane .xmodule-item .xmodule-title>:last-child{margin-right:0}.settings-modal .xmodules-pane .xmodule-item .xmodule-status{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.settings-modal .xmodules-pane .xmodule-item .xmodule-status .status-box>*{margin-right:15px}.settings-modal .xmodules-pane .xmodule-item .xmodule-status .status-box>:last-child{margin-right:0}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings h3{margin-bottom:10px;font-size:14px;font-weight:700}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings .xmodule-settings-item .settings-detail{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings .xmodule-settings-item .settings-detail .settings-detail-content{-webkit-box-flex:1;-ms-flex:1;flex:1}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings .check-result{margin-top:5px;color:red;font-size:13px}.settings-modal .register-pane .register-note{width:80%}.settings-modal .register-pane .register-note .actions{margin-top:15px}.settings-modal .register-pane .register-note.inactive,.settings-modal .register-pane .register-note.inactive a{color:#aaa}.settings-modal .register-pane .register-form{margin-top:25px}.settings-modal .register-pane .register-form label{display:block;margin-bottom:10px;font-weight:700}.settings-modal .register-pane .register-form .register-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.settings-modal .register-pane .register-form .register-row input{margin-right:15px;width:40%}.settings-modal .register-pane .register-status{margin-top:25px}.settings-modal .register-pane .register-status a{margin-left:15px}", ""]);

// exports


/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodTypeFriendlyNames = [
    "GetVersion",
    "SendMouseEvent",
    "SendText",
    "GetActiveBrowserOuterRect",
    "FindRectangle",
    "GetScreenBackingScaleFactor"
];
exports.MethodTypeInvocationNames = [
    "get_version",
    "send_mouse_event",
    "send_text",
    "get_active_browser_outer_rect",
    "find_rectangle",
    "get_screen_backing_scale_factor"
];


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const native_host_1 = __webpack_require__(131);
class KantuXYHost extends native_host_1.NativeMessagingHost {
    constructor() {
        super(KantuXYHost.HOST_NAME);
    }
}
KantuXYHost.HOST_NAME = "com.a9t9.kantu.xy";
exports.KantuXYHost = KantuXYHost;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBgWithCs", function() { return openBgWithCs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csInit", function() { return csInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgInit", function() { return bgInit; });
/* harmony import */ var _ipc_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _ipc_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ipc_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ipc_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };







var TIMEOUT = -1;

// Note: `cuid` is a kind of unique id so that you can create multiple
// ipc promise instances between the same two end points
var openBgWithCs = function openBgWithCs(cuid) {
  var wrap = function wrap(str) {
    return str + '_' + cuid;
  };

  // factory function to generate ipc promise instance for background
  // `tabId` is needed to identify which tab to send messages to
  var ipcBg = function ipcBg(tabId) {
    var bgListeners = [];

    // `sender` contains tab info. Background may need this to store the corresponding
    // relationship between tabId and ipc instance
    var addSender = function addSender(obj, sender) {
      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return obj;

      obj.sender = sender;
      return obj;
    };

    _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(function (req, sender, sendResponse) {
      bgListeners.forEach(function (listener) {
        return listener(req, sender, sendResponse);
      });
      return true;
    });

    return _ipc_promise__WEBPACK_IMPORTED_MODULE_0___default()({
      timeout: TIMEOUT,
      ask: function ask(uid, cmd, args) {
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(tabId, {
          type: wrap('BG_ASK_CS'),
          uid: uid,
          cmd: cmd,
          args: args
        });
      },
      onAnswer: function onAnswer(fn) {
        bgListeners.push(function (req, sender, response) {
          if (req.type !== wrap('CS_ANSWER_BG')) return;
          fn(req.uid, req.err, addSender(req.data, sender));
        });
      },
      onAsk: function onAsk(fn) {
        bgListeners.push(function (req, sender, response) {
          if (req.type !== wrap('CS_ASK_BG')) return;
          fn(req.uid, req.cmd, addSender(req.args, sender));
        });
      },
      answer: function answer(uid, err, data) {
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(tabId, {
          type: wrap('BG_ANSWER_CS'),
          uid: uid,
          err: err,
          data: data
        });
      },
      destroy: function destroy() {
        bgListeners = [];
      }
    });
  };

  // factory function to generate ipc promise for content scripts
  var ipcCs = function ipcCs(checkReady) {
    var csListeners = [];

    _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(function (req, sender, sendResponse) {
      csListeners.forEach(function (listener) {
        return listener(req, sender, sendResponse);
      });
      return true;
    });

    return _ipc_promise__WEBPACK_IMPORTED_MODULE_0___default()({
      timeout: TIMEOUT,
      checkReady: checkReady,
      ask: function ask(uid, cmd, args) {
        // log('cs ask', uid, cmd, args)
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: wrap('CS_ASK_BG'),
          uid: uid,
          cmd: cmd,
          args: args
        });
      },
      onAnswer: function onAnswer(fn) {
        csListeners.push(function (req, sender, response) {
          if (req.type !== wrap('BG_ANSWER_CS')) return;
          fn(req.uid, req.err, req.data);
        });
      },
      onAsk: function onAsk(fn) {
        csListeners.push(function (req, sender, response) {
          if (req.type !== wrap('BG_ASK_CS')) return;
          fn(req.uid, req.cmd, req.args);
        });
      },
      answer: function answer(uid, err, data) {
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: wrap('CS_ANSWER_BG'),
          uid: uid,
          err: err,
          data: data
        });
      },
      destroy: function destroy() {
        csListeners = [];
      }
    });
  };

  return {
    ipcCs: ipcCs,
    ipcBg: ipcBg
  };
};

// Helper function to init ipc promise instance for content scripts
// The idea here is to send CONNECT message to background when initializing
var csInit = function csInit() {
  var noRecover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var cuid = '' + Math.floor(Math.random() * 10000);

  if (noRecover) {
    _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
      type: 'CONNECT',
      cuid: cuid
    });
    return openBgWithCs(cuid).ipcCs();
  }

  _log__WEBPACK_IMPORTED_MODULE_3___default()('sending Connect...');

  // Note: Ext.extension.getURL is available in content script, but not injected js
  // We use it here to detect whether it is loaded by content script or injected
  // Calling runtime.sendMessage in injected js will cause an uncatchable exception
  if (!_web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.extension.getURL) return;

  // try this process in case we're in none-src frame
  try {
    // let connected     = false
    // const checkReady  = () => {
    //   if (connected)  return Promise.resolve(true)
    //   return Promise.reject(new Error('cs not connected with bg yet'))
    // }
    var reconnect = function reconnect() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withTimeout"])(500, function () {
        return _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: 'RECONNECT'
        }).then(function (cuid) {
          _log__WEBPACK_IMPORTED_MODULE_3___default()('got existing cuid', cuid);
          if (cuid) return openBgWithCs(cuid).ipcCs();
          throw new Error('failed to reconnect');
        });
      });
    };
    var connectBg = function connectBg() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withTimeout"])(1000, function () {
        return _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: 'CONNECT',
          cuid: cuid
        }).then(function (done) {
          if (done) return openBgWithCs(cuid).ipcCs();
          throw new Error('not done');
        });
      });
    };
    var tryConnect = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["retry"])(connectBg, {
      shouldRetry: function shouldRetry() {
        return true;
      },
      retryInterval: 0,
      timeout: 5000
    });

    // Note: Strategy here
    // 1. Try to recover connection with background (get the existing cuid)
    // 2. If cuid not found, try to create new connection (cuid) with background
    // 3. Both of these two steps above are async, but this api itself is synchronous,
    //    so we have to create a mock API and return it first
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["mockAPIWith"])(function () {
      return reconnect().catch(function () {
        return tryConnect();
      }).catch(function (e) {
        _log__WEBPACK_IMPORTED_MODULE_3___default.a.error('Failed to create cs ipc');
        throw e;
      });
    }, {
      ask: function ask() {
        return Promise.reject(new Error('mock ask'));
      },
      onAsk: function onAsk() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _log__WEBPACK_IMPORTED_MODULE_3___default.a.apply(undefined, ['mock onAsk'].concat(args));
      },
      destroy: function destroy() {}
    }, ['ask']);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_3___default.a.error(e.stack);
  }
};

// Helper function to init ipc promise instance for background
// it accepts a `fn` function to handle CONNECT message from content scripts
var bgInit = function bgInit(fn) {
  _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(function (req, sender, sendResponse) {
    switch (req.type) {
      case 'CONNECT':
        {
          if (req.cuid) {
            fn(sender.tab.id, req.cuid, openBgWithCs(req.cuid).ipcBg(sender.tab.id));
            sendResponse(true);
          }
          break;
        }

      case 'RECONNECT':
        {
          var cuid = Object(_ipc_cache__WEBPACK_IMPORTED_MODULE_1__["getIpcCache"])().getCuid(sender.tab.id);

          if (cuid) {
            Object(_ipc_cache__WEBPACK_IMPORTED_MODULE_1__["getIpcCache"])().enable(sender.tab.id);
          }

          sendResponse(cuid || null);
          break;
        }
    }

    return true;
  });
};

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const counter_1 = __webpack_require__(474);
class PersistentCounter extends counter_1.Counter {
    constructor(options) {
        super(options);
        this.ready = false;
        this.read = options.read;
        this.write = options.write;
    }
    reset() {
        super.reset();
        this.ready = false;
        setTimeout(() => {
            this.read()
                .then(n => {
                this.ready = true;
                this.n = n;
            });
        }, 0);
    }
    inc() {
        if (!this.ready) {
            throw new Error('counter not ready yet');
        }
        const result = super.inc();
        this.write(this.n);
        return result;
    }
}
exports.PersistentCounter = PersistentCounter;


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ts_utils_1 = __webpack_require__(18);
class Monitor {
    constructor(inspectorConstructors, paramsProvider) {
        this.inspectorConstructors = {};
        this.targets = {};
        this.paramsProvider = paramsProvider;
        this.inspectorConstructors = inspectorConstructors;
    }
    addTarget(id, autoStart = true) {
        this.targets[id] = ts_utils_1.objMap((factory, key) => {
            const inspector = factory(id);
            if (autoStart) {
                inspector.restart(...this.paramsProvider(key));
            }
            return inspector;
        }, this.inspectorConstructors);
    }
    removeTarget(id) {
        if (!this.targets[id]) {
            return;
        }
        ts_utils_1.objMap((inspector) => {
            inspector.stop();
        }, this.targets[id]);
        delete this.targets[id];
    }
    clear() {
        Object.keys(this.targets).map((id) => {
            this.removeTarget(id);
        });
    }
    restart() {
        this.traverseAllInspectors((inspector, key, id) => {
            inspector.restart(...this.paramsProvider(key, id));
        });
    }
    pause() {
        this.traverseAllInspectors((inspector) => {
            inspector.pause();
        });
    }
    resume() {
        this.traverseAllInspectors((inspector) => {
            inspector.resume();
        });
    }
    stop() {
        this.traverseAllInspectors((inspector) => {
            inspector.stop();
        });
    }
    restartInspector(id, inspectorName) {
        this.getInspector(id, inspectorName).restart(...this.paramsProvider(inspectorName, id, true));
    }
    pauseInspector(id, inspectorName) {
        this.getInspector(id, inspectorName).pause();
    }
    resumeInspector(id, inspectorName) {
        this.getInspector(id, inspectorName).resume();
    }
    stopInspector(id, inspectorName) {
        this.getInspector(id, inspectorName).stop();
    }
    getDataFromInspector(id, inspectorName) {
        return this.getInspector(id, inspectorName).output();
    }
    traverseAllInspectors(fn) {
        ts_utils_1.objMap((inspectors, id) => {
            ts_utils_1.objMap((inspector, key) => {
                try {
                    fn(inspector, key, id);
                }
                catch (e) {
                    console.error(e);
                }
            }, inspectors);
        }, this.targets);
    }
    getInspector(id, inspectorName) {
        const inspectors = this.targets[id];
        if (!inspectors) {
            throw new Error(`Can't find monitor target with id '${id}'`);
        }
        const inspector = inspectors[inspectorName];
        if (!inspector) {
            throw new Error(`Can't find inspector with name '${inspectorName}' for target id '${id}'`);
        }
        return inspector;
    }
}
exports.Monitor = Monitor;


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    constructor() {
        this.startTime = new Date();
        this.acc = 0;
    }
    restart() {
        this.startTime = new Date();
        this.acc = 0;
    }
    pause() {
        const now = new Date();
        this.acc += now.getTime() - this.startTime.getTime();
    }
    resume() {
        this.startTime = new Date();
    }
    stop() {
        // do nothing
    }
    output() {
        return this.elapsed();
    }
    elapsed() {
        return this.acc + (new Date().getTime() - this.startTime.getTime());
    }
    elapsedInSeconds() {
        const diff = this.elapsed();
        return (diff / 1000).toFixed(2) + 's';
    }
}
exports.Timer = Timer;


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Countdown {
    constructor(callback) {
        this.startTime = null;
        this.timeout = null;
        this.timer = null;
        this.callback = callback;
    }
    restart(newTimeout, force = false) {
        clearTimeout(this.timer);
        if (force || !this.timeout || !this.startTime) {
            this.timeout = newTimeout;
            this.startTime = new Date();
            this.timer = setTimeout(() => this.runCallback(), this.timeout);
        }
        else {
            const past = new Date().getTime() - this.startTime.getTime();
            const rest = newTimeout - past;
            if (rest < 0) {
                return this.callback();
            }
            this.timeout = newTimeout;
            this.timer = setTimeout(() => this.runCallback(), rest);
        }
    }
    pause() {
        clearTimeout(this.timer);
        if (!this.startTime || !this.timeout) {
            return;
        }
        const past = new Date().getTime() - this.startTime.getTime();
        const rest = this.timeout - past;
        this.timeout = rest;
    }
    resume() {
        if (!this.timeout) {
            return;
        }
        this.startTime = new Date();
        this.timer = setTimeout(() => this.runCallback(), this.timeout);
    }
    stop() {
        clearTimeout(this.timer);
        this.clearState();
    }
    output() {
        // return nothing
    }
    clearState() {
        this.timer = null;
        this.timeout = null;
        this.startTime = null;
    }
    runCallback() {
        try {
            this.callback();
        }
        catch (e) {
            console.error(e);
        }
        finally {
            this.clearState();
        }
    }
}
exports.Countdown = Countdown;


/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(998);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(109)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, ".sidebar{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:260px;height:100%;border-right:2px solid #ccc}.sidebar .sidebar-inner{position:absolute;top:0;bottom:80px;right:0;left:0;overflow-y:auto}.sidebar .no-data{margin-top:20px;text-align:center;font-size:14px;color:#aaa}.sidebar .sidebar-test-cases{font-size:14px;line-height:18px}.sidebar .sidebar-test-cases li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sidebar .sidebar-test-cases li.success{background:#cfefdf}.sidebar .sidebar-test-cases li.error{background:#fcdbd9}.sidebar .sidebar-test-cases li.selected{background:#fdffd1}.sidebar .sidebar-test-cases li.selected.error,.sidebar .sidebar-test-cases li.selected.success{padding:1px 10px 1px 6px}.sidebar .sidebar-test-cases li.selected.error{border:4px solid #fcdbd9}.sidebar .sidebar-test-cases li.selected.success{border:4px solid #cfefdf}.sidebar .sidebar-test-cases li.disabled{-webkit-filter:grayscale(60%);filter:grayscale(60%);cursor:not-allowed}.sidebar .sidebar-test-cases li .test-case-name{-webkit-box-flex:1;-ms-flex:1;flex:1}.sidebar .sidebar-test-cases li .more-button{display:none}.sidebar .sidebar-test-cases li:hover .more-button{display:block}.sidebar .test-case-actions,.sidebar .test-suite-actions{padding:0 10px 10px}.sidebar .test-case-actions button,.sidebar .test-suite-actions button{margin-right:10px}.sidebar .test-case-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.sidebar .sidebar-test-suites .test-suite-item{padding:0 0 10px;margin-bottom:5px}.sidebar .sidebar-test-suites .test-suite-item.playing{background:#fdffd1}.sidebar .sidebar-test-suites .test-suite-item.fold{margin-bottom:0;padding-bottom:0}.sidebar .sidebar-test-suites .test-suite-item.fold .test-suite-cases,.sidebar .sidebar-test-suites .test-suite-item.fold .test-suite-more-actions{display:none}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row{padding:5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row .test-suite-title{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:10px}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row .more-button{display:none}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row:hover .more-button{display:block}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases{padding:3px 5px}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px 5px 3px 20px;margin-bottom:5px}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.done-tc{background:#cfefdf}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.error-tc{background:#fcdbd9}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.current-tc{background:#d5d6f9}.sidebar .sidebar-test-suites .test-suite-item .test-suite-more-actions{padding-left:27px}.sidebar .sidebar-storage-mode{position:absolute;bottom:0;left:0;right:0;height:80px;padding:0 10px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.sidebar .sidebar-storage-mode .storage-mode-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;font-size:12px}.sidebar .sidebar-storage-mode .storage-mode-header h3{font-size:14px}.sidebar .ant-tabs{min-height:100%}.sidebar .ant-tabs-bar{border-bottom:2px solid #ccc}.sidebar .ant-tabs-nav-container-scrolling{padding-left:0;padding-right:0}.sidebar .ant-tabs-tab-next.ant-tabs-tab-arrow-show,.sidebar .ant-tabs-tab-prev.ant-tabs-tab-arrow-show{display:none}.sidebar .ant-tabs-nav{height:44px}.sidebar .ant-tabs-nav .ant-tabs-tab{margin-right:0;line-height:27px}.sidebar .ant-tabs-nav-scroll{text-align:center}.sidebar .resize-handler{position:absolute;right:-2px;top:0;bottom:0;width:2px;background:#ccc;cursor:col-resize}.sidebar .resize-handler.focused,.sidebar .resize-handler:hover{right:-4px;width:6px;background:#aaa}.sidebar.with-xmodules-note .sidebar-inner{bottom:160px}.sidebar.with-xmodules-note .sidebar-storage-mode{height:160px}.sidebar.with-xmodules-note .note-for-macros{margin-bottom:20px;padding:10px 10px 0;border-top:1px solid #333;font-size:12px}.with-sidebar .sidebar{display:block}.context-menu{z-index:10}.context-menu .ant-menu{border:\"1px solid #ccc\";border-radius:4px;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2)}.context-menu .ant-menu .ant-menu-item{height:36px;line-height:36px}.context-menu .ant-menu .ant-menu-item:hover{background:#ecf6fd}.xfile-not-installed-modal.left-bottom{position:absolute;top:auto!important;bottom:100px;left:100px}.xfile-not-installed-modal p{margin-bottom:20px;font-size:16px;font-weight:700}", ""]);

// exports


/***/ })

/******/ });