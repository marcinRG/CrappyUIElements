export interface IIterable<T> {
    selected: T;

    next(): T;

    previous(): T;

    isAtStart(): boolean;

    isAtEnd(): boolean;
}
