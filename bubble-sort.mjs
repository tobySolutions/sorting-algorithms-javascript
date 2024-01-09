import {Compare, swap, defaultCompare} from './helper.mjs';

// Bubble sort: Best case O(n), Worst case O(n^2)

/*
In short, the bubble sort algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one. This reflects its name since the values tend to move up into the correct order, like bubbles rising to the surface.
*/

function bubbleSort(arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (defaultCompare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 4, 23, 42, 16, 15]));
