class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        //chechk if it empty string or its only contain one string
        if(strs.isEmpty()){
            return ""
        }
        //initiate variable and assign the first string for base comparasion to other string  
        val baseStr = strs[0]
        val stringBuilder = StringBuilder()

        //iterate loop for each i in baseStr
        for(i in baseStr.indices){
            val c = baseStr[i]

            //iterate through each character in strs string compare with baseStr[i]
            for(j in 1 until strs.size){
                if(i >= strs[j].length || strs[j][i] != c){
                    return stringBuilder.toString()
                }
            }
            //if c is matc with other character in each string, append c 
            stringBuilder.append(c)
        }
        return stringBuilder.toString()
    }
}