import { Rectangle } from "../maths/Rectangle";
import { MouseHandler } from "../util/MouseHandler";
import { KeyHandler } from "../util/KeyHandler";
import { CollisionHandler } from "../physics/CollisionHandler";
import { Point } from "../maths/Point";
import { Vector2 } from "../maths/Vector2";
import { Handler } from "../util/Handler";
declare var Entity: typeof IEntity;
/**
 * Workaround for circular dependencies. Must be called ***before*** extending `Entity`.
 * Example:
 * ```
 * import { Entity, initEntity } from "./Entity";
 * initEntity();
 * export class MyClass extends Entity {...}
 * ```
 */
export declare function initEntity(): void;
export { Entity };
/**
 * Describes the properties of all drawable objects.
 * All drawable objects should extend this class.
 */
export declare abstract class IEntity {
    id: number;
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    width: number;
    height: number;
    rotation: number;
    timeMultiplier: number;
    friction: number;
    restitution: number;
    mass: number;
    solid: boolean;
    physicsObject: boolean;
    visible: boolean;
    opacity: number;
    shadowBlur: number;
    shadowColor: string;
    shadowOffset: Vector2;
    bounds: Rectangle;
    preferredCoordSpace: CoordSpace;
    handlers: Handler[];
    mouseHandler?: MouseHandler;
    keyHandler?: KeyHandler;
    collisionHandler?: CollisionHandler;
    transformListeners: (() => void)[];
    update?: () => void;
    abstract draw(g2: CanvasRenderingContext2D): void;
    abstract tick(): void;
    updateBounds(): void;
    triggerTransformListeners(): void;
    addTransformListener(callback: () => void): void;
    removeTransformListener(callback: () => void): boolean;
    dispose(recursive?: boolean): boolean;
    setX(x: number): void;
    setY(y: number): void;
    modX(value: number): void;
    modY(value: number): void;
    setPos(pos: Point): void;
    modPos(pos: Vector2 | Point): void;
    setVx(value: number): void;
    setVy(value: number): void;
    modVx(value: number): void;
    modVy(value: number): void;
    getBounds(): Rectangle;
    setWidth(width: number): void;
    setHeight(height: number): void;
    setSize(width: number, height: number): void;
    setVisible(flag: boolean): void;
    setOpacity(value: number): void;
    setShadowBlur(value: number, offX?: number, offY?: number): void;
    setShadowColor(color: string): void;
    setPrefferedCoordSpace(value: CoordSpace): void;
    addHandler(handler: Handler): Handler;
    getHandlers(): Handler[] | undefined;
    getMouseHandler(): MouseHandler;
    getKeyHandler(): KeyHandler;
    getCollisionHandler(): CollisionHandler;
    getPos(): Vector2;
    getCenter(): Vector2;
}
export declare enum CoordSpace {
    /** The world coordinate system. Up is (y > 0). */
    WORLD_SPACE = 0,
    /** Coordinate system relative to the camera. Origin (0, 0) is always at the top-left of the canvas. Up is (y < 0). */
    CAMERA_SPACE = 1
}
