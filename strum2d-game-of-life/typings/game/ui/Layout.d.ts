import { Composite } from './Composite';
import { LayoutManager } from './LayoutManager';
import { Component } from '../Component';
import { IEntity as Entity } from '../Entity';
import { Constraint } from './Constraint';
export declare class Layout extends Composite {
    protected layoutManager: LayoutManager;
    protected layoutDirection: LayoutDirection;
    protected justifyContent: LayoutAlignment;
    protected alignItems: LayoutAlignment;
    protected parent?: Layout;
    protected marginTop: number;
    protected marginBottom: number;
    protected marginLeft: number;
    protected marginRight: number;
    protected floatStyle: [LayoutFloat, LayoutFloat];
    protected constraints: Constraint[];
    drawBackground: boolean;
    private autoWidth;
    private autoHeight;
    private deltaX;
    private deltaY;
    private deltaW;
    private deltaH;
    constructor();
    updateLayout(): void;
    private updatePosition;
    private updateDimensions;
    private handleConstraints;
    private updateChildPos;
    addConstraint(subject: LayoutConstraint, target: Entity, anchor: LayoutConstraint): Constraint;
    removeConstraint(constraint: Constraint): boolean;
    clearConstraints(): void;
    setAutoWidth(flag: boolean): void;
    setAutoHeight(flag: boolean): void;
    setMargin(amount: number): void;
    setMarginLeft(amount: number): void;
    setMarginTop(amount: number): void;
    setMarginRight(amount: number): void;
    setMarginBottom(amount: number): void;
    setFloat(modA: LayoutFloat, modB: LayoutFloat): void;
    setLayoutDirection(property: LayoutDirection): void;
    /**
     * Controls the main axis alignment.
     * @param property
     */
    setJustifyContent(property: LayoutAlignment): void;
    /**
     * Controls the cross axis alignment.
     * @param property
     */
    setAlignItems(property: LayoutAlignment): void;
    addComponent(o: Component): void;
    draw(g2: CanvasRenderingContext2D): void;
}
export declare enum LayoutDirection {
    VERTICAL = 0,
    HORIZONTAL = 1
}
export declare enum LayoutFloat {
    NONE = 0,
    LEFT = 1,
    TOP = 2,
    RIGHT = 3,
    BOTTOM = 4,
    CENTER_H = 5,
    CENTER_V = 6
}
export declare enum LayoutConstraint {
    LEFT = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 3
}
export declare enum LayoutAlignment {
    START = 0,
    END = 1,
    CENTER = 2,
    STRETCH = 3
}
