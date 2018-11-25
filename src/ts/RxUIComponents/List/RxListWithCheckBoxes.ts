import {ListWithCheckboxes} from '../../UIComponents/List/ListWithCheckboxes';
import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IListWithCheckBoxesProperties} from '../../Interfaces/IListWithCheckBoxes.properties';
import {ISelectedValuesList} from '../../Interfaces/ISelectedValuesList';

export class RxListWithCheckBoxes extends ListWithCheckboxes implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: IListWithCheckBoxesProperties, selectableList: ISelectedValuesList<any>) {
        super(properties, selectableList);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }

    public changeValue(value: any) {
        const element = this.selectableList.values[this.selectableList.getIndex(value)];
        this.selectableList.addRemoveValue(element);
        this.subject.next(this.selectableList.selectedValues);
    }
}
