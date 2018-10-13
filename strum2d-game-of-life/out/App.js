/// <reference path="../typings/strum-2d.d.ts" />
var __extends = (this && this.__extends) || (function () {
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
import { GameGrid } from "./GameGrid";
import { ControlsModal } from "./ControlsModal";
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
        _this.controlsModal = new ControlsModal();
        _this.gameGrid = new GameGrid(_this.GRID_WIDTH, _this.GRID_HEIGHT);
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
export { App };
Strum2d.Main.requestScene(new App());
