import {DynamicComboBox} from '../../UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
import {ISubscribe} from '../../Interfaces/ISubscribe';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IComboBoxProperties} from '../../Interfaces/IComboBox.Properties';
import {IFilteredValuesList} from '../../Interfaces/IFilteredValuesList';

export class RxDynamicComboBox extends DynamicComboBox implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: IComboBoxProperties, public selectableList: IFilteredValuesList<any>) {
        super(properties, selectableList);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
