export declare class DateExtended {
    daysLabels: string[];
    monthsLabels: string[];
    separator: string;
    private date;
    constructor(daysLabels: string[], monthsLabels: string[], separator?: string);
    daysInMonth(month: any, year: any): number;
    firstDayWeekOfMonth(): number;
    lastDayOfMonth(): number;
    addMonth(): void;
    subtractMonth(): void;
    isSelectedDay(day: number): boolean;
    isToday(day: number): boolean;
    getMonthYearString(): string;
    setDateFromString(dateAsString: any): boolean;
    dateToStr(): string;
    setDay(day: number): void;
    getDay(): number;
    private formatNumbers;
}
