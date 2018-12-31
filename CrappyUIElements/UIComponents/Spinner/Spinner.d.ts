import { ISpinnerProperties } from '../../Interfaces/Component.Properties/ISpinner.Properties';
import { IIterable } from '../../Interfaces/Data.Models/IIterable';
export declare class Spinner {
    iterable: IIterable<any>;
    private elementClass;
    private txtInputClass;
    private buttonWrapperClass;
    private upButtonClass;
    private downButtonClass;
    private disabledButtonClass;
    private debouncedInputTxt;
    private htmlElement;
    private htmlButtonUp;
    private htmlButtonDown;
    private htmlInputText;
    constructor(properties: ISpinnerProperties, iterable: IIterable<any>);
    changeValue(direction: string): any;
    private nextValue;
    private previousValue;
    private createHTMLElements;
    private setProperties;
    private setHTMLElements;
}
