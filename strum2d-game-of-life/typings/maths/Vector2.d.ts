export declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    update(a: Vector2 | number, y?: number): void;
    add(vec: Vector2): Vector2;
    subtract(vec: Vector2): Vector2;
    multiply(vec: Vector2): Vector2;
    multiplyNum(multiplier: number): Vector2;
    divide(vec: Vector2): Vector2;
    divideNum(divisor: number): Vector2;
    getLength(): number;
    normalize(): Vector2;
    cross(vec: Vector2): number;
    dot(vec: Vector2): number;
    inverse(): Vector2;
    /**
     * Sets the magnitude of the vector.
     * @param length Target length
     */
    setLength(length: number): void;
    /**
     * Adjusts the magnitude of the vector by specified amount.
     * @param magnitude
     */
    modLength(magnitude: number): void;
    distance(a: Vector2): number;
    clone(): Vector2;
    toString(fractionDigits?: number): string;
    /** Linearily interpolate between two vectors */
    static lerp(v0: Vector2, v1: Vector2, t: number): Vector2;
}
