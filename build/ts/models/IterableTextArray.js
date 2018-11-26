"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterableTextArray = (function () {
    function IterableTextArray(txtArray, i) {
        if (i === void 0) { i = 0; }
        this.txtArray = txtArray;
        this.i = i;
        this.setValue();
    }
    IterableTextArray.prototype.isAtEnd = function () {
        return (this.i === this.txtArray.length);
    };
    IterableTextArray.prototype.isAtStart = function () {
        return (this.i === 0);
    };
    IterableTextArray.prototype.next = function () {
        if (this.i < this.txtArray.length - 1) {
            this.i = this.i + 1;
        }
        this.setValue();
        return this.value;
    };
    IterableTextArray.prototype.previous = function () {
        if (this.i > 0) {
            this.i = this.i - 1;
        }
        this.setValue();
        return this.value;
    };
    IterableTextArray.prototype.setValue = function () {
        this.value = this.txtArray[this.i];
    };
    return IterableTextArray;
}());
exports.IterableTextArray = IterableTextArray;
//# sourceMappingURL=IterableTextArray.js.map