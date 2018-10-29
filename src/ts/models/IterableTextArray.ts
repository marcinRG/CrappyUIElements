import {IIterable} from '../Interfaces/IIterable';

export class IterableTextArray implements IIterable<string> {
    public value: string;

    constructor(private txtArray: string[], private i: number = 0) {
        this.setValue();
    }

    public isAtEnd(): boolean {
        return (this.i === this.txtArray.length);
    }

    public isAtStart(): boolean {
        return (this.i === 0);
    }

    public next(): string {
        if (this.i < this.txtArray.length - 1) {
            this.i = this.i + 1;
        }
        this.setValue();
        return this.value;
    }

    public previous(): string {
        if (this.i > 0) {
            this.i = this.i - 1;
        }
        this.setValue();
        return this.value;
    }

    private setValue() {
        this.value = this.txtArray[this.i];
    }
}
