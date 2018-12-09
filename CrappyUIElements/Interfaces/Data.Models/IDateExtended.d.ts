export interface IDateExtended {
    daysLabels: string[];
    monthsLabels: string[];
    separator: string;
    date: Date;
    daysInMonth(month: number, year: number): number;
    firstDayWeekOfMonth(): number;
    lastDayOfMonth(): number;
    addMonth(): any;
    subtractMonth(): any;
    isSelectedDay(day: number): boolean;
    isToday(day: number): boolean;
    getMonthYearString(): string;
    validateDate(dateAsString: string): boolean;
    getDateFromString(dateAsString: string): any;
    dateToString(): string;
    setDay(day: number): any;
    getDay(): number;
}
