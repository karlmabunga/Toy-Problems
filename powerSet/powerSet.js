/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  // create object to hold all combos
  var combos = {};
  // split the string into different letters

  // create recursive function to add to combinations to the object
 var recurse = function(text, options) {
   var sorted = text.split('').sort().join('');
   if (combos[sorted] === undefined) {
     combos[sorted] = true;
    }
   for (var i = 0; i < options.length; i++) {
     recurse(sorted + options[i], options.slice(0, i) + options.slice(i+1))
   }
   }
   recurse('', str)
   return Object.keys(combos)
  };
