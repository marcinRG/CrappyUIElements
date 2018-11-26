import { IComboBoxProperties } from '../../../Interfaces/IComboBox.Properties';
import { IFilteredValuesList } from '../../../Interfaces/IFilteredValuesList';
export declare class DynamicComboBox {
    selectableList: IFilteredValuesList<any>;
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible;
    private changeBtnClass;
    private debouncedInputTxt;
    constructor(properties: IComboBoxProperties, selectableList: IFilteredValuesList<any>);
    private setInitialProperties;
    changeValue(ID: string): void;
    private changeToSelected;
    private hideAfterSelected;
    private toggleListElements;
    private createElements;
}
