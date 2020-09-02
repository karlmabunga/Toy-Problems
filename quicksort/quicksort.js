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
  // edge case
  if (array.length === 0) {
      return 0
  }

  // assign pivot to be middle of the array
  let middle = Math.floor(array.length/2)
  let pivot = array[middle];

  // base case
  // if array[i] < array[i + 1]
  for (var j = 0; j < array.length; j++) {
    if (array[j] < array[j + 1]) {
    // return array
      return array;
    }
  }


  // create a smaller var
  var smaller = [];
  // create bigger var
  var bigger = [];
  // loop through the array
  for (var i = 0; i < array.length; i++){
      let currentNum = array[i];
    // if current number is smaller than pivot
    if (pivot < currentNum){
    // push current number to smaller array
    bigger.push(currentNum);
    } else {
    // if current number is bigger than pivot
    smaller.push(currentNum);
    // push current number to bigger array
    }
  }
  // combine two array
  var result = smaller.concat(bigger)
  // recursively call quick sort on combined array
  quicksort(result)
};


var test = [1, 3, 2, 6, 4];
quicksort(test) // [1, 2, 3, 4, 6]