import {IIterable} from '../../Interfaces/IIterable';
import {ISpinnerProperties} from '../../Interfaces/ISpinner.Properties';

export class Spinner {
    public htmlInputText;
    private elementClass: string;
    private txtInputClass: string;
    private upButtonClass: string;
    private downButtonClass: string;
    private disabledButtonClass: string;

    private htmlElement;
    private htmlButtonUp;
    private htmlButtonDown;

    constructor(properties: ISpinnerProperties, public iterable: IIterable<any>) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();
        this.htmlInputText.value = this.iterable.value;
        this.htmlButtonUp.addEventListener('click', () => {
            this.nextValue();
        });

        this.htmlButtonDown.addEventListener('click', () => {
            this.previousValue();
        });
    }

    public nextValue() {
        this.htmlInputText.value = this.iterable.next() + '';
    }

    public previousValue() {
        this.htmlInputText.value = this.iterable.previous() + '';
    }

    private createHTMLElements(properties: ISpinnerProperties) {
        const innerHTML = `<input type="text" class="${this.txtInputClass}">
        <button class="${this.upButtonClass}"></button>
        <button class="${this.downButtonClass}"></button>`.trim();
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.innerHTML = innerHTML;
        }
    }

    private setProperties(properties: ISpinnerProperties) {
        this.elementClass = properties.elementClass || 'spinner-cuie';
        this.txtInputClass = properties.txtInputClass || 'input-txt';
        this.upButtonClass = properties.upButtonClass || 'button-up';
        this.downButtonClass = properties.downButtonClass || 'button-down';
        this.disabledButtonClass = properties.disabledButtonClass || '';
    }

    private setHTMLElements() {
        const selectorUpBtn = `.${this.upButtonClass}`;
        this.htmlButtonUp = this.htmlElement.querySelector(selectorUpBtn);
        const selectorDownBtn = `.${this.downButtonClass}`;
        this.htmlButtonDown = this.htmlElement.querySelector(selectorDownBtn);
        const selectorTxtInput = `.${this.txtInputClass}`;
        this.htmlInputText = this.htmlElement.querySelector(selectorTxtInput);
    }
}
