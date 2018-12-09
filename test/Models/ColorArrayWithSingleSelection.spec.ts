import {IColor} from '../../src/Interfaces/Data/Color';
import {ColorArrayWithSingleSelection} from '../../src/Models/ColorArrayWithSingleSelection';

describe('Class ColorArrayWithSingleSelection tests', () => {
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
    it('should exist', () => {
        const colorArray = new ColorArrayWithSingleSelection(list11, blue);
        expect(colorArray).toBeDefined();
        expect(colorArray.isEqual(colorArray.selected, blue)).toBeTruthy();
        expect(colorArray.values.length).toBe(6);
    });
    it('methods should return expected values', () => {
        const colorArray = new ColorArrayWithSingleSelection(list11, blue);
        const filteredArray = colorArray.filteredValues('b', 10);
        expect(filteredArray.length).toBe(2);
        const indexBlue = colorArray.getUniqueID(blue);
        expect(indexBlue).toBe('1');
        const i = colorArray.getIndex(indexBlue);
        expect(i).toBe(0);
    });
});
