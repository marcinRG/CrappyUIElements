import { IListWithCheckBoxesProperties } from '../../Interfaces/Component.Properties/IListWithCheckBoxes.properties';
import { ISelectedValuesList } from '../../Interfaces/Data.Models/ISelectedValuesList';
import { IList } from '../../Interfaces/Data.Models/IList';
import { IGetTitle } from '../../Interfaces/Data.Models/IGetTitle';
export declare class ListWithCheckboxes {
    selectableList: ISelectedValuesList<any> & IList<any> & IGetTitle<any>;
    checkBoxes: any;
    selectedElementClass: any;
    checkBoxClass: any;
    private htmlElement;
    private elementClass;
    private listClass;
    private listElementClass;
    private valueClass;
    constructor(properties: IListWithCheckBoxesProperties, selectableList: ISelectedValuesList<any> & IList<any> & IGetTitle<any>);
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
