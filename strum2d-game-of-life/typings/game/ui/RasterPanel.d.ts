import { Component } from '../Component';
export declare class RasterPanel extends Component {
    protected image?: HTMLImageElement;
    protected srcWidth?: number;
    protected srcHeight?: number;
    protected aspectRatio?: number;
    protected aspectGuard: boolean;
    private offX;
    private offY;
    constructor();
    /**
     * Asynchronously load an image.
     * @param src The path to the source image.
     * @param onLoad Callback that is called once the image is loaded.
     */
    setImageAsync(src: string, onLoad?: (e: Event) => void): void;
    createBlankImage(width: number, height: number, onLoad?: (e: Event) => void): void;
    imageLoaded(): boolean;
    setWidth(width: number): void;
    setHeight(height: number): void;
    private handleAspect;
    private updateDrawOffset;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
