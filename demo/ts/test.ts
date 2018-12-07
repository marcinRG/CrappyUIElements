// /*
// import {Observer} from 'rxjs/Observer';
// import {RxDatePicker} from '../../src/RxUIComponents/DatePicker/RxDatePicker';
// import {RxListWithCheckBoxes} from '../../src/RxUIComponents/List/RxListWithCheckBoxes';
// import {RxSpinner} from '../../src/RxUIComponents/Spinner/RxSpinner';
// import {Slider} from '../../src/UIComponents/Slider/Slider';
// import {ComboBox} from '../../src/UIComponents/ComboBoxes/ComboBox/ComboBox';
// import {Spinner} from '../../src/UIComponents/Spinner/Spinner';
// import {MinMaxValue} from '../../src/Models/MinMaxValue';
// import {PlainTextArrayWithFilter} from '../../src/Models/PlainTextArrayWithFilter';
// import {IterableNumbers} from '../../src/Models/IterableNumbers';
// import {IterableTextArray} from '../../src/Models/IterableTextArray';
// import {ListWithCheckboxes} from '../../src/UIComponents/List/ListWithCheckboxes';
// import {DynamicComboBox} from '../../src/UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
// import {RxComboBox} from '../../src/RxUIComponents/ComboBoxes/RxComboBox';
// import {PlainTextArrayWithSelectedValues} from '../../src/Models/PlainTextArrayWithSelectedValues';
// import {RxSlider} from '../../src/RxUIComponents/Slider/RxSlider';
// import {DateExtended} from '../../src/Models/DateExtended';
// import {RxDirectionsRadioBtnsGroup} from '../../src/RxUIComponents/Misc/RxDirectionsRadioBtnsGroup';
// import {DatePicker} from '../../src/UIComponents/DatePicker/DatePicker';
// import {DirectionsRadioBtnsGroup} from '../../src/UIComponents/Misc/DirectionsRadioBtnsGroup';
// */
//
//
// // class MyObserver implements Observer<any> {
// //     public next(value: any) {
// //         console.log('observer ok');
// //         console.log(value);
// //     }
// //
// //     public error(err: any) {
// //         console.log('error ocurred' + err);
// //     }
// //
// //     public complete() {
// //         console.log('completed');
// //     }
// // }
//
// //comboBox
//
// import {ComboBox} from '../../src/UIComponents/ComboBoxes/ComboBox/ComboBox';
// import {DynamicComboBox} from '../../src/UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
// import {PlainTextArrayWithFilterSingleSelection} from '../../src/Models/PlainTextArrayWithFilterSingleSelection';
//
//
// const list11 = [
//     'element 1',
//     'element 2',
//     'element 3',
//     'element 4',
//     'element 5',
//     'element 6',
//     'element 7',
//     'element 8',
//     'element 9',
//     'element 10',
//     'element 11',
// ];
// const txtArray11 = new PlainTextArrayWithFilterSingleSelection(list11, 'element 1');
// const comboBox = new ComboBox({
//     elementClass: 'combo-box-cuie',
//     querySelectorString: '.combo-box-1',
//     listElementClass: 'li-elem',
//     maxSize: 5,
// }, txtArray11);
//
// //comboBox with autocomplete
// const list12 = [
//     'lorem 1',
//     'ipsum 2',
//     'dolor sit amet',
//     'consectetur adipisicing',
//     'lement 5',
//     'loement 6',
//     'element 7',
//     'element 8',
//     'dlement 9',
//     'dlement 10',
//     'element 11',
// ];
// const txtArray12 = new PlainTextArrayWithFilterSingleSelection(list12,'element 11');
// const comboBox2 = new DynamicComboBox({
//     elementClass: 'combo-box-cuie',
//     querySelectorString: '.combo-box-2',
//     listElementClass: 'li-elem',
//     maxSize: 5,
// }, txtArray12);

// const txtArray13 = new PlainTextArrayWithFilter(list12);
// const rxComboBox = new RxComboBox({
//     elementClass: 'combo-box-cuie',
//     querySelectorString: '.combo-box-3',
//     listElementClass: 'li-elem',
//     maxSize: 5,
// }, txtArray13);
// const comboBoxOb = new MyObserver();
// rxComboBox.subscribe(comboBoxOb);
//
// //
// //date picker
// const daysLabels = ['Nie', 'Pon', 'Wto', 'Sro', 'Czw', 'Pio', 'Sob'];
// const monthsLabels = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
//     'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
// const dateExt = new DateExtended(daysLabels, monthsLabels);
// const datePicker = new DatePicker({
//     querySelectorString: '.date-picker-1',
//     elementClass: 'date-picker-cuie',
//     todayClass: 'today-date',
//     selectedDayClass: 'current-date',
//     monthSelectionClass: 'month-selection',
//     monthYearLabelClass: 'month-display',
//     prevBtnClass: 'prev-btn',
//     nextBtnClass: 'next-btn',
//     dayLabelClass: 'cell-header',
//     dayClass: 'cell-day',
//     dayTableClass: 'days-table',
//     datePickerDivClass: 'date-picker',
// }, dateExt);
// const dateExt2 = new DateExtended(daysLabels, monthsLabels);
// const rxDatePicker = new RxDatePicker({
//     querySelectorString: '.date-picker-2',
//     elementClass: 'date-picker-cuie',
//     todayClass: 'today-date',
//     selectedDayClass: 'current-date',
//     monthSelectionClass: 'month-selection',
//     monthYearLabelClass: 'month-display',
//     prevBtnClass: 'prev-btn',
//     nextBtnClass: 'next-btn',
//     dayLabelClass: 'cell-header',
//     dayClass: 'cell-day',
//     dayTableClass: 'days-table',
//     datePickerDivClass: 'date-picker',
// }, dateExt2);
// const dateOb = new MyObserver();
// rxDatePicker.subscribe(dateOb);
// //
// // //list with checkboxes
// const list3 = [
//     'element 1',
//     'other elemment',
//     'another one',
//     'smthg else',
//     'next item',
//     'item i',
//     'other item x',
//     'text value',
// ];
//
// const txtArray33 = new PlainTextArrayWithSelectedValues(list3);
// const txtArray4 = new PlainTextArrayWithSelectedValues(list3, true);
// const txtArray44 = new PlainTextArrayWithSelectedValues(list3, true);
//
// const listWithCheckBoxes = new ListWithCheckboxes({
//     querySelectorString: '.list-w-checkboxes-1',
//     elementClass: 'list-with-checkboxes-cuie',
//     listClass: 'list-elements',
//     checkBoxClass: 'check-box',
//     listElementClass: 'li-elem',
//     selectedElementClass: 'checked',
//     valueClass: 'element',
// }, txtArray33);
//
// const listWithCheckBoxes2 = new ListWithCheckboxes({
//     querySelectorString: '.list-w-checkboxes-2',
//     elementClass: 'list-with-checkboxes-cuie',
//     listClass: 'list-elements',
//     checkBoxClass: 'check-box',
//     listElementClass: 'li-elem',
//     selectedElementClass: 'checked',
//     valueClass: 'element',
// }, txtArray4);
// const rxListWithCheckBoxes3 = new RxListWithCheckBoxes({
//     querySelectorString: '.list-w-checkboxes-3',
//     elementClass: 'list-with-checkboxes-cuie',
//     listClass: 'list-elements',
//     checkBoxClass: 'check-box',
//     listElementClass: 'li-elem',
//     selectedElementClass: 'checked',
//     valueClass: 'element',
// }, txtArray44);
// const listOb = new MyObserver();
// rxListWithCheckBoxes3.subscribe(listOb);
//
// //
// const list4 = [
//     'element 1',
//     'other elemment',
//     'another one',
//     'item i',
//     'other item x',
//     'text value',
// ];
// const iterableArray = new IterableTextArray(list4);
// const iterableNumbers = new IterableNumbers(10, 1, 100, 1);
// const iterableNumbers2 = new IterableNumbers(1, 1, 20, 1);
//
// const spinner = new Spinner({
//     querySelectorString: '.spinner-1',
//     elementClass: 'spinner-cuie',
// }, iterableArray);
//
// const spinner2 = new Spinner({
//     querySelectorString: '.spinner-2',
//     elementClass: 'spinner-cuie',
// }, iterableNumbers);
//
// const spinner3 = new RxSpinner({
//     querySelectorString: '.spinner-3',
//     elementClass: 'spinner-cuie',
// }, iterableNumbers2);
//
// const ob = new MyObserver();
// spinner3.subscribe(ob);
//
// //
// const minMax = new MinMaxValue(50, 0, 100);
// const slider = new Slider({
//     querySelectorString: '.slider-1',
//     elementClass: 'slider-cuie',
//     pointerWidth: 5,
// }, minMax);
//
// const minMax2 = new MinMaxValue(10, 0, 50);
// const rxSlider2 = new RxSlider({
//     querySelectorString: '.slider-2',
//     elementClass: 'slider-cuie',
//     pointerWidth: 5,
// }, minMax2);
// const sliderOb = new MyObserver();
// rxSlider2.subscribe(sliderOb);
//
// const list = [
//     'element 1',
//     'element 2',
//     'element 3',
//     'element 4',
//     'element 5',
// ];
// const txtArray3 = new PlainTextArrayWithSelectedValues(list);
// const directionsRadioBtnsGroup = new DirectionsRadioBtnsGroup({
//     elementClass: 'radio-btn-group-cuie',
//     querySelectorString: '.radio-buttons-gr-1',
//     radioGroupName: 'group-1',
// }, txtArray3);
//
// const list2 = [
//     'element w',
//     'element x',
//     'element y',
//     'element z',
// ];
// const txtArray2 = new PlainTextArrayWithSelectedValues(list2);
//
// const rxdirections = new RxDirectionsRadioBtnsGroup({
//     elementClass: 'radio-btn-group-cuie',
//     querySelectorString: '.radio-buttons-gr-2',
//     radioGroupName: 'group-2',
// }, txtArray2);
// const ob2 = new MyObserver();
// rxdirections.subscribe(ob2);
