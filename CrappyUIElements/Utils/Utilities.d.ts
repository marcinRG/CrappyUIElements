import { IList } from '../Interfaces/Data.Models/IList';
export declare function debounce<A>(f: (a: A) => void, delay: number): (a: A) => void;
export declare function findInList<T>(list: IList<T>, value: T): number;
export declare function getSingleValue<T>(list: IList<T>, initialValue: T | T[]): T;
export declare function getMultipleValues<T>(list: IList<T>, initialValue: T[]): T[];
export declare function getUniqueValues<T>(values: T[], isEqualFunction: (ob: T, ob2: T) => boolean): any[];
export declare function formatNumbers(n: number): string;
