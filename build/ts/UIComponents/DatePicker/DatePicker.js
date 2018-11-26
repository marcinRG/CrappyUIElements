"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation_Utilities_1 = require("./../../Utils/Animation.Utilities");
var utils = require("./../../Utils/Utilities");
var DatePicker = (function () {
    function DatePicker(properties, date) {
        var _this = this;
        this.date = date;
        this.setProperties(properties);
        this.createHTMLElements(properties);
        this.setHTMLElementsAndCollections();
        this.fillDayLabels();
        this.fillDays();
        this.fillMonthYearLabel();
        this.debouncedParseAndAddToOutput = utils.debounce(function (value) {
            if (_this.changeValue('txtDate', value)) {
                _this.fillMonthYearLabel();
                _this.fillDays();
            }
        }, 1200);
        this.htmlButtonInput.addEventListener('click', function () {
            Animation_Utilities_1.animationsUtils.slideToggle(_this.htmlDatePicker, 150, 'ease-in');
        });
        this.htmlNextMonthButton.addEventListener('click', function () {
            _this.nextMonth();
        });
        this.htmlPreviousMonthButton.addEventListener('click', function () {
            _this.previousMonth();
        });
        this.htmlTextInput.addEventListener('input', function () {
            _this.debouncedParseAndAddToOutput(_this.htmlTextInput.value);
        });
    }
    DatePicker.prototype.changeValue = function (operation, value) {
        if (value === void 0) { value = null; }
        switch (operation) {
            case 'nextMonth': {
                this.date.addMonth();
                return;
            }
            case 'previousMonth': {
                this.date.subtractMonth();
                return;
            }
            case 'txtDate': {
                if (value && (typeof (value) === 'string')) {
                    return this.date.setDateFromString(value);
                }
            }
            case 'day': {
                if (value && (typeof (value) === 'number')) {
                    this.date.setDay(value);
                    return;
                }
            }
        }
    };
    DatePicker.prototype.nextMonth = function () {
        this.changeValue('nextMonth');
        this.fillMonthYearLabel();
        this.fillDays();
        this.htmlTextInput.value = this.date.dateToStr();
    };
    DatePicker.prototype.previousMonth = function () {
        this.changeValue('previousMonth');
        this.fillMonthYearLabel();
        this.fillDays();
        this.htmlTextInput.value = this.date.dateToStr();
    };
    DatePicker.prototype.fillMonthYearLabel = function () {
        this.htmlMonthYearLabel.textContent = this.date.getMonthYearString();
    };
    DatePicker.prototype.setProperties = function (properties) {
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
        this.todayClass = properties.todayClass || 'today-date';
        this.selectedDayClass = properties.selectedDayClass || 'current-date';
    };
    DatePicker.prototype.setHTMLElementsAndCollections = function () {
        var selectorDaysCellsTable = "." + this.datePickerDivClass + " ." + this.dayTableClass +
            (" ." + this.dayClass);
        this.daysTableCollection = Array.from(this.htmlElement.querySelectorAll(selectorDaysCellsTable));
        var selectorDatePicker = "." + this.datePickerDivClass;
        this.htmlDatePicker = this.htmlElement.querySelector(selectorDatePicker);
        var selectorMonthYearLabel = "." + this.datePickerDivClass + " ." + this.monthDisplayClass;
        this.htmlMonthYearLabel = this.htmlElement.querySelector(selectorMonthYearLabel);
        var selectorPrevMonthBtn = "." + this.datePickerDivClass + " ." + this.buttonPreviousClass;
        this.htmlPreviousMonthButton = this.htmlElement.querySelector(selectorPrevMonthBtn);
        var selectorNextMonthBtn = "." + this.datePickerDivClass + " ." + this.buttonNextClass;
        this.htmlNextMonthButton = this.htmlElement.querySelector(selectorNextMonthBtn);
        var selectorTextInput = "." + this.inputsRowClass + " ." + this.inputTxtClass;
        this.htmlTextInput = this.htmlElement.querySelector(selectorTextInput);
        var selectorInputButton = "." + this.inputsRowClass + " ." + this.inputBtnClass;
        this.htmlButtonInput = this.htmlElement.querySelector(selectorInputButton);
    };
    DatePicker.prototype.fillDayLabels = function () {
        var _this = this;
        var selectorLabelCellsStr = "." + this.datePickerDivClass + " ." + this.dayTableClass +
            (" ." + this.dayLabelClass);
        var daysLabelsTable = Array.from(this.htmlElement.querySelectorAll(selectorLabelCellsStr));
        if (this.date.daysLabels.length === daysLabelsTable.length) {
            daysLabelsTable.map(function (elem, i) {
                elem.textContent = _this.date.daysLabels[i];
            });
        }
    };
    DatePicker.prototype.fillElementWithValues = function (i, elem) {
        elem.textContent = i + '';
        this.addDayEventHandler(i, elem);
    };
    DatePicker.prototype.fillElementWithEmptyValues = function (elem) {
        elem.textContent = '\xa0';
        elem.setAttribute('disabled', '');
        elem.classList.add('disabled');
    };
    DatePicker.prototype.fillDays = function () {
        var _this = this;
        var first = this.date.firstDayWeekOfMonth();
        var last = this.date.lastDayOfMonth() + first;
        var i = 1;
        this.daysTableCollection.map(function (elem, index) {
            _this.removeDayClasses(elem);
            if ((index >= first) && (index < last)) {
                _this.fillElementWithValues(i, elem);
                _this.setTodayAndSelectedDayClass(i, elem);
                i = i + 1;
            }
            else {
                _this.fillElementWithEmptyValues(elem);
            }
        });
    };
    DatePicker.prototype.removeDayClasses = function (elem) {
        elem.classList.remove(this.todayClass);
        elem.classList.remove(this.selectedDayClass);
    };
    DatePicker.prototype.setTodayAndSelectedDayClass = function (i, elem) {
        if (this.date.isToday(i)) {
            elem.classList.add(this.todayClass);
        }
        if (this.date.isSelectedDay(i)) {
            elem.classList.add(this.selectedDayClass);
        }
    };
    DatePicker.prototype.addDayEventHandler = function (i, elem) {
        var _this = this;
        elem.addEventListener('click', function () {
            _this.daysTableCollection[_this.date.getDay() +
                _this.date.firstDayWeekOfMonth() - 1].classList.remove(_this.selectedDayClass);
            _this.changeValue('day', i);
            _this.htmlTextInput.value = _this.date.dateToStr();
            _this.daysTableCollection[_this.date.getDay() +
                _this.date.firstDayWeekOfMonth() - 1].classList.add(_this.selectedDayClass);
        });
    };
    DatePicker.prototype.createHTMLElements = function (properties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.htmlElement.classList.add(properties.elementClass);
            var inputsRow = this.createInputsRow();
            this.htmlElement.appendChild(inputsRow);
            var datePickerDiv = this.createDatePickerElem(properties);
            this.htmlElement.appendChild(datePickerDiv);
        }
    };
    DatePicker.prototype.createInputsRow = function () {
        var inputsDiv = document.createElement('div');
        inputsDiv.classList.add(this.inputsRowClass);
        var innerHTML = "\n            <input class=\"" + this.inputTxtClass + "\" type=\"text\">\n            <button class=\"" + this.inputBtnClass + "\"></button>";
        inputsDiv.innerHTML = innerHTML.trim();
        return inputsDiv;
    };
    DatePicker.prototype.createDatePickerElem = function (properties) {
        var dateDiv = document.createElement('div');
        dateDiv.classList.add(this.datePickerDivClass);
        dateDiv.appendChild(this.createMonthSelectionElement());
        dateDiv.appendChild(this.createDaysTable());
        return dateDiv;
    };
    DatePicker.prototype.createMonthSelectionElement = function () {
        var monthsSelectionDiv = document.createElement('div');
        var innerHTML = "<button class=\"" + this.buttonPreviousClass + "\"></button>\n        <span class=\"" + this.monthDisplayClass + "\"></span>\n        <button class=\"" + this.buttonNextClass + "\"></button>";
        monthsSelectionDiv.classList.add(this.monthSelectionClass);
        monthsSelectionDiv.innerHTML = innerHTML.trim();
        return monthsSelectionDiv;
    };
    DatePicker.prototype.createDaysTable = function () {
        var daysTable = document.createElement('table');
        daysTable.appendChild(this.createDaysLabels());
        daysTable.appendChild(this.createDays());
        daysTable.classList.add(this.dayTableClass);
        return daysTable;
    };
    DatePicker.prototype.createDays = function () {
        var daysTable = document.createElement('tbody');
        for (var i = 0; i <= 5; i++) {
            var row = document.createElement('tr');
            for (var j = 0; j <= 6; j++) {
                var cell = document.createElement('td');
                cell.classList.add(this.dayClass);
                row.appendChild(cell);
            }
            daysTable.appendChild(row);
        }
        return daysTable;
    };
    DatePicker.prototype.createDaysLabels = function () {
        var tHeader = document.createElement('thead');
        var tRow = document.createElement('tr');
        for (var i = 0; i <= 6; i++) {
            var td = document.createElement('td');
            td.classList.add(this.dayLabelClass);
            tRow.appendChild(td);
        }
        tHeader.appendChild(tRow);
        return tHeader;
    };
    return DatePicker;
}());
exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map