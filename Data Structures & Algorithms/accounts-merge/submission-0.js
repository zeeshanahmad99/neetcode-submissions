class Solution {
    dfs(accounts, index, cache, mapping) {
        cache.add(index);

        const account = accounts[index];
        const result = []

        for (let i = 1; i < account.length; i++) {
            const arr = mapping.get(account[i]);

            for (let inner of arr) {
                if (!cache.has(inner)) {
                    result.push(...this.dfs(accounts, inner, cache, mapping))
                }
            }
        }

        return new Set([...result, ...accounts[index].slice(1)]);
    }

    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const map = new Map();

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];

            for (let j = 1; j < account.length; j++) {
                const email = account[j];

                if (!map.has(email)) map.set(email, []);

                map.get(email).push(i);
            }
        }

        const cache = new Set();
        const result = []

        for (let i = 0; i < accounts.length; i++) {
            if (cache.has(i)) continue;

            const combined = this.dfs(accounts, i, cache, map);
            const newAccount = [accounts[i][0], ...Array.from(combined).sort((a, b) => a.localeCompare(b))]
            result.push(newAccount)
        }

        return result
    }
}

// {
//     "neet@gmail.com": [0, 2],
//     "neet_dsa@gmail.com": [0],
//     "alice@gmail.com": [1],
//     "bob@gmail.com": [2],
//     "neetcode@gmail.com": [3]
// }
