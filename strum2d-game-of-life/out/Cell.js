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
export { Cell };
