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
var DynamicComboBox_1 = require("../../UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox");
var Subject_1 = require("rxjs/Subject");
var RxDynamicComboBox = (function (_super) {
    __extends(RxDynamicComboBox, _super);
    function RxDynamicComboBox(properties, selectableList) {
        var _this = _super.call(this, properties, selectableList) || this;
        _this.selectableList = selectableList;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxDynamicComboBox.prototype.changeValue = function (ID) {
        var index = this.selectableList.getIndex(ID);
        this.selectableList.selectedValues = this.selectableList.values[index];
        this.subject.next(this.selectableList.selectedValues);
    };
    RxDynamicComboBox.prototype.getObservable = function () {
        return this.subject;
    };
    RxDynamicComboBox.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    return RxDynamicComboBox;
}(DynamicComboBox_1.DynamicComboBox));
exports.RxDynamicComboBox = RxDynamicComboBox;
//# sourceMappingURL=RxDynamicComboBox.js.map