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
var PlainTextArrayWithFilter = (function (_super) {
    __extends(PlainTextArrayWithFilter, _super);
    function PlainTextArrayWithFilter(values, selectedValues) {
        if (selectedValues === void 0) { selectedValues = null; }
        return _super.call(this, values, selectedValues) || this;
    }
    PlainTextArrayWithFilter.prototype.filteredValues = function (filterTxt, maxLength) {
        var filteredResults = this.values.filter(function (elem) {
            return elem.includes(filterTxt);
        });
        return (maxLength && maxLength > 0) ? filteredResults.slice(0, maxLength) : filteredResults;
    };
    return PlainTextArrayWithFilter;
}(PlainTextArray_1.PlainTextArray));
exports.PlainTextArrayWithFilter = PlainTextArrayWithFilter;
//# sourceMappingURL=PlainTextArrayWithFilter.js.map