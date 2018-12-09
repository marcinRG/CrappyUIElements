import {IIterable} from '../Interfaces/Data.Models/IIterable';

export class IterableTextArray implements IIterable<string> {
    public selected: string;

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
        return this.selected;
    }

    public previous(): string {
        if (this.i > 0) {
            this.i = this.i - 1;
        }
        this.setValue();
        return this.selected;
    }

    public checkAndSetValue(str: string): string {
        const index = this.txtArray.indexOf(str);
        if (index >= 0) {
            this.selected = this.txtArray[index];
            return this.selected;
        }
    }

    private setValue() {
        this.selected = this.txtArray[this.i];
    }
}
