import { Component } from "../Component";
import { Font } from "./TextModule";
export declare abstract class Graph extends Component {
    protected data: GraphData[];
    protected font: Font;
    protected fontSize: number;
    protected labelMargin: number;
    protected abstract analyzeData(): void;
    protected applyFont(): void;
    setData(data: GraphData[]): void;
    getData(): GraphData[];
    setFont(font: Font): void;
    setFontSize(value: number): void;
}
export interface GraphData {
    value: number;
    id?: string;
}
