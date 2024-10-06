class Solution {
  List<int> twoSum(List<int> nums, int target) {
    Map<int, int> numInd = {};
    for(int i = 0; i < nums.length; i++){
        int complement = target - nums[i];
        if(numInd.containsKey(complement)){
            return [numInd[complement]!, i];
        }
        numInd[nums[i]] = i;
    }
    return [];
  }
}