class Solution {
    fun climbStairs(n: Int): Int {
    if (n <= 1) {
        return 1
    }

    var prev1 = 1
    var prev2 = 1
    var distinctWays = 0

    for (i in 2..n) {
        distinctWays = prev1 + prev2
        prev2 = prev1
        prev1 = distinctWays
    }

    return distinctWays
}
}