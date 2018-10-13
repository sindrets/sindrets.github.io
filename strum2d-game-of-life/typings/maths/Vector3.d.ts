export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    update(a: Vector3 | number, y?: number, z?: number): void;
    add(vec: Vector3): Vector3;
    subtract(vec: Vector3): Vector3;
    multiply(vec: Vector3): Vector3;
    multiplyNum(multiplier: number): Vector3;
    divide(vec: Vector3): Vector3;
    divideNum(divisor: number): Vector3;
    getLength(): number;
    setLength(length: number): void;
    modLength(magnitude: number): void;
    normalize(): Vector3;
    cross(vec: Vector3): Vector3;
    dot(vec: Vector3): number;
    inverse(): Vector3;
    clone(): Vector3;
    /** Linearily interpolate between two vectors */
    static lerp(v0: Vector3, v1: Vector3, t: number): Vector3;
}
