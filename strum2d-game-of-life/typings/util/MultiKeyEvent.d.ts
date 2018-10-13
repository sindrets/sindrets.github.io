export declare class MultiKeyEvent {
    handled: boolean;
    keyPressed?: KeyboardEvent;
    keyDown?: KeyboardEvent;
    keyUp?: KeyboardEvent;
    constructor(keyPressed?: KeyboardEvent, keyDownEvent?: KeyboardEvent, keyUpEvent?: KeyboardEvent);
}
