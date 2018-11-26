"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spinner = (function () {
    function Spinner(properties, iterable) {
        var _this = this;
        this.iterable = iterable;
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();
        this.htmlInputText.value = this.iterable.value;
        this.htmlButtonUp.addEventListener('click', function () {
            _this.nextValue();
        });
        this.htmlButtonDown.addEventListener('click', function () {
            _this.previousValue();
        });
    }
    Spinner.prototype.changeValue = function (direction) {
        if (direction === "next") {
            if (!this.iterable.isAtEnd()) {
                return this.iterable.next();
            }
        }
        if (direction === "previous") {
            if (!this.iterable.isAtStart()) {
                return this.iterable.previous();
            }
        }
        return null;
    };
    Spinner.prototype.nextValue = function () {
        var val = this.changeValue('next');
        if (val) {
            this.htmlInputText.value = this.iterable.value + '';
        }
    };
    Spinner.prototype.previousValue = function () {
        var val = this.changeValue('previous');
        if (val) {
            this.htmlInputText.value = this.iterable.value + '';
        }
    };
    Spinner.prototype.createHTMLElements = function (properties) {
        var innerHTML = ("<input type=\"text\" class=\"" + this.txtInputClass + "\">\n        <div class=\"" + this.buttonWrapperClass + "\">\n           <button class=\"" + this.upButtonClass + "\"></button>\n           <button class=\"" + this.downButtonClass + "\"></button>\n        </div>").trim();
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.innerHTML = innerHTML;
        }
    };
    Spinner.prototype.setProperties = function (properties) {
        this.elementClass = properties.elementClass || 'spinner-cuie';
        this.buttonWrapperClass = properties.buttonWrapperClass || 'button-wrapper';
        this.txtInputClass = properties.txtInputClass || 'input-txt';
        this.upButtonClass = properties.upButtonClass || 'button-up';
        this.downButtonClass = properties.downButtonClass || 'button-down';
        this.disabledButtonClass = properties.disabledButtonClass || '';
    };
    Spinner.prototype.setHTMLElements = function () {
        var selectorUpBtn = "." + this.upButtonClass;
        this.htmlButtonUp = this.htmlElement.querySelector(selectorUpBtn);
        var selectorDownBtn = "." + this.downButtonClass;
        this.htmlButtonDown = this.htmlElement.querySelector(selectorDownBtn);
        var selectorTxtInput = "." + this.txtInputClass;
        this.htmlInputText = this.htmlElement.querySelector(selectorTxtInput);
    };
    return Spinner;
}());
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map