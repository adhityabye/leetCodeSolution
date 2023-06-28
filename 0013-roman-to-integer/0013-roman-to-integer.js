/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  let prevValue = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanMap[s[i]];

    // jika nilai sekarang kurang dari sebelumnya, maka dikurangi
    if (currentValue < prevValue) {
      result -= currentValue;
    }
    //kalo ga, yaudin tambahin
    else {
      result += currentValue;
      prevValue = currentValue;
    }
  }
  return result;
};