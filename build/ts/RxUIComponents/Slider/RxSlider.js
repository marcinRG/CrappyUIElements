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
var Subject_1 = require("rxjs/Subject");
var Slider_1 = require("../../UIComponents/Slider/Slider");
var RxSlider = (function (_super) {
    __extends(RxSlider, _super);
    function RxSlider(properties, minMaxValue) {
        var _this = _super.call(this, properties, minMaxValue) || this;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxSlider.prototype.getObservable = function () {
        return this.subject;
    };
    RxSlider.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    RxSlider.prototype.changeValue = function (x, min, max) {
        this.minMaxValue.value = this.minMaxValue.reverseTransformation(x, min, max);
        this.subject.next(this.minMaxValue.value);
    };
    return RxSlider;
}(Slider_1.Slider));
exports.RxSlider = RxSlider;
//# sourceMappingURL=RxSlider.js.map