import { Component } from "../Component";
import { CoordSpace } from "../Entity";
export declare class Composite extends Component {
    stack: Component[];
    /**
     * Add a component to the composite.
     */
    addComponent(o: Component): void;
    setPrefferedCoordSpace(value: CoordSpace): void;
    /**
     * Push all stack elements as individual entities to the UI stack.
     * Do not use this if you have pushed the composite itself to the UI stack.
     */
    pushAsUi(): void;
    /**
     * Push all stack elements as individual entities to the world stack.
     * Do not use this if you have pushed the composite itself to the world stack.
     */
    pushAsWorld(): void;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
