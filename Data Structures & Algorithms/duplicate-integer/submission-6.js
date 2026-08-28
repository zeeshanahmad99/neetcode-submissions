class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Time: O(nlogn)
        // Space: O(1)

        nums.sort((a, b) => a - b)

        for(let i=0; i<nums.length - 1; i++) {
            const curr = nums[i]
            const next = nums[i+1]

            if(curr === next) return true
        }

        return false
    }
}
