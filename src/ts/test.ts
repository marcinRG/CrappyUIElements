import {PlainTextArrayWithFilter} from './models/PlainTextArrayWithFilter';
import {ComboBox} from './UIComponents/ComboBoxes/ComboBox/ComboBox';
import {DynamicComboBox} from './UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
import {DatePicker} from './UIComponents/DatePicker/DatePicker';
import {DateExtended} from './models/DateExtended';
import {ListWithCheckboxes} from './UIComponents/List/ListWithCheckboxes';
import {PlainTextArrayWithSelectedValues} from './models/PlainTextArrayWithSelectedValues';
import {Spinner} from './UIComponents/Spinner/Spinner';
import {IterableTextArray} from './models/IterableTextArray';
import {IterableNumbers} from './models/IterableNumbers';

//comboBox
const list = [
    'element 1',
    'element 2',
    'element 3',
    'element 4',
    'element 5',
    'element 6',
    'element 7',
    'element 8',
    'element 9',
    'element 10',
    'element 11',
];
const txtArray = new PlainTextArrayWithFilter(list);
const comboBox = new ComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-1',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray);

//comboBox with autocomplete
const list2 = [
    'lorem 1',
    'ipsum 2',
    'dolor sit amet',
    'consectetur adipisicing',
    'lement 5',
    'loement 6',
    'element 7',
    'element 8',
    'dlement 9',
    'dlement 10',
    'element 11',
];
const txtArray2 = new PlainTextArrayWithFilter(list2);
const comboBox2 = new DynamicComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-2',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray2);

//date picker
const daysLabels = ['Nie', 'Pon', 'Wto', 'Sro', 'Czw', 'Pio', 'Sob'];
const monthsLabels = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
    'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
const dateExt = new DateExtended(daysLabels, monthsLabels);
const datePicker = new DatePicker({
    querySelectorString: '.date-picker-1',
    elementClass: 'date-picker-cuie',
    todayClass: 'today-date',
    selectedDayClass: 'current-date',
    monthSelectionClass: 'month-selection',
    monthYearLabelClass: 'month-display',
    prevBtnClass: 'prev-btn',
    nextBtnClass: 'next-btn',
    dayLabelClass: 'cell-header',
    dayClass: 'cell-day',
    dayTableClass: 'days-table',
    datePickerDivClass: 'date-picker',
}, dateExt);

//list with checkboxes
const list3 = [
    'element 1',
    'other elemment',
    'another one',
    'smthg else',
    'next item',
    'item i',
    'other item x',
    'text value',
];

const txtArray3 = new PlainTextArrayWithSelectedValues(list3);
const txtArray4 = new PlainTextArrayWithSelectedValues(list3, true);

const listWithCheckBoxes = new ListWithCheckboxes({
    querySelectorString: '.list-w-checkboxes-1',
    elementClass: 'list-with-checkboxes-cuie',
    listClass: 'list-elements',
    checkBoxClass: 'check-box',
    listElementClass: 'li-elem',
    selectedElementClass: 'checked',
    valueClass: 'element',
}, txtArray3);

const listWithCheckBoxes2 = new ListWithCheckboxes({
    querySelectorString: '.list-w-checkboxes-2',
    elementClass: 'list-with-checkboxes-cuie',
    listClass: 'list-elements',
    checkBoxClass: 'check-box',
    listElementClass: 'li-elem',
    selectedElementClass: 'checked',
    valueClass: 'element',
}, txtArray4);

const list4 = [
    'element 1',
    'other elemment',
    'another one',
    'item i',
    'other item x',
    'text value',
];
const iterableArray = new IterableTextArray(list4);
const iterableNumbers = new IterableNumbers(1, 100, 1);

const spinner = new Spinner({
    querySelectorString: '.spinner-1',
    elementClass: 'spinner-cuie',
}, iterableArray);

const spinner2 = new Spinner({
    querySelectorString: '.spinner-2',
    elementClass: 'spinner-cuie',
}, iterableNumbers);
