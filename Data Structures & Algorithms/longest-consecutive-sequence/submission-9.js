class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Time: O(nlogn)
        // Space: O(1)
        nums.sort((a, b) => a - b);

        let maxCount = 0;
        let count = 0;
        let cur = 0;

        while (cur < nums.length) {
            count++;
            maxCount = Math.max(maxCount, count);

            while (cur < nums.length - 1 && nums[cur] === nums[cur + 1]) {
                cur++;
            }

            if (cur < nums.length - 1 && nums[cur] + 1 !== nums[cur + 1]) {
                count = 0;
            }

            cur++;
        }

        return maxCount;
    }
}
