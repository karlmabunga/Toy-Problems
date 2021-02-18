// --- Directions
// Write a function that accepts a positive number N.
// The function should create an array of step shapes
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       [['# ']
//        ['##']]
//   steps(3)
//       [['#  ']
//        ['## ']
//        ['###']]
//   steps(4)
//       [['#   ']
//        ['##  ']
//        ['### ']
//        ['####']]

function steps(n) {
  let result = [];

  for (let row = 0; row < n; row++) {
    let step = '';
    for (let column = 0; column < n; column++) {
      if (row >= column) {
        step += '#';
      } else {
        step += ' ';
      }
    }
    result.push([step])
  }

  return result;
}

// console.log(steps(3));