class Solution {
  bool uniqueOccurrences(List<int> arr) {
    Map<int, int> count = {};
    for(int num in arr){
        count[num] = (count[num] ?? 0) + 1;
    }
    
    Set<int> occurrences = count.values.toSet();

    return occurrences.length == count.length;
  }
}