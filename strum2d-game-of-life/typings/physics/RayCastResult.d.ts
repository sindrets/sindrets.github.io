import { SegmentIntersectionEvent } from "../maths/SegmentIntersectionEvent";
import { Vector2 } from "../maths/Vector2";
export declare class RayCastResult {
    collisions: SegmentIntersectionEvent[];
    closestCollision: SegmentIntersectionEvent;
    closestHitVector: Vector2;
    constructor(collisions: SegmentIntersectionEvent[], closestCollision?: SegmentIntersectionEvent);
}
