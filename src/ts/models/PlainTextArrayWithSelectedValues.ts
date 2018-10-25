import {ISelectedValuesList} from '../Interfaces/ISelectedValuesList';
import {PlainTextArray} from './PlainTextArray';

export class PlainTextArrayWithSelectedValues extends PlainTextArray implements ISelectedValuesList<string> {
    constructor(values: string[], public selectedValues: string[] = []) {
        super(values);
    }

    public addRemoveValue(element: string) {
        console.log('not implemented');
    }
}
