import { IIterable } from '../Interfaces/IIterable';
export declare class IterableNumbers implements IIterable<number> {
    private minValue;
    private maxValue;
    private valChange;
    value: number;
    constructor(initialValue: number, minValue: number, maxValue: any, valChange: number);
    isAtEnd(): boolean;
    isAtStart(): boolean;
    next(): number;
    previous(): number;
}
