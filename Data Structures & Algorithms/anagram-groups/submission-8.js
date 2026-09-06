class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Time: O(m * nlogn)
        // Space: O(m)

        const cache = new Map()

        for(let str of strs) {
            const count = new Array(26).fill(0)

            for(let char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }

            const key = count.join(',')

            if(!cache.has(key)) {
                cache.set(key, [])
            }

            cache.get(key).push(str)
        }

        return Array.from(cache.values())
    }
}
