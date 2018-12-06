// import {IIterable} from '../../Interfaces/IIterable';
// import {ISpinnerProperties} from '../../Interfaces/ISpinner.Properties';
//
// export class Spinner {
//     public htmlInputText;
//     private elementClass: string;
//     private txtInputClass: string;
//     private buttonWrapperClass: string;
//     private upButtonClass: string;
//     private downButtonClass: string;
//     private disabledButtonClass: string;
//
//     private htmlElement;
//     private htmlButtonUp;
//     private htmlButtonDown;
//
//     constructor(properties: ISpinnerProperties, public iterable: IIterable<any>) {
//         this.setProperties(properties);
//         this.createHTMLElements(properties);
//         this.setHTMLElements();
//         this.htmlInputText.value = this.iterable.value;
//         this.htmlButtonUp.addEventListener('click', () => {
//             this.nextValue();
//         });
//
//         this.htmlButtonDown.addEventListener('click', () => {
//             this.previousValue();
//         });
//     }
//
//     public changeValue(direction: string) {
//         if (direction === 'next') {
//             if (!this.iterable.isAtEnd()) {
//                 return this.iterable.next();
//             }
//         }
//         if (direction === 'previous') {
//             if (!this.iterable.isAtStart()) {
//                 return this.iterable.previous();
//             }
//         }
//         return null;
//     }
//
//     private nextValue() {
//         const val = this.changeValue('next');
//         if (val) {
//             this.htmlInputText.value = this.iterable.value + '';
//         }
//     }
//
//     private previousValue() {
//         const val = this.changeValue('previous');
//         if (val) {
//             this.htmlInputText.value = this.iterable.value + '';
//         }
//     }
//
//     private createHTMLElements(properties: ISpinnerProperties) {
//         const innerHTML = `<input type="text" class="${this.txtInputClass}">
//         <div class="${this.buttonWrapperClass}">
//            <button class="${this.upButtonClass}"></button>
//            <button class="${this.downButtonClass}"></button>
//         </div>`.trim();
//         this.htmlElement = document.querySelector(properties.querySelectorString);
//         if (this.htmlElement) {
//             this.htmlElement.classList.add(this.elementClass);
//             this.htmlElement.innerHTML = innerHTML;
//         }
//     }
//
//     private setProperties(properties: ISpinnerProperties) {
//         this.elementClass = properties.elementClass || 'spinner-cuie';
//         this.buttonWrapperClass = properties.buttonWrapperClass || 'button-wrapper';
//         this.txtInputClass = properties.txtInputClass || 'input-txt';
//         this.upButtonClass = properties.upButtonClass || 'button-up';
//         this.downButtonClass = properties.downButtonClass || 'button-down';
//         this.disabledButtonClass = properties.disabledButtonClass || '';
//     }
//
//     private setHTMLElements() {
//         const selectorUpBtn = `.${this.upButtonClass}`;
//         this.htmlButtonUp = this.htmlElement.querySelector(selectorUpBtn);
//         const selectorDownBtn = `.${this.downButtonClass}`;
//         this.htmlButtonDown = this.htmlElement.querySelector(selectorDownBtn);
//         const selectorTxtInput = `.${this.txtInputClass}`;
//         this.htmlInputText = this.htmlElement.querySelector(selectorTxtInput);
//     }
// }
