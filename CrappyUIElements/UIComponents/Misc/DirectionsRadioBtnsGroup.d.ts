import { IDirectionsRadioBtnsGroupProperties } from '../../Interfaces/Component.Properties/IDirectionsRadioBtnsGroup.properties';
import { IList } from '../../Interfaces/Data.Models/IList';
export declare class DirectionsRadioBtnsGroup {
    list: IList<any>;
    private elementClass;
    private htmlElement;
    private cssDirectionsArray;
    private radioGroupName;
    private radioButtonClass;
    private radioWrapperClass;
    constructor(properties: IDirectionsRadioBtnsGroupProperties, list: IList<any>);
    changeToSelected(ID: string): void;
    private setProperties;
    private createRadioButton;
    private hasProperDimension;
    private getCssDirectionTable;
    private createRadioButtonGroup;
    private getCheckedString;
    private createButtonInnerHTML;
    private createHTMLElements;
}
