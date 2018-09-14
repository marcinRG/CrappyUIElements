import {animationsUtils} from '../../../Utils/Animation.Utilities';
import {ISelectableList} from '../../../Interfaces/ISelectableList';
import {IComboBoxProperties} from '../../../Interfaces/IComboBox.Properties';
import * as CBoxUtils from '../ComboBox.Utils';

export class DynamicComboBox {
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private listVisible = false;
    private changeBtnClass;
    private selectedElement: any;
    // this.debouncedParseAndAddToOutput = CBoxUtils.debounce<string>((value) => {
    //     if (this.date.setDateFromString(value)) {
    //         this.fillMonthYearLabel();
    //         this.fillDays();
    //     }
    // }, 1200);

    constructor(properties: IComboBoxProperties, private selectableList: ISelectableList<any>) {
        this.createElements(properties);
        this.setInitialProperties(properties);
        CBoxUtils.createFilteredListElements('', 0, selectableList, this.listElements,
            this.listElementClass, this, this.changeToSelected);
        this.btnInput.addEventListener('click', () => {
            CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
            this.toggleListElements();
        });

        this.txtInput.addEventListener('input', () => {
            CBoxUtils.createFilteredListElements(this.txtInput.value, 0, selectableList, this.listElements,
                this.listElementClass, this, this.changeToSelected);
            console.log(this.selectableList.filteredValues(this.txtInput.value));
        });
    }

    private setInitialProperties(properties: IComboBoxProperties) {
        this.txtInput.readOnly = false;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
    }

    private changeToSelected() {
        console.log('changed');
    }

    private toggleListElements() {
        if (!this.listVisible) {
            animationsUtils.slideDown(this.listElements, 150, 'ease-in', 'auto');
        } else {
            animationsUtils.slideUp(this.listElements, 150, 'ease-in', 'hidden');
        }
        this.listVisible = !this.listVisible;
    }

    private createElements(properites: IComboBoxProperties) {
        const elements = CBoxUtils.createHTMLElements(properites);
        this.htmlElement = elements.htmlElement;
        this.txtInput = elements.txtInput;
        this.btnInput = elements.btnInput;
        this.listElements = elements.listElements;
    }
}

//TODO 1. maxLenght dla wyswietlania listy nie działa
//TODO zmienic sposob wysietlania całej listy wartości
//TODO
//TODO