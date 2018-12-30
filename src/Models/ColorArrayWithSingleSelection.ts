import {IFilteredValuesList} from '../Interfaces/Data.Models/IFilteredValuesList';
import {IColor} from '../Interfaces/Data/Color';
import {IList} from '../Interfaces/Data.Models/IList';
import {IGetText} from '../Interfaces/Data.Models/IGetText';
import {getSingleValue} from '../Utils/Utilities';
import {IColorProperties} from '../Interfaces/Component.Properties/IColor.Properties';

export class ColorArrayWithSingleSelection implements IFilteredValuesList<IColor>, IGetText<IColor>, IList<IColor> {
    public selected: IColor = null;
    private colorBoxClass;
    private colorTextClass;

    constructor(properties: IColorProperties, public values: IColor[], initValues: IColor | IColor[] = null) {
        this.initSelected(initValues);
        this.colorBoxClass = properties.colorBoxClass || 'color-box';
        this.colorTextClass = properties.colorTextClass || 'name-txt';
    }

    public filteredValues(filterTxt: string, maxLength?: number): IColor[] {
        const filteredResults = this.values.filter((elem: IColor) => {
            return elem.name.includes(filterTxt);
        });
        return (maxLength && maxLength > 0) ? filteredResults.slice(0, maxLength) : filteredResults;
    }

    public getText(elem: IColor): string {
        const innerHTML = `<span class="${this.colorBoxClass}" style="background-color: ${elem.value}"></span>
                           <span class="${this.colorTextClass}">${elem.name}</span>`.trim();
        return innerHTML;
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
        if ((elem1 && elem2) && (elem1.id && elem2.id)) {
            return (elem1.id === elem2.id);
        }
        return false;
    }

    private initSelected(initialValue: IColor | IColor[]) {
        const value = getSingleValue<IColor>(this, initialValue);
        if (value) {
            this.selected = value;
        }
    }
}
