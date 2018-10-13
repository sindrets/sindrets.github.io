/// <reference path="strum-2d.d.ts" />
export declare class App extends Strum2d.Scene {
    private GRID_WIDTH;
    private GRID_HEIGHT;
    private controlsModal;
    private handler;
    private gameGrid;
    private txtGenInfo;
    private txtSpeedInfo;
    private txtWidth;
    private txtHeight;
    private autoSimulate;
    private autoSimTimeout;
    private last;
    private lastFrame;
    constructor();
    private centerCamera;
    private regenerate;
    private updateGenInfo;
    private updateSpeedInfo;
    /**
     * Called every time this scene is loaded
     */
    load(): void;
    /**
     * Called the first time this scene is loaded
     */
    initScene(): void;
    /**
     * Called on every tick while this scene is loaded
     */
    tick(): void;
}
