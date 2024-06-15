/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  
  //initialize n with equal lentgh of nums
  let n = nums.length;
  
  //create new Array answer with same length as nums with all value in it is 1
  let answer = new Array(n).fill(1);
  
  //calculate products by iterate through nums from left
  let leftProduct = 1;
  for(let i = 0; i < n; i++){
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  
  //calculate products by iterate through nums from left
  let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
  
  return answer;
  
};