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
/******/ 		8: 0
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
/******/ 	deferredModules.push([1028,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1028:
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
const storage_1 = __importDefault(__webpack_require__(36));
const storage_2 = __webpack_require__(13);
const xfile_1 = __webpack_require__(29);
const utils_1 = __webpack_require__(4);
const ts_utils_1 = __webpack_require__(18);
const dom_utils_1 = __webpack_require__(21);
const editor_1 = __webpack_require__(1029);
const box_1 = __webpack_require__(464);
__webpack_require__(350);
__webpack_require__(1032);
const rootEl = document.getElementById('root');
const render = () => react_dom_1.default.render(react_1.default.createElement(antd_1.LocaleProvider, { locale: en_US_1.default },
    react_1.default.createElement(App, null)), rootEl);
var Mode;
(function (Mode) {
    Mode[Mode["Normal"] = 0] = "Normal";
    Mode[Mode["Creating"] = 1] = "Creating";
    Mode[Mode["Moving"] = 2] = "Moving";
    Mode[Mode["Resizing"] = 3] = "Resizing";
})(Mode || (Mode = {}));
class App extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            mode: Mode.Normal,
            ready: false,
            imageUrl: undefined,
            imageWidth: 0,
            imageHeight: 0,
            editor: undefined,
            creating: false,
            moving: false,
            isMouseDown: false,
            disableMouseDown: false,
            mouseDownPoint: undefined,
            pieceId: undefined,
            shouldAddRelativeInFileName: true
        };
        this.throttledWarn = ts_utils_1.throttle(antd_1.message.warn, 3000);
        this.onClickCancel = () => {
            if (!this.hasAnyChanges())
                return window.close();
            return antd_1.Modal.confirm({
                title: `Unsaved changes in image "${this.getVisionFileName()}"`,
                content: 'Do you want to discard your changes?',
                okText: 'Yes. Close window',
                cancelText: 'No. Go back',
                onOk: () => {
                    return window.close();
                },
                onCancel: () => {
                    return Promise.resolve(true);
                }
            });
        };
        this.onClickSaveAndClose = () => {
            if (!this.hasAnyChanges())
                return;
            const hideAnchors = () => {
                if (this.controller) {
                    this.controller.cancelSelectPiece();
                }
                return ts_utils_1.delay(() => { }, 20);
            };
            const getFileName = () => {
                return ts_utils_1.withFileExtension(this.getVisionFileName(), (baseName) => {
                    if (!this.state.shouldAddRelativeInFileName)
                        return baseName;
                    if (/_relative$/i.test(baseName))
                        return baseName;
                    return baseName + '_relative';
                });
            };
            const finalFileName = getFileName();
            return hideAnchors()
                .then(() => dom_utils_1.imageBlobFromSVG(dom_utils_1.svgNodetoString(this.svg), 'image/png', 1.0))
                .then(blob => {
                return storage_2.getStorageManager()
                    .getVisionStorage()
                    .overwrite(finalFileName, blob);
            })
                .then(() => {
                const kantuWindow = window.opener;
                kantuWindow.postMessage({ type: 'RELOAD_VISIONS' }, '*');
                antd_1.message.success('Successfully saved');
                return ts_utils_1.delay(() => { }, 1000);
            })
                .then(() => {
                window.close();
            });
        };
        this.onKeyDown = (e) => {
            if (!e.target || e.target.tagName.toUpperCase() === 'TEXTAREA')
                return;
            if (!this.state.editor)
                return;
            if (!this.controller)
                return;
            if (this.state.editor.piece.active) {
                let hit = true;
                switch (e.key) {
                    case 'Delete':
                    case 'Backspace': {
                        this.controller.removePiece(this.state.editor.piece.active);
                        break;
                    }
                    case 'ArrowUp': {
                        this.controller.movePieceDirectly(this.state.editor.piece.active, { dx: 0, dy: e.shiftKey ? -10 : -1 });
                        break;
                    }
                    case 'ArrowDown': {
                        this.controller.movePieceDirectly(this.state.editor.piece.active, { dx: 0, dy: e.shiftKey ? 10 : 1 });
                        break;
                    }
                    case 'ArrowLeft': {
                        this.controller.movePieceDirectly(this.state.editor.piece.active, { dy: 0, dx: e.shiftKey ? -10 : -1 });
                        break;
                    }
                    case 'ArrowRight': {
                        this.controller.movePieceDirectly(this.state.editor.piece.active, { dy: 0, dx: e.shiftKey ? 10 : 1 });
                        break;
                    }
                    default:
                        hit = false;
                        break;
                }
                if (hit) {
                    e.preventDefault();
                }
            }
        };
        this.svgOffsetPoint = (pageX, pageY) => {
            const svg = this.svg;
            const svgOffset = dom_utils_1.offset(svg);
            const { viewport } = this.state.editor;
            return {
                x: viewport.x + pageX - svgOffset.left,
                y: viewport.y + pageY - svgOffset.top
            };
        };
        this.xSvg2DOM = (x) => {
            const svg = this.svg;
            const svgOffset = dom_utils_1.offset(svg);
            const { viewport } = this.state.editor;
            return x - viewport.x + svgOffset.left;
        };
        this.ySvg2DOM = (y) => {
            const svg = this.svg;
            const svgOffset = dom_utils_1.offset(svg);
            const { viewport } = this.state.editor;
            return y - viewport.y + svgOffset.top;
        };
        this.onEditorClick = () => {
            if (!this.state.creating && !this.state.moving && this.controller) {
                this.controller.cancelSelectPiece();
            }
        };
        this.onEdtiorMouseDown = (e) => {
            if (e.button !== 0)
                return;
            if (!this.controller)
                return;
            if (this.state.disableMouseDown)
                return;
            if (!this.state.editor || !this.state.editor.tool.active)
                return;
            const point = this.svgOffsetPoint(e.pageX, e.pageY);
            switch (this.state.editor.tool.active) {
                case 'text': {
                    const activePiece = this.getActivePiece();
                    if (activePiece && activePiece.type === 'text') {
                        // Do nothing
                    }
                    else {
                        try {
                            this.controller.createPiece(point, {
                                data: {
                                    text: '',
                                    editing: true
                                }
                            });
                        }
                        catch (e) {
                            if (e instanceof editor_1.CannotCreateError) {
                                this.throttledWarn(e.message);
                            }
                        }
                    }
                    break;
                }
                default: {
                    this.setState({
                        mode: Mode.Creating,
                        isMouseDown: true,
                        mouseDownPoint: this.svgOffsetPoint(e.pageX, e.pageY)
                    });
                }
            }
        };
        this.onEdtiorMouseUp = (e) => {
            if (!this.controller)
                return;
            const nextState = {
                isMouseDown: false,
                creating: false,
                moving: false,
                mode: Mode.Normal
            };
            switch (this.state.mode) {
                case Mode.Resizing: {
                    const { pieceId } = this.state;
                    if (!pieceId)
                        throw new Error('no pieceId found');
                    this.controller.movePieceAnchorEnd(pieceId);
                    break;
                }
                case Mode.Moving: {
                    const { pieceId } = this.state;
                    if (!pieceId)
                        throw new Error('no pieceId found');
                    this.controller.movePieceEnd(pieceId);
                    break;
                }
            }
            // Note: wait for onEditorClick to be triggered first, then set creating to false
            setTimeout(() => {
                this.setState(nextState);
            }, 0);
        };
        this.onEditorMouseMove = (e) => {
            if (!this.controller)
                return;
            if (!this.state.isMouseDown)
                return;
            switch (this.state.mode) {
                case Mode.Creating: {
                    const { mouseDownPoint } = this.state;
                    if (!mouseDownPoint)
                        throw new Error('no mouse down point found');
                    const pieceInfo = (() => {
                        try {
                            return this.controller.createPiece(mouseDownPoint);
                        }
                        catch (e) {
                            if (e instanceof editor_1.CannotCreateError) {
                                this.throttledWarn(e.message);
                            }
                        }
                    })();
                    if (!pieceInfo)
                        return;
                    this.setState({
                        creating: true
                    });
                    this.movePieceAnchorStart(pieceInfo.id, pieceInfo.defaultAnchorPos);
                    break;
                }
                case Mode.Resizing: {
                    const { pieceId } = this.state;
                    if (!pieceId)
                        throw new Error('no pieceId found');
                    this.controller.movePieceAnchor(pieceId, this.svgOffsetPoint(e.pageX, e.pageY), { fit: e.shiftKey });
                    break;
                }
                case Mode.Moving: {
                    const { pieceId } = this.state;
                    if (!pieceId)
                        throw new Error('no pieceId found');
                    this.controller.movePiece(pieceId, this.svgOffsetPoint(e.pageX, e.pageY));
                    this.setState({ moving: true });
                    break;
                }
            }
        };
    }
    getActivePiece() {
        const { piece } = this.state.editor;
        if (!piece.active || !piece.list)
            return;
        return piece.list.find(item => item.id === piece.active);
    }
    movePieceAnchorStart(pieceId, anchorPos) {
        if (!this.controller)
            return;
        this.controller.movePieceAnchorStart(pieceId, anchorPos);
        this.setState({
            pieceId,
            mode: Mode.Resizing,
            isMouseDown: true
        });
    }
    movePieceStart(pieceId, point) {
        if (!this.controller)
            return;
        this.controller.movePieceStart(pieceId, point);
        this.setState({
            pieceId,
            mode: Mode.Moving,
            isMouseDown: true
        });
    }
    bindKeyEvents() {
        document.addEventListener('keydown', this.onKeyDown, true);
    }
    unbindKeyEvents() {
        document.removeEventListener('keydown', this.onKeyDown, true);
    }
    hasAnyChanges() {
        const editor = this.state.editor;
        return editor.piece.list.length > 0;
    }
    getVisionFileName() {
        const queryObj = utils_1.parseQuery(window.location.search);
        return queryObj.vision;
    }
    componentDidMount() {
        const visionFile = this.getVisionFileName();
        if (!visionFile)
            return;
        document.title = visionFile + ' - Kantu Vision Viewer';
        storage_2.getStorageManager()
            .getVisionStorage()
            .read(visionFile, 'DataURL')
            .then(dataUrl => {
            if (!dataUrl)
                throw new Error('File is empty');
            let url = dataUrl;
            // Note: DataUrl from native storage doesn't include this prefix,
            // so have to add that manually
            if (url.substr(0, 22) !== 'data:image/png;base64,') {
                url = 'data:image/png;base64,' + url;
            }
            return dom_utils_1.preloadImage(url);
        })
            .then(data => {
            this.controller = new editor_1.Editor({
                viewport: {
                    x: 0,
                    y: 0,
                    width: data.width,
                    height: data.height
                },
                onStateChange: (editorState) => {
                    this.setState({
                        editor: editorState
                    });
                },
                canCreatePiece: (key, state) => {
                    switch (key) {
                        case 'pinkBox':
                        case 'greenBox':
                            const found = state.piece.list.find(item => item.type === key);
                            return !found;
                    }
                    return true;
                }
            });
            this.setState({
                imageUrl: data.$img.src,
                imageWidth: data.width,
                imageHeight: data.height,
                ready: true
            });
            this.bindKeyEvents();
        })
            .catch(e => {
            antd_1.message.error(e.message);
        });
    }
    componentWillUnmount() {
        this.unbindKeyEvents();
    }
    renderAnchors(options) {
        const { id, rect, category } = options;
        const getAnchorRects = box_1.getAnchorRects;
        const anchors = getAnchorRects({ rect });
        return (react_1.default.createElement("g", null, anchors.map(item => (react_1.default.createElement("rect", Object.assign({}, item.rect, { key: item.anchorPos, className: `anchor anchor-${item.anchorPos}`, onClick: (e) => e.stopPropagation(), onMouseDown: (e) => {
                e.stopPropagation();
                this.movePieceAnchorStart(id, item.anchorPos);
            } }))))));
    }
    renderRect(data, isActive, commonProps) {
        const { rect } = data;
        return (react_1.default.createElement("g", { key: data.id },
            react_1.default.createElement("rect", Object.assign({}, rect, commonProps)),
            isActive ? this.renderAnchors(data) : null));
    }
    renderPieces() {
        const { piece } = this.state.editor;
        const renderSinglePiece = (item) => {
            const commonProps = {
                className: 'piece',
                style: item.style || {},
                onClick: (e) => {
                    if (!this.controller)
                        return;
                    if (this.state.moving)
                        return;
                    e.stopPropagation();
                    this.controller.selectPiece(item.id);
                },
                onMouseDown: (e) => {
                    e.stopPropagation();
                    this.movePieceStart(item.id, this.svgOffsetPoint(e.pageX, e.pageY));
                }
            };
            const isActive = item.id === piece.active;
            switch (item.type) {
                case 'box':
                case 'greenBox':
                case 'pinkBox':
                    return this.renderRect(item, isActive, commonProps);
            }
        };
        return (react_1.default.createElement("g", null, (piece.list || []).map(renderSinglePiece)));
    }
    render() {
        const ready = this.state.ready;
        const editor = this.state.editor;
        if (!ready || !editor || !this.controller)
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", { className: "vision-editor" },
            react_1.default.createElement("div", { className: "editor-main" },
                react_1.default.createElement("div", { className: "editor-toolbox" },
                    react_1.default.createElement("h3", null, "Relative Clicks"),
                    react_1.default.createElement("div", { className: "tool-item" },
                        react_1.default.createElement("label", null, "Anchor Image:"),
                        react_1.default.createElement("button", { className: utils_1.cn("tool-button green-button", { active: editor.tool.active === 'greenBox' }), onClick: () => {
                                if (!this.controller)
                                    return;
                                this.controller.toggleSelectTool('greenBox');
                            } }, "Green Box")),
                    react_1.default.createElement("div", { className: "tool-item" },
                        react_1.default.createElement("label", null, "Click Area:"),
                        react_1.default.createElement("button", { className: utils_1.cn("tool-button pink-button", { active: editor.tool.active === 'pinkBox' }), onClick: () => {
                                if (!this.controller)
                                    return;
                                this.controller.toggleSelectTool('pinkBox');
                            } }, "Pink Box")),
                    react_1.default.createElement("div", { className: "relative-checkbox" },
                        react_1.default.createElement(antd_1.Checkbox, { onChange: e => this.setState({ shouldAddRelativeInFileName: e.target.checked }), checked: this.state.shouldAddRelativeInFileName }, "Add \"_relative\" to the file name"))),
                react_1.default.createElement("div", { className: "editor-canvas-scroller" },
                    react_1.default.createElement("div", { className: "editor-canvas" },
                        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: editor.viewport.width, height: editor.viewport.height, viewBox: `${editor.viewport.x} ${editor.viewport.y} ${editor.viewport.width} ${editor.viewport.height}`, ref: ref => { this.svg = ref; }, onClick: this.onEditorClick, onMouseDown: this.onEdtiorMouseDown, onMouseUp: this.onEdtiorMouseUp, onMouseMove: this.onEditorMouseMove, className: utils_1.cn({
                                'with-tool': !editor.tool.active
                            }, editor.tool.active || {}) },
                            react_1.default.createElement("defs", null,
                                react_1.default.createElement("filter", { id: "shadow" },
                                    react_1.default.createElement("feDropShadow", { dx: "4", dy: "8", stdDeviation: "4" }))),
                            react_1.default.createElement("image", { xlinkHref: this.state.imageUrl, x: 0, y: 0, width: this.state.imageWidth, height: this.state.imageHeight }),
                            this.renderPieces())))),
            react_1.default.createElement("div", { className: "editor-bottom" },
                react_1.default.createElement("a", { className: "editor-tips", target: "_blank", href: "https://a9t9.com/x/idehelp?help=relative_clicks" }, "Info: What are relative clicks?"),
                react_1.default.createElement("div", { className: "editor-actions" },
                    react_1.default.createElement(antd_1.Button, { onClick: this.onClickCancel }, "Cancel"),
                    react_1.default.createElement(antd_1.Button, { type: "primary", disabled: !this.hasAnyChanges(), onClick: this.onClickSaveAndClose }, "Save + Close")))));
    }
}
function restoreConfig() {
    return storage_1.default.get('config')
        .then((config = {}) => {
        return Object.assign({ storageMode: storage_2.StorageStrategyType.Browser }, config);
    });
}
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
init();


/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const green_box_1 = __webpack_require__(1030);
const pink_box_1 = __webpack_require__(1031);
const ts_utils_1 = __webpack_require__(18);
class CannotCreateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CannotCreateError';
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
exports.CannotCreateError = CannotCreateError;
class Editor {
    constructor(options) {
        this.state = {
            viewport: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            tool: {
                list: [],
                active: null
            },
            settings: [],
            piece: {
                list: [],
                active: null
            }
        };
        this.local = {
            pieces: [],
            availableTools: [],
            move: {},
            moveAnchor: {}
        };
        const opts = Object.assign({
            availableTools: [green_box_1.GreenBox, pink_box_1.PinkBox],
            onStateChange: () => { },
            canCreatePiece: () => true
        }, options);
        this.onStateChange = opts.onStateChange;
        this.canCreatePiece = opts.canCreatePiece;
        this.__setLocal({ availableTools: opts.availableTools });
        this.__setState(Object.assign({}, (opts.viewport ? { viewport: opts.viewport } : {}), { tool: {
                list: opts.availableTools,
                active: null
            } }));
    }
    setViewport(viewport) {
        this.__setState({ viewport });
    }
    toggleSelectTool(key) {
        const Klass = this.local.availableTools.find(Klass => Klass.key === key);
        if (!Klass)
            throw new Error(`Invalid ToolClass key '${key}'`);
        const active = key === this.state.tool.active ? null : key;
        this.__setState(ts_utils_1.setIn(['tool', 'active'], active, this.state));
    }
    createPiece(point, extra = {}) {
        if (!this.state.tool.active)
            return null;
        const { x, y } = point;
        const key = this.state.tool.active;
        const Klass = this.local.availableTools.find(item => item.key === key);
        if (!Klass)
            throw new Error(`ToolClass with key '${key}' not found`);
        if (!this.canCreatePiece(key, this.state))
            throw new CannotCreateError(`cannot create this kind of piece any more`);
        const id = ts_utils_1.uid();
        const piece = new Klass(Object.assign({}, extra, { id,
            x,
            y, onStateChange: (state, old) => {
                const foundIndex = this.state.piece.list.findIndex(item => item.id === id);
                const index = foundIndex !== -1 ? foundIndex : this.state.piece.list.length;
                this.__setState(ts_utils_1.setIn(['piece', 'list', index], state, this.state));
            } }));
        this.__setLocal({
            pieces: [...this.local.pieces, piece]
        });
        this.__setState(ts_utils_1.compose(ts_utils_1.setIn(['piece', 'list', this.state.piece.list.length], piece.getState()), ts_utils_1.setIn(['piece', 'active'], id), ts_utils_1.setIn(['piece', 'creating'], true))(this.state));
        return {
            id,
            defaultAnchorPos: piece.getDefaultAnchorPos()
        };
    }
    selectPiece(id) {
        this.__setState(ts_utils_1.setIn(['piece', 'active'], id, this.state));
    }
    cancelSelectPiece() {
        if (!this.state.piece.active)
            return;
        this.__setState(ts_utils_1.setIn(['piece', 'active'], null, this.state));
    }
    removePiece(id) {
        const index = this.state.piece.list.findIndex(item => item.id === id);
        if (index === -1)
            return;
        this.__setState(ts_utils_1.compose(ts_utils_1.updateIn(['piece', 'list'], (list) => list.filter(item => item.id !== id)), ts_utils_1.updateIn(['piece', 'active'], (activeId) => activeId === id ? null : activeId))(this.state));
    }
    setPieceStyle(id, style) {
        const piece = this.__findPiece(id);
        piece.setStyle(style);
    }
    setPieceData(id, data) {
        const piece = this.__findPiece(id);
        piece.setData(data);
    }
    movePieceStart(id, point) {
        const piece = this.__findPiece(id);
        this.__setLocal(ts_utils_1.setIn(['move', id], { id, point }, this.local));
        piece.moveBoxStart();
    }
    movePiece(id, point) {
        const piece = this.__findPiece(id);
        const data = this.local.move[id];
        if (!data || !data.point)
            throw new Error('No initial cursor point saved');
        const dx = point.x - data.point.x;
        const dy = point.y - data.point.y;
        piece.moveBox({ dx, dy });
    }
    movePieceEnd(id) {
        const piece = this.__findPiece(id);
        this.__setLocal(ts_utils_1.setIn(['move', id], null, this.local));
        piece.moveBoxEnd();
    }
    movePieceDirectly(id, { dx, dy }) {
        const piece = this.__findPiece(id);
        piece.moveBoxStart();
        piece.moveBox({ dx, dy });
        piece.moveBoxEnd();
    }
    movePieceAnchorStart(id, anchorPos) {
        const piece = this.__findPiece(id);
        this.__setLocal(ts_utils_1.setIn(['moveAnchor', id], { id, anchorPos }, this.local));
        piece.moveAnchorStart({ anchorPos });
    }
    movePieceAnchor(id, point, options = {}) {
        const piece = this.__findPiece(id);
        piece.moveAnchor(point, options);
    }
    movePieceAnchorEnd(id) {
        const piece = this.__findPiece(id);
        this.__setLocal(ts_utils_1.setIn(['moveAnchor', id], null, this.local));
        piece.moveAnchorEnd();
    }
    __findPiece(id) {
        const piece = this.local.pieces.find(item => item.getId() === id);
        if (!piece)
            throw new Error(`Piece with id '${id}' not found`);
        return piece;
    }
    __setState(obj) {
        const last = this.state;
        this.state = Object.assign({}, this.state, obj);
        this.onStateChange(this.state, last);
    }
    __setLocal(obj) {
        this.local = Object.assign({}, this.local, obj);
    }
}
exports.Editor = Editor;


/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const box_1 = __webpack_require__(464);
class GreenBox extends box_1.Box {
    getType() {
        return GreenBox.key;
    }
    getDefaultStyle() {
        return {
            fill: 'none',
            stroke: '#00ff00',
            strokeWidth: '2px'
        };
    }
}
GreenBox.key = 'greenBox';
exports.GreenBox = GreenBox;


/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const box_1 = __webpack_require__(464);
class PinkBox extends box_1.Box {
    getType() {
        return PinkBox.key;
    }
    getDefaultStyle() {
        return {
            fill: 'none',
            stroke: '#fe1492',
            strokeWidth: '2px'
        };
    }
}
PinkBox.key = 'pinkBox';
exports.PinkBox = PinkBox;


/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1033);
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

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, "body{padding:0;margin:0}.vision-editor{position:absolute;top:0;bottom:0;left:0;right:0}.vision-editor .editor-main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:calc(100% - 40px)}.vision-editor .editor-main .editor-toolbox{-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 10px;width:160px}.vision-editor .editor-main .editor-toolbox h3{margin:0 0 10px}.vision-editor .editor-main .editor-toolbox .tool-item{margin-bottom:10px}.vision-editor .editor-main .editor-toolbox .tool-item button,.vision-editor .editor-main .editor-toolbox .tool-item label{display:block}.vision-editor .editor-main .editor-toolbox .tool-item label{margin-bottom:5px}.vision-editor .editor-main .editor-toolbox .tool-item button{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:30px;border-radius:4px;font-weight:700;outline:none}.vision-editor .editor-main .editor-toolbox .tool-item button.green-button{background:lime}.vision-editor .editor-main .editor-toolbox .tool-item button.green-button.active{border:2px solid #090}.vision-editor .editor-main .editor-toolbox .tool-item button.pink-button{color:#fff;background:#fe1492}.vision-editor .editor-main .editor-toolbox .tool-item button.pink-button.active{border:2px solid #ab015d}.vision-editor .editor-main .editor-toolbox .relative-checkbox{margin-top:20px}.vision-editor .editor-main .editor-canvas-scroller{overflow:auto;width:calc(100% - 160px);height:100%}.vision-editor .editor-main .editor-canvas-scroller .editor-canvas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:100%;min-height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAABaWlrMzMz////nPAkwAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+IDGRUHMxeV5KYAAAAXSURBVAjXY1i16v9/BiKI//9XrSKCAABNyDUhZP4pqwAAAABJRU5ErkJggg==);background-repeat:repeat}.vision-editor .editor-main svg.with-tool{cursor:crosshair}.vision-editor .editor-main svg image{pointer-events:none}.vision-editor .editor-main svg .piece{cursor:move;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vision-editor .editor-main svg .anchor{fill:#fff;stroke:#000;stroke-width:2px}.vision-editor .editor-main svg .anchor.anchor-1,.vision-editor .editor-main svg .anchor.anchor-3{cursor:nwse-resize}.vision-editor .editor-main svg .anchor.anchor-2,.vision-editor .editor-main svg .anchor.anchor-4{cursor:nesw-resize}.vision-editor .editor-bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:40px}.vision-editor .editor-bottom .editor-actions button{margin-left:15px}", ""]);

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

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ts_utils_1 = __webpack_require__(18);
var BoxAnchorPosition;
(function (BoxAnchorPosition) {
    BoxAnchorPosition[BoxAnchorPosition["TopLeft"] = 1] = "TopLeft";
    BoxAnchorPosition[BoxAnchorPosition["TopRight"] = 2] = "TopRight";
    BoxAnchorPosition[BoxAnchorPosition["BottomRight"] = 3] = "BottomRight";
    BoxAnchorPosition[BoxAnchorPosition["BottomLeft"] = 4] = "BottomLeft";
})(BoxAnchorPosition = exports.BoxAnchorPosition || (exports.BoxAnchorPosition = {}));
exports.fitSquarePoint = (movingPoint, fixedPoint) => {
    const mp = movingPoint;
    const fp = fixedPoint;
    const xlen = Math.abs(mp.x - fp.x);
    const ylen = Math.abs(mp.y - fp.y);
    const len = Math.min(xlen, ylen);
    return {
        x: fp.x + Math.sign(mp.x - fp.x) * len,
        y: fp.y + Math.sign(mp.y - fp.y) * len
    };
};
exports.calcRectAndAnchor = (movingPoint, fixedPoint) => {
    const mp = movingPoint;
    const fp = fixedPoint;
    let pos = null;
    let tlp = null;
    if (mp.x <= fp.x && mp.y <= fp.y) {
        pos = BoxAnchorPosition.TopLeft;
        tlp = mp;
    }
    else if (mp.x > fp.x && mp.y > fp.y) {
        pos = BoxAnchorPosition.BottomRight;
        tlp = fp;
    }
    else if (mp.x > fp.x) {
        pos = BoxAnchorPosition.TopRight;
        tlp = { x: fp.x, y: mp.y };
    }
    else if (mp.y > fp.y) {
        pos = BoxAnchorPosition.BottomLeft;
        tlp = { x: mp.x, y: fp.y };
    }
    if (!tlp)
        throw new Error('Impossible tlp');
    if (!pos)
        throw new Error('Impossible pos');
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
exports.pointAtPos = (rect, pos) => {
    switch (pos) {
        case BoxAnchorPosition.TopLeft:
            return {
                x: rect.x,
                y: rect.y
            };
        case BoxAnchorPosition.TopRight:
            return {
                x: rect.x + rect.width,
                y: rect.y
            };
        case BoxAnchorPosition.BottomRight:
            return {
                x: rect.x + rect.width,
                y: rect.y + rect.height
            };
        case BoxAnchorPosition.BottomLeft:
            return {
                x: rect.x,
                y: rect.y + rect.height
            };
    }
};
exports.diagonalPos = (pos) => {
    switch (pos) {
        case BoxAnchorPosition.TopLeft:
            return BoxAnchorPosition.BottomRight;
        case BoxAnchorPosition.TopRight:
            return BoxAnchorPosition.BottomLeft;
        case BoxAnchorPosition.BottomRight:
            return BoxAnchorPosition.TopLeft;
        case BoxAnchorPosition.BottomLeft:
            return BoxAnchorPosition.TopRight;
    }
};
exports.diagonalPoint = (rect, anchorPos) => {
    return exports.pointAtPos(rect, exports.diagonalPos(anchorPos));
};
exports.genGetAnchorRects = (ANCHOR_POS, pointAtPos) => {
    return (options) => {
        const { rect, size = 5 } = options;
        const values = (obj) => Object.keys(obj).map(key => obj[key]);
        const createRect = (point, size) => ({
            x: point.x - size,
            y: point.y - size,
            width: size * 2,
            height: size * 2
        });
        return values(ANCHOR_POS).map(pos => {
            return {
                anchorPos: pos,
                rect: createRect(pointAtPos(rect, pos), size)
            };
        });
    };
};
exports.getAnchorRects = exports.genGetAnchorRects(ts_utils_1.objFilter((val) => typeof val === 'number', BoxAnchorPosition), exports.pointAtPos);
class Box {
    constructor(options) {
        this.state = {
            id: '' + Math.random(),
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
        const opts = Object.assign({
            transform: (x) => x,
            onStateChange: () => { }
        }, options);
        this.transform = opts.transform;
        this.onStateChange = opts.onStateChange;
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
        }, { silent: true });
    }
    getType() {
        return 'box';
    }
    getCategory() {
        return Box.category;
    }
    getDefaultAnchorPos() {
        return BoxAnchorPosition.BottomRight;
    }
    getDefaultStyle() {
        return {};
    }
    getId() {
        return this.state.id;
    }
    getState() {
        return this.transform(this.state);
    }
    getStyle() {
        return this.state.style;
    }
    processIncomingStyle(style) {
        return style;
    }
    setStyle(obj) {
        this.__setState({
            style: Object.assign({}, this.state.style, this.processIncomingStyle(obj))
        });
    }
    setData(data) {
        this.__setState({ data });
    }
    moveAnchorStart({ anchorPos }) {
        this.__setLocal({
            oldPoint: exports.pointAtPos(this.state.rect, anchorPos),
            oldAnchorPos: anchorPos,
            anchorPos: anchorPos
        });
    }
    moveAnchor(point, options = {}) {
        const old = this.state.rect;
        const pos = this.local.anchorPos;
        const fixed = exports.diagonalPoint(old, pos);
        const moving = !options.fit ? point : exports.fitSquarePoint(point, fixed);
        const res = exports.calcRectAndAnchor(moving, fixed);
        this.__setLocal({ anchorPos: res.anchorPos });
        this.__setState({ rect: res.rect });
    }
    moveAnchorEnd() {
        this.__setLocal({
            oldPoint: null,
            oldAnchorPos: null,
            anchorPos: null
        });
    }
    moveBoxStart() {
        this.__setLocal({
            oldRect: Object.assign({}, this.state.rect)
        });
    }
    moveBox({ dx, dy }) {
        const old = this.local.oldRect;
        this.__setState({
            rect: Object.assign({}, old, { x: old.x + dx, y: old.y + dy })
        });
    }
    moveBoxEnd() {
        this.__setLocal({
            oldRect: null
        });
    }
    __setState(obj, opts = {}) {
        const last = this.getState();
        this.state = Object.assign({}, this.state, obj);
        if (opts.silent)
            return;
        const fn = () => this.onStateChange(this.getState(), last);
        const invoke = opts.nextTick ? (fn) => setTimeout(fn, 0) : (fn) => fn();
        invoke(fn);
    }
    __setLocal(obj) {
        this.local = Object.assign({}, this.local, obj);
    }
}
// Note: possible settings
Box.settings = [];
Box.category = 'rect';
Box.key = 'box';
Box.defaultAnchorPos = BoxAnchorPosition.BottomRight;
exports.Box = Box;


/***/ })

/******/ });