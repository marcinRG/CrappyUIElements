import {IHasID} from '../../../Interfaces/Data.Models/IHasID';
import {IFilteredValuesList} from '../../../Interfaces/Data.Models/IFilteredValuesList';
import {IList} from '../../../Interfaces/Data.Models/IList';
import {IGetText} from '../../../Interfaces/Data.Models/IGetText';
import * as CBoxUtils from '../ComboBox.Utils';
import {IMultiUseComboBoxProperties} from '../../../Interfaces/Component.Properties/IMultiUseComboBox.Properties';
import {ISpinnerProperties} from '../../../Interfaces/Component.Properties/ISpinner.Properties';

export class MultiUseComboBox {
    private elementClass: string;
    private inputsRowClass: string;
    private containerClass: string;
    private inputBtnClass: string;
    private listClass: string;
    private listElementClass: string;
    private zIndex: string;
    private changeBtnClass;
    private maxLength;
    private listVisible = false;

    private htmlElement: HTMLElement;
    private htmlContainer: HTMLElement;
    private htmlButton: HTMLElement;
    private htmlList: HTMLElement;

    constructor(properties: IMultiUseComboBoxProperties,
                public selectableList: IFilteredValuesList<IHasID> & IList<IHasID> & IGetText<IHasID>) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.htmlButton.addEventListener('click', () => {
            CBoxUtils.addRemoveClass(this.listVisible, this.htmlButton, this.changeBtnClass);
            this.toggleListElements();
        });
        this.setInitialValueToTextInput();
    }

    public changeValue(ID: string) {
        const index = this.selectableList.getIndex(ID);
        this.selectableList.selected = this.selectableList.values[index];
    }

    private createHTMLElements(properties: ISpinnerProperties) {
        const innerHTML = `
            <div class="${this.inputsRowClass}">
                <div class="${this.containerClass}">
                </div>
                <button class="${this.inputBtnClass}"></button>
            </div>
            <div class="${this.listClass}" style="z-index: ${this.zIndex}">
            </div>`.trim();
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.innerHTML = innerHTML;
            this.setHTMLElements();
            this.htmlList = CBoxUtils.createListHTMLElements(this.selectableList,
                this.selectableList.values, this.htmlList, this.listElementClass, this, this.changeToSelected);
        }
    }

    private setInitialValueToTextInput() {
        if (this.selectableList.selected) {
            this.htmlContainer.innerHTML = this.selectableList.getText(<IHasID> this.selectableList.selected);
        }
    }

    private changeToSelected(ID: string) {
        this.changeValue(ID);
        if ((this.selectableList.selected)) {
            this.htmlContainer.innerHTML = this.selectableList.getText(<IHasID> this.selectableList.selected);
            this.hideAfterSelected();
        }
    }

    private hideAfterSelected() {
        this.listVisible = CBoxUtils.hideAfterSelected(this.htmlList, this.maxLength,
            this.listVisible, this.htmlButton, this.changeBtnClass);
    }

    private toggleListElements() {
        this.listVisible = CBoxUtils.toggleListElements(this.htmlList, this.maxLength, this.listVisible);
    }

    private setProperties(properties: IMultiUseComboBoxProperties) {
        this.containerClass = properties.containerClass;
        this.maxLength = properties.maxSize;
        this.elementClass = properties.elementClass || 'color-combo-box-cuie';
        this.inputsRowClass = properties.inputsRowClass || 'inputs';
        this.inputBtnClass = properties.inputBtnClass || 'input-btn';
        this.listClass = properties.listClass || 'list-elements';
        this.listElementClass = properties.listElementClass || 'li-elem';
        this.zIndex = properties.menuZIndex + '';
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
    }

    private setHTMLElements() {
        const selectorContainer = `.${this.containerClass}`;
        this.htmlContainer = this.htmlElement.querySelector(selectorContainer);
        const selectorBtn = `.${this.inputBtnClass}`;
        this.htmlButton = this.htmlElement.querySelector(selectorBtn);
        const selectorList = `.${this.listClass}`;
        this.htmlList = this.htmlElement.querySelector(selectorList);
    }
}
