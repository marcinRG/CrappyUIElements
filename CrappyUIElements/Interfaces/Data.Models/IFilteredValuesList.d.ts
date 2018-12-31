export interface IFilteredValuesList<T> {
    filteredValues(filterTxt: string, maxLength?: number): T[];
}
