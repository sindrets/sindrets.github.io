import { Segment } from "./Segment";
import { IntersectTypes } from "./IntersectTypes";
import { Point } from "./Point";
import { IEntity as Entity } from "../game/Entity";
export declare class SegmentIntersectionEvent {
    parent: Segment;
    target: Segment;
    type: IntersectTypes;
    intersection?: Point;
    distance: number;
    targetObject?: Entity;
    constructor(parent: Segment, target: Segment, type: IntersectTypes, x?: number, y?: number, targetObject?: Entity);
}
