import { Handler } from "../../util/Handler";
import { TextModule } from "./TextModule";
export declare class TextModuleHandler extends Handler {
    protected parent: TextModule;
    constructor(parent: TextModule);
    private initListeners;
}
