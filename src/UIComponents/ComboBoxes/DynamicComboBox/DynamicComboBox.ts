import {animationsUtils} from '../../../Utils/Animation.Utilities';
import * as CBoxUtils from '../ComboBox.Utils';
import * as utils from '../../../Utils/Utilities';
import {IComboBoxProperties} from '../../../Interfaces/Component.Properties/IComboBox.Properties';
import {IFilteredValuesList} from '../../../Interfaces/Data.Models/IFilteredValuesList';
import {IList} from '../../../Interfaces/Data.Models/IList';
import {IGetTitle} from '../../../Interfaces/Data.Models/IGetTitle';

export class DynamicComboBox {
    private htmlElement;
    private txtInput;
    private btnInput;
    private listElements;
    private listElementClass;
    private maxLength;
    private listVisible = false;
    private changeBtnClass;
    private debouncedInputTxt: any;

    constructor(properties: IComboBoxProperties,
                public selectableList: IFilteredValuesList<any> & IList<any> & IGetTitle<any>) {
        this.createElements(properties);
        this.setInitialProperties(properties);
        CBoxUtils.createListElements(this.selectableList, this.selectableList.values, this.listElements,
            this.listElementClass, this, this.changeToSelected);

        this.btnInput.addEventListener('click', () => {
            CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
            this.toggleListElements();
        });

        this.debouncedInputTxt = utils.debounce<string>((txtValue) => {
            const values = this.selectableList.filteredValues(txtValue, 0);
            CBoxUtils.createListElements(this.selectableList, values, this.listElements,
                this.listElementClass, this, this.changeToSelected);
            const heightOverflowProperties = animationsUtils.getListElementHeightOverflow(this.listElements,
                this.maxLength);
            if (values.length > 0) {
                this.listElements.style.height = heightOverflowProperties.height + 'px';
                this.listElements.style.overflow = heightOverflowProperties.overflow;
                if (!this.listVisible) {
                    CBoxUtils.addRemoveClass(this.listVisible, this.btnInput, this.changeBtnClass);
                    this.listElements.style.display = 'block';
                    this.listVisible = true;
                }
            } else {
                this.listVisible = false;
                this.listElements.style.display = 'none';
            }
        }, 1200);

        this.txtInput.addEventListener('input', () => {
            this.debouncedInputTxt(this.txtInput.value);
        });

        this.setInitialValueToTextInput();
    }

    public changeValue(ID: string) {
        const index = this.selectableList.getIndex(ID);
        this.selectableList.selected = this.selectableList.values[index];
    }

    private setInitialValueToTextInput() {
        if (this.selectableList.selected) {
            this.txtInput.value = this.selectableList.getTitle(this.selectableList.selected);
        }
    }

    private setInitialProperties(properties: IComboBoxProperties) {
        this.txtInput.readOnly = false;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
        this.maxLength = properties.maxSize;
    }

    private changeToSelected(ID: string) {
        this.changeValue(ID);
        if (this.selectableList.selected) {
            this.txtInput.value = this.selectableList.getTitle(this.selectableList.selected);
            const values = this.selectableList.filteredValues(this.txtInput.value, 0);
            CBoxUtils.createListElements(this.selectableList, values, this.listElements,
                this.listElementClass, this, this.changeToSelected);
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

    private createElements(properites: IComboBoxProperties) {
        const elements = CBoxUtils.createHTMLElements(properites);
        this.htmlElement = elements.htmlElement;
        this.txtInput = elements.txtInput;
        this.btnInput = elements.btnInput;
        this.listElements = elements.listElements;
    }
}
