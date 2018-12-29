import {IColor} from '../../src/Interfaces/Data/Color';
import {ColorArrayWithSingleSelection} from '../../src/Models/ColorArrayWithSingleSelection';
import {ColorComboBox} from '../../src/UIComponents/ComboBoxes/ColorComboBox/ColorComboBox';

const list11: IColor[] = [
    {
        id: '1',
        name: 'blue',
        value: '#1515b6',
    },
    {
        id: '2',
        name: 'white',
        value: '#d3e3ff',
    },
    {
        id: '3',
        name: 'back',
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

const colorArray = new ColorArrayWithSingleSelection({
    colorBoxClass: 'color-box',
    colorTextClass: 'name-txt',
}, list11);

const colorComboBox = new ColorComboBox({
    querySelectorString: '.color-cbox',
    elementClass: 'color-combo-box-cuie',
    maxSize: 4,
}, colorArray);
