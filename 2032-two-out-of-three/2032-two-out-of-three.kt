class Solution {
    fun twoOutOfThree(nums1: IntArray, nums2: IntArray, nums3: IntArray): List<Int> {
        //converting each of the input integer arrays into sets.
        //A set is a data structure that allows fast membership checking,
        //meaning we can quickly determine if an element is present in the set
        val set1 = nums1.toSet()
        val set2 = nums2.toSet()
        val set3 = nums3.toSet()
        
        //Create an mutable list to store distict value
        val result = mutableSetOf<Int>()
        
        //Iterate through set1 to check value compare to set2 either set3
        for (num in set1) {
            if (num in set2 || num in set3) {
                result.add(num)
            }
        }
        
        //check for duplicate value
        for (num in set2) {
            if (num in set3 && num !in result) {
                result.add(num)
            }
        }

        return result.toList()
    }
}