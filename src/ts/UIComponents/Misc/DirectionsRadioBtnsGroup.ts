import {IDirectionsRadioBtnsGroupProperties} from '../../Interfaces/IDirectionsRadioBtnsGroup.properties';
import {ISelectableList} from '../../Interfaces/ISelectableList';
import {ISliderProperties} from '../../Interfaces/ISlider.Properties';

export class DirectionsRadioBtnsGroup {

    private elementClass: string;
    private htmlElement: any;

    private radioGroupName;
    private radioButtonClass;
    private radioWrapperClass;

    constructor(properties: IDirectionsRadioBtnsGroupProperties, public list: ISelectableList<any>) {
        console.log('constructor');
    }

    public run() {
        console.log('run');
    }

    private setProperties(properties: IDirectionsRadioBtnsGroupProperties) {
        this.elementClass = properties.elementClass || 'slider-cuie';
        this.radioGroupName = properties.radioGroupName || 'directions-group';
        this.radioButtonClass = properties.radioButtonClass || 'input-rbtn';
        this.radioWrapperClass = properties.radioWrapperClass || 'btn-wrapper';

    }

    private setHTMLElements() {
        console.log('set htmlElements');
    }

    private createRadioButton(value: string) {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add(this.radioWrapperClass);
        buttonWrapper.innerHTML = this.createButtonInnerHTML(value);
        return buttonWrapper;
    }

    private createRadioButtonGroup() {
        for (const val of this.list.values) {
            const uniqeID = this.list.getUniqueID(val);
            this.htmlElement.appendChild(this.createRadioButton(uniqeID));
        }
    }

    private createButtonInnerHTML(value: string) {
        return `<input type="radio" name="${this.radioGroupName}" 
               class="${this.radioButtonClass}" value="${value}">`.trim();
    }

    private createHTMLElements(properties: IDirectionsRadioBtnsGroupProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.createRadioButtonGroup();
        }

        console.log('create Elems');
    }
}
