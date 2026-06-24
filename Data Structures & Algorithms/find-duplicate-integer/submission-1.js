class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0; i<nums.length; i++) {
            const val = nums[i]

            const index = Math.abs(val) - 1

            if(nums[index] < 0) return Math.abs(val)

            nums[index] *= -1
            console.log(nums)
        }
    }
}
