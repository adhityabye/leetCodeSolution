/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let n = nums.length;
    if (n < k) {
        return 0;
    }

    // Compute the sum of the first window of size k
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    // Initialize maxSum to the sum of the first window
    let maxSum = windowSum;

    // Slide the window from left to right across the array
    for (let i = k; i < n; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    // Compute the maximum average
    return maxSum / k;
};