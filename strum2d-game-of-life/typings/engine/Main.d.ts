import { Camera } from "./Camera";
import { Player } from "../game/Player";
import { Input } from "../util/Input";
import { IEntity as Entity } from "../game/Entity";
import { MultiMouseEvent } from "../util/MultiMouseEvent";
import { MultiKeyEvent } from "../util/MultiKeyEvent";
import { Matrix3 } from "../maths/Matrix3";
import { Panel } from "../game/ui/Panel";
import { Handler } from "../util/Handler";
import { Scene } from "../game/Scene";
export declare enum UserAgent {
    UNKNOWN = "Unknown",
    CHROME = "Chromium",
    FIREFOX = "Firefox"
}
/**
 * Entrypoint for the application
 */
export declare class Main {
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
