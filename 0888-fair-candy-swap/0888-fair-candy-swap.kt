class Solution {
    fun fairCandySwap(aliceSizes: IntArray, bobSizes: IntArray): IntArray {
        //calculate sum of candy for each of them.
        val aliceSum = aliceSizes.sum()
        val bobSum = bobSizes.sum()
        
        //Create a set containing the candy box sizes that Alice has.
        val aliceSet = aliceSizes.toHashSet()
        
        //Iterate through each candy box size that Bob has.
        for (bobCandy in bobSizes) {
            val targetAliceCandy = (aliceSum - bobSum + 2 * bobCandy) / 2
            /*Check if the calculated target candy box size exists in Alice's set. If it does,
            it means that exchanging these two candy boxes will result in both Alice and Bob having
            the same total amount of candy*/
            if (aliceSet.contains(targetAliceCandy)) {
                return intArrayOf(targetAliceCandy, bobCandy)
            }
        }

        throw IllegalArgumentException("No valid solution")
    }
}