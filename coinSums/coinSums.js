/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// var makeChange = function(total) {
//   var change = [1, 2, 5, 10, 50];
//   var possibility = [];
//   var checkChange = function (number, options) {
//    if (number === total) {
//      return possibility[number] = true;
//    } else if (number > total) {
//        return;
//    }

//    for (var i = 0; i < change.length; i++) {
//      number += change[i];
//    }
//   }

//   checkChange(0, [...change])
//   return possibility.length;

// };
var makeChange = function (total, coins) {
  var counter = 0;

  coins.sort();

  (function recurse (index, remainder) {
    var coin = coins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recurse(index-1, remainder);
      remainder -= coin;
    }
  })(coins.length-1, total)
  return counter;
}

makeChange(5, [1,2])