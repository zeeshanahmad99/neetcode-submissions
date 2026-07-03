class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const totalSum = new Array(nums.length).fill(0)
                .reduce((acc, _, index) => acc + index + 1, 0);

        const actualSum = nums.reduce((acc, val) => acc + val, 0)

        return totalSum - actualSum
    }
}
