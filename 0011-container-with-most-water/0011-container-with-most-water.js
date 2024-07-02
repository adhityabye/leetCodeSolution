/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    //initiate the variable to iterate
    //traverse thru left and right
    //maxWater for container
    let left = 0
    let right = height.length -1
    let maxWater = 0

    while (left < right){
        //calculate the width
        //calculate the height by take the smallest
        //calculate the area
        let width = right - left
        let currentHeight = Math.min(height[left], height[right])
        let area = width * currentHeight

        //assign the area if it larger
        if (area > maxWater){
            maxWater = area
        }
        //increment to the next taller block
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxWater

    
};