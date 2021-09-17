/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let array = [];
    let maxNumber = 0;
    let maxOccurences = 0;
    for(let i = 0; i < 50; i++){
        array[i] = 0;
    }
    for(let i = 0; i <= n; i++) {
        let sum = 0;
        let digit = i;
        while(digit > 0) {
            sum += digit % 10;
            digit = Math.floor(digit / 10);
        }
        console.log(sum);
        array[sum] = array[sum] + 1;
    }
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maxNumber) {
            maxNumber = array[i];
            maxOccurences = 1;
        } else if (array[i] == maxNumber) {
            maxOccurences++;
        }
    } 
    return maxOccurences;
};

console.log(largestGroupsCount(12));