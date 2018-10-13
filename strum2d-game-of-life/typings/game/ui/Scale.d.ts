import { Component } from "../Component";
import { Label } from "./Label";
export declare class Scale extends Component {
    label: Label;
    labelX: number;
    labelY: number;
    plateHeight: number;
    baseHeight: number;
    pistonWidth: number;
    constructor(x?: number, y?: number);
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
