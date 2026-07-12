/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        const selisih = target - nums[i]
        if(map.has(selisih)){
            return [map.get(selisih), i]
        }
        else{
            map.set(nums[i], i)
        }
    }
};