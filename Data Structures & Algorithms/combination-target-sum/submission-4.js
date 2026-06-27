class Solution {
    dfs(nums, target, index, set, sum, result, cache) {
        if (sum === target) {
            const key = set.sort((a, b) => a - b).toString()

            if(!cache[key]) result.push(set)
            
            cache[key] = true

            return result;
        }

        if (sum > target || index >= nums.length) {
            return result;
        }

        this.dfs(nums, target, index, [nums[index], ...set], sum + nums[index], result, cache);
        this.dfs(nums, target, index + 1, [...set], sum, result, cache);

        return result;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        return this.dfs(nums, target, 0, [], 0, [], {});
    }
}
