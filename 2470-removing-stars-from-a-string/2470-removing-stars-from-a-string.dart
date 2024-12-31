class Solution {
  String removeStars(String s) {

    //since it's tag with stack, we initiate empty list to store value
    var remove = [];

    //iterate through the array
    for(var i = 0; i < s.length; i++){
        //if encounter "*" we need to remove recent string
        //but we need to check if the list is empty first or not
        if(s[i] == "*"){
            if(remove.isNotEmpty){
                remove.removeLast();
            }
        }
        //add the string if its not "*"
        else{
            remove.add(s[i]);
        }
    }
    // {'l','e','e','c','o', 'e'} then we need to join this separate array
    return remove.join('');
  }
}