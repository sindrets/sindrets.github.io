export declare class TiledPerlinNoise {
    repeat: number;
    private seed;
    constructor(repeat?: number);
    octaveNoise(x: number, y?: number, z?: number, octaves?: number, persistence?: number): number;
    private static permutation;
    private static p;
    private static _constructor;
    perlin(x: number, y: number, z: number): number;
    inc(num: number): number;
    static grad(hash: number, x: number, y: number, z: number): number;
    static fade(t: number): number;
    static lerp(a: number, b: number, x: number): number;
}
