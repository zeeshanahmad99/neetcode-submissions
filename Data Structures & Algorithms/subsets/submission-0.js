class Solution {
    dfs(nums, index, set, result) {
        if(index >= nums.length) {
            result.push(set)

            return result
        }

        this.dfs(nums, index + 1, [...set], result)
        this.dfs(nums, index + 1, [nums[index], ...set], result)

        return result
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        return this.dfs(nums, 0, [], [])
    }
}
