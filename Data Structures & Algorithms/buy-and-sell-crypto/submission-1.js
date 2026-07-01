class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity
        let max = -Infinity
        let profit = 0

        for(let price of prices) {
            if(price < min) {
                min = price
                max = 0
            } else if(price > max) {
                max = price
            }

            profit = Math.max(profit, max - min)
        }

        return profit
    }
}