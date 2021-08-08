const { quickSort } = require('../quick-sort.js');

describe('testing quick-sort functionality', () => {
  let arr = [5, 88, 43, 12, 2];

  test('quick sort an array', () => {
    let result = quickSort(arr);

    expect(result).toEqual([2, 5, 12, 43, 88]);
  });

});
