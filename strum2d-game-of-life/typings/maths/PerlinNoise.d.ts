export declare class PerlinNoise {
    static octaveNoise(x: number, y?: number, z?: number, octaves?: number, frequency?: number, persistence?: number): number;
    /**
     * Calculate perlin noise for the given position in noise space. Returns a value such that [(-1) <= value <= 1]
     * @param x x-position in noise space.
     * @param y y-position in noise space.
     * @param z z-position in noise space.
     */
    static noise(x: number, y: number, z: number): number;
    private static fade;
    private static lerp;
    private static grad;
    private static p;
    private static permutation;
    private static _constructor;
}
