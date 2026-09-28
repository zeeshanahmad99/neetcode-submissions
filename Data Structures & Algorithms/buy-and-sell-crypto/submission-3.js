class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0

        for(let i=0; i<prices.length; i++) {
            let sellMax = prices[i]

            for(let j=i+1; j<prices.length; j++) {
                sellMax = Math.max(sellMax, prices[j])
            }

            profit = Math.max(profit, sellMax - prices[i])
        }

        return profit
    }
}
