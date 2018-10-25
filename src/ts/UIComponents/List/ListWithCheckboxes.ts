import {IListWithCheckBoxesProperties} from '../../Interfaces/IListWithCheckBoxes.properties';
import {ISelectedValuesList} from '../../Interfaces/ISelectedValuesList';

export class ListWithCheckboxes {
    private htmlElement;
    private elementClass;
    private listClass;
    private listElementClass;
    private checkBoxClass;
    private valueClass;
    private selectedElementClass;

    constructor(properties: IListWithCheckBoxesProperties, private selectableList: ISelectedValuesList<any>) {
        console.log('constructor');
        this.setProperties(properties);
        this.createHTMLElements(properties);
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
        console.log('create elements');
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
            console.log(elem);
            const text = this.selectableList.getTitle(elem);
            const uniqueId = this.selectableList.getUniqueID(elem);
            ul.appendChild(this.createListElement(text, uniqueId, this, this.toggleCheckBox));
        }
        return ul;
    }

    private toggleCheckBox(value: any, elem: any) {
        console.log(value);
        console.log(elem);
    }

    private createListElement(value: string, uniqueID: string, listwithCheckboxes: ListWithCheckboxes, callback: any) {
        console.log('value:' + value);
        const innerHTML = `<span class="${this.checkBoxClass}"></span>
<span class="${this.valueClass}">${value}</span>`.trim();
        const li = document.createElement('li');
        li.addEventListener('click', () => {
            callback.apply(listwithCheckboxes, [uniqueID, li]);
        });
        li.classList.add(this.listElementClass);
        li.innerHTML = innerHTML;
        return li;
    }

    private toggleCheckBoxElement(elem) {
        const checkBox = elem.querySelector(`.${this.checkBoxClass}`);
        if (checkBox) {
            if (checkBox.classList.contains(this.selectedElementClass)) {
                checkBox.classList.remove(this.selectedElementClass);
            } else {
                checkBox.classList.add(this.selectedElementClass);
            }
        }
    }

}
