import {IColor} from '../../src/Interfaces/Data/Color';
import {ColorArrayWithSingleSelection} from '../../src/Models/ColorArrayWithSingleSelection';
import {ColorComboBox} from '../../src/UIComponents/ComboBoxes/ColorComboBox/ColorComboBox';
import {PlainTextArrayWithFilterSingleSelection} from '../../src/Models/PlainTextArrayWithFilterSingleSelection';
import {ComboBox} from '../../src/UIComponents/ComboBoxes/ComboBox/ComboBox';
import {ColorRenderer} from '../../src/Models/ColorRenderer';
import {IdArrayWithSingleSelection} from '../../src/Models/IdArrayWithSingleSelection';

const blue: IColor = {
    id: '1',
    name: 'blue',
    value: '#1515b6',
};

const list11: IColor[] = [
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
const txt = colorRenderer.getText(blue);
console.log(txt);
const colorArrayId = new IdArrayWithSingleSelection<IColor>(list11, colorRenderer, 'name', blue);
const txt2 = colorArrayId.getText(blue);
const colorComboBox2 = new ColorComboBox({
    querySelectorString: '.color-cbox2',
    elementClass: 'color-combo-box-cuie',
    maxSize: 5,
}, colorArrayId);

console.log(txt2);

const colorArray = new ColorArrayWithSingleSelection({
    colorBoxClass: 'color-box',
    colorTextClass: 'name-txt',
}, list11, blue);

const colorComboBox = new ColorComboBox({
    querySelectorString: '.color-cbox',
    elementClass: 'color-combo-box-cuie',
    maxSize: 5,
}, colorArray);

const list12 = [
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
const txtArray11 = new PlainTextArrayWithFilterSingleSelection(list12, 'element 1');
const comboBox = new ComboBox({
    elementClass: 'combo-box-cuie',
    querySelectorString: '.combo-box-1',
    listElementClass: 'li-elem',
    maxSize: 5,
}, txtArray11);
