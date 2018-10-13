import { Point } from "./Point";
import { Vector2 } from "./Vector2";
export declare class Rectangle {
    width: number;
    height: number;
    x: number;
    y: number;
    constructor(width: number, height: number, x?: number, y?: number);
    contains(point: Point | Vector2): boolean;
    /** Hit-test for intersection with another Rectangle */
    rectIntersect(rect: Rectangle): boolean;
    clone(): Rectangle;
    /** Draws the rectangle with the current graphics settings */
    draw(g2: CanvasRenderingContext2D): void;
}
