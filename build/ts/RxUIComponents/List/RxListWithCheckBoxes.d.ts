import { ListWithCheckboxes } from '../../UIComponents/List/ListWithCheckboxes';
import { ISubscribe } from '../../Interfaces/ISubscribe';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { IListWithCheckBoxesProperties } from '../../Interfaces/IListWithCheckBoxes.properties';
import { ISelectedValuesList } from '../../Interfaces/ISelectedValuesList';
export declare class RxListWithCheckBoxes extends ListWithCheckboxes implements ISubscribe<any> {
    private subject;
    constructor(properties: IListWithCheckBoxesProperties, selectableList: ISelectedValuesList<any>);
    getObservable(): Observable<any>;
    subscribe(observer: Observer<any>): void;
    changeValue(value: any): void;
}
