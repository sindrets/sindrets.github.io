import { Component } from "../Component";
export declare class Texture extends Component {
    private canvas;
    g2: CanvasRenderingContext2D;
    constructor(width: number, height: number);
    clear(): void;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
