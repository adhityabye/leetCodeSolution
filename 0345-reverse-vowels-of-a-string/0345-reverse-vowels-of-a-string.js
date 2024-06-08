/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  
    //helper function to find vowel character
    const isVowel = c => {
    c = c.toLowerCase()
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' 
  } 
  
  //split the string into array then extract the vowel character
  const vowels = s.split('').filter(isVowel)
  
  //initialize array for housing
  const result = []
  
  //iterate through s, each vowel character is replaced using .pop() from vowels
  for (let char of s) {
    if(isVowel(char)) result.push(vowels.pop())
    else result.push(char)
  }
  
  return result.join('')
};