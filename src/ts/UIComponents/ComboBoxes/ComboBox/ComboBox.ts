import {IComboBoxProperties} from '../../../Interfaces/IComboBox.Properties';
import * as CBoxUtils from '../ComboBox.Utils';
import {IFilteredValuesList} from '../../../Interfaces/IFilteredValuesList';

export class ComboBox {
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible = false;
    private changeBtnClass;

    constructor(properties: IComboBoxProperties, public selectableList: IFilteredValuesList<any>) {
        this.createElements(properties);
        this.setInitialProperties(properties);
        const values = this.selectableList.values;
        CBoxUtils.createListElements(this.selectableList, values, this.listElements, this.listElementClass,
            this, this.changeToSelected);
        this.btnInput.addEventListener('click', () => {
            CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
            this.toggleListElements();
        });
    }

    public changeValue(ID: string) {
        const index = this.selectableList.getIndex(ID);
        this.selectableList.selectedValues = this.selectableList.values[index];
    }

    private setInitialProperties(properties: IComboBoxProperties) {
        this.txtInput.readOnly = true;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
        this.maxLength = properties.maxSize;
    }

    private createElements(properites: IComboBoxProperties) {
        const elements = CBoxUtils.createHTMLElements(properites);
        this.htmlElement = elements.htmlElement;
        this.txtInput = elements.txtInput;
        this.btnInput = elements.btnInput;
        this.listElements = elements.listElements;
    }

    private changeToSelected(ID: string) {
        this.changeValue(ID);
        if (this.selectableList.selectedValues) {
            this.txtInput.value = this.selectableList.getTitle(this.selectableList.selectedValues);
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
