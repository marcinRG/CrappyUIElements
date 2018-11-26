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
var PlainTextArray_1 = require("./PlainTextArray");
var PlainTextArrayWithSelectedValues = (function (_super) {
    __extends(PlainTextArrayWithSelectedValues, _super);
    function PlainTextArrayWithSelectedValues(values, multipleValues, selectedValues) {
        if (multipleValues === void 0) { multipleValues = false; }
        if (selectedValues === void 0) { selectedValues = []; }
        var _this = _super.call(this, values) || this;
        _this.multipleValues = multipleValues;
        _this.selectedValues = selectedValues;
        return _this;
    }
    PlainTextArrayWithSelectedValues.prototype.addRemoveValue = function (element) {
        var index = this.selectedValues.indexOf(element);
        if (index >= 0) {
            if (this.multipleValues) {
                this.selectedValues.splice(index, 1);
            }
            else {
                this.selectedValues = [];
            }
        }
        else {
            if (this.multipleValues) {
                this.selectedValues.push(element);
            }
            else {
                this.selectedValues = [element];
            }
        }
    };
    return PlainTextArrayWithSelectedValues;
}(PlainTextArray_1.PlainTextArray));
exports.PlainTextArrayWithSelectedValues = PlainTextArrayWithSelectedValues;
//# sourceMappingURL=PlainTextArrayWithSelectedValues.js.map