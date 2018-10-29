import {IIterable} from '../../Interfaces/IIterable';
import {ISpinnerProperties} from '../../Interfaces/ISpinner.Properties';

export class Spinner {
    constructor(properties: ISpinnerProperties, private iterable: IIterable<any>) {
        console.log('constructor');
    }
}
