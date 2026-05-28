class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a, b) => a - b)

        while(stones.length > 1) {
            const first = stones.pop()
            const second = stones.pop()

            const result = Math.abs(first - second)

            stones.push(result)
            stones.sort((a, b) => a - b)
        }

        return stones[0]
    }
}