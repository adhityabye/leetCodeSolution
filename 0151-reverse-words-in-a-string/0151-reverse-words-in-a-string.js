/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = s.trim().replace(/\s+/g, ' ').split(" ");
    answer = answer.reverse();
    return answer.join().replaceAll(',',' ')
}