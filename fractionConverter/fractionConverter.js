/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  var denominator = 1;
  if ( number < 0) {
    return '-' toFraction(-num)
  } else {
    while(number % 1 !== 0) {
      number *= 10;
      denominator *= 10;
    }
  }
    var commonDenom = 1;
    for (var i = number; i > 0; i--) {
      if (number % i === 0 && denominator % i === 0) {
        commonDenom = i;
        break;
      }
    }
    return (number / commonDenom) + '/' + (denominator / commonDenom)
};