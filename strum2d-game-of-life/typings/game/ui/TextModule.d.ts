import { Component } from "../Component";
import { TextModuleHandler } from "./TextModuleHandler";
import { Vector2 } from "../../maths/Vector2";
export declare abstract class TextModule extends Component {
    text: string;
    protected placeholder: string;
    protected fontSize: number;
    protected lineHeight: number;
    protected font: Font | string;
    protected alignment: TextAlignment;
    filter?: RegExp;
    protected primaryColor: string;
    protected secondaryColor: string;
    protected textColor: string;
    protected selectedColor: string;
    protected highlightColor: string;
    protected strokeColor: string;
    strokeText: boolean;
    strokeWidth: number;
    cursorIndex: number;
    protected cursorColor: string;
    protected cursorBlink: number;
    protected cursorWidth: number;
    cursorX: number;
    offsetX: number;
    protected behindCursor: string;
    protected pastCursor: string;
    protected behindCursorWidth: number;
    protected pastCursorWidth: number;
    protected textWidth: number;
    protected textHeight: number;
    protected marginLeft: number;
    protected marginTop: number;
    protected marginRight: number;
    protected marginBottom: number;
    selection: string;
    selectionRange: [number, number];
    hasSelection: boolean;
    isInputModule: boolean;
    selected: boolean;
    protected textmoduleHandler: TextModuleHandler;
    onInput?: () => void;
    updateDimensions(): void;
    protected applyFont(): void;
    /**
     * Sets the cursor to the specified index, and updates offset.
     * @param index The cursor index.
     */
    setCursorIndex(index: number): void;
    /**
     * Mods the cursor index by specified amount, and updates offset.
     * @param amount The amount to mod the index.
     */
    modCursorIndex(amount: number): void;
    /**
     * Updates the offset based on the cursor position.
     */
    updateCursor(): void;
    /**
     * Sets the cursor to the closest index of a given point.
     * @param p The target point.
     */
    setCursorClosestTo(p: Vector2): void;
    /**
     * Sets the selection text based on the current selection range,
     * and prepares copy data on the Clipboard object.
     */
    updateSelection(): void;
    /**
     * Returns the width (in pixels) of a given text range.
     * @param start The index of the start of the range.
     * @param end The index of the end of the range.
     */
    widthOfTextRange(start: number, end: number): number;
    /**
     * Returns the current x coordinate of a character.
     * @param index The index of the character.
     */
    protected xOfIndex(index: number): number;
    /**
     * Measure a string with the text module's current font settings.
     * @param text The string that is to be measured.
     */
    protected measureString(text: string): TextMetrics;
    selectAll(): void;
    deselectAll(): void;
    /**
     * Append text at a given index. Selection is deleted unless `ignoreSelection` flag is given.
     * @param text The text to be appended.
     * @param index The index at which to append the text. Default: end of text
     * @param ignoreSelection Append the text at the given index without respecting the current selection. Default: `false`
     */
    appendText(text: string, index?: number, ignoreSelection?: boolean): void;
    setText(text: string): void;
    setPlaceholder(text: string): void;
    setFontSize(size: number): void;
    setLineHeight(ratio: number): void;
    setFont(font: Font | string, size?: number): void;
    setTextAlignment(alignment: TextAlignment): void;
    setFilter(filter: RegExp | undefined): void;
    setTextColor(color: string): void;
    setSelected(flag: boolean): void;
    deselectText(): void;
    /**
     * Marks this component as an input module.
     * @param flag
     */
    setInputModule(flag: boolean): void;
    setMargin(amount: number): void;
    setMarginLeft(amount: number): void;
    setMarginTop(amount: number): void;
    setMarginRight(amount: number): void;
    setMarginBottom(amount: number): void;
    getMarginLeft(): number;
    getMarginTop(): number;
    getMarginRight(): number;
    getMarginBottom(): number;
    getText(): string;
    getPlaceholder(): string;
    getFontSize(): number;
    getFont(): string;
    getTextAlignment(): TextAlignment;
    getSelection(): string;
    /**
     * Returns an array representing the selection range,
     * such that [0] is the lowest index, and [1] is the highest.
     */
    getSelectionRange(): [number, number];
    /**
     * Returns the width of the component minus the horizontal margins.
     */
    getInnerWidth(): number;
}
export declare enum TextAlignment {
    LEFT_TO_RIGHT = 0,
    RIGHT_TO_LEFT = 1,
    CENTERED = 2
}
export declare enum Font {
    ANTIQUA = "Book Antiqua",
    GEORGIA = "Georgia",
    PALATINO = "Palatino Linotype",
    SERIF = "serif",
    TIMES_NEW_ROMAN = "Times New Roman",
    ARIAL = "Arial",
    ARIAL_BLACK = "Arial Black",
    CHARCOAL = "Charcoal",
    GADGET = "Gadget",
    GENEVA = "Geneva",
    HELVETICA = "Helvetica",
    IMPACT = "Impact",
    LUCIDA_SANS = "Lucida Sans Unicode",
    ROBOTO_BOLD = "Roboto Bold",
    ROBOTO_REGULAR = "Roboto",
    ROBOTO_THIN = "Roboto Thin",
    SANS_SERIF = "sans-serif",
    TAHOMA = "Tahoma",
    TREBUCHET = "Trebuchet MS",
    VERDANA = "Verdana",
    CONSOLAS = "Consolas",
    COURIER_NEW = "Courier New",
    LUCIDA_CONSOLE = "Lucida Console",
    MONOSPACE = "monospace",
    SOURCE_CODE_PRO = "Source Code Pro"
}
