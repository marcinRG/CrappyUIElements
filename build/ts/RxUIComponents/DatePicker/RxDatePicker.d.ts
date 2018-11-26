import { DatePicker } from '../../UIComponents/DatePicker/DatePicker';
import { ISubscribe } from '../../Interfaces/ISubscribe';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { IDatePickerProperties } from '../../Interfaces/IDatePicker.Properties';
import { DateExtended } from '../../models/DateExtended';
export declare class RxDatePicker extends DatePicker implements ISubscribe<any> {
    private subject;
    constructor(properties: IDatePickerProperties, date: DateExtended);
    getObservable(): Observable<any>;
    subscribe(observer: Observer<any>): void;
    changeValue(operation: string, value?: any): boolean;
    private createDate;
}
