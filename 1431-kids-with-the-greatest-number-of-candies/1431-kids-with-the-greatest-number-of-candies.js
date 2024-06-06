/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  //find the greatest number on candies
  const max = Math.max(...candies);
  
  //Apply the map function to check if each child can have at least max candies
  return candies.map(item => item + extraCandies >= max);
};