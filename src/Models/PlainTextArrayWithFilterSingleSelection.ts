import {IFilteredValuesList} from '../Interfaces/Data.Models/IFilteredValuesList';
import {PlainTextArray} from './PlainTextArray';

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

    private initSelected(intialValue: string | string[]) {
        if (Array.isArray(intialValue) && intialValue.length === 1) {
            this.selected = intialValue[0];
        } else {
            this.selected = intialValue;
        }
    }
}
