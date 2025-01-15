class Solution {
  int mySqrt(int x) {
    if (x == 0 || x == 1) {
        return x;
    }
    int left = 0;
    int right = x;
    while(left <= right){
        int mid = (left + right) ~/ 2;
        if(mid * mid <= x){
            left = mid + 1;
        }else if(mid * mid >= x){
            right = mid - 1;
        }else{
            return mid;
        }
    }
    return right;
  }
}