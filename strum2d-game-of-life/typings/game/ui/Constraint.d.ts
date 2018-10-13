import { LayoutConstraint } from "./Layout";
import { IEntity as Entity } from "../Entity";
export declare class Constraint {
    subject: LayoutConstraint;
    anchor: LayoutConstraint;
    target: Entity;
    transformHandler: () => void;
    constructor(subject: LayoutConstraint, anchor: LayoutConstraint, target: Entity, callback: () => void);
    dispose(): boolean;
}
