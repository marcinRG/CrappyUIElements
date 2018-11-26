"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinMaxValue = (function () {
    function MinMaxValue(value, minValue, maxValue) {
        this.value = value;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    MinMaxValue.prototype.reverseTransformation = function (yValue, yMin, yMax) {
        var xValue = Math.round((this.maxValue - this.minValue) * (yValue - yMin) / (yMax - yMin));
        return xValue;
    };
    MinMaxValue.prototype.transformation = function (yMin, yMax) {
        var yValue = Math.round((yMax - yMin) * (this.value - this.minValue) / (this.maxValue - this.minValue));
        return yValue;
    };
    return MinMaxValue;
}());
exports.MinMaxValue = MinMaxValue;
//# sourceMappingURL=MinMaxValue.js.map