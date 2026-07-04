class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0]
        let current = 0

        for(let val of nums) {
            if(current < 0) {
                current = 0
            }

            current += val

            max = Math.max(max, current)
        }

        return max
    }
}







