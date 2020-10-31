/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  board = board || makeBoard(n)
  i = i || 0;
  j = j || 0;
  // base case out of bounds or visited
  if (!(i >= 0 && i < n && j >= 0 && j < n) || board.hasBeenVisited(i,j)) {
    return 0;
  }
  // base case path found
  if (i === n && j === n -1) {
    return 1
  }
  // recursive case: toggle the piece and continue
  board.togglePiece(i, j);
  var result = robotPaths(n, board, i, j+1) + robotPaths(n, board, i, j-1) + robotPaths(n, board, i+1, j) + robotPaths(n, board, i-1, j);

  // return the board to its original state
  board.togglePiece(i,j);
  return result;

};

