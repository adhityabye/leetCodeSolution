class Solution {
    fun isPalindrome(x: Int): Boolean {
        var reverse = 0

        if (x < 0) {
            return false
        }

        var temp = Math.abs(x)


        while(temp != 0){
            reverse = (reverse * 10) + (temp % 10)
            temp /= 10
        }

        return reverse == Math.abs(x)  
    }
}