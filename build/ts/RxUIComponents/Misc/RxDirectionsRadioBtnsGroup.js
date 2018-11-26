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
var DirectionsRadioBtnsGroup_1 = require("../../UIComponents/Misc/DirectionsRadioBtnsGroup");
var Subject_1 = require("rxjs/Subject");
var RxDirectionsRadioBtnsGroup = (function (_super) {
    __extends(RxDirectionsRadioBtnsGroup, _super);
    function RxDirectionsRadioBtnsGroup(properties, list) {
        var _this = _super.call(this, properties, list) || this;
        _this.subject = new Subject_1.Subject();
        return _this;
    }
    RxDirectionsRadioBtnsGroup.prototype.changeToSelected = function (ID) {
        var index = this.list.getIndex(ID);
        this.list.selectedValues = this.list.values[index];
        this.subject.next(this.list.selectedValues);
    };
    RxDirectionsRadioBtnsGroup.prototype.getObservable = function () {
        return this.subject;
    };
    RxDirectionsRadioBtnsGroup.prototype.subscribe = function (observer) {
        this.subject.subscribe(observer);
    };
    return RxDirectionsRadioBtnsGroup;
}(DirectionsRadioBtnsGroup_1.DirectionsRadioBtnsGroup));
exports.RxDirectionsRadioBtnsGroup = RxDirectionsRadioBtnsGroup;
//# sourceMappingURL=RxDirectionsRadioBtnsGroup.js.map