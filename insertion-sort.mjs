import {Compare, swap, defaultCompare} from './helper.mjs';
// Insertion Sort: Best: O(N), Worst: O(N^2)

/*
The insertion sort algorithm builds the final sorted array one value at a time. The process looks something like this:

Assume the first element is already sorted.
Compare the first and second elements - should the second value stay in its place or be inserted before the first value?
Next, you can do a similar comparison with the third value - should it be inserted in the first, second, or third position? And so on...
*/

function insertionSort(arr) {
  const { length } = arr;
  let temporaryValue;

  for (let i = 0; i < length; i++) {
    let j = i;
    temporaryValue = arr[i];

    while (
      j > 0 &&
      defaultCompare(arr[j - 1], temporaryValue) === Compare.BIGGER_THAN
    ) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temporaryValue;
  }
  return arr;
}

console.log(insertionSort([8, 4, 23, 42, 16, 15]));