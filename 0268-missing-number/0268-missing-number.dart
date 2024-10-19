class Solution {
  int missingNumber(List<int> nums) {
    int n = nums.length;
    int expect = (n * (n + 1)) ~/ 2;;
    int actual = nums.reduce((a,b) => a + b);
    return expect - actual;
  }
}