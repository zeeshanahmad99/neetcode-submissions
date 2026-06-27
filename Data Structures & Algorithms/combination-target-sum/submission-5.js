class Solution {
    dfs(nums, target, index, set, sum, result) {
        if (sum === target) {
            result.push(set)
            return result;
        }

        if (sum > target || index >= nums.length) {
            return result;
        }

        this.dfs(nums, target, index, [nums[index], ...set], sum + nums[index], result);
        this.dfs(nums, target, index + 1, [...set], sum, result);

        return result;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        return this.dfs(nums, target, 0, [], 0, []);
    }
}
