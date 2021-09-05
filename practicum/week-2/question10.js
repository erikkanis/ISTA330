/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let charArray = [];
    let number = n;
    let string = number.toString();
    charArray = string.split('');
    let max = charArray[0];
    let min = charArray[0];
    for(let i = 0; i < charArray.length; i++) {
        if(charArray[i] > max){
            max = charArray[i];
        }
        if(charArray[i] < min) {
            min = charArray[i];
        }
    }
    return max - min;
};
