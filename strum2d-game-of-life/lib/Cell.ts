/// <reference path="../typings/strum-2d.d.ts" />

export class Cell extends Strum2d.Component {

    private size: number;
    private alive: boolean = false;
    private hasDied: boolean = false;

    public gridX: number;
    public gridY: number;
    public drawOutline: boolean = true;

    constructor(x: number, y: number, size: number = 1) {
        super();
        this.size = size;
        this.setWidth(size);
        this.setHeight(size);
        this.gridX = x;
        this.gridY = y;
        this.setX(x * this.size);
        this.setY(y * this.size);
        this.setSecondaryColor("#444444");
    }

    public isAlive(): boolean {
        return this.alive;
    }

    public setAlive(flag: boolean) {
        this.alive = flag;
        if (flag) {
            this.setPrimaryColor("#8bc34a");
        } else this.setPrimaryColor("#ffffff");
    }

    public setHasDied(flag: boolean) {
        this.hasDied = flag;
        this.setPrimaryColor("#a6ecd6");
    }
    
    draw(g2: CanvasRenderingContext2D): void {
        g2.fillStyle = this.primaryColor;
        g2.strokeStyle = this.secondaryColor;
        g2.lineWidth = 1;
        g2.fillRect(this.x, this.y, this.width, this.height);
        if (this.drawOutline)
            g2.strokeRect(this.x, this.y, this.width, this.height);
    }
    tick(): void {
    }

}