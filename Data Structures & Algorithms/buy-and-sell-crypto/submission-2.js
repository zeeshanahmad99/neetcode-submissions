class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 0
        let profit = 0

        while(left < prices.length && right < prices.length) {
            profit = Math.max(profit, prices[right] - prices[left])

            if(prices[right] >= prices[left]) {
                right++
            } else {
                left = right
                right = left + 1
            }
        }

        return profit
    }
}
