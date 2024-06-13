/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  
    //trim leading and trailing spacing
    //replace the multiple scenarion spacing using regex *thanks to gpt idk wht it is
    //split using delimiter " "
    //reverse the word from array
    //join the result array
    let reversed = s.trim("  ", "").replace(/\s+/g, ' ').split(" ").reverse().join(" ")
    
    //return the result
    return reversed
};