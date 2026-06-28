class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(nums.length * 2).fill(0)

        for(let i=0; i<nums.length; i++) {
            const val = nums[i]
            ans[i] = val
            ans[i + nums.length] = val
        }

        return ans
    }
}
