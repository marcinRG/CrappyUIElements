"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListWithCheckboxes = (function () {
    function ListWithCheckboxes(properties, selectableList) {
        this.selectableList = selectableList;
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();
    }
    ListWithCheckboxes.prototype.changeValue = function (value) {
        var element = this.selectableList.values[this.selectableList.getIndex(value)];
        this.selectableList.addRemoveValue(element);
    };
    ListWithCheckboxes.prototype.toggleCheckBox = function (value, elem) {
        var checkBox = elem.querySelector("." + this.checkBoxClass);
        var checked = this.checkBoxIsChecked(checkBox);
        if (!this.selectableList.multipleValues && (!checked)) {
            this.unCheckAllCheckBoxes();
        }
        this.toggleCheckBoxView(checked, checkBox);
        this.changeValue(value);
    };
    ListWithCheckboxes.prototype.unCheckAllCheckBoxes = function () {
        for (var _i = 0, _a = this.checkBoxes; _i < _a.length; _i++) {
            var checkBox = _a[_i];
            checkBox.classList.remove(this.selectedElementClass);
        }
    };
    ListWithCheckboxes.prototype.toggleCheckBoxView = function (checked, checkBox) {
        if (checked) {
            checkBox.classList.remove(this.selectedElementClass);
        }
        else {
            checkBox.classList.add(this.selectedElementClass);
        }
    };
    ListWithCheckboxes.prototype.checkBoxIsChecked = function (checkBoxElement) {
        return checkBoxElement.classList.contains(this.selectedElementClass);
    };
    ListWithCheckboxes.prototype.setProperties = function (properties) {
        this.elementClass = properties.elementClass || 'list-with-checkboxes-cuie';
        this.listClass = properties.listClass || 'list-elements';
        this.listElementClass = properties.listElementClass || 'li-elem';
        this.checkBoxClass = properties.checkBoxClass || 'check-box';
        this.valueClass = properties.valueClass || 'element';
        this.selectedElementClass = properties.selectedElementClass || 'checked';
    };
    ListWithCheckboxes.prototype.createHTMLElements = function (properties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.appendChild(this.createList());
        }
    };
    ListWithCheckboxes.prototype.createList = function () {
        var ul = document.createElement('ul');
        ul.classList.add(this.listClass);
        for (var _i = 0, _a = this.selectableList.values; _i < _a.length; _i++) {
            var elem = _a[_i];
            var text = this.selectableList.getTitle(elem);
            var uniqueId = this.selectableList.getUniqueID(elem);
            ul.appendChild(this.createListElement(text, uniqueId, this, this.toggleCheckBox));
        }
        return ul;
    };
    ListWithCheckboxes.prototype.createListElement = function (value, uniqueID, listwithCheckboxes, callback) {
        var innerHTML = ("<span class=\"" + this.checkBoxClass + "\"></span>\n<span class=\"" + this.valueClass + "\">" + value + "</span>").trim();
        var li = document.createElement('li');
        li.addEventListener('click', function () {
            callback.apply(listwithCheckboxes, [uniqueID, li]);
        });
        li.classList.add(this.listElementClass);
        li.innerHTML = innerHTML;
        return li;
    };
    ListWithCheckboxes.prototype.setHTMLElements = function () {
        var selectorCheckboxes = "." + this.listClass + " ." + this.checkBoxClass;
        this.checkBoxes = Array.from(this.htmlElement.querySelectorAll(selectorCheckboxes));
    };
    return ListWithCheckboxes;
}());
exports.ListWithCheckboxes = ListWithCheckboxes;
//# sourceMappingURL=ListWithCheckboxes.js.map