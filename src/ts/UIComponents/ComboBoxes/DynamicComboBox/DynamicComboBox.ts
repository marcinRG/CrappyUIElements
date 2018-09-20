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
    private maxLength;
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
            const heightOverflowProperties = animationsUtils.getListElementHeight(this.listElements, this.maxLength);
            this.listElements.style.height = heightOverflowProperties.height + 'px';
            if (!this.listVisible) {
                console.log('not visible');
                CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
                this.listElements.style.display = 'block';
                this.listElements.style.overflow = 'hidden';
                // animationsUtils.slideDown(this.listElements, 100, 'ease-in',
                //     'hidden', heightOverflowProperties.height);
                this.listVisible = true;
            }
            // this.listElements.style.height = heightOverflowProperties.height + 'px';
            // this.listElements.style.overflow = heightOverflowProperties.overflow;
            // this.listElements.style.display = 'block';
            // this.listVisible = true;
        });
    }

    private setInitialProperties(properties: IComboBoxProperties) {
        this.txtInput.readOnly = false;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
        this.maxLength = properties.maxSize;
    }

    private changeToSelected() {
        console.log('changed');
    }

    private toggleListElements() {
        const heightOverflowProperties = animationsUtils.getListElementHeight(this.listElements, this.maxLength);
        if (heightOverflowProperties.height > 0) {
            if (!this.listVisible) {
                animationsUtils.slideDown(this.listElements, 100, 'ease-in',
                    heightOverflowProperties.overflow, heightOverflowProperties.height);
            } else {
                animationsUtils.slideUp(this.listElements, 100, 'ease-in', 'hidden',
                    heightOverflowProperties.height);
            }
            this.listVisible = !this.listVisible;
        }
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
