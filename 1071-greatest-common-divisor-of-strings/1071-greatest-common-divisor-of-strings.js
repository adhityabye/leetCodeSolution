/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  
  //check fot the concatenation between the string
  //example, if "ABCABC" + "ABC" is false so we can continue to process
  
  if(str1 + str2 != str2 +str1){
    return ""
  }
  
  //calculate the length between for each string
  //"ABCABC" = 6
  //"ABC" = 3
  let i = str1.length;
  let j = str2.length;
  
  //implementation of euclidean algorithm. takes two arguments
  let gcd = function(x, y){
    
    //if the y is equals to 0
    //if y is zero, it means that x is divisible by y without a remainder
    if(!y){
      return x;
    }
    return gcd(y, x%y);
  }
  
  //input for the testcase
  let k = gcd (i, j);

  //returns a substring of str1 from the beginning to the kth character
  return str1.slice(0, k);
  
  
};