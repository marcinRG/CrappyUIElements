"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(f, delay) {
    var timer = null;
    return function (a) {
        if (!timer) {
            timer = window.setTimeout(function () { return f(a); }, delay);
        }
        else {
            clearTimeout(timer);
            timer = window.setTimeout(function () { return f(a); }, delay);
        }
    };
}
exports.debounce = debounce;
//# sourceMappingURL=Utilities.js.map