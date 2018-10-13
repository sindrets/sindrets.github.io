import { Component } from "./Component";
export declare abstract class Character extends Component {
    speed: number;
    onGround: boolean;
    move(): void;
}
