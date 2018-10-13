import { Rectangle } from "../maths/Rectangle";
import { Ray } from "./Ray";
import { RayPlacement } from "./RayPlacement";
import { Segment } from "../maths/Segment";
import { SegmentIntersectionEvent } from "../maths/SegmentIntersectionEvent";
export declare class CollisionBounds {
    bounds: Rectangle;
    rays: Ray[];
    offX: number;
    offY: number;
    constructor(bounds?: Rectangle);
    getBoundSegments(): Segment[];
    updateData(x: number, y: number, vecX: number, vecY: number): void;
    getCollisionData(targetSegments: Segment[]): SegmentIntersectionEvent[];
    getRaysOfType(type: RayPlacement): Ray[];
    draw(g2: CanvasRenderingContext2D): void;
}
