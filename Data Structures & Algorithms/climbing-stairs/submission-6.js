class Solution {
    dfs(current, total, cache) {
        if(current === total) return 1
        if(current > total) return 0
        if(cache[current]) return cache[current]

        const single = this.dfs(current + 1, total, cache)
        const twice = this.dfs(current + 2, total, cache)

        const sum = single + twice

        cache[current] = sum

        return single + twice
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.dfs(0, n, {})
    }
}

