import * as utils from '../../src/Utils/Utilities';
import {PlainTextArray} from '../../src/Models/PlainTextArray';

describe('Utils getSingleValue function tests', () => {
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
    const plainTextArray = new PlainTextArray(list11);

    it('should check if IList element exist', () => {
        expect(plainTextArray).toBeDefined();
    });

    it('should return return the same element', () => {
        const init = 'element 1';
        const result = utils.getSingleValue(plainTextArray, init);
        expect(result).toBe(init);
    });

    it('should return element at position 0 from array', () => {
        const initValue = 'element 1';
        const init = [initValue];
        const result = utils.getSingleValue(plainTextArray, init);
        expect(result).toBe(initValue);
    });

    it('should return null', () => {
        const testVal = 'element x';
        const result = utils.getSingleValue(plainTextArray, testVal);
        expect(result).toBeNull();
    });

    it('should return null', () => {
        const testVal = ['element x'];
        const result = utils.getSingleValue(plainTextArray, testVal);
        expect(result).toBeNull();
    });

    it('should return null', () => {
        const testVal = ['element 1', 'element x'];
        const result = utils.getSingleValue(plainTextArray, testVal);
        expect(result).toBeNull();
    });
});

describe('Utils getMultipleValues function tests', () => {
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
    const plainTextArray = new PlainTextArray(list11);
    it('should return same array of values', () => {
        const init = [
            'element 4',
            'element 5',
            'element 6'];
        const result = utils.getMultipleValues(plainTextArray, init);
        expect(result.length).toBe(3);
        expect(result[0]).toBe(init[0]);
        expect(result[1]).toBe(init[1]);
        expect(result[2]).toBe(init[2]);
    });

    it('should return array of unique values', () => {
        const val = 'element 4';
        const val2 = 'element 5';
        const val3 = 'element 6';
        const x2 = [
            val,
            val2,
            val3,
            val2,
            val,
            val3];
        const result = utils.getMultipleValues(plainTextArray, x2);
        expect(result.length).toBe(3);
        expect(result.indexOf(val)).toBeGreaterThanOrEqual(0);
        expect(result.indexOf(val2)).toBeGreaterThanOrEqual(0);
        expect(result.indexOf(val3)).toBeGreaterThanOrEqual(0);
    });

    it('should return empty array', () => {
        const val = 'element 4';
        const val2 = 'element 5';
        const val3 = 'element 6';
        const val4 = 'element x';
        const x2 = [
            val,
            val2,
            val3,
            val4];
        const index = plainTextArray.values.indexOf(val4);
        expect(index).toBeLessThan(0);
        const result = utils.getMultipleValues(plainTextArray, x2);
        expect(result.length).toBe(0);
    });
});
