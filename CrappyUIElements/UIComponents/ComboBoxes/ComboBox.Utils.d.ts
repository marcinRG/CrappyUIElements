import { IComboBoxProperties } from '../../Interfaces/Component.Properties/IComboBox.Properties';
import { IList } from '../../Interfaces/Data.Models/IList';
import { IGetText } from '../../Interfaces/Data.Models/IGetText';
export declare function createHTMLElements(properties: IComboBoxProperties): {
    htmlElement: HTMLElement;
    txtInput: HTMLInputElement;
    btnInput: Element;
    listElements: Element;
};
export declare function addRemoveClass(condition: boolean, element: HTMLElement, className: string): void;
export declare function createListElements(list: IList<any> & IGetText<any>, values: any, htmlListElement: HTMLElement, listElementClass: string, comboBox: object, callback: any): HTMLElement;
export declare function createListHTMLElements(list: IList<any> & IGetText<any>, values: any, htmlListElement: HTMLElement, listElementClass: string, comboBox: object, callback: any): HTMLElement;
export declare function hideAfterSelected(listElements: any, maxLength: any, listVisible: any, btnInput: any, changeBtnClass: any): boolean;
export declare function toggleListElements(listElements: any, maxLength: any, listVisible: any): boolean;
