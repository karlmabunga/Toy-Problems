/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {

  let results = [];
  let startRow = 0;
  let endRow = matrix[0].length - 1;
  let startColumn = 0;
  let endColumn = matrix.length - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results.push(matrix[startRow][i]);
    }
    startRow++;

    // right side
    for (let i = startRow; i <= endRow; i++) {
      results.push(matrix[i][endColumn]);
    }
    endColumn--;

    if (startRow <= endRow) {
      // bottom side
      for (let i = endColumn; i >= startColumn; i--) {
        results.push(matrix[endRow][i])
      }
      endRow--;
    }

    if (startColumn <= endColumn) {

      // starting column
      for (let i = endRow; i >= startRow; i--) {
        results.push(matrix[i][startColumn])
      }
      startColumn++;
    }

  }

  return results
};


console.log(
  spiralTraversal([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ])
)
// returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
