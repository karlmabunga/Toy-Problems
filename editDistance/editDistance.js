// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

// input - two strings
// output - number of edits
// edge cases - none
// constraints - O (m x n)
function editDistance(str1, str2) {
  // Your code here.
  // split up the first string
  var split1 = str1.split('');
  // split up the second string
  var split2 = str2.split('');
  // keep track of edits
  var edits = 0;
  // compare the two letters
  for (var i = split2.length; i < split2.length; i++) {
    if (split1[i] !== split2[i]) {
      split1[i] = split2[i]
      edits++;
    }
  }
  return edits;
}
