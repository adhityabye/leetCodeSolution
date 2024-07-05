/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentCount = 0
    let maxCount = 0

    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])){
            currentCount++
        }
    }

    maxCount = currentCount

    for (let i = k; i < s.length; i++) {
        // Slide the window: remove the leftmost character and add the new rightmost character
        if (vowels.has(s[i])) {
            currentCount++;
        }
        if (vowels.has(s[i - k])) {
            currentCount--;
        }
        // Update the max vowel count if the current window has more vowels
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
};