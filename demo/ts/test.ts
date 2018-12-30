import {IColor} from '../../src/Interfaces/Data/Color';
import {PlainTextArrayWithFilterSingleSelection} from '../../src/Models/PlainTextArrayWithFilterSingleSelection';
import {ComboBox} from '../../src/UIComponents/ComboBoxes/ComboBox/ComboBox';
import {ColorRenderer} from '../../src/Models/Renderers/ColorRenderer';
import {IdArrayWithSingleSelection} from '../../src/Models/IdArrayWithSingleSelection';
import {IFont} from '../../src/Interfaces/Data/Font';
import {MultiUseComboBox} from '../../src/UIComponents/ComboBoxes/MultiUseComboBox/MultiUseComboBox';
import {FontRenderer} from '../../src/Models/Renderers/FontRenderer';

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
    maxSize: 5,
}, fontArrayId);

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
