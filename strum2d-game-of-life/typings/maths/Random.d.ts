export declare class Random {
    private seed;
    constructor(seed?: number);
    setSeed(seed: number): void;
    nextFloat(): number;
    nextInt(n: number, max?: number): number;
}
