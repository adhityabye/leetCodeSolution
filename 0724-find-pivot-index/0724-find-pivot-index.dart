class Solution {
  int pivotIndex(List<int> nums) {

    int totalSum = nums.reduce((a, b) => a + b); // Calculate total sum of the array
    int leftSum = 0; // Initialize left sum as 0

    for (int i = 0; i < nums.length; i++) {
        // If the left sum equals the right sum (right sum can be derived from totalSum)
        if (leftSum == (totalSum - leftSum - nums[i])) {
        return i; // This is the pivot index
        }
        leftSum += nums[i]; // Update left sum for the next iteration
    }

    return -1; // If no pivot index is found
    }
}