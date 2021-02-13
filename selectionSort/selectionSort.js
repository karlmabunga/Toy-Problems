// Selection Sort
// Store the first element as the smallest value you've seen so far
// If a smaller number is found, designate that smaller number to a new "minimum" continue until the end of the array
// If the 'minimum' is not the value (index) you initially began with, swap the two values
// Repeat this with the next element until the array is sorted

let selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let smallest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j
      }
    }
    if (i !== smallest) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([ 4, 3, 5, 62, 42, 12, 99])) // [3,4,5,12,42,62,99];

console.log()