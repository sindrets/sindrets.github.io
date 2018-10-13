import { IEntity as Entity } from "../game/Entity";
import { MultiMouseEvent } from "./MultiMouseEvent";
import { MouseMoveEvent } from "./MouseMoveEvent";
import { Vector2 } from "../maths/Vector2";
/**
 * An object that handles mouse events for Entities
 */
export declare class MouseHandler {
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
export declare enum MouseButton {
    MOUSE_LEFT = 0,
    MOUSE_MIDDLE = 1,
    MOUSE_RIGHT = 2
}
export declare enum Cursor {
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
