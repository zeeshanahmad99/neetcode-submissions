class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = new Map()

        for(let i=0; i<nums.length; i++) {
            const value = nums[i]
            const diff = target - value
            
            if(cache.has(value)) {
                return [cache.get(value), i]
            }

            cache.set(diff, i)
        }

        return []
    }
}
