/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  
  if(str1 + str2 != str2 +str1){
    return "";
  }
  
  let i = str1.length;
  let j = str2.length;
  
  let gcd = function(x, y){
    if(!y){
      return x;
    }
    return gcd(y, x%y);
  }
  
  let k = gcd (i, j);

  return str1.slice(0, k);
  
  
};