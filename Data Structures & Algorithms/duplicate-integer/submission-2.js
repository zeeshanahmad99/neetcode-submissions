class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const cache = new Map()

        for(let i=0;i<nums.length;i++) {
            const val = nums[i]

            if(cache.has(val)) return true

            cache.set(val, true)
        }

        return false;
    }
}
