import {IIterable} from '../Interfaces/IIterable';

export class IterableNumbers implements IIterable<number> {
    public value: number;

    constructor(initialValue: number, private minValue: number, private  maxValue, private valChange: number) {
        if ((initialValue < this.maxValue) && (initialValue > this.minValue)) {
            this.value = initialValue;
        } else {
            this.value = this.minValue;
        }
    }

    public isAtEnd(): boolean {
        return (this.value >= this.maxValue);
    }

    public isAtStart(): boolean {
        return (this.value <= this.minValue);
    }

    public next(): number {
        if (this.value < this.maxValue) {
            this.value = this.value + this.valChange;
        }
        return this.value;
    }

    public previous(): number {
        if (this.value > this.minValue) {
            this.value = this.value - this.valChange;
        }
        return this.value;
    }
}
