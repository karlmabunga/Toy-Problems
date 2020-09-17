/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  // create high var
  var high = array.length - 1;
  // create low var
  var low = 0;
  while (low <= high) {
    // start at the middle index floor
    let middle = Math.floor((high + low) / 2)
    // check if the middle is the target
    if (array[middle] === target) {
      // if it is then the return arrays index
      return middle;
    } else if (array[middle] > target) {
      // if the target is more than the middle
      high = middle - 1;
    } else if (array[middle] < target) {
      // otherwise slice from the start until the middle
      low = middle + 1;
    }
  }
  // if no more to check then return null
  return null;
};

// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index); // 3
// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null