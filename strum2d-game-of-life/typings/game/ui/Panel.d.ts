import { Component } from "../Component";
export declare class Panel extends Component {
    constructor(width: number, height: number, x?: number, y?: number);
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
