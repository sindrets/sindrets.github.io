declare module 'strum-2dings/maths/Point' {
	export class Point {
	    x: number;
	    y: number;
	    constructor(x?: number, y?: number);
	    toString(fractionDigits?: number): string;
	    draw(g2: CanvasRenderingContext2D, radius?: number): void;
	}

}
declare module 'strum-2dings/maths/Vector2' {
	export class Vector2 {
	    x: number;
	    y: number;
	    constructor(x: number, y: number);
	    update(a: Vector2 | number, y?: number): void;
	    add(vec: Vector2): Vector2;
	    subtract(vec: Vector2): Vector2;
	    multiply(vec: Vector2): Vector2;
	    multiplyNum(multiplier: number): Vector2;
	    divide(vec: Vector2): Vector2;
	    divideNum(divisor: number): Vector2;
	    getLength(): number;
	    normalize(): Vector2;
	    cross(vec: Vector2): number;
	    dot(vec: Vector2): number;
	    inverse(): Vector2;
	    /**
	     * Sets the magnitude of the vector.
	     * @param length Target length
	     */
	    setLength(length: number): void;
	    /**
	     * Adjusts the magnitude of the vector by specified amount.
	     * @param magnitude
	     */
	    modLength(magnitude: number): void;
	    distance(a: Vector2): number;
	    clone(): Vector2;
	    toString(fractionDigits?: number): string;
	    /** Linearily interpolate between two vectors */
	    static lerp(v0: Vector2, v1: Vector2, t: number): Vector2;
	}

}
declare module 'strum-2dings/maths/IntersectTypes' {
	export enum IntersectTypes {
	    DONT_INTERSECT = 0,
	    COLLINEAR = 1,
	    DO_INTERSECT = 2
	}

}
declare module 'strum-2dings/maths/SegmentIntersectionEvent' {
	import { Segment } from 'strum-2dings/maths/Segment';
	import { IntersectTypes } from 'strum-2dings/maths/IntersectTypes';
	import { Point } from 'strum-2dings/maths/Point';
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	export class SegmentIntersectionEvent {
	    parent: Segment;
	    target: Segment;
	    type: IntersectTypes;
	    intersection?: Point;
	    distance: number;
	    targetObject?: Entity;
	    constructor(parent: Segment, target: Segment, type: IntersectTypes, x?: number, y?: number, targetObject?: Entity);
	}

}
declare module 'strum-2dings/maths/Segment' {
	import { Point } from 'strum-2dings/maths/Point';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	import { SegmentIntersectionEvent } from 'strum-2dings/maths/SegmentIntersectionEvent';
	export class Segment {
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

}
declare module 'strum-2dings/util/CssUtils' {
	export class CssUtils {
	    static createStyleSheet(id?: string, domClass?: string): CSSStyleSheet;
	    static styleExists(selector?: string): boolean;
	    static getStyleSheet(selector?: string, domClass?: string): CSSStyleSheet | null;
	    static clearRule(id: string | undefined, selector: string): CSSStyleSheet | undefined;
	}

}
declare module 'strum-2dings/util/Utils' {
	import { Point } from 'strum-2dings/maths/Point';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	/**
	 * A collection of useful functions
	 */
	export class Utils {
	    static mouseX: number;
	    static mouseY: number;
	    /** Converts degrees to radians */
	    static toRadians(degrees: number): number;
	    /** Converts radians to degrees */
	    static toDegrees(radians: number): number;
	    /** Return the difference between two values */
	    static dif(a: number, b: number): number;
	    /** Get the current mouse position relative to the canvas top-left. */
	    static getMousePos(): Point;
	    /** Convert camera space coordinate to a world space coordinate */
	    static toWorldPos(p: Point | Vector2): Vector2;
	    static toCameraPos(p: Point | Vector2): Vector2;
	    /** Get the world space position under the mouse cursor. */
	    static getWorldPos(): Vector2;
	    /** Convert client coordinate to a canvas coordinate (camera space). */
	    static toCanvasPos(clientPos: Point): Vector2;
	    /** Return the value if it belongs between the given range. Otherwise
	    return the closest of the extremes. */
	    static clamp(value: number, min: number, max: number): number;
	    /** Returns true if the two ranges overlap */
	    static rangeIntersect(min0: number, max0: number, min1: number, max1: number): boolean;
	    /** Returns true if both numbers have the same sign */
	    static sameSign(a: number, b: number): boolean;
	    /** Convert a Vector2 to an angle in degrees */
	    static vecToDeg(vec: Vector2): number;
	    /** Convert an angle in degrees to a Vector2 */
	    static degToVec(degrees: number): Vector2;
	    /** Linearly interpolate between a and b.
	     * Weight t should be in the range [0.0, 1.0] */
	    static lerp(a: number, b: number, t: number): number;
	    /** Translate a point to its rotated position based on camera rotation. */
	    static getRotatedPos(pos: Point | Vector2): Vector2;
	    /** Translate a point to its rotated position based on inverse camera rotation. */
	    static getInverseRotatedPos(pos: Point | Vector2): Vector2;
	    static rotatePos(pos: Point | Vector2, deg: number): Vector2;
	    /** Splice and return the first element from an array. */
	    static spliceFirst(array: Array<any>): any;
	    /** Splice and return the last element from an array. */
	    static spliceLast(array: Array<any>): any;
	    /**
	     * Returns a float between 0 and 1 inclusive, as a logistic function of t.
	     * @param t Time progression. Should be a float between 0 and 1, inclusive.
	     * @param a Horizontal offset. Should be a positive number for sensical results.
	     * @param b Curvature. Setting this to 0 results in a linear function.
	     */
	    static logisticProgression(t: number, a: number, b: number): number;
	    /**
	     * Returns a float between 0 and 1 inclusive, represeting progression through a
	     * cubic bézier curve defined by its four given control points.
	     * @param t Time progression. Should be a float between 0 and 1, inclusive.
	     * @param c1 Control point 1.
	     * @param c2 Control point 2.
	     * @param c0 Control point 0. Defaults to (0,0).
	     * @param c3 Control point 3. Defaults to (1,1).
	     */
	    static cubicBezier(t: number, c1: Point, c2: Point, c0?: Point, c3?: Point): number;
	    static cutStr(text: string, index: number, deleteCount: number): string;
	    static cutString(text: string, start: number, end: number): string;
	    /**
	     * Loads a font face through the compatibillity-safe CSS injection method.
	     * @param fontName The name of the font family.
	     * @param url The URL to the font file.
	     */
	    static loadFont(fontName: string, url: string, properties?: {
	        fontStyle: string;
	        fontWeight: string;
	    }): void;
	    /**
	     * EXPERIMENTAL - Loads a font face from a url using the new experimental FontFace API.
	     * @param fontName The name of the font family.
	     * @param url A URL to a font file
	     * @param callback A function that is called when the font is loaded.
	     */
	    static loadFontFace(fontName: string, url: string, callback?: (fontFace: any) => void): void;
	    static fmod(a: number, b: number): number;
	}

}
declare module 'strum-2dings/maths/Rectangle' {
	import { Point } from 'strum-2dings/maths/Point';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	export class Rectangle {
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

}
declare module 'strum-2dings/util/MultiMouseEvent' {
	export class MultiMouseEvent {
	    mouseMove?: MouseEvent;
	    mouseDown?: MouseEvent;
	    mouseUp?: MouseEvent;
	    constructor(mouseMoveEvent?: MouseEvent, mouseDownEvent?: MouseEvent, mouseUpEvent?: MouseEvent);
	}

}
declare module 'strum-2dings/util/MouseMoveEvent' {
	import { MouseButton } from 'strum-2dings/util/MouseHandler';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	export class MouseMoveEvent {
	    origins: Vector2[];
	    point: Vector2;
	    inBounds: boolean;
	    buttons: MouseButton[];
	    constructor(origins: Vector2[], point: Vector2, inBounds: boolean, buttons: MouseButton[]);
	}

}
declare module 'strum-2dings/game/Component' {
	import { Entity } from 'strum-2dings/game/Entity';
	export abstract class Component extends Entity {
	    protected primaryColor: string;
	    protected secondaryColor: string;
	    setPrimaryColor(color: string): void;
	    setSecondaryColor(color: string): void;
	}

}
declare module 'strum-2dings/util/MultiKeyEvent' {
	export class MultiKeyEvent {
	    handled: boolean;
	    keyPressed?: KeyboardEvent;
	    keyDown?: KeyboardEvent;
	    keyUp?: KeyboardEvent;
	    constructor(keyPressed?: KeyboardEvent, keyDownEvent?: KeyboardEvent, keyUpEvent?: KeyboardEvent);
	}

}
declare module 'strum-2dings/game/ui/Composite' {
	import { Component } from 'strum-2dings/game/Component';
	import { CoordSpace } from 'strum-2dings/game/Entity';
	export class Composite extends Component {
	    stack: Component[];
	    /**
	     * Add a component to the composite.
	     */
	    addComponent(o: Component): void;
	    setPrefferedCoordSpace(value: CoordSpace): void;
	    /**
	     * Push all stack elements as individual entities to the UI stack.
	     * Do not use this if you have pushed the composite itself to the UI stack.
	     */
	    pushAsUi(): void;
	    /**
	     * Push all stack elements as individual entities to the world stack.
	     * Do not use this if you have pushed the composite itself to the world stack.
	     */
	    pushAsWorld(): void;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/ui/LayoutManager' {
	export abstract class LayoutManager {
	    abstract layout(): void;
	}

}
declare module 'strum-2dings/game/ui/Constraint' {
	import { LayoutConstraint } from 'strum-2dings/game/ui/Layout';
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	export class Constraint {
	    subject: LayoutConstraint;
	    anchor: LayoutConstraint;
	    target: Entity;
	    transformHandler: () => void;
	    constructor(subject: LayoutConstraint, anchor: LayoutConstraint, target: Entity, callback: () => void);
	    dispose(): boolean;
	}

}
declare module 'strum-2dings/game/ui/Layout' {
	import { Composite } from 'strum-2dings/game/ui/Composite';
	import { LayoutManager } from 'strum-2dings/game/ui/LayoutManager';
	import { Component } from 'strum-2dings/game/Component';
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	import { Constraint } from 'strum-2dings/game/ui/Constraint';
	export class Layout extends Composite {
	    protected layoutManager: LayoutManager;
	    protected layoutDirection: LayoutDirection;
	    protected justifyContent: LayoutAlignment;
	    protected alignItems: LayoutAlignment;
	    protected parent?: Layout;
	    protected marginTop: number;
	    protected marginBottom: number;
	    protected marginLeft: number;
	    protected marginRight: number;
	    protected floatStyle: [LayoutFloat, LayoutFloat];
	    protected constraints: Constraint[];
	    drawBackground: boolean;
	    private autoWidth;
	    private autoHeight;
	    private deltaX;
	    private deltaY;
	    private deltaW;
	    private deltaH;
	    constructor();
	    updateLayout(): void;
	    private updatePosition;
	    private updateDimensions;
	    private handleConstraints;
	    private updateChildPos;
	    addConstraint(subject: LayoutConstraint, target: Entity, anchor: LayoutConstraint): Constraint;
	    removeConstraint(constraint: Constraint): boolean;
	    clearConstraints(): void;
	    setAutoWidth(flag: boolean): void;
	    setAutoHeight(flag: boolean): void;
	    setMargin(amount: number): void;
	    setMarginLeft(amount: number): void;
	    setMarginTop(amount: number): void;
	    setMarginRight(amount: number): void;
	    setMarginBottom(amount: number): void;
	    setFloat(modA: LayoutFloat, modB: LayoutFloat): void;
	    setLayoutDirection(property: LayoutDirection): void;
	    /**
	     * Controls the main axis alignment.
	     * @param property
	     */
	    setJustifyContent(property: LayoutAlignment): void;
	    /**
	     * Controls the cross axis alignment.
	     * @param property
	     */
	    setAlignItems(property: LayoutAlignment): void;
	    addComponent(o: Component): void;
	    draw(g2: CanvasRenderingContext2D): void;
	}
	export enum LayoutDirection {
	    VERTICAL = 0,
	    HORIZONTAL = 1
	}
	export enum LayoutFloat {
	    NONE = 0,
	    LEFT = 1,
	    TOP = 2,
	    RIGHT = 3,
	    BOTTOM = 4,
	    CENTER_H = 5,
	    CENTER_V = 6
	}
	export enum LayoutConstraint {
	    LEFT = 0,
	    TOP = 1,
	    RIGHT = 2,
	    BOTTOM = 3
	}
	export enum LayoutAlignment {
	    START = 0,
	    END = 1,
	    CENTER = 2,
	    STRETCH = 3
	}

}
declare module 'strum-2dings/util/MouseHandler' {
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	import { MultiMouseEvent } from 'strum-2dings/util/MultiMouseEvent';
	import { MouseMoveEvent } from 'strum-2dings/util/MouseMoveEvent';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	/**
	 * An object that handles mouse events for Entities
	 */
	export class MouseHandler {
	    private parent;
	    /** Flag determining whether or not the mouse is over this object */
	    mouseOver: boolean;
	    mouseLeftDragging: boolean;
	    mouseMiddleDragging: boolean;
	    mouseRightDragging: boolean;
	    mouseEntered?: (p: Vector2) => void;
	    mouseExited?: (p: Vector2) => void;
	    mouseLeftDown?: (p: Vector2) => void;
	    mouseLeftUp?: (p: Vector2) => void;
	    mouseMiddleDown?: (p: Vector2) => void;
	    mouseMiddleUp?: (p: Vector2) => void;
	    mouseRightDown?: (p: Vector2) => void;
	    mouseRightUp?: (p: Vector2) => void;
	    mouseDownOffBounds?: (p: Vector2) => void;
	    mouseDragging?: (e: MouseMoveEvent) => void;
	    private originLeft;
	    private originMiddle;
	    private originRight;
	    constructor(parent: Entity);
	    /** Sets the mouse cursor. */
	    static setCursor(cursor: Cursor): void;
	    static preventDefault(): void;
	    dispose(): void;
	    private getRelevantMousePos;
	    private getDraggingButtons;
	    private getDragOrigins;
	    /**
	     * Checks if the mouse event is obstructed in either the UI or the world stack.
	     * @param e
	     */
	    private isObstructed;
	    tick(e: MultiMouseEvent): void;
	}
	export enum MouseButton {
	    MOUSE_LEFT = 0,
	    MOUSE_MIDDLE = 1,
	    MOUSE_RIGHT = 2
	}
	export enum Cursor {
	    ALIAS = "alias",
	    ALL_SCROLL = "all-scroll",
	    AUTO = "auto",
	    CELL = "cell",
	    CONTEXT_MENU = "context-menu",
	    COL_RESIZE = "col-resize",
	    COPY = "copy",
	    CROSSHAIR = "crosshair",
	    DEFAULT = "default",
	    E_RESIZE = "e-resize",
	    EW_RESIZE = "ew-resize",
	    GRAB = "grab",
	    GRABBING = "grabbing",
	    HELP = "help",
	    MOVE = "move",
	    N_RESIZE = "n-resize",
	    NE_RESIZE = "ne-resize",
	    NESW_RESIZE = "nesw-resize",
	    NS_RESIZE = "ns-resize",
	    NW_RESIZE = "nw-resize",
	    NWSE_RESIZE = "nwse-resize",
	    NO_DROP = "no-drop",
	    NONE = "none",
	    NOT_ALLOWED = "not-allowed",
	    POINTER = "pointer",
	    PROGRESS = "progress",
	    ROW_RESIZE = "row-resize",
	    S_RESIZE = "s-resize",
	    SE_RESIZE = "se-resize",
	    SW_RESIZE = "sw-resize",
	    TEXT = "text",
	    URL = "url",
	    W_RESIZE = "w-resize",
	    WAIT = "wait",
	    ZOOM_IN = "zoom-in",
	    ZOOM_OUT = "zoom-out"
	}

}
declare module 'strum-2dings/util/Input' {
	export class Input {
	    private keyState;
	    private frozenKeyState;
	    caseSensitive: boolean;
	    locked: boolean;
	    mouseLeftDown: boolean;
	    mouseMiddleDown: boolean;
	    mouseRightDown: boolean;
	    tick(e: Event): void;
	    isDown(id: string, caseSensitive?: boolean): boolean;
	    setLock(flag: boolean): void;
	}

}
declare module 'strum-2dings/util/KeyHandler' {
	import { MultiKeyEvent } from 'strum-2dings/util/MultiKeyEvent';
	export class KeyHandler {
	    keyPressed?: (e: KeyboardEvent) => void;
	    keyDown?: (e: KeyboardEvent) => void;
	    keyUp?: (e: KeyboardEvent) => void;
	    enabled: boolean;
	    static preventDefault(): void;
	    setEnabled(flag: boolean): void;
	    tick(e: MultiKeyEvent): void;
	}

}
declare module 'strum-2dings/physics/RayPlacement' {
	export enum RayPlacement {
	    BOTTOM_LEFT = 1,
	    BOTTOM_RIGHT = 2,
	    TOP_LEFT = 3,
	    TOP_RIGHT = 4,
	    LEFT = 5,
	    TOP = 6,
	    RIGHT = 7,
	    BOTTOM = 8
	}

}
declare module 'strum-2dings/physics/RayCastResult' {
	import { SegmentIntersectionEvent } from 'strum-2dings/maths/SegmentIntersectionEvent';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	export class RayCastResult {
	    collisions: SegmentIntersectionEvent[];
	    closestCollision: SegmentIntersectionEvent;
	    closestHitVector: Vector2;
	    constructor(collisions: SegmentIntersectionEvent[], closestCollision?: SegmentIntersectionEvent);
	}

}
declare module 'strum-2dings/physics/Ray' {
	import { Segment } from 'strum-2dings/maths/Segment';
	import { RayPlacement } from 'strum-2dings/physics/RayPlacement';
	import { RayCastResult } from 'strum-2dings/physics/RayCastResult';
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	export class Ray extends Segment {
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

}
declare module 'strum-2dings/physics/CollisionBounds' {
	import { Rectangle } from 'strum-2dings/maths/Rectangle';
	import { Ray } from 'strum-2dings/physics/Ray';
	import { RayPlacement } from 'strum-2dings/physics/RayPlacement';
	import { Segment } from 'strum-2dings/maths/Segment';
	import { SegmentIntersectionEvent } from 'strum-2dings/maths/SegmentIntersectionEvent';
	export class CollisionBounds {
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

}
declare module 'strum-2dings/physics/CollisionEvent' {
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	import { RayPlacement } from 'strum-2dings/physics/RayPlacement';
	export class CollisionEvent {
	    parent: Entity;
	    target: Entity;
	    type: RayPlacement;
	    distance: number;
	    constructor(parent: Entity, target: Entity, type?: RayPlacement, distance?: number);
	}

}
declare module 'strum-2dings/game/Character' {
	import { Component } from 'strum-2dings/game/Component';
	export abstract class Character extends Component {
	    speed: number;
	    onGround: boolean;
	    move(): void;
	}

}
declare module 'strum-2dings/physics/CollisionHandler' {
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	import { CollisionBounds } from 'strum-2dings/physics/CollisionBounds';
	import { CollisionEvent } from 'strum-2dings/physics/CollisionEvent';
	import { Point } from 'strum-2dings/maths/Point';
	export class CollisionHandler {
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

}
declare module 'strum-2dings/util/Handler' {
	import { MouseHandler } from 'strum-2dings/util/MouseHandler';
	import { KeyHandler } from 'strum-2dings/util/KeyHandler';
	import { CollisionHandler } from 'strum-2dings/physics/CollisionHandler';
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	export class Handler {
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

}
declare module 'strum-2dings/game/Entity' {
	import { Rectangle } from 'strum-2dings/maths/Rectangle';
	import { MouseHandler } from 'strum-2dings/util/MouseHandler';
	import { KeyHandler } from 'strum-2dings/util/KeyHandler';
	import { CollisionHandler } from 'strum-2dings/physics/CollisionHandler';
	import { Point } from 'strum-2dings/maths/Point';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	import { Handler } from 'strum-2dings/util/Handler'; var Entity: typeof IEntity;
	/**
	 * Workaround for circular dependencies. Must be called ***before*** extending `Entity`.
	 * Example:
	 * ```
	 * import { Entity, initEntity } from "./Entity";
	 * initEntity();
	 * export class MyClass extends Entity {...}
	 * ```
	 */
	export function initEntity(): void;
	export { Entity };
	/**
	 * Describes the properties of all drawable objects.
	 * All drawable objects should extend this class.
	 */
	export abstract class IEntity {
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
	export enum CoordSpace {
	    /** The world coordinate system. Up is (y > 0). */
	    WORLD_SPACE = 0,
	    /** Coordinate system relative to the camera. Origin (0, 0) is always at the top-left of the canvas. Up is (y < 0). */
	    CAMERA_SPACE = 1
	}

}
declare module 'strum-2dings/engine/Camera' {
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	export class Camera {
	    x: number;
	    y: number;
	    hScale: number;
	    vScale: number;
	    zoom: number;
	    sinRot: number;
	    cosRot: number;
	    rotRad: number;
	    rotation: number;
	    zoomStep: number;
	    graphicsFilter: string;
	    target?: Entity;
	    moveTarget?: Vector2;
	    followTarget: boolean;
	    smoothMove: boolean;
	    smoothRotation: boolean;
	    smoothZoom: boolean;
	    smoothMoveSpeed: number;
	    smoothRotationSpeed: number;
	    smoothZoomSpeed: number;
	    dof: boolean;
	    dofAmount: number;
	    dofFocus: number;
	    private lastPos;
	    private targetRot;
	    private lastRot;
	    private targetZoom;
	    private lastZoom;
	    debugMode: boolean;
	    freeCam: boolean;
	    freeCamSpeed: number;
	    /**
	     * Move the camera to a target location
	     * @param target
	     */
	    move(target: Vector2): void;
	    /** Make the camera follow specified target. */
	    follow(target: Entity): void;
	    setFollowTarget(flag: boolean): void;
	    setSmoothMove(flag: boolean): void;
	    setSmoothRotation(flag: boolean): void;
	    setSmoothZoom(flag: boolean): void;
	    setZoom(amount: number, override?: boolean): void;
	    modZoom(amount: number): void;
	    setZoomStep(step: number, allowFloats?: boolean): void;
	    modZoomStep(amount: number): void;
	    modZoomStepFloat(amount: number): void;
	    zoomToFocus(target?: Entity | undefined): void;
	    setDebug(flag: boolean): void;
	    setRotation(degrees: number): void;
	    modRotation(degrees: number): void;
	    setPos(p: Vector2): void;
	    getPos(): Vector2;
	    getZoomStepFloat(): number;
	    getZoomStep(): number;
	    setFreeCamMode(flag: boolean): void;
	    updatePos(): void;
	    tick(): void;
	    draw(g2: CanvasRenderingContext2D): void;
	}

}
declare module 'strum-2dings/game/Player' {
	import { Character } from 'strum-2dings/game/Character';
	import { Segment } from 'strum-2dings/maths/Segment';
	export class Player extends Character {
	    jumpHeight: number;
	    jumpCount: number;
	    maxJumps: number;
	    seg: Segment;
	    normal: Segment;
	    constructor();
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/maths/Matrix3' {
	/**
	 * Describes the following column major 3x3 matrix:
	 * m11  m21  m31
	 * m12  m23  m32
	 * m13  m23  m33
	 */
	export class Matrix3 {
	    m11: number;
	    m12: number;
	    m13: number;
	    m21: number;
	    m22: number;
	    m23: number;
	    m31: number;
	    m32: number;
	    m33: number;
	    constructor(m11?: number, m12?: number, m13?: number, m21?: number, m22?: number, m23?: number, m31?: number, m32?: number, m33?: number);
	    update(m11?: number, m12?: number, m13?: number, m21?: number, m22?: number, m23?: number, m31?: number, m32?: number, m33?: number): void;
	    clone(): Matrix3;
	    static getUniform(): Matrix3;
	}

}
declare module 'strum-2dings/game/ui/Panel' {
	import { Component } from 'strum-2dings/game/Component';
	export class Panel extends Component {
	    constructor(width: number, height: number, x?: number, y?: number);
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/util/Clipboard' {
	export class Clipboard {
	    static copyData: string;
	    static pasteData: string;
	    static setCopyData(data: string): void;
	    static setPasteData(data: string): void;
	    static getCopyData(): string;
	    static getPasteData(): string;
	}

}
declare module 'strum-2dings/game/ui/TextModuleHandler' {
	import { Handler } from 'strum-2dings/util/Handler';
	import { TextModule } from 'strum-2dings/game/ui/TextModule';
	export class TextModuleHandler extends Handler {
	    protected parent: TextModule;
	    constructor(parent: TextModule);
	    private initListeners;
	}

}
declare module 'strum-2dings/game/ui/TextModule' {
	import { Component } from 'strum-2dings/game/Component';
	import { TextModuleHandler } from 'strum-2dings/game/ui/TextModuleHandler';
	import { Vector2 } from 'strum-2dings/maths/Vector2';
	export abstract class TextModule extends Component {
	    text: string;
	    protected placeholder: string;
	    protected fontSize: number;
	    protected lineHeight: number;
	    protected font: Font | string;
	    protected alignment: TextAlignment;
	    filter?: RegExp;
	    protected primaryColor: string;
	    protected secondaryColor: string;
	    protected textColor: string;
	    protected selectedColor: string;
	    protected highlightColor: string;
	    protected strokeColor: string;
	    strokeText: boolean;
	    strokeWidth: number;
	    cursorIndex: number;
	    protected cursorColor: string;
	    protected cursorBlink: number;
	    protected cursorWidth: number;
	    cursorX: number;
	    offsetX: number;
	    protected behindCursor: string;
	    protected pastCursor: string;
	    protected behindCursorWidth: number;
	    protected pastCursorWidth: number;
	    protected textWidth: number;
	    protected textHeight: number;
	    protected marginLeft: number;
	    protected marginTop: number;
	    protected marginRight: number;
	    protected marginBottom: number;
	    selection: string;
	    selectionRange: [number, number];
	    hasSelection: boolean;
	    isInputModule: boolean;
	    selected: boolean;
	    protected textmoduleHandler: TextModuleHandler;
	    onInput?: () => void;
	    updateDimensions(): void;
	    protected applyFont(): void;
	    /**
	     * Sets the cursor to the specified index, and updates offset.
	     * @param index The cursor index.
	     */
	    setCursorIndex(index: number): void;
	    /**
	     * Mods the cursor index by specified amount, and updates offset.
	     * @param amount The amount to mod the index.
	     */
	    modCursorIndex(amount: number): void;
	    /**
	     * Updates the offset based on the cursor position.
	     */
	    updateCursor(): void;
	    /**
	     * Sets the cursor to the closest index of a given point.
	     * @param p The target point.
	     */
	    setCursorClosestTo(p: Vector2): void;
	    /**
	     * Sets the selection text based on the current selection range,
	     * and prepares copy data on the Clipboard object.
	     */
	    updateSelection(): void;
	    /**
	     * Returns the width (in pixels) of a given text range.
	     * @param start The index of the start of the range.
	     * @param end The index of the end of the range.
	     */
	    widthOfTextRange(start: number, end: number): number;
	    /**
	     * Returns the current x coordinate of a character.
	     * @param index The index of the character.
	     */
	    protected xOfIndex(index: number): number;
	    /**
	     * Measure a string with the text module's current font settings.
	     * @param text The string that is to be measured.
	     */
	    protected measureString(text: string): TextMetrics;
	    selectAll(): void;
	    deselectAll(): void;
	    /**
	     * Append text at a given index. Selection is deleted unless `ignoreSelection` flag is given.
	     * @param text The text to be appended.
	     * @param index The index at which to append the text. Default: end of text
	     * @param ignoreSelection Append the text at the given index without respecting the current selection. Default: `false`
	     */
	    appendText(text: string, index?: number, ignoreSelection?: boolean): void;
	    setText(text: string): void;
	    setPlaceholder(text: string): void;
	    setFontSize(size: number): void;
	    setLineHeight(ratio: number): void;
	    setFont(font: Font | string, size?: number): void;
	    setTextAlignment(alignment: TextAlignment): void;
	    setFilter(filter: RegExp | undefined): void;
	    setTextColor(color: string): void;
	    setSelected(flag: boolean): void;
	    deselectText(): void;
	    /**
	     * Marks this component as an input module.
	     * @param flag
	     */
	    setInputModule(flag: boolean): void;
	    setMargin(amount: number): void;
	    setMarginLeft(amount: number): void;
	    setMarginTop(amount: number): void;
	    setMarginRight(amount: number): void;
	    setMarginBottom(amount: number): void;
	    getMarginLeft(): number;
	    getMarginTop(): number;
	    getMarginRight(): number;
	    getMarginBottom(): number;
	    getText(): string;
	    getPlaceholder(): string;
	    getFontSize(): number;
	    getFont(): string;
	    getTextAlignment(): TextAlignment;
	    getSelection(): string;
	    /**
	     * Returns an array representing the selection range,
	     * such that [0] is the lowest index, and [1] is the highest.
	     */
	    getSelectionRange(): [number, number];
	    /**
	     * Returns the width of the component minus the horizontal margins.
	     */
	    getInnerWidth(): number;
	}
	export enum TextAlignment {
	    LEFT_TO_RIGHT = 0,
	    RIGHT_TO_LEFT = 1,
	    CENTERED = 2
	}
	export enum Font {
	    ANTIQUA = "Book Antiqua",
	    GEORGIA = "Georgia",
	    PALATINO = "Palatino Linotype",
	    SERIF = "serif",
	    TIMES_NEW_ROMAN = "Times New Roman",
	    ARIAL = "Arial",
	    ARIAL_BLACK = "Arial Black",
	    CHARCOAL = "Charcoal",
	    GADGET = "Gadget",
	    GENEVA = "Geneva",
	    HELVETICA = "Helvetica",
	    IMPACT = "Impact",
	    LUCIDA_SANS = "Lucida Sans Unicode",
	    ROBOTO_BOLD = "Roboto Bold",
	    ROBOTO_REGULAR = "Roboto",
	    ROBOTO_THIN = "Roboto Thin",
	    SANS_SERIF = "sans-serif",
	    TAHOMA = "Tahoma",
	    TREBUCHET = "Trebuchet MS",
	    VERDANA = "Verdana",
	    CONSOLAS = "Consolas",
	    COURIER_NEW = "Courier New",
	    LUCIDA_CONSOLE = "Lucida Console",
	    MONOSPACE = "monospace",
	    SOURCE_CODE_PRO = "Source Code Pro"
	}

}
declare module 'strum-2dings/game/ui/TextArea' {
	import { TextModule } from 'strum-2dings/game/ui/TextModule';
	export class TextArea extends TextModule {
	    private lines;
	    constructor(text?: string, x?: number, y?: number);
	    updateDimensions(): void;
	    setText(text: string): void;
	    appendText(text: string): void;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/ui/InputField' {
	import { TextModule } from 'strum-2dings/game/ui/TextModule';
	export class InputField extends TextModule {
	    protected label: string;
	    protected hasLabel: boolean;
	    protected borderRadius: number;
	    protected outline: boolean;
	    constructor();
	    setBorderRadius(radius: number): void;
	    setOutline(flag: boolean): void;
	    setLabel(label: string): void;
	    setMarginLeft(amount: number): void;
	    getBorderRadius(): number;
	    getOutline(): boolean;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/util/Color' {
	export class Color {
	    static shadeColor(hexcolor: string, frac: number): string;
	    static modColor(hexcolor: string, value: number): string;
	    static rgbToHex(r: number, g: number, b: number): string;
	    static intToHex(c: number): string;
	    static getLuminance(hexcolor: string): number;
	}

}
declare module 'strum-2dings/game/ui/Button' {
	import { Handler } from 'strum-2dings/util/Handler';
	import { TextModule } from 'strum-2dings/game/ui/TextModule';
	export class Button extends TextModule {
	    protected margin: number;
	    protected cornerRadius: number;
	    private fillColor;
	    protected strokeColor: string;
	    protected buttonHandler: Handler;
	    constructor();
	    setPrimaryColor(color: string): void;
	    setSecondaryColor(color: string): void;
	    updateDimensions(): void;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/DebugUi' {
	import { Composite } from 'strum-2dings/game/ui/Composite';
	export class DebugUi extends Composite {
	    constructor();
	    private sceneSetup;
	}

}
declare module 'strum-2dings/engine/Graphics2D' {
	export class Graphics2D extends CanvasRenderingContext2D {
	    static attach(): void;
	} global {
	    interface CanvasRenderingContext2D {
	        roundedRect: (x: number, y: number, w: number, h: number, r: number) => void;
	        fillRoundedRect: (x: number, y: number, w: number, h: number, r: number) => void;
	        strokeRoundedRect: (x: number, y: number, w: number, h: number, r: number) => void;
	        setPixel: (x: number, y: number) => void;
	        /**
	         * @Experimental
	         * Provides filter effects like blurring or gray-scaling. It is similar to the CSS
	         * filter property and accepts the same functions.
	         */
	        filter: string;
	    }
	}

}
declare module 'strum-2dings/game/ui/Label' {
	import { TextModule } from 'strum-2dings/game/ui/TextModule';
	export class Label extends TextModule {
	    constructor(text?: string, x?: number, y?: number);
	    updateDimensions(): void;
	    setText(text: string): void;
	    setFontSize(size: number): void;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/ui/RasterPanel' {
	import { Component } from 'strum-2dings/game/Component';
	export class RasterPanel extends Component {
	    protected image?: HTMLImageElement;
	    protected srcWidth?: number;
	    protected srcHeight?: number;
	    protected aspectRatio?: number;
	    protected aspectGuard: boolean;
	    private offX;
	    private offY;
	    constructor();
	    /**
	     * Asynchronously load an image.
	     * @param src The path to the source image.
	     * @param onLoad Callback that is called once the image is loaded.
	     */
	    setImageAsync(src: string, onLoad?: (e: Event) => void): void;
	    createBlankImage(width: number, height: number, onLoad?: (e: Event) => void): void;
	    imageLoaded(): boolean;
	    setWidth(width: number): void;
	    setHeight(height: number): void;
	    private handleAspect;
	    private updateDrawOffset;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/Splash' {
	import { Scene } from 'strum-2dings/game/Scene';
	export class Splash extends Scene {
	    private duration;
	    private start;
	    constructor();
	    load(): void;
	    initScene(): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/util/InitResources' {
	export function initResources(): void;

}
declare module 'strum-2dings/engine/Main' {
	import { Camera } from 'strum-2dings/engine/Camera';
	import { Player } from 'strum-2dings/game/Player';
	import { Input } from 'strum-2dings/util/Input';
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	import { MultiMouseEvent } from 'strum-2dings/util/MultiMouseEvent';
	import { MultiKeyEvent } from 'strum-2dings/util/MultiKeyEvent';
	import { Matrix3 } from 'strum-2dings/maths/Matrix3';
	import { Panel } from 'strum-2dings/game/ui/Panel';
	import { Handler } from 'strum-2dings/util/Handler';
	import { Scene } from 'strum-2dings/game/Scene';
	export enum UserAgent {
	    UNKNOWN = "Unknown",
	    CHROME = "Chromium",
	    FIREFOX = "Firefox"
	}
	/**
	 * Entrypoint for the application
	 */
	export class Main {
	    static CANVAS_WIDTH: number;
	    static CANVAS_HEIGHT: number;
	    FRAME_RATE: number;
	    TICK_RATE: number;
	    static initialized: boolean;
	    static running: boolean;
	    static paused: boolean;
	    static focused: boolean;
	    static userAgent: UserAgent;
	    drawBounds: boolean;
	    drawUiBounds: boolean;
	    drawCollisionBounds: boolean;
	    static debugMode: boolean;
	    private static debugUi;
	    private static splash;
	    private static browserWarning;
	    private static wasUnfocused;
	    private static limitFps;
	    private static lockCanvasSize;
	    static canvas: HTMLCanvasElement;
	    private static buffer;
	    static canvasBounds: Panel;
	    static g2: CanvasRenderingContext2D;
	    static transform: Matrix3;
	    static graphicsFilter: string;
	    static camera: Camera;
	    static input: Input;
	    static player: Player;
	    static tps: number;
	    static fps: number;
	    static draws: number;
	    static dpf: number;
	    static worldStack: Entity[];
	    static uiStack: Entity[];
	    static handlerStack: Handler[];
	    private static tempQueue;
	    static sceneQueue: Scene[];
	    static currentScene?: Scene;
	    private mouseMoveEvent;
	    private mouseDownEvent;
	    private mouseUpEvent;
	    private keyPressedEvents;
	    private keyDownEvents;
	    private keyUpEvents;
	    static mouseEvent?: MultiMouseEvent;
	    static keyEvent?: MultiKeyEvent;
	    static clipboardEvent?: ClipboardEvent;
	    static gravity: number;
	    static entityIdCounter: number;
	    static sceneIdCounter: number;
	    static skipSplash: boolean;
	    constructor();
	    private init;
	    private static resize;
	    private mouseWheelListener;
	    private mouseMoveListener;
	    private mouseDownListener;
	    private mouseUpListener;
	    private keyPressedListener;
	    private keyDownListener;
	    private keyUpListener;
	    /**
	     * Adds the entity to the world stack and sets its preferred coordinate system to
	     * `WORLD_SPACE`.
	     * @param o The entity to be added.
	     */
	    static addEntity(o: Entity): void;
	    /**
	     * Adds the entity to the UI stack and sets its preferred coordinate system to
	     * `CAMERA_SPACE`.
	     * @param o The entity to be added.
	     */
	    static addUiElement(o: Entity): void;
	    static addHandler(handler: Handler): void;
	    /**
	     * Removes an entity from the world stack. Returns true if successful, otherwise false.
	     * @param o The entity to be removed.
	     */
	    static removeEntity(o: Entity): boolean;
	    /**
	     * Removes an entity from the UI stack. Returns true if successful, otherwise false.
	     * @param o The entity to be removed.
	     */
	    static removeUiElement(o: Entity): boolean;
	    /**
	     * Removes a handler from the handler stack. Returns true if successful, otherwise false.
	     * @param o The handler to be removed.
	     */
	    static removeHandler(o: Handler): boolean;
	    static requestScene(scene: Scene): void;
	    private static loadScene;
	    private validateScenes;
	    /**
	     * Traverses the world and UI stacks and returns the `Entity` with a matching ID,
	     * or `null` if the ID is unmatched.
	     * @param id The entity id
	     * @param recursive Determines whether to traverse `Composite` stacks.
	     */
	    static getEntityById(id: number, recursive?: boolean, includeDetails?: boolean): Entity | [Entity, number, Entity[]] | null;
	    static stackMap(callback: (value: Entity, index: number, array: Entity[]) => void, recurse?: boolean, stack?: Entity[]): void;
	    static setCanvasSizeLock(flag: boolean): void;
	    static setTransform(transform: Matrix3): void;
	    static applyTransform(): void;
	    static setDebugMode(flag: boolean): void;
	    static toggleDevMode(): void;
	    /**
	     * Custom Entity instace check due to circular dependency workaround.
	     */
	    static isEntity(o: any): o is Entity;
	    /** Sort all elements based on their z-index. */
	    private zSort;
	    private handleEntityRotation;
	    private cullTest;
	    private draw;
	    private tick;
	}

}
declare module 'strum-2dings/game/Scene' {
	import { IEntity as Entity } from 'strum-2dings/game/Entity';
	export abstract class Scene {
	    id: number;
	    visible: boolean;
	    mutable: boolean;
	    overlay: boolean;
	    initialized: boolean;
	    ready: boolean;
	    stack: Entity[];
	    /** Called the first time this scene is loaded. */
	    abstract initScene(): void;
	    /** Called every time this scene is loaded. */
	    abstract load(): void;
	    abstract tick(): void;
	    dispose(): boolean;
	    protected addEntity(entity: Entity): void;
	    protected addUiElement(entity: Entity): void;
	    protected removeEntity(entity: Entity): void;
	    setReady(flag: boolean): void;
	    isReady(): boolean;
	    isOverlay(): boolean;
	}

}
declare module 'strum-2dings/BrowserWarning' {
	import { Scene } from 'strum-2dings/game/Scene';
	export class BrowserWarning extends Scene {
	    constructor();
	    initScene(): void;
	    load(): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/Particle' {
	import { Component } from 'strum-2dings/game/Component';
	export class Particle extends Component {
	    protected radius: number;
	    constructor(x?: number, y?: number);
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/ParticleCluster' {
	import { Point } from 'strum-2dings/maths/Point';
	import { Component } from 'strum-2dings/game/Component';
	import { Particle } from 'strum-2dings/game/Particle';
	export class ParticleCluster extends Component {
	    protected stack: Particle[];
	    drawParticles: boolean;
	    drawConnections: boolean;
	    splineTension: number;
	    protected connectionDrawStyle: ClusterConnectionStyle;
	    protected splinePoints: Point[];
	    addParticle(a: number | Particle, y?: number): void;
	    disposeStack(): void;
	    /**
	     * Interpolates cardinal spline points based on particles in stack.
	     * @param tension
	     * @param isClosed
	     * @param numSegments
	     */
	    private calcSplinePoints;
	    private updateDimensions;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}
	export enum ClusterConnectionStyle {
	    LINES = 0,
	    SPLINES = 1,
	    CENTER_CURVES = 2
	}

}
declare module 'strum-2dings/game/ui/Graph' {
	import { Component } from 'strum-2dings/game/Component';
	import { Font } from 'strum-2dings/game/ui/TextModule';
	export abstract class Graph extends Component {
	    protected data: GraphData[];
	    protected font: Font;
	    protected fontSize: number;
	    protected labelMargin: number;
	    protected abstract analyzeData(): void;
	    protected applyFont(): void;
	    setData(data: GraphData[]): void;
	    getData(): GraphData[];
	    setFont(font: Font): void;
	    setFontSize(value: number): void;
	}
	export interface GraphData {
	    value: number;
	    id?: string;
	}

}
declare module 'strum-2dings/game/ui/BarGraph' {
	import { Graph } from 'strum-2dings/game/ui/Graph';
	import { Font } from 'strum-2dings/game/ui/TextModule';
	export class BarGraph extends Graph {
	    protected offX: number;
	    protected offY: number;
	    protected offWidth: number;
	    protected offHeight: number;
	    protected minX: number;
	    protected minY: number;
	    protected maxX: number;
	    protected maxY: number;
	    protected resolutionX: number;
	    protected resolutionY: number;
	    protected precisionX: number;
	    protected precisionY: number;
	    autoAdjustMinX: boolean;
	    autoAdjustMinY: boolean;
	    autoAdjustMaxX: boolean;
	    autoAdjustMaxY: boolean;
	    barColour: string;
	    constructor(width: number, height: number, maxY?: number);
	    protected analyzeData(): void;
	    protected updateOffsets(): void;
	    /** @Override */
	    setFont(font: Font): void;
	    /** @Override */
	    setFontSize(value: number): void;
	    /**
	     * Determines the max amount of stops along the x-axis.
	     * @param integer
	     */
	    setResolutionX(integer: number): void;
	    /**
	     * Determines the max amount of stops along the y-axis.
	     * @param integer
	     */
	    setResolutionY(integer: number): void;
	    /**
	     * Determines the precision on x-axis labels.
	     * @param integer
	     */
	    setPrecisionX(integer: number): void;
	    /**
	     * Determines the precision on y-axis labels.
	     * @param integer
	     */
	    setPrecisionY(integer: number): void;
	    getInnerX(): number;
	    getInnerY(): number;
	    getInnerWidth(): number;
	    getInnerHeight(): number;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/ui/Scale' {
	import { Component } from 'strum-2dings/game/Component';
	import { Label } from 'strum-2dings/game/ui/Label';
	export class Scale extends Component {
	    label: Label;
	    labelX: number;
	    labelY: number;
	    plateHeight: number;
	    baseHeight: number;
	    pistonWidth: number;
	    constructor(x?: number, y?: number);
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/game/ui/Texture' {
	import { Component } from 'strum-2dings/game/Component';
	export class Texture extends Component {
	    private canvas;
	    g2: CanvasRenderingContext2D;
	    constructor(width: number, height: number);
	    clear(): void;
	    draw(g2: CanvasRenderingContext2D): void;
	    tick(): void;
	}

}
declare module 'strum-2dings/maths/PerlinNoise' {
	export class PerlinNoise {
	    static octaveNoise(x: number, y?: number, z?: number, octaves?: number, frequency?: number, persistence?: number): number;
	    /**
	     * Calculate perlin noise for the given position in noise space. Returns a value such that [(-1) <= value <= 1]
	     * @param x x-position in noise space.
	     * @param y y-position in noise space.
	     * @param z z-position in noise space.
	     */
	    static noise(x: number, y: number, z: number): number;
	    private static fade;
	    private static lerp;
	    private static grad;
	    private static p;
	    private static permutation;
	    private static _constructor;
	}

}
declare module 'strum-2dings/maths/Random' {
	export class Random {
	    private seed;
	    constructor(seed?: number);
	    setSeed(seed: number): void;
	    nextFloat(): number;
	    nextInt(n: number, max?: number): number;
	}

}
declare module 'strum-2dings/maths/SimplexNoise' {
	export interface NoiseInputs {
	    x?: number;
	    y?: number;
	    z?: number;
	    w?: number;
	}
	export class SimplexNoise {
	    static octaveNoise(inputs: NoiseInputs, octaves?: number, frequency?: number, persistence?: number): number;
	    private static grad3;
	    private static grad4;
	    private static p;
	    private static perm;
	    private static permMod12;
	    private static _constructor;
	    private static F2;
	    private static G2;
	    private static F3;
	    private static G3;
	    private static F4;
	    private static G4;
	    private static fastFloor;
	    private static dot;
	    static noise2d(xin: number, yin: number): number;
	    static noise3d(xin: number, yin: number, zin: number): number;
	    static noise4d(x: number, y: number, z: number, w: number): number;
	}

}
declare module 'strum-2dings/maths/Vector3' {
	export class Vector3 {
	    x: number;
	    y: number;
	    z: number;
	    constructor(x: number, y: number, z: number);
	    update(a: Vector3 | number, y?: number, z?: number): void;
	    add(vec: Vector3): Vector3;
	    subtract(vec: Vector3): Vector3;
	    multiply(vec: Vector3): Vector3;
	    multiplyNum(multiplier: number): Vector3;
	    divide(vec: Vector3): Vector3;
	    divideNum(divisor: number): Vector3;
	    getLength(): number;
	    setLength(length: number): void;
	    modLength(magnitude: number): void;
	    normalize(): Vector3;
	    cross(vec: Vector3): Vector3;
	    dot(vec: Vector3): number;
	    inverse(): Vector3;
	    clone(): Vector3;
	    /** Linearily interpolate between two vectors */
	    static lerp(v0: Vector3, v1: Vector3, t: number): Vector3;
	}

}
declare module 'strum-2dings/physics/CollisionType' {
	export enum CollisionType {
	    LEFT = 1,
	    TOP = 2,
	    RIGHT = 3,
	    BOTTOM = 4
	}

}
declare module 'strum-2dings/index' {
	import * as Index from 'strum-2dings/index';
	export { Camera } from 'strum-2dings/engine/Camera';
	export { Graphics2D } from 'strum-2dings/engine/Graphics2D';
	export { Main } from 'strum-2dings/engine/Main';
	export { Character } from 'strum-2dings/game/Character';
	export { Component } from 'strum-2dings/game/Component';
	export { IEntity as Entity } from 'strum-2dings/game/Entity';
	export { Particle } from 'strum-2dings/game/Particle';
	export { ParticleCluster, ClusterConnectionStyle } from 'strum-2dings/game/ParticleCluster';
	export { Player } from 'strum-2dings/game/Player';
	export { Scene } from 'strum-2dings/game/Scene';
	export { BarGraph } from 'strum-2dings/game/ui/BarGraph';
	export { Button } from 'strum-2dings/game/ui/Button';
	export { Graph } from 'strum-2dings/game/ui/Graph';
	export { Composite } from 'strum-2dings/game/ui/Composite';
	export { InputField } from 'strum-2dings/game/ui/InputField';
	export { Label } from 'strum-2dings/game/ui/Label';
	export { Layout, LayoutDirection, LayoutFloat, LayoutConstraint, LayoutAlignment } from 'strum-2dings/game/ui/Layout';
	export { LayoutManager } from 'strum-2dings/game/ui/LayoutManager';
	export { Panel } from 'strum-2dings/game/ui/Panel';
	export { RasterPanel } from 'strum-2dings/game/ui/RasterPanel';
	export { Scale } from 'strum-2dings/game/ui/Scale';
	export { TextArea } from 'strum-2dings/game/ui/TextArea';
	export { TextModule, TextAlignment, Font } from 'strum-2dings/game/ui/TextModule';
	export { TextModuleHandler } from 'strum-2dings/game/ui/TextModuleHandler';
	export { Texture } from 'strum-2dings/game/ui/Texture';
	export { IntersectTypes } from 'strum-2dings/maths/IntersectTypes';
	export { Matrix3 } from 'strum-2dings/maths/Matrix3';
	export { PerlinNoise } from 'strum-2dings/maths/PerlinNoise';
	export { Point } from 'strum-2dings/maths/Point';
	export { Random } from 'strum-2dings/maths/Random';
	export { Rectangle } from 'strum-2dings/maths/Rectangle';
	export { Segment } from 'strum-2dings/maths/Segment';
	export { SegmentIntersectionEvent } from 'strum-2dings/maths/SegmentIntersectionEvent';
	export { SimplexNoise, NoiseInputs } from 'strum-2dings/maths/SimplexNoise';
	export { Vector2 } from 'strum-2dings/maths/Vector2';
	export { Vector3 } from 'strum-2dings/maths/Vector3';
	export { CollisionBounds } from 'strum-2dings/physics/CollisionBounds';
	export { CollisionEvent } from 'strum-2dings/physics/CollisionEvent';
	export { CollisionHandler } from 'strum-2dings/physics/CollisionHandler';
	export { CollisionType } from 'strum-2dings/physics/CollisionType';
	export { Ray } from 'strum-2dings/physics/Ray';
	export { RayCastResult } from 'strum-2dings/physics/RayCastResult';
	export { RayPlacement } from 'strum-2dings/physics/RayPlacement';
	export { Clipboard } from 'strum-2dings/util/Clipboard';
	export { Color } from 'strum-2dings/util/Color';
	export { CssUtils } from 'strum-2dings/util/CssUtils';
	export { Handler } from 'strum-2dings/util/Handler';
	export { Input } from 'strum-2dings/util/Input';
	export { KeyHandler } from 'strum-2dings/util/KeyHandler';
	export { MouseHandler, MouseButton, Cursor } from 'strum-2dings/util/MouseHandler';
	export { MouseMoveEvent } from 'strum-2dings/util/MouseMoveEvent';
	export { MultiKeyEvent } from 'strum-2dings/util/MultiKeyEvent';
	export { MultiMouseEvent } from 'strum-2dings/util/MultiMouseEvent';
	export { Utils } from 'strum-2dings/util/Utils';
	export { BrowserWarning } from 'strum-2dings/BrowserWarning';
	export { DebugUi } from 'strum-2dings/DebugUi';
	export class Strum2dIndex {
	    Camera: typeof Index.Camera;
	    Graphics2D: typeof Index.Graphics2D;
	    Main: typeof Index.Main;
	    Character: typeof Index.Character;
	    Component: typeof Index.Component;
	    Entity: typeof Index.Entity;
	    Particle: typeof Index.Particle;
	    ParticleCluster: typeof Index.ParticleCluster;
	    ClusterConnectionStyle: typeof Index.ClusterConnectionStyle;
	    Player: typeof Index.Player;
	    Scene: typeof Index.Scene;
	    BarGraph: typeof Index.BarGraph;
	    Button: typeof Index.Button;
	    Graph: typeof Index.Graph;
	    Composite: typeof Index.Composite;
	    InputField: typeof Index.InputField;
	    Label: typeof Index.Label;
	    Layout: typeof Index.Layout;
	    LayoutDirection: typeof Index.LayoutDirection;
	    LayoutFloat: typeof Index.LayoutFloat;
	    LayoutConstraint: typeof Index.LayoutConstraint;
	    LayoutAlignment: typeof Index.LayoutAlignment;
	    LayoutManager: typeof Index.LayoutManager;
	    Panel: typeof Index.Panel;
	    RasterPanel: typeof Index.RasterPanel;
	    Scale: typeof Index.Scale;
	    TextArea: typeof Index.TextArea;
	    TextModule: typeof Index.TextModule;
	    TextAlignment: typeof Index.TextAlignment;
	    Font: typeof Index.Font;
	    TextModuleHandler: typeof Index.TextModuleHandler;
	    Texture: typeof Index.Texture;
	    IntersectTypes: typeof Index.IntersectTypes;
	    Matrix3: typeof Index.Matrix3;
	    PerlinNoise: typeof Index.PerlinNoise;
	    Point: typeof Index.Point;
	    Random: typeof Index.Random;
	    Rectangle: typeof Index.Rectangle;
	    Segment: typeof Index.Segment;
	    SegmentIntersectionEvent: typeof Index.SegmentIntersectionEvent;
	    SimplexNoise: typeof Index.SimplexNoise;
	    Vector2: typeof Index.Vector2;
	    Vector3: typeof Index.Vector3;
	    CollisionBounds: typeof Index.CollisionBounds;
	    CollisionEvent: typeof Index.CollisionEvent;
	    CollisionHandler: typeof Index.CollisionHandler;
	    CollisionType: typeof Index.CollisionType;
	    Ray: typeof Index.Ray;
	    RayCastResult: typeof Index.RayCastResult;
	    RayPlacement: typeof Index.RayPlacement;
	    Clipboard: typeof Index.Clipboard;
	    Color: typeof Index.Color;
	    CssUtils: typeof Index.CssUtils;
	    Handler: typeof Index.Handler;
	    Input: typeof Index.Input;
	    KeyHandler: typeof Index.KeyHandler;
	    MouseHandler: typeof Index.MouseHandler;
	    MouseButton: typeof Index.MouseButton;
	    Cursor: typeof Index.Cursor;
	    MouseMoveEvent: typeof Index.MouseMoveEvent;
	    MultiKeyEvent: typeof Index.MultiKeyEvent;
	    MultiMouseEvent: typeof Index.MultiMouseEvent;
	    Utils: typeof Index.Utils;
	    BrowserWarning: typeof Index.BrowserWarning;
	    DebugUi: typeof Index.DebugUi;
	} global {
	    interface Window {
	        main: Index.Main;
	        camera: Index.Camera;
	        Main: {};
	        Utils: {};
	        Strum2d: Strum2dIndex;
	        _root: string;
	    }
	    const Strum2d: Strum2dIndex;
	    const _root: string;
	}

}
declare module 'strum-2dings/maths/TiledPerlinNoise' {
	export class TiledPerlinNoise {
	    repeat: number;
	    private seed;
	    constructor(repeat?: number);
	    octaveNoise(x: number, y?: number, z?: number, octaves?: number, persistence?: number): number;
	    private static permutation;
	    private static p;
	    private static _constructor;
	    perlin(x: number, y: number, z: number): number;
	    inc(num: number): number;
	    static grad(hash: number, x: number, y: number, z: number): number;
	    static fade(t: number): number;
	    static lerp(a: number, b: number, x: number): number;
	}

}
declare module 'strum-2dings/physics/PhysicsObject' {
	export interface PhysicsObject {
	    physicsEnabled: boolean;
	    timeMultiplier: number;
	    friction: number;
	    restitution: number;
	    mass: number;
	    solid: boolean;
	}

}
