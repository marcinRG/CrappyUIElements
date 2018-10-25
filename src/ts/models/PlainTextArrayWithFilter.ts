import {IFilteredValuesList} from '../Interfaces/IFilteredValuesList';
import {PlainTextArray} from './PlainTextArray';

export class PlainTextArrayWithFilter extends PlainTextArray implements IFilteredValuesList<string> {
    constructor(values: string[]) {
        super(values);
    }

    public filteredValues(filterTxt: string, maxLength?: number) {
        const filteredResults = this.values.filter((elem) => {
            return elem.includes(filterTxt);
        });
        return (maxLength && maxLength > 0) ? filteredResults.slice(0, maxLength) : filteredResults;
    }
}
