import { IHasID } from '../Interfaces/Data.Models/IHasID';
import { IGetText } from '../Interfaces/Data.Models/IGetText';
import { IFilteredValuesList } from '../Interfaces/Data.Models/IFilteredValuesList';
import { IList } from '../Interfaces/Data.Models/IList';
export declare class IdArrayWithSingleSelection<T extends IHasID> implements IFilteredValuesList<T>, IGetText<T>, IList<T> {
    values: T[];
    private renderer;
    private searchFiled;
    selected: T;
    constructor(values: T[], renderer: IGetText<T>, searchFiled: string, initValues?: T | T[]);
    filteredValues(filterTxt: string, maxLength?: number): T[];
    getText(elem: T): string;
    getIndex(uniqueID: string): number;
    getUniqueID(elem: T): string;
    isEqual(elem1: T, elem2: T): boolean;
    private getSearchResult;
    private initSelected;
}
