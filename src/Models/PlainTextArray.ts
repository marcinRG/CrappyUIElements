import {IGetText} from '../Interfaces/Data.Models/IGetText';
import {IList} from '../Interfaces/Data.Models/IList';

export class PlainTextArray implements IGetText<string>, IList<string> {

    constructor(public values: string[], public selected = null) {
    }

    public getIndex(uniqueID: string): number {
        const id = Number.parseInt(uniqueID, 10);
        if (Number.isInteger(id) && id <= this.values.length) {
            return id;
        }
        return null;
    }

    public getText(elem: string): string {
        return elem;
    }

    public getUniqueID(elem: string): string {
        const index = this.values.findIndex((val: string) => {
            return this.isEqual(val, elem);
        });
        if (index >= 0) {
            return index + '';
        }
        return null;
    }

    public isEqual(elem1: string, elem2: string) {
        return (elem1 === elem2);
    }
}
