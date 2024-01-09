import {Compare, swap, defaultCompare} from './helper.mjs';
// Merge Sort: Best/Worst: O(NLog(N))

/*
The merge sort algorithm is a divide-and-conquer algorithm. In other words, it divides the original array into smaller arrays until each small array has only one position, then it merges the smaller arrays into a bigger one that is sorted.

The implementation here is recursive and consists of two functions, one to divide the arrays into smaller ones and one to perform the sort:
*/

function mergeSort(arr) {
  if (arr.length > 1) {
    const { length } = arr;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, length));
    arr = merge(left, right);
  }
  return arr;
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    result.push(
      defaultCompare(left[leftIndex], right[rightIndex]) === Compare.LESS_THAN
        ? left[leftIndex++]
        : right[rightIndex++],
    );
  }

  return result.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex),
  );
}

console.log(mergeSort([8, 4, 23, 42, 16, 15]));