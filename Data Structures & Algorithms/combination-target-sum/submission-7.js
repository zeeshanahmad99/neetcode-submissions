class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function dfs(current, index, sum) {
            if (index >= nums.length || sum > target) return;

            if (sum === target) {
                result.push(current);
                return;
            }

            dfs([...current, nums[index]], index, sum + nums[index]);
            dfs([...current], index + 1, sum);
        }

        dfs([], 0, 0);

        return result;
    }
}
