class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        
        //use hashmap to store index and value from each occurence, it is also efficient
        val map = HashMap<Char, Int>()

        //for track the longest
        var longest = 0

        //implementation of sliding window
        var start = 0

        for(i in s.indices){

            //this statement is check 2 condition
            //1. if current s[i] already exist in map 
            //2. the current occurence is inside the active slinding window
            // map[s[i]]!! >= start ==> use example on "a b b a" on the second 'a;.
            // last 'a' is found again but it already outside the sliding window
            //since we arrive at second 'b', the start is also change to start from map[s[2]] + 1 = 1 + 1 = 2
            if (map.containsKey(s[i]) && map[s[i]]!! >= start){

                //if fulfilled, we add + 1 the last previous duplicate index
                //its like moving to right by +1 on sliding window
                start = map[s[i]]!! + 1    
            }

            //each all the value and its index
            map[s[i]] = i;

            // i - start + 1 is like count the length of our sliding window
            // i is the end and start is begining
            //try to visualize it 
            longest = maxOf(longest, i - start + 1)
        }

        //return only the number of longest
        return longest
    }
}