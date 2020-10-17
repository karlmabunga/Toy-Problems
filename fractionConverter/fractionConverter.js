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
  // Your code here
  var stringNum = number.toString().split('');
  var hundreths = parseInt(stringNum[2]);
  var ending = number.toString().slice(2);
  var float = parseInt(ending);
  console.log(stringNum.length)
  if (stringNum.length === 4) {
    var numerator = number *  100;
    var denominator = 1 * 100;
  } else if (stringNum.length === 3) {
    var numerator = number *  10;
    var denominator = 1 * 10;
  }

  if (numerator % float === 0 && denominator % float === 0) {
    numerator = numerator / float;
    denominator = denominator / float;
  }
  if (numerator % 10 === 0 && denominator % 10 === 0) {
    numerator = numerator / 10;
    denominator = denominator / 10;
  }
  if (numerator % 9 === 0 && denominator % 9 === 0) {
    numerator = numerator / 9;
    denominator = denominator / 9;
  }
  if (numerator % 7 === 0 && denominator % 7 === 0) {
    numerator = numerator / 7;
    denominator = denominator / 7;
  }
  if (numerator % 5 === 0 && denominator % 5 === 0) {
    numerator = numerator / 5;
    denominator = denominator / 5;
  }
  if (numerator % 3 === 0 && denominator % 3 === 0) {
    numerator = numerator / 3;
    denominator = denominator / 3;
  }
  if (numerator % 2 === 0 && denominator % 2 === 0) {
    numerator = numerator / 2;
    denominator = denominator / 2;
  }

  return `${numerator}/${denominator}`

};