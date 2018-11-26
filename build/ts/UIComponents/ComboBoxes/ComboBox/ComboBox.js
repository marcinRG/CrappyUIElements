"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CBoxUtils = require("../ComboBox.Utils");
var ComboBox = (function () {
    function ComboBox(properties, selectableList) {
        var _this = this;
        this.selectableList = selectableList;
        this.listVisible = false;
        this.createElements(properties);
        this.setInitialProperties(properties);
        var values = this.selectableList.values;
        CBoxUtils.createListElements(this.selectableList, values, this.listElements, this.listElementClass, this, this.changeToSelected);
        this.btnInput.addEventListener('click', function () {
            CBoxUtils.addRemoveClass(_this.listVisible, _this.btnInput, _this.changeBtnClass);
            _this.toggleListElements();
        });
    }
    ComboBox.prototype.changeValue = function (ID) {
        var index = this.selectableList.getIndex(ID);
        this.selectableList.selectedValues = this.selectableList.values[index];
    };
    ComboBox.prototype.setInitialProperties = function (properties) {
        this.txtInput.readOnly = true;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
        this.maxLength = properties.maxSize;
    };
    ComboBox.prototype.createElements = function (properites) {
        var elements = CBoxUtils.createHTMLElements(properites);
        this.htmlElement = elements.htmlElement;
        this.txtInput = elements.txtInput;
        this.btnInput = elements.btnInput;
        this.listElements = elements.listElements;
    };
    ComboBox.prototype.changeToSelected = function (ID) {
        this.changeValue(ID);
        if (this.selectableList.selectedValues) {
            this.txtInput.value = this.selectableList.getTitle(this.selectableList.selectedValues);
            this.hideAfterSelected();
        }
    };
    ComboBox.prototype.hideAfterSelected = function () {
        this.listVisible = CBoxUtils.hideAfterSelected(this.listElements, this.maxLength, this.listVisible, this.btnInput, this.changeBtnClass);
    };
    ComboBox.prototype.toggleListElements = function () {
        this.listVisible = CBoxUtils.toggleListElements(this.listElements, this.maxLength, this.listVisible);
    };
    return ComboBox;
}());
exports.ComboBox = ComboBox;
//# sourceMappingURL=ComboBox.js.map