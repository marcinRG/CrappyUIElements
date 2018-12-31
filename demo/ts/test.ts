import {IColor} from '../../src/Interfaces/Data/Color';
import {PlainTextArrayWithFilterSingleSelection} from '../../src/Models/PlainTextArrayWithFilterSingleSelection';
import {ComboBox} from '../../src/UIComponents/ComboBoxes/ComboBox/ComboBox';
import {ColorRenderer} from '../../src/Models/Renderers/ColorRenderer';
import {IdArrayWithSingleSelection} from '../../src/Models/IdArrayWithSingleSelection';
import {IFont} from '../../src/Interfaces/Data/Font';
import {MultiUseComboBox} from '../../src/UIComponents/ComboBoxes/MultiUseComboBox/MultiUseComboBox';
import {FontRenderer} from '../../src/Models/Renderers/FontRenderer';
import {DynamicComboBox} from '../../src/UIComponents/ComboBoxes/DynamicComboBox/DynamicComboBox';
import {DateExtended} from '../../src/Models/DateExtended';
import {DatePicker} from '../../src/UIComponents/DatePicker/DatePicker';
import {PlainTextArrayWithMultiSelection} from '../../src/Models/PlainTextArrayWithMultiSelection';
import {ListWithCheckboxes} from '../../src/UIComponents/List/ListWithCheckboxes';
import {IterableTextArray} from '../../src/Models/IterableTextArray';
import {IterableNumbers} from '../../src/Models/IterableNumbers';
import {Spinner} from '../../src/UIComponents/Spinner/Spinner';
import {DirectionsRadioBtnsGroup} from '../../src/UIComponents/Misc/DirectionsRadioBtnsGroup';
import {MinMaxValue} from '../../src/Models/MinMaxValue';
import {Slider} from '../../src/UIComponents/Slider/Slider';

const blue: IColor = {
    id: '1',
    name: 'blue',
    value: '#1515b6',
};
const colorsList: IColor[] = [
    blue,
    {
        id: '2',
        name: 'white',
        value: '#d3e3ff',
    },
    {
        id: '3',
        name: 'black',
        value: '#000',
    },
    {
        id: '4',
        name: 'grey',
        value: '#555555',
    },
    {
        id: '5',
        name: 'red',
        value: '#ff2121',
    },
    {
        id: '6',
        name: 'yellow',
        value: '#fffc1b',
    },

];
const colorRenderer = new ColorRenderer('color-box', 'name-txt');
const colorArrayId = new IdArrayWithSingleSelection<IColor>(colorsList, colorRenderer, 'name', blue);

const colorComboBox = new MultiUseComboBox({
    querySelectorString: '.color-cbox',
    elementClass: 'multi-combo-box-cuie',
    containerClass: 'color-container',
    maxSize: 5,
    menuZIndex: 50,
}, colorArrayId);

const timesNR: IFont = {
    id: '1',
    name: 'Times New Roman',
    value: '\'Times New Roman\', Times, serif',
};
const fontsList: IFont[] = [
    timesNR,
    {
        id: '2',
        name: 'Arial',
        value: 'Arial, sans-serif',
    },
    {
        id: '3',
        name: 'Papyrus',
        value: 'Papyrus, fantasy',
    },
    {
        id: '4',
        name: 'Courier New',
        value: '\'Courier New\',monospace',
    },
    {
        id: '5',
        name: 'Cambria',
        value: 'Cambria,serif',
    },
    {
        id: '6',
        name: 'Georgia',
        value: 'Georgia,serif',
    },
    {
        id: '7',
        name: 'Palatino',
        value: 'Palatino,serif',
    },
    {
        id: '8',
        name: 'Verdana',
        value: 'Verdana,sans-serif',
    },
];

const fontRenderer = new FontRenderer('font-box');
const fontArrayId = new IdArrayWithSingleSelection<IFont>(fontsList, fontRenderer, 'name', timesNR);

const fontComboBox = new MultiUseComboBox({
    querySelectorString: '.font-cbox2',
    elementClass: 'multi-combo-box-cuie',
    containerClass: 'font-container',
    maxSize: 4,
    menuZIndex: 40,
}, fontArrayId);

const txtArray = [
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
const txtList = new PlainTextArrayWithFilterSingleSelection(txtArray, 'element 1');
const comboBox = new ComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-1',
    maxSize: 5,
    menuZIndex: 30,
}, txtList);
//comboBox with autocomplete
const txtArray2 = [
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
const txtList2 = new PlainTextArrayWithFilterSingleSelection(txtArray2, 'element 11');
const comboBox2 = new DynamicComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-2',
    maxSize: 5,
    menuZIndex: 20,
}, txtList2);
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
    daysZindex: 10,
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
const txtArray3 = new PlainTextArrayWithMultiSelection(list3, true, initValues);
const txtArray4 = new PlainTextArrayWithMultiSelection(list3);
const listWithCheckBoxes = new ListWithCheckboxes({
    querySelectorString: '.list-w-checkboxes-1',
    elementClass: 'list-with-checkboxes-cuie',
}, txtArray3);
const listWithCheckBoxes2 = new ListWithCheckboxes({
    querySelectorString: '.list-w-checkboxes-2',
    elementClass: 'list-with-checkboxes-cuie',
}, txtArray4);
//spinner
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
const minMax = new MinMaxValue(50, 0, 100);
const slider = new Slider({
    querySelectorString: '.slider-1',
    elementClass: 'slider-cuie',
    pointerWidth: 5,
}, minMax);
//directions radio group
const list5 = [
    'element 1',
    'element 2',
    'element 3',
    'element 4',
    'element 5',
];
const txtArray5 = new PlainTextArrayWithFilterSingleSelection(list5);
const directionsRadioBtnsGroup = new DirectionsRadioBtnsGroup({
    elementClass: 'radio-btn-group-cuie',
    querySelectorString: '.radio-buttons-gr-1',
    radioGroupName: 'group-1',
}, txtArray5);
const list6 = [
    'element w',
    'element x',
    'element y',
    'element z',
];
const txtArray6 = new PlainTextArrayWithFilterSingleSelection(list6, 'element y');
const directionsRadioBtnsGroup2 = new DirectionsRadioBtnsGroup({
    elementClass: 'radio-btn-group-cuie',
    querySelectorString: '.radio-buttons-gr-2',
    radioGroupName: 'group-2',
}, txtArray6);
