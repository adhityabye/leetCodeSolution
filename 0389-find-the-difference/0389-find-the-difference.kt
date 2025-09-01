class Solution {
    fun findTheDifference(s: String, t: String): Char {
        val sChars = s.toCharArray()
        val tChars = t.toCharArray()

        sChars.sort()
        tChars.sort()

        for (i in sChars.indices) {
            if (sChars[i] != tChars[i]) {
                return tChars[i]
            }
        }
        return tChars.last()
    }
}