import {IList} from '../Interfaces/Data.Models/IList';

export function debounce<A>(f: (a: A) => void, delay: number) {
    let timer: number = null;
    return (a: A) => {
        if (!timer) {
            timer = window.setTimeout(() => f(a), delay);
        } else {
            clearTimeout(timer);
            timer = window.setTimeout(() => f(a), delay);
        }
    };
}

export function findInList<T>(list: IList<T>, value: T) {
    return list.values.findIndex((elem: T) => {
        return list.isEqual(elem, value);
    });
}

export function findSingleValue<T>(list: IList<T>, initialValue: T | T[]) {
    let value: any;
    if (Array.isArray(initialValue) && initialValue.length === 1) {
        value = initialValue[0];
    } else {
        value = initialValue;
    }
    return list.values[findInList(list, value)];
}

export function getUniqueValues<T>(values: T[], isEqualFunction: (ob: T, ob2: T) => boolean) {
    return values.reduce((previousValue, current) => {
        const index = previousValue.findIndex((elem: T) => {
            return isEqualFunction(elem, current);
        });
        if (index < 0) {
            previousValue.push(current);
        }
        return previousValue;
    }, []);
}

export function findMultipleValues<T>(list: IList<T>, initialValue: T[]) {
    let values: T[];
    const everyValueInList = initialValue.every((elem: T) => {
        return (findInList(list, elem) >= 0);
    });
    if (everyValueInList) {
       values = getUniqueValues(initialValue, list.isEqual);
    }
    return values;
}
