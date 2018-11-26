import { ISelectableList } from '../../Interfaces/ISelectableList';
import { IComboBoxProperties } from '../../Interfaces/IComboBox.Properties';
export declare function createHTMLElements(properties: IComboBoxProperties): {
    htmlElement: Element;
    txtInput: HTMLInputElement;
    btnInput: Element;
    listElements: Element;
};
export declare function addRemoveClass(condition: boolean, element: HTMLElement, className: string): void;
export declare function createListElements(list: ISelectableList<any>, values: any, htmlListElement: HTMLElement, listElementClass: string, comboBox: object, callback: any): void;
export declare function hideAfterSelected(listElements: any, maxLength: any, listVisible: any, btnInput: any, changeBtnClass: any): boolean;
export declare function toggleListElements(listElements: any, maxLength: any, listVisible: any): boolean;
