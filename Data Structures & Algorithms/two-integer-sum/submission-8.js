class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = new Map()

        for(let i=0; i<nums.length; i++) {
            const num = nums[i]

            if(cache.has(num)) {
                return [cache.get(num), i]
            }

            cache.set(target - num, i)
        }
    }
}
