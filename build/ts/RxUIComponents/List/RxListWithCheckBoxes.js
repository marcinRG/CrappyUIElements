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
var ListWithCheckboxes_1 = require("../../UIComponents/List/ListWithCheckboxes");
var Subject_1 = require("rxjs/Subject");
var RxListWithCheckBoxes = (function (_super) {
    __extends(RxListWithCheckBoxes, _super);
    function RxListWithCheckBoxes(properties, selectableList) {
        var _this = _super.call(this, properties, selectableList) || this;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxListWithCheckBoxes.prototype.getObservable = function () {
        return this.subject;
    };
    RxListWithCheckBoxes.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    RxListWithCheckBoxes.prototype.changeValue = function (value) {
        var element = this.selectableList.values[this.selectableList.getIndex(value)];
        this.selectableList.addRemoveValue(element);
        this.subject.next(this.selectableList.selectedValues);
    };
    return RxListWithCheckBoxes;
}(ListWithCheckboxes_1.ListWithCheckboxes));
exports.RxListWithCheckBoxes = RxListWithCheckBoxes;
//# sourceMappingURL=RxListWithCheckBoxes.js.map