class Solution {
  bool containsNearbyDuplicate(List<int> nums, int k) {

    //nums =  [1,2,3,1]
    Map<int, int> lastSeen = {};

    for(int i = 0; i < nums.length; i++){
        //check if the value is exist in the Map
        if(lastSeen.containsKey(nums[i])){
            //check if ots fulfill the req
            int prevIndex = lastSeen[nums[i]]!;
            if((prevIndex - i).abs() <= k){
                return true;
            }
        }
        //if there is no value at Map, add it
        //the key would be the value from nums[i]
        //the value would be the index from nums[i]
        lastSeen[nums[i]] = i;
    }
    return false;
  }
}