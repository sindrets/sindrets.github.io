import { IEntity as Entity } from "./Entity";
export declare abstract class Scene {
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
