/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // Your code here.
  var count = 0;
  for (var i = 0; i < mapStr.length; i++) {
    if (mapStr[i] = '0' && mapStr[i - 1] = '.' && mapStr[i - 1] = '.') {
      count++;
    }
  }
  return count;
}


