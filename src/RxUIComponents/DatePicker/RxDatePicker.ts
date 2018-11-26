import {DatePicker} from '../../UIComponents/DatePicker/DatePicker';
import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IDatePickerProperties} from '../../Interfaces/IDatePicker.Properties';
import {DateExtended} from '../../Models/DateExtended';

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

    public changeValue(operation: string, value: any = null) {
        switch (operation) {
            case 'nextMonth' : {
                this.date.addMonth();
                this.subject.next(this.createDate());
                return;
            }
            case 'previousMonth': {
                this.date.subtractMonth();
                this.subject.next(this.createDate());
                return;
            }
            case 'txtDate' : {
                if (value && (typeof(value) === 'string')) {
                    const val = this.date.setDateFromString(value);
                    if (val) {
                        this.subject.next(this.createDate());
                    }
                    return val;
                }
            }
            case 'day': {
                if (value && (typeof(value) === 'number')) {
                    this.date.setDay(value);
                    this.subject.next(this.createDate());
                    return;
                }

            }
        }
    }

    private createDate() {
        return new Date(this.date.dateToStr());
    }
}
