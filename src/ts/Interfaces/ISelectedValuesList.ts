import {ISelectableList} from './ISelectableList';

export interface ISelectedValuesList<T> extends ISelectableList<T> {
    selectedValues: T[];
    multipleValues: boolean;

    addRemoveValue(element: T);
}
