"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation_Utilities_1 = require("../../../Utils/Animation.Utilities");
var CBoxUtils = require("../ComboBox.Utils");
var utils = require("../../../Utils/Utilities");
var DynamicComboBox = (function () {
    function DynamicComboBox(properties, selectableList) {
        var _this = this;
        this.selectableList = selectableList;
        this.listVisible = false;
        this.createElements(properties);
        this.setInitialProperties(properties);
        CBoxUtils.createListElements(this.selectableList, this.selectableList.values, this.listElements, this.listElementClass, this, this.changeToSelected);
        this.btnInput.addEventListener('click', function () {
            CBoxUtils.addRemoveClass(_this.listVisible, _this.btnInput, _this.changeBtnClass);
            _this.toggleListElements();
        });
        this.debouncedInputTxt = utils.debounce(function (txtValue) {
            var values = _this.selectableList.filteredValues(txtValue, 0);
            CBoxUtils.createListElements(_this.selectableList, values, _this.listElements, _this.listElementClass, _this, _this.changeToSelected);
            var heightOverflowProperties = Animation_Utilities_1.animationsUtils.getListElementHeightOverflow(_this.listElements, _this.maxLength);
            if (values.length > 0) {
                _this.listElements.style.height = heightOverflowProperties.height + 'px';
                _this.listElements.style.overflow = heightOverflowProperties.overflow;
                if (!_this.listVisible) {
                    CBoxUtils.addRemoveClass(_this.listVisible, _this.btnInput, _this.changeBtnClass);
                    _this.listElements.style.display = 'block';
                    _this.listVisible = true;
                }
            }
            else {
                _this.listVisible = false;
                _this.listElements.style.display = 'none';
            }
        }, 1200);
        this.txtInput.addEventListener('input', function () {
            _this.debouncedInputTxt(_this.txtInput.value);
        });
    }
    DynamicComboBox.prototype.setInitialProperties = function (properties) {
        this.txtInput.readOnly = false;
        this.changeBtnClass = properties.btnChangeClass || 'unfolded';
        this.listElementClass = properties.listElementClass;
        this.maxLength = properties.maxSize;
    };
    DynamicComboBox.prototype.changeValue = function (ID) {
        var index = this.selectableList.getIndex(ID);
        this.selectableList.selectedValues = this.selectableList.values[index];
    };
    DynamicComboBox.prototype.changeToSelected = function (ID) {
        this.changeValue(ID);
        if (this.selectableList.selectedValues) {
            this.txtInput.value = this.selectableList.getTitle(this.selectableList.selectedValues);
            var values = this.selectableList.filteredValues(this.txtInput.value, 0);
            CBoxUtils.createListElements(this.selectableList, values, this.listElements, this.listElementClass, this, this.changeToSelected);
            this.hideAfterSelected();
        }
    };
    DynamicComboBox.prototype.hideAfterSelected = function () {
        this.listVisible = CBoxUtils.hideAfterSelected(this.listElements, this.maxLength, this.listVisible, this.btnInput, this.changeBtnClass);
    };
    DynamicComboBox.prototype.toggleListElements = function () {
        this.listVisible = CBoxUtils.toggleListElements(this.listElements, this.maxLength, this.listVisible);
    };
    DynamicComboBox.prototype.createElements = function (properites) {
        var elements = CBoxUtils.createHTMLElements(properites);
        this.htmlElement = elements.htmlElement;
        this.txtInput = elements.txtInput;
        this.btnInput = elements.btnInput;
        this.listElements = elements.listElements;
    };
    return DynamicComboBox;
}());
exports.DynamicComboBox = DynamicComboBox;
//# sourceMappingURL=DynamicComboBox.js.map