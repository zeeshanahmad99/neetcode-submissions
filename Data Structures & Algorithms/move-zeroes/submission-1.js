class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let empty = 0
        let filled = 0

        while(filled < nums.length && empty <= filled) {
            while(nums[empty] !== 0 && empty < nums.length) {
                empty++
            }

            while((nums[filled] === 0 || filled <= empty) && filled < nums.length) {
                filled++
            }

            if(filled >= nums.length || empty >= nums.length) break

            nums[empty] = nums[filled]
            nums[filled] = 0
        }

        return nums
    }
}   
