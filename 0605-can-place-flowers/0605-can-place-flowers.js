/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  
    //iterate through all the flowerbed and make sure precon is fulfilled
    for (let i = 0; i < flowerbed.length && n > 0; i++){
      //check the previous, current, and next flowerbed whtr is empty
      if(!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]){
        //if its empty make current flowerbed is 1
        flowerbed[i] = 1;
        //decrease the number of n
        n--;
      }
    }
  //if n = 0, successfully planted all n
  return n===0;
};