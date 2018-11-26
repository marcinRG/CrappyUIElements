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
var Spinner_1 = require("../../UIComponents/Spinner/Spinner");
var Subject_1 = require("rxjs/Subject");
var RxSpinner = (function (_super) {
    __extends(RxSpinner, _super);
    function RxSpinner(properties, iterable) {
        var _this = _super.call(this, properties, iterable) || this;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxSpinner.prototype.getObservable = function () {
        return this.subject;
    };
    RxSpinner.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    RxSpinner.prototype.changeValue = function (direction) {
        if (direction === "next") {
            if (!this.iterable.isAtEnd()) {
                var val = this.iterable.next();
                this.subject.next(val);
                return val;
            }
        }
        if (direction === 'previous') {
            if (!this.iterable.isAtStart()) {
                var val = this.iterable.previous();
                this.subject.next(val);
                return val;
            }
        }
        return null;
    };
    return RxSpinner;
}(Spinner_1.Spinner));
exports.RxSpinner = RxSpinner;
//# sourceMappingURL=RxSpinner.js.map