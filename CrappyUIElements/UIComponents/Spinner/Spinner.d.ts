import { IIterable } from '../../Interfaces/IIterable';
import { ISpinnerProperties } from '../../Interfaces/ISpinner.Properties';
export declare class Spinner {
    iterable: IIterable<any>;
    htmlInputText: any;
    private elementClass;
    private txtInputClass;
    private buttonWrapperClass;
    private upButtonClass;
    private downButtonClass;
    private disabledButtonClass;
    private htmlElement;
    private htmlButtonUp;
    private htmlButtonDown;
    constructor(properties: ISpinnerProperties, iterable: IIterable<any>);
    changeValue(direction: string): any;
    private nextValue;
    private previousValue;
    private createHTMLElements;
    private setProperties;
    private setHTMLElements;
}
