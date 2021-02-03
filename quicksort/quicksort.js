/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

// input - array
// output - array that is sorted
// edge case - if array is empty then return empty array
// constraints - none?
var pivot = function (array, start = 0, end = array.length){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  var pivot = array[start];
  var swapIdx = start;

  for(var i = start + 1; i < array.length; i++){
    if (pivot > array[i]){
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, swapIdx, start);
  return swapIdx;
}


function quicksort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quicksort(arr, left, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;

}


// var test = [1, 3, 2, 6, 4];
// quicksort(test) // [1, 2, 3, 4, 6]