// import {DateExtended} from '../../Models/DateExtended';
// import {animationsUtils} from '../../Utils/Animation.Utilities';
// import * as utils from '../../Utils/Utilities';
// import {IDatePickerProperties} from '../../Interfaces/IDatePicker.Properties';
//
// export class DatePicker {
//
//     private htmlMonthYearLabel;
//     private htmlTextInput;
//     private htmlElement;
//     private htmlButtonInput;
//     private htmlNextMonthButton;
//     private htmlPreviousMonthButton;
//     private htmlDatePicker;
//     private daysTableCollection;
//     private debouncedParseAndAddToOutput: any;
//
//     private inputTxtClass: string;
//     private inputsRowClass: string;
//     private inputBtnClass: string;
//     private monthSelectionClass: string;
//     private buttonPreviousClass: string;
//     private buttonNextClass: string;
//     private monthDisplayClass: string;
//     private dayLabelClass: string;
//     private dayClass: string;
//     private dayTableClass: string;
//     private datePickerDivClass: string;
//     private todayClass: string;
//     private selectedDayClass: string;
//
//     constructor(properties: IDatePickerProperties, public date: DateExtended) {
//         this.setProperties(properties);
//         this.createHTMLElements(properties);
//         this.setHTMLElementsAndCollections();
//         this.fillDayLabels();
//         this.fillDays();
//         this.fillMonthYearLabel();
//         this.debouncedParseAndAddToOutput = utils.debounce<string>((value) => {
//             if (this.changeValue('txtDate', value)) {
//                 this.fillMonthYearLabel();
//                 this.fillDays();
//             }
//         }, 1200);
//
//         this.htmlButtonInput.addEventListener('click', () => {
//             animationsUtils.slideToggle(this.htmlDatePicker, 150, 'ease-in');
//         });
//         this.htmlNextMonthButton.addEventListener('click', () => {
//             this.nextMonth();
//         });
//         this.htmlPreviousMonthButton.addEventListener('click', () => {
//             this.previousMonth();
//         });
//         this.htmlTextInput.addEventListener('input', () => {
//             this.debouncedParseAndAddToOutput(this.htmlTextInput.value);
//         });
//     }
//
//     public changeValue(operation: string, value: any = null) {
//         switch (operation) {
//             case 'nextMonth' : {
//                 this.date.addMonth();
//                 return;
//             }
//             case 'previousMonth': {
//                 this.date.subtractMonth();
//                 return;
//             }
//             case 'txtDate' : {
//                 if (value && (typeof(value) === 'string')) {
//                     return this.date.setDateFromString(value);
//                 }
//             }
//             case 'day': {
//                 if (value && (typeof(value) === 'number')) {
//                     this.date.setDay(value);
//                     return;
//                 }
//
//             }
//         }
//     }
//
//     private nextMonth() {
//         this.changeValue('nextMonth');
//         this.fillMonthYearLabel();
//         this.fillDays();
//         this.htmlTextInput.value = this.date.dateToStr();
//     }
//
//     private previousMonth() {
//         this.changeValue('previousMonth');
//         this.fillMonthYearLabel();
//         this.fillDays();
//         this.htmlTextInput.value = this.date.dateToStr();
//     }
//
//     private fillMonthYearLabel() {
//         this.htmlMonthYearLabel.textContent = this.date.getMonthYearString();
//     }
//
//     private setProperties(properties: IDatePickerProperties) {
//         this.inputsRowClass = properties.inputsRowClass || 'inputs';
//         this.inputTxtClass = properties.txtInputClass || 'input-txt';
//         this.inputBtnClass = properties.btnInputClass || 'input-btn';
//         this.monthSelectionClass = properties.monthSelectionClass || 'month-selection';
//         this.buttonPreviousClass = properties.prevBtnClass || 'prev-btn';
//         this.buttonNextClass = properties.nextBtnClass || 'next-btn';
//         this.monthDisplayClass = properties.monthYearLabelClass || 'month-display';
//         this.dayLabelClass = properties.dayLabelClass || 'cell-header';
//         this.dayClass = properties.dayClass || 'cell-day';
//         this.dayTableClass = properties.dayTableClass || 'days-table';
//         this.datePickerDivClass = properties.datePickerDivClass || 'date-picker';
//         this.todayClass = properties.todayClass || 'today-date';
//         this.selectedDayClass = properties.selectedDayClass || 'current-date';
//     }
//
//     private setHTMLElementsAndCollections() {
//         const selectorDaysCellsTable = `.${this.datePickerDivClass} .${this.dayTableClass}` +
//             ` .${this.dayClass}`;
//         this.daysTableCollection = Array.from(this.htmlElement.querySelectorAll(selectorDaysCellsTable));
//         const selectorDatePicker = `.${this.datePickerDivClass}`;
//         this.htmlDatePicker = this.htmlElement.querySelector(selectorDatePicker);
//         const selectorMonthYearLabel = `.${this.datePickerDivClass} .${this.monthDisplayClass}`;
//         this.htmlMonthYearLabel = this.htmlElement.querySelector(selectorMonthYearLabel);
//         const selectorPrevMonthBtn = `.${this.datePickerDivClass} .${this.buttonPreviousClass}`;
//         this.htmlPreviousMonthButton = this.htmlElement.querySelector(selectorPrevMonthBtn);
//         const selectorNextMonthBtn = `.${this.datePickerDivClass} .${this.buttonNextClass}`;
//         this.htmlNextMonthButton = this.htmlElement.querySelector(selectorNextMonthBtn);
//         const selectorTextInput = `.${this.inputsRowClass} .${this.inputTxtClass}`;
//         this.htmlTextInput = this.htmlElement.querySelector(selectorTextInput);
//         const selectorInputButton = `.${this.inputsRowClass} .${this.inputBtnClass}`;
//         this.htmlButtonInput = this.htmlElement.querySelector(selectorInputButton);
//     }
//
//     private fillDayLabels() {
//         const selectorLabelCellsStr = `.${this.datePickerDivClass} .${this.dayTableClass}` +
//             ` .${this.dayLabelClass}`;
//         const daysLabelsTable = <[HTMLElement]> Array.from(this.htmlElement.querySelectorAll(selectorLabelCellsStr));
//         if (this.date.daysLabels.length === daysLabelsTable.length) {
//             daysLabelsTable.map((elem, i) => {
//                 elem.textContent = this.date.daysLabels[i];
//             });
//         }
//     }
//
//     private fillElementWithValues(i, elem) {
//         elem.textContent = i + '';
//         this.addDayEventHandler(i, elem);
//     }
//
//     private fillElementWithEmptyValues(elem) {
//         elem.textContent = '\xa0';
//         elem.setAttribute('disabled', '');
//         elem.classList.add('disabled');
//     }
//
//     private fillDays() {
//         const first = this.date.firstDayWeekOfMonth();
//         const last = this.date.lastDayOfMonth() + first;
//         let i = 1;
//         this.daysTableCollection.map((elem, index) => {
//             this.removeDayClasses(elem);
//             if ((index >= first) && (index < last)) {
//                 this.fillElementWithValues(i, elem);
//                 this.setTodayAndSelectedDayClass(i, elem);
//                 i = i + 1;
//             } else {
//                 this.fillElementWithEmptyValues(elem);
//             }
//         });
//     }
//
//     private removeDayClasses(elem) {
//         elem.classList.remove(this.todayClass);
//         elem.classList.remove(this.selectedDayClass);
//     }
//
//     private setTodayAndSelectedDayClass(i, elem) {
//         if (this.date.isToday(i)) {
//             elem.classList.add(this.todayClass);
//         }
//         if (this.date.isSelectedDay(i)) {
//             elem.classList.add(this.selectedDayClass);
//         }
//     }
//
//     private addDayEventHandler(i, elem) {
//         elem.addEventListener('click', () => {
//             this.daysTableCollection[this.date.getDay() +
//             this.date.firstDayWeekOfMonth() - 1].classList.remove(this.selectedDayClass);
//             this.changeValue('day', i);
//             this.htmlTextInput.value = this.date.dateToStr();
//             this.daysTableCollection[this.date.getDay() +
//             this.date.firstDayWeekOfMonth() - 1].classList.add(this.selectedDayClass);
//         });
//     }
//
//     private createHTMLElements(properties: IDatePickerProperties) {
//         this.htmlElement = document.querySelector(properties.querySelectorString);
//         if (this.htmlElement) {
//             this.htmlElement.classList.add(properties.elementClass);
//             const inputsRow = this.createInputsRow();
//             this.htmlElement.appendChild(inputsRow);
//             const datePickerDiv = this.createDatePickerElem(properties);
//             this.htmlElement.appendChild(datePickerDiv);
//         }
//     }
//
//     private createInputsRow() {
//         const inputsDiv = document.createElement('div');
//         inputsDiv.classList.add(this.inputsRowClass);
//         const innerHTML = `
//             <input class="${this.inputTxtClass}" type="text">
//             <button class="${this.inputBtnClass}"></button>`;
//         inputsDiv.innerHTML = innerHTML.trim();
//         return inputsDiv;
//     }
//
//     private createDatePickerElem(properties: IDatePickerProperties) {
//         const dateDiv = document.createElement('div');
//         dateDiv.classList.add(this.datePickerDivClass);
//         dateDiv.appendChild(this.createMonthSelectionElement());
//         dateDiv.appendChild(this.createDaysTable());
//         return dateDiv;
//     }
//
//     private createMonthSelectionElement() {
//         const monthsSelectionDiv = document.createElement('div');
//         const innerHTML = `<button class="${this.buttonPreviousClass}"></button>
//         <span class="${this.monthDisplayClass}"></span>
//         <button class="${this.buttonNextClass}"></button>`;
//         monthsSelectionDiv.classList.add(this.monthSelectionClass);
//         monthsSelectionDiv.innerHTML = innerHTML.trim();
//         return monthsSelectionDiv;
//     }
//
//     private createDaysTable() {
//         const daysTable = document.createElement('table');
//         daysTable.appendChild(this.createDaysLabels());
//         daysTable.appendChild(this.createDays());
//         daysTable.classList.add(this.dayTableClass);
//         return daysTable;
//     }
//
//     private createDays() {
//         const daysTable = document.createElement('tbody');
//         for (let i = 0; i <= 5; i++) {
//             const row = document.createElement('tr');
//             for (let j = 0; j <= 6; j++) {
//                 const cell = document.createElement('td');
//                 cell.classList.add(this.dayClass);
//                 row.appendChild(cell);
//             }
//             daysTable.appendChild(row);
//         }
//         return daysTable;
//     }
//
//     private createDaysLabels() {
//         const tHeader = document.createElement('thead');
//         const tRow = document.createElement('tr');
//         for (let i = 0; i <= 6; i++) {
//             const td = document.createElement('td');
//             td.classList.add(this.dayLabelClass);
//             tRow.appendChild(td);
//         }
//         tHeader.appendChild(tRow);
//         return tHeader;
//     }
// }
