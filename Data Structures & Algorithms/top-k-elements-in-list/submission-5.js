class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Time: O(n)
        // Space: O(n)

        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k).map(([key]) => key);
    }
}
