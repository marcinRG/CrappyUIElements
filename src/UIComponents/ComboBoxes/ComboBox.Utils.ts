import {IComboBoxProperties} from '../../Interfaces/Component.Properties/IComboBox.Properties';
import {IList} from '../../Interfaces/Data.Models/IList';
import {animationsUtils} from '../../Utils/Animation.Utilities';
import {IGetText} from '../../Interfaces/Data.Models/IGetText';

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

function createLiElement(text: string, uniqueID: string, className: string) {
    const liElem: HTMLLIElement = document.createElement('li');
    liElem.textContent = text;
    liElem.setAttribute('data-list-nr', uniqueID);
    liElem.classList.add(className);
    return liElem;
}

function createDivElement(innerHTML: string, uniqueID: string, className: string) {
    const divElem: HTMLDivElement = document.createElement('div');
    divElem.innerHTML = innerHTML;
    divElem.setAttribute('data-list-nr', uniqueID);
    divElem.classList.add(className);
    return divElem;
}

function createElements(list: IList<any> & IGetText<any>, values: any, htmlListElement: HTMLElement,
                        listElementClass: string, comboBox: object, callback: any, createElementFunction: any) {
    if (htmlListElement) {
        htmlListElement.innerHTML = null;
        for (const elem of values) {
            const uniqueID = list.getUniqueID(elem);
            const text = list.getText(elem);
            const divElem: HTMLDivElement = createElementFunction(text, uniqueID, listElementClass);
            divElem.addEventListener('click', () => {
                callback.apply(comboBox, [uniqueID]);
            });

            htmlListElement.appendChild(divElem);
        }
    }
    return htmlListElement;
}

export function createListElements(list: IList<any> & IGetText<any>, values: any, htmlListElement: HTMLElement,
                                   listElementClass: string, comboBox: object, callback: any) {
    return createElements(list, values, htmlListElement,
        listElementClass, comboBox, callback, createLiElement);
}

export function createListHTMLElements(list: IList<any> & IGetText<any>, values: any, htmlListElement: HTMLElement,
                                       listElementClass: string, comboBox: object, callback: any) {
    return createElements(list, values, htmlListElement,
        listElementClass, comboBox, callback, createDivElement);
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
