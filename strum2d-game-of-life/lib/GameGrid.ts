/// <reference path="../typings/strum-2d.d.ts" />

import { Cell } from "./Cell";
import { CellEvent } from "./CellEvent";
import { Texture } from "strum-2dings/game/ui/Texture";

export class GameGrid {

    public SPAWN_RATE: number = 1/10.0;

    private generation: number = 0;
    private gridWidth: number = 0;
    private gridHeight: number = 0;
    private cellList: Cell[][] = [[]];
    private cellCount: number = 0;

    public cellSize: number = 0;
    public gridTexture: Texture;
    public drawGrid: boolean = false;

    constructor(width: number, height: number) {
        this.setGridSize(width, height);
        this.gridTexture = new Strum2d.Texture(this.gridWidth * this.cellSize, this.gridHeight * this.cellSize);
        this.gridTexture.setShadowBlur(60);
        Strum2d.Main.addEntity(this.gridTexture);
        console.log(this.gridTexture);
    }

    public setGridSize(width: number, height: number) {
        this.gridWidth = width;
        this.gridHeight = height;
        this.cellCount = width * height;
        this.cellSize = Strum2d.Main.CANVAS_HEIGHT / this.gridHeight * 4;
        console.log("CANVAS_HEIGHT: " + Strum2d.Main.CANVAS_HEIGHT + ", GRID HEIGHT: " + this.gridHeight);
        console.log("CELL SIZE: " + this.cellSize);
        if (this.gridTexture) {
            this.gridTexture.setWidth(this.gridWidth * this.cellSize);
            this.gridTexture.setHeight(this.gridHeight * this.cellSize);
        }
    }

    public setDrawGrid(flag: boolean) {
        this.drawGrid = flag;
        for (let row of this.cellList) {
            for (let cell of row) {
                cell.drawOutline = flag;
            }
        }
        this.redrawTexture();
    }

    public redrawTexture() {
        this.gridTexture.clear();
        for (let row of this.cellList) {
            for (let cell of row) {
                cell.draw(this.gridTexture.g2);
            }
        }
    }

    public generate() {
        // init array
        this.cellList = []
        for(let i = 0; i < this.gridWidth; i++) {
            this.cellList[i] = [];
        }

        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                let cell = new Cell(x, y, this.cellSize);
                cell.setAlive(Math.random() < this.SPAWN_RATE);
                cell.drawOutline = this.drawGrid;
                this.cellList[x][y] = cell;
                // Strum2d.Main.addEntity(cell);
            }
        }
        this.redrawTexture();
        this.generation = 1;
        console.log(this.getInfo());
    }

    public simulate() {
        let pendingEvents: CellEvent[] = [];
        for (let row of this.cellList) {
            for (let cell of row) {
                let liveNeighbours: number = this.getLiveNeighbours(cell).length;
                if (cell.isAlive()) {
                    if (!(2 <= liveNeighbours && liveNeighbours <= 3)) {
                        pendingEvents.push(new CellEvent(CellEvent.KILL, cell));
                    }
                }
                else {
                    if (liveNeighbours == 3) {
                        pendingEvents.push(new CellEvent(CellEvent.RESURRECT, cell));
                    }
                }
            }
        }

        for (let event of pendingEvents) {
            if (event.eventType == CellEvent.KILL) {
                event.subject.setAlive(false);
                event.subject.setHasDied(true);
            }
            else if (event.eventType == CellEvent.RESURRECT) {
                event.subject.setAlive(true);
            }
        }

        this.redrawTexture();
        this.generation++;
        console.log(this.getInfo());
    }

    private getLiveNeighbours(cell: Cell): Cell[] {
        let result: Cell[] = [];
        for (let y = cell.gridY-1; y <= cell.gridY+1; y++) {
            for (let x = cell.gridX-1; x <= cell.gridX+1; x++) {
                if (
                    x >= 0 && y >= 0 &&
                    x <= this.gridWidth-1 && y <= this.gridHeight-1 &&
                    this.cellList[x][y].id != cell.id &&
                    this.cellList[x][y].isAlive()
                ) {
                    result.push(this.cellList[x][y]);
                }
            }
        }
        return result;
    }

    public getInfo() {
        return `GENERATION: ${this.generation} - LIVE CELLS: ${this.numLiveCells()} of ${this.cellCount}`;
    }

    public numLiveCells(): number {
        let sum = 0;
        for (let list of this.cellList) {
            for (let cell of list) {
                sum += cell.isAlive() ? 1 : 0;
            }
        }
        return sum;
    }
    
}