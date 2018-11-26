import { ISubscribe } from '../../Interfaces/ISubscribe';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ISliderProperties } from '../../Interfaces/ISlider.Properties';
import { IValueTransformation } from '../../Interfaces/IValueTransformation';
import { Slider } from '../../UIComponents/Slider/Slider';
export declare class RxSlider extends Slider implements ISubscribe<any> {
    private subject;
    constructor(properties: ISliderProperties, minMaxValue: IValueTransformation<any>);
    getObservable(): Observable<any>;
    subscribe(observer: Observer<any>): void;
    changeValue(x: number, min: number, max: number): void;
}
