class Solution {
  List<int> twoSum(List<int> nums, int target) {

    //initiate Map buat nyimpen pair key-value dengan Map kosong
    Map<int, int> numId ={};

    //iterate 
    for(int i = 0; i < nums.length; i++){
        //cari pasangan komplemen dari target dan value at index i
        int complement = target - nums[i];
        if(numId.containsKey(complement)){

            //bakalan return pair value sebelumnya dan index sekarang
            //pake null safety '!'
            return [numId[complement]!, i];
        }

        //assign key-value dari index and index-value sekarang
        numId[nums[i]] = i;
    }
    return [];
  }
}