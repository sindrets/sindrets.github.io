/// <reference path="../typings/strum-2d.d.ts" />

export class ControlsModal extends Strum2d.Scene {

	constructor() {
		super();
		this.overlay = true;
		this.mutable = true;
		this.visible = true;
	}
	
	public initScene(): void {

		let backdrop = new Strum2d.Panel(Strum2d.Main.CANVAS_WIDTH, Strum2d.Main.CANVAS_HEIGHT);
		backdrop.z = 9000;
		backdrop.setOpacity(0.6);
		backdrop.setPrimaryColor("#000000");
		Strum2d.Main.canvasBounds.addTransformListener(() => {
			backdrop.setWidth(Strum2d.Main.canvasBounds.width);
			backdrop.setHeight(Strum2d.Main.canvasBounds.height);
		});
		this.addUiElement(backdrop);

		let lt1 = new Strum2d.Layout();
		lt1.z = backdrop.z + 1;
		lt1.setFloat(Strum2d.LayoutFloat.CENTER_H, Strum2d.LayoutFloat.CENTER_V);
		lt1.setLayoutDirection(Strum2d.LayoutDirection.VERTICAL);
		lt1.setAlignItems(Strum2d.LayoutAlignment.CENTER);
		lt1.drawBackground = true;
		lt1.setShadowBlur(36);
		lt1.setMargin(20);
		this.addUiElement(lt1);

		let txtTitle = new Strum2d.Label("Controls");
		txtTitle.setFont(Strum2d.Font.ROBOTO_BOLD, 36);
		txtTitle.setTextColor("#fefefe");
		lt1.addComponent(txtTitle);

		let txtInfo = new Strum2d.TextArea();
		txtInfo.setFont(Strum2d.Font.SOURCE_CODE_PRO, 16);
		txtInfo.setLineHeight(1.3);
		txtInfo.setTextColor("#fefefe");
		txtInfo.setText(
			  "{Enter}: Proceed one step in the simulation. \n"
			+ "{Space}: Automatically proceed in the simulation. \n"
			+ "{r}: Regenerate cell grid. \n"
			+ "{,}: Decrease SPS. \n"
			+ "{.}: Increase SPS. \n"
			+ "{g}: Toggle grid. \n"
			+ "{w}{a}{s}{d}: Control the camera. \n"
			+ "{Ctrl}+{mouse wheel}: Control camera zoom. \n"
			+ "{-}{+}: Control camera zoom. \n"
		);
		lt1.addComponent(txtInfo);
		console.log(txtInfo);

		let btnClose = new Strum2d.Button();
		btnClose.setText("CLOSE");
		btnClose.getMouseHandler().mouseLeftUp = () => {
			// Dispose scene
			this.dispose();
		}
		lt1.addComponent(btnClose);

	}

	public load(): void {
	}

	public tick(): void {
	}

}