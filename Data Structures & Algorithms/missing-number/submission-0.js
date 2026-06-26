class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const expectedSum = new Array(nums.length)
            .fill(0)
            .reduce((acc, _, index) => index + 1 + acc, 0);

        const sum = nums.reduce((acc, val) => acc + val, 0);

        return expectedSum - sum;
    }
}
