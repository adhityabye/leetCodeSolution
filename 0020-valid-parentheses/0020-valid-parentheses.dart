class Solution {
  bool isValid(String s) {
    List<String> stack = [];
    Map<String, String> bracketsMap = {
      '(': ')',
      '{': '}',
      '[': ']',
    };

    for (int i = 0; i < s.length; i++) {
      String char = s[i];

      if (bracketsMap.containsKey(char)) {
        stack.add(char);
      } else {
        if (stack.isEmpty || bracketsMap[stack.removeLast()] != char) {
          return false;
        }
      }
    }

    return stack.isEmpty;
  }

}

