import {IColor} from '../../../Interfaces/Data/Color';
import {IList} from '../../../Interfaces/Data.Models/IList';
import {IFilteredValuesList} from '../../../Interfaces/Data.Models/IFilteredValuesList';
import {IGetHTML} from '../../../Interfaces/Data.Models/IGetHTML';
import {ISpinnerProperties} from '../../../Interfaces/Component.Properties/ISpinner.Properties';
import {IColorComboBoxProperties} from '../../../Interfaces/Component.Properties/IColorComboBox.Properties';
import * as CBoxUtils from '../ComboBox.Utils';

export class ColorComboBox {
    private elementClass: string;
    private inputsRowClass: string;
    private colorContainerClass: string;
    private inputBtnClass: string;
    private listClass: string;
    private listElementClass: string;
    private changeBtnClass;
    private maxLength;
    private listVisible = false;

    private htmlElement: HTMLElement;
    private htmlContainer: HTMLElement;
    private htmlButton: HTMLElement;
    private htmlList: HTMLElement;

    constructor(properties: IColorComboBoxProperties,
                public selectableList: IFilteredValuesList<IColor> & IList<IColor> & IGetHTML<IColor>) {
        console.log('constructor');
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.htmlButton.addEventListener('click', () => {
            console.log('click');
            CBoxUtils.addRemoveClass(this.listVisible, this.htmlButton, this.changeBtnClass);
            this.toggleListElements();
        });
    }

    public changeValue(ID: string) {
        const index = this.selectableList.getIndex(ID);
        this.selectableList.selected = this.selectableList.values[index];
    }

    private createHTMLElements(properties: ISpinnerProperties) {
        const innerHTML = `
            <div class="${this.inputsRowClass}">
                <div class="${this.colorContainerClass}">
                </div>
                <button class="${this.inputBtnClass}"></button>
            </div>
            <div class="${this.listClass}">
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

    private changeToSelected(ID: string) {
        console.log('id:' + ID);
        this.changeValue(ID);
        if ((this.selectableList.selected)) {
            this.htmlContainer.innerHTML = this.selectableList.getHTML(<IColor> this.selectableList.selected);
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

    private setProperties(properties: IColorComboBoxProperties) {
        this.elementClass = properties.elementClass || 'color-combo-box-cuie';
        this.inputsRowClass = properties.inputsRowClass || 'inputs';
        this.colorContainerClass = properties.colorContainerClass || 'color-container';
        this.inputBtnClass = properties.inputBtnClass || 'input-btn';
        this.listClass = properties.listClass || 'list-elements';
        this.listElementClass = properties.listElementClass || 'li-elem';
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
    }

    private setHTMLElements() {
        const selectorContainer = `.${this.colorContainerClass}`;
        this.htmlContainer = this.htmlElement.querySelector(selectorContainer);
        const selectorBtn = `.${this.inputBtnClass}`;
        this.htmlButton = this.htmlElement.querySelector(selectorBtn);
        const selectorList = `.${this.listClass}`;
        this.htmlList = this.htmlElement.querySelector(selectorList);
    }
}
