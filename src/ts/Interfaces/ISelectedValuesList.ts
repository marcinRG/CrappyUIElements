import {ISelectableList} from './ISelectableList';

export interface ISelectedValuesList<T> extends ISelectableList<T> {
    selectedValues: T[];

    addRemoveValue(element: T);
}
