export interface IIterable<T> {
    value: T;

    next(): T;

    previous(): T;

    isAtStart(): boolean;

    isAtEnd(): boolean;
}
