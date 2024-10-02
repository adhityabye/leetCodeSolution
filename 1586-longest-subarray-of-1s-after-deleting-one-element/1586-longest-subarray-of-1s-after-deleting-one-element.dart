class Solution {
  int longestSubarray(List<int> nums) {
        int left = 0; // Left pointer for the sliding window
        int zeroCount = 0; // To count the number of zeros in the window
        int maxLength = 0; // To store the maximum length of subarray

        for (int right = 0; right < nums.length; right++) {
            // If the current element is 0, increment the zero count
            if (nums[right] == 0) {
            zeroCount++;
            }

            // If there are more than one 0 in the window, move the left pointer
            while (zeroCount > 1) {
            if (nums[left] == 0) {
                zeroCount--;
            }
            left++;
            }

            // Calculate the length of the current window (subtract 1 because we need to delete one element)
            maxLength = (right - left) > maxLength ? (right - left) : maxLength;
        }

        return maxLength;
        }
}