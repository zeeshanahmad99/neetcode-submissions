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

        const result = [];

        Object.entries(count).forEach(([key, count]) => {
            result.push([key, count]);

            let i = result.length - 1;

            while (i > 0 && result[i - 1][1] < result[i][1]) {
                const temp = result[i - 1];
                result[i - 1] = result[i];
                result[i] = temp;
                i--
            }

            if (result.length > k) {
                result.pop()
            }
        });

        return result.map(([key, _count]) => key);
    }
}
