import { ISliderProperties } from '../../Interfaces/Component.Properties/ISlider.Properties';
import { IValueTransformation } from '../../Interfaces/Data.Models/IValueTransformation';
export declare class Slider {
    minMaxValue: IValueTransformation<any>;
    private isMouseDown;
    private pointerWidth;
    private minWidth;
    private maxWidth;
    private htmlPointerElement;
    private htmlFieldElement;
    private htmlBeamFillElement;
    private elementClass;
    private fieldClass;
    private beamClass;
    private beamFillClass;
    private pointerClass;
    private htmlElement;
    constructor(properties: ISliderProperties, minMaxValue: IValueTransformation<any>);
    changeValue(x: number, min: number, max: number): void;
    private limitValues;
    private setMinMaxWidth;
    private changePointerPositionAndFillBeamLength;
    private setProperties;
    private createHTMLElements;
    private setHTMLElements;
}
