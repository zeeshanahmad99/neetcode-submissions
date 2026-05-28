class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        while(stones.length > 1) {
            stones.sort((a, b) => a - b)
            const first = stones.pop()
            const second = stones.pop()

            const result = Math.abs(first - second)

            stones.push(result)
        }

        return stones[0]
    }
}


