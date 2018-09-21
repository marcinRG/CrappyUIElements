import {animationsUtils} from '../../../Utils/Animation.Utilities';
import {ISelectableList} from '../../../Interfaces/ISelectableList';
import {IComboBoxProperties} from '../../../Interfaces/IComboBox.Properties';
import * as CBoxUtils from '../ComboBox.Utils';

export class ComboBox {
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible = false;
    private selectedElement: any;
    private changeBtnClass;

    constructor(properties: IComboBoxProperties, private selectableList: ISelectableList<any>) {
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
        const index = this.selectableList.getIndex(ID);
        const elem = this.selectableList.values[index];
        this.selectedElement = elem;
        if (this.selectedElement) {
            this.txtInput.value = this.selectableList.getTitle(elem);
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
