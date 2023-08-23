/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [];
    let maxlength = 0;
    stack.push(-1); // Push an initial index to act as a starting point

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop(); // Pop the last unmatched '('
            if (stack.length === 0) {
                stack.push(i); // Push the current index as a new starting point
            } else {
                maxlength = Math.max(maxlength, i - stack[stack.length - 1]);
            }
        }
    }
    return maxlength;
};
