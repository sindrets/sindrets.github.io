import { MouseButton } from "./MouseHandler";
import { Vector2 } from "../maths/Vector2";
export declare class MouseMoveEvent {
    origins: Vector2[];
    point: Vector2;
    inBounds: boolean;
    buttons: MouseButton[];
    constructor(origins: Vector2[], point: Vector2, inBounds: boolean, buttons: MouseButton[]);
}
