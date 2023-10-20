class Solution {

  fun lengthOfLastWord(s: String): Int {
    
    val words = s.split(" ").filter { it.isNotEmpty() }
    
    if (words.isEmpty()) return 0

    val lastWord = words.last()
    return lastWord.length 
  }

}