class Solution {
  void merge(List<int> nums1, int m, List<int> nums2, int n) {
    // Last index of nums1's merged section
    int last = m + n - 1;
    // Adjust indexes to be 0-based for actual positions
    m -= 1;
    n -= 1;

    // Merge in reverse order
    while (m >= 0 && n >= 0) {
      if (nums1[m] > nums2[n]) {
        nums1[last] = nums1[m];
        m -= 1;
      } else {
        nums1[last] = nums2[n];
        n -= 1;
      }
      last -= 1; // Decrement the last index after assigning the value
    }

    // If there are remaining elements in nums2, add them 
    //edge case if the least number not already placed in nums1
    while (n >= 0) {
      nums1[last] = nums2[n];
      n -= 1;
      last -= 1; // Properly update `last` for each iteration
    }
  }
}