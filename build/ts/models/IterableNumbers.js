"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterableNumbers = (function () {
    function IterableNumbers(initialValue, minValue, maxValue, valChange) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.valChange = valChange;
        if ((initialValue < this.maxValue) && (initialValue > this.minValue)) {
            this.value = initialValue;
        }
        else {
            this.value = this.minValue;
        }
    }
    IterableNumbers.prototype.isAtEnd = function () {
        return (this.value >= this.maxValue);
    };
    IterableNumbers.prototype.isAtStart = function () {
        return (this.value <= this.minValue);
    };
    IterableNumbers.prototype.next = function () {
        if (this.value < this.maxValue) {
            this.value = this.value + this.valChange;
        }
        return this.value;
    };
    IterableNumbers.prototype.previous = function () {
        if (this.value > this.minValue) {
            this.value = this.value - this.valChange;
        }
        return this.value;
    };
    return IterableNumbers;
}());
exports.IterableNumbers = IterableNumbers;
//# sourceMappingURL=IterableNumbers.js.map