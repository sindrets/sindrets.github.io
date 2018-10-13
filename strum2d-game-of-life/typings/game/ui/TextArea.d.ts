import { TextModule } from "./TextModule";
export declare class TextArea extends TextModule {
    private lines;
    constructor(text?: string, x?: number, y?: number);
    updateDimensions(): void;
    setText(text: string): void;
    appendText(text: string): void;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
