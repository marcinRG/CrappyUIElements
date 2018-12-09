import { PlainTextArray } from './PlainTextArray';
import { ISelectedValuesList } from '../Interfaces/Data.Models/ISelectedValuesList';
export declare class PlainTextArrayWithMultiSelection extends PlainTextArray implements ISelectedValuesList<string> {
    multipleValues: boolean;
    constructor(values: string[], multipleValues?: boolean, initValue?: string[]);
    addRemoveValue(element: string): void;
    private initSelected;
}
