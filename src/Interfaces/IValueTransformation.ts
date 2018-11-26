export interface IValueTransformation<T> {
    value: T;
    minValue: T;
    maxValue: T;

    transformation(yMin: T, yMax: T): T;

    reverseTransformation(yValue: T, yMin: T, yMax: T): T;
}
