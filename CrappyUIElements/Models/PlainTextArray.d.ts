import { IGetText } from '../Interfaces/Data.Models/IGetText';
import { IList } from '../Interfaces/Data.Models/IList';
export declare class PlainTextArray implements IGetText<string>, IList<string> {
    values: string[];
    selected: any;
    constructor(values: string[], selected?: any);
    getIndex(uniqueID: string): number;
    getText(elem: string): string;
    getUniqueID(elem: string): string;
    isEqual(elem1: string, elem2: string): boolean;
}
