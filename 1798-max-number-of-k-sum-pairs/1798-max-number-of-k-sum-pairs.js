/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    //// Create a map to store the frequency of each number
    let frequencyMap = new Map();
    let maxOperation = 0

    // Count the frequency of each number in the array
    for(let num of nums){
        if(frequencyMap.has(num)){
            frequencyMap.set(num, frequencyMap.get(num) + 1)
        }else{
            frequencyMap.set(num, 1)
        }
    }

    // // Count the frequency of each number in the array
    for(let num of nums){
        let complementary = k -num

        //Check if the current number and its complement have counts greater than zero
        if(frequencyMap.has(num)&& frequencyMap.has(complementary) && frequencyMap.has(num)> 0 && frequencyMap.has(complementary) > 0){
            //// If the number is the same as its complement (e.g., k = 8 and num = 4), handle the special case
            if(num == complementary){
                let pairs = Math.floor(frequencyMap.get(num)/2)
                maxOperation += pairs
                frequencyMap.set(num, frequencyMap.get(num) - pairs * 2)
            } else{
                // Determine the number of pairs we can form
                let pairs = Math.min(frequencyMap.get(num), frequencyMap.get(complementary))
                maxOperation += pairs
                frequencyMap.set(num, frequencyMap.get(num) - pairs)
                frequencyMap.set(complementary, frequencyMap.get(complementary) - pairs)
            }
        }
    }
    return maxOperation
};