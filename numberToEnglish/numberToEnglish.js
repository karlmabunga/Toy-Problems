/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  let innerRecurse = (num) => {
    let place;
    let placeValue;
    let toBeRecursed;
    let results = "";
    // check for a match in the toWords object
    if (numbersToWords[num]) {
      results = numbersToWords[num];
    } else if (num < 100) {
      placeValueNum = Math.floor(num / 10) * 10;
      toBeRecursed = num % 10;
      results = numbersToWords[placeValueNum] + '-' + numbersToWords[toBeRecursed];
    } else {
      // if num is less than 100
      if (num < 1000) {
        place = 100;
      } else {
        // set place to 1000
        place = 1000;
        while (place * 1000 <= num) {
          place *= 1000;
        }
      }
      // set currentNumber to Math.floor on num divided by place
      placeValue = Math.floor(num / place);
      // set remaining numbers to modulo place
      toBeRecursed = num % place;
      results = innerRecurse(placeValueNum) + ' ' + numbersToPlace[place];
      var restOfNumber;
      if (restOfNumber !== 'zero') {
        results += ' ' + restOfNumber
      }
    }
  }
  // return my value as english words
  return results;
};
