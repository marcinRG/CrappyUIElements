import { IComponentProperties } from './IComponent.Properties';
export interface IListWithCheckBoxesProperties extends IComponentProperties {
    listClass: string;
    listElementClass: string;
    checkBoxClass: string;
    valueClass: string;
    selectedElementClass: string;
}
