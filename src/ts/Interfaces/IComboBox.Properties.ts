import {IComponentProperties} from './IComponent.Properties';

export interface IComboBoxProperties extends IComponentProperties {
    inputsRowClass?: string;
    comboBoxClass?: string;
    txtInputClass?: string;
    btnInputClass?: string;
    btnChangeClass?: string;
    listClass?: string;
    listElementClass: string;
    maxSize: number;
}
