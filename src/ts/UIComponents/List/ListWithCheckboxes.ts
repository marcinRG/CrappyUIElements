import {IListWithCheckBoxesProperties} from '../../Interfaces/IListWithCheckBoxes.properties';

export class ListWithCheckboxes {
    private value;

    constructor(properties: IListWithCheckBoxesProperties) {
        console.log('constructor');
        if (this.value) {
            console.log(this.value);
        }
    }
}
