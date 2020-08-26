/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// inputs - number of rounds
// outputs - array of string output combinations
// constraints - none
// edge cases -none
var rockPaperScissors = function (rounds) {
  // create result var array
  var result = [];
  // create list of options players can choose from
  var options = ['R', 'P', 'S'];
  // create empty string to add options to push into result
  var combinations = '';
  // iterate through the options
  for (var i = 0; i < options.length; i++) {
     for (var j = 0; j < options.length; j++) {
        for (var k = 0; k < options.length; k++) {
            var sequence = options[i] + options[j] + options[k];
            result.push(sequence);
        }
     }
  }

  // return result
  return result;
};


// rockPaperScissors(3);