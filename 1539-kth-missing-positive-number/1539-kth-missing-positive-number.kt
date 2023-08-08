class Solution {
    fun findKthPositive(arr: IntArray, k: Int): Int {
        var missingCount = 0
        var num = 1
        var index = 0

        while (missingCount < k) {
            
            //check the condition if number was exist in arr
            if (index < arr.size && arr[index] == num) {
                index++ //increase the index
            } else {
                missingCount++ //counting how much the missing number was
            }
            num++ //increase the number
        }

        return num - 1
    }
}