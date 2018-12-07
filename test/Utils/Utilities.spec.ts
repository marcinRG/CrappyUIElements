import * as utils from '../../src/Utils/Utilities';
import {PlainTextArrayWithFilterSingleSelection} from '../../src/Models/PlainTextArrayWithFilterSingleSelection';

describe('Utils function tests', () => {
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
    const init = 'element 1';
    const txtArray11 = new PlainTextArrayWithFilterSingleSelection(list11, init);

    it('should return expected results', () => {
        expect(txtArray11).toBeDefined();
        expect(txtArray11.selected).toBe(init);
    });

    it('should return expected value', ()=>{
        const el = 'element 4';
        expect(utils.findInList(txtArray11,el)).toBe(3);
        const el2= 'elenm';
        expect(utils.findInList(txtArray11,el2)).toBe(-1);
    })
});
