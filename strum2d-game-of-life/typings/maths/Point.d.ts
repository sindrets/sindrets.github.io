export declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    toString(fractionDigits?: number): string;
    draw(g2: CanvasRenderingContext2D, radius?: number): void;
}
