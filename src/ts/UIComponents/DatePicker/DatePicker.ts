import {DateExtended} from './DateExtended';
import {animationsUtils} from './../../Utils/Animation.Utilities';
import * as utils from './../../Utils/Utilities';
import {IDatePickerProperties} from '../../Interfaces/IDatePicker.Properties';

export class DatePicker {
    private htmlElement; // = document.querySelector('.input-date-picker');
    // private txtInput;    // = <HTMLInputElement> this.htmlElement.querySelector('.input-txt');
    // private btnInput;    //= this.htmlElement.querySelector('.input-btn');
    // private nextBtn;     // = this.htmlElement.querySelector('.right-btn');
    // private prevBtn;     // = this.htmlElement.querySelector('.left-btn');
    // private monthYearLabel; // = this.htmlElement.querySelector('.month-display');
    // private daysOuterElement; // = this.htmlElement.querySelector('.date-display tbody');
    // private datePicker; // = this.htmlElement.querySelector('.date-picker');
    // private todayClass; // = 'current-day';
    // private selectedDayClass; // = 'selected-day';
    // private daysTable;
    // private debouncedParseAndAddToOutput: any;
    private inputTxtClass: string;
    private inputsRowClass: string;
    private inputBtnClass: string;
    private monthSelectionClass: string;
    private buttonPreviousClass: string;
    private buttonNextClass: string;
    private monthDisplayClass: string;
    private dayLabelClass: string;
    private dayClass: string;
    private dayTableClass: string;
    private datePickerDivClass: string;

    constructor(private date: DateExtended, properties: IDatePickerProperties) {
        this.setProperties(properties);
        this.createHTMLElements(properties);
        // this.debouncedParseAndAddToOutput = utils.debounce<string>((value) => {
        //     if (this.date.setDateFromString(value)) {
        //         this.fillMonthYearLabel();
        //         this.fillDays();
        //     }
        // }, 1200);
        //
        // this.btnInput.addEventListener('click', () => {
        //     animationsUtils.slideToggle(this.datePicker, 150, 'ease-in');
        // });
        //
        // this.nextBtn.addEventListener('click', () => {
        //     this.nextMonth();
        // });
        //
        // this.prevBtn.addEventListener('click', () => {
        //     this.previousMonth();
        // });
        //
        // this.txtInput.addEventListener('input', () => {
        //     this.debouncedParseAndAddToOutput(this.txtInput.value);
        // });
    }

    private setProperties(properties: IDatePickerProperties) {
        this.inputsRowClass = properties.inputsRowClass || 'inputs';
        this.inputTxtClass = properties.txtInputClass || 'input-txt';
        this.inputBtnClass = properties.btnInputClass || 'input-btn';
        this.monthSelectionClass = properties.monthSelectionClass || 'month-selection';
        this.buttonPreviousClass = properties.prevBtnClass || 'prev-btn';
        this.buttonNextClass = properties.nextBtnClass || 'next-btn';
        this.monthDisplayClass = properties.monthYearLabelClass || 'month-display';
        this.dayLabelClass = properties.dayLabelClass || 'cell-header';
        this.dayClass = properties.dayClass || 'cell-day';
        this.dayTableClass = properties.dayTableClass || 'days-table';
        this.datePickerDivClass = properties.datePickerDivClass || 'date-picker';
    }

    private fillDayLabels() {
        const selectorLabelCellsStr = `.${this.datePickerDivClass} .${this.dayTableClass}` +
            ` .${this.dayLabelClass}`;
        const daysLabelsTable = <[HTMLElement]> Array.from(this.htmlElement.querySelectorAll(selectorLabelCellsStr));
        if (this.date.daysLabels.length === daysLabelsTable.length) {
            daysLabelsTable.map((elem, i) => {
                elem.textContent = this.date.daysLabels[i];
            });
        }
    }

    private fillElementWithValues(i, elem) {
        elem.textContent = i + '';
        this.addDayEventHandler(i, elem);
        //this.setTodayAndSelectedClass(i, elem);
    }

    private fillElementWithEmptyValues(elem) {
        elem.textContent = '\xa0';
        elem.setAttribute('disabled', '');
        elem.classList.add('disabled');
    }

    private fillDays() {
        const first = this.date.firstDayWeekOfMonth();
        const last = this.date.lastDayOfMonth() + first;
        let i = 1;
        const selectorDaysCellsStr = `.${this.datePickerDivClass} .${this.dayTableClass}` +
            ` .${this.dayClass}`;
        const daysTable = Array.from(this.htmlElement.querySelectorAll(selectorDaysCellsStr));
        daysTable.map((elem, index) => {
            if ((index >= first) && (index < last)) {
                this.fillElementWithValues(i, elem);
                i = i + 1;
            } else {
                this.fillElementWithEmptyValues(elem);
            }
        });
    }

    private addDayEventHandler(i, elem) {
        elem.addEventListener('click', () => {
            console.log(i);
            //this.daysTable[this.date.getDay() +
            //this.date.firstDayWeekOfMonth() - 1].classList.remove(this.selectedDayClass);
            this.date.setDay(i);
            //this.txtInput.value = this.date.dateToStr();
            //this.daysTable[this.date.getDay() +
            //this.date.firstDayWeekOfMonth() - 1].classList.add(this.selectedDayClass);
        });
    }

    private createHTMLElements(properties: IDatePickerProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(properties.elementClass);
            const inputsRow = this.createInputsRow();
            this.htmlElement.appendChild(inputsRow);
            const datePickerDiv = this.createDatePickerElem(properties);
            this.htmlElement.appendChild(datePickerDiv);
            this.fillDays();
            this.fillDayLabels();
        }
    }

    private createInputsRow() {
        const inputsDiv = document.createElement('div');
        inputsDiv.classList.add(this.inputsRowClass);
        const innerHTML = `
            <input class="${this.inputTxtClass}" type="text">
            <button class="${this.inputBtnClass}"></button>`;
        inputsDiv.innerHTML = innerHTML.trim();
        return inputsDiv;
    }

    private createDatePickerElem(properties: IDatePickerProperties) {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add(this.datePickerDivClass);
        dateDiv.appendChild(this.createMonthSelectionElement());
        dateDiv.appendChild(this.createDaysTable());
        return dateDiv;
    }

    private setHTMLElements() {
        console.log('set properties');
    }

    private createMonthSelectionElement() {
        const monthsSelectionDiv = document.createElement('div');
        const innerHTML = `<button class="${this.buttonPreviousClass}"></button>
        <span class="${this.monthDisplayClass}"></span>
        <button class="${this.buttonNextClass}"></button>`;
        monthsSelectionDiv.classList.add(this.monthSelectionClass);
        monthsSelectionDiv.innerHTML = innerHTML.trim();
        return monthsSelectionDiv;
    }

    private createDaysTable() {
        const daysTable = document.createElement('table');
        daysTable.appendChild(this.createDaysLabels());
        daysTable.appendChild(this.createDays());
        daysTable.classList.add(this.dayTableClass);
        return daysTable;
    }

    private createDays() {
        const daysTable = document.createElement('tbody');
        for (let i = 0; i <= 5; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j <= 6; j++) {
                const cell = document.createElement('td');
                cell.classList.add(this.dayClass);
                row.appendChild(cell);
            }
            daysTable.appendChild(row);
        }
        return daysTable;
    }

    private createDaysLabels() {
        const tHeader = document.createElement('thead');
        const tRow = document.createElement('tr');
        for (let i = 0; i <= 6; i++) {
            const td = document.createElement('td');
            td.classList.add(this.dayLabelClass);
            tRow.appendChild(td);
        }
        tHeader.appendChild(tRow);
        return tHeader;
    }

    private setTodayAndSelectedClass(i, elem) {
        // if (this.date.isToday(i)) {
        //     elem.classList.add(this.selectedDayClass);
        //     if (this.date.isThisMonthYear()) {
        //         elem.classList.add(this.todayClass);
        //     }
        // }
    }

    // private nextMonth() {
    //     this.date.addMonth();
    //     this.fillMonthYearLabel();
    //     //this.fillDays();
    //     this.txtInput.value = this.date.dateToStr();
    // }
    //
    // private previousMonth() {
    //     this.date.subtractMonth();
    //     this.fillMonthYearLabel();
    //     //this.fillDays();
    //     this.txtInput.value = this.date.dateToStr();
    // }
    //
    // private fillMonthYearLabel() {
    //     // this.monthYearLabel.textContent = this.date.getMonthYearString();
    // }
}

// this.txtInput = <HTMLInputElement> this.htmlElement.querySelector('.input-txt');
// this.btnInput = this.htmlElement.querySelector('.input-btn');
// this.nextBtn = this.htmlElement.querySelector('.right-btn');
// this.prevBtn = this.htmlElement.querySelector('.left-btn');
// this.monthYearLabel = this.htmlElement.querySelector('.month-display');
// this.dayLabels = Array.from(this.htmlElement.querySelectorAll('.date-display thead td'));
// this.daysOuterElement = this.htmlElement.querySelector('.date-display tbody');
// this.datePicker = this.htmlElement.querySelector('.date-picker');
// querySelectorString: string;
// elementClass: string;
// inputsRowClass?: string;
// comboBoxClass?: string;
// txtInputClass?: string;
// btnInputClass?: string;
// listClass?: string;
// prevBtnClass?: string;
// nextBtnClass?: string;
// dayLabelsSelector?: string;
// monthYearLabelClass?: string;
// todayClass: string;
// selectedDayClass: string;
// private txtInput;    // = <HTMLInputElement> this.htmlElement.querySelector('.input-txt');
// private btnInput;    //= this.htmlElement.querySelector('.input-btn');
// private nextBtn;     // = this.htmlElement.querySelector('.right-btn');
// private prevBtn;     // = this.htmlElement.querySelector('.left-btn');
// private monthYearLabel; // = this.htmlElement.querySelector('.month-display');
// private dayLabels;      // = Array.from(this.htmlElement.querySelectorAll('.date-display thead td'));
// private daysOuterElement; // = this.htmlElement.querySelector('.date-display tbody');
// private datePicker; // = this.htmlElement.querySelector('.date-picker');
// private todayClass; // = 'current-day';
// private selectedDayClass; // = 'selected-day';
