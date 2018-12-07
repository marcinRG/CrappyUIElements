import {IFilteredValuesList} from '../Interfaces/Data.Models/IFilteredValuesList';
import {PlainTextArray} from './PlainTextArray';
import {findSingleValue} from '../Utils/Utilities';

export class PlainTextArrayWithFilterSingleSelection extends PlainTextArray implements IFilteredValuesList<string> {

    constructor(values: string[], initValues: string | string[] = null) {
        super(values);
        this.initSelected(initValues);
    }

    public filteredValues(filterTxt: string, maxLength?: number) {
        const filteredResults = this.values.filter((elem) => {
            return elem.includes(filterTxt);
        });
        return (maxLength && maxLength > 0) ? filteredResults.slice(0, maxLength) : filteredResults;
    }

    private initSelected(initialValue: string | string[]) {
        const value = findSingleValue<string>(this, initialValue);
        if (value) {
            this.selected = value;
        }
        // if (Array.isArray(intialValue) && intialValue.length === 1) {
        //     this.selected = intialValue[0];
        // } else {
        //     this.selected = intialValue;
        // }
    }
}
