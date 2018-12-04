import {IList} from './IList';

export interface ISelectableListWithHTMLOutput<T> extends IList<T> {
    getHTML(elem: T): HTMLElement;
}
