/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  
    //create two array to contains the zero and non-zero
    let zeroesOnly = []
    let allElements = []
    
    //iterate through nums
    for(let i = 0; i < nums.length; i++){
      if(nums[i] == 0){
        zeroesOnly.push(nums[i])
      }else{
        allElements.push(nums[i])
      }
    }
    
    //merge the two array
    let results = allElements.concat(zeroesOnly)
    
    //modify the array to directly manipulate nums
    for(let i = 0; i < nums.length; i++) {
        nums[i] = results[i];
    }
  
  
};