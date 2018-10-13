import { Point } from "./Point";
import { Vector2 } from "./Vector2";
import { SegmentIntersectionEvent } from "./SegmentIntersectionEvent";
export declare class Segment {
    x: number;
    y: number;
    vecX: number;
    vecY: number;
    constructor(x: number, y: number, vecX: number, vecY: number);
    update(x?: number, y?: number, vecX?: number, vecY?: number): void;
    draw(g2: CanvasRenderingContext2D): void;
    /** Returns the length (magnitude) of the vector. */
    getLength(): number;
    /** Return a new Vector2 that is the normal of the original. */
    getNormal(): Segment;
    getCenter(): Point;
    /** Returns the a new Vector2 that is the unit of the original. */
    getUnit(): Segment;
    getVector(): Vector2;
    multiply(multiplier: number): void;
    divide(divisor: number): void;
    /** Adjusts the magnitude of the vector by specified amount */
    resize(length: number): void;
    clone(): Segment;
    /** Checks for intersection with specified segment, and returns results in the form of an event. */
    intersect(seg: Segment): SegmentIntersectionEvent;
}
