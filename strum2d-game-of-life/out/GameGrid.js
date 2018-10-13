/// <reference path="../typings/strum-2d.d.ts" />
import { Cell } from "./Cell";
import { CellEvent } from "./CellEvent";
var GameGrid = /** @class */ (function () {
    function GameGrid(width, height) {
        this.SPAWN_RATE = 1 / 10.0;
        this.generation = 0;
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.cellList = [[]];
        this.cellCount = 0;
        this.cellSize = 0;
        this.drawGrid = true;
        this.setGridSize(width, height);
        this.gridTexture = new Strum2d.Texture(this.gridWidth * this.cellSize, this.gridHeight * this.cellSize);
        this.gridTexture.setShadowBlur(60);
        Strum2d.Main.addEntity(this.gridTexture);
        console.log(this.gridTexture);
    }
    GameGrid.prototype.setGridSize = function (width, height) {
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
    };
    GameGrid.prototype.setDrawGrid = function (flag) {
        this.drawGrid = flag;
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var cell = row_1[_b];
                cell.drawOutline = flag;
            }
        }
        this.redrawTexture();
    };
    GameGrid.prototype.redrawTexture = function () {
        this.gridTexture.clear();
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_2 = row; _b < row_2.length; _b++) {
                var cell = row_2[_b];
                cell.draw(this.gridTexture.g2);
            }
        }
    };
    GameGrid.prototype.generate = function () {
        // init array
        this.cellList = [];
        for (var i = 0; i < this.gridWidth; i++) {
            this.cellList[i] = [];
        }
        for (var y = 0; y < this.gridHeight; y++) {
            for (var x = 0; x < this.gridWidth; x++) {
                var cell = new Cell(x, y, this.cellSize);
                cell.setAlive(Math.random() < this.SPAWN_RATE);
                cell.drawOutline = this.drawGrid;
                this.cellList[x][y] = cell;
                // Strum2d.Main.addEntity(cell);
            }
        }
        this.redrawTexture();
        this.generation = 1;
        console.log(this.getInfo());
    };
    GameGrid.prototype.simulate = function () {
        var pendingEvents = [];
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_3 = row; _b < row_3.length; _b++) {
                var cell = row_3[_b];
                var liveNeighbours = this.getLiveNeighbours(cell).length;
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
        for (var _c = 0, pendingEvents_1 = pendingEvents; _c < pendingEvents_1.length; _c++) {
            var event_1 = pendingEvents_1[_c];
            if (event_1.eventType == CellEvent.KILL) {
                event_1.subject.setAlive(false);
                event_1.subject.setHasDied(true);
            }
            else if (event_1.eventType == CellEvent.RESURRECT) {
                event_1.subject.setAlive(true);
            }
        }
        this.redrawTexture();
        this.generation++;
        console.log(this.getInfo());
    };
    GameGrid.prototype.getLiveNeighbours = function (cell) {
        var result = [];
        for (var y = cell.gridY - 1; y <= cell.gridY + 1; y++) {
            for (var x = cell.gridX - 1; x <= cell.gridX + 1; x++) {
                if (x >= 0 && y >= 0 &&
                    x <= this.gridWidth - 1 && y <= this.gridHeight - 1 &&
                    this.cellList[x][y].id != cell.id &&
                    this.cellList[x][y].isAlive()) {
                    result.push(this.cellList[x][y]);
                }
            }
        }
        return result;
    };
    GameGrid.prototype.getInfo = function () {
        return "GENERATION: " + this.generation + " - LIVE CELLS: " + this.numLiveCells() + " of " + this.cellCount;
    };
    GameGrid.prototype.numLiveCells = function () {
        var sum = 0;
        for (var _i = 0, _a = this.cellList; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
                var cell = list_1[_b];
                sum += cell.isAlive() ? 1 : 0;
            }
        }
        return sum;
    };
    return GameGrid;
}());
export { GameGrid };
