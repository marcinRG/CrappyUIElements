import {IComboBoxProperties} from '../../../Interfaces/Component.Properties/IComboBox.Properties';
import {IColor} from '../../../Interfaces/Data/Color';
import {IList} from '../../../Interfaces/Data.Models/IList';
import {IFilteredValuesList} from '../../../Interfaces/Data.Models/IFilteredValuesList';
import {IGetHTML} from '../../../Interfaces/Data.Models/IGetHTML';

export class ColorComboBox {
    constructor(properties: IComboBoxProperties,
                public selectableList: IFilteredValuesList<IColor> & IList<IColor> & IGetHTML<IColor>) {
        console.log('constructor');
    }
}
