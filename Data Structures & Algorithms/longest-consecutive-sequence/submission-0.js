class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        nums.sort((a, b) => a - b)

        let longest = 1;
        let count = 1;

        for (let i = 1; i < nums.length; i++) {
            const prev = nums[i - 1]
            const current = nums[i]

            if (prev === current) {
                // ignore
            } else if (prev + 1 === current) {
                count++
            } else {
                longest = count > longest ? count : longest;
                count = 1;
            }
        }

        longest = count > longest ? count : longest;

        return longest;
    }
}







