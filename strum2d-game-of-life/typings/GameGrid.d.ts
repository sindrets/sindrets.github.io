/// <reference path="strum-2d.d.ts" />
import { Texture } from "strum-2dings/game/ui/Texture";
export declare class GameGrid {
    SPAWN_RATE: number;
    private generation;
    private gridWidth;
    private gridHeight;
    private cellList;
    private cellCount;
    cellSize: number;
    gridTexture: Texture;
    drawGrid: boolean;
    constructor(width: number, height: number);
    setGridSize(width: number, height: number): void;
    setDrawGrid(flag: boolean): void;
    redrawTexture(): void;
    generate(): void;
    simulate(): void;
    private getLiveNeighbours;
    getInfo(): string;
    numLiveCells(): number;
}
