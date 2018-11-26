"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slider = (function () {
    function Slider(properties, minMaxValue) {
        var _this = this;
        this.minMaxValue = minMaxValue;
        this.isMouseDown = false;
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElements();
        this.setMinMaxWidth();
        this.changePointerPositionAndFillBeamLength((this.minWidth +
            this.minMaxValue.transformation(this.minWidth, this.maxWidth)));
        this.htmlFieldElement.addEventListener('click', function (event) {
            var x = event.clientX;
            _this.changePointerPositionAndFillBeamLength(x);
            _this.changeValue(x, _this.minWidth, _this.maxWidth);
        });
        window.addEventListener('resize', function () {
            _this.setMinMaxWidth();
            _this.changePointerPositionAndFillBeamLength((_this.minWidth +
                _this.minMaxValue.transformation(_this.minWidth, _this.maxWidth)));
        });
        this.htmlFieldElement.addEventListener('mousemove', function (event) {
            if (_this.isMouseDown) {
                var x = event.clientX;
                _this.changePointerPositionAndFillBeamLength(x);
                _this.changeValue(x, _this.minWidth, _this.maxWidth);
            }
        });
        this.htmlPointerElement.addEventListener('mousedown', function () {
            _this.isMouseDown = true;
        });
        this.htmlPointerElement.addEventListener('mouseup', function () {
            _this.isMouseDown = false;
        });
    }
    Slider.prototype.changeValue = function (x, min, max) {
        this.minMaxValue.value = this.minMaxValue.reverseTransformation(x, min, max);
    };
    Slider.prototype.setMinMaxWidth = function () {
        var rect = this.htmlFieldElement.getBoundingClientRect();
        this.minWidth = Math.floor(rect.left + (this.pointerWidth / 2));
        this.maxWidth = Math.ceil(rect.left + rect.width - (this.pointerWidth / 2));
    };
    Slider.prototype.changePointerPositionAndFillBeamLength = function (x) {
        if (x >= this.minWidth && x <= this.maxWidth) {
            var len = x - this.minWidth;
            this.htmlPointerElement.style.left = len + 'px';
            this.htmlBeamFillElement.style.width = len + 'px';
        }
    };
    Slider.prototype.setProperties = function (properties) {
        this.elementClass = properties.elementClass || 'slider-cuie';
        this.fieldClass = properties.fieldClass || 'click-field';
        this.beamClass = properties.beamClass || 'beam';
        this.beamFillClass = properties.beamFillClass || 'beam-fill';
        this.pointerClass = properties.pointerClass || 'pointer';
        this.pointerWidth = properties.pointerWidth;
    };
    Slider.prototype.createHTMLElements = function (properties) {
        var innerHTML = ("\n        <div class=\"" + this.fieldClass + "\">\n            <div class=\"" + this.beamClass + "\">\n                <div class=\"" + this.beamFillClass + "\"></div>\n            </div>\n            <div class=\"" + this.pointerClass + "\"></div>\n        </div>").trim();
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(this.elementClass);
            this.htmlElement.innerHTML = innerHTML;
        }
    };
    Slider.prototype.setHTMLElements = function () {
        var selectorPointer = "." + this.pointerClass;
        this.htmlPointerElement = this.htmlElement.querySelector(selectorPointer);
        var selectorField = "." + this.fieldClass;
        this.htmlFieldElement = this.htmlElement.querySelector(selectorField);
        var selectorBeamFill = "." + this.beamFillClass;
        this.htmlBeamFillElement = this.htmlElement.querySelector(selectorBeamFill);
    };
    return Slider;
}());
exports.Slider = Slider;
//# sourceMappingURL=Slider.js.map