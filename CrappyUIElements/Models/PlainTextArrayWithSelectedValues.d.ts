import { ISelectedValuesList } from '../Interfaces/ISelectedValuesList';
import { PlainTextArray } from './PlainTextArray';
export declare class PlainTextArrayWithSelectedValues extends PlainTextArray implements ISelectedValuesList<string> {
    multipleValues: boolean;
    selectedValues: string[];
    constructor(values: string[], multipleValues?: boolean, selectedValues?: string[]);
    addRemoveValue(element: string): void;
}
