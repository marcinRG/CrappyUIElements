import { Spinner } from '../../UIComponents/Spinner/Spinner';
import { ISubscribe } from '../../Interfaces/ISubscribe';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ISpinnerProperties } from '../../Interfaces/ISpinner.Properties';
import { IIterable } from '../../Interfaces/IIterable';
export declare class RxSpinner extends Spinner implements ISubscribe<any> {
    private subject;
    constructor(properties: ISpinnerProperties, iterable: IIterable<any>);
    getObservable(): Observable<any>;
    subscribe(observer: Observer<any>): void;
    changeValue(direction: string): any;
}
