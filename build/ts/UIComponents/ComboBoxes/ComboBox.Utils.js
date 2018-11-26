"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation_Utilities_1 = require("../../Utils/Animation.Utilities");
function createHTMLElements(properties) {
    var elementClass = properties.elementClass;
    var inputTxtClass = properties.txtInputClass || 'input-txt';
    var inputBtnClass = properties.btnInputClass || 'input-btn';
    var inputsRowClass = properties.inputsRowClass || 'inputs';
    var listClass = properties.listClass || 'list-elements';
    var htmlInner = "\n        <div class=\"" + inputsRowClass + "\">\n            <input class=\"" + inputTxtClass + "\" type=\"text\">\n            <button class=\"" + inputBtnClass + "\"></button>\n        </div>\n        <ul class=\"" + listClass + "\">\n        </ul>";
    var htmlElement = document.querySelector(properties.querySelectorString);
    htmlElement.classList.add(elementClass);
    htmlElement.innerHTML = htmlInner;
    if (htmlElement) {
        return {
            htmlElement: htmlElement,
            txtInput: htmlElement.querySelector("." + inputTxtClass),
            btnInput: htmlElement.querySelector("." + inputBtnClass),
            listElements: htmlElement.querySelector("." + listClass),
        };
    }
}
exports.createHTMLElements = createHTMLElements;
function addRemoveClass(condition, element, className) {
    if (element) {
        if (condition) {
            element.classList.remove(className);
        }
        else {
            element.classList.add(className);
        }
    }
}
exports.addRemoveClass = addRemoveClass;
function createListElements(list, values, htmlListElement, listElementClass, comboBox, callback) {
    if (htmlListElement) {
        htmlListElement.innerHTML = null;
        var _loop_1 = function (elem) {
            var liElem = document.createElement('li');
            liElem.textContent = list.getTitle(elem);
            var uniqueID = list.getUniqueID(elem);
            liElem.setAttribute('data-list-nr', uniqueID);
            liElem.addEventListener('click', function () {
                callback.apply(comboBox, [uniqueID]);
            });
            liElem.classList.add(listElementClass);
            htmlListElement.appendChild(liElem);
        };
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var elem = values_1[_i];
            _loop_1(elem);
        }
    }
}
exports.createListElements = createListElements;
function hideAfterSelected(listElements, maxLength, listVisible, btnInput, changeBtnClass) {
    var heightOverflowProperties = Animation_Utilities_1.animationsUtils.getListElementHeightOverflow(listElements, maxLength);
    Animation_Utilities_1.animationsUtils.slideUp(listElements, 50, 'ease-in', 'hidden', heightOverflowProperties.height);
    addRemoveClass(listVisible, btnInput, changeBtnClass);
    return false;
}
exports.hideAfterSelected = hideAfterSelected;
function toggleListElements(listElements, maxLength, listVisible) {
    var heightOverflowProperties = Animation_Utilities_1.animationsUtils.getListElementHeightOverflow(listElements, maxLength);
    if (heightOverflowProperties.height > 0) {
        if (!listVisible) {
            Animation_Utilities_1.animationsUtils.slideDown(listElements, 150, 'ease-in', heightOverflowProperties.overflow, heightOverflowProperties.height);
        }
        else {
            Animation_Utilities_1.animationsUtils.slideUp(listElements, 150, 'ease-in', 'hidden', heightOverflowProperties.height);
        }
        return !listVisible;
    }
}
exports.toggleListElements = toggleListElements;
//# sourceMappingURL=ComboBox.Utils.js.map