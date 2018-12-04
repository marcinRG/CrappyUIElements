import {ISelectableList} from '../Interfaces/ISelectableList';

export class PlainTextArray implements ISelectableList<string> {

    constructor(public values: string[], public selectedValues = null) {
    }

    public getIndex(uniqueID: string): number {
        const id = Number.parseInt(uniqueID, 10);
        if (Number.isInteger(id) && id <= this.values.length) {
            return id;
        }
        return null;
    }

    public getTitle(elem: string): string {
        return elem;
    }

    public getUniqueID(elem: string): string {
        const index = this.values.indexOf(elem);
        if (index >= 0) {
            return index + '';
        }
        return null;
    }

    public isEqual(elem1: string, elem2: string) {
        return (elem1 === elem2);
    }
}
