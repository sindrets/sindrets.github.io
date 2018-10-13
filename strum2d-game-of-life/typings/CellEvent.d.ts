import { Cell } from "./Cell";
export declare class CellEvent {
    static KILL: number;
    static RESURRECT: number;
    eventType: number;
    subject: Cell;
    constructor(eventType: number, subject: Cell);
}
