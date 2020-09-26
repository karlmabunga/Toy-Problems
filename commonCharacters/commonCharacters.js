/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // result var
  var result = '';
  // iterate through the first string
  for (var i = 0; i < string1.length; i++ ) {
    // iterate through the second string
    for (var j = 0; j < string2.length; j++) {
      // if (string1 === string2[j])
      if (string1[i] === string2[j]) {
        // add the letter to the result
        result = result + string1[i];
      }
    }
  }
  // return result var
  return result;
};

