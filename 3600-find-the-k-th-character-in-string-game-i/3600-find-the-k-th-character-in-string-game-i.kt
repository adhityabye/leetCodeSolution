class Solution {
    fun kthCharacter(k: Int): Char {

        //use mutableListOf to improve efficiency
        val word = mutableListOf('a')

        //iterate as long as word size is not bigger than k
        //it assure that it only iterate until we find Kth char
        //it will grow exponentially if we process overall string for each iteration
        //imagine on k=100, how long and big the string will be
        while(word.size < k){

            //use as temporarily store the result after shifted (overall result)
            val temp = mutableListOf<Char>()

            //iterate each char one by one...not overall list
            for(ch in word){

                //shifting logic that only handle lowercase alphabetical format
                //result variable to store each individual result
                val result = when(ch){
                    in 'a'..'y' -> ch +1
                    'z' -> 'a'
                    else -> ch
                }

                //temp is like overall output
                //while result is indivudal shifted char
                temp.add(result)
                
                //if we find it already fin Kth alphabet break the process
                if(word.size + temp.size >= k) break
            }

            //add the output for each iteration to word
            word.addAll(temp)
        }

        //display the Kth value
        return word[k-1]
    }
}