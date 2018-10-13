var CellEvent = /** @class */ (function () {
    function CellEvent(eventType, subject) {
        this.eventType = eventType;
        this.subject = subject;
    }
    CellEvent.KILL = 0x0;
    CellEvent.RESURRECT = 0x1;
    return CellEvent;
}());
export { CellEvent };
