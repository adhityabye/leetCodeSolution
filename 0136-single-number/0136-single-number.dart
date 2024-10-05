class Solution {
  int singleNumber(List<int> nums) {
    //he key property at play here is Self-inverse. For any number x, \U0001d465⊕\U0001d465=0.
    var theONe = 0;
    for(var num in nums){
        theONe ^= num;
    }
    return theONe;
  }
}