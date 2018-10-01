import {DateExtended} from './DateExtended';
import {animationsUtils} from './../../Utils/Animation.Utilities';
import * as utils from './../../Utils/Utilities';
import {IDatePickerProperties} from '../../Interfaces/IDatePicker.Properties.';

export class DatePicker {
    private htmlElement; // = document.querySelector('.input-date-picker');
    private txtInput;    // = <HTMLInputElement> this.htmlElement.querySelector('.input-txt');
    private btnInput;    //= this.htmlElement.querySelector('.input-btn');
    private nextBtn;     // = this.htmlElement.querySelector('.right-btn');
    private prevBtn;     // = this.htmlElement.querySelector('.left-btn');
    private monthYearLabel; // = this.htmlElement.querySelector('.month-display');
    private dayLabels;      // = Array.from(this.htmlElement.querySelectorAll('.date-display thead td'));
    private daysOuterElement; // = this.htmlElement.querySelector('.date-display tbody');
    private datePicker; // = this.htmlElement.querySelector('.date-picker');
    private todayClass; // = 'current-day';
    private selectedDayClass; // = 'selected-day';
    private daysTable;
    private debouncedParseAndAddToOutput: any;

    constructor(private date: DateExtended, properties: IDatePickerProperties) {
        this.setProperties(properties);
        // this.fillDayLabels();
        // this.fillMonthYearLabel();
        // this.fillDays();
        //
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

    private nextMonth() {
        this.date.addMonth();
        this.fillMonthYearLabel();
        this.fillDays();
        this.txtInput.value = this.date.dateToStr();
    }

    private previousMonth() {
        this.date.subtractMonth();
        this.fillMonthYearLabel();
        this.fillDays();
        this.txtInput.value = this.date.dateToStr();
    }

    private fillMonthYearLabel() {
        this.monthYearLabel.textContent = this.date.getMonthYearString();
    }

    private fillDayLabels() {
        if (this.date.daysLabels.length === this.dayLabels.length) {
            this.dayLabels.map((elem, i) => {
                elem.textContent = this.date.daysLabels[i];
            });
        }
    }

    private createDaysTable() {
        this.daysOuterElement.innerHTML = null;
        for (let i = 0; i <= 5; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j <= 6; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            this.daysOuterElement.appendChild(row);
        }
        this.daysTable = Array.from(this.daysOuterElement.querySelectorAll('td'));
    }

    private fillDays() {
        const first = this.date.firstDayWeekOfMonth();
        const last = this.date.lastDayOfMonth() + first;
        let i = 1;
        this.createDaysTable();
        this.daysTable.map((elem, index) => {
            if ((index >= first) && (index < last)) {
                this.fillElementWithValues(i, elem);
                i = i + 1;
            } else {
                this.fillElementWithEmptyValues(elem);
            }
        });
    }

    private fillElementWithValues(i, elem) {
        elem.textContent = i + '';
        this.addDayEventHandler(i, elem);
        this.setTodayAndSelectedClass(i, elem);
    }

    private fillElementWithEmptyValues(elem) {
        elem.textContent = '\xa0';
        elem.setAttribute('disabled', '');
        elem.classList.add('disabled');
    }

    private setTodayAndSelectedClass(i, elem) {
        if (this.date.isToday(i)) {
            elem.classList.add(this.selectedDayClass);
            if (this.date.isThisMonthYear()) {
                elem.classList.add(this.todayClass);
            }
        }
    }

    private addDayEventHandler(i, elem) {
        elem.addEventListener('click', () => {
            this.daysTable[this.date.getDay() +
            this.date.firstDayWeekOfMonth() - 1].classList.remove(this.selectedDayClass);
            this.date.setDay(i);
            this.txtInput.value = this.date.dateToStr();
            this.daysTable[this.date.getDay() +
            this.date.firstDayWeekOfMonth() - 1].classList.add(this.selectedDayClass);
        });
    }

    private setProperties(properties: IDatePickerProperties) {
        console.log('setting properties');
        this.htmlElement = document.querySelector(properties.querySelectorString);
        console.log(this.htmlElement);
        if (this.htmlElement) {
            this.htmlElement.classList.add(properties.elementClass);
            const inputsRow = this.createInputsRow(properties);
            this.htmlElement.append(inputsRow);
            const monthSelectionDiv = this.createMonthSelectionElement(properties);
            this.htmlElement.append(monthSelectionDiv);
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
    }

    private createInputsRow(properties: IDatePickerProperties) {
        const inputsDiv = document.createElement('div');
        const inputsRowClass = properties.inputsRowClass || 'inputs';
        const inputTxtClass = properties.txtInputClass || 'input-txt';
        const inputBtnClass = properties.btnInputClass || 'input-btn';
        inputsDiv.classList.add(inputsRowClass);
        const innerHTML = `
            <input class="${inputTxtClass}" type="text">
            <button class="${inputBtnClass}"></button>`;
        inputsDiv.innerHTML = innerHTML.trim();
        return inputsDiv;
    }

    private createMonthSelectionElement(properties: IDatePickerProperties) {
        const monthsSelectionDiv = document.createElement('div');
        const monthSelectionClass = properties.monthSelectionClass || 'month-selection';
        const buttonPreviousClass = properties.prevBtnClass || 'a';
        const buttonNextClass = properties.nextBtnClass || 'b';
        const monthDisplayClass = properties.monthYearLabelClass || 'c';
        const innerHTML = `<button class="${buttonPreviousClass}"></button>
        <span class="${monthDisplayClass}">XXXX</span>
        <button class="${buttonNextClass}"></button>`;
        monthsSelectionDiv.classList.add(monthSelectionClass);
        monthsSelectionDiv.innerHTML = innerHTML.trim();
        return monthsSelectionDiv;
    }

    private createDaysDisplay(properties: IDatePickerProperties) {
        console.log('rows');
        const dateHTML = ``;
    }
}
