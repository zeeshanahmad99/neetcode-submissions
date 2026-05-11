class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = new Map();

        for(let i=0; i<nums.length; i++) {
            const item = nums[i]

            if(cache.has(item)) {
                return [cache.get(item), i]
            }
            
            const diff = target - item
            cache.set(diff, i)
        }
    }
}
