import {PlainTextArrayWithMultiSelection} from '../../src/Models/PlainTextArrayWithMultiSelection';

describe('Class PlainTextArrayWithMultiSelection tests',()=>{
    const listTxt = [
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

    it('should exist',()=>{
        const plainTxtMultiSelection = new PlainTextArrayWithMultiSelection(listTxt);
        expect(plainTxtMultiSelection).toBeDefined();
        expect(plainTxtMultiSelection.values.length).toBe(11);
        expect(plainTxtMultiSelection.selected.length).toBe(0);
        expect(plainTxtMultiSelection.isEqual(plainTxtMultiSelection.values[0], 'element 1')).toBeTruthy();
    });

});
