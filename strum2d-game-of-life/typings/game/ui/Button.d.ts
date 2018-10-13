import { Handler } from '../../util/Handler';
import { TextModule } from './TextModule';
export declare class Button extends TextModule {
    protected margin: number;
    protected cornerRadius: number;
    private fillColor;
    protected strokeColor: string;
    protected buttonHandler: Handler;
    constructor();
    setPrimaryColor(color: string): void;
    setSecondaryColor(color: string): void;
    updateDimensions(): void;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
