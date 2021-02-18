// --- Directions
// Write a function that accepts a positive number N.
// The function should build a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       [['#']]
//   pyramid(2)
//       [[' # ']
//       ['###']]
//   pyramid(3)
//       [['  #  ']
//       [' ### ']
//       ['#####']]

function pyramid(n) {
  const result = [];
  const maxPieces = 2 * n  - 1;
  const midpoint = Math.floor(maxPieces / 2);

  for (let row = 0; row < n; row++) {
    let piece = '';

    for (let column = 0; column < maxPieces; column++) {

      if (column - row <= midpoint && column + row >= midpoint) {
        piece = piece + '#';
      } else {
        piece += ' ';
      }
    }
    result.push([piece]);
  }
  return result;
}

console.log(pyramid(3));