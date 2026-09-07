class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, cnt] of Object.entries(count)) {
            freq[cnt].push(parseInt(num));
        }

        const result = [];

        for (let i = freq.length - 1; i > 0; i--) {
            const current = freq[i];

            for (let j = 0; j < current.length; j++) {
                result.push(current[j]);

                if (result.length === k) return result;
            }
        }
    }
}
