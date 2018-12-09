import { IGetTitle } from '../Interfaces/Data.Models/IGetTitle';
import { IList } from '../Interfaces/Data.Models/IList';
export declare class PlainTextArray implements IGetTitle<string>, IList<string> {
    values: string[];
    selected: any;
    constructor(values: string[], selected?: any);
    getIndex(uniqueID: string): number;
    getTitle(elem: string): string;
    getUniqueID(elem: string): string;
    isEqual(elem1: string, elem2: string): boolean;
}
