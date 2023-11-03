import {describe, expect, test} from '@jest/globals';
import specialReverseArray from "../src";

describe('specialReverseArray', () => {
  test('given an mixed array', () => {
    const inputValue = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8];
    const toBeValue = [8, 'z', '&', 'b', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 'a', 2, '%', 'n'];

    expect(specialReverseArray(inputValue)).toStrictEqual(toBeValue);
  });

  test('given an number array', () => {
    const inputValue = [1, 2, 3, 4, 5];
    const toBeValue = [5, 4, 3, 2, 1];

    expect(specialReverseArray(inputValue)).toStrictEqual(toBeValue);
  });

  test('give an char array', () => {
    const inputValue = ['a', 'b', 'c', 'd', 'e'];
    const toBeValue = ['e', 'd', 'c', 'b', 'a'];

    expect(specialReverseArray(inputValue)).toStrictEqual(toBeValue);
  });

  test('give an non-alphanumeric array', () => {
    const inputValue = ['+', '-', '*', '/'];
    const toBeValue = ['+', '-', '*', '/'];

    expect(specialReverseArray(inputValue)).toStrictEqual(toBeValue);
  });
});
