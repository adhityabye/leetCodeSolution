/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAlt = 0
    let maxAlt = 0

    for(i = 0; i < gain.length; i++){
        currentAlt += gain[i]
        if(currentAlt > maxAlt){
            maxAlt = currentAlt
        }
    }
    return maxAlt
};