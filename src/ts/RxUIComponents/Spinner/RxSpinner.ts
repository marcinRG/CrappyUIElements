import {Spinner} from '../../UIComponents/Spinner/Spinner';
import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ISpinnerProperties} from '../../Interfaces/ISpinner.Properties';
import {IIterable} from '../../Interfaces/IIterable';

export class RxSpinner extends Spinner implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: ISpinnerProperties, iterable: IIterable<any>) {
        super(properties, iterable);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }

    public nextValue() {
        this.htmlInputText.value = this.iterable.next() + '';
        this.subject.next(this.iterable.value);
    }

    public previousValue() {
        this.htmlInputText.value = this.iterable.previous() + '';
        this.subject.next(this.iterable.value);
    }
}
