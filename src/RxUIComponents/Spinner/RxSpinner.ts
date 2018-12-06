// import {Spinner} from '../../UIComponents/Spinner/Spinner';
// import {ISubscribe} from '../../Interfaces/ISubscribe';
// import {Subject} from 'rxjs/Subject';
// import {Observable} from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
// import {ISpinnerProperties} from '../../Interfaces/ISpinner.Properties';
// import {IIterable} from '../../Interfaces/IIterable';
//
// export class RxSpinner extends Spinner implements ISubscribe<any> {
//     private subject: Subject<any> = new Subject<any>();
//
//     constructor(properties: ISpinnerProperties, iterable: IIterable<any>) {
//         super(properties, iterable);
//     }
//
//     public getObservable(): Observable<any> {
//         return this.subject;
//     }
//
//     public subscribe(observer: Observer<any>) {
//         this.subject.subscribe(observer);
//     }
//
//     public changeValue(direction: string) {
//         if (direction === 'next') {
//             if (!this.iterable.isAtEnd()) {
//                 const val = this.iterable.next();
//                 this.subject.next(val);
//                 return val;
//             }
//         }
//         if (direction === 'previous') {
//             if (!this.iterable.isAtStart()) {
//                 const val = this.iterable.previous();
//                 this.subject.next(val);
//                 return val;
//             }
//         }
//         return null;
//     }
// }
