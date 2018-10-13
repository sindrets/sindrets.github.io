/// <reference path="../typings/strum-2d.d.ts" />

import { GameGrid } from "./GameGrid";
import { ControlsModal } from "./ControlsModal"
import { Handler, Label, InputField } from "strum-2dings/index";

export class App extends Strum2d.Scene {

	private GRID_WIDTH = 100;
	private GRID_HEIGHT = 100;

	private controlsModal: ControlsModal;
	private handler: Handler;
	private gameGrid: GameGrid;
	private txtGenInfo!: Label;
	private txtSpeedInfo!: Label;
	private txtWidth!: InputField;
	private txtHeight!: InputField;

	private autoSimulate: boolean = false;
    private autoSimTimeout: number = 50;
    private last: number;
    private lastFrame: number = 0;

	constructor() {
		super();
		this.visible = true;
		this.mutable = true;
		this.overlay = false;
		Strum2d.Main.skipSplash = false;

		this.last = performance.now();
		this.controlsModal = new ControlsModal();
		this.gameGrid = new GameGrid(this.GRID_WIDTH, this.GRID_HEIGHT);
		this.handler = new Strum2d.Handler(Strum2d.Main.canvasBounds);
		this.handler.getKeyHandler().keyDown = (e) => {
			// console.log(e.key);
			if (e.key.toLowerCase() == "enter") {
				this.gameGrid.simulate();
				this.updateGenInfo();
			}
			if (e.key.toLowerCase() == " ") {
				this.autoSimulate = !this.autoSimulate;
				console.log("AUTO SIMULATE: " + this.autoSimulate);
			}
			if (e.key == ".") {
				this.autoSimTimeout /= 1.5;
				this.updateSpeedInfo();
				console.log("Increasing simulation speed. Curret timeout: "+ this.autoSimTimeout);
			}
			if (e.key == ",") {
				this.autoSimTimeout *= 1.5;
				this.updateSpeedInfo();
				console.log("Decreasing simulation speed. Curret timeout: "+ this.autoSimTimeout);
			}
			if (e.key.toLowerCase() == "r") {
				this.regenerate();
			}
			if (e.key.toLowerCase() == "g") {
				this.gameGrid.setDrawGrid(!this.gameGrid.drawGrid);
			}
		}

		this.handler.update = () => {
			if (this.autoSimulate) {
				if (!Strum2d.Main.paused) {
					let now = performance.now();
					if (now - this.last >= this.autoSimTimeout) {
						this.last = now;
						this.gameGrid.simulate();
						this.updateGenInfo();
					}
				}
			}
		}
	}

	private centerCamera() {
		// zoom to fit ratio
		let margin = 800;
		let ratio = Math.min(
			Strum2d.Main.CANVAS_WIDTH / (this.gameGrid.gridTexture.width + margin),
			Strum2d.Main.CANVAS_HEIGHT / (this.gameGrid.gridTexture.height + margin)
		)
		Strum2d.Main.camera.move(this.gameGrid.gridTexture.getCenter());
		Strum2d.Main.camera.setZoom(ratio);
	}

	private regenerate() {
		this.GRID_WIDTH = parseInt(this.txtWidth.text);
		this.GRID_HEIGHT = parseInt(this.txtHeight.text);
		this.gameGrid.setGridSize(this.GRID_WIDTH, this.GRID_HEIGHT);
		this.gameGrid.generate();
		this.updateGenInfo();
	}

	private updateGenInfo() {
		this.txtGenInfo.setText(this.gameGrid.getInfo());
	}
	private updateSpeedInfo() {
		this.txtSpeedInfo.setText("SPS: " + (1000 / this.autoSimTimeout).toFixed(1));
	}
	
	/**
	 * Called every time this scene is loaded
	 */
	load(): void {
		this.gameGrid.setGridSize(this.GRID_WIDTH, this.GRID_HEIGHT);
		Strum2d.Main.camera.setFreeCamMode(true);
		this.centerCamera();
		this.gameGrid.generate();
	}

	/**
	 * Called the first time this scene is loaded
	 */
	initScene(): void {
		Strum2d.Main.addHandler(this.handler);

		// GUI
		let pnlControls = new Strum2d.Layout();
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

		let btnGenerate = new Strum2d.Button();
		btnGenerate.setText("GENERATE");
		btnGenerate.getMouseHandler().mouseLeftUp = (p) =>{
			this.regenerate();
			this.centerCamera();
		}
		pnlControls.addComponent(btnGenerate);

		let btnControls = new Strum2d.Button();
		btnControls.setText("CONTROLS");
		btnControls.getMouseHandler().mouseLeftUp = (p) =>{
			Strum2d.Main.requestScene(this.controlsModal);
		}
		pnlControls.addComponent(btnControls);

		// BOTTOM PANEL
		let pnlInfo = new Strum2d.Layout();
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
		let pnlRow1 = new Strum2d.Layout();
		pnlRow1.setLayoutDirection(Strum2d.LayoutDirection.HORIZONTAL);
		pnlRow1.setAlignItems(Strum2d.LayoutAlignment.CENTER);
		pnlRow1.setMarginTop(0);
		pnlRow1.setMarginBottom(0);
		pnlRow1.setMarginLeft(10);
		pnlRow1.setMarginRight(10);
		pnlInfo.addComponent(pnlRow1);

		let btnMinus = new Strum2d.Button();
		this.txtSpeedInfo = new Strum2d.Label();
		let btnPlus = new Strum2d.Button();
		
		btnMinus.setText("-");
		btnMinus.getMouseHandler().mouseLeftUp = (p) =>{
			this.autoSimTimeout *= 1.5;
			this.updateSpeedInfo()
		}
		pnlRow1.addComponent(btnMinus);

		this.txtSpeedInfo.setTextColor("#CECECE");
		this.txtSpeedInfo.setFont(Strum2d.Font.ROBOTO_BOLD);
		this.updateSpeedInfo();
		pnlRow1.addComponent(this.txtSpeedInfo);
		console.log(this.txtSpeedInfo);
		
		btnPlus.setText("+");
		btnPlus.getMouseHandler().mouseLeftUp = (p) =>{
			this.autoSimTimeout /= 1.5;
			this.updateSpeedInfo();
		}
		pnlRow1.addComponent(btnPlus);

		this.txtGenInfo = new Strum2d.Label();
		this.txtGenInfo.setFont(Strum2d.Font.ROBOTO_BOLD);
		this.txtGenInfo.setTextColor("#CECECE");
		this.updateGenInfo();
		pnlRow1.addComponent(this.txtGenInfo);

		let btnNext = new Strum2d.Button();
		btnNext.setText("NEXT");
		btnNext.getMouseHandler().mouseLeftUp = (p) =>{
			this.gameGrid.simulate();
			this.updateGenInfo();
		}
		pnlRow1.addComponent(btnNext);

		let btnAuto = new Strum2d.Button();
		btnAuto.setText("AUTO");
		btnAuto.getMouseHandler().mouseLeftUp = (p) =>{
			this.autoSimulate = !this.autoSimulate;
		}
		pnlRow1.addComponent(btnAuto);

		// ROW 2
		let pnlRow2 = new Strum2d.Layout();
		pnlRow2.setLayoutDirection(Strum2d.LayoutDirection.HORIZONTAL);
		pnlRow2.setAlignItems(Strum2d.LayoutAlignment.END);
		pnlRow2.setMarginTop(5);
		pnlRow2.setMarginBottom(5);
		pnlRow2.setMarginLeft(5);
		pnlRow2.setMarginRight(5);
		pnlInfo.addComponent(pnlRow2);

		let txtSPSExplanation = new Strum2d.Label("*SPS: simulations per second");
		txtSPSExplanation.setFontSize(11);
		txtSPSExplanation.setTextColor("#CECECE");
		txtSPSExplanation.setFont(Strum2d.Font.ROBOTO_REGULAR);
		pnlRow2.addComponent(txtSPSExplanation);
		console.log(txtSPSExplanation);
	}

	/**
	 * Called on every tick while this scene is loaded
	 */
	tick(): void {}

}

Strum2d.Main.requestScene(new App());