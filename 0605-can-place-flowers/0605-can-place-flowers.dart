class Solution {
  bool canPlaceFlowers(List<int> flowerbed, int n) {
    int canBe = 0;

    for(int i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] == 0){
            bool leftEmpty = (i == 0) || (flowerbed[i -1] == 0);
            bool rightEmpty = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);

            if(leftEmpty && rightEmpty){
                flowerbed[i] = 1;
                canBe++;
                i++;
            }
        }

        if(canBe >= n){
            return true;
        }
    }
    return canBe >= n;
  }
}