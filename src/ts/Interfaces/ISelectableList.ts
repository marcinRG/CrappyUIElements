export interface ISelectableList<T> {
    values: T[];

    selectedValues: T | T[];

    getUniqueID(elem: T): string;

    getIndex(uniqueID: string): number;

    getTitle(elem: T): string;
}
