class Solution {
  bool containsDuplicate(List<int> nums) {
    Set<int>go = Set.from(nums);
    return nums.length != go.length ? true : false;
  }
}