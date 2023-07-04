/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let j = 0;
    let remain = candies;
    const arr = [];

    for(let i = 0; i < num_people; i++){
        arr[i] = 0;
    }

    //loop buat bagiin candies ke orang
    for(let i = 1; i < candies; i++){
        //kalo jumlah candies kurang, maka semua sisanya bakal dikasih ke current arr[]
        if(i > remain){
            arr[j] += remain;
            break;
        }
        //ini pas ditambahin ke orangnya
        arr[j] +=i;
        j++

        //kalau j udh sama dengan jumlah orang yang ada, iterasi bakal diulangi
        //yang berarti bahwa semua orang udah dapat candies
        if(j === num_people){
            j = 0;
        }

        //buat track sisa candies
        remain -= i;
    }
    return arr;
};