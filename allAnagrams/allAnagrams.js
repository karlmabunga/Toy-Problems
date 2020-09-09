/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  // input - string
  // output - array of all possible strings
  // edge cases - none
  // constraints - time complexity?
  var allAnagrams = function(string) {
    // create result array
    var result = [];
    // create empty string to add all the letters to
    var word = '';
    // loop through the string
    for (var i = 0; i < string.length; i++) {
      // push word to result array
      word += string[i];
    }
        result.push(word)
    // return result array
    return result;
  };

  var anagrams = allAnagrams('abc');
  console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
