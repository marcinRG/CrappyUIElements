import {IFilteredValuesList} from '../Interfaces/Data.Models/IFilteredValuesList';
import {IColor} from '../Interfaces/Data/Color';
import {IList} from '../Interfaces/Data.Models/IList';
import {IGetHTML} from '../Interfaces/Data.Models/IGetHTML';
import {getSingleValue} from '../Utils/Utilities';

export class ColorArrayWithSingleSelection implements IFilteredValuesList<IColor>, IGetHTML<IColor>, IList<IColor> {
    public selected: IColor = null;

    constructor(public values: IColor[], initValues: IColor | IColor[]) {
        this.initSelected(initValues);
    }

    public filteredValues(filterTxt: string, maxLength?: number): IColor[] {
        const filteredResults = this.values.filter((elem: IColor) => {
            return elem.name.includes(filterTxt);
        });
        return (maxLength && maxLength > 0) ? filteredResults.slice(0, maxLength) : filteredResults;
    }

    public getHTML(elem: IColor): HTMLElement {
        return undefined;
    }

    public getIndex(uniqueID: string): number {
        const index = this.values.findIndex((elem: IColor) => {
            return (elem.id === uniqueID);
        });
        if (index >= 0) {
            return index;
        }
        return null;
    }

    public getUniqueID(elem: IColor): string {
        return elem.id;
    }

    public isEqual(elem1: IColor, elem2: IColor): boolean {
        return (elem1.id === elem2.id);
    }

    private initSelected(initialValue: IColor | IColor[]) {
        const value = getSingleValue<IColor>(this, initialValue);
        if (value) {
            this.selected = value;
        }
    }
}
