class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = nums[0]
        let count = 1

        for(let i=1; i<nums.length; i++) {
            const val = nums[i]

            if(majority !== val) {
                if(count === 0) {
                    count = 1
                    majority = val
                } else {
                    count--
                }
            } else {
                count++
            }
        }

        return majority
    }
}

