class Solution {
    fun maxProfit(prices: IntArray): Int {
        if (prices.isEmpty()) return 0

        //take the first prices
        var minPrice = prices[0]
        var maxProfit = 0

        for (i in 1 until prices.size) {
            val currentPrice = prices[i]
            
            //looking for the lowest prices
            if (currentPrice < minPrice) {
                minPrice = currentPrice
            } 
            
            //if there already lowest prices, catch the profit
            else {
                val currentProfit = currentPrice - minPrice

                //if there exist higher profit, catch it
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit
                }
            }
        }

    return maxProfit
    }
}