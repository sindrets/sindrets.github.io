import { TextModule } from "./TextModule";
export declare class Label extends TextModule {
    constructor(text?: string, x?: number, y?: number);
    updateDimensions(): void;
    setText(text: string): void;
    setFontSize(size: number): void;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
