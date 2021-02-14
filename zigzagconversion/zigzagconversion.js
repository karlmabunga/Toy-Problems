var convert = function(s, numRows) {

  if (s.length < numRows || numRows === 1) {
      return s;
  }

  let rows = [];
  let currRow = 0;
  let reverse = false;
  let result = '';

  for (let i = 0; i < numRows; i++) {
      rows[i] = [];
  }

  for (let i = 0; i < s.length; i++) {
      rows[currRow].push(s[i]);
      reverse === false ? currRow++ : currRow--;
      if (currRow === numRows - 1 || currRow === 0) {
          reverse = !reverse;
      }
  }

  rows.forEach((row) => {
      result += row.join('');
  })

  return result;

};

console.log(convert('PAYPALISHIRING')); // "PAHNAPLSIIGYIR"