import {IListWithCheckBoxesProperties} from '../../Interfaces/Component.Properties/IListWithCheckBoxes.properties';
import {ISelectedValuesList} from '../../Interfaces/Data.Models/ISelectedValuesList';
import {IList} from '../../Interfaces/Data.Models/IList';
import {IGetText} from '../../Interfaces/Data.Models/IGetText';

export class ListWithCheckboxes {
    public checkBoxes;
    public selectedElementClass;
    public checkBoxClass;
    private htmlElement;
    private elementClass;
    private listClass;
    private listElementClass;
    private valueClass;

    constructor(properties: IListWithCheckBoxesProperties,
                public selectableList: ISelectedValuesList<any> & IList<any> & IGetText<any>) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();
    }

    public changeValue(value: any) {
        const element = this.selectableList.values[this.selectableList.getIndex(value)];
        this.selectableList.addRemoveValue(element);
    }

    private toggleCheckBox(value: any, elem: any) {
        const checkBox = elem.querySelector(`.${this.checkBoxClass}`);
        const checked = this.checkBoxIsChecked(checkBox);
        if (!this.selectableList.multipleValues && (!checked)) {
            this.unCheckAllCheckBoxes();
        }
        this.toggleCheckBoxView(checked, checkBox);
        this.changeValue(value);
    }

    private unCheckAllCheckBoxes() {
        for (const checkBox of this.checkBoxes) {
            checkBox.classList.remove(this.selectedElementClass);
        }
    }

    private toggleCheckBoxView(checked, checkBox) {
        if (checked) {
            checkBox.classList.remove(this.selectedElementClass);
        } else {
            checkBox.classList.add(this.selectedElementClass);
        }
    }

    private checkBoxIsChecked(checkBoxElement) {
        return checkBoxElement.classList.contains(this.selectedElementClass);
    }

    private setProperties(properties: IListWithCheckBoxesProperties) {
        this.elementClass = properties.elementClass || 'list-with-checkboxes-cuie';
        this.listClass = properties.listClass || 'list-elements';
        this.listElementClass = properties.listElementClass || 'li-elem';
        this.checkBoxClass = properties.checkBoxClass || 'check-box';
        this.valueClass = properties.valueClass || 'element';
        this.selectedElementClass = properties.selectedElementClass || 'checked';
    }

    private createHTMLElements(properties: IListWithCheckBoxesProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.appendChild(this.createList());
        }
    }

    private createList() {
        const ul = document.createElement('ul');
        ul.classList.add(this.listClass);
        for (const elem of this.selectableList.values) {
            const isChecked = (this.selectableList.selected.findIndex((value) => {
                return this.selectableList.isEqual(elem, value);
            }) >= 0);
            const text = this.selectableList.getText(elem);
            const uniqueId = this.selectableList.getUniqueID(elem);
            ul.appendChild(this.createListElement(text, uniqueId, isChecked, this, this.toggleCheckBox));
        }
        return ul;
    }

    private createListElement(value: string, uniqueID: string, isChecked: boolean,
                              listwithCheckboxes: ListWithCheckboxes, callback: any) {
        const innerHTML = `<span class="${this.checkBoxClass}"></span>
<span class="${this.valueClass}">${value}</span>`.trim();
        const li = document.createElement('li');
        li.classList.add(this.listElementClass);
        li.innerHTML = innerHTML;
        const checkBox = li.querySelector(`.${this.checkBoxClass}`);
        this.toggleCheckBoxView(!isChecked, checkBox);
        li.addEventListener('click', () => {
            callback.apply(listwithCheckboxes, [uniqueID, li]);
        });
        return li;
    }

    private setHTMLElements() {
        const selectorCheckboxes = `.${this.listClass} .${this.checkBoxClass}`;
        this.checkBoxes = <HTMLElement[]> Array.from(this.htmlElement.querySelectorAll
        (selectorCheckboxes));
    }

}
