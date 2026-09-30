class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Time: O(n)
        // Space: O(1)

        const maxSuffix = new Array(prices.length).fill(0)

        for(let i=prices.length - 2; i>=0; i--) {
            maxSuffix[i] = Math.max(maxSuffix[i + 1], prices[i + 1])
        }

        let profit = 0

        for(let i=0; i<prices.length; i++) {
            profit = Math.max(maxSuffix[i] - prices[i], profit)
        }

        return profit
    }
}

// 10 1 5 6 7 1
//  7 7 7 7 1 0

