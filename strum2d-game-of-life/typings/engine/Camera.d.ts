import { IEntity as Entity } from "../game/Entity";
import { Vector2 } from "../maths/Vector2";
export declare class Camera {
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
