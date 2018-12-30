import {IComponentProperties} from './IComponent.Properties';

export interface IMultiUseComboBoxProperties extends IComponentProperties {
    containerClass: string;
    maxSize: number;
    inputsRowClass?: string;
    inputBtnClass?: string;
    listClass?: string;
    listElementClass?: string;
    btnChangeClass?: string;
}
