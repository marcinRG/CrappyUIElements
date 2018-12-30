import * as CBoxUtils from '../ComboBox.Utils';
import {IComboBoxProperties} from '../../../Interfaces/Component.Properties/IComboBox.Properties';
import {IFilteredValuesList} from '../../../Interfaces/Data.Models/IFilteredValuesList';
import {IList} from '../../../Interfaces/Data.Models/IList';
import {IGetText} from '../../../Interfaces/Data.Models/IGetText';

export class ComboBox {
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible = false;
    private changeBtnClass;

    constructor(properties: IComboBoxProperties,
                public selectableList: IFilteredValuesList<any> & IList<any> & IGetText<any>) {
        this.createElements(properties);
        this.setInitialProperties(properties);
        const values = this.selectableList.values;
        this.listElements = CBoxUtils.createListElements(this.selectableList, values, this.listElements,
            this.listElementClass, this, this.changeToSelected);
        this.btnInput.addEventListener('click', () => {
            CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
            this.toggleListElements();
        });
        this.setInitialValueToTextInput();
    }

    public changeValue(ID: string) {
        const index = this.selectableList.getIndex(ID);
        this.selectableList.selected = this.selectableList.values[index];
    }

    private setInitialValueToTextInput() {
        if (this.selectableList.selected) {
            this.txtInput.value = this.selectableList.getText(this.selectableList.selected);
        }
    }

    private setInitialProperties(properties: IComboBoxProperties) {
        this.txtInput.readOnly = true;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
        this.maxLength = properties.maxSize;
    }

    private createElements(properties: IComboBoxProperties) {
        const elements = CBoxUtils.createHTMLElements(properties);
        this.htmlElement = elements.htmlElement;
        this.txtInput = elements.txtInput;
        this.btnInput = elements.btnInput;
        this.listElements = elements.listElements;
    }

    private changeToSelected(ID: string) {
        this.changeValue(ID);
        if (this.selectableList.selected) {
            this.txtInput.value = this.selectableList.getText(this.selectableList.selected);
            this.hideAfterSelected();
        }
    }

    private hideAfterSelected() {
        this.listVisible = CBoxUtils.hideAfterSelected(this.listElements, this.maxLength,
            this.listVisible, this.btnInput, this.changeBtnClass);
    }

    private toggleListElements() {
        this.listVisible = CBoxUtils.toggleListElements(this.listElements, this.maxLength, this.listVisible);
    }
}
