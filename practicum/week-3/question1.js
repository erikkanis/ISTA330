/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function (input) {
        
        let max = 0;
        let maxIndex = 0;
        
        let returnVal = true;
        
        for (let i = 0; i < input.length; i++) {
                if (input[i] > max) {
                        max = input[i];
                        maxIndex = i;
                }
        }   
        for (let j = 0; j < input.length; j++) {
                if (input[j] >= (max / 2) && j != maxIndex ) {
                        returnVal = false;
                }
        }
        return returnVal;
};

largestNumberIsAtLeastTwice([1,2,3,50]);