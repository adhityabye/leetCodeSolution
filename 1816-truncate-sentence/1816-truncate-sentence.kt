class Solution {
    fun truncateSentence(s: String, k: Int): String {
        //no need to explain :D
        val words = s.split(" ")
        val truncatedWords = words.take(k)
        return truncatedWords.joinToString(" ")
    }
}