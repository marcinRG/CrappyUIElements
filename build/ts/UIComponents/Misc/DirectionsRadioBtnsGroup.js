"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirectionsRadioBtnsGroup = (function () {
    function DirectionsRadioBtnsGroup(properties, list) {
        this.list = list;
        this.setProperties(properties);
        this.createHTMLElements(properties);
    }
    DirectionsRadioBtnsGroup.prototype.changeToSelected = function (ID) {
        var index = this.list.getIndex(ID);
        this.list.selectedValues = this.list.values[index];
    };
    DirectionsRadioBtnsGroup.prototype.setProperties = function (properties) {
        this.elementClass = properties.elementClass || 'slider-cuie';
        this.radioGroupName = properties.radioGroupName || 'directions-group';
        this.radioButtonClass = properties.radioButtonClass || 'input-rbtn';
        this.radioWrapperClass = properties.radioWrapperClass || 'btn-wrapper';
        this.cssDirectionsArray = properties.cssDirectionsArray || ['top-left', 'top-center', 'top-right',
            'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'];
    };
    DirectionsRadioBtnsGroup.prototype.createRadioButton = function (value, addClass) {
        var _this = this;
        var buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add(this.radioWrapperClass);
        if (addClass) {
            buttonWrapper.classList.add(addClass);
        }
        buttonWrapper.innerHTML = this.createButtonInnerHTML(value);
        buttonWrapper.childNodes[0].addEventListener('click', function () {
            _this.changeToSelected(value);
        });
        return buttonWrapper;
    };
    DirectionsRadioBtnsGroup.prototype.hasProperDimension = function (array) {
        return ((array.length === 4) || (array.length === 5) || (array.length === 5)
            || (array.length === 8) || (array.length === 9));
    };
    DirectionsRadioBtnsGroup.prototype.getCssDirectionTable = function (length) {
        switch (length) {
            case 4: {
                return [this.cssDirectionsArray[0], this.cssDirectionsArray[2],
                    this.cssDirectionsArray[6], this.cssDirectionsArray[8]];
            }
            case 5: {
                return [this.cssDirectionsArray[0], this.cssDirectionsArray[2], this.cssDirectionsArray[4],
                    this.cssDirectionsArray[6], this.cssDirectionsArray[8]];
            }
            case 8: {
                return [this.cssDirectionsArray[0], this.cssDirectionsArray[1], this.cssDirectionsArray[2],
                    this.cssDirectionsArray[3], this.cssDirectionsArray[5],
                    this.cssDirectionsArray[6], this.cssDirectionsArray[7], this.cssDirectionsArray[8]];
            }
            case 9: {
                return this.cssDirectionsArray;
            }
        }
    };
    DirectionsRadioBtnsGroup.prototype.createRadioButtonGroup = function (directionsArray) {
        for (var _i = 0, _a = this.list.values; _i < _a.length; _i++) {
            var val = _a[_i];
            var uniqeID = this.list.getUniqueID(val);
            var directionClass = directionsArray[this.list.getIndex(uniqeID)];
            this.htmlElement.appendChild(this.createRadioButton(uniqeID, directionClass));
        }
    };
    DirectionsRadioBtnsGroup.prototype.createButtonInnerHTML = function (value) {
        return ("<input type=\"radio\" name=\"" + this.radioGroupName + "\" class=\"" + this.radioButtonClass + "\" value=\"" + value + "\">")
            .trim();
    };
    DirectionsRadioBtnsGroup.prototype.createHTMLElements = function (properties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement && this.hasProperDimension(this.list.values)) {
            this.htmlElement.classList.add(this.elementClass);
            var directionsArray = this.getCssDirectionTable(this.list.values.length);
            this.createRadioButtonGroup(directionsArray);
        }
    };
    return DirectionsRadioBtnsGroup;
}());
exports.DirectionsRadioBtnsGroup = DirectionsRadioBtnsGroup;
//# sourceMappingURL=DirectionsRadioBtnsGroup.js.map