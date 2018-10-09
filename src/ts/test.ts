import {PlainTextArray} from './misc/PlainTextArray';
import {ComboBox} from './UIComponents/ComboBoxes/ComboBox/ComboBox';
import {DynamicComboBox} from './UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
import {DatePicker} from './UIComponents/DatePicker/DatePicker';
import {DateExtended} from './UIComponents/DatePicker/DateExtended';

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

const txtArray = new PlainTextArray(list);
const txtArray2 = new PlainTextArray(list2);

//comboBox
const comboBox = new ComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-1',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray);

//comboBox with autocomplete
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
const datePicker = new DatePicker(dateExt, {
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
});
