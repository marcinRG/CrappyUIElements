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
var ComboBox_1 = require("../../UIComponents/ComboBoxes/ComboBox/ComboBox");
var Subject_1 = require("rxjs/Subject");
var RxComboBox = (function (_super) {
    __extends(RxComboBox, _super);
    function RxComboBox(properties, selectableList) {
        var _this = _super.call(this, properties, selectableList) || this;
        _this.selectableList = selectableList;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxComboBox.prototype.changeValue = function (ID) {
        var index = this.selectableList.getIndex(ID);
        this.selectableList.selectedValues = this.selectableList.values[index];
        this.subject.next(this.selectableList.selectedValues);
    };
    RxComboBox.prototype.getObservable = function () {
        return this.subject;
    };
    RxComboBox.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    return RxComboBox;
}(ComboBox_1.ComboBox));
exports.RxComboBox = RxComboBox;
//# sourceMappingURL=RxComboBox.js.map