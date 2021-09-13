/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let arrayToReturn = [];
  for(let r = 1; r <= n; r++) {
    let tempArray = [];
    for(let c = 0; c < r; c++) {
      if( c == 0 || c == r - 1) {
        tempArray.push(1);
      } else {
        tempArray.push(arrayToReturn[r-2][c-1] + arrayToReturn[r-2][c]);
      }
    }
    arrayToReturn.push(tempArray);
  }
  return arrayToReturn;
};