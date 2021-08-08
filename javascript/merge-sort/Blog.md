# Merge Sort Code Challenge

## Description

In this code challenge, there are essentially a function to merge sorted arrays, and a function to continuously split arrays down into single elements that can be compared, then sorted.

``` javascript
// takes in two sorted arrays
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    // does the sorting, pushing the lesser element into the output array then incrementing the array index
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  // spread creates new arrays, spreading out output, and any remainder of leftArr or rightArr, ensuring that both halves of the array have been processed
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

// this is the recursive function that divides the array in half 
const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }

  // finds the middle index
  const middleIndex = Math.floor(array.length / 2);
  // creates a new array starting at index 0 to the middle index
  const leftArr = array.slice(0, middleIndex);
  // creates a new array starting with the middle index, to the end
  const rightArr = array.slice(middleIndex);

  // return the call of helper function merge()
  // continuously sends array through helper function to split it into smaller and smaller arrays until they are single element. Single element returns, per mergeSort().
  return merge (
    mergeSort(leftArr),
    mergeSort(rightArr)
  );
};

console.log(mergeSort([8, 4, 23, 42, 16, 15]));

```
