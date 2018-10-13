import { MouseHandler } from "./MouseHandler";
import { KeyHandler } from "./KeyHandler";
import { CollisionHandler } from "../physics/CollisionHandler";
import { IEntity as Entity } from "../game/Entity";
export declare class Handler {
    protected parent: Entity;
    mouseHandler?: MouseHandler;
    keyHandler?: KeyHandler;
    collisionHandler?: CollisionHandler;
    update?: () => void;
    constructor(parent: Entity);
    getMouseHandler(): MouseHandler;
    getKeyHandler(): KeyHandler;
    getCollisionHandler(): CollisionHandler;
}
