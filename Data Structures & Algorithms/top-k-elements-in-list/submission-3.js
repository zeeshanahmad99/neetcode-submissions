class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const cache = new Map()

        for(let value of nums) {
            if(cache.has(value)) {
                cache.set(value, cache.get(value) + 1)
            } else {
                cache.set(value, 1)
            }
        }

        const result = []

        return Array.from(cache.entries()).sort((a,b) => b[1]-a[1]).slice(0, k).map(([key]) => key )

        cache.forEach((value, key) => {
            if(value >= k) {
                result.push(key)
            }
        })

        return result
    }
}
