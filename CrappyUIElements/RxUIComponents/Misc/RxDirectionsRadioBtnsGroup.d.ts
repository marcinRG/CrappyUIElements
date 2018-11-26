import { DirectionsRadioBtnsGroup } from '../../UIComponents/Misc/DirectionsRadioBtnsGroup';
import { IDirectionsRadioBtnsGroupProperties } from '../../Interfaces/IDirectionsRadioBtnsGroup.properties';
import { ISelectableList } from '../../Interfaces/ISelectableList';
import { ISubscribe } from '../../Interfaces/ISubscribe';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
export declare class RxDirectionsRadioBtnsGroup extends DirectionsRadioBtnsGroup implements ISubscribe<any> {
    private subject;
    constructor(properties: IDirectionsRadioBtnsGroupProperties, list: ISelectableList<any>);
    changeToSelected(ID: string): void;
    getObservable(): Observable<any>;
    subscribe(observer: Observer<any>): void;
}
