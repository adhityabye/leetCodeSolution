class Solution {
  bool isHappy(int n) {
      Set<int> exist = Set();
      
      while(n != 1 && !exist.contains(n)){
          exist.add(n);
          n = squareCalculated(n);
      }
    return n == 1;
  }
    int squareCalculated(int num){
        int sum = 0;
        
        while(num > 0){
            int digit = num % 10;
            sum += digit * digit;
            num ~/= 10;
        }
        return sum;
    }
    
}