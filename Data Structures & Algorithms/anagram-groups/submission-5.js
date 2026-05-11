class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = new Map()

        for(let str of strs) {
            const count = new Array(26).fill(0)
            
            for(const char of str) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            const key = count.join(",")

            const val = [...(cache.get(key) ?? []), str]
            cache.set(key, val)
        }


        return Array.from(cache.values())
    }
}
