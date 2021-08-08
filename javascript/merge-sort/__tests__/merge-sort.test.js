const { mergeSort } = require('../merge-sort.js');

describe('testing merge-sort functionality', () => {
  let arr = [5, 88, 43, 12, 2];

  test('sort an array', () => {
    let result = mergeSort(arr);

    expect(result).toEqual([2, 5, 12, 43, 88]);
  });

});
