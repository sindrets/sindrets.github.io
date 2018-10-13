import { TextModule } from './TextModule';
export declare class InputField extends TextModule {
    protected label: string;
    protected hasLabel: boolean;
    protected borderRadius: number;
    protected outline: boolean;
    constructor();
    setBorderRadius(radius: number): void;
    setOutline(flag: boolean): void;
    setLabel(label: string): void;
    setMarginLeft(amount: number): void;
    getBorderRadius(): number;
    getOutline(): boolean;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
