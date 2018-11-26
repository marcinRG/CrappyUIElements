import { IValueTransformation } from '../Interfaces/IValueTransformation';
export declare class MinMaxValue implements IValueTransformation<number> {
    value: number;
    minValue: number;
    maxValue: number;
    constructor(value: number, minValue: number, maxValue: number);
    reverseTransformation(yValue: number, yMin: number, yMax: number): number;
    transformation(yMin: number, yMax: number): number;
}
