class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = []
        candidates.sort((a, b) => a - b)
        
        function dfs(index, vals, sum) {
            if(sum === target) {
                result.push([...vals])
                return
            }

            for(let i=index; i<candidates.length; i++) {
                if (i > index && candidates[i] === candidates[i - 1]) continue;
                const val = candidates[i]
                const newSum = sum + val
                if (newSum > target) break;
                vals.push(val)
                dfs(i + 1, vals, newSum)
                vals.pop()
            }
        }

        dfs(0, [], 0)

        return result
    }
}