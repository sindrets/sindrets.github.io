export declare class CssUtils {
    static createStyleSheet(id?: string, domClass?: string): CSSStyleSheet;
    static styleExists(selector?: string): boolean;
    static getStyleSheet(selector?: string, domClass?: string): CSSStyleSheet | null;
    static clearRule(id: string | undefined, selector: string): CSSStyleSheet | undefined;
}
