import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ISliderProperties} from '../../Interfaces/ISlider.Properties';
import {IValueTransformation} from '../../Interfaces/IValueTransformation';
import {Slider} from '../../UIComponents/Slider/Slider';

export class RxSlider extends Slider implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: ISliderProperties, minMaxValue: IValueTransformation<any>) {
        super(properties, minMaxValue);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
