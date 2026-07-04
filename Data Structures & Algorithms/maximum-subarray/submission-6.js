class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0]

        for(let i=0; i<nums.length; i++) {
            let current = 0

            for(let j=i; j<nums.length; j++) {
                current += nums[j]

                max = Math.max(current, max)
            }
        }

        return max
    }
}
