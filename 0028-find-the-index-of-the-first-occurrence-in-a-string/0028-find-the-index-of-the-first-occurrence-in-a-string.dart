class Solution {
  int strStr(String haystack, String needle) {
    //check if there no haystcak
    if(haystack.isEmpty) return 0;
    
    //this iterate through as long as haystack can accomodate needle length, so we can avoid unnecessary iteration
    for(int i = 0; i <= haystack.length - needle.length; i++){
        //if the specified index length from haystack is match to needle, return it's index 
        if(haystack.substring(i, i + needle.length) == needle){
            return i;
        }
    }
      return -1;
  }
}