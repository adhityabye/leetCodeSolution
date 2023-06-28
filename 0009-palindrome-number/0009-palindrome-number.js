/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // negatif number dan akhiran 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  var reversed = 0;
  while (x > reversed) {
    //reversed digit terakhir dengan mengekstrak digit terakhir
    reversed = reversed * 10 + (x % 10);

    //hapus digit terakhir dari x
    x = Math.floor(x / 10);
  }
  //handle number dengan odd number
  // exclude dari komparasi
  return x === reversed || x === Math.floor(reversed / 10);
};
