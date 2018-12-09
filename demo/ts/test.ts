import {ComboBox} from '../../src/UIComponents/ComboBoxes/ComboBox/ComboBox';
import {DynamicComboBox} from '../../src/UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
import {PlainTextArrayWithFilterSingleSelection} from '../../src/Models/PlainTextArrayWithFilterSingleSelection';
import {PlainTextArrayWithMultiSelection} from '../../src/Models/PlainTextArrayWithMultiSelection';
import {ListWithCheckboxes} from '../../src/UIComponents/List/ListWithCheckboxes';
import {DirectionsRadioBtnsGroup} from '../../src/UIComponents/Misc/DirectionsRadioBtnsGroup';
import {IterableNumbers} from '../../src/Models/IterableNumbers';
import {Spinner} from '../../src/UIComponents/Spinner/Spinner';
import {IterableTextArray} from '../../src/Models/IterableTextArray';
import {MinMaxValue} from '../../src/Models/MinMaxValue';
import {Slider} from '../../src/UIComponents/Slider/Slider';
import {DateExtended} from '../../src/Models/DateExtended';
import {DatePicker} from '../../src/UIComponents/DatePicker/DatePicker';

//comboBox
const list11 = [
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
const txtArray11 = new PlainTextArrayWithFilterSingleSelection(list11, 'element 1');
const comboBox = new ComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-1',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray11);

//comboBox with autocomplete
const list12 = [
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
const txtArray12 = new PlainTextArrayWithFilterSingleSelection(list12,'element 11');
const comboBox2 = new DynamicComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-2',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray12);

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
    showDateOnStart: true,
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
const initValues = [
    'text value',
    'next item',
    'other elemment',
];

//
const txtArray33 = new PlainTextArrayWithMultiSelection(list3, true, initValues);
const txtArray4 = new PlainTextArrayWithMultiSelection(list3, true);
const listWithCheckBoxes = new ListWithCheckboxes({
    querySelectorString: '.list-w-checkboxes-1',
    elementClass: 'list-with-checkboxes-cuie',
    listClass: 'list-elements',
    checkBoxClass: 'check-box',
    listElementClass: 'li-elem',
    selectedElementClass: 'checked',
    valueClass: 'element',
}, txtArray33);
//
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
const iterableNumbers = new IterableNumbers(10, 1, 100, 1);

const spinner = new Spinner({
    querySelectorString: '.spinner-1',
    elementClass: 'spinner-cuie',
}, iterableArray);

const spinner2 = new Spinner({
    querySelectorString: '.spinner-2',
    elementClass: 'spinner-cuie',
}, iterableNumbers);
//

const minMax = new MinMaxValue(50, 0, 100);
const slider = new Slider({
    querySelectorString: '.slider-1',
    elementClass: 'slider-cuie',
    pointerWidth: 5,
}, minMax);

const list = [
    'element 1',
    'element 2',
    'element 3',
    'element 4',
    'element 5',
];
const txtArray3 = new PlainTextArrayWithFilterSingleSelection(list);
const directionsRadioBtnsGroup = new DirectionsRadioBtnsGroup({
    elementClass: 'radio-btn-group-cuie',
    querySelectorString: '.radio-buttons-gr-1',
    radioGroupName: 'group-1',
}, txtArray3);

const list2 = [
    'element w',
    'element x',
    'element y',
    'element z',
];

const txtArray2 = new PlainTextArrayWithFilterSingleSelection(list2, 'element y');
const directionsRadioBtnsGroup2 = new DirectionsRadioBtnsGroup({
    elementClass: 'radio-btn-group-cuie',
    querySelectorString: '.radio-buttons-gr-2',
    radioGroupName: 'group-2',
}, txtArray2);


