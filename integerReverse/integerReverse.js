/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // set up trackers
  let result = 0;
  let place = 10;

  // while number is not 0
  while(number) {
    // make room in result
    result *= 10;
    // add the new digit
    result += (number % place) / (place / 10);
    // subtract old value from given number
    number -= number % place
    // update place for next iteration
    place *= 10

  }
  // return result
  return result
}
