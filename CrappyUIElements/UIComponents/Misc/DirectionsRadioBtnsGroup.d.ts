import { IDirectionsRadioBtnsGroupProperties } from '../../Interfaces/IDirectionsRadioBtnsGroup.properties';
import { ISelectableList } from '../../Interfaces/ISelectableList';
export declare class DirectionsRadioBtnsGroup {
    list: ISelectableList<any>;
    private elementClass;
    private htmlElement;
    private cssDirectionsArray;
    private radioGroupName;
    private radioButtonClass;
    private radioWrapperClass;
    constructor(properties: IDirectionsRadioBtnsGroupProperties, list: ISelectableList<any>);
    changeToSelected(ID: string): void;
    private setProperties;
    private createRadioButton;
    private hasProperDimension;
    private getCssDirectionTable;
    private createRadioButtonGroup;
    private createButtonInnerHTML;
    private createHTMLElements;
}
