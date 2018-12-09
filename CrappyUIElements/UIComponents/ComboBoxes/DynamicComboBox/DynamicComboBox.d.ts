import { IComboBoxProperties } from '../../../Interfaces/Component.Properties/IComboBox.Properties';
import { IFilteredValuesList } from '../../../Interfaces/Data.Models/IFilteredValuesList';
import { IList } from '../../../Interfaces/Data.Models/IList';
import { IGetTitle } from '../../../Interfaces/Data.Models/IGetTitle';
export declare class DynamicComboBox {
    selectableList: IFilteredValuesList<any> & IList<any> & IGetTitle<any>;
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible;
    private changeBtnClass;
    private debouncedInputTxt;
    constructor(properties: IComboBoxProperties, selectableList: IFilteredValuesList<any> & IList<any> & IGetTitle<any>);
    changeValue(ID: string): void;
    private setInitialValueToTextInput;
    private setInitialProperties;
    private changeToSelected;
    private hideAfterSelected;
    private toggleListElements;
    private createElements;
}
