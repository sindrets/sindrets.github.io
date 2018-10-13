import { MultiKeyEvent } from "./MultiKeyEvent";
export declare class KeyHandler {
    keyPressed?: (e: KeyboardEvent) => void;
    keyDown?: (e: KeyboardEvent) => void;
    keyUp?: (e: KeyboardEvent) => void;
    enabled: boolean;
    static preventDefault(): void;
    setEnabled(flag: boolean): void;
    tick(e: MultiKeyEvent): void;
}
