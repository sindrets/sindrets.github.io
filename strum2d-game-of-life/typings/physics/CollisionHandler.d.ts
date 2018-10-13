import { IEntity as Entity } from "../game/Entity";
import { CollisionBounds } from "./CollisionBounds";
import { CollisionEvent } from "./CollisionEvent";
import { Point } from "../maths/Point";
export declare class CollisionHandler {
    parent: Entity;
    collisionBounds: CollisionBounds;
    collision: (e: CollisionEvent) => void;
    lastCollision: CollisionEvent | undefined;
    lastCollisionPoint: Point | undefined;
    collisionTarget: Entity;
    private lastX;
    private lastY;
    private rayResize;
    private collisionSegment;
    constructor(parent: Entity);
    dispose(): void;
    draw(g2: CanvasRenderingContext2D): void;
    resolveMovementCollision(): void;
    isGrounded(threshold: number): boolean;
    tick(): void;
}
