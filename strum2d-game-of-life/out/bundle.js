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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/App.js":
/*!********************!*\
  !*** ./out/App.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _GameGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameGrid */ "./out/GameGrid.js");
/* harmony import */ var _ControlsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlsModal */ "./out/ControlsModal.js");
/// <reference path="../typings/strum-2d.d.ts" />
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.GRID_WIDTH = 100;
        _this.GRID_HEIGHT = 100;
        _this.autoSimulate = false;
        _this.autoSimTimeout = 50;
        _this.lastFrame = 0;
        _this.visible = true;
        _this.mutable = true;
        _this.overlay = false;
        Strum2d.Main.skipSplash = false;
        _this.last = performance.now();
        _this.controlsModal = new _ControlsModal__WEBPACK_IMPORTED_MODULE_1__["ControlsModal"]();
        _this.gameGrid = new _GameGrid__WEBPACK_IMPORTED_MODULE_0__["GameGrid"](_this.GRID_WIDTH, _this.GRID_HEIGHT);
        _this.handler = new Strum2d.Handler(Strum2d.Main.canvasBounds);
        _this.handler.getKeyHandler().keyDown = function (e) {
            // console.log(e.key);
            if (e.key.toLowerCase() == "enter") {
                _this.gameGrid.simulate();
                _this.updateGenInfo();
            }
            if (e.key.toLowerCase() == " ") {
                _this.autoSimulate = !_this.autoSimulate;
                console.log("AUTO SIMULATE: " + _this.autoSimulate);
            }
            if (e.key == ".") {
                _this.autoSimTimeout /= 1.5;
                _this.updateSpeedInfo();
                console.log("Increasing simulation speed. Curret timeout: " + _this.autoSimTimeout);
            }
            if (e.key == ",") {
                _this.autoSimTimeout *= 1.5;
                _this.updateSpeedInfo();
                console.log("Decreasing simulation speed. Curret timeout: " + _this.autoSimTimeout);
            }
            if (e.key.toLowerCase() == "r") {
                _this.regenerate();
            }
            if (e.key.toLowerCase() == "g") {
                _this.gameGrid.setDrawGrid(!_this.gameGrid.drawGrid);
            }
        };
        _this.handler.update = function () {
            if (_this.autoSimulate) {
                if (!Strum2d.Main.paused) {
                    var now = performance.now();
                    if (now - _this.last >= _this.autoSimTimeout) {
                        _this.last = now;
                        _this.gameGrid.simulate();
                        _this.updateGenInfo();
                    }
                }
            }
        };
        return _this;
    }
    App.prototype.centerCamera = function () {
        // zoom to fit ratio
        var margin = 800;
        var ratio = Math.min(Strum2d.Main.CANVAS_WIDTH / (this.gameGrid.gridTexture.width + margin), Strum2d.Main.CANVAS_HEIGHT / (this.gameGrid.gridTexture.height + margin));
        Strum2d.Main.camera.move(this.gameGrid.gridTexture.getCenter());
        Strum2d.Main.camera.setZoom(ratio);
    };
    App.prototype.regenerate = function () {
        this.GRID_WIDTH = parseInt(this.txtWidth.text);
        this.GRID_HEIGHT = parseInt(this.txtHeight.text);
        this.gameGrid.setGridSize(this.GRID_WIDTH, this.GRID_HEIGHT);
        this.gameGrid.generate();
        this.updateGenInfo();
    };
    App.prototype.updateGenInfo = function () {
        this.txtGenInfo.setText(this.gameGrid.getInfo());
    };
    App.prototype.updateSpeedInfo = function () {
        this.txtSpeedInfo.setText("SPS: " + (1000 / this.autoSimTimeout).toFixed(1));
    };
    /**
     * Called every time this scene is loaded
     */
    App.prototype.load = function () {
        this.gameGrid.setGridSize(this.GRID_WIDTH, this.GRID_HEIGHT);
        Strum2d.Main.camera.setFreeCamMode(true);
        this.centerCamera();
        this.gameGrid.generate();
    };
    /**
     * Called the first time this scene is loaded
     */
    App.prototype.initScene = function () {
        var _this = this;
        Strum2d.Main.addHandler(this.handler);
        // GUI
        var pnlControls = new Strum2d.Layout();
        pnlControls.setLayoutDirection(Strum2d.LayoutDirection.HORIZONTAL);
        pnlControls.setAlignItems(Strum2d.LayoutAlignment.CENTER);
        pnlControls.setShadowBlur(30);
        pnlControls.setFloat(Strum2d.LayoutFloat.TOP, Strum2d.LayoutFloat.CENTER_H);
        pnlControls.setMarginTop(12);
        pnlControls.setMarginBottom(12);
        pnlControls.setMarginLeft(20);
        pnlControls.setMarginRight(20);
        pnlControls.drawBackground = true;
        this.addUiElement(pnlControls);
        console.log(pnlControls);
        this.txtWidth = new Strum2d.InputField();
        this.txtWidth.setText(String(this.GRID_WIDTH));
        this.txtWidth.setLabel("width");
        this.txtWidth.setTextAlignment(Strum2d.TextAlignment.RIGHT_TO_LEFT);
        this.txtWidth.setBorderRadius(3);
        this.txtWidth.setShadowBlur(8, 0, 3);
        this.txtWidth.setFilter(/[0-9,\.]/);
        pnlControls.addComponent(this.txtWidth);
        this.txtHeight = new Strum2d.InputField();
        this.txtHeight.setText(String(this.GRID_HEIGHT));
        this.txtHeight.setLabel("height");
        this.txtHeight.setTextAlignment(Strum2d.TextAlignment.RIGHT_TO_LEFT);
        this.txtHeight.setBorderRadius(3);
        this.txtHeight.setShadowBlur(8, 0, 3);
        this.txtHeight.setFilter(/[0-9,\.]/);
        pnlControls.addComponent(this.txtHeight);
        var btnGenerate = new Strum2d.Button();
        btnGenerate.setText("GENERATE");
        btnGenerate.getMouseHandler().mouseLeftUp = function (p) {
            _this.regenerate();
            _this.centerCamera();
        };
        pnlControls.addComponent(btnGenerate);
        var btnControls = new Strum2d.Button();
        btnControls.setText("CONTROLS");
        btnControls.getMouseHandler().mouseLeftUp = function (p) {
            Strum2d.Main.requestScene(_this.controlsModal);
        };
        pnlControls.addComponent(btnControls);
        // BOTTOM PANEL
        var pnlInfo = new Strum2d.Layout();
        pnlInfo.setLayoutDirection(Strum2d.LayoutDirection.VERTICAL);
        pnlInfo.setAlignItems(Strum2d.LayoutAlignment.CENTER);
        pnlInfo.setFloat(Strum2d.LayoutFloat.BOTTOM, Strum2d.LayoutFloat.CENTER_H);
        pnlInfo.setMarginTop(12);
        pnlInfo.setMarginLeft(20);
        pnlInfo.setMarginRight(20);
        pnlInfo.setShadowBlur(30);
        pnlInfo.drawBackground = true;
        this.addUiElement(pnlInfo);
        // ROW 1
        var pnlRow1 = new Strum2d.Layout();
        pnlRow1.setLayoutDirection(Strum2d.LayoutDirection.HORIZONTAL);
        pnlRow1.setAlignItems(Strum2d.LayoutAlignment.CENTER);
        pnlRow1.setMarginTop(0);
        pnlRow1.setMarginBottom(0);
        pnlRow1.setMarginLeft(10);
        pnlRow1.setMarginRight(10);
        pnlInfo.addComponent(pnlRow1);
        var btnMinus = new Strum2d.Button();
        this.txtSpeedInfo = new Strum2d.Label();
        var btnPlus = new Strum2d.Button();
        btnMinus.setText("-");
        btnMinus.getMouseHandler().mouseLeftUp = function (p) {
            _this.autoSimTimeout *= 1.5;
            _this.updateSpeedInfo();
        };
        pnlRow1.addComponent(btnMinus);
        this.txtSpeedInfo.setTextColor("#CECECE");
        this.txtSpeedInfo.setFont(Strum2d.Font.ROBOTO_BOLD);
        this.updateSpeedInfo();
        pnlRow1.addComponent(this.txtSpeedInfo);
        console.log(this.txtSpeedInfo);
        btnPlus.setText("+");
        btnPlus.getMouseHandler().mouseLeftUp = function (p) {
            _this.autoSimTimeout /= 1.5;
            _this.updateSpeedInfo();
        };
        pnlRow1.addComponent(btnPlus);
        this.txtGenInfo = new Strum2d.Label();
        this.txtGenInfo.setFont(Strum2d.Font.ROBOTO_BOLD);
        this.txtGenInfo.setTextColor("#CECECE");
        this.updateGenInfo();
        pnlRow1.addComponent(this.txtGenInfo);
        var btnNext = new Strum2d.Button();
        btnNext.setText("NEXT");
        btnNext.getMouseHandler().mouseLeftUp = function (p) {
            _this.gameGrid.simulate();
            _this.updateGenInfo();
        };
        pnlRow1.addComponent(btnNext);
        var btnAuto = new Strum2d.Button();
        btnAuto.setText("AUTO");
        btnAuto.getMouseHandler().mouseLeftUp = function (p) {
            _this.autoSimulate = !_this.autoSimulate;
        };
        pnlRow1.addComponent(btnAuto);
        // ROW 2
        var pnlRow2 = new Strum2d.Layout();
        pnlRow2.setLayoutDirection(Strum2d.LayoutDirection.HORIZONTAL);
        pnlRow2.setAlignItems(Strum2d.LayoutAlignment.END);
        pnlRow2.setMarginTop(5);
        pnlRow2.setMarginBottom(5);
        pnlRow2.setMarginLeft(5);
        pnlRow2.setMarginRight(5);
        pnlInfo.addComponent(pnlRow2);
        var txtSPSExplanation = new Strum2d.Label("*SPS: simulations per second");
        txtSPSExplanation.setFontSize(11);
        txtSPSExplanation.setTextColor("#CECECE");
        txtSPSExplanation.setFont(Strum2d.Font.ROBOTO_REGULAR);
        pnlRow2.addComponent(txtSPSExplanation);
        console.log(txtSPSExplanation);
    };
    /**
     * Called on every tick while this scene is loaded
     */
    App.prototype.tick = function () { };
    return App;
}(Strum2d.Scene));

Strum2d.Main.requestScene(new App());


/***/ }),

/***/ "./out/Cell.js":
/*!*********************!*\
  !*** ./out/Cell.js ***!
  \*********************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/// <reference path="../typings/strum-2d.d.ts" />
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(x, y, size) {
        if (size === void 0) { size = 1; }
        var _this = _super.call(this) || this;
        _this.alive = false;
        _this.hasDied = false;
        _this.drawOutline = true;
        _this.size = size;
        _this.setWidth(size);
        _this.setHeight(size);
        _this.gridX = x;
        _this.gridY = y;
        _this.setX(x * _this.size);
        _this.setY(y * _this.size);
        _this.setSecondaryColor("#444444");
        return _this;
    }
    Cell.prototype.isAlive = function () {
        return this.alive;
    };
    Cell.prototype.setAlive = function (flag) {
        this.alive = flag;
        if (flag) {
            this.setPrimaryColor("#8bc34a");
        }
        else
            this.setPrimaryColor("#ffffff");
    };
    Cell.prototype.setHasDied = function (flag) {
        this.hasDied = flag;
        this.setPrimaryColor("#a6ecd6");
    };
    Cell.prototype.draw = function (g2) {
        g2.fillStyle = this.primaryColor;
        g2.strokeStyle = this.secondaryColor;
        g2.lineWidth = 1;
        g2.fillRect(this.x, this.y, this.width, this.height);
        if (this.drawOutline)
            g2.strokeRect(this.x, this.y, this.width, this.height);
    };
    Cell.prototype.tick = function () {
    };
    return Cell;
}(Strum2d.Component));



/***/ }),

/***/ "./out/CellEvent.js":
/*!**************************!*\
  !*** ./out/CellEvent.js ***!
  \**************************/
/*! exports provided: CellEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellEvent", function() { return CellEvent; });
var CellEvent = /** @class */ (function () {
    function CellEvent(eventType, subject) {
        this.eventType = eventType;
        this.subject = subject;
    }
    CellEvent.KILL = 0x0;
    CellEvent.RESURRECT = 0x1;
    return CellEvent;
}());



/***/ }),

/***/ "./out/ControlsModal.js":
/*!******************************!*\
  !*** ./out/ControlsModal.js ***!
  \******************************/
/*! exports provided: ControlsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsModal", function() { return ControlsModal; });
/// <reference path="../typings/strum-2d.d.ts" />
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ControlsModal = /** @class */ (function (_super) {
    __extends(ControlsModal, _super);
    function ControlsModal() {
        var _this = _super.call(this) || this;
        _this.overlay = true;
        _this.mutable = true;
        _this.visible = true;
        return _this;
    }
    ControlsModal.prototype.initScene = function () {
        var _this = this;
        var backdrop = new Strum2d.Panel(Strum2d.Main.CANVAS_WIDTH, Strum2d.Main.CANVAS_HEIGHT);
        backdrop.z = 9000;
        backdrop.setOpacity(0.6);
        backdrop.setPrimaryColor("#000000");
        Strum2d.Main.canvasBounds.addTransformListener(function () {
            backdrop.setWidth(Strum2d.Main.canvasBounds.width);
            backdrop.setHeight(Strum2d.Main.canvasBounds.height);
        });
        this.addUiElement(backdrop);
        var lt1 = new Strum2d.Layout();
        lt1.z = backdrop.z + 1;
        lt1.setFloat(Strum2d.LayoutFloat.CENTER_H, Strum2d.LayoutFloat.CENTER_V);
        lt1.setLayoutDirection(Strum2d.LayoutDirection.VERTICAL);
        lt1.setAlignItems(Strum2d.LayoutAlignment.CENTER);
        lt1.drawBackground = true;
        lt1.setShadowBlur(36);
        lt1.setMargin(20);
        this.addUiElement(lt1);
        var txtTitle = new Strum2d.Label("Controls");
        txtTitle.setFont(Strum2d.Font.ROBOTO_BOLD, 36);
        txtTitle.setTextColor("#fefefe");
        lt1.addComponent(txtTitle);
        var txtInfo = new Strum2d.TextArea();
        txtInfo.setFont(Strum2d.Font.SOURCE_CODE_PRO, 16);
        txtInfo.setLineHeight(1.3);
        txtInfo.setTextColor("#fefefe");
        txtInfo.setText("{Enter}: Proceed one step in the simulation. \n"
            + "{Space}: Automatically proceed in the simulation. \n"
            + "{,}: Decrease SPS. \n"
            + "{.}: Increase SPS. \n"
            + "{g}: Toggle grid. \n"
            + "{w}{a}{s}{d}: Control the camera. \n"
            + "{Ctrl}+{mouse wheel}: Control camera zoom. \n"
            + "{-}{+}: Control camera zoom. \n");
        lt1.addComponent(txtInfo);
        console.log(txtInfo);
        var btnClose = new Strum2d.Button();
        btnClose.setText("CLOSE");
        btnClose.getMouseHandler().mouseLeftUp = function () {
            // Dispose scene
            _this.dispose();
        };
        lt1.addComponent(btnClose);
    };
    ControlsModal.prototype.load = function () {
    };
    ControlsModal.prototype.tick = function () {
    };
    return ControlsModal;
}(Strum2d.Scene));



/***/ }),

/***/ "./out/GameGrid.js":
/*!*************************!*\
  !*** ./out/GameGrid.js ***!
  \*************************/
/*! exports provided: GameGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameGrid", function() { return GameGrid; });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./out/Cell.js");
/* harmony import */ var _CellEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellEvent */ "./out/CellEvent.js");
/// <reference path="../typings/strum-2d.d.ts" />


var GameGrid = /** @class */ (function () {
    function GameGrid(width, height) {
        this.SPAWN_RATE = 1 / 10.0;
        this.generation = 0;
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.cellList = [[]];
        this.cellCount = 0;
        this.cellSize = 0;
        this.drawGrid = true;
        this.setGridSize(width, height);
        this.gridTexture = new Strum2d.Texture(this.gridWidth * this.cellSize, this.gridHeight * this.cellSize);
        this.gridTexture.setShadowBlur(60);
        Strum2d.Main.addEntity(this.gridTexture);
        console.log(this.gridTexture);
    }
    GameGrid.prototype.setGridSize = function (width, height) {
        this.gridWidth = width;
        this.gridHeight = height;
        this.cellCount = width * height;
        this.cellSize = Strum2d.Main.CANVAS_HEIGHT / this.gridHeight * 4;
        console.log("CANVAS_HEIGHT: " + Strum2d.Main.CANVAS_HEIGHT + ", GRID HEIGHT: " + this.gridHeight);
        console.log("CELL SIZE: " + this.cellSize);
        if (this.gridTexture) {
            this.gridTexture.setWidth(this.gridWidth * this.cellSize);
            this.gridTexture.setHeight(this.gridHeight * this.cellSize);
        }
    };
    GameGrid.prototype.setDrawGrid = function (flag) {
        this.drawGrid = flag;
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var cell = row_1[_b];
                cell.drawOutline = flag;
            }
        }
        this.redrawTexture();
    };
    GameGrid.prototype.redrawTexture = function () {
        this.gridTexture.clear();
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_2 = row; _b < row_2.length; _b++) {
                var cell = row_2[_b];
                cell.draw(this.gridTexture.g2);
            }
        }
    };
    GameGrid.prototype.generate = function () {
        // init array
        this.cellList = [];
        for (var i = 0; i < this.gridWidth; i++) {
            this.cellList[i] = [];
        }
        for (var y = 0; y < this.gridHeight; y++) {
            for (var x = 0; x < this.gridWidth; x++) {
                var cell = new _Cell__WEBPACK_IMPORTED_MODULE_0__["Cell"](x, y, this.cellSize);
                cell.setAlive(Math.random() < this.SPAWN_RATE);
                cell.drawOutline = this.drawGrid;
                this.cellList[x][y] = cell;
                // Strum2d.Main.addEntity(cell);
            }
        }
        this.redrawTexture();
        this.generation = 1;
        console.log(this.getInfo());
    };
    GameGrid.prototype.simulate = function () {
        var pendingEvents = [];
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_3 = row; _b < row_3.length; _b++) {
                var cell = row_3[_b];
                var liveNeighbours = this.getLiveNeighbours(cell).length;
                if (cell.isAlive()) {
                    if (!(2 <= liveNeighbours && liveNeighbours <= 3)) {
                        pendingEvents.push(new _CellEvent__WEBPACK_IMPORTED_MODULE_1__["CellEvent"](_CellEvent__WEBPACK_IMPORTED_MODULE_1__["CellEvent"].KILL, cell));
                    }
                }
                else {
                    if (liveNeighbours == 3) {
                        pendingEvents.push(new _CellEvent__WEBPACK_IMPORTED_MODULE_1__["CellEvent"](_CellEvent__WEBPACK_IMPORTED_MODULE_1__["CellEvent"].RESURRECT, cell));
                    }
                }
            }
        }
        for (var _c = 0, pendingEvents_1 = pendingEvents; _c < pendingEvents_1.length; _c++) {
            var event_1 = pendingEvents_1[_c];
            if (event_1.eventType == _CellEvent__WEBPACK_IMPORTED_MODULE_1__["CellEvent"].KILL) {
                event_1.subject.setAlive(false);
                event_1.subject.setHasDied(true);
            }
            else if (event_1.eventType == _CellEvent__WEBPACK_IMPORTED_MODULE_1__["CellEvent"].RESURRECT) {
                event_1.subject.setAlive(true);
            }
        }
        this.redrawTexture();
        this.generation++;
        console.log(this.getInfo());
    };
    GameGrid.prototype.getLiveNeighbours = function (cell) {
        var result = [];
        for (var y = cell.gridY - 1; y <= cell.gridY + 1; y++) {
            for (var x = cell.gridX - 1; x <= cell.gridX + 1; x++) {
                if (x >= 0 && y >= 0 &&
                    x <= this.gridWidth - 1 && y <= this.gridHeight - 1 &&
                    this.cellList[x][y].id != cell.id &&
                    this.cellList[x][y].isAlive()) {
                    result.push(this.cellList[x][y]);
                }
            }
        }
        return result;
    };
    GameGrid.prototype.getInfo = function () {
        return "GENERATION: " + this.generation + " - LIVE CELLS: " + this.numLiveCells() + " of " + this.cellCount;
    };
    GameGrid.prototype.numLiveCells = function () {
        var sum = 0;
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
                var cell = list_1[_b];
                sum += cell.isAlive() ? 1 : 0;
            }
        }
        return sum;
    };
    return GameGrid;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vb3V0L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9vdXQvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9vdXQvQ2VsbEV2ZW50LmpzIiwid2VicGFjazovLy8uL291dC9Db250cm9sc01vZGFsLmpzIiwid2VicGFjazovLy8uL291dC9HYW1lR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNERBQWE7QUFDL0MsNkJBQTZCLGtEQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsQ0FBQztBQUNjO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7QUN4T0E7QUFBQTtBQUFBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZTs7Ozs7Ozs7Ozs7OztBQzNEaEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29COzs7Ozs7Ozs7Ozs7O0FDVHJCO0FBQUE7QUFBQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDLGdCQUFnQixNQUFNO0FBQ3RCLGdCQUFnQixFQUFFO0FBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQzNCLGdCQUFnQixLQUFLLEVBQUUsWUFBWTtBQUNuQyxnQkFBZ0IsR0FBRyxFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDd0I7Ozs7Ozs7Ozs7Ozs7QUMzRXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOEI7QUFDVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0EseUNBQXlDLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUMsMkJBQTJCLG9CQUFvQjtBQUMvQywrQkFBK0IsMENBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msb0RBQVMsQ0FBQyxvREFBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxvREFBUyxDQUFDLG9EQUFTO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDZCQUE2QjtBQUN0RjtBQUNBLHFDQUFxQyxvREFBUztBQUM5QztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RCx3Q0FBd0MscUJBQXFCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQSwyQ0FBMkMsb0JBQW9CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNtQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL291dC9BcHAuanNcIik7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9zdHJ1bS0yZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBHYW1lR3JpZCB9IGZyb20gXCIuL0dhbWVHcmlkXCI7XG5pbXBvcnQgeyBDb250cm9sc01vZGFsIH0gZnJvbSBcIi4vQ29udHJvbHNNb2RhbFwiO1xudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuR1JJRF9XSURUSCA9IDEwMDtcbiAgICAgICAgX3RoaXMuR1JJRF9IRUlHSFQgPSAxMDA7XG4gICAgICAgIF90aGlzLmF1dG9TaW11bGF0ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hdXRvU2ltVGltZW91dCA9IDUwO1xuICAgICAgICBfdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgICAgICBfdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMubXV0YWJsZSA9IHRydWU7XG4gICAgICAgIF90aGlzLm92ZXJsYXkgPSBmYWxzZTtcbiAgICAgICAgU3RydW0yZC5NYWluLnNraXBTcGxhc2ggPSBmYWxzZTtcbiAgICAgICAgX3RoaXMubGFzdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBfdGhpcy5jb250cm9sc01vZGFsID0gbmV3IENvbnRyb2xzTW9kYWwoKTtcbiAgICAgICAgX3RoaXMuZ2FtZUdyaWQgPSBuZXcgR2FtZUdyaWQoX3RoaXMuR1JJRF9XSURUSCwgX3RoaXMuR1JJRF9IRUlHSFQpO1xuICAgICAgICBfdGhpcy5oYW5kbGVyID0gbmV3IFN0cnVtMmQuSGFuZGxlcihTdHJ1bTJkLk1haW4uY2FudmFzQm91bmRzKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlci5nZXRLZXlIYW5kbGVyKCkua2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSk7XG4gICAgICAgICAgICBpZiAoZS5rZXkudG9Mb3dlckNhc2UoKSA9PSBcImVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nYW1lR3JpZC5zaW11bGF0ZSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUdlbkluZm8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleS50b0xvd2VyQ2FzZSgpID09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXV0b1NpbXVsYXRlID0gIV90aGlzLmF1dG9TaW11bGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFVVE8gU0lNVUxBVEU6IFwiICsgX3RoaXMuYXV0b1NpbXVsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIi5cIikge1xuICAgICAgICAgICAgICAgIF90aGlzLmF1dG9TaW1UaW1lb3V0IC89IDEuNTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTcGVlZEluZm8oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluY3JlYXNpbmcgc2ltdWxhdGlvbiBzcGVlZC4gQ3VycmV0IHRpbWVvdXQ6IFwiICsgX3RoaXMuYXV0b1NpbVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXV0b1NpbVRpbWVvdXQgKj0gMS41O1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVNwZWVkSW5mbygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVjcmVhc2luZyBzaW11bGF0aW9uIHNwZWVkLiBDdXJyZXQgdGltZW91dDogXCIgKyBfdGhpcy5hdXRvU2ltVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkudG9Mb3dlckNhc2UoKSA9PSBcInJcIikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlZ2VuZXJhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleS50b0xvd2VyQ2FzZSgpID09IFwiZ1wiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2FtZUdyaWQuc2V0RHJhd0dyaWQoIV90aGlzLmdhbWVHcmlkLmRyYXdHcmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlci51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuYXV0b1NpbXVsYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFTdHJ1bTJkLk1haW4ucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyAtIF90aGlzLmxhc3QgPj0gX3RoaXMuYXV0b1NpbVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3QgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nYW1lR3JpZC5zaW11bGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlR2VuSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFwcC5wcm90b3R5cGUuY2VudGVyQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB6b29tIHRvIGZpdCByYXRpb1xuICAgICAgICB2YXIgbWFyZ2luID0gODAwO1xuICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLm1pbihTdHJ1bTJkLk1haW4uQ0FOVkFTX1dJRFRIIC8gKHRoaXMuZ2FtZUdyaWQuZ3JpZFRleHR1cmUud2lkdGggKyBtYXJnaW4pLCBTdHJ1bTJkLk1haW4uQ0FOVkFTX0hFSUdIVCAvICh0aGlzLmdhbWVHcmlkLmdyaWRUZXh0dXJlLmhlaWdodCArIG1hcmdpbikpO1xuICAgICAgICBTdHJ1bTJkLk1haW4uY2FtZXJhLm1vdmUodGhpcy5nYW1lR3JpZC5ncmlkVGV4dHVyZS5nZXRDZW50ZXIoKSk7XG4gICAgICAgIFN0cnVtMmQuTWFpbi5jYW1lcmEuc2V0Wm9vbShyYXRpbyk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLnJlZ2VuZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuR1JJRF9XSURUSCA9IHBhcnNlSW50KHRoaXMudHh0V2lkdGgudGV4dCk7XG4gICAgICAgIHRoaXMuR1JJRF9IRUlHSFQgPSBwYXJzZUludCh0aGlzLnR4dEhlaWdodC50ZXh0KTtcbiAgICAgICAgdGhpcy5nYW1lR3JpZC5zZXRHcmlkU2l6ZSh0aGlzLkdSSURfV0lEVEgsIHRoaXMuR1JJRF9IRUlHSFQpO1xuICAgICAgICB0aGlzLmdhbWVHcmlkLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR2VuSW5mbygpO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS51cGRhdGVHZW5JbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnR4dEdlbkluZm8uc2V0VGV4dCh0aGlzLmdhbWVHcmlkLmdldEluZm8oKSk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLnVwZGF0ZVNwZWVkSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50eHRTcGVlZEluZm8uc2V0VGV4dChcIlNQUzogXCIgKyAoMTAwMCAvIHRoaXMuYXV0b1NpbVRpbWVvdXQpLnRvRml4ZWQoMSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHRpbWUgdGhpcyBzY2VuZSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBBcHAucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUdyaWQuc2V0R3JpZFNpemUodGhpcy5HUklEX1dJRFRILCB0aGlzLkdSSURfSEVJR0hUKTtcbiAgICAgICAgU3RydW0yZC5NYWluLmNhbWVyYS5zZXRGcmVlQ2FtTW9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5jZW50ZXJDYW1lcmEoKTtcbiAgICAgICAgdGhpcy5nYW1lR3JpZC5nZW5lcmF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHRoZSBmaXJzdCB0aW1lIHRoaXMgc2NlbmUgaXMgbG9hZGVkXG4gICAgICovXG4gICAgQXBwLnByb3RvdHlwZS5pbml0U2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIFN0cnVtMmQuTWFpbi5hZGRIYW5kbGVyKHRoaXMuaGFuZGxlcik7XG4gICAgICAgIC8vIEdVSVxuICAgICAgICB2YXIgcG5sQ29udHJvbHMgPSBuZXcgU3RydW0yZC5MYXlvdXQoKTtcbiAgICAgICAgcG5sQ29udHJvbHMuc2V0TGF5b3V0RGlyZWN0aW9uKFN0cnVtMmQuTGF5b3V0RGlyZWN0aW9uLkhPUklaT05UQUwpO1xuICAgICAgICBwbmxDb250cm9scy5zZXRBbGlnbkl0ZW1zKFN0cnVtMmQuTGF5b3V0QWxpZ25tZW50LkNFTlRFUik7XG4gICAgICAgIHBubENvbnRyb2xzLnNldFNoYWRvd0JsdXIoMzApO1xuICAgICAgICBwbmxDb250cm9scy5zZXRGbG9hdChTdHJ1bTJkLkxheW91dEZsb2F0LlRPUCwgU3RydW0yZC5MYXlvdXRGbG9hdC5DRU5URVJfSCk7XG4gICAgICAgIHBubENvbnRyb2xzLnNldE1hcmdpblRvcCgxMik7XG4gICAgICAgIHBubENvbnRyb2xzLnNldE1hcmdpbkJvdHRvbSgxMik7XG4gICAgICAgIHBubENvbnRyb2xzLnNldE1hcmdpbkxlZnQoMjApO1xuICAgICAgICBwbmxDb250cm9scy5zZXRNYXJnaW5SaWdodCgyMCk7XG4gICAgICAgIHBubENvbnRyb2xzLmRyYXdCYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRVaUVsZW1lbnQocG5sQ29udHJvbHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbmxDb250cm9scyk7XG4gICAgICAgIHRoaXMudHh0V2lkdGggPSBuZXcgU3RydW0yZC5JbnB1dEZpZWxkKCk7XG4gICAgICAgIHRoaXMudHh0V2lkdGguc2V0VGV4dChTdHJpbmcodGhpcy5HUklEX1dJRFRIKSk7XG4gICAgICAgIHRoaXMudHh0V2lkdGguc2V0TGFiZWwoXCJ3aWR0aFwiKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aC5zZXRUZXh0QWxpZ25tZW50KFN0cnVtMmQuVGV4dEFsaWdubWVudC5SSUdIVF9UT19MRUZUKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aC5zZXRCb3JkZXJSYWRpdXMoMyk7XG4gICAgICAgIHRoaXMudHh0V2lkdGguc2V0U2hhZG93Qmx1cig4LCAwLCAzKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aC5zZXRGaWx0ZXIoL1swLTksXFwuXS8pO1xuICAgICAgICBwbmxDb250cm9scy5hZGRDb21wb25lbnQodGhpcy50eHRXaWR0aCk7XG4gICAgICAgIHRoaXMudHh0SGVpZ2h0ID0gbmV3IFN0cnVtMmQuSW5wdXRGaWVsZCgpO1xuICAgICAgICB0aGlzLnR4dEhlaWdodC5zZXRUZXh0KFN0cmluZyh0aGlzLkdSSURfSEVJR0hUKSk7XG4gICAgICAgIHRoaXMudHh0SGVpZ2h0LnNldExhYmVsKFwiaGVpZ2h0XCIpO1xuICAgICAgICB0aGlzLnR4dEhlaWdodC5zZXRUZXh0QWxpZ25tZW50KFN0cnVtMmQuVGV4dEFsaWdubWVudC5SSUdIVF9UT19MRUZUKTtcbiAgICAgICAgdGhpcy50eHRIZWlnaHQuc2V0Qm9yZGVyUmFkaXVzKDMpO1xuICAgICAgICB0aGlzLnR4dEhlaWdodC5zZXRTaGFkb3dCbHVyKDgsIDAsIDMpO1xuICAgICAgICB0aGlzLnR4dEhlaWdodC5zZXRGaWx0ZXIoL1swLTksXFwuXS8pO1xuICAgICAgICBwbmxDb250cm9scy5hZGRDb21wb25lbnQodGhpcy50eHRIZWlnaHQpO1xuICAgICAgICB2YXIgYnRuR2VuZXJhdGUgPSBuZXcgU3RydW0yZC5CdXR0b24oKTtcbiAgICAgICAgYnRuR2VuZXJhdGUuc2V0VGV4dChcIkdFTkVSQVRFXCIpO1xuICAgICAgICBidG5HZW5lcmF0ZS5nZXRNb3VzZUhhbmRsZXIoKS5tb3VzZUxlZnRVcCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWdlbmVyYXRlKCk7XG4gICAgICAgICAgICBfdGhpcy5jZW50ZXJDYW1lcmEoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcG5sQ29udHJvbHMuYWRkQ29tcG9uZW50KGJ0bkdlbmVyYXRlKTtcbiAgICAgICAgdmFyIGJ0bkNvbnRyb2xzID0gbmV3IFN0cnVtMmQuQnV0dG9uKCk7XG4gICAgICAgIGJ0bkNvbnRyb2xzLnNldFRleHQoXCJDT05UUk9MU1wiKTtcbiAgICAgICAgYnRuQ29udHJvbHMuZ2V0TW91c2VIYW5kbGVyKCkubW91c2VMZWZ0VXAgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgU3RydW0yZC5NYWluLnJlcXVlc3RTY2VuZShfdGhpcy5jb250cm9sc01vZGFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgcG5sQ29udHJvbHMuYWRkQ29tcG9uZW50KGJ0bkNvbnRyb2xzKTtcbiAgICAgICAgLy8gQk9UVE9NIFBBTkVMXG4gICAgICAgIHZhciBwbmxJbmZvID0gbmV3IFN0cnVtMmQuTGF5b3V0KCk7XG4gICAgICAgIHBubEluZm8uc2V0TGF5b3V0RGlyZWN0aW9uKFN0cnVtMmQuTGF5b3V0RGlyZWN0aW9uLlZFUlRJQ0FMKTtcbiAgICAgICAgcG5sSW5mby5zZXRBbGlnbkl0ZW1zKFN0cnVtMmQuTGF5b3V0QWxpZ25tZW50LkNFTlRFUik7XG4gICAgICAgIHBubEluZm8uc2V0RmxvYXQoU3RydW0yZC5MYXlvdXRGbG9hdC5CT1RUT00sIFN0cnVtMmQuTGF5b3V0RmxvYXQuQ0VOVEVSX0gpO1xuICAgICAgICBwbmxJbmZvLnNldE1hcmdpblRvcCgxMik7XG4gICAgICAgIHBubEluZm8uc2V0TWFyZ2luTGVmdCgyMCk7XG4gICAgICAgIHBubEluZm8uc2V0TWFyZ2luUmlnaHQoMjApO1xuICAgICAgICBwbmxJbmZvLnNldFNoYWRvd0JsdXIoMzApO1xuICAgICAgICBwbmxJbmZvLmRyYXdCYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRVaUVsZW1lbnQocG5sSW5mbyk7XG4gICAgICAgIC8vIFJPVyAxXG4gICAgICAgIHZhciBwbmxSb3cxID0gbmV3IFN0cnVtMmQuTGF5b3V0KCk7XG4gICAgICAgIHBubFJvdzEuc2V0TGF5b3V0RGlyZWN0aW9uKFN0cnVtMmQuTGF5b3V0RGlyZWN0aW9uLkhPUklaT05UQUwpO1xuICAgICAgICBwbmxSb3cxLnNldEFsaWduSXRlbXMoU3RydW0yZC5MYXlvdXRBbGlnbm1lbnQuQ0VOVEVSKTtcbiAgICAgICAgcG5sUm93MS5zZXRNYXJnaW5Ub3AoMCk7XG4gICAgICAgIHBubFJvdzEuc2V0TWFyZ2luQm90dG9tKDApO1xuICAgICAgICBwbmxSb3cxLnNldE1hcmdpbkxlZnQoMTApO1xuICAgICAgICBwbmxSb3cxLnNldE1hcmdpblJpZ2h0KDEwKTtcbiAgICAgICAgcG5sSW5mby5hZGRDb21wb25lbnQocG5sUm93MSk7XG4gICAgICAgIHZhciBidG5NaW51cyA9IG5ldyBTdHJ1bTJkLkJ1dHRvbigpO1xuICAgICAgICB0aGlzLnR4dFNwZWVkSW5mbyA9IG5ldyBTdHJ1bTJkLkxhYmVsKCk7XG4gICAgICAgIHZhciBidG5QbHVzID0gbmV3IFN0cnVtMmQuQnV0dG9uKCk7XG4gICAgICAgIGJ0bk1pbnVzLnNldFRleHQoXCItXCIpO1xuICAgICAgICBidG5NaW51cy5nZXRNb3VzZUhhbmRsZXIoKS5tb3VzZUxlZnRVcCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBfdGhpcy5hdXRvU2ltVGltZW91dCAqPSAxLjU7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVTcGVlZEluZm8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcG5sUm93MS5hZGRDb21wb25lbnQoYnRuTWludXMpO1xuICAgICAgICB0aGlzLnR4dFNwZWVkSW5mby5zZXRUZXh0Q29sb3IoXCIjQ0VDRUNFXCIpO1xuICAgICAgICB0aGlzLnR4dFNwZWVkSW5mby5zZXRGb250KFN0cnVtMmQuRm9udC5ST0JPVE9fQk9MRCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3BlZWRJbmZvKCk7XG4gICAgICAgIHBubFJvdzEuYWRkQ29tcG9uZW50KHRoaXMudHh0U3BlZWRJbmZvKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50eHRTcGVlZEluZm8pO1xuICAgICAgICBidG5QbHVzLnNldFRleHQoXCIrXCIpO1xuICAgICAgICBidG5QbHVzLmdldE1vdXNlSGFuZGxlcigpLm1vdXNlTGVmdFVwID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIF90aGlzLmF1dG9TaW1UaW1lb3V0IC89IDEuNTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVNwZWVkSW5mbygpO1xuICAgICAgICB9O1xuICAgICAgICBwbmxSb3cxLmFkZENvbXBvbmVudChidG5QbHVzKTtcbiAgICAgICAgdGhpcy50eHRHZW5JbmZvID0gbmV3IFN0cnVtMmQuTGFiZWwoKTtcbiAgICAgICAgdGhpcy50eHRHZW5JbmZvLnNldEZvbnQoU3RydW0yZC5Gb250LlJPQk9UT19CT0xEKTtcbiAgICAgICAgdGhpcy50eHRHZW5JbmZvLnNldFRleHRDb2xvcihcIiNDRUNFQ0VcIik7XG4gICAgICAgIHRoaXMudXBkYXRlR2VuSW5mbygpO1xuICAgICAgICBwbmxSb3cxLmFkZENvbXBvbmVudCh0aGlzLnR4dEdlbkluZm8pO1xuICAgICAgICB2YXIgYnRuTmV4dCA9IG5ldyBTdHJ1bTJkLkJ1dHRvbigpO1xuICAgICAgICBidG5OZXh0LnNldFRleHQoXCJORVhUXCIpO1xuICAgICAgICBidG5OZXh0LmdldE1vdXNlSGFuZGxlcigpLm1vdXNlTGVmdFVwID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIF90aGlzLmdhbWVHcmlkLnNpbXVsYXRlKCk7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVHZW5JbmZvKCk7XG4gICAgICAgIH07XG4gICAgICAgIHBubFJvdzEuYWRkQ29tcG9uZW50KGJ0bk5leHQpO1xuICAgICAgICB2YXIgYnRuQXV0byA9IG5ldyBTdHJ1bTJkLkJ1dHRvbigpO1xuICAgICAgICBidG5BdXRvLnNldFRleHQoXCJBVVRPXCIpO1xuICAgICAgICBidG5BdXRvLmdldE1vdXNlSGFuZGxlcigpLm1vdXNlTGVmdFVwID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIF90aGlzLmF1dG9TaW11bGF0ZSA9ICFfdGhpcy5hdXRvU2ltdWxhdGU7XG4gICAgICAgIH07XG4gICAgICAgIHBubFJvdzEuYWRkQ29tcG9uZW50KGJ0bkF1dG8pO1xuICAgICAgICAvLyBST1cgMlxuICAgICAgICB2YXIgcG5sUm93MiA9IG5ldyBTdHJ1bTJkLkxheW91dCgpO1xuICAgICAgICBwbmxSb3cyLnNldExheW91dERpcmVjdGlvbihTdHJ1bTJkLkxheW91dERpcmVjdGlvbi5IT1JJWk9OVEFMKTtcbiAgICAgICAgcG5sUm93Mi5zZXRBbGlnbkl0ZW1zKFN0cnVtMmQuTGF5b3V0QWxpZ25tZW50LkVORCk7XG4gICAgICAgIHBubFJvdzIuc2V0TWFyZ2luVG9wKDUpO1xuICAgICAgICBwbmxSb3cyLnNldE1hcmdpbkJvdHRvbSg1KTtcbiAgICAgICAgcG5sUm93Mi5zZXRNYXJnaW5MZWZ0KDUpO1xuICAgICAgICBwbmxSb3cyLnNldE1hcmdpblJpZ2h0KDUpO1xuICAgICAgICBwbmxJbmZvLmFkZENvbXBvbmVudChwbmxSb3cyKTtcbiAgICAgICAgdmFyIHR4dFNQU0V4cGxhbmF0aW9uID0gbmV3IFN0cnVtMmQuTGFiZWwoXCIqU1BTOiBzaW11bGF0aW9ucyBwZXIgc2Vjb25kXCIpO1xuICAgICAgICB0eHRTUFNFeHBsYW5hdGlvbi5zZXRGb250U2l6ZSgxMSk7XG4gICAgICAgIHR4dFNQU0V4cGxhbmF0aW9uLnNldFRleHRDb2xvcihcIiNDRUNFQ0VcIik7XG4gICAgICAgIHR4dFNQU0V4cGxhbmF0aW9uLnNldEZvbnQoU3RydW0yZC5Gb250LlJPQk9UT19SRUdVTEFSKTtcbiAgICAgICAgcG5sUm93Mi5hZGRDb21wb25lbnQodHh0U1BTRXhwbGFuYXRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyh0eHRTUFNFeHBsYW5hdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gZXZlcnkgdGljayB3aGlsZSB0aGlzIHNjZW5lIGlzIGxvYWRlZFxuICAgICAqL1xuICAgIEFwcC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICByZXR1cm4gQXBwO1xufShTdHJ1bTJkLlNjZW5lKSk7XG5leHBvcnQgeyBBcHAgfTtcblN0cnVtMmQuTWFpbi5yZXF1ZXN0U2NlbmUobmV3IEFwcCgpKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3N0cnVtLTJkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBDZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDZWxsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENlbGwoeCwgeSwgc2l6ZSkge1xuICAgICAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSAxOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFsaXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0RpZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuZHJhd091dGxpbmUgPSB0cnVlO1xuICAgICAgICBfdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgX3RoaXMuc2V0V2lkdGgoc2l6ZSk7XG4gICAgICAgIF90aGlzLnNldEhlaWdodChzaXplKTtcbiAgICAgICAgX3RoaXMuZ3JpZFggPSB4O1xuICAgICAgICBfdGhpcy5ncmlkWSA9IHk7XG4gICAgICAgIF90aGlzLnNldFgoeCAqIF90aGlzLnNpemUpO1xuICAgICAgICBfdGhpcy5zZXRZKHkgKiBfdGhpcy5zaXplKTtcbiAgICAgICAgX3RoaXMuc2V0U2Vjb25kYXJ5Q29sb3IoXCIjNDQ0NDQ0XCIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENlbGwucHJvdG90eXBlLmlzQWxpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsaXZlO1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUuc2V0QWxpdmUgPSBmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICB0aGlzLmFsaXZlID0gZmxhZztcbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUNvbG9yKFwiIzhiYzM0YVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlDb2xvcihcIiNmZmZmZmZcIik7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5zZXRIYXNEaWVkID0gZnVuY3Rpb24gKGZsYWcpIHtcbiAgICAgICAgdGhpcy5oYXNEaWVkID0gZmxhZztcbiAgICAgICAgdGhpcy5zZXRQcmltYXJ5Q29sb3IoXCIjYTZlY2Q2XCIpO1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChnMikge1xuICAgICAgICBnMi5maWxsU3R5bGUgPSB0aGlzLnByaW1hcnlDb2xvcjtcbiAgICAgICAgZzIuc3Ryb2tlU3R5bGUgPSB0aGlzLnNlY29uZGFyeUNvbG9yO1xuICAgICAgICBnMi5saW5lV2lkdGggPSAxO1xuICAgICAgICBnMi5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5kcmF3T3V0bGluZSlcbiAgICAgICAgICAgIGcyLnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIENlbGwucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQ2VsbDtcbn0oU3RydW0yZC5Db21wb25lbnQpKTtcbmV4cG9ydCB7IENlbGwgfTtcbiIsInZhciBDZWxsRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2VsbEV2ZW50KGV2ZW50VHlwZSwgc3ViamVjdCkge1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICB9XG4gICAgQ2VsbEV2ZW50LktJTEwgPSAweDA7XG4gICAgQ2VsbEV2ZW50LlJFU1VSUkVDVCA9IDB4MTtcbiAgICByZXR1cm4gQ2VsbEV2ZW50O1xufSgpKTtcbmV4cG9ydCB7IENlbGxFdmVudCB9O1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mvc3RydW0tMmQuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIENvbnRyb2xzTW9kYWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xzTW9kYWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbHNNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3ZlcmxheSA9IHRydWU7XG4gICAgICAgIF90aGlzLm11dGFibGUgPSB0cnVlO1xuICAgICAgICBfdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb250cm9sc01vZGFsLnByb3RvdHlwZS5pbml0U2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBiYWNrZHJvcCA9IG5ldyBTdHJ1bTJkLlBhbmVsKFN0cnVtMmQuTWFpbi5DQU5WQVNfV0lEVEgsIFN0cnVtMmQuTWFpbi5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgYmFja2Ryb3AueiA9IDkwMDA7XG4gICAgICAgIGJhY2tkcm9wLnNldE9wYWNpdHkoMC42KTtcbiAgICAgICAgYmFja2Ryb3Auc2V0UHJpbWFyeUNvbG9yKFwiIzAwMDAwMFwiKTtcbiAgICAgICAgU3RydW0yZC5NYWluLmNhbnZhc0JvdW5kcy5hZGRUcmFuc2Zvcm1MaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYWNrZHJvcC5zZXRXaWR0aChTdHJ1bTJkLk1haW4uY2FudmFzQm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLnNldEhlaWdodChTdHJ1bTJkLk1haW4uY2FudmFzQm91bmRzLmhlaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZFVpRWxlbWVudChiYWNrZHJvcCk7XG4gICAgICAgIHZhciBsdDEgPSBuZXcgU3RydW0yZC5MYXlvdXQoKTtcbiAgICAgICAgbHQxLnogPSBiYWNrZHJvcC56ICsgMTtcbiAgICAgICAgbHQxLnNldEZsb2F0KFN0cnVtMmQuTGF5b3V0RmxvYXQuQ0VOVEVSX0gsIFN0cnVtMmQuTGF5b3V0RmxvYXQuQ0VOVEVSX1YpO1xuICAgICAgICBsdDEuc2V0TGF5b3V0RGlyZWN0aW9uKFN0cnVtMmQuTGF5b3V0RGlyZWN0aW9uLlZFUlRJQ0FMKTtcbiAgICAgICAgbHQxLnNldEFsaWduSXRlbXMoU3RydW0yZC5MYXlvdXRBbGlnbm1lbnQuQ0VOVEVSKTtcbiAgICAgICAgbHQxLmRyYXdCYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgbHQxLnNldFNoYWRvd0JsdXIoMzYpO1xuICAgICAgICBsdDEuc2V0TWFyZ2luKDIwKTtcbiAgICAgICAgdGhpcy5hZGRVaUVsZW1lbnQobHQxKTtcbiAgICAgICAgdmFyIHR4dFRpdGxlID0gbmV3IFN0cnVtMmQuTGFiZWwoXCJDb250cm9sc1wiKTtcbiAgICAgICAgdHh0VGl0bGUuc2V0Rm9udChTdHJ1bTJkLkZvbnQuUk9CT1RPX0JPTEQsIDM2KTtcbiAgICAgICAgdHh0VGl0bGUuc2V0VGV4dENvbG9yKFwiI2ZlZmVmZVwiKTtcbiAgICAgICAgbHQxLmFkZENvbXBvbmVudCh0eHRUaXRsZSk7XG4gICAgICAgIHZhciB0eHRJbmZvID0gbmV3IFN0cnVtMmQuVGV4dEFyZWEoKTtcbiAgICAgICAgdHh0SW5mby5zZXRGb250KFN0cnVtMmQuRm9udC5TT1VSQ0VfQ09ERV9QUk8sIDE2KTtcbiAgICAgICAgdHh0SW5mby5zZXRMaW5lSGVpZ2h0KDEuMyk7XG4gICAgICAgIHR4dEluZm8uc2V0VGV4dENvbG9yKFwiI2ZlZmVmZVwiKTtcbiAgICAgICAgdHh0SW5mby5zZXRUZXh0KFwie0VudGVyfTogUHJvY2VlZCBvbmUgc3RlcCBpbiB0aGUgc2ltdWxhdGlvbi4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7U3BhY2V9OiBBdXRvbWF0aWNhbGx5IHByb2NlZWQgaW4gdGhlIHNpbXVsYXRpb24uIFxcblwiXG4gICAgICAgICAgICArIFwieyx9OiBEZWNyZWFzZSBTUFMuIFxcblwiXG4gICAgICAgICAgICArIFwiey59OiBJbmNyZWFzZSBTUFMuIFxcblwiXG4gICAgICAgICAgICArIFwie2d9OiBUb2dnbGUgZ3JpZC4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7d317YX17c317ZH06IENvbnRyb2wgdGhlIGNhbWVyYS4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7Q3RybH0re21vdXNlIHdoZWVsfTogQ29udHJvbCBjYW1lcmEgem9vbS4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7LX17K306IENvbnRyb2wgY2FtZXJhIHpvb20uIFxcblwiKTtcbiAgICAgICAgbHQxLmFkZENvbXBvbmVudCh0eHRJbmZvKTtcbiAgICAgICAgY29uc29sZS5sb2codHh0SW5mbyk7XG4gICAgICAgIHZhciBidG5DbG9zZSA9IG5ldyBTdHJ1bTJkLkJ1dHRvbigpO1xuICAgICAgICBidG5DbG9zZS5zZXRUZXh0KFwiQ0xPU0VcIik7XG4gICAgICAgIGJ0bkNsb3NlLmdldE1vdXNlSGFuZGxlcigpLm1vdXNlTGVmdFVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gRGlzcG9zZSBzY2VuZVxuICAgICAgICAgICAgX3RoaXMuZGlzcG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBsdDEuYWRkQ29tcG9uZW50KGJ0bkNsb3NlKTtcbiAgICB9O1xuICAgIENvbnRyb2xzTW9kYWwucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBDb250cm9sc01vZGFsLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRyb2xzTW9kYWw7XG59KFN0cnVtMmQuU2NlbmUpKTtcbmV4cG9ydCB7IENvbnRyb2xzTW9kYWwgfTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3N0cnVtLTJkLmQudHNcIiAvPlxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCB7IENlbGxFdmVudCB9IGZyb20gXCIuL0NlbGxFdmVudFwiO1xudmFyIEdhbWVHcmlkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVHcmlkKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5TUEFXTl9SQVRFID0gMSAvIDEwLjA7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuZ3JpZFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5jZWxsTGlzdCA9IFtbXV07XG4gICAgICAgIHRoaXMuY2VsbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jZWxsU2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuZHJhd0dyaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldEdyaWRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmdyaWRUZXh0dXJlID0gbmV3IFN0cnVtMmQuVGV4dHVyZSh0aGlzLmdyaWRXaWR0aCAqIHRoaXMuY2VsbFNpemUsIHRoaXMuZ3JpZEhlaWdodCAqIHRoaXMuY2VsbFNpemUpO1xuICAgICAgICB0aGlzLmdyaWRUZXh0dXJlLnNldFNoYWRvd0JsdXIoNjApO1xuICAgICAgICBTdHJ1bTJkLk1haW4uYWRkRW50aXR5KHRoaXMuZ3JpZFRleHR1cmUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRUZXh0dXJlKTtcbiAgICB9XG4gICAgR2FtZUdyaWQucHJvdG90eXBlLnNldEdyaWRTaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNlbGxDb3VudCA9IHdpZHRoICogaGVpZ2h0O1xuICAgICAgICB0aGlzLmNlbGxTaXplID0gU3RydW0yZC5NYWluLkNBTlZBU19IRUlHSFQgLyB0aGlzLmdyaWRIZWlnaHQgKiA0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNBTlZBU19IRUlHSFQ6IFwiICsgU3RydW0yZC5NYWluLkNBTlZBU19IRUlHSFQgKyBcIiwgR1JJRCBIRUlHSFQ6IFwiICsgdGhpcy5ncmlkSGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDRUxMIFNJWkU6IFwiICsgdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgIGlmICh0aGlzLmdyaWRUZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRUZXh0dXJlLnNldFdpZHRoKHRoaXMuZ3JpZFdpZHRoICogdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmdyaWRUZXh0dXJlLnNldEhlaWdodCh0aGlzLmdyaWRIZWlnaHQgKiB0aGlzLmNlbGxTaXplKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgR2FtZUdyaWQucHJvdG90eXBlLnNldERyYXdHcmlkID0gZnVuY3Rpb24gKGZsYWcpIHtcbiAgICAgICAgdGhpcy5kcmF3R3JpZCA9IGZsYWc7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmNlbGxMaXN0OyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJvdyA9IF9hW19pXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgcm93XzEgPSByb3c7IF9iIDwgcm93XzEubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGwgPSByb3dfMVtfYl07XG4gICAgICAgICAgICAgICAgY2VsbC5kcmF3T3V0bGluZSA9IGZsYWc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRyYXdUZXh0dXJlKCk7XG4gICAgfTtcbiAgICBHYW1lR3JpZC5wcm90b3R5cGUucmVkcmF3VGV4dHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ncmlkVGV4dHVyZS5jbGVhcigpO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5jZWxsTGlzdDsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciByb3cgPSBfYVtfaV07XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIHJvd18yID0gcm93OyBfYiA8IHJvd18yLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBjZWxsID0gcm93XzJbX2JdO1xuICAgICAgICAgICAgICAgIGNlbGwuZHJhdyh0aGlzLmdyaWRUZXh0dXJlLmcyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgR2FtZUdyaWQucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpbml0IGFycmF5XG4gICAgICAgIHRoaXMuY2VsbExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdyaWRXaWR0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxMaXN0W2ldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmdyaWRIZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmdyaWRXaWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBuZXcgQ2VsbCh4LCB5LCB0aGlzLmNlbGxTaXplKTtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEFsaXZlKE1hdGgucmFuZG9tKCkgPCB0aGlzLlNQQVdOX1JBVEUpO1xuICAgICAgICAgICAgICAgIGNlbGwuZHJhd091dGxpbmUgPSB0aGlzLmRyYXdHcmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbExpc3RbeF1beV0gPSBjZWxsO1xuICAgICAgICAgICAgICAgIC8vIFN0cnVtMmQuTWFpbi5hZGRFbnRpdHkoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRyYXdUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0SW5mbygpKTtcbiAgICB9O1xuICAgIEdhbWVHcmlkLnByb3RvdHlwZS5zaW11bGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBlbmRpbmdFdmVudHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuY2VsbExpc3Q7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gX2FbX2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCByb3dfMyA9IHJvdzsgX2IgPCByb3dfMy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHJvd18zW19iXTtcbiAgICAgICAgICAgICAgICB2YXIgbGl2ZU5laWdoYm91cnMgPSB0aGlzLmdldExpdmVOZWlnaGJvdXJzKGNlbGwpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoMiA8PSBsaXZlTmVpZ2hib3VycyAmJiBsaXZlTmVpZ2hib3VycyA8PSAzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V2ZW50cy5wdXNoKG5ldyBDZWxsRXZlbnQoQ2VsbEV2ZW50LktJTEwsIGNlbGwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpdmVOZWlnaGJvdXJzID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdFdmVudHMucHVzaChuZXcgQ2VsbEV2ZW50KENlbGxFdmVudC5SRVNVUlJFQ1QsIGNlbGwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfYyA9IDAsIHBlbmRpbmdFdmVudHNfMSA9IHBlbmRpbmdFdmVudHM7IF9jIDwgcGVuZGluZ0V2ZW50c18xLmxlbmd0aDsgX2MrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBwZW5kaW5nRXZlbnRzXzFbX2NdO1xuICAgICAgICAgICAgaWYgKGV2ZW50XzEuZXZlbnRUeXBlID09IENlbGxFdmVudC5LSUxMKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRfMS5zdWJqZWN0LnNldEFsaXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBldmVudF8xLnN1YmplY3Quc2V0SGFzRGllZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50XzEuZXZlbnRUeXBlID09IENlbGxFdmVudC5SRVNVUlJFQ1QpIHtcbiAgICAgICAgICAgICAgICBldmVudF8xLnN1YmplY3Quc2V0QWxpdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRyYXdUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbisrO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEluZm8oKSk7XG4gICAgfTtcbiAgICBHYW1lR3JpZC5wcm90b3R5cGUuZ2V0TGl2ZU5laWdoYm91cnMgPSBmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIHkgPSBjZWxsLmdyaWRZIC0gMTsgeSA8PSBjZWxsLmdyaWRZICsgMTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gY2VsbC5ncmlkWCAtIDE7IHggPD0gY2VsbC5ncmlkWCArIDE7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh4ID49IDAgJiYgeSA+PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIHggPD0gdGhpcy5ncmlkV2lkdGggLSAxICYmIHkgPD0gdGhpcy5ncmlkSGVpZ2h0IC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxMaXN0W3hdW3ldLmlkICE9IGNlbGwuaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsTGlzdFt4XVt5XS5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jZWxsTGlzdFt4XVt5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBHYW1lR3JpZC5wcm90b3R5cGUuZ2V0SW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiR0VORVJBVElPTjogXCIgKyB0aGlzLmdlbmVyYXRpb24gKyBcIiAtIExJVkUgQ0VMTFM6IFwiICsgdGhpcy5udW1MaXZlQ2VsbHMoKSArIFwiIG9mIFwiICsgdGhpcy5jZWxsQ291bnQ7XG4gICAgfTtcbiAgICBHYW1lR3JpZC5wcm90b3R5cGUubnVtTGl2ZUNlbGxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuY2VsbExpc3Q7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IF9hW19pXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgbGlzdF8xID0gbGlzdDsgX2IgPCBsaXN0XzEubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBsaXN0XzFbX2JdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBjZWxsLmlzQWxpdmUoKSA/IDEgOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZUdyaWQ7XG59KCkpO1xuZXhwb3J0IHsgR2FtZUdyaWQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=