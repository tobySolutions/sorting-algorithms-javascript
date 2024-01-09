import {Compare, swap, defaultCompare} from './helper.mjs';
import {quickSort} from './quick-sort.mjs';
// Bucket Sort: Best/Average: O(N + k), Worst: O(N^2)

/*
The bucket sort algorithm is a distributed sorting algorithm that separates the elements into different buckets, or smaller arrays, and then uses a simpler sorting algorithm good for sorting small arrays, such as insertion sort, to sort each bucket.

Note that the bucket sort works best when the elements can be distributed into buckets evenly. If the elements are largely sparse, then using more buckets is better, and vice versa.
*/

function bucketSort(arr, bucketSize) {
  if (arr.length < 2) {
    return arr;
  }
  // create buckets and distribute the elements
  const buckets = createBuckets(arr, bucketSize);
  // We're using quick sort
  return sortBuckets(buckets);
}

function createBuckets(arr, bucketSize) {
  // determine the bucket count
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  // initialize each bucket (a multidimensional array)
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // distribute elements into buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    if (bucketIndex >= 0 && bucketIndex < buckets.length) {
      buckets[bucketIndex].push(arr[i]);
    }
  }
  return buckets;
}

// quick sort is another good option to use, but, since merge sort is O(nlog(n)), why not that?
/*
keep in mind that the performance characteristics may vary depending on the size and distribution of the input data.
*/
function sortBuckets(buckets) {
  const sortedArr = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      quickSort([...buckets[i]]);
      sortedArr.push(...buckets[i]);
    }
  }
  return sortedArr;
}


console.log(bucketSort([8, 4, 23, 42, 16, 15]));