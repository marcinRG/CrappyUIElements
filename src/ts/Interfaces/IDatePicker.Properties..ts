export interface IDatePickerProperties {
    querySelectorString: string;
    elementClass: string;
    inputsRowClass?: string;
    comboBoxClass?: string;
    txtInputClass?: string;
    btnInputClass?: string;
    listClass?: string;
    prevBtnClass?: string;
    nextBtnClass?: string;
    dayLabelsSelector?: string;
    monthYearLabelClass?: string;

    // private txtInput = <HTMLInputElement> this.htmlElement.querySelector('.input-txt');
    // private btnInput = this.htmlElement.querySelector('.input-btn');
    // private nextBtn = this.htmlElement.querySelector('.right-btn');
    // private prevBtn = this.htmlElement.querySelector('.left-btn');
    // private monthYearLabel = this.htmlElement.querySelector('.month-display');
    // private dayLabels = Array.from(this.htmlElement.querySelectorAll('.date-display thead td'));
    // private daysOuterElement = this.htmlElement.querySelector('.date-display tbody');
    // private datePicker = this.htmlElement.querySelector('.date-picker');

    todayClass: string;
    selectedDayClass: string;
}