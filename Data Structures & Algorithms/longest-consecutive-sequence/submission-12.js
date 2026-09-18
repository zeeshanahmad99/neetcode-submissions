class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const cache = new Map()

        for(let i=0; i<nums.length; i++) {
            cache.set(nums[i], i)
        }

        const visited = new Set()
        let maxCount = 0

        for(let i=0; i<nums.length; i++) {
            if(visited.has(i)) continue

            let val = nums[i] + 1
            let count = 1

            while(cache.has(val) && !visited.has(cache.get(val))) {
                count++
                visited.add(cache.get(val))
                val++
            }

            val = nums[i] - 1

            while(cache.has(val) && !visited.has(cache.get(val))) {
                count++
                visited.add(cache.get(val))
                val--
            }

            maxCount = Math.max(maxCount, count)
        }

        return maxCount
    }
}
