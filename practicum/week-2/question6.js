/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    const tempArray = input.sort();
    let size = tempArray.length;
    let mid = Math.ceil(size/2);
    if(size % 2 == 1) {
        return tempArray[mid-1];
    } else {
        return (tempArray[mid] + tempArray[mid-1]) / 2
    }
};