import { Cell } from "./Cell";

export class CellEvent {

    public static KILL: number = 0x0
    public static RESURRECT: number = 0x1

    public eventType: number;
    public subject: Cell;

    constructor(eventType: number, subject: Cell) {
        this.eventType = eventType;
        this.subject = subject;
    }
}