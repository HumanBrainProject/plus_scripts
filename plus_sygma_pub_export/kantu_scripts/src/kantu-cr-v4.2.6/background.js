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
/******/ 		2: 0
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
/******/ 	deferredModules.push([1039,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _common_web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _common_ipc_ipc_bg_cs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_log__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(367);
/* harmony import */ var _common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _common_debugger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(606);
/* harmony import */ var _common_download_man__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_vision_adaptor_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(607);
/* harmony import */ var _services_vision_adaptor_ts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_services_vision_adaptor_ts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_services_storage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_xmodules_xfile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var _services_xmodules_xfile__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_services_xmodules_xfile__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_resize_window__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(354);
/* harmony import */ var _common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37);
/* harmony import */ var _services_desktop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72);
/* harmony import */ var _services_desktop__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_services_desktop__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_tab_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63);
/* harmony import */ var _common_tab_utils__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _desktop_screenshot_editor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(368);
/* harmony import */ var _desktop_screenshot_editor_service__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_desktop_screenshot_editor_service__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74);
/* harmony import */ var _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_dom_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21);
/* harmony import */ var _common_dom_utils__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_common_dom_utils__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _services_xmodules_xdesktop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(58);
/* harmony import */ var _services_xmodules_xdesktop__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_services_xmodules_xdesktop__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _services_migration__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(325);
/* harmony import */ var _services_migration__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_services_migration__WEBPACK_IMPORTED_MODULE_22__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

























// Note: in Ubuntu, you have to take some delay after activating some tab, otherwise there are chances
// Chrome still think the panel is the window you want to take screenshot, and weird enough in Ubuntu,
// You can't take screenshot of tabs with 'chrome-extension://' schema, even if it's your own extension
var SCREENSHOT_DELAY = /Linux/i.test(window.navigator.userAgent) ? 200 : 0;

var state = {
  status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL,
  tabIds: {
    lastInspect: null,
    lastRecord: null,
    toInspect: null,
    firstRecord: null,
    toRecord: null,
    lastPlay: null,
    firstPlay: null,
    toPlay: null,
    panel: null
  },
  pullback: false,
  // Note: heartBeatSecret = -1, means no heart beat available, and panel should not retry on heart beat lost
  heartBeatSecret: 0,
  // Note: disableHeartBeat = true, `checkHeartBeat` will stop working, it's useful for cases like close current tab
  disableHeartBeat: false,
  // Note: pendingPlayingTab = true, tells `getPlayTab` to wait until the current tab is closed and another tab is focused on
  pendingPlayingTab: false,
  xClickNeedCalibrationInfo: null
};

var updateHeartBeatSecret = function updateHeartBeatSecret() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  if (disabled) {
    state.heartBeatSecret = -1;
  } else {
    state.heartBeatSecret = (Math.max(0, state.heartBeatSecret) + 1) % 10000;
  }
};

// Generate function to get ipc based on tabIdName and some error message
var genGetTabIpc = function genGetTabIpc(tabIdName, purpose) {
  return function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["retry"])(function () {
      var tabId = state.tabIds[tabIdName];

      if (!tabId) {
        return Promise.reject(new Error('No tab for ' + purpose + ' yet'));
      }

      return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId);
    }, {
      timeout: timeout,
      retryInterval: 100,
      shouldRetry: function shouldRetry() {
        return true;
      }
    })().then(function (tab) {
      if (!tab) {
        throw new Error('The ' + purpose + ' tab seems to be closed');
      }

      return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, timeout, before).catch(function (e) {
        throw new Error('No ipc available for the ' + purpose + ' tab');
      });
    });
  };
};

var getRecordTabIpc = genGetTabIpc('toRecord', 'recording');

var getPlayTabIpc = genGetTabIpc('toPlay', 'playing commands');

var getPanelTabIpc = genGetTabIpc('panel', 'dashboard');

// Get the current tab for play, if url provided, it will be loaded in the tab
var getPlayTab = function getPlayTab(url) {
  // Note: update error message to be more user friendly. But the original message is kept as comment
  // const theError  = new Error('Either a played tab or a url must be provided to start playing')
  var theError = new Error('No connection to browser tab');

  var createOne = function createOne(url) {
    if (!url) throw theError;

    return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["createTab"])(url).then(function (tab) {
      state.tabIds.lastPlay = state.tabIds.toPlay;
      state.tabIds.toPlay = state.tabIds.firstPlay = tab.id;
      return tab;
    });
  };

  var runRealLogic = function runRealLogic() {
    _common_log__WEBPACK_IMPORTED_MODULE_4___default()('getPlayTab', url, state.tabIds.toPlay);

    if (!state.tabIds.toPlay && !url) {
      throw theError;
    }

    if (!state.tabIds.toPlay) {
      return createOne(url);
    }

    return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["getTab"])(state.tabIds.toPlay).then(function (tab) {
      if (!url) {
        return tab;
      }

      // Note: must disable ipcCache manually here, so that further messages
      // won't be sent the old ipc
      Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().disable(tab.id);

      return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.update(tab.id, { url: url });
    }, function () {
      return createOne(url);
    });
  };

  _common_log__WEBPACK_IMPORTED_MODULE_4___default()('getPlayTab - pendingPlayingTab', state.pendingPlayingTab);

  var p = !state.pendingPlayingTab ? Promise.resolve() : Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["until"])('pendingPlayingTab reset', function () {
    return {
      pass: !state.pendingPlayingTab,
      result: true
    };
  }, 100, 5000);

  return p.then(runRealLogic);
};

var showPanelWindow = function showPanelWindow() {
  return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(state.tabIds.panel, true).catch(function () {
    _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
      config = config || {};
      return (config.size || {})[config.showSidebar ? 'with_sidebar' : 'standard'];
    }).then(function (size) {
      size = size || {
        width: 850,
        height: 775
      };

      _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.create({
        type: 'popup',
        url: _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.extension.getURL('popup.html'),
        width: size.width,
        height: size.height
      }).then(function (win) {
        if (!_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.isFirefox()) return;

        // Refer to https://bugzilla.mozilla.org/show_bug.cgi?id=1425829
        // Firefox New popup window appears blank until right-click
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(win.id, {
            width: size.width + 1,
            height: size.height + 1
          });
        }, 1000);
      });

      return true;
    });
  });
};

var withPanelIpc = function withPanelIpc() {
  return showPanelWindow().then(function () {
    return getPanelTabIpc(6 * 1000);
  });
};

var showBadge = function showBadge(options) {
  var _clear$text$color$bli = _extends({
    clear: false,
    text: '',
    color: '#ff0000',
    blink: 0
  }, options || {}),
      clear = _clear$text$color$bli.clear,
      text = _clear$text$color$bli.text,
      color = _clear$text$color$bli.color,
      blink = _clear$text$color$bli.blink;

  if (clear) {
    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: '' });
  }

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeBackgroundColor({ color: color });
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: text });

  if (blink) {
    setTimeout(function () {
      _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.getBadgeText({}).then(function (curText) {
        if (curText !== text) return false;
        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: '' });
      });
    }, blink);
  }

  return true;
};

var toggleRecordingBadge = function toggleRecordingBadge(isRecording, options) {
  return showBadge(_extends({
    color: '#ff0000',
    text: 'R'
  }, options || {}, {
    clear: !isRecording
  }));
};

var toggleInspectingBadge = function toggleInspectingBadge(isInspecting, options) {
  return showBadge(_extends({
    color: '#ffa800',
    text: 'S'
  }, options || {}, {
    clear: !isInspecting
  }));
};

var togglePlayingBadge = function togglePlayingBadge(isPlaying, options) {
  return showBadge(_extends({
    color: '#14c756',
    text: 'P'
  }, options || {}, {
    clear: !isPlaying
  }));
};

var isUpgradeViewed = function isUpgradeViewed() {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local.get('upgrade_not_viewed').then(function (obj) {
    return obj['upgrade_not_viewed'] !== 'not_viewed';
  });
};

var notifyRecordCommand = function notifyRecordCommand(command) {
  var notifId = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["uid"])();

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create(notifId, {
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Record command!',
    message: function () {
      var list = [];

      list.push('command: ' + command.cmd);
      if (command.target) list.push('target: ' + command.target);
      if (command.value) list.push('value: ' + command.value);

      return list.join('\n');
    }()
  });

  // Note: close record notifications right away, so that notifications won't be stacked
  setTimeout(function () {
    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.clear(notifId).catch(function (e) {
      return _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e);
    });
  }, 2000);
};

var notifyAutoPause = function notifyAutoPause() {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create({
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Replay paused!',
    message: 'Auto paused by command'
  });
};

var notifyBreakpoint = function notifyBreakpoint() {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create({
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Replay paused!',
    message: 'Auto paused by breakpoint'
  });
};

var notifyEcho = function notifyEcho(text) {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create({
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Echo',
    message: text
  });
};

var closeAllWindows = function closeAllWindows() {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getAll().then(function (wins) {
    return Promise.all(wins.map(function (win) {
      return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.remove(win.id);
    }));
  });
};

var isTimeToBackup = function isTimeToBackup() {
  return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
    var enableAutoBackup = config.enableAutoBackup,
        lastBackupActionTime = config.lastBackupActionTime,
        autoBackupInterval = config.autoBackupInterval;


    if (!enableAutoBackup) {
      return {
        timeout: false,
        remain: -1
      };
    }

    var diff = new Date() * 1 - (lastBackupActionTime || 0);
    return {
      timeout: diff > autoBackupInterval * 24 * 3600000,
      remain: diff
    };
  });
};

var notifyPanelAboutActiveTab = function notifyPanelAboutActiveTab(activeTabId) {
  Promise.all([_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(activeTabId), getPanelTabIpc().catch(function () {
    return null;
  })]).then(function (tuple) {
    var _tuple = _slicedToArray(tuple, 2),
        tab = _tuple[0],
        panelIpc = _tuple[1];

    if (!panelIpc) return;
    if (tab.url.indexOf(_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.extension.getURL('')) !== -1) return;

    if (!tab.title || tab.title.trim().length === 0) {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
        return notifyPanelAboutActiveTab(activeTabId);
      }, 200);
    }

    return panelIpc.ask('UPDATE_ACTIVE_TAB', {
      url: tab.url,
      title: tab.title
    });
  });
};

var isTabActiveAndFocused = function isTabActiveAndFocused(tabId) {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId).then(function (tab) {
    if (!tab.active) return false;

    switch (state.status) {
      case _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL:
        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(tab.windowId).then(function (win) {
          return win.focused;
        });

      case _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].PLAYER:
        return tabId === state.tabIds.toPlay;

      case _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].RECORDER:
        return tabId === state.tabIds.toRecord;

      default:
        throw new Error('isTabActiveAndFocused: unknown app status, \'' + state.status + '\'');
    }
  }).catch(function (e) {
    return false;
  });
};

var getCurrentStorageManager = function getCurrentStorageManager() {
  var restoreConfig = function restoreConfig() {
    return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({
        storageMode: _services_storage__WEBPACK_IMPORTED_MODULE_12__["StorageStrategyType"].Browser
      }, config);
    });
  };

  return Promise.all([restoreConfig(), Object(_services_xmodules_xfile__WEBPACK_IMPORTED_MODULE_13__["getXFile"])().getConfig()]).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        config = _ref3[0],
        xFileConfig = _ref3[1];

    return Object(_services_storage__WEBPACK_IMPORTED_MODULE_12__["getStorageManager"])(config.storageMode);
  });
};

var saveDataUrlToScreenshot = function saveDataUrlToScreenshot(fileName, dataUrl) {
  return getCurrentStorageManager().then(function (storageMan) {
    return storageMan.getScreenshotStorage().overwrite(Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["ensureExtName"])('.png', fileName), Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["dataURItoBlob"])(dataUrl)).then(function () {
      getPanelTabIpc().then(function (panelIpc) {
        return panelIpc.ask('RESTORE_SCREENSHOTS');
      });
    });
  });
};

var saveDataUrlToLastScreenshot = function saveDataUrlToLastScreenshot(dataUrl) {
  return saveDataUrlToScreenshot(_common_constant__WEBPACK_IMPORTED_MODULE_3__[/* LAST_SCREENSHOT_FILE_NAME */ "e"], dataUrl);
};

var saveDataUrlToLastDesktopScreenshot = function saveDataUrlToLastDesktopScreenshot(dataUrl) {
  return saveDataUrlToScreenshot(_common_constant__WEBPACK_IMPORTED_MODULE_3__[/* LAST_DESKTOP_SCREENSHOT_FILE_NAME */ "d"], dataUrl);
};

var getScreenshotInSearchArea = function getScreenshotInSearchArea(_ref4) {
  var searchArea = _ref4.searchArea,
      storedImageRect = _ref4.storedImageRect,
      dpiScale = _ref4.dpiScale;

  // Take png searh area as rect, it should have set `storedImageRect` in advance
  if (/\.png/.test(searchArea)) {
    searchArea = 'rect';
  }

  var capture = function capture(ipc, tabId) {
    switch (searchArea) {
      case 'viewport':
        return Promise.all([ipc.ask('SCREENSHOT_PAGE_INFO'), Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* captureScreen */ "c"])(tabId)]).then(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              pageInfo = _ref6[0],
              dataUrl = _ref6[1];

          saveDataUrlToLastScreenshot(dataUrl);

          return {
            offset: {
              x: pageInfo.originalX,
              y: pageInfo.originalY
            },
            viewportOffset: {
              x: 0,
              y: 0
            },
            dataUrl: dataUrl
          };
        });

      case 'full':
        {
          return Promise.all([ipc.ask('SCREENSHOT_PAGE_INFO'), Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* captureFullScreen */ "b"])(tabId, {
            startCapture: function startCapture() {
              return ipc.ask('START_CAPTURE_FULL_SCREENSHOT', {});
            },
            endCapture: function endCapture(pageInfo) {
              return ipc.ask('END_CAPTURE_FULL_SCREENSHOT', { pageInfo: pageInfo });
            },
            scrollPage: function scrollPage(offset) {
              return ipc.ask('SCROLL_PAGE', { offset: offset });
            }
          })]).then(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                pageInfo = _ref8[0],
                dataUrl = _ref8[1];

            saveDataUrlToLastScreenshot(dataUrl);
            return {
              dataUrl: dataUrl,
              offset: {
                x: 0,
                y: 0
              },
              viewportOffset: {
                x: -1 * pageInfo.originalX,
                y: -1 * pageInfo.originalY
              }
            };
          });
        }

      case 'rect':
        {
          // Note: in this mode, `storedImageRect` is viewport based coordinates
          if (!storedImageRect) {
            throw new Error('rect mode: !storedImageRect should not be empty');
          }

          return ipc.ask('SCREENSHOT_PAGE_INFO').then(function (pageInfo) {
            return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* captureScreenInSelectionSimple */ "e"])(tabId, {
              rect: storedImageRect,
              devicePixelRatio: pageInfo.devicePixelRatio
            }).then(function (dataUrl) {
              saveDataUrlToLastScreenshot(dataUrl);

              return {
                dataUrl: dataUrl,
                offset: {
                  x: storedImageRect.x + pageInfo.originalX,
                  y: storedImageRect.y + pageInfo.originalY
                },
                viewportOffset: {
                  x: storedImageRect.x,
                  y: storedImageRect.y
                }
              };
            });
          });
        }

      default:
        {
          if (/^element:/i.test(searchArea)) {
            // Note: in this mode, `storedImageRect` is document based coordinates
            if (!storedImageRect) {
              throw new Error('!storedImageRect should not be empty');
            }

            var fileName = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["ensureExtName"])('.png', _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* LAST_SCREENSHOT_FILE_NAME */ "e"]);

            return Promise.all([ipc.ask('SCREENSHOT_PAGE_INFO'), getCurrentStorageManager().then(function (storageManager) {
              return storageManager.getScreenshotStorage().read(fileName, 'DataURL');
            })]).then(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  pageInfo = _ref10[0],
                  dataUrl = _ref10[1];

              return {
                dataUrl: dataUrl,
                offset: {
                  x: storedImageRect.x,
                  y: storedImageRect.y
                },
                viewportOffset: {
                  x: storedImageRect.x - pageInfo.originalX,
                  y: storedImageRect.x - pageInfo.originalY
                }
              };
            });
          }

          throw new Error('Unsupported searchArea \'' + searchArea + '\'');
        }
    }
  };

  return getPlayTabIpc().then(function (ipc) {
    var toPlayTabId = state.tabIds.toPlay;

    _common_log__WEBPACK_IMPORTED_MODULE_4___default()('getTargetImage tabIds', state.tabIds, toPlayTabId);

    return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(toPlayTabId, true).then(function () {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
    }).then(function () {
      return capture(ipc, toPlayTabId);
    }).then(function (obj) {
      return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* scaleDataURI */ "h"])(obj.dataUrl, dpiScale).then(function (dataUrl) {
        return {
          dataUrl: dataUrl,
          offset: obj.offset,
          viewportOffset: obj.viewportOffset
        };
      });
    });
  });
};

var bindEvents = function bindEvents() {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.onClicked.addListener(function () {
    isUpgradeViewed().then(function (isViewed) {
      if (isViewed) {
        return showPanelWindow();
      } else {
        _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: '' });
        _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local.set({
          upgrade_not_viewed: ''
        });
        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({
          url: _config__WEBPACK_IMPORTED_MODULE_10___default.a.urlAfterUpgrade
        });
      }
    });
  });

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    // Note: Within onRemoved, we only care about closing playing tab in player mode
    if (state.status !== _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].PLAYER) return;
    if (tabId !== state.tabIds.toPlay) return;

    // Note: If it's closed by `selectWindow tab=close` command, ignore it
    if (state.pendingPlayingTab) return;

    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(removeInfo.windowId, { populate: true }).then(function (win) {
      var pActiveTab = !win ? Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["getCurrentTab"])().then(function (tab) {
        if (!tab) return null;
        // Do nothing if window is also closed and Kantu window is focused
        if (tab.id === state.tabIds.panel) return null;
        return tab;
      }) : Promise.resolve(win.tabs.find(function (tab) {
        return tab.active;
      }));

      return pActiveTab.then(function (tab) {
        if (tab && tab.id) {
          // This is the main purpose for this callback: Update tabIds.toPlay to new active tab
          state.tabIds.toPlay = tab.id;
        }
      });
    });
  });

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (!tab.active) return;

    isTabActiveAndFocused(tabId).then(function (isFocused) {
      if (!isFocused) return;
      return notifyPanelAboutActiveTab(tabId);
    });
  });

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.onFocusChanged.addListener(function (windowId) {
    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ windowId: windowId, active: true }).then(function (tabs) {
      if (tabs.length === 0) return;

      Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tabs[0].id, 100).then(function (ipc) {
        return ipc.ask('TAB_ACTIVATED', {});
      }, function (e) {
        return 'Comment: ingore this error';
      });
    });
  });

  // Note: set the activated tab as the one to play
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.onActivated.addListener(function (activeInfo) {
    if (activeInfo.tabId === state.tabIds.panel) return;

    Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(activeInfo.tabId, 100).then(function (ipc) {
      return ipc.ask('TAB_ACTIVATED', {});
    }, function (e) {
      return 'Comment: ingore this error';
    });

    notifyPanelAboutActiveTab(activeInfo.tabId);

    switch (state.status) {
      case _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL:
        // Note: In Firefox, without this delay of 100ms, `tab.url` will still be 'about:config'
        // so have to wait for the url to take effect
        setTimeout(function () {
          _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(activeInfo.tabId).then(function (tab) {
            if (tab.url.indexOf(_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.extension.getURL('')) !== -1) return;

            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('in tab activated, set toPlay to ', activeInfo);
            state.tabIds.lastPlay = state.tabIds.toPlay;
            state.tabIds.toPlay = state.tabIds.firstPlay = activeInfo.tabId;
          });
        }, 100);

        break;

      case _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].RECORDER:
        {
          // Note: three things to do when switch tab in recording
          // 1. set the new tab to RECORDING status,
          // 2. and the original one back to NORMAL status
          // 3. commit a `selectWindow` command
          //
          // Have to wait for the new tab establish connection with background
          Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(activeInfo.tabId, 5000)
          // Note: wait for 1 second, expecting commands from original page to be committed
          .then(function (ipc) {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
              return ipc;
            }, 1000);
          }).then(function (ipc) {
            return ipc.ask('SET_STATUS', {
              status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].RECORDING
            });
          }).then(function () {
            // Note: set the original tab to NORMAL status
            // only if the new tab is set to RECORDING status
            return getRecordTabIpc().then(function (ipc) {
              ipc.ask('SET_STATUS', {
                status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].NORMAL
              });
            });
          }).then(function () {
            // Note: get window locator & update recording tab
            var oldTabId = state.tabIds.firstRecord;
            var newTabId = activeInfo.tabId;

            return Promise.all([_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(oldTabId), _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(newTabId)]).then(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  oldTab = _ref12[0],
                  newTab = _ref12[1];

              var result = [];

              // update recording tab
              state.tabIds.toRecord = activeInfo.tabId;

              if (oldTab.windowId === newTab.windowId) {
                result.push('tab=' + (newTab.index - oldTab.index));
              }

              result.push('title=' + newTab.title);

              return {
                target: result[0],
                targetOptions: result
              };
            });
          }).then(function (data) {
            // Note: commit the `selectWindow` command
            var command = _extends({
              cmd: 'selectWindow'
            }, data);

            return getPanelTabIpc().then(function (panelIpc) {
              return panelIpc.ask('RECORD_ADD_COMMAND', command);
            }).then(function () {
              return notifyRecordCommand(command);
            });
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e.stack);
          });

          break;
        }
    }
  });
};

// usage:
// 1. set tabId for inspector:  `setInspectorTabId(someTabId)`
// 2. clear tabId for inspector: `setInspectorTabId(null, true)`
var setInspectorTabId = function setInspectorTabId(tabId, shouldRemove, noNotify) {
  state.tabIds.lastInspect = state.tabIds.toInspect;

  if (tabId) {
    state.tabIds.toInspect = tabId;
    return Promise.resolve(true);
  } else if (shouldRemove) {
    if (state.tabIds.toInspect) {
      state.tabIds.toInspect = null;

      if (noNotify) return Promise.resolve(true);

      return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toInspect).then(function (ipc) {
        return ipc.ask('STOP_INSPECTING');
      }).catch(function (e) {
        return _common_log__WEBPACK_IMPORTED_MODULE_4___default()(e.stack);
      });
    }
    return Promise.resolve(true);
  }
};

var startSendingTimeoutStatus = function startSendingTimeoutStatus(timeout) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'wait';

  var past = 0;

  if (state.timer) clearInterval(state.timer);
  state.timer = setInterval(function () {
    past += 1000;

    getPanelTabIpc().then(function (panelIpc) {
      panelIpc.ask('TIMEOUT_STATUS', {
        type: type,
        past: past,
        total: timeout
      });
    });

    if (past >= timeout) {
      clearInterval(state.timer);
    }
  }, 1000);

  return function () {
    return clearInterval(state.timer);
  };
};

// Processor for all message background could receive
// All messages from panel starts with 'PANEL_'
// All messages from content script starts with 'CS_'
var onRequest = function onRequest(cmd, args) {
  if (cmd !== 'CS_ACTIVATE_ME') {
    _common_log__WEBPACK_IMPORTED_MODULE_4___default()('onAsk', cmd, args);
  }

  switch (cmd) {
    // Mark the tab as panel.
    case 'I_AM_PANEL':
      state.tabIds.panel = args.sender.tab.id;

      // Note: when the panel first open first, it could be marked as the tab to play
      // That's something we don't want to happen
      if (state.tabIds.toPlay === args.sender.tab.id) {
        _common_log__WEBPACK_IMPORTED_MODULE_4___default()('I am panel, set toPlay to null');
        state.tabIds.toPlay = state.tabIds.firstPlay = state.tabIds.lastPlay;
      }

      return true;

    case 'PANEL_TIME_FOR_BACKUP':
      return isTimeToBackup().then(function (obj) {
        return obj.timeout;
      });

    case 'PANEL_START_RECORDING':
      _common_log__WEBPACK_IMPORTED_MODULE_4___default()('Start to record...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].RECORDER;
      toggleRecordingBadge(true);
      return true;

    case 'PANEL_STOP_RECORDING':
      _common_log__WEBPACK_IMPORTED_MODULE_4___default()('Stop recording...');

      getRecordTabIpc().then(function (ipc) {
        ipc.ask('SET_STATUS', {
          status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].NORMAL
        });
      });

      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL;
      state.tabIds.lastRecord = state.tabIds.toRecord;
      state.tabIds.toRecord = null;
      state.tabIds.firstRecord = null;

      toggleRecordingBadge(false);
      return true;

    case 'PANEL_TRY_TO_RECORD_OPEN_COMMAND':
      {
        if (state.status !== _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].RECORDER) {
          throw new Error('Not in recorder mode');
        }

        // Well, `getPlayTab` is actually 'get current active tab'
        return getPlayTab().then(function (tab) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default()('PANEL_TRY_TO_RECORD_OPEN_COMMAND', tab);

          if (!/^(https?:|file:)/.test(tab.url)) {
            throw new Error('Not a valid url to record as open command');
          }

          state.tabIds.toRecord = state.tabIds.firstRecord = tab.id;

          getPanelTabIpc().then(function (panelIpc) {
            var command = {
              cmd: 'open',
              target: tab.url
            };

            panelIpc.ask('RECORD_ADD_COMMAND', command);
            notifyRecordCommand(command);
          });

          return true;
        });
      }

    case 'PANEL_START_INSPECTING':
      _common_log__WEBPACK_IMPORTED_MODULE_4___default()('start to inspect...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].INSPECTOR;
      toggleInspectingBadge(true);
      return true;

    case 'PANEL_STOP_INSPECTING':
      _common_log__WEBPACK_IMPORTED_MODULE_4___default()('start to inspect...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL;

      toggleInspectingBadge(false);
      return setInspectorTabId(null, true);

    case 'PANEL_START_PLAYING':
      {
        _common_log__WEBPACK_IMPORTED_MODULE_4___default()('start to play...');
        state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].PLAYER;
        state.xClickNeedCalibrationInfo = null;

        togglePlayingBadge(true);
        // Note: reset download manager to clear any previous downloads
        Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__[/* getDownloadMan */ "a"])().reset();

        if (state.timer) clearInterval(state.timer);

        return true;
        // .catch(e => {
        //   togglePlayingBadge(false)
        //   throw e
        // })
      }

    case 'PANEL_HEART_BEAT':
      {
        return state.heartBeatSecret;
      }

    case 'PANEL_RUN_COMMAND':
      {
        if (state.timer) clearInterval(state.timer);

        // Note: `disableHeartBeat` is only set to false when current tab will be closed ("reload tab" / "change url" excluded).
        // For exmaple `selectWindow tab=close`
        state.disableHeartBeat = false;

        var shouldWaitForDownloadAfterRun = function shouldWaitForDownloadAfterRun(command) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default()('shouldWaitForDownloadAfterRun', command);
          if (command.cmd === 'click') return true;
          return false;
        };
        var checkHeartBeat = function checkHeartBeat(timeout, before) {
          if (state.disableHeartBeat) return Promise.resolve(true);
          updateHeartBeatSecret();

          return getPlayTabIpc(timeout, before).then(function (ipc) {
            return ipc.ask('HEART_BEAT', { timeout: timeout, before: before });
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error('at least I catched it', e.message);
            throw new Error('heart beat error thrown');
          });
        };
        var shoudWaitForCommand = function shoudWaitForCommand(command) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default()('shoudWaitForCommand', command);
          return (/andWait/i.test(command.cmd) || command.cmd === 'open'
          );
        };

        // Note: There are several versions of runCommandXXX here. One by one, they have a better tolerence of error
        // 1. runCommand:
        //      Run a command, and wait until we can confirm that command is completed (e.g.  xxxAndWait)
        //
        // 2. runCommandWithRetry:
        //      Enhance runCommand with retry mechanism, only retry when element is not found
        //
        // 3. runCommandWithClosureAndErrorProcess:
        //      Include `args` in closure, and take care of `errorIgnore`
        //
        // 4. runWithHeartBeat:
        //      Run a heart beat check along with `runCommandWithClosureAndErrorProcess`.
        //      Heart beat check requires cs Ipc must be created before heart beat check starts.
        //      With this, we can ensure the page is not closed or refreshed
        //
        // 5. runWithHeartBeatRetry:
        //      Run `runWithHeartBeat` with retry mechanism. only retry when it's a 'lost heart beat' error
        //      When closed/refresh is detected, it will try to send same command to that tab again.
        //

        var runCommand = function runCommand(args, retryInfo) {
          return getPlayTabIpc().then(function (ipc) {
            // Note: each command keeps target page's status as PLAYING
            ipc.ask('SET_STATUS', { status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].PLAYING });

            var gotHeartBeat = false;

            var innerCheckHeartBeat = function innerCheckHeartBeat() {
              // Note: ignore any exception when checking heart beat
              // possible exception: no tab for play, no ipc
              return checkHeartBeat().then(function () {
                gotHeartBeat = true;
              }, function (e) {
                _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e);return null;
              });
            };

            var runWithPageLoadCheck = function runWithPageLoadCheck(promiseFunc) {
              var shouldWait = shoudWaitForCommand(args.command);
              if (!shouldWait) return promiseFunc();

              var timeoutPageLoad = (args.command && args.command.extra && args.command.extra.timeoutPageLoad || 60) * 1000;

              // Note: send timeout status to dashboard once "xxxWait" and "open" returns
              var clear = startSendingTimeoutStatus(timeoutPageLoad);

              return Promise.race([promiseFunc().then(function (data) {
                clear();return data;
              }, function (e) {
                clear();throw e;
              }), Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
                throw new Error('page load ' + timeoutPageLoad / 1000 + ' seconds time out');
              }, timeoutPageLoad)]);
            };

            // res format: { data, isIFrame }
            var wait = function wait(res) {
              var shouldWait = shoudWaitForCommand(args.command);
              var shouldResetIpc = !res.isIFrame && (/AndWait/i.test(args.command.cmd) || args.command.cmd === 'refresh');
              if (!shouldWait) return Promise.resolve(res.data);

              _common_log__WEBPACK_IMPORTED_MODULE_4___default()('wait!!!!', res);
              var timeoutHeartbeat = (res.data && res.data.extra && res.data.extra.timeoutElement || 10) * 1000;

              // Note: for clickAndWait etc.,  must disable ipc to avoid
              // any further message (like heart beat) to be sent to the original ipc
              if (shouldResetIpc) {
                Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().disable(state.tabIds.toPlay);
              }

              // Note: put some delay here because there are cases when next command's
              // heart beat request is answered by previous page
              return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 2000)
              // A standlone `checkHeartBeat to make sure we don't have to wait until's
              // first interval to pass the check
              .then(function () {
                return innerCheckHeartBeat();
              }).then(function () {
                return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["until"])('player tab heart beat check', function () {
                  innerCheckHeartBeat();

                  return {
                    pass: gotHeartBeat,
                    result: true
                  };
                }, 100, timeoutHeartbeat).catch(function (e) {
                  var cmd = args.command.cmd;

                  var isAndWait = /AndWait/.test(cmd);

                  if (isAndWait) {
                    var instead = cmd.replace('AndWait', '');
                    throw new Error('\'' + cmd + '\' failed. No page load event detected after ' + timeoutHeartbeat / 1000 + ' seconds. Try \'' + instead + '\' instead.');
                  } else {
                    throw new Error(cmd + '\' failed. No page load event detected after ' + timeoutHeartbeat / 1000 + ' seconds.');
                  }
                });
              })
              // Note: must get the new ipc here.
              // The previous ipc is useless after a new page load
              .then(function () {
                return getPlayTabIpc();
              }).then(function (ipc) {
                return ipc.ask('DOM_READY', {}).then(function () {
                  return ipc.ask('HACK_ALERT', {});
                });
              }).then(function () {
                return res.data;
              });
            };

            // Note: clear timer whenever we execute a new command, and it's not a retry
            if (state.timer && retryInfo.retryCount === 0) clearInterval(state.timer);

            // Note: -1 will disable ipc timeout for 'pause' command
            var ipcTimeout = function () {
              switch (args.command.cmd) {
                case 'open':
                  return (args.command.extra && args.command.extra.timeoutPageLoad || 60) * 1000;
                case 'pause':
                  return -1;
                default:
                  return null;
              }
            }();

            return ipc.ask('DOM_READY', {}).then(function () {
              return ipc.ask('RUN_COMMAND', {
                command: _extends({}, args.command, {
                  extra: _extends({}, args.command.extra || {}, {
                    retryInfo: retryInfo
                  })
                })
              }, ipcTimeout);
            }).then(function (res) {
              return runWithPageLoadCheck(function () {
                return wait(res);
              });
            });
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error('all catched by runCommand - ' + e.message);
            throw e;
          });
        };

        var timeout = args.command.extra.timeoutElement * 1000;
        var runCommandWithRetry = function runCommandWithRetry() {
          // Note: add timerSecret to ensure it won't clear timer that is not created by this function call
          var timerSecret = Math.random();
          state.timerSecret = timerSecret;

          var fn = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["retry"])(runCommand, {
            timeout: timeout,
            shouldRetry: function shouldRetry(e) {
              _common_log__WEBPACK_IMPORTED_MODULE_4___default()('runCommandWithRetry - shouldRetry', e.message);

              return e.message && (e.message.indexOf('timeout reached when looking for') !== -1 || e.message.indexOf('element is found but not visible yet') !== -1 || e.message.indexOf('IPC Promise has been destroyed') !== -1);
            },
            onFirstFail: function onFirstFail(e) {
              var title = e && e.message && e.message.indexOf('element is found but not visible yet') !== -1 ? 'Tag waiting' // All use Tag Waiting for now  // 'Visible waiting'
              : 'Tag waiting';

              startSendingTimeoutStatus(timeout, title);
            },
            onFinal: function onFinal(err, data) {
              _common_log__WEBPACK_IMPORTED_MODULE_4___default()('onFinal', err, data);
              if (state.timer && state.timerSecret === timerSecret) clearInterval(state.timer);
            }
          });

          return fn.apply(undefined, arguments);
        };

        var runCommandWithClosureAndErrorProcess = function runCommandWithClosureAndErrorProcess() {
          return runCommandWithRetry(args).catch(function (e) {
            // Note: if variable !ERRORIGNORE is set to true,
            // it will just log errors instead of a stop of whole macro
            if (args.command.extra && args.command.extra.errorIgnore) {
              return {
                log: {
                  error: e.message
                }
              };
            }

            throw e;
          });
        };

        var runWithHeartBeat = function runWithHeartBeat() {
          var infiniteCheckHeartBeat = function () {
            var startTime = new Date().getTime();
            var stop = false;

            var fn = function fn() {
              _common_log__WEBPACK_IMPORTED_MODULE_4___default()('starting heart beat');
              // Note: do not check heart beat when
              // 1. it's a 'open' command, which is supposed to reconnect ipc
              // 2. it's going to download files, which will kind of reload page and reconnect ipc
              if (shoudWaitForCommand(args.command) || Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__[/* getDownloadMan */ "a"])().hasPendingDownload()) {
                updateHeartBeatSecret({ disabled: true });
                return new Promise(function () {});
              }

              if (stop) return Promise.resolve();

              return checkHeartBeat(100, startTime).then(function () {
                return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 1000).then(fn);
              }, function (e) {
                _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error('lost heart beart!!', e.stack);
                throw new Error('lost heart beat when running command');
              });
            };
            fn.stop = function () {
              _common_log__WEBPACK_IMPORTED_MODULE_4___default()('stopping heart beat');
              stop = true;
            };

            return fn;
          }();

          return Promise.race([runCommandWithClosureAndErrorProcess().then(function (data) {
            infiniteCheckHeartBeat.stop();
            return data;
          }).catch(function (e) {
            infiniteCheckHeartBeat.stop();
            throw e;
          }), infiniteCheckHeartBeat()]);
        };

        var runWithHeartBeatRetry = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["retry"])(runWithHeartBeat, {
          timeout: timeout,
          shouldRetry: function shouldRetry(e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('runWithHeartBeatRetry - shouldRetry', e.message);
            return e && e.message && e.message.indexOf('lost heart beat when running command') !== -1;
          },
          retryInterval: function retryInterval(retryCount, lastRetryInterval) {
            return Math.max(1 * 1000, Math.min(5 * 1000, lastRetryInterval * 1.2));
          }
        });

        var runEternally = function runEternally() {
          return new Promise(function (resolve, reject) {
            var p = runWithHeartBeatRetry().then(function (data) {
              if (shouldWaitForDownloadAfterRun(args.command)) {
                // Note: wait for download to either be create or completed
                return Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__[/* getDownloadMan */ "a"])().waitForDownloadIfAny().then(function () {
                  return data;
                });
              }

              return data;
            }).then(function (data) {
              // Note: use bg to set pageUrl, so that we can be sure that this `pageUrl` is 100% correct
              return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.toPlay).then(function (tab) {
                return _extends({}, data, { pageUrl: tab.url });
              }).catch(function (e) {
                _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error('Error in fetching play tab url');
                return data;
              });
            });

            resolve(p);
          });
        };

        var prepare = function prepare() {
          return getPlayTab()
          // Note: catch any error, and make it run 'getPlayTab(args.url)' instead
          .catch(function (e) {
            return { id: -1 };
          }).then(function (tab) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('after first getPlayTab', tab);
            var openUrlInTab = function openUrlInTab() {
              var _args$command = args.command,
                  cmd = _args$command.cmd,
                  target = _args$command.target;

              if (cmd !== 'open') throw new Error('Error #101: Kantu is not connected to a browser tab');

              return getPlayTab(target).then(function (tab) {
                return { tab: tab, hasOpenedUrl: true };
              });
            };

            return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, 100).then(function (ipc) {
              // Note: test if the ipc is still active,
              // if it's not, try to open url as if that ipc doesn't exist at all
              // return ipc.ask('HEART_BEAT', {}, 500)
              // .then(() => ({ tab, hasOpenedUrl: false }))
              // .catch(openUrlInTab)
              return { tab: tab, hasOpenedUrl: false };
            }, function (e) {
              return openUrlInTab();
            });
          }).then(function (_ref13) {
            var tab = _ref13.tab,
                hasOpenedUrl = _ref13.hasOpenedUrl;

            // const p = args.shouldNotActivateTab ? Promise.resolve() : activateTab(tab.id, true)
            var p = Promise.resolve();

            // Note: wait for tab to confirm it has loaded
            return p.then(function () {
              return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, 6000 * 10);
            }).then(function (ipc) {
              var p = !hasOpenedUrl ? Promise.resolve() : ipc.ask('MARK_NO_COMMANDS_YET', {});
              return p.then(function () {
                return ipc.ask('SET_STATUS', { status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].PLAYING });
              });
            });
          });
        };

        return prepare().then(runEternally).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error('catched by runEternally', e.stack);

          if (e && e.message && (e.message.indexOf('lost heart beat when running command') !== -1 || e.message.indexOf('Could not establish connection') !== -1)) {
            return runEternally();
          }
          throw e;
        });
      }

    case 'PANEL_STOP_PLAYING':
      {
        togglePlayingBadge(false);
        state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL;

        // Note: reset download manager to clear any previous downloads
        Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__[/* getDownloadMan */ "a"])().reset();

        // Note: reset firstPlay to current toPlay when stopped playing
        // userful for playing loop (reset firstPlay after each loop)
        state.tabIds.firstPlay = state.tabIds.toPlay;

        // reset lastPlay here is useful for ContinueInLastUsedTab
        state.tabIds.lastPlay = state.tabIds.toPlay;

        if (state.timer) clearInterval(state.timer);

        // Note: let cs know that it should exit playing mode
        return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toPlay).then(function (ipc) {
          return ipc.ask('SET_STATUS', { status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].NORMAL });
        });
      }

    // corresponding to the 'find' functionality on dashboard panel
    // It will find either the last play tab or record tab to look for the passed in locator
    case 'PANEL_HIGHLIGHT_DOM':
      {
        return Promise.all([getRecordTabIpc().then(function (ipc) {
          return { ipc: ipc, type: 'record' };
        }).catch(function () {
          return null;
        }), getPlayTabIpc().then(function (ipc) {
          return { ipc: ipc, type: 'play' };
        }).catch(function () {
          return null;
        })]).then(function (tuple) {
          if (!tuple[0] && !tuple[1]) {
            throw new Error('No where to look for the dom');
          }

          return tuple.filter(function (x) {
            return !!x;
          });
        }).then(function (list) {
          return Promise.all(list.map(function (_ref14) {
            var ipc = _ref14.ipc,
                type = _ref14.type;

            return ipc.ask('FIND_DOM', { locator: args.locator }).then(function (result) {
              return { result: result, type: type, ipc: ipc };
            });
          }));
        }).then(function (list) {
          var foundedList = list.filter(function (x) {
            return x.result;
          });

          if (foundedList.length === 0) {
            throw new Error('DOM not found');
          }

          var item = foundedList.length === 2 ? foundedList.find(function (item) {
            return item.type === args.lastOperation;
          }) : foundedList[0];

          var tabId = state.tabIds[item.type === 'record' ? 'lastRecord' : 'toPlay'];

          return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(tabId, true).then(function () {
            return item.ipc.ask('HIGHLIGHT_DOM', { locator: args.locator });
          });
        });
      }

    case 'PANEL_HIGHLIGHT_RECT':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('HIGHLIGHT_RECT', args);
        });
      }

    case 'PANEL_HIGHLIGHT_RECTS':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('HIGHLIGHT_RECTS', args);
        });
      }

    case 'PANEL_HIGHLIGHT_DESKTOP_RECTS':
      {
        return Object(_desktop_screenshot_editor_service__WEBPACK_IMPORTED_MODULE_18__["runInDesktopScreenshotEditor"])({
          type: _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__["DesktopScreenshot"].RequestType.DisplayVisualResult,
          data: {
            rects: args.scoredRects,
            image: args.imageInfo
          }
        });
      }

    case 'PANEL_HIGHLIGHT_OCR_MATCHES':
      {
        if (args.isDesktop) {
          return Object(_desktop_screenshot_editor_service__WEBPACK_IMPORTED_MODULE_18__["runInDesktopScreenshotEditor"])({
            type: _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__["DesktopScreenshot"].RequestType.DisplayOcrResult,
            data: {
              ocrMatches: args.ocrMatches,
              image: {
                source: _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__["DesktopScreenshot"].ImageSource.Storage,
                path: Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["ensureExtName"])('.png', _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* LAST_DESKTOP_SCREENSHOT_FILE_NAME */ "d"])
              }
            }
          });
        } else {
          return getPlayTabIpc().then(function (ipc) {
            return ipc.ask('HIGHLIGHT_OCR_MATCHES', args);
          });
        }
      }

    case 'PANEL_CLEAR_OCR_MATCHES_ON_PLAYING_PAGE':
      {
        return getPlayTabIpc().then(function (ipc) {
          return Promise.all([ipc.ask('CLEAR_VISION_RECTS'), ipc.ask('CLEAR_OCR_MATCHES')]);
        });
      }

    case 'PANEL_RESIZE_WINDOW':
      {
        if (!state.tabIds.panel) {
          throw new Error('Panel not available');
        }

        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.panel).then(function (tab) {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(tab.windowId, Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["pick"])(['width', 'height'], _extends({}, args.size, {
            width: args.size.width,
            height: args.size.height
          })));
        });
      }

    case 'PANEL_UPDATE_BADGE':
      {
        var dict = {
          play: togglePlayingBadge,
          record: toggleRecordingBadge,
          inspect: toggleInspectingBadge
        };
        var fn = dict[args.type];

        if (!fn) {
          throw new Error('unknown type for updating badge, \'' + args.type + '\'');
        }

        return fn(!args.clear, args);
      }

    case 'PANEL_NOTIFY_AUTO_PAUSE':
      {
        notifyAutoPause();
        return true;
      }

    case 'PANEL_NOTIFY_BREAKPOINT':
      {
        notifyBreakpoint();
        return true;
      }

    case 'PANEL_NOTIFY_ECHO':
      {
        notifyEcho(args.text);
        return true;
      }

    case 'PANEL_CLOSE_ALL_WINDOWS':
      {
        closeAllWindows();
        return true;
      }

    case 'PANEL_CURRENT_PLAY_TAB_INFO':
      {
        return getPlayTab().then(function (tab) {
          return {
            url: tab.url,
            title: tab.title
          };
        });
      }

    case 'PANEL_BRING_PANEL_TO_FOREGROUND':
      {
        return showPanelWindow().then(function () {
          return true;
        });
      }

    case 'PANEL_BRING_PLAYING_WINDOW_TO_FOREGROUND':
      {
        return getPlayTab().then(function (tab) {
          return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(tab.id, true);
        }).catch(function (e) {
          return showPanelWindow();
        }).then(function () {
          return true;
        });
      }

    /*    case 'PANEL_IS_PLAYING_WINDOW_IN_FOREGROUND': {
          return getPlayTab()
          .then(tab => {
            if (!tab) return false
    
            return Ext.windows.get(tab.windowId)
            .then(win => !!win.focused)
          })
        }
    */

    case 'PANEL_RESIZE_PLAY_TAB':
      {
        return getPlayTab().then(function (tab) {
          return Object(_common_resize_window__WEBPACK_IMPORTED_MODULE_14__["resizeViewportOfTab"])(tab.id, args);
        });
      }

    case 'PANEL_SELECT_AREA_ON_CURRENT_PAGE':
      {
        return getPlayTabIpc().then(function (ipc) {
          Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(state.tabIds.toPlay, true);
          return ipc.ask('SELECT_SCREEN_AREA');
        }).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e.stack);
          throw new Error('Not able to take screenshot on the current tab');
        });
      }

    case 'PANEL_SELECT_AREA_ON_DESKTOP':
      {
        return Object(_services_desktop__WEBPACK_IMPORTED_MODULE_16__["getNativeCVAPI"])().captureDesktop({ path: undefined }).then(function (hardDrivePath) {
          return Object(_desktop_screenshot_editor_service__WEBPACK_IMPORTED_MODULE_18__["runInDesktopScreenshotEditor"])({
            type: _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__["DesktopScreenshot"].RequestType.Capture,
            data: {
              image: {
                source: _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__["DesktopScreenshot"].ImageSource.HardDrive,
                path: hardDrivePath
              }
            }
          }).then(function (dataUrl) {
            return withPanelIpc().then(function (panelIpc) {
              return panelIpc.ask('ADD_VISION_IMAGE', { dataUrl: dataUrl });
            });
          });
        });
      }

    case 'PANEL_CLEAR_VISION_RECTS_ON_PLAYING_PAGE':
      {
        return getPlayTabIpc().then(function (ipc) {
          return Promise.all([ipc.ask('CLEAR_VISION_RECTS'), ipc.ask('CLEAR_OCR_MATCHES')]);
        });
      }

    case 'PANEL_HIDE_VISION_HIGHLIGHT':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('HIDE_VISION_RECTS');
        });
      }

    case 'PANEL_SHOW_VISION_HIGHLIGHT':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('SHOW_VISION_RECTS');
        });
      }

    case 'PANEL_SEARCH_VISION_ON_PLAYING_PAGE':
      {
        var visionFileName = args.visionFileName,
            minSimilarity = args.minSimilarity,
            _args$searchArea = args.searchArea,
            searchArea = _args$searchArea === undefined ? 'full' : _args$searchArea,
            storedImageRect = args.storedImageRect,
            command = args.command,
            cvScope = args.cvScope;

        var commandExtra = command.extra || {};
        var requireGreenPinkBoxes = !!commandExtra.relativeVisual;
        var enableGreenPinkBoxes = typeof commandExtra.relativeVisual === 'boolean' ? commandExtra.relativeVisual : /_relative\.png$/i.test(visionFileName);
        var patternDpi = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["dpiFromFileName"])(visionFileName) || 96;
        var screenDpi = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getScreenDpi"])();
        var dpiScale = patternDpi / screenDpi;
        var pStorageMan = getCurrentStorageManager();
        var getPatternImage = function getPatternImage(fileName) {
          return pStorageMan.then(function (storageMan) {
            var visionStorage = storageMan.getVisionStorage();

            return visionStorage.exists(fileName).then(function (existed) {
              if (!existed) throw new Error(command.cmd + ': No input image found for file name \'' + fileName + '\'');
              return visionStorage.read(fileName, 'DataURL');
            }).then(function (dataUrl) {
              return dataUrl.substr(0, 5) !== 'data:' ? 'data:image/png;base64,' + dataUrl : dataUrl;
            });
          });
        };

        if (minSimilarity < 0.1 || minSimilarity > 1.0) {
          throw new Error('confidence should be between 0.1 and 1.0');
        }

        var pRegions = function () {
          switch (cvScope) {
            case 'desktop':
              {
                var isFullScreenshot = searchArea !== 'rect' && !/\.png/i.test(searchArea) || !storedImageRect;

                return Object(_services_xmodules_xdesktop__WEBPACK_IMPORTED_MODULE_21__["getXDesktop"])().sanityCheck().then(function () {
                  return getPatternImage(visionFileName);
                }).then(function (dataUrl) {
                  return Object(_services_desktop__WEBPACK_IMPORTED_MODULE_16__["getNativeCVAPI"])().getImageFromDataUrl(dataUrl, patternDpi);
                }).then(function (imageObj) {
                  return Object(_services_desktop__WEBPACK_IMPORTED_MODULE_16__["getNativeCVAPI"])().searchDesktopWithGuard({
                    pattern: imageObj,
                    options: {
                      minSimilarity: minSimilarity,
                      enableGreenPinkBoxes: enableGreenPinkBoxes,
                      requireGreenPinkBoxes: requireGreenPinkBoxes,
                      enableHighDpi: true,
                      allowSizeVariation: true,
                      saveCaptureOnDisk: true,
                      limitSearchArea: !isFullScreenshot,
                      // Note: storedImageRect is supposed to be also returned by this API call
                      // thus it is scaled down by (1 / window.devicePixelRatio),
                      // we should recover coordiates to screen pixels
                      searchArea: isFullScreenshot ? undefined : {
                        x: window.devicePixelRatio * storedImageRect.x,
                        y: window.devicePixelRatio * storedImageRect.y,
                        width: window.devicePixelRatio * storedImageRect.width,
                        height: window.devicePixelRatio * storedImageRect.height
                      }
                    }
                  }).then(function (result) {
                    return Object(_services_desktop__WEBPACK_IMPORTED_MODULE_16__["getNativeCVAPI"])().readFileAsDataURL(result.capturePath, true).then(function (dataUrl) {
                      return saveDataUrlToLastDesktopScreenshot(dataUrl)
                      // Note: convert coordinates to CSS pixels
                      .then(function () {
                        return Object(_services_desktop__WEBPACK_IMPORTED_MODULE_16__["convertImageSearchResult"])(result, 1 / window.devicePixelRatio);
                      });
                    });
                  });
                });
              }

            case 'browser':
            default:
              return Promise.all([getPatternImage(visionFileName), getScreenshotInSearchArea({ searchArea: searchArea, storedImageRect: storedImageRect, dpiScale: dpiScale })]).then(function (_ref15) {
                var _ref16 = _slicedToArray(_ref15, 2),
                    patternImageUrl = _ref16[0],
                    targetImageInfo = _ref16[1];

                var targetImageUrl = targetImageInfo.dataUrl;
                var offset = targetImageInfo.offset;

                return Object(_services_vision_adaptor_ts__WEBPACK_IMPORTED_MODULE_11__["searchImage"])({
                  patternImageUrl: patternImageUrl,
                  targetImageUrl: targetImageUrl,
                  minSimilarity: minSimilarity,
                  enableGreenPinkBoxes: enableGreenPinkBoxes,
                  requireGreenPinkBoxes: requireGreenPinkBoxes,
                  allowSizeVariation: true,
                  scaleDownRatio: dpiScale * window.devicePixelRatio,
                  offsetX: offset.x || 0,
                  offsetY: offset.y || 0
                }).then(function (regions) {
                  return regions.map(function (matched) {
                    return { matched: matched, reference: null };
                  });
                });
              });
          }
        }();

        return pRegions.then(function (regions) {
          return {
            regions: regions,
            imageInfo: {
              source: _desktop_screenshot_editor_types__WEBPACK_IMPORTED_MODULE_19__["DesktopScreenshot"].ImageSource.Storage,
              path: Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["ensureExtName"])('.png', cvScope === 'desktop' ? _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* LAST_DESKTOP_SCREENSHOT_FILE_NAME */ "d"] : _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* LAST_SCREENSHOT_FILE_NAME */ "e"])
            }
          };
        });
      }

    case 'PANEL_CAPTURE_IMAGE':
      {
        var _searchArea = args.searchArea,
            _storedImageRect = args.storedImageRect,
            scaleDpi = args.scaleDpi,
            isDesktop = args.isDesktop;


        if (isDesktop) {
          var cvApi = Object(_services_desktop__WEBPACK_IMPORTED_MODULE_16__["getNativeCVAPI"])();
          var crop = function crop(imgSrc) {
            switch (_searchArea) {
              case 'rect':
                {
                  if (!_storedImageRect) {
                    throw new Error('storedImageRect is required');
                  }
                  // Note: Must scale up rect to screen coordinates
                  return Object(_common_dom_utils__WEBPACK_IMPORTED_MODULE_20__["subImage"])(imgSrc, Object(_common_dom_utils__WEBPACK_IMPORTED_MODULE_20__["scaleRect"])(_storedImageRect, window.devicePixelRatio)).then(function (dataUrl) {
                    return {
                      dataUrl: dataUrl,
                      offset: {
                        x: _storedImageRect.x,
                        y: _storedImageRect.y
                      }
                    };
                  });
                }

              default:
                {
                  return Promise.resolve({
                    dataUrl: imgSrc,
                    offset: { x: 0, y: 0 }
                  });
                }
            }
          };

          return cvApi.captureDesktop({ path: undefined }).then(function (hardDrivePath) {
            return cvApi.readFileAsDataURL(hardDrivePath, true);
          }).then(function (originalDataUrl) {
            return crop(originalDataUrl).then(function (_ref17) {
              var dataUrl = _ref17.dataUrl,
                  offset = _ref17.offset;

              return Promise.all([saveDataUrlToLastScreenshot(dataUrl), saveDataUrlToLastDesktopScreenshot(originalDataUrl)]).then(function () {
                return {
                  dataUrl: dataUrl,
                  offset: offset,
                  viewportOffset: offset,
                  scale: 1 / window.devicePixelRatio
                };
              });
            });
          });
        } else {
          return getScreenshotInSearchArea({
            searchArea: _searchArea,
            storedImageRect: _storedImageRect,
            dpiScale: scaleDpi ? 96 / Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getScreenDpi"])() : 1
          });
        }
      }

    case 'PANEL_TIMEOUT_STATUS':
      {
        startSendingTimeoutStatus(args.timeout, args.type);
        return true;
      }

    case 'PANEL_CLEAR_TIMEOUT_STATUS':
      {
        clearInterval(state.timer);
        return true;
      }

    case 'PANEL_TOGGLE_HIGHLIGHT_VIEWPORT':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('TOGGLE_HIGHLIGHT_VIEWPORT', args);
        });
      }

    case 'PANEL_DISABLE_DOWNLOAD_BAR':
      {
        _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.setShelfEnabled(false);
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
          return true;
        }, 1000);
      }

    case 'PANEL_ENABLE_DOWNLOAD_BAR':
      {
        _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.setShelfEnabled(true);
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
          return true;
        }, 1000);
      }

    case 'PANEL_XCLICK_NEED_CALIBRATION':
      {
        var last = state.xClickNeedCalibrationInfo;
        var getWindowInfo = function getWindowInfo(win, tabId) {
          return {
            id: win.id,
            top: win.top,
            left: win.left,
            width: win.width,
            height: win.height,
            activeTabId: tabId
          };
        };
        var isWindowInfoEqual = function isWindowInfoEqual(a, b) {
          return _common_utils__WEBPACK_IMPORTED_MODULE_1__["and"].apply(undefined, _toConsumableArray('id, top, left, width, height, activeTabId'.split(/,\s*/g).map(function (key) {
            return a[key] === b[key];
          })));
        };
        // Note: we take every request as it will do calibration
        // and next request should get `false` (no need for more calibration, unless there are window change or window resize)
        return getPlayTab().then(function (tab) {
          if (!tab) throw new Error('no play tab found for calibration');

          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(tab.windowId).then(function (win) {
            var winInfo = getWindowInfo(win, tab.id);

            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('CALIBRATION NEED???', last, winInfo);

            // Note: cache last value
            state.xClickNeedCalibrationInfo = winInfo;

            return !isWindowInfoEqual(winInfo, last || {});
          });
        });
      }

    case 'PANEL_CLOSE_CURRENT_TAB_AND_SWITCH_TO_LAST_PLAYED':
      {
        return getPlayTab().then(function (currentTab) {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(currentTab.windowId, { populate: true }).then(function (win) {
            if (win.tabs.length < 2) return true;

            var index = win.tabs.findIndex(function (tab) {
              return tab.id === currentTab.id;
            });
            var prevIndex = (index - 1 + win.tabs.length) % win.tabs.length;
            var prevTab = win.tabs[prevIndex];

            var pNextTab = function () {
              if (state.tabIds.lastPlay) {
                return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.lastPlay).catch(function () {
                  return prevTab;
                });
              } else {
                return Promise.resolve(prevTab);
              }
            }();

            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.remove(currentTab.id).then(function () {
              return pNextTab;
            }).then(function (nextTab) {
              return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(nextTab.id);
            }).then(function () {
              return true;
            });
          });
        });
      }

    case 'CS_STORE_SCREENSHOT_IN_SELECTION':
      {
        var rect = args.rect,
            devicePixelRatio = args.devicePixelRatio,
            fileName = args.fileName;

        var tabId = args.sender.tab.id;

        return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tabId).then(function (ipc) {
          return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(state.tabIds.toPlay, true).then(function () {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
          }).then(function () {
            return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* captureScreenInSelection */ "d"])(state.tabIds.toPlay, { rect: rect, devicePixelRatio: devicePixelRatio }, {
              startCapture: function startCapture() {
                return ipc.ask('START_CAPTURE_FULL_SCREENSHOT', { hideScrollbar: false });
              },
              endCapture: function endCapture(pageInfo) {
                return ipc.ask('END_CAPTURE_FULL_SCREENSHOT', { pageInfo: pageInfo });
              },
              scrollPage: function scrollPage(offset) {
                return ipc.ask('SCROLL_PAGE', { offset: offset });
              }
            });
          }).then(function (dataUrl) {
            return getCurrentStorageManager().then(function (storageManager) {
              return storageManager.getScreenshotStorage().overwrite(fileName, Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["dataURItoBlob"])(dataUrl)).then(function () {
                getPanelTabIpc().then(function (panelIpc) {
                  return panelIpc.ask('RESTORE_SCREENSHOTS');
                });

                return fileName;
              });
            });
          });
        });
      }

    case 'CS_SCREEN_AREA_SELECTED':
      {
        var _rect = args.rect,
            _devicePixelRatio = args.devicePixelRatio;

        var _tabId = args.sender.tab.id;

        _common_log__WEBPACK_IMPORTED_MODULE_4___default()('CS_SCREEN_AREA_SELECTED', _rect, _devicePixelRatio, _tabId);

        return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* captureScreenInSelectionSimple */ "e"])(args.sender.tab.id, { rect: _rect, devicePixelRatio: _devicePixelRatio }).then(function (dataUrl) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default()('CS_SCREEN_AREA_SELECTED', 'got reuslt', dataUrl.length);
          return withPanelIpc().then(function (panelIpc) {
            return panelIpc.ask('ADD_VISION_IMAGE', { dataUrl: dataUrl });
          });
        }).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e.stack);
          throw e;
        });
      }

    case 'CS_DONE_INSPECTING':
      _common_log__WEBPACK_IMPORTED_MODULE_4___default()('done inspecting...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].NORMAL;

      toggleInspectingBadge(false);
      setInspectorTabId(null, true, true);
      Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(state.tabIds.panel, true);

      return getPanelTabIpc().then(function (panelIpc) {
        return panelIpc.ask('INSPECT_RESULT', args);
      });

    // It's used for inspecting. The first tab which sends a CS_ACTIVATE_ME event
    // on mouse over event will be the one for us to inspect
    case 'CS_ACTIVATE_ME':
      // log('CS_ACTIVATE_ME state.status', state.status)

      switch (state.status) {
        case _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].INSPECTOR:
          if (!state.tabIds.toInspect) {
            state.tabIds.toInspect = args.sender.tab.id;

            setTimeout(function () {
              Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toInspect).then(function (ipc) {
                return ipc.ask('SET_STATUS', {
                  status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].INSPECTING
                });
              });
            }, 0);

            return true;
          }
          break;
      }
      return false;

    case 'CS_RECORD_ADD_COMMAND':
      {
        var pullbackTimeout = 1000;
        var isFirst = false;

        if (state.status !== _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].RECORDER) {
          return false;
        }

        if (!state.tabIds.toRecord) {
          isFirst = true;
          state.tabIds.toRecord = state.tabIds.firstRecord = args.sender.tab.id;
        }

        if (state.tabIds.toRecord !== args.sender.tab.id) {
          return false;
        }

        // Note: if receive a pullback cmd, we need to set the flag,
        // and strip Wait from any xxxAndWait command
        if (args.cmd === 'pullback') {
          state.pullback = true;
          setTimeout(function () {
            state.pullback = false;
          }, pullbackTimeout * 2);
          return false;
        }

        setTimeout(function () {
          Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toRecord).then(function (ipc) {
            return ipc.ask('SET_STATUS', {
              status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].RECORDING
            });
          });
        }, 0);

        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, pullbackTimeout).then(function () {
          return getPanelTabIpc();
        }).then(function (panelIpc) {
          if (isFirst) {
            panelIpc.ask('RECORD_ADD_COMMAND', {
              cmd: 'open',
              target: args.url
            });
          }

          // Note: remove AndWait from commands if we got a pullback
          if (state.pullback) {
            args.cmd = args.cmd.replace('AndWait', '');
            state.pullback = false;
          }

          return panelIpc.ask('RECORD_ADD_COMMAND', args);
        }).then(function () {
          return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config');
        }).then(function (config) {
          if (config.recordNotification && state.status === _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* APP_STATUS */ "a"].RECORDER) {
            notifyRecordCommand(args);
          }
        }).then(function () {
          return true;
        });
      }

    case 'CS_CLOSE_OTHER_TABS':
      {
        var _tabId2 = args.sender.tab.id;

        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(_tabId2).then(function (tab) {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ windowId: tab.windowId }).then(function (tabs) {
            return tabs.filter(function (t) {
              return t.id !== _tabId2;
            });
          }).then(function (tabs) {
            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.remove(tabs.map(function (t) {
              return t.id;
            }));
          });
        }).then(function () {
          return true;
        });
      }

    case 'CS_CLOSE_CURRENT_TAB':
      {
        var _tabId3 = args.sender.tab.id;

        // Note: must disable heart beat check here, since the heart beat of current tab is destined to be lost
        // The following two states are dedicated to this close tab task
        state.disableHeartBeat = true;
        state.pendingPlayingTab = true;

        var closeTabAndGetNextTabOnWindow = function closeTabAndGetNextTabOnWindow(winId) {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.remove(_tabId3).then(function () {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
              return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["getCurrentTab"])(winId);
            }, 1000);
          });
        };

        var withKantuWindowMinimized = function withKantuWindowMinimized(fn) {
          var getPanelWinId = function getPanelWinId() {
            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.panel).then(function (tab) {
              return tab.windowId;
            });
          };
          var minimize = function minimize() {
            return getPanelWinId().then(function (winId) {
              return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(winId, { state: 'minimized' });
            });
          };
          var restore = function restore() {
            return getPanelWinId().then(function (winId) {
              return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(winId, { state: 'normal' });
            });
          };

          return minimize().then(function () {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 1000);
          }).then(fn).then(function (data) {
            restore();
            return data;
          }, function (e) {
            restore();
            throw e;
          });
        };

        var closeAndGetNextTab = function closeAndGetNextTab() {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(_tabId3).then(function (tab) {
            // Note: If the current tab is the only tab in its window, we won't know which one is the next focused window,
            // if Kantu window happens to be on the top. In this case, we need to focus on the tab
            // that is going to be closed first
            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(tab.windowId, { populate: true }).then(function (win) {
              if (win.tabs.length !== 1) {
                return closeTabAndGetNextTabOnWindow(tab.windowId);
              }

              // If Kantu window is now on top, try to pick the next one (by minimize Kantu window)
              // Otherwise pick the current tab will be fine
              return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["getCurrentTab"])().then(function (tab) {
                if (tab && tab.id !== state.tabIds.panel) {
                  return closeTabAndGetNextTabOnWindow().then(function (tab) {
                    if (tab && tab.id === state.tabIds.panel) {
                      return withKantuWindowMinimized(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["getCurrentTab"]);
                    }
                    return tab;
                  });
                }

                return withKantuWindowMinimized(closeTabAndGetNextTabOnWindow);
              });
            });
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e);
          });
        };

        var runWithTab = function runWithTab(pTab) {
          return pTab.then(function (tab) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('getCurrentTab - ', tab);

            var isValidTab = !!tab && !!tab.id;
            var isPanelTab = isValidTab && tab.id === state.tabIds.panel;

            state.tabIds.toPlay = isValidTab && !isPanelTab ? tab.id : null;
          }).catch(function () {}).then(function () {
            // Note: should always reset pendingPlayingTab, no matter there is an error or not
            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('resetting pendingPlayingTab');
            state.pendingPlayingTab = false;
          });
        };

        // Note: Must return `true` first, and delay the close of tab,
        // otherwise "run command" ipc request from background will fail
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
          runWithTab(closeAndGetNextTab());
        }, 200);

        return true;
      }

    case 'CS_SELECT_WINDOW':
      {
        var oldTablId = args.sender.tab.id;

        var _splitIntoTwo = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["splitIntoTwo"])('=', args.target),
            _splitIntoTwo2 = _slicedToArray(_splitIntoTwo, 2),
            type = _splitIntoTwo2[0],
            locator = _splitIntoTwo2[1];

        if (!locator) {
          throw new Error('invalid window locator, \'' + args.target + '\'');
        }

        var pGetTabs = void 0;

        switch (type.toLowerCase()) {
          case 'title':
            pGetTabs = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ title: locator });
            break;

          case 'tab':
            {
              if (/^\s*open\s*$/i.test(locator)) {
                pGetTabs = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.toPlay).then(function (tab) {
                  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({ url: args.value, windowId: tab.windowId });
                }).then(function (tab) {
                  return [tab];
                });
              } else {
                var offset = parseInt(locator, 10);

                if (isNaN(offset)) {
                  throw new Error('invalid tab offset, \'' + locator + '\'');
                }

                pGetTabs = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.firstPlay).then(function (tab) {
                  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({
                    windowId: tab.windowId,
                    index: tab.index + offset
                  });
                });
              }

              break;
            }

          default:
            throw new Error('window locator type \'' + type + '\' not supported');
        }

        return pGetTabs.then(function (tabs) {
          if (tabs.length === 0) {
            throw new Error('failed to find the tab with locator \'' + args.target + '\'');
          }
          return tabs[0];
        }).then(function (tab) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default()('selectWindow, got tab', tab);

          return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, 10000).catch(function (e) {
            if (/tab=\s*open\s*/i.test(args.target)) {
              throw new Error('To open a new tab, a valid URL is needed');
            }
            throw e;
          }).then(function (ipc) {
            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('selectWindow, got ipc', ipc);

            return ipc.ask('DOM_READY', {}).then(function () {
              ipc.ask('SET_STATUS', {
                status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].PLAYING
              });

              return true;
            });
          }).then(function () {
            // Note: set the original tab to NORMAL status
            // only if the new tab is set to PLAYING status
            _common_log__WEBPACK_IMPORTED_MODULE_4___default()('selectWindow, set orignial to normal');

            Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(oldTablId).then(function (ipc) {
              return ipc.ask('SET_STATUS', {
                status: _common_constant__WEBPACK_IMPORTED_MODULE_3__[/* CONTENT_SCRIPT_STATUS */ "b"].NORMAL
              });
            });
          }).then(function () {
            state.tabIds.lastPlay = state.tabIds.toPlay;
            state.tabIds.toPlay = tab.id;
            return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(tab.id);
          });
        }).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4___default.a.error(e.stack);
          throw e;
        });
      }

    case 'CS_CAPTURE_SCREENSHOT':
      return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(state.tabIds.toPlay, true).then(function () {
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
      }).then(function () {
        return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* saveScreen */ "g"])(state.tabIds.toPlay, args.fileName);
      });

    case 'CS_CAPTURE_FULL_SCREENSHOT':
      return Object(_common_tab_utils__WEBPACK_IMPORTED_MODULE_17__["activateTab"])(state.tabIds.toPlay, true).then(function () {
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
      }).then(getPlayTabIpc).then(function (ipc) {
        return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__[/* saveFullScreen */ "f"])(state.tabIds.toPlay, args.fileName, {
          startCapture: function startCapture() {
            return ipc.ask('START_CAPTURE_FULL_SCREENSHOT', {});
          },
          endCapture: function endCapture(pageInfo) {
            return ipc.ask('END_CAPTURE_FULL_SCREENSHOT', { pageInfo: pageInfo });
          },
          scrollPage: function scrollPage(offset) {
            return ipc.ask('SCROLL_PAGE', { offset: offset });
          }
        });
      });

    case 'CS_TIMEOUT_STATUS':
      return getPanelTabIpc().then(function (ipc) {
        return ipc.ask('TIMEOUT_STATUS', args);
      });

    case 'CS_DELETE_ALL_COOKIES':
      {
        var url = args.url;


        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.cookies.getAll({ url: url }).then(function (cookies) {
          var ps = cookies.map(function (c) {
            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.cookies.remove({
              url: '' + url + c.path,
              name: c.name
            });
          });

          return Promise.all(ps);
        });
      }

    case 'CS_SET_FILE_INPUT_FILES':
      {
        return Object(_common_debugger__WEBPACK_IMPORTED_MODULE_8__[/* setFileInputFiles */ "a"])({
          tabId: args.sender.tab.id,
          selector: args.selector,
          files: args.files
        });
      }

    case 'CS_ON_DOWNLOAD':
      {
        var p = Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__[/* getDownloadMan */ "a"])().prepareDownload(args.fileName, {
          wait: !!args.wait,
          timeout: args.timeout,
          timeoutForStart: args.timeoutForStart
        });
        return true;
      }

    case 'CS_INVOKE':
      {
        return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
          var isTestCase = !!args.testCase;
          var isTestSuite = !!args.testSuite;
          var from = args.testCase && args.testCase.from || args.testSuite && args.testSuite.from;

          switch (from) {
            case 'bookmark':
              {
                if (!config.allowRunFromBookmark) {
                  throw new Error('[Message from Kantu] Error #102: To run a macro or a test suite from bookmarks, you need to allow it in the Kantu settings first');
                }
                break;
              }

            case 'html':
              {
                var isFileSchema = /^file:\/\//.test(args.sender.url);
                var isHttpSchema = /^https?:\/\//.test(args.sender.url);

                if (isFileSchema && !config.allowRunFromFileSchema) {
                  throw new Error('Error #103: To run test suite from local file, enable it in kantu settings first');
                }

                if (isHttpSchema && !config.allowRunFromHttpSchema) {
                  throw new Error('Error #104: To run test suite from public website, enable it in kantu settings first');
                }

                break;
              }

            default:
              throw new Error('unknown source not allowed');
          }

          return withPanelIpc().then(function (panelIpc) {
            if (args.testCase) {
              return panelIpc.ask('RUN_TEST_CASE', {
                testCase: args.testCase,
                options: args.options
              });
            }

            if (args.testSuite) {
              return panelIpc.ask('RUN_TEST_SUITE', {
                testSuite: args.testSuite,
                options: args.options
              });
            }

            return true;
          });
        });
      }

    case 'CS_IMPORT_AND_INVOKE':
      {
        return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
          var isFileSchema = /^file:\/\//.test(args.sender.url);
          var isHttpSchema = /^https?:\/\//.test(args.sender.url);

          if (isFileSchema && !config.allowRunFromFileSchema) {
            throw new Error('Error #105: To run macro from local file, enable it in kantu settings first');
          }

          if (isHttpSchema && !config.allowRunFromHttpSchema) {
            throw new Error('Error #105: To run macro from public website, enable it in kantu settings first');
          }

          return withPanelIpc().then(function (panelIpc) {
            return panelIpc.ask('IMPORT_AND_RUN', args);
          });
        });
      }

    case 'CS_ADD_LOG':
      {
        return getPanelTabIpc().then(function (ipc) {
          return ipc.ask('ADD_LOG', args);
        });
      }

    case 'DESKTOP_EDITOR_ADD_VISION_IMAGE':
      {
        return withPanelIpc().then(function (ipc) {
          return ipc.ask('ADD_VISION_IMAGE', {
            dataUrl: args.dataUrl,
            requireRename: true
          });
        });
      }

    case 'SET_CLIPBOARD':
      {
        _common_clipboard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].set(args.value);
        return true;
      }

    case 'GET_CLIPBOARD':
      {
        return _common_clipboard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].get();
      }

    default:
      return 'unknown';
  }
};

var initIPC = function initIPC() {
  Object(_common_ipc_ipc_bg_cs__WEBPACK_IMPORTED_MODULE_2__["bgInit"])(function (tabId, cuid, ipc) {
    _common_log__WEBPACK_IMPORTED_MODULE_4___default()('connect cs ipc', tabId, cuid, ipc);
    Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().set(tabId, ipc, cuid);
    ipc.onAsk(onRequest);
  });
};

var initOnInstalled = function initOnInstalled() {
  if (typeof process !== 'undefined' && "production" === 'production') {
    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.setUninstallURL(_config__WEBPACK_IMPORTED_MODULE_10___default.a.urlAfterUninstall);

    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.onInstalled.addListener(function (_ref18) {
      var reason = _ref18.reason,
          previousVersion = _ref18.previousVersion;

      switch (reason) {
        case 'install':
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({
            url: _config__WEBPACK_IMPORTED_MODULE_10___default.a.urlAfterInstall
          });

        case 'update':
          setTimeout(function () {
            // FIXME: this forced previous version is just for test
            previousVersion = '4.0.1';
            migrate(previousVersion, _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.getManifest().version);
          }, 0);

          _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: 'NEW' });
          _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeBackgroundColor({ color: '#4444FF' });
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local.set({
            upgrade_not_viewed: 'not_viewed'
          });
      }
    });
  }
};

var initPlayTab = function initPlayTab() {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getCurrent().then(function (window) {
    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ active: true, windowId: window.id }).then(function (tabs) {
      if (!tabs || !tabs.length) return false;
      _common_log__WEBPACK_IMPORTED_MODULE_4___default()('in initPlayTab, set toPlay to', tabs[0]);
      state.tabIds.lastPlay = state.tabIds.toPlay;
      state.tabIds.toPlay = state.tabIds.firstPlay = tabs[0].id;
      return true;
    });
  });
};

var initDownloadMan = function initDownloadMan() {
  Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__[/* getDownloadMan */ "a"])().onCountDown(function (data) {
    getPanelTabIpc().then(function (panelIpc) {
      panelIpc.ask('TIMEOUT_STATUS', _extends({}, data, {
        type: 'download'
      }));
    });
  });
};

var migrate = function migrate(previousVersion, currentVersion) {
  Object(_services_migration__WEBPACK_IMPORTED_MODULE_22__["getKantuMigrationService"])().runAll(previousVersion, currentVersion);
};

bindEvents();
initIPC();
initOnInstalled();
initPlayTab();
initDownloadMan();

window.clip = _common_clipboard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(55)))

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const job_1 = __webpack_require__(1041);
/**
 * Wrapper for enqueued jobs.
 */
class JobQueueItem {
    /**
     * Constructs a new instance.
     * @param type Job type.
     * @param data Job data.
     * @param callback Job completion callback.
     */
    constructor(type, data, callback) {
        this.jobObject = job_1.JobFactory.create(type, data);
        this.callback = callback;
    }
    /**
     * Underlying job object.
     */
    get job() {
        return this.jobObject;
    }
}
/**
 * Provides a connection between the worker and window.
 */
class WorkerConnection {
    /**
     * Constructs a new connection instance.
     * @param workerUrl Worker script URL
     * @param messageHandler Event handler delegate for generic messages.
     */
    constructor(workerUrl, messageHandler) {
        this.queue = new Array();
        this.messageHandler = messageHandler;
        this.worker = new Worker(workerUrl);
        this.worker.onmessage = this.handleWorkerCallback.bind(this);
    }
    /**
     * Worker event message handler
     * @param e Message event.
     */
    handleWorkerCallback(e) {
        const msg = e.data;
        if (msg.type === 1 /* Job */) {
            const job = msg.data;
            let callback = undefined;
            for (let i = 0; i < this.queue.length; ++i) {
                const entry = this.queue[i];
                if (entry.job.id === job.id) {
                    callback = entry.callback;
                    this.queue.splice(i, 1);
                    break;
                }
            }
            const elapsedTime = Math.max(0, job.finishTime - job.startTime);
            console.log(`Job #${job.id} completed in ${elapsedTime.toFixed(0)} ms (excluding callback overhead).`);
            if (callback) {
                callback(job.result);
            }
        }
        else {
            this.messageHandler(msg);
        }
    }
    /**
     * Sends a message to the worker.
     * @param msg Message to be sent.
     */
    postMessage(msg) {
        this.worker.postMessage(msg);
    }
    /**
     * Enqueues a job with a callback for sending the worker.
     * @param type Job type.
     * @param data Job data.
     * @param callback Job completion callback.
     */
    postJob(type, data, callback) {
        const item = new JobQueueItem(type, data, callback);
        this.queue.push(item);
        this.postMessage({
            type: 1 /* Job */,
            data: item.job
        });
    }
    /**
     * Enqueues a job with a Promise object for sending the worker.
     * @param type Job type.
     * @param data Job data.
     * @returns Promise object for job completion in worker.
     */
    postJobAsync(type, data) {
        const self = this;
        return new Promise((resolve, reject) => {
            self.postJob(type, data, (result) => {
                resolve(result);
            });
        });
    }
}
exports.WorkerConnection = WorkerConnection;


/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Manages Job lifecycle.
 */
class JobFactory {
    /**
     * Creates a new job with a unique identifier.
     * @param type Job type.
     * @param args Job argument.
     * @returns Created job.
     */
    static create(type, args) {
        const id = JobFactory.nextId++;
        const job = {
            id,
            type,
            startTime: performance.now(),
            finishTime: 0,
            args,
            result: undefined
        };
        return job;
    }
    /**
     * Completes a job with given result.
     * @param request Previously started job.
     * @param result Job result.
     * @returns Job with result data.
     */
    static complete(request, result) {
        const job = {
            id: request.id,
            type: request.type,
            startTime: request.startTime,
            finishTime: performance.now(),
            args: request.args,
            result: result
        };
        return job;
    }
}
JobFactory.nextId = 1;
exports.JobFactory = JobFactory;


/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_helper_1 = __webpack_require__(1043);
/**
 * Implements common image operations
 */
class ImageHelper {
    /**
     * Loads an image asynchronously from given URL.
     * @param url Image URL
     * @returns Promise object
     */
    static loadImageAsync(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject();
            };
            img.src = url;
        });
    }
    /**
     * Loads an image data asynchronously from given URL.
     * @param url Image URL
     * @returns Promise object with ImageData
     */
    static loadImageDataAsync(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const img = yield this.loadImageAsync(url);
            return this.convertImageToImageData(img);
        });
    }
    /**
     * Converts image data to data URL.
     * @param imageData Input image data.
     * @returns Data URL.
     */
    static convertImageDataToDataUrl(imageData) {
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.putImageData(imageData, 0, 0);
        return canvas.toDataURL();
    }
    /**
     * Converts image element to image data.
     * @param img Input image element.
     * @returns Image data.
     */
    static convertImageToImageData(img) {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.drawImage(img, 0, 0);
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }
    /**
     * Adds some noise to input image.
     * @param imageData Input image data.
     * @returns Noise applied image data.
     */
    static distortImage(imageData) {
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.putImageData(imageData, 0, 0);
        const size = canvas.width * canvas.height;
        const iterations = Math.max(10, Math.floor(size * 0.01 * Math.random()));
        for (let i = 0; i < iterations; ++i) {
            const x = math_helper_1.MathHelper.randomRange(0, canvas.width);
            const y = math_helper_1.MathHelper.randomRange(0, canvas.height);
            const w = math_helper_1.MathHelper.randomRange(1, 20) / 10;
            const h = math_helper_1.MathHelper.randomRange(1, 20) / 10;
            context.fillStyle = math_helper_1.MathHelper.randomColor();
            context.fillRect(x, y, w, h);
        }
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }
    /**
     * Gets a part of given image data.
     * @param imageData Input image data.
     * @param region Region in input image data.
     * @returns Image data in given region.
     */
    static getImageDataRegion(imageData, region) {
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.putImageData(imageData, 0, 0);
        return context.getImageData(region.left, region.top, region.right - region.left, region.bottom - region.top);
    }
}
exports.ImageHelper = ImageHelper;


/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implements common mathematics operations.
 */
class MathHelper {
    /**
     * Generates a random number within given range.
     * @param minValue Minimum value (including).
     * @param maxValue Maximum value (excluding).
     * @returns Generated random number.
     */
    static randomRange(minValue, maxValue) {
        return Math.floor(minValue + Math.random() * (maxValue - minValue));
    }
    /**
     * Generates random CSS color with alpha.
     * @returns Generated random color.
     */
    static randomColor() {
        const r = MathHelper.randomRange(0, 256);
        const g = MathHelper.randomRange(0, 256);
        const b = MathHelper.randomRange(0, 256);
        const a = MathHelper.randomRange(1, 256) / 256;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}
exports.MathHelper = MathHelper;


/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ipc_iframe_1 = __webpack_require__(1045);
const web_extension_1 = __importDefault(__webpack_require__(10));
const ipc_cache_1 = __webpack_require__(37);
const tab_utils_1 = __webpack_require__(63);
exports.openPageInIframe = ipc_iframe_1.createIframe;
exports.askPageWithIframe = (options) => {
    const iframeIpc = exports.openPageInIframe({
        url: options.url,
        width: options.width,
        height: options.height,
        ipcTimeout: options.ipcTimeout,
        domReady: options.domReady,
        onLoad: options.onLoad
    });
    return iframeIpc.ask(options.cmd, options.args)
        .then((data) => {
        setTimeout(() => iframeIpc.destroy());
        return data;
    });
};
exports.openPageInTab = (options) => {
    const isValidTab = (tabId) => {
        return web_extension_1.default.tabs.get(tabId)
            .then((tab) => {
            return !!tab;
        })
            .catch((e) => false);
    };
    const updateExistingTabToUrl = (tabId, url) => {
        return isValidTab(tabId)
            .then(isValid => {
            return isValid ? web_extension_1.default.tabs.update(tabId, { url }) : createNewTabWithUrl(url);
        });
    };
    const createNewTabWithUrl = (url) => {
        if (options.popup) {
            return web_extension_1.default.windows.create({
                type: 'popup',
                url: url,
                width: Math.round(options.width || screen.availWidth),
                height: Math.round(options.height || screen.availHeight),
                left: Math.round(options.left || 0),
                top: Math.round(options.top || 0),
            })
                .then((win) => win.tabs[0]);
        }
        return web_extension_1.default.tabs.create({ url });
    };
    const { url, tabId, domReady } = options;
    const pTab = options.tabId ? updateExistingTabToUrl(tabId, url) : createNewTabWithUrl(url);
    const pIpc = pTab.then(tab => {
        const ipcStore = ipc_cache_1.getIpcCache();
        const pGetTab = domReady ? ipcStore.domReadyGet(tab.id, 20 * 1000, domReady) : ipcStore.get(tab.id, 20 * 1000);
        return (options.focus ? tab_utils_1.activateTab(tab.id, true) : Promise.resolve())
            .then(() => pGetTab)
            .then(ipc => (Object.assign({}, ipc, { getTabId: () => tab.id, getTab: () => web_extension_1.default.tabs.get(tab.id), destroy: () => {
                console.log('openPageInTab - destroy', tab.id, options.tabId);
                ipc.destroy();
                if (!options.tabId && !options.keep) {
                    web_extension_1.default.tabs.remove(tab.id);
                }
            } })));
    });
    return {
        destroy: () => {
            pIpc.then(ipc => ipc.destroy());
        },
        ask: (...args) => {
            return pIpc.then(ipc => ipc.ask(...args));
        },
        onAsk: (...args) => {
            pIpc.then(ipc => ipc.onAsk(...args));
        },
        getTab: () => {
            return pIpc.then(ipc => ipc.getTab());
        },
        getTabId: () => {
            return pIpc.then(ipc => ipc.getTabId());
        }
    };
};
exports.askPageWithTab = (options) => {
    const tabAPI = exports.openPageInTab({
        url: options.url,
        tabId: options.tabId,
        ipcTimeout: options.ipcTimeout,
        domReady: options.domReady
    });
    return tabAPI.ask(options.cmd, options.args)
        .then((data) => {
        setTimeout(() => tabAPI.destroy(), 0);
        return data;
    });
};
exports.askPageWithFixedTab = (() => {
    let curTabId = undefined;
    return (options) => {
        const tabAPI = exports.openPageInTab({
            url: options.url,
            tabId: options.tabId || curTabId,
            keep: true,
            ipcTimeout: options.ipcTimeout,
            domReady: options.domReady
        });
        return tabAPI.getTabId()
            .then((tabId) => {
            curTabId = tabId;
            return tabAPI.ask(options.cmd, options.args)
                .then((data) => {
                setTimeout(() => tabAPI.destroy(), 0);
                return data;
            });
        });
    };
})();


/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cs_postmessage_1 = __webpack_require__(49);
const registry_1 = __webpack_require__(322);
const consecutive_1 = __webpack_require__(89);
const ts_utils_1 = __webpack_require__(18);
const postMsg = cs_postmessage_1.postMessage;
exports.ipcForIframe = ({ targetWindow = window.top, timeout = 60000 } = {}) => {
    const registry = registry_1.createListenerRegistry();
    const listener = ({ cmd, args }) => registry.fire('call', { cmd, args });
    const removeOnMsg = cs_postmessage_1.onMessage(window, listener);
    return {
        ask: (cmd, args) => {
            return postMsg(targetWindow, window, { cmd, args }, '*', timeout);
        },
        onAsk: (fn) => {
            registry.add('call', ({ cmd, args }) => fn(cmd, args));
        },
        destroy: () => {
            removeOnMsg();
        }
    };
};
exports.createIframe = (options) => {
    const { url, width, height, onLoad, domReady, ipcTimeout = 60000 } = options;
    const $iframe = document.createElement('iframe');
    const pLoad = new Promise((resolve, reject) => {
        if (width)
            $iframe.width = '' + width;
        if (height)
            $iframe.height = '' + height;
        $iframe.addEventListener('load', () => {
            if (typeof onLoad === 'function') {
                try {
                    onLoad();
                }
                catch (e) { }
            }
            resolve();
        });
        $iframe.src = url;
        document.body.appendChild($iframe);
    });
    const waitDomReady = (domReady) => {
        return ts_utils_1.retry(() => {
            return consecutive_1.withConsecutive(domReady, () => {
                console.log('waitDomReady - in withConsecutive', 'about to postMsg DOM_READY');
                return postMsg($iframe.contentWindow, window, { cmd: 'DOM_READY', args: {} }, '*', 1000)
                    .then(() => true, () => false);
            })
                .then(() => undefined);
        }, {
            timeout: ipcTimeout,
            shouldRetry: (e) => true,
            retryInterval: 1000
        })();
    };
    const pReady = domReady ? pLoad.then(() => waitDomReady(domReady)) : pLoad;
    const removeOnMsg = cs_postmessage_1.onMessage(window, ({ cmd, args }) => {
        return wrappedOnAsk(cmd, args);
    });
    const wrappedOnAsk = (cmd, args) => {
        return registry.fire('call', { cmd, args });
    };
    const registry = registry_1.createListenerRegistry();
    return {
        $iframe,
        destroy: () => {
            if ($iframe)
                $iframe.remove();
            removeOnMsg();
        },
        ask: (cmd, args) => {
            return pReady.then(() => {
                return postMsg($iframe.contentWindow, window, { cmd, args }, '*', ipcTimeout);
            });
        },
        onAsk: (fn) => {
            registry.add('call', ({ cmd, args }) => fn(cmd, args));
        }
    };
};


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

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var setStyle = function setStyle($dom, obj) {
  Object.keys(obj).forEach(function (key) {
    $dom.style[key] = obj[key];
  });
};

var createTextarea = function createTextarea() {
  // [legacy code] Used to use textarea for copy/paste
  //
  // const $input = document.createElement('textarea')
  // // Note: Firefox requires 'contenteditable' attribute, even on textarea element
  // // without it, execCommand('paste') won't work in Firefox
  // // reference: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#Browser-specific_considerations_2
  // $input.setAttribute('contenteditable', true)
  // $input.id = 'clipboard_textarea'

  // Note: 2018-09-01, Firefox 61.0.2: Only able to paste clipboard into textarea for one time.
  // Switching to contenteditable div works fine
  var $input = document.createElement('div');
  $input.setAttribute('contenteditable', true);
  $input.id = 'clipboard_textarea';

  setStyle($input, {
    position: 'aboslute',
    top: '-9999px',
    left: '-9999px'
  });

  document.body.appendChild($input);
  return $input;
};

var getTextArea = function getTextArea() {
  var $el = document.getElementById('clipboard_textarea');
  if ($el) return $el;
  return createTextarea();
};

var withInput = function withInput(fn) {
  var $input = getTextArea();
  var ret = void 0;

  try {
    ret = fn($input);
  } catch (e) {
    console.error(e);
  } finally {
    $input.innerHTML = '';
  }

  return ret;
};

var api = {
  set: function set(text) {
    withInput(function ($input) {
      $input.innerText = text;
      $input.focus();
      document.execCommand('selectAll', false, null);
      document.execCommand('copy');
    });
  },
  get: function get() {
    return withInput(function ($input) {
      $input.blur();
      $input.focus();

      var res = document.execCommand('paste');

      if (res) {
        return $input.innerText;
      }

      return 'no luck';
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_extension_1 = __importDefault(__webpack_require__(10));
const tab_utils_1 = __webpack_require__(63);
const open_page_1 = __webpack_require__(1044);
const DESKTOP_SCREENSHOT_PAGE_URL = web_extension_1.default.extension.getURL('desktop_screenshot_editor.html');
exports.openDesktopScreenshotWindow = (() => {
    let lastTabId = 0;
    return () => {
        return web_extension_1.default.tabs.get(lastTabId)
            .catch((e) => null)
            .then((tab) => {
            const api = open_page_1.openPageInTab({
                url: DESKTOP_SCREENSHOT_PAGE_URL,
                tabId: tab && tab.id,
                keep: true,
                popup: true,
                domReady: true,
                focus: true,
                width: screen.availWidth / 2 + 50,
                height: screen.availHeight / 2 + 100,
                left: screen.availWidth / 4 - 25,
                top: screen.availHeight / 4 - 50,
            });
            api.getTabId()
                .then((tabId) => {
                lastTabId = tabId;
                return tab_utils_1.activateTab(tabId);
            });
            return api;
        });
    };
})();
function runInDesktopScreenshotEditor(req) {
    return exports.openDesktopScreenshotWindow()
        .then(api => api.ask(req.type, req.data));
}
exports.runInDesktopScreenshotEditor = runInDesktopScreenshotEditor;


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

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withDebugger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setFileInputFiles; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var PROTOCOL_VERSION = '1.2';
var ClEANUP_TIMEOUT = 0;

var withDebugger = function () {
  var state = {
    connected: null,
    cleanupTimer: null
  };

  var setState = function setState(obj) {
    _extends(state, obj);
  };

  var cancelCleanup = function cancelCleanup() {
    if (state.cleanupTimer) clearTimeout(state.cleanupTimer);
    setState({ cleanupTimer: null });
  };

  var isSameDebuggee = function isSameDebuggee(a, b) {
    return a && b && a.tabId && b.tabId && a.tabId === b.tabId;
  };

  return function (debuggee, fn) {
    var attach = function attach(debuggee) {
      if (isSameDebuggee(state.connected, debuggee)) {
        cancelCleanup();
        return Promise.resolve();
      }

      return detach(state.connected).then(function () {
        return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.attach(debuggee, PROTOCOL_VERSION);
      }).then(function () {
        return setState({ connected: debuggee });
      });
    };
    var detach = function detach(debuggee) {
      if (!debuggee) return Promise.resolve();

      return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.detach(debuggee).then(function () {
        if (state.cleanupTimer) clearTimeout(state.cleanupTimer);

        setState({
          connected: null,
          cleanupTimer: null
        });
      }, function (e) {
        return console.error('error in detach', e.stack);
      });
    };
    var scheduleDetach = function scheduleDetach() {
      var timer = setTimeout(function () {
        return detach(debuggee);
      }, ClEANUP_TIMEOUT);
      setState({ cleanupTimer: timer });
    };
    var sendCommand = function sendCommand(cmd, params) {
      return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.sendCommand(debuggee, cmd, params);
    };
    var onEvent = function onEvent(callback) {
      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.onEvent.addListener(callback);
    };
    var onDetach = function onDetach(callback) {
      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.onDetach.addListener(callback);
    };

    return new Promise(function (resolve, reject) {
      var done = function done(error, result) {
        scheduleDetach();

        if (error) return reject(error);else return resolve(result);
      };

      return attach(debuggee).then(function () {
        fn({ sendCommand: sendCommand, onEvent: onEvent, onDetach: onDetach, done: done });
      }, function (e) {
        return reject(e);
      });
    });
  };
}();

var __getDocument = function __getDocument(_ref) {
  var sendCommand = _ref.sendCommand,
      done = _ref.done;
  return function () {
    return sendCommand('DOM.getDocument').then(function (obj) {
      return obj.root;
    });
  };
};

var __querySelector = function __querySelector(_ref2) {
  var sendCommand = _ref2.sendCommand,
      done = _ref2.done;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["partial"])(function (selector, nodeId) {
    return sendCommand('DOM.querySelector', { nodeId: nodeId, selector: selector }).then(function (res) {
      return res && res.nodeId;
    });
  });
};

var __setFileInputFiles = function __setFileInputFiles(_ref3) {
  var sendCommand = _ref3.sendCommand,
      done = _ref3.done;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["partial"])(function (files, nodeId) {
    return sendCommand('DOM.setFileInputFiles', { nodeId: nodeId, files: files }).then(function () {
      return true;
    });
  });
};

var setFileInputFiles = function setFileInputFiles(_ref4) {
  var tabId = _ref4.tabId,
      selector = _ref4.selector,
      files = _ref4.files;

  return withDebugger({ tabId: tabId }, function (api) {
    var go = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["composePromiseFn"])(__setFileInputFiles(api)(files), __querySelector(api)(selector), function (node) {
      return node.nodeId;
    }, __getDocument(api));

    return go().then(function (res) {
      return api.done(null, res);
    });
  });
};

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const worker_connection_1 = __webpack_require__(1040);
const image_helper_1 = __webpack_require__(1042);
const desktop_1 = __webpack_require__(72);
let isModuleReady = false;
let worker = new worker_connection_1.WorkerConnection("/worker.js", workerMessageHandler);
/**
 * Listens regular messages from the worker.
 * @param msg Received worker message.
 */
function workerMessageHandler(msg) {
    switch (msg.type) {
        case 0 /* Init */:
            isModuleReady = true;
            break;
        default:
            console.error("Unsupported worker message: ", msg);
            break;
    }
}
/**
 * Schedules a template matching task for the web worker.
 * @param image Image where the search will be running.
 * @param pattern Image which will searched.
 * @param minSimilarity Minimum similarity score to accept a match.
 * @param allowSizeVariation Allows size variation during image search.
 * @returns Promise object with matches regions.
 */
function postImageSearchAsync(image, pattern, minSimilarity, allowSizeVariation, enableGreenPinkBoxes) {
    const jobData = {
        image,
        pattern,
        options: {
            minSimilarity,
            allowSizeVariation,
            enableGreenPinkBoxes: enableGreenPinkBoxes,
            requireGreenPinkBoxes: enableGreenPinkBoxes
        }
    };
    return worker.postJobAsync(2 /* ImageSearch */, jobData);
}
function searchImageBestOne(req) {
    return searchImage(req)
        .then(results => results[0]);
}
exports.searchImageBestOne = searchImageBestOne;
function searchImage(req) {
    if (!isModuleReady) {
        throw new Error('Module is not ready yet.');
    }
    const minSimilarity = Math.max(0.1, Math.min(1.0, req.minSimilarity));
    const { allowSizeVariation, enableGreenPinkBoxes } = req;
    return Promise.all([
        image_helper_1.ImageHelper.loadImageDataAsync(req.targetImageUrl),
        image_helper_1.ImageHelper.loadImageDataAsync(req.patternImageUrl)
    ])
        .then(([screenshotImageData, patternImageData]) => {
        return postImageSearchAsync(screenshotImageData, patternImageData, minSimilarity, allowSizeVariation, enableGreenPinkBoxes)
            .then(result => {
            desktop_1.guardSearchResult(result);
            const { containsGreenPinkBoxes, errorCode, regions } = result;
            return regions.map(r => ({
                offsetLeft: r.rect.left / req.scaleDownRatio,
                offsetTop: r.rect.top / req.scaleDownRatio,
                // Page Left
                left: r.rect.left / req.scaleDownRatio + req.offsetX,
                // Page Top
                top: r.rect.top / req.scaleDownRatio + req.offsetY,
                width: r.rect.width / req.scaleDownRatio,
                height: r.rect.height / req.scaleDownRatio,
                score: r.score
            }));
        });
    });
}
exports.searchImage = searchImage;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_extension_1 = __importDefault(__webpack_require__(10));
exports.createTab = (url) => {
    return web_extension_1.default.tabs.create({ url, active: true });
};
exports.activateTab = (tabId, focusWindow = false) => {
    return web_extension_1.default.tabs.get(tabId)
        .then((tab) => {
        const p = focusWindow ? web_extension_1.default.windows.update(tab.windowId, { focused: true })
            : Promise.resolve();
        return p.then(() => web_extension_1.default.tabs.update(tab.id, { active: true }))
            .then(() => tab);
    });
};
exports.getTab = (tabId) => {
    return web_extension_1.default.tabs.get(tabId);
};
exports.getCurrentTab = (winId) => {
    const pWin = winId ? web_extension_1.default.windows.get(winId) : web_extension_1.default.windows.getLastFocused();
    return pWin.then((win) => {
        return web_extension_1.default.tabs.query({ active: true, windowId: win.id })
            .then((tabs) => tabs[0]);
    });
};


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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export imageSizeFromDataURI */
/* unused harmony export getScreenshotRatio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return scaleDataURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return captureScreen; });
/* unused harmony export createCaptureScreenWithCachedScreenshotRatio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return saveScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return captureFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return captureScreenInSelectionSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return captureScreenInSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return captureClientAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return saveFullScreen; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_services_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





function getActiveTabInfo() {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getLastFocused().then(function (win) {
    return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ active: true, windowId: win.id }).then(function (tabs) {
      return tabs[0];
    });
  });
}

function imageSizeFromDataURI(dataURI) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.src = dataURI;
  });
}

function getScreenshotRatio(dataURI, tabId, devicePixelRatio) {
  return Promise.all([imageSizeFromDataURI(dataURI), _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId)]).then(function (tuple) {
    var _tuple = _slicedToArray(tuple, 2),
        size = _tuple[0],
        tab = _tuple[1];

    return tab.width * devicePixelRatio / size.width;
  });
}

function scaleDataURI(dataURI, scale) {
  if (scale === 1) return Promise.resolve(dataURI);

  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = dataURI;
  }).then(function (img) {
    var canvas = createCanvas(img.naturalWidth, img.naturalHeight, scale);
    return drawOnCanvas({
      canvas: canvas,
      dataURI: dataURI,
      x: 0,
      y: 0,
      width: img.naturalWidth * scale,
      height: img.naturalHeight * scale
    }).then(function () {
      return canvas.toDataURL();
    });
  });
}

function captureScreen(tabId, presetScreenshotRatio) {
  var is2ndArgFunction = typeof presetScreenshotRatio === 'function';
  var hasScreenshotRatio = presetScreenshotRatio && !is2ndArgFunction;
  var pDataURI = _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.captureVisibleTab(null, { format: 'png' });
  var pRatio = hasScreenshotRatio ? Promise.resolve(presetScreenshotRatio) : pDataURI.then(function (dataURI) {
    return getScreenshotRatio(dataURI, tabId, window.devicePixelRatio);
  });

  return Promise.all([pDataURI, pRatio]).then(function (tuple) {
    var _tuple2 = _slicedToArray(tuple, 2),
        dataURI = _tuple2[0],
        screenshotRatio = _tuple2[1];
    // Note: leak the info about screenshotRatio on purpose


    if (!hasScreenshotRatio && is2ndArgFunction) presetScreenshotRatio(screenshotRatio);
    if (screenshotRatio === 1) return dataURI;
    return scaleDataURI(dataURI, screenshotRatio);
  });
}

function createCaptureScreenWithCachedScreenshotRatio() {
  var screenshotRatio = void 0;

  return function (tabId) {
    return captureScreen(tabId, screenshotRatio || function (ratio) {
      screenshotRatio = ratio;
    });
  };
}

function captureScreenBlob(tabId) {
  return captureScreen(tabId).then(_common_utils__WEBPACK_IMPORTED_MODULE_2__["dataURItoBlob"]);
}

function saveScreen(tabId, fileName) {
  return captureScreenBlob(tabId).then(function (screenBlob) {
    return Object(_services_storage__WEBPACK_IMPORTED_MODULE_1__["getStorageManager"])().getScreenshotStorage().overwrite(fileName, screenBlob).then(function (url) {
      return {
        url: url,
        fileName: fileName
      };
    });
  });
}

function pCompose(list) {
  return list.reduce(function (prev, fn) {
    return prev.then(fn);
  }, Promise.resolve());
}

function getAllScrollOffsets(_ref) {
  var pageWidth = _ref.pageWidth,
      pageHeight = _ref.pageHeight,
      windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight,
      _ref$topPadding = _ref.topPadding,
      topPadding = _ref$topPadding === undefined ? 150 : _ref$topPadding;

  var topPad = windowHeight > topPadding ? topPadding : 0;
  var xStep = windowWidth;
  var yStep = windowHeight - topPad;
  var result = [];

  // Note: bottom comes first so that when we render those screenshots one by one to the final canvas,
  // those at top will overwrite top padding part of those at bottom, it is useful if that page has some fixed header
  for (var y = pageHeight - windowHeight; y > -1 * yStep; y -= yStep) {
    for (var x = 0; x < pageWidth; x += xStep) {
      result.push({ x: x, y: y });
    }
  }

  return result;
}

function getAllScrollOffsetsForRect(_ref2, _ref3) {
  var x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      height = _ref2.height;
  var pageWidth = _ref3.pageWidth,
      pageHeight = _ref3.pageHeight,
      windowWidth = _ref3.windowWidth,
      windowHeight = _ref3.windowHeight,
      originalX = _ref3.originalX,
      originalY = _ref3.originalY,
      _ref3$topPadding = _ref3.topPadding,
      topPadding = _ref3$topPadding === undefined ? 150 : _ref3$topPadding;

  var topPad = windowHeight > topPadding ? topPadding : 0;
  var xStep = windowWidth;
  var yStep = windowHeight - topPad;
  var result = [];

  for (var sy = y + height - windowHeight; sy > y - yStep; sy -= yStep) {
    for (var sx = x; sx < x + width; sx += xStep) {
      result.push({ x: sx, y: sy });
    }
  }

  if (result.length === 0) {
    result.push({ x: x, y: y + height - windowHeight });
  }

  return result;
}

function createCanvas(width, height) {
  var pixelRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var canvas = document.createElement('canvas');
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  return canvas;
}

function drawOnCanvas(_ref4) {
  var canvas = _ref4.canvas,
      dataURI = _ref4.dataURI,
      x = _ref4.x,
      y = _ref4.y,
      width = _ref4.width,
      height = _ref4.height;

  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height, x, y, width || image.width, height || image.height);
      resolve({
        x: x,
        y: y,
        width: width,
        height: height
      });
    };

    image.src = dataURI;
  });
}

function withPageInfo(startCapture, endCapture, callback) {
  return startCapture().then(function (pageInfo) {
    // Note: in case sender contains any non-serializable data
    delete pageInfo.sender;

    return callback(pageInfo).then(function (result) {
      endCapture(pageInfo);
      return result;
    });
  });
}

function captureFullScreen(tabId) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : captureClientAPI,
      startCapture = _ref5.startCapture,
      scrollPage = _ref5.scrollPage,
      endCapture = _ref5.endCapture;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var opts = _extends({
    blob: false
  }, options);

  return withPageInfo(startCapture, endCapture, function (pageInfo) {
    var devicePixelRatio = pageInfo.devicePixelRatio;

    // Note: cut down page width and height
    // reference: https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element/11585939#11585939
    var maxSide = Math.floor(32767 / devicePixelRatio);
    pageInfo.pageWidth = Math.min(maxSide, pageInfo.pageWidth);
    pageInfo.pageHeight = Math.min(maxSide, pageInfo.pageHeight);

    var captureScreen = createCaptureScreenWithCachedScreenshotRatio();
    var canvas = createCanvas(pageInfo.pageWidth, pageInfo.pageHeight, devicePixelRatio);
    var scrollOffsets = getAllScrollOffsets(pageInfo);
    var todos = scrollOffsets.map(function (offset, i) {
      return function () {
        return scrollPage(offset, { index: i, total: scrollOffsets.length }).then(function (realOffset) {
          return captureScreen(tabId).then(function (dataURI) {
            return drawOnCanvas({
              canvas: canvas,
              dataURI: dataURI,
              x: realOffset.x * devicePixelRatio,
              y: realOffset.y * devicePixelRatio,
              width: pageInfo.windowWidth * devicePixelRatio,
              height: pageInfo.windowHeight * devicePixelRatio
            });
          });
        });
      };
    });
    var convert = opts.blob ? _common_utils__WEBPACK_IMPORTED_MODULE_2__["dataURItoBlob"] : function (x) {
      return x;
    };

    return pCompose(todos).then(function () {
      return convert(canvas.toDataURL());
    });
  });
}

function captureScreenInSelectionSimple(tabId, _ref6) {
  var rect = _ref6.rect,
      devicePixelRatio = _ref6.devicePixelRatio;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var opts = _extends({
    blob: false
  }, options);
  var convert = opts.blob ? _common_utils__WEBPACK_IMPORTED_MODULE_2__["dataURItoBlob"] : function (x) {
    return x;
  };
  var ratio = devicePixelRatio;
  var canvas = createCanvas(rect.width, rect.height, ratio);

  return captureScreen(tabId).then(function (dataURI) {
    return drawOnCanvas({
      canvas: canvas,
      dataURI: dataURI,
      x: -1 * rect.x * devicePixelRatio,
      y: -1 * rect.y * devicePixelRatio
    });
  }).then(function () {
    return convert(canvas.toDataURL());
  });
}

function captureScreenInSelection(tabId, _ref7, _ref8) {
  var rect = _ref7.rect,
      devicePixelRatio = _ref7.devicePixelRatio;
  var startCapture = _ref8.startCapture,
      scrollPage = _ref8.scrollPage,
      endCapture = _ref8.endCapture;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var opts = _extends({
    blob: false
  }, options);
  var convert = opts.blob ? _common_utils__WEBPACK_IMPORTED_MODULE_2__["dataURItoBlob"] : function (x) {
    return x;
  };
  var ratio = devicePixelRatio;

  return withPageInfo(startCapture, endCapture, function (pageInfo) {
    var maxSide = Math.floor(32767 / ratio);
    pageInfo.pageWidth = Math.min(maxSide, pageInfo.pageWidth);
    pageInfo.pageHeight = Math.min(maxSide, pageInfo.pageHeight);

    var captureScreen = createCaptureScreenWithCachedScreenshotRatio();
    var canvas = createCanvas(rect.width, rect.height, ratio);
    var scrollOffsets = getAllScrollOffsetsForRect(rect, pageInfo);
    var todos = scrollOffsets.map(function (offset, i) {
      return function () {
        return scrollPage(offset, { index: i, total: scrollOffsets.length }).then(function (realOffset) {
          return captureScreen(tabId).then(function (dataURI) {
            return drawOnCanvas({
              canvas: canvas,
              dataURI: dataURI,
              x: (realOffset.x - rect.x) * devicePixelRatio,
              y: (realOffset.y - rect.y) * devicePixelRatio,
              width: pageInfo.windowWidth * devicePixelRatio,
              height: pageInfo.windowHeight * devicePixelRatio
            });
          });
        });
      };
    });

    return pCompose(todos).then(function () {
      return convert(canvas.toDataURL());
    });
  });
}

var captureClientAPI = {
  getPageInfo: function getPageInfo() {
    var body = document.body;
    var widths = [document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth, body ? body.scrollWidth : 0, body ? body.offsetWidth : 0];
    var heights = [document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, body ? body.scrollHeight : 0, body ? body.offsetHeight : 0];

    var data = {
      pageWidth: Math.max.apply(Math, widths),
      pageHeight: Math.max.apply(Math, heights),
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      hasBody: !!body,
      originalX: window.scrollX,
      originalY: window.scrollY,
      originalOverflowStyle: document.documentElement.style.overflow,
      originalBodyOverflowYStyle: body && body.style.overflowY,
      devicePixelRatio: window.devicePixelRatio
    };

    return data;
  },
  startCapture: function startCapture() {
    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref9$hideScrollbar = _ref9.hideScrollbar,
        hideScrollbar = _ref9$hideScrollbar === undefined ? true : _ref9$hideScrollbar;

    var body = document.body;
    var pageInfo = captureClientAPI.getPageInfo();

    // Note: try to make pages with bad scrolling work, e.g., ones with
    // `body { overflow-y: scroll; }` can break `window.scrollTo`
    if (body) {
      body.style.overflowY = 'visible';
    }

    if (hideScrollbar) {
      // Disable all scrollbars. We'll restore the scrollbar state when we're done
      // taking the screenshots.
      document.documentElement.style.overflow = 'hidden';
    }

    return Promise.resolve(pageInfo);
  },
  scrollPage: function scrollPage(_ref10) {
    var x = _ref10.x,
        y = _ref10.y;

    window.scrollTo(x, y);

    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["delay"])(function () {
      return {
        x: window.scrollX,
        y: window.scrollY
      };
    }, 100);
  },
  endCapture: function endCapture(pageInfo) {
    var originalX = pageInfo.originalX,
        originalY = pageInfo.originalY,
        hasBody = pageInfo.hasBody,
        originalOverflowStyle = pageInfo.originalOverflowStyle,
        originalBodyOverflowYStyle = pageInfo.originalBodyOverflowYStyle;


    if (hasBody) {
      document.body.style.overflowY = originalBodyOverflowYStyle;
    }

    document.documentElement.style.overflow = originalOverflowStyle;
    window.scrollTo(originalX, originalY);

    return Promise.resolve(true);
  }
};

function saveFullScreen(tabId, fileName, clientAPI) {
  return captureFullScreen(tabId, clientAPI, { blob: true }).then(function (screenBlob) {
    return Object(_services_storage__WEBPACK_IMPORTED_MODULE_1__["getStorageManager"])().getScreenshotStorage().overwrite(fileName, screenBlob).then(function (url) {
      return {
        url: url,
        fileName: fileName
      };
    });
  });
}

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

/***/ })

/******/ });