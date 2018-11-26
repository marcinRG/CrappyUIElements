import { IListWithCheckBoxesProperties } from '../../Interfaces/IListWithCheckBoxes.properties';
import { ISelectedValuesList } from '../../Interfaces/ISelectedValuesList';
export declare class ListWithCheckboxes {
    selectableList: ISelectedValuesList<any>;
    checkBoxes: any;
    selectedElementClass: any;
    checkBoxClass: any;
    private htmlElement;
    private elementClass;
    private listClass;
    private listElementClass;
    private valueClass;
    constructor(properties: IListWithCheckBoxesProperties, selectableList: ISelectedValuesList<any>);
    changeValue(value: any): void;
    private toggleCheckBox;
    private unCheckAllCheckBoxes;
    private toggleCheckBoxView;
    private checkBoxIsChecked;
    private setProperties;
    private createHTMLElements;
    private createList;
    private createListElement;
    private setHTMLElements;
}
