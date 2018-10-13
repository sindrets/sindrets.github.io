export declare class Graphics2D extends CanvasRenderingContext2D {
    static attach(): void;
}
declare global {
    interface CanvasRenderingContext2D {
        roundedRect: (x: number, y: number, w: number, h: number, r: number) => void;
        fillRoundedRect: (x: number, y: number, w: number, h: number, r: number) => void;
        strokeRoundedRect: (x: number, y: number, w: number, h: number, r: number) => void;
        setPixel: (x: number, y: number) => void;
        /**
         * @Experimental
         * Provides filter effects like blurring or gray-scaling. It is similar to the CSS
         * filter property and accepts the same functions.
         */
        filter: string;
    }
}
