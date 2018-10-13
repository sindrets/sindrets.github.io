import { IEntity as Entity } from "../game/Entity";
import { RayPlacement } from "./RayPlacement";
export declare class CollisionEvent {
    parent: Entity;
    target: Entity;
    type: RayPlacement;
    distance: number;
    constructor(parent: Entity, target: Entity, type?: RayPlacement, distance?: number);
}
