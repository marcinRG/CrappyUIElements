import {IIterable} from '../Interfaces/IIterable';

export class IterableTextArray implements IIterable<string> {
    public value: string;

    constructor(private txtArray: string[]) {
       console.log('iterable text array');
    }

    public isAtEnd(): boolean {
        return false;
    }

    public isAtStart(): boolean {
        return false;
    }

    public next(): string {
        return undefined;
    }

    public previous(): string {
        return undefined;
    }
}
