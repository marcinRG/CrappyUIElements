import { DynamicComboBox } from '../../UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
import { ISubscribe } from '../../Interfaces/ISubscribe';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { IComboBoxProperties } from '../../Interfaces/IComboBox.Properties';
import { IFilteredValuesList } from '../../Interfaces/IFilteredValuesList';
export declare class RxDynamicComboBox extends DynamicComboBox implements ISubscribe<any> {
    selectableList: IFilteredValuesList<any>;
    private subject;
    constructor(properties: IComboBoxProperties, selectableList: IFilteredValuesList<any>);
    changeValue(ID: string): void;
    getObservable(): Observable<any>;
    subscribe(observer: Observer<any>): void;
}