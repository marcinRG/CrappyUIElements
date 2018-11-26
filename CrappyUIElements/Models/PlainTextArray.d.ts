import { ISelectableList } from '../Interfaces/ISelectableList';
export declare class PlainTextArray implements ISelectableList<string> {
    values: string[];
    selectedValues: any;
    constructor(values: string[], selectedValues?: any);
    getIndex(uniqueID: string): number;
    getTitle(elem: string): string;
    getUniqueID(elem: string): string;
}
