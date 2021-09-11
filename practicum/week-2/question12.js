/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  const allTheStrings = [];
  for(let i = 0; i < input.length; i++){
    allTheStrings.push(input.slice(i, input.length));
    //for (let j = i + 1; j < input.length + 1; j++) {
      //allTheStrings.push(input.slice(i, j));
    //}
  }
  let count = 0;
  for(let i = 0; i < allTheStrings.length; i++){
    let A = 'a';
    let B = 'b';
    let a = allTheStrings[i].split(A).length-1;
    let b = allTheStrings[i].split(B).length-1;
    if (a==b){
      count++;
    }
  }
  return count;
};
let a = "aaabbbab";
console.log(maxBalanceNumber(a));
