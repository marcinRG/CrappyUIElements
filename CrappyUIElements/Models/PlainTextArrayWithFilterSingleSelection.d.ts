import { IFilteredValuesList } from '../Interfaces/Data.Models/IFilteredValuesList';
import { PlainTextArray } from './PlainTextArray';
export declare class PlainTextArrayWithFilterSingleSelection extends PlainTextArray implements IFilteredValuesList<string> {
    constructor(values: string[], initValues?: string | string[]);
    filteredValues(filterTxt: string, maxLength?: number): string[];
    private initSelected;
}
