"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DatePicker_1 = require("../../UIComponents/DatePicker/DatePicker");
var Subject_1 = require("rxjs/Subject");
var RxDatePicker = (function (_super) {
    __extends(RxDatePicker, _super);
    function RxDatePicker(properties, date) {
        var _this = _super.call(this, properties, date) || this;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxDatePicker.prototype.getObservable = function () {
        return this.subject;
    };
    RxDatePicker.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    RxDatePicker.prototype.changeValue = function (operation, value) {
        if (value === void 0) { value = null; }
        switch (operation) {
            case 'nextMonth': {
                this.date.addMonth();
                this.subject.next(this.createDate());
                return;
            }
            case 'previousMonth': {
                this.date.subtractMonth();
                this.subject.next(this.createDate());
                return;
            }
            case 'txtDate': {
                if (value && (typeof (value) === 'string')) {
                    var val = this.date.setDateFromString(value);
                    if (val) {
                        this.subject.next(this.createDate());
                    }
                    return val;
                }
            }
            case 'day': {
                if (value && (typeof (value) === 'number')) {
                    this.date.setDay(value);
                    this.subject.next(this.createDate());
                    return;
                }
            }
        }
    };
    RxDatePicker.prototype.createDate = function () {
        return new Date(this.date.dateToStr());
    };
    return RxDatePicker;
}(DatePicker_1.DatePicker));
exports.RxDatePicker = RxDatePicker;
//# sourceMappingURL=RxDatePicker.js.map