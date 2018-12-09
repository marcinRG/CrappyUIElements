import { IIterable } from '../Interfaces/Data.Models/IIterable';
export declare class IterableNumbers implements IIterable<number> {
    private minValue;
    private maxValue;
    private valChange;
    selected: number;
    constructor(initialValue: number, minValue: number, maxValue: any, valChange: number);
    isAtEnd(): boolean;
    isAtStart(): boolean;
    next(): number;
    previous(): number;
    checkAndSetValue(str: string): number;
}
