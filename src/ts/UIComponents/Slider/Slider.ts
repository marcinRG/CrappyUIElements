import {ISliderProperties} from '../../Interfaces/ISlider.Properties';

export class Slider {

    private elementClass: string;
    private fieldClass: string;
    private beamClass: string;
    private beamFillClass: string;
    private pointerClass: string;
    private pointerWidth: number;
    private isMouseDown: boolean = false;

    private htmlElement;
    private htmlPointerElement;
    private htmlFieldElement;
    private htmlBeamFillElement;

    constructor(properties: ISliderProperties) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();

        this.htmlFieldElement.addEventListener('click', (event: MouseEvent) => {
            this.changePointerPositionAndFillBeamLength(event);
        });

        this.htmlFieldElement.addEventListener('mousemove', (event: MouseEvent) =>{
            if (this.isMouseDown) {
                this.changePointerPositionAndFillBeamLength(event);
            }
        });

        this.htmlPointerElement.addEventListener('mousedown', () => {
            this.isMouseDown = true;
        });
        this.htmlPointerElement.addEventListener('mouseup', ()=> {
            this.isMouseDown = false;
        })
    }

    private changePointerPositionAndFillBeamLength(event: MouseEvent) {
        const len = this.calculatePosition(event);
        this.htmlPointerElement.style.left = len + 'px';
        this.htmlBeamFillElement.style.width = len + 'px';
    }

    private calculatePosition(event: MouseEvent) {
        return event.clientX - this.htmlFieldElement.offsetLeft -
            Math.floor(this.pointerWidth / 2);
    }

    private setProperties(properties: ISliderProperties) {
        this.elementClass = properties.elementClass || 'slider-cuie';
        this.fieldClass = properties.fieldClass || 'click-field';
        this.beamClass = properties.beamClass || 'beam';
        this.beamFillClass = properties.beamFillClass || 'beam-fill';
        this.pointerClass = properties.pointerClass || 'pointer';
        this.pointerWidth = properties.pointerWidth;
    }

    private createHTMLElements(properties: ISliderProperties) {
        const innerHTML = `
        <div class="${this.fieldClass}">
            <div class="${this.beamClass}">
                <div class="${this.beamFillClass}"></div>
            </div>
            <div class="${this.pointerClass}"></div>
        </div>`.trim();
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.innerHTML = innerHTML;
        }
    }

    private setHTMLElements() {
        const selectorPointer = `.${this.pointerClass}`;
        this.htmlPointerElement = this.htmlElement.querySelector(selectorPointer);
        const selectorField = `.${this.fieldClass}`;
        this.htmlFieldElement = this.htmlElement.querySelector(selectorField);
        const selectorBeamFill = `.${this.beamFillClass}`;
        this.htmlBeamFillElement = this.htmlElement.querySelector(selectorBeamFill);
    }

}
