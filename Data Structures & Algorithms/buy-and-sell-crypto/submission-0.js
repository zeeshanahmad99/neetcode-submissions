class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0]
        let max = 0
        let profit = 0

        for(let i=1; i<prices.length; i++) {
            const currentPrice = prices[i]

            if(currentPrice < min) {
                min = currentPrice
                max = 0
            } else if(currentPrice > max) {
                max = currentPrice

                if(max - min > profit) {
                    profit = max - min
                }
            }
        }

        return profit
    }
}
