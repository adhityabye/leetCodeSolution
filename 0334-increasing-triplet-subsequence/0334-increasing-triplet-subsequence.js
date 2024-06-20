/**
 * @param {number[]} nums
 * @return {boolean}
 */

//we r heavily constrained by O(n) and O(1) so no tree or array or nested loop unless its constant
var increasingTriplet = function(nums) {
  
  //start at Infinity for the two minimum numbers
  let firstNumber = Infinity;
  let secondNumber = Infinity;
  
  
  for (let currentNumber of nums) {
    
    //if at any point in the loop, we find a number that is greater than our two stored numbers,
    //then we automatically have a valid triplet
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
  }
  return false;
};