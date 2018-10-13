import { Character } from "./Character";
import { Segment } from "../maths/Segment";
export declare class Player extends Character {
    jumpHeight: number;
    jumpCount: number;
    maxJumps: number;
    seg: Segment;
    normal: Segment;
    constructor();
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
