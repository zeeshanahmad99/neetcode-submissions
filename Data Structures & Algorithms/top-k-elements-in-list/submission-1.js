class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const cache = new Map()

        for (let item of nums) {
            cache.set(item, (cache.get(item) ?? 0) + 1)
        }

        const sorted = Array.from(cache.entries()).sort((a, b) => b[1] - a[1])

        return sorted.slice(0, k).map(item => item[0])
    }
}
