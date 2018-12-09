export interface IList<T> {
    values: T[];
    selected: T | T[];
    getUniqueID(elem: T): string;
    getIndex(uniqueID: string): number;
    isEqual(elem1: T, elem2: T): boolean;
}
