import {IValueTransformation} from '../Interfaces/IValueTransformation';

export class MinMaxValue implements IValueTransformation<number> {

    constructor(public value: number, public minValue: number, public maxValue: number) {
    }

    public reverseTransformation(yValue: number, yMin: number, yMax: number): number {
        const xValue = Math.round((this.maxValue - this.minValue) * (yValue - yMin) / (yMax - yMin));
        return xValue;
    }

    public transformation(yMin: number, yMax: number): number {
        const yValue = Math.round((yMax - yMin) * (this.value - this.minValue) / (this.maxValue - this.minValue));
        return yValue;
    }
}
