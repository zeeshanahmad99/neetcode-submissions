class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let left = 0;
        let right = nums.length - 1;
        let i = nums.length - 1
        const result = [];

        while (left <= right) {
            const leftVal = Math.abs(nums[left]);
            const rightVal = Math.abs(nums[right]);

            if (rightVal > leftVal) {
                result[i] = rightVal * rightVal
                right--
            } else {
                result[i] = leftVal * leftVal
                left++;
            }

            i--
        }

        return result
    }
}
