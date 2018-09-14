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
    private listVisible = false;
    private selectedElement: any;
    private changeBtnClass;

    constructor(properties: IComboBoxProperties, private selectableList: ISelectableList<any>) {
        this.createElements(properties);
        this.setInitialProperties(properties);
        CBoxUtils.createListElements(selectableList, this.listElements, this.listElementClass,
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
    }

    private changeButtonClass(className: string) {
        if (this.listVisible) {
            this.btnInput.classList.remove(className);
        } else {
            this.btnInput.classList.add(className);
        }
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
        animationsUtils.slideUp(this.listElements, 50, 'ease-in', 'hidden');
        CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
        this.listVisible = false;
    }

    private toggleListElements() {
        if (!this.listVisible) {
            animationsUtils.slideDown(this.listElements, 150, 'ease-in', 'auto');
        } else {
            animationsUtils.slideUp(this.listElements, 150, 'ease-in', 'hidden');
        }
        this.listVisible = !this.listVisible;
    }
}
//TODO 1. maxLenght dla wyswietlania listy nie działa
//TODO zmienic sposob wysietlania całej listy wartości