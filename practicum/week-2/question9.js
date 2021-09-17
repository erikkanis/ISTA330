/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    const returnArray = [];
    for(let i = 0; i < shuffleIndices.length; i++) {
        let index = shuffleIndices[i];
        returnArray[index] = input.charAt(i);
    }
    return returnArray.join("");
};

console.log(suffleString('emelwco',[1,5,6,2,0,3,4]))
