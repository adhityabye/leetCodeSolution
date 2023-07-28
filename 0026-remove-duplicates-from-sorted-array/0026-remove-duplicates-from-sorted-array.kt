class Solution {
    fun removeDuplicates(nums: IntArray): Int {
    if (nums.isEmpty()) return 0

    var uniqueCount = 1 // At least the first element is always unique
    var currentIndex = 1 // Start checking for duplicates from the second element

    while (currentIndex < nums.size) {
        if (nums[currentIndex] != nums[currentIndex - 1]) {
            nums[uniqueCount] = nums[currentIndex] // Move unique element to the front of the array
            uniqueCount++
        }
        currentIndex++
    }

    return uniqueCount
    }
}