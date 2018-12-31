import { IDateExtended } from '../Interfaces/Data.Models/IDateExtended';
export declare class DateExtended implements IDateExtended {
    daysLabels: string[];
    monthsLabels: string[];
    dateAsString: string;
    separator: string;
    date: Date;
    constructor(daysLabels: string[], monthsLabels: string[], dateAsString?: string, separator?: string);
    daysInMonth(month: any, year: any): number;
    firstDayWeekOfMonth(): number;
    lastDayOfMonth(): number;
    addMonth(): void;
    subtractMonth(): void;
    isSelectedDay(day: number): boolean;
    isToday(day: number): boolean;
    getMonthYearString(): string;
    validateDate(dateAsString: string): boolean;
    getDateFromString(dateAsString: string): Date;
    dateToString(): string;
    setDay(day: number): void;
    getDay(): number;
}
