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
  // edge case
  if (rounds === 0) {
     return [];
  }
  // create result var array
  var result = [];
  // create list of options players can choose from
  var options = ['R', 'P', 'S'];
  // create empty string to add options to push into result
  // utilize callstack to track recursion for us
  function playRounds(plays) => {
   // base case
   if (plays.length === rounds) {
      result.push(plays);
      return;
   }

   // iterate through each play and recursively call function to make decision tree algorithm
     options.forEach(play => {
        playRounds(plays + play)
     })
  }
  // start recursion
  playRounds('');
  // return result
  return result;
};


// rockPaperScissors(3);