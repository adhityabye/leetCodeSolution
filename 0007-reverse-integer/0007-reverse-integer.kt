class Solution {
    fun reverse(x: Int): Int {
    
    var result = 0
    var num = x

    while (num != 0) {
        val pop = num % 10
        if (result > Int.MAX_VALUE / 10 || (result == Int.MAX_VALUE / 10 && pop > 7)) {
            return 0 // Overflow condition
        }
        if (result < Int.MIN_VALUE / 10 || (result == Int.MIN_VALUE / 10 && pop < -8)) {
            return 0 // Overflow condition
        }
        result = result * 10 + pop
        num /= 10
    }

    return result
    }
}