import {PlainTextArray} from './PlainTextArray';
import {ISelectedValuesList} from '../Interfaces/Data.Models/ISelectedValuesList';
import * as Utils from '../Utils/Utilities';

export class PlainTextArrayWithMultiSelection extends PlainTextArray implements ISelectedValuesList<string> {
    constructor(values: string[], public multipleValues: boolean = false, initValue: string[] = []) {
        super(values);
        this.initSelected(multipleValues, initValue);
    }

    public addRemoveValue(element: string) {
        const index = this.selected.indexOf(element);
        if (index >= 0) {
            if (this.multipleValues) {
                this.selected.splice(index, 1);
            } else {
                this.selected = [];
            }
        } else {
            if (this.multipleValues) {
                this.selected.push(element);
            } else {
                this.selected = [element];
            }
        }
    }

    private initSelected(multipleValues: boolean, initValue: string[]) {
        let value: string[] = [];
        if (multipleValues) {
            value = Utils.getMultipleValues(this, initValue);
        } else {
            const val = Utils.getSingleValue(this, initValue);
            if (val) {
                value = [val];
            }
        }
        this.selected = value;
    }
}
