import {Compare, swap, defaultCompare} from './helper.mjs';
// Quick Sort: Best/Average: O(N Log N), Worst: O(N^2)

/*
The quick sort is one of the most used sorting algorithm. Similar to the merge sort, the quick sort also uses the divide-and-conquer approach. Let's break the process down into steps to understand it a little better since it's a bit more complex than the previous sorts we've covered:

- Select a value from the array that we will call pivot, generally the value at the middle of the array.

- Perform the partition operation which will result in an array with values lesser than the pivot on the left and greater on the right.

- Repeat the first two steps for each subarray (left and right) until the arrays are completely sorted.
*/

export function quickSort(arr) {
  return quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
  let partitionIndex;

  if (arr.length > 1) {
    partitionIndex = partition(arr, left, right);

    if (left < partitionIndex - 1) {
      quick(arr, left, partitionIndex - 1);
    }

    if (partitionIndex < right) {
      quick(arr, partitionIndex, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((right + left) / 2)];
  let leftIndex = left;
  let rightIndex = right;

  while (leftIndex <= rightIndex) {
    while (defaultCompare(arr[leftIndex], pivot) === Compare.LESS_THAN) {
      leftIndex++;
    }

    while (defaultCompare(arr[rightIndex], pivot) === Compare.BIGGER_THAN) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      swap(arr, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }

  return leftIndex;
}

console.log(quickSort([8, 4, 23, 42, 16, 15]));