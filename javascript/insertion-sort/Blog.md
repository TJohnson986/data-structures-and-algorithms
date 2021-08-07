# Insertion Sort Code Challenge

## Description
In this code challenge, there are essentially nested for loops to iterate slowly through an array to rearrange the values in order from least to greatest. This is done by comparing each value, and changing it's index in the array. As it iterates, the current value checks the value of the previous or -1 value. If it is smaller, the values swap places.

``` javascript
function insertionSort(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = i; j > 0; j--) {

      if (arr[j] < arr[j - 1]) {

        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1 ] = temp;
      } else {
        break;
      }

    }
  }

  return arr;
}

```
