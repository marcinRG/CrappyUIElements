"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateExtended = (function () {
    function DateExtended(daysLabels, monthsLabels, separator) {
        if (separator === void 0) { separator = '/'; }
        this.daysLabels = daysLabels;
        this.monthsLabels = monthsLabels;
        this.separator = separator;
        this.date = new Date();
        this.date = new Date();
    }
    DateExtended.prototype.daysInMonth = function (month, year) {
        return new Date(year, month + 1, 0).getDate();
    };
    DateExtended.prototype.firstDayWeekOfMonth = function () {
        var dateTemp = new Date(this.date.getTime());
        dateTemp.setDate(1);
        return dateTemp.getDay();
    };
    DateExtended.prototype.lastDayOfMonth = function () {
        return this.daysInMonth(this.date.getMonth(), this.date.getFullYear());
    };
    DateExtended.prototype.addMonth = function () {
        var dateTemp = new Date(this.date.getTime());
        if (dateTemp.getMonth() < 11) {
            this.date.setMonth(dateTemp.getMonth() + 1);
        }
        else {
            this.date.setFullYear(dateTemp.getFullYear() + 1);
            this.date.setMonth(0);
        }
    };
    DateExtended.prototype.subtractMonth = function () {
        var dateTemp = new Date(this.date.getTime());
        if (dateTemp.getMonth() > 0) {
            this.date.setMonth(dateTemp.getMonth() - 1);
        }
        else {
            this.date.setFullYear(dateTemp.getFullYear() - 1);
            this.date.setMonth(11);
        }
    };
    DateExtended.prototype.isSelectedDay = function (day) {
        return (this.date.getDate() === day);
    };
    DateExtended.prototype.isToday = function (day) {
        var tempDate = new Date();
        return (this.date.getFullYear() === tempDate.getFullYear()) &&
            (this.date.getMonth() === tempDate.getMonth() && (tempDate.getDate() === day));
    };
    DateExtended.prototype.getMonthYearString = function () {
        return this.monthsLabels[this.date.getMonth()] + " " + this.date.getFullYear();
    };
    DateExtended.prototype.setDateFromString = function (dateAsString) {
        if (Date.parse(dateAsString)) {
            this.date = new Date(dateAsString);
            return true;
        }
        return false;
    };
    DateExtended.prototype.dateToStr = function () {
        return '' + this.date.getFullYear() + this.separator + this.formatNumbers(this.date.getMonth() + 1) +
            this.separator + this.formatNumbers(this.date.getDate());
    };
    DateExtended.prototype.setDay = function (day) {
        this.date.setDate(day);
    };
    DateExtended.prototype.getDay = function () {
        return this.date.getDate();
    };
    DateExtended.prototype.formatNumbers = function (n) {
        var str = n + '';
        return str.length > 1 ? str : '0' + str;
    };
    return DateExtended;
}());
exports.DateExtended = DateExtended;
//# sourceMappingURL=DateExtended.js.map