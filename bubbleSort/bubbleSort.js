/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


// Don't use JavaScript's built-in sorting function (Array.prototype.sort)
// input - array of numbers || can i assume the elements are all numbers?
// output - array of numbers that go from smallest to largest
// edge case - empty array
// constraints - what is the time complexity of your algorithm? linear? but since there are two for loops i'm thinking quadratic
var bubbleSort = function(array) {
  // edge case for empty array return []
  if (array.length === 0) {
    return [];
  }
  // iterate through the array
  for (var i = 0; i < array.length; i++) {
    // second loop through the array
    for (var j = i+1; j < array.length; j++) {
      // create var for smaller
      var smaller = array[i];
      // create var for larger
      var larger = array[j];
      // check if smaller is bigger than larger
      if (array[i] > array[j]) {
        // create temp var to hold small
        var temp = array[i];
        // assign larger val to small
        array[i] = array[j];
        // assign temp var to larger
        array[j] = temp;
      }
    }
  }
  // return array
  return array;
};

// bubbleSort([50, 23, 45, 43, 12, 35]) //[12, 23, 35, 43, 45, 50]
// bubbleSort([2, 1, 3]); // yields [1, 2, 3]
// bubbleSort([12, 13, 9]) // [9, 12, 13]

