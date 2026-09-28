class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0

        for(let i=0; i<prices.length; i++) {
            let j = i+1

            while(j < prices.length) {
                if(prices[j] < prices[i]) {
                    i = j - 1
                    break
                }

                profit = Math.max(profit, prices[j] - prices[i])
                j++
            }
        }

        return profit
    }
}
