// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.
// dynamic programming
// input - two strings
// output - number of edits
// edge cases - none
// constraints - O (m x n)
function editDistance(str1, str2) {
  // if first string is empty, return length of second
  if (str1.length === 0) {
    return str2.length
  }
  // if second string is empty, return length of first
  if (str2.length === 0) {
    return str1.length
  }
  // create some variablels: matrix, i, j
  var matrix = [];
  var i;
  var j;
  // increment along first column of each row
  for (var i = 0; i <= str1.length; i++) {
    // set value equal to index of row
    matrix[i] = [i];
  }
  // iterate over matrix (i, j)
  for (var i = 1; i <= str2.length; i++) {
    for (var j = 1; j <= str1.length; j++) {
      // if the characters in each location match,
        // set matrix @ i, j to matrix @ i-1, j-1
      if (str2[i - 1] === str1[j - 1]) {
        matrix[i][j] = matrix[i-1][j-1]
        // else
      } else {
        // set matrix @ i, j to minimum of left, right, major diagonal, and add 1
        matrix[i][j] = Math.min(
          matrix[i-1][j-1] + 1,
          matrix[i][j-1] + 1,
          matrix[i-1][j]
        )
      }
      }
  }
  return matrix[str2.length][str1.length];
}
