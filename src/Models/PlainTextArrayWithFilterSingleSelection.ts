import {IFilteredValuesList} from '../Interfaces/Data.Models/IFilteredValuesList';
import {PlainTextArray} from './PlainTextArray';
import {getSingleValue} from '../Utils/Utilities';

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
        const value = getSingleValue<string>(this, initialValue);
        if (value) {
            this.selected = value;
        }
    }
}
