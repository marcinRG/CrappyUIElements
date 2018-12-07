import {PlainTextArray} from './PlainTextArray';
import {ISelectedValuesList} from '../Interfaces/Data.Models/ISelectedValuesList';
import {IList} from '../Interfaces/Data.Models/IList';

export class PlainTextArrayWithMultiSelection extends PlainTextArray implements ISelectedValuesList<string> {
    constructor(values: string[], public multipleValues: boolean = false, initValue: string[] = []) {
        super(values);
        this.initSelected(initValue);
    }

    public addRemoveValue(element: string) {
        const index = this.selected.indexOf(element);
        if (index >= 0) {
            if (this.multipleValues) {
                this.selected.splice(index, 1);
            } else {
                this.selected = [];
            }
        } else {
            if (this.multipleValues) {
                this.selected.push(element);
            } else {
                this.selected = [element];
            }
        }
    }

    private initSelected(intitValue: string[]) {
        console.log(intitValue);
    }
}

// function findInList<T>(list: IList<T>, value: T) {
//     return list.values.findIndex((elem: T) => {
//         return list.isEqual(elem, value);
//     });
// }
//
// export function contains<T>(list: IList<T>, valuesToCheck: T | T[]) {
//     if (Array.isArray(valuesToCheck)) {
//         valuesToCheck.forEach((elem) => {
//             if (findInList(list, elem) < 0) {
//                 return false;
//             }
//         });
//         return true;
//     }
//     else {
//         return (findInList(list, valuesToCheck) >= 0);
//     }
// }
