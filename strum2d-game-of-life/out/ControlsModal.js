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
            + "{r}: Regenerate cell grid. \n"
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
export { ControlsModal };
