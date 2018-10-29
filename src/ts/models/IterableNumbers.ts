import {IIterable} from '../Interfaces/IIterable';

export class IterableNumbers implements IIterable<number> {
    public value: number;

    constructor(private minValue: number, private  maxValue, private valChange: number) {
        console.log('iterable numbers');
    }

    public isAtEnd(): boolean {
        return false;
    }

    public isAtStart(): boolean {
        return false;
    }

    public next(): number {
        return undefined;
    }

    public previous(): number {
        return undefined;
    }
}
