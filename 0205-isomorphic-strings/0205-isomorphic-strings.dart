class Solution {
  bool isIsomorphic(String s, String t) {
    //if the lenght is different auto retun fale
    if (s.length != t.length) return false;
    
    //create the empty map for both s and t
    Map<String, String> mapST = {};
    Map<String, String> mapTS = {};

    //iterate through s
    for(int i = 0; i < s.length; i++){
        String charS = s[i];
        String charT = t[i];

        //this checker condition for both correspondent s and t
        //ex, foo and bar. until iteration 2 is true and add the key-value pair
        //mapST = {'f': 'b', 'o': 'a'}
        //mapTS = {'b':'f', 'a':'o'}

        //at index 2, this if fulfilled
        //{'o': 'r'}. 'o' is already exist but already have pair value with 'a'.
        if((mapST.containsKey(charS) && mapST[charS] != charT)
            || (mapTS.containsKey(charT) && mapTS[charT] != charS)){
            return false;
        }

        //if not already exist in map, add the kay-value pair.
        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
    
  }
}