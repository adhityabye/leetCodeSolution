/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x)

    if(str < 0) return false

    for(let i = 0; i < str.length/2; i++){
        if(str[i] == str[str.length -1 -i]) continue
        else{ return false}
    }
    return true
};