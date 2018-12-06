import {IComponentProperties} from './IComponent.Properties';

export interface ISpinnerProperties extends IComponentProperties {
    txtInputClass?: string;
    buttonWrapperClass?: string;
    upButtonClass?: string;
    downButtonClass?: string;
    disabledButtonClass?: string;
}
