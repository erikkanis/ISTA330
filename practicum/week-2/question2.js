
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
     const tempArray = cookies;
     let maxNum = 0;
     let extra = extraCookies;
     for(let i = 0; i < cookies.length; i++) {
             if (cookies[i] > maxNum) {
                     maxNum = cookies[i];
             }
     }
     for(let i = 0; i < tempArray.length; i++) {
             while(tempArray[i] < maxNum && extra > 0) {
                tempArray[i]++;
                extra--;
             }
     }
     for(let i = 0; i < tempArray.length;i++){
             if(tempArray[i] < maxNum) {
                return false;
             }
     }
     return true;
    
 };
