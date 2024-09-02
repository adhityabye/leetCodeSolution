class Solution {
  List<List<int>> findDifference(List<int> nums1, List<int> nums2) {
    Set<int> set1 = Set.from(nums1);
    Set<int> set2 = Set.from(nums2);

    Set<int> difference1 = set1.difference(set2);
    Set<int> difference2 = set2.difference(set1);

    List<int> list1 = difference1.toList();
    List<int> list2 = difference2.toList();

    List<List<int>> result = [list1, list2];
    return result;
  }
}