(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* global chrome browser */

// Note: it's an adapter for both chrome and web extension API
// chrome and web extension API have almost the same API signatures
// except that chrome accepts callback while web extension returns promises
//
// The whole idea here is to make sure all callback style API of chrome
// also return promises
//
// Important: You need to specify whatever API you need to use in `UsedAPI` below

(function () {
  var adaptChrome = function adaptChrome(obj, chrome) {
    var adapt = function adapt(src, ret, obj, fn) {
      return Object.keys(obj).reduce(function (prev, key) {
        var keyParts = key.split('.');

        var _keyParts$reduce = keyParts.reduce(function (tuple, subkey) {
          var tar = tuple[0];
          var src = tuple[1];

          tar[subkey] = tar[subkey] || {};
          return [tar[subkey], src && src[subkey]];
        }, [prev, src]),
            _keyParts$reduce2 = _slicedToArray(_keyParts$reduce, 2),
            target = _keyParts$reduce2[0],
            source = _keyParts$reduce2[1];

        obj[key].forEach(function (method) {
          fn(method, source, target);
        });

        return prev;
      }, ret);
    };

    var promisify = function promisify(method, source, target) {
      if (!source) return;
      var reg = /The message port closed before a res?ponse was received/;

      target[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          var callback = function callback(result) {
            // Note: The message port closed before a reponse was received.
            // Ignore this message
            if (chrome.runtime.lastError && !reg.test(chrome.runtime.lastError.message)) {
              console.error(chrome.runtime.lastError.message + ', ' + method + ', ' + JSON.stringify(args));
              return reject(chrome.runtime.lastError);
            }
            resolve(result);
          };

          source[method].apply(source, args.concat(callback));
        });
      };
    };

    var copy = function copy(method, source, target) {
      if (!source) return;
      target[method] = source[method];
    };

    return [[obj.toPromisify, promisify], [obj.toCopy, copy]].reduce(function (prev, tuple) {
      return adapt(chrome, prev, tuple[0], tuple[1]);
    }, {});
  };

  var UsedAPI = {
    toPromisify: {
      tabs: ['create', 'sendMessage', 'get', 'update', 'query', 'captureVisibleTab', 'remove'],
      windows: ['update', 'getLastFocused', 'getCurrent', 'getAll', 'remove', 'create', 'get'],
      runtime: ['sendMessage', 'setUninstallURL'],
      cookies: ['get', 'getAll', 'set', 'remove'],
      notifications: ['create', 'clear'],
      browserAction: ['getBadgeText'],
      bookmarks: ['create', 'getTree'],
      debugger: ['attach', 'detach', 'sendCommand', 'getTargets'],
      extension: ['isAllowedFileSchemeAccess'],
      'storage.local': ['get', 'set']
    },
    toCopy: {
      tabs: ['onActivated', 'onUpdated', 'onRemoved'],
      windows: ['onFocusChanged'],
      runtime: ['onMessage', 'onInstalled', 'getManifest'],
      storage: ['onChanged'],
      browserAction: ['setBadgeText', 'setBadgeBackgroundColor', 'onClicked'],
      extension: ['getURL'],
      debugger: ['onEvent', 'onDetach'],
      downloads: ['onCreated', 'onChanged', 'onDeterminingFilename', 'setShelfEnabled']
    }
  };

  var Ext = typeof chrome !== 'undefined' ? adaptChrome(UsedAPI, chrome) : browser;

  _extends(Ext, {
    isFirefox: function isFirefox() {
      return (/Firefox/.test(window.navigator.userAgent)
      );
    }
  });

  if (true) {
    module.exports = Ext;
  } else {}
})();

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Log factory is quite simple, just a wrapper on console.log
// so that you can use the same API, at the same, achieve following features
// 1. Hide all logs in production
// 2. Extend it to save logs in local storage / or send it back to you backend (for debug or analysis)
Object.defineProperty(exports, "__esModule", { value: true });
function logFactory(enabled) {
    let isEnabled = !!enabled;
    const obj = ['log', 'info', 'warn', 'error'].reduce((prev, method) => {
        prev[method] = (...args) => {
            if (!isEnabled && method !== 'error')
                return;
            console[method]((new Date()).toISOString(), ' - ', ...args);
        };
        return prev;
    }, {});
    return Object.assign(obj.log, obj, {
        enable: () => { isEnabled = true; },
        disable: () => { isEnabled = false; }
    });
}
exports.logFactory = logFactory;
const logger = logFactory("production" !== 'production');
exports.default = logger;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventemitter3_1 = __importDefault(__webpack_require__(296));
const browser_filesystem_storage_1 = __webpack_require__(389);
const native_filesystem_storage_1 = __webpack_require__(85);
const ts_utils_1 = __webpack_require__(18);
const xfile_1 = __webpack_require__(29);
const convert_utils_1 = __webpack_require__(52);
const convert_suite_utils_1 = __webpack_require__(64);
const utils_1 = __webpack_require__(4);
var StorageStrategyType;
(function (StorageStrategyType) {
    StorageStrategyType["Browser"] = "browser";
    StorageStrategyType["XFile"] = "xfile";
})(StorageStrategyType = exports.StorageStrategyType || (exports.StorageStrategyType = {}));
var StorageTarget;
(function (StorageTarget) {
    StorageTarget[StorageTarget["Macro"] = 0] = "Macro";
    StorageTarget[StorageTarget["TestSuite"] = 1] = "TestSuite";
    StorageTarget[StorageTarget["CSV"] = 2] = "CSV";
    StorageTarget[StorageTarget["Screenshot"] = 3] = "Screenshot";
    StorageTarget[StorageTarget["Vision"] = 4] = "Vision";
})(StorageTarget = exports.StorageTarget || (exports.StorageTarget = {}));
var StorageManagerEvent;
(function (StorageManagerEvent) {
    StorageManagerEvent["StrategyTypeChanged"] = "StrategyTypeChanged";
    StorageManagerEvent["RootDirChanged"] = "RootDirChanged";
    StorageManagerEvent["ForceReload"] = "ForceReload";
})(StorageManagerEvent = exports.StorageManagerEvent || (exports.StorageManagerEvent = {}));
class StorageManager extends eventemitter3_1.default {
    constructor(strategyType, extraOptions) {
        super();
        this.strategyType = StorageStrategyType.Browser;
        this.getMacros = () => [];
        this.getMaxMacroCount = (s) => Promise.resolve(Infinity);
        this.setCurrentStrategyType(strategyType);
        if (extraOptions && extraOptions.getMacros) {
            this.getMacros = extraOptions.getMacros;
        }
        if (extraOptions && extraOptions.getMaxMacroCount) {
            this.getMaxMacroCount = extraOptions.getMaxMacroCount;
        }
    }
    isXFileMode() {
        return this.strategyType === StorageStrategyType.XFile;
    }
    isBrowserMode() {
        return this.strategyType === StorageStrategyType.Browser;
    }
    getCurrentStrategyType() {
        return this.strategyType;
    }
    setCurrentStrategyType(type) {
        const needChange = type !== this.strategyType;
        if (needChange) {
            setTimeout(() => {
                this.emit(StorageManagerEvent.StrategyTypeChanged, type);
            }, 0);
            this.strategyType = type;
        }
        return needChange;
    }
    isStrategyTypeAvailable(type) {
        switch (type) {
            case StorageStrategyType.Browser:
                return Promise.resolve(true);
            case StorageStrategyType.XFile:
                return xfile_1.getXFile().sanityCheck();
            default:
                throw new Error(`type '${type}' is not supported`);
        }
    }
    getStorageForTarget(target, forceStrategytype) {
        switch (forceStrategytype || this.strategyType) {
            case StorageStrategyType.Browser: {
                switch (target) {
                    case StorageTarget.Macro: {
                        const storage = browser_filesystem_storage_1.getBrowserFileSystemFlatStorage({
                            baseDir: 'macros',
                            extensions: ['json'],
                            shouldKeepExt: false,
                            decode: (text, fileName) => {
                                const obj = convert_utils_1.fromJSONString(text, fileName, { withStatus: true });
                                // Note: use filePath as id
                                return Object.assign({}, obj, { id: storage.filePath(fileName) });
                            },
                            encode: (data, fileName) => {
                                const str = convert_utils_1.toJSONString(Object.assign({}, data, { commands: data.data.commands }), { withStatus: true });
                                // Note: BrowserFileSystemStorage only supports writing file with Blob
                                // so have to convert it here in `encode`
                                return new Blob([str]);
                            }
                        });
                        window.newMacroStorage = storage;
                        return storage;
                    }
                    case StorageTarget.TestSuite: {
                        const storage = browser_filesystem_storage_1.getBrowserFileSystemFlatStorage({
                            baseDir: 'testsuites',
                            extensions: ['json'],
                            shouldKeepExt: false,
                            decode: (text, fileName) => {
                                const obj = convert_suite_utils_1.parseTestSuite(text, this.getMacros(), { fileName, });
                                // Note: use filePath as id
                                return Object.assign({}, obj, { id: storage.filePath(fileName) });
                            },
                            encode: (suite, fileName) => {
                                const str = convert_suite_utils_1.stringifyTestSuite(suite, this.getMacros());
                                return new Blob([str]);
                            }
                        });
                        window.newTestSuiteStorage = storage;
                        return storage;
                    }
                    case StorageTarget.CSV:
                        return browser_filesystem_storage_1.getBrowserFileSystemFlatStorage({
                            baseDir: 'spreadsheets',
                            extensions: ['csv'],
                            shouldKeepExt: true,
                            transformFileName: (path) => {
                                return path.toLowerCase();
                            }
                        });
                    case StorageTarget.Screenshot:
                        return browser_filesystem_storage_1.getBrowserFileSystemFlatStorage({
                            baseDir: 'screenshots',
                            extensions: ['png'],
                            shouldKeepExt: true,
                            transformFileName: (path) => {
                                return path.toLowerCase();
                            }
                        });
                    case StorageTarget.Vision:
                        return browser_filesystem_storage_1.getBrowserFileSystemFlatStorage({
                            baseDir: 'visions',
                            extensions: ['png'],
                            shouldKeepExt: true,
                            transformFileName: (path) => {
                                return path.toLowerCase();
                            }
                        });
                }
            }
            case StorageStrategyType.XFile: {
                const { rootDir } = xfile_1.getXFile().getCachedConfig();
                switch (target) {
                    case StorageTarget.Macro: {
                        const storage = native_filesystem_storage_1.getNativeFileSystemFlatStorage({
                            rootDir,
                            baseDir: 'macros',
                            extensions: ['json'],
                            shouldKeepExt: false,
                            listFilter: (files) => {
                                return this.getMaxMacroCount(this.strategyType)
                                    .then(maxCount => files.slice(0, maxCount));
                            },
                            decode: (text, fileName) => {
                                const obj = convert_utils_1.fromJSONString(text, fileName, { withStatus: true });
                                // Note: use filePath as id
                                return Object.assign({}, obj, { id: storage.filePath(fileName) });
                            },
                            encode: (data, fileName) => {
                                const str = convert_utils_1.toJSONString(Object.assign({}, data, { commands: data.data.commands }), { withStatus: true });
                                // Note: NativeFileSystemStorage only supports writing file with DataURL
                                // so have to convert it here in `encode`
                                return utils_1.blobToDataURL(new Blob([str]));
                            }
                        });
                        return storage;
                    }
                    case StorageTarget.TestSuite: {
                        const storage = native_filesystem_storage_1.getNativeFileSystemFlatStorage({
                            rootDir,
                            baseDir: 'testsuites',
                            extensions: ['json'],
                            shouldKeepExt: false,
                            decode: (text, fileName) => {
                                const obj = convert_suite_utils_1.parseTestSuite(text, this.getMacros(), { fileName, });
                                // Note: use filePath as id
                                return Object.assign({}, obj, { id: storage.filePath(fileName) });
                            },
                            encode: (suite, fileName) => {
                                const str = convert_suite_utils_1.stringifyTestSuite(suite, this.getMacros());
                                return utils_1.blobToDataURL(new Blob([str]));
                            }
                        });
                        return storage;
                    }
                    case StorageTarget.CSV:
                        return native_filesystem_storage_1.getNativeFileSystemFlatStorage({
                            rootDir,
                            baseDir: 'datasources',
                            extensions: ['csv'],
                            shouldKeepExt: true,
                            encode: ((text, fileName) => {
                                return utils_1.blobToDataURL(new Blob([text]));
                            })
                        });
                    case StorageTarget.Vision:
                        return native_filesystem_storage_1.getNativeFileSystemFlatStorage({
                            rootDir,
                            baseDir: 'images',
                            extensions: ['png'],
                            shouldKeepExt: true,
                            encode: ((imageBlob, fileName) => {
                                return utils_1.blobToDataURL(imageBlob);
                            })
                        });
                    case StorageTarget.Screenshot:
                        return browser_filesystem_storage_1.getBrowserFileSystemFlatStorage({
                            baseDir: 'screenshots',
                            extensions: ['png'],
                            shouldKeepExt: true,
                            transformFileName: (path) => {
                                return path.toLowerCase();
                            }
                        });
                }
            }
            default:
                throw new Error(`Unsupported strategy type: '${this.strategyType}'`);
        }
    }
    getMacroStorage() {
        return this.getStorageForTarget(StorageTarget.Macro);
    }
    getTestSuiteStorage() {
        return this.getStorageForTarget(StorageTarget.TestSuite);
    }
    getCSVStorage() {
        return this.getStorageForTarget(StorageTarget.CSV);
    }
    getVisionStorage() {
        return this.getStorageForTarget(StorageTarget.Vision);
    }
    getScreenshotStorage() {
        return this.getStorageForTarget(StorageTarget.Screenshot);
    }
}
exports.StorageManager = StorageManager;
// Note: in panel window (`src/index.js`), `getStorageManager` is provided with `getMacros` in `extraOptions`
// While in `bg.js` or `csv_edtior.js`, `vision_editor.js`, `extraOptions` is omitted with no harm,
// because they don't read/write test suites
exports.getStorageManager = ts_utils_1.singletonGetter((strategyType, extraOptions) => {
    return new StorageManager(strategyType || StorageStrategyType.XFile, extraOptions);
});


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference types="chrome"/>
Object.defineProperty(exports, "__esModule", { value: true });
class InvocationQueueItem {
    constructor(id, method, params, callback) {
        this.requestObject = {
            id,
            method,
            params
        };
        this.callback = callback;
    }
    get request() {
        return this.requestObject;
    }
}
class NativeMessagingHost {
    constructor(hostName) {
        this.internalHostName = hostName;
        this.nextInvocationId = 1;
        this.queue = new Array();
        this.handleMessage = this.handleMessage.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
    }
    processResponse(id, result, error) {
        let callback = undefined;
        for (let i = 0; i < this.queue.length; ++i) {
            const entry = this.queue[i];
            if (entry.request.id === id) {
                callback = entry.callback;
                this.queue.splice(i, 1);
                break;
            }
        }
        if (callback) {
            callback(result, error);
        }
    }
    handleMessage(message) {
        const response = message;
        if (typeof response.id !== "number") {
            return;
        }
        this.processResponse(response.id, response.result, response.error);
    }
    handleDisconnect() {
        this.disconnect();
    }
    get hostName() {
        return this.internalHostName;
    }
    connectAsync() {
        if (this.port) {
            return this.invokeAsync("get_version", undefined);
        }
        this.port = chrome.runtime.connectNative(this.hostName);
        this.port.onMessage.addListener(this.handleMessage);
        this.port.onDisconnect.addListener(this.handleDisconnect);
        return this.invokeAsync("get_version", undefined);
    }
    disconnect() {
        if (this.port) {
            this.port.disconnect();
            this.port = undefined;
        }
        // Discard all queued invocations
        const invocationIdArray = this.queue.map(x => x.request.id);
        for (const id of invocationIdArray) {
            this.processResponse(id, undefined, {
                message: "Disconnected"
            });
        }
        this.queue = new Array();
    }
    invoke(method, params, callback) {
        if (!this.port) {
            callback(undefined, {
                message: "Disconnected"
            });
            return;
        }
        const id = this.nextInvocationId++;
        const item = new InvocationQueueItem(id, method, params, callback);
        this.queue.push(item);
        this.port.postMessage(item.request);
    }
    invokeAsync(method, params) {
        return new Promise((resolve, reject) => {
            this.invoke(method, params, (result, error) => {
                if (chrome.runtime.lastError) {
                    error = new Error(chrome.runtime.lastError.message);
                }
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
}
exports.NativeMessagingHost = NativeMessagingHost;


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(__webpack_require__(36));
var XModuleTypes;
(function (XModuleTypes) {
    XModuleTypes["XFile"] = "xFile";
    XModuleTypes["XUserIO"] = "xClick";
    XModuleTypes["XDesktop"] = "xDesktop";
})(XModuleTypes = exports.XModuleTypes || (exports.XModuleTypes = {}));
class XModule {
    constructor() {
        this.cachedConfig = {};
        this.initConfig();
    }
    getVersion() {
        return this.getAPI()
            .reconnect()
            .catch(e => {
            throw new Error(`${this.getName()} is not installed yet`);
        })
            .then(api => {
            return api.getVersion()
                .then(version => ({
                version,
                installed: true
            }));
        })
            .catch(e => ({
            installed: false
        }));
    }
    setConfig(config) {
        this.cachedConfig = Object.assign({}, this.cachedConfig, config);
        return this.getConfig()
            .then(oldConfig => {
            const nextConfig = Object.assign({}, oldConfig, config);
            return storage_1.default.set(this.getStoreKey(), nextConfig)
                .then(success => {
                if (success) {
                    this.cachedConfig = nextConfig;
                }
                return success;
            });
        });
    }
    getConfig() {
        return storage_1.default.get(this.getStoreKey())
            .then(data => {
            this.cachedConfig = data || {};
            return this.cachedConfig;
        });
    }
    getCachedConfig() {
        return this.cachedConfig;
    }
    getStoreKey() {
        return this.getName().toLowerCase();
    }
}
exports.XModule = XModule;


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function singletonGetter(factoryFn) {
    let instance = null;
    return (...args) => {
        if (instance)
            return instance;
        instance = factoryFn(...args);
        return instance;
    };
}
exports.singletonGetter = singletonGetter;
function singletonGetterByKey(getKey, factoryFn) {
    let cache = {};
    return (...args) => {
        const key = getKey(...args);
        if (cache[key])
            return cache[key];
        cache[key] = factoryFn(...args);
        return cache[key];
    };
}
exports.singletonGetterByKey = singletonGetterByKey;
function capitalInitial(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
exports.capitalInitial = capitalInitial;
function snakeToCamel(kebabStr) {
    const list = kebabStr.split('_');
    return list[0] + list.slice(1).map(capitalInitial).join('');
}
exports.snakeToCamel = snakeToCamel;
exports.delay = (fn, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(fn());
            }
            catch (e) {
                reject(e);
            }
        }, timeout);
    });
};
exports.until = (name, check, interval = 1000, expire = 10000) => {
    const start = new Date().getTime();
    const go = () => {
        if (expire && new Date().getTime() - start >= expire) {
            throw new Error(`until: ${name} expired!`);
        }
        const { pass, result } = check();
        if (pass)
            return Promise.resolve(result);
        return exports.delay(go, interval);
    };
    return new Promise((resolve, reject) => {
        try {
            resolve(go());
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.range = (start, end, step = 1) => {
    const ret = [];
    for (let i = start; i < end; i += step) {
        ret.push(i);
    }
    return ret;
};
exports.partial = (fn) => {
    const len = fn.length;
    let arbitary;
    arbitary = (curArgs, leftArgCnt) => (...args) => {
        if (args.length >= leftArgCnt) {
            return fn.apply(null, curArgs.concat(args));
        }
        return arbitary(curArgs.concat(args), leftArgCnt - args.length);
    };
    return arbitary([], len);
};
exports.reduceRight = (fn, initial, list) => {
    let ret = initial;
    for (let i = list.length - 1; i >= 0; i--) {
        ret = fn(list[i], ret);
    }
    return ret;
};
exports.compose = (...args) => {
    return exports.reduceRight((cur, prev) => {
        return (x) => cur(prev(x));
    }, (x) => x, args);
};
exports.map = exports.partial((fn, list) => {
    const result = [];
    for (let i = 0, len = list.length; i < len; i++) {
        result.push(fn(list[i]));
    }
    return result;
});
exports.on = exports.partial((key, fn, dict) => {
    if (Array.isArray(dict)) {
        return [
            ...dict.slice(0, key),
            fn(dict[key]),
            ...dict.slice(key + 1)
        ];
    }
    return Object.assign({}, dict, {
        [key]: fn(dict[key])
    });
});
exports.updateIn = exports.partial((keys, fn, obj) => {
    const updater = exports.compose.apply(null, keys.map(key => key === '[]' ? exports.map : exports.on(key)));
    return updater(fn)(obj);
});
exports.setIn = exports.partial((keys, value, obj) => {
    const updater = exports.compose.apply(null, keys.map(key => key === '[]' ? exports.map : exports.on(key)));
    return updater(() => value)(obj);
});
exports.getIn = exports.partial((keys, obj) => {
    return keys.reduce((prev, key) => {
        if (!prev)
            return prev;
        return prev[key];
    }, obj);
});
exports.safeMap = exports.partial((fn, list) => {
    const result = [];
    const safeList = list || [];
    for (let i = 0, len = safeList.length; i < len; i++) {
        result.push(fn(safeList[i]));
    }
    return result;
});
exports.safeOn = exports.partial((key, fn, dict) => {
    if (Array.isArray(dict)) {
        return [
            ...dict.slice(0, key),
            fn(dict[key]),
            ...dict.slice(key + 1)
        ];
    }
    return Object.assign({}, dict, {
        [key]: fn((dict || {})[key])
    });
});
exports.safeUpdateIn = exports.partial((keys, fn, obj) => {
    const updater = exports.compose.apply(null, keys.map(key => key === '[]' ? exports.safeMap : exports.safeOn(key)));
    return updater(fn)(obj);
});
exports.safeSetIn = exports.partial((keys, value, obj) => {
    const updater = exports.compose.apply(null, keys.map(key => key === '[]' ? exports.safeMap : exports.safeOn(key)));
    return updater(() => value)(obj);
});
exports.pick = (keys, obj) => {
    return keys.reduce((prev, key) => {
        prev[key] = obj[key];
        return prev;
    }, {});
};
exports.pickIfExist = (keys, obj) => {
    return keys.reduce((prev, key) => {
        if (obj[key] !== undefined) {
            prev[key] = obj[key];
        }
        return prev;
    }, {});
};
exports.uid = () => {
    return '' + (new Date().getTime()) + '.' +
        Math.floor(Math.random() * 10000000).toString(16);
};
exports.flatten = (list) => {
    return [].concat.apply([], list);
};
exports.zipWith = (fn, ...listOfList) => {
    const len = Math.min(...listOfList.map(list => list.length));
    const res = [];
    for (let i = 0; i < len; i++) {
        res.push(fn(...listOfList.map(list => list[i])));
    }
    return res;
};
exports.and = (...list) => list.reduce((prev, cur) => prev && cur, true);
exports.or = (...list) => list.reduce((prev, cur) => prev || cur, false);
exports.withPostfix = (options) => {
    const { reg, str, fn } = options;
    const m = str.match(reg);
    const extName = m ? m[0] : '';
    const baseName = m ? str.replace(reg, '') : str;
    const result = fn(baseName, (name) => name + extName);
    if (!result) {
        throw new Error('withPostfix: should not return null/undefined');
    }
    if (typeof result.then === 'function') {
        return result.then((name) => name + extName);
    }
    return result + extName;
};
exports.withFileExtension = (origName, fn) => {
    return exports.withPostfix({
        fn,
        str: origName,
        reg: /\.\w+$/
    });
};
exports.uniqueName = (name, options) => {
    const opts = Object.assign({ generate: (old, step = 1) => {
            const reg = /_(\d+)$/;
            const m = old.match(reg);
            if (!m)
                return `${old}_${step}`;
            return old.replace(reg, (_, n) => `_${parseInt(n, 10) + step}`);
        }, check: () => Promise.resolve(true), postfixReg: /\.\w+$/ }, (options || {}));
    const { generate, check, postfixReg } = opts;
    return exports.withPostfix({
        str: name,
        reg: postfixReg,
        fn: (baseName, getFullName) => {
            const go = (fileName, step) => {
                return Promise.resolve(check(getFullName(fileName)))
                    .then(pass => {
                    if (pass)
                        return fileName;
                    return go(generate(fileName, step), step);
                });
            };
            return go(baseName, 1);
        }
    });
};
exports.objFilter = (filter, obj) => {
    return Object.keys(obj).reduce((prev, key, i) => {
        if (filter(obj[key], key, i)) {
            prev[key] = obj[key];
        }
        return prev;
    }, {});
};
function throttle(fn, timeout) {
    let lastTime = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < timeout)
            return;
        lastTime = now;
        return fn(...args);
    };
}
exports.throttle = throttle;
function countDown(options) {
    const { interval, timeout, onTick, onTimeout } = options;
    let past = 0;
    const timer = setInterval(() => {
        past += interval;
        try {
            onTick({ past, total: timeout });
        }
        catch (e) {
            console.warn(e);
        }
        if (past >= timeout) {
            clearInterval(timer);
            if (typeof onTimeout === 'function') {
                try {
                    onTimeout({ past, total: timeout });
                }
                catch (e) {
                    console.warn(e);
                }
            }
        }
    }, options.interval);
    return () => clearInterval(timer);
}
exports.countDown = countDown;
exports.retry = (fn, options) => (...args) => {
    const { timeout, onFirstFail, onFinal, shouldRetry, retryInterval } = Object.assign({ timeout: 5000, retryInterval: 1000, onFirstFail: (() => { }), onFinal: (() => { }), shouldRetry: (e) => false }, options);
    let retryCount = 0;
    let lastError;
    let timerToClear;
    let done = false;
    const wrappedOnFinal = (...args) => {
        done = true;
        if (timerToClear) {
            clearTimeout(timerToClear);
        }
        return onFinal(...args);
    };
    const intervalMan = (function () {
        let lastInterval;
        const intervalFactory = (function () {
            switch (typeof retryInterval) {
                case 'function':
                    return retryInterval;
                case 'number':
                    return ((retryCount, lastInterval) => retryInterval);
                default:
                    throw new Error('retryInterval must be either a number or a function');
            }
        })();
        return {
            getLastInterval: () => lastInterval,
            getInterval: () => {
                const interval = intervalFactory(retryCount, lastInterval);
                lastInterval = interval;
                return interval;
            }
        };
    })();
    const onError = (e, _throwErr) => {
        const throwErr = _throwErr || ((e) => Promise.reject(e));
        if (retryCount === 0) {
            onFirstFail(e);
        }
        return Promise.resolve(shouldRetry(e))
            .then((should) => {
            if (!should) {
                wrappedOnFinal(e);
                return throwErr(e);
            }
            lastError = e;
            const p = new Promise((resolve, reject) => {
                if (retryCount++ === 0) {
                    timerToClear = setTimeout(() => {
                        wrappedOnFinal(lastError);
                        reject(lastError);
                    }, timeout);
                }
                if (done)
                    return;
                exports.delay(run, intervalMan.getInterval())
                    .then(resolve, (e) => onError(e, (err) => reject(e)));
            });
            return p;
        });
    };
    const run = () => {
        return new Promise((resolve, reject) => {
            try {
                const res = fn(...args, {
                    retryCount,
                    retryInterval: intervalMan.getLastInterval()
                });
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        })
            .catch(onError);
    };
    return run()
        .then((result) => {
        wrappedOnFinal(null, result);
        return result;
    });
};
function retryWithCount(options, fn) {
    let n = 0;
    return exports.retry(fn, {
        timeout: 99999,
        retryInterval: options.interval,
        shouldRetry: () => ++n <= options.count
    });
}
exports.retryWithCount = retryWithCount;
function flow(...fns) {
    const result = new Array(fns.length);
    const finalPromise = fns.reduce((prev, fn, i) => {
        return prev.then((res) => {
            if (i > 0) {
                result[i - 1] = res;
            }
            return fn(res);
        });
    }, Promise.resolve());
    return finalPromise.then((res) => {
        result[fns.length - 1] = res;
        return result;
    });
}
exports.flow = flow;
function parseBoolLike(value, fallback = false) {
    if (typeof value === 'boolean') {
        return value;
    }
    if (value === undefined) {
        return fallback;
    }
    try {
        const val = JSON.parse(value.toLowerCase());
        return !!val;
    }
    catch (e) {
        return fallback;
    }
}
exports.parseBoolLike = parseBoolLike;
function sum(...list) {
    return list.reduce((x, y) => x + y, 0);
}
exports.sum = sum;
function concatUint8Array(...arrays) {
    const totalLength = sum(...arrays.map(arr => arr.length));
    const result = new Uint8Array(totalLength);
    for (let i = 0, offset = 0, len = arrays.length; i < len; i += 1) {
        result.set(arrays[i], offset);
        offset += arrays[i].length;
    }
    return result;
}
exports.concatUint8Array = concatUint8Array;
function withPromise(factory) {
    return new Promise((resolve) => {
        resolve(factory());
    });
}
exports.withPromise = withPromise;
function clone(data) {
    if (data === undefined)
        return undefined;
    return JSON.parse(JSON.stringify(data));
}
exports.clone = clone;
exports.objMap = (fn, obj) => {
    const keys = typeof obj === 'object' ? Object.keys(obj) : [];
    return keys.reduce((prev, key, i) => {
        prev[key] = fn(obj[key], key, i, obj);
        return prev;
    }, {});
};
function milliSecondsToStringInSecond(ms) {
    return (ms / 1000).toFixed(2) + 's';
}
exports.milliSecondsToStringInSecond = milliSecondsToStringInSecond;
exports.concurrent = function (max) {
    var queue = [];
    var running = 0;
    var free = function () {
        running--;
        check();
    };
    const check = function () {
        if (running >= max || queue.length <= 0)
            return;
        var tuple = queue.shift();
        var resolve = tuple.resolve;
        running++;
        resolve(free);
    };
    const wait = function () {
        return new Promise(function (resolve, reject) {
            queue.push({ resolve, reject });
            check();
        });
    };
    const wrap = function (fn, context) {
        return function () {
            const args = [].slice.apply(arguments);
            return wait()
                .then(function (done) {
                return fn.apply(context, args)
                    .then(function (ret) {
                    done();
                    return ret;
                }, function (error) {
                    done();
                    throw error;
                });
            });
        };
    };
    return wrap;
};


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(132);
const filesystem_1 = __webpack_require__(298);
const ts_utils_1 = __webpack_require__(18);
const path_1 = __importDefault(__webpack_require__(86));
class XFile extends common_1.XModule {
    getName() {
        return common_1.XModuleTypes.XFile;
    }
    getAPI() {
        return filesystem_1.getNativeFileSystemAPI();
    }
    initConfig() {
        return this.getConfig()
            .then(config => {
            if (!config.rootDir) {
                const fsAPI = filesystem_1.getNativeFileSystemAPI();
                return fsAPI.getSpecialFolderPath({ folder: filesystem_1.SpecialFolder.UserDesktop })
                    .then(profilePath => {
                    const kantuDir = path_1.default.join(profilePath, 'kantu');
                    return fsAPI.ensureDir({ path: kantuDir })
                        .then(done => {
                        this.setConfig({
                            rootDir: done ? kantuDir : profilePath
                        });
                    });
                })
                    .catch(e => {
                    // Ignore host not found error, `initConfig` is supposed to be called on start
                    // But we can't guarantee that native fs module is already installed
                    if (!/Specified native messaging host not found/.test(e)) {
                        throw e;
                    }
                });
            }
        });
    }
    sanityCheck() {
        return Promise.all([
            this.getConfig(),
            this.getAPI().getVersion()
                .then(() => this.getAPI(), () => this.getAPI().reconnect())
                .catch(e => {
                throw new Error('xFile is not installed yet');
            })
        ])
            .then(([config, api]) => {
            if (!config.rootDir) {
                throw new Error('rootDir is not set');
            }
            const checkDirectoryExists = () => {
                return api.directoryExists({ path: config.rootDir })
                    .then((existed) => {
                    if (!existed)
                        throw new Error(`Directory '${config.rootDir}' doesn't exist`);
                    return true;
                });
            };
            const checkDirectoryWritable = () => {
                const testDir = path_1.default.join(config.rootDir, '__kantu__' + Math.round(Math.random() * 100));
                return api.createDirectory({ path: testDir })
                    .then((created) => {
                    if (!created)
                        throw new Error();
                    return api.removeDirectory({ path: testDir });
                })
                    .then((deleted) => {
                    if (!deleted)
                        throw new Error();
                    return true;
                })
                    .catch((e) => {
                    throw new Error(`Directory '${config.rootDir}' is not writable`);
                });
            };
            return checkDirectoryExists()
                .then(checkDirectoryWritable);
        });
    }
    checkUpdate() {
        return Promise.reject(new Error('checkUpdate is not implemented yet'));
    }
    checkUpdateLink(modVersion, extVersion) {
        return `https://a9t9.com/x/idehelp?help=xfileaccess_updatecheck&xversion=${modVersion}&kantuversion=${extVersion}`;
    }
    downloadLink() {
        return 'https://a9t9.com/x/idehelp?help=xfileaccess_download';
    }
    infoLink() {
        return 'https://a9t9.com/x/idehelp?help=xfileaccess';
    }
}
exports.XFile = XFile;
exports.getXFile = ts_utils_1.singletonGetter(() => {
    return new XFile();
});


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var idb_filesystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var idb_filesystem_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idb_filesystem_js__WEBPACK_IMPORTED_MODULE_0__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var fs = function () {
  var requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

  if (!requestFileSystem) {
    throw new Error('requestFileSystem not supported');
  }

  var dumbSize = 1024 * 1024;
  var maxSize = 5 * 1024 * 1024;
  var getFS = function getFS(size) {
    size = size || maxSize;

    return new Promise(function (resolve, reject) {
      requestFileSystem(window.TEMPORARY, size, resolve, reject);
    });
  };

  var getDirectory = function getDirectory(dir, shouldCreate, fs) {
    var parts = (Array.isArray(dir) ? dir : dir.split('/')).filter(function (p) {
      return p && p.length;
    });
    var getDir = function getDir(parts, directoryEntry) {
      if (!parts || !parts.length) return Promise.resolve(directoryEntry);

      return new Promise(function (resolve, reject) {
        directoryEntry.getDirectory(parts[0], { create: !!shouldCreate }, function (dirEntry) {
          return resolve(dirEntry);
        }, function (e) {
          return reject(e);
        });
      }).then(function (entry) {
        return getDir(parts.slice(1), entry);
      });
    };

    var pFS = fs ? Promise.resolve(fs) : getFS(dumbSize);
    return pFS.then(function (fs) {
      return getDir(parts, fs.root);
    });
  };

  var ensureDirectory = function ensureDirectory(dir, fs) {
    return getDirectory(dir, true, fs);
  };

  // @return a Promise of [FileSystemEntries]
  var list = function list() {
    var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

    return getFS(dumbSize).then(function (fs) {
      return new Promise(function (resolve, reject) {
        getDirectory(dir).then(function (dirEntry) {
          var result = [];
          var dirReader = dirEntry.createReader();
          var read = function read() {
            dirReader.readEntries(function (entries) {
              if (entries.length === 0) {
                resolve(result.sort());
              } else {
                result = result.concat(Array.from(entries));
                read();
              }
            }, reject);
          };

          read();
        }).catch(reject);
      });
    }).catch(function (e) {
      console.warn('list', e.code, e.name, e.message);
      throw e;
    });
  };

  var fileLocator = function fileLocator(filePath, fs) {
    var parts = filePath.split('/');
    return getDirectory(parts.slice(0, -1), false, fs).then(function (directoryEntry) {
      return {
        directoryEntry: directoryEntry,
        fileName: parts.slice(-1)[0]
      };
    });
  };

  var readFile = function readFile(filePath, type) {
    if (['ArrayBuffer', 'BinaryString', 'DataURL', 'Text'].indexOf(type) === -1) {
      throw new Error('invalid readFile type, \'' + type + '\'');
    }

    return getFS().then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref) {
        var directoryEntry = _ref.directoryEntry,
            fileName = _ref.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, {}, function (fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader();

              reader.onerror = reject;
              reader.onloadend = function () {
                resolve(this.result);
              };

              switch (type) {
                case 'ArrayBuffer':
                  return reader.readAsArrayBuffer(file);
                case 'BinaryString':
                  return reader.readAsBinaryString(file);
                case 'DataURL':
                  return reader.readAsDataURL(file);
                case 'Text':
                  return reader.readAsText(file);
                default:
                  throw new Error('unsupported data type, \'' + type);
              }
            }, reject);
          }, reject);
        });
      });
    }).catch(function (e) {
      console.warn('readFile', e.code, e.name, e.message);
      throw e;
    });
  };

  var writeFile = function writeFile(filePath, blob, size) {
    return getFS(size).then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref2) {
        var directoryEntry = _ref2.directoryEntry,
            fileName = _ref2.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
              fileWriter.onwriteend = function () {
                return resolve(fileEntry.toURL());
              };
              fileWriter.onerror = reject;

              fileWriter.write(blob);
            });
          }, reject);
        });
      });
    }).catch(function (e) {
      console.warn(e.code, e.name, e.message);
      throw e;
    });
  };

  var removeFile = function removeFile(filePath) {
    return getFS().then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref3) {
        var directoryEntry = _ref3.directoryEntry,
            fileName = _ref3.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.remove(resolve, reject);
          }, reject);
        });
      });
    }).catch(function (e) {
      console.warn('removeFile', e.code, e.name, e.message);
      throw e;
    });
  };

  var moveFile = function moveFile(srcPath, targetPath) {
    return getFS().then(function (fs) {
      return Promise.all([fileLocator(srcPath, fs), fileLocator(targetPath, fs)]).then(function (tuple) {
        var srcDirEntry = tuple[0].directoryEntry;
        var srcFileName = tuple[0].fileName;
        var tgtDirEntry = tuple[1].directoryEntry;
        var tgtFileName = tuple[1].fileName;

        return new Promise(function (resolve, reject) {
          srcDirEntry.getFile(srcFileName, {}, function (fileEntry) {
            try {
              fileEntry.moveTo(tgtDirEntry, tgtFileName, resolve, reject);
            } catch (e) {
              // Note: For firefox, we use `idb.filesystem.js`, but it hasn't implemented `moveTo` method
              // so we have to mock it with read / write / remove
              readFile(srcPath, 'ArrayBuffer').then(function (arrayBuffer) {
                return writeFile(targetPath, new Blob([new Uint8Array(arrayBuffer)]));
              }).then(function () {
                return removeFile(srcPath);
              }).then(resolve, reject);
            }
          }, reject);
        });
      });
    });
  };

  var copyFile = function copyFile(srcPath, targetPath) {
    return getFS().then(function (fs) {
      return Promise.all([fileLocator(srcPath, fs), fileLocator(targetPath, fs)]).then(function (tuple) {
        var srcDirEntry = tuple[0].directoryEntry;
        var srcFileName = tuple[0].fileName;
        var tgtDirEntry = tuple[1].directoryEntry;
        var tgtFileName = tuple[1].fileName;

        return new Promise(function (resolve, reject) {
          srcDirEntry.getFile(srcFileName, {}, function (fileEntry) {
            try {
              fileEntry.copyTo(tgtDirEntry, tgtFileName, resolve, reject);
            } catch (e) {
              // Note: For firefox, we use `idb.filesystem.js`, but it hasn't implemented `copyTo` method
              // so we have to mock it with read / write
              readFile(srcPath, 'ArrayBuffer').then(function (arrayBuffer) {
                return writeFile(targetPath, new Blob([new Uint8Array(arrayBuffer)]));
              }).then(resolve, reject);
            }
          }, reject);
        });
      });
    }).catch(function (e) {
      console.warn('copyFile', e.code, e.name, e.message);
      throw e;
    });
  };

  var getMetadata = function getMetadata(filePath) {
    return getFS().then(function (fs) {
      if (filePath.getMetadata) {
        return new Promise(function (resolve, reject) {
          return filePath.getMetadata(resolve);
        });
      }

      return fileLocator(filePath, fs).then(function (_ref4) {
        var directoryEntry = _ref4.directoryEntry,
            fileName = _ref4.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.getMetadata(resolve);
          }, reject);
        });
      });
    }).catch(function (e) {
      console.warn('getMetadata', e.code, e.name, e.message);
      throw e;
    });
  };

  var exists = function exists(filePath) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        type = _ref5.type;

    return getFS().then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref6) {
        var directoryEntry = _ref6.directoryEntry,
            fileName = _ref6.fileName;

        var isSomeEntry = function isSomeEntry(getMethodName) {
          return new Promise(function (resolve) {
            directoryEntry[getMethodName](fileName, { create: false }, function () {
              return resolve(true);
            }, function () {
              return resolve(false);
            });
          });
        };

        var pIsFile = isSomeEntry('getFile');
        var pIsDir = isSomeEntry('getDirectory');

        return Promise.all([pIsFile, pIsDir]).then(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              isFile = _ref8[0],
              isDir = _ref8[1];

          switch (type) {
            case 'file':
              return isFile;
            case 'directory':
              return isDir;
            default:
              return isFile || isDir;
          }
        });
      });
    }).catch(function (e) {
      // DOMException.NOT_FOUND_ERR === 8
      if (e && e.code === 8) {
        return false;
      }

      console.warn('fs.exists', e.code, e.name, e.message);
      throw e;
    });
  };

  return {
    list: list,
    readFile: readFile,
    writeFile: writeFile,
    removeFile: removeFile,
    moveFile: moveFile,
    copyFile: copyFile,
    getDirectory: getDirectory,
    getMetadata: getMetadata,
    ensureDirectory: ensureDirectory,
    exists: exists
  };
}();

// For test only
window.fs = fs;

/* harmony default export */ __webpack_exports__["default"] = (fs);

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(397);
const ts_utils_1 = __webpack_require__(18);
const kantu_file_access_host_1 = __webpack_require__(398);
const log_1 = __importDefault(__webpack_require__(11));
const path_1 = __importDefault(__webpack_require__(86));
var SpecialFolder;
(function (SpecialFolder) {
    SpecialFolder[SpecialFolder["UserProfile"] = 0] = "UserProfile";
    SpecialFolder[SpecialFolder["UserDesktop"] = 1] = "UserDesktop";
})(SpecialFolder = exports.SpecialFolder || (exports.SpecialFolder = {}));
exports.getNativeFileSystemAPI = ts_utils_1.singletonGetter(() => {
    const nativeHost = new kantu_file_access_host_1.KantuFileAccessHost();
    let pReady = nativeHost.connectAsync().catch(e => {
        log_1.default.warn('pReady - error', e);
        throw e;
    });
    const api = constants_1.MethodTypeInvocationNames.reduce((prev, method) => {
        const camel = ts_utils_1.snakeToCamel(method);
        prev[camel] = (() => {
            const fn = (params) => pReady.then(() => {
                return nativeHost.invokeAsync(method, params);
            })
                .catch(e => {
                // Note: Looks like for now whenever there is an error, you have to reconnect native host
                // otherwise, all commands return "Disconnected" afterwards
                const typeSafeAPI = api;
                typeSafeAPI.reconnect().catch(() => { });
                throw e;
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
        getEntries: (params) => {
            const typeSafeAPI = api;
            return typeSafeAPI.getFileSystemEntries(params)
                .then(res => {
                const { errorCode, entries } = res;
                return Promise.all(entries.map((name) => {
                    const entryPath = path_1.default.join(params.path, name);
                    return typeSafeAPI.getFileSystemEntryInfo({ path: entryPath })
                        .then(info => ({
                        name,
                        length: info.length,
                        isDirectory: info.isDirectory,
                        lastWriteTime: info.lastWriteTime
                    }));
                }))
                    .then(entryInfos => ({
                    errorCode,
                    entries: entryInfos
                }));
            });
        },
        ensureDir: (params) => {
            const typeSafeAPI = api;
            return typeSafeAPI.directoryExists({
                path: params.path
            })
                .then(exists => {
                if (exists)
                    return true;
                return typeSafeAPI.ensureDir({ path: path_1.default.dirname(params.path) })
                    .then(done => {
                    if (!done)
                        return false;
                    return typeSafeAPI.createDirectory({ path: params.path });
                });
            })
                .catch(e => false);
        }
    });
    return api;
});


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/common/web_extension.js
var web_extension = __webpack_require__(10);
var web_extension_default = /*#__PURE__*/__webpack_require__.n(web_extension);

// CONCATENATED MODULE: ./src/common/storage/ext_storage.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var local = web_extension_default.a.storage.local;

/* harmony default export */ var ext_storage = ({
  get: function get(key) {
    return local.get(key).then(function (obj) {
      return obj[key];
    });
  },

  set: function set(key, value) {
    return local.set(_defineProperty({}, key, value)).then(function () {
      return true;
    });
  },

  remove: function remove(key) {
    return local.remove(key).then(function () {
      return true;
    });
  },

  clear: function clear() {
    return local.clear().then(function () {
      return true;
    });
  },

  addListener: function addListener(fn) {
    web_extension_default.a.storage.onChanged.addListener(function (changes, areaName) {
      var list = Object.keys(changes).map(function (key) {
        return _extends({}, changes[key], { key: key });
      });
      fn(list);
    });
  }
});
// CONCATENATED MODULE: ./src/common/storage/index.js



/* harmony default export */ var storage = __webpack_exports__["default"] = (ext_storage);

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __webpack_require__(80);
const filesystem_1 = __importDefault(__webpack_require__(297));
const ts_utils_1 = __webpack_require__(18);
const Ext = __webpack_require__(10);
const utils_1 = __webpack_require__(4);
const path_1 = __importDefault(__webpack_require__(86));
const isFirefox = () => {
    return /Firefox/.test(window.navigator.userAgent);
};
class BrowserFileSystemFlatStorage extends storage_1.FlatStorage {
    constructor(opts) {
        super({
            encode: opts.encode,
            decode: opts.decode
        });
        this.displayedCount = 0;
        this.totalCount = 0;
        this.transformFileName = (path) => path;
        const { extensions, shouldKeepExt, transformFileName, baseDir = 'share' } = opts;
        if (!baseDir || baseDir === '/') {
            throw new Error(`Invalid baseDir, ${baseDir}`);
        }
        if (transformFileName) {
            this.transformFileName = transformFileName;
        }
        this.baseDir = baseDir;
        this.extensions = extensions;
        this.shouldKeepExt = shouldKeepExt;
        // Note: create the folder in which we will store files
        filesystem_1.default.getDirectory(baseDir, true);
    }
    getDisplayCount() {
        return this.displayedCount;
    }
    getTotalCount() {
        return this.totalCount;
    }
    getLink(fileName) {
        if (!isFirefox()) {
            const tmp = Ext.extension.getURL('temporary');
            const link = `filesystem:${tmp}/${this.filePath(encodeURIComponent(fileName))}`;
            return Promise.resolve(link + '?' + new Date().getTime());
        }
        else {
            // Note: Except for Chrome, the filesystem API we use is a polyfill from idb.filesystem.js
            // idb.filesystem.js works great but the only problem is that you can't use 'filesystem:' schema to retrieve that file
            // so here, we have to convert the file to data url
            return this.read(fileName, 'DataURL');
        }
    }
    readAll(readFileType = 'Text', onErrorFiles) {
        return this.list()
            .then(items => {
            return Promise.all(items.map(item => {
                return this.read(item.fileName, readFileType)
                    .then(content => ({
                    content,
                    fileName: item.fileName
                }))
                    // Note: Whenever there is error in reading file,
                    // return null
                    .catch(e => {
                    return {
                        fileName: item.fileName,
                        fullFilePath: this.filePath(item.fileName),
                        error: new Error(`Error in parsing ${this.filePath(item.fileName)}:\n${e.message}`)
                    };
                });
            }))
                .then(list => {
                const errorFiles = list.filter(item => item.error);
                if (onErrorFiles)
                    onErrorFiles(errorFiles);
                return list.filter((item) => item.content);
            });
        });
    }
    __list() {
        const convertName = (entryName) => this.shouldKeepExt ? entryName : this.removeExt(entryName);
        return this.ensureDir()
            .then(() => filesystem_1.default.list(this.baseDir))
            .then(fileEntries => {
            const ps = fileEntries.map(fileEntry => {
                return filesystem_1.default.getMetadata(fileEntry)
                    .then(meta => ({
                    dir: this.baseDir,
                    fileName: this.transformFileName(convertName(fileEntry.name)),
                    size: storage_1.readableSize(meta.size),
                    lastModified: meta.modificationTime
                }));
            });
            return Promise.all(ps)
                .then(list => {
                list.sort((a, b) => {
                    if (a.fileName < b.fileName)
                        return -1;
                    if (a.fileName > b.fileName)
                        return 1;
                    return 0;
                });
                this.totalCount = list.length;
                this.displayedCount = list.length;
                return list;
            });
        });
    }
    exists(fileName) {
        return filesystem_1.default.exists(this.filePath(fileName), { type: 'file' });
    }
    read(fileName, type) {
        return filesystem_1.default.readFile(this.filePath(fileName), type)
            .then(intermediate => this.decode(intermediate, fileName));
    }
    __write(fileName, content) {
        return this.ensureDir()
            .then(() => this.remove(fileName))
            .catch(() => { })
            .then(() => this.encode(content, fileName))
            .then((encodedContent) => filesystem_1.default.writeFile(this.filePath(fileName, true), encodedContent))
            .then(() => { });
    }
    __overwrite(fileName, content) {
        return this.remove(fileName)
            .catch(() => { })
            .then(() => this.write(fileName, content));
    }
    __clear() {
        return this.list()
            .then(list => {
            const ps = list.map(file => {
                return this.remove(file.fileName);
            });
            return Promise.all(ps);
        })
            .then(() => { });
    }
    __remove(fileName) {
        return this.ensureDir()
            .then(() => filesystem_1.default.removeFile(this.filePath(fileName)));
    }
    __rename(fileName, newName) {
        return this.ensureDir()
            .then(() => {
            return filesystem_1.default.moveFile(this.filePath(fileName), this.filePath(newName, true));
        })
            .then(() => { });
    }
    __copy(fileName, newName) {
        return this.ensureDir()
            .then(() => {
            return filesystem_1.default.copyFile(this.filePath(fileName), this.filePath(newName, true));
        })
            .then(() => { });
    }
    filePath(fileName, shouldSanitize = false) {
        const sanitized = shouldSanitize ? utils_1.sanitizeFileName(fileName) : fileName;
        const existingExt = path_1.default.extname(fileName);
        const ext = this.extensions[0];
        const finalFileName = existingExt && existingExt.substr(1).toLowerCase() === ext.toLowerCase() ? sanitized : (sanitized + '.' + ext);
        return this.baseDir + '/' + this.transformFileName(finalFileName);
    }
    ensureDir() {
        return filesystem_1.default.ensureDirectory(this.baseDir)
            .then(() => { });
    }
    removeExt(fileNameWithExt) {
        const name = path_1.default.basename(fileNameWithExt);
        const ext = path_1.default.extname(fileNameWithExt);
        const i = name.lastIndexOf(ext);
        return name.substring(0, i);
    }
}
exports.BrowserFileSystemFlatStorage = BrowserFileSystemFlatStorage;
exports.getBrowserFileSystemFlatStorage = ts_utils_1.singletonGetterByKey((opts) => {
    return (opts && opts.baseDir) || 'share';
}, (opts) => {
    return new BrowserFileSystemFlatStorage(opts);
});


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Non-external method types which the user can use via UI.
 */
exports.PublicMethodTypes = [
    1 /* GetFileSystemEntries */,
    2 /* GetDirectories */,
    3 /* GetFiles */,
    4 /* DirectoryExists */,
    5 /* FileExists */,
    6 /* CreateDirectory */,
    7 /* RemoveDirectory */,
    8 /* CopyFile */,
    9 /* MoveFile */,
    10 /* DeleteFile */,
    11 /* ReadAllText */,
    12 /* WriteAllText */,
    13 /* AppendAllText */,
    14 /* ReadAllBytes */,
    15 /* WriteAllBytes */,
    16 /* AppendAllBytes */
];
exports.MethodTypeFriendlyNames = [
    "GetVersion",
    "GetFileSystemEntries",
    "GetDirectories",
    "GetFiles",
    "GetFileSystemEntryInfo",
    "GetSpecialFolderPath",
    "DirectoryExists",
    "FileExists",
    "CreateDirectory",
    "RemoveDirectory",
    "CopyFile",
    "MoveFile",
    "DeleteFile",
    "ReadAllText",
    "WriteAllText",
    "AppendAllText",
    "ReadAllBytes",
    "WriteAllBytes",
    "AppendAllBytes"
];
exports.MethodTypeInvocationNames = [
    "get_version",
    "get_file_system_entries",
    "get_directories",
    "get_files",
    "get_file_system_entry_info",
    "get_special_folder_path",
    "directory_exists",
    "file_exists",
    "create_directory",
    "remove_directory",
    "copy_file",
    "move_file",
    "delete_file",
    "read_all_text",
    "write_all_text",
    "append_all_text",
    "read_all_bytes",
    "write_all_bytes",
    "append_all_bytes"
];


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const native_host_1 = __webpack_require__(131);
class KantuFileAccessHost extends native_host_1.NativeMessagingHost {
    constructor() {
        super(KantuFileAccessHost.HOST_NAME);
    }
}
KantuFileAccessHost.HOST_NAME = "com.a9t9.kantu.file_access";
exports.KantuFileAccessHost = KantuFileAccessHost;


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitIntoTwo", function() { return splitIntoTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cn", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objMap", function() { return objMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitKeep", function() { return splitKeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameFactory", function() { return nameFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composePromiseFn", function() { return composePromiseFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRegExp", function() { return toRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertScript", function() { return insertScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return withTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURItoArrayBuffer", function() { return dataURItoArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURItoBlob", function() { return dataURItoBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToDataURL", function() { return blobToDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToText", function() { return blobToText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToString", function() { return arrayBufferToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToArrayBuffer", function() { return stringToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomName", function() { return randomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFileExtension", function() { return withFileExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueName", function() { return uniqueName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCsv", function() { return loadCsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureExtName", function() { return ensureExtName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateStandardName", function() { return validateStandardName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeFileName", function() { return sanitizeFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenDpi", function() { return getScreenDpi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dpiFromFileName", function() { return dpiFromFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAPIWith", function() { return mockAPIWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCountDown", function() { return withCountDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindOnce", function() { return bindOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// delay the call of a function and return a promise
var delay = function delay(fn, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        resolve(fn());
      } catch (e) {
        reject(e);
      }
    }, timeout);
  });
};

// Poll on whatever you want to check, and will time out after a specific duration
// `check` should return `{ pass: Boolean, result: Any }`
// `name` is for a meaningful error message
var until = function until(name, check) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var expire = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;
  var errorMsg = arguments[4];

  var start = new Date();
  var go = function go() {
    if (expire && new Date() - start >= expire) {
      var msg = errorMsg || 'until: ' + name + ' expired!';
      throw new Error(msg);
    }

    var _check = check(),
        pass = _check.pass,
        result = _check.result;

    if (pass) return Promise.resolve(result);
    return delay(go, interval);
  };

  return new Promise(function (resolve, reject) {
    try {
      resolve(go());
    } catch (e) {
      reject(e);
    }
  });
};

var range = function range(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var ret = [];

  for (var i = start; i < end; i += step) {
    ret.push(i);
  }

  return ret;
};

// create a curry version of the passed in function
var partial = function partial(fn) {
  var len = fn.length;
  var _arbitary = void 0;

  _arbitary = function arbitary(curArgs, leftArgCnt) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length >= leftArgCnt) {
        return fn.apply(null, curArgs.concat(args));
      }

      return _arbitary(curArgs.concat(args), leftArgCnt - args.length);
    };
  };

  return _arbitary([], len);
};

var reduceRight = function reduceRight(fn, initial, list) {
  var ret = initial;

  for (var i = list.length - 1; i >= 0; i--) {
    ret = fn(list[i], ret);
  }

  return ret;
};

// compose functions into one
var compose = function compose() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return reduceRight(function (cur, prev) {
    return function (x) {
      return cur(prev(x));
    };
  }, function (x) {
    return x;
  }, args);
};

var map = partial(function (fn, list) {
  var result = [];

  for (var i = 0, len = list.length; i < len; i++) {
    result.push(fn(list[i]));
  }

  return result;
});

var on = partial(function (key, fn, dict) {
  if (Array.isArray(dict)) {
    return [].concat(_toConsumableArray(dict.slice(0, key)), [fn(dict[key])], _toConsumableArray(dict.slice(key + 1)));
  }

  return _extends({}, dict, _defineProperty({}, key, fn(dict[key])));
});

// immutably update any part in an object
var updateIn = partial(function (keys, fn, obj) {
  var updater = compose.apply(null, keys.map(function (key) {
    return key === '[]' ? map : on(key);
  }));
  return updater(fn)(obj);
});

// immutably set any part in an object
// a restricted version of updateIn
var setIn = partial(function (keys, value, obj) {
  var updater = compose.apply(null, keys.map(function (key) {
    return key === '[]' ? map : on(key);
  }));
  return updater(function () {
    return value;
  })(obj);
});

// return part of the object with a few keys deep inside
var getIn = partial(function (keys, obj) {
  return keys.reduce(function (prev, key) {
    if (!prev) return prev;
    return prev[key];
  }, obj);
});

// return the passed in object with only certains keys
var pick = function pick(keys, obj) {
  return keys.reduce(function (prev, key) {
    if (obj[key] !== undefined) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
};

var uid = function uid() {
  return '' + new Date() * 1 + '.' + Math.floor(Math.random() * 10000000).toString(16);
};

var flatten = function flatten(list) {
  return [].concat.apply([], list);
};

var splitIntoTwo = function splitIntoTwo(pattern, str) {
  var index = str.indexOf(pattern);
  if (index === -1) return [str];

  return [str.substr(0, index), str.substr(index + 1)];
};

var cn = function cn() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return args.reduce(function (prev, cur) {
    if (typeof cur === 'string') {
      prev.push(cur);
    } else {
      Object.keys(cur).forEach(function (key) {
        if (cur[key]) {
          prev.push(key);
        }
      });
    }

    return prev;
  }, []).join(' ');
};

var objMap = function objMap(fn, obj) {
  return Object.keys(obj).reduce(function (prev, key, i) {
    prev[key] = fn(obj[key], key, i);
    return prev;
  }, {});
};

var formatDate = function formatDate(d) {
  var pad = function pad(n) {
    return n >= 10 ? '' + n : '0' + n;
  };
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(pad).join('-');
};

var splitKeep = function splitKeep(pattern, str) {
  var result = [];
  var startIndex = 0;
  var reg = void 0,
      match = void 0,
      lastMatchIndex = void 0;

  if (pattern instanceof RegExp) {
    reg = new RegExp(pattern, pattern.flags.indexOf('g') !== -1 ? pattern.flags : pattern.flags + 'g');
  } else if (typeof pattern === 'string') {
    reg = new RegExp(pattern, 'g');
  }

  // eslint-disable-next-line no-cond-assign
  while (match = reg.exec(str)) {
    if (lastMatchIndex === match.index) {
      break;
    }

    if (match.index > startIndex) {
      result.push(str.substring(startIndex, match.index));
    }

    result.push(match[0]);
    startIndex = match.index + match[0].length;
    lastMatchIndex = match.index;
  }

  if (startIndex < str.length) {
    result.push(str.substr(startIndex));
  }

  return result;
};

var nameFactory = function nameFactory() {
  var all = {};

  return function (str) {
    if (!all[str]) {
      all[str] = true;
      return str;
    }

    var n = 2;
    while (all[str + '-' + n]) {
      n++;
    }

    all[str + '-' + n] = true;
    return str + '-' + n;
  };
};

var composePromiseFn = function composePromiseFn() {
  for (var _len4 = arguments.length, list = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    list[_key4] = arguments[_key4];
  }

  return reduceRight(function (cur, prev) {
    return function (x) {
      return prev(x).then(cur);
    };
  }, function (x) {
    return Promise.resolve(x);
  }, list);
};

var parseQuery = function parseQuery(query) {
  return query.slice(1).split('&').reduce(function (prev, cur) {
    var index = cur.indexOf('=');
    var key = cur.substring(0, index);
    var val = cur.substring(index + 1);

    prev[key] = decodeURIComponent(val);
    return prev;
  }, {});
};

var toRegExp = function toRegExp(str) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$needEncode = _ref.needEncode,
      needEncode = _ref$needEncode === undefined ? false : _ref$needEncode,
      _ref$flag = _ref.flag,
      flag = _ref$flag === undefined ? '' : _ref$flag;

  return new RegExp(needEncode ? str.replace(/[[\](){}^$.*+?|]/g, '\\$&') : str, flag);
};

var insertScript = function insertScript(file) {
  var s = document.constructor.prototype.createElement.call(document, 'script');

  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);

  document.documentElement.appendChild(s);
  s.parentNode.removeChild(s);
};

var withTimeout = function withTimeout(timeout, fn) {
  return new Promise(function (resolve, reject) {
    var cancel = function cancel() {
      return clearTimeout(timer);
    };
    var timer = setTimeout(function () {
      reject(new Error('withTimeout: timeout'));
    }, timeout);

    Promise.resolve(fn(cancel)).then(function (data) {
      cancel();
      resolve(data);
    }, function (e) {
      cancel();
      reject(e);
    });
  });
};

var retry = function retry(fn, options) {
  return function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var _timeout$retryInterva = _extends({
      timeout: 5000,
      retryInterval: 1000,
      onFirstFail: function onFirstFail() {},
      onFinal: function onFinal() {},
      shouldRetry: function shouldRetry() {
        return false;
      }
    }, options),
        timeout = _timeout$retryInterva.timeout,
        onFirstFail = _timeout$retryInterva.onFirstFail,
        onFinal = _timeout$retryInterva.onFinal,
        shouldRetry = _timeout$retryInterva.shouldRetry,
        retryInterval = _timeout$retryInterva.retryInterval;

    var retryCount = 0;
    var lastError = null;
    var timerToClear = null;
    var done = false;

    var wrappedOnFinal = function wrappedOnFinal() {
      done = true;

      if (timerToClear) {
        clearTimeout(timerToClear);
      }

      return onFinal.apply(undefined, arguments);
    };

    var intervalMan = function () {
      var lastInterval = null;
      var intervalFactory = function () {
        switch (typeof retryInterval === 'undefined' ? 'undefined' : _typeof(retryInterval)) {
          case 'function':
            return retryInterval;

          case 'number':
            return function () {
              return retryInterval;
            };

          default:
            throw new Error('retryInterval must be either a number or a function');
        }
      }();

      return {
        getLastInterval: function getLastInterval() {
          return lastInterval;
        },
        getInterval: function getInterval() {
          var interval = intervalFactory(retryCount, lastInterval);
          lastInterval = interval;
          return interval;
        }
      };
    }();

    var onError = function onError(e, reject) {
      if (!shouldRetry(e, retryCount)) {
        wrappedOnFinal(e);

        if (reject) return reject(e);else throw e;
      }
      lastError = e;

      return new Promise(function (resolve, reject) {
        if (retryCount++ === 0) {
          onFirstFail(e);
          timerToClear = setTimeout(function () {
            wrappedOnFinal(lastError);
            reject(lastError);
          }, timeout);
        }

        if (done) return;

        delay(run, intervalMan.getInterval()).then(resolve, function (e) {
          return onError(e, reject);
        });
      });
    };

    var run = function run() {
      return fn.apply(undefined, args.concat([{
        retryCount: retryCount,
        retryInterval: intervalMan.getLastInterval()
      }])).catch(onError);
    };

    return run().then(function (result) {
      wrappedOnFinal(null, result);
      return result;
    });
  };
};

// refer to https://stackoverflow.com/questions/12168909/blob-from-dataurl
function dataURItoArrayBuffer(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(/^data:/.test(dataURI) ? dataURI.split(',')[1] : dataURI);

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return ab;
}

function dataURItoBlob(dataURI) {
  var ab = dataURItoArrayBuffer(dataURI);
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], { type: mimeString });
  return blob;
}

function blobToDataURL(blob) {
  var withBase64Prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function (e) {
      var str = reader.result;
      if (withBase64Prefix) return resolve(str);

      var b64 = 'base64,';
      var i = str.indexOf(b64);
      var ret = str.substr(i + b64.length);

      resolve(ret);
    };
    reader.readAsDataURL(blob);
  });
}

function blobToText(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function (e) {
      var str = reader.result;
      resolve(str);
    };
    reader.readAsText(blob);
  });
}

function arrayBufferToString(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function stringToArrayBuffer(str) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);

  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

var randomName = function randomName() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

  if (length <= 0 || length > 100) throw new Error('randomName, length must be between 1 and 100');

  var randomChar = function randomChar() {
    var n = Math.floor(62 * Math.random());
    var code = void 0;

    if (n <= 9) {
      code = 48 + n;
    } else if (n <= 35) {
      code = 65 + n - 10;
    } else {
      code = 97 + n - 36;
    }

    return String.fromCharCode(code);
  };

  return range(0, length).map(randomChar).join('');
};

var withFileExtension = function withFileExtension(origName, fn) {
  var reg = /\.\w+$/;
  var m = origName.match(reg);

  var extName = m ? m[0] : '';
  var baseName = m ? origName.replace(reg, '') : origName;
  var result = fn(baseName, function (name) {
    return name + extName;
  });

  if (!result) {
    throw new Error('withFileExtension: should not return null/undefined');
  }

  if (typeof result.then === 'function') {
    return result.then(function (name) {
      return name + extName;
    });
  }

  return result + extName;
};

var uniqueName = function uniqueName(name, options) {
  var opts = _extends({
    generate: function generate(old) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var reg = /_\((\d+)\)$/;
      var m = old.match(reg);

      if (!m) return old + '_(' + step + ')';
      return old.replace(reg, function (_, n) {
        return '_(' + (parseInt(n, 10) + step) + ')';
      });
    },
    check: function check() {
      return Promise.resolve(true);
    }
  }, options || {});
  var generate = opts.generate,
      check = opts.check;


  return withFileExtension(name, function (baseName, getFullName) {
    var go = function go(fileName, step) {
      return check(getFullName(fileName)).then(function (pass) {
        if (pass) return fileName;
        return go(generate(fileName, step), step);
      });
    };

    return go(baseName, 1);
  });
};

var and = function and() {
  for (var _len6 = arguments.length, list = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    list[_key6] = arguments[_key6];
  }

  return list.reduce(function (prev, cur) {
    return prev && cur;
  }, true);
};

var loadCsv = function loadCsv(url) {
  return fetch(url).then(function (res) {
    if (!res.ok) throw new Error('failed to load csv - ' + url);
    return res.text();
  });
};

var loadImage = function loadImage(url) {
  return fetch(url).then(function (res) {
    if (!res.ok) throw new Error('failed to load image - ' + url);
    return res.blob();
  });
};

var ensureExtName = function ensureExtName(ext, name) {
  var extName = ext.indexOf('.') === 0 ? ext : '.' + ext;
  if (name.lastIndexOf(extName) + extName.length === name.length) return name;
  return name + extName;
};

var validateStandardName = function validateStandardName(name, isFileName) {
  if (!isFileName && !/^_|[a-zA-Z]/.test(name)) {
    throw new Error('must start with a letter or the underscore character.');
  }

  if (isFileName && !/^_|[a-zA-Z0-9]/.test(name)) {
    throw new Error('must start with alpha-numeric or the underscore character.');
  }

  if (!/^[a-zA-Z0-9_]+$/.test(name)) {
    throw new Error('can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )');
  }
};

var sanitizeFileName = function sanitizeFileName(fileName) {
  return withFileExtension(fileName, function (baseName) {
    return baseName.replace(/[\\/:*?<>|]/g, '_');
  });
};

var getScreenDpi = function getScreenDpi() {
  var DEFAULT_DPI = 96;
  var matchDpi = function matchDpi(dpi) {
    return window.matchMedia('(max-resolution: ' + dpi + 'dpi)').matches === true;
  };

  // We iteratively scan all possible media query matches.
  // We can't use binary search, because there are "many" correct answer in
  // problem space and we need the very first match.
  // To speed up computation we divide problem space into buckets.
  // We test each bucket's first element and if we found a match,
  // we make a full scan for previous bucket with including first match.
  // Still, we could use "divide-and-conquer" for such problems.
  // Due to common DPI values, it's not worth to implement such algorithm.

  var bucketSize = 24; // common divisor for 72, 96, 120, 144 etc.

  for (var i = bucketSize; i < 3000; i += bucketSize) {
    if (matchDpi(i)) {
      var start = i - bucketSize;
      var end = i;

      for (var k = start; k <= end; ++k) {
        if (matchDpi(k)) {
          return k;
        }
      }
    }
  }

  return DEFAULT_DPI; // default fallback
};

var dpiFromFileName = function dpiFromFileName(fileName) {
  var reg = /_dpi_(\d+)/i;
  var m = fileName.match(reg);
  return m ? parseInt(m[1], 10) : 0;
};

var mockAPIWith = function mockAPIWith(factory, mock) {
  var promiseFunctionKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var real = mock;
  var exported = objMap(function (val, key) {
    if (typeof val === 'function') {
      if (promiseFunctionKeys.indexOf(key) !== -1) {
        return function () {
          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return p.then(function () {
            var _real;

            return (_real = real)[key].apply(_real, args);
          });
        };
      } else {
        return function () {
          var _real3;

          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          p.then(function () {
            var _real2;

            return (_real2 = real)[key].apply(_real2, args);
          });
          return (_real3 = real)[key].apply(_real3, args);
        };
      }
    } else {
      return val;
    }
  }, mock);

  var p = Promise.resolve(factory()).then(function (api) {
    real = api;
  });

  return exported;
};

var withCountDown = function withCountDown(options) {
  var interval = options.interval,
      timeout = options.timeout,
      onTick = options.onTick;

  var past = 0;

  return new Promise(function (resolve, reject) {
    var timer = setInterval(function () {
      past += interval;

      try {
        onTick({ cancel: cancel, past: past, total: timeout });
      } catch (e) {
        console.error(e);
      }

      if (past >= timeout) clearInterval(timer);
    }, interval);

    var cancel = function cancel() {
      return clearInterval(timer);
    };

    var p = delay(function () {}, timeout).then(function () {
      return clearInterval(timer);
    });

    resolve(p);
  });
};

var bindOnce = function bindOnce(target, eventName, fn) {
  for (var _len9 = arguments.length, rest = Array(_len9 > 3 ? _len9 - 3 : 0), _key9 = 3; _key9 < _len9; _key9++) {
    rest[_key9 - 3] = arguments[_key9];
  }

  var wrapped = function wrapped() {
    try {
      target.removeEventListener.apply(target, [eventName, wrapped].concat(rest));
    } catch (e) {}

    return fn.apply(undefined, arguments);
  };

  target.addEventListener.apply(target, [eventName, wrapped].concat(rest));
};

var bind = function bind(target, eventName, fn) {
  for (var _len10 = arguments.length, rest = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    rest[_key10 - 3] = arguments[_key10];
  }

  target.addEventListener.apply(target, [eventName, fn].concat(rest));
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtmlDataUri", function() { return toHtmlDataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromHtml", function() { return fromHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSONString", function() { return fromJSONString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSONString", function() { return toJSONString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSONDataUri", function() { return toJSONDataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBookmarkData", function() { return toBookmarkData; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(283);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_services_storage__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var joinUrl = function joinUrl(base, url) {
  var urlObj = new url_parse__WEBPACK_IMPORTED_MODULE_2___default.a(url, base);
  return urlObj.toString();
};

// HTML template from test case
function genHtml(_ref) {
  var name = _ref.name,
      baseUrl = _ref.baseUrl,
      commandTrs = _ref.commandTrs;

  return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\n<head profile="http://selenium-ide.openqa.org/profiles/test-case">\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<link rel="selenium.base" href="' + baseUrl + '" />\n<title>' + name + '</title>\n</head>\n<body>\n<table cellpadding="1" cellspacing="1" border="1">\n<thead>\n<tr><td rowspan="1" colspan="3">' + name + '</td></tr>\n</thead><tbody>\n' + commandTrs.join('\n') + '\n</tbody></table>\n<script>\n(function() {\n  var isExtensionLoaded = function () {\n    const $root = document.documentElement\n    return !!$root && !!$root.getAttribute(\'data-kantu\')\n  }\n  var increaseCountInUrl = function (max) {\n    var url   = new URL(window.location.href)\n    var count = 1 + (url.searchParams.get(\'reload\') || 0)\n\n    url.searchParams.set(\'reload\', count)\n    var nextUrl = url.toString()\n\n    var shouldStop = count > max\n    return [shouldStop, !shouldStop ? nextUrl : null]\n  }\n  var run = function () {\n    try {\n      var evt = new CustomEvent(\'kantuSaveAndRunMacro\', { detail: { html: document.documentElement.outerHTML, storageMode: \'' + Object(_services_storage__WEBPACK_IMPORTED_MODULE_4__["getStorageManager"])().getCurrentStrategyType() + '\' } })\n\n      window.dispatchEvent(evt)\n      setInterval(() => window.dispatchEvent(evt), 1000);\n\n      if (window.location.protocol === \'file:\') {\n        var onInvokeSuccess = function () {\n          clearTimeout(timer)\n          clearTimeout(reloadTimer)\n          window.removeEventListener(\'kantuInvokeSuccess\', onInvokeSuccess)\n        }\n        var timer = setTimeout(function () {\n          alert(\'Error #203: It seems you need to turn on *Allow access to file URLs* for Kantu in your browser extension settings.\')\n        }, 8000)\n\n        window.addEventListener(\'kantuInvokeSuccess\', onInvokeSuccess)\n      }\n    } catch (e) {\n      alert(\'Kantu Bookmarklet error: \' + e.toString());\n    }\n  }\n  var reloadTimer = null\n  var main = function () {\n    if (isExtensionLoaded())  return run()\n\n    var MAX_TRY   = 3\n    var INTERVAL  = 1000\n    var tuple     = increaseCountInUrl(MAX_TRY)\n\n    if (tuple[0]) {\n      return alert(\'Error #204: It seems Kantu is not installed yet - or you need to turn on *Allow access to file URLs* for Kantu in your browser extension settings.\')\n    } else {\n      reloadTimer = setTimeout(function () {\n        window.location.href = tuple[1]\n      }, INTERVAL)\n    }\n  }\n\n  main()\n})();\n</script>\n</body>\n</html>\n  ';
}

// generate data uri from html
function htmlDataUri(html) {
  return 'data:text/html;base64,' + window.btoa(unescape(encodeURIComponent(html)));
}

// generate data uri from json
function jsonDataUri(str) {
  return 'data:text/json;base64,' + window.btoa(unescape(encodeURIComponent(str)));
}

// generate html from a test case
function toHtml(_ref2) {
  var name = _ref2.name,
      commands = _ref2.commands;

  var copyCommands = commands.map(function (c) {
    return _extends({}, c);
  });
  var openTc = copyCommands.find(function (tc) {
    return tc.cmd === 'open';
  });

  // Note: Aug 10, 2018, no baseUrl when exported to html
  // so that `${variable}` could be used in open command, and won't be prefixed with baseUrl
  var origin = null;
  var replacePath = function replacePath(path) {
    return path;
  };
  // const url         = openTc && new URL(openTc.target)
  // const origin      = url && url.origin
  // const replacePath = (path) => {
  //   if (path.indexOf(origin) !== 0) return path
  //   const result = path.replace(origin, '')
  //   return result.length === 0 ? '/' : result
  // }

  if (openTc) {
    openTc.target = replacePath(openTc.target);
  }

  var commandTrs = copyCommands.map(function (c) {
    if (c.cmd === 'open') {
      // Note: remove origin if it's the same as the first open command
      c.target = replacePath(c.target);
    }

    return '\n      <tr>\n        <td>' + (c.cmd || '') + '</td>\n        <td>' + (c.target || '') + '</td>\n        <td>' + (c.value || '') + '</td>\n      </tr>\n    ';
  });

  return genHtml({
    name: name,
    commandTrs: commandTrs,
    baseUrl: origin || ''
  });
}

// generate data uri of html from a test case
function toHtmlDataUri(obj) {
  return htmlDataUri(toHtml(obj));
}

// parse html to test case
function fromHtml(html) {
  var $root = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>' + html + '</div>');
  var $base = $root.find('link');
  var $title = $root.find('title');
  var $trs = $root.find('tbody > tr');

  var baseUrl = $base && $base.attr('href');
  var name = $title.text();

  if (!name || !name.length) {
    throw new Error('fromHtml: missing title');
  }

  var commands = [].slice.call($trs).map(function (tr) {
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(tr);
    var trHtml = $el[0].outerHtml;

    // Note: remove any datalist option in katalon-like html file
    $el.find('datalist').remove();

    var $children = $el.children();
    var $cmd = $children.eq(0);
    var $tgt = $children.eq(1);
    var $val = $children.eq(2);
    var cmd = $cmd && $cmd.text();
    var value = $val && $val.text();
    var target = $tgt && $tgt.text();

    if (!cmd || !cmd.length) {
      throw new Error('missing cmd in ' + trHtml);
    }

    if (cmd === 'open') {
      // Note: with or without baseUrl
      target = baseUrl && baseUrl.length && !/:\/\//.test(target) ? joinUrl(baseUrl, target) : target;
    }

    return { cmd: cmd, target: target, value: value };
  });

  return { name: name, data: { commands: commands } };
}

// parse json to test case
// the current json structure doesn't provide fileName,
// so must provide a file name as the second parameter
function fromJSONString(str, fileName) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // Note: Exported JSON from older version Kantu (via 'export to json')
  // has an invisible charactor (char code65279, known as BOM). It breaks JSON parser.
  // So it's safer to filter it out here
  var obj = parse_json__WEBPACK_IMPORTED_MODULE_1___default()(str.replace(/^\s*/, ''));
  var name = fileName ? fileName.replace(/\.json$/i, '') : obj.Name || '__imported__';

  if (obj.macros) {
    throw new Error('This is a test suite, not a macro');
  }

  if (!Array.isArray(obj.Commands)) {
    throw new Error('\'Commands\' field must be an array');
  }

  var commands = obj.Commands.map(function (c) {
    return {
      cmd: c.Command,
      target: c.Target,
      value: c.Value
    };
  });

  return _extends({
    name: name,
    data: { commands: commands }
  }, opts.withStatus && obj.status ? { status: obj.status } : {}, opts.withId && obj.id ? { id: obj.id } : {});
}

// generate json from a test case
function toJSONString(obj) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var getToday = function getToday() {
    var d = new Date();
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
  };
  var data = _extends({
    Name: obj.name,
    CreationDate: getToday(),
    Commands: obj.commands.map(function (c) {
      return {
        Command: c.cmd,
        Target: c.target || '',
        Value: c.value || ''
      };
    })
  }, opts.withStatus && obj.status ? { status: obj.status } : {}, opts.withId && obj.id ? { id: obj.id } : {});

  return JSON.stringify(data, null, 2);
}

// generate data uri of json from a test case
function toJSONDataUri(obj) {
  return jsonDataUri(toJSONString(obj));
}

function toBookmarkData(obj) {
  var name = obj.name,
      bookmarkTitle = obj.bookmarkTitle;


  if (!name) throw new Error('name is required to generate bookmark for macro');
  if (!bookmarkTitle) throw new Error('bookmarkTitle is required to generate bookmark for macro');

  return {
    title: bookmarkTitle,
    url: ('javascript:\n      (function() {\n        try {\n          var evt = new CustomEvent(\'kantuRunMacro\', {\n            detail: {\n              name: \'' + name + '\',\n              from: \'bookmark\',\n              storageMode: \'' + Object(_services_storage__WEBPACK_IMPORTED_MODULE_4__["getStorageManager"])().getCurrentStrategyType() + '\',\n              closeKantu: true\n            }\n          });\n          window.dispatchEvent(evt);\n        } catch (e) {\n          alert(\'Kantu Bookmarklet error: \' + e.toString());\n        }\n      })();\n    ').replace(/\n\s*/g, '')
  };
}

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyTestSuite", function() { return stringifyTestSuite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTestSuite", function() { return parseTestSuite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTestSuiteText", function() { return validateTestSuiteText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBookmarkData", function() { return toBookmarkData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse_json__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_services_storage__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var stringifyTestSuite = function stringifyTestSuite(testSuite, testCases) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var obj = _extends({
    creationDate: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date()),
    name: testSuite.name,
    macros: testSuite.cases.map(function (item) {
      var loops = parseInt(item.loops, 10);
      var tcId = item.testCaseId;
      var tc = testCases.find(function (tc) {
        return tc.id === tcId;
      });
      var tcName = tc.name || '(Macro not found)';

      return {
        macro: tcName,
        loops: loops
      };
    })
  }, opts.withFold ? { fold: !!testSuite.fold } : {}, opts.withId && testSuite.id ? { id: testSuite.id } : {}, opts.withPlayStatus && testSuite.playStatus ? { playStatus: testSuite.playStatus } : {});

  return JSON.stringify(obj, null, 2);
};

var parseTestSuite = function parseTestSuite(text, testCases) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // Note: Exported JSON from older version Kantu (via 'export to json')
  // has an invisible charactor (char code65279, known as BOM). It breaks JSON parser.
  // So it's safer to filter it out here
  var obj = parse_json__WEBPACK_IMPORTED_MODULE_0___default()(text.replace(/^\s*/, ''));

  if (typeof obj.name !== 'string' || obj.name.length === 0) {
    throw new Error('name must be a string');
  }

  if (!Array.isArray(obj.macros)) {
    throw new Error('macros must be an array');
  }

  var cases = obj.macros.map(function (item) {
    var tc = testCases.find(function (tc) {
      return tc.name.toLowerCase() === item.macro.toLowerCase();
    });

    if (!tc) {
      throw new Error('No macro found with name \'' + item.macro + '\'');
    }

    if (typeof item.loops !== 'number' || item.loops < 1) {
      item.loops = 1;
    }

    return {
      testCaseId: tc.id,
      loops: item.loops
    };
  });

  var ts = _extends({
    cases: cases,
    name: opts.fileName ? opts.fileName.replace(/\.json$/i, '') : obj.name
  }, opts.withFold ? { fold: obj.fold === undefined ? true : obj.fold } : {}, opts.withId && obj.id ? { id: obj.id } : {}, opts.withPlayStatus && obj.playStatus ? { playStatus: obj.playStatus } : {});

  return ts;
};

var validateTestSuiteText = parseTestSuite;

var toBookmarkData = function toBookmarkData(obj) {
  var name = obj.name,
      bookmarkTitle = obj.bookmarkTitle;


  if (!name) throw new Error('name is required to generate bookmark for test suite');
  if (!bookmarkTitle) throw new Error('bookmarkTitle is required to generate bookmark for test suite');

  return {
    title: bookmarkTitle,
    url: ('javascript:\n      (function() {\n        try {\n          var evt = new CustomEvent(\'kantuRunTestSuite\', {\n            detail: {\n              name: \'' + name + '\',\n              from: \'bookmark\',\n              storageMode: \'' + Object(_services_storage__WEBPACK_IMPORTED_MODULE_2__["getStorageManager"])().getCurrentStrategyType() + '\',\n              closeKantu: true\n            }\n          });\n          window.dispatchEvent(evt);\n        } catch (e) {\n          alert(\'Kantu Bookmarklet error: \' + e.toString());\n        }\n      })();\n    ').replace(/\n\s*/g, '')
  };
};

var toHtml = function toHtml(_ref) {
  var name = _ref.name;

  return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<title>' + name + '</title>\n</head>\n<body>\n<h1>' + name + '</h1>\n<script>\n(function() {\n  var isExtensionLoaded = function () {\n    const $root = document.documentElement\n    return !!$root && !!$root.getAttribute(\'data-kantu\')\n  }\n  var increaseCountInUrl = function (max) {\n    var url   = new URL(window.location.href)\n    var count = 1 + (url.searchParams.get(\'reload\') || 0)\n\n    url.searchParams.set(\'reload\', count)\n    var nextUrl = url.toString()\n\n    var shouldStop = count > max\n    return [shouldStop, !shouldStop ? nextUrl : null]\n  }\n  var run = function () {\n    try {\n      var evt = new CustomEvent(\'kantuRunTestSuite\', { detail: { name: \'' + name + '\', from: \'html\', storageMode: \'' + Object(_services_storage__WEBPACK_IMPORTED_MODULE_2__["getStorageManager"])().getCurrentStrategyType() + '\' } })\n\n      window.dispatchEvent(evt)\n      setInterval(() => window.dispatchEvent(evt), 1000);\n\n      if (window.location.protocol === \'file:\') {\n        var onInvokeSuccess = function () {\n          clearTimeout(timer)\n          clearTimeout(reloadTimer)\n          window.removeEventListener(\'kantuInvokeSuccess\', onInvokeSuccess)\n        }\n        var timer = setTimeout(function () {\n          alert(\'Error #201: It seems you need to turn on *Allow access to file URLs* for Kantu in your browser extension settings.\')\n        }, 8000)\n\n        window.addEventListener(\'kantuInvokeSuccess\', onInvokeSuccess)\n      }\n    } catch (e) {\n      alert(\'Kantu Bookmarklet error: \' + e.toString());\n    }\n  }\n  var main = function () {\n    if (isExtensionLoaded())  return run()\n\n    var MAX_TRY   = 3\n    var INTERVAL  = 1000\n    var tuple     = increaseCountInUrl(MAX_TRY)\n\n    if (tuple[0]) {\n      return alert(\'Error #202: It seems Kantu is not installed yet, *or* you need to turn on *Allow access to file URLs* for Kantu.\')\n    } else {\n      setTimeout(function () {\n        window.location.href = tuple[1]\n      }, INTERVAL)\n    }\n  }\n\n  main()\n})();\n</script>\n</body>\n</html>\n  ';
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventemitter3_1 = __importDefault(__webpack_require__(296));
const utils_1 = __webpack_require__(4);
const debounce = __webpack_require__(98);
const ts_utils_1 = __webpack_require__(18);
var FlatStorageEvent;
(function (FlatStorageEvent) {
    FlatStorageEvent["ListChanged"] = "list_changed";
    FlatStorageEvent["FilesChanged"] = "files_changed";
})(FlatStorageEvent = exports.FlatStorageEvent || (exports.FlatStorageEvent = {}));
class FlatStorage extends eventemitter3_1.default {
    constructor(options = {}) {
        super();
        this.encode = (x, fileName) => x;
        this.decode = (x, fileName) => x;
        // Q: Why do we need debounce for followingemitXXX?
        // A: So that there could be more than 1 invocation of emitXXX in one operation
        //    And it will just emit once. For downstream like React / Vue, it won't trigger
        //    unnecessary render
        // Note: list changed event is for move (rename) / remove / clear / write a new file
        this.emitListChanged = debounce(() => {
            this.list()
                .then(fileInfos => {
                this.emit(FlatStorageEvent.ListChanged, fileInfos);
            });
        }, 100);
        this.changedFileNames = [];
        this.__emitFilesChanged = debounce(() => {
            const fileNames = this.changedFileNames;
            // Note: clear changedFileNames right after this method is called,
            // instead of waiting till promise resolved
            // so that new file changes won't be blocked or affect current emit
            this.changedFileNames = [];
            return Promise.all(fileNames.map(fileName => {
                return this.read(fileName, 'Text')
                    .catch(() => null);
            }))
                .then(contents => {
                if (contents.length === 0)
                    return;
                // Note: in case some files don't exist any more, filter by content
                const changedFiles = contents.map((content, i) => ({
                    content,
                    fileName: fileNames[i]
                }))
                    .filter(item => !!item.content);
                this.emit(FlatStorageEvent.FilesChanged, changedFiles);
            });
        }, 100);
        if (options.decode) {
            this.decode = options.decode;
        }
        if (options.encode) {
            this.encode = options.encode;
        }
    }
    list() {
        return this.__list()
            .then(items => {
            items.sort((a, b) => {
                const aFileName = a.fileName.toLowerCase();
                const bFileName = b.fileName.toLowerCase();
                if (aFileName < bFileName)
                    return -1;
                if (aFileName > bFileName)
                    return 1;
                return 0;
            });
            return items;
        });
    }
    readAll(readFileType = 'Text', onErrorFiles) {
        return this.list()
            .then(items => {
            return Promise.all(items.map(item => {
                return this.read(item.fileName, readFileType)
                    .then(content => ({
                    content,
                    fileName: item.fileName
                }));
            }));
        });
    }
    bulkWrite(list) {
        return Promise.all(list.map(item => this.write(item.fileName, item.content)))
            .then(() => { });
    }
    write(fileName, content) {
        return this.exists(fileName)
            .then(isExist => {
            const next = () => {
                if (!isExist)
                    this.emitListChanged();
                this.emitFilesChanged([fileName]);
            };
            return this.__write(fileName, content)
                .then(next);
        });
    }
    overwrite(fileName, content) {
        return this.__overwrite(fileName, content)
            .then(() => {
            this.emitFilesChanged([fileName]);
        });
    }
    clear() {
        return this.__clear()
            .then(() => {
            this.emitListChanged();
        });
    }
    remove(fileName) {
        return this.__remove(fileName)
            .then(() => {
            this.emitListChanged();
        });
    }
    rename(fileName, newName) {
        return this.__rename(fileName, newName)
            .then(() => {
            this.emitListChanged();
            this.emitFilesChanged([newName]);
        });
    }
    copy(fileName, newName) {
        const pName = newName && newName.length
            ? Promise.resolve(newName)
            : ts_utils_1.uniqueName(fileName, {
                generate: (old, step = 1) => {
                    const reg = /-(\d+)$/;
                    const m = old.match(reg);
                    if (!m)
                        return `${old}-${step}`;
                    return old.replace(reg, (_, n) => `-${parseInt(n, 10) + step}`);
                },
                check: (fileName) => {
                    return this.exists(fileName).then(exists => !exists);
                },
                postfixReg: /(_relative)?\.\w+$/
            });
        return pName.then(name => {
            console.log(`copy from ${fileName} to ${name}`);
            return this.__copy(fileName, name)
                .then(() => {
                this.emitListChanged();
                this.emitFilesChanged([name]);
            });
        });
    }
    // Note: files changed event is for write file only  (rename excluded)
    emitFilesChanged(fileNames) {
        this.changedFileNames = fileNames.reduce((prev, fileName) => {
            if (prev.indexOf(fileName) === -1)
                prev.push(fileName);
            return prev;
        }, this.changedFileNames);
        this.__emitFilesChanged();
    }
}
exports.FlatStorage = FlatStorage;
exports.readableSize = (byteSize) => {
    const kb = 1024;
    const mb = kb * kb;
    if (byteSize < kb) {
        return byteSize + ' byte';
    }
    if (byteSize < mb) {
        return (byteSize / kb).toFixed(1) + ' KB';
    }
    return (byteSize / mb).toFixed(1) + ' MB';
};
function checkFileName(fileName) {
    utils_1.withFileExtension(fileName, (baseName) => {
        try {
            utils_1.validateStandardName(baseName, true);
        }
        catch (e) {
            throw new Error(`Invalid file name '${fileName}'. File name ` + e.message);
        }
        return baseName;
    });
}
exports.checkFileName = checkFileName;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mime_1 = __importDefault(__webpack_require__(393));
const storage_1 = __webpack_require__(80);
const filesystem_1 = __webpack_require__(298);
const path_1 = __importDefault(__webpack_require__(86));
const utils_1 = __webpack_require__(4);
const ts_utils_1 = __webpack_require__(18);
class NativeFileSystemFlatStorage extends storage_1.FlatStorage {
    constructor(opts) {
        super({
            encode: opts.encode,
            decode: opts.decode
        });
        this.listFilter = (list) => list;
        this.displayedCount = 0;
        this.totalCount = 0;
        const { baseDir, rootDir, extensions, shouldKeepExt = false, listFilter } = opts;
        if (!baseDir || baseDir === '/') {
            throw new Error(`Invalid baseDir, ${baseDir}`);
        }
        this.rootDir = rootDir;
        this.baseDir = baseDir;
        this.extensions = extensions;
        this.shouldKeepExt = shouldKeepExt;
        if (listFilter) {
            this.listFilter = listFilter;
        }
        this.fs = filesystem_1.getNativeFileSystemAPI();
    }
    getDisplayCount() {
        return this.displayedCount;
    }
    getTotalCount() {
        return this.totalCount;
    }
    readAll(readFileType = 'Text', onErrorFiles) {
        return this.list()
            .then(items => {
            return Promise.all(items.map(item => {
                return this.read(item.fileName, readFileType)
                    .then(content => ({
                    content,
                    fileName: item.fileName
                }))
                    // Note: Whenever there is error in reading file,
                    // return null
                    .catch(e => ({
                    fileName: item.fileName,
                    fullFilePath: this.filePath(item.fileName),
                    error: new Error(`Error in parsing ${this.filePath(item.fileName)}:\n${e.message}`)
                }));
            }))
                .then(list => {
                const errorFiles = list.filter(item => item.error);
                if (onErrorFiles)
                    onErrorFiles(errorFiles);
                return list.filter((item) => item.content);
            });
        });
    }
    getLink(fileName) {
        return this.read(fileName, 'DataURL')
            .then((dataUrlWithoutPrefix) => {
            const ext = this.extensions[0];
            const mimeStr = mime_1.default.getType(ext);
            if (!mimeStr || !mimeStr.length)
                throw new Error(`Failed to find mime type for '${ext}'`);
            return `data:${mimeStr};base64,${dataUrlWithoutPrefix}`;
        });
    }
    __list() {
        return this.ensureDir()
            .then(() => {
            return this.fs.getEntries({
                path: path_1.default.join(this.rootDir, this.baseDir),
                extensions: this.extensions
            })
                .then(data => {
                const entries = data.entries;
                const errorCode = data.errorCode;
                if (errorCode !== 0 /* Succeeded */) {
                    throw new ErrorWithCode(getErrorMessageForCode(errorCode), errorCode);
                }
                const convertName = (entryName) => this.shouldKeepExt ? entryName : this.removeExt(entryName);
                const convert = (entry) => {
                    return {
                        dir: this.baseDir,
                        fileName: convertName(entry.name),
                        lastModified: new Date(entry.lastWriteTime),
                        size: storage_1.readableSize(entry.length)
                    };
                };
                const allList = entries.map(convert);
                return Promise.resolve(this.listFilter(allList))
                    .then(displayList => {
                    this.totalCount = allList.length;
                    this.displayedCount = displayList.length;
                    return displayList;
                });
            });
        });
    }
    exists(fileName) {
        return this.fs.fileExists({
            path: this.filePath(fileName)
        });
    }
    read(fileName, type) {
        const onResolve = (res) => {
            if (res.errorCode !== 0 /* Succeeded */) {
                throw new ErrorWithCode(`${fileName}: ` + getErrorMessageForCode(res.errorCode), res.errorCode);
            }
            const rawContent = res.content;
            const intermediate = (() => {
                switch (type) {
                    case 'Text':
                    case 'DataURL':
                        return rawContent;
                    case 'ArrayBuffer':
                        return utils_1.dataURItoArrayBuffer(rawContent);
                    case 'BinaryString':
                        return utils_1.arrayBufferToString(utils_1.dataURItoArrayBuffer(rawContent));
                }
            })();
            return this.decode(intermediate, fileName);
        };
        switch (type) {
            case 'Text':
                return this.fs.readAllText({
                    path: this.filePath(fileName)
                })
                    .then(onResolve);
            default:
                return this.fs.readAllBytes({
                    path: this.filePath(fileName)
                })
                    .then(onResolve);
        }
    }
    __write(fileName, content) {
        return this.ensureDir()
            .then(() => this.encode(content, fileName))
            .then(encodedContent => {
            return this.fs.writeAllBytes({
                content: encodedContent,
                path: this.filePath(fileName, true),
            })
                .then(result => {
                if (!result) {
                    throw new Error(`Failed to write to '${fileName}'`);
                }
            });
        });
    }
    __overwrite(fileName, content) {
        return this.remove(fileName)
            .catch(() => { })
            .then(() => this.write(fileName, content));
    }
    __clear() {
        return this.list()
            .then(list => {
            const ps = list.map(file => {
                return this.remove(file.fileName);
            });
            return Promise.all(ps);
        })
            .then(() => { });
    }
    __remove(fileName) {
        return this.ensureDir()
            .then(() => {
            return this.fs.deleteFile({
                path: this.filePath(fileName)
            })
                .then(() => { });
        });
    }
    __rename(fileName, newName) {
        return this.ensureDir()
            .then(() => {
            return this.fs.moveFile({
                sourcePath: this.filePath(fileName),
                targetPath: this.filePath(newName, true)
            })
                .then(() => { });
        });
    }
    __copy(fileName, newName) {
        return this.ensureDir()
            .then(() => {
            return this.fs.copyFile({
                sourcePath: this.filePath(fileName),
                targetPath: this.filePath(newName, true)
            })
                .then(() => { });
        });
    }
    filePath(fileName, shouldSanitize = false) {
        const sanitized = shouldSanitize ? utils_1.sanitizeFileName(fileName) : fileName;
        const existingExt = path_1.default.extname(fileName);
        const ext = this.extensions[0];
        const finalFileName = existingExt && existingExt.substr(1).toLowerCase() === ext.toLowerCase() ? sanitized : (sanitized + '.' + ext);
        return path_1.default.join(this.rootDir, this.baseDir, finalFileName);
    }
    removeExt(fileNameWithExt) {
        const name = path_1.default.basename(fileNameWithExt);
        const ext = path_1.default.extname(fileNameWithExt);
        const i = name.lastIndexOf(ext);
        return name.substring(0, i);
    }
    ensureDir() {
        const fs = this.fs;
        const dir = path_1.default.join(this.rootDir, this.baseDir);
        return fs.directoryExists({
            path: dir
        })
            .then(existed => {
            if (existed)
                return existed;
            return fs.createDirectory({
                path: dir
            });
        })
            .then(() => { });
    }
}
exports.NativeFileSystemFlatStorage = NativeFileSystemFlatStorage;
exports.getNativeFileSystemFlatStorage = ts_utils_1.singletonGetterByKey((opts) => {
    return path_1.default.join(opts.rootDir, opts.baseDir);
}, (opts) => {
    return new NativeFileSystemFlatStorage(opts);
});
class ErrorWithCode extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'ErrorWithCode';
        this.code = code;
        // Note: better to keep stack trace
        // reference: https://stackoverflow.com/a/32749533/1755633
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
}
exports.ErrorWithCode = ErrorWithCode;
function getErrorMessageForCode(code) {
    switch (code) {
        case 0 /* Succeeded */:
            return 'Success';
        case 1 /* Failed */:
            return 'Failed to load';
        case 2 /* Truncated */:
            return 'File too large to load';
        default:
            return `Unknown error code: ${code}`;
    }
}
exports.getErrorMessageForCode = getErrorMessageForCode;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_path__WEBPACK_IMPORTED_MODULE_0__);


var isWindows = /windows/i.test(window.navigator.userAgent);
var path = isWindows ? _node_modules_path__WEBPACK_IMPORTED_MODULE_0__["win32"] : _node_modules_path__WEBPACK_IMPORTED_MODULE_0__["posix"];

/* harmony default export */ __webpack_exports__["default"] = (path);

/***/ })

}]);