/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// var evenOccurrence = function(arr) {
//   // create obj to hold each item
//   var storeLetters = {};
//   // iterate through the array
//   for (var i = 0; i < arr.length; i++){
//     // create var for each item
//     var currentItem = arr[i];
//     // if obj at item is undefined
//     if (storeLetters[currentItem] === undefined) {
//       // assign the value to one
//       storeLetters[currentItem] = 1;
//       // otherwise
//     } else {
//       // increment the value
//       storeLetters[currentItem]++;
//     }
//   }
//   // iterate through the storage
//   for (var key in storeLetters) {
//     // if storeLetters value is even
//     if (storeLetters[key] % 2 === 0) {
//       // return key
//       return key;
//     }
//   }
//   // return null if no even occurences
//   return null;
// };
var evenOccurrence = function(arr) {
  // create obj to hold each item
  var counter = {};
  for (i = 0; i < arr.length; i++) {
    counter[arr[i]] = !counter[arr[i]];
  }
  for (i = 0; i < arr.length; i++) {
    if (!counter[arr[i]])
    return arr[i];
  }
  // return null if no even occurences
  return null;
};
// var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
// console.log(onlyEven); //  4
