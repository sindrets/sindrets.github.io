import { Component } from "./Component";
export declare class Particle extends Component {
    protected radius: number;
    constructor(x?: number, y?: number);
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
