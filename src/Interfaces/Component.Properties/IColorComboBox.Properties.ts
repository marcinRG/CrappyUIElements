import {IComponentProperties} from './IComponent.Properties';

export interface IColorComboBoxProperties extends IComponentProperties {
    inputsRowClass?: string;
    inputBtnClass?: string;
    colorContainerClass?: string;
    listClass?: string;
    listElementClass?: string;
    btnChangeClass?: string;
    maxSize: number;
}
