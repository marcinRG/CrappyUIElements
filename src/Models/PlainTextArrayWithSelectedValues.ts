import {ISelectedValuesList} from '../Interfaces/ISelectedValuesList';
import {PlainTextArray} from './PlainTextArray';

export class PlainTextArrayWithSelectedValues extends PlainTextArray implements ISelectedValuesList<string> {
    constructor(values: string[], public multipleValues: boolean = false, public selectedValues: string[] = []) {
        super(values);
    }

    public addRemoveValue(element: string) {
        const index = this.selectedValues.indexOf(element);
        if (index >= 0) {
            if (this.multipleValues) {
                this.selectedValues.splice(index, 1);
            } else {
                this.selectedValues = [];
            }
        } else {
            if (this.multipleValues) {
                this.selectedValues.push(element);
            } else {
                this.selectedValues = [element];
            }
        }
    }
}
