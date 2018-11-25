import {ISliderProperties} from '../../Interfaces/ISlider.Properties';
import {IValueTransformation} from '../../Interfaces/IValueTransformation';

export class Slider {

    private isMouseDown: boolean = false;
    private pointerWidth: number;
    private minWidth;
    private maxWidth;
    private htmlPointerElement;
    private htmlFieldElement;
    private htmlBeamFillElement;
    private elementClass: string;
    private fieldClass: string;
    private beamClass: string;
    private beamFillClass: string;
    private pointerClass: string;
    private htmlElement;

    constructor(properties: ISliderProperties, public minMaxValue: IValueTransformation<any>) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();
        this.setMinMaxWidth();
        this.changePointerPositionAndFillBeamLength((this.minWidth +
            this.minMaxValue.transformation(this.minWidth, this.maxWidth)));

        this.htmlFieldElement.addEventListener('click', (event: MouseEvent) => {
            const x = event.clientX;
            this.changePointerPositionAndFillBeamLength(x);
            this.changeValue(x, this.minWidth, this.maxWidth);
        });

        window.addEventListener('resize', () => {
            this.setMinMaxWidth();
            this.changePointerPositionAndFillBeamLength((this.minWidth +
                this.minMaxValue.transformation(this.minWidth, this.maxWidth)));
        });

        this.htmlFieldElement.addEventListener('mousemove', (event: MouseEvent) => {
            if (this.isMouseDown) {
                const x = event.clientX;
                this.changePointerPositionAndFillBeamLength(x);
                this.changeValue(x, this.minWidth, this.maxWidth);
            }
        });

        this.htmlPointerElement.addEventListener('mousedown', () => {
            this.isMouseDown = true;
        });

        this.htmlPointerElement.addEventListener('mouseup', () => {
            this.isMouseDown = false;
        });
    }

    public changeValue(x: number, min: number, max: number) {
        this.minMaxValue.value = this.minMaxValue.reverseTransformation(
            x, min, max);
    }

    private setMinMaxWidth() {
        const rect = this.htmlFieldElement.getBoundingClientRect();
        this.minWidth = Math.floor(rect.left + (this.pointerWidth / 2));
        this.maxWidth = Math.ceil(rect.left + rect.width - (this.pointerWidth / 2));
    }

    private changePointerPositionAndFillBeamLength(x: number) {
        if (x >= this.minWidth && x <= this.maxWidth) {
            const len = x - this.minWidth;
            this.htmlPointerElement.style.left = len + 'px';
            this.htmlBeamFillElement.style.width = len + 'px';
        }
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

