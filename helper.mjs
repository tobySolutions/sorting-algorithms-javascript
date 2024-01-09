// helper functions
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

export function swap(arr, firstValue, secondValue) {
  let tempValue = arr[firstValue];
  arr[firstValue] = arr[secondValue];
  arr[secondValue] = tempValue;
}

export function defaultCompare(firstValue, secondValue) {
  if (firstValue === secondValue) {
    return 0;
  }

  return firstValue < secondValue ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

