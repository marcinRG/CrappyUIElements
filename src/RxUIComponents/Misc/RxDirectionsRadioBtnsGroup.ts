import {DirectionsRadioBtnsGroup} from '../../UIComponents/Misc/DirectionsRadioBtnsGroup';
import {IDirectionsRadioBtnsGroupProperties} from '../../Interfaces/IDirectionsRadioBtnsGroup.properties';
import {ISelectableList} from '../../Interfaces/ISelectableList';
import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class RxDirectionsRadioBtnsGroup extends DirectionsRadioBtnsGroup implements ISubscribe<any> {

    private subject: Subject<any> = new Subject<any>();

    constructor(properties: IDirectionsRadioBtnsGroupProperties, list: ISelectableList<any>) {
        super(properties, list);
    }

    public changeToSelected(ID: string) {
        const index = this.list.getIndex(ID);
        this.list.selectedValues = this.list.values[index];
        this.subject.next(this.list.selectedValues);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
