import {IDirectionsRadioBtnsGroupProperties} from
'../../Interfaces/Component.Properties/IDirectionsRadioBtnsGroup.properties';
import {IList} from '../../Interfaces/Data.Models/IList';

export class DirectionsRadioBtnsGroup {

    private elementClass: string;
    private htmlElement: any;
    private cssDirectionsArray;

    private radioGroupName;
    private radioButtonClass;
    private radioWrapperClass;

    constructor(properties: IDirectionsRadioBtnsGroupProperties, public list: IList<any>) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
    }

    public changeToSelected(ID: string) {
        const index = this.list.getIndex(ID);
        this.list.selected = this.list.values[index];
    }

    private setProperties(properties: IDirectionsRadioBtnsGroupProperties) {
        this.elementClass = properties.elementClass || 'slider-cuie';
        this.radioGroupName = properties.radioGroupName || 'directions-group';
        this.radioButtonClass = properties.radioButtonClass || 'input-rbtn';
        this.radioWrapperClass = properties.radioWrapperClass || 'btn-wrapper';
        this.cssDirectionsArray = properties.cssDirectionsArray || ['top-left', 'top-center', 'top-right',
            'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'];
    }

    private createRadioButton(value: string, addClass: string, checked: string) {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add(this.radioWrapperClass);
        if (addClass) {
            buttonWrapper.classList.add(addClass);
        }
        buttonWrapper.innerHTML = this.createButtonInnerHTML(value, checked);
        buttonWrapper.childNodes[0].addEventListener('click', () => {
            this.changeToSelected(value);
        });
        return buttonWrapper;
    }

    private hasProperDimension(array: any[]) {
        return ((array.length === 4) || (array.length === 5) || (array.length === 5)
            || (array.length === 8) || (array.length === 9));
    }

    private getCssDirectionTable(length: number) {
        switch (length) {
            case 4: {
                return [this.cssDirectionsArray[0], this.cssDirectionsArray[2],
                    this.cssDirectionsArray[6], this.cssDirectionsArray[8]];
            }
            case 5: {
                return [this.cssDirectionsArray[0], this.cssDirectionsArray[2], this.cssDirectionsArray[4],
                    this.cssDirectionsArray[6], this.cssDirectionsArray[8]];
            }
            case 8: {
                return [this.cssDirectionsArray[0], this.cssDirectionsArray[1], this.cssDirectionsArray[2],
                    this.cssDirectionsArray[3], this.cssDirectionsArray[5],
                    this.cssDirectionsArray[6], this.cssDirectionsArray[7], this.cssDirectionsArray[8]];
            }
            case 9: {
                return this.cssDirectionsArray;
            }
        }
    }

    private createRadioButtonGroup(directionsArray: string[]) {
        for (const val of this.list.values) {
            const uniqeID = this.list.getUniqueID(val);
            const directionClass = directionsArray[this.list.getIndex(uniqeID)];
            this.htmlElement.appendChild(this.createRadioButton(uniqeID, directionClass,
                this.getCheckedString(val)));
        }
    }

    private getCheckedString(val: any) {
        if (this.list.isEqual(val, this.list.selected)) {
            return 'checked';
        }
        return '';
    }

    private createButtonInnerHTML(value: string, checked: string) {
        return `<input type="radio" name="${this.radioGroupName}" class="${this.radioButtonClass}"
        value="${value}" ${checked}>`.trim();
    }

    private createHTMLElements(properties: IDirectionsRadioBtnsGroupProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement && this.hasProperDimension(this.list.values)) {
            this.htmlElement.classList.add(this.elementClass);
            const directionsArray = this.getCssDirectionTable(this.list.values.length);
            this.createRadioButtonGroup(directionsArray);
        }
    }
}
