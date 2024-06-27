/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  //initiate the pointer
    let i = 0
    let j = 0
  
    // loop through the s and t 
    while(i < s.length && j < t.length){
      
      //if current charcter in s is match  next to to s index
      if(s[i] == t[j]){
        i++
      }
      //always to increment the j index
      j++
    }
  
  return i == s.length
};