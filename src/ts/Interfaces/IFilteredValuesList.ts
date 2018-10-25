import {ISelectableList} from './ISelectableList';

export interface IFilteredValuesList<T> extends ISelectableList<T> {
    filteredValues(filterTxt: string, maxLength?: number): T[];
}
