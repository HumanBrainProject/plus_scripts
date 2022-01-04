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
/******/ 		5: 0
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
/******/ 	deferredModules.push([1034,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(16));
const antd_1 = __webpack_require__(465);
const en_US_1 = __importDefault(__webpack_require__(351));
const select_area_1 = __webpack_require__(355);
const types_1 = __webpack_require__(74);
const desktop_1 = __webpack_require__(72);
const ipc_bg_cs_1 = __webpack_require__(99);
const storage_1 = __importDefault(__webpack_require__(36));
const dom_utils_1 = __webpack_require__(21);
const storage_2 = __webpack_require__(13);
const xfile_1 = __webpack_require__(29);
const ts_utils_1 = __webpack_require__(18);
const utils_1 = __webpack_require__(4);
const types_2 = __webpack_require__(83);
const ocr_1 = __webpack_require__(81);
__webpack_require__(350);
__webpack_require__(1035);
const csIpc = ipc_bg_cs_1.csInit(true);
init();
function init() {
    return Promise.all([
        restoreConfig(),
        xfile_1.getXFile().getConfig()
    ])
        .then(([config, xFileConfig]) => {
        storage_2.getStorageManager(config.storageMode);
        render();
    }, render);
}
function restoreConfig() {
    return storage_1.default.get('config')
        .then((config = {}) => {
        return Object.assign({ storageMode: storage_2.StorageStrategyType.Browser }, config);
    });
}
function render() {
    const rootEl = document.getElementById('root');
    return react_dom_1.default.render(react_1.default.createElement(antd_1.LocaleProvider, { locale: en_US_1.default },
        react_1.default.createElement(App, null)), rootEl);
}
class App extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            mode: types_1.DesktopScreenshot.RequestType.DisplayVisualResult,
            rects: [],
            ocrMatches: [],
            imageUrl: '',
            scale: 0.5,
            imagePageRect: { x: 0, y: 0, width: 0, height: 0 },
            imageSize: { width: 0, height: 0 }
        };
    }
    componentDidMount() {
        csIpc.onAsk((type, data) => {
            console.log('onAsk', type, data);
            switch (type) {
                case 'DOM_READY':
                    return true;
                case types_1.DesktopScreenshot.RequestType.DisplayVisualResult: {
                    const d = data;
                    this.setState({
                        mode: types_1.DesktopScreenshot.RequestType.DisplayVisualResult,
                        rects: d.rects
                    });
                    return this.consumeImageInfo(d.image)
                        .then(() => true);
                }
                case types_1.DesktopScreenshot.RequestType.DisplayOcrResult: {
                    const d = data;
                    this.setState({
                        mode: types_1.DesktopScreenshot.RequestType.DisplayOcrResult,
                        ocrMatches: d.ocrMatches
                    });
                    return this.consumeImageInfo(d.image)
                        .then(() => true);
                }
                case types_1.DesktopScreenshot.RequestType.Capture: {
                    const d = data;
                    this.setState({
                        mode: types_1.DesktopScreenshot.RequestType.Capture
                    });
                    return this.consumeImageInfo(d.image)
                        .then(() => ts_utils_1.delay(() => { }, 1000))
                        .then(() => this.selectAreaOnImage());
                }
            }
        });
    }
    resetToMode(mode) {
        return new Promise(resolve => {
            this.setState({
                mode,
                rects: [],
                ocrMatches: []
            }, () => resolve());
        });
    }
    updateImagePageRect() {
        const $image = this.$image;
        if (!$image)
            return;
        const offset = dom_utils_1.accurateOffset($image);
        this.setState({
            imagePageRect: {
                x: offset.left,
                y: offset.top,
                width: $image.offsetWidth,
                height: $image.offsetHeight
            }
        });
    }
    getImagePageRect() {
        return this.state.imagePageRect;
    }
    selectAreaOnImage() {
        return new Promise((resolve, reject) => {
            select_area_1.selectArea({
                preventGlobalClick: false,
                clickToDestroy: false,
                overlayStyles: {
                    top: this.state.imagePageRect.y + 'px'
                },
                onDestroy: () => {
                    resolve();
                },
                done: (rect, boundingRect) => {
                    const areaPageRect = rect;
                    const imagePageRect = this.getImagePageRect();
                    const relativeRect = {
                        x: areaPageRect.x - imagePageRect.x,
                        y: areaPageRect.y - imagePageRect.y,
                        width: areaPageRect.width,
                        height: areaPageRect.height,
                    };
                    const finalScale = (1 / this.state.scale) * (this.state.imageSize.width / screen.width);
                    const finalRect = {
                        x: relativeRect.x * finalScale,
                        y: relativeRect.y * finalScale,
                        width: relativeRect.width * finalScale,
                        height: relativeRect.height * finalScale,
                    };
                    return dom_utils_1.subImage(this.state.imageUrl, finalRect)
                        .then(resolve, reject);
                },
                allowCursor: (e) => {
                    const imagePageRect = this.getImagePageRect();
                    const x = e.pageX;
                    const y = e.pageY;
                    return x > imagePageRect.x &&
                        y > imagePageRect.y &&
                        x < imagePageRect.x + imagePageRect.width &&
                        y < imagePageRect.y + imagePageRect.height;
                }
            });
        })
            .then(result => {
            this.setState({ mode: types_1.DesktopScreenshot.RequestType.DisplayVisualResult });
            return result;
        })
            .catch(e => {
            this.setState({ mode: types_1.DesktopScreenshot.RequestType.DisplayVisualResult });
            throw e;
        });
    }
    consumeImageInfo(image) {
        const pImageDataUrl = (() => {
            switch (image.source) {
                case types_1.DesktopScreenshot.ImageSource.HardDrive:
                    return desktop_1.getNativeCVAPI().readFileAsDataURL(image.path);
                case types_1.DesktopScreenshot.ImageSource.Storage:
                    return storage_2.getStorageManager().getScreenshotStorage().read(image.path, 'DataURL');
                case types_1.DesktopScreenshot.ImageSource.DataUrl:
                    return Promise.resolve(image.path);
            }
        })();
        return pImageDataUrl.then((dataUrl) => {
            this.setState({
                imageUrl: dataUrl
            });
            dom_utils_1.preloadImage(dataUrl)
                .then(result => {
                this.setState({
                    imageSize: {
                        width: result.width,
                        height: result.height
                    }
                });
            });
            setTimeout(() => {
                this.updateImagePageRect();
            }, 1000);
        });
    }
    cornerPosition(rect) {
        const required = {
            width: 50,
            height: 20
        };
        const horizon = rect.x < required.width ? 'right' : 'left';
        const vertical = rect.y < required.height ? 'bottom' : 'top';
        return vertical + '-' + horizon;
    }
    ocrMatchStyle(pw, match) {
        const { scale } = this.state;
        const styleByType = (() => {
            switch (match.highlight) {
                case types_2.OcrHighlightType.Identified:
                    return {
                        color: 'rgba(255, 0, 0, 1)',
                        backgroundColor: 'rgba(200, 200, 200, 0.75)'
                    };
                case types_2.OcrHighlightType.Matched:
                    return {
                        color: '#f00',
                        backgroundColor: 'rgba(255, 215, 15, 0.5)'
                    };
                case types_2.OcrHighlightType.TopMatched:
                    return {
                        color: '#fe1492',
                        backgroundColor: 'rgba(255, 215, 15, 0.5)'
                    };
            }
        })();
        return Object.assign({ boxSizing: 'border-box', position: 'absolute', left: `${scale * pw.word.Left}px`, top: `${scale * pw.word.Top}px`, width: `${scale * pw.word.Width}px`, height: `${scale * pw.word.Height}px`, lineHeight: `${scale * pw.word.Height}px`, fontSize: `${scale * pw.word.Height * 0.8}px`, fontWeight: 'bold', textAlign: 'center', pointerEvents: 'none' }, styleByType);
    }
    renderRectForOcrMatch(match) {
        const { scale } = this.state;
        const rect = ocr_1.ocrMatchRect(match);
        const styles = {
            boxSizing: 'border-box',
            position: 'absolute',
            left: `${scale * rect.x}px`,
            top: `${scale * rect.y}px`,
            width: `${scale * rect.width}px`,
            height: `${scale * rect.height}px`,
            border: `2px solid #fe1492`,
            background: `transparent`,
            pointerEvents: 'none',
        };
        return (react_1.default.createElement("div", { style: styles }));
    }
    colorForRectType(rectType) {
        switch (rectType) {
            case types_1.DesktopScreenshot.RectType.Match:
                return 'orange';
            case types_1.DesktopScreenshot.RectType.BestMatch:
                return '#ff0000';
            case types_1.DesktopScreenshot.RectType.Reference:
            case types_1.DesktopScreenshot.RectType.ReferenceOfBestMatch:
                return '#00ff00';
        }
    }
    render() {
        return (react_1.default.createElement("div", { className: "desktop-screenshot-editor" },
            react_1.default.createElement("div", { className: "top-bar" },
                react_1.default.createElement("button", { onClick: () => {
                        this.setState({
                            scale: this.state.scale < 1 ? 1 : 0.5
                        }, () => {
                            setTimeout(() => {
                                this.updateImagePageRect();
                            }, 1000);
                        });
                    } }, this.state.scale < 1 ? 'Show Original Size' : 'Show 50%'),
                react_1.default.createElement("button", { disabled: this.state.mode === types_1.DesktopScreenshot.RequestType.Capture, onClick: () => {
                        this.resetToMode(types_1.DesktopScreenshot.RequestType.Capture)
                            .then(() => this.selectAreaOnImage())
                            .then(dataUrl => {
                            if (dataUrl)
                                return csIpc.ask('DESKTOP_EDITOR_ADD_VISION_IMAGE', { dataUrl });
                        });
                    } }, this.state.mode === types_1.DesktopScreenshot.RequestType.Capture ? 'Selecting...' : 'Select Image')),
            react_1.default.createElement("div", { className: "editing-area" },
                this.state.imageUrl.length > 0 ? (react_1.default.createElement("img", { ref: (ref) => { this.$image = ref; }, style: {
                        width: screen.width + 'px',
                        height: screen.height + 'px',
                        zoom: this.state.scale
                    }, src: this.state.imageUrl })) : null,
                react_1.default.createElement("div", { className: "highlight-rect-list" }, this.state.rects.map((rect, i) => (react_1.default.createElement("div", { key: i, style: {
                        top: (rect.y * this.state.scale) + 'px',
                        left: (rect.x * this.state.scale) + 'px',
                        width: (rect.width * this.state.scale) + 'px',
                        height: (rect.height * this.state.scale) + 'px',
                        border: `1px solid ${this.colorForRectType(rect.type)}`,
                        color: this.colorForRectType(rect.type)
                    }, className: "highlight-rect" },
                    react_1.default.createElement("div", { className: utils_1.cn('score', this.cornerPosition(rect)) },
                        rect.score !== undefined ? rect.score.toFixed(2) : null,
                        " #",
                        rect.index + 1))))),
                react_1.default.createElement("div", { className: "ocr-match-list" }, this.state.ocrMatches.map((match, i) => (react_1.default.createElement("div", { key: i },
                    match.words.map((pw, j) => (react_1.default.createElement("div", { key: j, style: this.ocrMatchStyle(pw, match), className: "ocr-match" }, pw.word.WordText))),
                    match.highlight === types_2.OcrHighlightType.TopMatched ? (this.renderRectForOcrMatch(match)) : null)))))));
    }
}


/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1036);
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

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, "body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#root{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:100%;min-height:100%}.desktop-screenshot-editor{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;min-height:100%}.desktop-screenshot-editor,.desktop-screenshot-editor .top-bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.desktop-screenshot-editor .top-bar{position:fixed;z-index:2;top:0;left:0;right:0;height:54px;background:#007bff;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:default}.desktop-screenshot-editor .top-bar button{margin-left:20px;padding:0 20px;height:40px;line-height:40px;border:1px solid #fff;border-radius:4px;font-size:14px;color:#fff;background:transparent;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.desktop-screenshot-editor .top-bar button:hover{background:#fefefe;color:#007bff}.desktop-screenshot-editor .top-bar button[disabled]{background:hsla(0,0%,100%,.5);color:#fff;cursor:not-allowed}.desktop-screenshot-editor .editing-area{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;z-index:1;margin-top:54px;width:100%;min-height:calc(100% - 54px);background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAABaWlrMzMz////nPAkwAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+IDGRUHMxeV5KYAAAAXSURBVAjXY1i16v9/BiKI//9XrSKCAABNyDUhZP4pqwAAAABJRU5ErkJggg==);background-repeat:repeat}.desktop-screenshot-editor .editing-area img{display:block}.desktop-screenshot-editor .editing-area .highlight-rect{position:absolute;z-index:110001;pointer-events:none;font-size:14px}.desktop-screenshot-editor .editing-area .highlight-rect .score{position:absolute;width:200px}.desktop-screenshot-editor .editing-area .highlight-rect .score.top-left{top:0;left:0;-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%);text-align:right}.desktop-screenshot-editor .editing-area .highlight-rect .score.top-right{top:0;right:0;-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)}.desktop-screenshot-editor .editing-area .highlight-rect .score.bottom-right{bottom:0;right:0;-webkit-transform:translate(100%,100%);transform:translate(100%,100%)}.desktop-screenshot-editor .editing-area .highlight-rect .score.bottom-left{bottom:0;left:0;-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%);text-align:right}", ""]);

// exports


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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/common/dom_utils.ts
var dom_utils = __webpack_require__(21);

// CONCATENATED MODULE: ./src/common/box.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BOX_ANCHOR_POS = {
  TOP_LEFT: 1,
  TOP_RIGHT: 2,
  BOTTOM_RIGHT: 3,
  BOTTOM_LEFT: 4
};

var fitSquarePoint = function fitSquarePoint(movingPoint, fixedPoint) {
  var mp = movingPoint;
  var fp = fixedPoint;
  var xlen = Math.abs(mp.x - fp.x);
  var ylen = Math.abs(mp.y - fp.y);
  var len = Math.min(xlen, ylen);

  return {
    x: fp.x + Math.sign(mp.x - fp.x) * len,
    y: fp.y + Math.sign(mp.y - fp.y) * len
  };
};

var calcRectAndAnchor = function calcRectAndAnchor(movingPoint, fixedPoint) {
  var mp = movingPoint;
  var fp = fixedPoint;
  var pos = null;
  var tlp = null;

  if (mp.x <= fp.x && mp.y <= fp.y) {
    pos = BOX_ANCHOR_POS.TOP_LEFT;
    tlp = mp;
  } else if (mp.x > fp.x && mp.y > fp.y) {
    pos = BOX_ANCHOR_POS.BOTTOM_RIGHT;
    tlp = fp;
  } else if (mp.x > fp.x) {
    pos = BOX_ANCHOR_POS.TOP_RIGHT;
    tlp = { x: fp.x, y: mp.y };
  } else if (mp.y > fp.y) {
    pos = BOX_ANCHOR_POS.BOTTOM_LEFT;
    tlp = { x: mp.x, y: fp.y };
  }

  return {
    rect: {
      x: tlp.x,
      y: tlp.y,
      width: Math.abs(mp.x - fp.x),
      height: Math.abs(mp.y - fp.y)
    },
    anchorPos: pos
  };
};

var pointAtPos = function pointAtPos(rect, pos) {
  switch (pos) {
    case BOX_ANCHOR_POS.TOP_LEFT:
      return {
        x: rect.x,
        y: rect.y
      };
    case BOX_ANCHOR_POS.TOP_RIGHT:
      return {
        x: rect.x + rect.width,
        y: rect.y
      };
    case BOX_ANCHOR_POS.BOTTOM_RIGHT:
      return {
        x: rect.x + rect.width,
        y: rect.y + rect.height
      };
    case BOX_ANCHOR_POS.BOTTOM_LEFT:
      return {
        x: rect.x,
        y: rect.y + rect.height
      };
  }
};

var diagonalPos = function diagonalPos(pos) {
  switch (pos) {
    case BOX_ANCHOR_POS.TOP_LEFT:
      return BOX_ANCHOR_POS.BOTTOM_RIGHT;

    case BOX_ANCHOR_POS.TOP_RIGHT:
      return BOX_ANCHOR_POS.BOTTOM_LEFT;

    case BOX_ANCHOR_POS.BOTTOM_RIGHT:
      return BOX_ANCHOR_POS.TOP_LEFT;

    case BOX_ANCHOR_POS.BOTTOM_LEFT:
      return BOX_ANCHOR_POS.TOP_RIGHT;
  }
};

var diagonalPoint = function diagonalPoint(rect, anchorPos) {
  return pointAtPos(rect, diagonalPos(anchorPos));
};

var genGetAnchorRects = function genGetAnchorRects(ANCHOR_POS, pointAtPos) {
  return function (_ref) {
    var rect = _ref.rect,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 5 : _ref$size;

    var values = function values(obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    };
    var createRect = function createRect(point, size) {
      return {
        x: point.x - size,
        y: point.y - size,
        width: size * 2,
        height: size * 2
      };
    };

    return values(ANCHOR_POS).map(function (pos) {
      return {
        anchorPos: pos,
        rect: createRect(pointAtPos(rect, pos), size)
      };
    });
  };
};

var getAnchorRects = genGetAnchorRects(BOX_ANCHOR_POS, pointAtPos);

var Box = function () {
  function Box(options) {
    _classCallCheck(this, Box);

    this.state = {
      type: 'box',
      data: null,
      style: {},
      rect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    };
    this.local = {};

    var opts = _extends({
      firstSilence: true,
      transform: function transform(x) {
        return x;
      },
      onStateChange: function onStateChange() {}
    }, options);

    this.transform = opts.transform;
    this.onStateChange = opts.onStateChange;
    this.normalizeRect = opts.normalizeRect || function (x) {
      return x;
    };

    this.__setState({
      id: opts.id,
      data: opts.data,
      type: this.getType(),
      style: this.getDefaultStyle(),
      category: this.getCategory(),
      rect: {
        x: opts.x,
        y: opts.y,
        width: opts.width || 0,
        height: opts.height || 0
      }
    }, { silent: opts.firstSilence });
  }
  // Note: possible settings


  _createClass(Box, [{
    key: 'getType',
    value: function getType() {
      return 'box';
    }
  }, {
    key: 'getCategory',
    value: function getCategory() {
      return Box.category;
    }
  }, {
    key: 'getDefaultAnchorPos',
    value: function getDefaultAnchorPos() {
      return BOX_ANCHOR_POS.BOTTOM_RIGHT;
    }
  }, {
    key: 'getDefaultStyle',
    value: function getDefaultStyle() {
      return {};
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this.state.id;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.transform(this.state);
    }
  }, {
    key: 'processIncomingStyle',
    value: function processIncomingStyle(style) {
      return style;
    }
  }, {
    key: 'setStyle',
    value: function setStyle(obj) {
      this.__setState({
        style: _extends({}, this.state.style, this.processIncomingStyle(obj))
      });
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      this.__setState({ data: data });
    }
  }, {
    key: 'moveAnchorStart',
    value: function moveAnchorStart(_ref2) {
      var anchorPos = _ref2.anchorPos;

      this.__setLocal({
        oldPoint: pointAtPos(this.state.rect, anchorPos),
        oldAnchorPos: anchorPos,
        anchorPos: anchorPos
      });
    }
  }, {
    key: 'moveAnchor',
    value: function moveAnchor(_ref3) {
      var x = _ref3.x,
          y = _ref3.y;

      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          fit = _ref4.fit;

      var old = this.state.rect;
      var pos = this.local.anchorPos;
      var fixed = diagonalPoint(old, pos);
      var moving = !fit ? { x: x, y: y } : fitSquarePoint({ x: x, y: y }, fixed);
      var res = calcRectAndAnchor(moving, fixed);

      this.__setLocal({ anchorPos: res.anchorPos });
      this.__setState({ rect: this.normalizeRect(res.rect, 'moveAnchor') });
    }
  }, {
    key: 'moveAnchorEnd',
    value: function moveAnchorEnd() {
      this.__setLocal({
        oldPoint: null,
        oldAnchorPos: null,
        anchorPos: null
      });
    }
  }, {
    key: 'moveBoxStart',
    value: function moveBoxStart() {
      this.__setLocal({
        oldRect: _extends({}, this.state.rect)
      });
    }
  }, {
    key: 'moveBox',
    value: function moveBox(_ref5) {
      var dx = _ref5.dx,
          dy = _ref5.dy;

      var old = this.local.oldRect;
      var upd = _extends({}, old, {
        x: old.x + dx,
        y: old.y + dy
      });

      this.__setState({ rect: this.normalizeRect(upd, 'moveBox') });
    }
  }, {
    key: 'moveBoxEnd',
    value: function moveBoxEnd() {
      this.__setLocal({
        oldRect: null
      });
    }
  }, {
    key: '__setState',
    value: function __setState(obj) {
      var _this = this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var last = this.getState();

      this.state = _extends({}, this.state, obj);

      if (opts.silent) return;

      var fn = function fn() {
        return _this.onStateChange(_this.getState(), last);
      };
      var invoke = opts.nextTick ? function (fn) {
        return setTimeout(fn, 0);
      } : function (fn) {
        return fn();
      };

      invoke(fn);
    }
  }, {
    key: '__setLocal',
    value: function __setLocal(obj) {
      this.local = _extends({}, this.local, obj);
    }
  }]);

  return Box;
}();
Box.settings = [];
Box.category = 'rect';
Box.defaultAnchorPos = BOX_ANCHOR_POS.BOTTOM_RIGHT;
// EXTERNAL MODULE: ./src/common/web_extension.js
var web_extension = __webpack_require__(10);
var web_extension_default = /*#__PURE__*/__webpack_require__.n(web_extension);

// CONCATENATED MODULE: ./src/ext/content_script/select_area.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyle", function() { return commonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEl", function() { return select_area_createEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRect", function() { return select_area_createRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectArea", function() { return select_area_selectArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAreaPromise", function() { return selectAreaPromise; });
var select_area_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var commonStyle = {
  boxSizing: 'border-box',
  fontFamily: 'Arial'
};

var select_area_createEl = function createEl(_ref) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'div' : _ref$tag,
      _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === undefined ? {} : _ref$attrs,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      text = _ref.text;

  var $el = document.createElement(tag);

  Object.keys(attrs).forEach(function (key) {
    $el.setAttribute(key, attrs[key]);
  });

  if (text && text.length) {
    $el.innerText = text;
  }

  Object(dom_utils["setStyle"])($el, style);
  return $el;
};

var select_area_createRect = function createRect(opts) {
  var containerStyle = select_area_extends({}, commonStyle, {
    position: 'absolute',
    zIndex: 100000,
    top: Object(dom_utils["pixel"])(opts.top),
    left: Object(dom_utils["pixel"])(opts.left),
    width: Object(dom_utils["pixel"])(opts.width),
    height: Object(dom_utils["pixel"])(opts.height)
  }, opts.containerStyle || {});
  var rectStyle = select_area_extends({}, commonStyle, {
    width: '100%',
    height: '100%',
    border: opts.rectBorderWidth + 'px solid rgb(239, 93, 143)',
    cursor: 'move',
    background: 'transparent'
  }, opts.rectStyle || {});

  var $container = select_area_createEl({ style: containerStyle });
  var $rectangle = select_area_createEl({ style: rectStyle });

  $container.appendChild($rectangle);
  document.body.appendChild($container);

  return {
    $container: $container,
    $rectangle: $rectangle,
    destroy: function destroy() {
      $container.remove();
    },
    hide: function hide() {
      Object(dom_utils["setStyle"])($container, { display: 'none' });
    },
    show: function show() {
      Object(dom_utils["setStyle"])($container, { display: 'block' });
    }
  };
};

var createOverlay = function createOverlay(extraStyles) {
  var $overlay = select_area_createEl({
    style: select_area_extends({
      position: 'fixed',
      zIndex: 9000,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: 'transparent',
      cursor: 'crosshair'
    }, extraStyles)
  });

  document.body.appendChild($overlay);

  return {
    $overlay: $overlay,
    destroy: function destroy() {
      return $overlay.remove();
    }
  };
};

var select_area_selectArea = function selectArea(_ref2) {
  var done = _ref2.done,
      _ref2$onDestroy = _ref2.onDestroy,
      onDestroy = _ref2$onDestroy === undefined ? function () {} : _ref2$onDestroy,
      _ref2$allowCursor = _ref2.allowCursor,
      allowCursor = _ref2$allowCursor === undefined ? function (e) {
    return true;
  } : _ref2$allowCursor,
      _ref2$overlayStyles = _ref2.overlayStyles,
      overlayStyles = _ref2$overlayStyles === undefined ? {} : _ref2$overlayStyles,
      _ref2$clickToDestroy = _ref2.clickToDestroy,
      clickToDestroy = _ref2$clickToDestroy === undefined ? true : _ref2$clickToDestroy,
      _ref2$preventGlobalCl = _ref2.preventGlobalClick,
      preventGlobalClick = _ref2$preventGlobalCl === undefined ? true : _ref2$preventGlobalCl;

  var go = function go(done) {
    var state = {
      box: null,
      activated: false,
      startPos: null,
      rect: null
    };
    var resetBodyStyle = function () {
      var userSelectKey = web_extension_default.a.isFirefox() ? '-moz-user-select' : 'user-select';
      var style = window.getComputedStyle(document.body);
      var oldCursor = style.cursor;
      var oldUserSelect = style[userSelectKey];

      Object(dom_utils["setStyle"])(document.body, _defineProperty({
        cursor: 'crosshair'
      }, userSelectKey, 'none'));
      return function () {
        return Object(dom_utils["setStyle"])(document.body, _defineProperty({ cursor: oldCursor }, userSelectKey, oldUserSelect));
      };
    }();

    var overlayApi = createOverlay(overlayStyles);
    var unbindDrag = Object(dom_utils["bindDrag"])({
      preventGlobalClick: preventGlobalClick,
      $el: overlayApi.$overlay,
      onDragStart: function onDragStart(e) {
        e.preventDefault();
        if (!allowCursor(e)) return;

        state.activated = true;
        state.startPos = {
          x: e.pageX,
          y: e.pageY
        };
      },
      onDragEnd: function onDragEnd(e) {
        e.preventDefault();

        state.activated = false;

        if (state.box) {
          state.box.moveAnchorEnd();

          var boundingRect = rectObj.$container.getBoundingClientRect();
          API.hide();

          // Note: API.hide() takes some time to have effect
          setTimeout(function () {
            state.box = null;

            return Promise.resolve(done(state.rect, boundingRect)).catch(function (e) {}).then(function () {
              return API.destroy();
            });
          }, 100);
        }
      },
      onDrag: function onDrag(e, _ref3) {
        var dx = _ref3.dx,
            dy = _ref3.dy;

        e.preventDefault();

        if (!allowCursor(e)) return;
        if (!state.activated) return;

        if (!state.box) {
          var rect = {
            x: state.startPos.x,
            y: state.startPos.y,
            width: dx,
            height: dy
          };
          state.rect = rect;
          state.box = new Box(select_area_extends({}, rect, {
            onStateChange: function onStateChange(_ref4) {
              var rect = _ref4.rect;

              state.rect = rect;
              API.show();
              API.updatePos(rect);
            }
          }));

          state.box.moveAnchorStart({
            anchorPos: BOX_ANCHOR_POS.BOTTOM_RIGHT
          });
        }

        state.box.moveAnchor({
          x: e.pageX,
          y: e.pageY
        });
      }
    });

    var rectObj = select_area_createRect({
      top: -999,
      left: -999,
      width: 0,
      height: 0,
      rectStyle: {
        border: '1px solid #ff0000',
        background: 'rgba(255, 0, 0, 0.1)'
      }
    });
    var API = {
      updatePos: function updatePos(rect) {
        Object(dom_utils["setStyle"])(rectObj.$container, {
          top: Object(dom_utils["pixel"])(rect.y),
          left: Object(dom_utils["pixel"])(rect.x),
          width: Object(dom_utils["pixel"])(rect.width),
          height: Object(dom_utils["pixel"])(rect.height)
        });
      },
      destroy: function destroy() {
        resetBodyStyle();
        unbindDrag();
        overlayApi.destroy();
        rectObj.destroy();

        setTimeout(function () {
          document.removeEventListener('click', onClick, true);
          document.removeEventListener('keydown', onKeyDown, true);
        }, 0);

        onDestroy();
      },
      hide: function hide() {
        rectObj.hide();
      },
      show: function show() {
        rectObj.show();
      }
    };

    var onClick = function onClick(e) {
      // If drag starts, we should ignore click event
      if (state.box) return;

      console.log('trigger select_area onclick', state.activated);
      e.preventDefault();
      e.stopPropagation();
      API.destroy();
    };
    var onKeyDown = function onKeyDown(e) {
      return e.keyCode === 27 && API.destroy();
    };

    document.addEventListener('keydown', onKeyDown, true);

    if (clickToDestroy) {
      document.addEventListener('click', onClick, true);
    }

    API.hide();
    return API;
  };

  return go(done);
};

var selectAreaPromise = function selectAreaPromise(opts) {
  return new Promise(function (resolve, reject) {
    var wrappedDone = function wrappedDone() {
      resolve(opts.done.apply(opts, arguments));
    };
    var wrappedOnDestroy = function wrappedOnDestroy() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      try {
        if (opts.onDestroy) opts.onDestroy(args);
      } catch (e) {}

      resolve();
    };

    select_area_selectArea(select_area_extends({}, opts, {
      done: wrappedDone,
      onDestroy: wrappedOnDestroy
    }));
  });
};

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