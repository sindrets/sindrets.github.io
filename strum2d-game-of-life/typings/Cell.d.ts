/// <reference path="strum-2d.d.ts" />
export declare class Cell extends Strum2d.Component {
    private size;
    private alive;
    private hasDied;
    gridX: number;
    gridY: number;
    drawOutline: boolean;
    constructor(x: number, y: number, size?: number);
    isAlive(): boolean;
    setAlive(flag: boolean): void;
    setHasDied(flag: boolean): void;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
