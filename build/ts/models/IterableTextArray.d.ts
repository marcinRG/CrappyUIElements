import { IIterable } from '../Interfaces/IIterable';
export declare class IterableTextArray implements IIterable<string> {
    private txtArray;
    private i;
    value: string;
    constructor(txtArray: string[], i?: number);
    isAtEnd(): boolean;
    isAtStart(): boolean;
    next(): string;
    previous(): string;
    private setValue;
}
