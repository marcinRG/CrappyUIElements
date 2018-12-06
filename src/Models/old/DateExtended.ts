// export class DateExtended {
//     private date = new Date();
//
//     constructor(public daysLabels: string[], public monthsLabels: string[], public separator: string = '/') {
//         this.date = new Date();
//     }
//
//     public daysInMonth(month, year) {
//         return new Date(year, month + 1, 0).getDate();
//     }
//
//     public firstDayWeekOfMonth() {
//         const dateTemp = new Date(this.date.getTime());
//         dateTemp.setDate(1);
//         return dateTemp.getDay();
//     }
//
//     public lastDayOfMonth() {
//         return this.daysInMonth(this.date.getMonth(), this.date.getFullYear());
//     }
//
//     public addMonth() {
//         const dateTemp = new Date(this.date.getTime());
//         if (dateTemp.getMonth() < 11) {
//             this.date.setMonth(dateTemp.getMonth() + 1);
//         } else {
//             this.date.setFullYear(dateTemp.getFullYear() + 1);
//             this.date.setMonth(0);
//         }
//     }
//
//     public subtractMonth() {
//         const dateTemp = new Date(this.date.getTime());
//         if (dateTemp.getMonth() > 0) {
//             this.date.setMonth(dateTemp.getMonth() - 1);
//         } else {
//             this.date.setFullYear(dateTemp.getFullYear() - 1);
//             this.date.setMonth(11);
//         }
//     }
//
//     public isSelectedDay(day: number) {
//         return (this.date.getDate() === day);
//     }
//
//     public isToday(day: number) {
//         const tempDate = new Date();
//         return (this.date.getFullYear() === tempDate.getFullYear()) &&
//             (this.date.getMonth() === tempDate.getMonth() && (tempDate.getDate() === day));
//     }
//
//     public getMonthYearString() {
//         return `${this.monthsLabels[this.date.getMonth()]} ${this.date.getFullYear()}`;
//     }
//
//     public setDateFromString(dateAsString) {
//         if (Date.parse(dateAsString)) {
//             this.date = new Date(dateAsString);
//             return true;
//         }
//         return false;
//     }
//
//     public dateToStr() {
//         return '' + this.date.getFullYear() + this.separator + this.formatNumbers(this.date.getMonth() + 1) +
//             this.separator + this.formatNumbers(this.date.getDate());
//     }
//
//     public setDay(day: number) {
//         this.date.setDate(day);
//     }
//
//     public getDay() {
//         return this.date.getDate();
//     }
//
//     private formatNumbers(n: number) {
//         const str = n + '';
//         return str.length > 1 ? str : '0' + str;
//     }
// }
