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
var quicksort = function(array) {
  //     if array lenth <= 1
  if (array.length <=1) {
      // return array
      return array;
  }

  // create var for pivot
  var pivot = array.shift();
  // make array for less than
  var lessThan = [];
  // make array for bigger than
  var biggerThan = [];

  // loop through array
  for (var i = 0; i < array.length; i++) {
  // if currentnum is less than pivot
    if (array[i] < pivot) {
    // push to lessthan
    lessThan.push(array[i]);
    } else {
    // otherwise
    // push to bigger than
    biggerThan.push(array[i]);
    }
  }

  //return array with rest less than, pivot, rest bigger than
  return [...quicksort(lessThan), pivot, ...quicksort(biggerThan)]
  }


var test = [1, 3, 2, 6, 4];
quicksort(test) // [1, 2, 3, 4, 6]