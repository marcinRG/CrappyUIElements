import {PlainTextArray} from './misc/PlainTextArray';
import {ComboBox} from './UIComponents/ComboBoxes/ComboBox/ComboBox';

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
    'element 5',
    'element 6',
    'element 7',
    'element 8',
    'element 9',
    'element 10',
    'element 11',
];

// const datePicker = new DatePicker();
const txtArray = new PlainTextArray(list);
const txtArray2 = new PlainTextArray(list2);

const comboBox = new ComboBox({
    querySelectorString: '#combo-box-1',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray);
