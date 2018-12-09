import {IComboBoxProperties} from '../../Interfaces/Component.Properties/IComboBox.Properties';
import {IGetTitle} from '../../Interfaces/Data.Models/IGetTitle';
import {IList} from '../../Interfaces/Data.Models/IList';
import {animationsUtils} from '../../Utils/Animation.Utilities';

export function createHTMLElements(properties: IComboBoxProperties) {
    const elementClass: string = properties.elementClass;
    const inputTxtClass: string = properties.txtInputClass || 'input-txt';
    const inputBtnClass: string = properties.btnInputClass || 'input-btn';
    const inputsRowClass: string = properties.inputsRowClass || 'inputs';
    const listClass: string = properties.listClass || 'list-elements';
    const htmlInner = `
        <div class="${inputsRowClass}">
            <input class="${inputTxtClass}" type="text">
            <button class="${inputBtnClass}"></button>
        </div>
        <ul class="${listClass}">
        </ul>`;
    const htmlElement: HTMLElement = document.querySelector(properties.querySelectorString);
    if (htmlElement) {
        htmlElement.classList.add(elementClass);
        htmlElement.innerHTML = htmlInner;
        return {
            htmlElement,
            txtInput: <HTMLInputElement> htmlElement.querySelector(`.${inputTxtClass}`),
            btnInput: htmlElement.querySelector(`.${inputBtnClass}`),
            listElements: htmlElement.querySelector(`.${listClass}`),
        };
    }
}

export function addRemoveClass(condition: boolean, element: HTMLElement, className: string) {
    if (element) {
        if (condition) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }
}

export function createListElements(list: IList<any> & IGetTitle<any>, values: any, htmlListElement: HTMLElement,
                                   listElementClass: string, comboBox: object, callback: any) {
    if (htmlListElement) {
        htmlListElement.innerHTML = null;
        for (const elem of values) {
            const liElem: HTMLLIElement = document.createElement('li');
            liElem.textContent = list.getTitle(elem);
            const uniqueID = list.getUniqueID(elem);
            liElem.setAttribute('data-list-nr', uniqueID);
            liElem.addEventListener('click', () => {
                callback.apply(comboBox, [uniqueID]);
            });
            liElem.classList.add(listElementClass);
            htmlListElement.appendChild(liElem);
        }
    }
}

export function hideAfterSelected(listElements, maxLength, listVisible, btnInput, changeBtnClass) {
    const heightOverflowProperties = animationsUtils.getListElementHeightOverflow(listElements,
        maxLength);
    animationsUtils.slideUp(listElements, 50, 'ease-in', 'hidden',
        heightOverflowProperties.height);
    addRemoveClass(listVisible, btnInput, changeBtnClass);
    return false;
}

export function toggleListElements(listElements, maxLength, listVisible) {
    const heightOverflowProperties = animationsUtils.getListElementHeightOverflow(listElements,
        maxLength);
    if (heightOverflowProperties.height > 0) {
        if (!listVisible) {
            animationsUtils.slideDown(listElements, 150, 'ease-in',
                heightOverflowProperties.overflow, heightOverflowProperties.height);
        } else {
            animationsUtils.slideUp(listElements, 150, 'ease-in', 'hidden',
                heightOverflowProperties.height);
        }
        return !listVisible;
    }
}
