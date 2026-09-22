class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Time: O(n2)
        // Space: O(n)

        nums.sort((a, b) => a - b);
        const cache = new Set();

        const n = nums.length;
        const result = [];

        for (let i = 0; i < n - 2; i++) {
            let left = i + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[left] + nums[right] + nums[i];

                if (sum === 0) {
                    const key = [nums[i], nums[left], nums[right]].sort((a, b) => a - b).join(",");
                    if (!cache.has(key)) {
                        cache.add(key);
                        result.push([nums[i], nums[left], nums[right]]);
                    }
                    right--;
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}

// -4 -1 -1 0 1 2
