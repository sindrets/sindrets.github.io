export interface NoiseInputs {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
}
export declare class SimplexNoise {
    static octaveNoise(inputs: NoiseInputs, octaves?: number, frequency?: number, persistence?: number): number;
    private static grad3;
    private static grad4;
    private static p;
    private static perm;
    private static permMod12;
    private static _constructor;
    private static F2;
    private static G2;
    private static F3;
    private static G3;
    private static F4;
    private static G4;
    private static fastFloor;
    private static dot;
    static noise2d(xin: number, yin: number): number;
    static noise3d(xin: number, yin: number, zin: number): number;
    static noise4d(x: number, y: number, z: number, w: number): number;
}
