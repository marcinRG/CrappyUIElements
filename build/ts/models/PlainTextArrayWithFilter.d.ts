import { IFilteredValuesList } from '../Interfaces/IFilteredValuesList';
import { PlainTextArray } from './PlainTextArray';
export declare class PlainTextArrayWithFilter extends PlainTextArray implements IFilteredValuesList<string> {
    constructor(values: string[], selectedValues?: string | string[]);
    filteredValues(filterTxt: string, maxLength?: number): string[];
}
