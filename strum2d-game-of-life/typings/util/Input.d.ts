export declare class Input {
    private keyState;
    private frozenKeyState;
    caseSensitive: boolean;
    locked: boolean;
    mouseLeftDown: boolean;
    mouseMiddleDown: boolean;
    mouseRightDown: boolean;
    tick(e: Event): void;
    isDown(id: string, caseSensitive?: boolean): boolean;
    setLock(flag: boolean): void;
}
