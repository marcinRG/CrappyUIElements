import {DatePicker} from '../../UIComponents/DatePicker/DatePicker';
import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IDatePickerProperties} from '../../Interfaces/IDatePicker.Properties';
import {DateExtended} from '../../models/DateExtended';

export class RxDatePicker extends DatePicker implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: IDatePickerProperties, date: DateExtended) {
        super(properties, date);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }

}
