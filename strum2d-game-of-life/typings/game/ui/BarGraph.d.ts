import { Graph } from "./Graph";
import { Font } from "./TextModule";
export declare class BarGraph extends Graph {
    protected offX: number;
    protected offY: number;
    protected offWidth: number;
    protected offHeight: number;
    protected minX: number;
    protected minY: number;
    protected maxX: number;
    protected maxY: number;
    protected resolutionX: number;
    protected resolutionY: number;
    protected precisionX: number;
    protected precisionY: number;
    autoAdjustMinX: boolean;
    autoAdjustMinY: boolean;
    autoAdjustMaxX: boolean;
    autoAdjustMaxY: boolean;
    barColour: string;
    constructor(width: number, height: number, maxY?: number);
    protected analyzeData(): void;
    protected updateOffsets(): void;
    /** @Override */
    setFont(font: Font): void;
    /** @Override */
    setFontSize(value: number): void;
    /**
     * Determines the max amount of stops along the x-axis.
     * @param integer
     */
    setResolutionX(integer: number): void;
    /**
     * Determines the max amount of stops along the y-axis.
     * @param integer
     */
    setResolutionY(integer: number): void;
    /**
     * Determines the precision on x-axis labels.
     * @param integer
     */
    setPrecisionX(integer: number): void;
    /**
     * Determines the precision on y-axis labels.
     * @param integer
     */
    setPrecisionY(integer: number): void;
    getInnerX(): number;
    getInnerY(): number;
    getInnerWidth(): number;
    getInnerHeight(): number;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
