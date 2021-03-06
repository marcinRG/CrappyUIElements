import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
export interface ISubscribe<E> {
    subscribe(observer: Observer<E>): any;
    getObservable(): Observable<E>;
}
