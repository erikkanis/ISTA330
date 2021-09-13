
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     let currentMax = Number.MIN_VALUE;
     let currentSubTotal = 0;

     for(let i = 0; i < input.length; i++) {
             currentSubTotal += input[i];
             if(currentMax < currentSubTotal) {
                     currentMax = currentSubTotal;
             }
             if(currentSubTotal < 0) {
                     currentSubTotal = 0;
             }
     }
     return currentMax;
    
 };
