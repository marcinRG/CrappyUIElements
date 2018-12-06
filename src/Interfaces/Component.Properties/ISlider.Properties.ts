import {IComponentProperties} from './IComponent.Properties';

export interface ISliderProperties extends IComponentProperties {
    beamClass?: string;
    beamFillClass?: string;
    pointerClass?: string;
    fieldClass?: string;
    pointerWidth: number;
}
