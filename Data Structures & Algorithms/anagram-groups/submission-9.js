class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = new Map()

        for(let str of strs) {
            const count = {}

            for(let char of str) {
                count[char] = (count[char] ?? 0) + 1
            }

            const key = Object.keys(count).sort().map(char => {
                return `${count[char]}${char}`
            }).join(',')

            if(!cache.has(key)) {
                cache.set(key, [])
            }

            cache.get(key).push(str)
        }

        return Array.from(cache.values())
    }
}
