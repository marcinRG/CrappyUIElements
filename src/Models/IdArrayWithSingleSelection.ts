import {IHasID} from '../Interfaces/Data.Models/IHasID';
import {IGetText} from '../Interfaces/Data.Models/IGetText';
import {getSingleValue} from '../Utils/Utilities';
import {IFilteredValuesList} from '../Interfaces/Data.Models/IFilteredValuesList';
import {IList} from '../Interfaces/Data.Models/IList';

export class IdArrayWithSingleSelection<T extends IHasID> implements IFilteredValuesList<T>, IGetText<T>, IList<T> {
    public selected: T = null;

    constructor(public values: T[], private renderer: IGetText<T>, private searchFiled: string,
                initValues: T | T[] = null) {
        this.initSelected(initValues);
    }

    public filteredValues(filterTxt: string, maxLength?: number): T[] {
        const filteredResults = this.values.filter((elem: T) => {
            return this.getSearchResult(elem, filterTxt);
        });
        return (maxLength && maxLength > 0) ? filteredResults.slice(0, maxLength) : filteredResults;
    }

    public getText(elem: T): string {
        return this.renderer.getText(elem);
    }

    public getIndex(uniqueID: string): number {
        const index = this.values.findIndex((elem: T) => {
            return (elem.id === uniqueID);
        });
        if (index >= 0) {
            return index;
        }
        return null;
    }

    public getUniqueID(elem: T): string {
        return elem.id;
    }

    public isEqual(elem1: T, elem2: T): boolean {
        if ((elem1 && elem2) && (elem1.id && elem2.id)) {
            return (elem1.id === elem2.id);
        }
        return false;
    }

    private getSearchResult(elem: T, searchPhrase: string) {
        if (elem) {
            if (elem.hasOwnProperty(this.searchFiled)) {
                const val = <string> elem[this.searchFiled];
                return val.includes(searchPhrase);
            }
        }
        return false;
    }

    private initSelected(initialValue: T | T[]) {
        const value = getSingleValue<T>(this, initialValue);
        if (value) {
            this.selected = value;
        }
    }

}
