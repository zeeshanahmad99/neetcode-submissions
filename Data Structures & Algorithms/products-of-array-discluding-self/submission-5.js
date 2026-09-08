class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Time: O(n)
        // Space: O(n)

        const n = nums.length

        const preSum = new Array(n).fill(1)
        const postSum = new Array(n).fill(1)

        let prev = nums[0]

        for(let i=1; i<n; i++) {
            preSum[i] = prev
            prev *= nums[i]
        }

        prev = nums[n - 1]

        for(let i=n - 2; i>=0; i--) {
            postSum[i] = prev
            prev *= nums[i]
        }

        const result = new Array(n).fill(1)

        for(let i=0; i<n; i++) {
            result[i] = preSum[i] * postSum[i]
        }

        return result
    }
}