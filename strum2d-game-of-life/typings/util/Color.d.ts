export declare class Color {
    static shadeColor(hexcolor: string, frac: number): string;
    static modColor(hexcolor: string, value: number): string;
    static rgbToHex(r: number, g: number, b: number): string;
    static intToHex(c: number): string;
    static getLuminance(hexcolor: string): number;
}
