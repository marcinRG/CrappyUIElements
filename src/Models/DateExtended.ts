import {IDateExtended} from '../Interfaces/Data.Models/IDateExtended';
import {formatNumbers} from '../Utils/Utilities';

export class DateExtended implements IDateExtended {
    public date: Date;

    constructor(public daysLabels: string[], public monthsLabels: string[],
                public dateAsString: string = null, public separator: string = '/') {
        if (this.validateDate(dateAsString)) {
            this.date = this.getDateFromString(dateAsString);
        } else {
            this.date = new Date();
        }
    }

    public daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    public firstDayWeekOfMonth() {
        const dateTemp = new Date(this.date.getTime());
        dateTemp.setDate(1);
        return dateTemp.getDay();
    }

    public lastDayOfMonth() {
        return this.daysInMonth(this.date.getMonth(), this.date.getFullYear());
    }

    public addMonth() {
        const dateTemp = new Date(this.date.getTime());
        if (dateTemp.getMonth() < 11) {
            this.date.setMonth(dateTemp.getMonth() + 1);
        } else {
            this.date.setFullYear(dateTemp.getFullYear() + 1);
            this.date.setMonth(0);
        }
    }

    public subtractMonth() {
        const dateTemp = new Date(this.date.getTime());
        if (dateTemp.getMonth() > 0) {
            this.date.setMonth(dateTemp.getMonth() - 1);
        } else {
            this.date.setFullYear(dateTemp.getFullYear() - 1);
            this.date.setMonth(11);
        }
    }

    public isSelectedDay(day: number) {
        return (this.date.getDate() === day);
    }

    public isToday(day: number) {
        const tempDate = new Date();
        return (this.date.getFullYear() === tempDate.getFullYear()) &&
            (this.date.getMonth() === tempDate.getMonth() && (tempDate.getDate() === day));
    }

    public getMonthYearString() {
        return `${this.monthsLabels[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    public validateDate(dateAsString: string) {
        return (dateAsString && Date.parse(dateAsString) !== Number.NaN);
    }

    public getDateFromString(dateAsString: string) {
        if (this.validateDate(dateAsString)) {
            return new Date(dateAsString);
        }
    }

    public dateToString() {
        return '' + this.date.getFullYear() + this.separator + formatNumbers(this.date.getMonth() + 1) +
            this.separator + formatNumbers(this.date.getDate());
    }

    public setDay(day: number) {
        this.date.setDate(day);
    }

    public getDay() {
        return this.date.getDate();
    }
}
