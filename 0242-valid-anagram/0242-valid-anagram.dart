class Solution {
  bool isAnagram(String s, String t) {
    var first = s.split('').toList();
    var second = t.split('').toList();

    first.sort();
    second.sort();

    return first.join() == second.join();
  }
}