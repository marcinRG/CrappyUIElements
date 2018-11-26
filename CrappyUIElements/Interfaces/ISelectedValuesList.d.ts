import { ISelectableList } from './ISelectableList';
export interface ISelectedValuesList<T> extends ISelectableList<T> {
    multipleValues: boolean;
    addRemoveValue(element: T): any;
}
