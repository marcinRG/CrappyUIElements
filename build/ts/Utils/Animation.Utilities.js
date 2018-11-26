"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var velocity_animate_1 = require("velocity-animate");
var AnimationsUtils = (function () {
    function AnimationsUtils() {
        this.hiddenAttribute = 'data-hidden-attribute';
        this.isNotDisplayedString = 'none';
        this.isDisplayedString = 'block';
    }
    AnimationsUtils.prototype.slideToggle = function (elem, time, ease) {
        var height = this.getElementHeight(elem);
        if (this.isNotDisplayed(elem)) {
            this.slideDown(elem, time, ease, 'hidden', height);
        }
        else {
            this.slideUp(elem, time, ease, 'hidden', height);
        }
    };
    AnimationsUtils.prototype.slideDown = function (elem, time, ease, overflowStyle, height) {
        elem.style.overflow = 'hidden';
        elem.style.height = 0 + 'px';
        elem.style.display = this.isDisplayedString;
        elem.removeAttribute(this.hiddenAttribute);
        velocity_animate_1.Velocity(elem, {
            height: height + 'px',
        }, {
            duration: time,
            easing: ease,
            complete: function () {
                elem.style.overflow = overflowStyle;
            },
        });
    };
    AnimationsUtils.prototype.slideUp = function (elem, time, ease, overflowStyle, height) {
        var _this = this;
        elem.style.overflow = overflowStyle;
        elem.style.height = height + 'px';
        velocity_animate_1.Velocity(elem, {
            height: '0px',
        }, {
            duration: time,
            easing: ease,
            complete: function () {
                elem.style.display = _this.isNotDisplayedString;
                elem.setAttribute(_this.hiddenAttribute, '');
            },
        });
    };
    AnimationsUtils.prototype.getElementHeight = function (elem) {
        var elementProperties = this.getElementsProperites(elem);
        this.changePropertiesToGetElementHeight(elem);
        var height = elem.offsetHeight;
        this.restoreElementsProperties(elem, elementProperties);
        return height;
    };
    AnimationsUtils.prototype.getListElementHeightOverflow = function (elem, maxLength) {
        var height = 0;
        var overflow = 'auto';
        var childHeight = 0;
        if ((elem instanceof HTMLUListElement) || (elem instanceof HTMLOListElement)) {
            var elementProperties = this.getElementsProperites(elem);
            this.changePropertiesToGetElementHeight(elem);
            var listLength = elem.children.length;
            if (listLength > 0) {
                childHeight = elem.children[0].offsetHeight + 1;
                if (listLength > maxLength) {
                    height = maxLength * childHeight;
                    overflow = 'auto';
                }
                else {
                    height = listLength * childHeight;
                    overflow = 'hidden';
                }
            }
            this.restoreElementsProperties(elem, elementProperties);
        }
        return { height: height, overflow: overflow };
    };
    AnimationsUtils.prototype.getElementsProperites = function (element) {
        return {
            visibility: window.getComputedStyle(element).visibility,
            display: window.getComputedStyle(element).display,
            height: window.getComputedStyle(element).height,
        };
    };
    AnimationsUtils.prototype.restoreElementsProperties = function (element, savedProperties) {
        element.style.height = savedProperties.height;
        element.style.display = savedProperties.display;
        element.style.visibility = savedProperties.visibility;
    };
    AnimationsUtils.prototype.changePropertiesToGetElementHeight = function (element) {
        element.style.display = this.isNotDisplayedString;
        element.style.height = null;
        element.style.visibility = 'hidden';
        element.style.display = 'block';
    };
    AnimationsUtils.prototype.isNotDisplayed = function (elem) {
        return (window.getComputedStyle(elem).display === this.isNotDisplayedString);
    };
    return AnimationsUtils;
}());
exports.animationsUtils = new AnimationsUtils();
//# sourceMappingURL=Animation.Utilities.js.map