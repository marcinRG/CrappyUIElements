import {IList} from './IList';

export interface ISelectableList<T> extends IList<T> {
    getTitle(elem: T): string;
}
