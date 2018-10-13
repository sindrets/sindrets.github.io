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
                console.log("Increasing simulation speed. Curret timeout: " + _this.autoSimTimeout);
            }
            if (e.key == ",") {
                _this.autoSimTimeout *= 1.5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vb3V0L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9vdXQvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9vdXQvQ2VsbEV2ZW50LmpzIiwid2VicGFjazovLy8uL291dC9Db250cm9sc01vZGFsLmpzIiwid2VicGFjazovLy8uL291dC9HYW1lR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNERBQWE7QUFDL0MsNkJBQTZCLGtEQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxDQUFDO0FBQ2M7QUFDZjs7Ozs7Ozs7Ozs7OztBQ3RPQTtBQUFBO0FBQUE7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNlOzs7Ozs7Ozs7Ozs7O0FDM0RoQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDb0I7Ozs7Ozs7Ozs7Ozs7QUNUckI7QUFBQTtBQUFBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEMsZ0JBQWdCLE1BQU07QUFDdEIsZ0JBQWdCLEVBQUU7QUFDbEIsZ0JBQWdCLEVBQUU7QUFDbEIsZ0JBQWdCLEVBQUU7QUFDbEIsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFDM0IsZ0JBQWdCLEtBQUssRUFBRSxZQUFZO0FBQ25DLGdCQUFnQixHQUFHLEVBQUU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN3Qjs7Ozs7Ozs7Ozs7OztBQzNFekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM4QjtBQUNVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0EseUNBQXlDLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QywyQkFBMkIsb0JBQW9CO0FBQy9DLCtCQUErQiwwQ0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0EseUNBQXlDLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxvREFBUyxDQUFDLG9EQUFTO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG9EQUFTLENBQUMsb0RBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNkJBQTZCO0FBQ3RGO0FBQ0EscUNBQXFDLG9EQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvREFBUztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pELHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBLDJDQUEyQyxvQkFBb0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ21CIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vb3V0L0FwcC5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3N0cnVtLTJkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEdhbWVHcmlkIH0gZnJvbSBcIi4vR2FtZUdyaWRcIjtcbmltcG9ydCB7IENvbnRyb2xzTW9kYWwgfSBmcm9tIFwiLi9Db250cm9sc01vZGFsXCI7XG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcHAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5HUklEX1dJRFRIID0gMTAwO1xuICAgICAgICBfdGhpcy5HUklEX0hFSUdIVCA9IDEwMDtcbiAgICAgICAgX3RoaXMuYXV0b1NpbXVsYXRlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmF1dG9TaW1UaW1lb3V0ID0gNTA7XG4gICAgICAgIF90aGlzLmxhc3RGcmFtZSA9IDA7XG4gICAgICAgIF90aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBfdGhpcy5tdXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMub3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICBTdHJ1bTJkLk1haW4uc2tpcFNwbGFzaCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5sYXN0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIF90aGlzLmNvbnRyb2xzTW9kYWwgPSBuZXcgQ29udHJvbHNNb2RhbCgpO1xuICAgICAgICBfdGhpcy5nYW1lR3JpZCA9IG5ldyBHYW1lR3JpZChfdGhpcy5HUklEX1dJRFRILCBfdGhpcy5HUklEX0hFSUdIVCk7XG4gICAgICAgIF90aGlzLmhhbmRsZXIgPSBuZXcgU3RydW0yZC5IYW5kbGVyKFN0cnVtMmQuTWFpbi5jYW52YXNCb3VuZHMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVyLmdldEtleUhhbmRsZXIoKS5rZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KTtcbiAgICAgICAgICAgIGlmIChlLmtleS50b0xvd2VyQ2FzZSgpID09IFwiZW50ZXJcIikge1xuICAgICAgICAgICAgICAgIF90aGlzLmdhbWVHcmlkLnNpbXVsYXRlKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlR2VuSW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5LnRvTG93ZXJDYXNlKCkgPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdXRvU2ltdWxhdGUgPSAhX3RoaXMuYXV0b1NpbXVsYXRlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVVUTyBTSU1VTEFURTogXCIgKyBfdGhpcy5hdXRvU2ltdWxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiLlwiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXV0b1NpbVRpbWVvdXQgLz0gMS41O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5jcmVhc2luZyBzaW11bGF0aW9uIHNwZWVkLiBDdXJyZXQgdGltZW91dDogXCIgKyBfdGhpcy5hdXRvU2ltVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCIsXCIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdXRvU2ltVGltZW91dCAqPSAxLjU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWNyZWFzaW5nIHNpbXVsYXRpb24gc3BlZWQuIEN1cnJldCB0aW1lb3V0OiBcIiArIF90aGlzLmF1dG9TaW1UaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleS50b0xvd2VyQ2FzZSgpID09IFwiclwiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVnZW5lcmF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5LnRvTG93ZXJDYXNlKCkgPT0gXCJnXCIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nYW1lR3JpZC5zZXREcmF3R3JpZCghX3RoaXMuZ2FtZUdyaWQuZHJhd0dyaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVyLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5hdXRvU2ltdWxhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVN0cnVtMmQuTWFpbi5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93IC0gX3RoaXMubGFzdCA+PSBfdGhpcy5hdXRvU2ltVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdCA9IG5vdztcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdhbWVHcmlkLnNpbXVsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVHZW5JbmZvKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXBwLnByb3RvdHlwZS5jZW50ZXJDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHpvb20gdG8gZml0IHJhdGlvXG4gICAgICAgIHZhciBtYXJnaW4gPSA4MDA7XG4gICAgICAgIHZhciByYXRpbyA9IE1hdGgubWluKFN0cnVtMmQuTWFpbi5DQU5WQVNfV0lEVEggLyAodGhpcy5nYW1lR3JpZC5ncmlkVGV4dHVyZS53aWR0aCArIG1hcmdpbiksIFN0cnVtMmQuTWFpbi5DQU5WQVNfSEVJR0hUIC8gKHRoaXMuZ2FtZUdyaWQuZ3JpZFRleHR1cmUuaGVpZ2h0ICsgbWFyZ2luKSk7XG4gICAgICAgIFN0cnVtMmQuTWFpbi5jYW1lcmEubW92ZSh0aGlzLmdhbWVHcmlkLmdyaWRUZXh0dXJlLmdldENlbnRlcigpKTtcbiAgICAgICAgU3RydW0yZC5NYWluLmNhbWVyYS5zZXRab29tKHJhdGlvKTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUucmVnZW5lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5HUklEX1dJRFRIID0gcGFyc2VJbnQodGhpcy50eHRXaWR0aC50ZXh0KTtcbiAgICAgICAgdGhpcy5HUklEX0hFSUdIVCA9IHBhcnNlSW50KHRoaXMudHh0SGVpZ2h0LnRleHQpO1xuICAgICAgICB0aGlzLmdhbWVHcmlkLnNldEdyaWRTaXplKHRoaXMuR1JJRF9XSURUSCwgdGhpcy5HUklEX0hFSUdIVCk7XG4gICAgICAgIHRoaXMuZ2FtZUdyaWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHZW5JbmZvKCk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLnVwZGF0ZUdlbkluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHh0R2VuSW5mby5zZXRUZXh0KHRoaXMuZ2FtZUdyaWQuZ2V0SW5mbygpKTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUudXBkYXRlU3BlZWRJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnR4dFNwZWVkSW5mby5zZXRUZXh0KFwiU1BTOiBcIiArICgxMDAwIC8gdGhpcy5hdXRvU2ltVGltZW91dCkudG9GaXhlZCgxKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgdGltZSB0aGlzIHNjZW5lIGlzIGxvYWRlZFxuICAgICAqL1xuICAgIEFwcC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nYW1lR3JpZC5zZXRHcmlkU2l6ZSh0aGlzLkdSSURfV0lEVEgsIHRoaXMuR1JJRF9IRUlHSFQpO1xuICAgICAgICBTdHJ1bTJkLk1haW4uY2FtZXJhLnNldEZyZWVDYW1Nb2RlKHRydWUpO1xuICAgICAgICB0aGlzLmNlbnRlckNhbWVyYSgpO1xuICAgICAgICB0aGlzLmdhbWVHcmlkLmdlbmVyYXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdGhlIGZpcnN0IHRpbWUgdGhpcyBzY2VuZSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBBcHAucHJvdG90eXBlLmluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgU3RydW0yZC5NYWluLmFkZEhhbmRsZXIodGhpcy5oYW5kbGVyKTtcbiAgICAgICAgLy8gR1VJXG4gICAgICAgIHZhciBwbmxDb250cm9scyA9IG5ldyBTdHJ1bTJkLkxheW91dCgpO1xuICAgICAgICBwbmxDb250cm9scy5zZXRMYXlvdXREaXJlY3Rpb24oU3RydW0yZC5MYXlvdXREaXJlY3Rpb24uSE9SSVpPTlRBTCk7XG4gICAgICAgIHBubENvbnRyb2xzLnNldEFsaWduSXRlbXMoU3RydW0yZC5MYXlvdXRBbGlnbm1lbnQuQ0VOVEVSKTtcbiAgICAgICAgcG5sQ29udHJvbHMuc2V0U2hhZG93Qmx1cigzMCk7XG4gICAgICAgIHBubENvbnRyb2xzLnNldEZsb2F0KFN0cnVtMmQuTGF5b3V0RmxvYXQuVE9QLCBTdHJ1bTJkLkxheW91dEZsb2F0LkNFTlRFUl9IKTtcbiAgICAgICAgcG5sQ29udHJvbHMuc2V0TWFyZ2luVG9wKDEyKTtcbiAgICAgICAgcG5sQ29udHJvbHMuc2V0TWFyZ2luQm90dG9tKDEyKTtcbiAgICAgICAgcG5sQ29udHJvbHMuc2V0TWFyZ2luTGVmdCgyMCk7XG4gICAgICAgIHBubENvbnRyb2xzLnNldE1hcmdpblJpZ2h0KDIwKTtcbiAgICAgICAgcG5sQ29udHJvbHMuZHJhd0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZFVpRWxlbWVudChwbmxDb250cm9scyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBubENvbnRyb2xzKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aCA9IG5ldyBTdHJ1bTJkLklucHV0RmllbGQoKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aC5zZXRUZXh0KFN0cmluZyh0aGlzLkdSSURfV0lEVEgpKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aC5zZXRMYWJlbChcIndpZHRoXCIpO1xuICAgICAgICB0aGlzLnR4dFdpZHRoLnNldFRleHRBbGlnbm1lbnQoU3RydW0yZC5UZXh0QWxpZ25tZW50LlJJR0hUX1RPX0xFRlQpO1xuICAgICAgICB0aGlzLnR4dFdpZHRoLnNldEJvcmRlclJhZGl1cygzKTtcbiAgICAgICAgdGhpcy50eHRXaWR0aC5zZXRTaGFkb3dCbHVyKDgsIDAsIDMpO1xuICAgICAgICB0aGlzLnR4dFdpZHRoLnNldEZpbHRlcigvWzAtOSxcXC5dLyk7XG4gICAgICAgIHBubENvbnRyb2xzLmFkZENvbXBvbmVudCh0aGlzLnR4dFdpZHRoKTtcbiAgICAgICAgdGhpcy50eHRIZWlnaHQgPSBuZXcgU3RydW0yZC5JbnB1dEZpZWxkKCk7XG4gICAgICAgIHRoaXMudHh0SGVpZ2h0LnNldFRleHQoU3RyaW5nKHRoaXMuR1JJRF9IRUlHSFQpKTtcbiAgICAgICAgdGhpcy50eHRIZWlnaHQuc2V0TGFiZWwoXCJoZWlnaHRcIik7XG4gICAgICAgIHRoaXMudHh0SGVpZ2h0LnNldFRleHRBbGlnbm1lbnQoU3RydW0yZC5UZXh0QWxpZ25tZW50LlJJR0hUX1RPX0xFRlQpO1xuICAgICAgICB0aGlzLnR4dEhlaWdodC5zZXRCb3JkZXJSYWRpdXMoMyk7XG4gICAgICAgIHRoaXMudHh0SGVpZ2h0LnNldFNoYWRvd0JsdXIoOCwgMCwgMyk7XG4gICAgICAgIHRoaXMudHh0SGVpZ2h0LnNldEZpbHRlcigvWzAtOSxcXC5dLyk7XG4gICAgICAgIHBubENvbnRyb2xzLmFkZENvbXBvbmVudCh0aGlzLnR4dEhlaWdodCk7XG4gICAgICAgIHZhciBidG5HZW5lcmF0ZSA9IG5ldyBTdHJ1bTJkLkJ1dHRvbigpO1xuICAgICAgICBidG5HZW5lcmF0ZS5zZXRUZXh0KFwiR0VORVJBVEVcIik7XG4gICAgICAgIGJ0bkdlbmVyYXRlLmdldE1vdXNlSGFuZGxlcigpLm1vdXNlTGVmdFVwID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIF90aGlzLnJlZ2VuZXJhdGUoKTtcbiAgICAgICAgICAgIF90aGlzLmNlbnRlckNhbWVyYSgpO1xuICAgICAgICB9O1xuICAgICAgICBwbmxDb250cm9scy5hZGRDb21wb25lbnQoYnRuR2VuZXJhdGUpO1xuICAgICAgICB2YXIgYnRuQ29udHJvbHMgPSBuZXcgU3RydW0yZC5CdXR0b24oKTtcbiAgICAgICAgYnRuQ29udHJvbHMuc2V0VGV4dChcIkNPTlRST0xTXCIpO1xuICAgICAgICBidG5Db250cm9scy5nZXRNb3VzZUhhbmRsZXIoKS5tb3VzZUxlZnRVcCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBTdHJ1bTJkLk1haW4ucmVxdWVzdFNjZW5lKF90aGlzLmNvbnRyb2xzTW9kYWwpO1xuICAgICAgICB9O1xuICAgICAgICBwbmxDb250cm9scy5hZGRDb21wb25lbnQoYnRuQ29udHJvbHMpO1xuICAgICAgICAvLyBCT1RUT00gUEFORUxcbiAgICAgICAgdmFyIHBubEluZm8gPSBuZXcgU3RydW0yZC5MYXlvdXQoKTtcbiAgICAgICAgcG5sSW5mby5zZXRMYXlvdXREaXJlY3Rpb24oU3RydW0yZC5MYXlvdXREaXJlY3Rpb24uVkVSVElDQUwpO1xuICAgICAgICBwbmxJbmZvLnNldEFsaWduSXRlbXMoU3RydW0yZC5MYXlvdXRBbGlnbm1lbnQuQ0VOVEVSKTtcbiAgICAgICAgcG5sSW5mby5zZXRGbG9hdChTdHJ1bTJkLkxheW91dEZsb2F0LkJPVFRPTSwgU3RydW0yZC5MYXlvdXRGbG9hdC5DRU5URVJfSCk7XG4gICAgICAgIHBubEluZm8uc2V0TWFyZ2luVG9wKDEyKTtcbiAgICAgICAgcG5sSW5mby5zZXRNYXJnaW5MZWZ0KDIwKTtcbiAgICAgICAgcG5sSW5mby5zZXRNYXJnaW5SaWdodCgyMCk7XG4gICAgICAgIHBubEluZm8uc2V0U2hhZG93Qmx1cigzMCk7XG4gICAgICAgIHBubEluZm8uZHJhd0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZFVpRWxlbWVudChwbmxJbmZvKTtcbiAgICAgICAgLy8gUk9XIDFcbiAgICAgICAgdmFyIHBubFJvdzEgPSBuZXcgU3RydW0yZC5MYXlvdXQoKTtcbiAgICAgICAgcG5sUm93MS5zZXRMYXlvdXREaXJlY3Rpb24oU3RydW0yZC5MYXlvdXREaXJlY3Rpb24uSE9SSVpPTlRBTCk7XG4gICAgICAgIHBubFJvdzEuc2V0QWxpZ25JdGVtcyhTdHJ1bTJkLkxheW91dEFsaWdubWVudC5DRU5URVIpO1xuICAgICAgICBwbmxSb3cxLnNldE1hcmdpblRvcCgwKTtcbiAgICAgICAgcG5sUm93MS5zZXRNYXJnaW5Cb3R0b20oMCk7XG4gICAgICAgIHBubFJvdzEuc2V0TWFyZ2luTGVmdCgxMCk7XG4gICAgICAgIHBubFJvdzEuc2V0TWFyZ2luUmlnaHQoMTApO1xuICAgICAgICBwbmxJbmZvLmFkZENvbXBvbmVudChwbmxSb3cxKTtcbiAgICAgICAgdmFyIGJ0bk1pbnVzID0gbmV3IFN0cnVtMmQuQnV0dG9uKCk7XG4gICAgICAgIHRoaXMudHh0U3BlZWRJbmZvID0gbmV3IFN0cnVtMmQuTGFiZWwoKTtcbiAgICAgICAgdmFyIGJ0blBsdXMgPSBuZXcgU3RydW0yZC5CdXR0b24oKTtcbiAgICAgICAgYnRuTWludXMuc2V0VGV4dChcIi1cIik7XG4gICAgICAgIGJ0bk1pbnVzLmdldE1vdXNlSGFuZGxlcigpLm1vdXNlTGVmdFVwID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIF90aGlzLmF1dG9TaW1UaW1lb3V0ICo9IDEuNTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVNwZWVkSW5mbygpO1xuICAgICAgICB9O1xuICAgICAgICBwbmxSb3cxLmFkZENvbXBvbmVudChidG5NaW51cyk7XG4gICAgICAgIHRoaXMudHh0U3BlZWRJbmZvLnNldFRleHRDb2xvcihcIiNDRUNFQ0VcIik7XG4gICAgICAgIHRoaXMudHh0U3BlZWRJbmZvLnNldEZvbnQoU3RydW0yZC5Gb250LlJPQk9UT19CT0xEKTtcbiAgICAgICAgdGhpcy51cGRhdGVTcGVlZEluZm8oKTtcbiAgICAgICAgcG5sUm93MS5hZGRDb21wb25lbnQodGhpcy50eHRTcGVlZEluZm8pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnR4dFNwZWVkSW5mbyk7XG4gICAgICAgIGJ0blBsdXMuc2V0VGV4dChcIitcIik7XG4gICAgICAgIGJ0blBsdXMuZ2V0TW91c2VIYW5kbGVyKCkubW91c2VMZWZ0VXAgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgX3RoaXMuYXV0b1NpbVRpbWVvdXQgLz0gMS41O1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlU3BlZWRJbmZvKCk7XG4gICAgICAgIH07XG4gICAgICAgIHBubFJvdzEuYWRkQ29tcG9uZW50KGJ0blBsdXMpO1xuICAgICAgICB0aGlzLnR4dEdlbkluZm8gPSBuZXcgU3RydW0yZC5MYWJlbCgpO1xuICAgICAgICB0aGlzLnR4dEdlbkluZm8uc2V0Rm9udChTdHJ1bTJkLkZvbnQuUk9CT1RPX0JPTEQpO1xuICAgICAgICB0aGlzLnR4dEdlbkluZm8uc2V0VGV4dENvbG9yKFwiI0NFQ0VDRVwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVHZW5JbmZvKCk7XG4gICAgICAgIHBubFJvdzEuYWRkQ29tcG9uZW50KHRoaXMudHh0R2VuSW5mbyk7XG4gICAgICAgIHZhciBidG5OZXh0ID0gbmV3IFN0cnVtMmQuQnV0dG9uKCk7XG4gICAgICAgIGJ0bk5leHQuc2V0VGV4dChcIk5FWFRcIik7XG4gICAgICAgIGJ0bk5leHQuZ2V0TW91c2VIYW5kbGVyKCkubW91c2VMZWZ0VXAgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgX3RoaXMuZ2FtZUdyaWQuc2ltdWxhdGUoKTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUdlbkluZm8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcG5sUm93MS5hZGRDb21wb25lbnQoYnRuTmV4dCk7XG4gICAgICAgIHZhciBidG5BdXRvID0gbmV3IFN0cnVtMmQuQnV0dG9uKCk7XG4gICAgICAgIGJ0bkF1dG8uc2V0VGV4dChcIkFVVE9cIik7XG4gICAgICAgIGJ0bkF1dG8uZ2V0TW91c2VIYW5kbGVyKCkubW91c2VMZWZ0VXAgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgX3RoaXMuYXV0b1NpbXVsYXRlID0gIV90aGlzLmF1dG9TaW11bGF0ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcG5sUm93MS5hZGRDb21wb25lbnQoYnRuQXV0byk7XG4gICAgICAgIC8vIFJPVyAyXG4gICAgICAgIHZhciBwbmxSb3cyID0gbmV3IFN0cnVtMmQuTGF5b3V0KCk7XG4gICAgICAgIHBubFJvdzIuc2V0TGF5b3V0RGlyZWN0aW9uKFN0cnVtMmQuTGF5b3V0RGlyZWN0aW9uLkhPUklaT05UQUwpO1xuICAgICAgICBwbmxSb3cyLnNldEFsaWduSXRlbXMoU3RydW0yZC5MYXlvdXRBbGlnbm1lbnQuRU5EKTtcbiAgICAgICAgcG5sUm93Mi5zZXRNYXJnaW5Ub3AoNSk7XG4gICAgICAgIHBubFJvdzIuc2V0TWFyZ2luQm90dG9tKDUpO1xuICAgICAgICBwbmxSb3cyLnNldE1hcmdpbkxlZnQoNSk7XG4gICAgICAgIHBubFJvdzIuc2V0TWFyZ2luUmlnaHQoNSk7XG4gICAgICAgIHBubEluZm8uYWRkQ29tcG9uZW50KHBubFJvdzIpO1xuICAgICAgICB2YXIgdHh0U1BTRXhwbGFuYXRpb24gPSBuZXcgU3RydW0yZC5MYWJlbChcIipTUFM6IHNpbXVsYXRpb25zIHBlciBzZWNvbmRcIik7XG4gICAgICAgIHR4dFNQU0V4cGxhbmF0aW9uLnNldEZvbnRTaXplKDExKTtcbiAgICAgICAgdHh0U1BTRXhwbGFuYXRpb24uc2V0VGV4dENvbG9yKFwiI0NFQ0VDRVwiKTtcbiAgICAgICAgdHh0U1BTRXhwbGFuYXRpb24uc2V0Rm9udChTdHJ1bTJkLkZvbnQuUk9CT1RPX1JFR1VMQVIpO1xuICAgICAgICBwbmxSb3cyLmFkZENvbXBvbmVudCh0eHRTUFNFeHBsYW5hdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHR4dFNQU0V4cGxhbmF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBldmVyeSB0aWNrIHdoaWxlIHRoaXMgc2NlbmUgaXMgbG9hZGVkXG4gICAgICovXG4gICAgQXBwLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIHJldHVybiBBcHA7XG59KFN0cnVtMmQuU2NlbmUpKTtcbmV4cG9ydCB7IEFwcCB9O1xuU3RydW0yZC5NYWluLnJlcXVlc3RTY2VuZShuZXcgQXBwKCkpO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mvc3RydW0tMmQuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIENlbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENlbGwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2VsbCh4LCB5LCBzaXplKSB7XG4gICAgICAgIGlmIChzaXplID09PSB2b2lkIDApIHsgc2l6ZSA9IDE7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzRGllZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5kcmF3T3V0bGluZSA9IHRydWU7XG4gICAgICAgIF90aGlzLnNpemUgPSBzaXplO1xuICAgICAgICBfdGhpcy5zZXRXaWR0aChzaXplKTtcbiAgICAgICAgX3RoaXMuc2V0SGVpZ2h0KHNpemUpO1xuICAgICAgICBfdGhpcy5ncmlkWCA9IHg7XG4gICAgICAgIF90aGlzLmdyaWRZID0geTtcbiAgICAgICAgX3RoaXMuc2V0WCh4ICogX3RoaXMuc2l6ZSk7XG4gICAgICAgIF90aGlzLnNldFkoeSAqIF90aGlzLnNpemUpO1xuICAgICAgICBfdGhpcy5zZXRTZWNvbmRhcnlDb2xvcihcIiM0NDQ0NDRcIik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ2VsbC5wcm90b3R5cGUuaXNBbGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxpdmU7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5zZXRBbGl2ZSA9IGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgICAgIHRoaXMuYWxpdmUgPSBmbGFnO1xuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5Q29sb3IoXCIjOGJjMzRhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUNvbG9yKFwiI2ZmZmZmZlwiKTtcbiAgICB9O1xuICAgIENlbGwucHJvdG90eXBlLnNldEhhc0RpZWQgPSBmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICB0aGlzLmhhc0RpZWQgPSBmbGFnO1xuICAgICAgICB0aGlzLnNldFByaW1hcnlDb2xvcihcIiNhNmVjZDZcIik7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGcyKSB7XG4gICAgICAgIGcyLmZpbGxTdHlsZSA9IHRoaXMucHJpbWFyeUNvbG9yO1xuICAgICAgICBnMi5zdHJva2VTdHlsZSA9IHRoaXMuc2Vjb25kYXJ5Q29sb3I7XG4gICAgICAgIGcyLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGcyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLmRyYXdPdXRsaW5lKVxuICAgICAgICAgICAgZzIuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIHJldHVybiBDZWxsO1xufShTdHJ1bTJkLkNvbXBvbmVudCkpO1xuZXhwb3J0IHsgQ2VsbCB9O1xuIiwidmFyIENlbGxFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDZWxsRXZlbnQoZXZlbnRUeXBlLCBzdWJqZWN0KSB7XG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgIH1cbiAgICBDZWxsRXZlbnQuS0lMTCA9IDB4MDtcbiAgICBDZWxsRXZlbnQuUkVTVVJSRUNUID0gMHgxO1xuICAgIHJldHVybiBDZWxsRXZlbnQ7XG59KCkpO1xuZXhwb3J0IHsgQ2VsbEV2ZW50IH07XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9zdHJ1bS0yZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgQ29udHJvbHNNb2RhbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udHJvbHNNb2RhbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250cm9sc01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vdmVybGF5ID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMubXV0YWJsZSA9IHRydWU7XG4gICAgICAgIF90aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbnRyb2xzTW9kYWwucHJvdG90eXBlLmluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGJhY2tkcm9wID0gbmV3IFN0cnVtMmQuUGFuZWwoU3RydW0yZC5NYWluLkNBTlZBU19XSURUSCwgU3RydW0yZC5NYWluLkNBTlZBU19IRUlHSFQpO1xuICAgICAgICBiYWNrZHJvcC56ID0gOTAwMDtcbiAgICAgICAgYmFja2Ryb3Auc2V0T3BhY2l0eSgwLjYpO1xuICAgICAgICBiYWNrZHJvcC5zZXRQcmltYXJ5Q29sb3IoXCIjMDAwMDAwXCIpO1xuICAgICAgICBTdHJ1bTJkLk1haW4uY2FudmFzQm91bmRzLmFkZFRyYW5zZm9ybUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJhY2tkcm9wLnNldFdpZHRoKFN0cnVtMmQuTWFpbi5jYW52YXNCb3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgYmFja2Ryb3Auc2V0SGVpZ2h0KFN0cnVtMmQuTWFpbi5jYW52YXNCb3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkVWlFbGVtZW50KGJhY2tkcm9wKTtcbiAgICAgICAgdmFyIGx0MSA9IG5ldyBTdHJ1bTJkLkxheW91dCgpO1xuICAgICAgICBsdDEueiA9IGJhY2tkcm9wLnogKyAxO1xuICAgICAgICBsdDEuc2V0RmxvYXQoU3RydW0yZC5MYXlvdXRGbG9hdC5DRU5URVJfSCwgU3RydW0yZC5MYXlvdXRGbG9hdC5DRU5URVJfVik7XG4gICAgICAgIGx0MS5zZXRMYXlvdXREaXJlY3Rpb24oU3RydW0yZC5MYXlvdXREaXJlY3Rpb24uVkVSVElDQUwpO1xuICAgICAgICBsdDEuc2V0QWxpZ25JdGVtcyhTdHJ1bTJkLkxheW91dEFsaWdubWVudC5DRU5URVIpO1xuICAgICAgICBsdDEuZHJhd0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICBsdDEuc2V0U2hhZG93Qmx1cigzNik7XG4gICAgICAgIGx0MS5zZXRNYXJnaW4oMjApO1xuICAgICAgICB0aGlzLmFkZFVpRWxlbWVudChsdDEpO1xuICAgICAgICB2YXIgdHh0VGl0bGUgPSBuZXcgU3RydW0yZC5MYWJlbChcIkNvbnRyb2xzXCIpO1xuICAgICAgICB0eHRUaXRsZS5zZXRGb250KFN0cnVtMmQuRm9udC5ST0JPVE9fQk9MRCwgMzYpO1xuICAgICAgICB0eHRUaXRsZS5zZXRUZXh0Q29sb3IoXCIjZmVmZWZlXCIpO1xuICAgICAgICBsdDEuYWRkQ29tcG9uZW50KHR4dFRpdGxlKTtcbiAgICAgICAgdmFyIHR4dEluZm8gPSBuZXcgU3RydW0yZC5UZXh0QXJlYSgpO1xuICAgICAgICB0eHRJbmZvLnNldEZvbnQoU3RydW0yZC5Gb250LlNPVVJDRV9DT0RFX1BSTywgMTYpO1xuICAgICAgICB0eHRJbmZvLnNldExpbmVIZWlnaHQoMS4zKTtcbiAgICAgICAgdHh0SW5mby5zZXRUZXh0Q29sb3IoXCIjZmVmZWZlXCIpO1xuICAgICAgICB0eHRJbmZvLnNldFRleHQoXCJ7RW50ZXJ9OiBQcm9jZWVkIG9uZSBzdGVwIGluIHRoZSBzaW11bGF0aW9uLiBcXG5cIlxuICAgICAgICAgICAgKyBcIntTcGFjZX06IEF1dG9tYXRpY2FsbHkgcHJvY2VlZCBpbiB0aGUgc2ltdWxhdGlvbi4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7LH06IERlY3JlYXNlIFNQUy4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7Ln06IEluY3JlYXNlIFNQUy4gXFxuXCJcbiAgICAgICAgICAgICsgXCJ7Z306IFRvZ2dsZSBncmlkLiBcXG5cIlxuICAgICAgICAgICAgKyBcInt3fXthfXtzfXtkfTogQ29udHJvbCB0aGUgY2FtZXJhLiBcXG5cIlxuICAgICAgICAgICAgKyBcIntDdHJsfSt7bW91c2Ugd2hlZWx9OiBDb250cm9sIGNhbWVyYSB6b29tLiBcXG5cIlxuICAgICAgICAgICAgKyBcInstfXsrfTogQ29udHJvbCBjYW1lcmEgem9vbS4gXFxuXCIpO1xuICAgICAgICBsdDEuYWRkQ29tcG9uZW50KHR4dEluZm8pO1xuICAgICAgICBjb25zb2xlLmxvZyh0eHRJbmZvKTtcbiAgICAgICAgdmFyIGJ0bkNsb3NlID0gbmV3IFN0cnVtMmQuQnV0dG9uKCk7XG4gICAgICAgIGJ0bkNsb3NlLnNldFRleHQoXCJDTE9TRVwiKTtcbiAgICAgICAgYnRuQ2xvc2UuZ2V0TW91c2VIYW5kbGVyKCkubW91c2VMZWZ0VXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBEaXNwb3NlIHNjZW5lXG4gICAgICAgICAgICBfdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGx0MS5hZGRDb21wb25lbnQoYnRuQ2xvc2UpO1xuICAgIH07XG4gICAgQ29udHJvbHNNb2RhbC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIENvbnRyb2xzTW9kYWwucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udHJvbHNNb2RhbDtcbn0oU3RydW0yZC5TY2VuZSkpO1xuZXhwb3J0IHsgQ29udHJvbHNNb2RhbCB9O1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mvc3RydW0tMmQuZC50c1wiIC8+XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vQ2VsbFwiO1xuaW1wb3J0IHsgQ2VsbEV2ZW50IH0gZnJvbSBcIi4vQ2VsbEV2ZW50XCI7XG52YXIgR2FtZUdyaWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUdyaWQod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLlNQQVdOX1JBVEUgPSAxIC8gMTAuMDtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gMDtcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSAwO1xuICAgICAgICB0aGlzLmdyaWRIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmNlbGxMaXN0ID0gW1tdXTtcbiAgICAgICAgdGhpcy5jZWxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNlbGxTaXplID0gMDtcbiAgICAgICAgdGhpcy5kcmF3R3JpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0R3JpZFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuZ3JpZFRleHR1cmUgPSBuZXcgU3RydW0yZC5UZXh0dXJlKHRoaXMuZ3JpZFdpZHRoICogdGhpcy5jZWxsU2l6ZSwgdGhpcy5ncmlkSGVpZ2h0ICogdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgIHRoaXMuZ3JpZFRleHR1cmUuc2V0U2hhZG93Qmx1cig2MCk7XG4gICAgICAgIFN0cnVtMmQuTWFpbi5hZGRFbnRpdHkodGhpcy5ncmlkVGV4dHVyZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZFRleHR1cmUpO1xuICAgIH1cbiAgICBHYW1lR3JpZC5wcm90b3R5cGUuc2V0R3JpZFNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmdyaWRIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2VsbENvdW50ID0gd2lkdGggKiBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2VsbFNpemUgPSBTdHJ1bTJkLk1haW4uQ0FOVkFTX0hFSUdIVCAvIHRoaXMuZ3JpZEhlaWdodCAqIDQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FOVkFTX0hFSUdIVDogXCIgKyBTdHJ1bTJkLk1haW4uQ0FOVkFTX0hFSUdIVCArIFwiLCBHUklEIEhFSUdIVDogXCIgKyB0aGlzLmdyaWRIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNFTEwgU0laRTogXCIgKyB0aGlzLmNlbGxTaXplKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFRleHR1cmUuc2V0V2lkdGgodGhpcy5ncmlkV2lkdGggKiB0aGlzLmNlbGxTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFRleHR1cmUuc2V0SGVpZ2h0KHRoaXMuZ3JpZEhlaWdodCAqIHRoaXMuY2VsbFNpemUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lR3JpZC5wcm90b3R5cGUuc2V0RHJhd0dyaWQgPSBmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICB0aGlzLmRyYXdHcmlkID0gZmxhZztcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuY2VsbExpc3Q7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gX2FbX2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCByb3dfMSA9IHJvdzsgX2IgPCByb3dfMS5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHJvd18xW19iXTtcbiAgICAgICAgICAgICAgICBjZWxsLmRyYXdPdXRsaW5lID0gZmxhZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZHJhd1RleHR1cmUoKTtcbiAgICB9O1xuICAgIEdhbWVHcmlkLnByb3RvdHlwZS5yZWRyYXdUZXh0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdyaWRUZXh0dXJlLmNsZWFyKCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmNlbGxMaXN0OyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJvdyA9IF9hW19pXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgcm93XzIgPSByb3c7IF9iIDwgcm93XzIubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGwgPSByb3dfMltfYl07XG4gICAgICAgICAgICAgICAgY2VsbC5kcmF3KHRoaXMuZ3JpZFRleHR1cmUuZzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lR3JpZC5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGluaXQgYXJyYXlcbiAgICAgICAgdGhpcy5jZWxsTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JpZFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbExpc3RbaV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuZ3JpZEhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMuZ3JpZFdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IG5ldyBDZWxsKHgsIHksIHRoaXMuY2VsbFNpemUpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QWxpdmUoTWF0aC5yYW5kb20oKSA8IHRoaXMuU1BBV05fUkFURSk7XG4gICAgICAgICAgICAgICAgY2VsbC5kcmF3T3V0bGluZSA9IHRoaXMuZHJhd0dyaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsTGlzdFt4XVt5XSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgLy8gU3RydW0yZC5NYWluLmFkZEVudGl0eShjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZHJhd1RleHR1cmUoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gMTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRJbmZvKCkpO1xuICAgIH07XG4gICAgR2FtZUdyaWQucHJvdG90eXBlLnNpbXVsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGVuZGluZ0V2ZW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5jZWxsTGlzdDsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciByb3cgPSBfYVtfaV07XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIHJvd18zID0gcm93OyBfYiA8IHJvd18zLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBjZWxsID0gcm93XzNbX2JdO1xuICAgICAgICAgICAgICAgIHZhciBsaXZlTmVpZ2hib3VycyA9IHRoaXMuZ2V0TGl2ZU5laWdoYm91cnMoY2VsbCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzQWxpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISgyIDw9IGxpdmVOZWlnaGJvdXJzICYmIGxpdmVOZWlnaGJvdXJzIDw9IDMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRXZlbnRzLnB1c2gobmV3IENlbGxFdmVudChDZWxsRXZlbnQuS0lMTCwgY2VsbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGl2ZU5laWdoYm91cnMgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V2ZW50cy5wdXNoKG5ldyBDZWxsRXZlbnQoQ2VsbEV2ZW50LlJFU1VSUkVDVCwgY2VsbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9jID0gMCwgcGVuZGluZ0V2ZW50c18xID0gcGVuZGluZ0V2ZW50czsgX2MgPCBwZW5kaW5nRXZlbnRzXzEubGVuZ3RoOyBfYysrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRfMSA9IHBlbmRpbmdFdmVudHNfMVtfY107XG4gICAgICAgICAgICBpZiAoZXZlbnRfMS5ldmVudFR5cGUgPT0gQ2VsbEV2ZW50LktJTEwpIHtcbiAgICAgICAgICAgICAgICBldmVudF8xLnN1YmplY3Quc2V0QWxpdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGV2ZW50XzEuc3ViamVjdC5zZXRIYXNEaWVkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnRfMS5ldmVudFR5cGUgPT0gQ2VsbEV2ZW50LlJFU1VSUkVDVCkge1xuICAgICAgICAgICAgICAgIGV2ZW50XzEuc3ViamVjdC5zZXRBbGl2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZHJhd1RleHR1cmUoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uKys7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0SW5mbygpKTtcbiAgICB9O1xuICAgIEdhbWVHcmlkLnByb3RvdHlwZS5nZXRMaXZlTmVpZ2hib3VycyA9IGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgeSA9IGNlbGwuZ3JpZFkgLSAxOyB5IDw9IGNlbGwuZ3JpZFkgKyAxOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHggPSBjZWxsLmdyaWRYIC0gMTsgeCA8PSBjZWxsLmdyaWRYICsgMTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gMCAmJiB5ID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgeCA8PSB0aGlzLmdyaWRXaWR0aCAtIDEgJiYgeSA8PSB0aGlzLmdyaWRIZWlnaHQgLSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbExpc3RbeF1beV0uaWQgIT0gY2VsbC5pZCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxMaXN0W3hdW3ldLmlzQWxpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNlbGxMaXN0W3hdW3ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEdhbWVHcmlkLnByb3RvdHlwZS5nZXRJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJHRU5FUkFUSU9OOiBcIiArIHRoaXMuZ2VuZXJhdGlvbiArIFwiIC0gTElWRSBDRUxMUzogXCIgKyB0aGlzLm51bUxpdmVDZWxscygpICsgXCIgb2YgXCIgKyB0aGlzLmNlbGxDb3VudDtcbiAgICB9O1xuICAgIEdhbWVHcmlkLnByb3RvdHlwZS5udW1MaXZlQ2VsbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5jZWxsTGlzdDsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gX2FbX2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBsaXN0XzEgPSBsaXN0OyBfYiA8IGxpc3RfMS5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IGxpc3RfMVtfYl07XG4gICAgICAgICAgICAgICAgc3VtICs9IGNlbGwuaXNBbGl2ZSgpID8gMSA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lR3JpZDtcbn0oKSk7XG5leHBvcnQgeyBHYW1lR3JpZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==