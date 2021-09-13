/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    let isIncreasing = true;
    let isDecreasing = true;

    //Check if its an increasing function
    for(let i = 0; i < input.length; i++) {
        if(i == input.length - 1) {

        } else {
            if(input[i] > input[i+1]) {
                isIncreasing = false;
            }
        }
    }

    //Check wether the array is decreasing
    for(let i = 0; i < input.length; i++ ) {
        if(i == input.length - 1) {

        } else {
            if(input[i] < input[i+1] ){
                isDecreasing = false;
            }
        }
    }
    if(isIncreasing || isDecreasing) {
        return true;
    } else {
        return false;
    }
};

