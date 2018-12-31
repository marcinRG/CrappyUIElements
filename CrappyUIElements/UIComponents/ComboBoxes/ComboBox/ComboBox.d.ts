import { IComboBoxProperties } from '../../../Interfaces/Component.Properties/IComboBox.Properties';
import { IFilteredValuesList } from '../../../Interfaces/Data.Models/IFilteredValuesList';
import { IList } from '../../../Interfaces/Data.Models/IList';
import { IGetText } from '../../../Interfaces/Data.Models/IGetText';
export declare class ComboBox {
    selectableList: IFilteredValuesList<any> & IList<any> & IGetText<any>;
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible;
    private changeBtnClass;
    constructor(properties: IComboBoxProperties, selectableList: IFilteredValuesList<any> & IList<any> & IGetText<any>);
    changeValue(ID: string): void;
    private setInitialValueToTextInput;
    private setInitialProperties;
    private createElements;
    private changeToSelected;
    private hideAfterSelected;
    private toggleListElements;
}
