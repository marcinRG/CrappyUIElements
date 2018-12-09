import { IIterable } from '../Interfaces/Data.Models/IIterable';
export declare class IterableTextArray implements IIterable<string> {
    private txtArray;
    private i;
    selected: string;
    constructor(txtArray: string[], i?: number);
    isAtEnd(): boolean;
    isAtStart(): boolean;
    next(): string;
    previous(): string;
    checkAndSetValue(str: string): string;
    private setValue;
}
