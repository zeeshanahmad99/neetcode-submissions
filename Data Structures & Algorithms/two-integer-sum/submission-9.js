class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = new Map()

        for(let i=0; i<nums.length; i++) {
            const val = nums[i]

            if(cache.has(val)) {
                return [cache.get(val), i]
            }

            cache.set(target - val, i)
        }

        return []
    }
}
