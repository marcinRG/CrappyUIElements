"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlainTextArray = (function () {
    function PlainTextArray(values, selectedValues) {
        if (selectedValues === void 0) { selectedValues = null; }
        this.values = values;
        this.selectedValues = selectedValues;
    }
    PlainTextArray.prototype.getIndex = function (uniqueID) {
        var id = Number.parseInt(uniqueID, 10);
        if (Number.isInteger(id) && id <= this.values.length) {
            return id;
        }
        return null;
    };
    PlainTextArray.prototype.getTitle = function (elem) {
        return elem;
    };
    PlainTextArray.prototype.getUniqueID = function (elem) {
        var index = this.values.indexOf(elem);
        if (index >= 0) {
            return index + '';
        }
        return null;
    };
    return PlainTextArray;
}());
exports.PlainTextArray = PlainTextArray;
//# sourceMappingURL=PlainTextArray.js.map