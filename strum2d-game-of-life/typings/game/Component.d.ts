import { Entity } from "./Entity";
export declare abstract class Component extends Entity {
    protected primaryColor: string;
    protected secondaryColor: string;
    setPrimaryColor(color: string): void;
    setSecondaryColor(color: string): void;
}
