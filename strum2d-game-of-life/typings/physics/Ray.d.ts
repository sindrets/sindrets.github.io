import { Segment } from "../maths/Segment";
import { RayPlacement } from "./RayPlacement";
import { RayCastResult } from "./RayCastResult";
import { IEntity as Entity } from "../game/Entity";
export declare class Ray extends Segment {
    ox: number;
    oy: number;
    offX: number;
    offY: number;
    placement: RayPlacement;
    parent: Entity;
    constructor(ox: number, oy: number, vecX: number, vecY: number, offX?: number, offY?: number, placement?: RayPlacement, parent?: Entity);
    updatePos(ox: number, oy: number, vecX?: number, vecY?: number): void;
    cast(): RayCastResult;
    private getCollisionData;
}
