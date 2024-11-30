class Solution {
  List<String> findWords(List<String> words) {
    List<String> row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    List<String> row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    List<String> row3 = ["z", "x", "c", "v", "b", "n", "m"];

    List<String> result = [];
    for(String word in words){

        bool row1Match = true;
        bool row2Match = true;
        bool row3Match = true;

        for(var i = 0; i < word.length; i++){
            String letter = word[i].toLowerCase();

            if(!row1.contains(letter)){
                row1Match = false;
            }
            if(!row2.contains(letter)){
                row2Match = false;
            }
            if(!row3.contains(letter)){
                row3Match = false;
            }
        }

        if( (row1Match && !row2Match && !row3Match) ||
            (!row1Match && row2Match && !row3Match) || 
            (!row1Match && !row2Match && row3Match)){
            result.add(word);
        }
    }
    return result;
  }
}