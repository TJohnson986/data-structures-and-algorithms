function quickSort(array) {
  // edge case
  if (array.length === 1) {
    return array;
  }

  // pivot in this case is defined as the last element in the array
  const pivot = array[array.length - 1];
  // create a left and right array to sort based on pivot value
  const leftArr = [];
  const rightArr = [];
  // for loop does not include the pivot / last element
  for (let i = 0; i < array.length -1; i++) {
    // does the sorting
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    // if both of the arrays have a value, return an array that consists of the spreaded returned array of the quickSort function of the left array, the pivot value, and the spreaded return of the quickSort function of the right array

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

  } else if (leftArr.length > 0) {
    // if there is only a left array, return the sorted and spread left array and the pivot value

    return [...quickSort(leftArr), pivot];
  } else {

    // the final possibility is only a right array, so return the sorted and spread right array
    return [pivot, ...quickSort(rightArr)];
  }
}

// console.log(quickSort([8,4,23,42,16,15]));

module.exports = {
  quickSort,
};
