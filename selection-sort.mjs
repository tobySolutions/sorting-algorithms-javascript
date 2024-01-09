import {Compare, swap, defaultCompare} from './helper.mjs';
// Selection Sort: Worst case O(n^2)

/*
The basic idea behind the selection sort algorithm is that is finds the minimum value in the data structure, places it in the first position, finds the second minimum value, places it in the second position, and so on.
*/

function selectionSort(arr) {
  const { length } = arr;
  let minIndex;

  for (let i = 0; i < length; i++) {
    minIndex = i;

    for (let j = i; j < length; j++) {
      if (defaultCompare(arr[j], arr[minIndex]) === Compare.LESS_THAN) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }

  return arr;
}

console.log(selectionSort([8, 4, 23, 42, 16, 15]));