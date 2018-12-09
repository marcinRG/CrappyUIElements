import {IIterable} from '../Interfaces/Data.Models/IIterable';

export class IterableNumbers implements IIterable<number> {
    public selected: number;

    constructor(initialValue: number, private minValue: number, private  maxValue, private valChange: number) {
        if ((initialValue < this.maxValue) && (initialValue > this.minValue)) {
            this.selected = initialValue;
        } else {
            this.selected = this.minValue;
        }
    }

    public isAtEnd(): boolean {
        return (this.selected >= this.maxValue);
    }

    public isAtStart(): boolean {
        return (this.selected <= this.minValue);
    }

    public next(): number {
        if (this.selected < this.maxValue) {
            this.selected = this.selected + this.valChange;
        }
        return this.selected;
    }

    public previous(): number {
        if (this.selected > this.minValue) {
            this.selected = this.selected - this.valChange;
        }
        return this.selected;
    }

    public checkAndSetValue(str: string): number {
        const num = Number.parseFloat(str);
        if (num > this.minValue && num < this.maxValue) {
            this.selected = num;
            return this.selected;
        }
        return null;
    }
}
