import { Point } from "../maths/Point";
import { Vector2 } from "../maths/Vector2";
/**
 * A collection of useful functions
 */
export declare class Utils {
    static mouseX: number;
    static mouseY: number;
    /** Converts degrees to radians */
    static toRadians(degrees: number): number;
    /** Converts radians to degrees */
    static toDegrees(radians: number): number;
    /** Return the difference between two values */
    static dif(a: number, b: number): number;
    /** Get the current mouse position relative to the canvas top-left. */
    static getMousePos(): Point;
    /** Convert camera space coordinate to a world space coordinate */
    static toWorldPos(p: Point | Vector2): Vector2;
    static toCameraPos(p: Point | Vector2): Vector2;
    /** Get the world space position under the mouse cursor. */
    static getWorldPos(): Vector2;
    /** Convert client coordinate to a canvas coordinate (camera space). */
    static toCanvasPos(clientPos: Point): Vector2;
    /** Return the value if it belongs between the given range. Otherwise
    return the closest of the extremes. */
    static clamp(value: number, min: number, max: number): number;
    /** Returns true if the two ranges overlap */
    static rangeIntersect(min0: number, max0: number, min1: number, max1: number): boolean;
    /** Returns true if both numbers have the same sign */
    static sameSign(a: number, b: number): boolean;
    /** Convert a Vector2 to an angle in degrees */
    static vecToDeg(vec: Vector2): number;
    /** Convert an angle in degrees to a Vector2 */
    static degToVec(degrees: number): Vector2;
    /** Linearly interpolate between a and b.
     * Weight t should be in the range [0.0, 1.0] */
    static lerp(a: number, b: number, t: number): number;
    /** Translate a point to its rotated position based on camera rotation. */
    static getRotatedPos(pos: Point | Vector2): Vector2;
    /** Translate a point to its rotated position based on inverse camera rotation. */
    static getInverseRotatedPos(pos: Point | Vector2): Vector2;
    static rotatePos(pos: Point | Vector2, deg: number): Vector2;
    /** Splice and return the first element from an array. */
    static spliceFirst(array: Array<any>): any;
    /** Splice and return the last element from an array. */
    static spliceLast(array: Array<any>): any;
    /**
     * Returns a float between 0 and 1 inclusive, as a logistic function of t.
     * @param t Time progression. Should be a float between 0 and 1, inclusive.
     * @param a Horizontal offset. Should be a positive number for sensical results.
     * @param b Curvature. Setting this to 0 results in a linear function.
     */
    static logisticProgression(t: number, a: number, b: number): number;
    /**
     * Returns a float between 0 and 1 inclusive, represeting progression through a
     * cubic bézier curve defined by its four given control points.
     * @param t Time progression. Should be a float between 0 and 1, inclusive.
     * @param c1 Control point 1.
     * @param c2 Control point 2.
     * @param c0 Control point 0. Defaults to (0,0).
     * @param c3 Control point 3. Defaults to (1,1).
     */
    static cubicBezier(t: number, c1: Point, c2: Point, c0?: Point, c3?: Point): number;
    static cutStr(text: string, index: number, deleteCount: number): string;
    static cutString(text: string, start: number, end: number): string;
    /**
     * Loads a font face through the compatibillity-safe CSS injection method.
     * @param fontName The name of the font family.
     * @param url The URL to the font file.
     */
    static loadFont(fontName: string, url: string, properties?: {
        fontStyle: string;
        fontWeight: string;
    }): void;
    /**
     * EXPERIMENTAL - Loads a font face from a url using the new experimental FontFace API.
     * @param fontName The name of the font family.
     * @param url A URL to a font file
     * @param callback A function that is called when the font is loaded.
     */
    static loadFontFace(fontName: string, url: string, callback?: (fontFace: any) => void): void;
    static fmod(a: number, b: number): number;
}
